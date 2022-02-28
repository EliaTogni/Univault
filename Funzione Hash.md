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
	- **Scansione Lineare**:
	- **Scansione Quadratica**:
	- **Hashing Doppio**:
	- **Cancellazione di Chiavi**: