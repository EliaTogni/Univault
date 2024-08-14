# Introduzione
L'utilizzo della fisica in un videogioco puo' essere assimilabile alla grafica per fornire un maggiore realismo e immersione nel gioco ma puo anche essere utilizzato some componente di gameplay al fine di risolvere puzzle, interagire con il mondo di gioco, ecc...
E' molto importante anche per automatizzare tutta una serie di animazioni che andrebbero altrimenti scriptate (caduta di oggetti, ragdoll, tessuti, ecc..). Rispetto a un'animazione scriptata si perde il controllo totale sul risultato finale ma si ottiene un'animazione realistica e che si adatta in modo migliore al contesto.

Il problema della fisica e' che e' computazionalmente impegnativa e deve essere calcolata in un tempo estremamente limitato. Fortunatamente la computazione della fisica di un gioco e' un compito altamente parallelizzabile e inoltre non bisogna per forza ottenere l'iperrealismo ma basta che sia abbastanza plausibile da non saltare all'occhio. Non ci sono problemi infatti se sono presenti piccole inconsistenze in un frame purche' vengano corrette in quello successivo, l'importante e' che il meccanismo di calcolo sia robusto sul lungo periodo.

Un motore fisico deve preoccuparsi di computare la dinamica degli oggetti e la gestione delle collisioni tra questi ultimi.
La struttura dello [[Scene graph]] fa comodo allo sviluppatore per modellare il mondo e scriptare le animazioni ma per il motore fisico avviene tutto a livello globale e le relazioni tra due oggetti (per esempio tra la ruota e la macchina) devono esistere come costraint fisici altrimenti non sono rilevanti.

# Dinamica
ogni oggetto rigido ha le seguenti propieta' **costanti**:
- **massa** -> indica la resistenza al cambio di velocita' (massa inerziale), incidentalmente e' uguale alla **massa gravitazionale** ovvero la capacita' di attrarre ogni altro oggetto. Si misura in kg
- **momento** -> indica la resistenza al cambio di velocita' angolare. Dipende dalla massa e dalla sua distribuzione: piu' la sottomassa e' lontana dall'asse di rotazione piu' sara' alta la resistenza. In 3D per ogni possibile asse di rotazione(passante per il baricentro) ci puo' essere un diverso momento di inerzia. Questo puo' essere calcolato come $\vec{a}^TM\vec{a}$ dove la matrice $M$ e' la matrice del momento di inerzia o tensore del momento di inerzia e puo' essere computato per ogni oggetto rigido.
- **baricentro** -> e' il centro della massa. E' la media pesata delle posizioni delle sottoparti che compongono l'oggetto. In assenza di forze e' il punto in cui ruota l'oggetto. Non coincide con l'origine del local frame dell'oggetto.

momento e baricentro sono dipendenti dalla distribuzione della massa
#TODO aggiungere immagine pagina 9

## Dinamica delle particelle
E' il caso piu semplice: sono oggetti ideali puntiformi con tutta la massa concentrata in quel singolo punto. Per questo tipo di particelle e' quindi irrilevante: 
- la rotazione
- il centro di massa
- la distribuzione di massa
- la torque (momento o coppia?)
- la velocita' angolare

Gli algoritmi base per trattare questi oggetti sono pero' gli stessi dei corpi rigidi non puntiformi.

Lo stato di una particella e' descritto dal seguente sistema:
$$
\begin{cases} 
	\vec{f}(t) = function(p(t),...) \\
	\vec{a}(t) = \frac{\vec{f}(t)}{m}\\
	\vec{v}(t) = \vec{v}_0 + \int_{t'=0}^t \vec{a}(t')\cdot dt'\\
	p(t) = p_0 + \int_{t'=0}^t \vec{v}(t')\cdot dt'	
\end{cases}
$$
che puo' essere riformulata equivalentemente come:
$$
\begin{cases}
	\vec{f}(t) = function(p(t),...)\\
	\vec{v}(t) = \dot{p}(t)\\
	\vec{a}(t) = \ddot{p}(t) = \frac{\vec{f}(t)}{m}\\
	\dot{p}(0) = \vec{v}_0\\
	p(0) = p_0
\end{cases}
$$
Come si puo' notare da questo sistema questo e' un ciclo dove le forze determinano l'accelerazione, l'accelerazione determina la velocita', la velocita' determina la posizione, la posizione determina le forze e cosi' via...
#TODO aggiungere immagine pagina 16


E' importante notare che nelle formule precedenti e' presente un $t$, questo si riferisce al tempo della simulazione che e' ovviamente diverso dal tempo reale (senza limitazioni dipente solo dalla velocita' di calcolo) ma viene solitamente fatto scorrere con la stessa velocita' del tempo reale. Alcune importanti eccezioni sono i replay, i fast-forward, le moviole, ecc... Queste possono essere fatte diventare parte integrante del gameplay come in prince of persia.

Per calcolare lo stato di una particella abbiamo due soluzioni:
- usare una soluzione **analitica**, ovvero una riscrittura del precedente sistema sotto forma di funzione tale che $state = function(t)$ 
- usare una soluzione **numerica**. In questo caso computeremo in loop 
```c#
	t = 0
	state(t) <- init
x:  state(t+1) <- do_1_step(state(t))
	t++
    goto x
```

### Soluzione analitica
Questo tipo di soluzioni sono specifiche per il singolo problema e sono spesso difficili da trovare: devo infatti trovare una funzione tale che ...
Spesso non esiste nemmeno una soluzione scrivibile usando funzioni comuni come i polinomi, funzioni algebriche, esponenziali, trigonometria, ecc..
Quando esiste una soluzione pero' questa e' tipicamente molto conveniente. Infatti possiamo trovare la posizione e la velocita' per ogni t (non solo quelli successivi al punto in cui siamo arrivati) e possiamo predirre lo stato della simulazione in tutti i momenti.

esempi di sistemi che ammettono una soluzione analitica sono:
- sistemi dove le forze applicate sono costanti rispetto alla posizione e alla velocita' degli oggetti (basta integrare due volte) -> un esempio e' il lancio di un proiettile
- sistemi formati da due corpi soggetti a forza di gravita' reciproca
- un singolo pendolo (solo per piccole oscillazioni altrimenti non va bene)

Ma la maggior parte dei sistemi (soprattutto quelli che ci interessa modellare) non ammettono una soluzione analitica. Per questo non vengono utilizzati se non in casi particolari come fare predizioni per le A.I.

### Integrazione numerica
$$
\begin{cases} 
	\vec{f}(t) = function(p(t),...) \\
	\vec{a}(t) = \frac{\vec{f}(t)}{m}\\
	\vec{v}(t) = \vec{v}_0 + \int_{t'=0}^t \vec{a}(t')\cdot dt'\\
	p(t) = p_0 + \int_{t'=0}^t \vec{v}(t')\cdot dt'	
\end{cases}
$$
Da questa formulazione dello stato del sistema possiamo risolvere gli integrali come somme di area di piccoli rettangoli di base dt. Per fare questo l'engine fisico a ogni step (ogni dt) aggiorna la velocita' e la posizione dell'oggetto.
L'errore si accumula con il passare del tempo(virtuale) e dipende da dt -> piu' e' piccolo minore e' l'errore. Purtroppo pero' piu' dt e' piccolo piu' step sono necessari per simulare lo stesso tempo virtuale di conseguenza la computazione diventa piu' costosa. Un valore tipico di dt puo' essere intorno a $\frac{1}{60}s$.  Da notare che questo dt non e' necessariamente il frame rate del rendering (basta che sia almeno veloce quanto quest'ultimo) ne' necessariamente fisso (anche se nella maggior parte dei casi lo e'). 
Un dt variabile permette per esempio di aumentare la precisione (diminuendo dt e riducendo conseguentemente la larghezza del rettangolo) solo durante momenti critici.

Il modo in cui l'errore decresce al diminuire di dt e' chiamato **ordine** della simulazione.
Per esempio con un metodo di integrazione del $1\degree$ ordine l'errore totale puo' essere grande come $O(dt)$ (non sempre ma puo' esserlo) quindi se il numero di passi raddoppia allora l'errore dimezza. L'errore introdotto da ogni singolo step e' $O(dt^2)$ ( #rivedere  questo non ho capito)

#### Metodo di integrazione di Eulero
#TODO immagine pagina 24
che tradotto in pseudocodice diventa:
```c++
Vec3 position = position;
Vec4 velocity = velocity;

void initState(){
	position = ...
	velocity = ...
}

void physicStep(float dt){
	Vec3 acceleration = compute_force(position)/mass;
	position += velocity     *dt;
	velocity += acceleration *dt;
}

void main(){
	initState();
	while(1){
		physicStep(1.0/FPS);
	}
}
```

Questo metodo di integrazione e' del $1\degree$ ordine.

## Forze
Le forze sono principalmente una funzione delle posizioni, ma in alcuni casi anche delle velocita', del tempo globale o di altri fattori.
Alcuni esempi di forze sono:
- forza di **gravita'**
- pressione del **vento**
- forze **elettriche/magnetiche**
- forza di **Archimede**
- **molle** meccaniche
- **onde d'urto** (derivate per esempio da esplosioni)
- forze di **controllo** -> aggiunte per controllare l'evoluzione del sistema ma non fisicamente giustificate

Alcune forze presenti nel mondo reale possono essere simulate con qualcosa che non e' realmente una forza:
- Frizione-> puo' essere simulata dal **drag**
- impatti e forze istantanee-> simulate da **impulsi**
- forze di resistenza -> simulate da **vincoli sulle posizioni**

### Forze di controllo
Il tipico esempio di forza di controllo e' quello degli input del giocatore: da un punto di vista del motore fisico il movimento nella direzione scelta e' completamente ingiustificato (il personaggio si trova in una posizione statica fino a un attimo prima) ma e' necessario per permettere l'interazione con il gioco.

Siccome queste indicazioni sono artificiali, per avere un effetto piu' realistico e' meglio limitarne il piu' possibile l'uso ai soli casi indispensabili: Infatti queste sono piu' complesse da controllare e adattare a tutti i casi. Per esempio e' meglio far muovere una macchina per via della coppia applicata alle ruote motrici rispetto a una forza applicata all'intero corpo della macchina. E' infatti facile notare come nel primo caso non abbiamo bisogno di creare eccezioni nel caso le ruote non tocchino terra.

### Molle
Un metodo semplificato per rappresentare le molle e' tramite la **legge di Hooke**:
$$\vec{f}_a = k(\ell -||p_b-p_a||)\frac{p_b-p_a}{||p_b-p_a||}$$
$$\vec{f}_b = -\vec{f}_a$$
dove $\vec{f}_a$ e' la forza esercitata da una molla che collega le particelle $b$ e $a$ su quest'ultima. Da notare che la forza che agisce su $b$ e' uguale in modulo ma inverso.

Nella formula particolare importanza hanno la distanza a riposo della molla $\ell$ e la stiffness $k$. Queste sono proprietà intrinseche che variano da una molla a un'altra.

> [!Note]
> La formula della legge di Hooke può essere vista come suddivisa in due parti: una prima parte formata dalla grandezza della forza ( $k(\ell-||p_b - p_a||$ ) e una seconda parte che descrive la direzione della forza ( $\frac{p_b-p_a}{||p_b-p_a||}$ )
> 
> ----
> 
>Inoltre si noti come il fattore $\ell-||p_b - p_a||$ rappresenta la compressione/elongazione della molla

#### Frizione di una molla
È una forza dissipativa che rallenta l'elongazione/compressione della molla
$$\hat{d} = \frac{p_b-p_a}{||p_b - p_a||}$$
$$\vec{f_a} = k_d(\hat{d}\cdot(\vec{v}_b-\vec{v}_a))\hat{d}$$
#rivedere 
#### Sistemi di molle e masse
Come suggerisce il nome i sistemi di molle e masse sono formati da masse unite tra da molle. Questo tipo di sistemi risulta molto utile per modellare oggetti deformabili elastici come corde o mantelli. Con un po' di lavoro possono anche modellare oggetti deformabili **plastici** (che non tornano alla forma iniziale dopo l'urto ma rimangono permanentemente deformati): basta infatti cambiare in modo dinamico la distanza a riposo della molla in caso di compressione che avviene in determinate condizioni.

Questi sistemi non riescono però a modellare oggetti rigidi o corde non elastiche:
sebbene si potrebbe pensare di aumentare il fattore $k$ per farlo tendere all'infinito si otterrebbero di conseguenza anche valori grandi di $\vec{f}$ e quindi valori molto piccoli (impossibili da raggiungere) di $dt$ per rendere il sistema stabile nella simulazione.

### Forza di gravità
#### Su un pianeta
$\vec{f}_a = gm\hat{d}_{down}$
da notare come questa forza non dipenda dalla posizione ma solo dalla massa dell'oggetto siccome $\hat{d}$ e $g$ sono costanti.
#### Nello spazio
date due particelle $p_a$ e $p_b$ dotate di massa $m_a$ e $m_b$ la forza di attrazione sulla particella a è:
$$\vec{f}_a = \frac{Gm_am_b}{||p_b-p_a||^2} \frac{p_b - p_a}{||p_b-p_a||} = \frac{-Kq_aq_b}{||p_b-p_a||}(p_b-p_a)$$
e conseguentemente la forza che agisce sulla particella $p_b$ sarà $\vec{f}_b = -\vec{f}_a$
### Forze elettriche
Date due particelle $p_a$ e $p_b$ dotate di cariche $q_a$ e $q_b$ la forza di attrazione o repulsione che agisce sulla particella $p_a$ sarà:
$$\vec{f}_a = \frac{-Kq_aq_b}{||p_b-p_a||^2} \frac{p_b - p_a}{||p_b-p_a||} = \frac{-Kq_aq_b}{||p_b-p_a||}(p_b-p_a)$$
### Pressione del vento
In questo caso si tratta di una forza che agisce su una superficie e dipende da:
- dimensione della superficie esposta al vento (maggiore sia la superficie maggiore la forza)
- l'inclinazione della superficie rispetto alla direzione del vento (la forza sarà maggiore tanto più la superficie sia ortogonale alla direzione del vento)
- pressione del vento ($\vec{w}$)
La forza che viene impressa da un vento con una pressione di $\vec{w}$ su una superficie triangolare delimitata dai punti $p_0,p_1,p_2$ è:
$$\vec{f} = |\frac{1}{2}(p_1-p_0)\times(p_1-p_0)\cdot\vec{w}| \frac{\vec{w}}{||\vec{w}||}$$
#TODO questa formula mi sembra sbagliata: uno dei due $p_1$ dovrebbe in realtà essere un $p_2$ chiedere al prof
>[!Note]
> da notare che nella formula $\frac{1}{2}(p_1-p_0)\times(p_1-p_0)$ rappresenta il vettore dell'area della superficie, la parte sotto valore assoluto rappresenta la grandezza della forza e $\frac{\vec{w}}{||\vec{w}||}$ è la direzione della forza

### Forza di attrito e frizione
Sono di due tipi:
- forze isotropiche
- forze di attrito planare

Nel primo caso si tratta di forze che si oppongono a qualsiasi moto indipendentemente dalla loro direzione. Sono sempre opposte alla direzione della velocità e la loro grandezza è proporzionale alla magnitudine del vettore velocità.
Questo tipo di forze modellano l'effetto del materiale in cui avviene il moto (aria, acqua, vuoto...) e sono tanto più forti tanto più il materiale è denso.


Un modo semplice per simulare le frizioni isotropiche è ridurre il vettore velocità di una proporzione fissa (per esempio 2% al secondo) questo metodo, chiamato **velocity damping**, per quanto non sia esattamente quanto accade nel mondo reale è abbastanza semplice da implementare e ha senso: a alte velocità corrispondono attriti più alti e viceversa.
Questa tecnica ha inoltre l'effetto collaterale di aumentare la robustezza delle simulazioni in quanto **evita incrementi di energia**.
Il Velocity damping ha però anche un paio di problemi: in primo luogo si tratta di **un'approssimazione** e le forze di attrito non sono realmente lineari rispetto alla velocità. In secondo luogo tende a **esagerare gli effetti della frizione**.

Nel secondo caso si tratta di forze che avvengono quando due oggetti sfregano l'uno con l'altro. Sono sempre parallele al piano di contatto e dipendono dalle proprietà dei due oggetti.

## Continuità e discontinuità
Nella fisica Newtoniana lo stato di una particella può solo cambiare in modo continuo ma in alcune situazioni può essere comodo rompere in modo artificiale questa continuità (teletrasportando o tramite impulsi.
### Discontinuità spaziale
Invece di affidarci alla fisica per determinare la posizione dell'oggetto secondo la formula $p= p+\vec{v}\cdot dt$ (dynamic displacement) possiamo usare un cambio di stato discontinuo $p = p+dp$ (kinematic displacement)

### Impulsi vs Forze
invece di modellare l'azione delle forze in modo continuo come normalmente faremmo con la formula $$\vec{v}=\vec{v}+(\vec{f}/m)\cdot dt$$
che indica un'applicazione continua della forza in ogni frame, possiamo invece applicare un impulso in un tempo infinitesimale:
$$\vec{v}=\vec{v}+(\vec{i}/m)$$
Questo tipo di modello è ottimo per modellare forze molto intense e brevi come per esempio un impatto che sarebbe altrimenti complesso da modellare con una forza.

Mentre nel caso della forza si tratta di un'accelerazione che determina un cambio di velocità continuo (fisicamente corretto) nel caso di un impulso si cambia direttamente in modo discontinuo la velocità. Questo può essere utile  per controllare la simulazione (applicando un cambio di velocità diretto) o per rappresentare una forza con un tempo di applicazione tendente a zero e una magnitudine tendente a infinito o in generale per fenomeni la cui timescale è << dt.

## Altri metodi di integrazione
Durante una simulazione è normale che accadano errori di integrazione e quindi un sistema simulato è generalmente diverso da un sistema reale. 

In particolare un errore di integrazione molto grave è quando l'energia di un sistema aumenta nel tempo: questo tipo di errore non solo compromette la stabilità del sistema ma è uno dei tipi di errori che sono facilmente visibili a occhio umano e compromette la plausibilità della simulazione (unica cosa importante visto che normalmente non si cerca il realismo assoluto). Come detto prima questo tipo di errori può essere facilmente evitato introducendo degli attriti.

In generale per evitare questo e altri errori di integrazione vengono usate delle alternative al metodo di Eulero:
- Symplectic Euler
- Leapfrog
- Verlet

Questi metodi sono delle varianti che non cambiano molto dal punto di vista del codice ma possono avere diversi *ordini di precisione*. Da notare che un metodo più accurato di un altro è anche più efficiente perché si possono usare $dt$ più grandi e quindi fare meno passaggi.

### Limitazioni del Forward Euler Method
Nel metodo di Eulero classico l'errore si accumula nel tempo in modo lineare a  $dt$, quindi raddoppiare il numero di passaggi dimezza solamente l'errore. Per questo è un metodo di *prim'ordine*
Inoltre questo metodo è *instabile per grandi dt*.
Non è inoltre reversibile nemmeno in teoria (a differenza della fisica Newtoniana che è reversibile in teoria). Questo lato negativo può essere importante nei giochi (per esempio nei replay)

### Symplectic Euler
#TODO aggiungere immagine del symplectic euler pg 16
```c#
Vec3 position = ...
Vec3 velocity = ...

void initState(){
	position = ...
	velocity = ...
}

void physicStep(float dt){
	Vec3 acceleration = compute_force(position)/mass;
	
	//notice how this wos after position update in the forward euler
	velocity += acceleration * dt;
	
	position += velocity     * dt;
}

void main(){
	initState();
	while(1) do physicStep(1.0/FPS)
}
```

Come possiamo vedere la differenza del codice è minima (è bastato invertire l'aggiornamento della posizione con l'aggiornamento della velocità).
In questo modo aggiorniamo la posizione usando la velocità che l'oggetto avrà nello step successivo. Da un certo punto di vista questo non è propriamente corretto ma funziona meglio.
Infatti nono stante sia comunque del *prim'ordine* è *più stabile e accurato*

### Leapfrog
#TODO  aggiungere immagini della integrazione leapfrog
Significa letteralmente cavallina ed è un riferimento al fatto che velocità e posizione vengono aggiornate a frame alterni.
Il codice è molto simile a Eulero con l'unica vera differenza nell'inizializzazione della velocità.
Ha però un'accuratezza migliore: l'errore cumulativo è proporzionale a $dt^2$ invece che $dt$ -> si tratta di un metodo del *second'ordine*. Inoltre l'errore per frame è proporzionale a $dt^3$ invece che a $dt^2$.
Un ulteriore vantaggio di questo metodo di integrazione è che in teoria è *reversibile* (facendo attenzione a errori numerici e a patto di mantenere un $dt$ fisso per tutta la simulazione).

### Verlet
L'idea alla base di questo metodo di integrazione è quella di rimuovere la velocità dallo stato e renderla *implicita* definendola come:
$$\vec{v} = (p_{now} - p_{old})/dt$$ a differenza delle altre varianti di Eulero che, al contrario, ricavano la posizione dalla velocità.
#TODO  immagine integrazione di verlet

>[!Note]
>Nonostante la velocità rimanga implicita questo non porta a un guadagno effettivo di RAM: dobbiamo infatti salvare la posizione precedente al suo posto

L'integrazione di Verlet da un errore per step lineare con $dt$ e un errore cumulativo dell'ordine di $dt^2$ -> si tratta di un metodo del *second'ordine*.
Inoltre si tratta di un metodo reversibili (solo in teoria, nella realtà bisogna fare attenzione ai dettagli di implementazione)

D'altro canto questo metodo ha alcuni problemi:
- $dt$ deve essere costante (altrimenti bisogna fare delle modifiche)
- I cambiamenti sulla velocità (per esempio impulsi) devono ora essere fatti agendo in qualche modo su $p_{old}$
- I cambiamenti sulla posizione (teletrasporti) impattano anche sulla velocità e per risolvere bisogna spostare sia $p_{new}$ che $p_{old}$
- Diventa più complesso applicare velocity damps

## Vincoli di equidistanza
Come suggerisce il nome, questo tipo di vincoli obbliga una coppia di particelle a stare a una distanza fissa le une dalle altre.
Possiamo sfruttare i vincoli di equidistanza per modellare i comportamenti della dinamica dei corpi rigidi senza esplicitamente tenere traccia dell'orientamento, velocità angolare e altre proprietà del corpo rigido.
Prendendo un esempio in due dimensioni possiamo definire un rettangolo rigido come quattro particelle (i vertici) uniti a due a due con vincoli di equidistanza. #TODO aggiungere foto pagina 2 e 3
Come si può notare assicurandoci di mantenere i vincoli tra le particelle che formano la scatola, otteniamo anche in automatico che durante una collisione con un altro oggetto il rettangolo ruoti anche se il nostro sistema non gestisce in modo esplicito le rotazioni e le velocità angolari. Da notare come per mantenere i vincoli non basta semplicemente spostare la particella quando non ne rispetta uno, ma bisogna ricontrollare gli altri vincoli per assicurarsi che dopo lo spostamento non ne siano rimasti di non rispettati fino a d arrivare a una convergenza.
Un ulteriore problema è che particelle spostare e di quanto per rispettare i vincoli: si deve cercare di minimizzare la somma del quadrato degli spostamenti *pesati usando la massa delle particelle*. Il minimo può essere trovato risolvendo semplici problemi in forma chiusa.
### Vincoli di equidistanza
```c#
Vector3 pa, pb;
float ma, mb
float d;

Vector3 v = pa-pb;
float currDist = v.length;

v /= currDist; //normalization of v

float delta = currDist - d;

//solutions of the minimization
pa += (mb/(ma+mb)*delta)*v
pb -= (ma/(ma+mb)*delta)*v
```

### Vincoli posizionali
```c#
Vector3 pa;
float ma;
Vector3 pq;
Vector3 nq;

Vector3 v = pa - pq;
float currDist = Vector3.dot(v,n);

if (currDist < 0.0){
	pa -= currDist*n; //just project
}
```
### Altri tipi di vincoli
#### Preservare il volume di un oggetto
Per imporlo stimiamo l'attuale volume dell'oggetto $v$ e scaliamo l'oggetto di $^3\sqrt{v_c/v}$, dove $v_c$ è il volume che vogliamo imporre
#### Posizione fissa
Triviale da imporre ma utile
#### Vincoli angolari
Utili per esempio per imporre che un ginocchio non si possa piegare al contrario
#### Impedire compenetrazioni
vedere [[Motori fisici#Collisioni||Collisioni]]
## Position based dynamics
#TODO 
# Collisioni
Per gestire le collisioni bisogna innanzitutto definire i tipi di oggetti che sono presenti nel gioco:
- oggetti *statici* -> non si muovono per nessuna ragione e sono parte dello scenario. Gli altri oggetti sono influenzati ma non influenzano gli oggetti statici.
- oggetti *non-statici* -> sono oggetti che possono muoversi e sono influenzati dalla fisica.
Possono quindi generarsi solo due tipi di collisioni:
- quelle tra oggetti statici e non statici (*one-way*)
- quelle tra due oggetti non statici (*two-ways*)

## Collision Response
### Evitare compenetrazioni
Bisogna essere sicuri di posizionare gli oggetti in posizioni valide (sempre). Per fare ciò si possono applicare principalmente due strategie:
- far tornare l'oggetto all'ultima posizione valida-> questo approccio è il più semplice da fare ma non ideale in tutti i casi
- proiettare l'oggetto nella più vicina posizione valida -> questo approccio è necessario se vogliamo applicare una [[Motori fisici#Position based dynamics||dinamica posizionale]]

Nella dinamica posizionale questo è solamente un altro [[Motori fisici#Vincoli posizionali||vincolo posizionale]] e nel caso di un urto *two-way* basta semplicemente spostare entrambi minimizzando la somma del quadrato degli spostamenti pesata con la massa, mentre nel caso di urti *one-way* basta spostare l'oggetto non-statico della minima distanza (ovvero l'equivalente del metodo precedente se la massa dell'oggetto $\to \infty$)

### Aggiungere frizioni
Queste vanno applicati in caso di contatto prolungato con un oggetto (per esempio collisione con un oggetto con cui si stava collidendo anche nell'ultimo frame).
Può essere implementata come forza o come damping della velocità e in entrambi i casi deve essere applicata al componente della velocità parallelo al piano di contatto in direzione opposta e proporzionale all'attuale velocità.

### Impatto
Per effettuare l'impatto serve applicare un istantaneo cambio di velocità, questo può essere fatto sia determinando la nuova velocità degli oggetti oppure usando un impulso $\vec{i} = (\vec{v}_{new} - \vec{v}_{old})\cdot m$. In qualsiasi caso dopo l'impatto bisogna mantenere la quantità di moto totale $m\cdot\vec{v}$

Per applicare questo cambiamento però dobbiamo anche stabilire che tipo di impatto stiamo analizzando:
- elastico
- anaelastico
- un misto

Nel caso degli impatti *elastici* non viene dispersa energia, al contrario nel caso di un urto completamente *anaelastico* tutta l'energia viene dispersa.

Gli urti sono uno di quei casi in cui la fisica in game differisce molto dalla realtà: infatti per semplificare molto le cose gli oggetti in gioco sono dotati di una proprietà chiamata *bounciness*, questa proprietà determina se l'oggetto è elastico (alta bounciness) o anaelastico (bassa bounciness). Nella realtà le cose funzionano in modo molto diverso ma questo permette di semplificare notevolmente i calcoli ed è un'approssimazione abbastanza plausibile.

#### Impatto completamente anaelastico
In questo tipo di impatti tutta l'energia cinetica viene dispersa e entrambi i corpi avranno la stessa velocità
#TODO aggiungere immagine
quindi $\vec{v}_{A,B} = \frac{m_A\vec{v}_A + m_B \vec{v}_B}{m_A+m_B}$
#rivedere la formula (l'ho calcolata io ma potrebbe essere sbagliata)

#### Impatto completamente elastico
Come spiegato precedentemente l'energia cinetica totale viene conservata. Nel caso monodimensionale si ha che:
#TODO aggiungere foto
risolvendo l'equazione e sapendo che $i_b = -i_a$ ($3^a$ legge della dinamica) otteniamo le seguenti due soluzioni:
$1)\space i_A=i_B=0$
$2)\space i_A = \frac{2m_Am_B}{m_A+m_B}(v_B-v_A)$
dove la [1] indica lo stato prima dell'impatto e la [2] è la situazione dopo l'impatto.

Possiamo estendere questo ragionamento anche allo spazio tridimensionale dove la normale del piano d'impatto è $\hat n$. in questo caso gli impulsi sono ortogonali al piano d'impatto e per risolvere l'impatto bisogna:
- trovare le componenti delle velocità vettoriali lungo $\hat n$ -> $\hat n = \vec{v}_{A,B} \cdot \hat n$
- trovare gli impulsi scalari (in modo analogo a quanto fatto per l'esempio in 1D)
- trovare i vettori impulso -> $\vec{i}_{A,B} = i_{A,B}\space\hat n$
- applicare gli impulsi alle velocità vettoriali

#### Urti particolari
Nel caso di masse uguale che si scontrano:
- completamente elastico (1D) -> le due velocità si scambiano
- completamente elastico (3D) -> le componenti delle due velocità ortogonali al piano d'impatto si scambiano
- completamente anaelastico -> la nuova velocità di entrambe le particelle è il vettore media delle velocità prima dell'impatto
Nel caso di collisioni con un oggetto statico ($m_a\to \infty$ e $v_a = 0$) di un oggetto
- completamente elastico (1D) -> $v_b$ si inverte
- completamente elastico (3D) -> la componente ortogonale al piano d'impatto si inverte
- completamente anaelastico -> l'oggetto si ferma nella posizione di impatto

#### Impatti tra corpi rigidi
Finora abbiamo solo considerato impatti tra particelle ma se vogliamo prendere in considerazione i corpi rigidi dobbiamo prendere in considerazione anche la loro velocità angolare. In questi calcoli dobbiamo tenere conto che:
- il momento angolare viene *sempre* conservato
- impatti *anaelastici* -> la velocità angolare dei due oggetti sarà la stessa
- impatti *elastici* -> l'energia cinetica rotazionale deve essere preservata
- casi intermedi -> bisogna interpolare le velocità angolari dei casi precedenti

## Collision Detection
A prima vista questo potrebbe sembrare un non problema, calcolare l'intersezione tra due solidi è infatti un'operazione abbastanza semplice, bisogna però tenere in considerazione l'*efficienza*: le collisioni infatti riguardano solamente un sottoinsieme minimo di oggetti e per un quantitativo di tempo estremamente limitato e nella quasi totalità dei casi due oggetti non collidono. Dobbiamo quindi agire su due fronti:
- rendere efficienti i controlli tra due oggetti
- evitare l'esplosione quadratica dei controlli ($n_{oggetti} \neq n^2 \text{test}$)

### Controlli efficienti
Per rendere i controlli efficienti un possiamo usare una rappresentazione semplificata della forma dell'oggetto da usare al suo posto (*Geometric proxy*).
Questi possono essere usati per due scopi (spesso si hanno due geometric proxy, uno per un diverso scopo):
- *Bounding volume*-> ovvero un upper bound dell'oggetto per eseguire test per early rejection
- *Collider* o *Hit-box* -> ovvero una approssimazione della forma dell'oggetto che viene usata per valutare la collisione vera e propria. È più semplice della forma effettiva dell'oggetto ma se fatta bene è un'approssimazione a tutti gli effetti impercepibile dal giocatore.

in pratica:
```c#
if intersection(bounding_volume, <other_object_bounding_vol>){
	if intersection(collider, <other_object_collider>){
		collision();
	} else {
		no_collision();
	}
} else {
	no_collision();
}
```

I geometric proxy non vengono usati solo per la collision detection ma in generale per tutte quelle funzioni che non siano l'effettivo rendering:
- risposta alle collisioni
- calcolo del baricentro e momento di inerzia
- ottimizzazione del rendering (view frustum culling e occlusion culling)
- for NPC senses simulation
- 3D sound

Quando si sceglie un geometric proxy bisogna tenenre in considerazione:
- Quanto sia difficile crearlo (per un algoritmo o un artista)
- spazio in ram occupato per memorizzarlo
- quanto approssima in modo corretto la forma
- overhead per calcolare le intersezioni con altri proxy

Di seguito prendiamo in considerazione i tipi di geometric proxy più comuni:

|                         | Sfera                                                                                                      | Capsula                | Semipiano                                                | Axis Aligned Bounding Box                                                 | Convex Polyhedron                                         | General Polyhedron                                            | Box                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------- |
| creazione automatica    | <mark style="background: #BBFABBA6;">facile (solo ottimo approssimato)</mark>                              |                        | estremamente semplice                                    | estremamente semplice                                                     |                                                           | Create come semplificazione della mesh o a mano dagli artisti |                                                         |
| spazio in memoria       | <mark style="background: #BBFABBA6;">un punto e un raggio</mark>                                           | due punti e un raggio  | una normale e la distanza dall'origine: Vec4(nx,ny,nz,k) | due punti 3D                                                              | un vec4 per ogni piano da cui è formato                   | costosa                                                       | una AABB e una rotazione                                |
| controlli               | <mark style="background: #BBFABBA6;">triviale sia con sfere che altri oggetti</mark>                       | relativamente semplici | molto semplice                                           | molto semplici:                                                           | stessi per il semipiano ma ripetuti per tutti i semipiani | difficile e richiede strutture date apposta(BSP-trees)        | più complessa                                           |
| traslazioni e rotazioni | <mark style="background: #BBFABBA6;">può essere ruotata e traslata ma scalata solo in modo uniforme</mark> |                        | molto semplice                                           | non può essere ruotata ma solo scalata e spostata (in modo semplice però) |                                                           | può essere trasformata                                        | può essere trasformata ma scalata solo in modo uniforme |
| qualità approssimazione<br> | <mark style="background: #FFF3A3A6;">non ottimale per la maggior parte degli oggetti</mark>                |                        | solo per superfici piane                                 | non ottimale                                                              | posso avere approssimazioni abbastanza buone              | migliori risultati ma                                         |                                                         |

##### BSP-tree per polyhedral proxy
Questi sono un metodo per memorizzare un poliedro (sia concavo che convesso):
Sono un albero binario dove la radice è formata dall'intero spazio del poliedro, ogni nodo figlio è un semipiano che forma una partizione del genitore e ogni foglia indica se ci si trova dentro o fuori dal proxy. In questo modo è possibile fare ricerche attraversando l'albero top-down, vedere per ogni nodo se il punto che si sta cercando si trova dalla parte della normale o quella opposta e nel primo caso scendere nel nodo di sinistra, altrimenti quello di destra. La ricerca si interrompe quando si raggiunge una foglia che indica il risultato della query.

##### Composite geometry proxies
Per forme complesse si possono anche usare proxy composti dall'unione di sub-proxy -> vi è una collisione sse l'oggetto collide con uno qualsiasi dei sub-proxy. In questo modo è possibile avere proxy molto espressivi (anche con pochi proxy), di forma convessa (anche se formati solo da proxy concavi) e comunque abbastanza efficienti da memorizzare e testare. Unico difetto di questo tipo di proxy è la difficoltà di costruirli in maniera automatica

#### Strategie di collision detection
Esistono due principali strategie di collision detection:
- Static collision detection -> 
- Dynamic collision detection

##### Static collision detection
![[static_cd.png]]
In questo tipo di collision detection si controllano eventuali collisioni solo dopo ogni step: prima viene calcolata la posizione dell'oggetto e poi si controlla se questo collide. In questo modo risparmiamo risorse computazionali però il vincolo di non compenetrazione viene temporaneamente violato e viene modificato in fase di collision response.

Il problema è che può avvenire il *tunneling*, ovvero l'attraversamento di un oggetto da parte di un altro. In questo caso si passa da una posizione ammissibile a un'altra ammissibile ma nel mezzo vi è un momento in cui l'oggetto si trova in una posizione non ammissibile.
Questo tipo di effetto diventa tanto più probabile quanto più:
- dt è grande
- la velocità è alta
- gli oggetti sono piccoli 
##### Dynamic collision detection
![[dynamic_cd.png]]
Per questo tipo di collision detection il controllo viene effettuato prima di spostare l'oggetto (per questo viene anche chiamato *a priori*) in questo modo non bisogna preoccuparsi di spostare l'oggetto in una posizione corretta in quanto non ha mai lasciato la posizione corretta. Il problema è che è più complesso da implementare: per una collisione one-way bisogna controllare la collisione tra l'oggetto statico e il volume spazzato dall'oggetto in movimento durante la durata del frame. Fare ciò è semplice per punti (segmento che unisce i punti) e sfere (capsula con altezza il segmento che unisce i centri e raggio uguale a quello della sfera) ma risulta non pratico in quasi tutti gli altri casi (e comunque viene usato solo quando viene richiesto questo tipo di precisione).

### Evitare esplosione quadratica dei test
Siccome vogliamo evitare di controllare a uno a uno ogni coppia di oggetti l'idea è di avere una prima fase in cui identificare in modo veloce quali oggetti hanno bisogno di essere controllati. In questa fase possiamo permetterci di selezionare per ulteriori controlli una coppia di oggetti che non hanno colliso ma non di non controllare oggetti che hanno colliso.
Alcune delle strategie più usate per risolvere questo problema sono:
- spatial indexing structures
- bounding volume hierarchies
- sorting based algorithms

#### Spatial indexing structures
Sono strutture dati usate per accelerare richieste di oggetti che si trovano nei pressi dell'oggetto preso in esame.
Nel caso delle parti statiche basta un solo calcolo in fase di preprocessing mentre per le parti in movimento bisogna aggiornare a ogni frame (altro motivo per taggare le parti statiche come tali).
Esistono varie strutture usate nei giochi e le più comuni sono:
##### Regular grid
![[regular_grid.png]]
Chiamate anche lattice, per crearle è necessario suddividere la scena in cubi 3D della stessa dimensione, dopodichè per ogni oggetto nella scena si cercano tutte i cubi con cui collide e nell'elemento di un array corrispondente all'indice del cubo viene aggiunto un puntatore all'oggetto. In questo modo è possibile passare in tempo costante da un punto 3D all'indice della cella corrispondente e quindi all'elenco di oggetti con cui potrebbe collidere.
Il problema di questo approccio è la dimensione in ram poichè cresce cubicamente al diminuire della dimensione dei cubi, diventa perciò critico scegliere correttamente la dimensione delle celle in quanto celle troppo piccole sono proppo pesanti in ram, ma celle troppo occupate risultano in troppi confronti.
Si può ottimizzare ulteriormente notando che la maggior parte delle celle sono in realtà vuote -> possibilità di ricorrere a hash table.

##### KD-trees
![[kd_trees.png]]
Questa struttura è un albero in cui ogni nodo è una partizione dello spazio 3D dove la radice è il mondo e i figli di ogni nodo vengono ottenuti partizionando (nel mezzo o nel punto ottimale) il padre su una delle dimensioni (X,Y,Z scelte sempre nello stesso ordine oppure quella ottimale). Nel caso si scelga un approccio ottimale occorre anche salvare la scelta di partizione compiuta.
In questo modo.

##### Quad trees (2D) e Oct trees (3D)
Simile ai KD-trees con la diferenza che ogni nodi si suddivide in tutte le dimensioni in contemporanea (branching factor di 4 in 2D o di 8 in 3D). Si continua a splittare finchè i nodi hanno un numero abbastanza basso di oggetti o si raggiunge un livello limite.

##### BSP-tree
![[bsp_tree.png]]
Simile ai KD-trees con l'unica differenza che ogni nodo viene suddiviso da un piano scelto in modo arbitrario (che va memorizzato all'interno del nodo).
Si possono scegliere vari criteri per ottimizzare il piano di divisione:
- 50% degli oggetti a sinistra e 50% a destra dopo la divisione
- esattamente un oggetto per ogni foglia
In questo modo gli alberi possono essere ottimizzati per query ottimali ma sono più costosi da costruire e aggiornare.

#### Bounding Volume Hierarchies
![[bvh.png]]
In questo caso si usa la gerarchia dello [[Scene graph]] invece che una spaziale, vengono associati dei bounding volume a ogni nodo. La costruzione di una BVH è veloce: il grafo viene costruito bottom-up accorpando di volta in volta i bounding volumes. La ricerca è top-down cercando di volta in volta i figli con cui collide l'oggetto. Il problema è che questi bounding volume non sono partizioni e hanno zone in cui si intersecano, in questi casi può avvenire che un oggetto risulti collidere con più nodi perchè si trova nell'intersezione dei loro bounding volume e risulta necessario seguire i tutti i sotto alberi con cui collide.
#### Sorting based algorithms -> sweep and prune strategy
Per applicare la strategia SAP bisogna prima di tutto trovare la AABB corrispondente a ogni oggetto (AABB che della bounding sphere se l'oggetto deve poter ruotare).
Dopodichè bisogna ordinare i $min_x$ e $max_x$ di tutte le AABB (notare che rispetto al frame precedente saranno già quasi tutte in ordine e quindi usando un incremental sorting algorithm come quicksort si possono ottenere tempi vicini a $O(n)$).
In fase di query basta passare la lista per trovare gli intervalli che possono collidere e rimuovere dalla lista tutti gli altri. Sulla lista aggiornata (quindi solo sugli oggetti i cui AABB si intersecano sull'asse delle x) eseguiamo lo stesso procedimento per l'asse delle y e poi delle z (solo sugli oggetti con AABB che si intersecano sia sull'asse delle x che delle y).