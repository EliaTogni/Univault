Una **Funzione Hash** è una funzione $h:U \rightarrow {0, ..., m-1}$, la quale trasforma chiavi in indici di una tavola.<br />
Si indicherà con il nome $tavola hash$ una tavola indicizzata tramite funzioni hash.<br />

Una funzione hash $h$ è **Perfetta** se è una [[Funzione Iniettiva]], cioè per ogni $u, v \in U, [u \neq v] \rightarrow [h(u) neq h(v)]$.<br />
Questo implica che, affinchè una funzione di hash sia perfetta, $|U| \leq m$.<br />

Se una funzione hash non è perfetta, allora esistono due o più chiavi diverse che hanno associato lo stesso indice.<br />
Se, nel [[Dizionario]], vengono a trovarsi simultaneamente chiavi con lo stesso valore della funzione hash, si ha una _collisione_.<br />

--------------------------------------------------------------

### Uniformità Semplice ###

Sia:
$$Q(i) = \sum_{k:h(k) = 1} P(k)$$

la probabilità che, scegliendo una chiave a caso, questa finisca nella cella $i$.<br />
Una funzione hash $h$ gode della proprietà di **Uniformità Semplice** se, per ciascun indice $i \in {0, ..., m-1}$, $Q(i) = \frac{1}{m}$.<br />
Usando una funzione di hash che gode dell'uniformità semplice, ogni cella ha la stessa probabilità di essere usata, cioè non ci sono fenomeni di _agglomerazione_, dove più chiavi tendono a collidere su alcune celle più che su altre.<br />

--------------------------------------------------------------

Un metodo semplice per definire una funzione di hash è il **Metodo della Divisione**: $h(k) = k\text{ }mod\text{ }m$.

--------------------------------------------------------------

### Risoluzione delle Collisioni ###

Per risolvere la problematica delle _collisioni_, cioè quando due diversi input producono lo stesso output tramite una funzione hash, esistono diverse tecniche:
- **Liste di collisione**: questo metodo consiste nell'associare ad ogni cella della tavola hash una lista di chiavi, detta _lista di collisione_ piuttosto che una singola chiave. In questo modo, se due chiavi collidono sulla stessa, verranno entrambe a trovarsi nella lista di collisione di quella cella.<br />Per verificare se una chiave $k$ è presente nel [[Dizionario]], si dovrà quindi cercarla nella lista di collisione della cella con indice $h(k)$.<br />Se si usa una funzione hash che gode dell'uniformità semplice, il tempo necessario per rispondere mediante ricerca sequenziale ad una operazione di ricerca sarà, in media, $T_{avg}(n, m) = O(1 + \frac{n}{m})$.<br />Usando le liste di collisione è possibile avere fattori di carico $\alpha > 1$ ed una stessa chiave può occorrere più volte nel dizionario.<br />
- **Indirizzamento Aperto**: la tecnica dell'_indirizzamento aperto_ mantiene tutte le chiavi nelle celle della tavola, per cui si ha $n \leq m$ ed $\alpha \leq 1$.<br />Si supponga di voler inserire una chiave $k$ e che la sua posizione originale $h(k)$ sia già occupata. L'indirizzamento aperto consiste nell'occupare un'altra cella vuota, anche se essa potrebbe spettare di diritto ad un altra chiave. Esistono diverse tecniche di indirizzamento aperto:
	- **Scansione Lineare**: $c(k, i) = (h(k) +i)\text{ }mod\text{ }m\quaf 0\leq i <m$.<br />Questa tencinca tende a far sì che si formino  degli agglomerati di celle piene sempre più lunghi. Intuitivamente, se un gruppo di celle consecutive è pieno, ogni chiave $k$ tale che $h(k)$ punta nel gruppo, verrà accodata alla fine del gruppo stesso, il quale si allungherà di $1$.<br />In effetti, più l'agglomerato diventa lungo, più è alta la probabilità che si allunghi ulteriormente. Nel caso di scansione lineare, si parla di _agglomerazione primaria_.<br />
	- **Scansione Quadratica**:$c(k, i) = \lfloor h(k) + c_{1}i + c_{2}i^{2} \rfloor\text{ }mod\text{ }m\quad 0 \leq i <m$.<br />Per $c_{1}$ e $c_{2}$ opportuni, con $m$ potenza di $2$, la sequenza $c(k, i)$ contiene tutti gli indici in $\{0, ..., m-1\}$, e quindi permette di scandire tutta la tavola. Nonostante la scansione quadratica distribuisca le chiavi in modo da evitare agglomerazione primaria, ogni coppia di chiavi $k_{1}$ e $k_{2}$, con $h(k_{1}) = h(k_{2})$, continua a generare la stessa sequenza di scansione. Questo dà luogo alla cosiddetta _agglomerazione secondaria_.<br />
	- **Hashing Doppio**: un metodo per eliminare virtualmente il fenomeno dell'agglomerazione è quello dell'hashing doppio. L'idea è quella di far dipendere dalla chiabe anche il passo di incremento dell'indice, usando una seconda funzione di hash:<br />$$c(k, i) = (h_{1}(k) + ih_{2}(k))\text{ }mod\text{ }m$$<br />dove $h_{1}$ e $h_{2}$ sono due funzioni hash distinte.<br />In questo modo, anche se due chiavi collidono, la sequenza di scansione sarà diversa.<br />Affinchè per una cerca chiave $k$ la sequenza $c(k, i)$ contenga tutti gli indici $\{0, ..., m-1\}$, è necessario che $m$ e $h_{2}(k)$ siano primi fra loro.<br />
	- **Cancellazione di Chiavi**: si supponga di voler cancellare una chiave da una tavola hash con indirizzamento aperto. Intuitivamente, si potrebbe pensare di marcare come _empty_ la cella dell'array contenente la chiave. Così facendo, purtroppo la ricerca potrebbe interrompersi prima di trovare l'elemento cercato per via di un buco creato da una cancellazione.<br />Una soluzione possibile è quella di marcare le celle che hanno subito cancellazioni con un valore speciale. L'inserimento considererà, quindi, una cella cancellata come se fosse vuota, fermandosi su di essa, mentre una ricerca la oltrepasserà.

--------------------------------------------------------------

### Analisi del Costo di Scansione ###

Sebbene, usando l'indirizzamento aperto, la scansione per la ricerca di un elemento o di una cella vuota possa richiedere tempo $O(n)$ nel caso peggiore, nel caso medio la situazione migliora:

![[CostoDiScansione.png]]

dove $\alpha = \frac{n}{m}$ è il fattore di carico della tavola.

--------------------------------------------------------------

Quando la tabella si sta riempiendo, l'hashing risulta essere meno efficinente. Si ricorre quindi al **Re-hashing**. Esso consiste nel trasferire tutti i dati di una tabella in una più grande, prendendo gli elementi, calcolando il nuovo indice e spostandoli nella nuova tabella. Questa risulta essere un'operazione molto costosa, che viene effettuata quando il fattore di carico $\alpha$ supera un certo indice deciso a priori.<br />

--------------------------------------------------------------