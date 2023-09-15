# Elementi di Biologia Molecolare
Per **bioinformatica** (**bioinformatics**) si intende l'applicazione di metodi informatici per la gestione, l'elaborazione e l'analisi di dati biologici, soprattutto biomolecolari. Spesso viene usato intercambiabilmente il termine **biologia computazionale** (**computational biology**).

La bioinformatica si occupa anche di dati medici di tipo clinico o fenotipico, ma soprattutto è specializzata nella **genomica** (una branca della biologia molecolare che si occupa dello studio del **genoma** degli organismi viventi, ovvero il complesso dei geni di suddetti organismi) e nella **proteomica** (una branca della biologia molecolare che consiste nell'identificazione sistematica di proteine e nella loro caratterizzazione rispetto a struttura, funzione, attività, quantità e interazioni molecolari). Il focus del corso sarà posto, quindi, sulla biologia molecolare delle macromolecole degli acidi nucleici e delle proteine.<br />
Non rientrano nella bioinformatica, invece, le tecniche informatiche ispirate a princìpi biologici, come le reti neurali o i metodi di computazione evoluzionistica.

## DNA
Il **DNA** (**DesoxyriboNucleic Acid**) è un acido nucleico il quale contiene le informazioni geniche, necessarie alla formazione ed omeostasi degli esseri viventi, attraverso la biosintesi di RNA e proteine.<br />
Dal punto di vista chimico, si tratta di un polimero organico, il quale si trova nel nucleo delle cellule eucariote oppure libero nelle cellule procariote, ed è formato da due filamenti di monomeri, chiamati **nucleotidi**, direzionati in senso opposto. Ogni nucleotide è formato da un **gruppo fosfato** (fosfato organico), uno zucchero **desossiribosio** (ribosio senza gruppo idrossile) ed una **base azotata**.<br />

![[nucleotide.png]]

La doppia catena polinucleotidica del DNA ha struttura **antiparallela**, **spiralizzata** e **complementare**.<br />
Il fosfato organico e il desossiribosio sono uguali per tutti i nucleotidi e formano una **backbone** per la catena alternandosi: la **catena antisenso**, ovvero la catena antiparallela, è formata anch'essa da una backbone fosfato-zucchero, ma nell'ordine opposto. In pratica, ogni molecola di fosfato forma un ponte molecolare collegando, attraverso legami fosfodiesterici, il carbonio in posizione $3'$ di una molecola di deossiribosio con quello in posizione $5'$ dello zucchero successivo. Conseguenza di questi legami asimmetrici è che ogni filamento di DNA ha un **senso**, determinato dalla direzione dei legami fosfodiesterici. Le basi azotate, invece, si uniscono in posizione $1'$ dello zucchero desossiribosio con legami $N$-glicosidici. In una doppia elica, quindi, il senso di un filamento è opposto a quello del filamento complementare e, per tale motivo, i due filamenti che costituiscono una doppia elica sono detti antiparalleli.<br />
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

Come regola generale, le sequenze bersaglio marcate, costituite da DNA complementare (cDNA) preparato con l’enzima **trascrittasi inversa** dalla popolazione di RNA messaggero (mRNA) che si vuole esaminare, sono ibridate a sonde geniche specifiche distribuite e fissate su un supporto solido, il microarray.

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
I metodi di machine learning sono algoritmi di tipo **data driven**: si contrappongono alla programmazione tradizionale perché, anziché produrre un output a partire da degli input e da un programma, producono un programma (un **modello**) a partire da input e output. Invece di scrivere un programma a mano, si colleziona una grande magnitudine di esempi i quali specifichino l'output corretto per un input dato e si dà questo dataset in pasto ad un algoritmo di apprendimento automatico.

Sono, quindi, tre le principali componenti di un sistema di apprendimento automatico: la **forma di rappresentazione** del modello, la **funzione di valutazione delle performance** del modello prodotto e l'**algoritmo di ottimizzazione** che implementa l'apprendimento. Inoltre, è molto importante avere un formato di rappresentazione dei dati che sia adatto al sistema di apprendimento scelto ([[Albero di Decisione |alberi di decisione]], programmi logici, istanze, modelli grafici come le reti di Markov, [[Intelligenza Artificiale#Reti neurali |reti neurali]], support vector machines, ...).

Per quanto riguarda l'apprendimento, si possono distinguere algoritmi di apprendimento **supervisionato**, **non-supervisionato**, **semi-supervisionato** e apprendimento **con rinforzo**. Tipicamente, i problemi della biologia computazionale sono affrontati con tecniche supervisionate o semi-supervisionate, in quanto si parte da una base di dati più o meno etichettati.

I possibili approcci all'analisi genomica tramite machine learning si basano sul riconoscere strutture nel DNA. In particolar modo si cerca di ricostruire la storia evoutiva tramite la **comparazione genomica** (la ricerca di duplicazioni e riarrangiamenti) e tramite la ricostruzione della **filogenesi** delle specie (la ricostruzione delle tappe che caratterizzano l'evoluzione di un gruppo sistematico di animali o piante). Un altro obiettivo riguarda la ricerca dei geni ed il tentativo di risoluzione della struttura genica. Ciò si dirama nell'identificare gli elementi promoter, le zone di splicing e le sequenze di coding.

I possibili approcci alla predizione delle proprietà delle proteine tramite machine learning si basano sull'utilizzo di sequenze di basi azotate, della forma delle proteine, dell'espressione di esse e della filogenesi al fine di predire la struttura delle proteine (ovvero le coordinate tridimensionali degli atomi), la loro funzione e la loro localizzazione.

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

La funzione scelta dipende dal problema affrontato: per problemi di classificazione l'errore consiste nello sbagliare la predizione e la funzione naturale è la funzione di perdita zero-uno

$$loss(y,\hat{y}) := \mathbb{I}\big (y=\hat{y}\big)$$

Per problemi di regressione, invece, la perdita è tanto maggiore quanto il valore predetto si discosta da quello misurato e la funzione più naturale è l'errore quadratico

$$loss(y,\hat{y}) := (y-\hat{y})^2$$

----------------------------------------------------------------

### Rischio empirico
Il **rischio empirico** o **training error** è la media campionaria della funzione di perdita valutata sul training set ed è la funzione che l'algoritmo minimizza.

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

dove $\eta$ è il parametro di **learning rate**. Il gradiente dell'errore è

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
Le **[[Intelligenza Artificiale#Deep Learning|convolutional neural networks]]** (o **CNN**) sono un tipo di [[Intelligenza Artificiale#Reti neurali |reti neurali]] specializzato nel processing di dati strutturati in una topologia a griglia. Strutturalmente si tratta di semplici reti neurali che utilizzano la **convoluzione** al posto del prodotto matrice - vettore in almeno uno dei layer.<br />
Nella sua forma più generale, la convoluzione è un'operazione su due funzioni di un argomento a valori reali. Per motivare la definizione della convoluzione, iniziamo con esempi di due funzioni che potremmo utilizzare.
Supponiamo di essere in grado di monitorare la posizione di una navicella spaziale con un sensore laser. Il nostro sensore laser fornisce un'unica uscita $x(t)$, che rappresenta la posizione della navicella spaziale al tempo $t$. Sia $x$ che $t$ sono valori reali, il che significa che possiamo ottenere una lettura diversa dal sensore laser in qualsiasi istante di tempo.<br />
Supponiamo ora che il nostro sensore laser sia noisy. Per ottenere una stima meno rumorosa della posizione della navicella spaziale, vorremmo fare una media di diverse misurazioni. Naturalmente, le misurazioni più recenti sono più rilevanti, quindi vorremmo che fosse una media ponderata che dia maggior peso alle misurazioni recenti. Possiamo farlo con una funzione di pesatura $w(a)$, dove $a$ è l'età di una misurazione.<br />
Se applichiamo un'operazione di media ponderata in questo modo in ogni istante, otteniamo una nuova funzione che fornisce una stima della posizione della navicella spaziale.<\br />
La definizione matematica della convoluzione è:

$$s(t) = (x * w)(t) = \int_{a \in A} x(a) w(t-a)da$$

La convoluzione è tipicamente denotata con un asterisco.<br />
Nella terminologia delle reti convoluzionali, il primo argomento (in questo esempio, la funzione $x$) della convoluzione viene spesso chiamato **input** e il secondo argomento (in questo esempio, la funzione w) viene chiamato **kernel**. L'output è talvolta chiamato **feature map**. Nelle applicazioni di machine learning, l'input è solitamente una matrice multidimensionale di dati, e il kernel è di solito una matrice multidimensionale di parametri che vengono adattati dall'algoritmo di apprendimento. Chiameremo queste matrici multidimensionali **tensori**.

Nel nostro esempio, l'idea di un sensore laser che può fornire misurazioni in ogni istante di tempo non è realistica. Di solito, quando lavoriamo con dati su un computer, il tempo è discretizzato, e il nostro sensore fornisce dati a intervalli regolari. Nel nostro esempio, potrebbe essere più realistico assumere che il nostro laser fornisca una misurazione una volta al secondo. L'indice di tempo $t$ può quindi assumere solo valori interi. Se ora assumiamo che $x$ e $w$ siano definiti solo su $t$ interi, possiamo definire la convoluzione discreta:

$$s(t) = (x * w)(t) = \sum_{a = - \infty}^{\infty} x(a) w(t - a)$$

La convoluzione discreta è un'operazione che viene eseguita su dati campionati a intervalli regolari (in questo caso, ogni secondo) anziché su dati continui. Questo è più realistico per molte applicazioni pratiche in cui i dati vengono acquisiti in modo discreto a determinati istanti di tempo. La convoluzione discreta è quindi una versione approssimata della convoluzione continua, adattata alla natura discreta dei dati e del tempo nelle applicazioni digitali.

Nel contesto delle convoluzioni e delle operazioni su tensori utilizzate nelle reti neurali convoluzionali (CNN), è importante considerare la gestione efficiente della memoria.
Poiché ogni elemento dell'input e del kernel deve essere memorizzato separatamente in maniera esplicita, di solito assumiamo che queste funzioni siano nulle ovunque tranne che per il finito insieme di punti per cui memorizziamo i valori. Ciò significa che in molti casi, le dimensioni di input e kernel possono essere molto grandi, ma la maggior parte dei loro valori è zero. Ad esempio, se stiamo lavorando con un'immagine digitale, la maggior parte dei pixel dell'immagine è nera (valore zero) o rappresenta parti vuote, e solo alcune aree contengono effettivamente dati significativi. Pertanto, invece di memorizzare esplicitamente tutti i valori zero o non significativi nell'input e nel kernel, è conveniente memorizzare solo i valori non zero o significativi insieme alle informazioni sulla loro posizione. Questo permette di risparmiare memoria e di eseguire le operazioni di convoluzione in modo più efficiente.
In pratica possiamo implementare la somma infinita come una somma su un numero finito di elementi dell'array. La somma infinita menzionata si riferisce all'idea teorica di eseguire la convoluzione su tutte le possibili posizioni dell'input e del kernel, che sarebbe un processo infinito in termini matematici. Tuttavia, nella pratica, è possibile effettuare questa somma solo su un numero finito di elementi dell'array, poiché la maggior parte dei valori è zero e quindi non contribuisce al risultato finale.

Le funzioni di convoluzione implementate sono anche diverse da quella ortodossa (detta **flipped-kernel**): ad esempio, può essere la funzione di cross-correlazione (senza rovesciamento del kernel, ma non commutativa). Gli strati convoluzionali possono implementare anche il padding (senza padding la lunghezza degli strati diminuisce inesorabilmente).

La convoluzione sfrutta tre idee importanti che possono contribuire a migliorare un sistema di apprendimento automatico: **interazioni sparse**, **condivisione dei parametri** e **rappresentazioni equivarianti**. Inoltre, la convoluzione fornisce un modo per lavorare con input di dimensioni variabili.

I tradizionali layer di reti neurali utilizzano la moltiplicazione delle matrici mediante una matrice di parametri, con un parametro separato che descrive l'interazione tra ciascuna unità di input e ciascuna unità di output. Ciò significa che ogni unità di output interagisce con ogni unità di input. Le reti convoluzionali, tuttavia, presentano interazioni sparse (anche chiamate **connessioni sparse** o **pesi sparsi**). Questo viene realizzato rendendo il kernel più piccolo rispetto all'input (ogni strato è connesso solo al proprio **campo recettivo**). Ad esempio, quando si elabora un'immagine, l'immagine di input potrebbe avere migliaia o milioni di pixel, ma possiamo rilevare piccole e significative caratteristiche come i bordi con kernel che coprono solo decine o centinaia di pixel. Ciò significa che è necessario memorizzare meno parametri, il che riduce i requisiti di memoria del modello e ne migliora l'efficienza statistica. Significa anche che il calcolo dell'output richiede meno operazioni. Questi miglioramenti nell'efficienza sono di solito piuttosto significativi. Se ci sono $m$ input e $n$ output, la moltiplicazione delle matrici richiede $m \times n$ parametri e gli algoritmi utilizzati nella pratica hanno un tempo di esecuzione $\mathcal{O}(m \times n)$ (per esempio). Se limitiamo il numero di connessioni che ciascun output può avere a $k$, allora l'approccio a connessioni sparse richiede solo $k \times n$ parametri e un tempo di esecuzione $\mathcal{O}(k \times n)$. Per molte applicazioni pratiche, è possibile ottenere buone prestazioni nel compito di apprendimento automatico mantenendo $k$ più piccolo di $m$ di diversi ordini di grandezza. In una rete convoluzionale profonda, le unità nei livelli più profondi possono interagire indirettamente con una parte più ampia dell'input. Ciò consente alla rete di descrivere efficientemente interazioni complesse tra molte variabili costruendo tali interazioni da semplici blocchi di costruzione che descrivono ciascuno solo interazioni sparse. La **condivisione dei parametri** si riferisce invece all'uso dello stesso parametro per più di una funzione in un modello. In una rete neurale tradizionale, ogni elemento della matrice dei pesi viene utilizzato esattamente una volta nel calcolo dell'output di uno strato. Esso viene moltiplicato per un elemento di input e poi non viene più esaminato. Come sinonimo di condivisione dei parametri, si può dire che una rete ha pesi legati, perché il valore del peso applicato a un input è legato al valore di un peso applicato altrove. In una rete neurale convoluzionale, ciascun elemento del kernel viene utilizzato in ogni posizione dell'input.

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

- **stadio di pooling**: questo stadio calcola delle statistiche locali sull'output. Lo stadio di pooling più comune nelle reti convoluzionali è il **max pooling**, che restituisce il massimo di finestre dell'output: questo consente di avere un output invariante rispetto a piccole fluttuazioni dell'input.

Alternativamente, alcune tassonomie considerano strati semplici ed ognuno degli stadi sopra riportati costituisce uno strato a sé.

Ogni layer convolutivo può avere più kernel: in questo modo la rete può apprendere in parallelo più feature. Inoltre, fare pooling sui risultati di più kernel permette alla rete di apprendere delle invarianze: ad esempio, nel riconoscimento di immagini è utile apprendere l'invarianza alla rotazione.

----------------------------------------------------------------

#### Convoluzioni
Come abbiamo detto, le convoluzioni implementate non sempre sono uguali alla convoluzione matematica (spesso si usa la cross-correlazione). Esistono varie versioni della convoluzione. La **strided convolution** non calcola il risultato della convoluzione per tutti gli indici, ma solo 1 ogni $s$, che chiamiamo lo **stride** della convoluzione: questo è un metodo molto efficiente per ottenere
downsampling.

La **local connection** può essere vista come una convoluzione senza parameter sharing: ogni neurone è influenzato solo dal proprio campo recettivo nello strato precedente, ma i pesi cambiano da neurone a neurone. È anche chiamata **unshared convolution*. Non garantisce l'equivarianza per traslazione, ma permette di apprendere in un solo strato kernel diversi che dipendono dalla regione dell'input a cui sono applicati.

La **tiled convolution** è una via di mezzo tra convoluzione e local connection: viene appreso un set di kernel che si ripetono. Se lo strato sta apprendendo $n$ kernel, il neurone $i$-esimo userà il kernel $[i]_n$ .

Nel caso di input di alta dimensionalità, le convoluzioni possono essere rese più efficienti effettuando il filtraggio nel dominio delle frequenze: infatti, se il kernel ha dimensione $k$ e l'input $m$, la convoluzione ha complessità $\mathcal{O}(k\cdot m)$, mentre la procedura FFT, prodotto elemento-per-elemento e IFFT ha complessità
$\mathcal{O}(m\,\log{m})$ + $\mathcal{O}(m)$ + $\mathcal{O}(m\,\log{m})$ = $\mathcal{O}(m\,\log{m})$ .

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
Il primo layer della rete neurale di DeepSEA è composto da una matrice $D\times W$ di neuroni, dove il neurone $h_{d,w}$ si occupa di rilevare il motivo $d$ nella finestra $w$ . I motivi target hanno una lunghezza di $6$ basi: la larghezza della finestra è $6$, con un *hop size* di $1$. Quindi il numero di finestre $W$ è cinque unità in meno rispetto alla lunghezza della sequenza (no padding).

Il numero di motivi è virtualmente variabile, ma tutti i neuroni $\{h_{d,w}\}_{w=1}^{W}$ cercano di rilevare lo stesso motivo: non ha senso usare uno strato completamente connesso, ma si sfrutta il parameter sharing degli strati convoluzionali per facilitare il training e ridurre il numero di parametri. Ogni motivo sarà, quindi, rilevato da uno specifico kernel $4\times 6$.

Ricapitolando, il primo layer di DeepSEA è uno strato convoluzionale con $D$ kernel $4\times 6$. Dopodiché viene applicata una funzione di attivazione ReLU e max pooling con stride di larghezza 4. A questo seguono altri due strati convoluzionali con ReLU e max pooling. Infine, si trova uno strato completamente connesso con attivazione logistica e uno strato finale di output con $919$ neuroni e attivazione logistica.

----------------------------------------------------------------

### Boosting
L'output della rete convoluzionale restituisce $919$ feature: da queste si calcolano le differenze assolute ( $P(ref)-P(alt)$ ) e relative ( $\log{\frac{P(ref)}{P(alt)}}$ ) e si integrano gli score di conservazione evolutiva. Tutte queste feature ($1842$) sono preprocessate calcolandone il valore assoluto e sono standardizzate: il predittore viene ottenuto con un algoritmo di boosting per la regressione logistica.

----------------------------------------------------------------

# Predizione di varianti patogene
Diverse malattie sono causate da alterazioni del DNA (mutazioni) che possono essere ereditate (nelle malattie genetiche) o determinate dall'ambiente. Molte malattie, compreso il cancro, sono determinate sia da mutazioni del germline che da mutazioni somatiche. È cruciale:
1) rilevare varianti genetiche;
2) prevederne la potenziale patogenicità;
3) trovare terapie precise mirate alle varianti patogene.

Dato
1) un insieme di varianti genetiche (esempi);
2) un insieme di annotazioni associate a ciascuna variante (caratteristiche);
3) un insieme di etichette (patogenico/controllo) associate a ciascuna variante
il prevedere se una variante genetica (esempio) è patogena è considerato un **problema di classificazione** o **prioritizzazione**.

La sfida attuale riguarda lo studio delle varianti nelle regioni non codificanti: come possono alterare gli elementi di regolazione

Innanzitutto, i principali elementi di regolazione sono:
   - i **promoters**, sequenze del DNA situate nella regione 5' dei geni le quali attivano la trascrizione attraverso la RNAPII. Attraverso l'azione di vari fattori di trascrizione (TF), la RNAPII si lega a una sequenza di consenso chiamata scatola TATA, formando il complesso di iniziazione della trascrizione RNAPII. Il complesso RNAPII inizia quindi la trascrizione del gene;
   - gli **enhancers**, brevi regioni del DNA che possono essere legate da proteine leganti il DNA chiamate attivatori. Aumentano la trascrizione genica attraverso la loro interazione con la RNAPII. Possono trovarsi a migliaia di coppie di basi di distanza dal sito di inizio della trascrizione (TSS). Attraverso la loro interazione con gli attivatori, spesso formano cicli di DNA che le avvicinano alla regione promotore;
   - i **silencers**, brevi sequenze di DNA che si legano a proteine leganti il DNA chiamate repressori, causando una diminuzione nella trascrizione genica. Inoltre, inibiscono altri elementi genomici come i promotori. Possono trovarsi vicino al TSS o a migliaia di coppie di basi di distanza da esso, formando cicli di DNA utilizzando proteine leganti il DNA e altre proteine per avvicinarsi alle regioni promotrici.
   - gli **insulators**, brevi sequenze di DNA che impediscono le interazioni tra domini di cromatina. Ad esempio, il fattore di legame CCCTC (CTCF) può agire come isolante sia bloccando le interazioni tra enhancer e promotori che impedendo l'espansione dell'eterocromatina, agendo efficacemente come una barriera di cromatina.

----------------------------------------------------------------

# Biological Networks
Non possiamo comprendere la vita semplicemente caratterizzando i suoi singoli componenti, ma considerando le interazioni e le relazioni tra i suoi componenti: è necessario un approccio sistemico. Le **reti biologiche** sono strumenti fondamentali nel contesto della **biologia dei sistemi**. I dati omici (dati genomici, trascrittomica, proteomici) vengono utilizzati per costruire reti biologiche e vengono applicati metodi di teoria dei grafi e di apprendimento automatico per modellare e analizzare questi oggetti complessi.

## Intra-cellular Networks
Il funzionamento cellulare si basa su un ampio insieme di relazioni fortemente interconnesse tra le molecole (DNA, RNA, proteine, metaboliti). La maggior parte delle attività cellulari si basa sulle interazioni tra diverse molecole. Gli elementi fondamentali in queste complesse reti di interazioni sono le proteine.

Queste reti descrivono il funzionamento della cellula a diversi livelli e sono interconnesse:
- reti metaboliche;
- reti di regolazione trascrizionale;
- reti di segnalazione;
- reti di interazione proteina-proteina (PPI);
- reti strutturale delle proteine.

### Reti Metaboliche
Gli elementi che compongono le reti metaboliche sono:
  - i **metaboliti**: piccole molecole, come il glucosio o gli aminoacidi;
  - le **vie metaboliche**: insiemi ordinati di reazioni biochimiche che realizzano una specifica funzione biologica. Le vie metaboliche sono strutturate in pathways in cui un metabolita viene trasformato in un altro metabolita.
  - gli **enzimi**: proteine specializzate con attività catalitica, i quali guidano ciascun passaggio di ciascuna via.

I nodi nella rete rappresentano metaboliti e, eventualmente, anche enzimi, mentre i collegamenti rappresentano reazioni biochimiche.

Queste reti rappresentano l'insieme delle reazioni biochimiche che consentono agli organismi di rinnovare la loro energia, di rispondere agli stimoli esterni, di crescere, di mantenere la loro struttura e di mantenere il loro equilibrio dinamico (**omeostasi**).

----------------------------------------------------------------
### Reti di Regolazione Genica
I nodi all'interno di queste reti sono geni e fattori di trascrizione.
Le interazioni possono essere unidirezionali o bidirezionali e di attivazione o inibizione.

----------------------------------------------------------------

### Reti Drug-Target
I farmaci possono essere collegati tramite archi ai loro bersagli proteici conosciuti.

----------------------------------------------------------------

### Disease Network
Ogni nodo corrisponde a un disturbo distintivo, colorato in base alla classe di disturbo. Le dimensioni di ciascun nodo sono proporzionali al numero di geni nel disturbo corrispondente, e la spessore dei collegamenti è proporzionale al numero di geni condivisi tra i disturbi collegati dal collegamento.

----------------------------------------------------------------

# Learning from Unbalanced Data
Lo **sbilanciamento** caratterizza diversi contesti. Ci sono diverse ragioni per cui possa accadere:
- il costo eccessivo dell'etichettatura dei dati;
- l'etichettatura potrebbe dipendere dai risultati della ricercaç
- il problema in questione può essere intrinsecamente sbilanciato.

I classificatori di solito assumono, benchè in maniera erronea, che i dati siano bilanciati e il costo uguale di classificazione errata.

Il fallimento delle regole induttive di generalizzazione per la classe di dati con freqeunza minore comporta il rischio di overfitting.<br />
Ma quando un problema di classificazione binaria è sbilanciato? Supponiamo che i punti siano vettori $x \in \mathbb{R}^n$. Possiamo quindi definire la rarità relativa e assoluta dei dati come:
- **rarità relativa**, ad esempio, $10^6 \vert 10^3$: la classe minoritaria è in minoranza, ma non necessariamente rara. Può essere appresa con precisione;
- **rarità assoluta**, ad esempio, $10^3 \vert 1$: la classe minoritaria non è solo in minoranza, ma è anche mal definita.

Quando i dati sono sbilanciati, i classificatori classici cercano di ridurre le quantità globali (ad esempio, il tasso di errore), tendendo quindi a classificare erroneamente gli esempi della classe minoritaria. In questo modo, però, si fallisce nella generalizzazione delle regole induttive tramite algoritmi di apprendimento:
- si ha difficoltà nell'apprendimento su un maggior numero di caratteristiche ma con meno campioni;
- i classificatori naive spesso sono inclini verso la classe di maggioranza;
- si corre il rischio di overfitting.

Nella network medicine, molti problemi vengono modellati come [[Grafo |grafi]], in cui i nodi sono istanze (ad esempio pazienti, proteine/geni) e gli archi rappresentano le loro relazioni (ad esempio profili clinici o genetici simili). Definendo il grafo come: G = 〈V, W, y〉, L ⊂ V etichettato, U = V\L. Di solito si propagano le etichette attraverso la rete e si esegue l'Inferenza(U) per minimizzare yTWy (o usando il Laplaciano di W). Questi sono metodi generici che rientrano nella categoria generale di metodi. Cosa fare quando y è sbilanciato? Gli approcci canonici considerano il proiettare il grafo su un feature space (con perdita di informazioni) oppure  introdurre regolarizzazioni non convesse.<br />
Un'altra soluzione si basa sulle [[Intelligenza Artificiale#Hopfield network|Hopfield Networks]].
Si consideri un ambito di apprendimento semi-supervisionato in cui i nodi rappresentano le istanze, le connessioni sono precomputate e possono essere pesate e i nodi sono suddivisi in etichettati e non etichettati per la task attuale.
L' obbiettivo consiste nel trasformare i punti interrogativi in nodi blu o neri.

![[Semi-supervised learning setting.png]]

Questo problema può essere risolto utilizzando le Hopfield Network in quanto sono efficienti ottimizzatori locali. i vantaggi che comportano sono:
- il massimizzare la somma pesata dei bordi coerenti e ciò si ottiene tramite il minimizzare la funzione di energia;
- la convergenza di solito richiede poche iterazioni;
- flessibilità.

Gli svantaggi invece comprendono:
- l'incagliarsi dell'algoritmo in minimi locali invece che nel minimo globale;
- la presenza di attrattori triviali;
- la mancata gestione dello sbilanciamento delle labels.


----------------------------------------------------------------

# Kernels on Graphs
## Il problema della previsione degli esiti clinici
La previsione degli esiti clinici è un problema ben consolidato nella biologia computazionale e comprende diverse attività (ad esempio, la previsione della risposta ai farmaci, la prognosi, la diagnosi, la ricorrenza delle malattie). In questo contesto, i metodi all'avanguardia impiegano:
- modelli induttivi supervisionati che utilizzano biomarcatori selezionati per prevedere l'outcomes di interesse. Questi metodi, tuttavia, non tengono esplicitamente conto delle relazioni tra gli individui;
- approcci non supervisionati basati su reti per scoprire sottotipi di malattie. Questi metodi non sono adatti per problemi di previsione degli esiti;
- metodi **transduttivi** semi-supervisionati basati su reti che utilizzano **reti di similarità tra pazienti** (PSN) basate sui profili biomolecolari dei soggetti.  È infatti importante se non fondamentale considerare sia le relazioni tra i pazienti che i dati non etichettati nel processo di previsione.

La **trasduzione** o **inferenza transduttiva** è il ragionamento dai casi specifici osservati (training) ai casi specifici (test). In contrasto, l'induzione è il ragionamento dai casi di addestramento osservati a regole generali, che vengono poi applicate ai casi di test.

![[Inductive vs Transductive.png]]

----------------------------------------------------------------

## Kernel on graph
In modo informale, un [[Statistical Methods for Machine Learning#Kernel functions|kernel]] è un modo conveniente per calcolare un prodotto interno tra due vettori $x$ e $x'$ nello spazio delle caratteristiche, comunemente caratterizzato da una dimensionalità superiore rispetto a quella dello spazio di input.

Si consideri un mapping $\psi : \mathbb{R}^n \to \mathbb{R}^m (m >> n)$. Una kernel function tra due vettori $x$ e $x'$ è definita come $k(x, x') = \psi(x)^\top \psi(x')$.

Una funzione kernel rappresenta i dati attraverso confronti a coppie e assegna a ciascuna coppia di vettori un valore reale:

$$k: \mathcal{X} \times \mathcal{X} \to \mathbb{R}$$

$k(x, x')$ può essere interpretato come una misura di similarità tra $x$ e $x'$. Quindi, quando $k(x, x')$ è elevato, allora $x$ e $x'$ sono simili.

Un kernel su un grafo $G = <V, E>$, dove $V$ è l'insieme dei vertici ed $E$ è l'insieme degli archi del grafo, è una funzione kernel definita tra i vertici di un singolo grafo:

$$k: V \times V \to \mathbb{R}$$

La funzione kernel $k$ assegna a ciascuna coppia di nodi un singolo valore che esprime le relazioni (cioè la similarità) tra i nodi.

Si tenga a mente che i kernel dei grafi sono diversi dai kernel sui grafi, i primi si riferiscono a kernel in grado di confrontare coppie di grafi, mentre i secondi confrontano nodi appartenenti a un singolo grafo.

----------------------------------------------------------------

## Random Walk Kernel
I Random Walk kernel rappresentano la versione kernelizzata delle Random Walk, mediante le quali è possibile sfruttare traiettorie casuali attraverso i grafi per esplorare le relazioni tra i nodi.

I passi principali della Random Walk (RW) sono i seguenti:
1) dato un grafo e un nodo di partenza (ad esempio, il nodo $1$), selezioniamo uno dei suoi vicini a caso (ad esempio, il nodo $3$) e ci spostiamo su questo vicino;
2) quindi selezioniamo un vicino di questo nodo (ad esempio, il nodo $5$) e ci spostiamo su di esso;
3) la procedura può essere ripetuta per un numero predefinito di passi $p$ (lunghezza del percorso = $p$);
4) una RW di $p$ passi (una RW di lunghezza $p$) è quindi composta dalla sequenza di nodi attraversati dalla RW durante i suoi passi.

Una **catena di Markov** descrive un processo stocastico su un insieme di stati in base a una matrice di probabilità di transizione.
Le catene di Markov sono prive di memoria, il che significa che la probabilità di transizione futura dipende solo dallo stato attuale e non dalla sequenza degli stati precedenti.

Le Random Walk corrispondono alle catene di Markov. In questo contesto:
- l'insieme degli stati corrisponde all'insieme dei nodi nel grafo;
- gli elementi della matrice di probabilità di transizione rappresentano le probabilità di seguire un arco da un nodo all'altro.

In altre parole, una catena di Markov può essere utilizzata per modellare un processo casuale che si sposta tra diversi stati (nodi) in un grafo, con le probabilità di transizione specificate nella matrice di probabilità di transizione. Questa rappresentazione è utilizzata in vari contesti, come l'analisi delle reti e le simulazioni di sistemi complessi.

Dato una matrice di adiacenza $W$ di un grafo non diretto pesato $G$, il Random Walk Kernel di un passo può essere ottenuto utilizzando la formula:

$$K_1 = (I - \alpha D^{-1}W)^{-1}$$

dove:
- $K_1$ è la matrice della funzione di Random Walk Kernel.
- $I$ è la matrice identità.
- $D$ è la matrice diagonale con elementi $d_{ii} = \sum_{j} w_{ij}$ (ossia la somma dei pesi delle connessioni del nodo $i$) e $\alpha$ è un valore maggiore di $1$.

Il Random Walk Kernel di $p$ passi può quindi essere calcolato utilizzando la stessa formula qui riportata:

$$K_{p-step} = K^p$$

dove $K_{p-step}$ è la matrice del Random Walk Kernel di $p$ passi.<br />
In questo modo, possiamo prendere in considerazione sia i vicini diretti di un nodo $(p=1)$ che i vicini indiretti di un nodo $(p \geq 2)$.

----------------------------------------------------------------

## Patient-Net Algorithm
**Patient-Net** (o **P-Net**) è un nuovo algoritmo basato sulla rete transduttiva semi-supervisionata per classificare o ordinare i pazienti in base alla loro probabilità di mostrare un determinato esito di interesse. I passi principali includono:
1) **raccolta dei dati** (e selezione delle caratteristiche) in una matrice $M$: I profili di espressione genica di ciascun paziente vengono raccolti in una matrice $m \times n$, in cui le righe rappresentano i trascritti e le colonne rappresentano i pazienti. Di solito, si hanno dati ad alta dimensionalità, ovvero $m >> n$. Pertanto, è possibile ridurre la dimensionalità tramite feature selection;
2) **costruzione della patient similarity net** tramite la correlazione di Pearson. Possono essere utilizzate altre misure (correlazione di Spearman, inverso di alcune distanze) al suo posto. La matrice $W$ può essere vista come la matrice di adiacenza del [[Grafo|grafo]] pesato $G$, dove i pesi degli archi rappresentano la **similarità biomolecolare** tra i pazienti;
3) calcolo di una matrice kernel $K$ a partire dalla matrice di similarità tra pazienti. Questo è necessario per ottenere archi pesati consapevoli della **topologia globale** della rete. Un kernel su un grafo induce implicitamente una nuova misura di similarità non lineare tra i pazienti;
4) **filtraggio della matrice kernel $K$**: è necessario conservare solo i bordi più informativi per il compito di previsione, riducendo il rumore introdotto dalle somiglianze molto scarse. Selezioniamo una soglia utilizzando una tecnica Leave-One-Out efficiente che massimizzi una misura delle prestazioni sul set di addestramento;
5) classificazione dei pazienti mediante funzioni di punteggio: sono disponibili diverse funzioni di punteggio le quali assegnano un punteggio a ciascun nodo in base all'etichettatura e ai pesi degli archi del suo vicinato. I punteggi vengono utilizzati per classificare i pazienti in base alla loro probabilità di manifestare l'evento considerato.

Questo algoritmo sfrutta:
- la topologia globale della rete sfruttando un kernel sul grafo;
- informazioni locali attraverso l'applicazione di funzioni di punteggio basate sui vicini diretti di ciascun nodo.

La visualizzazione del grafo è un vantaggio di P-Net. Essa comporta la costruzione di un grafo dei pazienti che mostra esplicitamente le loro relazioni biomolecolari e allo stesso tempo incorpora i punteggi previsti nel grafo. L'utente può effettuare un'ispezione visiva della rete, il che potrebbe consentire di scoprire informazioni sulle caratteristiche fenotipiche e/o biomolecolari dei campioni.

----------------------------------------------------------------

## Label Propagation Algorithm

![[Label Propagation.png]]

Questo algoritmo sfrutta l'idea semplice di propagare iterativamente le etichette dei nodi ai nodi vicini considerando la loro prossimità. Il primo passo è il calcolo della matrice di adiacenza $W$, utilizzando una misura di similarità appropriata. Il passo successivo comprende il calcolo della matrice diagonale dei gradi $D$. Il vettore delle etichette stimate $\hat{Y}$ viene inizializzato con l'etichetta conosciuta per i nodi etichettati $Y_l$ ($+1$ o $-1$) e zero per i nodi non etichettati $Y_u$. Successivamente, in modo iterativo, le etichette vengono propagate attraverso il grafo, dove $D^{-1}W$ può essere interpretato come una **matrice di transizione probabilistica** che mostra la probabilità di passare da un nodo a un altro. Dopo il passo di propagazione, l'algoritmo forza le etichette sui dati etichettati a essere $\hat{Y}_l$ = $Y_l$ (cioè il **clamping** delle etichette). In questo modo, i dati etichettati agiscono come fonti che "spingono" le etichette attraverso i dati non etichettati. La propagazione e il blocco delle etichette vengono ripetuti fino alla convergenza (il criterio di arresto può essere un numero predefinito di iterazioni). Il punteggio calcolato per ciascun nodo $x_i$ può essere utilizzato per la classificazione impostando una soglia, ad esempio il segno di $\hat{y}_i^{(\infty)}$.

----------------------------------------------------------------

## RAnking of Nodes with Kernelized Score Funcions
Problemi rilevanti nella biologia molecolare e nella medicina possono essere modellati attraverso l'utilizzo di grafi, con l'utilizzo di strategie di apprendimento semi-supervisionato locale e globale per apprendere le etichette dei nodi.
Un approccio innovativo comporta la **fusione di strategie di apprendimento locale e globale**: lo schema algoritmico delle funzioni di punteggio kernelizzate (**RAnking of Nodes with Kernelized Score Funcions** o **RANKS**).

Una strategia di apprendimento locale è quella denominata **guilt-by-association**. Si tratta di un algoritmo il quale assume che l'etichetta (o lo score) di un nodo dato dipenda dall'etichetta (o dallo score) dei loro vicini. Il punteggio per ciascun nodo $i$ viene calcolato prendendo il massimo dei pesi $w_{i,j} \in W$, dove $W$ è la matrice di adiacenza del grafo, che collega il nodo $i$ ai nodi $j$ aventi etichetta positiva.

Le strategie di apprendimento globali, invece, sfruttano la topologia complessiva della rete e minimizzano una funzione di costo quadratica.

Le kernelized score functions uniscono le strategie di apprendimento locali alle strategie globali.

![[Kernelized Score Functions.png]]

Le funzioni di punteggio kernelizzate sono un framework algoritmico flessibile che può essere applicato a una vasta gamma di interessanti problemi di bioinformatica. Queste funzioni e gli altri metodi di apprendimento semi-supervisionato all'avanguardia per l'analisi delle reti biologiche sono tuttavia afflitti da seri problemi di scalabilità su reti di grandi dimensioni.

----------------------------------------------------------------

## Word Embedding
Le Rappresentazioni Distribuite delle Parole (note anche come **word embeddings**) sono rappresentazioni geometriche di parole o entità apprese dai dati in modo tale che parole semanticamente correlate siano spesso rappresentate spazialmente vicine tra loro. Nella pratica, si cerca di inserire le entità in uno spazio metrico a bassa dimensionalità in cui parole simili vengono collocate vicine.

Innanzitutto, è fondamentale distinguere il significato di **similarity** (**similarità**) dal significato di **relatedness** (**relazione**):

La similarità tra due parole non implica che esse siano necessariamente sinonimi ma, bensì, comporta la condivisione di qualche elemento di significato. Alcuni sempi sono cane e gatto, caffè e  tè,  corto e lungo (**antonimi**).

La relazione, chiamata anche **associazione di parole** implica la condivisione del campo semantico. Alcuni esempi sono macchina e benzina, monitor e RAM, complessità e algoritmo.

Ora il focus va posto su come rappresentare una parola. Il primo approccio è lo **one-hot encoding**. Si tratta di una tecnica di rappresentazione dei dati la quale consiste nel rappresentare una variabile categorica o discreta, come ad esempio una categoria di prodotti o una classificazione di colori, attraverso un vettore binario in cui una sola delle posizioni è impostata su $1$ per rappresentare la categoria specifica, mentre tutte le altre posizioni sono impostate su $0$. Questo metodo consente di trattare le variabili categoriche come input numerici in modelli di machine learning, consentendo loro di essere utilizzate in algoritmi che richiedono dati numerici. Il problema di questo approccio è che non è in grado di catturare la relatedness e la similarity oltre alla rappresentazione sparsa in termini spaziali.

Un secondo approccio è il conto delle frequenze. 

Un terzo approccio possibile è **Word2vec**, una tecnica che fornisce una stima efficiente della rappresentazione delle parole nello spazio vettoriale. Si basa sul costruire una rappresentazione vettoriale delle parole tramite una rete neurale per un compito di classificazione. Data una parola, l'obiettivo è prevedere se un'altra parola è nello stesso contesto. Il contesto è definito da una finestra intorno a ciascuna parola (**auto-supervisione**).

![[Word2Vec.png]]

Problemi del word embedding:
1) solo un significato per parola: gli embedding delle parole spesso rappresentano una parola con un unico vettore, anche se una parola può avere più significati (**polisemi**a). Ad esempio, "apple" potrebbe riferirsi al frutto o all'azienda "Apple Inc.". Questo può portare a ambiguità nei contesti in cui la parola è utilizzata.
2) **Bias umani dai dati di addestramento**: gli embedding delle parole possono ereditare pregiudizi e bias presenti nei dati con cui sono stati addestrati. 
3) **Difficoltà a catturare informazioni di livello superiore**: gli embedding delle parole sono spesso limitati nell'acquisizione di informazioni di livello superiore, come relazioni complesse tra parole o concetti astratti. Possono essere efficaci per rappresentare somiglianze semantiche di base, ma potrebbero non cogliere sfumature più profonde o significati contestuali avanzati.

----------------------------------------------------------------

## Metodi di Apprendimento della Rappresentazione dei Grafi per la Network Medicine


----------------------------------------------------------------

## Biomedical Knowledge Graphs.

I sistemi biologici sono naturalmente rappresentati come reti:
- **reti di interazioni proteiche**: queste reti rappresentano le interazioni tra le proteine all'interno di un organismo. Possono essere utilizzate per comprendere come le proteine lavorino insieme per svolgere diverse funzioni biologiche e possono essere fondamentali nella ricerca sulla biologia molecolare;
- **reti di cellule**: queste reti rappresentano le interazioni e le comunicazioni tra le cellule all'interno di un organismo. Possono essere utilizzate per studiare la comunicazione cellulare, il controllo dei processi biologici e le dinamiche dei tessuti biologici;
- **reti di malattie**: queste reti rappresentano le relazioni tra le malattie, i geni coinvolti e altri fattori. Possono essere utilizzate per identificare le cause genetiche di malattie, valutare la predisposizione genetica alle malattie e guidare la ricerca sulla terapia delle malattie.

La chiave per l'analisi di queste reti comprende l'integrare la conoscenza per catturare complessi meccanismi biologici nascosti.

![[Knowledge integration.png]]

Gli **Knowledge Graph** (**KG**) rappresentano un approccio potente e versatile per la rappresentazione dell'informazione in termini di entità di base e delle relazioni che intercorrono tra di loro. L'integrazione tra diversi tipi e fonti di dati viene facilitata dall'utilizzo di questi grafi. Un unico modello comune può, infatti, essere sfruttato per la rappresentazione di dati molecolari, dati relativi agli studi clinici e dati sui farmaci etichettati.
Ciò consente l'utilizzo di algoritmi per diverse tipologie di applicazioni, che vanno dalla prioritizzazione di nuovi bersagli per le malattie alla previsione di associazioni tra farmaci e malattie precedentemente sconosciute.

Attualmente, una vasta quantità di informazioni biomediche viene prodotta dalla comunità scientifica. Le fonti di informazione offrono prospettive diverse che possono essere integrate. Tuttavia, questa conoscenza è bloccata in migliaia di pubblicazioni e in numerose basi di dati. Raccogliere, strutturare ed integrare questa conoscenza è estremamente rilevante per la scoperta di farmaci, la prioritizzazione dei bersagli, il riutilizzo dei farmaci e molte altre applicazioni biomediche. Moltissime relazioni possono essere identificate e utilizzate per scoprire nuove conoscenze. Tuttavia, la varietà di fonti e formati dei dati, l'immensa quantità di dati prodotti e le diverse semantiche adottate rendono questa attività una sfida che richiede tempo e risorse considerevoli. 

### Ontologie
Le **ontologie** sono descrizioni formali delle entità e dei concetti in un determinato dominio che consentono procedure di ragionamento computazionale.
Ad esempio, supponiamo che un'ontologia dica che "virus" è un agente infettivo, e che "meningite infettiva" sia un tipo di meningite causata da un agente infettivo. Di conseguenza, "meningite virale" è una sottoclasse di "meningite infettiva".<br />
Le **logiche di descrizione** sono un sottoinsieme delle logiche del primo ordine utilizzate per il ragionamento su un'ontologia e per identificare fatti implicati ma non esplicitamente dichiarati nei dati originali.
La **Gene Ontology** (GO) è un esempio di ontologia biomedica. Si tratta di un vocabolario controllato per descrivere i prodotti genetici (proteine, RNA) in qualsiasi organismo, organizzato come un grafo diretto aciclico gerarchico. Questa ontologia rappresenta componenti cellulari, funzioni molecolari e processi biologici e presenta due tipi di relazioni: **è-un** e **parte-di**.

Oltre alle ontologie, i dizionari, i tesauri e le tassonomie sono termini spesso utilizzati per rappresentare i metadati riguardanti una fonte di informazioni. Sono impiegati per la caratterizzazione semantica delle fonti a diversi livelli di espressività.

![[Semantic characterization.png]]

----------------------------------------------------------------

### Costruzione di un Knowledge Graph
Nella creazione di un grafo di conoscenza da diverse fonti, è necessario tenere conto di diversi fattori:
1) l'utilizzo di diversi formati (tabelle relazionali, CSV, JSON, XML). Le fonti di dati possono, infatti, essere rappresentate in vari formati, e la conversione tra questi formati può essere necessaria per l'integrazione dei dati nel grafo di conoscenza;
2) l'utilizzo di diversi identificatori per rappresentare la stessa cosa. Le diverse fonti possono utilizzare identificatori differenti per rappresentare gli stessi oggetti o concetti. È importante mappare e unificare tali identificatori per garantire l'integrità del grafo di conoscenza;
3) l'adozione di diverse semantiche. Le fonti di dati possono utilizzare semantici diverse per gli stessi concetti. L'armonizzazione delle semantiche è fondamentale per evitare ambiguità nei dati integrati.

Per l'estrazione delle informazioni dalle fonti e la loro trasformazione e integrazione in un grafo di conoscenza, possono essere impiegate diverse tecniche, come l'utilizzo di linguaggi dichiarativi basati su modelli e motori per la loro applicazione. Questi linguaggi consentono di definire modelli o schemi per l'estrazione e la trasformazione dei dati dalle fonti.
Queste tecniche possono essere utilizzate per
1) la materializzazione del grafo di conoscenza in un repository centralizzato: i dati estratti e trasformati dalle diverse fonti possono essere archiviati in un unico repository centralizzato, creando così un grafo di conoscenza consolidato;
2) la specifica di piani di accesso ai dati da utilizzare durante le interrogazioni: è possibile definire come i dati nel grafo di conoscenza possono essere accessibili e interrogati in modo efficiente, ad esempio tramite l'ottimizzazione delle query.

È possibile applicare approcci di Deep Learning per lavorare con i grafi? I moderni approcci di deep learning sono progettati per griglie o sequenze semplici. Infatti, le immagini hanno una struttura a griglia bidimensionale, il che consente di definire convoluzioni per l'elaborazione delle immagini.
I testi e le sequenze hanno invece una struttura lineare monodimensionale, il che permette di definire approcci come sliding window, Recurrent NN, word2vec, e così via, per l'elaborazione del testo e delle sequenze.

Una tecnica consiste nel mappare i nodi in embedding a $d$ dimensioni in modo che i nodi simili nella rete siano incorporati vicini l'uno all'altro. 

immagine 20/57

Spplicare gli approcci di deep learning ai grafi presenta tuttavia notevoli complicazioni:
1) grande complessità delle reti: le reti possono avere una struttura topologica arbitraria e complessa, senza la località spaziale tipica delle griglie. Questo rende difficile applicare approcci basati su convoluzioni o altri modelli progettati per dati con una struttura più regolare;
2) l'assenza di ordinamento fisso dei nodi o punto di riferimento: nei grafi, non c'è un ordinamento fisso dei nodi o un punto di riferimento comune. Questo impedisce l'applicazione diretta di molti algoritmi di deep learning che dipendono da tali strutture;
3) la dinamicità e multimodalità: le reti possono essere dinamiche, ovvero cambiare nel tempo, e possono includere una varietà di modalità o tipi di informazioni. Gestire questa complessità richiede approcci specializzati che possano adattarsi a situazioni diverse.

I grafi di conoscenza non sono quindi perfetti e possono contenere errori o informazioni incomplete. Gli approcci alla scoperta devono essere robusti per gestire tali imperfezioni. Questo è particolarmente rilevante quando si cercano percorsi lunghi nella rete, poiché una singola previsione errata può causare una catena di errori. Diviene quindi fondamentale creare un benchmark per valutare l'efficacia degli approcci di scoperta basati sui grafi di conoscenza. Si possono utilizzare test pseudo-prospettici, ovvero identificare dati passati che possono essere utilizzati per prevedere conoscenze attuali, ma può essere difficile stabilire una linea di separazione chiara tra ciò che è noto e ciò che è futuro.
Nei KG, le previsioni con punteggi elevati tendono a dominare l'output dei sistemi di scoperta basati sui grafi di conoscenza. Tuttavia, alcune di queste previsioni potrebbero sembrare banali agli esperti. Filtrare queste previsioni banali può essere molto difficile.

----------------------------------------------------------------