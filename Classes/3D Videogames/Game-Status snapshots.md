# Introduzione
#TODO aggiungere foto del paradigma
L'idea di questo tipo di approccio è di far calcolare al server l'evoluzione del sistema (anche della fisica) e, una volta calcolato lo stato attuale, di passarne uno snapshot ai client. Questi ultimi si occupano di renderizzare lo stato ricevuto, di gestire gli input, ui, suoni e la parte di fisica legata agli effetti che non impattano il gameplay ma sono solo di bellezza.
## Pro
- ci si libera del determinismo obbligato presente nel [[Deterministic Lockstep]]
- diventa semplice unirsi a giochi già iniziati
- i pacchetti persi sono un problema del giocatore che li perde -> si può usare udp per avere minor delay
## Contro
- i pacchetti inviati ai client diventano molto più grossi e diventa necessario trovare delle ottimizzazioni come comprimere lo stato o mandare solo le porzioni dello stato che sono cambiate o che interessano il giocatore
- la latenza dalla ricezione dell'input all'effetto in game è uguale al delivery time
- la latenza dalla ricezione dell'input alla visualizzazione del frame è 2 volte il delivery time
- vista la dimensione dei pacchetti ogni fps della simulazione fisica costa caro

# Snapshot con interpolazione
Per avere maggiori fps una soluzione è far memorizzare al client gli ultimi due snapshot e interpolare tra l'ultimo ricevuto e quello precedente in modo da ottenere frame intermedi. 
In questo modo si guadagna in fluidità ma si perde in responsività in quanto il client si trova ancora più indietro di prima rispetto al server.

# Snapshot con estrapolazione
Una seconda soluzione è quella di estrapolare dagli ultimi due snapshot il prossimo.
In questo modo si mantiene la stessa responsività e si aumenta la fluidità ma si perde in accuratezza: infatti accadrà spesso che l'estrapolazione non sia corrispondente al vero frame successivo causando glitches.