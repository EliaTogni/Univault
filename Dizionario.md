# Dizionario
Un **Dizionario** è una collezione di elementi a cui sono associate chiavi prese da un dominio totalmente ordinato.<br />
Operazioni tipiche su un dizionario sono _inserimento_, _cancellazione_ e _ricerca_.<br />

--------------------------------------------------------------

Si supponga di voler realizzare un'implementazione efficiente della [[Struttura Dati |struttura dati]] Dizionario, sapendo che le chiavi associate agli $n$ elementi che si vogliono memorizzare sono interi appartenenti all'intervallo $[0, m-1]$, con $n \leq m$.<br />
Si assuma che agli elementi nel dizionario siano associate chiavi distinte. Una tecnica semplicissima consiste nel mantenere un array $v$ di dimensione $m$ tale che se è presente un elemento $elem$ con chiave $k$ nel dizionario, allora $v[k] = elem$.<br />

--------------------------------------------------------------

## Fattore di carico
Il **Fattore di carico** è il rapporto $a = \frac{n}{m}$ tra il numero $n$ di elementi memorizzati nella tavola e la sua dimensione $m$.<br />

--------------------------------------------------------------

Sia $U$ l'universo delle chiavi associabili agli elementi nel dizionario. Si è osservato il caso in cui l'universo $U = {0, ..., m-1}$. Si può associare un approccio simile se $U$ non contiene interi in $[0, m-1]$.<br />

--------------------------------------------------------------



