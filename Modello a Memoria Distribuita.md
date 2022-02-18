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

Dal punto di vista di Input ed Output, la mancanza di memoria condivisa modifica significativamente la struttura:
- l'input è ora distribuito tra i processori;
- l'output viene invece o restituito da un processore dedicato o si legge secondo un certo ordine tra i vari processori considerati.

Le risorse di calcolo sono le stesse del [[Modello a Memoria Condivisa]], il numero di processori ed il tempo.<br />
Può essere che il numero di processori sia pari alla lunghezza dell'input ma esistono tecniche per abbassarne il numero.<br />
Il tempo di calcolo, invece, considera non solo il tempo di esecuzione ma anche il tempo necessario alla comunicazione tra processori.<br />

--------------------------------------------------------------

Si definiscono i seguenti **Parametri di Rete**.<br />
Data l'architettura $G = (V, E)$, si definisce:
1) il **Grado** di $G$, cioè $\gamma = Max\Big\{\rho(v) | v \in V \Big\}$, dove $\rho(v)$ è il numero di archi incidenti su $v$. Più $\gamma$ è alto, più archi ci sono e quindi è permessa un'ottima comunicazione a discapito della facilità di realizzazione da un punto di vista fisico.br />
2) Il **Diametro** di $G$, cioè $\delta = Max\Big\{d(v, w) | v \neq w \in V \Big\}$, dove $d(v, w)$ è la distanza minima tra $v$ e $w$. E' chiaro che bassi valori di $\delta$ siano da preferire ma il trade-off per questi valori bassi è un aumento del parametro $\gamma$.
3) L' **Ampiezza di Bisezione** di $G$, cioè $\beta$, il minimo numero di archi in $G$ che, tolti, dividoni i nodi in circa due metà. Questo parametro rappresenta la capacità di trasferire le informazioni in $G$. Si preferisce un valore basso di $\beta$ ma, anche in questo caso, comporta un aumento di $\gamma$.

--------------------------------------------------------------

### Problemi Tipici ###

Tipici problemi su queste architetture sono:
- **MAX**, nel quale è richiesta la comunicazione a coppie di processori (quindi si cerca di avere un valore di $\delta$ minore possibile, in modo da abbattere il tempo di comunicazione tra processori);
- **ORDINAMENTO**, nel quale si richiede lo spostamento di parti dell'input (quindi si cerca di avere un valore di $\beta$alto possibile, in modo da avere una soluzione più efficiente).

Valgono i seguenti limiti inferiori per i tempi di soluzione di questi due problemi:
1) Il tempo richiesto per risolvere MAX in $G$ è almeno $\delta$;
2) Il tempo richiesto per risolvere ORDINAMENTO in $G$ è almeno $\frac{n}{2} \cdot \frac{1}{\beta}}$;

La dimostrazione del primo lower bound è, banalmente, legata al fatto che ogni coppia di processori deve comunicare e, quindi, entra in gioco la distanza.<br />
La dimostrazione del secondo lower bound si basa si può vedere nella rappresentazione sottostante:

![[DimostrazioneORDINAMENTO.png]]

Si supponga che in una metà siano presenti, tra i$\frac{n}{2}$ numeri distribuiti tra i processori in quella metà, solamente i numeri più alti (i quali dovrebbero stare nella seconda metà).<br />
Allo stesso modo, supponiamo che i rimanenti numeri siano nella restante metà.<br />
Gli elementi si devono, allora, invertire, cioè passare da una metà all'altra.<br />
Le connessioni sono sì Full-Duplex ma i numeri passano da una metà all'altra tramite gli archi in figura, che sono $\beta$.<br />
Quanti trasferimenti sono necessari affinchè tutti i numeri si trovino nella metà corretta, sapendo di poterli trasferire a gruppi di $\beta$?
Questo genera il lower bound osservato prima.<br />

![[LowerBoundMemDistribuita.png]]

--------------------------------------------------------------

Risulta evidente che la topologia della rete impatta in maniera influente sul tempo parallelo dell'esecuzione degli algoritmi in quanto questo parametro è composto anche dal tempo di comunicazione tra processori.<br />

Per affrontare i problemi precedentemente citati, si introducono ora i **Confrontatori** e le loro **Primitive**.

![[Comparatori.png]]

Si supponga che sul filo superiore viaggi il dato $x$ e sul filo inferiore viaggi il dato $y$. Un comparatore o **Confrontatore**, viene rappresentato come una linea verticale e agisce in questo modo: sul filo superiore fa passare il minimo tra $x$ e $y$ mentre fa passare il massimo tra i due sul filo inferiore.<br />
Esiste anche il comparatore opposto, rappresentato con un filo e due cerchi vuoti.<br />
Questa operazione può essere descritta da queste istruzioni:<br />

*) $if(A[i]>A[j]) then Swap(A[i], A[j])$<br />

\*\*)$if(A[i]<A[j] then Swap(A[i], A[j])$<br />

con $i<j$.<br />

Ovviamente è possibile avere delle reti di comparatori e, se questi comparatori sono distribuiti in un certo modo, si hanno delle **Sorting Network**.

![[ReteConfrontatori.png]]

--------------------------------------------------------------

### Algoritmo BubbleSort  con Sorting Network ###

Ecco una versione dell'algoritmo [[BubbleSort]] riproposta utilizzando le Sorting Network.

![[BubbleSortSN.png]]

