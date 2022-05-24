## Politiche di sicurezza e modelli ##
Una **Politica di sicurezza** è un insieme di regole e linee guida le quali descrivono gli obiettivi di sicurezza di un sistema. Include:
1) soggetti che interagiscono con il sistema;
2) oggetti e risorse di cui si vuole proteggere l'accesso;
3) le azioni che i soggetti possono o non possono compiere sugli oggetti e sulle risorse;
4) i permessi;
5) le protezioni, cioè ulteriori regole che aiutano a raggiungere il goal (la sicurezza).

Un **Modello** definisce formalmente l'implementazione specifica della politica di sicurezza presa in considerazione.

Un **Meccanismo** implementa la politica a basso livello. Le politiche, infatti, utilizzano meccanismi (come la [[Crittografia]]) per raggiungere il goal.<br />
Questi meccanismi devono fare in modo che il sistema resti in uno stato sicuro e non passi in uno stato non sicuro. <br />

Lo svantaggio causato dall'adozione di un meccanismo di sicurezza risiede nel fatto che questa adozione non dovrebbe rendere l'accesso alle risorse più difficile di quanto lo sia senza il meccanismo di sicurezza stesso (**Psychological Acceptability**).

Le politiche di sicurezza sono alla base del concetto di **Controllo degli accessi**, il quale può essere diviso in tre macrocategorie:
1) **DAC** (**Discretionary Access Control**): ciascun utente può determinare i permessi per ogni altro utente e definire le **Access Control Lists** (**ACL**);
2) **MAC** (**Mandatory Access Control**): un amministratore centrale determina i permessi di accesso dei vari oggetti;
3) **ORCON** (**Originator Controlled Access Control**): il proprietario di un oggetto determina i permessi di accesso dell'oggetto in questione;

Esistono diversi tipi di politiche di sicurezza:

------------------------------------------------------------

### Politiche di sicurezza basate sulla confidenzialità ###
Con **confidenzialità** si intende il prevenire la divulgazione non autorizzata ad informazioni.<br />
Spesso in questa tipologia di politica si utilizzano metodi mandatori di tipo multilivello.

------------------------------------------------------------

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

Il modello Bell-La Padula può essere esteso includendo delle categorie nei livelli di sicurezza che inducono un reticolo. <br />
Un livello di sicurezza viene ora rappresentato come $<\text{Livello di sicurezza}, \{\text{Insieme di categorie}\}>$.

Un livello di sicurezza $(L, C)$ domina un livello di sicurezza $(L', C')$ se e solo se:
1) $\lambda(L) \geq \lambda(L')$;
2) $C' \subseteq C$.

------------------------------------------------------------

### Politiche di sicurezza basate sull'integrità ###
Con **integrità** si intende il prevenire modifiche non autorizzate alle informazioni.<br />
Alla base di questa tipologia di politiche ci sono 3 principi:
1) **Separazione dei doveri**: se nell'esecuzione di un processo ci sono due fasi, queste devono essere svolte da due soggetti diversi;
2) **Separazione delle funzioni**: lo sviluppo ed il testing devono essere due operazioni separate, in modo che la seconda non sia influenzata dalla prima;
3) **Auditing**: il sistema deve mantenere un **audit log** che memorizzi le responsabilità (ogni programma eseguito e il soggetto che ha dato l'autorizzazione) ed il sistema deve eventualmente permettere di fare recovery, di tornare ad il precedente stato consistente (**rollback**).

------------------------------------------------------------

#### Biba ####
**Biba** è uno dei modelli principali che segue questa tipologia di politiche di sicurezza. Si tratta di una tipologia duale rispetto alla politica basata sulla confidenzialità. Infatti, la confidenzialità è un vincolo sugli accessi in lettura mentre l'integrità è un vincolo sugli accessi in scrittura.<br />
Di conseguenza, le regole alla base di Biba sono il duale di quelle alla base del modello di Bell-La Padula:
1) **Simple Integrity Property** (**No Read Down**): un soggetto $S$ ha accesso in lettura ad un oggetto $O$ se e solo se $\lambda(O) \geq \lambda(S)$ e se $S$ ha il permesso di leggere $O$;
2) **\* Integrity Property** (**No Write Up**): Un soggetto $S$ ha accesso in scrittura ad un oggetto $O$ se e solo se $\lambda(S) \geq \lambda(O)$ e se $S$ ha il permesso di scrivere $O$.

------------------------------------------------------------

#### Clark-Wilson ####
**Clark-Wilson** è uno dei modelli principali che segue questa tipologia di politiche di sicurezza in cui il sistema evolve tramite transazioni ben formate che cambiano il sistema da uno stato sicuro ad un altro stato sicuro.

Si tratta di un modello che è basato su due principi:
1) Prima e dopo ogni azione, le condizioni di consistenza devono essere mantenute. Una transazione **Well-formed** è una serie di operazioni grazie alle quali il sistema passa da uno stato consistente ad un altro consistente.
2) E' necessario avere la separazione dei doveri. Viene infatti richiesto che il certificatore e gli implementatori siano persone diverse. Nel caso della transazione, al fine di corrompere i dati, devono essere due persone diverse a commettere errori simili o a collaborare.

Nel modello vengono definite entità e regole:
1) **Constrained Data Items** (**CDI**): sono tutti gli oggetti interni al sistema sui quali è posto il vincolo di integrità;
2) **Uncostrained Data Items** (**UDI**): sono tutti gli oggetti interni al sistema non sottoposti al vincolo di integrità;
3) **Integrity Verification Procedures** (**IVP**): sono procedure che permettono la verifica dell'integrità. Il loro obiettivo è di confermare che tutti i CDI siano conformi alle specifiche di integrità ogni volta che una IPV viene eseguita.
4) **Transformation Procedures** (**TP**): sono tutte quelle procedure che permettono di modificare i CDI oppure di prendere in input i dati di un utente e creare da quelli un nuovo CDI. Queste trasformazioni corrispondono proprio a transazioni well-formed.

------------------------------------------------------------

### Politiche di sicurezza multilaterali ###
Questo tipo di politiche mira a bloccare il flusso di informazioni tra entità che operano allo stesso livello.

------------------------------------------------------------

#### Modello Chinese Wall ####
Il modello **Chinese Wall** è un modello che segue le politiche di sicurezza multilaterali. Esso si basa sulla separazione dinamica dei doveri per proteggere la segretezza dei dati.<br />
L'obiettivo di Chinese Wall è quello di prevenire flussi di informazioni che possano causare conflitti di interesse. Il modello, quindi, organizza le entità in classi di **Conflitti di interessi**.<br />

Le entità all'interno di un **Conflict of Interests** devono essere separate.<br />
La politica è definita nel seguente modo:
1) **Oggetti**: Identificati mediante $O$, questi rappresentano dati, informazioni di una qualche società o organizzazione;
2) **Company Dataset**: Identificati con $CD$. Una $CD$ contiene oggetti inerenti ad una singola entità, come ad esempio una banca;
3) **Conflict of Interests Class**: Identificate con $COI$. Una $COI$ contiene i $CD$ delle varie entità che fanno parte di quella particolare classe di $COI$.

Le condizioni di lettura e scrittura sono, invece, le seguenti:
1) La lettura è consentita se l'oggetto appartiene ad un $CD$ a cui $S$ ha accesso, oppure se appartiene ad un diverso $COI$;
2) Un soggetto $S$ può scrivere un oggetto $O$ se e solo se nessun oggetto che può essere letto da $S$ si trova in un differente dataset rispetto al dataset di $O$ oppure se contiene informazioni **non sanificate**. Con **Sanificazione** si intende il camuffare le informazioni di una azienda, in particolare per prevenire la scoperta dell'identità di tale azienda.

------------------------------------------------------------

## Attacchi ##
### ARP Spoofing / Cache Poisoning ###
[[Address Resolution Protocol]], come tutti i protocolli di rete, non ha implementato alcuna misura di sicurezza. Non ci sono controlli che vietino ad un host malizioso di rispondere ad una **ARP Request** nonostante non sia in possesso dell'**Indirizzo IP** richiesto (**ARP Spoofing**).<br />
L'host mittente della ARP Request, ricevendo la comunicazione fake, aggiorna la sua **ARP Cache** e memorizza così l'associazione $<\text{Ip destinatario - MAC Address attaccante}>$, cioè l'associazione utente-indirizzo sbagliata (**Cache Poisoning**). Ciò provoca l'immediata deviazione dei pacchetti diretti all'IP originale richiesto al [[MAC Address]] dell'host malizioso.<br />
Tutto questo avviene perchè:
1) Le richieste non sono tracciate;
2) Gli annunci ARP che viaggiano sulla rete non sono autenticati;
3) Le macchine si fidano l'un l'altra perchè il protocollo non ha alcuna garanzia di sicurezza. Una macchina attaccante può quindi ingannare tutte le altre.

Questa procedura può avere luogo anche nel caso in cui nessun utente abbia inviato una ARP Request. L'host malevolo può inviare una ARP Reply per fare Cache Poisoning in qualsiasi momento.

Il meccanismo di **ARP Poisoning** viene messo in atto per effettuare un [[Man in the Middle]] a livello datalink.

Eventuali contromisure possono essere l'utilizzo di [[IPSEC]] e l'utilizzo di tabelle statiche gestite da un admin di sistema.

------------------------------------------------------------

### MAC Address Flooding ###
Ogni [[Switch]] possiede una tabella dei MAC Address il cui scopo è quello di capire a quale porta sia collegato ciascun host.<br />
Per ogni frame ricevuto:
1) se lo switch ha all'interno della sua tabella il MAC Address al quale destinarlo, non scrive nulla nella tabella;
2) Se il MAC Address del destinatario non è presente all'interno della sua tabella, lo switch copia il valore presente nell'header del pacchetto e crea una entry nella tabella;
Un attaccante, mediante l'invio di un elevato numero di frames con MAC Address fake sempre diversi, può causare un overflow della tabella dello switch, poichè vengono registrate tante false associazioni $<\text{MAC Address - porta fisica}>$.<br /> Il risultato è che lo switch non riesce più a gestire il traffico nella maniera opportuna; esso comincia a funzionare come un [[Hub]], cioè non fa più l'instradamento dei pacchetti ma spedisce ciascuno di essi in broadcast attraverso ognuna delle sue porte. Un pacchetto che dovrebbe essere indirizzato ad un certo host viene invece destinato anche ad altri host, che non dovrebbero riceverlo. Così facendo, un attaccante può fare sniffing di tutti i pacchetti che transitano nella rete.<br />
Questa tecnica viene utilizzata per sniffare il traffico in reti in cui la presenza dello switch non consente a chiunque di accedere ai pacchetti a sè non destinati.

Una possibile contromisura consiste nel non generare dinamicamente la tabella contenente le coppie $<\text{MAC Address - porta fisica}>$ ma avere l'accortezza e la pazienza di gestirla in maniera statica. E' inoltre possibile costruire dei filtri per scartare MAC falsi.

------------------------------------------------------------

### Problemi intrinsechi in TCP/IP ###
Non esiste alcun meccanismo di autenticazione fra le parti, quindi non si può avere la certezza di parlare con l'host che effettivamente si desidera.

i controlli di integrità sono banali. L'unico controllo di integrità che [[TCP-IP]] offre è un checksum dei pacchetti. Ad un attaccante basta sniffare il pacchetto dalla rete e manipolarlo in modo tale che il checksum risulti comunque veritiero.

------------------------------------------------------------

### IP Spoofing ###
Un attaccante può inviare ad un server un pacchetto con **IP spoofato**, cioè in cui il campo mittente dell'header IP viene cambiato. Il destinatario non ha modo di capire se il pacchetto arriva effettivamente dall'host riportato nel campo mittente dell'header IP oppure no.<br />
L'attaccante si trova, invece, di fronte a due problemi:
1) **Risposta del server**: il server invierà una risposta inserendo nel campo destinazione l'IP spoofato. L'attaccante, quindi, non riceverà mai una risposta;
2) **Forgiare un pacchetto valido**: spoofare un indirizzo IP permette di effettuare alcuni attacchi, ma non consente sicuramente di inserirsi in una connessione TCP. Per fare ciò è anche necessario che il pacchetto spoofato presenti **SEQ-NUM** e **ACK-NUM** corretti.

Esistono due forme di IP spoofing:
1) **Non-blind Spoofing**: l'attaccante è all'interno della stessa sottorete della vittima. Si tratta della forma più semplice perchè l'attaccante può sniffare il traffico con la propria scheda di rete in modalità promiscua;
2) **Blind Spoofing**:  l'attaccante non è all'interno della sottorete della vittima.

Per sferrare un attacco di tipo Blind IP spoofing, l'attaccante deve fare quattro cose:
1) Prima di cominciare l'attacco, l'attaccante interroga il server per ottenere qualche indicazione in più sulla generazione dell'**Initial Sequence Number** (**ISN**). Questo viene fatto per far sì che la previsione dell'ISN abbia più probabilità di successo (**ISN Prediction**). L'attaccante manda alcuni pacchetti **SYN** non spoofati per analizzare le risposte del server e capire quindi il tipo di regola che quest'ultimo adotta per generare gli ISN;
2) L'attaccante apre una connessione con il server utilizzando l'IP spoofato di un host vittima. L'attaccante non riceverà la risposta;
3) L'host vittima, ricevendo una risposta dal server che non ha mai interrogato, invia subito un pacchetto di **FIN** o **RST** per terminare la connessione. In questa eventualità, l'attacco si può ritenere fallito. L'attaccante deve, pertanto, impegnare l'host vittima, tipicamente effettuando un **attacco DoS** per fare in modo che non possa chiudere la connessione con il server.
4) L'attaccante invia al server un pacchetto valido, utilizzando sempre l'IP spoofato della vittima. Tale pacchetto, per essere valido, dovrà contenere il giusto ACK-NUM ed il giusto SEQ-NUM.

Per sferrare un attacco di tipo Non-blind Spoofing, invece, è necessario utilizzare uno **sniffer**. Si tratta di un tool che mostra tutti i pacchetti della sottorete in cui è collegato (se non c'è uno switch; in tal caso occorre effettuare MAC flooding sullo switch prima di poter sniffare qualsiasi pacchetto nella rete). Lo sniffer può quindi intercettare anche una eventuale risposta che il server sta inviando al legittimo client (che l'attaccante ha DoSsato) e leggere i corretti ACK-NUM e SEQ-NUM.

------------------------------------------------------------

### TCP Session Hijacking ###
Il **TCP Hijacking** consiste nell'instaurare una nuova connessione tra due entità che comunicano tramite protocollo TCP.
Con IP Spoofing e corretti SEQ-NUM e ACK-NUM, un attaccante può effettuare l'hijacking di una sessione TCP.<br />
Può essere:
1) **Passivo**: l'attaccante si limita ad ascoltare la conversazione tra client e server;
2) **Attivo**: l'attaccante silenzia il client e impartisce comandi al server impersonando il client.

------------------------------------------------------------

### TCP SYN Flood ###
Ogni web server, quando inizia una connessione, memorizza il fatto di aver ricevuto un pacchetto di SYN da un client in una struttura dati detta **Trasmission Control Block** (**TCB**). Questa struttura diventa una entry nella backlog queue la quale contiene le connessioni iniziate ma non ancora completate. Il server, a questo punto, invia un pacchetto di SYN-ACK al client sorgente e rimane in attessa della sua risposta con ACK per terminare il **three-way handshake**.<br />
Un attaccante può generare un elevato numero di richieste di aperture di connessione (inviando SYN con IP spoofati), causando un rapido riempimento della struttura dati del server. Se l'attaccante riesce a causare il riempimento della backlog queue, allora può causare un DoS sul server.<br />
Questo attacco è letale perchè il server non sa distinguere tra i pacchetti reali e pacchetti spoofati.

Tra le contromisure contro questo tipo di attacco si menzionano:
1) Incrementare la dimensione della backlog queue;
2) ridurre il tempo di attesa dell'ACK da parte del client in modo da rimuovere più velocemente dalla backlog queue alcune entry;
3) Selezionare casualmente una connessione half-open dalla backlog queue e rimuoverla (solo quando la queue sta per saturarsi);
4) SYN Cookies;
5) Prolexic proxy.

La soluzione più intelligenete che è stata ideata è il postporre lo stato, cioè creare la entry nella backlog queue solo dopo aver fatto un controllo sulla validità della connessione. Ciò avviene mediante la generazione di un cookie da spedire al client, che permette al server di rimanere stateless finchè il primo non spedisce almeno due messaggi (il SYN e l'ACK).<br />
Quando il client invia l'ACK, fornisce anche il cookie che viene confrontato dal server con quello che era stato inviato. Se il controllo va a buon fine, allora significa che la richiesta di connessione era legittima e quindi viene creata la entry nella backlog queue. L'attaccante non conosce il cookie perchp il server lo invia solamente all'IP spoofato e, pertanto, non riuscità a calcolarei parametri corretti da inserire nell'ACK di risposta.

Un'altra contromisura per filtrare le connessioni leggittime da quelle fasulle è quella di utilizzare un proxy tra i client ed il web server. Esso ha il compito di inoltrare al server solo le connessioni legittime mentre tutte le altre vengono scartate. Il proxy dovrà essere robusto.

L'attacco SYN flood non da via di scampo se viene utilizzata una **botnet**. Di fatto, si tratta di migliaia o milioni di client legittimi (controllati da remoto da un attaccante a loro insaputa) che completano contemporaneamente il three-way handshake con il server. Essendo tutte connessioni che si completano con successo ma in contemporanea, il server fa fatica a gestirle e subisce il DoS.

------------------------------------------------------------

### Attacchi a DHCP ###
[[Dynamic Host Configuration Protocol]] è il protocollo che consente di assegnare a nuovi host un indirizzo IP scelto da un pool di indirizzi liberi e disponibili.<br />
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

La porta fisica dello switch viene chiusa ogniqualvolta arrivi un messaggio DHCP proveniente da host che non sono legittimati. Quindi, se un rogue server tenta di mandare un pacchetto DHCP, in risposta la porta viene chiusa.

Una sicurezza ancora maggiore si ottiene abilitando l'**option 82**, nota anche come **DHCP Relay Agent Information**, che prevede il coinvolgimento attivo dello switch nella comunicazione tra client e server.<br />
Questa procedura è utile se client e server non fanno parte della stessa sottorete. Quando il client invia una richiesta al server DHCP, lo switch aggiunge informazioni ulteriori all'header della richiesta. Grazie a queste informazioni, il server può risalire allo switch e quindi alla posizione del client.<br />
Il server DCHP legge i dettagli aggiuntivi e assegna gli indirizzi IP in base alle informazioni sull posizione. Il server invia il pacchetto di risposta al client tramite lo switch. Se, nel momento in cui il paccheto raggiunge lo switch, le informazioni contenute sono rimaste invariate, lo switch riconosce che la comunicazione avviene effettivamente attraverso di esso. A questo punto, il dispositivo cancella i dati dell'option 82 dall'header e inoltra la risposta. Inoltre, l'aver ricordato la posizione del client (a quale porta fisica dello switch è collegato) rende impossibile effettuare il DHCP starvation. <br />
Questo perchè lo switch si accorgerebbe che stanno arrivando molteplici richieste di assegnazioni di IP tutte dalla stessa porta (con MAC differenti).

------------------------------------------------------------

### Attacchi a BGP ###
[[Border Gateway Protocol]] è il protocollo che permette la comunicazione tra **Autonomous Systems**. Si parla di **iBGP** (**Internal**) quando ci si riferisce al BGP utilizzato all'interno di un Autonomous System. Si parla, invece, di **eBGP** (**external**) quando ci si riferisce al BGP utilizzato nella comunicazione tra AS diversi.

Questo protocollo può essere attaccato su molti fronti:
1) **Disponibilità**;
2) **Confidenzialità**;
3) **Integrità**.

I principali obiettivi di attacco per un host malevolo BGP sono:
1) **Blackholing**: consiste nel creare dei black holes nei quali i pacchetti spariscono. Nello specifico, vengono istruiti i vari AS che un certo $\text{AS}_{x}$ (vittima) è in grado di gestire un determinato prefisso meglio di chiunque altro (quando, in realtà, $\text{AS}_{x}$ non è in grado di farlo). In questo modo, i pacchetti sotto quel prefisso verranno girati ad $\text{AS}_{x}$ e lui non farà altro che dropparli in quanto non sono di sua effettiva competenza.
2) **Redirection**: il traffico viene rediretto e viene fatto passare per un router malevolo in grado di sniffare i vari pacchetti, oppure per far crollare una sottorete a causa del traffico ingente di pacchetti.
3) **Subversion**: redirezione dei pacchetti per farli passare attraverso un dispositivo controllato dall'attaccante in modo tale che l'attaccante sia in grado di leggere e/o modificare i dati per poi essere propagato al legittimo destinario.
4) **Instability**: attacco in grado di distruggere rotte ed interrompere la connettività, oppure in grado di aumentare drasticamente i tempi di convergenza (ovvero i tempi per stabilizzare le rotte). Avviene inviando in rapida successione annunci che cambiano di continuo la rete. I pacchetti vengono sballottati per la rete.

Gli attacchi possibili sono:
1) **Prefix Hijacking**: un attaccante B anuncia di ocnoscere tratte più veloci per raggiungere un particolare AS (chiamato V). Tutti gli AS che sono connessi direttamente a V non saranno affetti da tale annuncio. Il resto degli AS e di internet invece saranno affetti. Ciò significa che da quel momento tutti gli AS che dovranno comunicare con V passeranno da B il quale successivamente rimanderà il traffico a V. In questo modo, B è in grado di sniffare tutti i messaggi diretti a V (**subversion**);
2) **De-Aggregation**: un attaccante B annuncia di conoscere un sotto-insieme di indirizzi IP con un livello più specifico. Se il router V conosce gli indirizzi x/22 e B sostiene di conoscere gli indirizzi x/24, il traffico verrà dirottato su B. Infatti, secondo il protocollo BGP, si preferisce l'Access Point che abbia una maggiore specificità di indirizzi, cioè B, in quanto in possesso di una subnet mask più precisa. In questi modo, il traffico diretto a V verrà gitato a B, il quale sarà in grado di sniffarne il contenuto (**subversion**);
3) **AS Path Shortening**: viene annunciato un nuovo path che taglia fuori la vittima (**instability**);
4) **Annunci Contraddittori**: un attaccante B annuncia una rotta sbagliata per fare congestione su un particolare AS, in modo tale che questo venga sovraccaricato (**instability/redirection**);
5) **Link Flapping**: vengono mandati tanti update sugli AS path. In questo modo, coloro che ricevono questa serie di aggiornamenti si convincono che il percorso è flapping. Pertanto si attiva il **router dampening**, il quale consiste nel riattivare un particolare path con tempi sempre più lunghi per fare in modo che il router sovraccaricato si riesca a scaricare senza dover gestire altri pacchetti;

Le principali contromisure adottate da BGP sono:
1) **Time To Leave (TTL)**: poichè i BGP router sono ad una distanza di un singolo HOP l'uno dall'altro, si accettano solo pacchetti con uno specifico TTL. Il TTL viene decrementato ad ogni singolo HOP. Tutti i messaggi BGP vengono inviati con un TTL pare a 255. Con questo sistema di sicurezza, si accettano solo i messaggi con un TTL pari a 254;
2) **MD5**: crittografare i messaggi;
3) [[IPSEC]];
4) **Route Filtering**: vengono filtrati i messaggi di update in ingresso ed in uscita in modo tale che ci si assicuri che le rotte seguano specifiche regole;
5) **Resource Public Key Infrastructure (RPKI)**: questo sistema roevede l'esistenza di una repository contenente delle key. Gli AS ottengono un certificato **Route Origin Authorizations** (**Roa**), fornito da un'entitò particolare. Quando un BGP vuole annunciare il suo ingresso ed il set 


------------------------------------------------------------

### Attacco a DNS ###

Il protocollo [[Domain Name System]], o **DNS**, è un protocollo utile per risolvere **indirizzi logici** (www.indirizzologico.com) in **indirizzi fisici** (1.1.1.1). Si tratta di un servizio gerarchico:
1) **Root Name Servers**: per domini al top level;
2) **Top Level Domain Servers**: responsabili dei domini di primo livello, come **.it**, **.com**, **.org**;
3) **Authoritative Name Servers**: per i sottodomini, come **.unimi.it**.


Per la risoluzione dei nomi ci si affida ad un **resolver** (implementato nel sistema operativo). Ogni resolver conosce il nome del DNS server locale. Il resolver manda, quindi, una richiesta al DNS server locale; la risposta o è definitiva o viene inoltrata ad un altro server si tratta di una reference (riferimento al server successivo al quale la richiesta deve essere inoltrata). Ogni risoluzione DNS viene temporaneamente salvata in una memoria cache per fare in modo che un'eventuale risoluzione per lo stesso indirizzo sia molto più rapida.

Le principali vulnerabilità del protocollo DNS sono le seguenti:
1) **DNS Cache Poisoning**: ne esistono due versioni, una di origine anonima ed una denominata **Kaminsky Attack**. L'obiettivo di entrambe è quello di falsificare i valori contenuti all'interno della cache del resolver DNS della vittima. L'attaccante invia una richiesta al nameserver vittima per un particolare indirizzo. Di conseguenza, si attiva la serie di richieste per ottenere il corrispettivo indirizzo fisico. L'attacco consiste nel riuscire a rispondere al nameserver, prima che la reale risposta dell'authoritative server arrivi, con un indirizzo di un sito web gestito dall'attaccante (in modo tale da reindirizzare la vittima su siti malevoli). L'unica difficoltà di questo attacco consiste nel fatto che le richieste del nameserver sono definite da un **QID** (**Query ID**) che l'attaccante deve indovinare per forgiare una risposta che sembri autentica. Nel secondo caso, invece, l'attaccante cerca di sostituirsi totalmente all'authoritative server. L'attaccante vuole redirigere tutte le richieste fatte sull'authoritative server vittima su di sè. Anche in questa versione è sempre presente l'incognita del QID per la buona riuscita dell'attacco.<br />Una possibile difesa risiede nell'aumentare il range casuale del QID per renderlo più difficile da indovinare.<br />Attuando con successo il Kaminsky Attack, si prende controllo di tutto il dominio perchè si riesce a convincere il server vittima di star comunicando con il vero server autoritativo. Con l'attacco generico, invece, si prende il controllo non di tutto il dominio ma solo di un sito. Questo avviene perchè la risposta dell'attaccante arriva dopo quella del Top Level Domain Server ma prima di quella del server autoritativo;
2) **DNS Rebinding**: l'attaccante registra un dominio (come, ad esempio, www.sample.com) e ne delefa la risoluzione ad un server DNS sotto il suo controllo. Il server viene configurato per rispondere con un TTL molto basso, per prevenire che la risposta venga inserita nella cache dell'host vittima. Quando la vittima contatta accidentalmente l'indirizzo logico, il server risponde con l'indirizzo fisico che fa scaricare sul client della vittima il codice Javascript malevolo. Questo codice, una volta eseguito, effettua in automatico un'altra richiesta al dominio logico (il client non conosce la risoluzione per via del TTL basso della precedente richiesta). Il server DNS dell'attaccante, questa volta, risolve www.sample.com con un indirizzo che appartiene alla rete privata della vittima. Così facendo, la vittima, in maniera inconsapevole (per via della **same-origin policy**), consente all'applet installato con la prima richiesta dall'attaccante di accedere ai servizi nella rete locale;
3) **Triggering a Race**: ogni link, ogni immagine ed ogni advertisement può provocare un **DNS lookup**. Non solo il codice Javascript.

I meccanismi di difesa contro il Cache Poisoning sono i seguenti:
1) Aumentare la taglia delle Query ID;
2) Aggiungere una porta casuale da indovinare oltre al Query ID. Le combinazioni ora diventano $2^{16} \cdot 2^{11} = 2^{27} = 134$ milioni;
3) Richiedere ogni query due volte. In questo modo, l'attaccante deve indovinare il Query ID due volte (32 bits).