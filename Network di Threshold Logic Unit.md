Un **Network di Threshold Logic Unit** è la combinazione d numerose [[Threshold Logic Unit]] in seriale ed in parallelo.

Si consideri il problema di rappresentazione della coimplicazione tramite TLU.
Possiamo esprimere $x_{1} \leftrightarrow x_{2}$ tramite l'equivalenza logica
$$x_{1} \leftrightarrow x_{2} \equiv (x_{1} \rightarrow x_{2} )  \wedge ( x_{1} \leftarrow x_{2}) $$ 

la quale divide la coimplicazione in tre funzioni. Sappiamo che la congiunizone di due variabili Booleane è linearmente separabile. Come conseguenza, dobbiamo semplicemente connettere le corrispondenti TLU. In questo modo, si ottiene un network con due strati corrispondenti alla struttura innestata dell'espressione logica.

![[Network of TLU.png]]

Intuitivamente, le due TLU sulla sinistra calcolano le nuove coordinate Booleane $y_{1}$ e $y_{2}$ così che il vettore di input della seconda TLU diventi linearmente separabile.

![[Geometric interpretation of network of TLU.png]]

Può essere dimostrato che tutte le funzioni Booleane con un numero arbitrario di input possono essere calcolate tramite Network di Threhold Logic Unit, semplicemente sfruttando le equivalenze logiche e dividendo queste funzioni in modo tale che le occorrenti sotto - funzioni siano linearmente separabili.