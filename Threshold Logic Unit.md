Le **Threshold Logic Unit** sono conosciute anche come **neuroni McCulloch-Pitts**. Un'altro nome che viene comunemente utilizzato per definirle è **percettrone**. 

Una Threshold Logic Unit è una semplice unità di processing per numeri reali con $n$ input $x_{1}$, ..., $x_{n}$ ed un output $y$. L'unità, nella sua interezza, possiede una soglia $\theta$. Ad ogni input $x_{i}$ è assegnato un peso $w_{i}$.<br />
Una threshold logic unit calcola la funzione:

$$
\begin{numcases}{y =}
  1, & se $\sum_{i=1}^{n} x_{i}w_{i} \geq \theta$ \\
  0, & altrimenti
\end{numcases}
$$

Gli input sono spesso combinati in un vettore di input **x** = ($x_{1}$, ..., $x_{n}$) e i pesi in un vettore di pesi **w** = ($w_{1}$, ..., $w_{n}$).
La condizione testata dalla TLU può, quindi, essere scritta come **wx** $\geq \theta$.  

La TLU viene rappresentata come un cerchio. nel quale viene memorizzato il valore della soglia. Ogni input è rappresentato da una freccia entrante nel cerchio ed è etichettato dal proprio peso. L'output della TLU è rappresentato, invece, come una freccia uscente dal cerchio.

![[TLU for the conjunction.png]]

Assumiamo che le variabili in input possano assumere solo valori 0 e 1.
Intuitivamente, pesi negativi corrispondono ad una sinapsi inibitoria mentre, al contrario, pesi positivi corrispondono a sinapsi eccitatorie.

La condizione che viene verificata da una TLU al fine di decidere se il valore dell'output debba essere 0 o 1 è molto simile all'equazione di una retta. E' certamente possibile interpretare il calcolo di una TLU in maniera geometrica se si trasforma questa condizione in una retta, un piano o un iperpiano.
$$\sum_{i=1}^{n}w_i x_i = \theta$$

![[Geometry of a TLU for the conjunction.png]]

esempio della geometria di una Threshold Logic Unit

Ovviamente la computazione di una TLU con più di due input può essere interpretata anch'essa geometricamente. Con tre input, la **linea di separazione** diventa un **piano di separazione**.

![[3D geometry of a TLU.png]]
 
--------------------------------------------------------------