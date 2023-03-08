# Elementi di Biologia Molecolare
Per **bioinformatica** (**bioinformatics**) si intende l'applicazione di metodi informatici per l'elaborazione e l'analisi di dati biologici, soprattutto biomolecolari. Spesso viene usato intercambiabilmente il termine **biologia computazionale** (**computational biology**).

La bioinformatica si occupa anche di dati medici di tipo clinico o fenotipico, ma soprattutto è specializzata nella genomica e nella proteomica. Ci concentreremo, quindi, sulla biologia molecolare delle macromolecole degli acidi nucleici e delle proteine.

Non rientrano nella bioinformatica le tecniche informatiche ispirate a princìpi biologici, come le reti neurali o i metodi di computazione evoluzionistica.

## DNA
Il **DNA** (**Desoxyribonucleic Acid**) è un polimero che si trova nel nucleo delle cellule (eucariote, libero nelle cellule procariote) formato da due catene di nucleotidi in senso opposto. Ogni nucleotide è formato da un gruppo fosfato (fosfato organico), uno zucchero desossiribosio (ribosio senza gruppo idrossile) ed una base azotata.

Il fosfato organico e il desossiribosio sono uguali per tutti i nucleotidi e formano una *backbone* per la catena alternandosi: la catena antisenso è formata anch'essa da una *backbone* fosfato-zucchero, ma nell'ordine opposto.

I nucleotidi differiscono solo per la base azotata. Ogni nucleotide ha una di quattro basi azotate: adenina, timina, guanina o citosina. Ognuna di queste basi si può collegare solo con la propria base complementare: adenina con timina e guanina con citosina.

Le due catene sono, quindi, legate internamente da legami covalenti (forti) e alla catena antisenso da legami idrogeno (deboli) tra le coppie di basi azotate.

Le catene sono avvolte a forma di doppia elica attorno a proteine chiamate istoni, che tendono a compattarsi e a compattare, così, il DNA. Questo insieme di proteine e DNA è detto cromatina e forma, così impaccata, i cromosomi.

### Replicazione
Durante la riproduzione cellulare, il DNA si duplica. Le due catene si separano: su ognuna di esse viene ricostruita l'opposta come concatenazione delle basi complementari.

----------------------------------------------------------------

## Dogma Centrale
Il dogma centrale della biologia molecolare riguarda il flusso
dell'informazione biologica: nella forma più semplificata afferma che il DNA viene trascritto sul mRNA, che viene tradotto in proteine. La trascrizione del DNA in mRNA avviene secondo il principio di corrispondenza delle basi già visto: l'unica differenza è che l'RNA non ha la timina, ma l'uracile.

$$A\rightarrow U\hspace{1in} T\rightarrow A\hspace{1in} C\rightarrow G\hspace{1in} G\rightarrow C$$

L'RNA messaggero interagisce nei ribosomi con il tRNA (RNA di
trasporto): ogni tRNA trasporta un amminoacido e ha un anticodone con tre nucleotidi. Esso si legherà, quindi, ad un pezzo di RNA che contenga la tripletta complementare. La sequenza di triplette nel mRNA codifica, quindi, una sequenza di amminoacidi, ovvero, una proteina.

### Codice Genetico
Il codice genetico è la codifica delle proteine come triplette di nucleotidi. È un codice ridondante: gli amminoacidi sono 20, le triplette possibili di nucleotidi sono $4^3=64$ (coppie di nucleotidi non sarebbero sufficienti).

Questa ridondanza permette qualche grado di robustezza alle mutazioni: alcune variazioni di un nucleotide corrispondono allo stesso amminoacido, sono mutazioni sinonime. Nelle mutazioni missenso, la codifica errata corrisponde ad un altro amminoacido.

Le mutazioni influiscono sulla fitness della cellula rispetto all'ambiente: in base a ciò, possono essere distinte in miglioranti, peggioranti o neutrali. Le mutazioni che si propagano alla progenie sono solo quelle che coinvolgono le cellule germinali (non quelle somatiche).

Alcune sezioni di DNA sono molto simili in molti organismi e sono dette regioni conservate: esse corrispondono a funzioni di base e una mutazione in una tale regione sarà probabilmente peggiorante.

----------------------------------------------------------------

### Geni
Ogni gene è una porzione di DNA che codifica l'informazione riguardante una proteina. I geni hanno una lunghezza variabile tra $10^2$ e $10^5$ nucleotidi. Un gene ha una porzione trascritta e una porzione *promoter*.

Nella porzione trascritta si alternano introni ed esoni: gli esoni sono trascrivibili in mRNA, mentre gli introni vengono tagliati in un processo chiamato *slicing*. Per una trascrizione può essere usato un sottoinsieme degli esoni di un gene: ogni sottoinsieme codificherà una proteina diversa (l'uomo ha 20000 geni, che sono molti meno delle proteine che produce).

Il *promoter* regola la trascrizione: la trascrizione può avvenire solo in seguito all'attivazione del *promoter* causata da una proteina fattore di trascrizione, che permette all'enzima RNA-polimerasi di trascrivere il DNA. Questi meccanismi di regolazione sono influenzati anche da regioni distali chiamate *enhancer* e *silencer*. Nell'uomo, le regioni trascritte costituiscono solo il 2% del codice genetico: le porzioni restanti hanno funzioni regolatrici.

----------------------------------------------------------------

## Proteine
Le proteine sono biomolecole composte da una sequenza di amminoacidi (ne esistono 20 diversi): ogni amminoacido ha un carbonio $\alpha$ legato ad un gruppo amminico -NH$_{2}$ , ad un gruppo carbossilico -COOH, ad un idrogeno e ad una catena laterale. La catena laterale è ciò che differenzia ciascun amminoacido.

### Struttura
La funzione di una proteina è legata alla sua struttura. La struttura di una proteina può essere analizzata sotto quattro diversi livelli:
-  struttura primaria: la sequenza lineare di amminoacidi;
-  struttura secondaria: motivi strutturali, come $\alpha$-eliche, $\beta$-foglietti, ...;
- struttura terziaria: forma complessiva della molecola, ripiegamenti e composizioni di strutture secondarie;
- struttura quaternaria: forma di un complesso di più molecole che interagiscono fra loro.

----------------------------------------------------------------

### Funzioni
Le proteine possono essere classificate in base alla loro funzione:
- elaborazione dell'informazione:
    - percezione extracellulare (recettori);
    - trasduzione di segnali;
    - regolazione dell'espressione genica;
    - regolazione del ciclo cellulare;
    - regolazione della differenziazione cellulare.
- Metabolismo:
    - energia;
    - sintesi di proteine, DNA, RNA, ...;
    - biogenesi delle componenti cellulari.
- struttura:
    - citoscheletro;
    - trasporto cellulare.

La funzione di una proteina, tuttavia, non è unica e può variare a seconda del contesto cellulare. Dunque, la classificazione funzionale delle proteine non segue necessariamente una struttura ad albero.

----------------------------------------------------------------

## Dati Biomolecolari
I tipi di dati che si utilizzano in biologia computazionale possono essere:
- sequenze (stringhe):
    - proteine (sequenze di amminoacidi);
    - geni, genomi (sequenze di nucleotidi).
- strutture molecolari (grafi di coordinate tridimensionali di atomi);
- reti di proteine (grafi di interazioni);
- dati su popolazioni;
- dati di espressione (matrici).

### Sequenze di DNA
Il sequenziamento del DNA parte dall'acquisizione di sequenze di RNA, che vengono convertite in cDNA (*complementary DNA*), più stabile. Queste sequenze di cDNA vengono amplificate (replicate in molte copie). Dopodiché le sottosequenze devono essere assemblate (*assembly*): una problematica è la disambiguazione di ripetizioni.<BR />
Altre tecniche, dette di *deep sequencing*, invece, sequenziano direttamente sottosequenze (circa $10^3$ basi) di DNA.

----------------------------------------------------------------

### Dati su popolazioni
Grazie alla nuova disponibilità di dati genomici, è possibile fare analisi su popolazioni di individui, considerando le variazioni rispetto ad un genoma di riferimento: vengono considerate le SNP (*single nucleotide polymorphism*), le inserzioni o le delezioni (*indel*).

----------------------------------------------------------------

### Microarray 
I *microarray* sono vetrini sui quali vengono sintetizzate delle sequenze di DNA (10$\sim$`<!-- -->`{=html}20 oligonucleotidi), scelte tra le sequenze più indicative dell'espressione dei geni target. Alcuni frammenti di mRNA di un campione analizzato saranno complementari alle sequenze sul *DNA-chip* e vi si legheranno: le coppie legate vengono individuate perché sensibili al laser grazie a delle molecole fotosensibili aggiunte al mRNA. In base alle sequenze presenti si inferisce, poi, il gene espresso.

----------------------------------------------------------------

### Espressione di Proteine
Per acquisire dati sull'espressione delle proteine si possono utilizzare tecniche come lo spettrometro di massa, i microarray *protein-chip*, l'elettroforesi o l'immunoprecipitazione. Inoltre, è possibile misurare l'abbondanza di metaboliti.

----------------------------------------------------------------

## Genetica
La genetica è lo studio della trasmissione ereditaria del genoma: si interessa, inoltre delle relazioni tra il genotipo e il fenotipo (l'insieme delle caratteristiche ereditarie osservabili).

### Cromosomi
I cromosomi nelle cellule umane sono 46: 22 coppie di cromosomi omologhi (autosomi) e 2 cromosomi sessuali. Di ogni coppia di cromosomi, uno deriva dal gamete del padre e uno dal gamete della madre: i gameti sono cellule per la riproduzione (nell'uomo, spermatozoi e ovuli), che hanno 23 cromosomi ciascuno.<br />
Le mutazioni di un individuo si trasmettono alla prole solo se interessano i gameti: infatti, le altre cellule non influiscono sul DNA ereditato.

----------------------------------------------------------------

### Definizioni
Un *locus* è una posizione all'interno di una sequenza di nucleotidi di un particolare nucleotide o di una sottosequenza: un allele è una specifica variante ad un locus. L'insieme degli alleli di un individuo costituisce il suo genotipo.

Un *single nucleotide polymorphism* (SNP) è una variazione su un singolo nucleotide: sono molto comuni e il genoma umano ne ha, in media, uno ogni mille nucleotidi. La maggioranza degli SNP sono biallelici, ovvero hanno due possibili alleli: uno è detto *reference allele* e l'altro *alternative allele*. Il genotipo rispetto ad un allele viene indicato con il numero di reference allele nei due cromosomi: il genotipo 2 ha l'allele di riferimento in entrambi i cromosomi, il genotipo 1 lo ha solo in uno e il genotipo 0 ha in entrambi i cromosomi l'allele alternativo.

----------------------------------------------------------------

### Leggi dell'Erediterietà di Mendel
#### Legge di Segregazione
La prima legge di Mendel è la legge di segregazione e asserisce che in ogni organismo, che ha due alleli per ogni tratto fenotipico, gli alleli si separano durante la meiosi in modo tale che i gameti contengano solo uno degli alleli. Il figlio erediterà un allele da ciascun genitore.

----------------------------------------------------------------

#### Legge dell'Assortimento Indipendente
La seconda legge di Mendel è la legge dell'assortimento indipendente e asserisce che tratti distinti si trasmettono indipendentemente gli uni dagli altri.

In realtà, tale legge non è sempre rispettata. È vero per tratti codificati su cromosomi diversi: infatti, la scelta di uno specifico cromosoma tra i due omologhi non influenza la scelta di uno specifico cromosoma di un'altra coppia di omologhi. Per alleli dello stesso cromosoma, invece, non è sempre vero, perché possono essere separati solo se il sito di crossover cade tra i loci degli alleli.

----------------------------------------------------------------