L'algoritmo **MergeSort** è un [[Algoritmo]] di ordinamento sequenziale basato sulla tecnica [[Divide et Impera]].

```
Procedura MergeSort(A[1], A[2], ..., A[n]){
	if(|A|>1){
		A_{s} <- MergeSort(A[1], ..., A[n/2]])
		A_{d} <- MergeSort(A[n/2 +1], ..., A[n])
		A <- Merge(A_{s}, A_{d})
	}
	return(A)
}
```

dove <code>|A|</code> indica la cardinalità dell'array A.

```
Routine Merge(){
}
```

La routine _Merge_, nel caso peggiore, ha un costo pari ad $n$. Il caso peggiore si ha quando il primo elemento di uno dei due sottoarray è minore del primo elemento del secondo sottoarray, il primo elemento del secondo sottoarray è minore del secondo elemento del primo sottoarray e così via.<br />

Si valutano ora le prestazioni dell'algoritmo.<br />
$$
\begin{numcases}{t(n) =}
  0, & se $n = 1$ \\
  2t\large(\frac{n}{2}\large) + n, & altrimenti
\end{numcases}
$$

dove $n$ è il tempo di merge da sommare.<br />
Si svolge ora questa equazione di ricorrenza.<br />
$$t(n) = 2t\Big(\frac{n}{2}\Big) + n \sim 2\Big(2t(\frac{n}{4})\Big) + n + n$$
$$\sim 2^{k}t\Big(\frac{n}{2^{k}}\Big) + kn$$
$$\sim n \cdot 0 + \log(n) \cdot n = n\log(n)$$

![[Images/SchemaMergeSort.png]]

--------------------------------------------------------------