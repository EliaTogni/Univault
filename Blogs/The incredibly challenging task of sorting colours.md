---
"Titolo:": The incredibly challenging task of sorting colours
"Autore:": Alan Zucconi
"Anno:": "2015"
"Link:": https://www.alanzucconi.com/2015/09/30/colour-sorting/
---
# Sommario
Il blogpost parte con un introduzione sul sorting dei numeri. Indipendentemente dall'algoritmo utilizzato, i numeri reali sono ordinati naturalmente. Questi numeri hanno un ordine totale, è sempre possibile decidere se un numero è maggiore di un altro. Di conseguenza è sempre possibile ordinarli e, escludendo duplicati, questo ordine è unico.

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


----------------------------------------------------------------

### Hilbert Sorting


----------------------------------------------------------------

### Travelling Salesman sorting


----------------------------------------------------------------

## Colour distance


----------------------------------------------------------------

## Conclusion


----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Related to


----------------------------------------------------------------