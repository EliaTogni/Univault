Un **R - Layer Perceptron** è una rete neurale alla quale è associato un grafo $G = (U, C)$, il quale soddisfa le seguenti restrizioni.
1) $U_{in} \cap U_{out} = \emptyset ,$
2) $U_{hidden} = U_{hidden}^{1} \cup ... \cup U_{hidden}^{(r-2)}, \forall 1\leq i < r - 2 : U_{hidden}^{(i)} \cap U_{hidden}^{(j)} = \emptyset$
3) $C \subseteq (U_{in} \times U_{hidden}^{(1)}) \cup \bigcup_{i = 1}^{r-3} U_{hidden}^{(i)} \times U_{hidden}^{(i+1)} ) \cup (U_{hidden}^{(r-2)} \times U_{out})$ oppure, se non ci sono neuroni nascosti $(r = 2, U_{hidden} = \emptyset), C \subseteq U_{in} \times U_{out}$.

![[General structure of an r-layered perceptron.png]]

La network input function di ogni neurone nascosto ed output è la somma pesata (pesata dai pesi delle connessioni) degli input, cioè:

$$
\forall u \in U_{hidden} \cup U_{out} : f_{net}^{(u)}(\textbf{w}_{u}, \textbf{in}_{u}) = \textbf{w}_{u}\textbf{in}_{u} = \sum_{v \in pred(u)} w_{uv}out_{v}
$$

La funzione di attivazione di ogni neurone è descritta da una **funzione sigmoide**, cioè una funzione monotona non decrescente, con:

$$ f: \!R \rightarrow [0, 1] \quad \text{ con } \quad \lim_{x \rightarrow - \infty} f(x) = 0 \quad \text{ e } \quad \lim_{x \rightarrow \infty} f(x) = 1 $$

La funzione di attivazione di ogni neurone di output è anche o una funzione sigmoide o anche una funzione lineare $f_{act}(net, \theta) = \alpha net - \theta$.

Intuitivamente, le restrizioni sul grafo significano che un multi-layer perceptron consiste di un input layer e di un output layer e di nessuno, uno o diversi hidden layer tra di essi.
Le connessioni esistono solamente tra neuroni di layer consecutivi. In accordo con questa definizione, un multi-layer perceptron ha sempre almeno due layer, cioè l'input e l'output layer.

... funzioni ...

Le computazioni eseguite da un multi-layer perceptron possono essere scritte usando una notazione vettoriale e matriciale. Per questo motivo si usa una matrice per le connessioni tra un layer e il successivo.
Siano $U_{1} = \{ v_{1}, ..., v_{m} \}$ e $U_{2} = \{ u_{1}, ..., u_{n} \}$ i neuroni di due layer di un multi - layer perceptron, dove $U_{2}$ segue $U_{1}$. Si costruisca una matrice $n \times m$

$$\textbf{W} = \Bigg(\Bigg)$$

dei pesi delle connessioni tra questi due layer, impostando $w_{u_{i}v_{j}} = 0$ se non ci sono connessioni tra il neurone $v_{j}$ e il neurone $u_{i}$. Il vantaggio di una matrice così costruita è che permette di scrivere il network input dei neuroni del layer $U_{2}$ come

$$ 
\textbf{net}_{U_{2}} = \textbf{W} \cdot \textbf{in}_{U_{2}} = \textbf{W} \cdot \textbf{out}_{U_{1}}
$$

dove $\textbf{net}_{U_{2}} = (net_{U_{1}}, ..., net_{U_{n}})^{\top}$ e $\textbf{in}_{U_{1}} =  (out_{v_{1}}, ..., out_{v_{m}})^{\top}$.

### Approssimazione di funzioni ###

Ogni [[Funzione Integrabile Secondo Riemann]] può essere approssimata da un perceptron a quattro strati con accuratezza arbitraria, a patto che il neurone output abbia implementata la funzione identità come funzione di attivazione, invece di una funzione a scalini.

![[Approximating a continuous function with step functions.png]]

La funzione da calcolare è approssimata da una funzione a scalini. Per ogni step border $x_{i}$, viene creato un neurone nel primo strato nascosto di un multi-layer perceptron con un totale di quattro layer. Questo neurone serve allo scopo di determinare in quale lato dello step border giace un valore di input.
Nel secondo strato nascosto, viene creato un neurone per ogni gradino, il quale riceve gli input dai due neuroni nel primo nel primo strato nascosto che si riferiscono ai valori $x_i$ e $x_{i+1}$, marcando i bordi di questo scalino.
I pesi e la sogia sono scelti in un modo tale che il neurone viene attivato se il valore in input è maggiore di $x_{i}$ ma minore di $x_{i+1}$, cioè se il valore di input cade nel range dello scalino.
Solamente uno ed un solo neurone nel secondo strato nascosto può essere attivo, cioè quello che rappresenta il gradino nel quale giace il valore in input.

![[A neural network that computes the step function.png]]

Le connessioni dai neuroni nel secondo strato nascosto al neurone output sono pesate con i valori degli scalini della funzione che sono rappresentati dai neuroni. Poichè solo un neurone può essere attivo nel secondo strato nascosto, il neurone di output riceve come input l'altezza dello scalino, nel quale giace il valore di input.
Poihcè la funzione di attivazione del neurone di output è la funzione identità, il valore emesso è invariato.
Dovrebbe risultare ovvio che l'accuratezza dell'approssimazione può essere incrementata arbitrariamente riducendo la grandezza degli scalini.

Una qualsiasi funzione integrabile secondo Riemann può essere approssimato con accuratezza arbitraria da un multi-layer perceptron. Questa preposizione richiede soltanto che la funzione da rappresentare sia integrabile secondo Riemann. Non richiede, infatti, che sia continua.
In questa preposizione, inoltre, l'errore di approssimazione è misurato dall'area tra la funzione da approssimare e tra l'output del perceptron.  Questa area può essere ridotta in maniera arbitraria, nuovamente tramite l'incremento del numero di neuroni.
Tuttavia, questo non garantisce che, per un multi-layer perceptron, il quale ottiene un certa accuratezza, la differenza tra il suo output e la funzione da approssimare sia minore di un certo errore ovunque. La funzione, per esempio, potrebbe possedere uno spike molto sottile, il quale non è catturato da nessuno scalino.

![[Limits of the preposition.png]]

In un caso del genere, l'area tra la funzione da rappresentare e l'output del perceptron è piccola (poichè lo spike è sottile e quindi contiene solamente un'area piccola), ma nel punto dello spike, la deviazione dell'output dal vero valore della funzione non può essere cosiderabile.

Naturalmente, l'idea di approssimare una funzione data tramite una funzione a scalini può essere trasferita ed applicata a funzioni con multipli argomenti.