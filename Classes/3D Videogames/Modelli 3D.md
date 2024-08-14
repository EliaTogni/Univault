# Introduzione
I modelli 3D vengono solitamente rappresentati come mesh di triangoli, ovvero un insieme di:
- *vertici* -> campionamenti discreti della superficie (continua) 3D dell'oggetto reale (o ideale) da rappresentare
- *facce* -> triangoli formati da triplette di vertici
- *edge* -> segmento che collega due facce

Una mesh è formata da:
- la sua *geometria* -> ovvero la posizione dei vertici
- la *connettività* o *topologia* -> ovvero come sono connessi i vertici per formare le facce. I triangoli sono il tipo di faccia più comune ma si possono trovare anche *quad mesh* formate da quadrilateri, *quad dominant mesh* formate principalmente da quadrilateri ma anche da altri poligoni, *polygonal mesh* formate da poligoni
- *attributi* -> come per esempio il colore, il materiale, normali, UV, ecc... questi vengono campionati sui vertici e interpolati all'interno delle facce

# Struttura dati
## Soup of triangles
Un primo modo di rappresentare in memoria una mesh è semplicemente creando un array di triangoli memorizzati come una sequenza di tre vertici ciascuno dei quali formato dalle coordinate e i rispettivi attributi.
I problemi di questo metodo sono la *replicazione di dati* -> i dati dei vertici vengono copiati per ogni faccia che li contiene (quindi non efficiente) e la *complessità di modifica*-> sono per esempio complesse da animare.

## Indexed meshes
In questo caso i vertici vengono salvati come un insieme di coordinate x,y,z e i rispettivi attributi e l'array che descrive la connettività della mesh contiene solo un riferimento al vertice (l'indice) senza copiarne tutti i dati.

# Attributi
Gli attributi vengono salvati nei vertici e vengono interpolati all'interno delle facce. Per farlo viene sfruttato il concetto di *coordinate baricentriche*, ovvero che per ogni triangolo $T$ formato dai vertici $p_0, p_1, p_2$ esistono e sono unici, per ogni punto $q$ interno al triangolo, $k_0,k_1,k_2$ con $k_0+k_1+k_2$ tali che:
$$q = k_0p_0 + k_1p_2+k_2p_2$$
ipotizzando $a_0,a_1,a_2$ gli attributi dei vertici, il valore dell'attributo in $q$ sarà:
$$q = k_0a_0 + k_1a_2+k_2a_2$$
## Colore
Nei giochi i colori dei modelli 3D sono solitamente applicati con texture, non con attributi nei vertici. Questi ultimi sono però un modo per applicare *variazioni ai modelli* in modo economico (guardie blu e guardie rosse).

Un altro possibile utilizzo di questo attributo è per aggiungere *ambient occlusion* baked ad hoc per vertice

## Normali
Un versore che rappresenta l'orientazione della superficie ed è usato per determinare la luce. Può essere computato automaticamente dalla geometria ma è parte del mesh asset perchè l'artista in questo modo è in controllo di determinare quali edge sono *soft edge* o *hard edge*

Inoltre le facce della mesh sono piatte per definizione, ma usando una normale continua data dall'interpolazione dei valori dei vertici possiamo ottenere l'illusione di una superficie curva e liscia. 
Con questo metodo però tutte gli edge sono trattati come soft edge. Per rendere uno specifico edge hard possiamo applicare quello che in gergo viene chiamato *vertex seam* che altro non è che la duplicazione dei vertici e l'assegnazione di normali diverse alle copie
#TODO aggiungere immagine

# Creazione