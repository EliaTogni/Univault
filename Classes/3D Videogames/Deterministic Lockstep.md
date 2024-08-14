# Peer to peer
#TODO immagine rete peer to peer
In questa versione del deterministic lockstep l'evoluzione del gioco viene modellata come una sequenza di "turni" (per esempio step fisici con dt fisso).
Ogni nodo manda i propri controlli (input) a ogni altro nodo e dopo aver ricevuto i controlli di tutti gli altri ogni nodo computa indipendentemente la propria evoluzione del sistema.
Per fare ciò è richiesto che il sistema sia deterministico e che quindi dati gli stessi input si ottengano gli stessi output, altrimenti ogni computer avrebbe una diversa evoluzione dello stato di gioco.

## Pro
- semplice da implementare
- poca banda richiesta
- cheat limitati (principalmente solo aim-bots e x-ray)
- funziona bene con AI, replay, recording,...
- può utilizzare TCP (visto che abbiamo comunque bisogno di 0% packet loss)
## Contro
- delay uguale a delivery time anche in locale
- non scala bene con il numero di giocatori
- il delivery time dipende dal nodo più lento della rete
- difficile unirsi a giochi già avviati
- presuppone completo determinismo

Il problema di quest'ultimo punto è quello più grande: sebbene possiamo comunque usare numeri pseudo-randomici (basta accordare un seed e sono riproducibili) ma bisogna stare attenti
- alla fisica in quanto i time step variabili o l'ordine di processing delle particelle e dei constraints può aggiungere randomicità al risultato finale.
- a qualsiasi cosa dipenda dal clock
- alle GPU in quanto diversi architetture di GPU possono dare risultati leggermente diversi sulle stesse computazioni
- alle operazioni con floating pont (ma possiamo usare i fixed point senza problemi)
- al fatto che se qualcosa è uguale al 99% non è comunque abbastanza perchè la simulazione in game per quanto semplificata è abbastanza complessa per il butterfly effect.
# Client-Server
#TODO aggiungere immagine client server
In questa variante del deterministic lockstep ogni client manda i controlli a un server, il quale prende tutti i controlli e li manda agli altri client.
Il vantaggio di questo approccio è che il numero di pacchetti scala in modo lineare e non più quadratico al crescere dei nodi.
In questo modo risolviamo il problema della scalabilità ma peggioriamo quello della latenza in quanto i pacchetti impiegano il doppio del tempo a fare il giro.
Un altro vantaggio è che il server è autoritativo, quindi nel caso di perdita di pacchetti da un nodo non devo stare ad aspettare la ritrasmissione ma il server può generare dei comandi sostitutivi (spesso ripetendo l'ultimo comando ricevuto). In questo modo la perdita dei pacchetti di un giocatore non intacca l'esperienza di gioco degli altri.