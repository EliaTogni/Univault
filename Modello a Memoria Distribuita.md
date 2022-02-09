Nei **Modelli a Memoria Distribuita**, ogni processore può accedere solo alla sua memoria privata (locale).
![[Memoria Distribuita.png]]

La comunicazione avviene qui attraverso l'invio di messaggi attraverso una rete di interconnessione, la quale può essere descritta da un [[Grafo]], i cui vertici sono i processori e i lati rappresentano collegamenti diretti tra processori.<br />
Poichè in tali reti non tutti i processori sono collegati direttamente, non è possibile ipotizzare tempi di comunicazione costanti.

Una proprietà non visibile di questo modello è la presenza di un clock centrale.

La comunicazione dipende dalla "distanza" tra i processori: se $p_{j}$ vuole comunicare con $p_{i}$, è necessario chiedersi quanti processori collegano $p_{j}$ a $p_{i}$.

E' bene non confondere questo modello con le architetture distribuite.

La rete di interconnessione è fissa e può essere strutturata come:
- array lineare;
- mesh;
- ipercubo.