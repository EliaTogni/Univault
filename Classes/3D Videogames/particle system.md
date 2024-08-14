# Introduzione
I Particle effects servono a rappresentare tutti gli oggetti 3D che non sono facilmente descritti dalla loro superficie e/o sono estremamente dinamici, come per esempio fiamme, esplosioni, pioggia,neve,...
Sono formati da un insieme di *particelle* che rappresentano ciascuna una goccia, una fiamma, una nuvoletta di fumo,... e possiedono ciascuna una serie di caratteristiche come per esempio:
- posizione e velocità
- time to live
- caratteristiche estetiche (colore, dimensione,...)
le quali determinano l'effetto finale del sistema.

Le particelle sono una versione estremamente semplificata delle particelle nei [[Motori fisici]], infatti non ci interessa particolarmente che il comportamento di una singola particella sia realistico ma ci importa il comportamento dell'insieme (e anche questo spesso non è particolarmente importante in quanto spesso si tratta di qualcosa di puramente estetico e non legato al gameplay).

Le particelle vengono emesse in modo dinamico da un *emitter*, evolvono durante la loro vita (per esempio cambiando colore mano a mano che diventano vecchie) e vengono eliminate dopo un tempo predefinito.
La posizione e l'orientamento dell'emitter determina la posizione e l'orientamento del particle effect. Le particelle vengono emesse in tempi randomici seguendo una distribuzione di probabilità scelta, ad una posizione casuale all'interno dell'emitter e con una velocità, posizione, ecc. iniziali. L'emissione di particelle dura a seconda dell'effetto che si vuole ottenere e può essere molto breve (esplosioni) ma anche indefiinito (fumo da un braciere).

I sistemi di particelle sono facilmente parallelizzabili soprattutto se il loro comportamento fisico è molto semplificato (se per esempio non è necessario che collidano tra loro o con altri oggetti) e relativamente efficienti in memoria. Infatti è possibile salvarle in un array circolare e quanto bisogna inizializzare una particella si riutilizza la posizione di una particella che ha superato il time to live. Questo significa che è posibile gestirle completamente all'interno della GPU.

# Fisica dei particle systems
## Dynamics
A seconda di quanto vogliamo rendere fisicamente accurato a discapito di un maggior costo computazionale possiamo scegliere una diverso tipo di simulazione dinamica, dalla più semplice alla più complessa:
- Evoluzione analitica, cinematica: stato(t) = $f(t)$
- Evoluzione numerica, dinamica (senza forze): $\text{stato}(t+dt) = f(state(t),dt)$. utile per simulare per esempio il la neve che cade lentamente a zig zag, l'acqua che scende in diagonale per via del vento... 
- Evoluzione numerica, dinamica (con forze). Viene aggiunta la massa alle particelle e si possono anche aggiungere forze come la coesione o repulsione tra le particelle.
## Collision detection
Come per la dinamica lo stesso concetto vale per le collisioni:
- Nessuna collisione -> il fumo attraversa il soffitto (spesso non importa)
- Collisione solo con determinati oggetti -> per esempio solo con il pavimento per modellare meglio le scintille di un saldatore. Rimane semplice da parallelizzare
- Collisione con gli oggetti statici
- Collisione tra particelle (raro nei videogiochi e estremamente costoso)
## Collision response
Se avviene una collisione è possibile rispondere in vari modi a seconda di quanto accurato si vuole rendere la simulazione:
- Eliminare la particella
- Rendere 0 la velocità della particella
- Cambio dello stato della particella -> per esempio una goccia d'acqua cade sul pavimento e diventa una macchia bagnata per un po' e poi scompare
- Simulazione impatto in una direzione -> la particella subisce l'effetto dell'impatto (che può essere elastico o anaelastico) ma non la superficie contro cui si scontra
- Simulazione impatto bidirezionale -> anche l'oggetto subisce l'effetto dell'impatto (estremamente raro nei videogiochi)

# Render delle particelle
Ogni particella viene individualmente renderizzata e può essere rappresentata da:
- un punto (point splatting) o in generale una semplice figura
- un piccolo modello 3D formato da pochi poligoni (anche uno solo)
- un *impostor* ovvero un quadrato centrato nella particella, orientato solitamente verso l'osservatore e dotato di una texture. Questa è una soluzione molto usata perchè a costi molto bassi riesce comunque a generare effetti abbastanza realistici.
Il risultato finale sarà dato dalla sovrapposizione delle particelle.

Un metodo alternativo di rendering meno utilizzato nei giochi perchè molto dispendioso è quello di fondere le particelle in un unico oggetto 3D e renderizzare quello:
1. Viene creato temporaneamente un blob per ogni particella in un buffer offscreen
2. Vengono calcolate le stime delle normali dell'unione dei singoli blob
3. Viene renderizzata la superficie risultante.
Questo sistema è ideale per modellare il comportamento dei liquidi.

# Creazione
La figura dell'Effect specialist si occupa di creare il comportamento delle particelle modificando i vari parametri:
- Della creazione
	- dimensione, orientamento e posizione emitter
	- criteri di creazione e distruzione delle particelle
	- velocità delle particelle iniziale
- Dell'evoluzione
	- traiettoria delle particelle
	- cambi di velocità
	- forze
- Del'estetica
	- immagine dell'impostor
	- scelta del modello 3D
	- colori
