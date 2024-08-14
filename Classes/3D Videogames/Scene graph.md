# Introduzione
Invece di definire la posizione di ogni oggetto con una trasformazione che va dallo spazio locale a quello globale in un solo passaggio può essere comodo definire la scena in modo gerarchico: per esempio è più comodo definire la posizione di un cappello rispetto alla testa del personaggio che lo indossa invece che rispetto all'origine del mondo.
Per fare questo introduciamo lo scene graph: un albero in cui a ogni nodo corrisponde l'istanza di ogni oggetto che abbia una posizione nel mondo (la radice è lo spazio locale del mondo) e a ogni ramo la trasformazione per passare dallo spazio locale dell'oggetto figlio a quello dell'oggetto padre.
In questo modo cambiando la trasformazione associata a un nodo possiamo cambiare la posizione dell'intero sotto-albero automaticamente.

# Da trasformazione locale a globale
Per ottenere la trasformazione globale di un oggetto pasta semplicemente ripercorrere l'albero partendo dal nodo corrispondente e componendo una a una le trasformazioni che troviamo sui rami fino a che non raggiungiamo la radice.
#TODO aggiungere immagine pagina 10

Se volessimo applicare la trasformazione T nello spazio locale del nodo L ci basterebbe cambiare la trasformazione $T_L \leftarrow T_l \circ T$.
Se invece volessimo applicare la trasformazione T nello spazio globale (ma solo all'oggetto T dovremmo prima calcolare la trasformazione globale di L $T_{Lglob} = T_B \circ T_E \circ T_L$ a cui poi possiamo applicare la trasformazione T, quindi $T_{Lglob} \leftarrow T \circ T_B \circ T_E \circ T_L$ e poi trasportare questa trasformazione nello spazio locale di L $T_L \leftarrow (T_E)^{-1} \circ (T_B)^{-1}\circ T \circ T_B \circ T_E \circ T_L$

# Cambio di ramo senza cambiare posizione
Immaginiamo che nell'esempio precedente il nodo L si stacchi dal genitore e diventi figlio del nodo G senza che la sua posizione cambi. Come bisogna cambiare la trasformazione locale $T_L$? 
Prima di tutto calcoliamo la trasformazione globale del nodo L prima del cambio:
$T_B \circ T_E \circ T_L$
Dopodichè calcoliamo la trasformazione globale del nodo L dopo il cambio:
$T_C \circ T_G \circ T'_L$ 
Siccome queste devono essere uguali, questo equivale a dire che:
$T'_L = T_G^{-1} \circ T_C^{-1} \circ T_B \circ T_E \circ T_L$

# Trasformazioni importanti
Il motore di rendering usa alcune trasformazioni standard quando deve renderizzare un oggetto:
- model matrix
- view matrix
- model-view matrix

Queste vengono chiamate matrici perché solitamente nei motori di rendering e nelle api grafiche le trasformazioni vengono codificate come matrici 4x4.
## View matrix
La trasformazione associata alla camera (che come gli altri oggetti si trova in un nodo dello scene graph) è particolarmente importante visto che la sua inversa, anche chiamata View transform, è quella che va dal view space in cui la camera è posizionata nell'origine e punta verso l'asse Z (-Z in alcuni sistemi) allo spazio globale -> importante in fase di rendering perché in questa fase viene utilizzato il view space, in quanto le coordinate descrivono dove si trovano gli oggetti rispetto alla posizione della camera (per esempio se z<0 vuol dire che l'oggetto è dietro la camera quinti non va renderizzato).
Con questo sistema è semplice animare la camera: basta muoverla cambiando la sua trasformazione globale (o di uno dei genitori).
## Model matrix
È la trasformazione da object space a world space, utile per vedere come la scena è modellata

## Model-View matrix
È la trasformazione da object space a view space, utile per capire dove un oggetto verrà visualizzato nel campo visivo dalla camera.

# Creazione 3D scene
Due tipi di artisti:
- 3D modellers -> creano le scene props (i modelli 3D completi di texture ecc.)
- sceners -> usano le props per creare lo scene graph

Non esiste un solo standard per che data structure usare per lo scene graph e ogni libreria usa la sua soluzione ma alcuni concetti sono condivisi:
- ogni classe nodo contiene una trasformazione locale, un link al genitore (e a volte a figli e fratelli)
- le trasformazioni globali e inverse sono calcolate sul momento
- esistono meccanismi per sotto-alberi ripetuti (prefab di unity)
- multi-instancing: ogni nodo contiene una puntatore a un oggetto 3D, ma lo stesso oggetto può essere puntato da diversi nodi: così ogni istanza dello stesso oggetto può apparire in vari posti(avere associate transform diverse), con diversi materiali ma senza occupare ram inutile per copie del modello.