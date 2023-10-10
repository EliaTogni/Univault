Per comprendere la Tecnica del Ciclo Euleriano, è necessario avere in mente la definizione di **Ciclo Euleriano** riferita ad un [[Grafo]].<br />

Questa tecnica viene usata per costruire algoritmi paralleli efficienti che gestiscono strutture dinamiche come un [[Albero Binario]].

![[Images/AlberiBinariEuleriano.png]]

Poichè si vuole costruire degli algoritmi paralleli, nella memoria condivisa della PRAM è necessario avere la codifica di un albero binario sotto forma di tabella, cioè le celle di memoria della PRAM.<br />

--------------------------------------------------------------

Molti problemi ben noti, come problemi di Ricerca, Dizionari o Query, utilizzano questa struttura dati <br />
Fondamentale in tali problemi è la navigazione dell'albero. Ma come farlo con algoritmi paralleli  efficienti?<br />
Si può farlo utilizzando delle liste, le quali sono facili da gestire in parallelo.<br />

Nel primo passo, si associa all'albero binario un ciclo Euleriano.

![[Images/AlberoBinarioCicloEuleriano.png]]

Ogni ramo dell'albero viene sostituito da due archi, uno che scende verso uno dei nodi figli ed uno che sale verso il nodo padre.<br />
In questo modo è possibile navigare l'albero seguendo il ciclo Euleriano. In questo modo si è trasformato l'albero binario in un grafo Euleriano.<br />

Nel secondo passo, si passa dal ciclo Euleriano al cammino Euleriano, in modo da eliminare le ambiguità di percorrimento.<br />
Si esegue un'operazione di trasformazione dei nodi dove ogni nodo viene triplicato.<br />
Si segue, infatti, la seguente regola: ogni nodo $v$ viene espanso in $(v,s)$, $(v, c)$e $(v, d)$.<br />

![[Images/CicloCamminoEuleriano.png]]

Nel terzo passo, si passa dal cammino Euleriano alla costruzione della lista, per poter rappresentare il cammino nella memoria centrale. L'unico modo per fare ciò è utilizzare un vettore bidimensionale  di successori, $S[(v, x)]$ dove $1 \leq v \leq n$ e $x \in {s, c, d}$.<br />

In input si ha la tabella e, per costruire $S$ è necessario seguire delle regole ben definite.<br />

Analizzando la struttura di un nodo foglia nel cammino Euleriano, si nota come un nodo $(n,s)$ punti ad un nodo $(n, c)$ e come un nodo $(n, c)$ punti ad un nodo $(n, d)$. <br />
Quindi $S[(v, s)] = (v, c)$e  $S[(v, c)] = (v, d)$.<br />
Per quanto riguarda il nodo di destra, vale invece la seguente regola:
$$
\begin{numcases}{S[(v, d)] =}
  (padre(v), c), & se $v = sin(padre(v))$ \\
  (padre(v), d), & se $v = des(padre(v))$
\end{numcases}
$$

Per i nodi interni, un nodo $(n, s)$ punta al nodo figlio di sinistra $(j, s)$ e un nodo $(n, c)$ punta al nodo figlio di destra $(k, s)$.<br />
Quindi $S[(v, s)] = (sin(v), s)$ e $S[(v, c)] = (des(v), s)$.<br />
Per quanto riguarda il nodo di destra, vale invece la seguente regola:
$$
\begin{numcases}{S[(v, d)] =}
  (padre(v), c), & se $v = sin(padre(v))$ \\
  (padre(v), d), & se $v = des(padre(v))$
\end{numcases}
$$

Si propone ora un algoritmo parallelo per costruire $S$.<br />
$S$ non fa altro che trasformare questo grafo in una lista, dicendo di ogni nodo chi è il successore.<br />
Si può pensare che la tabella sia in memoria e che ogni processore consideri una sola riga della tabella e costruisca $S[(v, s)]$, $S[(v, c)]$ e $S[(v, d)]$. Per generare $S[(v, d)]$, l'algoritmo deve, però, stabilire se il nodo è un figlio di sinistra o di destra. Questo può generare delle letture concorrenti, quindi è necessario attuare un piccolo accorgimento per renderlo EREW.<br />

Si valutano ora le prestazioni dell'algoritmo.<br />
$$p(n) = n$$
$$T(n, p(n)) = O(1)$$

Questo è un caso in cui si può migliorare l'efficienza attraverso il [[Teorema di Wyllie]].<br />
Se si raggruppano i processori in gruppi di dimensioni $p = \frac{n}{\log(n)}$, si riesce ad ottenere un tempo logaritmico ed un'efficienza che tende ad una costante $c \neq 0$.<br />

--------------------------------------------------------------

L'array $S$ è utile per risolvere svariati problemi:
- l'attraversamento dell'albero in preordine (cioè visitare prima la radice, poi il figlio di sinistra e poi il figlio di destra);
- il calcolo della profondità dei nodi, cioè stabilire, per ogni nodo, quanti nodi si trovano nel cammino che collega la radice al nodo in questione.

Sono necessarie, però, due definizioni:
1) $\forall v \in V: N(v) = $ ordine di attraversamento di $v$ in preordine;
2) $\forall v \in V: P(v) = $ profondità di $v$ nell'albero.

--------------------------------------------------------------

### Attraversamento dell'Albero in Preordine ###

Si definisca un particolare array A:
$$
\begin{numcases}{A[(v, x)] =}
  1, & se $x = s$ \\
  0, & se $x = c || x = d$
\end{numcases}
$$

![[Images/AttraversamentoPreordine.png]]

L'array A così ottenuto conterrà:
$$A = [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0]$$

Se a questo vettore $A$ si applica il metodo SOMME-PREFISSE, si otterrà il risultato $N(v)$ nella componente sinistra dei vertici.<br />
Questo risultato corrisponde all'ordine di attraversamento dell'albero in preordine.<br />

--------------------------------------------------------------

### Implementazione Parallela per l'Ordine $N(v)$ ###

1) Calcolo di $A$ e $S$;
2) Calcolo di SOMME-PREFISSE su $A$ e su $S$.

**Output**: si trova nel nodo $A[(v, s)]$.

Si valutano ora le prestazioni dell'algoritmo.<br />
Si tratta di un algoritmo EREW.<br />
$$p(n) = \frac{n}{\log(n)}$$
$$T(n, p(n) = \log(n) \text{ in entrambe le fasi}$$
$$E = \frac{n}{\frac{n}{\log(n)}\log(n)} \rightarrow c \neq 0$$

--------------------------------------------------------------

### Calcolo della Profondità dei Nodi ###

Si definisca un particolare array:

$$
\begin{numcases}{A[(v, x)] =}
   1, & se $x = s$ \\
   0, & se $x = c$ \\
  -1, & se $x = d$ \
\end{numcases}
$$

![[Images/ProfonditàNodi.png]]

L'array così ottenuto conterrà:

$$A = [1, 1, 0, -1, 1, 1, 1, 0, 1, 0, 1, 0, -1, -1, -1]$$

Se a questo vettore $A$ si applica il metodo SOMME-PREFISSE, si otterrà il risultato $P(v)$ nella componente destra dei vertici.<br />
Questo risultato corrisponde all'ordine di attraversamento dell'albero in preordine.<br />

--------------------------------------------------------------

### Implementazione Parallela per la Profondità $P(v)$ ###

1) Calcolo di $A$ e $S$;
2) Calcolo di SOMME-PREFISSE su $(A, S)$.

**Output**: si trova in $A[(v, s)]$ (se si parte a contare da 1) o in $A[(v, d)]$ (se si parte a contare da 0).

Si valutano ora le prestazioni dell'algoritmo.<br />
Si tratta di un algoritmo EREW.<br />
$$p(n) = \frac{n}{\log(n)}$$
$$T(n, p(n) = \log(n) \text{ in entrambe le fasi}$$
$$E = \frac{n}{\frac{n}{\log(n)}\log(n)} \rightarrow c \neq 0$$

--------------------------------------------------------------