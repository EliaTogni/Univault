In determinate situazioni, la velocità di esecuzione di un compito è l'elemento critico. In questi casi, può essere utile far eseguire il compito a più processori, sperando che l'aumento di risorse sia compensato da una diminuzione del tempo di calcolo.
[[Algoritmi]] sottintende, oltre alla stessa definizione, che l'esecutore è unico.
Nel caso di **Algoritmi Paralleli e Distribuiti**, è chiave la presenza di un pool di esecutori e non si può parlare più di sequenza di istruzioni generiche ma di insiemi di istruzioni raggruppate in **passi paralleli**. In ogni passo parallelo si avrà un set di istruzioni, in cui ci sarà **al più** un'istruzione per esecutore.
I modelli di calcolo in cui siano presenti più processori che lavorano contemporaneamente sono detti **paralleli**, così come il modello dotato di un solo processore è detto **sequenziale**.
Con più processori, sono possibili due situazioni differenti:
- Un solo [[Clock]] condiviso tra tutti i processori del sistema;
- Un clock per ciascun processore.

Si richiami, ora, un classico modello di calcolo sequenziale, cioè la **macchina RAM**: essa consiste di un processore P, collegato ad una memoria M attraverso un'unità di accesso.

![[placeholderRAM]]

Nei modelli di calcolo parallelo, data la presenza di più processori, un elemento critico è la modalità di comunicazione tra processori. I due casi limite sono rappresentati dal [[Modello a Memoria Condivisa]] e dal [[Modello a Memoria Distribuita]].

Il più semplice modello di calcolo parallelo è quello a memoria condivisa, detto [[Modello P-RAM]].

Il calcolo procede per **passi**. Ad ogni passo, ogni processore può fare un'operazione sui dati che possiede, oppure può leggere o scrivere nella memoria condivisa. In particolare, è possibile selezionare un insieme di processori che eseguono tutti la stessa istruzione (su dati generalmente diversi) mentre gli altri processori restano inattivi. I processori attivi sono sincronizzati, cioè eseguono la stessa instruzione simultaneamente e l'istruzione successiva può essere eseguita solo quando tutti hanno terminato l'esecuzione.

Questo modello di macchine è detto di tipo **SIMD** (**SIngle Intruction Multiple Data**).

Per semplicità, in seguito si farà riferimento al modello EREW, il più realistico.

La tipica istruzione di un algoritmo parallelo è strutturata nel seguente modo:

$$\text{for all } i(a \leq i \leq b) \text{ do in parallel Operazione}$$

la cui semantica è quella di eseguire $Operazione$ su tutti i processori $i$ con $a \leq i \leq b$, mentre gli altri restano inattivi.

Dato un algoritmo parallelo $A$, diremo $T_{A}(n,p)$ il tempo di esecuzione di $A$ su dati di dimensione $n$, quando $A$ utilizza $p$ processori; il caso sequenziale si ha, ovviamente, quando $p = 1$.
Obiettivo di un algoritmo parallelo è quello di diminuire i tempi di calcolo aumentando il numero di processori: si spera di ottenere un **trade-off** tra il tempo di esecuzione ed il costo (numero di processori) che va stimato per valutare l'efficacia di un algoritmo parallelo.

Due misure naturali dell'efficacia sono lo **Speed-Up** $S_{A}(p)$ e l'**Efficienza** $E_{A}(n,p)$.

$$S_{A} = \frac{T_{A}(n,1)}{T_{A}(n,p)}$$

$$E_{A} = \frac{S_{A}(p)}{p}$$

Maggiore il numero di processori, maggiore è il valore dello Speed-Up.
Con efficienza, invece, si intende quanto lavoro viene svolto da un singolo processore. 

Poichè $E_{A}(n,p) = \frac{T_{A}(n,1)}{p \cdot T_{A}(n,p)}$, l'efficienza risulta essere il rapporto tra il tempo dell'algoritmo sequenzialeed il tempo totale consumato dai processori, come se fossero usati sequenzialmente.

Dato un algoritmo $A$, il quale lavora con $p$ processori con una data efficienza $E$, è in generale possibile estendere l'algoritmo a lavorare con un numero inferiore di processori senza che l'efficienza diminuisca significativamente.

Se $k>1$, allora $E_{A}\Bigg( n, \frac{p}{k} \Bigg) \geq E_{A}(n, p)$.

Dato un algoritmo $A$ che lavora con $p$ processori, basta infatti costruire un algoritmo modificato che utilizza $p/k$ processori. Ad ogni nuovo processore si fa corrispondere un blocco di $k$ vecchi processori: ogni nuovo processore usa al più $k$ passi per emulare il singolo passo parallelo dei $k$ processori corrispondenti.