# Algoritmo #
Un **Algoritmo** è un procedimento computazionale formato da una sequenza di passi **eseguibili** e **non ambigui**, i quali definiscono un processo che termina.<br />
Un algoritmo definisce quindi, implicitamente, una funzione dall'insieme degli input a quello degli output e, nel contempo, descrive un procedimento effettivo, il quale permette di determinare, per ogni possibile ingresso, i corrispondenti valori di uscita.<br />
Dato un algoritmo $A$, si denota con $f_{A}$ la funzione che associa ad ogni input $x$ di $A$ il corrispondente output $f_{A}(x)$.<br />

------------------------------------------------------------

## Tecniche di Ricerca
### Ricerca Sequenziale
E' un tipo di ricerca che impiega tempo $O(n)$. Scorre tutto il vettore in maniera ordinata fino a trovare il valore ricercato, altrimenti restituisce $-1$.<br />

------------------------------------------------------------

### Ricerca Binaria o Dicotomica
E' un tipo di ricerca che si avvale della tecnica [[Divide et Impera]]. Questa tecnica può essere applicata solo a vettori ordinati.<br />
Ha complessità $O(n\log(n))$ perchè ad ogni iterazone, si dimezza il vettore in input.<br />

------------------------------------------------------------

### Algoritmi di ordinamento basati su confronti ###
#### Tecnica incrementale ####
La **Tecnica Incrementale** è una tecnica di ordinamento in cui si suppone che i primi $k$ elementi del vettore siano già ordinati, per $0 \leq k < n$, e si cerca un modo per estendere l'ordinamento a $k+1$ elementi.<br />

------------------------------------------------------------

#### Stabilità ####
Si definisce un algoritmo di ordinamento _stabile_ se esso preserva l'ordine iniziale tra due elementi dello stesso valore.<br />

------------------------------------------------------------

Gli algoritmi di ordinamento basati sui confronti più noti sono il [[SelectionSort]], l'[[InsertionSort]], il [[BubbleSort]], l'[[HeapSort]], il [[MergeSort]] e il [[QuickSort]].<br />

------------------------------------------------------------

### Algoritmi di ordinamento non basati sui confronti ###
Gli algoritmi di ordinamento non basati sui confronti più noti sono il [[BucketSort]] ed il [[RadixSort]].<br />

------------------------------------------------------------



