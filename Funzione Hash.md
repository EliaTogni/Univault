Una **Funzione Hash** è una funzione $h:U \rightarrow {0, ..., m-1}$, la quale trasforma chiavi in indici di una tavola.<br />
Si indicherà con il nome $tavola hash$ una tavola indicizzata tramite funzioni hash.<br />

Una funzione hash $h$ è **Perfetta** se è una [[Funzione Iniettiva]], cioè per ogni $u, v \in U, [u \neq v] \rightarrow [h(u) neq h(v)]$.<br />
Questo implica che, affinchè una funzione di hash sia perfetta, $|U| \leq m$.<br />

Se una funzione hash non è perfetta, allora esistono due o più chiavi diverse che hanno associato lo stesso indice.<br />
Se, nel [[Dizionario]], vengono a trovarsi simultaneamente chiavi con lo stesso valore della funzione hash, si ha una _collisione_.<br />

--------------------------------------------------------------