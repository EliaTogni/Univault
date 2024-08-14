Il calcolo dell'illuminazione in un videogioco serve per ottenere il colore finale di un oggetto cosi come visto da un osservatore. É l'output della valutazione di una *lighting equation*, che come si puo facilmente intuire é una scelta importante in quanto influisce non solo sul look del videogioco ma anche sulle sue performance.

Esistono infatti vari modelli ognuno dei quali ha vari livelli di complessità computazionale, realismo, parametri richiesti per definire un materiale, ...

>[!warning]
> La definizione di materiale é ambigua, infatti:
> - *In Computer Graphics* material model indica un set di parametri che descrivono il comportamento di una sostanza fisica ed é parte dell'input dell'equazione della luce
> - *in un  game engine* material asset indica un asset che include textures,shaders, parametri per l'equazione luminosa, flag per il rendering. In pratica codifica tutto lo stato del rendering engine  quando una mesh viene disegnata. Include anche bump-maps e il set di shader per computare la luce.

I parametri del material model possono essere memorizzati:
- come parametri globali
- come attributi dei vertici di una mesh
- come valori di Texel di una texture

Nel primo caso i valori sono uniformi per tutto il modello, mentre negli altri abbiamo possibilità di avere mesh con valori variabili a seconda della posizione. In particolare memorizzando i valori come Texel abbiamo una maggiore libertà e livello di dettaglio.
Inoltre scegliendo uno di questi metodi per un parametro non siamo vincolati a sceglierlo anche per tutti gli altri ma possiamo fare scelte diverse per ogni materiale separatamente.

Il materiale deve rappresentare le caratteristiche:
- fisiche della sostanza di cui l'oggetto è costituito. Per esempio se assorbe o fa rimbalzare i fotoni, il colore o se il materiale è metallico
- della microstruttura della superficie. Per esempio se è levigato (shiny) o ruvido (opaco), se è bagnato (shiny), ecc

# Phong
É una delle prime e piu basilari equazioni per la luce. É formata dalla somma di quattro fattori (tre nelle versioni semplificate):
- ambient
- diffuse
- specular
- glow (sempre 0 se il materiale non si illumina)
## Diffuse (o Lambertian) term
$$(\hat{n}\cdot\hat{L}) \begin{pmatrix}d_H\\d_G\\d_B\end{pmatrix}\otimes \begin{pmatrix} L_R\\L_G\\L_B\end{pmatrix}$$
dove:
- $\otimes$ è il prodotto per componenti
- $\hat L$ è la direzione della luce
- $\hat n$ è la normale della superficie
- il primo vettore è il diffuse color (un parametro del materiale). Nei materiali non uniformi viene usata una texture chiamata diffuse-map (o color-map o RGB-map)
- il secondo vettore è il colore della luce

questo termine è fisicamente realistico e per questo è presente in tutte le lighting equation.

L'intuizione dietro alla formula è che quando la normale è simile alla direzione della luce allora la superficie è orientata verso quest'ultima quindi sarà più illuminata. Importante notare come questo valga qualsiasi sia la direzione da cui si guarda l'oggetto (view-independent).

## Ambient term
$$\begin{pmatrix}a_R\\a_G\\a_B\end{pmatrix} \otimes \begin{pmatrix}A_R\\A_G\\A_B\end{pmatrix}$$
dove:
- il primo vettore rappresenta l'ambient color (un parametro del materiale)
- il secondo l'ambient light color (un parametro ambientale che indica quanto è illuminato di luce diffusa un ambiente)

Questa è un'approssimazione dell'effetto di tutti i rimbalzi della luce su tutti gli oggetti dato che non è computazionalmente possibile calcolarli. È proporzionale a quanto sia esposto il punto della superficie (primo vettore, è una costante) e quanta luce sia presente nell'ambiente (secondo vettore, è una costante). Questo parametro oltre a essere memorizzato come tutti gli altri nei vertici o in una texture (AO map) può anche essere calcolato sul momento ([[SSAO]])

## Specular (o Blinn-Phong) term
$$
(\hat{n}\cdot nlerp(\hat{V}, \hat{L}, 0.5))^E 
\begin{pmatrix}
S_R\\S_G\\S_B
\end{pmatrix}
\begin{pmatrix}
L_R\\L_G\\L_B
\end{pmatrix}
$$
dove:
- $nlerp(\hat{V}, \hat{L}, 0.5)$ è il vettore a metà tra il vettore che indica la direzione della vista(\hat V) e la direzione della luce ($\hat L$)
- E è il fattore di specularità di un oggetto (parametro del materiale)
- il primo vettore è il colore speculare (parametro del materiale)
- il secondo vettore è il colore della luce

Questo termine non e fisicamente basato e non conserva nemmeno l'energia, è solamente un trucchetto per approssimare un comportamento reale.
Il colore speculare indica il colore degli highlight, mentre l'esponente di specularità o glossiness indica la dimensione degli highlight (più è grande più gli highlight sono piccoli). Questi parametri possono essere memorizzati rispettivamente nella specular map e nella glossiness map ( una texture a quattro canali con R G B + glossiness).

L'intuizione dietro questa formula è che quando la direzione della normale di una superficie coincide con quella vettore medio tra la direzione della luce e quello della vista la luce viene riflessa direttamente nell'occhio causando riflessi in quel punto.
Viene determinata da un fattore esponenziale quindi i riflessi sono localizzati in aree molto piccole dove i due vettori sono molto simili.

## Emission term
$$\begin{pmatrix}
e_R\\
e_G\\
e_B
\end{pmatrix}$$
Questo fattore è semplicemente un vettore che indica il colore della luce emessa dall'oggetto, questo perché la luce emessa dall'oggetto raggiunge la camera direttamente quindi non dobbiamo modificare questo valore con ulteriori proprietà del materiale o dell'angolo di visione.
La texture in cui viene memorizzato questo parametro è la emission map. È possibile ottenere valori HDR se $e_{R,G,B} > 1$ per ottenere una luce che oltre che illuminare l'oggetto sbava la luce anche sui pixel circostanti [[HDR]].
>[!Warning]
>la luce emessa da un oggetto non interagisce con gli altri oggetti, quindi se si vuole ottenere questo effetto è necessario aggiungere altre luci nella scena.

## Equazione finale
#TODO aggiungere foto

Da notare come la luce è additiva: bisogna sommare il diffuse e specular term per ogni luce presente nella scena (se luci discrete) o integrato sulla luce dell'ambiente (per ambienti con luci continui). il termine ambientale e di emissione sono invece aggiunti una sola volta.

Inoltre questa equazione viene computata per ogni pixel ([[fragment shader]]) 

tutti i vettori usati nelle operazioni di calcolo di questa equazione devono essere espressi nello stesso spazio. Normalmente con le normal map la soluzione più efficiente è usare lo stesso spazio delle normali nella texture e convertire tutti gli altri versori (per vertice) nello stesso spazio. In questo modo non dobbiamo convertire le normali (per pixel).

Questa equazione è stata lo standard per molti anni perché:
- è semplice da controllare per i material artists
- è computazionalmente semplice
- era l'equazione hardwired nelle API grafiche ed era l'unico modello supportato
- essendo lo standard era facile portare un materiale da un gioco a un altro anche su engine diversi

Il problema al giorno d'oggi è che questa equazione:
- non è molto espressiva
- non ha fisicamente senso (soprattutto il termine speculare)
- non è realistica

# Phisically Based Materials
Nei primi anni duemila a causa delle limitazioni dell'equazione Phong gli sviluppatori iniziano a sperimentare: le equazioni si fanno più complesse e vengono aggiunti nuovi parametri ai materiali. Da un lato questo aumenta notevolmente l'espressività dei materiali ma dall'altro questo fa perdere intuitività e compatibilità.
Il trend attuale è quello dei PBM.
Lo scopo del passaggio a questo tipo di materiali è quello di:
- aumentare l'intuitività 
- aumentare la standardizzazione
- aggiungere la possibilità di più effetti di luce come per esempio i materiali anisotropi
- aumento di realismo

Questo modello è più ispirato alla realtà. cosa che non solo permette di avere un maggiore realismo ma anche di scansionare materiali da oggetti reali. Inoltre questo tipo di modello usa pochi parametri per una maggior facilità di memorizzazione e creazione, ciascuno dei quali viene espresso in un range da 0 a 1 (eccetto il base color):
- Base o Diffuse color (stesso presente in Phong)
- Specularità
- Metallicità
- Opacità
