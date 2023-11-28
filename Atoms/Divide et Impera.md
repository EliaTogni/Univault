# Divide et Impera
La tecnica **divide et impera** è una tecnica di progettazione di un [[Algoritmo |algoritmo]] Top - Down, la quale consiste nel suddividere i dati di ingresso in due o più sottinsiemi (**divide**), risolvere ricorsivamente il problema sui sottoproblemi e poi ricombinare la soluzione dei sottoproblemi (**impera**) per ottenere la soluzione globale del problema originario.<br />
Ne consegue che la tecnica divide et impera sarà tanto più efficace quanto più sarà conveniente decomporre un'istanza in ingresso in sottoistanze e ricombinare efficientemente le loro soluzioni.<br />

--------------------------------------------------------------

## Teorema fondamentale delle ricorrenze
Molte delle relazioni di ricorrenza, derivanti da algoritmi basati sulla tecnica divide et impera, possono essere facilmente risolte usando il **Teorema fondamentale delle ricorrenze**.<br />
Si supponga che un problema di dimensione $n$ venga diviso in $a$ sottoproblemi, ciascuno di dimensione $\frac{n}{b}$, e che dividere i sottoproblemi e combinare le soluzioni richieda tempo $f(n)$.<br />
L'equazione di ricorrenza corrispondente a questo scenario è:

$$T(n) = aT\bigg(\frac{n}{b}\bigg) + f(n)$$

$$
\begin{numcases}{T(n) =}
  aT\bigg(\frac{n}{b}\bigg) + f(n), & se $n > 1$ \\
  1, & se $n = 1$
\end{numcases}
$$

--------------------------------------------------------------