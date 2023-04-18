# Elementi di Biologia Molecolare
Per **bioinformatica** (**bioinformatics**) si intende l'applicazione di metodi informatici per la gestione, l'elaborazione e l'analisi di dati biologici, soprattutto biomolecolari. Spesso viene usato intercambiabilmente il termine **biologia computazionale** (**computational biology**).

La bioinformatica si occupa anche di dati medici di tipo clinico o fenotipico, ma soprattutto è specializzata nella **genomica** (una branca della biologia molecolare che si occupa dello studio del **genoma** degli organismi viventi, ovvero il complesso dei geni di suddetti organismi) e nella **proteomica** (una branca della biologia molecolare che consiste nell'identificazione sistematica di proteine e nella loro caratterizzazione rispetto a struttura, funzione, attività, quantità e interazioni molecolari). Il focus del corso sarà posto, quindi, sulla biologia molecolare delle macromolecole degli acidi nucleici e delle proteine.<br />
Non rientrano nella bioinformatica, invece, le tecniche informatiche ispirate a princìpi biologici, come le reti neurali o i metodi di computazione evoluzionistica.

## DNA
Il **DNA** (**DesoxyriboNucleic Acid**) è un acido nucleico il quale contiene le informazioni geniche, necessarie alla formazione ed omeostasi degli esseri viventi, attraverso la biosintesi di RNA e proteine.<br />
Dal punto di vista chimico, si tratta di un polimero organico, il quale si trova nel nucleo delle cellule eucariote oppure libero nelle cellule procariote, ed è formato da due filamenti di monomeri, chiamati **nucleotidi**, direzionati in senso opposto. Ogni nucleotide è formato da un **gruppo fosfato** (fosfato organico), uno zucchero **desossiribosio** (ribosio senza gruppo idrossile) ed una **base azotata**.<br />

![[nucleotide.png]]

La doppia catena polinucleotidica del DNA ha struttura **antiparallela**, **spiralizzata** e **complementare**.<br />
Il fosfato organico e il desossiribosio sono uguali per tutti i nucleotidi e formano una **backbone** per la catena alternandosi: la **catena antisenso**, ovvero la catena antiparallela, è formata anch'essa da una backbone fosfato-zucchero, ma nell'ordine opposto. In pratica, ogni molecola di fosfato forma un ponte molecolare collegando, attraverso legami fosfodiesterici, il carbonio in posizione $3′$ di una molecola di deossiribosio con quello in posizione $5′$ dello zucchero successivo. Conseguenza di questi legami asimmetrici è che ogni filamento di DNA ha un **senso**, determinato dalla direzione dei legami fosfodiesterici. Le basi azotate, invece, si uniscono in posizione $1'$ dello zucchero desossiribosio con legami $N$-glicosidici. In una doppia elica, quindi, il senso di un filamento è opposto a quello del filamento complementare e, per tale motivo, i due filamenti che costituiscono una doppia elica sono detti antiparalleli.<br />
Le estremità asimmetriche di un filamento di DNA sono definite estremità $5'$ ed estremità $3'$.<br />
Nell'immagine precedente, il filamento segue ordinamento $5' \to 3'$ (o ordinamento **Watson**), in quanto l'atomo di carbonio $5'$ all'estremità precede l'atomo $3'$. Nel filamento opposto, il carbonio $3'$ precederà il carbonio $5'$ ($3' \to 5'$ o ordinamento **Crick**).

Come già introdotto, i nucleotidi differiscono solo per la base azotata. Ogni nucleotide è composto da una di quattro possibili basi: **adenina**, **timina**, **guanina** o **citosina**. Ognuna di queste basi si può collegare solo con la propria base complementare: adenina con timina e guanina con citosina.

Le due catene sono, quindi, legate internamente da **legami covalenti** (forti) e alla catena antisenso da **legami idrogeno** (deboli) tra le coppie di basi azotate. Ogni base forma più legami idrogeno con la base complementare. Il risultato di questi legami è chiamato **coppia di basi**. La timina e l'adenina si legano tra loro con due legami idrogeno mentre la rimanente coppia di basi si lega tra di loro con tre legami idrogeno.

Timina e citosina sono anche chiamate **pirimidine**, a causa della struttura a singolo anello, mentre adenina e guanina sono chiamate **purine**, per via della struttura a doppio anello.

Le catene sono avvolte a forma di doppia elica la cui struttura regolare forma due tipi di spazi alternati, chiamati **solco maggiore** e **solco minore**. Questi solchi permettono al DNA di legarsi attorno a proteine chiamate **istoni**, che tendono a compattarsi e a compattare, così, il DNA. Questo insieme di proteine e DNA è detto **cromatina** e forma, così impaccata, i **cromosomi**.

### Replicazione
La divisione cellulare, necessaria ad un organismo per crescere e vivere, richiede una duplicazione del DNA cellulare, in modo che le cellule figlie possano avere la stessa informazione genetica della cellula madre. La struttura a doppia elica del DNA permette un meccanismo estremamente semplice per la replicazione del DNA. I due filamenti, infatti, vengono separati e da ognuno viene creato un filamento complementare, ad opera di un enzima chiamato **DNA polimerasi**. Con questo meccanismo, le basi presenti sul filamento figlio sono determinate da quelle presenti sul filamento parentale: è proprio attraverso questo meccanismo che le cellule figlie presentano genoma identico alla cellula madre.

![[DNA_replication.png]]

----------------------------------------------------------------

## RNA
L'**RNA** (**RiboNucleic Acid**) è un filamento a singola elica ma dalla struttura simile al DNA. L'unica differenza è che, nell'RNA, la timina è sostituita dall'**uracile**.

----------------------------------------------------------------

## Proteine
Le **proteine** sono biomolecole composte da una sequenza di **amminoacidi** (ne esistono 20 diversi): ogni amminoacido ha un carbonio $\alpha$ legato ad un gruppo amminico -NH$_{2}$ , ad un gruppo carbossilico -COOH, ad un idrogeno e ad una catena laterale. La catena laterale è ciò che differenzia ciascun amminoacido, garantendogli proprietà differenti a seconda della composizione della catena stessa.

![[side_chain_properties.png]]

### Struttura
La funzione di una proteina è legata alla sua struttura e la struttura di essa può essere analizzata sotto quattro diversi livelli:
- **struttura primaria**: la sequenza lineare di amminoacidi;
- **struttura secondaria**: motivi strutturali, come $\alpha$-eliche, $\beta$-foglietti, ...;
- **struttura terziaria**: forma complessiva della molecola, ripiegamenti e composizioni di strutture secondarie;
- **struttura quaternaria**: forma di un complesso di più molecole che interagiscono fra loro.

----------------------------------------------------------------

### Funzioni
Le proteine possono essere classificate in base alla loro funzione:
- **elaborazione dell'informazione**:
    - percezione extracellulare (recettori);
    - trasduzione di segnali;
    - regolazione dell'espressione genica;
    - regolazione del ciclo cellulare;
    - regolazione della differenziazione cellulare.
- **metabolismo**:
    - energia;
    - sintesi di proteine, DNA, RNA, ...;
    - biogenesi delle componenti cellulari.
- **struttura**:
    - citoscheletro;
    - trasporto cellulare.

La funzione di una proteina, tuttavia, non è unica e può variare a seconda del contesto cellulare. Dunque, la classificazione funzionale delle proteine non segue necessariamente una struttura ad albero.

----------------------------------------------------------------

### Codice Genetico
Il codice genetico è il sistema attraverso cui si conserva e si trasmette l’informazione genetica. La trasmissione dell’informazione avviene attraverso triplette di nucleotidi, dette **codoni**. Ogni codone codifica per un amminoacido, per un segnale di start oppure per un segnale di stop.<br />
È un codice ridondante: gli amminoacidi sono 20 mentre le triplette di nucleotidi possibili sono $4^3=64$ (mentre l'utilizzo di coppie di nucleotidi non permetterebbe di avere un numero sufficiente di combinazioni).

![[codoni.png]]

Questa ridondanza permette qualche grado di robustezza alle mutazioni: alcune variazioni di un nucleotide corrispondono allo stesso amminoacido, sono mutazioni sinonime. Le mutazioni nelle quali la codifica errata corrisponde ad un altro amminoacido sono dette **missenso**. I cambiamenti possono occorrere a causa di mutazioni (per radiazioni o chimiche), per errore (durante la replicazione) o per mancanza di correzione (dopo una mutazione o un errore).

Le mutazioni influiscono sul fitness della cellula rispetto all'ambiente. Infatti, i cambiamenti nelle funzioni della cellula determinano se la mutazione del DNA viene mantenuta o persa tramite la selezione naturale: in base a ciò, le mutazioni possono essere distinte in **miglioranti**, **peggioranti** o **neutrali**. Solo le mutazioni miglioranti e neutrali si propagano alla progenie.<br />
Le mutazioni che si propagano alla progenie sono, inoltre, solo quelle che coinvolgono le **cellule germinali** (non quelle somatiche).

Alcune sezioni di DNA sono molto simili in molti organismi e sono dette regioni conservate: esse corrispondono a funzioni di base e una mutazione in una tale regione sarà probabilmente peggiorante.

----------------------------------------------------------------

### Geni
Ogni **gene** è una porzione di DNA che codifica l'informazione riguardante una proteina. I geni hanno una lunghezza variabile tra i $10^2$ ed i $10^5$ nucleotidi. Un gene ha una porzione **trascritta** e una porzione **promoter**.

![[gene.png]]

Nella porzione trascritta si alternano **introni** ed **esoni**: gli esoni sono le regioni codificanti all'interno dei geni e sono trascrivibili in mRNA, mentre gli introni, ovvero le regioni non codificanti, vengono tagliati in un processo chiamato **slicing**. Per una trascrizione può essere utilizzato un sottoinsieme degli esoni di un gene: ogni sottoinsieme codificherà una proteina diversa (l'uomo possiede circa $20000$ geni, che sono in numero molto inferiore alle proteine che produce).

Il **promoter** regola la trascrizione: la trascrizione può avvenire solo in seguito all'attivazione del promoter causata da una proteina fattore di trascrizione, la quale permette all'enzima **RNA-polimerasi** di trascrivere il DNA. Questi meccanismi di regolazione sono influenzati anche da regioni distali chiamate **enhancer** e **silencer**. Nell'uomo, le regioni trascritte costituiscono solo il 3% del codice genetico: le porzioni restanti hanno, invece, funzioni regolatrici.

La trascrizione genica corrisponde all'espressione genica. Un numero di fattori di trascrizione necessita di essere presente o assente affinchè un gene sia espresso. Questi fattori sono proteine che sono regolate o a livello di proteine o di geni.

L'ammontare di mRNA di un gene presente all'interno della cellula è una misura del livello di espressione del gene. Questo livello di espressione del gene è determinato dalla sua regolazione. I geni coinvolti negli stessi processi saranno regolati similarmente e, perciò, avranno pattern di espressione simili.<br />
I geni necessari in certe condizioni saranno sovraregolati mentre quelli non necessari saranno sottoregolati.

----------------------------------------------------------------

## Dogma Centrale
Il dogma centrale della biologia molecolare riguarda il flusso unidirezionale dell'informazione biologica: nella forma più semplificata afferma che il DNA, contenente le informazioni riguardanti l'organismo, viene trascritto sul **mRNA** (**RNA messaggero**), il quale viene tradotto in proteine dai **ribosomi**. La trascrizione del DNA in mRNA avviene secondo il principio di corrispondenza delle basi descritto in precedenza:

$$A\rightarrow U\hspace{1in} T\rightarrow A\hspace{1in} C\rightarrow G\hspace{1in} G\rightarrow C$$

L'RNA messaggero interagisce nei ribosomi con il **tRNA** (**RNA di trasporto**): ogni tRNA trasporta un amminoacido e ha un **anticodone** con tre nucleotidi. Esso si legherà, quindi, ad un pezzo di RNA contenente la tripletta complementare. La sequenza di triplette nel mRNA codifica, quindi, una sequenza di amminoacidi, ovvero, una proteina.

----------------------------------------------------------------

## Dati biomolecolari
I tipi di dati che si utilizzano in biologia computazionale possono essere:
- sequenze (stringhe):
    - proteine (sequenze di amminoacidi);
    - geni, genomi (sequenze di nucleotidi).
- strutture molecolari (grafi di coordinate tridimensionali di atomi);
- reti di proteine (grafi di interazioni);
- dati su popolazioni;
- dati di espressione (matrici).

### Sequenze di DNA
Il sequenziamento del DNA parte dall'acquisizione di sequenze di RNA, che vengono convertite in **cDNA** (**complementary DNA**), più stabile. Queste sequenze di cDNA vengono amplificate (replicate in molte copie). Dopodiché le sottosequenze devono essere assemblate (**assembly**): una problematica è la disambiguazione di ripetizioni.<br />
Altre tecniche, dette di **deep sequencing**, invece, sequenziano direttamente sottosequenze (circa $10^3$ basi) di DNA.

----------------------------------------------------------------

### Dati su popolazioni
Grazie alla nuova disponibilità di dati genomici, è possibile fare analisi su popolazioni di individui, considerando le variazioni rispetto ad un genoma di riferimento: vengono considerate le deviazioni dalla norma, come **single nucleotide polymorphism** (**SNP**), inserzioni o delezioni (**indel**). Esistono però delle complicanze, in casi di eterozigosi.

----------------------------------------------------------------

### Espressione di proteine
Per acquisire dati sull'espressione delle proteine si possono utilizzare tecniche come lo spettrometro di massa, i **microarray** **protein-chip**, l'elettroforesi o l'immunoprecipitazione. Inoltre, è possibile misurare l'abbondanza di metaboliti.

----------------------------------------------------------------

#### Microarray 
La tecnologia dei **microarray** di DNA per lo studio degli acidi nucleici si basa sulla proprietà di questi ultimi di **ibridare**, cioè di riassociarsi con la propria sequenza complementare secondo le regole di appaiamento delle basi scoperte da Watson e Crick. Questa caratteristica degli acidi nucleici è alla base di molte delle loro proprietà biologiche nonché delle tecnologie tradizionali per studiare l’espressione genica. Grazie a questa proprietà, un frammento di acido nucleico può funzionare da sonda specifica per il riconoscimento della sua sequenza complementare, e permette quindi di identificarla anche in una miscela complessa. Il processo di ibridazione è estremamente selettivo, specifico e sensibile. Nelle tecniche tradizionali, la sonda è costituita da più molecole identiche di acido nucleico marcate generalmente con un isotopo radioattivo. Le molecole della sonda si trovano in fase liquida e solo un tipo di sonda alla volta può essere ibridata alle sequenze bersaglio dei campioni in esame, che sono invece ancorate a un supporto, il cosìddetto **DNA-chip**. Una volta che l’ibridazione è avvenuta e le molecole di sonda in eccesso sono state eliminate, sarà possibile per mezzo di autoradiografia visualizzare e quantificare il segnale emesso dalla sonda ibridata, che sarà proporzionale alla quantità di sequenza specifica contenuta nei campioni in esame.

Strutturalmente, i microarray sono costituiti da un supporto solido su cui sono disposte ordinatamente un numero elevato di sonde specifiche di DNA in maniera da formare una matrice di punti regolare. Ogni punto della matrice ha dimensioni tipicamente inferiori a 200 micron ed è costituito da molte copie della stessa sequenza di DNA. Esso rappresenta l’unità minima del microarray ed è chiamato **feature**. I microarray si classificano per il numero di features presenti sulla loro superficie, una sorta di misura della loro complessità e capacità di risoluzione. Ogni feature è costituita da più copie uguali di sequenze sonda (**probe sequences**), che ibrideranno con le sequenze bersaglio (**target sequences**) complementari marcate contenute nei campioni in esame.

----------------------------------------------------------------

## Genetica
La genetica è lo studio della trasmissione ereditaria del genoma: si interessa, inoltre delle relazioni tra il genotipo e il fenotipo (l'insieme delle caratteristiche ereditarie osservabili).

### Cromosomi
I cromosomi nelle cellule umane sono 46: 22 coppie di cromosomi omologhi (**autosomi**) e 2 cromosomi sessuali. Di ogni coppia di cromosomi, uno deriva dal gamete del padre e uno dal gamete della madre: i gameti sono cellule per la riproduzione (nell'uomo, spermatozoi e ovuli), che hanno 23 cromosomi ciascuno.<br />
Le mutazioni di un individuo si trasmettono alla prole solo se interessano i gameti: infatti, le altre cellule non influiscono sul DNA ereditato.

----------------------------------------------------------------

### Definizioni
Un **locus** è una posizione di un particolare nucleotide o di una sottosequenza all'interno di una sequenza di nucleotidi: un allele è una specifica variante ad un locus. L'insieme degli alleli di un individuo costituisce il suo genotipo.

Un **single nucleotide polymorphism** (**SNP**) è una variazione su un singolo nucleotide: sono molto comuni e il genoma umano ne ha, in media, uno ogni mille nucleotidi. La maggioranza degli SNP sono biallelici, ovvero hanno due possibili alleli: uno è detto **reference allele** e l'altro **alternative allele**. Il genotipo rispetto ad un allele viene indicato con il numero di reference allele nei due cromosomi: il genotipo 2 ha l'allele di riferimento in entrambi i cromosomi, il genotipo 1 lo ha solo in uno e il genotipo 0 ha in entrambi i cromosomi l'allele alternativo.

----------------------------------------------------------------

### Leggi dell'Erediterietà di Mendel
#### Legge di Segregazione
La prima legge di Mendel è la **legge di segregazione**, la quale asserisce che in ogni organismo, avente due alleli per ogni tratto fenotipico, gli alleli si separano durante la meiosi in modo tale che i gameti contengano solo uno degli alleli. Il figlio erediterà un allele da ciascun genitore.

----------------------------------------------------------------

#### Legge dell'Assortimento Indipendente
La seconda legge di Mendel è la **legge dell'assortimento indipendente**, la quale asserisce che tratti distinti si trasmettono indipendentemente gli uni dagli altri.

In realtà, tale legge non è sempre rispettata. È vero per tratti codificati su cromosomi diversi: infatti, la scelta di uno specifico cromosoma tra i due omologhi non influenza la scelta di uno specifico cromosoma di un'altra coppia di omologhi. Per alleli dello stesso cromosoma, invece, non è sempre vero, perché possono essere separati solo se il sito di crossover cade tra i loci degli alleli.

----------------------------------------------------------------

# Metodi di Apprendimento Automatico
I metodi di machine learning sono algoritmi di tipo **data driven**: si contrappongono alla programmazione tradizionale perché, anziché produrre un output da degli input e da un programma, producono un programma (un modello) a partire da input e output. Invece di scrivere un programma a mano, si colleziona una grande magnitudine di esempi i quali specificano l'output corretto per un input dato e si dà questo dataset in pasto ad un algoritmo di apprendimento automatico.

Sono, quindi, tre le principali componenti di un sistema di apprendimento automatico: la **forma di rappresentazione** del modello, la **funzione di valutazione delle performance** del modello prodotto e l'**algoritmo di ottimizzazione** che implementa l'apprendimento. Inoltre, è molto importante avere un formato di rappresentazione dei dati che sia adatto al sistema di apprendimento scelto ([[Albero di Decisione |alberi di decisione]], programmi logici, istanze, modelli grafici come le reti di Markov, [[Intelligenza Artificiale#Reti neurali |reti neurali]], support vector machines, ...).

Per quanto riguarda l'apprendimento, si possono distinguere algoritmi di apprendimento **supervisionato**, **non-supervisionato**, **semi-supervisionato** e apprendimento **con rinforzo**. Tipicamente, i problemi della biologia computazionale sono affrontati con tecniche supervisionate o semi-supervisionate, in quanto si parte da una base di dati più o meno etichettati.

I possibili approcci all'analisi genomica tramite machine learning si basano sul riconoscere strutture nel DNA. In particolar modo si cerca di ricostruire la storia evoutiva tramite la **comparazione genomica**, ovvero la ricerca di duplicazioni e riarrangiamenti o la ricostruzione della **filogenesi** delle specie (la ricostruzione delle tappe che caratterizzano l'evoluzione di un gruppo sistematico di animali o piante). Un altro obiettivo riguarda la ricerca dei geni e il tentativo di risoluzione della struttura genica. Ciò si dirama nell'identificare gli elementi promoter, le zone di splicing e le sequenze di coding.

I possibili approcci alla predizione delle proprietà delle proteine tramite machine learning si basano sull'utilizzo di sequenze di basi azotate, struttura di proteine (ovvero la loro forma), l'espressione di esse e la filogenesi al fine di predire la struttura delle proteine(ovvero le coordinate tridimensionali degli atomi), la loro funzione, la loro struttura e la localizzazione.

I possibili approcci alla medicina di precisione tramite machine learning mirano all'identificazione di cause molecolari di stati macroscopici (a partire da geni, SNP e ligandi si predicono fenotipo e dati clinici), all'identificazione e raffinamento di stati macroscopici (come clustering di dati riguardanti l'espressione genica) e alla simulazione dinamica di intere cellule o organi.

## Classe di ipotesi
La **classe di ipotesi** è l'insieme delle soluzioni ammesse dalle ipotesi effettuate alla base della specifica di un sistema di apprendimento: in particolare, il modello scelto determina la classe di ipotesi. L'apprendimento consisterà, quindi, nel cercare il migliore modello per il problema affrontato all'interno della classe di ipotesi.

----------------------------------------------------------------

## Ottimizzazione
L'ottimizzazione può sfruttare diverse tecniche, in particolare si distinguono tecniche di **ottimizzazione combinatoria** (ricerca greedy), **ottimizzazione convessa** (discesa del gradiente) e **ottimizzazione vincolata** (programmazione lineare).

----------------------------------------------------------------

## Valutazione
La valutazione consiste nel misurare come si comporta il sistema con esempi che non ha mai visto in precedenza: quanto è buono un sistema può essere determinato calcolando la **precisione**, l'**errore quadratico medio**, l'**entropia**, l'area sotto la **curva ROC** o **PRC**, ...

----------------------------------------------------------------

## Tipi di apprendimento
L'apprendimento può essere: 
1) [[Intelligenza Artificiale#Training delle ANN|apprendimento supervisionato]]: all'algoritmo di apprendimento viene fornito un insieme di coppie input/output e il sistema deve imparare la relazione tra di essi;
2) [[Intelligenza Artificiale#Training delle ANN|apprendimento non-supervisionato]]: all'algoritmo di apprendimento viene fornito un insieme input e il sistema deve imparare alcune proprietà dei dati (es. clustering, rilevamento di anomalie, information retrieval, compressione dei dati);
3) **apprendimento semi-supervisionato**: solo alcuni dati di input sono forniti insieme all'output corrispondente;
4) **apprendimento con rinforzo**: il sistema è un agente ed impara dal feedback che ottiene dall'interazione con l'ambiente.

![[learning.png]]

----------------------------------------------------------------

## Funzione di perdita
La funzione di perdita è una funzione che indica quanto la stima in uscita da un modello sia errata: l'apprendimento diventa, quindi, un problema di ottimizzazione il cui obiettivo è la **minimizzazione della funzione di perdita**.<br />
L'obiettivo, però, è minimizzare la perdita attesa su esempi sui quali il sistema non è stato addestrato: per stimare questo valore, si separano i dati in **training set** (dati usati per l'addestramento) e **test set** (dati usati per la valutazione).

### Funzione
La funzione scelta dipende dal problema affrontato: per problemi di classificazione l'errore consiste nello sbagliare la predizione e la funzione naturale è la funzione di perdita zero-uno

$$loss(y,\hat{y}) := \mathbb{I}\big (y=\hat{y}\big)$$

Per problemi di regressione, invece, la perdita è tanto maggiore quanto il valore predetto si discosta da quello misurato e la funzione più naturale è l'errore quadratico

$$loss(y,\hat{y}) := (y-\hat{y})^2$$

----------------------------------------------------------------

### Rischio empirico
Il **training error** è la media campionaria della funzione di perdita valutata sul training set ed è la funzione che l'algoritmo minimizza.

$$R_{emp} = \frac{1}{n} \sum_{i = 1}^{n}loss(g(x_i), t_i)$$

dove $\mathcal{D} = \big \{(x_i,y_i)\big \}_{i=1}^n$ è il training set e $\mathcal{H}$ è la classe di ipotesi. Il predittore $f^*$ è detto [[Statistical Methods for Machine Learning#Empirical risk minimization|minimizzatore del rischio empirico]].

$$f^* = \underset{\widehat{f}\in\mathcal{H}}{\operatorname{argmin}} \frac{1}{n} \sum_{i=1}^{N} loss \big(y_i, \hat{f}(x_i)\big)$$

----------------------------------------------------------------

### Rischio statistico
Il **rischio statistico** (o **rischio atteso**) è il valore atteso della perdita sull'universo dei dati e il minimizzatore di tale rischio è il minimizzatore del rischio statistico

$$f^* = \underset{\widehat{f}\in\mathcal{H}}{\operatorname{argmin}}\mathbb{E}\left[loss(y_i, \hat{f}(x_i))\right]$$

Per ottenere questo valore atteso sarà necessario conoscere la probabilità congiunta $p( X , Y )$, da cui si avrà che

$$f^* = \underset{\hat{f}\in\mathcal{H}}{\operatorname{argmin}} \int_{x\in X}\int_{y\in Y} loss\Big(y,\hat{f}(x)\Big)\,p(X=x,Y=y)\ dx\ dy$$

Se si conoscesse tale distribuzione, l'apprendimento non sarebbe necessario. In generale la distribuzione non è nota e, quindi, si stima il rischio atteso con il rischio empirico valutato sul test set.

----------------------------------------------------------------

### Decomposizione dell'errore
L'errore che compie un predittore può essere decomposto in due componenti. L'**errore strutturale** (o errore di **bias**) è l'errore introdotto dalla classe di ipotesi: ovvero, è l'errore che compie il miglior predittore all'interno della classe di ipotesi

$$\mathbb{E}\left[loss(y_i, f^*(x_i))\right] = \min_{\hat{f}\in\mathcal{H}}  \ \mathbb{E}\left[loss(y_i, \hat{f}(x_i))\right]$$

Invece, l'**errore di approssimazione** (o **errore di varianza**) è l'errore che compie il predittore ottenuto rispetto al miglior predittore della classe

$$\mathbb{E}\left[loss(y_i, \hat{f}(x_i))\right] - \mathbb{E}\left[loss(y_i, f^*(x_i))\right]$$

Come è evidente, l'errore totale è dato dalla somma delle due componenti.

----------------------------------------------------------------

## Stima dell'errore di generalizzazione
Ciò che interessa è minimizzare non il rischio empirico sull'insieme dei dati disponibili, ma il rischio atteso sull'intero dominio dei dati: occorre un metodo per la stima di tale errore. La teoria statistica dell'apprendimento di Vapnik fornisce una **maggiorazione del rischio statistico**
$$R(\omega) = R_{emp}(\omega) + \Phi\left(\frac{h}{m}\right)$$Questa quantità è il rischio empirico maggiorato di una confidenza $\Phi$ che dipende dalla complessità $h$ della classe di ipotesi e dalla cardinalità $m$ del training set. Una strada, quindi, è quella di analizzare a livello teorico il rischio atteso, ma un'altra è quella della stima sperimentale.

Per scegliere il predittore migliore nella classe in fase di training, dividiamo il training set in due insiemi: training set e **validation set**. Il training set è l'insieme utilizzato per l'apprendimento e il validation set l'insieme utilizzato per stimare l'errore di generalizzazione in fase di training: verrà scelto il modello con il
minor **validation error**, che sarà riaddestrato sulla totalità del training set. L'errore di generalizzazione viene, a questo punto, stimato con la perdita sul test set del predittore ottimo per il validation set.

La cross-validazione, invece, non è una tecnica per determinare il predittore migliore, ma per stimare l'errore di generalizzazione tipico di un algoritmo: esso viene eseguito con diverse configurazioni di training set e validation set, ottenendo predittori diversi. La media dei validation error costituisce una stima dell'errore di generalizzazione del predittore.

In ogni caso, training set, validation set e test set devono essere divisi in modo che siano indipendenti e identicamente distribuiti (tipicamente si effettuano partizioni causali).

Esistono metodi alternativi alla cross-validazione, come i metodi di **bootstrap** e i metodi **out-of-the-bag**.

### Hold Out
Nella validazione **hold-out**, i dati di training vengono divisi in due insiemi, che costituiranno il training set ed il validation set. Questa stima sarà fortemente dipendente da come sono stati partizionati i dati e, inoltre, sottrae dati al training: è possibile arginare questi problemi facendo un hold out ripetuto su bipartizioni casuali del dataset (**random subsampling**).

----------------------------------------------------------------

### Cross-validation
La **cross-validazione** può essere effettuata tramite **random subsampling** o tramite **k-fold cross-validation**. $K$-fold cross-validation consiste nel dividere i dati di training in $k$ insiemi indipendenti ed identicamente distribuiti: ad ogni iterazione $i\in[1,k]$ l'insieme $i$-esimo viene sottratto dai dati di training e utilizzato come insieme di validazione, mentre i restanti $k-1$ insiemi sono utilizzati come training set. Anche in questo caso la stima dell'errore di generalizzazione è data dalla media degli errori di validazione: la differenza sostanziale è che in questo caso ogni esempio viene considerato una e una sola volta come caso di test (e $k-1$ volte come dato di training).

Nel caso limite in cui $k$ è la dimensione del training set, k-fold cross-validation prende il nome di **leave-one-out cross-validation** (**LOOCV**): ad ogni iterazione il validation set è composto da un solo esempio, mentre tutti gli altri compongono il test set.

In generale, valori elevati di $k$ restituiscono una stima più realistica dell'errore di generalizzazione, ma richiedono un tempo maggiore per la procedura di cross-validazione. Per cui LOOCV viene utilizzato soprattutto su dataset molto piccoli, mentre random subsampling su dataset molto ampi.

----------------------------------------------------------------

## Algoritmi di Apprendimento Supervisionato
### KNN
**[[Statistical Methods for Machine Learning#The Nearest Neighbour algorithm |K-Nearest-Neighbours]]** è un algoritmo di classificazione che, dato un training set $D\in X\times Y$ e una funzione di distanza $d:X \rightarrow \mathbb{R}$ associa ad una nuova istanza $x$ l'etichetta più frequente tra i $k$ elementi più vicini a $x$ in $D$:

$$\underset{y \in Y}{\operatorname{argmax}}\Big \vert \Big \{ (x_i, y_i) \in D : y = y_i \text{ }\wedge \text{ } \vert \{ (x_j, y_j) \in D : d(x_j) \leq d(x_i)\}\vert  \leq k \Big \} \Big \vert$$

KNN è molto costoso: in termini di spazio perché richiede di avere in memoria tutto il dataset, e in termini di tempo, perché richiede di calcolare la distanza da ogni punto del dataset. Inoltre, per valori bassi di $k$ è molto sensibile al rumore, mentre per valori alti diventa ancora più costoso.

Inoltre, soffre della **curse of dimensionality**: in spazi ad alta dimensionalità i punti risultano più sparsi e la distanza risulta meno significativa. Sono necessarie tecniche di **dimensionality reduction** o di **feature selection**.

----------------------------------------------------------------

### Percettrone
Il **[[Intelligenza Artificiale#Threshold logic unit|percettrone lineare]]** effettua una sommatoria delle feature di input $x$ pesata secondo un vettore di pesi $w$, dopodiché la somma viene sogliata calcolando il segno della differenza rispetto ad un bias $\mu$

$$y = \text{sign}\left( \sum_{i=1}^{m}w_i\,x_i - \mu \right) = \text{sign}(w \cdot x - \mu )$$

Ponendo $x_0 = -1$ e $w_0 = \mu$, la notazione diventa più compatta

$$y = \text{sign}(w \cdot x)$$

Il vettore dei pesi $w$ rappresenta un iperpiano separatore (i punti $x : w\cdot x =0$) tra le etichette positive e negative ed è ciò che l'algoritmo deve apprendere.<br />
Al posto della funzione segno, è possibile utilizzare altre funzioni di attivazione, come la funzione sigmoide logistica

$$\sigma(x) = \frac{1}{1+e^{-x}}$$

Il vettore dei pesi può essere appeso con l'algoritmo di discesa del gradiente: aggiorniamo iterativamente il valore del vettore dei pesi nella direzione di massima diminuzione dell'errore (nella direzione del'antigradiente). Definito l'errore

$$E(w) = \sum_{t=1}^{m} loss(\sigma(wx^{(t)}),y^{(t)})$$

L'aggiornamento iterativo è

$$w \leftarrow w - \eta\cdot\nabla E(w)$$

dove $\eta$ è il parametro di *learning rate*. Il gradiente dell'errore è

$$\nabla E(w) = \left( \frac{\partial E(w)}{\partial w_i} \right)_{i=1}^{n} = \left( \frac{\partial \left[ \sum_{t=1}^{m} loss(\sigma(wx^{(t)}),y^{(t)}) \right] }{\partial w_i} \right)_{i=1}^{n}$$

Per $\sigma(x) = x$ e $loss(\hat{y},y)=\frac{1}{2}(\hat{y}-y)^2$

$$\nabla E(w) = \left( \frac{\partial \left[ \sum_{t=1}^{m} \frac{1}{2}\left(wx^{(t)}-y^{(t)}\right)^2 \right] }{\partial w_i} \right)_{i=1}^{n} = \left( \sum_{t=1}^{m} x_i^{(t)}\left(wx^{(t)}-y^{(t)}\right) \right)_{i=1}^{n}$$

L'algoritmo di discesa del gradiente è

```
initialize w
repeat
    for (x,y) ∈ D
        Δw := η(y - w · x) x
        w := w + Δw
until convergence
```

Condizioni di convergenza possono essere la convergenza dell'errore ($E(w) < \tau$) o dell'aggiornamento ($\Delta w < \tau$), oppure il raggiungimento di un numero di iterazioni prefissate.<br />
Per problemi di classificazione multiclasse, possono essere utilizzati $k$ percettroni: l'input rimane un vettore $x$, i pesi sono la matrice $W$ e le uscite il vettore $y$, dove
$$y = Wx\ :\ y_k = \sum_{j=1}^{k} W_{k,j}\,x_j$$

Questo modello è chiamato **percettrone a singolo strato**: la classe predetta può essere inferita osservando il massimo di $y$ (**winner takes all**), oppure si può esprimere la probabilità di ogni classe con un operazione come il **softmax**

$$\text{softmax}(y) = \frac{e^y}{\left|\left| e^{y} \right|\right|_1} = \left(\frac{e^{y_j}}{ \sum_{h=1}^{k}e^{y_h} }\right)_{j=1}^{k}$$

----------------------------------------------------------------

### Multi-Layer Perceptron
I percettroni a singolo strato possono apprendere solo funzioni lineari (e classi linearmente separabili): per apprendere funzioni non-lineari si utilizzano modelli composti da più strati di percettroni, le [[Intelligenza Artificiale#Artificial neural network |reti neurali]]. Il [[Intelligenza Artificiale#Multi-layer perceptron |percettrone multistrato]] è composto da più **layer** in sequenza, ed ogni layer è composto da più percettroni: il primo layer ha come input il vettore di ingresso, mentre il layer $i$-esimo ha come ingresso il layer precedente. Ogni strato ha una matrice di pesi associata

$$h_i = \begin{cases}
W_i\ x & i = 1 \cr \cr
W_i\ h_{i-1} & i > 1
\end{cases}$$

Il vettore $x$ è detto **input layer**, l'ultimo strato è detto **output layer** e i rimanenti strati intermedi sono detti **hidden layer**. Le reti neurali sono dette profonde (**deep neural networks**) tipicamente quando hanno più di due strati (più di uno strato nascosto, l'input non conta come strato).

In questo caso non è possibile utilizzare l'algoritmo di discesa del gradiente: l'algoritmo di training per le reti neurali è l'algoritmo di **back-propagation** (o algoritmo di retropropagazione dell'errore).

Alcune tecniche di regolarizzazione utilizzate sono il **weight decay** (la norma $L^2$ dei pesi viene aggiunto alla funzione di perdita, è una regolarizzazione Tikhonov o **ridge regression**) e il **dropout** (mettere un peso a zero con una probabilità fissata).

----------------------------------------------------------------

### CNN
Le **[[Intelligenza Artificiale#Deep Learning|convolutional neural networks]]** sono reti neurali in cui ogni strato viene ottenuto non dal prodotto matrice-vettore dei pesi e dello strato precedente, ma dalla loro convoluzione

$$y = w \ast x\ :\ y_i = \sum_{h=1}^{k} w_h\ x_{i-h}$$

Il vettore di pesi viene chiamato **kernel**. Le funzioni di convoluzione implementate sono anche diverse da quella ortodossa (detta **flipped-kernel**): ad esempio, può essere la funzione di cross-correlazione (senza rovesciamento del kernel, ma non commutativa). Gli strati convoluzionali possono implementare anche il padding (senza padding la lunghezza degli strati diminuisce inesorabilmente).

Un primo vantaggio delle CNN contro i MLP è che hanno meno parametri: i kernel sono generalmente piccoli, quindi occupano meno memoria, sono più semplici da apprendere (sono meno parametri) e implementano la sparsità delle connessioni (ogni strato è connesso solo al proprio **campo recettivo**) propria delle reti neurali naturali. I parametri, oltre a essere meno, sono anche gli stessi per ogni neurone dello stesso strato, ciò che cambia è la sezione di input che viene considerata: questo fenomeno è detto **parameter sharing**. In questo modo, le convoluzioni sono considerabili come un prodotto per una matrice di pesi con i vincoli enunciati di sparsità e di uguaglianza dei parametri e, quindi, possono essere considerate una regolarizzazione dei MLP.

Una proprietà delle CNN che deriva dall'utilizzo dell'operazione di convoluzione è che le trasformazioni da uno strato al successivo sono **equivarianti per traslazione**: una traslazione nel vettore di input corrisponde a una stessa traslazione nel vettore di output.

Le CNN possono avere input di arbitrarie dimensioni se si gestisce il **pooling** per ottenere questa proprietà, oppure utilizzando delle **fully convolutional networks**.

#### Layers
Gli strati di una rete convoluzionale sono complessi. Sono composti da:
- **stadio convolutivo**: è lo stadio che implementa la convoluzione dell'input per un kernel;
- **stadio non-lineare**: è lo stadio che applica la funzione di attivazione. La funzione di attivazione più comune nelle reti convoluzionali è la funzione ReLU

$$\text{ReLU}(x) = \begin{cases}
        x & x \geq 0\\
        0 & x < 0
        \end{cases}$$

- **stadio di pooling**: questo stadio calcola delle statistiche locali sull'output. Lo stadio di pooling più comune nelle reti convoluzionali è il **max pooling**, che restituisce il massimo di finestre dell'output: questo consente di avere un output invariante rispetto a piccole fluttuazioni dell'input;

Alternativamente, alcune tassonomie considerano strati semplici ed ognuno degli stadi sopra riportati costituisce uno strato a sé.

Ogni layer convolutivo può avere più kernel: in questo modo la rete può apprendere in parallelo più feature. Inoltre, fare pooling sui risultati di più kernel permette alla rete di apprendere delle invarianze: ad esempio, nel riconoscimento di immagini è utile apprendere l'invarianza alla rotazione.

----------------------------------------------------------------

#### Convoluzioni
Come abbiamo detto, le convoluzioni implementate non sempre sono uguali alla convoluzione matematica (spesso si usa la cross-correlazione). Esistono varie versioni della convoluzione. La **strided convolution** non calcola il risultato della convoluzione per tutti gli indici, ma solo 1 ogni $s$, che chiamiamo lo **stride** della convoluzione: questo è un metodo molto efficiente per ottenere
downsampling.

La **local connection** può essere vista come una convoluzione senza parameter sharing: ogni neurone è influenzato solo dal proprio campo recettivo nello strato precedente, ma i pesi cambiano da neurone a neurone. È anche chiamata **unshared convolution*. Non garantisce l'equivarianza per traslazione, ma permette di apprendere in un solo strato kernel diversi che dipendono dalla regione dell'input a cui sono applicati.

La **tiled convolution** è una via di mezzo tra convoluzione e local connection: viene appreso un set di kernel che si ripetono. Se lo strato sta apprendendo $n$ kernel, il neurone $i$-esimo userà il kernel $[i]_n$ .

Nel caso di input di alta dimensionalità, le convoluzioni possono essere rese più efficienti effettuando il filtraggio nel dominio delle frequenze: infatti, se il kernel ha dimensione $k$ e l'input $m$, la convoluzione ha complessità $O(k\cdot m)$, mentre la procedura FFT, prodotto elemento-per-elemento e IFFT ha complessità
$O(m\,\log{m})$ + $O(m)$ + $O(m\,\log{m})$ = $O(m\,\log{m})$ .

----------------------------------------------------------------

### SVM
**Support Vector Machine** è un algoritmo di apprendimento che produce il classificatore lineare dai margini massimali: nel caso di classi inearmente separabili, ciò vuol dire che tra gli infiniti iperpiani separatori viene determinato quello che massimizza la distanza dai punti di entrambe le classi.

Dato un vettore $w$, l'iperpiano definito da quel vettore è

$$S(w,b):=\{ x \in \mathbb{R}^N : w^Tx + b = 0 \}$$

Per avere il termine di bias incluso nel vettore $w$, fissiamo $x_1 := 1$

$$S(w):=\big \{ x \in \{1\}\times\mathbb{R}^N \ |\  w^Tx = 0 \big \}$$

Se il margine dell'iperpiano ha larghezza $\gamma$, vuol dire che un punto $x_m$ è esattamente sul margine se

$$\exists x_p\in S(w) : x_m = x_p + \frac{w}{\left|\left|w\right|\right|}\gamma$$

Dove $\frac{w}{\left|\left|w\right|\right|}$ è in effetti il versore normale all'iperpiano. Allora, data $f(x):=w^Tx$, vale

$$f(x_m) = w^Tx_m = w^T\left( x_p + \frac{w}{\left|\left|w\right|\right|}\gamma \right) = w^Tx_p + \frac{w^Tw}{\left|\left|w\right|\right|}\gamma$$

Ma $x_p\in S(w) \Rightarrow w^Tx_P = 0$, quindi

$$f(x_m) = \frac{\left|\left|w\right|\right|^2}{\left|\left|w\right|\right|}\gamma = \left|\left|w\right|\right|\gamma$$
 Tale misura verrà chiamata **margine funzionale**. Verrà chiamato, invece, ** margine geometrico** il rapporto

$$\gamma = \frac{f(x_m)}{\left|\left|w\right|\right|}$$

L'iperpiano canonico è ottenuto normalizzando l'iperpiano rispetto al margine funzionale

$$w_c = \frac{w}{f(x_m)} = \frac{w}{\left|\left|w\right|\right|\gamma}$$
$$f_c(x) = w_c^Tx = \frac{w^T}{\left|\left|w\right|\right|\gamma}x = \frac{f(x)}{\left|\left|w\right|\right|\gamma}$$

Il margine funzionale dell'iperpiano canonico vale

$$f_c(x_m) = \frac{f(x_m)}{\left|\left|w\right|\right|\gamma} = \frac{\left|\left|w\right|\right|\gamma}{\left|\left|w\right|\right|\gamma} = 1$$

Il margine geometrico dell'iperpiano canonico vale

$$\gamma_c = \frac{f(x_m)}{\left \vert\left \vert w_c\right \vert \right \vert} = \frac{f(x_m)}{\left \vert \left \vert \frac{w}{f(x_m)}\right \vert\right \vert} = \frac{1}{\left \vert \left \vert w\right \vert \right \vert}$$

D'ora in avanti considereremo solo iperpiani canonici, che sono gli iperpiani con margine funzionale unitario e margine geometrico $\frac{1}{\left|\left|w\right|\right|}$ . Esprimiamo allora, ciò che vogliamo: vogliamo massimizzare il margine

$$w^* = \underset{w\in \mathbb{R}^N}{\operatorname{argmax}} \frac{1}{\left|\left|w\right|\right|} = \underset{w\in \mathbb{R}^N}{\operatorname{argmin}} \left|\left|w\right|\right|$$

mantenendo una classificazione corretta per tutti i punti (siamo nel caso in cui il dataset sia linearmente separabile)

$$yw^Tx\geq 1\hspace{0.5in} \forall(x,y)\in D$$

Deve valere $yw^Tx\geq 1$ perché, per i punti sul margine in una delle due direzioni vale, come abbiamo mostrato prima, $|yw^Tx_m| = 1$ . Inoltre, il segno di $f(x_m)$ deve essere lo stesso di $y$ perché la classificazione sia corretta, quindi 

$$yw^Tx_m = \begin{cases}
(-1)\cdot (-1) & y = -1 \cr \cr
(+1)\cdot (+1) & y = +1 
\end{cases}\Rightarrow yw^Tx_m = 1$$

Per i punti oltre il margine deve valere $|w^Tx|>1$, quindi $yw^Tx > 1$. In generale arriviamo a dire che per tutti i punti vale $yw^Tx\geq 1$. Possiamo esprimere il tutto come un problema di ottimizzazione quadratica vincolata

$$w^* = \underset{w\in \mathbb{R}^N}{\operatorname{argmin}} \left|\left|w\right|\right|\hspace{0.2in}:\hspace{0.2in}yw^Tx\geq 1\hspace{0.1in} \forall(x,y)\in D$$

Risolvendo con KKT otteniamo che il vettore ottimo è determinato solo dai punti sul margine: questi saranno chiamati *support vector*. La soluzione ottima è descritta da un vettore di pesi $\alpha^*$ nulli per punti che non sono support vector

$$f_{\alpha}(x) = \sum_{(x_i,y_i)\in D} y_i\alpha_ix_i^Tx = \sum_{(x_i,y_i)\in D\ :\ x_i \in \mathcal{SV}} y_i\alpha_ix_i^Tx$$
$$w^* = \sum_{(x_i,y_i)\in D\ :\ x_i \in \mathcal{SV}} y_i\alpha_ix_i$$

Il bound sul rischio statistico che deriva dal teorema di Vapnik garantisce che

$$P \left( er(f) \leq \tilde{er}(f) + \sqrt{\frac{h\left( \ln{\frac{2n}{h}} + 1\right) - \ln{(\frac{\delta}{4})}}{n}}\ \right) \geq 1-\delta$$

Dove $n$ è la dimensione del training set e $h$ è la dimensione di Vapnik-Chervonenkis. Nel caso di SVM, se vale

$$\left|\left|x\right|\right| \leq R \hspace{0.8in} \forall x \in X$$
$$\left|\left|w\right|\right| \leq \Lambda \hspace{0.5in} \forall w : w\text{ is valid}$$

Allora vale 

$$h = R^2\Lambda^2$$

Una prospettiva di questo risultato è che l'algoritmo, minimizzando la norma del vettore $w$ sta anche minimizzando la dimensione di VC agendo sul termine $\Lambda$.

#### Soft-margin
In contrapposizione a **hard-margin** SVM, le SVM **soft-margin** permettono una violazione del vincolo di margine. Introducendo delle **slack variables** $\xi$, il problema risulta vincolato dalle condizioni

$$y_iw^Tx_i\geq1-\xi_i \hspace{0.5in}\forall(x_i,y_i)\in D$$

Per ottenere una classificazione il più corretta possibile, le violazioni del vincolo di margine devono essere nella minor misura possibile, quindi minimizziamo anche rispetto alle slack

$$w^* = \underset{w\in \mathbb{R}^N}{\operatorname{argmin}} \left|\left|w\right|\right| + C\sum_{(x_i,y_i)}\xi_i$$

Dove $C$ è un parametro di trade-off che regola la tolleranza verso la violazione del vincolo di margine: $C\rightarrow+\infty$ corrisponde al SVM hard-margin.

----------------------------------------------------------------

#### Kernel trick
Per apprendere classi non linearmente separabili, possiamo pensare di mappare l'input space in uno spazio a maggiore dimensionalità con una trasformazione non lineare: per il teorema di Cover, è più probabile ottenere una separazione lineare in uno spazio a maggior dimensionalità. Consideriamo, quindi, una mappa

$$\Phi: \mathbb{R}^d \rightarrow \mathbb{R}^m\ |\ d \ll m$$

Possiamo applicare SVM nello spazio $\mathbb{R}^m$, ottenendo l'iperpiano $w^*$ e la funzione $f_{\alpha^*}$

$$w^* = \sum_{(x_i,y_i)\in\mathcal{SV}} y_i\alpha_i^*\Phi(x_i)$$
$$f_{\alpha^*}(x) = \sum_{(x_i,y_i)\in\mathcal{SV}} y_i\alpha_i^*\Phi(x_i)^T\Phi(x)$$

I prodotti interni $\Phi(x_i)^T\Phi(x)$ hanno complessità lineare nella dimensione $m$ dello spazio di arrivo, che è molto alta. Però, è l'unica operazione che dobbiamo fare sugli input: cerchiamo una funzione *kernel* che implementi il prodotto interno nello spazio ad alta dimensionalità

$$K_\Phi: \mathbb{R}^d\times\mathbb{R}^d \rightarrow \mathbb{R}, (x,y) \mapsto \Phi(x)^T\Phi(y)$$

In questo modo, possiamo implementare la separazione in uno spazio a dimensionalità elevata con complessità computazionale determinata dalla funzione kernel

$$f_{\alpha^*}(x) = \sum_{(x_i,y_i)\in\mathcal{SV}} y_i\alpha_i^*K_\Phi(x_i,x)$$

Alcuni kernel molto utilizzati sono i kernel polinomiali, che implementano il prodotto interno nello spazio di tutti i polinomi dell'input di grado minore o uguale a $n\in\mathbb{N}^o$

$$K_n(x,y) = (1+x^Ty)^n$$

e i kernel gaussiani (di parametro $\sigma > 0$), che implementano il prodotto interno in uno spazio di dimensionalità infinita

$$K_\sigma(x,y) = e^{-\frac{\left|\left|x-y\right|\right|^2}{2\sigma^2}}$$

----------------------------------------------------------------

## Metriche di Valutazione

|    | P    |         N|
|-----|--- |----|
| P      | True Positive   |   False Positive |
| N | False Negative | True Negative |

I classificatori binari (molto usati in bioinformatica) possono predire due classi: positivo o negativo. In base al valore reale dell'esempio, si possono distinguere quattro casi: vero positivo, falso positivo, vero negativo e falso negativo. Si definiscono le seguenti misure:
- **precisione**: rapporto tra il numero di veri positivi e il numero di predizioni positive. Esprime la probabilità che una predizione positiva sia corretta

$$\frac{TP}{TP+FP} = P( \text{label}=P\ |\ \text{output}=P )$$

- **accuratezza**: percentuale di predizioni corrette. Esprime la probabilità che una predizione sia corretta
 
$$\frac{TP+TN}{TP+FP+TN+FN} = P( \text{label}=\text{output} )$$

- **sensitività** (o **recall**): rapporto tra il numero di veri positivi e il numero di positivi reali. Esprime la probabilità che un positivo sia correttamente riconosciuto

$$\frac{TP}{TP+FN} = P( \text{output}=P\ |\ \text{label}=P )$$

- **specificità**: rapporto tra il numero di veri negativi e il numero di negativi reali. Esprime la probabilità che un negativo sia correttamente riconosciuto

$$\frac{TN}{TN+FP} = P( \text{output}=N\ |\ \text{label}=N )$$

- $F_1$-score: media armonica tra precisione e recall. Spesso usata in machine learning 

$$\frac{2}{\frac{1}{\text{recall}}+\frac{1}{\text{precision}}} = \frac{2\,TP}{2\,TP+FP+FN}$$

### ROC
La curva ROC (**Receiver Operating Characteristic**) è un grafico che mostra le performance di un classificatore binario al variare della sua soglia di discriminazione: sull'asse delle ordinate è riportata la sensitività e sull'asse delle ascisse 1 meno la specificità (ovvero, la percentuale di veri positivi e la percentuale di falsi positivi).

Se il classificatore predice come negativi i valori sotto la soglia e come positivi i valori sopra la soglia. Con una soglia massima tutti gli esempi vengono classificati come negativi: la sensitività varrà $0$ e la specificità $1$. Con una soglia minima tutti gli esempi vengono classificati come positivi: la sensitività varrà $1$ e la specificità $0$. Per cui una curva ROC ha gli estremi nei punti $(0,0)$ e $(1,1)$.

Un classificatore perfetto avrebbe sensitività e specificità unitarie: passerebbe, dunque, per il punto $(0,1)$ . Solitamente, però, tale classificatore non è possibile a causa della casualità nei dati. Per misurare la bontà di un classificatore binario possiamo osservare quanto la curva ROC è simile alla curva del classificatore perfetto: utilizziamo a questo proposito l'area sotto la curva ROC (AUROC), che varrà $1$ per il classificatore perfetto e $0.5$ per il classificatore casuale uniforme (la cui curva ROC è la bisettrice del quadrante).



In figura è possibile osservare un esempio di curva ROC: sulla sinistra sono riportate le distribuzioni dei reali negativi $H_0$ e positivi $H_1$, nonchè un esempio di valore di soglia (in rosso) e sulla destra la curva ROC ottenuta facendo variare il valore della soglia.

----------------------------------------------------------------

### PRC
Consideriamo ciò che succede in una curva ROC per dati sbilanciati: ovvero, quando il numero di reali positivi è molto minore del numero di reali negativi.

Il rapporto di falsi positivi (1 meno la specificità), essendo i reali negativi molti, tende a non essere molto influenzato dal numero di falsi positivi: la misura tende a scendere molto lentamente al calare della soglia.

Al contrario, il rapporto di veri positivi (la sensitività), essendo i reali positivi pochi, tende a salire molto velocemente al calare della soglia.

Un classificatore che cerca di massimizzare sensitività e specificità su un insieme di dati altamente sbilanciato tenderà ad avere un elevato numero di falsi positivi, perché ad un grande guadagno nell'aumento di veri positivi per la sensitività non corrisponde una perdita altrettanto pesante in termini di specificità.

Per questo, su dati sbilanciati come sono i dati in bioinformatica, si preferisce utilizzare la **PRC** (**Precision-Recall Curve**), che riporta sulle ordinate la precisione e sulle ascisse la recall: la precisione, al contrario della specificità, è molto influenzata dal numero di falsi positivi e per niente influenzata dal numero di negativi reali.

L'ottimo per la curva precision-recall sarebbe il punto $(1,1)$ e un classifcatore casuale uniforme ha come curva il segmento tra $(0,1)$ e $(1,0)$ . Anche nel caso della PRC, possimo utilizzare l'area sotto la curva (AUPRC) come indicatore della performance del classificatore.



In figura si può osservare il confronto tra le curve PR e ROC per una famiglia di classificatori binari. Osservando la curva ROC, il classificatore migliore sembra quello di parametro $w = 1000$  
(curva nera), anche se molto simile ai concorrenti. Dalla PRC, invece, risulta evidente come tale classificatore sia uno dei peggiori, mentre risultano migliori i classificatori ottenuti con  
parametri intermedi (con $w = 1$ risulta pessimo per entrambe)

---------------------------------------------------------------

# Biologia Computazionale
I problemi della bioinformatica sono: la ricerca delle strutture del DNA, la predizione delle proprietà delle proteine (proteomica funzionale), la predizione di dati fenotipici a partire da dati genotipici (es. genomica medica).

Tipicamente, sono problemi risolti con tecniche di machine learning, perché sono troppo complessi per essere trattati con soluzioni teoriche. Inoltre, sono generalmente disponibili grandi moli di dati. I problemi della bioinformatica rappresentano una sfida per le tecniche di machine learning in quanto: i campioni sono tipicamente molto rumorosi e poco etichettati, inoltre sia gli input sia gli output possono essere dati strutturati ([[Array|array]], [[Albero|alberi]], [[Grafo|grafi]], ...) e composti da diversi tipi di dato elementari.

A questi problemi, si aggiungono anche i problemi di basso livello come l'elaborazione delle immagini e l'elaborazione di sequenze di dati.

Alcune applicazioni importanti sono nell'ambito della medicina genomica, che si basa sullo studio dei caratteri fenotipici e genotipici del paziente per determinare i trattamenti più adeguati. Diventa, così, possibile tutto un insieme di tecniche di diagnostica e terapia di precisione, che possono eventualmente servirsi di tecnologie all'avanguardia come quelle per l'editing del DNA.

## Cell variable
Abbiamo detto che i problemi della biologia computazionale sono spesso formulati nei termini di problemi di apprendimento supervisionato: predire il rischio di una malattia a partire da una sequenza di DNA non è, tuttavia, una funzione semplice da apprendere.

Spesso in bioinformatica si utilizzano delle variabili intermedie, chiamate **cell variable**, che rappresentano informazioni sulle caratteristiche biochimiche di una cellula. Possiamo separare il problema di apprendimento in due step: il primo si occupa della predizione delle cell variable a partire dalla sequenza di DNA e il secondo si occupa di predire il rischio della patologia a partire dalle cell variable.

----------------------------------------------------------------

## GWAS
I **Genome-Wide Association Studies** hanno raccolto dati sulla correlazione tra tratti fenotipici e genotipici: ad ogni patologia viene associata la significatività statistica delle mutazioni in loci particolari con tecniche di acquisizione basate su sequenziamento e microarray.

I GWAS hanno vari difetti. Innanzitutto, è molto difficile stabilire una significatività statistica di una mutazione potenzialmente causativa rispetto ad una variazione del rischio per una particolare patologia: in ogni caso, comunque, si tratta di una misura della correlazione e non della causalità. Inoltre, i GWAS restituiscono solitamente un grande numero di mutazioni potenzialmente causative (quindi, molti falsi positivi) e i ricercatori si sbilanciano rispetto ai preconcetti che
hanno in materia.

----------------------------------------------------------------

## Conservazione Evolutiva
Molti metodi sono basati sulla conservazione evolutiva del genoma: se l'evoluzione si muove sotto la spinta di mutazioni casuali e della selezione delle varianti più adatte, allora, una mutazione in una regione conservata è molto probabilmente deleteria.

Una mutazione è deleteria quando influisce negativamente sulla capacità riproduttiva dell'individuo: una mutazione deleteria è patogenica se è causa di una malattia.

----------------------------------------------------------------

## CADD
**Combined Annotation Dependent Depletion** (**CADD**) è uno strumento per la valutazione della **deleteriousness** delle varianti a singolo nucleotide e delle mutazioni per inserimento o delezione (**indel**) nel genoma umano.

Esistono molti metodi per l'annotazione delle varianti, ma molti tendono a sfruttare solamente un tipo di informazione o si riferiscono ad un tipo particolare di mutazione. CADD è un framework unico che integra più di 60 modalità di annotazione in una sola metrica, confrontando varianti reali con varianti simulate.

I *C-score* così ottenuti sono molti correlati alla patogenicità delle varianti sia in regioni *coding* che *non-coding*, che hanno riscontri in effetti regolatori verificati sperimentalmente.

### Dati per l'addestramento 
Il training del sistema viene effettuato su un dataset di 15 milioni di esempi positivi reali e 15 milioni di esempi negativi simulati.

Gli esempi positivi sono ottenuti come le varianti alleliche che hanno una frequenza superiore al 95%. Per gli esempi negativi, invece, si è ricavato un modello di progenitore dei primati: ogni allele di questa sequenza viene permutato secondo la distribuzione di probabilità ottenuta dal dataset.

----------------------------------------------------------------

### Scores
Le feature in ingresso sono le 63 modalità di annotazione, integrate con un piccolo numero di termini di interazione. Lo score in uscita (*raw C-score*) è stato calcolato per tutte le possibili 8.6 miliardi di varianti del genoma umano di riferimento: per rendere il punteggio più leggibile, il range è stato riscalato tra 1 e 99, ottenendo uno *scaled C-score*.

![[ecr-gata3.png]]

In figura è possibile osservare lo score di conservazione evolutiva del gene GATA3 forniti dal ECR browser ➮. Si notino le regioni colorate in blu, conservate in tutte le specie confrontate.

I *raw CADD score* sono il risultato diretto del modello e indicano, quando maggiori, una maggiore probabilità che la mutazione sia deleteria. I punteggi raw hanno un valore relativo e maggiore risoluzione, ma non hanno alcun valore assoluto.

Invece, gli *scaled CADD score* sono ottenuti come la scalatura per ordini di grandezza dei punteggi grezzi: le varianti al primo decile sono CADD-10, quelle al primo percentile sono CADD-20, quelle al primo millile CADD-30, ...Questi punteggi hanno, quindi, un'interpretazione immediata e sono confrontabili anche tra diverse versioni di CADD, ma hanno una risoluzione inferiore.

----------------------------------------------------------------

### Versioni
CADD $1.0$ utilizza come algoritmo di apprendimento un SVM lineare, mentre da CADD $1.1$ viene utilizzato un algoritmo di regressione logistica: inoltre, CADD $1.1$ estende leggermente l'insieme di annotazioni utilizzate. In CADD $1.3$ è stato aggiornato il training set.

----------------------------------------------------------------

## DeepSEA
**DeepSEA** è un sistema basato su deep learning per la predizione degli effetti degli SNP in regioni non-codificanti.

Come **cell variable**, vengono predette delle feature epigenetiche come siti di binding dei fattori di trascrizione, sensitività alla DNasi, ... per poi predire gli effetti sulla cromatina e ordinare le varianti.

L'analisi è rivolta alle regioni non-coding perché più del $96$% degli SNP nelle patologie tumorali sono in tali regioni: tuttavia, solo poche sono causative. Varianti in regioni non-codificanti possono essere deleterie interrompendo o creando motivi nelle sequenze del DNA che inibiscono o abilitano il legame di fattori di trascrizione o il binding di miRNA; inoltre, mutazioni negli introni possono modificare lo splicing.

### Variabili
L'input della rete è costituito dalla sequenza target e dalla regione circostante: viene stabilita una dimensione di finestra di $1000$ nucleotidi, di cui i $200$ nucleotidi centrali rappresentano la sequenza target. La codifica è binaria a $4$-bit e ogni base viene codificata con un uno sul bit corrispondente e con uno zero sugli altri tre bit: una sequenza din $n$ basi diventa, quindi, una matrice $4\times n$ di bit.

Le cell variable intermedie sono l'ipersensitività alla DNasi, i legami di fattori di trascrizione e i marker istonici. Esse sono predette per ogni finestra di $200$ basi dalla CNN.

Il predittore finale utilizza le cell variable per stimare l'effetto della variante.

----------------------------------------------------------------

### Rete Convoluzionale
Il primo layer della rete neurale di DeepSEA è composto da una matrice $D\times W$ di neuroni, dove il neurone $h_{d,w}$ si occupa di rilevare il motivo $d$ nella finestra $w$ . I motivi target hanno una lunghezza di $6$ basi: la larghezza della finestra è $6$, con un *hop size* di $1$. Quindi il numero di finestre $W$ è cinque unità in meno rispetto alla
lunghezza della sequenza (no padding).

Il numero di motivi è virtualmente variabile, ma tutti i neuroni $\{h_{d,w}\}_{w=1}^{W}$ cercano di rilevare lo stesso motivo: non ha senso usare uno strato completamente connesso, ma si sfrutta il parameter sharing degli strati convoluzionali per facilitare il training e ridurre il numero di parametri. Ogni motivo sarà, quindi, rilevato da uno specifico kernel $4\times 6$.

Ricapitolando: il primo layer di DeepSEA è uno strato convoluzionale con $D$ kernel $4\times 6$. Dopodiché viene applicata una funzione di attivazione ReLU e max pooling con stride di larghezza 4. A questo, seguono altri due strati convoluzionali con ReLU e max pooling. Infine, si trova uno strato completamente connesso con attivazione logistica e uno strato finale di output con $919$ neuroni e attivazione logistica.

----------------------------------------------------------------

### Boosting
L'output della rete convoluzionale restituisce $919$ feature: da queste si calcolano le differenze assolute ( $P(ref)-P(alt)$ ) e relative ( $\log{\frac{P(ref)}{P(alt)}}$ ) e si integrano gli score di conservazione evolutiva. Tutte queste feature ($1842$) sono preprocessate calcolandone il valore assoluto e sono standardizzate: il predittore viene ottenuto con un algoritmo di boosting per la regressione logistica.

----------------------------------------------------------------

## HyperSMURF
**HyperSMURF** (**Hyper-ensamble of SMote Undersampled Random Forests**) è un metodo di **hyper-esamble** per la predizione delle varianti deleterie in regioni non-codificanti, che affronta direttamente il problema dello sbilanciamento dei dati.

### SMOTE
I dati disponibili nel training set, come spesso accade in bioinformatica, sono estremamente sbilanciati: essi vengono ribilanciati sovracampionando la classe minoritaria e sottocampionando la classe maggioritaria.

La tecnica usata per il sovracampionamento della classe minoritaria è **SMOTE** (**Synthetic Minority Oversampling TEchnique**). Per creare un campione sintetico da un campione natutrale $x$ , viene scelto con probabilità uniforme $x_{knn}$ uno dei $k$ nearest neighbor del campione e un numero $\alpha$ tra $0$ e $1$ (con probabilità uniforme): il campione sintetico è dato dalla combinazione convessa dei due campioni $x$ e $x_{knn}$ con coefficienti $\alpha$ e $1$-$\alpha$ .

$$\text{SMOTE}(x) := (1-\alpha)\,x + \alpha\, x_{knn}\ :\ \alpha \leftarrow \text{rand}(0,1),\ x_{knn} \leftarrow \text{rand}(\text{KNN}(x))$$

![[SMOTE.png]]

In figura è possibile osservare lappresentazione schematica e lo pseudocodice dell’algoritmo hyperSMURF: i dati vengono partizionati, bilanciati e usati come training set degli algoritmi di apprendimento random forest, le cui predizioni vengono combinate.

----------------------------------------------------------------

### Hyper-ensemble
HyperSMURF è un metodo di hyper-ensemble. Un metodo di **ensemble** è un algoritmo di apprendimento in cui vengono addestrati più modelli: in fase di predizione, le etichette predette dai vari modelli vengono combinate per ottenere la predizione dell'ensemble. Nei metodi di **hyper-ensemble** vengono addestrati più ensemble.

HyperSMURF utilizza un hyper-ensemble di random forest: ogni random forest è un ensemble di [[Albero di Decisione|decision tree]]. Lo score predetto dall'hyper-ensemble è la media degli score predetti dalle random forest.

----------------------------------------------------------------

### Dati
L'algoritmo è stato sviluppato su due diversi dataset: uno relativo a patologie Mendeliane e uno relativo a dati GWAS.

I dati relativi a patologie Mendeliane sono stati estratti da banche dati pubbliche e sono score di conservazione evolutiva, feature relative alla trascrizione e alla regolazione e altre caratteristiche epigenomiche.

I dati GWAS, invece, sono mappati dalla sequenza di DNA in 1842 feature tramite la rete convoluzionale di DeepSEA e l'integrazione di score di conservazione evolutiva.

----------------------------------------------------------------

# Progetto
Il progetto da realizzare è composto da due parti:
1) il codice eseguibile per replicare i risultati del progetto. Questo può essere un semplice script in R oppure un notebook R. E' bene che il codice sia commentato propriamente al fine di valutare se lo studente ha compreso il codice stesso;
2) un report il quale descriva il problema considerato, gli approcci di apprendimento automatico applicati al fine di risolverlo, il set-up sperimentale, i risultati ottenuti ed una discussione dei risultati. 

Il prof
getto riguarda la scoperta di sottotipi di malattie tramite l'utilizzo di un dataset multiomico proveniente dal **TCGA**. Il dataset riguarda l'adenocarcinoma della prostata (codice: **PRAD**). Si considerino come sottotipi quelli identificati nel lavoro performato dal **The Cancer Genome Atlas Research Network**, nel quale viene utilizzato un modello di clustering integrativo su dati multiomici e vengono scoperti tre sottotipi della malattia.

Il procedimento può essere scomposto in:
1) download del dataset considerando tre differenti sorgenti di dati omici, quali mRNA, miRNA e i dati di espressione delle proteine;
2) pre-processing del dataset seguendo gli stessi step del paragrafo successivo. Durante il filtering per varianza, si selezionino le prime $100$ feature con la più alta varianza per ogni sorgente di dati;
3) download dei sottotipi di malattia (). Si noti che non tutti i sottotipi sono disponibili per l'insieme di sample avente tutte le sorgenti di dati omici considerate, perciò sarà necessario trattenere dal dataset multiomico solo i sample aventi un sottotipo associato;
4) check che i pazienti nel dataset multiomico e i sottotipi siano nello stesso ordine;
5) ...
6) ...
7) ...
8) ...
	1) ...
	2) ...
	3) ...
	4) ...
9) ...
10) ...
11) ...

## Report
Il report deve contenere le seguenti sezioni:
1) **INTRODUZIONE**: si illustrino i problemi della scoperta di sottotipi di malattie a partire da dati multiomici;
2) **METODI**: si descriva l'integrazione dei dati e gli approcci di clustering sfruttati. Si descriva, inoltre, il dataset utilizzato, i sottotipi di malattia considerati e le metriche utilizzate al fine di comparare i clustering ottenuti con i sottotipi di malattia. Si espliciti, infine, il preprocessing dei dati applicato;
3) **RISULTATI**: si presentino i risultati dei vari approcci utilizzando tabelle e grafici. Si discutano i risultati ottenuti. Si noti, inoltre, che i risultati non devono necessariamente essere buoni.

----------------------------------------------------------------

# Semi-supervised classification using graph-based algorithms on gene expression data
In this lesson, we will explore the application of different semi-supervised algorithms that work on graphs to predict if a patient has Acute Myeloid Leukemia (AML) or Acute Lymphoblastic Leukemia (ALL) from gene expression data.

# Install and load packages
First of all, we need to install all the packages needed for this lesson:

```r
if (!require("BiocManager", quietly = TRUE))

install.packages("BiocManager")

BiocManager::install("golubEsets");

BiocManager::install("hu6800.db");

BiocManager::install("annotate");

BiocManager::install("genefilter");

BiocManager::install("limma");

BiocManager::install("RBGL");

install.packages("PerfMeas");

install.packages("RANKS");

install.packages("SNFtool");

install.packages("caret");

install.packages("ROCR");
```

Now we can load the packages:

```r
library("golubEsets");

library("genefilter");

library("hu6800.db");

library("annotate");

library("RANKS");

library("caret");

library("ROCR");

library("SNFtool");## Annotation of microarrays

Let's look at the names of the features of our expression matrix. They are the names

of the corresponding probes (essentially codes defined by the company that

produces the microarray). However, we would like to have more interpretable names

that are immediately linked to biological information available online. Thus, we

need to map the "probesID" to other IDs (e.g. gene symbol, entrez ID, ensembl ID,

etc). This process is usually called "annotation".

```{r}

as.data.frame(expr[1:5, 1:5]);

```

To perform a correct annotation, we have to take into account the microarray chip

used for our experiment. This information is stored in the expressionSet

object and we need to install the corresponding Bioconductor package (hu6800.db)

containing all the information for annotation. I already installed and loaded

the package at the beginning of this notebook.

```{r}

# Get information about annotation file to use

ann <- annotation(Golub_Merge);

print(ann);

```

Now, we use the following code to map each probeID to a set of other IDs of

interest and we substitute the probeID with their gene symbol in the

expression matrix.

```{r}

# Perform annotation:

map <- select(hu6800.db, keys = colnames(expr), columns = c('PROBEID','ENSEMBL', 'ENTREZID', 'SYMBOL'), keytype="PROBEID");

idx <- match(colnames(expr), map$PROBEID);

colnames(expr) <- map[idx, "SYMBOL"];

# Print part of expression matrix:

as.data.frame(expr[1:5, 1:5]);

```
```

# Leukemia gene expression dataset
We will use a famous dataset available for R, called "Golub dataset", from the name of the first author of the corresponding study. The dataset is composed of 72 samples/patients having Leukemia and described by their gene expression profiles (i.e. the level of mRNA expression for each patient).<br />
The task is to predict their type of leukemia: Acute Lymphoblastic Leukemia (ALL) or Acute Myeloid Leukemia (AML).

The following code is used to load the dataset from the package "golubEsets":

```r
# Load data:

data(Golub_Merge);

# Print summary of the eSet object:

Golub_Merge;
```

As we can see, the data are stored in an object of class "ExpressionSet". An ExpressionSet is a data structure commonly used to represent genomic data, which allows to store and manipulate many different sources of information.

In particular, the following information are usually present:
- expression data often from microarray technology (we'll briefly see in the next section what are microarrays) - **AssayData**. Opposite to what we see in machine learning and data analysis application, the expression matrix has features in the rows and samples in the columns (note that this is quite common in genomics data);
- data describing the considered samples (e.g. age, sex, clinical condition, etc) - **phenoData**. We have the same number of rows in this matrix and columns in the expression data (i.e. the number of samples has to match). Also the names of the samples has to be the same. A **varMetadata** can be present to explain the meaning of the different columns;
- metadata related to features are also important - **Annotation** Since they are related to the used high-throughput technology (i.e. which microarray was used to perform the experiment), specific packages containing information on the different technologies are present on Bioconductor. We will see later how they are important to annotate each microarray probe. In pratice, annotation contains just a string with the name of the microarray chip used for the experiment, and we need this to install the corresponding annotation package;
- information about th experiment are available under **experimentData**;

In the following chunk of code, we will access the main different information we have in the Golub dataset:

```r
# Access expression matrix:

expr <- exprs(Golub_Merge);

as.data.frame(expr[1:5, 1:5]);

# Access phenotypic data:

pheno <- pData(Golub_Merge);

pheno[1:5, 1:5];

# Access the annotation data

message("The used chip is: ", annotation(Golub_Merge), "\n");

# Access the experiment data:

experimentData(Golub_Merge);
```

## What is a microarray?
A DNA microarray is a technology able to capture the expression of thousands of mRNA at the same time. It is composed of a slide where little spots of DNA molecules are attached to the surface (either directly synthesised on the surface or synthesized prior to deposition on the array). In each spot multiple copies of a specific DNA sequence are attached, which are called "probes" or "oligos", and represent part of a gene sequence. Then from a cell/tissue of interested we can extract the messenger RNA, which is subsequently retro-transcribed to cDNA. The molecules of cDNA are called targets. cDNA stands for complementary DNA because it is a sequence of DNA which nucleotides are complementary to that of the original mRNA sequence.<br />
Then, the cDNA coming from a specific sample is labelled using a fluorophore, which is a chemical compound that can emit light when excited. Then, the labelled cDNA molecules are released onto the slides and they can hybridize, which means that they can form hydrogen bounds with complementary probes.<br />
Not-hybridized targets are washed away and finally the slide is scanned to detect the signal coming from targets bound to probes. Since, total strength of the signal depends upon the amount of target sample binding to the probes present on that spot, we can have a quantification of the level of each transcript in a considered sample. In the figure we can see a one-color microarray, where a single sample is hybridized on the slide and we get the “absolute” expression level of the genes. However, also two-color microarray are common, where two samples with different labels can be evaluated at the same time and we consider the ratio between the two samples intensities (the two samples are labeled with different fluorophores emitting light in different spectra).

# Data pre-processing
The data needs to be pre-processed in order to remove features having low expression and low variance. Moreover, multiple features (i.e. probes) can point to the same gene in a microarray. We retain only the probe sets with the highest mean expression for each gene. Finally, data undergo to logarithmic transformation and standardization.

```r
# Transpose matrix (samples x features):

expr <- t(expr);

# Floor & ceiling

expr[expr < 100] <- 100;

expr[expr > 16000] <- 16000;

# Remove features having

mean <- apply(expr, 2, mean);

expr <- expr[, mean > 6];

sd <- apply (expr, 2, sd);

expr <- expr[, sd > 1];

# Retaining only the probe sets with the highest mean expression for each gene

idx <- findLargest(colnames(expr), apply(expr, 2, mean), data = "hu6800");

expr <- expr[, idx];

# Log_10 transformation

expr <- log(expr, 10);

# Standardization using z-score

zscore <- function(data){

zscore_vec <- function(x) { return ((x - mean(x)) / sd(x))}

data <- apply(data, 2, zscore_vec)

return(data)

}

expr <- zscore(expr);

print(dim(expr));
```

## Annotation of microarrays
Let's look at the names of the features of our expression matrix. They are the names of the corresponding probes (essentially codes defined by the company that produces the microarray). However, we would like to have more interpretable names that are immediately linked to biological information available online. Thus, we need to map the "probesID" to other IDs (e.g. gene symbol, entrez ID, ensembl ID, etc). This process is usually called "annotation".

```r
as.data.frame(expr[1:5, 1:5]);
```

To perform a correct annotation, we have to take into account the microarray chip used for our experiment. This information is stored in the expressionSet object and we need to install the corresponding Bioconductor package (hu6800.db) containing all the information for annotation. I already installed and loaded the package at the beginning of this notebook.

```r
# Get information about annotation file to use

ann <- annotation(Golub_Merge);

print(ann);
```

Now, we use the following code to map each probeID to a set of other IDs of interest and we substitute the probeID with their gene symbol in the expression matrix.

```r
# Perform annotation:

map <- select(hu6800.db, keys = colnames(expr), columns = c('PROBEID','ENSEMBL', 'ENTREZID', 'SYMBOL'), keytype="PROBEID");

idx <- match(colnames(expr), map$PROBEID);

colnames(expr) <- map[idx, "SYMBOL"];

# Print part of expression matrix:

as.data.frame(expr[1:5, 1:5]);
```

# Definition of the prediction task
We will attempt to predict if the considered patients have ALL (Acute Lymphoblastic Leukemia) or AML (Acute Myeloid Leukemia), which are two very different types of Leukemia. Leukemia is a collection of blood cancers originating from the bone marrow. Blood cells are not developing correctly leading to many different symptoms like: bleeding and bruising, bone pain, fatigue, fever, and an increased risk of infections.

The phenotypic data we extract before contain a column with the kind of leukemia. As prediction task, we label ALL as 1 and AML as 0.

```r
labels <- pheno$ALL.AML;

labels <- ifelse(labels == "ALL", 1, 0);

names(labels) <- rownames(pheno);

table(labels);
```

# Semi-supervised graph-based algorithms for classification
To perform our clinical outcome prediction, we will employ the following algorithms:
1) **Patient-Net (P-Net)** @gliozzo2020pnet: it is a novel semi-supervised network-based algorithm to rank and classify patients with respect to their odd to show a given outcome of interest. Briefly, in the first step the biomolecular profiles of patients are collected into a matrix. The predictor is constructed from patients’ molecular profiles using an undirected weighted graph, where the set of vertices corresponds to patients and the set of edges to the similarity between patients. From this similarity network among patients, a graph kernel (e.g. a random walk kernel) is applied to obtain weighted edges aware of the global topology of the network. The idea is to derive a new graph where there is an edge between each pair of nodes that are highly connected (i.e. there exist many short paths between them), in the original graph. This means that two nodes may be directly connected in the new graph even if they were not in the original graph.
2) **Label propagation (LP)** @zhu2002label.prop @bengio2006labelprop: it exploits the simple idea of iteratively propagating node's labels to neighboring nodes considering their proximity. The first step is the computation of the adjacency matrix $W$ using an appropriate similarity measure and of the diagonal degree matrix $D$. The vector of estimated labels $\hat{Y}$ is initialized with the known label for labeled nodes $Y_{l}$ (+1 or -1) and zero for the unlabeled nodes $Y_{u}$. Then, iteratively the labels are propagated though the graph, where $D^{-1}W$ can be interpreted as a probabilistic transition matrix showing the probability to jump from one node to another one. After the propagation step, the algorithm forces the labels on the labeled data to be $\hat{Y}_{l}=Y_{l}$ (i.e. label clamping). In this way, labeled data act like sources that "push out" labels thought the unlabeled data. Propagation and label clamping are repeated until convergence (stop criterion can be a pre-defined number of iterations). The computed score for each node $x_i$ can be used for classification by setting a threshold, e.g. the sign of $\hat{y_i}^{(\infty)}$. The main steps of the algorithm are showed below:
3) **Guilt-by-association (GBA)** @oliver2000GBA: This is an algorithm based on the principle of "guilt-by-association", which assumes that the label/score of a given node depends on the label/scores of their neighborhood @re2012fast. In particular, we will use the GBAmax algorithm. A score for each node $i$ is computed by taking the maximum of the weights $w_{i,j} \in W$, where $W$ is the adjacency matrixof the graph, connecting the node $i$ with nodes $j$ having positive label.

GBAmax and label propagation are already implemented in the package RANKS @valentini2016ranks, which was already loaded. Note that in the implementation of the label propagation we are using, both unlabeled and negative examples are set to zero. Moreover, we will apply a different threshold for classification.

```r
# Download P-Net repository and unzip it

download.file(url = "https://github.com/GliozzoJ/P-Net/archive/refs/heads/master.zip",

destfile = "pnet-master.zip");

unzip(zipfile = "pnet-master.zip");

file.remove("./pnet-master.zip");

# Load P-Net package

source("./P-Net-master/P-Net/pnet.R");
```

The first step is the computation of the adjacency matrix of the graph expressing the similarity between patients based on their gene expression profiles. To this end, many similarity measures are available in literature (a list in available in this paper @gliozzo2022heterogeneous). For this practice, we will consider the scaled exponential euclidean distance @wang2014similarity, defined as: 

$$W(i,j) = exp \left(- \frac{\rho(x_i,x_j)^2}{\mu \varepsilon_{ij}}\right)$$

where:
* $\rho(x_i, x_j)$ is the Euclidean distance between patients \(x_i\) and \(x_j\);
* $\mu$ is a parameter;
* $\varepsilon_{i,j}$ is a scaling factor: $\varepsilon_{i,j} = \frac{mean(\rho(x_i, N_i)) + mean(\rho(x_j, N_j)) + \rho(x_i, x_j)}{3}$, where \(mean(\rho(x_i, N_i))\) is the average value of the distances between \(x_i\) and each of its neighbors.

```r
# Compute similarity matrix:

Dist1 <- (SNFtool::dist2(as.matrix(expr),as.matrix(expr)))^(1/2);

W <- SNFtool::affinityMatrix(Dist1, K=20, sigma=0.5);
```

We will test the generalization performance of the considered algorithms using a stratified multiple holdout procedure (i.e. we repeat the classical holdout 10 times) on pre-computed data splits. In each split, we have 70 % training set and 30 % test set examples. For each considered algorithm, only the labels of the training set will be provided to the considered methods.

```r
# Create 10 data splits (set seed for reproducibility):

set.seed(123);

folds <- caret::createDataPartition(as.factor(labels), times = 10, p = 0.7,

list = TRUE);

# Iterate over splits and apply the algorithms on the training set:

gba <- matrix(numeric(nrow(W)*length(folds)), ncol=length(folds));

lp <- matrix(numeric(nrow(W)*length(folds)), ncol=length(folds));

pnet.s <- matrix(numeric(nrow(W)*length(folds)), ncol=length(folds));

pnet.l <- matrix(numeric(nrow(W)*length(folds)), ncol=length(folds));

for(i in 1:length(folds)){

# Compute indices of the positive examples for each fold

idx.pos <- which(labels[folds[[i]]] == 1);

idx.test <- setdiff(1:nrow(W), folds[[i]]);

# GBAmax

gba[, i] <- GBAmax(W, ind.positives = idx.pos)$p;

# Label propagation

lp[, i] <- label.prop(W, ind.positives = idx.pos)$p;

# P-Net

W_rw <- rw.kernel(W);

res <- pnet.class.heldout(W_rw, ind.pos = idx.pos, test=idx.test, score=KNN.score,

k=3);

pnet.s[, i] <- res$s;

pnet.l[, i] <- res$labels;

}
```

Note that we are providing as input only the indices of the positive examples (i.e. label is 1) in the training set. Thus, we use only this information to predict unlabeled examples in an unbiased way.

# Compute performance metrics and compare results
We consider the following classification metrics computed on the test set: precision, recall, specificity, f-measure, accuracy, AUC, AUPRC.

```r
# Normalize scores in the range [0,1] using min-max normalization.

minmax <- function(data){

minmax_vec <- function(x) { return ((x - min(x)) / (max(x) - min(x)))}

data <- apply(data, 2, minmax_vec)

return(data)

}

gba <- minmax(gba);

lp <- minmax(lp);

# Binarize scores

thr <- 0.5;

gba.bin <- ifelse(gba > thr, 1, 0);

lp.bin <- ifelse(lp > thr, 1, 0);

# Compute classification metrics on the test set

comp.perf <- function(scores, pred.labels, labels, ind.test){

metrics <- F.measure.single(pred.labels[ind.test], labels[ind.test])

pred_ROCR <- prediction(scores[ind.test], as.factor(labels[ind.test]));

auc_ROCR <- performance(pred_ROCR, measure = "auc");

auc_ROCR <- auc_ROCR@y.values[[1]];

aucpr_ROCR <- performance(pred_ROCR, measure = "aucpr");

aucpr_ROCR <- aucpr_ROCR@y.values[[1]];

# Store results

perf <- list(prec=metrics["P"], rec=metrics["R"], spec=metrics["S"],

fmeas=metrics["F"], acc=metrics["A"], auc=auc_ROCR,

auprc=aucpr_ROCR)

return(perf)

}

gba.res <- list();

lp.res <- list();

pnet.res <- list();

for (i in 1:length(folds)){

idx.test <- setdiff(1:nrow(W), folds[[i]]);

gba.res[[i]] <- comp.perf(gba[, i], gba.bin[, i], labels, idx.test);

lp.res[[i]] <- comp.perf(lp[, i], lp.bin[, i], labels, idx.test);

pnet.res[[i]] <- comp.perf(pnet.s[, i], pnet.l[, i], labels, idx.test);

}

gba.res <- matrix(unlist(gba.res), ncol = 7, byrow = TRUE);

lp.res <- matrix(unlist(lp.res), ncol = 7, byrow = TRUE);

pnet.res <- matrix(unlist(pnet.res), ncol = 7, byrow = TRUE);
```

Now we can compute the mean and standard deviation of the considered metrics to compare the prediction results of our graph-based approaches. Moreover, we plot the accuracy, AUC and AUPRC.

```r
# Create a barplot

means <- cbind(colMeans(gba.res), colMeans(lp.res), colMeans(pnet.res));

colnames(means) <- c("gba", "lp", "pnet");

rownames(means) <- c("prec", "rec.", "spec", "fmeas", "acc", "auc", "auprc");

print(as.data.frame(means));

sd <- cbind(apply(gba.res,2,sd), apply(lp.res,2,sd), apply(pnet.res,2,sd));

colnames(sd) <- c("gba", "lp", "pnet");

rownames(sd) <- c("prec", "rec.", "spec", "fmeas", "acc", "auc", "auprc");
```

```r
barCenters <- barplot(t(means[c("acc", "auc", "auprc"), ]), beside = T, ylim=c(0,1),

col = c("yellow", "green", "blue"));

arrows(barCenters, t(means-sd)[, c("acc", "auc", "auprc")],

barCenters, t(means+sd)[, c("acc", "auc", "auprc")], angle=90,code=3,

length=0.1, lwd=1.5)

legend(x = "topleft", legend = colnames(means), fill = c("yellow", "green", "blue"),

cex = 0.75)
```

# Session Info

```r
sessionInfo();
```

----------------------------------------------------------------

# Introduzione
Disease subtype discovery from multi-omics data is a complex task that involves the integration of diverse types of biological data, such as genomics, transcriptomics, proteomics, and metabolomics, to identify different disease subtypes that might respond differently to treatment.

One of the main challenges in this field is the high dimensionality of the data. Multi-omics datasets can contain thousands of features, and many of these features might be redundant or irrelevant. Therefore, feature selection and dimensionality reduction techniques are often employed to identify the most informative features.

Another challenge is the heterogeneity of the data. Different types of biological data might capture different aspects of the disease, and the relationships between these data types might not be straightforward. Integrating these data types requires sophisticated statistical methods, such as multi-view clustering, to identify disease subtypes that are consistent across the different data types.

Furthermore, the interpretation of the results can be challenging. The identification of disease subtypes based on multi-omics data is often an exploratory analysis, and the resulting subtypes might not have a clear biological interpretation. Therefore, additional experiments and analyses might be required to validate the subtypes and understand their biological relevance.

Overall, disease subtype discovery from multi-omics data is a challenging problem that requires sophisticated statistical methods, careful data preprocessing, and careful interpretation of the results.

Prostate adenocarcinoma is a heterogeneous disease with multiple subtypes that can vary in aggressiveness and response to treatment. Identifying these subtypes is important for personalized treatment and improving patient outcomes.

Multi-omics data, including genomics, transcriptomics, and proteomics, have been used to identify prostate adenocarcinoma subtypes. For example, a study published in the journal Cancer Cell in 2018 used multi-omics data from The Cancer Genome Atlas (TCGA) to identify seven molecular subtypes of prostate adenocarcinoma. These subtypes were associated with distinct clinical features and outcomes, suggesting that they represent biologically and clinically relevant subtypes.

The study used unsupervised clustering methods to integrate data from multiple platforms and identify the molecular subtypes. They found that different subtypes were associated with different pathways and biological processes, such as androgen signaling, cell cycle regulation, and DNA damage repair. The subtypes also showed different responses to treatments such as androgen deprivation therapy and chemotherapy.

Another study published in the journal Nature in 2019 used a similar approach to identify three molecular subtypes of prostate adenocarcinoma. These subtypes were associated with different genomic alterations, gene expression patterns, and clinical outcomes.

While these studies represent important advances in our understanding of prostate adenocarcinoma subtypes, there are still challenges in translating these findings to clinical practice. For example, there is a need for more standardized methods for subtyping and for validating the subtypes in independent datasets. Additionally, the complexity of multi-omics data and the need for sophisticated statistical methods and bioinformatics expertise can limit their widespread use in clinical settings.

In summary, multi-omics data can provide valuable insights into the molecular subtypes of prostate adenocarcinoma, which can have important implications for personalized treatment and improving patient outcomes. However, further research is needed to fully translate these findings into clinical practice.

The seven subtypes of prostate adenocarcinoma were identified using unsupervised clustering analysis of multi-omics data from The Cancer Genome Atlas (TCGA) project. The TCGA dataset includes comprehensive molecular profiling data, including genomics, transcriptomics, and proteomics, for hundreds of prostate adenocarcinoma samples.

The study used an algorithm called ConsensusClusterPlus to identify molecular subtypes of prostate adenocarcinoma based on gene expression, DNA methylation, and copy number alterations data. ConsensusClusterPlus is a robust clustering algorithm that combines multiple clustering methods and resampling techniques to identify stable and reproducible clusters.

The study identified seven molecular subtypes of prostate adenocarcinoma, which they named as: (1) Luminal A, (2) Luminal B, (3) Luminal INTP, (4) Luminal NE, (5) Basal, (6) Basal-like, and (7) Neuroendocrine-like. These subtypes showed distinct molecular and clinical features, such as different expression of genes involved in androgen signaling, cell cycle regulation, DNA damage repair, and immune response.

The study further validated the subtypes in independent datasets and found that the subtypes were associated with different clinical outcomes, such as biochemical recurrence, metastasis, and survival. These findings suggest that the subtypes represent biologically and clinically relevant subgroups of prostate adenocarcinoma.

In summary, the seven subtypes of prostate adenocarcinoma were identified using unsupervised clustering analysis of multi-omics data from TCGA, which provided a comprehensive view of the molecular features of the disease. The subtypes represent different biological and clinical entities that can have important implications for personalized treatment and improving patient outcomes.