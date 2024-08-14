# Introduzione
Come abbiamo visto all'interno di un videogioco tutto e' rappresentato come insieme di **punti**, **vettori** e **versori**. Un oggetto ha pero uno spazio locale e deve essere trasferito in uno spazio globale (spazio in game). Per farlo serve una **trasformazione spaziale** che viene applicata a tutti i punti, vettori e versori del modello. Una trasformazione spaziale e' una funzione che prende come input un punto, un vettore o un versore e come output restituisce lo stesso tipo ricevuto in input ma spostato nello spazio. In questo modo lo stesso modello puo' essere copiato in game piu volte con proporzioni e posizioni diverse (e soprattutto diverse da quelle originali).
#TODO aggiungere immagine di corrispondenza tra spazio locale e spazio globale.
Ogni oggetto nello spazio di gioco ha quindi un modello di riferimento e una trasformazione che va dallo spazio dell'oggetto allo spazio in game.

# Modellare e memorizzare trasformazioni
Esistono varie possibili risposte a questa domanda e dipendono spesso dal settore in cui devono essere applicate.

In generale vorremmo che le trasformazioni siano:
- **compatte** da memorizzare
- **veloci** da applicare
- semplici da **comporre** e che generino risultati **accurati**
- facili da **invertire**
- facili da **interpolare**
- **intuitive** da definire

## Trasformazioni affini
Sono spesso usate in computer graphics e sono una matrice 4x4. Queste trasformazioni non sono altro che una ridefinizione dello spazio di riferimento e quindi possono essere create scegliendo una nuova origine e un nuovo set di 3 assi (3 vettori). Una volta definita posso applicarla a un qualsiasi oggetto reinterpretando le loro coordinate all'interno del nuovo spazio di riferimento.
#todo aggiungere foto del pesce nel piano cartesiano

### Trasformazione punto
Immaginiamo di voler trasformare il punto $a = \begin{bmatrix} a_x \\ a_y \\ a_z \end{bmatrix}$ nel nuovo spazio definito dal punto di origine $p$ e dai tre assi $\vec{x}, \vec{y}, \vec{z}$ 
il nuovo punto $a'$ e' definito come $a' = p + a_x \vec{x} + a_y \vec{y} + a_z \vec{z}$ 

### Trasformazione vettore
La trasformazione di un vettore $\vec{v} = \begin{bmatrix} v_x \\ v_y \\ v_z \end{bmatrix}$ nello spazio definito dalla nuova origine $p$ e dai nuovi assi $\vec{x},\vec{y},\vec{z}$  e' definita come:
$$\vec{v} = v_x\vec{x} + v_y \vec{y} + v_z \vec{z}$$
da notare che questa e' molto simile alla trasformazione dei punti con la differenza che non avendo un punto di applicazione non viene sommata l'origine.

### Rappresentazione e operazioni
Grazie alle [[operazioni tra matrici]] possiamo riscrivere le precedenti formule come moltiplicazioni tra matrice e il vettore  (nel caso di punti viene usata la rappresentazione del punto come vettore) 
Le formule sono leggermente differenti, bisogna percio introdurre una convenzione per permettere di distinguere tra punti e vettori (o versori). La soluzione scelta e' quella di aggiungere un elemento all'array con valore $0$ se si tratta di un vettore (o versore) e $1$ se si tratta invece di un punto.
$$p = \begin{bmatrix} p_x \\ p_y \\ p_z \\ 1\end{bmatrix} \quad \vec{v} = \begin{bmatrix} v_x \\ v_y \\ v_z\\ 0 \end{bmatrix}$$
di conseguenza la matrice della trasformazione sui nuovi assi $\vec{x},\vec{y},\vec{z}$ e con origine $p$ e' rappresentata come:
$$
M = 
\begin{bmatrix}
x_x & y_x & z_x & p_x\\
x_y & y_y & z_y & p_y\\
x_z & y_z & z_z & p_z\\
0   & 0   & 0   & 1\\
\end{bmatrix}
$$
In questo modo per applicare la matrice basta prendere il vettore rappresentante l'elemento da traslare, aggiungere come quarto elemento uno 0 nel caso si tratti di un vettore (o un versore) o un 1 nel caso si tratti di un punto (in questo modo si ottengono le **homogeneous coordinates** del punto/vettore) e infine calcolare $M\times\vec{h}$

### Considerazioni
Questo tipo di trasformazioni permette di:
- applicare tutti i tipi di **isometria**:
	- Ruotare
	- Traslare
- applicare tutti i tipi di **similitudini**:
	- Scalare
	- Shearing
e le combinazioni di queste trasformazioni.
E' una soluzione intuitiva e elegante ma nel caso dei videogiochi non e' la rappresentazione migliore:
- occupano 16 numeri -> non sono **compatte**
- sono abbastanza veloci da applicare ma non assicurano che i versori rimangano tali (possono essere allungati in vettori)
- sono terribili da comporre: il prodotto matrice x matrice sono circa 128 operazioni
- non sono velocissime nemmeno da invertire
- si possono interpolare facilmente ma i risultati non sono affidabili: per esempio l'interpolazione di due corpi rigidi non e' per forza un corpo rigido
- sono abbastanza intuitive da definire ma bisogna specificare tutti gli assi
da notare che inoltre ci portiamo dietro una serie di operazioni che non sono per forza necessarie: per esempio la possibilita di eseguire shearing non serve in un gioco.

## Separazione dei componenti
come visto l'approccio delle trasformazioni affini non e' il massimo nell'ambito dei videogiochi. Un altro approccio consiste nel tenere separate le varie componenti della traslazione, ovvero:
- rotazione
- traslazione
- scalatura (solo uniforme)
Da notare che non viene inserita la possibilita di deformare l'oggetto perche' non e' molto utile nel nostro caso e aiuta a risparmiare spazio

La traslazione viene facilmente rappresentata come un punto (ovvero il punto della nuova origine), la scalatura uniforme puo essere salvata come un valore che indica il fattore di scalatura. Per le rotazioni e' un po' piu complesso. Alcuni game engine come unity e unreal implementano la scalatura non uniforme, in questo caso il fattore di scalatura e' un vettore di tre valori che indica il fattore di scalatura per ogni asse.

Possiamo notare che non tutte queste operazioni si applicano a tutti gli oggetti:

|         | rotate | scale | translate |
| ------- | ------ | ----- | --------- |
| points  | <mark style="background: #BBFABBA6;">yes</mark>    | <mark style="background: #BBFABBA6;">yes</mark>   | <mark style="background: #BBFABBA6;">yes</mark>       |
| vectors | <mark style="background: #BBFABBA6;">yes</mark>    | <mark style="background: #BBFABBA6;">yes</mark>   | <mark style="background: #FF5582A6;">no</mark>        |
| versors | <mark style="background: #BBFABBA6;">yes</mark>    | <mark style="background: #FF5582A6;">no</mark>    | <mark style="background: #FF5582A6;">no</mark>          |

#### Applicazione
#TODO aggiungere la parte di matematica dell'applicazione delle trasformzioni
#### Inversione
#TODO aggiungere la parte di matematica dell'inversione delle trasformazioni