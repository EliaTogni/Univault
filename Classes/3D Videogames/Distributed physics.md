# Introduzione
L'idea in questa implementazione è che ogni client si occupi dell'evoluzione del gioco fisica inclusa, comunichi (P2P o tramite un server) con gli altri snapshot ridotti (solo quelli che riguardano il proprio giocatore) dello stato attuale e unisca gli stati ricevuti dagli altri computer per aggiornare il proprio stato di conseguenza.
In questo modo la latenza è zero perchè il gioco risponde immediatamente ai controlli del giocatore locale.

Un problema con questo approccio è che siamo ancora obbligati ad avere il determinismo perchè ogni giocatore tiene traccia delle proprie azioni ma nessuno tiene traccia degli NPC. Questo è però risolvibile se, in una rete client-server, il server si occupa del calcolo della fisica degli NPC.

Più difficile da risolvere è invece il problema dei cheat: siccome ogni client elabora il proprio stato gli altri non hanno modo di sapere se quest'ultimo sta barando o no.