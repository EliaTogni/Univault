**CountingSort** è un algoritmo sequenziale di ordinamento su un input di $n$ valori. In questo algoritmo si assume che $n$ sia una potenza di $2$ per semplicità di calcolo e si assume che tutti gli elementi siano diversi tra loro.<br />

L'algoritmo conteggia i confronti che coinvolgono le celle dell'array $M$ e, in particolare, riesce ad stabilire che la posizione finale del contenuto della cella generica $M[i]$ è la generica posizione $k$ $\leftrightarrow$ gli elementi $\leq M[i] \text{ in } M$ sono in numero pari a $k$. <br />

Si userà il vettore $V[1], V[2],..., V[n]$,  dove $V[i]$ contiene $k$, per memorizzare le posizioni finali delle celle ed ottenere così l'array ordinato.<br />
Questa definizione di $v$ restituisce la permutazione inversa di $p$, ovvero $p^{-1}$, cioè risolve il problema dell'ordinamento (?).<br />

Si veda ora il codice dell'algoritmo:
```
for i = 1 to n{
	V[i] = 0
}

for i = 1 to n{
	for j = 1 to n{
		if(M[j]<=M[i]){
			V[i]++
		}
	}
}
		
for i = 1 to n{
	F[V[i]] = M[i]
}

for i = 1 to n{
	M[i] = F[i]
}
```
	
Si valutano ora le prestazioni dell'algoritmo.<br />
La seconda fase è quella più pesante in termini di tempo in quanto consiste di due cicli _for_ innestati.
$$\text{Confronti } = n^2$$
$$t = n^2$$

--------------------------------------------------------------