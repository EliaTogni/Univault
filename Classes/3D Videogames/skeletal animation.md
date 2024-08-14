# Introduzione
Le animazioni cinematiche sono semplici da implementare ma diventano problematiche nel caso di animazioni per oggetti complessi. Infatti è necessario avere una mesh diversa per ogni parte mobile dell'oggetto, compito relativamente poco dispendioso nel caso di oggetti semplici ma non applicabile per esempio a un oggetto umanoide (composto da 25-60 "ossa") perché risulta complesso da:
- *renderizzare* -> una call per ogni mesh)
- *gestire* -> troppi asset e file
- *creare* -> disegnare una caviglia credibile è più complesso che disegnare una gamba credibile
- *rendere credibile* -> ogni parte è perfettamente rigida (va bene solo per robot) e nettamente separata dalle altre

Di conseguenza l'idea per risolvere questi problemi è di usare una sola mesh deformabile dove ogni vertice ha un attributo che indica a che "osso" è collegato (*skinned*).

Inoltre i modelli e le animazioni risultano in questo modo indipendenti tra loro perché per ogni modello posso usare diverse animazioni e posso applicare una stessa animazione a più modelli (mi basta avere 500 modelli + 500 animazioni in memoria invece che $500\times500$ asset )

>[!Warning]
>È stato usato il termine "ossa" tra virgolette perché è importante sottolineare che le ossa di un modello non sono le ossa nel senso biologico del termine.


# Rigging
Con il termine rigging si intende la definizione dello scheletro all'interno della mesh. Questo processo definisce un albero di ossa in cui lo spazio dell'osso radice corrisponde all'object space dell'intero modello.
Ogni osso è un frame vettoriale usato per esprimere porzioni del modello animato e per uno scheletro di un umanoide ne vengono definiti dai 25 (tipicamente) a 40 (medio-alto realismo) fino a qualche centinaia (per un'animazione più realistica).

Per definire una posa per ogni osso viene memorizzata la trasformazione locale (spesso solo la rotazione se le ossa sono di lunghezza fissa) per passare dallo spazio vettoriale dell'osso in considerazione a quello dell'osso genitore all'interno dell'albero.
Una posa di particolare importanza è quella di riposo o *T-pose* (in alternativa A-pose se il modello ha le braccia basse -> a forma di A) in quanto è la forma base sulla quale vengono poi definite le altre. Infatti per passare a una posa desiderata bisogna per ogni osso scendere l'albero della T-pose a partire dal root node fino al nodo corrispondente all'osso per ottenere la trasformazione inversa e risalire l'albero della posa desiderata applicando le trasformazioni. Il risultato è la trasformazione finale dell'osso.
#TODO mettere immagine
$$pose = P_1P_3(R_1R_3)^{-1}$$

Questo procedimento viene solitamente eseguito in fase preprocessing quando la posa viene caricata nella GPU, dove viene memorizzata come un array di trasformazioni *finali*.
In RAM il costo finale è dato da $n\_keyframe\times n\_bones \times transform\_size$ 
# Skinning
Con il termine rigging si intende il processo di definizione dei collegamenti tra i vertici e il corrispondente osso. Un vertice può essere connesso a più ossa (al massimo $N_{max}$) e la trasformazione applicata sarà un'interpolazione pesata (in base all'appartenenza) delle trasformazioni relative alle ossa a cui è connesso.

Una mesh skinned viene memorizzata come una normale mesh ma con $N_{max}$ argomenti per ogni vertice che indicano l'indice delle ossa a cui il vertice è collegato e altrettanti $N_{max}$ argomenti che indicano il peso del collegamento.
Il valore $N_{max}$ è un bound hard-wired perchè si comporta meglio con le GPU, che non essendo buone a eseguire controlli quindi usando sempre lo stesso numero di trasformazioni da interpolare queste possono essere parallelizzate in modo semplice e aumentare le prestazioni.

Le trasformazioni possono essere memorizzate come una matrice 4x4 o come un quaternione doppio. A seconda dei casi abbiamo:

| -                        | tipo di dato in memoria | come avviene l'interpolazione      |
| ------------------------ | ----------------------- | ---------------------------------- |
| linear blend skinning    | matrice 4x4             | interpolazione lineare tra matrici |
| dual quaternion skinning | quaternione doppio      | interpolaizone di quaternioni doppi                                   |
## Linear Blend skinning
La posizione finale di un vertice ($p_P$) è data dall'interpolazione lineare di ogni matrice per osso collegato al vertice applicata al vertice originale ($p_R$)
$$p_P= \Biggl(\sum_{i=0}^{N_{max}-1}w_i T[b_i]\Biggl)(p_R) = \sum_{i=0}^{N_{max}-1}w_i( T[b_i](p_R))$$
## Dual Quaternion skinning
La posizione finale di un vertice (p_P) è data dall'interpolazione pesata di un quaternione doppio applicata al vertice originale
$$p_P= (mix(w_0,T[b_0],...))(p_R)$$
Questa rappresentazione ha il vantaggio di essere di qualità più alta e che permette di interpolare meglio a costo di un maggior utilizzo della GPU (50% operazioni in più rispetto al linear blend)
# Animation
Le skeletal animation hanno il vantaggio di essere facilmente interpolate (interpolando le trasformazioni locali delle due pose): l'interpolazione è molto espressiva e frame molto diversi possono essere interpolati con risultati molto buoni, questo permette di avere key-frame molto distanziati (per esempio per un ciclo di camminata decente bastano anche solo 2 key-frame).

Su disco le animazioni vengono salvate come una tabella con una colonna per key-frame e una riga per ogni osso più una riga (opzionale se i key-frame sono equidistanti) che indica il tempo del key-frame. A volte per risparmiare spazio vengono memorizzate solamente le trasformazioni locali necessarie e quelle mancanti vengono prodotte interpolando la posa precedente e quella successiva (un osso che subisce cambiamenti poco significativi per esempio non avrà bisogno di tante trasformazioni) #TODO immagine.
Inoltre per compattezza a volte più animazioni possono essere salvate nello stesso file semplicemente concatenando le tabelle.

## Composizione di animazioni
Un altro risultato della facilità con cui le animazioni di questo tipo possono essere interpolate è che risulta possibile unire due diverse animazioni (se condividono lo stesso scheletro). Per farlo basta sostituire un ramo dell'albero di un'animazione con il corrispondente ramo dell'altra (per esempio di una manteniamo il movimento del corpo e dell'altra il movimento delle gambe), l'osso usato come congiunzione viene invece interpolato. Questo è molto utile quanto per esempio il personaggio attacca mentre è in corsa e permette di non avere un'animazione diversa per ogni possibile combinazione di animazioni si possa presentare -> risparmio in memoria. Per decidere quale parte di un'animazione viene sovrascritta si ha una maschera di booleani per ogni osso.

## Transizione tra animazioni
Siccome le animazioni sono spesso triggerate da avvenimenti esterni questi non avvengano sempre nello stesso punto dell'attuale animazione (un esempio può essere il passaggio tra una animazione di camminata e quella di corsa alla pressione di un pulsante), questo può provocare scatti tra un'animazione e un'altra. Per risolvere questo problema si può ricorrere come al solito all'interpolazione tra animazioni: ogni frame che viene generato è un'interpolazione pesata secondo una qualche transition function tra la posizione della prima animazione e quella della seconda.
#TODO aggiungere immagine

## Inverse kinematics
Fino ad ora ci siamo concentrati sul problema: "date una serie di trasformazioni locali dove va a finire questo osso?" ma esistono casi in cui siamo interessati a risolvere il problema opposto, ovvero: "vogliamo che un osso si trovi in una determinata posizione, che trasformazioni sono necessarie?". 
Alcune di queste situazioni sono per esempio:
- aiutare l'animatore in fase di pre-processing
- trovare il movimento che fa aderire i piedi al terreno durante la camminata
- se il personaggio ha una spada a due mani voglio mantenere le due mani nello stesso punto
- trovare il movimento che permette all'animazione di attacco di raggiungere il bersaglio

Però le inverse kinematics sono più difficili da risolvere e a volte esistono più soluzioni, fortunatamente nei giochi spesso i problemi sono semplici (solamente un paio di ossa) e si può disambiguare la scelta di una soluzione invece che un'altra in base a constraint (per esempio minimizzare la distanza da un punto o *attractor*)

# Produzione
Le skeletall animation possono essere prodotte in vari modi:
- tramite simulazioni fisiche processate precedentemente (*baked*) e a volte manualmente editate per dare il giusto effetto
- tramite simulazioni realtime tipicamente per personaggi morti/svenuti (*rag-dolling*)
- a volte le simulazioni vengono usate solo per una parte del personaggio (ossa secondarie) come i capelli (hair bone)
- manualmente tramite *keyframe editing* usando un *rig* -> non solo lo scheletro ma un set di constraint e una gui con controlli per inverse kinematics, controllo della direzione dello sguardo, blend shape
- *motion capture* -> costoso perchè richiede un setup complesso (tuta, camera, uno stuio), attori/atleti e postprocessing da parte degli artisti (pulizia e estrazione keyframe)