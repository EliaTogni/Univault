---
"Titolo:": An Introduction to Convolutional Neural Networks
Sottotitolo: 
"Autore:": Keiron O’Shea, Ryan Nash
"Casa Editrice:": 
"Anno:": "2017"
"DOI:": 10.48550/arXiv.1511.08458
"Link:": https://doi.org/10.48550/arXiv.1511.08458
---
# Abstract
L'ambito del machine learning ha preso una piega drammatica negli ultimi tempi, con l'insorgere delle Artificial Neural Network (ANN). Questi modelli computazionali ispirati dalla biologia sono in grado di superare di gran lunga le performance delle precedenti forme di intelligenza artificiale nelle comuni task di machine learning. Una delle forme più impressionanti delle architetture ANN è
quella delle Convolutional Neural Network (CNN). Le CNN sono usate per risolvere complesse task di pattern recognition basate su immagini e, con la loro architettura precisa nonostante la sua semplicità, offrono un metodo semplificato per approcciarsi alle ANN.<br />
Questo documento fornisce una breve introduzione alle CNN, discutendo articoli pubblicati di recente e tecniche di recente sviluppo.

----------------------------------------------------------------

# Articolo
## Introduction
Le Artificial Neural Networks sono sistemi di processing fortemente ispirati al modo in cui il sistema nervoso opera. Le ANN sono principalmente composte da un alto numero di nodi computazionali interconnessi (neuroni), il cui lavoro si intreccia in un fashion distribuito per apprendere collettivamente dagli input, al fine di ottimizzare l'output finale.

La struttura base di una ANN può essere modellata come mostrato nell'immagine sottostante. L'input, tipicamente nella forma di un vettore multidimensionale, viene dato in pasto all'input layer il quale lo distribuirà agli hidden layer. Quest'ultimi prenderanno decisioni basate sui layer precedenti e valuteranno come un cambiamento stocastico al loro interno danneggi o migliori l'output finale, e questo è chiamato il processo di apprendimento. Avere più hidden layer impilati l'uno sull'altro è comunemente chiamato [[Intelligenza Artificiale#Deep Learning|deep learning]]

Nell'immagine sottostante è possibile osservare una semplice feedforward neural network a tre layer, composta da un input layer, un hidden layer e un output layer. Questa struttura è la base per innumerevoli architetture ANN, incluse feedforward NN, Restricted Boltzmann Machines e recurrent NN.

immagine

I due paradigmi di learning fondamentali nelle task di image processing sono il learning supervisionato e non supervisionato. Il supervised learning è l'apprendimento attraverso input pre-etichettati, i quali agiscono come target. Per ogni esempio di traning, ci sarà un insieme di valori in input (vettori) e uno o più valori di output associati. L'obiettivo di questo tipo di allenamento è di ridurre l'errore di classificazione complessivo del modello. 

L'unsupervised learning differisce nel fatto che il training set non include alcuna label. Il successo dipende dalla capacità del network di ridurre o aumentare una funzione di costo associata. Tuttavia, è importante tenere a mente che le task di pattern recognition più incentrate sulle immagini tipicamente sfruttano la classificazione usando supervised learning.

Le Convolutional Neural Network (CNN) sono analoghe alle tradizionali ANN nel senso che sono composte da neuroni che si auto-regolano tramite learning. Ogni neurone riceverà un input e performerà un'operazione (come il prodotto scalare seguito da una funzione non lineare). Dai vettori di immagini dati in pasto come input all'etichetta di classe coem score finale, la rete nella sua interezza esprimerà comunque una singola funzione di score (il peso). L'ultimo layer conterrà delle funzioni di loss associate con le classi.

L'unica differenza notabile tra le CNN e le ANN tradizionali è che le CNN sono principalmente utilizzate nel campo del pattern recognition in immagini. Questo permette di codificare feature specifiche delle immagini nell'architettura, rendendo la rete più adatta alle task image-focused e, di conseguenza, riducendo il numero di parametri richiesti per impostare il modello.

Una delle più importanti limitazioni delle tradizionali ANN è il fatto che esse tendono a faticare con la complessità computazionale richiesta per processare dati sotto forma di immagini.<br />
Comuni set di dati di riferimento per il machine learning, come il database MNIST di cifre scritte a mano, sono adatti per la maggior parte delle forme di reti neurali artificiali (ANN), grazie alla sua relativamente ridotta dimensionalità delle immagini di soli $28 \times 28$. Con questo set di dati, un singolo neurone nel primo strato nascosto conterrà $784$ pesi ($28 \times 28 \times 1$, considerando che MNIST è normalizzato solo per valori in bianco e nero), il che è gestibile per la maggior parte delle forme di reti neurali artificiali (ANN).

Se si considera un input di immagine a colori più sostanziale di dimensioni $64 \times 64$, il numero di pesi su un singolo neurone del primo strato aumenta notevolmente a $12.288$. Si tenga anche presente che, per gestire questa scala di input, la rete dovrà essere molto più grande di quella utilizzata per classificare cifre MNIST normalizzate a colori. In questo modo, si comprenderanno gli svantaggi nell'uso di modelli di questo tipo.

### Overfitting
Perchè questo è importante? Certamente si potrebbe aumentare il numero di hidden layer nella rete e, anche, incrementare il numero di neuroni in ciascuno dei layer. Questo però non viene fatto principalmente per due motivi.<br />
Il primo motivo è il non avere illimitata potenza computazionale e tempo per allenare queste enormi ANN mentre il secondo è il voler annullare o ridurre gli effetti dell'overfitting. La principale ragione dietro al voler ridurre la complessità delle ANN è proprio questa: minore il numero di parametri richiesti per l'allenamento, minore la probabilità che la rete faccia overfitting.

----------------------------------------------------------------

## CNN architecture
Come osservato precedentemente, le CNN si concentrano principalmente sul fatto che l'input sarà composto da immagini. Questo permette di organizzare l'architettura in modo tale da far sì che possa gestire in maniera ottimale questo tipo specifico di dati. 

Una delle differenze chiave è che i neuroni che compongono gli strati all'interno della CNN sono costituiti da neuroni organizzati in tre dimensioni, la dimensionalità spaziale dell'input (altezza e larghezza) e la profondità. la profondità non si riferisce al numero totale di layer nella ANN ma alla terza dimensione del volume di attivazione. A differenza delle ANN standard, i neuroni all'interno di uno specifico strato si connetteranno solo a una piccola regione dello strato precedente.

Nella pratica, ciò significherebbe che per l'esempio fornito in precedenza, l'input 'volume' avrà una dimensionalità di $64 \times 64 \times 3$ (altezza, larghezza e profondità), portando ad uno strato di output finale composto da una dimensionalità di $1 \times 1 \times n$ (dove n rappresenta il possibile numero di classi), poiché avremmo condensato l'intera dimensionalità dell'input in un volume più piccolo di punteggi di classe distribuiti lungo la dimensione della profondità.
### Overall architecture
Le CNN sono composte da tre tipi di layer: i layer convoluzionali, i layer di pooling e i layer fully-connected. Quando questi layer sono impilati, si va a formare una architettura CNN, visibile nell'immagine sottostante in una sua variante semplificata.

immagine

La funzionalità base della CNN nell'esempio soprastante può esere suddivisa in quattro aree chiave:
1) come nelle altre forme di ANN, l'input layer conterrà i valori dei pixel dell'immagine;
2) il layer convoluzionale determinerà l'output dei neuroni i quali sono connessi a regioni locali dell'input attraverso il calcolo del prodotto scalare tra i loro pesi e la regione connessa al volume di input. L'unità lineare rettificata (comunemente abbreviata come ReLu) mira ad applicare una funzione di attivazione 'elementwise' come la sigmoide all'output dell'attivazione prodotta dal layer precedente;
3) il pooling layer farà semplicemente downsampling lungo la dimensionalità spaziale dell'input dato, riducendo ulteriormente il numero di parametri all'interno di quella attivazione;
4) i layer fully-connected compieranno le stesse azioni delle ANN standard e tenteranno di produrre score di classe dalle attivazioni, per utlizzarli per la classificazione.

Attraverso questo semplice metodo di trasformazione, le CNN sono in grado di trasformare l'input originale layer by layer utilizzando tecniche convoluzionali e downsampling al fine di produrre score di classe per classificazione e regressione.

Tuttavia, è importante segnalare che il comprendere complessivamente l'architettura non è sufficiente. La creazione e ottimizzazione di questi modelli necessita di tempo e può essere disorientante.

----------------------------------------------------------------

### Convolutional layer
Come il nome suggerisce, il layer convoluzionale svolge un ruolo fondamentale in come operano le CNN. I parametri dei layer si concentrano sull'utilizzo di kernel apprendibili. Questi kernerl sono tipicamente piccoli in termini di dimensionalità spaziale ma si diffondono lungo la totalità della profondità dell'input. Quando i dati raggiungono un convolutional layer, il layer convolve ogni filtro lungo la dimensionalità spaziale dell'input per produrre una mappa di attivazione $2D$.

Nell'immagine sottostante, è possibile osservare le attivazioni prese dal primo strato convoluzionale di una rete neurale convoluzionale profonda e semplificata, dopo l'addestramento sul database MNIST di cifre scritte a mano. Se si guarda attentamente, è possibile notare che la rete ha efficacemente identificato caratteristiche uniche associate a specifici numeri.

immagine

Mentre si scorre attraverso l'input, viene calcolato il prodotto scalare per ogni valore in quel kernel. Nella figura sottostante, la rete apprende i kernel che si attivano quando vedono una feature specifica in una data posizione spaziale nell'input. Queste sono comunemente conosciute come attivazioni.

immagine

Questa è una rappresentazione visiva di un convolutional layer. L'elemento centrale del kernel è posizionato sopra il vettore di input, il quale viene poi calcolato e rimpiazzato con una somma pesata di sè stesso e dei pixel adiacenti.

Ogni kernel avrà una corrispondente activation map, la quale verrà impilata lungo la dimensione di profondità per formare il volume di output completo dello strato convoluzionale.

Come è stato anticipato in precedenza, l'allenamento delle ANN su input quali le immagini risulta in modelli che sono troppo grandi per essere allenati in maniera efficace. Questo deriva dal modo in cui i neuroni standard delle reti neurali artificiali (ANN) sono fully-connected, quindi per mitigare questo aspetto, ogni neurone in uno strato convoluzionale è connesso solo a una piccola regione del volume di input. La dimensionalità di questa regione è comunemente chiamata receptive field size del neurone. La magnitudine della connettività attraverso la profondità è quasi sempre uguale alla profondità dell'input. 

Per esempio, se l'input della rete è un'immagine di taglia $64 \times 64 \times 3$ (un'immagine RGB di dimensione $64 \times 64$) e si imposta la field size a $6 \times 6$, si avrà un totale di $108$ pesi per ogni neurone nel layer convoluzionale ($6 \times 6 \times 3$, dove $3$ è la magnitudine della connettività attraverso la profondità del volume).

I layer convoluzionali sono anche in grado di ridurre in maniera significativa la complessità del modello attraverso l'ottimizzazione degli output. Questi sono ottimizzati attraverso tre iperparametri: la profondità, lo stride e il setting zero-padding.

La profondità del volume di output prodotto dai layer convoluzionali può essere settata manualmente attraverso il numero di neuroni nel layer

----------------------------------------------------------------

### Pooling layer

----------------------------------------------------------------

### Fully-connected layer

----------------------------------------------------------------

## Recipes

----------------------------------------------------------------

## Conclusion

----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Domande
1) **Cosa si intende con (terza) dimensione di un volume di attivazione?**
	La terza dimensione di un volume di attivazione in una rete neurale si riferisce alla profondità del volume. Per capire meglio questo concetto, possiamo considerare un'immagine tridimensionale.
	
	Nella rappresentazione tridimensionale di un'immagine, si hanno due dimensioni spaziali: larghezza e altezza (spesso indicate come $x$ e $y$). La terza dimensione, la profondità (spesso indicata come $z$), rappresenta la gamma di valori associati a ciascun punto nella griglia $x-y$. Questa profondità può rappresentare diversi attributi o caratteristiche associati a ciascun punto dell'immagine.
	
	Nel contesto di una rete neurale, un volume di attivazione è un termine usato per descrivere l'output di uno strato della rete. Questo volume può essere immaginato come uno spazio tridimensionale in cui ogni punto corrisponde a un'unità neurale e la profondità rappresenta l'attivazione di quella unità.
	
	In molte reti neurali convoluzionali (CNN), ad esempio, il volume di attivazione ha tre dimensioni: altezza, larghezza e profondità. Questa profondità può riflettere diverse caratteristiche estratte dalle immagini attraverso l'apprendimento dei pesi dei filtri convoluzionali.
	
	In breve, la terza dimensione di un volume di attivazione rappresenta il numero di caratteristiche o attributi associati a ciascun punto nello spazio dell'output della rete neurale.
2) **Cosa è il downsampling in ambito CNN?**
	Il downsampling in ambito di reti neurali convoluzionali (CNN) è una tecnica utilizzata per ridurre la dimensionalità degli strati, specialmente lungo le dimensioni spaziali (altezza e larghezza) delle feature map. Questa riduzione della dimensionalità comporta una diminuzione del numero di parametri e del carico computazionale, contribuendo all'efficienza computazionale del modello.
	
	Il layer di pooling è comunemente utilizzato per eseguire il downsampling. Esistono due tipi principali di operazioni di pooling: il max pooling e il average pooling. Entrambe le tecniche coinvolgono la suddivisione della feature map in regioni (spesso chiamate "pool" o "kernel") e l'applicazione di un'operazione (prendere il massimo o la media) su ciascuna regione. Il risultato è una feature map ridotta in dimensioni rispetto all'input originale.
	
	Il downsampling aiuta a ottenere alcuni vantaggi:
	1) **riduzione della dimensionalità**: riducendo la dimensione delle feature map, si riducono anche il numero di parametri da addestrare e il carico computazionale;
	2) **estrazione delle caratteristiche dominanti**: mantenendo le caratteristiche più importanti, il modello può essere più robusto e meno sensibile a variazioni minime nei dati di input;
	3) **invarianza spaziale**: la rete diventa più invariante rispetto alle traslazioni locali nell'input, aiutando a catturare pattern invarianti nella rappresentazione.
	
	In sintesi, il downsampling attraverso il pooling è una strategia chiave per semplificare la rappresentazione spaziale nelle CNN, migliorando l'efficienza computazionale senza perdere informazioni cruciali.
	
	Ecco un esempio semplificato di downsampling attraverso il max pooling: si supponga di avere una feature map di input $4 \times 4$:

```
[[1, 2, 3, 4],
 [5, 6, 7, 8],
 [9, 10, 11, 12],
 [13, 14, 15, 16]]
```

Ora, si applichi un'operazione di max pooling con una finestra (pool) $2 \times 2$ e uno stride (passo) di $2$. La finestra di pooling si muoverà lungo la feature map con un passo di $2$ sia lungo la dimensione delle righe sia lungo la dimensione delle colonne.

1) Prima regione di pooling ($1$° passo):
```
[[1, 2],
 [5, 6]]
```
Massimo: $6$

2) Seconda regione di pooling (2° passo):
```
[[3, 4],
 [7, 8]]
```
Massimo: $8$

Il risultato finale della feature map dopo il max pooling sarà:
```
[[6, 8]]
```

Questo esempio rappresenta un modo di eseguire il downsampling riducendo la dimensionalità dell'input originale. Il valore massimo in ciascuna regione di pooling viene mantenuto, e questo processo si ripete lungo la feature map per ottenere la versione downsampldata.
3) 

----------------------------------------------------------------

# Related to
- [[Intelligenza Artificiale]]
- [[Statistical Methods for Machine Learning]]

----------------------------------------------------------------