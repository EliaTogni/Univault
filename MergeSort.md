L'algoritmo **MergeSort** è un algoritmo di ordinamento sequenziale basato sulla tecnica [[Divide et Impera]].

```
Procedura MergeSort(A[1], A[2], ..., A[n])
	if(|A|>1)
		A_{s} <- MergeSort(A[1], ..., A[n/2]])
		A_{d} <- MergeSort(A[n/2 +1], ..., A[n])
		A <- Merge(A_{s}, A_{d})
	return(A)
```

dove <code>|A|</code> indica la cardinalità dell'array A.

```
Routine Merge()
```


Si valutano ora le prestazioni dell'algoritmo.<br />
$$t(n)$$