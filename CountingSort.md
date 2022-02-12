**CountingSort** è un algoritmo sequenziale di ordinamento su un input di $n$ valori. In questo algoritmo, si assume $n$ potenza di $2$ per semplicità di calcolo e si assume che tutti gli elementi siano diversi tra loro.<br />

L'algoritmo conteggia i confronti che coinvolgono le celle dell'array $M$ e, in particolare, riesce ad individuare la posizione del contenuto della cella generica $M[i]$ in posizione $k$ $\leftrightarrow k$ elementi sono $\leq M[i] \text{ in } M$. <br />

Si userà il vettore $V[1], V[2],..., V[n]$ per memorizzare le posizioni finali delle celle ed ottenere così l'array ordinato.