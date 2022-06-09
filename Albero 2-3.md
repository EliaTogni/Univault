Un **Albero 2-3** è un [[Struttura Dati]] basata su un [[Albero]] in cui ogni nodo interno ha $2$ o $3$ figli e tutti i cammini radice-foglia hanno la stessa lunghezza.<br />
A differenza di un [[Albero AVL]], un albero 2-3 mantiene il bilanciamento tramite le operazioni _split_ e _fuse_.<br />
Le chiabi e gli elementi del dizionario sono assegnati alle foglie dell'albero in modo che le chiavi appaiano in ordine crescente da sinistra verso destra. Ogni nodo interno $v$ mantiene invece due informazioni supplementari: $S[v]$ e $M[v]$.<br />
$S[v]$ è la massima chiabe nel sottoalbero radicato nel figlio sinistro di $v$, e $M[v]$ è la massima chiave nel sottoalbero radicato nel figlio centrale di $v$.<br />
Un albero 2-3 con $n$ nodi supporta operazioni _search_, _insert_ e _delete_ in tempo $O(\log(n))$ nel caso peggiore.<br />

------------------------------------------------------------