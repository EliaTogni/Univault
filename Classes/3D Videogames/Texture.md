# Introduzione
un primo tentativo per rappresentare una texture e' dare ai vari vertici la proprietà del colore. Il principale problema è che se voglio avere una texture di qualità maggiore o minore devo cambiare anche il numero di vertici del poligono, quindi serve un'altra soluzione.

# Texture map 
suddivisa in texel (tipo pixel ma non proprio). Ogni texel ha proprieta specifiche come colore, una normale, un transparency factor, ... #TODO  copiare

cosi comune che l'hardware e' fatto apposta per gestirle e quindi esistono strutture predefinite.

meshe e texture vanno caricate in vram prima e poi possono essere disegnate

come si connette la texture a una mesh?
esiste una index buffer che indica la connectivity, un vertex buffer che indica la geometria e altre proprieta ( #todo aggiungere immagine)
ogni vertice ha due posizioni: una nello spazio 3d (x,y,z) e uno nello spazio bidimensionale della texture map (u,v -> da qui il nome **uv map**)

poiche gli algoritmi che mappano queste due dimensioni sono hardware devono seguire dei costraint particolari: 
- lo spazio uv ha lo 0,0 in alto a sinistra e cresce verso il basso e a dx
- lo spazio ha dimensione compresa tra 0 e 1 su entrambe le dimensioni indifferentemente dalla risoluzione dell'immagine. In questo modo e' più semplice scalare la risoluzione al volo (per esempio per fare in modo che computer meno performanti possano comunque far girare il gioco perchè usano meno vram)

a livello hardware una texture map e' un insieme di immagini a risoluzione diversa chiamata **MIP map levels** (multum in parvum -> tanti in poco). ogni livello ha risoluzione di metà rispetto al livello precedente fino a arrivare a un solo texel. Il peso finale cresce solo di 1/3 ( #TODO sembra strano come numero) della dimensione originale. Questo viene fatto per visualizzare meglio gli oggetti a distanza perche non sarebbero visibili i singoli texel. L'hardware sa quale texel prendere da quale livello prendere al momento giusto. 

Da notare che le mappe uv sono discontinue e anche in questo caso come abbiamo faatto per le normali possiamo ovviare a questo problema duplicando i vertici. Solitamente visto che i tagli possono creare delle anomalie si tende a nasconderli in posti che non sono visibili. Per questo motivo e motivi di spazio ecc il numero di tagli va minimizzato. Il processo di tagliare uv map puo' essere automatizzato ma tendenzialmente gli artisti fanno ancora un lavoro migliore a tagliarle. Una cosa che le macchine possono fare bene e' mettere i pezi tagliati in un rettangolo di texel cercando di usare il minor spazio posibile.
Il mapping deve minimizzare la differenza tra le forme dei poligoni sulla mappa rispetto ai poligoni sulla mesh

a volte le mappe non devono esser iniettive per forza: se ho due pezzi uguali non ha senso avere un duplicato che occupa spazio nella mappa e quindi un singolo punto sulla texture puo corrispondere a due punti sulla mesh.