Il **Modello P-RAM** consiste di _p-processori_ con una memoria globale, condivisa da tutti. Ogni singolo processore $p_i$ è una RAM sequenziale, costituita da un'[[ALU]] e dai suoi registri personali, che costituiscono la memoria privata del processore, indicati con $R[n]$.

![[ModelloPRAM.png]]

La memoria globale è usata dai processori per scambiarsi dati in tempo $O(1)$. <br />
Affinchè il processore $k$ e il processore $j$ si scambino un valore, basta che il procesore $k$ scriva tale valore in una variabile condivisa e che il processore $j$ vi acceda in lettura.

Si possono specificare vari modelli P-RAM:
1) **EREW** (**Exclusive Read Exclusive Write**): non è amesso l'accesso contemporaneo da parte di più processori alla stessa locazione di memoria;
2) **CREW** (**Concurrent Read Exclusive Write**): l'accesso contemporaneo è permesso in lettura;
3) **CRCW** (**Concurrent Read Concurrent Write**): L'accesso contemporaneo è concesso sia in lettura sia in scrittura.

Per la scrittura simultanea si può scegliere tra diverse politiche:
- **Common**: i processori possono scrivere solo lo stesso dato, pena l'arresto del sistema;
- **Random**: si sceglie un $p_{i}$ a caso;
- **MAX/min**: vince il $p_{i}$ con il dato MAX/min;
- **Priority**: vince il $p_{i}$ con priorità maggiore.

I tipi di istruzioni possibili per il processore $p_{i}$ sono:
- operazioni aritmetico/logiche;
- istruzioni da/per la memoria centrale:
	- STORE $R[k]$ $M[n]$;
	- LOAD $R[k]$ $M[n]$.

Si opera solamente sui dati nelle memorie private e non su quelli nella memoria centrale.<br />
Un programma nella P-RAM può risiedere sia nella memoria centrale che in quella privata dei processori. Esiste però un unico programma per tutti i processori ed essi caricano le istruzioni una dopo l'altra.
Ad ogni ciclo di clock (condiviso), i processori caricano un' istruzione del programma ed ogni $p_{i}$ esegue (quasi) la stessa istruzione.

--------------------------------------------------------------