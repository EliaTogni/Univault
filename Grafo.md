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

-------------------------------------------------------------

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