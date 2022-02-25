Un **Albero** (radicato) è una coppia $T = (N, A)$ costituita da un insieme $N$ di _nodi_ e da un insieme $A \subseteq N \times N$ di coppie di nodi, dette _archi_.<br />
In un albero, ogni nodo $v$ (tranne il nodo _radice_) ha un solo nodo _genitore_ (o _padre_) $u$ tale che $(u, v) \in A$.<br />
Un nodo $u$ può avere zero o più figli $v$ tali che $(u, v) \in A$, ed il  loro numero viene chiamato _grado_ del nodo.<br />
Un nodo senza figli viene chiamato nodo _foglia_, mentre nodi che non sono nè foglie nè radice sono chiamati _nodi interni_. La _profondità_ di un nodo è il numero di archi che bisogna attraversare per raggiungerlo, a partire dalla radice. L'_altezza_ di un albero è la massima profondità a cui si trova una foglia.<br />
I principali vincoli strutturali riguardano il grado dei nodi e la profondità. In particolare, un albero $d$-ario è un albero in cui tutti i nodi tranne le foglie hanno grado $d$.<br />
infine, un albero $d$-ario in cui tutte le foglie sono sullo stesso livello è _completo_.<br />

--------------------------------------------------------------