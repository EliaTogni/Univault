Un **Grafo**  è una coppia $G = (V, E)$, composto da un insieme finito di **vertici** V e un insieme finito di **archi** $E \subseteq V \times V$. 

Esistono due tipi di grafi: grafi **orientati** e grafi **non orientati**.<br />

--------------------------------------------------------------

### Adiacenza ed Incidenza ###

Se $(x, y)$ è l'arco di un grafo $G$, si dice che $(x, y)$ è _incidente_ sui vertici $x$ e $y$. Se, inoltre, il grafo $G$ è _orientato_, si dice che l'arco $(x, y)$ esce dal vertice $x$ ed entra nel vertice $y$. Nel caso di un grafo _non orientato_, si dice che $x$ è _adiacente_ ad $y$, $y$ è _adiacente_ ad $x$. Nel caso di un grafo _orientato_, si dice che $y$ è _adiacente_ a $x$.<br />
Datp un vertice $v$, si definiscono i vertici adiacenti a $v$ come anche _vicini_ di $v$.<br />

Sia $G = (V, E)$ un grafo orientato e sia $u \in V$ un vertice. I vertici dell'insieme
$$\text{pred}(u) = \{v \in V | (v, u) \in E \}$$
sono chiamati predecessori del vertice $u$ e i vertici del set
$$\text{succ}(u) = \{v \in V | (u, v) \in E \}$$
sono chiamati successori del vertice $u$.

--------------------------------------------------------------

### Cammini e Cicli ###

Un _cammino_ in un grafo $G$ da un vertice $x$ ad un vertice $y$ è dato da una sequenza di vertici $(v_{0}, v_{1}, ..., v_{k})$, con $v_{0} = x$ e $v_{k} = y$, tale che, per $1 \leq i \leq k$, l'arco $(v_{i-1}, v_{i}) \in E$. In tal caso, il cammino è di _lunghezza_ $k$.<br />Un cammino è detto _semplice_ se tutti i suoi vertici sono distinti. Un _ciclo_ è un camino da $x$ a $x$.<br />

--------------------------------------------------------------

### Catena ###

Una _catena_ in un grafo $G$ da un vertice $x$ ad un vertice $y$ è data da una sequenza di vertici $(v_{0}, v_{1}, ..., v_{k})$, con $v_{0} = x$ e $v_{k} = y$, tale che, per $1 leq i \leq k$, l'arco $(v_{i-1}, v_{i}) \in E$, oppure $(v_{i}, v_{i-1}) \in E$. Si noti che, in un grafo non orientato, cammino e catena corrispondono.<br />

--------------------------------------------------------------

### Connettività e Connettività Forte ###

Un grafo non orientato $G = (V, E)$ si dice _connesso_ se esiste un cammino tra ogni coppia di vertici in $G$. Si dice, invece, _fortemente connesso_, se esiste un cammino (orientato) tra ogni coppia di vertici in $G$. Si dirà, inoltre, che un vertice $x$ è fortemente connesso ad un vertice $y$ se esiste un cammino (orientato) da $x$ a $y$ e da $y$ a $x$.<br />

--------------------------------------------------------------

### Sottografo ###

Un grafo $G' = (V', E')$ è detto _sottografo_ di un grafo $G = (V, E)$ se $V' \subseteq V$ ed $E' \subseteq E \cap (V' \times V')$.<br />
Si dice che un sottografo è _indotto_ se $E' = E \cap (V' \times V')$, ovvero se vengono considerati tutti gli archi che collegano i nodi scelti.<br />

--------------------------------------------------------------

### Ciclo e Grafo Euleriano ###
Si definisce **ciclo Euleriano** un ciclo in cui ogni arco in $E$ compare una ed una sola volta.<br />

Si definisce **cammino Euleriano** un cammino in cui ogni arco in $E$ compare una ed una sola volta.<br />

Si definisce **grafo Euleriano** un grafo che contiene un ciclo Euleriano.<br />

![[EsempioGrafoNonEuleriano.png]]

Questo esempio è un ciclo Euleriano? No, perchè non ho attraversato tutti gli archi per compiere il ciclo.<br />

--------------------------------------------------------------

###  Ricerca di Grafo Euleriano ###

**Definizione del problema **

**Input**: Grafo $D$<br />
**Output**: Boolean<br />

Esiste una proprietà matematica che dà una risposta a questo problema.<br />
$\forall v \in V$ si definisce $\rho^{-}(v) = \Bigg|\Big\{(w, v) \in E\Big\}\Bigg|$ il grado di entrata di $v$ e si definisce $\rho^{+}(v) = \Bigg|\Big\{(v, w) \in E\Big\}\Bigg|$ il grado di uscita di $v$.<br />

--------------------------------------------------------------

### Teorema di Eulero [1736] ###

Un grafo $D$ è Euleriano se e solo se $\forall v \in V \text{: } \rho^{-}(v) = \rho^{+}(v)$.<br />


--------------------------------------------------------------

Dato un grafo $D$, un ciclo è **Hamiltoniano** se e solo se è un ciclo dove ogni vertice in V compare una ed una sola volta.<br />

Un grafo è **Hamiltoniano** se e solo se contiene un ciclo Hamiltoniano.<br />

La ricerca di un grafo Euleriano è un problema la cui complessità computazionale è pari a $O(n^{3})$, e quindi è efficiente.<br />
Al contrario, la ricerca di un grado Hamiltoniano è un problema _NP_-completo.<br />

--------------------------------------------------------------


### Strutture Dati per rappresentare grafi ###

#### Rappresentazione di grafi con lista di archi ####

Consiste nel rappresentare il grafo tramite una struttura per ogni vertice ed un'altra struttura, contenente puntatori ai due vertici estremi dell'arco, per ogni arco.<br />Una tale rappresentazione avrò una lista o un array di strutture.<br />
Lo spazio totale usato da questa rappresentazione è $O(m + n)$, poichè è necessaria una quantità costante di spazio (una stuttura) per ogni vertice e per ogni arco.<br />

--------------------------------------------------------------

#### Rappresentazione di grafi con liste di adiacenza ####

In tale rappresentazione, ogni vertice $v$ ha una lista contenente i suoi vertici adiacenti, ovvero tutti i vertici $u$ per cui essite un arco $(v, u)$.<br />
Nel caso di gradi non orientati, la lunghezza totale delle liste di adiacenza è esattamente $2m$, poichè ogni arco $(x, y)$ è rappresentato due volte.<br />
Lo spazio richiesto dalla rappresentazione con liste di adiacenza è $O(m+n)$.<br />

-------------------------------------------------------------

#### Rappresentazione di grafi con matrici di adiacenza ####

SI assuma che i vertici del grafo da rappresentare corrispondano ai numeri interi da $1$ a $n$.<br />
Sia $M$ una matrice di dimensione $n \times n$, le cui righe e colonne sono indicizzate dai vertici del grafo. La matrice di adiacenza $M$ è definita nel modo seguente:

$$
\begin{numcases}{M[u, v] =}
  1, & se $(u, v)\text{ è un arco di }G$ \\
  0, & altrimenti
\end{numcases}
$$

Nel caso di grafi orientati, la matrice di adiacenza è simmetrica. Un punto di forza della rappresentazione con matrici di adiacenza è la possibilità di verificare la presenza di un arco $(x, y)$ in un tempo costante, controllando semplicemente il valore memorizzato in $M[x, y]$. D'altro canto, però, trovre i vicini di un vertice $v$ diventa un'operazione costosa: è necessario, infatti, esaminare tutte le posizioni $M[v, *]$ della matrice. Questa operazione richiede quindi tempo $O(n)$.<br />
Per memorizzare informazioni ausiliarie, come ad esempio il costo o la lunghezza di un arco, si possono sempre utilizzare altre matrici oltre alla matrice di adiacenza ma questa rappresentazione è particolamente utile in calcoli algebrici. La matrice di adiacenza codifica tutti i cammini di lunghezza $1$ nel grafo (ovvero gli archi). Eseguendo il prodotto $M^{2} = M \times M$, si otterà invece informazione sui cammini di lunghezza $2$. $M^{2}[u, v]$ avrà valore diverso da zero se e soltato se esisterà almeno un vertice $y$ tale che $M[u, y] = M[y, v] = 1$, ovvero se e solo se esiste almeno un cammino tra i vertici $u$ e $v$ contenente due archi.<br />La quantità di spazio richiesta è $O(n^{2})$.

--------------------------------------------------------------

#### Rappresentazione di grafi con matrici di incidenza ####

E' una matrice di dimensione $n \times m$: le righe della matrice sono indicizzate dai vertici, mentre le colonne sono indicizzate dagli archi. Similmente al caso della matrice di adiacenza, la matrice di incidenza avrò un valore uguale ad $1$ quando arco e vertice corrispondenti sono incidenti. Di conseguenza ogni colonna ha esattamente due $1$. Nel caso di un grafo orientato, è possibile usare una matrice simile, in cui ogni colonna ha esattamente valore $+1$ e valore $-1$ per distinguere tra il vertice sorgente ed il vertice destinazione dell'arco.<br />
la quantità di spazio richiesta è $O(nm)$.<br />

--------------------------------------------------------------

### Albero Ricoprente ###

Dato un grafo $G = (V, E)$ non orientato e connesso, un albero ricoprente di $G$ è un sottografo $T \subseteq G$ tale che:
- $T$ è un albero;
- $T$ contiene tutti i vertici di $G$.

Si supponga che ogni arco $e$ di $G$ abbia associato un peso $\omega(e)$. In modo più formale sia definita una funzione costo: $\omega: E \rightarrow R$. in tal caso, possiamo definire il costo di un albero ricoprente $T$ di $G$ come la somma dei costi dei suoi archi:

$$\omega\Big(T\Big) = \sum_{e \in T}\omega(e)$$

--------------------------------------------------------------

### Minimo Albero Ricoprente ###

Dato un grafo $G = (V, E)$ non orientato, connesso e pesato sugli archi, un _minimo albero ricoprente_ di $G$ è un albero ricoprente di $G$ di costo minimo.<br />

--------------------------------------------------------------

