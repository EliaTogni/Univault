Il **BitSort** è un [[Algoritmo]] di ordinamento, inventato da Batcher nel 1968, che deve il proprio nome al termine **Bitonic**, derivato dalla [[Sequenza Unimodale e Bitonica]].<br />
Prende spunto dall'algoritmo sequenziale [[MergeSort]] ma utilizza come funzione di fusione il _BitMerge_, il quale lavora su sequenze bitoniche.<br />

```
Procedura BitSort(A[1], ..., A[n]){
	minMax(A)
	if(|A|>2){
		BitSort(A_{min})
		BitSort(A_{Max})
		BitMerge(A_{min}, Rev(A_{Max}))
	}
	return(A)
}
```

E' un algoritmo di ordinamento che funziona su una qualsiasi sequenza, non necessariamente unimodale o bitonica.<br />
Se sia $A_{min}$ che $A_{Max}$ sono ordinati in maniera crescente, il prodotto tra $A_{min}$ e _Rev_($A_{Max}$) trasforma i due vettori in input in una sequenza unimodale con un picco pari ad un massimo.<br />
Poichè una sequenza_ unimodale è anche bitonica, è possibile effettuare la chiamata a _BitMerge_, cioè l'algoritmo di ordinamento per le sequenze bitoniche.<br />

--------------------------------------------------------------

#### Correttezza dell'Algoritmo ####

Per dimostrare la correttezza del _BitSort_, si utilizza l'[[Induzione]].<br />
Nel caso base, cioè per $n = 2$:
- il minimo viene inserito nella cella in prima posizione ed il massimo nella seconda cella, tramite procedura _minMax_;
- l'algoritmo non entra nell'_if_;
- l'algoritmo restituisce il vettore ordinato.

Il caso base è quindi dimostrato.<br />
Nel passo induttivo, si suppone che l'algoritmo sia corretto per $n = 2^{k}$ e si dimostra che sia corretto per $n = 2^{k+1}$:
- la cardinalità di $A = 2^{k+1}$;
- _minMax_ divide $A$ in due sottoarray, ciascuno di dimensione $2^{k}$;
- _BitSort_($A_{min}$) e _BitSort_($A_{Max}$) ordinano i due sottoarray, per ipotesi induttiva;
- _BitMerge_($A_{min}$, _Rev_$A_{Max}$) ordina $A$.

Di conseguenza è dimostrato.<br />

--------------------------------------------------------------

#### Implementazione Parallela di BitSort####

![[ParallelBitSort.png]]

Questo algoritmo è diviso in una prima fase, delle chiamate a _minMax_ e in una seconda fase, la quale ha inizio con i sottoarray di cardinalità $2$.<br />
In questa seconda fase avvengono le chiamate a _BitMerge_, che a sua volta esegue delle operazioni di _minMax_.<br />
L'algoritmo termina restituendo l'array ordinato.<br />

Si valutano ora le prestazioni dell'algoritmo.<br />
Innanzitutto, si tratta di un algoritmo EREW perchè ad ogni chiamata ricorsiva si divide l'input in due sottoarray distinti. Inoltre, le chiamate a funzione atte a ricombinare l'array lavorano su array diversi.
Ergo si tratta di un algoritmo EREW.<br />
in termini di processori, la prima fase richiede $\frac{n}{2}$ processori.<br />
La seconda fase richiede, invece, $\frac{n}{2}$ processori per la routine _Rev_ e $\frac{n}{2}$ processori per l'esecuzione di _BitMerge_.<br />
Di conseguenza, il numero di processori totale è pari a:
$$p(n) = \frac{n}{2}$$
In termini di tempo, la prima fase ricalca quella dell'algoritmo _BitMerge_. Si avrà quindi un numero logaritmico di fasi dal costo costante.
Il costo della seconda fase è dato dalla profondità dell'albero moltiplicata per il costo di ogni chiamata a _Rev_ e di _BitMerge_. Mentre il costo del primo è costante, il costo del secondo modulo varia in base alla lunghezza dell'input, e vale $O(\log(n))$.<br />Di conseguenza:
$$T(n, p(n)) = O(\log^{2}(n))$$
E' possibile calcolare il tempo di _BitSort_ con un'equazione di ricorrenza:
$$
\begin{numcases}{t(n) =}
  5, & se $n = 2$ \\
  T\large(\frac{n}{2}\large) + 5 + 4 + 5\log(n), & altrimenti
\end{numcases}
$$

dove il valore $5$ indica il costo della routine _minMax_, il valore $4$ indica il costo della routine _Rev_ e il valore $5\log(n)$ indica il costo di _BitMerge_.<br />
Sviluppando i conti si ottiene un $O(\log(n))$.<br />
In termini di efficienza, si ha:
$$E = \frac{n\log(n)}{\frac{n}{2}5\log^{2}(n)} \rightarrow \frac{\alpha}{\log(n)} \rightarrow 0$$

--------------------------------------------------------------