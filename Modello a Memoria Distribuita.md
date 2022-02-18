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

--------------------------------------------------------------

### Caratteristiche ###

Tra le caratteristiche più peculiari dei modelli a memoria distribuita, spicca sicuramente la struttura dei processori. Essi non sono altro che RAM sequenziali con degli elementi di calcolo (istruzioni necessarie per il calcolo e una memoria privata) e con dei router (istruzioni necessarie alla comunicazione _Send_/_Receive_).<br />

Non solo l'elaborazione, inoltre avviene in parallelo bensì anche la comunicazione.<br />
Se, ad esempio, $k$ processori desiderano comunicare con il processore $p$, essi sono in grado di farlo tramite delle _Send_ parallele.<br />

![[SendParallelo.png]]

Ma il processore $p$, lavorando sequenzialmente, deve richiedere $k$ _Receive_. Sono quindi necessari $k+1$ passi per la comunicazione.<br />

Un'altra caratteristica fondamentale riguarda i collegamenti tra processori, i quali sono _Full-Duplex_. Di conseguenza sarà possibile considerare gli archi del grafo G come non orientati.<br />

![[FullDuplexDistribuito.png]]


