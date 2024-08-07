In determinate situazioni, la velocità di esecuzione di un compito è l'elemento critico. In questi casi, può essere utile far eseguire questo compito a più processori, sperando che l'aumento di risorse sia compensato da una diminuzione del tempo di calcolo.<br />
Il termine [[Algoritmo]] sottintende, oltre alla stessa definizione, che l'esecutore è unico.<br />
Nel caso di **Algoritmi Paralleli e Distribuiti**, è chiave la presenza di un pool di esecutori e non si può parlare più di sequenza di istruzioni generiche ma di istruzioni raggruppate in insiemi chiamati **passi paralleli**. In ogni passo parallelo si avrà un set di istruzioni, in cui ci sarà **al più** un'istruzione per esecutore.<br />

------------------------------------------------------------

# Algoritmi Paralleli 
I modelli di calcolo in cui sono presenti più processori che lavorano contemporaneamente sono detti **paralleli**, così come il modello di calcolo dotato di un solo processore è detto **sequenziale**.<br />
Con più processori, sono possibili due differenti implementazioni:
- Un solo [[Clock]], condiviso tra tutti i processori del sistema;
- Un clock per ciascun processore.

In entrambi i casi, sia per gli algoritmi paralleli sia per gli algoritmi distribuiti, la risorsa **Tempo** è cruciale. Il tempo è misurato come il numero di operazioni elementari richieste per risolvere il problema.<br />
Nel caso sequenziale, viene definito formalmente come:

$$T(x) = \text{ numero di operazioni elementari su $x$, con $x$ istanza }$$


$$t(n) = MAX\Bigg\{T(x) \quad|\quad x \in \sum^{n}\Bigg\}$$

dove $t(n)$ è una funzione in $n$, con $n$ lunghezza dell'input e dove $\sum^{n}$ indica il dominio della funzione.
Spesso non si è interessati ad una valutazione precisa di $t(n)$, ma al suo tasso di crescita.<br />
A questo scopo, si utilizzano le [[Funzioni Asintotiche]].

La valutazione del tempo dipende dal modello di calcolo e, inoltre, dal criterio di valutazione scelto (**uniforme** o **logaritmico**).<br />
Nel modello di calcolo, le operazioni elementari che contiamo sono solamente le operazioni primitive messe a disposizione.<br />
Bisogna prestare attenzione alla dimensione dei dati in gioco.<br />
Se si utilizza il **criterio di costo uniforme**, le operazioni elementari richiedono una sola **unità di tempo**. Se si utilizza il **criterio di costo logaritmico**, ogni operazione elementare ha un costo che dipende dal numero di bit degli operandi.<br />
La funzione tempo deve indicare se gli algoritmi paralleli e distribuiti utilizzati si possono considerare efficienti. Si considera quindi il concetto di [[Efficienza]].

------------------------------------------------------------

Si richiami, ora, un classico modello di calcolo sequenziale, cioè la **macchina RAM**: essa consiste di un processore P, collegato ad una memoria M attraverso un'unità di accesso.

![[Images/RAMMachine.png]]

Nei modelli di calcolo parallelo, data la presenza di più processori, un elemento critico è la modalità di comunicazione tra processori. I due casi limite sono rappresentati dal [[Modello a Memoria Condivisa]] e dal [[Modello a Memoria Distribuita]].

Il più semplice modello di calcolo parallelo è quello a memoria condivisa, detto [[Modello P-RAM]].

Il calcolo procede per **passi**. Ad ogni passo, ogni processore può fare un'operazione sui dati che possiede, oppure può leggere o scrivere nella memoria condivisa. In particolare, è possibile selezionare un insieme di processori che eseguano tutti la stessa istruzione (su dati generalmente diversi) mentre gli altri processori restano inattivi. I processori attivi sono sincronizzati, cioè eseguono la stessa istruzione simultaneamente e l'istruzione successiva può essere eseguita solo quando tutti hanno terminato l'esecuzione della precedente.<br />
Questo modello di macchine è detto di tipo **SIMD** (**SIngle Instruction Multiple Data**), il quale si contrappone all'architettura **MIMD** (**Multiple Instruction Multiple Data**).<br />
Per semplicità, in seguito si farà riferimento al modello EREW, il più realistico.
Un vantaggio sostanziale di questa scelta è che un algoritmo funzionante su un modello EREW è funzionante anche sui modelli successivi.

------------------------------------------------------------

La tipica istruzione di un algoritmo parallelo è strutturata nel seguente modo:

$$\text{for all } i\text{, } (a \leq i \leq b) \text{ do in parallel Operazione}$$

la cui semantica è quella di eseguire $Operazione$ su tutti i processori $i$ con $a \leq i \leq b$, mentre gli altri restano inattivi (eseguono l'operazione nulla).

La notazione utilizzata per descrivere le risorse di calcolo per quanto riguarda un algoritmo sequenziale è, banalmente, $t(n)$ per la misura del tempo di esecuzione rispetto ad un input di dimensione $n$ e $s(n)$ per la misura dello spazio, sempre in funzione di $n$.<br />
Per quanto riguarda un algoritmo parallelo, si avrà $p(n)$ e $T(n,p(n))$.
Dato un input di dimensione $n$, si definisce $p(n)$ il numero dei processori richiesti sull'input, nel caso peggiore.<br />
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

Un primo confronto tra i tempi può essere fatto confrontando l'andamento delle funzioni di calcolo del tempo:<br />
Sono possibili due casi, uno non accettabile ed uno accettabile.<br />
Il caso non accettabile è il caso in cui $T(n, p(n)) = \Theta(T(n,1))$, ovvero dove non si ottiene un miglioramento nonostante l'aggiunta di processori. Questo caso comporta solo un sovrapprezzo in termini di componentistica e, quindi, è evidentemente sfavorevole.<br />
Il caso accettabile è il caso in cui $T(n, p(n)) = o(T(n,1))$, ovvero il caso in cui il tempo di esecuzione dell'algoritmo parallelo è inferiore a quello sequenziale.

------------------------------------------------------------

Due misure naturali dell'efficacia sono lo **Speed-Up** $S_{A}(p)$ e l'**Efficienza** $E_{A}(n,p)$.

$$S_{A} = \frac{T_{A}(n,1)}{T_{A}(n,p(n))}$$

$$E_{A} = \frac{S_{A}(p(n))}{p(n)}$$

Maggiore il numero di processori, maggiore è il valore dello Speed-Up.
L'ideale sarebbe avere questo valore tendente ad $\infty$. Questo indica esattamente che $T(n, p(n)) = o(T(n,1))$. <br />
Non avendo, però, il numero di processori $p(n)$ al di fuori della funzione di tempo, non si è in grado di stabilire se si è utilizzato un numero realistico e, soprattutto, vantaggioso.<br />
Con efficienza, invece, si intende quanto lavoro viene svolto da un singolo processore. <br />
Poichè $E_{A}(n,p(n)) = \frac{T_{A}(n,1)}{p(n) \cdot T_{A}(n,p(n))}$, l'efficienza risulta essere il rapporto tra il tempo dell'algoritmo sequenziale ed il tempo totale consumato dai processori, come se fossero usati sequenzialmente. In particolar modo, è bene scegliere $T_{A}(n,1)$ come il tempo del miglior algoritmo sequenziale.

Per il parametro $E$ vale che $0 \leq E(n, p(n)) \leq 1$. Quando $E \rightarrow 0$, si stanno utilizzando troppi processori i quali, probabilmente, rimangono inutilizzati per la maggior parte del tempo.

Si dimostra ora che $E \leq 1$.<br />
Si esegue una trasformazione per passare da un algoritmo parallelo ad uno sequenziale (non è detto che sia il migliore). Si vuole valutare il tempo dell'algoritmo sequenziale così ottenuto. Si indica con $t_{i}(n)$ il tempo dell'istruzione più lunga al passo parallelo $i$, con $1 \leq i \leq k$.<br />
Si definisce $\tilde T(n,1)$ il tempo dell'algoritmo sequenziale così ottenuto. Chiaramente, il tempo di questo algoritmo sequenziale è $\geq$ del tempo del miglior algoritmo sequenziale per un determinato problema.

$$T(n,1) \leq \tilde T(n,1) \leq p(n) \cdot t_{1}(n) + ... + p(n) \cdot t_{k(n)}(n)$$

L'upper bound è la sommatoria dell'istruzione più lunga in un generico passo parallelo per il numero di processori nell'algoritmo parallelo (ovvero quante istruzioni vanno sequenzializzate).

$$p(n) \cdot t_{1}(n) + ... + p(n) \cdot t_{k(n)}(n) = p(n) \sum_{i=1}^{k(n)} t_{i}(n) = p(n)T(n, p(n))$$

Questo non è altro che il tempo parallelo. Di conseguenza, il miglior tempo sequenziale $T(n,1)$ è limitato superiormente da $p(n)T(n, p(n))$.
Da questa uguaglianza si ricava facilmente che

$$\frac{T(n,1)}{p(n)} \leq T(n, p(n))$$

Si ottiene quindi che il tempo parallelo ha un lower bound dato dal rapporto tra il tempo sequenziale del miglior algoritmo ed il numero di processori.<br />
Questo implica che il meglio che si può fare con un algoritmo parallelo è distribuire equamente tra i processori il lavoro del sequenziale.<br />
Da questa disuguaglianza, si dividono entrambi i membri per il tempo parallelo ed si ottiene quindi

$$\frac{T(n,1)}{p(n)T(n, p(n)))} \leq 1$$

Sapendo che $\frac{T(n,1)}{p(n)T(n, p(n)))} = E(n, p(n))$, allora si ha dimostrato che $E(n, p(n)) \leq 1$. Il miglior risultato in termini di efficienza è quindi $E \rightarrow c \leq 1$, dove $c$ è una costante.

------------------------------------------------------------

Nel caso in cui l'efficienza $E$ di un algoritmo tenda a $0$, è possibile provare ad applicare il [[Teorema di Wyllie]].<br />

------------------------------------------------------------

## SOMMATORIA
Si vuole trovare un algoritmo parallelo per risolvere il problema **Sommatoria**, un problema guida.<br />
Ci si approccia con la tecnica della scomposizione del problema in sottoproblemi, per poi effettuare la fusione dei risultati.<br />
Lo schema risolutivo di un problema guida potrà essere applicato per trovare la soluzione di altri problemi riguardanti operazioni associative.<br />
Inoltre, un problema guida è un problema talmente diffuso che si trova spesso come modulo, cioè come sottoproblema, di altri problemi.<br />

**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$<br />
**Output**: $M[n] = \sum_{i=1}^{n} M[i]$

L'algoritmo sequenziale risolve il problema in questo modo:

```
for i = 1 to n-1 do{
	M[n] = M[n] + M[i]
}
```

Il tempo impiegato è $T(n,1) = n-1$ ed è il miglior tempo possibile per un algoritmo sequenziale.<br />
Si può pensare di parallelizzare utilizzando $n$ processori, ognuno dei quali fa una somma. Ma quale somma? Se ci si basa sull'algoritmo sequenziale, il primo processore eseguirà la somma $M[1] + M[n]$, il secondo eseguirà poi la somma del risultato con $M[2]$ e così via, formando un albero di somme di altezza $n-1$. L'efficienza di questo algoritmo vale:

$$E = \frac{n-1}{(n-1)(n-1)} = \frac{1}{n-1} \rightarrow 0$$

Il tempo ottenuto è uguale al tempo dell'algoritmo sequenziale. Quindi si è solo introdotto uno spreco hardware ingiustificato.<br />
E' possibile tentare un approccio diverso basandosi sulla proprietà associativa della somma. Infatti, vale

$$((a + b) + c) + d = (a + b) + (c + d)$$

Si utilizzano quindi $\frac{n}{2}$ processori ed ogni processore effettua la somma $M[2^{j}k] = M[2^{j}k] + M[2^{j}k-2^{j-1}]$, con $j$ che varia ad ogni iterazione e $k$ indice dei processori. I processori, per comunicare, sovrascrivono le celle dalle quali leggono l'input, in un fashion EREW. Si genera così un albero di somme di altezza $\log_{2}(n)$ nel caso in cui $n$ sia potenza di $2$.

```
for j = 1 to log(n) do{
	for k = 1 to n/(2^(j)) parallel do{
		M[2^(j)k] =  M[2^(j)k] + M[2^(j)k - 2^(j-1)]
	}
}
return M[n]
```

E' necessario assicurarsi che questo algoritmo sia EREW, cioè che non ci siano conflitti di lettura e scrittura.<br />
Siano $a$ e $b$ due numeri naturali, indici di due differenti processori, con $a \neq b$.<br />
Il processore $a$ opera sulle celle $2^{j}a, 2^{j}a - 2^{j-1}$. <br />
Il processore $b$ opera sulle celle $2^{j}b, 2^{j}b - 2^{j-1}$. <br />
Si deve quindi dimostrare che le quattro celle utilizzate siano tutte diverse.<br />
$2^{j}a \neq 2^{j}b$ per $a \neq b$.<br />
$2^{j}a \neq 2^{j}b -2^{j-1} \rightarrow^\text{per assurdo}$: $2a = 2b -1 \rightarrow a = \frac{2b - 1}{2} \notin \mathbb{N}$.<br />
Allo stesso modo si dimostra per le restanti combinazioni.<br />
Si ha quindi un algoritmo EREW.

------------------------------------------------------------

### Correttezza dell'Algoritmo
Si dimostra ora, per induzione, che l'algoritmo sottostante è corretto. La correttezza è data dalla seguente proprietà:

$$M[2^{j}k] = M[2^{j}k] + ... + M[2^{j}(k-1) +1]$$

Questa proprietà sostiene che, nelle celle multiple di $2^{j}$, sono presenti $2^{j}$ valori sommati, cioè i valori di tutte le $2^{j}$ celle precedenti.<br />
Per $j = \\log_{2}(n)$, ovviamente $k=1$ (un solo processore) e

$$M[n] = M[n] + ... + M[1]$$

Cioè, dopo $\log(n)$ passi, in $M[n]$ si avrà la somma di tutti i valori in input.<br />
Si dimostra verificando che l'algoritmo soddisfa per ogni input questa proprietà, partendo dal caso base ($j=1$ e $1 \leq k \leq \frac{n}{2}$). L'istruzione dell'algoritmo è:

$$M[2k] = M[2k] + M[2k -1]$$

Questa non è altro che la proprietà da dimostrare, considerata al passo $j=1$.<br />
Si supponga vera la proprietà che si vuole dimostrare per un generico valore $j-1$. E' necessario ora dimostrarla per il valore successivo $j$.<br />
Si prenda ciò che viene fatto dall'algoritmo al passo $j$ e si dimostri che quello che fa, in realtà, non è altro che una istruzione che mette nella cella di memoria $M[2^{j}k]$ i precedenti $2^{j}$ valori sommati.

$$M[2^{j}k] = M[2^{j}k] + M[2^{j}k - 2^{j-1}]$$

L'algoritmo prende due valori a distanza $2^{j-1}$, ne fa la somma e lo memorizza in $M[2^{j}k]$.<br />
E' possibile sfruttare ora il fatto che al passo $j-1$ valga la proprietà considerata. Si consideri il primo termine del secondo membro del $j$-esimo passo:

$$M[2^{j}k] = M[2^{j-1}2k] = M[2^{j-1}2k] + ... + M[2^{j-1}(2k-1)+1]$$

E' possibile fare un discorso analogo per il secondo termine del secondo membro del $j$-esimo passo. Infatti, raccogliendo $2^{j-1}$, si può applicare la proprietà al passo $j$-esimo: 

$$M[2^jk-2^{j-1}] = M[2^{j-1}(2k-1)] = M[2^{j-1}(2k-1)] + ... + M[2^{j-1}(2k-2)+1]$$

Si hanno due somme di $2^{j-1}$ valori. Se si effettua la somma complessiva di queste due celle, si sommano $2 \cdot2^{j-1} = 2^j$ valori.<br />
Se fossero tutti valori consecutivi e precedenti a $2^jk$, la proprietà sarebbe dimostrata. Questi valori sono, di fatto, tutti in sequenza perchè la prima cella contiene i valori successivi ai valori della seconda cella.<br />
Il primo termine sarà quindi $M[2^{j-1}2k] = M[2^{j}k]$ e l'ultimo termine sarà quindi $M[2^{j-1}(2k-2)+1] = M[2^{j}k - 2^{j-1}]$.<br />
La proprietà è, così, dimostrata.<br />

Si valutano ora le prestazioni dell'algoritmo.<br />
L'algoritmo usa $\frac{n}{2}$ processori, che si dimezzano ad ogni passo, a partire dal secondo passo. Questo potrebbe suggerire l'utilizzo di un numero eccessivo di processori.<br />
Il tempo dell'algoritmo parallelo, sapendo che l'altezza dell'albero è $\log_{2}(n)$, è sicuramente logaritmico. Dal punto di vista delle singole microistruzioni, il processore esegue due LOAD, una ADD ed una STORE. Il processore utilizza quindi $4$ istruzioni. Il tempo totale è $4\log_{2}(n)$.<br />
Serve un piccolo accorgimento nel caso in cui $n$ non sia potenza di $2$.
Nel caso in cui $n$ non lo fosse, l'albero non sarebbe più bilanciato.<br />
Si mettono, quindi, tanti $0$ in coda all'input fino a raggiungere la lunghezza della successiva potenza di $2$. Si è scelto il valore $0$ in quanto elemento neutro della somma.<br />
La potenza di $2$ successiva si troverà tra $n$ e $2n$.
Pertanto, si avra:

$$p(n) = \frac{2n}{2} = n$$
$$T(n, n) = 4\log_{2}(2n) \leq 5 \log_{2}(n)$$

Di conseguenza:

$$p(n) = O(n) \quad \text{ e } \quad T(n,n) = O(\log(n))$$
$$E(n,n) = \frac{n-1}{n \cdot 5\log_{2}(n)} \sim \frac{1}{\log_{2}(n)} \rightarrow 0$$

Poichè l'efficienza tende a $0$ e i processori vengono usati al completo solo nel primo passo parallelo, è giusto pensare che i processori siano sprecati. Si può applicare il teorema di Wyllie:
$$p(n) = o(n) \text{ per avere } E \rightarrow c \neq 0$$

Invece di considerare $\frac{n}{2}$ processori, si considerino soltanto $p$ processori (con $p$ incognita). Questi processori devono prendersi in carico non più la somma di $2$ numeri ma di una quantità maggiore, $\Delta = \frac{n}{p}$.<br />
Ogni processore dovrà eseguire le somme in sequenza e salvare il risultato nella cella con indice più alto, ovvero $M[k\Delta]$.<br />
Al primo passo parallelo, per $1 \leq k \leq p$, con $k$ indice del processore, vale:

$$M[k\Delta] = M[k\Delta] + ... + M[(k-1)\Delta + 1]$$

Nei passi paralleli successivi, si usa l'algoritmo parallelo per SOMMATORIA sulle celle $M[\Delta], M[2\Delta], ..., M[p\Delta]$, il quale memorizza il dato finale in $M[p\Delta] = M[p\frac{n}{p}] =M[n] = \sum_{i}M[i]$.
L'algoritmo è quindi corretto.

Si valutano ora i processori ed il tempo parallelo del nuovo algoritmo.
$$p(n) = p$$
dove $p$ è un incognita.
$$T(n, p) = T(\text{primo passo parallelo}) + T(\text{passi successivi}) = \frac{n}{p} + 5\log(p)$$
dove il primo passo consiste nelle somme in sequenza effettuate parallelamente da ciascuno dei $\Delta$ processori, mentre i passi successivi corrispondono all'algoritmo sommatoria, calcolato sul numero di valori che vengono sommati, cioè $p$ invece del classico $n$.
$$E(n, p(n)) = \frac{n-1}{p(\frac{n}{p} + 5 \log(p)} = \frac{n-1}{n + 5p\log(p)} \rightarrow c \neq 0$$
Sapendo che $p$ è rimasto un valore incognito, è possibile considerare $5p\log(p) \sim n$, in modo tale da  avere una funzione lineare al denominatore, che vada ad abbattere completamente la crescita del numeratore.
$$E \sim \frac{n}{2n} \rightarrow \frac{1}{2}$$

Tutto questo vale solo nel caso in cui si riesca a far valere $p\log(p) = \frac{n}{5}$ cioè $p = \frac{n}{5\log(n)}$.
Infatti:
$$\frac{n}{5\log(n)}\Bigg(\log\bigg(\frac{n}{(\log(n)5)}\bigg)\Bigg) = \frac{n}{5\log(n)}(\log(n) - \log(5) - \log(\log(n)) = \frac{n}{5}\Bigg(1-\frac{\log(5)}{\log(n)} - \frac{\log(\log(n))}{\log(n)}\Bigg) \sim \frac{n}{5}$$
Per $n \rightarrow \infty$, sia $\frac{\log(5)}{\log(n)}$ che $\frac{\log(\log(n))}{\log(n)} \rightarrow 0$.

Ricapitolando:
$$p(n) = \frac{n}{5\log(n)}$$
$$T(n, p(n)) = 5\log(n) + 5\log(n) - ... \leq 10\log(n)$$

Il tempo parallelo è passato da $\frac{n}{p} + 5\log(p)$ a questo valore sostituendo il nuovo $p(n)$ al posto di $p$.<br />
E' stato utilizzato un numero di processori sublineare e si è mantenuto il tempo logaritmico.

E' possibile ottenere un tempo migliore rispetto al tempo logaritmico ottenuto per il problema SOMMATORIA?<br />
E' possibile dimostrare l'esistenza di un lower bound tramite l'utilizzo di un [[Albero |albero]], in particolare un [[Albero Binario |albero binario]].<br />
Le foglie di questo albero sono i numeri da sommare ed i livelli dell'albero sono i passi paralleli.<br />
Il livello con più nodi corrisponde anche al numero di processori e l'altezza dell'albero corrisponde al tempo dell'algoritmo.
Il numero di foglie di un albero vincola la minima altezza dell'albero. Dato un albero con $n$ foglie e di altezza $h$:

$$n\leq 2^h$$

$$h \geq \log_{2}(n)$$

------------------------------------------------------------

## SOMMATORIA come schema per altri problemi
Si osservi il problema OP ITERATA, del quale SOMMATORIA è un caso particolare.

**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$<br />
**Output**: $M[n] = OP_{i} \text{ } M[i]$

OP è un'operazione associativa. Nel caso in cui OP sia la somma, ci si ritrova nel problema SOMMATORIA.<br />
Esempi di operazioni sono $+, *, \wedge, \vee, \oplus, \min, \max$...<br />
Si ottiene una soluzione efficiente parallela:

$$p(n)=O\Bigg(\frac{n}{\log(n)}\Bigg)$$
$$T(n, p(n))=O(\log(n))$$

Mentre, con una soluzione EREW, questo è il miglior risultato ottenibile, in realtà, con P-RAM più potenti, si è in grado di ottenere un tempo costante.<br />

------------------------------------------------------------

## $\wedge$ ITERATO
**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$ <br />
**Output**: $M[n] = \bigwedge_{i} M[i]$

Si supponga di avere una CRCW P-RAM.<br />
E' possibile scrivere un algoritmo che risolve questo problema in tempo costante grazie alla P-RAM più potente.<br />
Il vantaggio maggiore in questo caso è quello di poter fare scritture concorrenti, dovuto al fatto che con l'operazione $\wedge$ tra più operandi, basta una sola variabile con valore $0$ per rendere nullo anche il risultato.<br />
Da questa intuizione, si può progettare il seguente algoritmo:

```
for 1<=k<=n parallel do{
	if M[k] = 0{
		M[n] = 0
	}
}

Return M[n]
```

Si ha una scrittura concorrente del valore $0$ nella cella $M[n]$. E' necessario quindi adottare una politica per gestire queste scritture concorrenti.

Si valuta ora l'algoritmo.
$$p(n) = n$$
$$T(n,n) = 3$$
$$E(n, n) = \frac{n-1}{3n} \rightarrow \frac{1}{3}$$

Una soluzione simile si può applicare al problema $\vee$ ITERATO. <br />
Non solo questo algoritmo fa da guida per le soluzioni ai problemi OP ITERATO ma anche per altri problemi, quali:
- PRODOTTO INTERNO DI VETTORI;
- PRODOTTO MATRICE VETTORE;
- PRODOTTO MATRICE MATRICE;
- POTENZA DI UNA MATRICE.

------------------------------------------------------------

## PRODOTTO INTERNO DI VETTORI
**Definizione del problema**

**Input**: $x, y \in \mathbb{N}^{n}$<br />
**Output**: $<x, y> = \sum_{i=1}^{n} x_{i} y_{i}$

La soluzione sequenziale effettua prima $n$ moltiplicazioni e poi effettua $n-1$ somme. Il tempo sequenziale è, di conseguenza $2n-1$.<br />
La soluzione EREW prevede, invece, di svolgere i prodotti componente per componente dei vettori ed applicare poi l'algoritmo SOMMATORIA. Poichè, in questo algoritmo, vengono utilizzati $p$ processori, ogni processore dovrà svolgere $\Delta = \frac{n}{p}$ moltiplicazioni (sapendo che $p = \frac{n}{\log(n)}$, allora $\Delta = \log(n))$. <br />
Nel primo passo, quindi, vengono svolti $\Delta$ prodotti in sequenza per ciascuno dei $p$ processori e, nel secondo passo, ogni processore effettuerà la somma sequenziale di questi prodotti. Nel terzo passo, vengono svolte le $p$ somme finali in parallelo.<br />
I primi due passi compongono la prima fase mentre il terzo passo compone la seconda fase.<br />

Si valutano ora le prestazioni dell'algoritmo.<br />

Prima fase:
$$p = \frac{n}{\log(n)} \rightarrow \Delta = \frac{n}{p} = \log(n)$$
$$T_{I}(n, p(n)) = c_{1}\log(n)$$

Seconda fase (somma dei $p$ numeri in parallelo):
$$p(n) = c_{2}\frac{n}{log(n)}$$
$$T_{II}(n, p(n)) = c_{3}\log(n)$$

Riassumendo:
$$<x, y> \text{ costa:}\qquad p \sim \frac{n}{\log(n)} \qquad T = T_{I} + T_{II} \sim \log(n)$$
$$E \sim \frac{2n -1}{\frac{n}{\log(n)}\cdot \log(n)} \rightarrow c \neq 0$$

Questo problema, a sua volta, è modulo di altri problemi, come, banalmente, il problema PRODOTTO MATRICE VETTORE.

------------------------------------------------------------

## PRODOTTO MATRICE VETTORE
**Definizione del problema**

**Input**: $A \in \mathbb{N}^{n \times n}, x \in \mathbb{N}^{n}$<br />
**Output**: $Ax$

La soluzione sequenziale necessita di fare il prodotto riga per colonna, che richiede il tempo di un prodotto tra vettori per il numero di vettori da moltiplicare. Il tempo sequenziale è quindi $n(2n-1) = 2n^{2} -n$.<br />
In parallelo si può pensare di fare tutti i prodotti riga $\times$ colonna, cioè utilizzare il modulo PRODOTTO INTERNO DI VETTORI  $n$ volte. Se si procede in questo modo, non si ha più, però, un algoritmo EREW perchè il vettore $x$ viene acceduto simultaneamente da più moduli. Si tratta quindi di un algoritmo CREW.<br />
Si può, però, evitare questo accesso simultaneo al vettore $x$ sfruttando la soluzione al problema REPLICA, la quale chiede, dato un valore $\alpha$ in una cella, di replicare $\alpha \text{ } n$ volte.

Si valutano ora le prestazioni dell'algoritmo.<br />
$$p(n) = n \cdot \frac{n}{\log(n)}$$
ovvero il costo di un prodotto vettore vettore per ognuno degli $n$ prodotti interni.<br />
$$T(n, p(n)) = \log(n)$$
$$E(n, p(n)) \sim \frac{n^{2}}{\frac{n^{2}}{\log(n)} \cdot \log(n)} \rightarrow c \neq 0$$

------------------------------------------------------------

## PRODOTTO MATRICE MATRICE
**Definizione del problema**

**Input**: $A, B \in \mathbb{N}^{n \times n}$<br />
**Output**: $A \cdot B$

Il problema consta, banalmente, del prodotto tra due matrici preesistenti e richiede, quindi, di calcolare una nuova matrice.<br />
Il calcolo di una nuova matrice quadrata richiede il calcolo di $n^{2}$ componenti.<br />
Il tempo sequenziale è pari a $n^{2,80}$, risultato ottenuto dall'algoritmo di Strassen, il miglior algoritmo sequenziale per il prodotto tra due matrici.<br />
L'idea su cui si basa l'algoritmo parallelo è usare $n^{2}$ PRODOTTO INTERNO DI VETTORI in parallelo. Ogni riga di $A$ ed ogni colonna di $B$ vengono accedute simultaneamente, necessitando così di un algoritmo CREW.<br />
Si necessita quindi di un'architettura che permetta la concurrent read.<br />

Si valutano ora le prestazioni dell'algoritmo.<br />
$$p(n) \sim n^{2} \cdot \frac{n}{\log(n)}$$
$$T(n, p(n)) \sim \log(n)$$
$$E(n, p(n)) \sim \frac{n^{2,8}}{\frac{n^{3}}{\log(n)} \cdot \log(n)} = \frac{n^{2,8}}{n^{3}} \rightarrow 0$$

------------------------------------------------------------

## POTENZA DI  UNA MATRICE
**Definizione del problema**

**Input**: $A \in \mathbb{N}^{n \times n}$<br />
**Output**: $A^{n}, n = 2^{k}$

L'algoritmo sequenziale, nel caso di $n$ potenza di $2$, può essere svolto con uno stratagemma. Si calcolano solamente non le potenze fino ad $n$ ma tutte quelle che sono potenze di $2$.

```
for i=1 to log(n) do{
	A = A * A
}
```

Questo pseudocodice calcola le potenze di $A$ che hanno come indice una potenza di $2$ fino ad arrivare al numero $n$. <br />
Per creare l'algoritmo parallelo, viene sfruttata l'idea di questo algoritmo sequenziale e si esegue esattamente questo codice ma, al posto di fare il prodotto sequenziale matrice per matrice, si sostituisce alla moltiplicazione sequenziale quella parallela, che è il prodotto $A \cdot B$ ottenuto tramite la risoluzione del problema PRODOTTO MATRICE MATRICE.<br />
Poichè il modulo utilizzato necessitava di un'architettura CREW, anche questo problema necessita di tale architettura.
Il tempo sequenziale sarà quindi $n^{2,8} \cdot \log(n)$.<br />

Si valutano ora le prestazioni dell'algoritmo.

$$p(n) \sim n^{2} \cdot \frac{n}{\log(n)} = \frac{n^{3}}{\log(n)}$$
$$T(n, p(n)) = \log(n) \cdot \log(n) = \log^{2}(n)$$
$$E \sim \frac{n^{2,8}\log(n)}{\frac{n^{3}}{\log(n)}\cdot \log^{2}(n)} = \frac{n^{2,8}}{n^{3}} \rightarrow 0$$

------------------------------------------------------------

## SOMME PREFISSE
**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$<br />
**Output**: $\sum_{i=1}^{k}M[i] \rightarrow M[k] \text{, } \quad 1 \leq k \leq n$

Si assume, per semplicità, che $n$ sia potenza di $2$.

Ci sono diverse applicazioni che utilizzano SOMME PREFISSE, tra cui:
- problemi legati ad analizzatori lessicali nei compilatori;
- problemi di ricerca di parole nei testi.

L'algoritmo sequenziale è strutturato nel seguente modo:

```
for k = 2 to n do{
	M[k] = M[k] + M[k-1]
}
```

e termina in un tempo $n-1$.

Si può ottenere un risultato migliore? E' evidente che il problema SOMME PREFISSE richieda la risoluzione del problema SOMMATORIA nell'ultima cella e che se si deve eseguire $n$ somme in sequenza, non si possono svolgere meno di $n-1$ passi. Di conseguenza, dal punto di vista sequenziale, questo è il miglior algoritmo possibile.

Una proposta parallela è quella di risolvere con SOMMATORIA tutti i moduli prefissi. Si applicano $n-1$ moduli SOMMATORIA, tutti in parallelo.

![[Images/SommePrefisseParallelo.png]]

Questo non è, ovviamente, un algoritmo EREW bensì CREW, in quanto ogni applicazione di SOMMATORIA richiederà le celle precedenti in lettura contemporanea. 

Si valutano ora le prestazioni dell'algoritmo.

$$p(n) \leq (n-1) \cdot \frac{n}{\log(n)} \sim \frac{n^{2}}{\log(n)}$$

In realtà $\frac{n}{\log(n)}$ è il costo dell'ultimo modulo che prende in input tutte le celle per effettuare SOMMATORIA. Si può calcolare che, in media, ogni modulo $i$ utilizzi un numero di processori di circa

$$\sum_{i=2}^{n}\frac{i}{\log(i)} \geq \frac{1}{\log(n)}\sum_{i=2}^{n}i \sim \frac{n^{2}}{\log(n)}$$

$$T(n, p(n)) \sim \log(n)$$
$$E \sim \frac{n-1}{\frac{n^{2}}{\log(n)} \cdot \log(n)} \rightarrow 0$$

Di conseguenza, la proposta analizzata risulta essere una scelta poco efficiente.

------------------------------------------------------------

## Tecnica di Kogge-Stone [1973]
Kogge-Stone introduce il **Pointer Doubling** per risolvere SOMME PREFISSE.<br />
Si tratta di puntatori, di link tra coppie di numeri, indicati tramite frecce.<br />
Ogni processore si occupa di un puntatore e ne fa la somma in questo modo:<br />
Dati $M[k] = m$ e $M[S[k]] = q$, sia $S[k]$ la cella di memoria contenente la distanza del successivo da $M[k]$. <br />Questa distanza può essere interpretata come un link, un collegamento tra le due celle.<br /> 

![[Images/KoggeStone0.png]]

Il processore assegnato a questo link esegue, al passo $j=1$, la somma $m + q$ e memorizza il risultato in $M[S[k]]$, cioè $M[k+1]$. Al passo $j=0$, quindi, l'algoritmo prende un elemento ed il suo successore e ne calcola la somma (tranne per l'ultimo elemento, in quanto privo di successore).<br />
L'algoritmo aggiorna poi il contenuto di $M[S[k]]$.<br />
Al passo $j=2$, l'algoritmo prende un elemento ed il suo successore non più a distanza $S[k] = 1$ bensì a distanza $S[k] = 2$, e ne effettua la somma (anche in questo caso non viene eseguita per l'ultimo ed il penultimo elemento, in quanto privi di successore).<br />

![[Images/KoggeStone1.png]]

Questo algoritmo raddoppia la distanza ad ogni passo successivo, fino al terminare dell'algoritmo. Da questo il nome **pointer doubling**.

![[Images/KoggeStone2.png]]

Lo step successivo sarà, quindi, questo:

![[Images/KoggeStone3.png]]

L'algoritmo termina quando nessun elemento ha più un successore. A questo punto, in ogni cella di memoria ho le somme prefisse desiderate.

Si valutano ora le prestazioni dell'algoritmo.<br />
- Quanti numeri privi di successori genera il $j$-esimo passo? $2^{j}$.
- Quanti passi dura l'algoritmo? L'algoritmo dura fino a quando esistono successori. Se si pongono i numeri privi di successori desiderati come $n$, cioè tutti i numeri dell'algoritmo di Kogge-Stone, è possibile porre $2^j = n \rightarrow j = \log_{2}(n)$.<br /> L'algoritmo termina, quindi, in $\log_{2}(n)$ passi.
- Quali processori vengono attivati al $j$-esimo passo? I processori attivati sono $1 \leq k \leq n-2^{j-1}$.
- Sia $S[k]$ la posizione del successivo di $M[k]$ anch'essa presente in memoria centrale. Come viene inizializzato S? Viene inizializzato come $S[k] = k+1$ per $1 \leq k \leq n-1$ e $S[n] = 0$.
- Dato $p[k]$, quale istruzione deve eseguire su $M$? $M[k]+M[S[k]] \rightarrow M[S[k]]$
- Come deve essere svolto l'aggiornamento di $S$, successivo alle somme parziali? $S[k]=(S[k] == 0? 0 : S[S[k]])$.

Il codice dell'algoritmo parallelo, con $M$ e $S$ già inizializzati, sarà quindi il seguente:<br />

```
for j = 1 to log(n) do{
	for 1 <= k <=  n - 2^(j-1) parallel do{
		M[S[k]] = M[k] + M[S[k]]
		S[k] = (S[k] == 0? 0 : S[S[k]])
	}
}
```

I processori non competono per accedere alla stessa cella. Si sta risolvendo il problema con un architettura EREW.
E' ovviamente molto plausibile avere un link entrante in una cella di memoria ed un link uscente dalla medesima cella ma le operazioni di lettura (e scrittura) vengono svolte in momenti diversi.

![[Images/ConcurrencyKoggeStone1.png]]

Per visualizzare meglio questa operazione, si immaginino i due processori $P_{k}$ e $P_{k}'$ al tempo $t$.<br />
$P_{k}$ esegue una LOAD su $M[k]$ al tempo $t1$ mentre $P_{k}'$ esegue una LOAD su $M[k']$ allo stesso tempo $t1$. Poichè $k \neq k'$, i due valori sono diversi.<br />
Al tempo $t2$, il primo processore esegue una LOAD su $S[k]$ mentre il secondo processore esegue una LOAD su $S[k']$. Anche in questo caso $k \neq k'$.<br />
Al tempo $t3$, $P_{k}$ carica $M[S[k]]$ con una LOAD, mentre $P_{k'}$ carica con una LOAD$M[S[k']]$. Anche in questo caso i valori sono diversi.<br />
Si temeva che $M[S[k]]$ ed $M[k']$ venissero acceduti simultaneamente ma non è così.

![[Images/ConcurrencyKoggeStone2.png]]

Questa dimostrazione ribadisce la struttura EREW dell'algoritmo.<br />
Se $i\neq j \rightarrow S[i] \neq S[j]$, quindi i due valori hanno successori diversi (eccetto il caso $S[i] = S[j] = 0$).

------------------------------------------------------------

### Correttezza dell'Algoritmo
E' anche necessario dimostrare che l'algoritmo sia corretto.<br />
La correttezza dell'algoritmo si dimostra facendo vedere che, per $1 \leq k \leq n$ si ha in $M[k]$ la somma degli elementi precedenti:

$$M[k] = \sum_{i=1}^{k} M[i] \text{, } \quad 1 \leq k \leq n$$

In particolare, la correttezza si dimostra verificando una determinata proprietà.<br />
Al $j$-esimo passo si avrà:

$$
\begin{numcases}{M[t] =}
  M[t] + ... + M[1], & se  $t \leq 2^j$ \\
  M[t] + ... + M[t-2^j +1], & se $t > 2^j$
\end{numcases}
$$

La correttezza deriva dal fatto che, se la proprietà è vera, si ha per $j = \log(n)$ (cioè l'ultimo passo):

$$
\begin{numcases}{M[t] =}
  M[t] + ... + M[1], & per $t \leq 2^j = 2^{\log(n)} = n$ \\
  \_, & per $t > 2^j = n$
\end{numcases}
$$

E questo conferma la risoluzione del problema.

**Dimostrazione per induzione**

Questa proprietà si dimostra per induzione su $j$:

**Caso base ($j=1$)**:

$$\text{per }t\leq 2$$
$$\text{se } t = 1 \quad \quad M[1] = M[1]$$
$$\text{se } t = 2 \quad \quad M[2] = M[1] + M[2]$$<br />

$$\text{per }t > 2$$
$$M[S[k]] = M[k] + M[S[k]$$
$$=$$
$$M[k+1] = M[k] + M[k+1]$$
$$ = $$
$$M[t] = M[t-1] + M[t]$$

Questo è esattamente ciò che viene descritto dalla proprietà.

**Passo induttivo**:

Si suppone la proprietà vera per $j-1$ e si dimostra per $j$. Prima di iniziare il $j$-esimo passo, quanto vale $S$?<br />
E' utile notare che, al $j$-esimo passo, i link legano celle di memoria a distanza $2^{j-1}$.<br />
Quindi:

$$
\begin{numcases}{S[k] =}
  k+2^{j-1}, & per $k \leq n-2^{j-1}$ \\
  0, & per $k > n - 2^{j-1}$
\end{numcases}
$$

$\forall t \leq 2^{j-1}$, la proprietà è vera per ipotesi. Tutte le celle con indice $\leq 2^{j-1}$ sono già risolte.<br />
Per sostenere che la proprietà sia vera al passo $j$-esimo, è necessario considerare le casistiche come separate.<br />
- Si considerino le celle con indice:
$$2^{j-1} < t \leq 2^{j} \rightarrow t = 2^{j-1} +a$$
E' possibile scrivere il numero $t$ in questo modo in quanto è sicuramente maggiore di $2^{j-1}$.
E' noto che questo numero, al $j$-esimo passo, è:
$$M[a + 2^{j-1}] = M[a] + M[a + 2^{j-1}]$$
Infatti, al passo $j$, al contenuto della cella $M[a]$ si somma il contenuto della cella distante $2^{j-1}$.<br />
Ma $a \leq 2^{j-1}$ per come è stato scelto. Infatti $a + 2^{j-1} \leq 2^j$.<br />
Allora, per ipotesi di induzione, in $M[a]$ ci sono tutti i valori precedenti sommati, da $M[1]$ a $M[a]$.
Nella cella $M[a + 2^{j-1}]$, invece, sono contenuti tutti i $2^{j-1}$ elementi precedenti sommati.<br />
Quindi la somma di queste due celle restituisce la somma degli elementi da $1$ ad $a + 2^{j-1}$, il che conferma la correttezza della proprietà fino a $2^{j}$.<br />
- Si considerino le celle con indice:
   $$t > 2{j} \rightarrow t = a + 2{j}$$
   E' possibile scrivere $2^{j} = 2^{j-1} + 2^{j-1}$.<br />
   Sapendo che, al $j$-esimo passo, il successore si trova a distanza $2^{j-1}$, l'elemento che viene sommato con $M[a + 2^{j}]$ è il seguente, per definizione di $S[k]$:
   $$M[a + 2^j] = M[a + 2^{j-1}] + M[a + 2^j]$$
   Per induzione, quando $t>2^{j-1}$ vale la proprietà iniziale, cioè $M[a + 2^{j-1}]$ contiene la somma di tutti i numeri contenuti nelle celle precedenti. Quindi la cella contiene da $M[a + 1]$ ad $M[a + 2^{j-1}]$.<br />
   La stessa cosa vale per $M[a + 2^{j}]$. Di conseguenza, nella cella sono presenti tutti i $2^{j-1}$ numeri precedenti.<br />
   Sommando insieme il contenuto di queste due celle, otteniamo cheper gli elementi di posizione $> 2^{j}$ vale la proprietà iniziale.<br />
   
------------------------------------------------------------
 
Si valutano ora le prestazioni dell'algoritmo.
$$p(n) = n-1$$
Al primo passo, nell'esempio con $8$ elementi, vengono utilizzati $7$ processori. Nei passi successivi, il numero di processori diminuisce.<br />
Si inferisce che il numero di processori utilizzati è, a causa del primo passo, pari a $n-1$.
$$T(n, p(n)) \sim 9\log(n)$$
L'algoritmo utilizza un loop di $\log(n)$ passi ed un loop interno che fa eseguire ai processori in parallelo due istruzioni:
- $M[S[k] = M[k] + M[S[k]]$
- $S[k] = (S[k] == 0? 0: S[S[k]])$

Si osservino le microistruzioni che vengono eseguite in ognuna di queste istruzioni.<br />
Nel caso della prima istruzione, si hanno:

$$
\begin{numcases}{5 \text { }}
 	LOAD \quad M[k], & \\
 	LOAD \quad S[k], & \\
	LOAD \quad M[S[k]], & \\
	ADD, & \\
	STORE \quad M[S[k]] 
\end{numcases}
$$

Nel caso della seconda istruzione, invece, si hanno:

$$
\begin{numcases}{4 \text { }}
 	LOAD \quad S[k], & \\
 	JZERO, & \\
	LOAD \quad S[S[k]], & \\
	STORE \quad S[k] 
\end{numcases}
$$

In totale si hanno $9$ microistruzioni eseguite per un numero di passi logaritmico. Quindi $T(n, n-1) \sim 9\log(n)$.<br /> 

$$E(n, p(n)) = \frac{n-1}{(n-1)9\log(N)} = \frac{1}{9\log(n)} \rightarrow 0$$

Poichè l'efficienza tende a zero, forse si sta utilizzando un numero troppo elevato di processori. Quindi è possibile sfruttare il teorema di Wyllie come già fatto per il problema SOMMATORIA.<br />
Togliere il logaritmo a denominatore permetterebbe di avere un valore costante di efficienza.<br />
Si raggruppino quindi i processori a gruppi di dimensione $\log(n)$.

$$p(n) = o\Bigg(\frac{n}{\log(n)}\Bigg)$$
$$T(n, p(n)) = O(\log(n))$$
$$E \rightarrow c \neq 0$$

Come per il problema SOMMATORIA, anche l'algoritmo dato per SOMME PREFISSE può essere usato come modulo risolutivo per altri problemi.

------------------------------------------------------------

## OP-PREFISSA
**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$<br />
**Output**: $M[k] = OP_{i=1}^{k} M[i] \text{, } 1 \leq k \leq n$

OP deve essere associativa, come ad esempio $+, *, \wedge, \vee, \oplus, \min, \max$...<br />

------------------------------------------------------------

## VALUTAZIONE DI POLINOMI
**Definizione del problema**

**Input**: $p(x) = a_{0} + a_{1}x + a_{2}x^{2} + ... + a_{n}x^{n}\text{, } \alpha$<br />
**Output**: $p(\alpha)$

**Dati in memoria M**:
- $\alpha$;
- $a_{0}$, $a_{1}$, ..., $a_{n} \rightarrow A[0]$, $A[1]$, ..., $A[n]$.

L'algoritmo sequenziale tradizionale impiega un numero di operazioni pari a:

$$
\begin{numcases}{N =}
 	prodotti: & $\sum_{i=0}^{n}i \sim n^2$\\
 	somme: & n \\ 
\end{numcases}
$$
$$N \sim n^2$$

------------------------------------------------------------

### Miglioramento di Ruffini-Horner
Il numero di istruzioni impiegato può essere migliorato tramite l'idea di Ruffini-Horner.<br />
Si osservi un esempio di applicazione su un polinomio di quarto grado:

$$p(x) = a_{0} + a_{1}x + a_{2}x^{2} + a_{3}x^{3} + a_{4}x^{4}$$

E' possibile eseguire una serie di raccoglimenti parziali dell'incognita $x$ in maniera iterata, a partire dal secondo termine.

$$= a_{0} + x(a_{1} + a_{2}x + a_{3}x^2 + a_{4}x^{3})$$
$$= a_{0} + x(a_{1} + x(a_{2} + a_{3}x + a_{4}x^2))$$
$$a_{0} + x(a_{1} + x(a_{2} + x(a_{3} + a_{4}x)))$$

Generalizzando:

$$p(x) = a_{0} + x(a_{1} + ... a_{n-2} +x(a_{n-1} + a_{n}x)...)$$

Questa nuova forma del polinomio suggerisce l'applicazione di un nuovo algoritmo, basato sulla sostituzione iterata di $\alpha$ nella parentesi tonda più interna.

![[RuffiniHorner.png]]

$$p = a_{j} + p \cdot \alpha$$

Il codice per l'algoritmo sequenziale di Ruffini-Horner è:

```
Input(alpha)
p = a_{n}
for i = 1 to n do{
	p = a_{n-i} + p*alpha
}
Output(p)
```

Le prestazioni in termini di istruzioni dell'algoritmo sequenziale di Ruffini-Horner sono:
$$T(n, 1) = 2n$$
cioè due operazioni all'interno di ogni iterazione del loop.

------------------------------------------------------------

### Implementazione Parallela di Ruffini-Horner
Si dovrà trovare un possibile algoritmo parallelo che, confrontato con questo algoritmo lineare, risulti efficiente.<br />
- Si costruisca il vettore delle potenze di $\alpha$, $Q$;
   $$Q[k] = \alpha^{k}\text{, } \quad 0 \leq k \leq n$$
  - Si esegua il prodotto interno $< A, Q >$;
     $$< A, Q > = \sum_{k = 0}^{n} A[k] \cdot Q[k]$$
- Si restituisca $< A, Q >$.

Per costruire il vettore delle potenze è necessario:
- mettere $\alpha$ in tutti gli elementi di $Q$ da $1$ a $n$. Non considero la cella $Q[0]$, la quale deve contenere $1$.
   $$Q[1] = \alpha\text{, } Q[2] = \alpha\text{, ..., }Q[n] = \alpha$$
   Porre ogni elemento di $Q = \alpha$ significa risolvere il problema chiamato REPLICA. Si supponga di essere in grado di risolvere questo problema;
- applicare il PRODOTTO PREFISSO su $Q$:
   $$Q[1] = \alpha\text{, }Q[2] = \alpha^{2}\text{, ..., }Q[n] = \alpha^{n}$$
 
**Come risolvere REPLICA in parallelo?**<br />
- **Primo modo:**<br />
  Si utilizzano $n$ processori in parallelo per memorizzare $\alpha$ in ciascuna delle $n$ celle di memoria:
	```
	for k=1 to n parallel do {
		Q[k] = alpha;
	}
	```
<br />
Essendo $\alpha$ una cella di $M$, risulta essere un accesso simultaneo in lettura. Di conseguenza, è necessaria un'architettura CREW.<br />Si valutano ora le prestazioni dell'algoritmo.<br />
   $$p(n) = n$$
   $$T(n, p(n)) = 2$$
   $$E(n, p(n)) \sim \frac{n}{2n} \rightarrow c \neq 0$$
   L'unica osservazione possibile è che, siccome si sta valutando il problema REPLICA per costruire il vettore delle potenze $\alpha$, insieme al problema REPLICA si affronta un modulo PRODOTTO PREFISSO, che si può risolvere con $\frac{n}{\log(n)}$ processori. Nonostante, quindi, qui l'efficienza ottenuta sia costante, si può capire che stanno venendo utilizzati troppi processori.<br />
   In più non è un algoritmo EREW.
   
- **Secondo modo**:<br />
   Per abbassare il numero di processori di REPLICA si applica il teorema di Wyllie, raggruppando i processori in $\log(n)$ elementi. Si sostituisce ogni gruppo di processori con un singolo processore, il quale si occuperà di $\log(n)$ replicazioni di $\alpha$ nel vettore $Q$.<br />
   Il $k$-esimo processore carica $\alpha$ nelle celle di posizione $(k-1)\log(n) +1, ..., k\log(n)$.<br />Si riesce ad incrementare l'efficienza effettuando un trade-off con il tempo di esecuzione, il quale passa da costante a logaritmico.<br />
 
	```
	for k =1 to n/log(n) parallel do{
		for i = 1 to log(n) do{
			Q[(k+1)log(n) + i] = alpha
		}
	}
	```
	
	Si valutano ora le prestazioni dell'algoritmo.<br />
	$$p(n) = \frac{n}{\log(n)}$$
	$$T(n, p(n)) = c\log(n)$$
	$$E(n, p(n)) = \frac{n}{\frac{n}{\log(n)}c \cdot \log(n)} = \frac{1}{c} \neq 0$$
	
	Continua ad essere però un algoritmo CREW.
	Non è stato quindi eliminato l'accesso simultaneo ad $\alpha$.
	
- **Terzo modo**:<br />
   Si costruisca il vettore $\alpha, 0, 0, ..., 0$ e si esegua su di esso l'algoritmo SOMME PREFISSE.<br />
   
   ```
	Input(alpha)
	Q[1] = alpha
	for k = 2 to n parallel do{
		Q[k] = 0
	}
	```
	
	La differenza tra gli algoritmi è che il valore $0$ è una costante che non necessita di essere letta. Mentre tutti i processori devono accedere alla memoria condivisa per leggere $\alpha$, il valore $0$ invece è una costante interna all'istruzione.<br />
   E' possibile ridurre il numero di processori con il teorema di Wyllie, passando da $n$ a $\frac{n}{\log(n)}$.
   
   Si valutano ora le prestazioni dell'algoritmo nei due step del codice, la costruzione del vettore e l'applicazione di SOMME PREFISSE.<br />
   1) 
   $$p(n) = \frac{n}{\log(n)}$$
   $$T(n, p(n)) = \log(n)$$
   2) 
   $$p(n) = \frac{n}{\log(n)}$$
   $$T(n, p(n)) = \log(n)$$
   
   Totale:<br />
   $$p(n) = \frac{n}{log(n)}$$
   $$T(n, p(n)) = \log(n)$$
   $$E(n, p(n)) = c \neq 0$$
   
   Finamente si è ottenuto un algoritmo EREW.
   
![[Images/ValutazionePolinomio.png]]
In questo schema viene visualizzato complessivamente l'algoritmo EREW per la valutazione di un polinomio.<br />
Analizziamo ora le prestazioni dell'algoritmo.<br />
   $$p(n) = \frac{n}{\log(n)}$$
   $$T(n, p(n)) = \log(n)$$
   $$E(n, p(n)) = \frac{T(n,1)}{p(n)T(n,p(n))} = \frac{2n}{\frac{n}{\log(n)}\log(n)} \rightarrow c \neq 0$$
   
------------------------------------------------------------

## RICERCA DI UN ELEMENTO
**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n], \alpha$<br />
**Output**: $M[n] = 1 \text{ se } \exists k \text{ tale che } M[k] = \alpha\text{, altrimenti } = 0$

L'algoritmo sequenziale classico richiede $T(n, 1) = n$, in quanto è necessario osservare tutto il vettore.<br />
Chiaramente, se l'input fosse ordinato, il tempo di ricerca dicotomica sarebbe $T(n, 1) = \log(n)$, con costo dell'ordinamento di $O(n\log(n))$.<br />

Negli anni '90 è stato presentato un algoritmo quantistico, il quale mostra come, anche su un input non ordinato, la ricerca possa avvenire in tempo $T = \sqrt{n}$. Viene sfruttata una proprietà intrinseca al modello di calcolo. In particolare, la tipica interferenza quantistica nei modelli quantistici.<br />

**Primo modo:**<br />
Si presenta ora un primo algoritmo parallelo per la ricerca di un elemento in un vettore.<br />
Si propone un algoritmo su una struttura CRCW.<br />
```
F = 0
for k = 1 to n parallel do{
	if (M[k] == alpha){
		F = 1;
	}
}
M[n] = F;
```

Si utilizza un flag $F$ contenuto nella memoria condivisa. Per quale motivo si usa il flag e non la cella $M[n]$? Perchè non è possibile inizializzare a 0 $M[n]$.

Si valutano ora le prestazioni di questo algoritmo.<br />
$$p(n) = n$$
$$t(n, p(n)) = c$$

Il fatto di dover inserire potenzialmente il valore $1$ nella variabile $F$ fa presuppore un possibile problema di concurrency. Di conseguenza necessitiamo sicuramente un architettura in grado di scrivere in maniera concorrenziale. Allo stesso modo, più processori accedono alla locazione di memoria condivisa nel quale è contenuto il valore $\alpha$, sottolineando così la necessità di un'architettura CRCW.<br />

**Secondo modo**:<br />
Il secondo tentativo mira ad ottenere un algoritmo CREW.<br />
```
for k = 1 to n parallel do{
	M[k] = (M[k]==alpha? 1 : 0)
}
```

Eliminare la scrittura concorrente significa voler eliminare il flag utilizzato nella versione precedente. Al posto di memorizzare il risultato in una cella sola, si memorizzano nelle celle $M[k]$.<br />
Si trasforma il vettore di numeri in input in un vettore booleano contenente $1$ e $0$.<br />
Dopodiché si vuole spostare il risultato nella cella di indice maggiore. Si esegue quindi un algoritmo MAX-ITERATO che sposta il valore $1$, nel caso esista, nella cella $M[n]$.<br />

Si valutano ora le prestazioni dell'algoritmo.<br />
 1)<br />
$$p(n) = n$$
$$T(n, p(n)) = costante$$
$$\downarrow$$
$$Wyllie$$
$$p(n) = \frac{n}{\log(n)}$$
$$T(n, p(n)) = \log(n)$$
2)
$$p(n) = \frac{n}{\log(n)}$$
$$T(n, p(n)) = \log(n)$$
Totale:
$$p(n) = O(\frac{n}{\log(n)}$$
$$T(n, p(n)) = O(\log(n)$$
$$E(n, p(n)) \sim c \neq 0$$

**Terzo modo**:<br />
Per eliminare la concurrent read si può sostituire ad $\alpha$ un vettore inizializzato con il valore di $\alpha$ tante volte quanti i processori utilizzati.<br />
Replica di $\alpha \rightarrow A[1], A[2], ..., A[3]$.<br />
```
for k = 1 to n parallel do{
	M[k] = (M[k]==A[k]? 1 : 0)
}
```
Si esegue infine MAX-ITERATO($M[1], ..., M[n]$).<br />

Si valutano ora le prestazioni dell'algoritmo.<br />
- Confronto + MAX-ITERATO:<br />
 $$p = \frac{n}{\log(n)}$$
 $$T(n, p(n)) = \log(n)$$
- Replica:<br />
   $$p(n) = \frac{n}{\log(n)}$$
   $$T(n, p(n)) = \log(n)$$
   
   - Totale:<br />
  $$p(n) = \frac{n}{\log(n)}$$
  $$T(n, p(n)) = \log(n)$$
  $$E(n, p(n)) = c \neq 0$$
  
  Esistono diverse varianti di questo codice, per risolvere problemi legati:
  - al numero di occorrenze di $\alpha$ in $M$ (si risolve trasformando MAX-ITERATO in SOMMATORIA);
  - alla posizione massima di $\alpha$ in $M$ (Si risolve memorizzando $M[k]=k$ se in $M[k]$ è presente $\alpha$);
  - alla posizione minima di $\alpha$ in $M$( si risolve memorizzando $M[k]=k$ se in $M[k]$ è presente $\alpha$ e trasformando MAX-ITERATO in OP-ITERATA).

OP-ITERATA viene eseguita tra due celle di $M$ che contengono i valori $x$ e $y$. Se entrambi questi valori sono diversi da $0$, viene scelto il minimo tra di essi. Se uno dei due è uguale a $0$, viene scelto il massimo.<br/>
Questo permette di portare il minimo valore della cella che contiene $\alpha$ nella cella $M[n]$.

------------------------------------------------------------

## ORDINAMENTO o RANKING
**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$<br />
**Output**: permutazione $p:\{1,...,n\} \rightarrow \{1,...,n\} \text{ tale che } M[p(1)] \leq M[p(2)] \leq ... \leq M[p(n)]$, dove $p(i)$ rappresenta l'indice dell'elemento del vettore $M$ che va in posizione $i$.<br />

In genere gli algoritmi di ordinamento sono basati sui confronti che coinvolgono due valori della sequenza.<br />
Se si considerano gli algoritmi di ordinamento che usano i confronti, algoritmi sequenziali che ordinano $n$ valori hanno un tempo sequenziale pari ad $n\log(n)$, che è sia un upper bound che un lower bound.<br />
Upper bound perchè esistono algoritmi sequenziali come il [[MergeSort]], che utilizza $n\log(n)$ passi per ordinare la sequenza di $n$ valori.<br />
Lower bound perchè si può dimostrare che un algoritmo sequenziale necessita di minimo $n\log(n)$ passi per ordinare una sequenza di valori.<br />
La dimostrazione di questo lower bound si basa sull'utilizzo di un [[Albero di Decisione |albero di decisione]].<br />  

Un primo approccio parallelo si basa su un algoritmo il quale utilizza il conteggio di certi confronti. Un algoritmo sequenziale di conteggio, per terminare,  richiede un tempo $t = \Theta(n^2)$.<br />
Si prende spunto dall'algoritmo sequenziale [[CountingSort]]. <br />

Nella versione parallela, si può lavorare cercando di utilizzare un numero di processori pari ad $n^2$ invece di procedere in un fashion sequenziale per svolgere i confronti.<br />
$\forall i,j$, si ha un processore $P_{ij}$ che effettua il confronto $M[j] \leq M[i]$. La risposta viene inserita in una matrice booleana $V[i,j] = \bigg(M[j] \leq M[i]?\quad1\quad:\quad0\bigg)$<br />

L'$i$-esima riga individua gli elementi di $M \leq M[i]$. Grazie a questo si è in grado di scoprire quale posizione occupa la cella $M[i]$.<br />

Se $\forall i$ si esegue SOMMATORIA parallela dell'$i$-esima riga, si ottiene, nell'ultima colonna della matrice $V[j,n]$, le posizioni che gli elementi devono assumere. Il contenuto dell'elemento $V[i, n]$ coincide con il contenuto dell'elemento $V[i]$ della versione sequenziale di questo stesso algoritmo.<br />
Questo algoritmo è CREW.<br />

Il codice dell'algoritmo parallelo sarà quindi:<br />
```
for 1 <= i, j <= n parallel do{
	V[i,j] = (M[j]<=M[i]]?1:0)
}
	
for i = 1 to n parallel do{
	SOMMATORIA(V[i,1], V[i,2], ..., V[i,n])
}
	
for i = 1 to n parallel do{
	M[V[i,n]] = M[i]
}
```

La lettura ovviamente non è esclusiva.<br />
E' possibile rendere EREW l'algoritmo tramite il modulo REPLICA.

Si valutano ora le prestazioni dell'algoritmo.<br />
Ogni blocco di codice identifica una fase differente:
1) $p(n) = n^2$, dovuto al ciclo _for_ innestato.<br />$T(n,n^2) = 4$,  dovuto a due LOAD, una JZERO ed una STORE dell'elemento in $V[i,j]$.<br />Tramite il teorema di Wyllie, si può passare ad un numero di processori $p(n) = \frac{n^2}{\log(n)}$ e ad un tempo $T = \log(n)$.
2) $n$ moduli SOMMATORIA, per ciascuno  dei quali si ha $p(n) = \frac{n}{\log(n)}$ e $T(n, p(n)) = \log(n)$.<br />$p(n) = \frac{n^2}{\log(n)}$.<br />$T(n,p(n)) \sim \log(n)$.
3) $p(n) = n$<br />$T(n, p(n)) = 3$, dovuti a due LOAD ed una STORE.

Il totale ottenuto è:<br />
$$p(n) \sim \frac{n^2}{\log(n)}$$
$$T(n,p(n)) \sim \log(n)$$
$$E(n, p(n)) \sim \frac{n \cdot \log(n)}{\frac{n^2}{\log(n)}\cdot \log(n)} = \frac{\log(n)}{n} \rightarrow 0$$

Il tentativo di parallelizzale l'algoritmo _CountingSort_ non ha dato i risultati sperati poichè l'efficienza così ottenuta non è ragionevole.<br />
Il motivo di questo è che le soluzioni che si cerca di parallelizzare sono state pensate per essere sequenziali e non parallele.<br />
Un algoritmo invece pensato per essere parallelo è il [[BitSort]].

Esistono algoritmo di ordinamento efficienti, cioè la cui efficienza tende ad una costante $c \neq 0$, come l'[[Algoritmo di Cole]], ideato nel 1988.<br />

Si usa ora l'algoritmo sequenziale [[MergeSort]] per prendere ispirazione. <br />
L'idea iniziale è di utilizzare un algoritmo parallelo per eseguire la routine _Merge_. Sarebbero necessari $\log(n)$ passi paralleli.

![[Images/SchemaMergeSort.png]]

Purtroppo _Merge_ non è parallelizzabile, si ottiene ancora $T(n) \sim n\log(n)$.<br />

Quando il _Merge_ risulta essere facile? Quando gli elementi $A_{s}$ e $A_{d}$ che vengono passati alla routine sono ordinati e tutti gli elementi di $A_{s}$ sono minori di tutti gli elementi di $A_{d}$. Basta quindi concatenarli.

![[Images/SimpleMerge.png]]

Da questa osservazione, emerge l'idea per parallelizzare l'algoritmo di ordinamento.<br />
- L'idea è di usare sequenze di numeri particolari, la [[Sequenza Unimodale e Bitonica |sequenza bitonica]], insieme alle routine _Rev_, che effettua il reverse di un array,  e _minMax_, che permette di costruire gli array $A_{min}$ e $A_{Max}$.<br />

La funzione _Rev_ esegue queste operazioni in parallelo.

![[Images/Rev.png]]

Di conseguenza non ci sono problemi di sovrascrittura dei dati.<br />

La funzione _minMax_ esegue, invece, considera l'array come due metà (da $1$ a $\frac{n}{2}$ e da $\frac{n}{2} + 1$, fino ad $n$).<br />
Confronta poi gli elementi a coppie, prendendo un elemento della prima metà ed uno della seconda metà. In particolare, gli elementi devono essere a distanza $\frac{n}{2}$.

![[Images/minMAX.png]]

L'elemento minimo viene inserito in $A[k]$ mentre quello massimo viene inserito in $A[k] + \frac{n}{2}$.<br />
Alla fine dell'esecuzione, gli elementi della prima metà contengono i minimi del confronto a coppie, mentre gli elementi della seconda metà contengono i massimi, sempre del confronto a coppie.<br />
La funzione _minMax_ ritorna quindi $A_{min}$ concatenato ad $A_{Max}$.

Si mostrano ora gli algoritmi paralleli per queste operazioni.

```
Procedura Rev(A){
	for 1 <= k <= n/2 parallel do{
	Swap(A[k], A[n-k+1])
	}
}
```

Ogni processore si occupa di una coppia $(A[k], A[n-k+1])$ da swappare. Gli elementi considerati dallo _Swap_ sono quelli equidistanti dal centro dell'array.<br />
Le microistruzioni per uno _Swap_ sono quindi $4$, due LOAD e due STORE.<br />
$$p(n) = \frac{n}{2}$$
$$T(n, p(n)) = costante$$


```
Procedura minMax(A){
	for 1 <= k <= n/2 parallel do{
		if(A[k]>A[k+n/2]){
			Swap(A[k], A[k+n/2])
		}
	}
}
```

Ricordando che lo _Swap_ ha costo $4$ e in questa procedura è necessario, inoltre, un confronto, si ha( una microistruzione in più.<br />
$$p(n) = \frac{n}{2}$$
$$T(n, p(n)) = 5$$

------------------------------------------------------------

## _BitMerge_ Sequenziale
Dato un array bitonico:

```
Procedura BitMerge(A[1], ..., A[n]){
	minMax(A)
	if(|A|>2){
		BitMerge(A_{min})
		BitMerge(A_{Max})
	}
	return(A)
}
```

Quindi _BitMerge_ ordina le sequenze bitoniche.

Si dimostra ora, per induzione, la correttezza di _BitMerge_.<br />

Al caso base, per $n=2$, una sequenza di lunghezza $2$ è banalmente ordinata da _minMax_.

Al passo induttivo, si suppone l'algoritmo corretto per $n = 2^{k}$ e si dimostra che è valido per $n = 2^{k+1}$.<br />
- _minMax_ restituisce $A_{min}$ e $A_{Max}$, ciascuno di lunghezza $2^{k}$;
-  I due sottoarray vengono passati come argomento a _BitMerge_ e vengono restituiti ordinati per ipotesi induttiva;
-  <code>return(A)</code> restituisce $A$ ordinato.

------------------------------------------------------------

### Implementazione Parallela di _BitMerge_ ###
![[Images/BitMergeParallelo.png]]

Prima si effettua la fase delle chiamate ricorsive e poi la fase, tipicamente, della fusione ma, in questo caso, della semplice concatenazione.<br />
Si indica con _MM_ il modulo _minMax_. A partire dall'array $A$, si applica _minMax_, si divide l'array in due parti della stessa cardinalità e si richiama _minMax_ su entrambe le metà.<br />
Terminate le chiamate ricorsive al raggiungimento della chiamata a procedura su array di due elementi, si applica la semplice concatenazione degli array di due elementi.<br />
Si restituisce, infine, l'array così ordinato.<br />

Si valutano ora le prestazioni dell'algoritmo.<br />
E' innanzitutto un algoritmo EREW, perchè ogni chiamata a _minMax_ è su elementi differenti.<br />
In termini di processori, al primo passo si esegue _minMax_ su un'istanza di lunghezza $n$, la quale richiede $\frac{n}{2}$ processori. Il secondo passo ne richiede due volte la metà, e via dicendo.
Di conseguenza:
$$p(n) = \frac{n}{2}$$
L'algoritmo termina quando $\frac{n}{2^{i-1}} = 2$. Di conseguenza, termina quando $i = \log(n)$.<br />
Poichè _minMax_ costa $5$ operazioni:
$$T(n) = 5\log(n)$$
Si può inoltre esprimere il tempo tramite un'equazione di ricorrenza.

$$
\begin{numcases}{T(n) =}
  5, & se $ n = 2$ \\
  T(\frac{n}{2}) + 5, & altrimenti
\end{numcases}
$$

In termini di efficienza:

$$E(n, p(n)) = \frac{n\log(n)}{\frac{n}{2}5\log(n)} \rightarrow c \neq 0$$

------------------------------------------------------------

A partire da queste sequenze, da queste routine e da questi algoritmi, nasce l'algoritmo [[BitSort]].<br />

Da un buon algoritmo sequenziale non è detto che derivi un buon algoritmo parallelo, dove con buono si intende efficiente(_MergeSort_).<br />
Allo stesso modo, non è valido il viceversa (_BitSort_).<br />

------------------------------------------------------------

## Valutazione Sequenziale di _BitSort_ ##
- _BitMerge_:
  $$\begin{numcases}{T_{bm}(n) =}
  O(1), & se $ n = 2$ \\
  2T_{bm}(\frac{n}{2}) + O(n), &se $n > 2$
\end{numcases}
$$
$$T_{bm}(n) = O(n\log(n))$$
- _BitSort_:
  $$\begin{numcases}{T_{bs}(n) =}
  O(1), & se $ n = 2$ \\
  2T_{bs}(\frac{n}{2}) + O(n\log(n)), & se $n > 2$
\end{numcases}
 $$
  $$T_{bs}(n) = O(n\log^{2}(n)$$
  
------------------------------------------------------------
  
Per gestire strutture dati dinamiche come un [[Albero |albero]], si utilizza la [[Tecnica del Ciclo Euleriano |tecnica del ciclo Euleriano]].

------------------------------------------------------------

## Osservazioni Finali su PRAM ##

1) Da un punto di vista teorico, si è in grado di distribuire i compiti tra i processori, i quali sono considerati alla pari, in modo tale che il tempo parallelo sia strettamente legato alla computazione (poichè la comunicazione avviene in tempo costante);
2) L'interesse pratico è dovuto alla realizzazione fisica dei dispositivi multi-core;

------------------------------------------------------------

## Architettura Parallela a Memoria Distribuita ##
La rappresentazione grafica di queste architetture è data da un [[Grafo |grafo]] G in cui i nodi sono i processori e gli archi definiscono la struttura della rete di connessione.<br />
L'elemento che viene a mancare è ovviamente la memoria condivisa, tipica delle PRAM.<br />
Si torna quindi a parlare di [[Modello a Memoria Distribuita |modello a memoria distribuita]].<br />

------------------------------------------------------------

# Algoritmi Distribuiti #

