Un **Grafo** (orientato o diretto) è una coppia $G = (V, E)$, composto da un insieme finito di **vertici** V e un insieme finito di **archi** $E \subseteq V \times V$. Un arco $e = (u, v) \in E$ si definisce diretto dal vertice $u$ al vertice $v$.

Sia $G = (V, E)$ un grafo orientato e sia $u \in V$ un vertice. I vertici dell'insieme
$$\text{pred}(u) = \{v \in V | (v, u) \in E \}$$
sono chiamati predecessori del vertice $u$ e i vertici del set
$$\text{succ}(u) = \{v \in V | (u, v) \in E \}$$
sono chiamati successori del vertice $u$.

Si definisce **cammino** una sequenza di archi $e_{1}, e_{2}, ..., e{i}, e_{i+1}, ..., e_{k}$, tale che il nodo finale di $e_{i}$ coincida con il nodo iniziale di $e_{i+1}$, $\forall i$.<br />

Si definisce **ciclo** un cammino tale che il nodo finale di $e_{k}$ coincida con il nodo iniziale di $e_{1}$.<br />

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