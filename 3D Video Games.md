# Introduzione
I giochi 3D hanno permesso all’informatica di diventare quello che è oggi. Senza la loro “fame di risorse”, infatti, non esisterebbero i monitor a colori, le GPU, il machine learning e numerose altre tecnologie. Lo sviluppo di tutto ciò è avvenuto nell’arco di 30 anni.<br />
I videogiochi vengono pubblicati dai publisher, i quali sono anche le figure che forniscono i fondi necessari allo sviluppo.<br />
Negli ultimi anni, le spese inerenti al publishing sono diminuite e, di conseguenza, un sempre crescente numero di sviluppatori (per la maggior parte indipendenti) hanno intrapreso la scelta di praticare self-publishing e finanziare i propri progetti tramite crowdfunding.<br />
Per parlare di videogiochi è necessario prima distinguere tra due macrocategorie: i giochi **bidimensionali** (o **2D**) ed i giochi **tridimensionali** (o **3D**).<br />
I giochi 2D sono formati da **tilemap** e **sprite**. Questi ultimi non sono altro che bitmap, le quali che non modificano la schermata. Esse sono ribaltabili (rendendo non necessaria, quindi, la memorizzazione di ciascuno di essi) e permettono il cambio dinamico dei colori.<br />
I giochi 3D, invece, sono formati da scene e modelli 3D. Essi sono mostri di tecnologia dal momento che molte task come grafica e fisica devono essere necessariamente computate in tempo reale. Nello sviluppo dei 3D videogames è prassi riutilizzare i componenti al fine di velocizzare lo sviluppo, rendendo rari i casi in cui lo sviluppo parte da zero.<br />

Gli sviluppatori di un videogioco sono divisi in tre categorie:
- **tecnici**, ovvero gli individui che partecipano alla creazione del videogioco a livello di programmazione e tutti i game tools che permettono di semplificare certe task. Alcuni tecnici possono sviluppare direttamente il game engine del gioco;
- **artisti**, ovvero gli individui che si occupano di creare gli asset;
- **designer**, ovvero gli individui il cui ruolo è comparabile ai registi cinematografici. Sono coloro i quali si adoperano per aggiungere il “fattore divertimento” al gioco.
 
![](hard_wired.png)

Una feature di un videogioco è tanto **hard-wired** in base a dove questa viene implementata. Se essa viene implementata nell'hardware, ad esempio, solamente il produttore può cambiarla e ciò può causare dipendenze dalla piattaforma.<br />
Un vincolo molto hard-wired permette maggior efficienza, scalabilità e riutilizzo. Al contrario, un vincolo più soft è più facile da mantenere, più customizzabile e, inoltre, più flessibile.

Le componenti di un videogioco possono essere:
- **assets**: vengono costruiti durante lo sviluppo del gioco e, dato che sono scriptati, permettono una maggior qualità, un maggior controllo e (di solito) sono più efficienti in termini di tempo;
- **procedurali**: vengono create dal gioco a tempo di esecuzione. Ciò permette maggior variazione e flessibilità, oltre che ad una maggior efficienza in termini di spazio.

E’ prassi, durante lo sviluppo di un gioco, praticare il baking, ovvero il memorizzare il risultato di una computazione per poi riutilizzarla in seguito. In questo modo si guadagna in termini di tempo (e CPU/GPU workload) ma si perde in termini di spazio di memoria e di flessibilità.

-------------------------------------------------------------

# Algebra di punti e vettori
Le strutture dati dei modelli hanno come base tre diversi componenti:
- il **punto**, ovvero una tripletta di coordinate le quali corrispondono ad una posizione nello spazio. Nel dettaglio, il punto $p \in \mathbb{R}^3 = (x_{p}, y_{p}, z_{p})$;
- il **vettore**, il quale corrisponde allo spostamento di un oggetto nello spazio. Un vettore è calcolabile come la differenza tra due punti;
- il **versore** (o **vettore unitario**, o **normale**, o **direzione**, o **vettore normalizzato**), il quale indica l’orientamento o la direzione di un oggetto rispetto al piano di esistenza ed è di magnitudine unitaria. 

Come esempio, si pensi a come il modello 3D di un telefono nello spazio è formato da punti mentre un suo eventuale spostamento è rappresentato da un vettore e, per capire se lo schermo è rivolto verso il basso oppure no, è possibile utilizzare un versore ortogonale al telefono per indicare il suo orientamento.

Queste tre entità sono alla base dei game engine ed esse condividono la stessa struttura dati, conosciuta in Unity come **Vector3**, contenente una tripletta di valori $(x, y, z)$. In questo motore grafico, infatti, i vettori vengono rappresentati con la stessa classe. Tuttavia non è escluso l’utilizzo di classi differenti per farlo in differenti game engine.

Librerie, motori grafici e linguaggi possono optare di utilizzare lo stesso tipo di dato per punti, vettori e versori tridimensionali, così come è legito optare di utilizzare tre tipi differenti. Ciò nonostante, non dovrebbero essere considerati come la stessa cosa, come, ad esempio, nell'utilizzo dello stesso tipo con diverse semantiche (come il tipo double per rappresentare il peso, la temperatura e così dicendo). E' dovere del programmatore l'utilizzo corretto di essi.

-------------------------------------------------------------

## Possibili operazioni
Al fine di fornire la più completa descrizione delle operazioni, si fornirà di seguito una definizione sia dal punto di vista intuitivo/spaziale (ovvero cosa comporta l'operazione visivamente), sia dal punto di vista algebrico (ovvero come computare matematicamente il risultato) e sia dal punto di vista sintattico (come utilizzare la notazione matematica e i linguaggi di programmazione per scrivere le operazioni).

### Addizione
L’addizione tra un punto $p$ e un vettore $\vec{v}$ restituisce come risultato un punto $q$ corrispondente, in termini spaziali, al punto $p$ spostato di una quantità $v$ nella direzione del vettore:

$$a=(ax,ay,az), \quad   \vec{v}=(vx,vy,vz), \quad   q=a+\vec{v}=(ax+vx,ay+vy,az+vz)$$

$$\text{se } a∈P, \vec{v}∈V, a+\vec{v}= q∈P, \quad \text{dove } q= a+\vec{v}=(ax+vx,ay+vy,az+vz)$$

![[somma_punto_vettore.png]]

Il **vettore identità** o **vettore zero** $\vec{z}$ corrisponde al vettore $(0,0,0)$: ogni punto $p$ sommato con esso restituirà come risultato lo stesso punto $p$.

L'addizione tra due vettori $\vec{v}$ e $\vec{w}$ restituirà come risultato un nuovo vettore $u$, ottenuto tramite il metodo del parallelogramma.

![[somma_vettoriale_regola_parallelogramma.png]]

----------------------------------------------------------------

### Differenza
Dati due punti $p$ e $q$, la differenza $q-p$ è un vettore $\vec{v}$ il quale, da un punto di vista spaziale, indica lo spostamento da $p$ a $q$:
$$p=(px,py,pz) \quad  q=(qx,qy,qz) \quad  \vec{v}=q-p=(qx-px,qy-py,qz-pz)$$	$$\text{se } p,q∈P, q-p= \vec{v}∈V, \quad \text{con } \vec{v}=(qx-px,qy-py,qz-pz)$$
![[differenza_punto_punto.png]]

La differenza tra due vettori $\vec{v}$ e $\vec{w}$ restituirà come risultato un nuovo vettore $\vec{u}$, ottenuto tramite il secondo metodo del parallelogramma.

![[differenza_vettoriale_regola_parallelogramma.png]]

--------------------------------------------------------------------------------

### Prodotto
Il prodotto tra un vettore $\vec{v}$ e uno scalare $k$ è un vettore $\vec{u}$ avente stesso verso e direzione ma con la lunghezza moltiplicata per $k$.<br />Nel caso in cui $k$ sia negativo, la direzione del vettore si inverte. Infatti, il vettore $\vec{b}$ opposto al vettore $\vec{a}$ non è altro che il vettore $\vec{a}$ moltiplicato per uno scalare $k = -1$.<br />
La differenza tra due vettori è, quindi, un caso particolare della somma dal momento in cui:

$$\vec{v}-\vec{w}= \vec{v}+ (-\vec{w}) = \vec{v}+(-1)\cdot \vec{w}$$

----------------------------------------------------------------

### Interpolazione lineare
L’interpolazione (_lerp()_ o _mix()_) tra due vettori $\vec{v}$ e $\vec{w}$ restituisce come risultato un vettore corrispondente alla loro media pesata utilizzando un valore $k \in [0, 1]$:

$$\text{Dato }k ∈ [0,1], \quad \vec{u}=lerp(\vec{v},\vec{w},k)= (1-k)\cdot \vec{v} + k\cdot \vec{w}$$

o, in alternativa:

	$$\text{dato } k \in [0,1], \quad \vec{u} = lerp(\vec{v}, \vec{w}, k) = \vec{v} + k(\vec{w}-\vec{v})$$

L'interpolazione tra due punti $p_{0}$ e $p_{1}$ è, invece:

$$p_{0} + t(p_1 - p_0)$$

infatti, nonostante sarebbe possibile sviluppare la moltiplicazione tra il coefficiente di interpolazione $t$ e la differenza tra $p_1$ e $p_0$, la risultate $(1-t)p_0 + (t)p_1$ non ha un significato geometrico facilmente definibile, poichè scalare un punto o sommare due punti non ha un'interpretazione spaziale intuibile.

----------------------------------------------------------------

### Interpolazione sferica
L'**interpolazione sferica**, applicata dalla funzione _slerp()_ è un tipo di interpolazione applicabile a qualsiasi versore, includendo 2D, 3D e quaternioni. La _slerp()_ può anche essere applicata su vettori seguendo i seguenti step:
1) computare la magnitudine dei vettori;
2) computare la direzione dei vettori;
3) moltiplicare la direzione ottenuta con la magnitudine ottenuta per ottenere il risultato finale.

Infatti, è possibile computare la magnitudine risultante tramite _lerp()_ delle magnitudini e computare la direzione risultante tramite _slerp()_ delle direzioni;

Non si ottiene, però, lo stesso risultato dell'interpolazione lineare, anche se è molto simile. Questa similarità aumenta quando $d_0$ e $d_1$ sono simii oppure $t$ è un valore vicino ad $\frac{1}{2}$. Il costo computazionale extra però non lo rende vantaggioso.

----------------------------------------------------------------

### Norma
La **norma** di un vettore indica la sua lunghezza, la sua magnitudine, la distanza tra due punti:

$$\text{Dato } \vec{v}=(x,y,z), \quad \Vert \vec{v} \Vert =\sqrt{(x^2 +y^2 +z^2)}$$

----------------------------------------------------------------

### Normalizzazione
La **normalizzazione** di un vettore $\vec{v}$ è una tecnica la quale permette di ottenere il suo versore. Per fare ciò, si utilizza la seguente formula:

$$ \vec{vnorm}=\frac{\vec{v}}{\Vert \vec{v} \Vert}$$

La normalizzazione non è applicabile al vettore degenere, in quanto si tratta di un vettore con lunghezza $0$.

Le operazioni sui versori sono essenzialmente le stesse dei vettori. E' necessario, però, prendere alcuni accorgimenti:
- l'interpolazione tra due versori restituisce come risultato un vettore. Risulta, quindi, necessario normalizzare tale vettore. Una possibile soluzione è utilizzare la funzione _slerp()_, la quale restituisce un versore facendo l’interpolazione sferica. Questo metodo, però, non è consigliato, dal momento in cui le funzioni _cos_ e _sin_ sono molto lente.

$$slerp(\vec{v},\vec{w},k)=s in(1-k) \alpha sin(\alpha)\vec{v}+sin(k\alpha)sin(\alpha)\vec{w}$$
$$ \text{ dove } \alpha= \text{ angolo tra } \vec{v} \text{ e } \vec{w} $$

----------------------------------------------------------------

## Estrapolazione
L'**estrapolazione** è una combinazione lineare simile all’interpolazione, con la differenza che, nonostante $a+b = 1$,  $a, b \notin [0,1]$.

----------------------------------------------------------------

## Prodotti tra vettori (e versori)
Per quanto riguarda i prodotto tra due vettori, ve ne sono due:
- il prodotto **dot**, indicato con $\vec{v} \cdot \vec{w}$, oppure $< \vec{v}, \vec{w} >$;
- il prodotto **cross**, indicto con $\vec{v} \times \vec{w}$.

### Prodotto dot
Il prodotto dot è l’equivalente del **prodotto scalare** ed è la somma dei prodotti tra le coordinate dei vettori:

$$\vec{v} \cdot \vec{w} =(vx\cdot wx)+(vy \cdot wy)+(vz \cdot wz)$$
$$\vec{v} \cdot \vec{w} = \sum_{i = 1}^{n}\vec{v}_i\vec{w}_i$$

Il prodotto dot gode di numerose proprietà:
1) è un test di **ortogonalità** per vettori. infatti, due vettori (o versori) sono ortogonali se e solo se il loro prodotto dot ha come risultato $0$;
2) se il risultato del prodotto dot è diverso da $0$, il segno indicherà se i vettori sono direzionati allo stesso modo o meno. Nel primo caso il prodotto dot sarà positivo (e quindi l'angolo tra di essi sarà un angolo acuto), altrimenti sarà negativo (e quindi, l'angolo tra di essi sarà ottuso);
3) il prodotto dot è direttamente proporzionale alle norme dei due vettori ed al coseno dell'angolo che formano. Quindi, il prodotto dot tra due versori sarà proporzionale al solo coseno;
$$\vec{v} \cdot \vec{w}= \Vert \vec{v} \Vert \cdot \Vert \vec{w} \Vert \cdot cos(\alpha)$$

4) il prodotto dot di un versore con un versore può essere interpretato come un valore indice della misura della similarità (tra $-1$ e $1$);
5) il prodotto dot di un vettore con sè stesso dà come risultato la sua norma al quadrato:

$$ \vec{v} \cdot \vec{v} = \Vert \vec{v} \Vert^2 = (x^2 + y^2 +z^2)$$

6) il prodotto dot tra un vettore $\vec{v}$ ed il risultato di un’interpolazione tra $a$ e $b$ equivale all’interpolazione tra $\vec{v} \cdot a$ e $\vec{v} \cdot b$:

$$\vec{v} \cdot lerp(a,b,k) = lerp(\vec{v} \cdot a,\vec{v} \cdot b,k)$$

7) con questo prodotto è possibile estrarre una coordinata da un vettore:

$$\text{se } \vec{v}=(x,y,z) \text{ e } \vec{w}=(0,1,0)  , \to \vec{v} \cdot \vec{w}=y$$

8) il prodotto dot é **lineare;

### Prodotto cross
Il prodotto **cross** è l’equivalente del prodotto vettoriale: il risultato di questo prodotto tra due vettori $\vec{v}$ e $\vec{w}$ è quello ortogonale a entrambi e, geometricamente parlando, definisce l'area del parallelogramma costruito applicando i due vettori allo stesso punto. 

![[cross_product.png]]

Per calcolare tale prodotto, si procede nel seguente modo:

$$\Vert \vec{v} \times \vec{w} \Vert = \Vert \vec{v} \vert \cdot \Vert \vec{w} \Vert \cdot \vert sin(\alpha) \vert$$

dove $\alpha$ è l'angolo compreso tra i due vettori.

$$\text{dati } \vec{v}=(xv,yv,zv) \text{ e } \vec{w}=(wx,wy,wz),$$

$$\vec{v} \times \vec{w}= ( vy \cdot wz - vz \cdot wy , vz \cdot wx - wx\cdot vz , vx\cdot wy - vy\cdot wx )$$

Il prodotto cross è utile a:
- trovare vettori ortogonali e, di conseguenza, costruire basi ortonormali;
- fare il test di collinearità;
- trovare l'area di un triangolo tridimensionale;
- trovare la normale di un triangolo tridimensionale;

Mentre le altre operazioni sono generalizzabili ad un numero qualsiasi di dimensioni, il cross product è definito esclusivamente nel caso tridimensionale.

A differenza del prodotto dot, il cross non è commutativo. Infatti, invertire i due vettori permette di ottenere il vettore ortogonale opposto. Nonostante queste limitazione, il prodotto cross gode delle seguenti proprietà:
1) la norma del vettore risultante è proporzionale a quella dei vettori operandi e al seno dell’angolo che formano;
2) Il prodotto cross di un vettore con sè stesso dà il vettore degenere come risultato, in quanto l'angolo tra un vettore e sè stesso è $0$.

----------------------------------------------------------------

## Sistemi di riferimento
Punti, vettori e versori giacciono in un sistema di riferimento con $3$ assi, ovvero $x$, $y$ e $z$, i quali sono versori e sono reciprocamente ortogonali.<br />
Uno **spazio $n$-dimensionale di riferimento** è quindi formato da $n$ assi (vettori) e da un punto di origine.<bt />
Un qualsiasi vettore $\vec{v}$ può essere espresso in esattamente $1$ modo come combinazione lineare dei versori degli assi.<br />

Per rappresentarli intuitivamente, vi sono principalmente due approcci:
- **left-handed**: si usa uno schema “a mano sinistra” per rappresentare gli assi, precisamente la $x$ è il pollice, l’indice è $y$ mentre il medio è la $z$;
- **right-handed**: stesso approccio del left-handed ma con la mano destra.

Questi assi rappresentano tante cose in base alle convenzioni e purtroppo non vi è uno standard tra i vari game engine: Unity e Unreal ad esempio sono left handed ma la loro posizione degli assi è differente.

----------------------------------------------------------------

# Trasformazioni spaziali nei giochi 3D
Una trasformazione è il passaggio di un oggetto dal suo sistema di riferimento ad un altro. Una trasformazione importante è quella che permette di passare dallo spazio locale (o spazio oggetto) allo spazio mondo, quello in cui vi sono tutti gli oggetti della scena. 

Precisamente, **la trasformazione è una funzione che, dato un insieme di oggetti, restituisce lo stesso insieme**. Le trasformazioni **vengono utilizzate al fine di definire uno spazio comune per gli oggetti**, esse sono alla base di dello sviluppo di un game engine e quindi di un gioco.

Queste trasformazioni sono **affini**, ovvero che, **dato un sistema di riferimento, ne viene definito un altro con assi e origine indipendenti dal primo**. Una trasformazione **affine è lineare**, quindi:

se f è una trasformazione, f(p+bv)= f(p) è f(pv).

Le trasformazioni non riguardano solo il passaggio allo spazio mondo: ve ne sono infatti altrettante che permettono il passaggio a uno spazio locale “più grande”, allo spazio vista e allo spazio clip. 

**Una trasformazione affine può essere rappresentata come una moltiplicazione con una matrice 4x4**:

- **le prime 3 colonne indicano l’orientamento degli assi** x, y e z, quindi sono **utilizzate per eseguire delle rotazioni**;
- **la quarta colonna indica le coordinate del centro locale rispetto a quello globale**, utile **per le traslazioni**;
- **L’ultima riga é UGUALE per tutte le matrici di trasformazione e indicano le coordinate affini**, il valore di questa è **0 per i vettori/versori** (e quindi per i vettori x, y e z) e **1 per i punti** (il centro dello spazio locale all’interno dello spazio mondo).

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.004.png)

**Le moltiplicazioni di questa matrice** con un punto/vettore **possono essere** viste nei seguenti modi:

- **prodotto dot tra le righe e il punto/vettore**;
- **combinazione lineare tra le colonne e le singole celle del punto/vettore**.

Entrambi **i risultati sono equivalenti**.

Le coordinate affini della matrice fungono da astrazione rendendo tutto lineare e quindi è possibile utilizzarla sia sui punti sia sui vettori, infatti dal momento che questi ultimi non hanno una posizione, non verranno influenzati dall’ultima colonna, cosa che invece succede coi punti.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.005.png)
## Scene gerarchiche
![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.006.png)

Per portare tutta la macchina in spazio mondo, bisogna prima portare tutto le ruote nello spazio macchina e infine tutto l’oggetto in spazio mondo, quando una ruota subisce due trasformazioni e, per sapere dove si trova, si moltiplica prima per Tmacchina e poi per Tmondo:

Se c= centro ruota, cm=centro ruota in spazio mondo, allora:

cm=Tmondo⋅Tmacchina⋅c

Possono quindi considerare Tmondo⋅Tmacchinacome un’unica operazione componendo le due matrici in una sola.

**L’interpolazione nelle matrici è utile al fine di calcolare le trasformazioni intermedie mentre l’inversione serve a calcolare la matrice inversa**, quella che permette ad esempio il passaggio **dallo** **spazio mondo allo spazio oggetto**.

Nel campo dei videogiochi, l’utilizzo delle matrici come trasformazioni non è buono** dal momento che:

1. **Le matrici non sono compatte, bisogna memorizzare al minimo 12 numeri**;
1. **non sono abbastanza veloci da utilizzare**;
1. **la composizione è lenta**;
1. **l’interpolazione non permette di ottenere la matrice desiderata dal momento che il calcolo** che viene effettuato **è lineare**:

Nel caso del lancio di un oggetto

problema interpolazione matrici

**Anche se la traiettoria è dritta, l’oggetto lanciato viene ridotto di dimensioni**;

1. **L’inversione non va tanto bene**;

**Per risolvere** questo problema, **si tengono separati i singoli componenti** della trasformazione, **precisamente**:

1. **Si utilizza uno scalare per indicare la scalatura uniforme**, se questo valore è maggiore di 1, allontana i punti dall’origine, se compreso tra 0 e 1 li avvicina e, se minore di 0, i punti si allontanano ma tutto viene invertito, (la controparte non uniforme non è ben vista e quindi è meno utilizzata);
1. **Per le traslazioni si utilizza un vettore corrispondente alla distanza del centro locale dal centro mondo** (come nella matrice);
1. Per quanto riguarda **le rotazioni, vi sono vari metodi** che vedremo in seguito.

I vantaggi della trasformazione scomposta sono:

1. **un’applicazione veloce** dal momento che si utilizzano solamente le componenti necessarie, **tuttavia bisogna gestire diversamente l’inversione** dal momento che **rotazione e scalatura spostano le coordinate del centro locale**. Per invertire una trasformazione la traslazione diventa opposta, la scalatura si inverte così come la rotazione, oltre a ciò bisogna considerare che l’ordine di queste operazioni si inverte, quindi per evitare ciò:

dato un punto p, una rotazione R, una scalatura s e una traslazione t, calcolo il punto di arrivo della trasformazione q:

q=R(s⋅p)+t

Posso quindi trovare la formula inversa per calcolare p dato q:

q-t=R(s⋅p)→R-1(q-t)=s⋅p→semplifico s per avere solo p:R[-1](q-t)/s=p

Possiamo quindi distribuire le operazioni per evitare di cambiare l’ordine delle operazioni:

p=R-1( 1sq) +R-1(-t)s 

Perciò avrò la nuova rotazione  R’, la nuova scalatura s’ e la nuova traslazione t’:

R’=R[-1], s'=1s, t'=R[-1](-t)s	

**Queste tre operazioni non sono commutative, quindi si utilizza sempre un ordine preciso** (prima rotazione, poi traslazione, e infine scaling o altri ordini, basta che se ne scelga uno e si rimanga su quello).

**La combinazione di due trasformazioni è facile da applicare**, basta applicarne prima una e poi l’altra:

se q=Ra(sa⋅p)+ta e u=Rb(sb⋅q)+tb

allora u=Rb(sb⋅Ra(sa⋅p)+ta)+tb
## Metodi di rappresentazione delle rotazioni
Le rotazioni sono trasformazioni in cui l’origine rimane inalterata, essa possiede 3 gradi di libertà per quelle 3D, che sono gli assi. 

Una rotazione può essere paragonata a una macchina fotografica  in cui l’origine è l’oggetto che sto puntando: con un asse mi muovo orizzontalmente, con un altro verticalmente mentre con il terzo ruoto la fotocamera per scattare una foto in portrait o in landscape. 

Le rotazioni rappresentano il passaggio dai giochi 2D a quelli 3D. Quando essa viene effettuata, viene prima di tutto effettuato un confronto per capire se andare in senso orario o in quello antiorario, scegliendo sempre la strada più corta:

dati a e b e un valore t, per ogni k intero b=b+k\*360 con k naturale

se a-b > a-(b+k\*360) allora interpolo su quest’ultima

altrimenti interpolo sulla prima

Per ottenere l’angolo da un vettore non è bene utilizzare cos e sin dal momento che sono molto costose, per questo motivo viene utilizzata la funzione atan2.
### Angoli di Eulero
Oltre alle matrici, un metodo per rappresentare la rotazione sono gli angoli di Eulero. 

**Una rotazione 3D può essere vista come una successione di 3 rotazioni sui tre assi, esse non sono commutative quindi si utilizza sempre un ordine predeterminato.** In spazio si memorizzano solo 3 numeri, corrispondenti ai tre angoli e ciò lo rende molto intuitivo ed efficiente. Le rotazioni si identificano con tre tipi diversi, a seconda dell’asse su cui ruotano, e normalmente in aeronautica sono descritte come::

- **Rollio**: rotazione dell’asse lungo il corpo dell’oggetto, limitato nell’intervallo [-90°,90°];
- **Beccheggio**: rotazione con l’asse orizzontale, imitato nell’intervallo [-90°,90°];
- **Imbardata**: rotazione sull’asse verticale.

![[angoli_eulero.png]]

Svantaggi negli angoli di Eulero:

- L’implementazione degli angoli di Eulero è molto onerosa; 
- Non si possono interpolare bene;
- un discorso simile vale anche per l’inversione (dovrei invertire l’ordine delle rotazioni) 
- è comunque possibile convertirli in matrice per facilitare il processo. 
- Il problema più grande di questa soluzione riguarda il cosiddetto Gimbal Lock, ovvero la sovrapposizione di rollio e imbardata che ha come conseguenza l’annullamento degli effetti del beccheggio. In altre parole: se la prima rotazione effettuata su un asse fa allineare gli altri due assi, la rotazione verrà annullata dalle successive.
### Rotazione asse-angolo
Per far fronte ai problemi degli angoli di Eulero, possiamo utilizzare la soluzione dei fisici: la rotazione asse-angolo. Questo tipo di rotazione **utilizza un versore come asse e uno scalare come angolo**,

**Caratteristiche Asse-Angolo**:

- Molto compatto, usiamo solo 4 scalari (1 angolo, coordinate asse);
- Difficile da applicare: di solito ci si sposta su matrici 3x3 o quaternioni;
- la loro inversione è facile e super veloce: per farla basta invertire l’asse oppure l’angolo. Se inverto entrambe invece il risultato non cambia, ciò vuol dire che vi sono almeno due rappresentazioni per ogni rotazione: 

(αx,αy,αz,α) e (-αx,-αy,-αz,-α);. 

NOTA: la rotazione identità ha ∞ rappresentazioni: se ɑ=0, lo è con qualsiasi asse e quindi sono sempre la stessa rotazione. Questo provoca problemi sull’interpolazione (trovare lo shortest path) e devo quindi avere un modo per testare l’equità/similarità tra le rappresentazioni.

- La composizione di queste rotazioni non è molto conveniente e non sono nemmeno molto intuitive;
- ` `l’interpolazione è semplice da fare, ma a costo di alcuni caveats (piccoli svantaggi):
1. shortest path per gli assi. Risolvo flippando uno tra asse e angolo;
1. shortest path per angoli: controllo sia l’angolo normale, che l’angolo opposto cioè α mod(360°);
1. Per interpolare gli assi c’è bisogno di una tra SLERP o NLERP quando si interpolano i versori;
1. usando il punto a, si impediscono i casi degeneri (che hanno infinite rappresentazioni).

Pur avendo questi caveat, l’interpolazione di asse-angolo dona dei risultati ottimi, i migliori per ora.

Una variante di questo metodo è rappresentare tutto con un vettore v’ con verso e direzione dell’asse e lungo quanto l’angolo, in questo modo si occupa meno spazio e si hanno gli stessi vantaggi e svantaggi, a parte il fatto che sia la rotazione identità, che le altre hanno UNA SOLA rappresentazione (se ɑ=0, l’asse è indifferente, perciò abbiamo solo l’angolo).

Il metodo asse-angolo può essere convertito in prodotto di matrici 3x3 qualora necessario:

Dati due assi *dn* e *do*, posso calcolare il vettore ortogonale *a* col prodotto cross e poi normalizzare il risultato:

A=dn x do DA NORMALIZZARE

dato che |a|=sin(α)per via delle proprietà del prodotto cross, posso utilizzare la funzione atan2 per trovarlo:

α=atan2(do⋅dn,|a|);

dove do\*dn è cos(ɑ) per via delle proprietà del prodotto dot:

cos(α)= v⋅w, sin(α)=|a|.
### Ripasso: numeri complessi
Piccolo ripasso sui numeri complessi:

esiste un numero immaginario i, tale che i2=-1, e per ogni altra operazione, isi comporta come un numero reale (non zero). Di conseguenza, abbiamo un numero della forma

a+bi, con a,b ∈ℝ, chiamati numeri complessi. L’insieme dei numeri complessi è ℂ.

a= parte realeb=parte immaginaria

L’algebra dei numeri complessi è determinata dalla proprietà i2=-1:

ad esempio, la somma è (a+bi)+(c+di)=(a+c)+(b+d)i

il prodotto è 

(a+bi)⋅(c+di)= ac+adi+bci+bd(i2)=

ca+adi+bci-bd (ricorda che i2=-1)=

ac-bd+adi+bci.

I numeri complessi si rappresentano su un piano, a differenza dei reali che si rappresentano su una retta. ad esempio, a+bi sul piano con a=x e b=y:

a+bi

parte immaginaria 

i

parte reale

a

b

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.008.png)

Posso rappresentare a+bi come un vettore v. quindi:

la somma tra numeri complessi può essere rappresentata come una somma di vettori!

Il prodotto tra numeri complessi può essere rappresentato come una somma di angoli con moltiplicazione delle distanze:

dati due vettori a, b che generano due angoli α,β⇒prodotto: a⋅b e poi α+β.
### Quaternioni
Un quaternione è una generalizzazione dei numeri complessi in 3D, in cui vi sono tre valori i,j,k=-1 con le stesse proprietà di i. Tuttavia questi non possono semplificarsi tra loro: infatti i⋅j=k , non -1 come risultato: possiamo quindi dire che **la moltiplicazione di due fattori diversi dà come risultato il terzo**:

i⋅j=k	j⋅k=i	k⋅i=j	i→j→k

da notare che **si utilizza un ordine preciso per la moltiplicazione dei fattori, questo perchè queste operazioni non sono commutative**, andando contropelo infatti si ottiene lo stesso fattore ma negativo:

j⋅i=-k	k⋅j=-i	i⋅k=-j

Un quaternione si esprime nella forma (a,b,c,d), dove:

1. a →  componente immaginaria di i;
1. b → componente immaginaria di j;
1. c → componente immaginaria di k;
1. d → parte reale

**quindi un quaternione è espresso nella forma ai+bj+ck+d**. 

A livello implementativo, si usa un Vec4=(a,b,c,d) ∈ℝ, o come coppia vettore-scalare (v,d) dove v=(a,b,c) cioè parte immaginaria e d=scalare cioè parte reale.

Il coniugato di un quaternione è l’inversione del segno della sua parte immaginaria.

Punto= d=0;

Rotazione= se p=quaternione(ai+bj+ck+d), ||p||=1

||p||=magnitudine: a2+b2+c2+d2→ ||p||2=a2+b2+c2+d2

L’interesse per il 3D è tale solo quando la magnitudine è unitaria, cioè ||p||=1.

**Operazioni sui quaternioni**: somma, scalatura, interpolazione e magnitudine come i Vec4, perciò **sono triviali**.

**Coniugazione**: ǭ=-ai-bj-ck-d; Serve ad indicare la rotazione di un punto, dato p=punto e q=rotazione, per rappresentare la rotazione ottengo un punto di arrivo p'=q⋅p⋅(ǭ).

L’operazione inversa della coniugazione è ottenibile moltiplicando il risultato per il coniugato della rotazione utilizzata, questo perchè una rotazione è il suo coniugato sono opposto:

quindi, dato q rotazione,q⋅ǭ=1, quindi a2+b2+c2+d2=1.

In spazio il quaternione è molto semplice da memorizzare dal momento che si può rappresentare con un vettore per la parte immaginaria e uno scalare per quella reale. 

Inoltre, i quaternioni hanno una proprietà molto importante, la norma al quadrato del vettore e il quadrato di d è uguale a 1:

|v|2+d2=1

Il quaternione identità è (0,0,0,1) ed è coniugato di sè stesso.

Un quaternione vd può essere rappresentato con le seguenti formule:

v⋅sin(d2), cos(d2)

Esempio: rotazione inversa di 180° sull’asse y:

dati v=[0,1,0], d=cos(1802)=cos(90)=0, vd=[0,1,0,0].**L’inversione di un quaternione descritto da un vettore ⊽ e dallo scalare d avviene negando il vettore ⊽ oppure il suo scalare d.**Se nego entrambi non cambia nulla, infatti:

q=[⊽, d]=(⊽⋅sin(d2, cos(d2)))-q=[-⊽, -d]=(-⊽⋅sin(-d2),cos(-d2))=(⊽⋅sin(d2),cos(d2))

Ciò causa problemi di shortest path:

⊽⋅d+360=(-⊽⋅sin(d+3602),cos(d+3602))=(-⊽⋅sin(d2+180),cos(d2+180))

Il segno di cos e sin risulta invertito a causa della somma con 180.

Data una rotazione q avente magnitudine 1, se la sua inversa è un quaternione e ha magnitudine 1, significa che rappresentano la stessa rotazione, quindi:

q⋅p⋅ǭ=-q⋅p⋅-ǭ

L’interpolazione avviene utilizzando lo shortest path, per farlo si utilizza semplicemente il prodotto dot.

Il prodotto tra quaternioni dà come risultato un altro quaternione, per calcolarlo in modo semplice si utilizza il seguente approccio:

Dati due quaternioni p=(⊽,h) e q=(w,d), con ⊽=(a,b,c,d) e w=(e,f,g,h):

1. si fa il prodotto dot tra (a,b,c) e (e,f,g);
1. si moltiplicano le parti reali d e h;
1. si fa il prodotto tra il vettore (a,b,c) e lo scalare h;
1. si fa il prodotto tra il vettore (e,f,g) e lo scalare d;
1. tutto il resto è il prodotto cross tra (a,b,c) e (e,f,g).

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.009.png)

Il risultato è quindi il seguente:

(de-cf+bg-ah)i+(ce+df-ag+bh)j+(-be+af+dg+ch)k+(ae+bf+cg+dh)

I quaternioni occupano poco spazio, sono facili da cumulare, invertire e interpolare, tuttavia non sono intuitivi e, come per la rotazione asse angolo, vi sono più rappresentazioni di una stessa rotazione.
### Recap-Quaternioni
- Quaternione espresso in forma q=(⊽,d);
- Rappresenta un punto 3D se d=0, un vettore ⊽ se d=1;
- Rappresenta una rotazione 3D se q è unitario (||q||2=1), cioè ||q||2=||⊽||2+d2=1;
- In tutti gli altri casi, non ci interessa.
- Se q=rotazione, e p=punto, con p,q ∈ ℍ:
  - q⋅p⋅ǭè il punto/vettore ruotato;
  - ǭ è la rotazione inversa di q;
  - q0⋅q1è la composizione delle rotazioni (prima q1, poi q0);
  - ǭ⋅p⋅q ho il punto p ruotato nella direzione opposta.

Una trasformazione può anche essere rappresentata anche con i quaternioni duali, che permettono di rappresentare anche le traslazioni oltre che alle rotazioni. Questo accade per via della sua struttura: si utilizzano infatti i numeri duali, della forma (se p,q quaternioni): p+εq dove ε2=0 con ε≠0, il funzionamento è più o meno come quello dei numeri complessi. Possiamo quindi considerare il quaternione duale come una coppia di quaternioni, uno di questi ha appunto la componente duale ε:

qd=(a,b,c,d,e,f,g,h)=ai+bj+ck+d+ei⋅ε+fj⋅ε+gk⋅ε+h⋅ε. La rototraslazione ottenuta con i quaternioni duali è migliore rispetto alla coppia quaternione, vettore di traslazione. Inoltre, l’interpolazione è molto più precisa, e si fa sulla rotazione e la traslazione assieme.
#
# Scene graph
Lo scene graph è una grafo diretto e aciclico i cui nodi sono gli oggetti della scena mentre gli archi rappresentano la trasformazione di un oggetto per passare dal suo spazio a quello del nodo a cui fanno riferimento. **L’obiettivo dello scene graph è quello di semplificare la gestione degli oggetti della scena così come i loro aggiornamenti**: il movimento di un oggetto viene anche effettuato da tutti gli oggetti a cui riferisce. Ogni oggetto della scena mantiene una sola trasformazione, ciò vuol dire che è possibile modificare lo scene graph senza modificare la posizione degli oggetti.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.010.png)

Si può notare che effettivamente lo Scene graph è più un albero che un grafo, si utilizza quest’ultima struttura perchè di solito si tiene in memoria un solo modello e si replica dov’è necessaria posizionandolo nel posto giusto, nel caso di Unity questo ragionamento viene fatto dai Prefabs.

Una trasformazione è detta locale quando parte dal suo spazio locale e arriva in quello del suo genitore, globale invece quando dallo spazio locale si finisce nello spazio mondo; 

Nel caso delle ruote, T3 è una trasformazione locale che porta da spazio ruota a spazio telaio, mentre H=T0\*T3 porta la ruota in spazio mondo. Una volta che l’oggetto è in spazio mondo, è possibile applicare delle trasformazioni che garantiscono il movimento, precisamente si procede nel seguente modo:

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.011.png)

Dato lo scene graph, per far andare l’oggetto L in spazio mondo, si effettua la seguente trasformazione:GL=TB⋅TE⋅TL, dove GL è la trasf. globale del nodo L, e TB,E,L

sono le trasf. locali dei nodi B,E,L. Per calcolare la nuova posizione dell’oggetto L, si calcola prima la trasformazione globale di L già spostato, se voglio ad esempio spostarlo sotto l’oggetto D:

GL'=TD⋅TL', dove TL’ è la nuova trasformazione locale di L, attualmente non conosciuta.

A questo punto si fa il calcolo di TL’:

GL=GL'⇒TBTETL=TDTL'

TL'=TD-1TBTETL

Per spostare L nello scene graph si sale prima verso lo spazio mondo e poi si scende nello spazio locale desiderato. Questa discesa viene effettuata invertendo le matrici, come nel caso del passaggio alla spazio D. 

Lo stesso ragionamento viene utilizzato quando bisogna cambiare orientamento o posizione degli oggetti nella scena.

Le trasformazioni più importanti nel game engine sono:

- **La trasformazione di modellazione**, ovvero quella che permette di **portare tutti gli oggetti in spazio mondo**;
- **La trasformazione di vista**, in cui **tutti gli oggetti vengono portati in spazio vista**, ovvero lo **spazio locale della camera**;
- **La trasformazione di clip porta gli oggetti da spazio vista a spazio clip**, utile come riferimento per disegnare i pixel sullo schermo;
- **La Model-View è una composizione di modellazione e vista che permette di portare gli oggetti da spazio locale a spazio vista**.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.012.png)

Unity utilizza i gameObject per rappresentare gli oggetti nella scena e quindi i nodi dello scene graph, esso ha un campo transform in cui è presente la trasformazione verso lo spazio padre, inoltre è possibile calcolare le trasformazioni globali.
# Fisica 3D
La fisica nei giochi 3D è molto importante, soprattutto per le animazioni dato che, essendo computate in modo procedurale, si adattano al contesto e sono più realistiche, pur non avendone il controllo totale.

Per via del budget limitato, la fisica è definita come soft real-time, cioè si esprime un vincolo temporale che non è però necessario soddisfare sempre.

Anche se è facile produrre risultati sbagliati, ciò non è importante dato che nessuno se ne accorge.

**La fisica soft real-time è** computazionalmente efficiente, dato che prende dal 5% al 30% della computazione. Il **suo scopo è quello di mantenere una fisica plausibile**, **robusta e accurata al fine di mantenere la giocabilità**.

La fisica può essere assimilabile alla grafica per simulare il realismo, o utilizzabile come componente di gameplay al fine di risolvere puzzle, eccetera (es. Half Life).

**La simulazione della fisica** in uno spazio 3D **è parallelizzabile**, ciò ha caratterizzato per un certo periodo le cosiddette PPU, ovvero dei processori il cui scopo è il computo della fisica, in seguito questo procedimento è stato inglobato nelle GPU per via del progresso tecnologico. Dalla parte software si utilizza un motore fisico integrato nel game engine, esso può essere costruito da 0 oppure esterno (Havok, PhysX, eccetera).

**Un buon motore fisico** **deve**:

- **gestire la dinamica evolvendo elementi fisici nel tempo** (particelle, oggetti rigidi, articolati morbidi e fluidi) **attraverso soluzioni generali o specifiche**;
- **gestire le collisioni**, ovvero **trovare quando due oggetti si stanno toccando** (detection) **e in tal caso rispondere** con la dinamica (response).

La fisica può essere:![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.013.png)

1. **statica:** si studia come far arrivare in un certo stato di equilibrio le varie forze**.** 
1. **dinamica:** tiene conto di velocità, accelerazione e inerzia, per misurare le forze in atto su un oggetto, la traiettoria che segue, ecc e cosa genera quelle forze**.**

Non meno importante è la cinematica, ovvero lo studio dei moti in sè** e non come vengono generati.
## Fisica Dinamica

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.014.png)
Sappiamo che ogni oggetto in un gioco 3D è definito da un punto che ne descrive posizione e orientamento, che possono essere rappresentati con diversi modi (vedi figura).
#### Proprietà oggetti nella dinamica:
Nella dinamica gli oggetti subiscono o possiedono le seguenti proprietà:

1. **un oggetto è definito da un punto, il quale indica la sua posizione;**
1. **La velocità** è definita in due modi:
- **velocità scalare** (speed);
- **velocità vettoriale** (velocity).

**La velocità è la derivata del tempo della posizione**:

se p(t)={fxt,fy(t),fz(t)}, allora p'(t)={f'xt,f'y(t),f'z(t)}=⊽.

1. **ṗ** **è il rate of change**, ovvero **la velocità con cui varia la posizione p**.

La velocità fa parte dello stato degli oggetti.

1. La massa invece indica quanto gli oggetti tendono a non cambiare la propria velocità e direzione, si può quindi descrivere **il *momentum*(o quantità di moto) come la tendenza degli oggetti a mantenere la loro velocità e direzione**:

`	`Momentum=m⋅⊽ 

1. **L’accelerazione** a è invece la derivata della velocità, che descrive la variazione della velocità sugli assi.

a=⊽'=p''’’

1. **La forza è la variazione del momentum**, **e dipende** perciò  **da massa e accelerazione**:

f=a⋅m

1. Derivando l’orientamento, invece della velocità, si ottiene la velocità angolareω, ovvero il cambiamento dell’orientamento nel tempo;
1. si descrive il momento di inerzia I come **la tendenza di un oggetto a non cambiare la sua velocità angolare;** 
1. moltiplicando Inerzia per velocità angolare si ottiene **il momento angolare**, che **descrive la quantità di velocità angolare di un oggetto**:

ω⋅I

1. **L’accelerazione angolare** α**è la variazione di velocità angolare nel tempo** e, come per quella normale, **è la derivata della velocità.** 
1. **Il Torque** τè invece una coppia di forze che **descrive un’accelerazione angolare**:

τ=α⋅I

In poche parole, **posizione, velocità, orientamento e velocità angolare sono parametri che cambiano internamente a un oggetto senza modificarne lo stato, tutto il resto è ciò che fa cambiare un oggetto e quindi il suo stato**. Qui sotto una figura riassuntiva:

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.015.png)

per cambiare posizione e orientamento Unity utilizza Transform mentre per tutto il resto c’è RigidBody, inoltre vi è una variabile booleana chiamata isKinematic che permette di far muovere gli oggetti nel motore grafico anzichè in quello fisico.

Considerando il caso più semplice di un oggetto, cioè le particelle, queste interessano solo la riga nell’immagine relativa al cambio di posizione. Se si parla di oggetti rigidi, si prende anche la linea relativa all’orientamento.

**Nella dinamica dei motori fisici, tutto si ottiene utilizzando una forza f come base**, essa è **calcolata utilizzando vari parametri (posizione,velocità,ecc.)**:

f=force(p, param1,param2,...);

a=fm![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.016.png)

v=v0+a⋅dt

p=p0+v⋅dt

Velocità e posizione sono cumulative. 

E’ possibile notare che **il procedimento descritto sopra è un ciclo**: **si calcola la forza dalla posizione (e altri parametri), da questa calcolo l’accelerazione, con cui calcolo la velocità per ricavare la nuova posizione** (con cui calcolo la forza…), tutto questo dipende dal tempo virtuale del gioco. 

In caso di forza costante, le forze non dipendono dalle posizione e quindi si procede integrando in successione. 




Nella balistica ad esempio si utilizza la forza per gravità:

f=a⋅m

a=g=fm

v(t)=v0+0tg⋅dt=v0+g⋅t

p(t)=v0+0tv+g⋅t⋅dt=p0+v⋅t+(g⋅t2)2

Tutti questi conti danno la velocità e la posizione del proiettile.

Questa soluzione è detta **analitica,** in quanto si analizzano le posizioni, velocità ecc dell’oggetto per calcolarne di nuove in sequenza.

**Questo sistema però non va bene per i giochi se non per cose marginali** come intelligenza artificiale o interfacce dato che **il problema della soluzione analitica è che non vi è alcun modo per calcolare tutto in forma chiusa**. Numericamente parlando, si può risolvere questo problema sostituendo l’integrale una sommatoria:

0t(f(t)dt)=0t(f(t))→p=0t(v(t)dt)=0t(v(t))![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.017.png)

La precisione del risultato dipende da dt, il passo della simulazione.

Oltre alla soluzione analitica, esiste la **soluzione numerica**: invece di descrivere lo stato con una funzione, definiamo gli stati a un certo istante di tempo *t*. Ad esempio, a tempo *t0* abbiamo l’inizializzazione dello stato. A tempo *t1* avremo la sua evoluzione, ecc.
### Metodo di Eulero
Il metodo di Eulero è un tipo di soluzione numerica, dove si memorizzano solamente velocità e posizione calcolate a un certo tempo t, dopodichè si incrementa t e si ricomincia.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.018.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.019.png)

**La soluzione ottenuta con Eulero ha però un errore dipendente dalla grandezza del passo dt,** questo errore è tuttavia lineare. Questo metodo ha lo **svantaggio di non essere invertibile utilizzando gli stessi metodi di calcolo**, per risolvere questo problema** usando formule diverse, si memorizza lo stato ogni tanto e si risimula il tutto. 
#### Cos’è *dt*?
dt è la variazione (il delta) del tempo virtuale dall’ultimo step eseguito, cioè lo step più recente della simulazione. Se questo è grande, abbiamo più efficienza in quanto riduciamo gli step da eseguire per simulare un certo ammontare di tempo; Viceversa, se questo è piccolo, abbiamo molta precisione, specialmente nel simulare forze veloci e potenti come gli impulsi (vedi dopo). C’è quindi un tradeoff sul dt: **un dt piccolo dà un risultato più accurato ma si perde in efficienza** mentre è il contrario per i dt grandi.

Molti game engine che utilizzano il metodo di Eulero utilizzano solitamente un dt fisso, ma nulla vieta di farne uno variabile.
#### Ordine di convergenza
L’ordine di convergenza **indica quanto decresce l’errore al decrescere di dt.** Nel caso del metodo di Eulero si ha un errore totale di O(dt), perciò Eulero è un metodo di simulazione numerica del primo ordine. Infatti,  il numero di passi effettuati raddoppia al raddoppiare di t (e quindi anche l’errore), inoltre a ogni passo si introduce un errore O(dt^2). 
#### Recap soluzione analitica - numerica
![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.020.png)
### Forze elastiche
Le forze elastiche sono **forze che si esercitano tra due punti e sono direttamente proporzionali alla distanza:** se queste particelle sono più vicine alla distanza considerata di riposo, esse si allontanano, se invece sono più lontane si avvicinano. 

Ad esempio, se p0 e p1 sono gli estremi di una molla, la forza esercitata da p0 è il vettore p1-p0 normalizzato, mentre la magnitudine dipende dalla distanza di questi due punti, dalla lunghezza a riposo l della molla e dalla costante elastica k:

- Direzione della forza: versore da Vb verso Va;
- Magnitudine: k(l-dist(va,Vb)).

Forza elastica:

v=(va-vb)va-vb

f=v⋅k(p1-p0-l)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.021.png)

L’esempio precedente mostra il caso in cui le particelle agli estremi sono entrambe libere. Nel caso in cui una di questa sia attaccata a un muro, la seconda riceverà una forza maggiore. Una soluzione standard per quanto riguarda i tessuti e altri materiali simili è connettere assieme tante molle fittizie che collegano un punto al vicino del suo vicino, questo metodo permette di rappresentare anche le corde e in generale ogni oggetto elastico cambiando la lunghezza a riposo delle molle.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.022.png)

I sistemi massa-molle possono essere usati per rappresentare:

- corpi elastici deformabili (cioè che tornano alla loro posizione iniziale dopo l’applicazione di una forza);
- Corpi plastici deformabili: assumono la posa deformata permanentemente, cambiando dinamicamente la distanza a riposo lin risposta a una compressione/allungamento eccessiva in alcune condizioni (non semplice);

Per quanto riguarda la simulazione di oggetti rigidi, una possibile idea è quella di utilizzare delle molle con costante elastica tendente a infinito, tuttavia questo metodo non va bene dal momento che le forze cambiano continuamente generando forze enormi in un dt infinitesimamente piccolo.

Nella fisica newtoniana, lo stato di un oggetto cambia solamente in modo continuo, cosa che provoca problemi in una simulazione fisica: infatti non abbiamo modi, con variazioni continue dello stato, per rappresentare in modo corretto certe situazioni; è bene dunque cercare di rompere queste continuità utilizzando i teleport e gli impulsi, cioè metodi che provocano cambiamenti discontinui rispettivamente della e velocità di uno o più oggetti.

Ad esempio, una palla che rimbalza al suolo si deforma in un certo istante per poi tornare normale; ciò avviene a causa di forze molto grandi che non possono essere gestite normalmente dai motori fisici. L’impulso, infatti, non esiste nella fisica vera e propria ma permette di rappresentare all’interno della simulazione mutamenti improvvisi di velocità:

v=v+(im), dove i è l’impulso.

Gli impulsi si applicano una tantum, e di solito agiscono in un tempo infinitesimale, rendendo un cambio discontinuo della velocità.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.023.png)

Utilizzando gli impulsi è possibile effettuare la collision response negli oggetti rigidi in modo efficiente, in quanto si genera una forza molto grande in una frazione molto piccola di un dt: dt rimane uguale, ma al suo interno non ci sarà più una forza enorme su tutto dt, ma solo su una parte, aumentando l’efficienza di simulazione degli oggetti rigidi. 

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.024.png)
###
### Attriti
In un sistema reale, l’energia totale del sistema non aumenta mai: di solito, anzi, decresce nel tempo. L’energia dinamica di un oggetto viene trasformata in energia termica dall’attrito. Nelle simulazioni, un errore molto grave è lasciare che le forze aumentino: questo provoca enormi inesattezze nella fisica e problemi irreali (es. un pendolo che gira su sé stesso velocissimamente e che poi glitcha male). La soluzione è integrare gli attriti nel sistema.

Simulare gli attriti nei giochi non è affatto semplice;la magnitudine degli attriti è direttamente proporzionale a una costante e alla velocità. Un modo banale per calcolarli è trovare una forza che prenda come parametro non solo la posizione ma anche la velocità, chiamata forza d’attrito:, questo è però è molto dispendioso. 

Per risolvere,si simula diminuendo la velocità di una piccola percentuale over time (es. a ogni secondo), detta velocity damping o drag. v=v⋅(1-drag)dt, approssimabile (in simbolo, ≃)  per un drag abbastanza piccolo a:

v=v⋅(1-dt⋅drag), cioè(1-ε)k≃1-kε.

Esempio:

v= 98% della velocità di v dopo un secondo

dump=0,98 oppure drag=0,02

Dopo dt secondi, la velocità è la seguente:

se v=0,98\*v dopo un secondo e v=0,98\*0,98 dopo 2 secondi,

dopo dt secondi avrò: v= [(0,98)^dt]\*v;

dato che (1-ε)^k tende a (1-kε), si ha che:

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.025.jpeg)

Oltre a Eulero, esistono altri metodi di integrazione numerici.
### Metodo Leapfrog
Il leapfrog è un metodo che utilizza posizione e velocità in modo che che esse si aggiornino l’un l’altra. Al fine di aumentare le prestazioni, si aggiornano queste due variabili a intervalli differenti, precisamente se si aggiorna la posizione a un tempo t, a tempo t+0.5 verrà aggiornata la velocità, in questo modo l’errore salirà di dt anziché dt^2. ![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.026.png)

Rispetto al metodo di Eulero, il processo rimane uguale, ma la differenza riguarda l’inizializzazione: a tempo 0, faccio

a=f(p0,...)

v0.5=v0+a⋅dt2

A tempo 0 si calcola la posizione mentre a 0,5 si calcola la velocità.

p1=p0 + v0.5 dt

f=(p1,...)

a=f/m

v1.5=v0.5 + a dt

Forza e accelerazione valgono per un singolo fotogramma, di conseguenza queste non vengono mai memorizzate al fine di utilizzarle in futuro.

Il leapfrog è invertibile permettendo di andare all’indietro ottenendo risposte abbastanza precise.
### Sistema di Verlet e PBD
#### Verlet
Il sistema di Verlet è un metodo che consiste in un cambio di variabili: invece di utilizzare posizione e velocità per descrivere un oggetto, si utilizzano solamente la sua posizione corrente e quella precedente. L’idea infatti è quella di ricavare la velocità di un oggetto usando la posizione data dai suoi punti.

dati il punto corrente pCe il precedente p0:

v=pc-p0

Utilizzando questi due punti, possiamo calcolare la prossima posizione che prenderà l’oggetto. Sappiamo che pc=po + v dt con dt costante, perciò:

v=pc-p0dt e v=v0+a⋅dt

quindi v0+a⋅dt=pc-p0dt. Dunque v0=pc-p0dt+a⋅dt.

Dato che pc=pc+v⋅dt, possiamo dire che pn=pc+v⋅dt, e quindi che pn=pc+(v0+a⋅dt).

pn=pc+(pc-p0dt+a⋅dt)dt, e pn=pc+(pc-p0+a⋅dt2).

Infine, abbiamo che pn=2⋅pc-p0+a⋅dt2=mix(pn,p0,2).

Quindi per riassumere:

pnow=pold+v⋅dt⇒v=pnow-polddt

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.027.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.028.png)

si può quindi notare che la nuova posizione dell’oggetto viene calcolata facendo un’estrapolazione tra la posizione attuale e quella vecchia.

Come per il leapfrog, questo sistema è invertibile, il vero vantaggio però sta nell’utilizzare questo metodo insieme alla dinamica basata sulla posizione, o Position Based Dynamics. 
### Position Based Dynamics - PBD
PBD consiste nell’inserire dei vincoli che le particelle devono rispettare, inserendo dei passi intermedi da eseguire dopo il calcolo della posizione. 

Un esempio è quello di una particella attaccata al muro, in tal caso il vincolo da imporre è quello di non muoversi.

Si consideri ora un secondo vincolo: due particelle devono mantenere una distanza data, in tal caso si procede come segue:

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.029.png)

- prima si trova il versore ƌ=pb-pa||pb-pa||;
- dopo si trova un valore k che è la differenza tra la distanza d e quella attuale delle particelle: k=(||pb-pa||-d)/2// si divide per 2 per le particelle fanno metà strada a testa;
- infine si aggiornano le posizioni: pa+=k⋅ƌ, pb-=k⋅ƌ 

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.030.png)

Possiamo quindi concludere che PBD è utilizzato per mettere a posto le cose attraverso i vincoli.

Per imporre più vincoli posizionali, si inseriscono questi ultimi in cascata, cosa che può inserire incongruenze:alcuni vincoli possono violare quelli precedentemente risolti. 

Tuttavia, ciò non è importante dato che ci sarà un momento in cui tutti i vincoli saranno soddisfatti, tramite operazione di correzione dell’oggetto per rispettare i vincoli.

Un esempio: dati 4 punti connessi tra loro con dei vincoli come in foto, questi non devono collidere con la zona indicata con NO

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.031.png)

Come si può notare, il poligono cade verso la zona NO e, appena collide con essa, il vincolo viene violato e risolto spostando il punto quanto basta per bilanciare il vincolo (Clamping). 

**Clamping: il minimo spostamento necessario per tornare a una situazione che rispetta il vincolo imposto**.

Questo però viola i vincoli riguardanti le distanze tra punti. Al frame successivo, questi vengono risistemati, e si può notare come questo poligono inizi a ruotare: ciò vuol dire che l’oggetto ha acquisito momento angolare in modo del tutto gratuito, da questo possiamo quindi calcolare la velocità del poligono (media delle velocità delle particelle), la sua accelerazione, eccetera. Per quanto riguarda l’orientamento, si può calcolare facilmente la matrice di rotazione. Possiamo quindi concludere che i vincoli permettono come conseguenza la simulazione dei corpi rigidi.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.032.png)

I vincoli del PBD possono essere **soft** quando causano forze che aumentano l’accelerazione dell’oggetto, o **hard** quando le forze causate modificano le posizione dell’oggetto.

I vincoli non riguardano solo accelerazione e velocità, ma anche angoli, area, eccetera.

Il sistema di Verlet unito a PBD è molto facile da implementare, tuttavia bisogna effettuare delle informazioni per estrarre delle informazioni riguardanti la posizione, come ad esempio il baricentro:

b=Σ(mi⋅pi)Σ(mi)

dove mi è la massa della particella i in posizione pi.

Per risolvere ogni vincolo bisogna considerare anche le masse, quindi dato che un vincolo è un’equazione di posizioni, imporlo significa modificare le posizioni in modo tale che sia soddisfatto. Bisogna quindi trovare un valore d che lo soddisfi:

v0=||p3-p5||=5

ciò vuol dire che ||(p3+d3)-(p5+d5)||=5.

per trovare d3 e d5 devo trovare il loro valore minimo tale che soddisfi la condizione sopra.

argmin[d3,d5](d32+d52) t.c. ||(p3+d3)-(p5+d5)||=5

Tenendo conto della massa delle particelle, si ottiene un risultato più preciso:

argmin[d3,d5](m3⋅d32+m5⋅d52)

In questo modo le particelle più pesanti si spostano di meno. 

Nel caso in cui le masse siano differenti, lo spostamento di una particella è proporzionale alla massa dell’altra:

date due particelle i,j:

di=mjmi+mj, e dj=mi(mi+mj)
#### Vantaggi di Verlet + PBD
1. **flessibilità**: constraints differenti possono essere usate per modellare moltissimi fenomeni fisici problematici: le constraints sono facili da imporre, perché includono poche particelle, sono inoltre dirette da definire, e i fenomeni controllati da esse sono altamente plausibili e reali.
1. **robustezza**: la plausibilità della simulazione è assicurata obbligando gli oggetti a seguire le constraints imposte. Ad esempio, una pallina non uscirà mai dalla scatola chiusa che la contiene, se lo vogliamo.
1. **Bypass del bisogno di usare impulsi e forze** per rinforzare la consistenza della simulazione, rendendo il sistema più efficiente.
## Gestione delle Collisioni
Oltre a gestire la dinamica degli oggetti, il motore fisico ha anche il compito di trovare le collisioni e gestirle con la dinamica. Per farlo, il motore fisico divide gli oggetti in statici e dinamici, rispondendo con una serie di task:

1) Bisogna garantire la non compenetrazione di due oggetti in collisione;
1) Bisogna valutare gli urti attraverso gli impulsi;
1) Bisogna gestire gli sfregamenti utilizzando gli attriti;
1) Aggiungere eventuali effetti ad-hoc (effetti particellari, ecc).

Per quanto riguarda il punto 1, si allontanano gli oggetti riportandoli all’ultima posizione valida o semplicemente proiettandoli all’esterno dell’oggetto compenetrato. Per il punto 3 si può aumentare il dragging, questo però porta a isotropia e quindi si preferisce utilizzare una forza parallela al piano di impatto. Per quanto riguarda il punto 2, si cerca di mantenere la forza degli impatti utilizzando le proprietà degli urti.
### Tipi di urti
Un urto può essere:

- **Completamente elastico**: due oggetti che collidono rimbalzano subito dopo;
- **Completamente anelastico**: gli oggetti non rimbalzano e convertono l’energia in altro;
- **Casi intermedi** tra elastico e anaelastico.

Per misurare l’elasticità di un urto, si utilizza un valore scalare compreso tra 0 e 1, in cui 1 è completamente elastico, 0 completamente anelastico mentre tutti gli altri valori sono vie di mezzo, ottenute tramite interpolazione dei primi due. 

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.033.png)

Nel caso di urti elastici, l’energia si conserva: i corpi rimbalzano. Nel caso dell’urto anelastico, l’energia viene persa: gli oggetti si rompono, o si produce calore, ecc.
#### Urti totalmente anelastici
Nel caso di urti totalmente anelastici, si sa che i due corpi dopo l’impatto si comportano come se fossero uniti andando alla stessa velocità, quindi:

vab=ma⋅va+mb⋅vbma+mb

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.034.png)

Nel caso dell’urto totalmente elastico, per capirlo al meglio si considera il caso di un urto unidimensionale (one-way): dopo che due oggetti si sono scontrati, questi ritornano indietro: i loro impulsi sono quindi in direzione opposta e si possono calcolare con un’equazione di secondo grado:

ia=ib=0// prima dell’impatto

ia=(vb-va)(2⋅ma⋅m:b)ma+mb, e ib= -ia//dopo l’impatto

Nel caso in cui le masse dei due corpi siano uguali, le due velocità si invertono dato che:

va'=va+m(vb-va)m=va+vb-va=vb.

vb'=vb+m(va-vb)m=vb+va-vb=va.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.035.png)

Nel caso di collisioni one-way, si fa tendere una delle due masse a infinito, in questo modo l’altro oggetto inverte la sua velocità nel caso elastico mentre in quello anelastico semplicemente si ferma.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.036.png)

Se consideriamo gli urti elastici a una dimensione, possiamo vedere che serve sapere la massa e la velocità degli oggetti:

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.037.png)

Considerando ora l’urto elastico nello spazio 2D e 3D, bisogna tenere conto della velocità rispetto a ogni asse, inoltre serve l’orientamento dell’impatto descritto da un piano e la sua normale, oltre alle assunzioni precedenti.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.038.png)

IN breve si prende il vettore velocità v e lo si divide in due parti: una parte vn avente la stessa direzione della normale e un’altra vr ortogonale a essa.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.039.png)

Il vettore che viene coinvolto nel calcolo dell’urto elastico è solamente quello ortogonale al piano, cioè vn(gli altri due non vengono considerati), bisogna quindi calcolarlo:

vn=(⊽n⋅n)⋅n, dove n è la normale del piano, vn lo scalare prodotto, e ⊽nil vettore.

Quello che essenzialmente si fa all’inizio è il prodotto dot tra ⊽n e n ottenendo uno scalare corrispondente alla lunghezza di ⊽n proiettata su n, infine si moltiplica per il versore n.
### Collision Detection
La collision detection deve **indicare quando avviene una collisione e** in tale caso **fornire i dati associati per fare la response.** Ciò è computazionalmente difficile, se consideriamo sempre tutti gli oggetti della scena, dal momento che le collisioni sono una parte minima della scena e non avvengono in continuazione, portando quindi a uno spreco di risorse . 

Per rendere efficiente la collision detection, bisogna:

- rendere efficiente il test di collisione fra due oggetti;
- evitare l’esplosione quadratica dei test: evitare che Noggetti → N2test

**Per risolvere questo problema** almeno in parte, non si considerano tutti i casi in cui non avviene collisione e cercando di prevedere solo quelli in cui  potrebbero avvenire(early reject). 
### Proxy geometrici
Per provare a prevedere una collisione, si utilizzano dei **proxy geometrici, ovvero delle approssimazioni delle forme create al fine di semplificare i test**. Nel caso dei giochi,  i proxy possono essere usati:

- come **bounding volume:** descrive il **limite superiore dell’oggetto** (l’oggetto sta tutto dentro al bounding volume)utili per ottimizzare l’early reject;
- come **collision object**(approssimazioni o per difetto ): i collision object indicano quando un oggetto è stato effettivamente colpito o meno. 

Usando i proxy, posso dire che **una collisione avviene solamente quando un oggetto interseca il collision object di un altro oggetto! In tutti gli altri casi non sono sicuro di avere collisione.** I proxy si usano non solo nella fisica: hanno anche applicazione per ottimizzare il rendering e quindi per evitare di disegnare oggetti troppo lontani dal player, nell’IA per i test di visibilità, nella UI per indicare l’oggetto selezionato, nel suono per sapere se è ovattato o meno, eccetera.
#### Tipi di proxy
Un proxy può essere di differenti tipi, divisi per proprietà:

1. Sono onerosi da precomputare/aggiornare?
1. Sono onerosi da memorizzare?
1. Sono robusti alle trasformazioni?
1. Quanto è buona l’approssimazione degli oggetti?
   1. per il bounding volume, quanto questo aderisce all’oggetto?
   1. per il collision object, quanto l’approssimazione è simile all’oggetto reale?
1. Quanto è onerosa una query di intersezione? (un test di collisione)
   1. con punti, raggi, altri proxy…
   1. ...e quanto sono buoni i collision data?
#### Sfera![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.040.png)
Le sfere funzionano bene con tutti i criteri visti: sono facili da calcolare e da memorizzare (mem. punto + lunghezza del raggio), inoltre il calcolo delle collisioni è semplice da testare, così come la robustezza alle trasformazioni. Il suo unico problema è che approssima molto male agli oggetti;
#### Capsula![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.041.png)
La capsula cerca di risolvere il problema di approssimazione delle sfere: ne mantiene tutte le qualità e ha anche una buona approssimazione, tuttavia non va bene per gli oggetti lenticolari;
#### Mezzo piano - Half Space![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.042.png)
Il mezzo piano è un piano in cui tutto ciò che ci sta sotto è considerabile come “solido”: utilissima proprietà per simulare i terreni e muri, è memorizzabile abbastanza facilmente, in quanto si memorizzano: 

1. tre coordinate della normale del piano nx, ny, e nz e la lunghezza della normale k;
1. la normale n, distante dall’origine

I test e le rotazioni sono triviali da fare: facili usando il prodotto dot tra il punto da testare p e la normale del piano n n⋅p=nx⋅px+ny⋅py+nz⋅pz+k⋅1, una versione “proiettiva” del prodotto dot cioè date coordinate xyz e w, dove w=0→ vettori, w=1→ punti, come per le matrici.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.043.png)
#### AABB (Axis Aligned Bounding Box)
Gli AABB sono tre intervalli all’interno dei quali si considera tutto accettabile. sono utili per rappresentare stanze, sono facili da computare e memorizzare dato che si memorizza solo il valore massimo possibile (il punto più lontano dall’origine). Questi proxy hanno tuttavia problemi con le rotazioni dal momento che tutto non è più allineato. ![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.044.png)
#### Box
I Box sono generalizzazioni di AABB più robusti e che permettono rotazioni; Si memorizza quindi un Box e una rotazione.
#### Poligoni convessi - 2D![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.045.png)
I Poligoni convessi sono poligoni creati attraverso delle intersezioni di mezzi piani, ognuno delimitato da una linea. Il costo è lineare al numero di vertici (1 test ∀mezzo piano). TEST: una collisione avviene se un oggetto è in TUTTI i mezzi piani. Viene memorizzato come una collezione di linee orientate, permette buone approssimazioni ed è molto flessibile, mantenendo una complessità moderata.
#### Poliedri convessi - 3D![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.046.png)
I poliedri convessi sono come i poligoni ma in 3D. Un poliedro convesso è memorizzato come una collezione di piani, ognuno rappresentato con un Vec4 contenente la normale e la sua distanza dall’origine. Il loro costo è lineare al numero di superfici effettuando i test utilizzando la normale, un punto si può considerare dentro il poliedro se è appunto sotto tutti i mezzi piani. 
#### Poliedri generici
I poliedri generici sono definiti dei “luxury colliders”: sono perfettamente disegnati ad hoc per l’oggetto creato, e sono molto precisi, perciò usati più come collider e quasi mai come bounding volume. La conseguenza di questa precisione estrema è che sono molto onerosi da computare e da testare, in quanto hanno bisogno di algoritmi specifici che richiedono preprocessing e strutture dati specifiche come i BSP-trees.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.047.png)

Data la loro estrema complessità, in alcuni casi si utilizzano poliedri convessi “mascherati” in poliedri generici: se vogliamo ad esempio simulare una rampa di scale, si approssimano in una rampa generica a forma di poliedro convesso. Il gradino viene invece disegnato dalla tessitura applicata sulla rampa , permettendo in questo modo una gestione migliore delle risorse (non modelliamo una hitbox per ogni scalino, ma solo per la rampa con risultato praticamente uguale ma con risparmio molto più grande).![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.048.png)

Questi proxy possono essere combinati insieme tra loro in modo da permette la collisione con oggetti complessi utilizzando meccanismi semplici, anche se sono comunque difficili da costruire e da memorizzare.
### Strategie di collision detection
La collision detection può essere:![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.049.png)

- **statica: prima si muove l’oggetto, poi si testa se collide con un altro o meno.** E’ una verifica “a posteriori”, facile da fare, approssimata e veloce.;
- **dinamica: le collisioni vengono gestite a ogni passo della simulazione fisica. S**i ottiene un risultato più preciso dato che la veridica è continua, ma è più onerosa. Per questo motivo, negli FPS si preferisce calcolare dove colpisce il proiettive anzichè spararne uno vero e proprio.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.050.png)

La detection statica ha un problema: se l’oggetto si muove a velocità molto elevata, o scelgo un *dt* troppo ampio, o gli oggetti che collidono tra loro sono troppo sottili, rischio di saltare il momento in cui collide con un altro oggetto (tunnel effect). **La strategia statica si usa per tutti i tipi di collisione tranne quelle one-way, che usano la strategia dinamica.**
### Metodi per la collision detection
Come abbiamo detto prima, è cruciale evitare l’esplosione quadratica dei test di collisione. Un esempio di esplosione è lanciare una freccia nel nulla su un piano. Se controllassi la freccia per tutta la durata del suo viaggio considerando l’intera mappa, il numero di test da fare sarebbe enorme, in quanto gli oggetti sul piano sembrerebbero tutti possibili di collisione con la freccia (anche se non è veramente così): otteniamo quindi N2 test su N oggetti!

Per evitare l’esplosione quadratica dei test di collisione, vi sono vari metodi che permettono di effettuare la collision detection solamente quando necessario.

Esistono due classi di soluzioni:

1. Strutture di Indicizzazione Spaziale
1. BVH- Bounding Volume Hierarchies
#### Strutture di indicizzazione spaziale
Queste strutture dati sono pensate per accelerare e semplificare la computazione delle query di collision detection (“I’m here. Which object is around me?”). Devono risolvere dei task di:

1. costruzione e aggiornamento di:
   1. **parti statiche di una scena**: facile con un po’ di preprocessing;
   1. **parti dinamiche di una scena**: difficile, serve un aggiornamento in tempo reale che è consuming.
1. accesso e utilizzo nel modo più rapido possibile;
#### Griglia regolare (o lattice)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.051.png)
La scena viene divisa in un array 3D di celle dove si memorizzano gli oggetti. Ogni cella contiene una lista di puntatori a collision objects. C’è collisione se l’oggetto testato cade nella cella contenente il collision object dell’oggetto con cui collide.

Problema: definire la giusta dimensione delle celle. E’ inoltre lunga da costruire, perciò un oggetto che si muove non va modellato con questa tecnica. Per gli oggetti statici è perfetta.
#### kD-trees
I kD-tree sono un metodo che utilizza una struttura ad albero per cercare la zona in cui fare collision detection. 

**A partire da un nodo radice rappresentante l’intera scena, si divide la stessa su uno dei tre assi del piano, e si continua ricorsivamente fino a quando non rimane un solo oggetto nel pezzo di scena considerato**. Può capitare che un oggetto rimanga tra due nodi dell’albero  (**split point**) in quanto sono nella stessa posizione ma non per l’asse scelto: in tal caso entrambi i nodi dell’albero memorizzano lo stesso riferimento (puntano allo stesso oggetto). ![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.052.png)

I KD-Trees hanno le seguenti proprietà:

- Sono un albero binario, per cui la ricerca verrà fatta con tecniche di visita degli alberi;
- ogni nodo è diviso su una dimensione (x,y,z in 3D);
- Variante: ogni nodo ottimizza e memorizza quale dimensione in cui è, oppure
- si sceglie uno stesso ordine di dimensione: es. prima x, poi y, poi z.
- Variante: ogni nodo ottimizza il caso di split point, oppure si fa “always in the middle” (cioè si splitta su tutte le dimensioni allo stesso tempo);

La ricerca avviene facendo una visita dell’albero, questa soluzione viene fatta una sola volta per gli oggetti statici mentre per quelli dinamici si deve ricostruire a ogni frame.
#### Quad-tree e Octa-tree![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.053.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.054.png)
I quad-tree e gli octa-tree (rispettivamente per 2D e 3D) sono una versione dei kD-tree in cui si divide su tutti e tre gli assi in contemporanea (“always in the middle”), e non in sequenza: ogni nodo ha quindi esattamente 4 oppure 8 figli.
#### BSP-tree (Binary Spatial Partition Tree)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.055.png)
I BSP-tree sono una generalizzazione del kD-tree in cui si divide lo spazio in zone senza però utilizzare gli assi ma dividendo in due a ogni passo. In questo modo si evita di avere uno split point e, al costo di una maggior complessità in tempo, permette di ottenere un albero molto più contenuto. Ogni nodo interno corrisponde a un piano, che divide la regione associata ad esso in due. Ho quindi 2 figli, uno per ogni “faccia” dell’albero. Ogni piano è espresso come Vec4, quindi per capire se un oggetto sta sopra/sotto di esso si usa la normale di quel piano (come per i test dei mezzi piani definiti prima, col prodotto dot n⋅⊽+k⋅1). Questo metodo è utilizzato in quanto permette di ottenere le migliori ottimizzazioni alle query di collision detection, ma hanno il peggior tempo di costruzione tra tutte le strutture di indicizzazione spaziale. I BSP-trees sono molto utili per codificare proxy poliedrici concavi e generali. Nell’esempio sotto, per capire come fare, scompongo il poliedro in assi. Costruisco il BSP tree mettendo nei nodi i vari assi A,B,C …; Durante il test di collisione, ci sono due stati per ogni asse: sono dentro l’asse o sono fuori (front-behind). Se sono fuori, termino la visita in quanto non ho collisione. Se sono dentro, continuo finché non arrivo a una foglia. Quando arrivo a una foglia e sono dentro, allora ho collisione.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.056.png)	 ![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.057.png)
#### BVH- Bounding Volume Hierarchies![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.058.png)
I BVH sono un buon metodo per la collision detection in cui si usa la gerarchia derivata dallo scene graph invece di un grafo derivato dallo spazio. A ogni nodo del grafo associo poi un bounding volume .  che incapsula al suo interno tutti i volume dei figli.  

La costruzione di un BVH è molto veloce, fatta in bottom up ricorsivamente, mentre la visita al suo interno è top-down (collisione nel volume? si→ vado giù, no→ vado su), e ha un problema che rispetto ai BSP e altre strutture la visita non ritorna un solo path, ma ci sono più path verso una foglia: dovremo magari tornare su verso un altro nodo dell’albero (come in una normale DFS). L’accesso quindi non è efficiente come altre strutture, perché può avere più rami di visita. Inoltre, la gerarchia stessa non permette di parallelizzare la ricerca.
### Recap strutture di indicizzazione spaziale e BVH
Strutture di indicizzazione:

- Griglia regolare: migliore parallelizzazione per update, costruzione e utilizzo, ha accesso in tempo costante (la migliore), ma complessità in spazio quadratica/cubica (a meno che non si utilizzi l’hashing);
- kD-tree, Quad-tree, Octa-Tree: compatti e semplici. Introducono split objects;
- BSP-tree: ottimizzano gli split→ miglior performance quando li si visita, al costo maggiore di costruzione e update; Sono il metodo più usato per realizzare parti statiche della scena, oltre ad essere usati per i collider di poliedri generici

Gerarchie di bounding volumes (BVH):

- BVH: Costruzione super semplice, accesso non sempre efficiente (multi attraversamento di figli, gerarchia non parallelizzabile). Ideale per realizzare la detection per parti dinamiche della scena. 

Il motore fisico quindi assegnerà:

- La GPU per risolvere i problemi di dinamica e risoluzione delle constraints posizionali;
- CPU per la collision detection, che però presenta nuovi problemi ai task della GPU (es. aggiunge nuove constraints), perciò CPU deve poter comunicare con GPU (problematico su alcune architetture);
# Sistemi di particelle
I sistemi di particelle sono sistemi per rappresentare digitalmente oggetti 3D. Sono di natura fuzzy e sono utilizzati solitamente per rappresentare fumo, scintille, esplosioni, ecc. Essendo composti da particelle, la loro fisica è molto approssimativa così come il sistema fisico che li gestisce: il loro stato è descritto da posizione e velocità. In alcuni casi, anche la velocità angolare e l’orientamento influenzano lo stato delle particelle. Inoltre, queste si muovono utilizzando una funzione analitica anzichè una numerica come Verlet, non possono avere collisioni (in realtà al massimo si possono avere per motivi di efficienza solo collisioni one-way per le sole particelle, anche se a volte non conviene neanche quello)  e inoltre sono molto più procedurali della normale fisica.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.059.png)

Tutti i sistemi di particelle sono tra loro simili, la differenza sta nei parametri fisici considerati per rappresentarli. Ogni particella viene emessa da un emettitore di particelle, e scompare con grande naturalità grazie a un TTL che viene ogni volta decrementato, quindi si possono tenere tutte le particelle in un vettore di lunghezza fissa e computarle in questo modo.

**Quello che ci interessa in particolare dei sistemi di particelle è il loro comportamento collettivo, utile per ricreare la struttura e il comportamento di un oggetto simulato, non la singola particella.** Tutto questo è principalmente **importante per quanto riguarda l’estetica anzichè il gameplay** (non sono comunque da escludere casi in cui viene utilizzato in questo modo).
## Generazione e rendering delle particelle
Emettitore

**Un emettitore è un’astrazione rappresentata da un volume il cui compito è appunto generare le particelle**, per simulare la neve ad esempio si può utilizzare un piano e con esso generare la neve. **Le particelle vengono emesse seguendo questi criteri**:

- **generazione pseudo-casuale usando una distribuzione di probabilità;**
- **seguendo un dato rateo**, generando sempre uno stesso numero **di particelle al secondo**.
- **le particelle prodotte hanno uno stato iniziale** la cui posizione iniziale è generata casualmente dentro l’emettitore, e possiede una velocità iniziale, ecc.
- **Le particelle vengono emesse in un certo intervallo di tempo:** un intervallo corto è adatto alle esplosioni, uno lungo alle colonne di fumo mentre uno indefinito alle fiamme o all’acqua del rubinetto.

L’emettitore ha una forma, che definisce il set di posizioni dove si possono produrre nuove particelle. La forma è un’astrazione 3D, utile per guidare la creazione delle particelle (es. sfera, cono, box,ecc...). Le particelle vengono generate randomicamente, e il loro stato iniziale può essere descritto in spazio globale o locale (es. il fumo di un camino andrà verso l’alto in spazio globale, le fiamme del razzo verso l’alto in spazio locale all’emettitore).![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.060.png)

Ogni emettitore  è un oggetto della scena e quindi fa parte dello scene graph, di conseguenza sarà orientato/posizionato nella scena, avrà trasformazioni globali e locali, e posizionare/orientare l’emettitore significa posizionare/orientare l’intero sistema di particelle. 

La generazione, mantenimento e eliminazione delle particelle è gestita da algoritmi pseudocasuali che generano “rumore”, che ne riflettono la natura randomica e realistica (es. il fuoco).

#### Rendering di un sistema di particelle![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.061.png)
Per quanto riguarda il rendering delle particelle, queste possono essere piccoli modelli 3D, questi però sono molto pesanti e quindi si preferisce l’utilizzo di **impostori** (immagini pre-renderizzate che “simulano” un effetto 3D ma in realtà non lo sono) oppure punti, righe e simili (**point splatting**).

Lo stato di ogni particella viene inizializzato con dati espressi sia nello spazio oggetto e in spazio mondo, ad esempio il dato “oggetto” può essere il fuoco del motore di un’astronave mentre quello “mondo” indica di andare verso l’alto.

E’ prassi calcolare al volo l’area dei sistemi di particelle (anche approssimata) e renderizzare in essa tutte le particelle in una volta.
#### Tecniche screen-space
E’ possibile renderizzare le particelle fondendole in un modello 3D. Questa tecnica è normalmente troppo costosa da usare, ma è approssimabile utilizzando **tecniche screen-space** (**screen-space techniques**) nel seguente modo:![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.062.png)

1) si spiaccica un blob temporaneo per ogni particella in un buffer offscreen;
1) si stimano i limiti dello screen space attraverso la stima delle normali dei blob;
1) si renderizza la superficie risultante;

Questa tecnica è ideale per il rendering di liquidi.

Anche i sistemi di particelle sono assets e dipendono molto dall’engine usato dal creatore, infatti non è possibile aprire con Unreal un asset creato con Unity.
# Modelli 3D
**I modelli 3D** (detti anche 3D mesh) sono una **rappresentazione matematica di un oggetto formata da facce, vertici e bordi, utilizzati per definire l’aspetto di un oggetto a livello grafico**. Il modello di solito segue una sequenza di triangoli, definita **triangle mesh**, in quanto è GPU friendly. La risoluzione di un modello è dettata dal numero di facce, e può essere potenzialmente adattiva.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.063.png)

Matematicamente parlando, una mesh è una superficie lineare formata da porzioni di superfici dette “vertici”, unite da un set di “facce” triangolari, e attaccate lato per lato da “bordi” (vertex, face, edge); Una mesh inoltre è composta da una parte geometrica (cioè i vertici, ognuno con coordinate xyz), connettività o topologia (la forma delle facce che connettono i vertici, es. triangolari) e gli attributi.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.064.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.065.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.066.png)

Gli attributi sono qualsiasi quantità che varia sulla superficie, campionata sui vertici e interpolata in mezzo ai triangoli (le facce).La mesh più famosa e utilizzata è quella di triangoli, detta anche triangle mesh. Una triangle mesh può essere concepita in diversi modi.
#### Zuppa di triangoli
La zuppa di triangoli altri non è che un array di triangoli, dove ogni triangolo è memorizzato come sequenza di tre vertici, e ogni vertice è memorizzato come coordinate xyz + attributi. Questa memorizzazione ha dei problemi relativi alla replica dei dati: la maggior parte delle facce di una mesh sono adiacenti tra loro, e quindi replichiamo dei vertici che sono nella stessa posizione che descrivono facce diverse, sprecando spazio (ad es. la mesh descritta sopra ha V2 e V5 che descrivono due triangoli, quello centrale e quello a destra).
#### Mesh Indicizzate (Indexed Meshes)
Possiamo fare la memorizzazione di una mesh usando due strutture:![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.067.png)

- un array di vertici, che corrispondono alla geometria (coordinate dei vertici xyz) della mesh + attributi; le posizioni possono essere viste come attributi dei vertici per salvare spazio;
- un array di triangoli, che corrispondono alla connettività della mesh, memorizzati come triple di indici che si riferiscono a un vertice nell’array (nell’es. la faccia T1 si riferisce ai vertici V4,V1,V2);

I due array possono essere visti come due tabelle: una per la geometria + attributi e un’altra per la connettività dei vertici.
#### Risoluzione delle mesh
La risoluzione di una mesh equivale al numero di triangoli che la compongono,e può  essere adattiva: il numero di triangoli cambia in base alla situazione, e il numero dei triangoli diventa più “fitto” in certe aree della mesh (es. il player vede un muro? il retro sarà low res, il davanti hi res).

Nei giochi, le mesh più utilizzate sono quelle low-poly dato che il tempo di render è lineare alla risoluzione, perciò con pochi triangoli risparmio tempo di rendering. Inoltre si hanno poche risorse a disposizione e quindi bisogna cercare di sfruttarle al meglio.
#### Attributi
E’ possibile memorizzare diverse informazioni come attributi:

- la posizione, cioè la geometria della mesh;
- la normale, utile per capire l’orientamento di una determinata faccia e quindi calcolarne le luci e le ombre;
- i colori, utili per fare baking e lightning (comportamento delle luci sull’oggetto), usati anche per colorare la mesh in certe situazioni (es. maglia del team);
- le coordinate delle tessiture della mesh, ovvero l’UV-mapping della stessa;
- la direzione tangente, usata per mappatura della normale e effetti di lighting anisotropici;
- i bone links, cioè lo “scheletro” della mesh, usati per animazioni dello scheletro;

Grazie all’interpolazione gli attributi per vertice risultano continui sulla faccia, ottenendo un effetto “smooth” non solo sulla faccia stessa ma anche su tutte le altre (il colore ad es sfuma verso il centro della faccia, ed è più forte vicino ai vertici), di conseguenza i bordi risultano “invisibili” a causa dell’interpolazione di triangoli adiacenti, chiamati anche **soft edges**. ![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.068.png)

Questa continuità rappresenta però un vincolo se si vogliono tenere alcuni attributi discreti come la normale. Per risolvere si duplicano i vertici, che saranno geometricamente attaccati ma avranno alcuni attributi differenti. I bordi in cui c’è discontinuità nel valore degli attributi  sono detti **hard edges**, tutti gli altri vengono invece detti **soft edges**. I vertici duplicati sono chiamati **vertex seams**, in quanto come le cuciture dei jeans si sovrappongono l’una sull’altra. Naturalmente l’operazione di cucitura ha il vantaggio di poter creare discontinuità nei valori, con lo svantaggio di avere una replicazione dei dati (figura sotto). ![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.069.png)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.070.png)
####
#### Rendering di una mesh
Abbiamo definito una mesh come geometria+attributi+connettività. Oltre a questo, per farne il rendering, abbiamo bisogno di un materiale, formato da tessiture, shaders e parametri vari. Per visualizzare una mesh a schermo si utilizza un metodo detto **rastering:** si caricano i dati della mesh e del materiale nella RAM della GPU, che procederà a disegnarla proiettando a schermo ogni vertice, rasterizzando ogni triangolo proiettato a schermo in una sequenza di pixel, e infine processando questi pixel.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.071.png)

Un’altra tecnica è quella del ray tracing, dove si esegue il ragionamento contrario al rastering: per ogni pixel si lancia un raggio e si va a prendere il colore dell’oggetto colpito.

Queste fasi sono tra loro in parallelo per ogni triangolo ma anche per ogni ciclo grazie all’utilizzo di una pipeline.

In GPU l’hardware è poco flessibile dal momento che riesce a processare efficacemente solo le forme descritte da triangoli (sta cambiando con l’arrivo di HW più potente), quindi se si stanno utilizzando mesh che non sono di questo tipo, bisogna convertirle in triangoli. 

Inoltre tutta la scena viene renderizzata in modo indipendente dall’ordine dettato dallo scene graph. E’ necessario, però, stabilire un ordine specifico, in modo da massimizzare l’efficienza di render: una prima idea è quella di fare una visita DFS dello scene graph e generare la mesh alla visita di un dato nodo, questa tecnica non è molto utilizzata nei giochi dal momento che il vantaggio è molto piccolo perché si utilizzano già trasformazioni molto efficienti.

Un altro metodo è quello di renderizzare tutti gli oggetti i cui dati sono già pronti, si fa quindi un clustering degli oggetti aventi gli stessi attributi che permette di chiamare le draw call tante volte con gli stessi parametri e quindi più efficienza (non funziona con gli oggetti trasparenti).

Un terzo metodo è unire insieme tutte le mesh di un certo tipo per renderizzarle facendo un’unica draw call (preprocessing), utile per le piccole operazioni come il calcolo delle normali o il passaggio di attributi. Il vantaggio di questa tecnica è che si ha lo stesso tipo e gli stessi attributi per una serie di oggetti.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.072.png)

Dal momento che non è possibile caricare tutte le le mesh nella RAM già dall’inizio, bisogna adeguatamente gestire tutti gli assets con sistemi simili a quelli del paging della memoria di sistemi operativi (un esempio è la libreria Asset importer ASS-IMP).

Piccola digressione sul preprocessing: esistono diversi modi di fare preprocessing, ad esempio precomputando le normali per ottenere più velocemente l’interpolazione senza doverle ricalcolare a tempo di esecuzione.
#### Tecniche di modellazione
Esistono altre varianti differenti dal modello low poly:

- Suddivisione: si aumenta la risoluzione andando ad aumentare il numero di vertici lavorando quindi su geometria e connettività, dove i nuovi punti sono un’interpolazione lineare di quelli vecchi.
- Sculpting: è una tecnica in cui un’artista (il modeller) scolpisce la mesh andando a manipolare la forma come se fosse una palla di creta attraverso estrusioni e intrusioni, il tutto mantenendo la struttura poligonale. Questa tecnica è però inadatta nei giochi dal momento che i modelli ottenuti hanno una risoluzione troppo alta per essere usata, quindi viene utilizzata solo per giochi ad alta risoluzione oppure per la sua produzione cinematografica.
- Scanning:permette di ottenere la mesh di un dato oggetto andando appunto a scansionare un modello reale.

In generale, le mesh ad alta risoluzione possono essere utilizzate dall’artista come sketch per la creazione del modello low poly.
### Suddivisione
La suddivisione è una tecnica per modellare delle mesh in maniera semiautomatica: il modeller crea una mesh a basso numero di triangoli, e poi utilizza degli algoritmi di suddivisione per ottenere una mesh a maggiore risoluzione e più “piatta”, con bordi meno spigolosi e più uniformi. Può essere iterata, e quindi ripetuta più volte.

Vi sono diversi algoritmi di suddivisione, da Catmull-Clark, Loop effect, Butterfly e Doo-Sabin, che suddividono la mesh in certi modi (es. la butterfly suddivide un triangolo in 4 aggiungendo un vertice in ogni bordo originale). Quello sotto è Catmull-Clark.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.073.png)

Inoltre, gli algoritmi si distinguono per come trattano la geometria della mesh:

- Se tengono i vertici originali nelle posizioni in cui erano, si chiamano schemi **interpolativi**;
- Se mantengono i vertici originali, ma in posizioni nuove, si chiamano schemi **approssimativi**;
- Se non mantengono i vertici, sono schemi **duali**;
#### Tecniche di risoluzione adattiva
Scegliere il livello di dettaglio per le mesh è cruciale al fine di ottimizzare il gioco: la complessità in spazio e tempo delle mesh è lineare al numero di triangoli usati, perciò se ho N vertici ho 2N triangoli. Dato che modelli a risoluzioni alte fisse sarebbero troppo costosi, usiamo una risoluzione adattiva:in base alla distanza rispetto alla nostra posizione (e altri parametri che dipendono dal game engine), si usa un modello con una certa risoluzione anziché un altro, disegnando di conseguenza un numero maggiore/minore di pixel e risparmiando risorse dove possibile. Bisogna però stare attenti ai cosiddetti artefatti di popping: delle discrepanze di un modello che avvengono quando si passa da un livello di qualità a un altro oppure quando magicamente appaiono nella scena. Per evitare ciò, si aumenta/diminuisce la soglia quando si intende aumentare/diminuire la risoluzione: se una mesh normalmente cambia livello di dettaglio a 5 metri, si mette al soglia per il dettaglio maggiore a 5.5 ed a 4.5 per il dettaglio minore, in questo modo il modello non cambia continuamente risoluzione, ma ha un intervallo in cui stare (ad es. se sono a 5.1, 5 in continuazione, non cambia sempre la risoluzione ma solo quando supero i 5.5).

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.074.png)
### LoD (Level Of Detail)
Si costruisce una piramide di livelli di dettaglio (LoD) in cui la qualità di un livello è più grande del 25% rispetto al precedente, quindi la memoria occupata tende a essere intorno alla dimensione del modello con risoluzione massima più 1.33% per il seguente motivo:

(x(1+14+116+164+...))⇒i∈0∞14i=43=1.33. Consumiamo quindi un 1.33% di memoria in più, ma guadagniamo in tempo.

Per ricavare i livelli di dettaglio di un modello, si effettua un'operazione chiamata **lodding**, che può essere:

- **automatica**: quando è lasciata fare al game engine, i risultati al giorno d’oggi non sono buoni;
- **manuale**: i triangoli vengono disegnati a regola d’arte nel modo più ad hoc possibile, producendo un risultato nettamente migliore rispetto al lodding automatico.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.075.png)
### Generazione procedurale di mesh![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.076.png)
Una mesh può anche essere creata in modo procedurale utilizzando un algoritmo, che restituisce una mesh flessibile con alta varietà di ambienti. E’  prassi nei videogames generare proceduralmente un modello in questo modo per poi fare il cosiddetto baking, ovvero salvarlo come un asset per riutilizzarlo.

La generazione procedurale di terreni si adatta molto bene dal momento anche anche la natura è in qualche modo procedurale: gli alberi ad esempio non crescono tutti allo stesso modo ma in base alle condizioni del loro intorno, eccetera.
## Tessiture (Textures)
Una tessitura rappresenta la “buccia” di una mesh ed è utilizzata per aumentare i suoi livelli di dettaglio. La loro risoluzione per motivi di efficienza è espressa in potenze di 2 (a causa di un vincolo hard-wired delle vecchie GPU, ora non più necessario) e non contengono più 4 canali, per averne molteplici si utilizzano più tessiture.

In grafica, un modello è rappresentato dalla coppia (mesh, tessitura).![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.077.png)

Una texture occupa generalmente molta memoria e non è random access, proprio per questo motivo non possono essere compresse come le normali immagini,ma si  utilizzano  tecniche di compressione lossy.La risoluzione ha inoltre un impatto maggiore rispetto a quella delle mesh.

Nei giochi, le tessiture sono rappresentate come una mappa. Una texture map è un’immagine rasterizzata che contiene i cosiddetti texel, l'unità minima di una texture equiparabile ai pixel per le immagini. Ogni mappa è un foglio di tessitura e può essere anche chiamata color-map, diffuse-map, rgb-map, eccetera.
#### Livelli di MIP map
Possiamo effettuare un pre-filtering delle tessiture, come una piramide LoD, ma per le immagini 2D. In questo caso, è banale passare da una risoluzione a un’altra, e lo facciamo fare all’hardware. I LoD in questo caso vengono chiamati livelli di MIP map.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.078.png)
### UV-mapping![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.079.png)
Dal momento che le texture si estendono su due assi u e v, si possono memorizzare le coordinate dei texel e memorizzarle come attributi della mesh. Con l’uv mapping vi è però un problema riguardante i bordi: dato che la texture è la buccia di una mesh riportata in due dimensioni, alcuni vertici e spigoli si replicano nei punti in cui è stata tagliata, per ovviare a ciò si replica il vertice in tale punto.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.080.png)

In spazio texture i texel sono compresi tra 0 e 1 in entrambi gli assi, ciò permette di avere un’astrazione per poter utilizzare la stessa notazione con texture di dimensioni differenti. Lo spazio texture, quindi, è indipendente dalla risoluzione delle tessiture (o aspect ratio)! 

Questa indipendenza rispetto alla risoluzione permette anche di bilanciare la qualità e lo spazio senza rovinare il mapping, inoltre è utile dal momento che in GPU RAM non viene caricata la texture nella sua interezza bensì un po’ di livelli alla volta.

La notazione uv è quella più utilizzata nell’ambito dei giochi, qui gli assi partono dal punto in alto a sinistra come una normale matrice.

Un’altra notazione è st, molto simile a uv con la differenza che l’origine degli assi sta in basso a sinistra.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.081.png)

La costruzione dell’uv mapping è tipicamente effettuata dal modeler con l’aiuto di algoritmi semi-automatici, il suo lavoro consiste nel trovare un punto nello spazio texture (2D) per ogni triangolo nella mesh (3D).

Una strategia per il calcolo dell’uv mapping è la seguente:

1) Si seleziona il punto in cui si vuole effettuare il taglio (cutting);
1) Si esegue l’operazione di unfolding, ovvero si minimizza la distorsione utilizzando appositi algoritmi;
1) Si impacchettano le tracce per minimizzare gli spazi vuoti e si assegnano le aree in base alle necessità, quelle più importanti avranno più spazio.

Alcune texture sono affiancabili (tileable textures), ovvero possono essere ripetute su una superficie per formarne una più grossa (cosa molto utilizzata per ricoprire i  muri e pavimenti),con un grande risparmio in spazio.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.082.png)
#### Tecniche di uv-mapping e mappatura RGB
- L’uv-mapping non iniettivo è la tecnica standard in cui un singolo texel può essere assegnato a più punti della mesh, ottime per la RAM (come il muro sopra);
- Nell’ uv-mapping iniettivo (detto anche unwrapping) vi è una corrispondenza uno a uno tra i texel e i punti della mesh: non c’è quindi overlapping e donano più flessibilità. Sono usate per scopi generali come baking della luce (light baking); ;

Queste tecniche sono solitamente utilizzate insieme, ciò porta a avere due coppie di attributi uv distinti nella mesh.

La mappatura RGB può essere effettuata nei seguenti modi:

- prima si prende l’immagine e poi l’uv-mapping, utile per texture affiancabili o provenienti da una foto;
- prima l’uv mapping e poi la pittura in 2D, tipico delle applicazioni 2D;
- prima l’uv mapping e poi la pittura in 2D, tipico dei software di modeling;

Per quanti riguarda la trasparenza, essa è da da un livello tra 0 e 1 ed è solitamente utilizzata per alberi, drappi, eccetera.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.083.png)
### Bump map
Una Bump map indica la modellazione di una tessitura  per dare l’impressione di una forma e quindi dare un maggior livello di dettaglio alle mesh low-poly, molto facile da renderizzare e da memorizzare sui vertici. I dettagli non sono quindi definiti dalla geometria della mesh, ma dalla tessitura, dato che i texel sono più facili da memorizzare e costano meno dei vertici (approccio texture-for-geometry). In molti casi, il livello di dettaglio influenza il lightning, in modo da “ingannare” l’occhio usando giochi di luce, specialmente se questa varia dinamicamente.

Queste mappe possono essere:

- **Normal map**: si memorizzano le normali delle superfici, esse verranno utilizzate in spazio oggetto con l’uv mapping e nello spazio tangente in superfici indipendenti dall’orientamento;
- **Displacement map**: memorizza la differenza tra la mesh e la superficie dettagliata;

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.084.png)

Dalla prospettiva del modellatore, un modello è descritto usando:

- una mesostruttura:  la bump map che descrive i dettagli del modello (es. muscolatura del cavallo);
- una macrostruttura: la low poly mesh, che descrive la struttura generale del modello;
- una microstruttura: il materiale usato, che definisce ancora più dettagli del modello (es. la criniera e il pelo del cavallo).

Ogni texel nella displacement map memorizzano la distanza della superficie dettagliata lungo la direzione della normale della mesh low poly, definendo uno scalare per texture channel, verso l’interno (intrusione), esterno (estrusione) o entrambe le direzioni. ![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.085.png)

Le **displacement map** possono essere memorizzate in un’immagine come scala di grigi, ad es possono essere rimappabili sull’intervallo [0,1] utilizzando un fattore di scaling globale creato al volo, e sono utilizzate per direzionare il lightning delle normali, l’illuminazione globale (ambient occlusion) , le tecniche di mapping del parallasse, eccetera.

Le **normal map** invece sono utilizzate anch’esse per il lightning ma non fanno parallasse e non danno forma all’oggetto, tuttavia danno l’illusione della forma e proprio per questo motivo sono più convenienti, infatti vengono utilizzate nel rendering. Inoltre le normal map possono essere espresse con coordinate cartesiane. Le normal map sono molto facili da applicare nel rendering poichè usiamo la normale della mappa invece dell’interpolazione tra vertici, tuttavia sono confinate all’oggetto specifico e ogni regione è anch’essa confinata a una specifica area dell’oggetto.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.086.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.087.png)

Le normali sono espresse in coordinate cartesiane, ma in un certo spazio e non sempre (ci sono metodi).
#### In quale spazio codifichiamo le normali?
Le possiamo codificare in Object space, cioè nello stesso spazio dove definiamo la posizione dei vertici. In questo modo, la normale dei vertici diventa inutile, sostituita da quella delle tessiture. Inoltre, ciò è triviale da applicare durante il rendering, dato che usiamo la normale presa dalla tessitura per il lightning. Sfortunatamente però, la normal map è così legata a un singolo oggetto e non può essere usata per altri oggetti, e inoltre ciascuna regione della normal map è legata a un’area specifica dell’oggetto. Quindi può essere usata solo con mappe UV iniettive, e quindi non posso fare tiling né sfruttare la simmetria. 

Un’altra soluzione è usare lo spazio tangente (tangent space). 
#### Spazio tangente (o spazio TBN)
Lo spazio tangente è uno spazio di vettori definito per ogni punto della superficie, dove l’asse z corrisponde alla normale del piano mentre gli assi x e y sono due vettori tangenti paralleli alla superficie chiamati tangente (x) e bi-tangente (y). ![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.088.png)

Per memorizzarli, si considerano gli assi come attributi per vertici, quindi possono essere interpolati per ricavare quelli per faccia. Una possibile ottimizzazione consiste nel memorizzare due dei tre assi, per ricavare il terzo basta utilizzare adeguatamente il prodotto cross. Nello spazio tangente sono presenti discontinuità e quindi è necessaria la duplicazione di vertici.

Gli assi si computano nel seguente modo:

- Tangente (x): gradiente della coordinata u; → T
- Bitangente (y): gradiente della coordinata v; → B
- Normale (z): cross tra x e y, come sempre. → N

Gli assi sono definiti per ogni faccia e sono tra loro ortogonali, anche se in modo approssimato.

Codificare le normal map in questo spazio porta vantaggi e svantaggi: aggiungono attributi extra per vertice, cioè i tre assi TBN per ogni vertice (in pratica una normal map in TS specifica come modificare la normale per vertice invece di rimpiazzarla), ma possono essere usate per descrivere  più oggetti, posso usare mappe UV iniettive, perciò posso fare tiling e sfruttamento di simmetria. Inoltre ora le normal map  sono indipendenti dalle mesh, e quindi possono essere costruite senza sapere la forma della mesh. 

Per quanto riguarda lo storage invece, l’idea è quella di memorizzarle come texture RGB se e solo se valgono le seguenti condizioni:

R↔X, C↔Ye B↔Z

Però, dal momento che X,Y e Z sono nell’intervallo [-1,1] in quanto le normali sono vettori unitari e RGB sono in [0,1]c’è bisogno di una mappatura lineare:![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.089.png)

R=X+12, G=Y+12, B=Z+12

X=2R-1,Y=2G-1,Z=2B-1

Il vantaggio di questo metodo è che permette di comprimere tutto in un’immagine al costo di memorizzare uno scalare in più, esistono comunque rappresentazioni più efficienti dei versori.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.090.png)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.091.png)

E’ anche possibile ricavare una normal map a partire da una displacement map, modellando in 3D oppure scansionandole, ognuna di queste tecniche ha vari vantaggi e svantaggi.
#### Estrazione vettori T e B da una UV-map (in un triangolo)
Il calcolo di tangente e bitangente dipende dall’uv mapping usato: infatti, bisogna calcolare i vettori u e v dello spazio oggetto e mapparli in spazio oggetto. Tutto ciò si fa nel seguente modo:

Dati i vettori t1 e t2 in spazio texture, si esegue un’estrapolazione per trovare u e v, un procedimento simile avviene in spazio oggetto per calcolare tangente e cotangente.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.092.png)

Avremo quindi in input dei vertici 3D p0,1,2 e vertici 2D q0,1,2. Da questi bisogna trovare i vettori bordo (edge vectors) ē1,2 e edge vector 2D ṫ1,2, oltre a trovare gli scalari a,b,c e d tali che:

a⋅ṫ1+b⋅ṫ2=u=1,0 e c⋅ṫ1+d⋅ṫ2=v=0,1, poi: T=a⋅ē1+b⋅ē2 e B=c⋅ē1+d⋅ē2

Sempre con i dati sopra, dobbiamo trovare gli edge vectors ē , ṫ in questo modo:

ē1=p1-p0, ē2=p2-p0 e ṫ1=q1-q0, ṫ2=q2-q0, oltre agli scalari a,b,c,d tali che:

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.093.png)

Per costruire una normal map, si può utilizzare un approccio procedurale per generarle in automatico, in generale però sono un caso particolare delle texture procedurali in cui si fa baking in preprocessing.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.094.png)

Una tessitura procedurale è una funzione che, dati due parametri u e v (corrispondenti alla coordinata del texel), genera una tripletta di valori indicante il colore del pixel in quell’istante. 

Queste funzioni vengono computate durante il rendering, sono solitamente implementate nei linguaggi di shading come GLSL e possono rimpiazzare le texture normali (vengono però limitate a semplici immagini).

Le texture procedurali in termini di memoria praticamente non occupano spazio, l’uso della  GPU può essere  sostanzialmente alto dato che producono “per pixel” e sono indipendenti dalla risoluzione, tuttavia sono difficili da controllare se si vuole ottenere un determinato effetto.

Nel caso della bandiera del Giappone, la texture procedurale restituisce un pixel rosso se la distanza tra il centro e il texel uv è inferiore al raggio del cerchio (0.3), mentre restituisce un pixel bianco quando è superiore a esso.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.095.png)

Le texture 3D sono particolari tessiture in cui è possibile rappresentare l’interno di un oggetto oltre che la sua buccia. Le texture 3D non hanno bisogno di di uv-mapping dal momento che sono già in 3D, tuttavia occupano molta memoria in GPU RAM, quindi si rendono procedurali per non occupare troppa memoria.
#### Texture Baking
Possiamo ricavare una normal map non solo da displacement maps, disegnandole in 3D, catturandole da immagini o generandole proceduralmente, ma anche catturandole da un modello ad alta risoluzione di una mesh ad alta qualità: a partire da una mesh in alta qualità A (ottenuta ad esempio con semplificazione automatica o retopologia manuale), se ne costruisce una low poly B (via sculpting), con una uv-map iniettiva. Il risultato sono delle tessiture per B che mantengono le proprietà di A (le normali come normal map, i colori come diffuse maps, il lightning baked/AO come light-map o AO-map, le distanze tra A e B come displacement map), ma con risoluzione low-poly, in modo completamente automatico.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.096.png)

Si fa baking seguendo il seguente procedimento:

1. Si producono tutti i texel di un triangolo nella tessitura della mesh hi-res;
1. Si trova ogni texel corrispondente a quelli del passo 1 nella mesh low poly;
1. SI memorizza la distanza texel-mesh e si codifica nella nuova texture sulla sua uv map iniettiva. 

La nuova normale sarà in spazio oggetto dato che é estratta dai vertici.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.097.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.098.png)
# Animazioni 3D![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.099.png)
Le animazioni permettono il movimento degli oggetti, e possono essere di diversi tipi:

- nel caso delle animazioni di oggetti rigidi, si indica dove piazzare l’oggetto nello spazio e con quale orientamento, con pochi gradi di libertà (6 DoF);
- per gli oggetti completamente deformabili si utilizza solitamente la fisica a causa dei moltissimi (300-10,000) gradi di libertà;
- Per i modelli articolati si utilizzano solitamente gli scheletri dato il loro numero intermedio (50-100) di gradi di libertà.

Le animazioni possono essere create da autori, o procedurali. Nel primo caso, sono generate da artisti e dunque sono assets. Permettono un controllo facile e totale da parte dell’artista che le crea, anche se sono realistiche solamente se l’artista è abbastanza bravo. Inoltre non si adattano all’ambiente dunque sono poco flessibili, e consumano spazio in RAM. Per quanto riguarda le animazioni procedurali, esse sono generate  dal motore fisico, difficili da controllare ma sono flessibili e realistiche e consumano la GPU. 

Piccola digressione sui termini da usare: nel caso di procedurale, il suo opposto può essere, in base al contesto:

- Baked: creato precedentemente, e “congelato” come un asset (quando qualcosa è stato prodotto proceduralmente);
- Asset: memorizzato come un asset (indipendentemente dall’origine), e letto dal disco (o streamed dal web);
- Scripted: memorizzato come un semplice script, ma la procedura per creare qualcosa può essere uno script (es. lo script che genera un livello proceduralmente);
- Authored/Manually designed/Edited (fatto da un artista invece di un programma);
- (Fully) Simulated: l’output di una simulazione complessa;

Le animazioni possono essere procedurali, authored o entrambe le cose: possiamo unire l’IA a animazioni authored, come ad es. il ciclo di camminata di un NPC è authored (animazioni scheletriche), ma la posizione dei piedi è procedurale (cinematica inversa)
#### Tipi di animazioni “authored”
Vi sono diversi tipi di animazioni generate da un author. Per gli oggetti fatti di componenti rigidi (articolazioni incluse) si utilizza la cinematica frontale (forward kinematics animations), che cambiano dinamicamente le trasformazioni di modellazione. Per gli oggetti articolati deformabili, cioè quelli con scheletri interni, si usa lo skinning / rigging, mentre per oggetti generici deformabili come facce, ombrelli ecc si usano animazioni per vertice / blend shapes / morph targets.
#### Cinematica![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.100.png)
La cinematica è un tipo di animazione che permette il movimento memorizzando i frame più importanti dell’animazione (i keyframe) in tempi arbitrari e facendo interpolazioni per ottenere i cosiddetti inbetweens(i frame intermedi).  Questa tecnica permette di risparmiare RAM, tempo di lavoro dell’artista, e rende molto fluida l’animazione, ma richiede l’abilità di interpolare i keyframes. La distribuzione dei keyframes (risoluzione temporale) può essere adattiva, aggiungendo keyframes solo dove serve, inoltre l’inbetweening avviene on demand. I tempi di keyframe possono essere arbitrari (non frame esatti, e non necessariamente numeri interi. Tutti i frame messi a schermo saranno inbetweens!), e migliore è lo schema di interpolazione, migliori sono gli inbetweens, servono meno keyframes.

Editare l’animazione come asset vuol dire editare i keyframe individuali, il tempo di keyframe, e prendere una nuova linea temporale (NON un keyframe) ti e fare il baking degli inbetween a tempo t come un nuovo keyframe.

Per alcuni nodi nello scene graph, possiamo solamente computare le nuove trasformazioni per ogni frame (normalmente si cambia solo la rotazione, la traslazione è costante), oppure possiamo memorizzare le trasformazioni a ogni keyframe, e interpolarle per ogni altro frame tra i keyframe (negli inbetweens insomma). 

La cinematica può essere:

- diretta: accumulando le trasformazioni nello scene graph, si calcola la posizione finale di ogni nodo;
- inversa: calcola le trasformazioni a partire dalle posizioni finali di alcuni nodi , molto utile per evitare le collisioni con le pareti.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.101.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.102.png)
## Blend shape
Le blend shape sono una struttura dati il cui concetto è molto simile a quelle delle animazioni 2D: se nel 2D l’animazione è una sequenza di sprite, un’animazione 3D è una sequenza di mesh, in quest’ultimo caso però gli “sprite 3D” hanno caratteristiche simili come gli attributi.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.103.png)

Una blend shape è una mesh con associata diverse geometrie, ed è quindi una sequenza di mesh (shape) che hanno connettività e attributi condivisi (a parte la normale/direzioni tangenti), geometrie differenti e tessiture condivise (comprese le uv-map). Vi sono delle varianti a questa definizione:

- Relativa: la base shape è memorizzata come posizioni per vertice (punti), ogni altra forma (shape) è memorizzata come la differenza con la base shape.
- Assoluta: ogni shape è memorizzata come posizione per vertice (punti).

Le blend shape mantengono quindi tutti gli attributi e cambiano solamente posizione e uv mapping dal momento che la connettività rimane sempre la stessa, di conseguenza si ottengono le forme intermedia attraverso l’interpolazione.

A livello di implementazione, una blend shape non è tanto differente da un mesh, la differenza è che posizione, uv mapping e normale sono memorizzate per ogni shape.

Dati Sa e Sb come shape assolute, R come shape base, da e db come differenze e i pesi wa e wb, si ha che il blending tra Sa e Sb è calcolato nel seguente modo:

Se ho blendShapes relative:

R+wa\*delta\_Sa+wb\*delta\_Sa, con wa e wb che sta tra [0,1], altrimenti è un’ ”esagerazione”.

Con blendShapes assolute:

(1-wa-wb)\*R+wa\*delta\_Sa+wb\*delta\_Sb. Notiamo che è un’estrapolazione se non vale 0<=wa,wb,wa+wb<=1, nel cui caso è un’interpolazione.

per ogni vertice: 

R+wa\*(Sa-R) + wb\*(Sb-R)=(1-wa-wb)\*R +wa\*Sa + wb\*Sb.

L’interpolazione tra shape funzione bene se queste sono tra loro abbastanza vicine, in tutti gli altri cosa il risultato è brutto.

Per le animazioni temporali, le shape sono dei keyframes. A ogni shape i viene assegnato viene assegnato un tempo ti e, in base al valore del tempo t, si interpolano le shape necessarie, ad esempio:

Date 5 shape, assegno a ognuna un tempo ti, dopo vado a vedere quali shape utilizzare in base al tempo corrente  t: se t è tra t3 e t4 allora faccio blending delle shape 3 e 4 e così via.

trovate le shape, si calcolano i rispettivi pesi nel seguente modo:

w3=t-t4t3-t4, w4=(1-w3)=t-t3t4-t3Calcolati i pesi, è ora possibile effettuare l’animazione:

s3⋅w3+s4⋅w4

Nel caso di blending di sequenze temporali con funzione di transizione, semplicemente si fa la stessa cosa ma i pesi sono calcolati così:

w3=f(t-t4t3-t4), w4=1-w3=f(t-t3t4-t3)

La funzione di transizione non è necessariamente quella lineare, posso usarne altre con curve e esagerazioni date da estrapolazioni.

Le blend shape sono molto utilizzate per quanto riguarda l’animazione delle facce.

Una funzione di transizione indica come e con quale velocità viene effettuata un’animazione, di per sè l’interpolazione dà come risultato una transizione lineare, esse sono utili quando si vogliono ottenere particolari effetti, come ad esempio un’animazione che parte piano e va sempre più veloce.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.104.png)

Si può notare che alcune di queste funzioni di transizione fuoriescono per qualche istante dall’intervallo 0-1. In tal caso si ha un’estrapolazione e quindi uno dei keyframe da interpolare è per forza negativo. In genere si tende a evitare l’estrapolazione dal momento che si rischia di ottenere animazioni distorte.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.105.png)
#### Uso delle blend shapes
Definisce le shape di una classe di oggetti, e per inserirne una nuova al suo interno basta scegliere i suoi pesi. Questi ultimi hanno uno “span” di uno spazio shape, perciò una shape equivale a un punto nello spazio, mentre i pesi sono le sue coordinate. Lo spazio di shape è più utile man mano che le uniche shape rappresentate nello spazio sono le shape ragionevoli (similmente ai keyframes). Nelle facce, abbiamo il “face space”, che indica la morfologia della faccia, e non la sua espressione.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.106.png)

Una blend shape però non ci permette di cambiare la connettività (risoluzione mesh), la topologia (rottura e merge di alcune parti), e molti attributi (colore e uv map) di una mesh, e nemmeno di cambiare le tessiture. Per quest’ultimo punto, possiamo risolvere animando la tessitura.
#### Blend shapes: pro e contro
Le blend shapes offrono flessibilità, espressività e enormi DoF all’autore, ma richiedono tanto tempo per costruirle e sono pesanti da memorizzare (per le connettività, tessiture e attributi condivise e i keyframes/inbetweens da calcolare) mentre le si crea. Quando vengono usate dall’animatore, sono facilissime da usare (devo solo definire i pesi globali), ma sono costosi in RAM e hanno pochissimi DoF sempre per i motivi sopracitati. Inoltre ci sono molti casi di studio aperti: la cattura da uno stream di mesh(es. da una camera RGBD come il Kinect a una blend shape), compressione (riduzione di numero di keyframe), streaming (il server manda l’animazione al client mentre gira) e lodding di blend shapes, che sono molto difficili da realizzare e ancora in corso di studio.
### Animazioni scheletali
Quando decidiamo di animare qualcosa con la cinematica, a ogni nodo dello scene graph associamo una trasformazione che verrà eseguita caricandola in GPU. Il problema è che questo approccio funziona se si va ad animare oggetti semplici, con poche parti semoventi. Guardando il caso del robot qui sotto, possiamo vedere che abbiamo uno scene graph molto grosso, dove ogni nodo è un osso. Il robot ha molte ossa, e calcolare per ogni osso la trasformazione porterebbe a troppissimi keyframes e troppo spreco di GPU, memoria e tempo di authoring per gli artists, e funziona solamente per oggetti rigidi come i robot.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.107.png)

Le animazioni scheletali sono animazioni che permettono di ottenere un risultato decente con pochi keyframe, per effettuarle si possono cumulare le trasformazioni come al solito, quindi ci sarà una parte dello scene graph che andrà a formare lo scheletro in cui un pezzo ha una propria mesh.

Per animare modelli articolati, abbiamo un’idea: avere una mesh, ma skinned, cioè fa da “buccia” alla mesh reale. In questo modo abbiamo una mesh sola per l’intero modello. Aggiungiamo quindi un attributo per vertice, chiamato indice dell’osso (index of bone), per animare il modello. In questo modo, otteniamo un’ortogonalità modello-animazione, cioè una mesh skinned gira con qualsiasi animazione, e un’animazione scheletale può essere usata su qualsiasi modello, a patto che abbiano lo stesso RIG-set of bones. In questo modo avremo, ad esempio, 500 modelli + 500 animazioni, cioè 1000 oggetti in GPU RAM, non 500\*500 come per la cinematica. Agli artisti si richiedranno tre task:

- rigging: definire lo scheletro dentro alla mesh;
- skinning: definire dei collegamenti vertice-osso, cioè lo skinning;
- animation: definire l’animazione;
#### Scheletro: data structure
Uno scheletro (o rig), è un albero dove i nodi sono ossa, dove un osso è un frame vettoriale usato per esprimere porzioni del modello animato. ad esempio per un umanoide, un osso è la caviglia, il bacino, ecc. Un osso del rig non è assolutamente uguale a un osso reale.

Quando si definisce lo spazio dell’osso radice dell’albero, questo corrisponde all’object space dell’intero personaggio. In uno scheletro umanoide, ci sono circa 22-24 ossa. Si cerca di stare sotto al limite di 40 ossa, e si può esagerare se si arriva a 100.

Le pose invece hanno una struttura dati definita come una trasformazione per ogni osso i

Ogni pezzo dello scheletro è un osso e rappresenta uno spazio in cui muoversi, l’osso che sta alla radice dello scheletro è detto root bone.

La transizione tra le animazioni viene effettuata passando da una posa all’altra andando a spostarsi da uno spazio posa a un altro.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.108.png)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.109.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.110.png) 

Nello schema di esempio qui sopra, per muovere l’osso “piede destro” da rest pose a posa X abbiamo quindi il seguente procedimento:

- Prima si esegue la trasformazione locale P8, passando da “piede destro” a ”stinco destro”. 
- Poi si effettua la trasformazione globale P2 P7 P8, per spostarci dallo spazio “piede destro” allo spazio “modello”, cioè la root bone. Questa usa la gerarchia dello scheletro, e una volta computata possiamo scartare la gerarchia.
- Infine, si calcola la trasformazione finale come P2 P7 P8 R8-1 R7-1 R2-1, ovvero la trasformazione dallo spazio modello in rest pose allo spazio modello in posa X. Questa trasformazione finale usa la rest pose dello scheletro (R1,...Rn), e una volta computata la rest pose non ci serve più.

Mentre nella memoria la posa X è memorizzata come un array di trasformazioni locali (includono sempre una rotazione, traslazioni a volte, e quasi mai lo scaling), con costo N\_ossa\*costo\_trasformazione\_in\_bytes, quando la mettiamo in GPU la struttura della posa è una array di trasformazioni finali, nella forma (bone, transform) dove la trasformazione è computata in preprocessing come (Locale L[2]\*Locale L[7] della posa X)\*(R[7]-1)\*(R[2]-1), dove R sono le trasformazioni locali della rest pose.

Le animazioni scheletali sono quindi memorizzate in un array 1D di pose dove una posa corrisponde a un keyframe. Il costo di RAM è (num keyframes)\*(num bones)\*(transform size), e ogni posa è assegnata a un tempo dt che è il delta dall’inizio dell’animazione t0. A volte, l’animazione è ciclata (es. camminata), perciò interpoliamo il 1° keyframe con l’ultimo.

Torniamo allo skinning: invece di pensare a una mesh che ne racchiude un’altra, possiamo collegare ogni vertice della mesh a ossa multiple (smooth skinning), dove ogni osso è un peso. La trasformazione del vertice viene fatta interpolando le trasformazioni finali associate alle ossa collegate, e i pesi dell’interpolazione sono definiti per vertice. Come strutture dati, usiamo attributi per vertice, e memorizziamo:

- ` `[bone index, weight] x Nmax (tipicamente, Nmax=4 o 2, vedi poi). Questo è lo skinning di una mesh usata nei VG.Questo schema però ha come conseguenza il cosiddetto skinning, ovvero che la mesh si deforma e diventa come se fosse pelle, il che non è un bene per gli oggetti rigidi. Inoltre alcuni vertici potrebbero essere in mezzo, in tal caso si può sdoppiare ed effettuare l’interpolazione per disegnarne uno nuovo.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.111.png)

Per ogni vertice memorizziamo [bone index, weight]\*Nmax volte. Nmax è il numero di bone links per ogni vertice, e lo fa il game engine. Di solito si usano i valori 1,2,4. 1=pezzi rigidi; 2=economico, per giochi mobile; 4=top quality, standard. Nmax può essere abbassato in preprocessing.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.112.png)

Ma perché usare un vincolo hard-wired sui bone links? Perché riduce i costi, in quanto abbiamo Nmax trasformazioni da interpolare nella GPU, la quale non è molto controllabile e usa esattamente sempre Nmax trasformazioni, e le ossa non usate hanno peso =0. Inoltre, riduce il costo di GPU RAM, riducendo lo storage e inoltre usiamo solo array a lunghezza fissa, gli unici permessi in GPU, di coppie Nmax(index, weight).![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.113.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.114.png)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.115.png)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.116.png)

Un caso particolare è il blend skinning: dato un punto condiviso tra più ossa, tutte le trasformazioni su di esso vengono blendate e infine applicate per ottenere il punto finale.

Tutto questo avviene sempre e solo in GPU per motivi di efficienza.
#### Recap animazioni scheletali
Al giorno d’oggi scheletro e modello sono due entità separate, il procedimento rimane lo stesso ma la differenza è che il modello viene skinnato sopra lo scheletro, permettendo in questo modo di riutilizzarlo. 

Tutto ciò è messo insieme attraverso:

- Il rigging che definisce lo scheletro;
- Lo skinning che attacca il modello allo scheletro definendo pesi in ogni punto.

L’animazione di per sè è una sequenza di pose e quindi di scheletri su cui mappare le mesh, per crearla si svolgono i seguenti step:

- Animazione
- Rig: è sempre il secondo step da fare;
- Skinning
- Mesh: è sempre l’ultimo step.

Una pose particolare è la rest pose, essa indica la posizione a riposo dello scheletro e deve essere corretta dal momento è il punto di partenza di tutte le animazioni.

Per quanto riguarda lo skinning, per capire quanto un punto di uno scheletro influenza la mesh, si fa una “simulazione” cercando di capire come si propaga il calore in quel punto. Questo metodo permette di ottenere un buon risultato ma al momento non esiste una tecnica precisa per effettuare ciò, è tutto un trial & error. 

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.117.png)

Le animazioni vengono fatte col keyframe editing (anch’esso molto trial & error) evitando di editare ogni posa, ma editando solo quelle dei keyframe.

Un altro metodo per le animazioni è la motion capture in cui degli attori indossano una speciale tuta che permette di rivelare tutti i movimenti catturandoli con una videocamera.

Oltre all’interpolazione tra due keyframe di una stessa animazione, è possibile farlo anche con quelli di animazioni differenti, in tal caso si può utilizzare la funzione di transizione come per le blend shape. Questo passaggio però non è realistico e per risolverlo bisognerebbe creare una serie di animazioni intermedie, ciò però è dispendioso e quindi si preferisce la proceduralità trovando vie intermedie migliori.

Un’animazione può essere divisa in molteplici sottoanimazioni, ad esempio: per permettere a un guerriero di attaccare con la spada mentre corre, si “divide” l’animazione del busto da quella delle gambe, si calcolano le due animazioni e infine si interpolano.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.118.png)

L’animazione è anche possibile attraverso il ragdolling, la cinematica inversa oppure facendo baking di risultati di Machine Learning.

Unity gestisce le animazioni in un modo simile a Photoshop utilizzando i livelli: a livello 0 c’è l’animazione base mentre in quelli superiori vi sono tutte le altre.

Con lo skinning non è possibile mantenere il volume della mesh utilizzata, i piani di contatto e non permette effetti dinamici dato che, almeno per quest’ultimo, servirebbero delle ossa in più.

Esempio: animazione di un X-Wing

Come possiamo vedere, dobbiamo fare in modo che l’X-Wing apra le ali in volo, e l’abitacolo in atterraggio. Vi sono tre metodi:

- Usare l’animazione via trasformazioni, dividendo la mesh della nave in sotto-mesh;
- Creare un’animazione scheletale, dove la rig è l’intero albero X-wing, mentre le varie ossa sono le parti della nave, nonché particolari pose per fare le animazioni.
- Utilizzare le blend shape: si creano tre forme (corrispondenti a tre mesh) che si sommano alla rest pose per ottenere ad esempio la cabina alzata e/o le ali aperte.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.119.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.120.png)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.121.png)

Come scegliamo quale metodo usare? 

Nel caso 1, animando le trasformazioni dello scenegraph, lo si fa creando 3 mesh rigide, 5 istanze e si animano le trasformazioni dello scene graph. Il vantaggio è che si può riutilizzare la stessa geometria per tutte le ali, risparmiando RAM (il massimo tra i tre metodi), ed è molto semplice effettuare il rendering. Ma purtroppo servono 5 separate draw calls, molto pesanti. Se invece si vuole usare l’animazione scheletale, lo facciamo creando un rig, una skinned mesh e poche animazioni scheletali. In questo caso per lo skinning basta un solo osso; Questo metodo non è molto buono se si usano mesh molto low poly, è uno spreco. Il rendering è più pesante da fare del metodo 1, in quanto si fa lo skinning in real time sui vertici. Il vantaggio principale è che abbiamo una sola draw call. Se si vogliono usare le blend shapes, dobbiamo creare una blend shape usando una base shape e due morphs. Questo ha un impatto minimo, ma permette di eseguire la peggiore interpolazione, quella lineare in quanto le ali si alzano/abbassano in linea retta (a meno che si aggiungano più shapes). Sulla RAM, questo metodo è il più pesante, e si sprecano DoF. Ciò non è troppo importante, se ho risoluzione molto bassa, e in più abbiamo una singola draw call (anche se su buffer differenti a ogni frame o a un buffer più grande).

La differenza tra queste tre soluzioni è che, nonostante tutte interpolano  keyframe, la blend shape interpola mesh mentre le altre interpolano rotazioni, il loro utilizzo dipende dal contesto specificato sopra. Automazioni di tutto questo hanno portato al geometry cache, un contenitore che racchiude tutti questi tipi di animazioni al fine di renderle più efficienti, lasciando al preprocessing il compito di trovare il metodo migliore per animare.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.122.png)
# Audio 3D
I giochi utilizzano i suoni per vari motivi, primo tra tutti per rendere il gioco più immersivo con soundtrack e dialoghi ma anche a livello di gameplay, nel caso dei giochi stealth ad esempio i rumori prodotti potrebbero attirare l’attenzione di una guardia.

Gli artisti che si occupano in generale del suono e della musica sono i composer e i foley, oltre che i musicisti, possono inoltre essere utilizzate particolari librerie.
### Cos’è un suono
Un suono è una vibrazione dovuta alla compressione/rarefazione dell’aria, esso può essere espresso con una forma d’onda descritta da:

- Frequenza: il numero di onde sinusoidali che si ripetono in un secondo, detto anche pitch a livello percettivo, nel caso del suono la frequenza udibile è tra i 32 Hz e i 16KHz;
- Ampiezza: il volume del suono, nella percezione è detta anche livello.
- Percezione: la risposta al suono è all’incirca logaritmica rispetto alla quantità fisica.

La digitalizzazione di un suono avviene attraverso la Pulse Code Modulation (PCM) che consiste nel dare il segnale in pasto a un convertitore A/D, che lo campiona e lo quantizza.

Il rate di sampling è di solito fisso a 24-48KHz così come i bit utilizzati per la quantizzazione (dai 14 ai 24 bit per sample);I campioni risultanti vengono poi memorizzati e compressi.
### Rendering di un suono
Per renderizzare un suono, si effettuano le seguenti operazioni:

- Mixing: Si effettuando interpolazioni con tutti i suoni presenti al fine di mixarli;
- Tweak/Tune: Si possono modificare il volume, il tono e la velocità;
- Sound filters: Si può filtrare per ad esempio simulare un suono dietro a una parete, eccetera;
- Prioritization: Effettuare convoluzioni per simulare echi e riverberi, oltre che togliere il rumore.

La cattura e la generazione di un suono avvengono in un modo simile a quello della camera: vi sono infatti l’emettitore di suono e l’ascoltatore che vengono aggiunti come oggetti dello scene graph, il game engine mixerà quindi tutti i suoni a portata di microfono pesandoli in base alla distanza emettitore-ascoltatore, in questo modo i suoni più lontani vengono attenuati a favore di quelli più vicini.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.123.png)

L’attenuazione di un suono può essere ottenuta utilizzando una funzione lineare o quadratica, il loro utilizzo varia in base a cosa si intende ottenere.

L’orientamento dell’ascoltatore è importante e si calcola, come sempre, con le trasformazioni. Anche un spostamento minimo rispetto alla sorgente è in grado di modificare il suono in modo evidente per via dell’interauralità (la differenza dei suoni in tempo e livello tra le orecchie).

Proprio per l’interauralità l’essere umano è capace di capire se un suono si trova a destra oppure a sinistra, inoltre è in grado di capire se questo proviene da una fonte di fronte o dietro. 

La spazializzazione di un suono consiste nell’applicare effetti su di esso, uno importante è quello che riguarda l’interazione con oggetti. Il comportamento del suono è molto simile a quello della luce, infatti quando colpisce un oggetto, una parte viene assorbita, un’altra riflessa e un’altra ancora passa attraverso, tutto ciò è simulabile all’interno di un gioco.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.124.png)

L’occlusione di un suono permette di attenuarlo o addirittura annullarlo, ciò viene effettuato utilizzando i proxy geometrici.  I proxy possono essere usati per propagare o meno il suono, anche se non c’è una soluzione standard adottata dai 3D games. Di solito, è il sound programmer che codifica i suono usando trucchi ad-hoc.

L’ostruzione è l’unione tra assorbimento e riflessione del suono, ciò permette di  produrre riverbero in modo isotropico.Tuttavia, questa soluzione è troppo onerosa da computare in questo modo, quindi si utilizzano altri metodi.
#### Riverbero
Il riverbero è ottenuto utilizzando una “scatola da scarpe” in cui il suono rimbalza in tutte e sei le pareti senza considerare eventuali ostacoli in mezzo, il risultato ottenuto è meno accurato rispetto al caso reale ma è abbastanza per il suo ambito.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.125.png)

I suoni sono triggerati da diverse situazioni:

- FXs che iniziano con degli script, di solito attivati con collision response che accompagnano qualsiasi sorta di logica di gioco (tutto, dalle “porte che si aprono” a “livello completato”).
- Fx associati agli oggetti della scena, ciclati costantemente da una sorgente (es. una radio).
- Fx associati agli elementi delle GUI;
- Fx come azioni dell’IA;
- Fx associati alle animazioni, es. fx dei passi durante la camminata, ecc.

Gli effetti sonori sono creati dal “foley”, che li cattura dal mondo reale. Possono essere altresì sintetizzati dal sound editing.
#### Voice Overs
I voice over rappresentano il maggior utilizzo del suono nei giochi 3D, essi possono essere:

- Lineari: utilizzati ad esempio nelle cutscene e nella narrazione;
- Non lineari: utilizzati ad esempio nei dialoghi a risposta multipla.

Tecnicamente, è “solo” un Fx. Ma in realtà ci sono moltissime sfide pratiche:

- Un sacco di assets (file names, folder nightmare!);
- Molto spesso serve la localizzazione;
- Produzione costosissima;
- Meglio usare placeholders in fasi iniziali

Per tutte queste challenges, si spera che il costo venga abbattuto cercando di proceduralizzare i task.

Un voice over procedurale è ottenibile col text to speech, una sintesi vocale che permette di riprodurre voci umani utilizzando delle stringhe, in questo modo si risolvono tutti i problemi relativi allo spazio dal momento che tutto viene creato sul momento.
# Networking nei giochi 3D
Il networking è cruciale in ogni gameplay dei giochi multiplayer che sfruttano le funzionalità online, esso descrive un ambiente comune visto in real-time da tutti:il game engine deve quindi decidere cosa comunicare e soprattutto in che modo gestire il numero di giocatori, il tipo di azione, i cheaters e il mezzo utilizzato.

Le scelte da fare per capire come gestire il networking sono le seguenti:

- Cosa comunicare al client? (status, cambi di status, input...)
- E ogni quanto comunicare? (a che rateo trasmettere)
- Su quale protocollo? (TCP, UDP, WS...)
- Su che architettura di rete? (C-S, P2P...)
- E come gestiamo i problemi di rete?
  - Latenza, banda limitata, connection loss...

Il protocollo TCP nei giochi è molto conforme all’utilizzo per via delle sue forti garanzie, che  tuttavia rallentano tantissimo la trasmissione dei dati aumentando la latenza (lag!). TCP non è inoltre pensato in generale per i giochi in tempo reale (action, eccetera) a causa dei ritardi introdotti in caso di perdite.

- Proprio per questo motivo si utilizza UDP, implementando manualmente alcune garanzie di TCP. Usare questa soluzione funziona al meglio per i giochi ad alta velocità fuori dalla LAN., quello che si fa di solito è assumere il caso peggiore finchè non si ha una conferma. Le garanzie da reintrodurre nell’UDP sono:
  Aggiungere il connection ID ai pacchetti per filtrare quelli che non servono;
- Aggiunta di un timeout;
- Aggiunta del serial number ai pacchetti per fare detection dei pacchetti persi/duplicati;
- Aggiunta di ACK per pacchetti ricevuti, e se dopo un po’ di resend non arriva, give up (questa cosa TCP non la fa);
- Congestion avoidance misurando il delivery time e facendo load balancing;
- E infine, ricezioni NON bloccanti!

La scelta del protocollo da utilizzare dipende dal gioco stesso:

- UDP è la scelta migliore (e necessaria) per i giochi molto veloci come gli action (sync every 20-100 msec);
- TCP è adatto per quelli più lenti (sync every ~500 msec);
- HTTP per quelli ancora più lenti (sync every few sec);
- Per quelli a turni si possono anche utilizzare le email (sync every hour/day).

In Unity, il basso livello si gestisce a lv di trasporto, creando le garanzie su UDP, oppure usa WS quando si parla di web games o webGL. Ad alto livello, lavora con un Network Manager che dona dei preset di connettività di rete, si usa per i giochi standard “client-hosted” dove il server è anch’esso un player, controlla lo stato del gioco e gestisce i client inviando comandi remoti.
### Peer to peer - Deterministic Lockstep
Il P2P in ambito videoludico è il primo metodo pensato per favorire il multiplayer online, dove ogni nodo è un'istanza del gioco che invia a tutti gli altri peer i propri “controls”, cioè i propri input (da tastiera, controller, telecomando wii...). Quando i comandi di tutti i peers saranno arrivati a tutti gli altri, ogni nodo computa la sua evoluzione.

Avremo quindi un’astrazione: il nodo è un Agente contenente lo schema di controlli fatti dall’utente, e inviati in broadcast a tutti i peer. Questa astrazione può essere utilizzata anche dall’IA oppure per i filmati introduttivi, utilizzando sequenze di azioni registrate per ogni fotogramma come input.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.126.png)

Questo sistema è molto semplice dal momento che la sincronizzazione avviene solo sui controlli e non permette cheating. Tuttavia, dal momento che tutti i nodi devono ricevere i comandi prima di agire, la velocità di tutto il sistema equivale a quella del nodo più lento. Inoltre a causa della caoticità è molto facile da compromettere e si mandano troppi messaggi (precisamente n(n-1) con n giocatori), anche se piccoli. 

A livello di fisica, ci sono moltissimi problemi: dt variabile causa problemi, il time budgeting è male perché non riesco a simulare in un certo tempo, l’ordine di processing delle constraints e particelle è misto, e non va bene. Inoltre ci sono problemi terribili al determinismo se c’è qualsiasi cosa che dipende da un clock: la sincronizzazione di questi è terribile per il determinismo! 

Per quanto riguarda la computazione delle GPU, è molto pericoloso, in quanto l’outcome per ogni singola GPU cambia, seppur leggermente. Infine, le operazioni floating point portano problemi nascosti, come implementazioni hardwired per il controllo della correttezza (nota che 99.9% corretto = non corretto! E in un mondo virtuale la più piccola delle cose provoca danni irreparabili). Dato che il sistema intero deve essere pensato con l’idea del “determinismo”, è difficilissimo da fare e debuggare.

Questo sistema è perfettamente deterministico dal momento che tutti i nodi ricevono lo stesso input e calcolano lo stesso output, proprio per questo motivo è detto deterministic lockstep.

` `![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.127.png)

### Client-server - Deterministic Lockstep
Questa variante del deterministic lockstep utilizza il modello client-server anziché il P2P, qui tutti i client si connettono a un server il quale rappresenta la realtà e quindi ha l’ultima parola, in una connessione a stella. Il funzionamento rimane pressoché lo stesso ma permette più scalabilità e robustezza al cheating, vi sono solo 2n messaggi che girano (complessità lineare e non quadratica) e soprattutto il client più lento non influenza tutti gli altri (questo perchè il server è autoritativo). 

Tuttavia la latenza raddoppia (latenza= 2\*delivery time) dal momento che oltre a inviare bisogna anche ricevere dal server, per questo motivo è una soluzione che non va bene per gli strategici real-time dato che hanno bisogno di poca latenza per funzionare.
### Client server - Game Status Snapshot
Un’altro approccio è far fare tutto al server: i client devono quindi inviare solamente i comandi e ricevono come risultato una descrizione dello stato del gioco per poter fare rendering.I client sono quindi delle interfacce che visualizzano il gioco, ciò permette load balancing tra client e server a livello di funzionamento, inoltre è possibile rilevare il cheating.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.128.png)

Più nel dettaglio, il client si connette solamente al server, cattura l’input dell’utente (snapshot) e lo invia al server, che lo computa come vuole lui, e restituisce un game status ai vari client. Il client poi riceve lo status (o porzioni rilevanti di esso), e lo renderizza usando tutti gli asset rilevanti per farlo. Nel client ci saranno quindi tutti gli asset a parte le porzioni di motore fisico che non riguardano effetti cosmetici, e l’IA che sono sul server.

Questa soluzione non è però esente da problemi: vi è infatti molta latenza dal momento che bisogna aspettare l’arrivo dello status dal server, inoltre i pacchetti sono molto più grandi poiché contengono lo status completo del gioco (anche se è ottimizzabile comprimendo cose), ma il vero problema sta nella responsività: dall’input all’effetto il costo è di un delivery time, ma dall’input al visual è 2\* delivery time, che è disastroso per il gameplay..

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.129.png)

Alcune soluzioni cercano di risolvere i problemi facendo interpolazioni o estrapolazioni: l’idea è di inviare uno snapshot con i dati necessari al 3D rendering (posizione+orientamento degli oggetti + altri parametri qualora necessari), e il client si tiene in memoria gli ultimi due snapshot e li interpola guadagnando molti FPS con basso invio di pacchetti, ma perdendo ancora più responsività (lagga dietro al server ancora di più)→ Oh NOES! Con l’estrapolazione al posto dell’interpolazione si guadagna responsività ma si perde un sacco di precisione perché l’estrapolazione mostra una predizione del prossimo snapshot, non quella vera→ moltissimi glitch!

Una di queste soluzioni è la game evolution: qui client e server rappresentano entrambe la realtà, e ogni client riceve uno snapshot ridotto dagli altri (siano essi clients o game server). Alla ricezione, i client fanno il merge di tutti gli status ricevuti con la loro fisica.Questo metodo permette di avere latenza nulla, in quanto è immediatamente responsive ai controlli locali al client, mentre gli agenti remoti si aggiornano in base a ciò che il loro client gli “dice” attraverso gli snapshot. Il problema è che bisogna tenere tutto il resto (NPC, ambiente) sincronizzato con tutti i client→ c’è bisogno di determinismo. Inoltre, i client sono l’autorità in questo caso: un client potrebbe usare i cheat! 
### Client-Server - Client-side Prediction
La soluzione migliore è cercare di far fare predizioni al client.

Come per la game evolution, client e server rappresentano entrambi la realtà, la differenza è che dopo che il client ha mandato al server il comando, esso computa immediatamente la game evolution, magari predicendo i comandi fatti dagli altri client. In questo modo, i comandi su di esso vengono eseguiti immediatamente. Il server, dopo aver ricevuto tutti i comandi da tutti i client, elabora lo stato e lo inoltra, alla ricezione i client confronta il proprio stato con quello ricevuto e, se è corretto, non si ha latenza, altrimenti si rielabora la fisica da quel punto fino al presente. In questo modo, la simulazione server-side (quella “reale”), vive k msec nel passato della predizione del client, dove k è il delivery time. Quando la correzione del server arriva al client, si riferisce a 2k msec prima. 

Problema: come correggiamo il passato (la simulazione del client che è già avvenuta)? Il client tiene in memoria gli ultimi N status, e quando arriva la correzione dal server lo compara con lo status passato tra gli N. Se è uguale non fa niente, se è diverso, scarta il frame e tutti quelli che lo seguono, e rifà la simulazione al presente. 

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.130.png)

Rifare la simulazione del presente non è così grave come sembra: basta dallo status passato rifare tutto fino al presente, ma solo per la fisica e l’IA, a tutta velocità. Se serve, possiamo anche ridurre il tempo tra presente e passato usando un dt più grande, perdendo un po’ di precisione. L’unico vincolo è che dobbiamo riusare gli stessi controlli del proprio giocatore, che vedrà solamente il risultato finale e non questi step intermedi. Dato che c’è una riscrittura del passato, si possono verificare dei glitch. 

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.131.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.132.png)

Casi di predizione errata si possono verificare quando manca il determinismo (fisica approssimata con vincoli soft real time) oppure quando non si tiene conto che i controlli del client stesso non sono stati inviati al server in tempo, e quindi dato che il vero tempo è definito dal server il client in realtà non ha fatto nulla in quell’arco di tempo (vedi brawlhalla quando attacchi che dopo 3 / 4  sec resetta tutto e cadi nel vuoto). Un altro grosso problema è che potrebbe non aver tenuto conto dei comandi degli altri. Tutti questi problemi, però, non rompono la struttura base del gioco che continua a funzionare normalmente.

Possiamo ottimizzare la predizione riducendo la dimensione degli snapshot (increase packet frequency), riferendosi solo alle parti che vengono predette male il più delle volte, facendo però caso che tutte le parti vengano eventualmente refreshate. Un’altra ottimizzazione si può fare riducendo la correzione della computazione, cioè fare le correzioni più in fretta, magari correggendo solo le parti errate della fisica e non l’intero arco temporale, o usando un dt maggiore (meno step per arrivare al presente).

Possiamo anche provare a predire dati sconosciuti, come i controlli degli altri giocatori facendogli fare i comandi che hanno usato nell’ultima predizione, o correggere solo quando lo stato corrente differisce di tanto rispetto a quello del server. Quindi, se una posizione spaziale supera un certo ε, correggo la predizione. Altrimenti tollero piccole discrepanze spaziali (anche se queste tendono ad esplodere esponenzialmente col tempo virtuale→ caos!).

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.133.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.134.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.135.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.136.png)
### Cloud gaming
Il cloud gaming è la soluzione più recente è consiste nel far fare tutto al server, rendering compreso. Il client è quindi un’interfaccia che è connessa solo al server cloud, e gli invia l’input di gioco. Il server invece è connesso a tutti i giocatori, e computa tutto per ogni giocatore. Infine comprime il flusso audio-video e lo invia al client.Il video streaming ricevuto dal client mostra lo stato del gioco.

Il server quindi fa tutto quanto rispetto agli snapshot: controlla la fisica 3D + l’IA, il rendering del suono e del video che comprime e invia come video 2D (lo fa N volte, dove N=numero giocatori), mentre il client non fa quasi nulla, se non decomprimere lo stream 2D video e inviare gli input al server. 

I vantaggi principali sono che il client è leggerissimo, e non ha bisogno di avere asset memorizzati su di esso, basta che abbia un pad/tastiera per collezionare gli input. I problemi sono che il server necessita di una banda pazzesca dal momento che si devono inviare in fretta frame ad alta risoluzione compressi, inoltre si soffre molto in latenza dal momento che abbiamo non solo un trip andata-ritorno, ma anche la compressione del server e la decompressione del client, nonché l’alta risoluzione video da gestire. Fortunatamente, compressione e decompressione possono essere effettuate con le normali tecniche di video on demand. 

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.137.png)
# Intelligenza artificiale nei giochi 3D
L’intelligenza artificiale ha moltissimi utili e negli ultimi anni è esplosa grazie al machine learning,deep learning, data mining e la visione artificiale, tutto questo ha portato a risolvere problemi complessi o a potere computazione come le GPGPU.

Nei giochi, tutto ciò che è procedurale è gestito dall’intelligenza artificiale, dai terreni, alle tessiture, eccetera.

Per certi tipi di IA si procede a ritroso, ovvero che a partire dalla destinazione o dal risultato finale si eseguono tutte le mosse a ritroso al fine di costruire una soluzioni, in molti casi questa è univoca ma non è sempre così.

Altri esempio di IA nei giochi sono la creazione procedurale della musica e la difficoltà variabile, gli stessi algoritmi di ranking sono IA e permettono di scegliere i giocatori adeguati durante il matchmaking.

Un particolare caso di studio oggi molto interessante sono le animazioni procedurali, l’IA fa una sorta di apprendimento supervisionato per calcolare come animare lo scheletro (rig) aggiungendo un attuatore “muscolo” che si attiva per fare le animazioni scheletali.

L’utilizzo principale dell’IA nei giochi riguarda il comportamento dei personaggi non giocanti.

Il termine AI in questo ambito è tuttavia fuorviante dato che non si ha bisogno del miglior comportamento possibile ma ne basta uno “reale”, prevedibile e comprensibile, magari anche relativo alla storia del gioco o interessante da sfruttare (blocco un boss in un angolo a fare sempre la stessa mossa).

L’IA agisce utilizzando gli agenti, essi controllano l’ambiente e interagiscono con esso, per farlo si divide il comportamento in tre fasi: Sense (fase in cui si percepisce l’ambiente), Think (fase in cui calcola la soluzione) e Act (fase in cui si interagisce con l’ambiente applicando la soluzione).

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.138.png)
### Fase Act
L’act permette di controllare il controller di un NPC, simulando quindi un giocatore avversario, in tutti gli altri casi può produrre animazioni, eccetera.

In alcuni casi è possibile “barare” dando i dati direttamente al NPC mentre in altri si fanno vere e proprie simulazioni, nel caso dei giochi stealth si possono utilizzare coni di visione e ascoltatori per cercare di rilevare il giocatore.
### Fase Sensing
In questa fase si cerca di raccogliere informazioni dall’ambiente (“Percezioni”), che verranno usate nella fase Think. Le percezioni normalmente persistono nella “mente” dell’agente, e sono collezionate o ad intervalli regolari, oppure on demand. Per simulare i sensi nel mondo 3D, ci sono diverse tecniche:![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.139.png)

- Per la vista, si può usare il ray casting che usa un test di collisione raggio-hitbox per scoprire se un oggetto è visibile o meno, oppure sintetizzare e poi analizzare i probe renderings (molto più preciso ma anche più costoso);
- Per l’udito e l’olfatto, semplicemente si fa un test di collisione del personaggio con una sfera di influenza;
- Per il tatto o il sensing di prossimità, si usano le query spaziali o la collision detection.

Possiamo anche imbrogliare, facendo sensing dei dati direttamente dal game status (es. estrapolandoli dallo scene graph), quando non compromette troppo la plausibilità del gioco.
### Fase Think (planning)
In questa fase si modella la “mente” dell’IA.  Il modello interno dell’ambiente catturato nella fase di sensing viene processato qui, e oltre a questo esistono anche dei valori che modificano il livello di sentimenti del NPC: rabbia, paura, felicità, collaboratività, ecc. La persistenza di questi elementi mentali può essere più o meno prolungata, per simulare la memoria del NPC. , I goal da raggiungere sono strutturati in più livelli: ad esempio, prendendo l’IA di un soldato, il livello più ad alto livello è fare lo sniper, quello medio è cercare il nemico più vicino quando ad esempio sono finite le munizioni e si ha poco tempo per caricare mentre il più basso è quello di raggiungere una certa posizione.

Livelli di IA differenti richiedono strutture differenti: a basso livello si possono usare algoritmi di routing implementati direttamente nel game engine, in quelli più alti invece vi sono strutture come  gli automi a stati finiti.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.140.png)

Oltre agli automi a stati finiti (FSM), che hanno problemi di scalabilità con la complessità del mondo o del comportamento (crea automi enormi), vi sono le loro versioni gerarchiche in cui i goal sono strutturati nei vari sotto-automi (HFSM), o i Behavioural Trees.

La cattura del comportamento avviene attraverso questi ultimi , delle strutture ad albero in cui più si va in profondità, più si va verso un goal di basso livello.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.141.png)

Nei Behavioural trees le foglie sono gli act mentre i nodi intermedi possono essere usati come jolly: dato un nodo in cui alla fine del computing ha due esiti (fail e succeed), i nodi intermedi si ripercuotono sui loro esiti per influenzarli.

Alcune azioni devono essere fatte in un certo modo:

- nel caso delle azioni in sequenza, un nodo ha valore true se e solo se tutti i suoi figli lo sono (l’operazione è comparabile a un AND con tutti i figli);
- nel caso della selezione, basta che solo una di queste azioni sia true per fa sì che lo sia anche il padre(quindi è come se fosse un OR tra i figli).

Tutto questo viene effettuato in spazio locale al fine di facilitare il tutto.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.142.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.143.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.144.png)

Per quanto riguarda il pathfinding si utilizza l’algoritmo di Dijkstra per il calcolo del percorso più veloce, in alcuni casi è preferibile A\*, una versione di Dijkstra che calcola il percorso migliore utilizzando funzioni euristiche, permettendo così di capire quanto il personaggio è  distante dal punto di arrivo.

Questi algoritmi vengono applicati sulla cosiddetta navigation mesh, una mesh poligonale/grafo che rappresenta tutto lo spazio calpestabile, ottenibile facendola creare da artisti oppure facendo baking producendola a partire dalla scena.
#
# Tecniche di Rendering
Il rendering è quel processo che permette di ricavare immagini a partire da una scena 3d, e viene effettuato dalla scheda video attraverso la GPU.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.145.png)

La tecnica di rendering attualmente più utilizzata nei giochi è il rastering, tuttavia il ray-tracing sta lentamente prendendo piede grazie alle nuove GPU.

La complessità degli algoritmi di rendering è lineare rispetto al numero di triangoli da renderizzare e al numero di pixel dello schermo, inoltre questi sono entità separate che devono essere in grado di interagire tra loro in modo da gestire correttamente tutti gli effetti, cosa molto difficile con un unico sistema software.

Grafica e rendering sono GPU-friendly dal momento che le architetture delle schede video hanno una loro memoria dedicata e sono altamente parallelizzabili.
## Rastering
Il rastering è una tecnica di rendering che permette di disegnare a schermo i triangoli prima portandoli in spazio vista, poi analizzando i vari attributi e, in base a essi, disegnare i pixel sullo schermo.

Tutto ciò avviene grazie alla cosiddetta pipeline di rendering, una catena di montaggio in cui ogni componente produce dati che verranno utilizzati dalla fase successiva.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.146.png)

La pipeline di rendering è divisa in tre macrofasi:

- Vertex shader: prende ogni vertice in spazio vista e lo porta in spazio clip (proiezione), decidendo dove piazzarli e in che posa metterli dalla rest pose (skinning);
- Rastering: prende ogni triangolo in spazio clip per produrre i cosiddetti frammenti, ovvero dei possibili futuri pixel, questa fase è l’unica delle tre vincolata in modo hard-wired, quindi non si può cambiare;
- Fragment shader: si computa ogni frammento di ogni pixel al fine di deciderne il colore, questa fase è molto utile per il lighting e il texturing (si accede alle tessiture), e si fa l’alpha kill (rimozione dei frammenti trasparenti).
- Dopo il fragment shader si  fa un depth test (rimozione dei pixel occlusi) e l’alpha blend (si mischiano i frammenti semitrasparenti col background).
#### Bottleneck Pipeline
La velocità complessiva della pipeline GPU corrisponde a quella della sua fase più lenta. Solitamente è il fragment shader, tuttavia non si esclude che possa esserlo anche il vertex shader (il rastering è molto improbabile che lo sia dato che è vincolato hard-wired e quindi disegnato ad hoc per la GPU).

Una fase è detta “choked” (strozzata) quando deve aspettare che la fase più lenta produca un output, mentre le fasi dopo quella choked sono dette “starved”.

Terminologicamente parlando, un bottleneck in CG è:

- App geometricamente limitata: se il bottleneck è per vertice (non processa la geometria in fretta);
- App con inserimento limitato (fill-limited): il buffer non viene riempito coi pixel abbastanza in fretta; → caso più comune nei VG;

La performance di un gioco migliora solo se il carico computazionale viene rimosso dalla fase di bottleneck, ad esempio se uso mesh a LoD 1 non aiuto un’app ad inserimento limitato;

Per individuare il collo di bottiglia, si effettua il cosiddetto profiling: l’idea è quella di cambiare le prestazioni al fine di sovraccaricare una delle tre fasi, aumentando il dettaglio grafico delle mesh ad esempio, si controlla se il collo di bottiglia sul vertex shader, se invece si aumenta il numero di pixel, il controllo viene effettuato sul fragment shader.

Un buon gioco ha tutte queste tre fasi più o meno alla stessa velocità con una GPU che effettua load balancing.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.147.png)
## Lighting
Il lighting è un metodo che permette di disegnare i riflessi e la luce in generale nel rastering, esso si può riassumere in tre entità:

- l’illuminante, ovvero tutti i dati riguardante la fonte di luce;
- il materiale dell’oggetto colpito dalla luce;
- i dati geometrici, ovvero tutto ciò che riguarda le posizioni degli oggetti,eccetera.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.148.png)

In base a queste tre entità, il lighting calcola il colore finale del pixel.

Quando si considera solamente il punto colpito dal raggio luminoso e nient'altro, il lighting è detto locale, altrimenti viene detto globale.
## Materiale
Il termine “Materiale” può riferirsi a due tipologie:

- Il modello del materiale, cioè i suoi parametri (parte dell’input dell’equazione per il lightning locale, nonché la parte che modella il comportamento ottico locale di una sostanza fisica come plastica o legno);
- L’asset del materiale, cioè l’astrazione del termine “materiale” più comune usata dai game engine e dataset. Corrisponde a un asset che combina:
  - un set di tessiture (es. diffuse + specular + normal map);
  - un set di shaders (es. vertex + fragment);
  - un set di parametri globali (es. lucidità, fattori ambientali);
  - un set di impostazioni di rendering (es. back-face culling on/off);![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.149.png)

In pratica, il materiale come asset corrisponde allo stato del rendering engine quando si disegna una mesh;

Parlando di materiale come modello, quale set di parametri definisce un materiale? E’ determinato dall’equazione di lightning scelta.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.150.png)



` `Indipendentemente dall’equazione, ogni parametro del set può essere memorizzata come:

- Material Asset, come parametro globale;
- Per vertice di una mesh, come attributi;
- Per texel di un foglio di tessiture (texture sheet);

La complessità del lighting dipende dall’input ma anche dal risultato che si vuole ottenere e in che modo: vi sono infatti molteplici tipi di equazioni, tra queste quella di Lambert e quella di Blim-Phong rappresentano la base. 

L’algoritmo di Lambert si comporta bene con gli oggetti opachi mentre quello di Blim-Phong è migliore con gli oggetti lucidi, l’unione di questi due effetti permette di ottenere un’immagine abbastanza realistica.

Per aumentare il realismo si utilizza una terza tecnica: oltre ad applicare Lambert e Blim-Phong, si aggiunge il cosiddetto ambient, ovvero un’illuminazione che permette di schiarire le parti scure, essa rappresenta la luce che riceve e rimanda da tutte le direzioni, per questo motivo è rappresentata come una costante corrispondente al colore dell’oggetto.

Il calcolo del colore del pixel viene quindi definito con tre componenti:

- Ambient;
- Diffuse: corrispondente all’equazione Lambert (aka fattore Lambertiano);
- Specular: corrispondente all’equazione Blim-Phong;

Il materiale è quindi un moltiplicatore di colore per ogni termine (R,G,B), perciò:

- Colore “Ambient” RGB;
- Colore “Diffuse”, cioè l’Albedo o il colore base;
- Colore “Specular”, RGB, più un esponente speculare (>1, massimo 127), cioè la glossiness o la shininess;
- Fattore di “Emission”, RGB, solo per oggetti che emettono la luce, else (0,0,0);

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.151.png)

Nella slide un esempio di equazione di lightning base, o di Phong.
#### Calcolo delle componenti
La componente Diffuse viene calcolata andando a controllare quanto il raggio di luce è ortogonale  rispetto alla normale di una faccia, nel caso reale infatti le parti che risultano più chiare sono quelle che si affacciano direttamente alla fonte di luce. Tutto questo permette di indicare il cosiddetto fattore diffusivo, ovvero quanto è diretta la luce in un dato punto) semplicemente facendo il prodotto dot tra il raggio l e la normale n della faccia considerata.

Giallo= parametri di luce, Verde= parametri materiale, Blu= geometria.

Il fattore diffusivo si può quindi considerare come un peso indicante quanto deve essere chiaro il colore del materiale:![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.152.png)

n⋅l⋅C, con C= colore materiale, n= normale della faccia illuminata, l= raggio di luce. A sua volta, il colore C è diviso in fattore diffusivo RGB e colore della luce, moltiplicati componente per componente.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.153.png)

Per quanto riguarda la componente Specular, i riflessi avvengono quando l’osservatore guarda nella cosiddetta direzione di vista v, quindi il massimo del riflesso si ottiene l’angolo tra il raggio l e la normale n è uguale a quello tra n e v.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.154.png)

Considerando ciò, si può dire che la normale è la direzione media tra l e v, definibile come Half-way vector H=l+v||l+v||.

Per verificare la somiglianza tra H e n si fa il prodotto dot tra essi, questo è il fattore speculare, ovvero il “peso” da dare al colore al fine di indicare le riflessioni.

Detto ciò, il colore finale si calcola nel seguente modo:

coloreFinale = coloreCostante + n\*l\*coloreMateriale + n\*H\*Bianco

Con quest’ultimo fattore però c’è il rischio che le riflessioni create siano troppo ampie, quindi al fattore n\*H si aggiunge un esponente E in modo che possa decrescere più velocemente.

Il valore dell’esponente e è a discrezione dell’utente.

Nel caso in cui il colore della luce sia differente dal bianco, bisogna modificare la formula sopra in modo da tenerne conto:

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.155.png)

Per quanto riguarda il termine Ambient, esso si calcola semplicemente facendo un cross tra il colore dell’ambient, e il colore della luce.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.156.png)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.157.png)

Dati i vettori di tre elementi Al, Dl e Sl come colori della luce rispettivamente per Ambient, Diffuse e Specular e Ao, Do e So come componenti relativi al colore dell’oggetto:

coloreFinale = Al ⊗ Ao + n\*l\*Dl ⊗ Do + n\*H\*Sl ⊗ So

` `⊗ : prodotto componente per componente;![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.158.png)

La scelta di questi parametri veniva fatta utilizzando apposite tabelle contenenti i valori di ambient, diffuse e specular di ogni materiale, quindi un oggetto poteva essere di un solo materiale per operazione.Col progresso tecnologico sono stati inventati algoritmi di lightning che permettono l’utilizzo di più materiali.

I problemi dell’uso del materiale basico sono la sua poca espressività e il suo poco realismo. Dal 2000 in poi, però, l’equazione di lightning è diventata più complessa, aggiungendo più termini che generano più parametri del materiale, come l’effetto Fresnel, effetto anisotropico, reflettività, ecc. Sono nati nuovi lavori per i Material Artist, data la difficoltà di definire bei materiali.
### PBM
L’attuale trend (dal 2010 in poi) è rappresentato dal Physical Based Material (PBM), un materiale che tiene conto del comportamento della luce quando colpisce gli oggetti, permettendo in questo modo l’ottenimento di oggetti più realistici.

La descrizione di PBM è formata da:

- colore base del material, il classico vettore RGB;
- uno scalare che ne indica la specularità,ovvero quanto è in grado di riflettere il raggio di luce;
- uno scalare per la metallicità, quanto è metallico  l’oggetto;
- uno scalare della cosiddetta roughness (ruvidità), indicante quanto un oggetto è liscio.

Nei PBM la componente di ambient si può calcolare e memorizzare in una mappa.
### PBL
Con PBL si intende il Physically Based Lightning, cioè un modello di lightning che accetta in input un PBM. Questo tipo di modello prende meno scorciatoie di quelle tipicamente usate, come usare una sola tessitura per il colore di Diffuse, e una separata per il baked AO memorizzandole come diffuse X baked AO. GLi obiettivi del PBL sono gli stessi di PBM, specialmente per il realismo del lightning.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.159.png)
## Illuminazione - Illuminant![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.160.png)
Per modellare l’illuminazione, le luci elaborano gli emettitori in maniere differenti, esse hanno un forte impatto sulla scena dal momento che tutte le fonti di luce in un dato punto si sommano per ottenere il risultato finale.

Le luci sono memorizzate ognuna in un nodo dello scene graph, e possono essere:

- PointLight: tutti i raggi hanno la stessa intensità e partono dallo stesso centro per andare verso l’esterno;
- SpotLight: Luce direzionata in cui i raggi sono più forti in alcuni punti anzichè in altri.
- Luci Direzionali: tutti i raggio hanno la stessa direzione e intensità;

Oltre a ai tipi, ciascuna luce ha degli attributi extra:

- Colore / intensità;
- Funzione di Fall-off (con distanza);
- Max range e altro;

Le luci sono molto utili, ma hanno tuttavia il difetto di essere molto costose a livello di computazione, quindi si cerca di limitarne il numero.

L’ambiente di illuminazione ha quindi un set finito di fonti di luce, più un fattore globale di ambient light, che modella altre fonti di luce minori più i riflessi (la luce che arriva da ogni posizione in ogni direzione). 

Il fattore ambientale è inoltre un multiplicatore del termine di ambient dell’equazione di lightning. Ad esempio, in una scena all’aperto nuvolosa, sarà molto alto, nello spazio sarà zero. In scene normali, sarà in mezzo ai due esempi precedenti.
### Environment map
Le environment map sono particolari tessiture i cui punti corrispondono a un vettore unitario (con una luce e un colore associati) e permettono la rappresentazione di un ambiente in cui l’illuminazione è continua, esse sono molto utili per rappresentare gli sfondi della scena. Una environment map è quindi una tessitura con un texel t per ogni direzione d, dove il texel t memorizza la luce che arriva dalla direzione d, e si usa per computare i riflessi su oggetti curvi. Ci dona degli ambienti dove la luce è realistica, complessa, ad alta frequenza (perfetta per mirroring su oggetti riflettenti come acqua, vetro), e può essere catturata dalla realtà, ma purtroppo è molto costosa in computazione e memorizzazione, ed è molto difficile per l’engine cambiare dinamicamente. Usiamo l’environment map solo per ambienti statici.

L’environment map può essere di differenti tipi, in base a come troviamo le coordinate u,v del texel per una certa direzione d:

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.161.png)

Le environment map stanno nello scene graph all’interno del nodo mondo, mentre le luci stanno nei vari nodi.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.162.png)
#### Funzioni base per ambiente di illuminazione

Per rappresentare l’ambiente di illuminazione, possiamo usare una funzione continua f:Ω→ℝ, dove 𝛀 è il set di tutti i vettori unitari (es. la superficie della sfera unitaria). 

La funzione f(v)descrive l’ammontare di luce che si propaga dalla direzione v (v=versore). Posso memorizzare f attraverso l’uso di funzioni base che vengono unite in una sorta di interpolazione tra loro.

Le funzioni base sono impacchettate e così ottimizzate da permettere l’illuminazione di un ambiente utilizzando pochi pesi e ottenendo un buon risultato.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.163.png)

L'illumination di un dato punto viene effettuata interpolando tutte le funzioni vicine.

Possiamo memorizzare le environment maps come armonia sferica (SPH): si memorizza l’ambiente di illuminazione come un piccolo numero (1,4,9,16,...) di pesi scalari di molte funzioni sferiche di base. Questo ci permette di memorizzare solo i pesi, e inoltre modella molto bene la funzione continua, oltre a permettere una computazione efficiente dell’equazione di lightning. I problemi sono che si modellano bene solo le funzioni continue (male per dettagli ad alta frequenza e non c’è molta variazione di luce). Questo tipo di rappresentazione è molto buona per le luci di background.
### Light Probes
Una light probe è un ambiente di lightning precomputato che viene usato vicino a una posizione (xyz) della scena. Il lightning è diviso come segue:![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.164.png)

- Preprocessing: seminiamo la scena di light probes, e le salvo come environment maps a bassa risoluzione o come SPH (soluzione standard);
- A tempo di rendering, per ogni oggetto in posizione (xyz), usa un’interpolazione delle light probes più vicine ad esso (notare che due o più funzioni SPH possono essere interpolate, basta interpolare i pesi).

Le light probes sono molto usate.

## Dati geometrici - Geometric data![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.165.png)
I dati geometrici sono tutti quelli che riguardano la forma dell’oggetto. In generale si utilizza la normale ma si possono tenere conto anche delle direzioni tangenti e dei punti di vista, questi ultimi sono utili per gli effetti anisotropi.

La computazione del lighting avviene sempre in uno stesso spazio oggetto, la scelta dipende da chi implementa il motore di rendering, tuttavia esiste un modo più conveniente: si porta tutto in ogni spazio oggetto e lì si calcola la luce in quel punto, lo stesso discorso vale anche per lo spazio tangente TNB.
### Equazione di lightning: come?
L’equazione viene computata nel vertex shader, dove la maggior parte dei game engine supporta un buon set di scelte. Negli shader si possono programmare inoltre nuove equazioni ad hoc, ottimizzandoli levando al vertex shader la computazione lineare. I parametri del materiale e dei dati geometrici sono memorizzati:

- Nelle tessiture (per le variazioni ad alta frequenza dentro a 1 ogg);
- Negli attributi dei vertici (variazioni smooth in un ogg);
- Parametri di un material Asset (nessuna variazione nell’ogg);

Per dare i parametri in pasto all’equazione di lightning, la scelta è dettata dal game engine usato.
## Lightning globale
All’interno del lightning locale, solo tre cose contano:

1. Gli emettitori di luce (variabili globali + env textures);
1. La parte infinitesimale della superficie colpita dalla luce, cioè:
   1. Il suo materiale locale;
   1. la sua forma locale;
      1. Entrambi campionati dalle tessiture, interpolati dai vertici o come variabili globali;
1. La posizione dell’osservatore (var globali);

Tutto il resto fa parte dell’illuminazione globale. Anche il resto della scena influenza i risultati, e gli effetti globali sono considerevolmente più difficili da realizzare rispetto a quelli locali.

Vi sono due approcci per realizzare illuminazione globale:

1. uso illuminazione locale, ma le dò come parametri un position dependent lightning environment (light probes):
   1. Questo environment è stato precomputato in preprocessing ed è utile per le scene con parti statiche, ma problematico per le scene dinamiche.
1. Usare tecniche di rendering ad hoc
   1. In pratica sono algo di rendering che si mappano bene nella pipeline HW, spesso usando tecniche multi-pass.

Le due strategie possono essere usate assieme.
### Peculiarità della pipeline di rendering
L’approccio che generalmente si utilizza durante il rendering è quello di ottimizzare il più possibile le fasi di vertex e fragment shader.

Durante la fase di fragment shader,  ogni frammento di ogni pixel viene analizzato per capire chi è davanti/dietro al fine di disegnare a schermo solamente quelli necessari. Qualsiasi rendering che produce uno screen buffer inviato allo schermo, produce anche un Depth buffer(anche chiamato Z Buffer), che memorizza per ogni pixel i frammenti che stanno davanti alla camera.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.166.png)

Per rendere il gioco più fluido si utilizza una tecnica detta Double Buffering, essa consiste nell’utilizzare due buffer: il primo indica il frame che viene mostrato a schermo mentre il secondo è il frame successivo che bisogna costruire. Questi due frame si scambiano ogni volta che il frame viene completato, nel caso del V-Sync invece il frame da mostrare si sincronizza col rate dello schermo.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.167.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.168.png)

Per renderizzare dal computing dei frammenti la tessitura illuminata, l’idea è quella di fare un rendering multipassata (multi-pass), ovvero:

1) si percorre la pipeline una prima volta per renderizzare la tessitura;
1) Con una seconda passata si computa lo screen buffer;

Questa tecnica è molto utilizzata ad esempio per i riflessi metallici.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.169.png)

Gli approcci si chiamano Forward Rendering e Deferred Shading.

La tecnica di rendering classica è detta forward rendering, essa è molto pesante nel fragment shader a causa della pesantezza del lighting dato che vengono effettuati dei conti su frammenti che non verrebbero mostrati a schermo.

Per risolvere tutto questo si adotta il deferred shading, l’idea è quella di effettuare tutte le operazioni a eccezione del lighting, quello che si ottiene è quindi un buffer per ogni input.

Con una seconda passata, si disegna a schermo un quadrilatero e per ogni frammento si computa il lighting.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.170.png)

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.171.png)
## Tecniche di rendering ad-hoc
In generale le tecniche di rendering ad-hoc effettuano i seguenti passi:

1) Si renderizza la scena dallo stesso punto di vista della luce, producendo lo screen buffer e il corrispondente depth buffer;
1) si renderizzano i due buffer ottenuti in precedenza producendo dei frammenti, per ognuno di essi si applica gli effetti 2D sul buffer.

Generalmente quello che si fa è applicare dei filtri al rendering.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.172.png)
### Shadowing
Lo shadowing è una tecnica che permette di renderizzare le ombre degli oggetti nella scena, per farlo svolge i seguenti passi:

1) Con la prima passata si posiziona la camera nella posizione della luce, si renderizza e si produce la cosiddetta shadow map, un particolare depth buffer contenente i frammenti delle ombre della scena. Questa fase viene ripetuta per ogni luce che può creare ombre;
1) Con la seconda passata si mette la camera nella posizione finale e, per ogni frammento della shadow map, si determina se viene illuminato o meno. Nel caso quel frammento non sia visibile, si azzera il contributo di quella fonte di luce.

In pratica, è l’applicazione di filtri per l’immagine al rendering.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.173.png)
#### Ambient Occlusion (AO)
L’AO nega non la luce che arriva da fonti di luce discrete, creando delle ombre computate dalle shadow maps come fa il shadow casting, ma bensì nega la componente dell’ambiente del lightning.

L’AO è un fattore tra 0 e 1 per ogni punto di superficie. La componente di ambiente del punto viene moltiplicata per il fattore di AO. Intuitivamente, per un punto p, il suo fattore di AO è la misura di quanto p è esposto alla luce: se p è ben esposto, allora AO≈1.0. Se è nascosto, allora AO≈0.0.

L’AO può essere fatta a Object Space (OSAO) o a Screen Space (SSAO) .

Il vantaggio della prima è che è precisa e economica, ma è statica, non riflette la posizione corrente degli oggetti nella scena. La seconda invece è dinamica, riflette la posizione corrente degli oggetti della scena, ma è meno precisa.

Le due AO possono essere combinate.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.174.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.175.png)![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.176.png)
### Profondità di campo
La profondità di campo consiste nel rendere un frame sfocato quando un pixel si trova a una distanza maggiore di focus, ovvero quella distanza in cui tutto ciò che è inferiore viene considerato nitido.

Questa tecnica produce screen e depth buffer alla prima passata di rendering mentre nella seconda applica l’effetto controllando ogni pixel, tutti quelli con distanza maggiore rispetto a quella di focus verranno sfocati.

La sfocatura si può ottenere facendo la media coi pixel vicini oppure computando un mipmap di basso livello dello screen buffer.

![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.177.png)
### HDR
L’HDR è un intervallo dinamico che permette di gestire la luce andando a variare la gamma dinamica dei colori, rendendo in questo modo il bianco “più bianco” e/o il nero “più nero.![](Aspose.Words.f8057e00-861a-4e9b-9348-649fbf9a37a9.178.png)

Per applicare questo effetto si effettuano due passate:

- La prima passata di pipeline è molto simile a quella del normale rendering, la differenza è che si utilizza qualsiasi valore per il lighting e il material, anche fuori dall’intervallo 0-1. Ad esempio, il sole emette la luce con RGB pari a 10,10,10. In questo modo ho valore >1, perciò ottengo luce “più bianca del bianco”;
- La seconda passata è quella che normalizza il tutto: il pixel più chiaro e quello più scuro diventano rispettivamento il valore 1 e 0 nell’intervallo 0-1, tutti gli altri vengono calcolati in base a questo nuovo range. (Bleeding over) (Bleeding over)

Altre tecniche ad-hoc sono le seguenti:

- Parallasse: utilizzo delle texture per la geometria, sono molto utilizzate per emulare le impronte su superfici morbide come la sabbia; 
- Motion Blur: utilizzando per creare la sfocatura durante il movimento;
- Effetti non fotorealistici: sono particolari effetti il cui obiettivo è quello di ottenere una grafica cartoonesca, l’effetto più famoso in questo ambito è il cel shading, tuttavia ne esistono molti altri come ad esempio quello che emula la pixel art.

FINE!
100
