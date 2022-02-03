In determinate situazioni, la velocità di esecuzione di un compito è l'elemento critico. In questi casi, può essere utile far eseguire questo compito a più processori, sperando che l'aumento di risorse sia compensato da una diminuzione del tempo di calcolo.
Il termine [[Algoritmi]] sottintende, oltre alla stessa definizione, che l'esecutore è unico.
Nel caso di **Algoritmi Paralleli e Distribuiti**, è chiave la presenza di un pool di esecutori e non si può parlare più di sequenza di istruzioni generiche ma di insiemi di istruzioni raggruppate in **passi paralleli**. In ogni passo parallelo si avrà un set di istruzioni, in cui ci sarà **al più** un'istruzione per esecutore.
I modelli di calcolo in cui sono presenti più processori che lavorano contemporaneamente sono detti **paralleli**, così come il modello di calcolo dotato di un solo processore è detto **sequenziale**.
Con più processori, sono possibili due differenti implementazioni:
- Un solo [[Clock]], condiviso tra tutti i processori del sistema;
- Un clock per ciascun processore.

In entrambi i casi, sia per gli algoritmi paralleli sia per gli algoritmi distribuiti, la risorsa **Tempo** è cruciale.
Il tempo è misurato come il numero di operazioni elementari richieste per risolvere il problema. Nel caso sequenziale, viene definito formalmente come:

$$T(x) = \text{ numero di operazioni elementari su $x$, con $x$ istanza }$$

$$t(n) = MAX\Bigg\{T(x) \quad|\quad x \in \sum^{n}\Bigg\}$$

dove $t(n)$ è una funzione in $n$, con $n$ lunghezza dell'input.
Spesso non si è interessati ad una valutazione precisa di $t(n)$, ma al suo tasso di crescita.
A questo scopo, si utilizzano le [[Funzioni Asintotiche]].

La valutazione del tempo dipende dal modello di calcolo e, inoltre, dal criterio di valutazione scelto (**uniforme** o **logaritmico**).

Nel modello di calcolo, le operazioni elementari che contiamo sono solamente le operazioni primitive messe a disposizione.

Bisogna prestare attenzione alla dimensione dei dati in gioco. Se si utilizza il **criterio di costo uniforme**, le operazioni elementari richiedono una sola **unità di tempo**. Se si utilizza il **criterio di costo logaritmico**, ogni operazione elementare ha un costo che dipende dal numero di bit degli operandi.

La funzione tempo deve indicare se gli algoritmi paralleli e distribuiti utilizzati si possono considerare efficienti. Si considera quindi il concetto di [[Efficienza]].

Si richiami, ora, un classico modello di calcolo sequenziale, cioè la **macchina RAM**: essa consiste di un processore P, collegato ad una memoria M attraverso un'unità di accesso.

![[RAMMachine.png]]

Nei modelli di calcolo parallelo, data la presenza di più processori, un elemento critico è la modalità di comunicazione tra processori. I due casi limite sono rappresentati dal [[Modello a Memoria Condivisa]] e dal [[Modello a Memoria Distribuita]].

Il più semplice modello di calcolo parallelo è quello a memoria condivisa, detto [[Modello P-RAM]].

Il calcolo procede per **passi**. Ad ogni passo, ogni processore può fare un'operazione sui dati che possiede, oppure può leggere o scrivere nella memoria condivisa. In particolare, è possibile selezionare un insieme di processori che eseguano tutti la stessa istruzione (su dati generalmente diversi) mentre gli altri processori restano inattivi. I processori attivi sono sincronizzati, cioè eseguono la stessa instruzione simultaneamente e l'istruzione successiva può essere eseguita solo quando tutti hanno terminato l'esecuzione della precedente.

Questo modello di macchine è detto di tipo **SIMD** (**SIngle Instruction Multiple Data**), il quale si contrappone all'architettura **MIMD** (**Multiple Instruction Multiple Data**).

Per semplicità, in seguito si farà riferimento al modello EREW, il più realistico.
Un vantaggio sostanziale di questa scelta è che un algoritmo funzionante su un modello EREW è funzionante anche sui modelli successivi.

La tipica istruzione di un algoritmo parallelo è strutturata nel seguente modo:

$$\text{for all } i(a \leq i \leq b) \text{ do in parallel Operazione}$$

la cui semantica è quella di eseguire $Operazione$ su tutti i processori $i$ con $a \leq i \leq b$, mentre gli altri restano inattivi (eseguono l'operazione nulla).

La notazione utilizzata per descrivere le risorse di calcolo per quanto riguarda un algoritmo sequenziale è, banalmente, $t(n)$ per la misura del tempo di esecuzione rispetto ad un input di dimensione $n$ e $s(n)$ per la misura dello spazio, sempre in funzione di $n$.
Per quanto riguarda un algoritmo parallelo, si avrà $p(n)$ e $T(n,p(n))$.
Dato un input di dimensione $n$, si definisce $p(n)$ il numero dei processori richiesti sull'input, nel caso peggiore.
Dato un algoritmo parallelo $A$, diremo $T_{A}(n,p(n))$ il tempo di esecuzione di $A$ su dati di dimensione $n$, quando $A$ utilizza $p$ processori; il caso sequenziale si ha, ovviamente, quando $p = 1$.
Il tempo del generico $i$-esimo passo su un input di dimensione $n$ è dato da: 

$$t_{i}(n) = MAX\Bigg\{t_{i}^{(j)}(n) \quad | \quad 1 \leq j \leq p(n)\Bigg\}$$

Pertanto:

$$T(n, p(n)) = \sum_{i=1}^{k(n)} t_{i}(n)$$

dove:
- $T$ dipende da $k(n)$, con $k(n)$ numero di passi paralleli da eseguire;
- $T$ dipende dalla dimensione dell'input e dal criterio di costo scelto;
- $T$ dipende da $p(n)$.

Obiettivo di un algoritmo parallelo è quello di diminuire i tempi di calcolo aumentando il numero di processori: si spera di ottenere un **trade-off** tra il tempo di esecuzione ed il costo (numero di processori), il quale va stimato per valutare l'efficacia di un algoritmo parallelo.

Un primo confronto tra i tempi può essere fatto confrontando l'andamento delle funzioni di calcolo del tempo:
Sono possibili due casi, uno non accettabile ed uno accettabile.
Il caso non accettabile è il caso in cui $T(n, p(n)) = \Theta(T(n,1))$, ovvero dove non si ottiene un miglioramento nonostante l'aggiunta di processori. Questo caso comporta solo un sovrapprezzo in termini di componentistica e, quindi, è evidentemente sfavorevole.
Il caso accettabile è il caso in cui $T(n, p(n)) = o(T(n,1))$, ovvero il caso in cui il tempo di esecuzione dell'algoritmo parallelo è inferiore a quello sequenziale.

Due misure naturali dell'efficacia sono lo **Speed-Up** $S_{A}(p)$ e l'**Efficienza** $E_{A}(n,p)$.

$$S_{A} = \frac{T_{A}(n,1)}{T_{A}(n,p(n))}$$

$$E_{A} = \frac{S_{A}(p(n))}{p(n)}$$

Maggiore il numero di processori, maggiore è il valore dello Speed-Up.
L'ideale sarebbe avere questo valore tendente ad $\infty$. Questo indica esattamente che $T(n, p(n)) = o(T(n,1))$. 
Non avendo, però, il numero di processori $p(n)$ al di fuori della funzione di tempo, non si è in grado di stabilire se si è utilizzato un numero realistico e, soprattutto, vantaggioso.
Con efficienza, invece, si intende quanto lavoro viene svolto da un singolo processore. 

Poichè $E_{A}(n,p(n)) = \frac{T_{A}(n,1)}{p(n) \cdot T_{A}(n,p(n))}$, l'efficienza risulta essere il rapporto tra il tempo dell'algoritmo sequenziale ed il tempo totale consumato dai processori, come se fossero usati sequenzialmente. In particolar modo, è bene scegliere $T_{A}(n,1)$ come il tempo del miglior algoritmo sequenziale.

Per il parametro $E$ vale che $0 \leq E(n, p(n)) \leq 1$. Quando $E \rightarrow 0$, si stanno utilizzando troppi processori che, probabilmente, rimangono inutilizzati per la maggioranza del tempo.

Si dimostra ora che $E \leq 1$.
Si esegue una trasformazione per passare da un algoritmo parallelo ad uno sequenziale (non è detto che sia il migliore). Si vuole valutare il tempo dell'algoritmo sequenziale così ottenuto. Si indica con $t_{i}(n)$ il tempo dell'istruzione più lunga al passo parallelo $i$, con $1 \leq i \leq k$.
Si definisce $\tilde T(n,1)$ il tempo dell'algoritmo sequenziale così ottenuto. Chiaramente, il tempo di questo algoritmo sequenziale è $\geq$ del tempo del miglior algoritmo sequenziale per un determinato problema.

$$T(n,1) \leq \tilde T(n,1) \leq p(n) \cdot t_{1}(n) + ... + p(n) \cdot t_{k(n)}(n)$$

L'upper bound è la sommatoria dell'istruzione più lunga in un generico passo parallelo per il numero di processori nell'algoritmo parallelo (ovvero quante istruzioni vanno sequenzializzate).

$$p(n) \cdot t_{1}(n) + ... + p(n) \cdot t_{k(n)}(n) = p(n) \sum_{i=1}^{k(n)} t_{i}(n) = p(n)T(n, p(n))$$

Questo non è altro che il tempo parallelo. Di conseguenza, il miglior tempo sequenziale $T(n,1)$ è limitato superiormente da $p(n)T(n, p(n))$.
Da questa uguaglianza si ricava facilmente che

$$\frac{T(n,1)}{p(n)} \leq T(n, p(n))$$

Si ottiene quindi che il tempo parallelo ha un lower bound dato dal rapporto tra il tempo sequenziale del miglior algoritmo ed il numero di processori.
Questo implica che il meglio che si può fare con un algoritmo parallelo è distribuire equamente tra i processori il lavoro del sequenziale.
 
Da questa disuguaglianza, si divinono entrambi i membri per il tempo parallelo ed si ottiene quindi

$$\frac{T(n,1)}{p(n)T(n, p(n)))} \leq 1$$

Sapendo che $\frac{T(n,1)}{p(n)T(n, p(n)))} = E(n, p(n))$, allora si ha dimostrato che $E(n, p(n)) \leq 1$. Il miglior risultato in termini di efficienza è quindi $E \rightarrow k \leq 1$, dove $k$ è una costante.


### Teorema di Wyllie [1979, PhD Thesis] ###
Se $E \rightarrow 0$, allora per migliorare l'algoritmo si provi a ridurre $p(n)$ senza degradare il tempo.

Dato un algoritmo $A$, il quale lavora con $p$ processori con una data efficienza $E$, è in generale possibile estendere l'algoritmo a lavorare con un numero inferiore di processori senza che l'efficienza diminuisca significativamente.

Se $k>1$, allora $E_{A}\Bigg( n, \frac{p}{k} \Bigg) \geq E_{A}(n, p)$.

Dato un algoritmo $A$ che lavora con $p$ processori, basta infatti costruire un algoritmo modificato che utilizza $p/k$ processori. Ad ogni nuovo processore si fa corrispondere un blocco di $k$ vecchi processori: ogni nuovo processore usa al più $k$ passi per emulare il singolo passo parallelo dei $k$ processori corrispondenti.
Il tempo di ogni singolo passo è quindi dettato dall'istruzione più lunga moltiplicata per il numero di istruzioni in un passo, $k \cdot t_{i}(n)$.
Il tempo parallelo richiesto è limitato superiormente dalla somma dell'$i$-esimo passo parallelo

$$T(n, \frac{p}{k}) \leq \sum_{i=1}^{k(n)} k \cdot t_{i}(n)$$

Quindi

$$\sum_{i=1}^{k(n)} k \cdot t_{i}(n) = k \cdot \sum_{i=1}^{k(n)} t_{i}(n) = k \cdot T(n, p(n))$$

Si ha quindi

$$T(n, \frac{p}{k}) \leq k \cdot T(n, p)$$

Partendo da questa disuguaglianza, si ottiene che $E$ cresce col diminuire dei processori. Infatti:

$$E(n, \frac{p}{k}) = \frac{T(n,1)}{\frac{p}{k}T(n, \frac{p}{k})} \geq \frac{T(n,1)}{\frac{p}{k} \cdot k T(n,p)} = \frac{T(n,1)}{p \cdot T(n,p)} = E(n,p)$$

Nel caso in cui $k \rightarrow p$, accade che

$$ 1 = E(n,1) = E(n, \frac{p}{p}) \geq E(n,\frac{p}{k}) \geq E(n, p)$$

Attenzione però a mantenere $T(n, \frac{p}{k}) = o(T(n,1))$, (altrimenti non ha senso parlare di algoritmo parallelo (perchè $E(n,1) = 1$ ma $T(n,p=1) = T(n,1)$, cioè sequenziale)

### SOMMATORIA ###
Si vuole trovare un algoritmo parallelo per risolvere il problema **Sommatoria**, un problema guida.
Ci si approccia con la tecnica della scomposizione del problema in sottoproblemi, per poi effettuare la fusione dei risultati.
Lo schema risolutivo di un problema guida potrà essere applicato per trovare la soluzione di altri problemi riguardanti operazioni associative.
Inoltre, un problema guida è un problema talmente diffuso che si trova spesso come modulo, cioè come sottoproblema, di altri problemi.

**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$

**Output**: $M[n] = \sum_{i=1}^{n} M[i]$

L'algoritmo sequenziale risolve il problema in questo modo:

<code>
	for i = 1 to n-1 do
</code>

<code>
		M[n] = M[n] + M[i]
</code>

Il tempo impiegato è $T(n,1) = n-1$ ed è il miglior tempo possibile per un algoritmo sequenziale.

Si può pensare di parallelizzare utilizzando $n$ processori, ognuno dei quali fa una somma. Ma quale somma? Se ci si basa sull'algoritmo sequenziale, il primo processore eseguirà la somma $M[1] + M[2]$, il secondo eseguirà poi la somma del risultato con $M[3]$ e così via, formando un albero di somme di altezza $n-1$. L'efficienza di questo algoritmo vale

$$E = \frac{n-1}{(n-1)(n-1)} = \frac{1}{n-1} \rightarrow 0$$

Il tempo ottenuto è uguale al tempo dell'algoritmo sequenziale e quindi, abbiamo solo introdotto uno spreco hardware ingiustificato.

E' possibile tentare un approccio diverso basandosi sulla proprietà associativa della somma. Infatti, vale

$$((a + b) + c) + d = (a + b) + (c + d)$$

Si utilizzano quindi $\frac{n}{2}$ processori $k$ ed ogni processore effettua la somma $M[2k] = M[2k] + M[2k-1]$ con $k$ che varia ad ogni iterazione. I processori, per comunicare, sovrascrivono le celle dalle quali leggono l'input, in un fashion EREW. Si genera così un albero di somme di altezza $\log_{2}(n)$ nel caso in cui $n$ sia potenza di $2$.

<code>
for j = 1 to log(n)
</code>

<code>
	for k = 1 to \frac{n}{2^{j}} parallel do 
</code>

<code>
		M[2^{j}k] =  M[2^{j}k] + M[2^{j}k - 2^{j-1}]
</code>

<code>
	return M[n]
</code>

E' necessario assicurarsi che questo algoritmo sia EREW, cioè che non ci siano conflitti di lettura e scrittura.
Siano $a$ e $b$ due processori, con $a \neq b$.
$a$ opera sulle celle $2^{j}a, 2^{j}a - 2^{j-1}$.
$b$ opera sulle celle $2^{j}b, 2^{j}b - 2^{j-1}$. 	
Si deve quindi dimostrare che le quattro celle utilizzate siano tutte diverse.
$2^{j}a \neq 2^{j}b$ per $a \neq b$.
$2^{j}a \neq 2^{j}b -2{j-1} \rightarrow^\text{per assurdo}$: $2a = 2b -1 \rightarrow a = \frac{2b - 1}{2} \notin \mathbb{N}$.
.
.
.
Si ha quindi un algoritmo EREW.

Si dimostra ora, per [[Induzione]], che l'algoritmo sottostante è corretto.

$$M[2^{j}k] = M[2^{j}k] + ... + M[2^{k}(k-1) +1]$$

per $j = \\log_{2}(n)$, ovviamente $k=1$ (un solo processore) e

$$M[n] = M[n] + ... + M[1]$$

Si dimostra partendo dal caso base ($j=1$ e $1 \leq k \leq \frac{n}{2}$):

$$M[2k] = M[2k] + M[2k -1]$$

Si supponga vera la proprietà che si vuole dimostrare per un generico valore $j-1$. E' necessario ora dimostrarla per il valore successivo $j$.
.
.
.


Si valuta ora l'algoritmo.
L'algoritmo usa $\frac{n}{2}$ processori, che si dimezzano a partire dal secondo passo.
Il tempo dell'algorito parallelo, sapendo che l'altezza dell'albero è $\log_{2}(n)$, è sicuramente logaritmico. Dal punto di vista delle singole microistruzioni, il processore esegue due LOAD, una ADD ed una STORE. Il processore utilizza quindi $4$ istruzioni. Il tempo totale è $4\log_{2}(n)$.

Serve un piccolo accorgimento nel caso in cui $n$ non sia potenza di $2$.
Nel caso in cui $n$ non lo fosse, l'albero non sarebbe più bilanciato.
Si mettono quindi tanti $0$ in coda all'input fino a raggiungere la lunghezza della successiva potenza di $2$. Si è scelto il valore $0$ in quanto elemento neutro della somma.
La potenza di $2$ successiva si troverà tra $n$ e $2n$.
Pertanto, si avra:

$$p(n) = \frac{2n}{n} = n$$
$$T(n, n) = 4\log_{2}(2n) = 5 \log_{2}(n)$$

Di conseguenza

$$p(n) = O(n) \quad \text{ e } \quad T(n,n) = O(\log(n))$$
$$E(n,n) = \frac{n-1}{n \cdot 5\log_{2}(n)} \sim \frac{1}{\log_{2}(n)} \rightarrow 0$$

Poichè l'efficienza tende a $0$ e i processori vengono usati al completo solo nel primo passo parallelo, si può applicare la teoria di Wyllie:
$$p(n) = o(n) \text{ per avere } E \rightarrow k \neq 0$$

Invece di considerare $\frac{n}{2}$ processori, si considerino soltanto $p$ processori ( con $p$ incognita). Questi processori devono prendersi in carico la somma non più di 2 numeri ma di una quantità maggiore, $\delta = \frac{n}{p}$.
Al $1°$ passo parallelo, per $1 \leq k \leq p$, vale:

$$M[k\delta] = M[k\delta] + ... + M[(k-1)\delta + 1]$$

Nei passi paralleli successivi, si usa l'algoritmo parallelo per SOMMATORIA sulle celle $M[\delta], M[2\delta], ..., M[p\delta]$, il quale memorizza il dato finale in $M[p\delta] = M[n] = \sum_{i}M[i]$.
L'algoritmo è quindi corretto.

Si valuta ora l'algoritmo.
$$p(n) = p$$
$$T(n, p) = T(\text{primo passo}) + T(\text{passi successivi}) = \frac{n}{p} + 5\log(p)$$
$$E(n, p(n)) = \frac{n-1}{p(\frac{n}{p} + 5 \log(p)} = \frac{n-1}{n + 5p\log(p)} \rightarrow 0$$
$$E \sim \frac{n}{2n} \rightarrow \frac{1}{2}$$

Tutto questo vale solo nel caso in cui si riesca a far valere $p\log(p) = \frac{n}{5}$ cioè $p = \frac{n}{5\log(n)}$.

Ricapitolando
$$p(n) = \frac{n}{5\log(n)}$$
$$T(n, p(n)) = 5\log(n) + 5\log(n) - ... \leq 10\log(n)$$

E' stato utilizzato un numero di processori sottolineare e si è mantenuto il tempo logaritmico.
E' possibile ottenere un tempo migliore rispetto al tempo logaritmico ottenuto per il problema SOMMATORIA?
E' possibile dimostrare l'esistenza di un lower bound tramite un [[Albero]]. Le foglie di questo albero sono i numeri da sommare ed i livelli dell'albero sono i passi paralleli. il livello con più nodi restituisce anche il numero di processori e l'altezza dell'albero restituisce il tempo dell'algoritmo.
Il numero di foglie di un albero vincola la minima altezza dell'albero. Dato un albero con $n$ foglie e di altezza $h$.

$$h \geq \log_{2}(n)$$

### SOMMATORIA come schema per altri problemi ###

Si osservi il problema OP ITERATA, del quale SOMMATORIA è un caso particolare.

**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$

**Output**: $Op_{i}M[i] \rightarrow M[n]$

Dove OP è un'operazione associativa. Nel caso in cui OP sia la somma, ci si ritrova nel problema SOMMATORIA.
Si ottiene una soluzione efficiente parallela

$$P=O)\frac{n}{\log(n)}$$
$$T=O(\log(n))$$

In realtà, con P-RAM più potenti, è possibile ottenere un tempo costante.
Si supponga di avere una CRCW P-RAM.

### $\wedge$ ITERATO ###

**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$ 
**Output**: $M[n] = \bigwedge_{i} M[i]$

E' possibile scrivere un algoritmo che risolve questo problema in tempo costante grazie alla P-RAM più potente. Il vantaggio maggiore in questo caso è quello di poter fare scritture concorrenti, dovuto al fatto che con l'operazione $\wedge$ tra più operandi, basta una sola variabile con valore $0$ per rendere nullo anche il risultato.

<code>
for 1<=k<=n parallel do
</code>

<code>
	if M[k] = p then
</code>

<code>
		M[n] = 0
</code>

Si ha una scrittura concorrente del valore $0$ nella cella $M[n]$. E' necessario adottare una politica per gestire le scritture concorrenti.

Si valuta ora l'algoritmo.
$$p(n) = n$$
$$T(n,n) = 3$$
$$E(n, n) = \frac{n-1}{3n} \rightarrow \frac{1}{3}$$

Non solo questo algoritmo fa da guida per le soluzioni ai problemi OP ITERATO ma anche per altri problemi, quali:
- PRODOTTO INTERNO DI VETTORI;
- PRODOTTO MATRICE VETTORE;
- PRODOTTO MATRICE MATRICE;
- POTENZA DI UNA MATRICE.


### PRODOTTO INTERNO DI VETTORI ###

**Definizione del problema**

**Input**: $x, y \in \mathbb{N}^{n}$

**Output**: $<x, y> = \sum_{i=1}^{n} x_{i} y_{i}$

La soluzione sequenziale effettua prima $n$ moltiplicazioni e poi effettua $n-1$ somme. Il tempo sequenziale è, di conseguenza $2n-1$.

La soluzione EREW prevede di fare i prodotti componente per componente dei vettori ed applicare poi l'algoritmo SOMMATORIA. Poichè, in questo algoritmo, si utilizzavano $p$ processori, ogni processore dovà svolgere $\delta = \frac{n}{p}$ moltiplicazioni (sapendo che $p = \frac{n}{\log(n)}, allora \delta = \log(n))$. Nel primo passo, quindi, vengono svolti $\delta$ prodotti in sequenza per ciascun processore e, nel secondo passo, ogni processore effettuerà la somma sequenziale di questi prodotti. Nel terzo passo, vengono svolte le $p$ somme finali.

...spazio per l'efficienza...

### PRODOTTO MATRICE VETTORE ###

**Definizione del problema**

**Input**: $A \in \mathbb{N}^{n \times n}, x \in \mathbb{N}^{n}$

**Output**: $Ax$

La soluzione sequenziale necessita di fare il prodotto riga per colonna, che richiede il tempo di un prodotto tra vettori per il numero di vettori da moltiplicare. Il tempo sequenziale è quindi $n(2n-1) = 2n^{2} -n$.

In parallelo si può pensare di fare tutti i prodotti riga $\times$ colonna, cioè utilizzare il modulo PRODOTTO INTERNO DI VETTORI  $n$ volte. Se si procede in questo modo, non si ha più, però, un algoritmo EREW perchè il vettore $x$ viene acceduto simultaneamente da più moduli. Si tratta quindi di un algoritmo CREW.

Si valutano ora le prestazioni.
$$p(n) = n \cdot \frac{n}{\log(n)}$$
$$T(n, p(n)) = \log(n)$$
$$E(n, p(n)) \sim \frac{n^{2}}{\frac{n^{2}}{\log(n)} \cdot \log(n)} \rightarrow c \neq 0$$

### PRODOTTO MATRICE MATRICE ###

**Definizione del problema**

**Input**: $A, B \in \mathbb{N}^{n \times n}$

**Output**: $A \cdot B$

Il calcolo di una nuova matrice quadrata richiede il calcolo di $n^{2}$ componenti. Il tempo sequenziale è pari a $n^{2,80}$, risultato ottenuto dall'[[Algoritmo di Strassen]].

L'idea su cui si basa l'algoritmo parallelo è usare $n^{2}$ prodotti interni in parallelo. Ogni riga di $A$ ed ogni colonna di $B$ vengono accedute simultaneamente, necessitando così di un algoritmo CREW.

Si valutano ora le prestazioni.
$$p(n) \sim n^{2} \cdot \frac{n}{\log(n)}$$
$$T(n, p(n)) \sim \log(n)$$
$$E(n, p(n)) \sim \frac{n^{2,8}}{\frac{n^{3}}{\log(n)} \cdot \log(n)} = \frac{n^{2,8}}{n^{3}} \rightarrow 0$$

### POTENZA DI  UNA MATRICE ###

**Definizione del problema**

**Input**: $A \in \mathbb{N}^{n \times n}$

**Output**: $A^{n}, n = 2^{k}$

L'algoritmo sequenziale, nel caso di $n$ potenza di $2$, può essere svolto con uno stratagemma.

<code>
for i=1 to log(n) do
	A = A * A
</code>

Questo pseudocodice calcola le potenze di $A$ che hanno come indice una potenza di $2$ fino ad arrivare al numero $n$. Utilizza inoltre il modulo PRODOTTO MATRICE MATRICE introdotto precedentemente.
Poichè il modulo utilizzato necessitava di un'architettura CREW, anche questo problema necessita di tale architettura.
Il tempo sequenziale sarà quindi $n^{2,8} \cdot \log(n)$.

Si valutano ora le prestazioni.
$$p(n) \sim n^{2} \cdot \frac{n}{\log(n)}$$
$$T(n, p(n)) = \log(n) \cdot \log(n) = \log^{2}(n)$$
$$E \sim \frac{n^{2,8}\log(n)}{\frac{n^{3}}{\log(n)}\cdot \log_{2}(n)} = \frac{n^{2,8}}{n^{3}} \rightarrow 0$$

### SOMME PREFISSE ###

**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$

**Output**: $\sum_{i=1}^{k}M[i] \rightarrow M[k] \quad 1 \leq k \leq n$

Si assume, per semplicità, che $n$ sia potenza di $2$.

Ci sono diverse applicazioni che utilizzano SOMME PREFISSE, tra cui:
- problemi legati ad analizzatori lessicali nei compilatori;
- problemi di ricerca di parole nei testi.

L'algoritmo sequenziale è strutturato nel seguente modo:

<code>
for k = 2 to n do
</code>

<code>
M[k] = M[k] + M[k-1]
</code>

e termina in un tempo $n-1$.

Si può ottenere un risultato migliore? E' evidente che il problema SOMME PREFISSE richieda la risoluzione del problema SOMMATORIA nell'ultima cella e che se si deve eseguire $n$ somme in sequenza, non si possono svolgere meno di $n-1$ passi. Di conseguenza, dal punto di vista sequenziale, questo è il miglior algoritmo possibile.

Una proposta parallela è quella di risolvere con SOMMATORIA tutti i moduli prefissi. Si applicano $n-1$ moduli sommatoria, tutti in parallelo.

![[immagineslide7]]

Questo non è un algoritmo EREW ma CREW, in quanto ogni applicazione di SOMMATORIA richiederà le celle precedenti in lettura in contemporanea. 

Si valutano ora le prestazioni:
$$p(n) \leq (n-1) \cdot \frac{n}{\log(n)} \sim \frac{n^{2}}{\log(n)}$$
In realtà $\frac{n}{\log(n)}$ è il costo dell'ultimo modulo che prende in input tutte le celle per effettuare SOMMATORIA. Si può calcolare che, in media, ogni modulo $i$ utilizzi circa

$$\sum_{i=2}^{n}\frac{i}{\log(i)} \geq \frac{1}{\log(n)}\sum_{i=2}{n}i \sim \frac{n^{2}}{\log(n)}$$

$$T(n, p(n)) \sim \log(n)$$
$$E \sim \frac{n-1}{\frac{n^{2}}{\log(n)} \cdot \log(n)} \rightarrow 0$$

Di conseguenza è una scelta poco efficiente.

### Tecnica di Kogge-Stone [1973] ###

Kogge-Stone introduce il **Pointer Doubling** per risolvere SOMME PREFISSE.
Si tratta di puntatori, di link tra coppie di numeri, indicati tramite frecce.
Ogni processore si occupa di un puntatore e ne fa la somma in questo modo:
Dati $M[i] = m$ e $M[S[k]] = k$, sia $S[k]$ la cella di memoria contenente la distanza del successivo da $M[i]$. Questa distanza può essere interpretata come un link, un collegamento tra le due celle. Il processore assegnato a questo link esegue, al passo $0$, la somma $m + k$ e memorizza il risultato in $M[S[k]]$. Al passo $0$, quindi, l'algoritmo prende un elemento ed il suo successore e ne calcola la somma (tranne per l'ultimo elemento, in quanto privo di successore).
Al passo $1$, l'algoritmo prende un elemento ed il suo successore non più a distanza $S[k] = 0$ bensì a distanza $S[k] = k + 1$, e ne effettua la somma (anche in questo caso non viene eseguita per l'ultimo ed il penultimo elemento, in quanto privi di successore).
Questo algoritmo aumenta la distanza ad ogni passo successivo, fino al terminare dell'algoritmo.

![[immagine]]

- Quanti numeri privi di successori genera il $j$-esimo passo? $2^{j}$.
- Quanti passi dura l'algoritmo? L'algoritmo dura fino a quando esistono successori. L'algoritmo termina quindi in $\log_{2}(n)$ passi.
- Quali processori vengono attivati al $j$-esimo passo? I processori attivati sono $1 \leq k \leq n-2^{j-1}$
- Sia S[k] la posizione del successivo di M[k]. Come viene inizializzato S? Viene inizializzato come S[k] = k+1 e S[n] = 0
- Dato $p[k]$, quale istruzione su $M$ deve eseguire? $M[k]+M[S[k]] \rightarrow M[S[k]]$
- Come deve essere svolto l'aggiornamento di S? $S[k]=(S[k] == 0? 0 : S[S[k]])$

<code>
	for j = 1 to log(n) do
</code>

<code>
	for 1 <= k <=  n - 2^(j-1) par do
</code>

<code>
	M[S[k] = M[k] + M[S[k]]
</code>

<code>
	S[k] = (S[k] == 0? 0 : S[S[k]])
</code>

I processori non competono per accedere alla stessa cella. Si sta risolvendo il problema con un architettura EREW.

![[immagine2]]

.
.
.

La correttezza dell'algoritmo si dimostra mostrando che, per $1 \leq k \leq n$ si ha in M[k] la somma degli elementi precedenti

$$M[k] = \sum_{i=1}^{k} M[i]$$

Al $j$-esimo passo si avrà

$$M[t] = \Bigg\{ M[t] + ... + M[1] \quad t \leq 2^{j}
				 M[t] + ... +M[t-2^{j}+1] \quad t > 2^{j}
$$

**Dimostrazione per induzione**

Se l'algoritmo al $j$-esimo passo è corretto, si ha per $j= \log(n)$

$$M[t] = \Bigg\{ M[t] + ... + M[1] \quad \text{ per } t \leq 2^j = 2^{\log(n)} = n

... \quad \text{ per } t < 2^j = n
$$

**Caso base**:

$$j=1 \quad \text{ per } t \leq 2 \quad \quad \text{ se } t = 1 \quad \quad M[1] = M[1]$$
$$\quad\quad\quad \qquad \qquad \qquad \qquad \qquad \text{se } t = 2 \quad \quad M[2] = M[1] + M[2]$$



