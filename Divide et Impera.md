# Divide et Impera #
La tecnica **Divide et Impera** è una tecnica di progettazione di un [[Algoritmo]] [[Top - Down]], la quale consiste nel suddividere i dati di ingresso in due o più sottinsiemi (_divide_), risolvere ricorsivamente il problema sui sottoproblemi e poi ricombinare la soluzione dei sottoproblemi (_impera_) per ottenere la soluzione globale del problema originario.<br />
Ne consegue che la tecnica _divide et impera_ sarà tanto più efficace quanto più sarà conveniente decomporre un'istanza in ingresso in sottoistanze e ricombinare efficientemente le loro soluzioni.<br />

--------------------------------------------------------------

### Teorema fondamentale delle ricorrenze ###
Molte delle relazioni di ricorrenza, derivanti da algoritmi basati sulla tecnica _divide et impera_, possono essere facilmente risolte usando il **Teorema fondamentale delle ricorrenze**.<br />
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