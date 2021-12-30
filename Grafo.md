Un **grafo** ( orientato ) è una coppia $G = ( V, E)$, composto da un insieme finito di **vertici** V e un insieme finito di **archi** $E \subseteq V \times V$. Un arco $e = ( u, v ) \in E$ si definisce diretto dal vertice $u$ al vertice $v$.

Sia $G = ( V, E )$ un grafo orientato e sia $u \in V$ un vertice. I vertici dell'insieme
$$\text{pred}(u) = \{v \in V | ( v, u ) \in E \}$$
sono chiamati predecessori del vertice $u$ e i vertici del set
$$\text{succ}(u) = \{v \in V | ( u, v ) \in E \}$$
sono chiamati successori del vertice $u$.
