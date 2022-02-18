Per comprendere la Tecnica del Ciclo Euleriano, è necessario avere in mente la definizione di **Ciclo Euleriano** riferita ad un [[Grafo]].<br />

Questa tecnica viene usata per costruire algoritmi paralleli efficienti che gestiscono strutture dinamiche come un [[Albero Binario]].

![[AlberiBinariEuleriano.png]]

Poichè si vuole costruire degli algoritmi paralleli, nella memoria condivisa della PRAM è necessario avere la codifica di un albero binario sotto forma di tabella, cioè le celle di memoria della PRAM.<br />

----------------------------------------

Molti problemi ben noti, come problemi di Ricerca, Dizionari o Query, utilizzano questa struttura dati <br />
Fondamentale in tali problemi è la navigazione dell'albero. Ma come farlo con algoritmi paralleli  efficienti?<br />
Si può farlo utilizzando delle liste, le quali sono facili da gestire in parallelo.<br />

Nel primo passo, si associa all'albero binario un ciclo Euleriano.

![[AlberoBinarioCicloEuleriano.png]]

Ogni ramo dell'albero viene sostituito da due archi, uno che scende verso uno dei nodi figli ed uno che sale verso il nodo padre.<br />
In questo modo è possibile navigare l'albero seguendo il ciclo Euleriano. In questo modo si è trasformato l'albero binario in un grafo Euleriano.<br />

Nel secondo passo, si passa dal ciclo Euleriano al cammino Euleriano, in modo da eliminare le ambiguità di percorrimento.<br />
Si esegue un'operazione di trasformazione dei nodi dove ogni nodo viene triplicato.<br />
Si segue, infatti, la seguente regola: ogni nodo $v$ viene espanso in $(v,s)$, $(v, c)$e $(v, d)$.<br />

![[CicloCamminoEuleriano.png]]

Nel terzo passo, si passa dal cammino Euleriano alla costruzione della lista, per poter rappresentare il cammino nella memoria centrale. L'unico modo per fare ciò è utilizzare un vettore bidimensionale  di successori, $S[(v, x)]$ dove $1 \leq v \leq n$ e $x \in {s, c, d}$.<br />

In input si ha la tabella e, per costruire $S$ è necessario seguire delle regole ben definite.<br />

Analizzando la struttura di un nodo foglia nel cammino Euleriano, si nota come un nodo $(n,s)$ punti ad un nodo $(n, c)$ e come un nodo $(n, c)$ punti ad un nodo $(n, d)$. <br />
Quindi $S[(v, s)] = (v, c)$, $S[(v, c)] = (v, d)$.<br />
Per quanto riguarda il nodo di destra, vale invece la seguente regola:
$$\begin{numcases}{S[(v, d)] =}
  (padre(v), c), & se $v = sin(padre(v))$ \\
  (pad(v), d), & se $v = des(padre(v))$
\end{numcases}$$

Per i nodi interni, un nodo $(n, s)$ punta al nodo figlio di sinistra $(j, s)$ e un nodo $(n, c)$ punta al nodo figlio di destra $(k, s)$.<br />
Quindi 


