Il **BitSort** è un algoritmo di ordinamento, inventato da Batcher nel 1968, che deve il proprio nome al termine **Bitonic**, derivato dalla [[Sequenza Unimodale e Bitonica]].<br />
Prende spunto dall'algoritmo sequenziale [[MergeSort]] ma utilizza come funzione di fusione il _BitMerge_, il quale lavora su sequenze bitoniche.<br />

```
Procedura BitSort(A[1], ..., A[n]){
	if(|A|>2){
		BitSort(A_{min})
		BitSort(A_{Max})
		BitMerge(A_{min}, Rev(A_{Max}))
	}
	return(A)
}
```

E' un algoritmo di ordinamento che funziona su una qualsiasi sequenza, non necessariamente unimodale o bitonica.<br />
Le chiamate a _minMax_ e a _BitSort_ rendono l'array unimodale
L'utilizzo di _BitMerge_ ordina l'array, rendendolo bitonico.