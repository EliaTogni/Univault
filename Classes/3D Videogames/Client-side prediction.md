# Introduzione
In questo approccio vengono mischiate [[Game-Status snapshots]] e [[Distributed physics]]. In particolare il client si occupa di ottenere i comandi dagli input locali e di mandarli al server e mentre aspetta una risposta computa l'evoluzione del sistema immaginando i comandi degli altri giocatori (spesso solo ripetendo l'ultimo comando).

Il server riceve i comandi da tutti i client e computa la vera evoluzione del gioco (server autoritativo, in questo modo si eliminano molte possibilità di cheat) e invia degli snapshot ai client.

I client una volta ricevuti gli snapshot dal server correggono la propria predizione solamente se necessario (se qualche altro giocatore ha fatto qualcosa di inaspettato).

# Correzione di una predizione
Quando uno snapshot raggiunge il client è vecchio di due volte il delivery time quindi deve tenere in memoria gli stati (e i propri controlli) passati per poter confrontare lo snapshot ricevuto con lo stato del momento corrispondente.
Inoltre, nel caso questi differiscano troppo, al client non basta renderizzare lo stato del server. Deve invece calcolare tutti gli stati successivi eseguendo solo gli step fisici e dell'ai (senza grafica, suono, particelle,effetti cosmetici,ecc. è molto più leggero) riutilizzando i controlli memorizzati fino ad arrivare al presente.

# Cosa causa gli errori
Le principali cause di errori di predizione sono:
- mancanza di determinismo -> solitamente si tratta comunque di piccole correzioni
- controlli non ricevuti in tempo dal server -> poco importante perchè lo riceverà allo step successivo, quinti in generale necessita piccole correzioni inoltre è poco comune
- non si era tenuto in conto l'azione di un altro giocatore -> ovviamente non si può leggere nella mente degli altri giocatori quinidi quest è la causa più comune di errori

In generale comunque nessuno di questi casi incide troppo sul gameplay e si limitano a causare piccoli glitch temporanei

# Ottimizzazioni
- *ridurre la dimensione dei pacchetti* (per poterne aumentare la frequenza) -> è possibile inviare solo stnapshot parziali basandosi sul concetto che alcune zone sono più facili da predire nel modo corretto quindi necessitano di meno aggiornamenti da parte del server. Devo comunque essere sicuro di aggiornare tutto ogni tanto
- *ridurre computazione* in caso di correzioni -> per esempio usando step fisici parziali in cui viene aggiornata solo la parte in cui è avvenuto un errore o usando dt più grandi
- *predire l'ignoto* -> anche se non abbiamo idea dei controlli degli altri giocatori possiamo fare delle predizioni se non altro ripetendo quello che hanno fatto all'ultimo frame (il che va bene nella maggior parte dei casi)
- *accettare piccoli errori* -> piccoli errori tendono a crescere esponenzialmente con il passare del tempo ma invece di correggerli ogni volta possiamo aspettare che abbiano raggiunto un threshold minimo
# Vantaggi di questo approccio
- latenza (quasi) zero perchè ill client si aggiorna subito in risposta agli input. Quando la predizione è corretta questo avviene senza problemi nel caso di una previsione sbagliata possono essere piccoli glitch.
- accettate anche situazioni non deterministiche
- cheating difficile perchè il server è autoritativo