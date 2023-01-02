## Sicurezza ##
Con **sicurezza** si intende il raggiungere un obiettivo in presenza di un avversario, il prevenire un comportamento non desiderato.<br />
Un sistema sicuro è un sistema il quale assolve uno specifico compito, nonostante l'avversario voglia impedirlo o stia operando in qualsiasi modo per impedirlo.<br />
La sicurezza è lo stato in cui il rischio è inferiore al massimo rischio accettabile, dove il termine rischio esprime la possibilità che un attacco causi un danno ad un'organizzazione. Il rischio viene valutato usando la quantità di danno e la probabilità che esso avvenga.<br />
Una **vulnerabilità** è un punto debole che può essere sfruttato per causare danni al sistema. Degli esempi di vulnerabilità comprendono programmi con privilegi non necessari, programmi con difetti noti, configurazioni firewall deboli, etc.<br />
Una **minaccia** invece è un'azione di un avversario che tenta di sfruttare le vulnerabilità per danneggiare un sistema IT.

----------------------------------------------------------------

## Cybersecurity ##
Con **cybersecurity** si definisce la protezione delle informazioni archiviate, trasmesse ed elaborate in un sistema di rete di computer, altri dispositivi digitali e dispositivi di rete e linee di trasmissione, compresa internet.
- la protezione comprende riservatezza, confidenzialità, integrità, disponibilità, autenticità e responsabilità;
- i metodi di protezione includono politiche e procedure organizzative, nonchè mezzi tecnici come crittografia e protocolli di comunicazione sicuri.

**Confidenzialità** denota il prevenire di rendere disponibili informazioni ad individui non autorizzati.<br />
**Integrità** denota la possibilità di modificare i dati ed i programmi solo in una maniera specifica ed autorizzata.<br />
**Disponibilità** denota l'accesso tempestivo ed affidabile ed utilizzo delle informazioni da parte degli utenti autorizzati.<br />
**Autenticità** denota la proprietà di un soggetto di essere verificato e fidato, ovverlo la fiducia nella validità di una trasmissione di un messaggio.<br />
**Responsabilità** (o **accountability**) denota la possibilità di individuare il responsabile di un'azione e tracciare la responsabilità.<br />

Fondamentale la distinzione tra **attacchi passivi** ed **attacchi attivi**. Un attacco passivo non altera le informazioni in transito ma ha lo scopo di ottenere informazioni sui messaggi trasmessi (accesso al contenuto del messaggio, analisi del traffico di rete...). Un attacco attivo, al contrario, modifica il flusso delle informazioni, crea un falso flusso ed impedisce l'utilizzo del sistema.

----------------------------------------------------------------

## Principi fondamentali della sicurezza informatica ##
### Principio di Fail-Safe Defaults ###
A meno che un soggetto non abbia accesso esplicito ad un oggetto, dovrebbe essergli negato l'accesso a quell'oggetto. Inoltre, se il soggetto non è in grado di completare la sua azione/attività, dovrebbe annullare le modifiche apportate nello stato sicuro del sistema prima che termini.

----------------------------------------------------------------

### Principio dell'Economy of Mechanism ###
I meccanismi di sicurezza dovrebbero essere i più semplici possibili.

----------------------------------------------------------------

### Principio del Complete Mediation ###
Tutti gli accessi agli oggetti devono essere controllati per assicurarsi che siano consentiti.

----------------------------------------------------------------

### Principio dell'Open Design ###
La sicurezza di un meccanismo non dovrebbe dipendere dalla segretezza della sua progettazione o attuazione.

----------------------------------------------------------------

### Principio della Separation of Privilege ###
Un sistema non dovrebbe concedere l'autorizzazione in base ad una singola condizione.

----------------------------------------------------------------

### Principio del Least privileges ###
Ad un soggetto dobrebbero essere concessi solo i privilegi di cui ha bisogno al fine di completare il suo compito.

----------------------------------------------------------------

## Malware ##
Con **malware** si definisce un programma che viene inserito in un sistema, solitamente di nascosto, con l'intento di compromettere la riservatezza, l'integrità o la disponibilità di dati, delle applicazioni o del sistema della vittima, oppure con l'intento di infastidire o disturbare la vittima.

----------------------------------------------------------------

### Trojan Horse ###
Programma con un primo effetto evidente (e aspettato) ed un secondo effetto nascosto, il quale viola la politica di sicurezza. L'utente deve essere indotto all'esecuzione di un Trojan horse.

Alcuni esempi sono:
1) **The AIDS Trojan**, il quale risiedeva su floppy disks contenenti importanti informazioni sulla malattia dell'AIDS. Questo trojan crittografava il disco rigido dell'utente e offriva la possibilità di acquistare la password per decifrare i dati;
2) **Mocmex**, trojan il quale risiedeva in diverse cornici per foto digitali cinesi. Ogniqualvolta un frame infetto veniva collegato ad una macchina Windows, il malware veniva copiato dal frame al computer ed iniziava a racogliere e trasmettere le password.

----------------------------------------------------------------

### Virus ###
Un **virus** informatico è un codice informatico che può replicarsi, modificando altri file o programmi per inserire codice in grado di essere replicato ulteriormente.<br />
La proprietà di autoreplicazione è ciò che distingue i virus informatici da altri tipi di malware. Un'altra proprietà di un virus risiede nel fatto che la replica del virus stesso richieda un certo tipo di assistenza da parte dell'utente, come ad esempio facendo clic su un allegato e-mail o condividendo un'unità USB.<br />
Quando il programma viene richiamato, il controllo viene immediatamente trasferito al blocco di azioni principale contenente il codice del virus.<br 7>
Il virus altera, quindi, il codice normale sostituendolo con una sua versione infetta senza però compiere azioni evidenti, cercando di rimanere nell'ombra.<br />
Generalmente, i virus sono composti da tre parti:
1) **meccanismo di infezione**;
2) **trigger**;
3) **payload**.

Inoltre, i virus attraversano quattro fasi distinte:
1) **dormiente**;
2) **propagazione**;
3) **triggering**;
4) **execution**.

I vettori di infezione per i virus sono tipicamente boot sector (come USB drive), file eseguibili, macro file e multipartiti.

----------------------------------------------------------------

#### Macro Virus ####
Virus che si attacca a documenti e utilizza le capacità di programmazione macro dell'applicazione del documento per eseguire codice e propagarsi.

----------------------------------------------------------------

#### Compression Virus ####
Virus che comprime il file eseguibile, in modo tale che sia la versione infetta che quella non infetta abbiano la stessa lunghezza.

----------------------------------------------------------------

E' possibile classificare i virus in base alla strategia attuata per non rivelarsi:

#### Encrypted Virus ####
Una parte del virus crea una chiave di crittografia casuale e crittografa il resto del virus. La chiave viene, quindi, memorizzata con il virus. Quando viene richiamato un programma infetto, il virus utilizza la chiave casuale memorizzata per decrittografare la parte di sè cifrata. Quando il virus si replica, viene selezionata una chiave casuale diversa, impendendo così di avere un modello di bit costante da osservare.

----------------------------------------------------------------

#### Stealth Virus ####
Virus progettato per nascondersi dal rilevamento da parte del software antivirus.
Può utilizzare tecniche di mutazione del codice, compressione o rootkit.

----------------------------------------------------------------

#### Polymorphic Virus ####
Virus che, durante la replica, crea copie funzionalmente equivalenti ma che hanno modelli di bit nettamente diversi.

----------------------------------------------------------------

#### Metamorphic Virus ####
Virus il quale si riscrive completamente ad ogni iterazione, utilizzando più tecniche di trasformazione ed aumentando così la difficoltà di rilevamento.

----------------------------------------------------------------

### Trapdoor ###
Si tratta di un secret entry point in un sistema, il quale utilizza uno specifico user identifier o password che supera le normali procedure di sicurezza.

----------------------------------------------------------------

### Logic Bomb ###
Minaccia la quale si attiva quando specifiche condizioni vengono soddisfatte, come ad esempio la presenza o assenza di un file, e, quando scatta, danneggia il sistema modificando o cancellando file o dischi.

----------------------------------------------------------------

### Zero Day Exploit ###
Si osservi la sequenza di eventi che portano ad un exploit:
- un attaccante scopre una vulnerabilità prima non conosciuta;
- il manufacturer diventa conscio della vulnerabilità;
- un developer sviluppa il codice per dimostrare la vulnerabilità in un ambiente controllato;
- il manufacturer sviluppa e distribuisce una patch contro la vulnerabilità;
- un utente implementa il codice;
- un utent estende la proof of concept fino ad un attacco attuale.

Un attacco prima della disponibilità della contromisura è chiamato **Zero Day Exploit**

----------------------------------------------------------------

### Worm ###
Malware che viene eseguito in maniera indipendente in quanto non richiede un programma host. Un worm propaga una versione completamente funzionante su una nuova macchina, portando con sè un payload che esegue dei task nascosti, come backdoors, spam relays o DDoS agents.

Le fasi di azione di un worm sono:
- probing;
- exploitation;
- replication;
- payload.

Un esempio di worm attacks famosi è il **Morris Worm**, che sfrutta vulnerabilità come il buffer overflow e che nel 1988 ha infettato il 10% dei computer connessi ad internet.
Il worm in questione è composto da due parti:
- un programma per diffondersi, il quale cerca altre macchine vittima e cerca di infiltrarsi su queste macchine;
- un programma vettore, il quale viene compilato ed eseguito sulle macchine infette e che trasferisce il main per continuare l'infezione.

Al giorno d'oggi, i worm sono multipiattaforma e multi-exploit ed utilizzano la diffusione ultraveloce.
Un worm attuale può essere polimorfico, cioè ogni copia del worm ha un nuovo codice generato al volo usando istruzioni e tecniche di crittografia funzionalmente equivalenti, oppure metamorfico, cioè oltre a cambiare aspetto, ha un repertorio di modelli comportamentali che si scatenano in diverse fasi di propagazione.

----------------------------------------------------------------

### Drive-by-Downloads ###
Malware che sfruttano dei bug nelle applicazioni utente per installare ulteriori malware. Questo malware attende che utenti ignari visitino la pagina Web dannosa per diffondersi sui loro sistemi.  

----------------------------------------------------------------

### Clickjacking ###
L'attaccante raccoglie i click di un utente infetto e lo costringe a fare una varietà di azioni, come indirizzarlo a siti Web che potrebbero contenere codice dannoso. Questa tecnica utilizza più livelli trasparenti o opachi per indurre un utente a fare click su un pulsante o link ad un'altra pagina.

----------------------------------------------------------------

### Zombie e Botnet ###
Malware che prende il possesso segretamente di un altro computer in rete, sfruttando i difetti del software.<br />
Assembla poi i computer compromessi in una rete di zombie o botnet, cioè una raccolta di macchine compromesse che eseguono programmi, generalmente denominati worm, trojan horses o backdoors, sotto un infrastruttura di comando e controllo comune.

Questa rete viene usata per lanciare indirettamente attacchi; ad esempio, DDos, phishing o spamming.

----------------------------------------------------------------

### Rootkit ###
Un **rootkit** è un set di programmi installati su un sistema al fine di mantenere nascosto l'accesso con privilegi di amministratore, nascondendo le prove della sua presenza. Questo tipo di malware altera le funzionalità standard dell'host in maniera dannosa e furtiva. In questo modo, l'attaccante ha il completo controllo del sistema.

I rootkit possono essere classificati in:
- **persistent**: si attiva ogni volta che il sistema si avvia;
- **memory based**: non ha codice persistente;
- **user mode**: intercetta le chiamate alle API;
- **kernel mode**: può intercettare le chiamate alle API native in modalità kernel;
- **virtual machine based**: installa un monitor leggero della macchina virtuale, il sistema operativo in una macchina virtuale. Il rootkit può, quindi, intercettare e modificare in modo trasparente stati ed eventi che si verificano nel sistema virtualizzato;
- **external mode**: il malware si trova al di fuori della normale modalità operativa del sistema di destinazione, nel BIOS o nella modalità di gestione del sistema, da dove può accedere direttamente all'hardware.

----------------------------------------------------------------

### Spyware ###
Malware che colleziona volta per volta piccoli pezzi di informazioni riguardanti l'utente, ovviamente senza i permessi necessari. Può anche reindirizzare la navigazione e visualizzare gli annunci.<br />
Esempi di spyware sono i keyloggers.

-----------------------------------------------------------------


### Scareware ###
Software con payloads malevoli, utilizzati da ingegneri sociali per causare shock, ansia o convincere la vittima dell'esistenza di una minaccia.

----------------------------------------------------------------

### Ransomware ###
Malware che tiene in ostaggio un computer o i dati al suo interno, richiedendo un riscatto per riottenerne possesso.
Questo malware:
- disabilita i servizi essenziali di un sistema o locka il display all'avvio del sistema;
- crypta alcuni tra i file personali dell'utente.

La vittima deve:
- inserire un codice ottenibile solo al pagamento del riscatto;
- comprare un tool di decrittazione o di rimozione.

----------------------------------------------------------------

### Contromisure per i malware ###
Le contromisuro che dovrebbero essere adottate al fine di mitigare le minacce sono:
- **rilevamento**: l'accertarsi dell'esistenza della minaccia e rilevare il malware;
- **identificazione**: individuare lo specifico malware responsabile dell'infezione del sistema;
- **rimozione**: rimuovere tutte le tracce del malware da tutti i sistemi infetti, in modo che non possa diffondersi ulteriormente.

Un metodo per rilevare ed analizzare i malware prevede l'esecuzione di codici potenzialmente dannosi in una **sandbox** emulata o su macchina virtuale. Questo metodo permette di eseguire il codice in un ambiente controllato, dove il suo comportamento può essere attentamente monitorato senza rischiare di compromettere la sicurezza di un sistema reale. Questi ambienti spaziano da emulatori sandbox, i quali simulano la memoria e la CPU di un sistema target, a macchine virtuali complete.

----------------------------------------------------------------

## Politiche di sicurezza e modelli ##
Una **Politica di sicurezza** è un insieme di regole e linee guida definite in linguaggio naturale o attraverso un formalismo matematico le quali descrivono gli obiettivi di sicurezza di un sistema. Consiste, di fatto, in un insieme di assiomi che gli estensori della politica ritenfono possano essere applicati. Include:
1) i **soggetti** che interagiscono con il sistema;
2) gli **oggetti e risorse** di cui si vuole proteggere l'accesso;
3) le **azioni** che i soggetti possono o non possono compiere sugli oggetti e sulle risorse;
4) i **permessi**;
5) le **protezioni**, cioè ulteriori regole che aiutano a raggiungere il goal (la sicurezza).

In primo luogo la politica partiziona l'insieme degli stati del sistema in **autorizzato** (sicuro) e **non autorizzato** (non sicuro). In secondo luogo, i meccanismi di sicurezza impediscono al sistema di entrare in uno stato non sicuro.<br />
Un **Modello** definisce formalmente l'implementazione specifica della politica di sicurezza presa in considerazione.

Un **Meccanismo** implementa la politica a basso livello. Le politiche, infatti, utilizzano meccanismi (come la [[Crittografia]]) per raggiungere il goal.<br />
Questi meccanismi devono fare in modo che il sistema resti in uno stato sicuro e non passi in uno stato non sicuro. <br />

Lo svantaggio causato dall'adozione di un meccanismo di sicurezza risiede nel fatto che questa adozione non dovrebbe rendere l'accesso alle risorse più difficile di quanto lo sia senza il meccanismo di sicurezza stesso (**Psychological Acceptability**).

Le politiche di sicurezza sono alla base del concetto di **Controllo degli accessi**, il quale si struttura su tre elementi:
1) i **soggetti**, entità che possono accedere agli oggetti. Un soggetto può essere di classe **owner**, **group** o **world**;
2) gli **oggetti**, risorse delle quali si controlla l'accesso;
3) i **permessi di accesso**, ovvero i modi nei quali un soggetto può accedere ad un oggetto.

Le politiche di controllo degli accessi possono essere categorizzate in quattro macrocategorie:
1) **DAC** (**Discretionary Access Control**): controlla l'accesso sulla base dell'identità del soggetto richiedente e delle regole di accesso. Discrezionale perchè un'entità potrebbe avere i privilegi di accesso che le permettono, a sua discrezione, di concedere ad un'altra entità l'accesso ad una determinata risorsa;
2) **MAC** (**Mandatory Access Control**): controlla l'accesso in base al confronto tra etichette di sicurezza ed autorizzazione. Un amministratore centrale determina i permessi di accesso dei vari oggetti;
3) **RBAC** (**Role-Based Access Control**): esistono quattro tipi di entità in un sistema di questo tipo:
	- **utente**: una persona che ha accesso a questo sistema informatico. Ogni individuo ha un ID utente associato;
	- **ruolo**: una funzione lavorativa con nome all'interno dell'organizzazione che controlla il sistema;
	- **autorizzazione**: approvazione di una particolare modalità di accesso a uno o più oggetti;
	- **sessione**: mappatura tra utente e sottoinsieme attivato dell'insieme di ruoli a cui è assegnato l'utente.
4) **ABAC**(**Attribute-Based Access Control**): modello che può definire autorizzazioni che esprimono condizioni sulle proprietà sia della risorsa che del soggetto.

----------------------------------------------------------------

### Politiche di sicurezza basate sulla confidenzialità ###
Con **confidenzialità** si intende il prevenire la divulgazione non autorizzata di informazioni.<br />
Spesso in questa tipologia di politica si utilizzano metodi mandatori di tipo multilivello.

#### Bell-La Padula ####
**Bell-La Padula** è un modello di politica confidenziale il quale classifica i diversi livelli di sicurezza con i seguenti tag:
1) **Top Secret**;
2) **Secret**;
3) **Confidential**;
4) **Unclassified**.

I soggetti e gli oggetti vengono ciascuno assegnati ad un livello di sicurezza. Le azioni permesse dipendono dal livello di sicurezza di entrambi soggetti ed oggetti in questione.<br />
In generale, in questo modello si devono rispettare due proprietà:
1) **Simple Security Property** (**No Read Up**): un soggetto $S$ ha accesso in lettura ad un oggetto $O$ se e solo se $\lambda (S) \geq \lambda (O)$ e se $S$ ha il permesso di leggere $O$;
2) **\* Security Property** (**No Write Down**): un soggetto $S$ ha accesso in scrittura ad un oggetto $O$ se e solo se $\lambda(O) \geq \lambda(S)$ e se $S$ ha il permesso di scrivere $O$.

Combinando questi due principi si previene un possibile flusso di informazioni dall'alto verso il basso dei livelli di sicurezza.

Il **principio della forte tranquillità** afferma che i livelli di sicurezza non cambiano durante la vita del sistema, mentre il **principio della debole tranquillità** afferma che i livelli di sicurezza non cambiano in modo tale da violare le regole di una determinata politica di sicurezza.

Il modello Bell-La Padula può essere esteso includendo delle categorie nei livelli di sicurezza che inducono un reticolo. <br />
Un livello di sicurezza viene ora rappresentato come $<\text{Livello di sicurezza}, \{\text{Insieme di categorie}\}>$.

Un livello di sicurezza $(L, C)$ domina un livello di sicurezza $(L', C')$ se e solo se:
1) $\lambda(L) \geq \lambda(L')$;
2) $C' \subseteq C$.

----------------------------------------------------------------

### Politiche di sicurezza basate sull'integrità ###
Con **integrità** si intende il prevenire modifiche non autorizzate alle informazioni.<br />
Alla base di questa tipologia di politiche ci sono 3 principi:
1) **Separazione dei doveri**: se nell'esecuzione di un processo ci sono due fasi, queste devono essere svolte da due soggetti diversi;
2) **Separazione delle funzioni**: lo sviluppo ed il testing devono essere due operazioni separate, in modo che la seconda non sia influenzata dalla prima;
3) **Auditing**: il sistema deve mantenere un **audit log** che memorizzi le responsabilità (ogni programma eseguito e il soggetto che ha dato l'autorizzazione) ed il sistema deve eventualmente permettere di fare recovery, di tornare ad il precedente stato consistente (**rollback**).

#### Biba ####
**Biba** è uno dei modelli principali che segue questa tipologia di politiche di sicurezza. Si tratta di una tipologia duale rispetto alla politica basata sulla confidenzialità. Infatti, la confidenzialità è un vincolo sugli accessi in lettura mentre l'integrità è un vincolo sugli accessi in scrittura.<br />
Di conseguenza, le regole alla base di Biba sono il duale di quelle alla base del modello di Bell-La Padula:
1) **Simple Integrity Property** (**No Read Down**): un soggetto $S$ ha accesso in lettura ad un oggetto $O$ se e solo se $\lambda(O) \geq \lambda(S)$ e se $S$ ha il permesso di leggere $O$;
2) **\* Integrity Property** (**No Write Up**): Un soggetto $S$ ha accesso in scrittura ad un oggetto $O$ se e solo se $\lambda(S) \geq \lambda(O)$ e se $S$ ha il permesso di scrivere $O$.

----------------------------------------------------------------

#### Clark-Wilson ####
**Clark-Wilson** è uno dei modelli principali che segue questa tipologia di politiche di sicurezza in cui il sistema evolve tramite transazioni ben formate che cambiano il sistema da uno stato sicuro ad un altro stato sicuro.

Si tratta di un modello nel quale l'integrità di un dato è definita da un insieme di vincoli:
1) I dati che rispettano questi vincoli sono in uno stato coerente;
2) L'integrità del sistema viene preservata durante la transazione. Prima e dopo ogni azione, le condizioni di consistenza devono essere mantenute. Una transazione **Well-formed** è una serie di operazioni grazie alle quali il sistema passa da uno stato consistente ad un altro consistente;
3) Una transazione ben formata sposta il sistema da uno stato coerente ad un altro stato, sempre coerente.

Nel modello vengono definite entità e regole. Le entità sono:
1) **Constrained Data Items** (**CDI**): sono tutti gli oggetti interni al sistema sui quali è posto il vincolo di integrità;
2) **Uncostrained Data Items** (**UDI**): sono tutti gli oggetti interni al sistema non sottoposti al vincolo di integrità;
3) **Integrity Verification Procedures** (**IVP**): sono procedure che permettono la verifica dell'integrità. Il loro obiettivo è di confermare che tutti i CDI siano conformi alle specifiche di integrità ogni volta che una IPV viene eseguita.
4) **Transformation Procedures** (**TP**): sono tutte quelle procedure che permettono di modificare i CDI oppure di prendere in input i dati di un utente e creare da quelli un nuovo CDI. Queste trasformazioni corrispondono proprio a transazioni well-formed.

Le regole, invece, sono:
1) **vincoli di integrità**: esprimono relazioni tra oggetti, le quali devono essere soddisfatte affinchè lo stato del sistema sia valido;
2) **metodi di certificazione**: hanno lo scopo di verificare che le transazioni soddisfino determinati vincoli di integrità. Una volta certificato il programma per una transazione, non è necessario verificare i vincoli di integrità ad ogni esecuzione della transazione;
3) **separazione delle regole di servizio**: hanno lo scopo di impedire ad un utente, il quale esegue una transazione, di certificarla lui stesso.

Mentre nel modello Biba non esistono nozioni di regole di certificazione, nel modello Clark-Wilson sono presenti dei requisiti espliciti che le azioni svolte devono soddisfare.<br />Inoltre, mentre Biba si basa sull'integrità multilivello, Clark-Wilson si concentra sulla separazione dei compiti e delle transazioni.

----------------------------------------------------------------

### Basic Security Theorem ###
Il **basic security theorem** definisce come sistema sicuro il sistema in cui sia la simple property sia la $*$ property valgano.

----------------------------------------------------------------

### Politiche di sicurezza multilaterali ###
Questo tipo di politiche mira a bloccare il flusso di informazioni tra entità che operano allo stesso livello.

#### Modello Chinese Wall ####
Il modello **Chinese Wall** è un modello che segue le politiche di sicurezza multilaterali. Esso si basa sulla separazione dinamica dei doveri per proteggere la segretezza dei dati.<br />
L'obiettivo di Chinese Wall è quello di prevenire flussi di informazioni che possano causare conflitti di interesse. Il modello, quindi, organizza le entità in classi di **Conflitti di interessi**.<br />

Le entità all'interno di un **Conflict of Interests** devono essere separate.<br />
La politica è definita nel seguente modo:
1) **Oggetti**: Identificati mediante $O$, questi rappresentano dati, informazioni di una qualche società o organizzazione;
2) **Company Dataset**: Identificati con $CD$. Una $CD$ contiene oggetti inerenti ad una singola entità, come ad esempio una banca;
3) **Conflict of Interests Class**: Identificate con $COI$. Una $COI$ contiene i $CD$ delle varie entità che fanno parte di quella particolare classe di $COI$.

Le condizioni di lettura e scrittura sono, invece, le seguenti:
1) La lettura dell'oggetto $O$ da parte del soggetto $S$ è consentita se l'oggetto $O$ appartiene ad un $CD$ a cui $S$ ha accesso, oppure se appartiene ad un diverso $COI$;
2) Un soggetto $S$ può scrivere un oggetto $O$ se e solo se nessun oggetto che può essere letto da $S$ si trova in un differente dataset rispetto al dataset di $O$ oppure se l'utente $S$ non è in grado di leggere un oggetto $O$ contenente informazioni **non sanificate**. Con **Sanificazione** si intende il camuffare le informazioni di una azienda, in particolare per prevenire la scoperta dell'identità di tale azienda.

----------------------------------------------------------------

## Attacchi ##
E' bene specificare che non è necessario che si verifichi una violazione perchè possa esserci una minaccia. Le azioni che potrebbero causare la violazione devono essere protette o preparate.<br />
Queste azioni sono chiamate **Attacchi**.<br />
Innanzitutto, è necessario distinguere tra attacchi attivi e passivi:
- un **attacco attivo** modifica il flusso delle informazioni, crea un falso flusso oppure impedisce l'utilizzo del sistema;
- un **attacco passivo** non altera le informazioni in transito. Lo scopo dell'attacco è ottenere informazioni sui messaggi trasmessi.

Esempi di minacce sono lo **Spoofing**, il **Ripudio dell'origine** o il **Diniego di ricezione**.<br />
Con **Masquerading**, o **Spoofing**, si definisce la rappresentazione di un'entità da parte di un'altra.<br />
Con **Ripudio dell'origine** si definisce una falsa negazione che un'entità abbia inviato o creato qualcosa.<br />
Con **Diniego di ricezione** si definisce un falso diniego che un'entità abbia ricevuto alcune informazioni.<br />

Una **Superficie di attacco** è costituita dalle vulnerabilità raggiungibili e sfruttabili in un sistema. Le categorie di superficie di attacco esistenti sono:
1) **superficie di attacco di rete**;
2) **superficie di attacco software**;
3) **superficie di attacco umano**.

L'implementazione della difesa da attacchi prevede quattro linee di azione complementari:
- **Prevenzione**;
- **Rilevamento** (o **Detection**);
- **Risposta**;
- **Ripristino** (o **Recovery**).

### MAC Address Spoofing ###
Le schede di rete vengono identificate da un numero seriale, il quale viene utilizzato come indirizzo al'interno della LAN.<br />
Questo indirizzo è composto da 48 bit, dei quali i primi 24 identificano il produttore.<br  />
L'indirizzo MAC può essere riconfigurato dal software del driver dell'interfaccia di rete. Infatti, avendo i privilegi adeguati, è possibile cambiare il numero MAC usato nella produzione del frame. Basta conoscere il MAC di una macchina assente per poterla impersonare.

----------------------------------------------------------------

### ARP Spoofing / Cache Poisoning ###
[[Address Resolution Protocol]], come tutti i protocolli di rete, non ha implementato alcuna misura di sicurezza. Non ci sono controlli che vietino ad un host malizioso di rispondere ad una **ARP Request** nonostante non sia in possesso dell'**Indirizzo IP** richiesto (**ARP Spoofing**).<br />
L'host mittente della ARP Request, ricevendo la comunicazione fake, aggiorna la sua **ARP Cache** e memorizza così l'associazione $<\text{Ip destinatario - MAC Address attaccante}>$, cioè l'associazione utente-indirizzo sbagliata (**Cache Poisoning**). Ciò provoca l'immediata deviazione dei pacchetti diretti all'IP originale richiesto al [[MAC Address]] dell'host malizioso.<br />
Tutto questo avviene perchè:
1) le richieste non sono tracciate;
2) gli annunci ARP che viaggiano sulla rete non sono autenticati;
3) le macchine si fidano l'un l'altra perchè il protocollo non ha alcuna garanzia di sicurezza. Una macchina attaccante può quindi ingannare tutte le altre.

Questa procedura può avere luogo anche nel caso in cui nessun utente abbia inviato una ARP Request. <br />
Infatti una ARP cache si aggionra ogni volta che riceve una ARP Reply, anche se non ha inviato alcuna richiesta. L'host malevolo può quindi inviare una ARP Reply per fare Cache Poisoning in qualsiasi momento.

Il meccanismo di **ARP Poisoning** viene messo in atto per effettuare un [[Man in the Middle]] a livello datalink.

Eventuali contromisure possono essere l'utilizzo di IPSEC e l'utilizzo di tabelle statiche gestite da un admin di sistema.

----------------------------------------------------------------

### MAC Address Flooding ###
Ogni switch possiede una tabella dei MAC Address il cui scopo è quello di capire a quale porta sia collegato ciascun host.<br />
Per ogni frame ricevuto:
1) se lo switch ha all'interno della sua tabella il MAC Address al quale destinarlo, non scrive nulla nella tabella;
2) Se il MAC Address del destinatario non è presente all'interno della sua tabella, lo switch funge da hub ed inoltra il frame su ogni altra porta dello switch mentre copia il valore presente nell'header del pacchetto e crea una entry nella tabella;

Un attaccante, mediante l'invio di un elevato numero di frames con MAC Address fake sempre diversi, può causare un overflow della tabella dello switch, poichè vengono registrate tante false associazioni $<\text{MAC Address - porta fisica}>$ e poichè le tabelle degli indirizzi MAC hanno dimensioni limitate.<br />
Il risultato è che lo switch non riesce più a gestire il traffico nella maniera opportuna; esso comincia a funzionare come un hub, cioè non fa più l'instradamento dei pacchetti ma spedisce ciascuno di essi in broadcast attraverso ognuna delle sue porte. Un pacchetto che dovrebbe essere indirizzato ad un certo host viene invece destinato anche ad altri host, che non dovrebbero riceverlo. Così facendo, un attaccante può fare sniffing di tutti i pacchetti che transitano nella rete.<br />
Questa tecnica viene utilizzata per sniffare il traffico in reti in cui la presenza dello switch non consente a chiunque di accedere ai pacchetti a sè non destinati.

Una possibile contromisura consiste nel non generare dinamicamente la tabella contenente le coppie $<\text{MAC Address - porta fisica}>$ ma avere l'accortezza e la pazienza di gestirla in maniera statica. E' inoltre possibile costruire dei filtri per scartare MAC falsi.

----------------------------------------------------------------

### Problemi intrinsechi in TCP/IP ###
Non esiste alcun meccanismo di autenticazione fra le parti, quindi non si può avere la certezza di parlare con l'host che effettivamente si desidera.

i controlli di integrità sono banali. L'unico controllo di integrità che [[TCP-IP]] offre è un checksum dei pacchetti. Ad un attaccante basta sniffare il pacchetto dalla rete e manipolarlo in modo tale che il checksum risulti comunque veritiero.

Infine, il protocollo difende la disponibilità della rete dalla congestione, ma non la possibilità di connettersi ad un determinato nodo.

----------------------------------------------------------------

### IP Spoofing ###
**IP Spoofing** è un tentativo da parte di un intruso di inviare pacchetti da un indirizzo IP facendoli sembrare provenire da un IP differente.<br />
Un attaccante può inviare ad un server un pacchetto con **IP spoofato**, cioè in cui il campo mittente dell'header IP viene cambiato. Il destinatario non ha modo di capire se il pacchetto arriva effettivamente dall'host riportato nel campo mittente dell'header IP oppure no.<br />
L'attaccante si trova, invece, di fronte a due problemi:
1) **risposta del server**: il server invierà una risposta inserendo nel campo destinazione l'IP spoofato. L'attaccante, quindi, non riceverà mai una risposta;
2) **forgiare un pacchetto valido**: spoofare un indirizzo IP permette di effettuare alcuni attacchi, ma non consente sicuramente di inserirsi in una connessione TCP. Per fare ciò è anche necessario che il pacchetto spoofato presenti **SEQ-NUM** e **ACK-NUM** corretti, poichè ogni connessione TCP ha uno stato associato, il quale comprende il numero di sequenza ed il numero di porta.

Esistono due forme di IP spoofing:
1) **non-blind Spoofing**: l'attaccante è all'interno della stessa sottorete della vittima. Si tratta della forma più semplice perchè l'attaccante può sniffare il traffico con la propria scheda di rete in modalità promiscua;
2) **blind Spoofing**:  l'attaccante non è all'interno della sottorete della vittima.

Per sferrare un attacco di tipo Blind IP spoofing, l'attaccante deve fare quattro cose:
1) Prima di cominciare l'attacco, l'attaccante interroga il server per ottenere qualche indicazione in più sulla generazione dell'**Initial Sequence Number** (**ISN**). Questo viene fatto per far sì che la predizione dell'ISN abbia più probabilità di successo (**ISN Prediction**). L'attaccante manda alcuni pacchetti **SYN** non spoofati per analizzare le risposte del server e capire quindi il tipo di regola che quest'ultimo adotta per generare gli ISN;
2) L'attaccante apre una connessione con il server utilizzando l'IP spoofato di un host vittima. L'attaccante non riceverà la risposta;
3) L'host vittima, ricevendo una risposta dal server che non ha mai interrogato, invia subito un pacchetto di **FIN** o **RST** per terminare la connessione. In questa eventualità, l'attacco si può ritenere fallito. L'attaccante deve, pertanto, impegnare l'host vittima, tipicamente effettuando un **attacco DoS** per fare in modo che non possa chiudere la connessione con il server.
4) L'attaccante invia al server un pacchetto valido, utilizzando sempre l'IP spoofato della vittima. Tale pacchetto, per essere valido, dovrà contenere il giusto ACK-NUM ed il giusto SEQ-NUM.

Per sferrare un attacco di tipo non-blind Spoofing, invece, è necessario utilizzare uno **sniffer**. Si tratta di un tool che mostra tutti i pacchetti della sottorete in cui è collegato (se non c'è uno switch; in tal caso occorre effettuare MAC flooding sullo switch prima di poter sniffare qualsiasi pacchetto nella rete). Lo sniffer può quindi intercettare anche una eventuale risposta che il server sta inviando al legittimo client (che l'attaccante ha DoSsato) e leggere i corretti ACK-NUM e SEQ-NUM.

Se un utente malintenzionato può indovinare il numero di sequenza corrente per una connessione esistente, può inviare il pacchetto di ripristino per chiuderla.
 
----------------------------------------------------------------

### TCP Session Hijacking ###
Il **TCP Hijacking** consiste nell'aquisire una comunicazione TCP/IP attiva.
Con IP Spoofing e corretti SEQ-NUM e ACK-NUM, un attaccante può effettuare l'hijacking di una sessione TCP.<br />
Può essere:
1) **Passivo**: l'attaccante si limita ad ascoltare la conversazione tra client e server;
2) **Attivo**: l'attaccante silenzia il client e impartisce comandi al server impersonando il client oppure chiude una connessione esistente.

----------------------------------------------------------------

### TCP SYN Flood ###
Ogni web server, quando inizia una connessione, memorizza il fatto di aver ricevuto un pacchetto di SYN da un client in una struttura dati detta **Trasmission Control Block** (**TCB**). Questa struttura diventa una entry nella backlog queue la quale contiene le connessioni iniziate ma non ancora completate. Il server, a questo punto, invia un pacchetto di SYN-ACK al client sorgente e rimane in attessa della sua risposta con ACK per terminare il **three-way handshake**.<br />
Un attaccante può generare un elevato numero di richieste di aperture di connessione (inviando SYN con IP spoofati), causando un rapido riempimento della struttura dati del server. Se l'attaccante riesce a causare il riempimento della backlog queue, allora può causare un DoS sul server.<br />
Questo attacco è letale perchè il server non sa distinguere tra i pacchetti reali e pacchetti spoofati.

Tra le contromisure contro questo tipo di attacco si menzionano:
1) Incrementare la dimensione della backlog queue;
2) ridurre il tempo di attesa dell'ACK da parte del client in modo da rimuovere più velocemente dalla backlog queue alcune entry;
3) Selezionare casualmente una connessione half-open dalla backlog queue e rimuoverla (solo quando la queue sta per saturarsi);
4) **SYN Cookies**;
5) **Prolexic proxy**.

La causa del Dos risiede nell'allocazione asimmetrica di risorse. Il server apre un nuovo stato ad ogni richiesta di connessione.<br />
La soluzione più intelligente che è stata ideata è il postporre lo stato, cioè creare la entry nella backlog queue solo dopo aver fatto un controllo sulla validità della connessione. Ciò avviene mediante la generazione di un cookie da spedire al client, che permette al server di rimanere stateless finchè il primo non spedisce almeno due messaggi (il SYN e l'ACK).<br />
Lo stato è memorizzato in un cookie (**IP addresses** e **ports of the connection**) e mandato all’initiator.<br />
Quando il client invia l'ACK, fornisce anche il cookie che viene confrontato dal server con quello che era stato inviato. Se il controllo va a buon fine, allora significa che la richiesta di connessione era legittima e quindi viene creata la entry nella backlog queue. L'attaccante non conosce ovviamente il cookie perchè il server lo invia solamente all'IP spoofato e, pertanto, non riuscirà a calcolare i parametri corretti da inserire nell'ACK di risposta.

Un'altra contromisura per filtrare le connessioni leggittime da quelle fasulle è quella di utilizzare un proxy tra i client ed il web server. Esso ha il compito di inoltrare al server solo le connessioni legittime mentre tutte le altre vengono scartate. Il proxy dovrà essere robusto.

L'attacco SYN flood non da via di scampo se viene utilizzata una **botnet**. Di fatto, si tratta di migliaia o milioni di client legittimi (controllati da remoto da un attaccante a loro insaputa) che completano contemporaneamente il three-way handshake con il server. Essendo tutte connessioni che si completano con successo ma in contemporanea, il server fa fatica a gestirle e subisce il DoS.

----------------------------------------------------------------

### DoS Attack ###
Attacco il cui goal è l'esclusione di un nodo o di un servizio. Utilizza tipicamente degli amplification attack, nei quali la quantità di dati generati dall'attaccante è inferiore a quella che colpisce la vittima.<br />
In un **reflection attack**, un attaccante, invece di colpire direttamente la vittima, dirige il suo traffico verso un host intermedio (**reflector**) il quale poi dirige il traffico verso la vittima.

#### Teardrop attack
L'attaccante invia una serie di datagrammi che non possono combaciare correttamente. I datagrammi non possono essere ricomposti correttamente e, in un caso estremo, il sistema operativo si blocca con queste unità di dati parziali le quali non è possibile riassemblare, portando così alla negazione del servizio.

----------------------------------------------------------------

### Attacchi a DHCP ###
[[Dynamic Host Configuration Protocol]] è il protocollo che consente di assegnare a nuovi host un indirizzo IP scelto da un pool di indirizzi liberi e disponibili. Il protocollo, oltre a restituire l'IP Address, può assegnare:
- l'indirizzo del router più vicino per il client (**Gateway**);
- nome ed indirizzo del DNS server;
- **Network Mask**.<br />

Questo protocollo è privo di misure di protezione e di conseguenza è soggetto ai seguenti attacchi:
1) **DHCP Starvation**: l'attaccante invia tante DHCP discover con MAC differenti. Questo causa un DoS al server, il quale non riesce a soddisfare tutte le richieste perchè esaurisce il pool di indirizzi. Eventuali host legittimi che vogliono ottenere un indirizzo IP ora sono impossibilitati;
2) **Rogue DHCP**: il server DHCP, dopo aver ricevuto una DHCP Request, indicherà al mittente non solo l'IP Address disponibile, ma anche il **default gateway** ed il **default DNS**. L'attaccante può fingere di essere un server DHCP e rispondere alle DHCP discover dei client. Siccome nelle risposte del server, di solito, i nuovi host vengono istruiti anche su quale sia il gateway della rete e altre informazioni utili, l'attaccante può comunicare un falso IP per il gateway (indicando sè stesso) e quindi risolvere gli URL come preferisce, compiere attacchi di phishing, sniffare il traffico facendo Man in the Middle o altro ancora.

Una contromisura attuabile per difendersi dagli attacchi al DHCP è il **DHCP snooping**. Si costruisce un **DHCP snooping binding database** (una tabella all'interno di uno switch) che contenga vari parametri:
1) **Client MAC Address**;
2) **IP Address**;
3) **Lease time**;
4) **Binding type**;
5) **VLAN number**;
6) **Port ID**.

Lo switch, il quale mette in comunicazione i vari dispositivi della rete, prevede che vi siano specifiche porte autorizzate (**trusted**) in grado di originare tutti i tipi di messaggi DHCP. <br />
Tutte le DHCP offer che arrivano su porte non autorizzate vengono quindi scartate. Infatti, la porta fisica dello switch viene chiusa ogniqualvolta arrivi un messaggio DHCP proveniente da host che non sono legittimati.<br />
Quindi, se un rogue server tenta di mandare un pacchetto DHCP, in risposta la porta viene chiusa ed il client che si è finto un server DHCP non riesce a mettere in atto l'attacco.

Una sicurezza ancora maggiore si ottiene abilitando l'**option 82**, nota anche come **DHCP Relay Agent Information**, che prevede il coinvolgimento attivo dello switch nella comunicazione tra client e server.<br />
Questa procedura è utile se client e server non fanno parte della stessa sottorete. Quando il client invia una richiesta al server DHCP, lo switch aggiunge informazioni ulteriori all'header della richiesta. Grazie a queste informazioni, il server può risalire allo switch e quindi alla posizione del client.<br />
Il server DCHP legge i dettagli aggiuntivi e assegna gli indirizzi IP in base alle informazioni sulla posizione. Il server invia il pacchetto di risposta al client tramite lo switch. Se, nel momento in cui il pacchetto raggiunge lo switch, le informazioni contenute sono rimaste invariate, lo switch riconosce che la comunicazione avviene effettivamente attraverso di esso. A questo punto, il dispositivo cancella i dati dell'option 82 dall'header e inoltra la risposta. Inoltre, l'aver ricordato la posizione del client (a quale porta fisica dello switch è collegato) rende impossibile effettuare la DHCP starvation. <br />
Questo perchè lo switch si accorgerebbe che stanno arrivando molteplici richieste di assegnazioni di IP tutte dalla stessa porta (con MAC differenti).

----------------------------------------------------------------

### Attacchi a BGP ###
[[Border Gateway Protocol]] è il protocollo che permette la comunicazione tra **Autonomous Systems**. Si tratta di un protocollo incrementale di tipo **Path Vector**, cioè manda un annuncio quando viene annunciata una nuova rotta ed un altro quando una rotta viene ritirata. Si parla di **iBGP** (**Internal**) quando ci si riferisce al BGP utilizzato all'interno di un Autonomous System. Si parla, invece, di **eBGP** (**external**) quando ci si riferisce al BGP utilizzato nella comunicazione tra AS diversi.

Il protocollo funziona secondo le seguenti regole:
1) il nodo $A$ invia un update ai nodi adiacenti, comunicando il suo essere in grado di indirizzare il prefisso $X$;
2) Il nodo $B$ riceve il messaggio di $A$ e, da quel momento, comunica che è in grado anch'esso di indirizzare $X$, passando però per $A$. Si crea quindi un **AS path (B A X)**;
3) Ovviamente, anche gli altri AS comunicheranno i propri path indirizzabili. Se un AS riceve un path già indirizzabile, non lo inoltra.

Questo protocollo può essere attaccato su molti fronti:
1) **Disponibilità** (DoS);
2) **Confidenzialità** ( **Eavesdropping**, messaggi in chiaro);
3) **Integrità** (**Tampering**);
4) **Autenticazione**.

L'integrità è, in realtà, un fronte difficile da attaccare in quanto i vari AS sono collegati tramite singoli HOP e, quindi, è difficile applicare un attacco MITM modificando il messaggio che i due AS si scambiano.

I messaggi di BGP Update non contengono nessun meccanismo di autenticazione o integrità. Un attaccante può, quindi, falsificare le rotte annunciate.<br />
I principali obiettivi di attacco per un host malevolo BGP sono:
1) **Blackholing**: consiste nel creare dei black holes nei quali i pacchetti spariscono. Nello specifico, vengono istruiti i vari AS che un certo $\text{AS}_{x}$ (vittima) è in grado di gestire un determinato prefisso meglio di chiunque altro (quando, in realtà, $\text{AS}_{x}$ non è in grado di farlo). In questo modo, i pacchetti sotto quel prefisso verranno girati ad $\text{AS}_{x}$ e lui non farà altro che dropparli in quanto non sono di sua effettiva competenza.
2) **Redirection**: il traffico viene rediretto e viene fatto passare per un router malevolo in grado di sniffare i vari pacchetti, oppure per far crollare una sottorete a causa del traffico ingente di pacchetti.
3) **Subversion**: caso particolare di **Redirection**, si tratta della redirezione dei pacchetti per farli passare attraverso un dispositivo controllato dall'attaccante in modo tale che l'attaccante sia in grado di leggere e/o modificare i dati per poi propagare i dati al legittimo destinario, a differenza della Redirection classica.
4) **Instability**: distruzione delle rotte ed interruzione della connettività, oppure aumento drastico dei tempi di convergenza (ovvero i tempi per stabilizzare le rotte). Questo obiettivo si ottiene inviando in rapida successione annunci che cambiano di continuo la topologia della rete. I pacchetti vengono, quindi, sballottati per la rete.

Gli attacchi possibili sono:
1) **Prefix Hijacking**: un attaccante $B$ annuncia di conoscere tratte più veloci per raggiungere un particolare AS (chiamato $V$). Tutti gli AS che sono connessi direttamente a $V$ non saranno affetti da tale annuncio. Il resto degli AS e di internet, invece, saranno affetti. Ciò significa che, da quel momento, tutti gli AS che dovranno comunicare con $V$ passeranno da $B$, il quale, successivamente, rimanderà il traffico a $V$. In questo modo $B$ è in grado di sniffare tutti i messaggi diretti a V (**subversion**);
2) **De-Aggregation**: un attaccante $B$ annuncia di conoscere un sotto-insieme di indirizzi IP con un livello più specifico. Se il router $V$ conosce gli indirizzi $x/22$ e $B$ sostiene di conoscere gli indirizzi $x/24$, il traffico verrà dirottato su $B$. Infatti, secondo il protocollo BGP, si preferisce l'Access Point che fornisca una maggiore specificità di indirizzi, cioè $B$, in quanto in possesso di una subnet mask più precisa. In questo modo, il traffico diretto a $V$ verrà instradato verso $B$, il quale sarà in grado di sniffarne il contenuto (**subversion**);
3) **AS Path Shortening**: viene annunciato un nuovo path che taglia fuori la vittima (**instability**);
4) **Annunci Contraddittori**: si tratta di annunci differenti di routing spediti dallo stesso AS a differenti BGP. Lo scopo dell'attacco è creare congestione o ridirigere il traffico attraverso un path subottimale;
5) **Link Flapping**: con Link Flapping si definisce la disattivazione e la riattivazione di un link, una pratica comune. Se questo flapping avviene frequentemente, si crea instabilità nella rete, poichè gli instradamenti sono dinamici, in continua varazione. In questo attacco, vengono mandati tanti update sugli AS path. In questo modo, coloro che ricevono questa serie di aggiornamenti si convincono che il percorso è **flapping**. Pertanto si attiva il **router dampening**, la riattivazione di un particolare path con tempi sempre più lunghi per fare in modo che il router sovraccaricato si riesca a scaricare senza dover gestire altri pacchetti;

Le principali contromisure adottate da BGP sono:
1) **Time To Leave (TTL)**: poichè i BGP router sono ad una distanza di un singolo HOP l'uno dall'altro, si accettano solo pacchetti con uno specifico TTL. Il TTL viene decrementato ad ogni singolo HOP. Tutti i messaggi BGP vengono inviati con un TTL pari a 255. Con questo sistema di sicurezza, si accettano solo i messaggi con un TTL pari a 254;
2) **MD5**: crittografare i messaggi;
3) [[IPSEC]];
4) **Route Filtering**: vengono create delle **Access Control Lists** per filtrare i messaggi di update in ingresso ed in uscita in modo tale che ci si assicuri che le rotte seguano specifiche regole;
5) **Resource Public Key Infrastructure (RPKI)**: questo sistema prevede l'esistenza di una repository contenente delle key. Gli AS ottengono un certificato **Route Origin Authorizations** (**Roa**), fornito dall'autorità regionale **Regional Internet Registries**.<br />Ogni ROA continene un **AS Number**, il **range di validità per le date** ed i **prefissi IP**.<br />Nello specifico, quando un AS certificato vuole inviare un update, lo farà aggiungendo il proprio certificato, permettendo così agli altri AS che riceveranno il pacchetto di confermare la sua identità. Gli annunci senza un ROA valido vengono ignorati dalle reti.<br />Una Public Key Infrastructure viene utilizzata anche dalle versioni sicure del protocollo BGP (**S-BGP** e **SO-BGP**).<br />**S-BGP** è un estensione di BGP utilizzata per proteggere il protocollo da pacchetti Update erronei o maliziosi. Ogni S-BGP Router genera un **Address Attestation** per verificare di essere autorizzato ad annunciare quel blocco di IP.<br />Ogni S-BGP router lungo il path, poi, dovrà validare l'integrità di un Update prima di firmarlo e di riannunciarlo.<br />**SO-BGP** è, invece, una versione di BGP con maggiore flessibilità.

----------------------------------------------------------------

### Attacco a DNS ###
Il protocollo [[Domain Name System]], o **DNS**, è un protocollo utile per risolvere **indirizzi logici** (www.indirizzologico.com) in **indirizzi fisici**, ovvero gli indirizzi I (1.1.1.1).<br />Si tratta di un servizio gerarchico:
1) **Root Name Servers**: responsabili dei domini al top level;
2) **Top Level Domain Servers**: responsabili dei domini di primo livello, come **.it**, **.com**, **.org**;
3) **Authoritative Name Servers**: responsabili dei sottodomini, come **.unimi.it**;

Con il termine **Zona** o **Dominio**, si definisce una collezione di coppie $< \text{hostname-IP Address}>$ gestite insieme.

Con il termine **Nameserver** si fa riferimento ad un software server che risponde a Query DNS. Spesso il Nameserver conosce la risposta direttamente, cioè è authoritative per la zona mentre, altre volte, ridirige la domanda (**Recursive Nameserver**). 

Per la risoluzione dei nomi ci si affida ad un **resolver** (una libreria compilata in un programma che richiede il servizio DNS). Ogni resolver sa come interrogare il Nameserver. Il resolver manda, quindi, una richiesta al Nameserver; la risposta o è definitiva, nel caso in cui quel nameserver sia authoritative per la zona, o rappresenta la prima entità che gestirà le varie richieste da fare ai server esterni. Esso effettuerà una prima richiesta ad uno dei Root Name Server (di cui ne esistono 13, ciascuno dei quali gestisce una differente regione geografica). Questi server forniscono al Nameserver l'IP del server autoritativo responsabile. A questo punto, il Nameserver ridirige a sua volta la richiesta al server autoritativo responsabile di quel dominio. Il server autoritativo è il server che restituisce l'indirizzo IP vero e proprio del server desiderato.<br />Ogni risoluzione DNS, anche in caso di risoluzione errata, viene temporaneamente salvata in una memoria cache per fare in modo che un'eventuale risoluzione per lo stesso indirizzo sia molto più rapida. I dati in cache scadono in base ad un campo Time To Leave.

La principale problematica del protocollo DNS è dovuta al fatto che i messaggi non prevedono alcun tipo di controllo di autenticazione alla ricezione del messaggio. L'unico tipo di controllo che viene eseguito è che il messaggio di risposta matchi con il messaggio di richiesta.<br />
Di conseguenza, è facile intuire come questo generi un grave problema di sicurezza.<br />
Ogni Nameserver può, inoltre, annunciare di possedere una determinata zona, anche se non la possiede realmente e, per aumentare l'efficienza del sistema, generalmente vengono utilizzate risposte contenute nella cache dei resolver.<br />

Le principali vulnerabilità del protocollo DNS sono le seguenti:
1) **DNS Cache Poisoning**: ne esistono due versioni, una di origine anonima ed una denominata **Kaminsky Attack**. L'obiettivo di entrambe è quello di falsificare i valori contenuti all'interno della cache del Nameserver ricorsivo. Così facendo, tutti gli utenti collegati a questo server riceveranno falsi IP per un certo indirizzo logico.<br />Il DNS accetta solo risposte a query in attesa e sulla stessa porta UDP. Infatti le risposte non desiderate vengono ignorate.<br />
L'attaccante invia una **DNS Query** al Nameserver vittima per un particolare indirizzo. Di conseguenza, si attiva la serie di richieste per ottenere il corrispettivo indirizzo fisico.<br />Nel primo caso, l'attacco consiste nel riuscire a rispondere al Nameserver con un indirizzo fisico corrispondente ad un sito web gestito dall'attaccante (in modo tale da reindirizzare la vittima su siti malevoli) prima che la reale risposta dell'Authoritative Server arrivi. L'unica difficoltà di questo attacco consiste nel fatto che le richieste del Nameserver sono identificate da un **QID** (**Query ID**) che l'attaccante deve indovinare per forgiare una risposta che sembri autentica. Il punto cruciale di questo attacco risiede nel non avere in cache la risoluzione dell'indirizzo logico al quale ci si vuole sostituire. Nel caso la risoluzione sia presente in cache, è necessario aspettare lo scadere del TTL. Oltre a ciò, è necessario indovinare il corretto QID ed essere in grado di rispondere più velocemente dell' Authoritative Server.<br />Nel secondo caso, invece, l'attaccante cerca di sostituirsi totalmente all'Authoritative Server. L'attaccante vuole redirigere tutte le richieste fatte all'Authoritative Server vittima su di sè. Anche in questa versione è sempre presente l'incognita del QID da superare per la buona riuscita dell'attacco.<br />
L'attaccante richiede un indirizzo casuale all'interno del dominio target e cerca poi di sostituirsi ad un Authoritative Nameserver inviando al Nameserver un flusso di pacchetti spacciandosi per il Root Name Server o per il Top Level Domain Server. In questo flusso di pacchetti, l'attaccante delega un altro Nameserver la risoluzione dell'indirizzo logico, ridirezionando il Nameserver verso l'IP dell'attaccante. Il Nameserver vittima si convince in questo modo che il Nameserver dell'attaccante sia authoritative per l'intero dominio di secondo livello. In questo modo l'attaccante è riuscito a sostituirsi ad un Authoritative Server. Controllando il dominio, l'attaccante controlla tutta la risoluzione del nameserver. Infatti, puòmridirigere i visitatori del web, dirigere email ai propri server con falsi **MX Records** o settare un TTL molto alto per rimanere in controllo.<br />
Questo attacco è possibile perchè chiunque può configurare un proprio nameserver che sia authoritative per un qualsiasi dominio, benchè di base sia inutile in quanto non viene puntato dal protocollo DNS.<br />Una possibile difesa risiede nell'aumentare il range casuale del QID per renderlo più difficile da indovinare.<br />Attuando con successo il Kaminsky Attack, si prende controllo di tutto il dominio perchè si riesce a convincere il server vittima di star comunicando con il vero server autoritativo. Con l'attacco generico, invece, si prende il controllo non di tutto il dominio ma solo di un sito. Questo avviene perchè la risposta dell'attaccante arriva dopo quella del Top Level Domain Server ma prima di quella del server autoritativo;
2) **DNS Rebinding**: l'attaccante registra un dominio (come, ad esempio, www.sample.com) e ne delega la risoluzione ad un server DNS sotto il suo controllo. Il server viene configurato per rispondere con un TTL molto basso o nullo, per prevenire che la risposta venga inserita nella cache dell'host vittima. Quando la vittima contatta accidentalmente l'indirizzo logico, il server risponde con l'indirizzo fisico che fa scaricare sul client della vittima del codice Javascript malevolo. Questo codice, una volta eseguito, effettua in automatico un'altra richiesta al dominio logico (il client non conosce la risoluzione per via del TTL basso della precedente richiesta). Il server DNS dell'attaccante, questa volta, risolve www.sample.com con un indirizzo che appartiene alla rete privata della vittima. Così facendo, la vittima, in maniera inconsapevole (per via della [[Same-Origin Policy]], la quale impedisce a del codice [[Javascript]] di leggere e/o modificare contenuto al di fuori della pagina web stessa o del server da cui è stato scaricato), consente all'applet installato con la prima richiesta dall'attaccante di accedere ai servizi nella rete locale;

E' importante tenere a mente il fatto che ogni link, ogni immagine ed ogni advertisement può provocare un **DNS lookup**, non solo il codice Javascript (**Triggering a Race**).

I meccanismi di difesa contro il Cache Poisoning sono i seguenti:
1) Aumentare la taglia delle Query ID;
2) Aggiungere una porta casuale da indovinare oltre al Query ID. Le combinazioni ora diventano $2^{16} \cdot 2^{11} = 2^{27} = 134$ milioni;
3) Richiedere ogni query due volte. In questo modo, l'attaccante deve indovinare il Query ID due volte (32 bits).

I meccanismi di difesa contro il DNS Rebinding sono i seguenti:
1) **DNS Pinning**: quando si risolve un host, vale solo il primo IP che viene restituito. Per proteggersi, un meccanismo è usare un **database di pinning**, cioè utilizzare un database nel quale vengono fissati gli IP in modo tale da evitare queste re-interrogazioni e non dare la possibilità all'attaccante di redirigere gli attacchi e associare dei nuovi IP allo stesso dominio;
2) **Difese server**: meccanismi di autenticazione per gli utenti con qualcosa di diverso da IP. Controllare l'intestazione host per i domini non riconosciuti;
3) **Difese firewall**: non si possono risolvere nomi esterni con IP interni.

DNS è anche soggetto ad innumerevoli attacchi di tipo **DoS** (**Denial of Service**):
1) **Exploit to fail**: l'attaccante inonda di messaggi malformati il nameserver in modo tale che questo crashi;
2) **Exploit to own**: sfrutta vulnerabilità come **Buffer Overflow** per ottenere i privilegi amministrativi;
3) **Reflection and Amplification**: attacco mirato a un host target in cui l'attaccante, tramite IP spoofato, fa sì che tutte le richieste fatte ad un determinato DNS recursor siano indirizzate alla vittima. L'amplification avviene qualora, ad un messaggio breve inviato dall'attaccante, corrisponda un messaggio più corposo in risposta dal server;
4) **NXDomain Exhaustion**: l'aggressore inonda il nameserver con tante query DNS per nomi di dominio inesistenti. Il resolver tenta di risolvere ed aggiunge alla cache tante entry NXDomain (**Non Existent Domain**). La cache della vittima si satura e diventa problematica la risoluzione di nomi legittimi.

Un meccanismo di difesa generale di DNS è dato da **DNSSEC**.<br />Rappresenta un protocollo per garantire che i messaggi che vengono scambiati durante la risoluzione di un indirizzo logico siano autentici e non corrotti. Questo protocollo funziona con la crittografia asimmetrica, dove ogni livello gerarchico del DNS utilizza chiavi pubbliche e private per firmare le richieste DNS. Si crea, dunque, una catena di fiducia a partire dalla chiave pubblica "fidata" di un server, il quale conosce l'host che fa le richieste DNS.

Le vulnerabilità di DNS sono causate dal fatto che sia gli utenti che gli host si fidano del mapping host-address restituito dal DNS.

----------------------------------------------------------------

### Buffer Overflow ###
**Buffer Overflow** è una delle maggiori vulnerabilità di sicurezza, causato spesso dalla capacità dell'attaccante remoto di eseguire del codice arbitrario. Questo tipo di attacchi è causato in genere da programmi che non controllano input non validi, tipicamente più lunghi di quanto previsto.<br />
Nell'implementazione della memoria di un calcolatore, uno **Stack Frame** contiene i parametri della funzione, le sue variabili locali, i dati necessari per ripristinare il precedente stack frame, incluso l'indirizzo dell'istruzione successiva alla chiamata a funzione.
Se un programma non controlla il limite degli array, allora è possibile che il programma riceva input particolare per sovrascrivere questo indirizzo di ritorno, impedendo così il ritorno al programma chiamante e permettendo all'attaccante di inserire istruzioni malevole.

----------------------------------------------------------------

#### Stack Canaries ####
Uno stack canary è un numero casuale posto sullo stack tra i dati dell'utente e l'indirizzo di ritorno.<br />
L'overflow della variabile locale e la modifica dell'indirizzo di ritorno cambierà anche lo stack canary.<br />
Prima di tornare, il programma controlla il valore canarino e, se è stato modificato, capirà di essere stato vittima di un attacco buffer overflow.

----------------------------------------------------------------

## Set UID ##
Tutte le risorse Linux (socket, dispositivi, file) sono gestite come file. Tutti i file e le directory hanno un unico proprietario utente ed un unico gruppo proprietario.<br />
Il modello di autorizzazione di UNIX è una semplice implementazione di una strategia di controllo degli accessi, nota come **Access Control List** (**ACL**).<br />
Ogni oggetto ha un'ACL, la quale identifica le operazioni che i soggetti possono eseguire. Ogni accesso ad un oggetto viene verificato rispetto all'ACL dell'oggetto.<br />

![[UnixACL.png]]

I file UNIX sono amministrati utilizzando gli [[Inode]], strutture di controllo con informazioni chiave sui file.<br />
I processi sono isolati l'uno dall'altro durante l'esecuzione: infatti non possono accedere alla memoria reciproca. Inoltre, vengono eseguiti come un utente specifico e con le autorizzazioni dell'UID dell'utente. I processi possono quindi accedere a tutti i file a cui l'UID ha accesso. All'esecuzione di un comando, esso viene eseguito con i privilegi dell'utente perchè la shell viene eseguita come account utente ed avvia una fork per avviare il comando.<br />
I processi avviati da **root** possono, però, ridurre i propri privilegi, modificandoli in un UID meno privilegiato.<br />
Ogni processo possiede tre User ID:
- **Effective User ID** (**EUID**): determina le autorizzazioni per il processo, date dai permessi dell'utente che l'ha eseguito se il bit SetUID non è settato (EUID = RUID). Altrimenti, se il bit SetUID è settato, determina le autorizzazioni per il processo date dall'owner del file;
- **Real User ID** (**RUID**): determina l'utente che ha avviato il processo;
- **Saved User ID** (**SUID**): EUID prima della modifica.

Con **Set User ID** (**SetUID**), il sistema utilizza temporaneamente i privilegi del proprietario (o del gruppo nel caso di **Set Group ID**) del file oltre ai privilegi dell'utente reale. Questo consente ai programmi privilegiati di accedere a file/risorse generalmente non accessibili.

Quando un normale programma viene eseguito, RUID=EUID, entrambi sono uguali all'ID dell'utente che ha eseguito il programma.
Quando viene eseguito il **SetUID**, RUID$\neq$EUID. Il RUID rimarrà uguale all'user ID, mentre EUID è uguale all'ID del proprietario del programma. Se, per esempio, il programma è possieduto da root, allora il programma viene eseguito con i permessi di root.

Con il comando **CHMOD**, è possibile specificare i permessi con 4 bit.<br />
Il primo bit può assumere i valori $4/2/1$, i quali corrispondono a settare i bit Set UID sull'owner, sul gruppo e lo sticky bit.<br />
Il secondo bit rappresenta i permessi per l'owner.<br />
Il terzo bit rappresenta i permessi per i gruppi.<br />
Il quarto bit rappresenta i permessi per gli utenti world.<br />

----------------------------------------------------------------

## Network Scanning ##
Il **Network Scanning** rappresenta un'analisi per conoscere il sistema operativo ed i software (più eventuali configurazioni di tali software) presenti su una certa rete. Questa conosenza permette di determinare i tipi di attacco che possono essere eseguiti ai danni di tale rete.<br />
Gli obiettivi del network scanning sono:
1) riconoscere i servizi UDP e TCP disponibili;
2) riconoscere i servizi in esecuzione su ogni porta;
3) riconoscere quali utenti hanno accesso ai servizi;
4) riconoscere i sistemi di filtraggio usati tra l'attaccante e la vittima;
5) determinare il sistema operativo esaminando le risposte IP.

Si tratta di una tecnica nata per aiutare i sistemisti di rete a capire se nel sistema sono presenti superfici di attacco disponibili. Allo stesso modo, gli attaccanti usano questa stessa tecnica per trovare, appunto, superfici di attacco.<br />

immagine da mettere

Lo scanning può avere natura:
1) **attiva**: si scansiona immettendo del traffico nella rete e creando pacchetti sonda che interrogano le macchine ed i dispositivi di rete;
2) **passiva**: si osserva il traffico generato tra client e server per capire se i servizi sulle diverse porte sono attivi o spenti.

Questa strategia può essere attuata da remoto a locale, da locale a remoto, da locale a locale o da remoto a remoto.

Inoltre, il target può essere:
1) **singolo**: una macchina;
2) **multiplo**: più macchine.

L'approccio può avere come scopo un ampio range oppure un target specifico, ed utilizzare il metodo **Single Source** scanning oppure **distributed** scanning.<br />
Si considerino ora le tipologie di scanning applicabili nel caso di Single Source scanning (operata da una source a molti target):
1) **verticale**: consiste di un port scan di alcune o tutte le porte su un singolo computer;
2) **orizzontale**:scansiona una singola porta fra molti indirizzi IP;
3) **strobe**: scansiona molte porte fra molti IP Address;
4) **block**: scansiona tutte le porte su molti IP Address.

Si consideri ora il caso del **distributed** scanning:
- molteplici sistemi agiscono in un unione strategica per scansionare una rete od un host;
- riduce la traccia lasciata da uno scanning di un singolo sistema e diminuisce la possibilità di essere scoperti.

Ognuno di questi approcci di scanning ha, ovviamente, dei pro e contro.<br />
Lo scanning attivo fornisce un rapporto completo delle porte aperte e non rileva porte filtrate o protette da port knocking, oltre ad essere molto veloce. Di contro, è molto intrusivo e può essere rilevato da IDS, oltre a non essere in grado di identificare host temporaneamente non attivi.<br />
Lo scanning passivo invece è uno scanning non intrusivo, in quanto non viene rilevato da IDS. E' inoltre in grado di rilevare attività proveniente da host temporanei e non consuma risorse. DI contro, però, è in grado di rilevare solo host attivi.

La scansione di una porta può dare i seguenti esiti:
1) **aperta**: il target ha risposto indicando che il servizio è in ascolto su quella porta;
2) **chiusa**: il target ha risposto indicando che le connessioni alla porta saranno rifiutate;
3) **bloccata/filtrata**: il target non ha risposto, pertanto le connessioni alla porta saranno rifiutate (è dovuto probabilmente alla presenza di un firewalll che blocca alcuni pacchetti).

Seguono, ora, alcuni dettagli delle specifiche TCP fondamentali al fine di comprendere le tecniche di scanning esistenti:
1) un segmento in arrivo con il flag RST viene sempre scartato senza alcuna risposta;
2) se una porta è nello stato closed:
	1) se il segmento in attivo non ha il flag RST attivo, allora viene inviato al mittente un pacchetto con il flag RST come risposta;
3) se una porta è nello stato di listen:
	1) se il segmento in arrivo contiene un ACK, allora il messaggio di risposta conterrà un RST;
	2) se il segmento in arrivo contiene un SYN, allora verrà inviato al mittente un pacchetto con i flag SYN e ACK come risposta;
	3) se nessuno dei casi precedenti è verificato, allora il segmento viene scartato senza risposta.

Seguono, ora, alcune scansioni esistenti:
1) **ARP scan**: scan il quale permette di scoprire gli host attivi nella sottorete locale, inviando una serie di ARP Broadcast. Questa tecnica funziona solo sulla sottorete locale e si basa sull'incrementare il valore contenuto nel campo IP Address Target in ogni pacchetto broadcast;
2) **ICMP scan**: scan il quale permette di scoprire gli host attivi nella sottorete inviando dei pacchetti ICMP di tipo **Echo Request** (PING). Un Ping misura, in millisecondi, il tempo affinchè i pacchetti ICMP raggiungano un dispositivo di rete. Questo scan invia un ICMP di tipo Echo Request e rimane in attesa di un Echo Reply in risposta;
3) **TCP SYN Ping**: scan il quale si basa sull'inviare un TCP SYN sulla porta 80 dell'host remoto. Se l'host target risponde con un qualsiasi pacchetto (SYN/ACK o RST), significa che l'host è UP. Questa scan ha il vantaggio che la connessione al servizio non si conclude;
4) **TCP ACK Ping**: scan il quale si basa sull'inviare un pacchetto ACK su una porta TCP. Viene, quindi, generato un RST di risposta. Il vantaggio rispetto all'usare il SYN Ping risede nel fatto che, se davanti all'host è presente un firewall stateless, si è in grado di superarlo (mentre non si è in grado di superare un firewall statefull);
5) **UDP Ping**: scan il quale si basa sull'inviare un pacchetto UDP vuoto ad una porta (probabilmente non aperta). Se l'host target risponde con un ICMP Port Unreachable, rivela di essere UP;
6) **IP Protocol Ping**: in IPV4, un datagramma può contenere diversi protocolli di livello $4$. Se dovessero venire inviati pacchetti su di un protocollo non abilitato, la risposta è ICMP Protocol Unreachable. Questo scan si basa, quindi, sull'inviiare richieste su protocolli non abilitati e controllarne le risposte;
7) **TCP Connect (Open) scan**: scan la quale fa uso della syscall _connect()_ da utente non privilegiato. Nel caso in cui si dovesse ricevere un ACK, ciò significherebbe che la porta è open. Nel caso, invece, in cui si dovesse ricevere un RST, ciò significherebbe che la porta è closed. Infine, la ricezione di ICMP Unreachable o di nessuna risposta significherebbe che la porta è filtered;
8) **TCP Connect (Half-Open) scan**: scan il qualee fa uso della syscall _connect()_ da utente non privilegiato. Questa tecnica si basa sull'aprire una connessione TCP tramite three-way handshake. Se si dovesse ricevere un SYN + ACK, ciò significherebbe che la porta è open e ,in questo caso, si restituirebbe un RST per terminare la connessione aperta a metà. Se. invece, si dovesse ricevere un RST, ciò significherebbe che la porta è closed. Se, infine, si dovesse ricevere un ICMP Unreachable oppure nessuna risposta, ciò significherebbe che la porta è filtered;
9) **Version Detection scan**: si tratta di un probing process, utilizzato al fine di scoprire informazioni rilevanti sull'applicazione, sulla versione e sul software. Questa tecnica necessita di banda e di tempo di elaborazione. Inoltre, non è una tecnica stealth in quanto la connessione viene memorizzata nel log.

Le tecniche di network scanning le quali usano il SYN flag sono facilmente rilevabili dall'**Intrusion Detection System** (**IDS**). Questo filtraggio viene evitato, quindi, utilizzando altri flag. Per determinare le porte open si usa la tecnica dell'**inverse mapping** (inverse poichè le risposte sono ottenute solo dalle porte chiuse).

1) **TCP SYN/ACK scan**: scan il quale si basa sul mandare un TCP SYN/ACK sulla porta 80 dell'host remoto. Se l'host target dovesse rispondere con RST, ciò significherebbe che la porta è chiusa. Il non ricevere nessuna risposta indicherebbe, invece, che la porta è open. A causa del packet loss, si possono, tuttavia, avere dei falsi positivi;
2) **TCP ACK scan**: scan il quale non è mirato a verificare se una porta è open ma si usa per determinare la presenza di un firewall. Questa tecnica si basa sul mandare un pacchetto TCP ACK alla porta specificata. Se la risposta dovessere essere un TCP RST, ciò significherebbe che la porta è unfiltered. Negli altri casi, invece, la porta è filtered. Questa tecnica di scanning è stealth quando è cominata ad altro traffico, in quanto non apre una connessione;
3) **Window scan**: scan simile alla tecnica ACK scan. Si basa sullo sfruttare un dettaglio implementativo. Infatti, per differenziare le porte open dalle porte closed, viene esaminato il campo **window** del pacchetto RST. Su alcuni sistemi, le porte open utilizzano un valore positivo per la window size, mentre le porte closed assumono valore zero, Invece di listare una porta come unfiltered quando si riceve un RST, window scan restituisce open o closed a seconda del valore TCP window. Se la TCP RST response dovesse avere window non zero, ciò significherebbe che la porta è open. Se la TCP RST response dovesse, invece, avere window zero, ciò significherebbe che la porta è closed. Nei casi rimanente, la porta è filtered;
4) **TCP FIN/NULL/XMAS scan**: 
5) **Fragmentation scan**: scan il quale si basa sul modificare l'approccio dei TCP stealth scan al fine di usare gli IP datagram. Questa tecnica ha il vantaggio di rendere detection e blocking più complicati, poichà alcuni sistemi non bufferizzano la sequenza di pacchetti. Di contro, questo scan ha come svantaggi il fatto di non funzionare su tutti i sistemi operativi, l'essere lento e non affidabile a causa del packet loss;
6) **IDLE scan**: scan nel quale lo scanner non invia direttamente pacchetti alla vittima ma utilizza un host come intermediario, sfruttando indirizzi spoofed ed il campo ID dell'header IP. Il campo ID è uguale per ogni frammento appartenente allo stesso pacchetto mentre viene solitamente incrementato di uno ad ogni pacchetto diverso. Il requisito per la macchina zombie è che sia in IDLE, in modo da mantenere consistenti gli **IP identification frames** durante lo scan (**IPID**). L'host sorgente invia un SYN/ACK allo zombie host e attende un RST con un generico IPID come risposta. L'host sorgente esegue un Half-Open scan, usando l'indirizzo spoofed dello zombie, avente la vittima come target. Se la porta è open, la vittima risponderà allo zombie con un SYN/ACK. Lo zombie, non aspettando un SYN/ACK, risponderà con un RST ed aumenterà di 1 l'IPID (in quanto appartenente ad un nuovo pacchetto). IL sorgente rispedirà, quindi, un SYN/ACK allo zombie: se l'IPID dovesse essere aumentato, allora l'host sorgente sarà in grado di dedurre che la porta della vittima è open. In caso contrario, la porta è closed;
7) **UDP scan**: scan nel quale lo scanner genera pacchetti udp con $0$ byte di dati. Una qualunque risposta UDP indicherebbe che la porta è open. L'assenza di ricezione di risposte indicherebbe, invece, che la porta è open oppure filtered. la ricezione di un ICMP Port Unreachable indicherebbe che la porta è sicuramente closed mentre altri errori ICMP indicherebbero che la porta è filtered;
9) **FTP Bounce scan**: scan simile all'IDLE scan. Un server FTP agisce come zombie. In **FTP active mode**, tramite il comando PORT si può indicare su quale IP e porta si desidera ricevere risposta. Se il server non dovesse riuscire a collegarsi, darà un errore sulla connessione FTP. Questo indica che la porta scansionata è chiusa. Se, invece, il trasferimento dovesse avere successo, ciò indicherebbe che la porta è aperta. I vantaggi di questo scan sono l'utilizzo dello standard FTP per raggiungere l'obiettivo ed il fatto che sia uno scan stealth, in quanto la vittima è in gradp di vedere solo il server FTP. Gli svantaggi sono, invece, il funzionamento esclusivo su porte TCP, il fatto che sia uno scanning lento e che lasci tracce sul server FTP. Alcune possibili contromisure a questa tecnica sono l'impedire che l'indirizzo IP specificato dal comando PORT sia diverso da quello dell'FTP Client e l'impedire che il numero di porta sia minore di 1023;
10) **OS Fingerprint**: processo per determinare il sistema operativo usato dal target. Si esplorano le differenze TCP/IP tra sistemi operativi. Alcune possibili contromisure a questo processo sono l'utilizzo di **Network Intrusion Detection System** (**NIDS**) al fine di rilevare lo scan e l'utilizzo di firewall per bloccare questo processo;
11) **Traceroute scan**: scan in quale utilizza i TTL per analizzare una rete. Si occupa di ricavare il percorso seguito dai pacchetti sulla rete, cioè l'indirizzo IP di ogni router attraversato per raggiungere il destinatario. Il TTL è decrementato ad ogni HOP. Quando esso raggiunge il valore $0$, il pacchetto muore ed il router sul quale avviene la morte restituisce un **Time Exceeded ICMP** message, contenente l'indirizzo del router stesso. Questa tecnica inizia mandando un pacchetto (ICMP o UDP) con TTL pari ad $1$ e prevede una risposta Time Exceeded. Il mittente sarà un router a distanza 1 hop. Si ripete questa tecnica con TTL crescenti, fino a quando non si avrà mappato tutto il path. I pacchetti spediti da Traceroute possono, però, essere bloccati (si bloccano i pacchetti con un TTL basso artificiale oppure si bloccano tramite firewall, in quanto i pacchetti bloccati dal firewall non muoiono mai). Alcune possibili contromisure a questa tecnica al fine di preverirla sono il disabilitare i servizi non necessari e bloccare le porte con un firewall stateful. Al fine di rilevare questo scan è bene, invece, utilizzare un Network Intrusion Detection System, in quanto i port scan hanno spesso pattern rilevabili. Inoltre, IPS può reagire ad uno scan, bloccando gli indirizzi Ip sospetti.


12) **TCP scan** (**intrusivo**): si invia un pacchetto di SYN e si effettua un three way handshake. Se la porta obiettivo della scansione risulterà aperta, l'attaccante riceverà in risposta un pacchetto TCP con i flag SYN e ACK attivi. A questo pacchetto, l'attaccante risponderà con un pacchetto ACK. Altrimenti, nel caso di porta chiusa, riceverà un pacchetto TCP con flag RST attivo, il quale terminerà la connessione;
13) **TCP SYN PING** (**stealth**): si invia un pacchetto di SYN. Se l'host risponde con SYN/ACK, la porta è aperta (e non si completa il three way handshake). Se la vittima risponde con RST, la porta è chiusa. Viene considerata una tecnica di scansione stealth perchè, tipicamente, nei log vengono memorizzate le connessioni complete e non le half open;
14) **TCP ACK PING** (**stealth**): per effettuare la scansione si invia un pacchetto TCP con il bit ACK attivo. Se il firewall blocca il pacchetto, la sorgente allo scadere di un timeout riesce a dedurre che la porta è filtrata. Se il firewall lascia passare il pacchetto, esso raggiunge il target, il quale, non avendo una sessione TCP attiva, risponderà con un pacchetto con il bit RST attivo. In questo caso, si deduce che la porta non è filtrata (non si sa se sia chiusa o aperta);
15) **IDLE scan** (**stealth**): ;
16) **Windows scan** (**stealth**): consiste nel mandare un ACK alla vittima ed analizzare il campo Window del pacchetto RST, il quale, se maggiore di zero, significa che la porta è open mentre, se uguale a zero, significa che la porta è chiusa. Non tutti i sistemi seguono, però, questa logica: infatti, i sistemi che non seguono questa logica restituiscono closed. Nel caso di mancata ricezione della risposta o di **ICMP Unreachable Error**, si deduce che la porta sia filtered;
17) **FIN/NULL/Xmas scan** (**stealth**): si invia un pacchetto con le relative flag a 1 (con Xmas si mandano FIN, URG e PSH mentre con NULL si inviano pacchetti isolati con tutte le flag a 0). Se il destinatario risponde con RST la porta è chiusa, altrimenti è open o filtered;
18) **UDP scan** (**miscellaneous**): si invia un pacchetto UDP. Se si riceve una risposta UDP, allora la porta è aperta. Se invece si riceve un pacchetto ICMP unreachable, allora la porta è chiusa. Se, infine, si ricevono altri errori oppure nessuna risposta ICMP, allora la porta è filtered;
19) **FTP bounce scan**: (**stealth**): si tratta di una scansione simile alla IDLE perchè usa come zombie un server FTP. Se la connessione viene stabilita, allora la porta è aperta. Se la connessione non viene stabilita, allora la porta è chiusa;

La tecnica **IDLE scan** prevede di non inviare direttamente pacchetti alla vittima ma di avere come intermediario un host o una macchina zombie in stato di idle (non deve ricevere/inviare traffico di rete al fine di non incrementare il campo identification) e considerare il suo campo identification dell'header IP per capire lo stato di una porta. In generale, il sistema operativo genera il valore per questo campo in maniera sequenziale, avente lo stesso valore per ogni frammento appartenente allo stesso pacchetto trasmesso, per cui esso rimane inalterato se l'host non trasmette pacchetti.

Lo scan avviene secondo la seguente procedura:
1) l'attaccante interroga lo zombie con un pacchetto SYN/ACK per conoscere l'attuale valore del campo identification. Lo zombie, non aspettando il pacchetto, invia un segnale di RST, rivelando il suo IP ID.;
2) l'attaccante manda un messaggio di SYN alla vittima con IP spoofato dello zombie;
3) se la vittima risponderà allo zombie con un SYN/ACK, allora lo zombie risponderà con un pacchetto RST (in quanto non si aspetta nessuna connessione da parte della vittima), incrementando così il campo identification (perchè il campo identification incrementa ogni volta che lo zombie trasmette un pacchetto);
4) l'attaccante invia nuovamente un messaggio SYN/ACK allo zombie e scopre di quanto si è incrementato il campo identification;

In questo modo, l'attaccante è in grado di capire se la vittima è attiva o meno. Se il campo identification è incrementato solo di 1, vuol dire che la porta è open, altrimenti è closed.

Per la tecnica **FTP bounce scan**, invece, si usa un meccanismo simile a quello della IDLE scan. Il server FTP viene utilizzato come uno zombie per avere indizi sulla macchina vittima. In FTP esiste il comando **PORT**, il quale consente all'attaccante di iniziare una connessione dati per trasferire, per esempio, file o la lista delle directory alla vittima (passando dal server). Inoltre, questo comando permette di specificare su quale IP e porta ricevere la risposta da parte del server. Tramite questo comando, l'attaccante specifica l'IP della vittima e la porta da attaccare. Si tratta di un comando usato in modalità "attiva". Il server FTP proverà quindi ad aprire con la vittima una connessione TCP sulla porta specificata dall'attaccante.<br />
Se la porta è chiusa, la vittima rifiuterà il three-way handshake.<br />
Se la porta è aperta, la vittima accetterà il three-way handshake con il server FTP e accetterà il trasferimento. Il server FTP avviserà, quindi, l'attaccante dell'esito di queste operazioni.<br />
Si tratta di una tecnica stealth perchè l'attaccante si nasconde dietro il server FTP.<br />
L'attaccante lascia però tracce sul server FTP.

Le contromisure per questo tipo di scansione sono:
1) impedire che l'indirizzo IP specificato dal comando PORT sia diverso da quello dell'FTP Client;
2) Evitare che la porta abbia un PORT ID minore di 1023 e che, quindi, si stia tentando un attacco verso servizi standard.

----------------------------------------------------------------

## IPSEC ##
**IPSEC** è un protocollo di livello network che mira a rendere sicuro l'utilizzo di IP.<br />
Essendo un protocollo del terzo livello, permette di proteggere i dati di tutti i livelli superiori.<br />
IPSEC vuole garantire:
- **data origin autentication** / **connectionless data integrity**, cioè impedisce di inviare un IP datagram con un IP Address spoofato senza che il destinatario se ne accorga. I dati vengono firmati dal sender e verificati dal receiver.;
- **replay protection**, cioè impedisce di mandare nuovamente un pacchetto IP senza che il ricevente se ne accorga;
- **confindentiality**, cioè impedisce di esaminare il contenuto di un IP Datagram.

Esso è costituito da un insieme di protocolli, che sono:
1) **AH( Authentication Header)**: per autenticare e rendere sicuri i dati;
2) **ESP (Encapsulating Security Payload)** per cifrare, autenticare e rendere sicuri i dati;
3) **IKE (Internet Key Exchange)**: utilizzato per negoziare i parametri di sicurezza e stabilire chiavi di autenticazione.

AH ed ESP sono interscambiabili, ma ultimamente ESP sta diventando lo standard grazie alle funzionalità a breve illustrate. IPSEC è in grado di garantire confidenzialità. integrità ed autenticazione sul traffico. Infatti, i dati vengono firmati dal sender e tale firma viene verificata dal ricevente.<br />
IPSEC funziona secondo due modalità:
1) **tunnel mode**: il contenuto di un pacchetto IP viene cifrato ed incapsulato in un altro pacchetto IP. Questa tecnica risulta utile quando il pacchetto deve transitare attraverso nodi che, per qualche ragione, non conoscono IPSEC;
2) **transport mode**: viene aggiunto un header al pacchetto IP orginale (non viene creato un nuovo pacchetto, ma viene aggiunta un'estensione) ed il tutto viene cifrato.

**Authentication Header** fa in modo di garantire l' autenticazione dei pacchetti e la loro integrità.<br />
Non è in grado, però, di fornire confidenzialità.<br />
Sia in modalità tunnel che transport viene aggiunto al pacchetto l'header AH, il quale contiene, tra le varie informazioni, anche l'hash del pacchetto (per garantirne l'integrità). La differenza tra le due modalità è che, in tunnel mode, viene aggiunto anche l'header del nuovo pacchetto.

**Encapsulating Security Payload** invece, oltre alle funzionalità di AH, garantisce anche la confidenzialità dei dati, utilizzando la cifratura simmetrica.<br />
Sia in trasport mode che in tunnel mode, viene aggiunto al pacchetto l'header ESP ma, nella modalità tunnel, il pacchetto viene anche incapsulato in un nuovo pacchetto IP (e, quindi, viene aggiunto un nuovo header IP). In modalità tunnel, viene cifrato anche l'header IP originale.

Le due parti in procinto di comunicare devono scambiarsi le credenziali prima di iniziare. Per farlo, fanno uso delle **SA (Security Associations)**, le quali sono una collezione di parametri richiesti per stabilire una sessione sicura. Queste collezioni sono unidirezionali (è necessario generarne, quindi, due) e sono costituite da tre parametri:
1) **SPI (Security Parameter Index)**: definisce i parametri della connessione;
2) **IP Destination Address**;
3) **Security Protocol Identifier**: AH o ESP.

Le security associations sono salvate all'interno del **SAD** (**Security Association Database**) e sono indirizzabili mediante l'SPI.

Per generare le SA, si ricorre al protocollo **IKE** (basato su ISAKMP). Questa procedura si sviluppa in due fasi:
1) nella prima fase, i due host si scambiano le informazioni necessarie a derivare le chiavi richieste per stabilire una ISAKMP SA, la quale verrà utilizzata nella fase 2;
2) nella seconda fase, vengono inviate le chiavi vere e proprie per far sì che vengano utilizzate nel trasferimento dati.

La prima fase può essere realizzata con due approcci:
1) **main mode**: è un approccio più lento ma più flessibile. Il sender invia una o più proposte all'altro peer. Il responder seleziona una proposta;
2) **aggressive mode**: è più veloce ed utilizza meno pacchetti.

La main mode protegge, però, l'identità dei peers mentre l'aggressive mode no.

----------------------------------------------------------------

## SSL/TLS ##
Il protocollo **Transport Layer Security**, o **TLS** (**Secure Socket Layer**, o **SSL**, è la versione più antica) è un protocollo che consente di rendere sicuro il traffico a livello di trasporto.<br />
Il protocollo prevede due fasi, una fase di sessione ed una fase di connessione. La prima consiste nell'instaurare un canale sicuro tra i due host mentre la seconda è la fase di comunicazione vera e propria.<br />
La sessione può essere riutilizzata per altre connesssioni. Questo è vantaggioso in quanto permette di evitare di dover rimettere d'accordo le parti sugli algoritmi da utilizzare.<br />
Il protocollo è costituito da 4 sottoprotocolli:
1) **protocollo di handshake**: consente l'eventuale autenticazione tra le parti;
2) **protocollo di alert**: notifica situazioni anomale ;
3) **protocollo change cypher**: impone l'esecuzione di un nuovo handshake per rinegoziare i parametri di sicurezza;
4) **protocollo record cypher**: si occupa della comprssione, del MAC e della cifratura.

----------------------------------------------------------------

## Anonymity ##
Internet è concepito come una rete pubblica. Infatti, i punti di accesso WI-Fi e i router di rete vedono tutto il traffico che li attraversa.<br />
Inoltre, le informazioni di instradamento sono pubbliche, in quanto le intestazioni dei pacchetti IP identificano l'origine e la destinazione.<br />
L'utilizzo della crittografia permette di nascondere il payload dei messaggi ma non le informazioni di routing.

Con **anonimato** si definisce la situazione nella quale un utente non è identificabile all'interno di un insieme di soggetti.

Con **unlinkability** si definisce la situazione nella quale è impossibile ricollegare identità ed azione, come, ad esempio, un mittente ed un'e-mail.

Con **unobservability** si intende la situazione nella quale un attaccante non è in grado di capire se un soggetto sta utilizzando un determinato sistema o un determinato protocollo.

----------------------------------------------------------------

### Attacchi all'anonimato ###
L'anonimato può essere attaccato tramite:
- **analisi passiva del traffico**, ovvero dedurre quali soggetti stanno comunicando dal traffico di rete;
- **analisi attiva del traffico**, ovvero iniettare pacchetti o inserire una firma temporale sul flusso dei pacchetti;
- **compromissione dei nodi di rete**. L'utente malintenzionato potrebbe compromettere alcuni router e, ovviamente, non sarebbe immediatamente chiaro quali nodi siano compromessi. Inoltre, l'attaccante potrebbe registrare passivamente il traffico.

----------------------------------------------------------------

## VPN ##
Una **Virtual Private Network** (**VPN**) è una rete virtuale privata nella quale è possibile costruire una LAN privata, facendo sì che i dispositivi ad essa connessi siano sparsi per il globo.<br />
Questa tecnologia porta diversi vantaggi, tra cui:
1) non vi è necessità di usare cavi/linee dedicate per connettere una sottorete;
2) flessibilità nell'allargamento della rete;
3) la navigazione è anonima e sicura.

Purtroppo l'utilizzo di una VPN comporta degli svantaggi, dei quali i principali sono dati dal fatto che:
1) è necessario conoscere a fondo i problemi di sicurezza e, quindi, conoscere le relative precauzioni da prendere;
2) le VPN devono supportare i protocolli diversi dall'IP e dalla tecnologia di rete interna esistente;
3) le prestazioni di una VPN dipendono in gran parte da fattori esterni.

Quando si parla di VPN, vi sono tre diverse categorie:
1) **trusted VPN**: sono VPN in cui nessun terzo può entrare nella rete privata e viene garantita l'integrità del circuito della rete privata dla provider della VPN. Il provider fornisce un insieme di nodi "fidati";
2) **secure VPN**: sono VPN nel quale il traffico è cifrato ed agisce come un tunnel, dove non è possibile spiare cosa contengono i pacchetti della rete virtuale;
3) **hybrid VPN**: rappresenta l'unione delle due reti viste sopra.

Nelle VPN possono presentarsi 3 diverse topologie di rete:
1) **Intranet**: definisce una rete in cui ha accesso solo l'azienda (e le relative filiali);
2) **Extranet**: definisce una rete in cui hanno accesso l'azienda ed i suoi partner (ma solo a determinate risorse);
3) **Remote Access**: permette l'accesso da remoto alla rete aziendale a prescinfere dal luogo fisico in cui un utente si trova.

----------------------------------------------------------------

## Challenge-Response ##
I protocolli **Challenge-Response** sono protocolli in cui non è previsto l'invio di chiavi per autenticarsi in un sistema. Sono protocolli studiati per l'autenticazione e, nello specifico, si basano su segreti che solo le due parti in causa conoscono.<br />
Quando un client desidera autenticarsi con un server, quest'ultimo gli propone una challenge la quale, se il client risponde correttamente, gli permetterà di autenticarsi.

Il principale vantaggio dato da questo protocollo è proprio la semplicità di utilizzo in quanto non è necessarrio scambiarsi credenziali che rappresentano informazioni molto sensibili che, comunque, devono essere mantenute segrete da utenti malintenzionati.

Lo svantaggio, invece, è dato dal fatto che si tratta di un protocollo vulnerabile al MITM. Nello specifico, definito $T$ l'attaccante, $A$ il client e $B$ il server, se $T$ volesse autenticarsi impersonificando $B$, potrà farlo fino a quando $A$ rimarrà online, secondo i seguenti passaggi:
1) quando il client $A$ prova ad autenticarsi con il server $B$, l'attaccante $T$ posto nel mezzo riceve il tentativo di connessione del client. L'attaccante lo inoltra quindi al server spoofando l'IP del client;
2) $B$ risponde proponendo la challenge che, di nuovo (a causa del MITM), passa per l'attaccante. L'attaccante, fingendosi il server, comunica la challenge al client;
3) il client risolve la challenge e la invia (sempre a causa del MITM) all'attaccante. L'attaccante la invia al server ed, in questo modo, è in grado di autenticarsi.

Se l'utente ha necessità di collegarsi con più server che sfruttano il meccanismo di challenge-response, diventa però oneroso ricordare tutte le password/chiavi. Ci si affida, quindi, ad un **Trusted Third Party**. Viene utilizzato un servizio di autenticazione fidato sulla rete, il quale funge da controllore che conosce tutte le password ma è un **single point of failure**.

----------------------------------------------------------------

## Firewall ##
Il **Firewall** rappresenta la misura di sicurezza minima in un sistema connesso ad internet. Esso si interpone tra la rete interna ed internet, filtrando le richieste in ingresso ed in uscita per cercare di proteggere la rete da utenti malintenzionati.<br />
Il firewall deve essere l'unico punto di contatto tra il mondo esterno e la rete da proteggere. Infatti, il suo scopo principale è quello di controllare l'accesso da e per una rete protetta. Questo controllo viene effettuato obbligando le connessioni a passare attraverso il firewall stesso, dove vengono esaminate e valutate.<br />
Solo il traffico autorizzato può attraversare il firewall ed il firewall stesso deve essere un sistema altamente sicuro.<br />
Spesso, alcuni pc forniscono servizi pubblici i quali devono essere raggiungibili dall'esterno, una rete pubblica, visibile da tutto il mondo.
Questa rete pubblica in gergo tecnico viene anche chiamata **De-Militarized Zone** o **DMZ**, un tratto di rete in cui il firewall permette l'accesso a tutti.<br />
Esistono diversi tipi di firewall. Innanzitutto, è necessario precisare che esistono firewall hardware ma anche software. Su ogni host è presente un firewall software. A seconda del livello dello **stack ISO/OSI** a cui sono implementati, è possibile distinguere:
1) **Static Packet Filter**: livello di rete ISO/OSI 3 o 4;
2) **Stateful Filtering**: livello di rete ISO/OSI 3 o 4;
3) **Application Gateway**: livello di rete ISO/OSI 7;
4) **Circuit-Level Gateway**: livello di rete ISO/OSI 5.

Uno **Static Packet Filter** (o **stateless**) analizza ogni pacchetto che lo attraversa, senza tenere conto dei pacchetti che lo hanno preceduto. In tale analisi, vengono considerate solo alcune informazioni contenute nell'header del pacchetto, in particolare quelle appartenenti ai primi tre livell idel modello OSI, più alcune informazioni del quarto livello. Le informazioni in questione sono:
1) l'indirizzo IP della sorgente;
2) l'IP destinazione;
3) la porta sorgente;
4) la porta destinazione;
5) il protocollo di trasporto;

Su questi parametri, vengono costruite le regole che formalizzano la policy del firewall e che stabiliscono quali pacchetti lasciar passare e quali bloccare.<br />
I firewall appartenenti a questa tipologia sono semplici e leggeri ma non garantiscono un'elevata sicurezza.

Uno **Stateful Filtering** utilizza la stateful inspection, ossia quel processo per cui ogni singola connessione autorizzata viene registrata dal firewall in un'apposita tabella (la cosiddetta **connection** o **stable state**). In pratica, ogni volta che un pacchetto arriva al firewall, esso viene verificato per comprendere se esso fa parte di una connessione precedentemente stabilita: in caso affermativo, esso viene lasciato passare senza ulteriori controlli, altrimenti subisce la sorte di un normale pacchetto in ingresso.

Un **Application Gateway** è un firewall che offre un servizio stateful e usa a supporto dei proxy. Come ricorda il nome, questo gateway è in grado di analizzare il contenuto dei pacchetti al livello applicativo. Ciò implica che se il firewall non conosce il protocollo utilizzato al livello 7, inizia allora a comportarsi come un normale firewall (tuttavia esistano numerose estensioni per allargare il pool di protocolli che il firewall conosce).<br />
Il problema legato a questo firewall è che, spesso, i contenuti sono cifrati. Per ovviare a questo problema, si utilizzano dei proxy. Il proxy viene utilizzato per decifrare i pacchetti ed analizzarne il contenuto per individuare complesse tipologie di attacco (è utilizzato per cercare dei pattern riconducibili ad attacchi conosciuti). Nello specifico, il firewall gira il pacchetto al proxy, il quale procede con l'analisi. Se il pacchetto ispezionato non presenta nessun contenuto sospetto, allora il proxy lo ammette nella rete.<br />
Ovviamente l'utilizzo del proxy rallenta notevolmente la gestione dei pacchetti.

Un **Circuit Level**, invece, sfrutta sempre i proxy server ma non è application-aware. Si limita, quindi, ad avere funzioni stateful.

----------------------------------------------------------------

## IDS e IPS ##
Un **Intrusion Detection System** (o **IDS**) è un componente del sistema in grado di rilevare e far scattare l'allarme quando avviene un'intrusione o un abuso delle politiche di rete da parte di utenti esterni.<br />
Un IDS non attua alcuna misura per bloccare o rispondere ad eventuali minacce, bensì si cura solamente di avvertire il sistema della presenza di un attacco in corso e di tenerne traccia mediante un log. Sarà compito dell'amministratore di sistema analizzare i log e mettere in atto misure di sicurezza e recovery.<br />
Gli IDS possono essere:
1) **passivi**: si limitano ad analizzare pattern di attacchi e a verificarne la presenza;
2) **attivi**: sono in continua evoluzione in quanto sfruttano tecniche di Deep Learning per apprendere dalle situazioni e migliorare il servizio offerto.

Gli IDS possono essere posizionati sugli host (**HIDS**) oppure in punti strategici della rete (**NIDS**). Un IDS è costituito da vari sensori che comunicano in continuazione con un **director**. Il direcotr si occupa di analizzare i dati dei sensori ed eventualmente lanciare un allarme.<br />
Gli **Intrusion Prevention Systems** (o **IPS**) sono degli IDS che non si limitano a sollevare l'allarme. Sono, infatti, in grado di prendere alcune contromisure (sempre ad attacco in corso, a differenza di ciò che dice il nome non sono in grado di prevenire attacchi), tra cui modificare le regole del firewall per cercare, quantomeno, di bloccare l'attacco. Si tratta di un meccanismo che permette di limitare i danni.

----------------------------------------------------------------

## Reti Wireless ##
Le **Reti Wireless** funzionano in due modalità di base:
- **Infrastructure Mode**, dove ogni client wireless si connette direttamente ad un dispositivo centrale chiamato **Access Point**, senza nessuna connessione diretta tra client wireless. Questo AP funge da hub wireless che esegue le connessioni e le gestisce tra i client;
- **Ad-hoc mode**, dove non sono presenti Access Point e gli host wireless comunicano tra loro stessi.

La fonte di rischio più significativa è il mezzo di comunicazione sottostante.
I fattori chiave che contribuiscono ai rischi sono:
- il **canale**, in quanto la comunicazione broadcast è più suscettibile alle intercettazoni ed alle interferenze;
- la **mobilità**: comporta rischi aggiuntivi;
- le **risorse**: il sistema operativo utilizzato è avanzato ma le risorse sono limitate;
- l'**accessibilità**: alcuni dispositivi possono essere lasciati incustoditi.

----------------------------------------------------------------

### Wired Equivalent Protocol (WEP)###
Il protocollo **WEP** era la protezione primaria per il protocollo 802.11 ed era progettato per rendere il wireless sicuro come una rete cablata. E' stato abbandonato a causa della crittografia debole (chiavi non più lunghe di 40 bit), chiavi di crittografia statiche e mancanza di metodo di distribuzione delle chiavi.

----------------------------------------------------------------

### Wi-Fi Protected Access (WPA) ###
Protocollo che migliora WEP in diversi modi:
- chiave segreta più grande (128 bit) e dati di inizializzazione (48 bit);
- supporta vari tipi di autenticazione, oltre ad un segreto condiviso, come username/password;
- cambia dinamicamente le chiavi mentre la sessione continua;
- metodo crittografico per verificare l'integrità;
- contatore di frame per prevenire attacchi di reply.

----------------------------------------------------------------

