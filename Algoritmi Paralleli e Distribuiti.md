In determinate situazioni, la velocità di esecuzione di un compito è l'elemento critico. In questi casi, può essere utile far eseguire il compito a più processori, sperando che l'aumento di risorse sia compensato da una diminuzione del tempo di calcolo.
[[Algoritmi]] sottintende, oltre alla stessa definizione, che l'esecutore è unico.
Nel caso di **Algoritmi Paralleli e Distribuiti**, è chiave la presenza di un pool di esecutori e non si può parlare più di sequenza di istruzioni generiche ma di insiemi di istruzioni raggruppate in **passi paralleli**. In ogni passo parallelo si avrà un set di istruzioni, in cui ci sarà **al più** un'istruzione per esecutore.
I modelli di calcolo in cui siano presenti più processori che lavorano contemporaneamente sono detti **paralleli**, così come il modello dotato di un solo processore è detto **sequenziale**.
Con più processori, sono possibili due situazioni differenti:
- Un solo [[Clock]] condiviso tra tutti i processori del sistema;
- Un clock per ciascun processore.

In entrambi i casi, sia per gli algoritmi paralleli sia per gli algoritmi distribuiti, la risorsa **Tempo** è cruciale.
Il tempo è misurato come il numero di operazioni elementari richieste per risolvere il problema. Nel caso sequenziale, veniva definito formalmente come:

$$T(x) = \text{ numero di operazioni elementari su $x$, se $x$ è l'istanza }$$

$$t(n) = MAX\Bigg\{T(x) \quad|\quad x \in \sum^{n}\Bigg\}$$

dove $t(n)$ è una funzione in $n$, con $n$ lunghezza dell'input.
Spesso non si è interessati ad una valutazione precisa di $t(n)$, ma al suo tasso di crescita.
A questo scopo, si utilizzano le [[Funzioni Asintotiche]].

La valutazione del tempo dipende dal modello di calcolo e, inoltre, va scelto il criterio di valutazione ( **uniforme** o **logaritmico**).

Nel modello di calcolo, le operazioni elementari che contiamo sono le primitive messe a disposizione.

Bisogna prestare attenzione alla dimensione dei dati in gioco. Se si utilizza il **criterio di costo uniforme**, le operazioni elementari richiedono una sola **unità di tempo**. Se si utilizza il **criterio di costo logaritmico**, ogni operazione elementare ha un costo che dipende dal numero di bit degli operandi.

La funzione tempo deve indicare se gli algoritmi paralleli e distribuiti utilizzati si possono considerare efficienti. Si considera quindi il concetto di [[Efficienza]].

Si richiami, ora, un classico modello di calcolo sequenziale, cioè la **macchina RAM**: essa consiste di un processore P, collegato ad una memoria M attraverso un'unità di accesso.

![[RAMMachine.png]]

Nei modelli di calcolo parallelo, data la presenza di più processori, un elemento critico è la modalità di comunicazione tra processori. I due casi limite sono rappresentati dal [[Modello a Memoria Condivisa]] e dal [[Modello a Memoria Distribuita]].

Il più semplice modello di calcolo parallelo è quello a memoria condivisa, detto [[Modello P-RAM]].

Il calcolo procede per **passi**. Ad ogni passo, ogni processore può fare un'operazione sui dati che possiede, oppure può leggere o scrivere nella memoria condivisa. In particolare, è possibile selezionare un insieme di processori che eseguono tutti la stessa istruzione (su dati generalmente diversi) mentre gli altri processori restano inattivi. I processori attivi sono sincronizzati, cioè eseguono la stessa instruzione simultaneamente e l'istruzione successiva può essere eseguita solo quando tutti hanno terminato l'esecuzione.

Questo modello di macchine è detto di tipo **SIMD** (**SIngle Intruction Multiple Data**), il quale si contrappone all'architettura **MIMD** (**Multiple Instruction Multiple Data**).

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
- $T$ dipende da $k(n)$;
- $T$ dipende dalla dimensione dell'input e dal criterio di costo scelto;
- $T$ dipende da $p(n)$.

Obiettivo di un algoritmo parallelo è quello di diminuire i tempi di calcolo aumentando il numero di processori: si spera di ottenere un **trade-off** tra il tempo di esecuzione ed il costo (numero di processori) che va stimato per valutare l'efficacia di un algoritmo parallelo.

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

Poichè $E_{A}(n,p) = \frac{T_{A}(n,1)}{p \cdot T_{A}(n,p)}$, l'efficienza risulta essere il rapporto tra il tempo dell'algoritmo sequenziale ed il tempo totale consumato dai processori, come se fossero usati sequenzialmente. In particolar modo, è bene scegliere $T_{A}(n,1)$ come il tempo del miglior algoritmo sequenziale.

Per il parametro $E$ vale che $0 \leq E(n, p(n)) \leq 1$. Quando $E \rightarrow 0$, si stanno utilizzando troppi processori che, probabilmente, vengono inutilizzati per la maggioranza del tempo.

### Teorema di Wyllie [1979, PhD Thesis] ###
Se $E \rightarrow 0$, allora per migliorare l'algoritmo, si provi a ridurre $p(n)$ senza degradare il tempo.

Dato un algoritmo $A$, il quale lavora con $p$ processori con una data efficienza $E$, è in generale possibile estendere l'algoritmo a lavorare con un numero inferiore di processori senza che l'efficienza diminuisca significativamente.

Se $k>1$, allora $E_{A}\Bigg( n, \frac{p}{k} \Bigg) \geq E_{A}(n, p)$.

Dato un algoritmo $A$ che lavora con $p$ processori, basta infatti costruire un algoritmo modificato che utilizza $p/k$ processori. Ad ogni nuovo processore si fa corrispondere un blocco di $k$ vecchi processori: ogni nuovo processore usa al più $k$ passi per emulare il singolo passo parallelo dei $k$ processori corrispondenti.
Il tempo di ogni singolo passo è quindi dettato dall'istruzione più lunga moltiplicata per il numero di istruzioni in un passo, $k \cdot t_{i}(n)$.
Il tempo parallelo richiesto è limitato superiormente dalla somma dell'$i$-esimo passo parallelo

$$T(n, \frac{p}{k}) \leq \sum_{i=1}^{k(n)} k \cdot t_{i}(n)$$

Quindi

$$\sum_{i=1}^{k(n)} k \cdot t_{i}(n) = k \cdot \sum_{i=1}^{k(n)} t_{i}(n) = k \cdot T(n, p)$$

Si ha quindi

$$T(n, \frac{p}{k}) \leq k \cdot T(n, p)$$

Partendo da questa disuguaglianza, si ottiene che $E$ cresce col diminuire dei processori. Infatti:

$$E(n, \frac{p}{k}) = \frac{T(n,1)}{\frac{p}{k}T(n, \frac{p}{k})} \geq \frac{T(n,1)}{\frac{p}{k} \cdot k T(n,p)} = \frac{T(n,1)}{p \cdot T(n,p)} = E(n,p)$$

Nel caso in cui $k \rightarrow p$, accade che

$$ 1 = E(n,1) = E(n, \frac{p}{p}) \geq E(n,\frac{p}{k}) \geq E(n, p)$$

Attenzione però a mantenere $T(n, \frac{p}{k}) = o(T(n,1))$, (altrimenti non ha senso parlare di algoritmo parallelo (perchè $E(n,1) = 1$ ma $T(n,p=1) = T(n,1)$, cioè sequenziale)

### Sommatoria ###
Si vuole trovare un algoritmo parallelo per risolvere il problema **Sommatoria**, un problema guida.
Ci si approccia con la tecnica della scomposizione del problema in sottoproblemi, per poi effettuare la fusione dei risultati.
Lo schema risolutivo di un problema guida potrà essere applicato per trovare la soluzione di altri problemi di operazioni associative.
Inoltre, un problema guida è un problema talmente diffuso che si trova spesso come modulo, cioè come sottoproblema, di altri problemi.

**Definizione del problema**

**Input**: $M[1], M[2], ..., M[n]$ 
**Output**: $M[n] = \sum_{i=1}^{n} M[i]$

L'algoritmo sequenziale risolve il problema in questo modo:
<code>
	for i = 1 to n-1 do
		M[n] = M[n] + M[i]
</code>

Il tempo impiegato è $T(n,1) = n-1$ ed è il miglior tempo possibile per un algoritmo sequenziale.




