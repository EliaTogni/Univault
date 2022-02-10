Nell'algoritmo sequenziale **CountingSort** si assume $n$ potenza di 2 per semplicità di calcolo e si assume che tutti gli elementi siano diversi tra loro.<br />

L'algoritmo conta i confronti che coinvolgono le celle dell'array $M$ ed, in particolare, riesce ad individuare la posizione della cella generica $M[i]$ in posizione $k$ $\leftrightarrow k$ elementi sono $\leq M[i] \text{ in } M$. <br />

Si userà il vettore $V[1], V[2],..., V[n]$ per memorizzare le posizioni finali delle celle ed ottenere così l'array ordinato.