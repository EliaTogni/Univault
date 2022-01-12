Il **Modello P-RAM** consiste di _p-processori_ con una memoria globale, condivisa da tutti. Ogni singolo processore $p_i$ è una RAM sequenziale, costituita da un'[[ALU]] e i suoi registri personali, che costituiscono la memoria privata del processore, indicati con $R[n]$.

![[placeholderPRAM]]

La memoria globale è usata dai processori per scambiarsi dati in tempo $O(1)$:
perchè il processore $k$ e il processore $j$ si scambino un valore, basta che il procesore $k$ scriva tale valore in una variabile condivisa e che il processore $j$ vi acceda in lettura.

Si possono specificare vari modelli P-RAM:
1) **EREW** (**Exclusive Read Exclusive Write**): non è amesso l'accesso contemporaneo da parte di più processori alla stessa locazione di memoria;
2) **CREW** (**Concurrent Read Exclusive Write**): l'accesso contemporaneo è permesso in lettura;
3) **CRCW** (**Concurrent Read Concurrent Write**): L'accesso contemporaneo è concesso sia in lettura sia in scrittura.

I tipi delle istruzioni possibili per il processore $p_{i}$ sono:
- operazioni aritmetico/logiche;
- istruzioni da/per la memoria centrale:
	- STORE $R[k]$ $M[n]$;
	- LOAD $R[k]$ $M[n]$.

