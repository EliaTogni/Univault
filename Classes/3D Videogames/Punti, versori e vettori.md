# Introduzione
I tipi di dati basilari della programmazione di videogiochi 3D sono **Punti**, **Versori** e **Vettori**.
Un punto rappresenta una posizione. Un vettore rappresenta una distanza come per esempio il segmento che connette due punti nello spazio. Un versore rappresenta invece una direzione: e' come un vettore ma di lunghezza unitaria. Per fare un esempio nella rappresentazione grafica di un triangolo i vertici possono essere rappresentati come dei punti, il lato come un vettore e la normale del triangolo come un versore.
A livello di engine questi elementi sono spesso (ma non sempre) rappresentati in un unico modo ovvero:
```c#
class Vector3{
	//alternativamente si puo usare un array con tre elementi
	float x, y, z; 
}
```
Nonostante cio e' importante non confondere tra loro elementi semanticamente distinti allo stesso modo in cui si fa distinzione tra variabili che condividono il tipo float ma che indicano concetti diversi come temperatura e lunghezza. 
Alcuni engine distingono invece creando classi diverse per punti, vettori e versori, in questo modo la correttezza delle operazioni tra queste classi viene controllata in modo automatico invece di lasciare il compito al programmatore.

# Operazioni tra punti vettori e versori
- differenza tra punti: punto - punto = vettore #TODO mettere immagine
- addizione tra punti: punto + vettore = punto #TODO mettere immagine
- operazioni lineari tra vettori:
	- addizione: vettore + vettore = vettore
	- prodotto con scalare: vettore * scalare = vettore
	- opposto: $vettore * -1$
	- differenza: vettore - vettore = vettore
	- norma: distanza euclidea tra il punto di inizio e di fine del vettore
	- normalizzazione: restituisce il versore nella stessa direzione del vettore ma con norma unitaria. $vettore/|x|$
	- [[prodotto scalare|prodotto scalare o dot product]]
	- [[prodotto vettoriale|prodotto vettoriale o cross product]]
- [[interpolazione]] tra coppie di oggetti (vettori, punti o versori)

