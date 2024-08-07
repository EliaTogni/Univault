# Albero Binario #
Un **Albero Binario** è una [[Struttura Dati]] derivata da un [[Albero]], la cui peculiarità è la possibilità di avere un massimo di $2$ nodi figli.<br />

------------------------------------------------------------

### Rappresentazione Tabellare di un Albero Binario ###
La rappresentazione dell'albero sotto forma di tabella avviene, innanzitutto, etichettando ogni nodo dell'albero con un numero crescente, partendo dalla radice. Poi, si utilizza una tabella in cui ogni riga è dedicata ad un nodo.<br />
Infine, le informazioni scritte su ognuna di queste righe sono il figlio sinistro, il figlio destro ed il nodo padre del nodo in questione.<br />
Quando un nodo non ha un determinato figlio, quindi è un nodo foglia, o, nel caso del nodo radice, non ha un nodo padre, questa situazione si codifica tramite il numero $0$.<br />

------------------------------------------------------------

### Albero Binario di Ricerca ###
Un **Albero Binario di Ricerca** è un albero binario che soddisfa le seguenti proprietà:
- ogni nodo $v$ contiene un elemento $elem(v)$ cui è associata una chiave $chiave(v)$ presa da un dominio totalmente ordinato;
- le chiavi nel sottoalbero sinistro di $v$ sono $\leq chiave(v)$;
- le chiavi nel sottoalbero destro di $v$ sono $\geq chiave(v)$.

Le chiavi possono essere valori di qualunque tipo, purchè su di esse sia definita una relazione di ordine totale. Se l'albero binario viene visitato in ordine simmetrico, si ottengono le chiavi in ordine non decrescente.<br />
Un albero binario di ricerca di altezza $h$ è in grado di supportare operazioni _search_, _insert_ e _delete_ in tempo $O(h)$.<br />

------------------------------------------------------------