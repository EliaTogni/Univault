---
"Titolo:": The incredibly challenging task of sorting colours
"Autore:": Alan Zucconi
"Anno:": "2015"
"Link:": https://www.alanzucconi.com/2015/09/30/colour-sorting/
---
# Sommario
Il blogpost parte con un'introduzione sul sorting dei numeri. Indipendentemente dall'algoritmo utilizzato, i numeri reali sono ordinati naturalmente. Questi numeri hanno un ordine totale, è sempre possibile decidere se un numero è maggiore di un altro. Di conseguenza è sempre possibile ordinarli e, escludendo duplicati, questo ordine è unico.

Al contrario, non siamo così fortunati per quanto riguarda i colori.<br />
Suppondendo di rappresentare i colori tramite i loro valor RGB, non esiste una tecnica standard per ordinare una tripla in una linea, poichè non sono organizzati naturalmente in una maniera lineare. Di conseguenza, come si possono ordinare i colori affinchè sembrino più continui possibile? Quali parametri influenzano questo ordine? Ad esempio, l'azzurro è più vicino al blu (tonalità simile) oppure al ciano (luminosità simile)? Non esiste una soluzione a questo problema: è possibile ordinare i colori ma il risultato complessivo dipende da cosa si sta cercando di ottenere. Questo post esplorerà come ordinare i colori e come ciò conduca a diversi risultati.

## Colour sorting
Creiamo ora una sequenza di colori a caso, campionandoli dallo spazio RGB:

```python
import random

colours_length = 1000
colours = []
for i in range(1, colours_length):
    colours.append (
        [
            random.random(),
            random.random(),
            random.random()
        ]
    )
```

![[SortRandom.png]]

Tutti gli esempi successivi faranno riferimento a questa lista di colori.

### RGB sorting
L'approccio più triviale con il quale è possibile ordinare i colori è tramite il sorting diretto dei valori RGB. Python utilizza un approccio naif per ordinare: prima ordina il primo componente, poi il secondo ed infine il terzo. Se due colori hanno la stessa quantità di rosso, il canale verde sarà utilizzzato per determinare quale è il più grande.

```python
colours.sort()
```

![[SortRGB.png]]

Questo risultato è, però, insoddisfacente.

----------------------------------------------------------------

### HSV sorting
Lo spazio dei colori RGB non rapresenta quanto i colori siano simili tra loro. Al contrario, lo spazio HSV tenta di superare questa problematica introducendo un parametro chiamato **hue**, o tonalità. La tonalità è il colore di base, reso più intenso o slavato dalla **saturation**. La terza componente, chiamata semplicemente **value**, determina quanto il colore sia scuro. Poichè la tonalità è ordinata, per definizione, secondo i colori dell'arcobaleno, ordinando direttamente basandosi sui valori HSV permetterà di produrre un risultato visualmente accettabile.

```python
colours.sort(key=lambda rgb: colorsys.rgb_to_hsv(*rgb)    )
```

![[SortHSV.png]]

----------------------------------------------------------------

### HSL sorting
Ordinando tramite lo spazio HLS, il quale organizza i colori in un fashion simile, produce risultati quasi indistinguibili.

```python
colours.sort(key=lambda rgb: colorsys.rgb_to_hls(*rgb)    )
```

![[SortHSL.png]]

Entrambe le soluzioni, tuttavia, appaiono molto noisy.

----------------------------------------------------------------

### Luminosity sorting
La ragione per la quale ordinare i colori tramite HSV e HSL produca un risultato così rumoroso è causato da un singolo fattore. HSV, infatti, considera la tonalità come molto più importante della luminosità. E' possibile notare infatti che due diverse sfumature di blu sono più vicine comparate a due colori diversi con simile intensità. Un tentativo per compensare ciò si basa sull'ordinare direttamente per la luminosità percepita di un colore

```python
def lum (r,g,b):
    return math.sqrt( .241 * r + .691 * g + .068 * b )
colours.sort(key=lambda rgb: lum(*rgb)    )
```

![[SortLum.png]]

Sfortunatamente, questo sorting restituisce comunque un risultato deludente.

----------------------------------------------------------------

### Step sorting
Se si desidera ordinaare i colori in un fashion visualmente appagante, è necessario utilizzare un approccio più complicato. E' possibile, per esempio, mergere le informazioni date da hue e luminosità per ottenere un risultato più smooth. Per diminuire l'impatto dato dall' ordinare rispetto al primo componente, è possibile ridurre lo spazio dei colori da un valore float nell'intervallo tra $0$ a $1$ ad un intero nell'intervallo tra $0$ e $7$. Facendo ciò, la maggior parte del rumore viene rimossa.

```python
def step (r,g,b, repetitions=1):
    lum = math.sqrt( .241 * r + .691 * g + .068 * b )

    h, s, v = colorsys.rgb_to_hsv(r,g,b)

    h2 = int(h * repetitions)
    lum2 = int(lum * repetitions)
    v2 = int(v * repetitions)

    return (h2, lum, v2)
colours.sort(key=lambda (r,g,b): step(r,g,b,8)    )
```

![[SortHSVLUM.png]]

La maggior parte del rumore è stata rimossa ma i segmenti ora non appiono puù continui. Per risolvere questo, è possibile invertire la luminosità di un segmento sì e uno no.

```python
def step (r,g,b, repetitions=1):
    lum = math.sqrt( .241 * r + .691 * g + .068 * b )

    h, s, v = colorsys.rgb_to_hsv(r,g,b)

    h2 = int(h * repetitions)
    lum2 = int(lum * repetitions)
    v2 = int(v * repetitions)

    if h2 % 2 == 1:
        v2 = repetitions - v2
        lum = repetitions - lum

    return (h2, lum, v2)
colours.sort(key=lambda (r,g,b): step(r,g,b,8)    )
```

![[sortHSVLUMTrans.png]]

I colori ora appaiono organizzati in una maniera decisamente migliore. Sono continui, per la maggior parte, con ben poco rumore rispetto al sorting HSV iniziale. Ciò viene ottenuto, tuttavia, alle spese della luminosità monotonica. 

----------------------------------------------------------------

### Hilbert Sorting
Un altro approccio per ordinare i colori si basa sul concetto di **curva di Hilbert**. E' possibile immaginare una curva di Hilbert come una tecnica per mappare ogni punto in uno spazio bidimensionale utilizzando una curva monodimensionale.

![[HilbertCurve.gif]]

Questo è possibile perchè la curva di Hilbert è un oggetto frattale che riempie lo spazio. E' possibile estendere lo stesso concetto di riempimento di spazio allo spazio dei colori tridimensionale. Nel prossimo esempio è stato usata l'implementazione di un cammino Hilbertiano di Steve Witham.

```python
import hilbert
colours.sort(key=lambda (r,g,b):hilbert.Hilbert_to_int([int(r*255),int(g*255),int(b*255)])    )
```

![[SortHilbert.png]]

Il risultato è certamente intrigante e, nonostante non segua nessuna distribuzione di colore intuitiva, appare decisamente omogeneo. E' interessante notare che, mentre tutti gli approcci menzionati precedentemente siano in grado di ordinare correttamente i colori in scala di grigio, l'Hilbert sorting li riarrangia in una maniera differente.

![[SortGrayHilbert.png]]

----------------------------------------------------------------

### Travelling Salesman sorting
Il **problema del commesso viaggiatore** si riferisce ad un problema pratico: il visitare un certo numero di città minimizzando la distanza complessiva e visitando ogni città una volta sola. Questo suona esattamente come ciò che desideriamo: visitare ogni colore esattamente una volta, minimizzando la distanza complessiva. Nonostante sia un problema così critico, il problema del commesso viaggiatore è NP-completo cioè, nel nostro caso, è computazionalmente troppo dispendioso per essere eseguito su migliaia di colori. L'algoritmo che verrà utilizzato sarà invece una versione subottimale, chamata **nearest neighbour**. Si tratta di un algoritmo che spesso trova soluzioni al problema del commesso viaggiatore e quali sono, in media, peggiori del $25\%$. Questa è la versione utilizzata:

```python
from scipy.spatial import distance
# Distance matrix
A = np.zeros([colours_length,colours_length])
for x in range(0, colours_length-1):
    for y in range(0, colours_length-1):
        A[x,y] = distance.euclidean(colours[x],colours[y])

# Nearest neighbour algorithm
path, _ = NN(A, 0)

# Final array
colours_nn = []
for i in path:
    colours_nn.append(    colours[i]    )
```

![[SortNNRGB.png]]

Il risultato è molto smooth anche se ciascun colore è distribuito lungo tutto il vettore. Questa soluzione, tuttavia, dovrebbe essere quella che minimizza realmente la distanza tra i colori stessi.

----------------------------------------------------------------

## Colour distance
Il sorting dei colori è fortemente connesso ad un altro problema: dati due colori differenti, quanto sono distanti? Il concetto di distanza dipende da in quale spazio li stiamo analizzando. Seguono qui alcuni grafici che rappresentano come la distanza è percepita in diversi spazi di colore. Nei diagrammi seguenti, ogni pixel $(x, y)$ indica quanto distanti sono i rispettivi colori negli assi $X$ e $Y$. Gli assi $X$ e $Y$ dispongono i colori in base al loro valore di hue. I pixel bianchi indicano un match perfetto: i colori hanno distanza zero, cioè sono identici. I pixel scuri, invece, indicano una grande distanza.

Distanza percepita nello spazio HSV (e HSL).

![[DistanceHLS.png|300]]

Distanza percepita nello spazio RGB.

![[DistanceRGB.png|300]]

Distanza percepita nello spazio YIQ.

![[DistanceYIQ.png|300]]

Distanza percepita nello spazio LAB.

![[DistanceLAB.png|300]]

I diagrammi successivi rimpiazzano i colori sull'asse orizzontale con un gradiente in scala di grigi. Non ci saranno più pixel bianchi poichè nessun colore sarà uguale ad un altro.

Distanza percepita nello spazio HSV (e HSL).

![[GradientHSV.png|300]]

Distanza percepita nello spazio RGB.

![[GradientRGB.png|300]]

Distanza percepita nello spazio YIQ.

![[GradientYIQ.png|300]]

Distanza percepita nello spazio LAB.

![[GradientLAB.png|300]]

----------------------------------------------------------------

## Conclusion
Ordinare i colori è una task incredibilmente complessa. Ogni tentativo di appiattirli in una singola dimensione richiederà dei tradeoffs. E' quindi fondamentale quale feature si vuole evidenziare.

----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Related to


----------------------------------------------------------------