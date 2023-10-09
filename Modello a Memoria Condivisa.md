Nel **Modello a Memoria Condivisa**, tutti i processori possono accedere, attraverso un'unità di accesso, alle stesse locazioni di memoria nella stessa unità di tempo.

![[Images/MemoriaCondivisa.png]]

Il meccanismo di comunicazione tra due processori $P_{k}$ e $P_{j}$ è molto semplice:
1) $P_{k}$ scrive il messaggio in un'area di memoria;
2) $P_{j}$ legge il messaggio dalla stessa area.

I processori non sono direttamente connessi e la comunicazione avviene in tempo costante $O(1)$. E' difficile realizzare un tale modello con un adeguato numero di processori. Tuttavia, è interessante riferirsi a questo modello di calcolo parallelo perchè, trascurando i tempi di comunicazione, esso permette all'utente di porre l'attenzione sul potenziale parallelismo disponibile nella ricerca di soluzioni efficienti ad un dato problema.

Una proprietà non visibile di questo modello è la presenza di un clock centrale.

--------------------------------------------------------------