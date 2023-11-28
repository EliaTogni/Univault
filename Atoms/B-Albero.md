# B-Albero #
Il **B-Albero** è una [[Struttura Dati |struttura dati]] basata su un [[Albero |albero]] nata per minimizzare il numero di letture e scritture su memoria esterna dato l'elevato tempo richiesto per l'accesso.<br />

Sia $t$ un intero fissato $\geq 2$, detto _grado minimo_ e tipicamente scelto in modo proporzionale alla dimensione $B$ di un blocco.<br />
Un B-albero non vuoto di grado minimo $t$ è un albero radicato con le seguenti proprietà:
- tutte le foglie hanno la stessa profondità;
- ogni nodo $v$ diverso dalla radice mantiene $k(v)$ chiavi ordinate, $chiave_{1}(v) \leq chiave_{2}(v) \leq ... \leq chiave_{k(v)}(v)$, tali che $t-1 \leq k(v) \leq 2t -1$;
- la radice mantiene almeno $1$ ed al più $2t-1$ chiavi ordinate;
- ogni nodo interno $v$ ha un $k(v) + 1$ figli;
- le chiabi $chiave_{i}(v)$ separano gli intervalli di chiavi memorizzati in ciascun sottoalbero: se $c_{i}$ è una qualunque chiabe nell'$i$-esimo sottoalbero di un nodo $v$, allora $c_{1} \leq chiave_{1}(v) \leq c_{2} \leq chiave_{2}(v) \leq ... \leq c_{k(v)} \leq chiave_{k(v)}(v) \leq c_{k(v) +1}$.
 
 Un nodo è _pieno_ se contiene esattamente $(2t-1)$ chiavi e _quasi vuoto_ se ne contiene $(t-1)$.
 
 ---------------------------------------------------------------