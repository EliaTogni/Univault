Un **albero di copertura** è un [[Struttura Dati|struttura dati]] basata su un [[Albero |albero]]. Dato un grafo $G = (V, E)$ non orientato e connesso, un albero di copertura di $G$ è un sottografo $T \subseteq G$ tale che:
- $T$ è un albero;
- $T$ contiene tutti i vertici di $G$.

Si supponga che ogni arco $e$ di $G$ abbia associato un peso $\omega(e)$. In modo più formale sia definita una funzione costo: $\omega: E \rightarrow R$. in tal caso, possiamo definire il costo di un albero ricoprente $T$ di $G$ come la somma dei costi dei suoi archi:

$$\omega\Big(T\Big) = \sum_{e \in T}\omega(e)$$

#### Minimo Albero Ricoprente
Dato un grafo $G = (V, E)$ non orientato, connesso e pesato sugli archi, un **minimo albero ricoprente** di $G$ è un albero ricoprente di $G$ di costo minimo.<br />


----------------------------------------------------------------