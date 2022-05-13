## Politiche di sicurezza e modelli ##
Una **Politica di sicurezza** è un insieme di regole e linee guida le quali descrivono gli obiettivi di sicurezza di un sistema. Include:
1) soggetti che interagiscono con il sistema;
2) oggetti e risorse di cui si vuole proteggere l'accesso;
3) le azioni che i soggetti possono compiere sugli oggetti e sulle risorse;
4) i permessi;
5) le protezioni, cioè ulteriori regole che aiutano a raggiungere il goal (la sicurezza).

Un **Modello** definisce formalmente l'implementazione specifica della politica di sicurezza presa in considerazione.

Un **Meccanismo** implementa la politica a basso livello. Le politiche, infatti, utilizzano meccanismi (come la [[Crittografia]]) per raggiungere il goal.<br />
Questi meccanismi devono fare in modo che il sistema resti in uno stato sicuro e non passi in uno stato non sicuro. <br />

Lo svantaggio causato dall'adozione di un meccanismo di sicurezza risiede nel fatto che questa adozione non dovrebbe rendere l'accesso alle risorse più difficile di qunato lo sia senza il meccanismo di sicurezza stesso (**Psychological Acceptability**).

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

#### Bell - La Padula ####
**Bell - La Padula** è un modello di politica confidenziale il quale classifica i diversi livelli di sicurezza con i seguenti tag:
1) **Top Secret**;
2) **Secret**;
3) **Confidential**;
4) **Unclassified**.

I soggetti e gli oggetti vengono ciascuno assegnati ad un livello di sicurezza. Le azioni permesse dipendono dal livello di sicurezza di entrambi soggetti ed oggetti in questione.<br />
In generale, in questo modello si devono rispettare due proprietà:
1) **Simple Security Property** (**No Read Up**): un soggetto $S$ ha accesso in lettura ad un oggetto $O$ se e solo se $\lambda (S) \geq \lambda (O)$ e se $S$ ha il permesso di leggere $O$;
2) **\* Security Property** (**No Write Down**): un soggetto $S$ ha accesso in scrittura ad un oggetto $O$ se e solo se $\lambda(O) \geq \lambda(S)$ e se $S$ ha il permesso di scrivere $O$.

Combinando questi due principi si previene un possibile flusso di informazioni dall'alto verso il basso dei livelli di sicurezza.

Il modello Bell - La Padula può essere esteso includendo delle categorie nei livelli di sicurezza che inducono un reticolo. <br />
Un livello di sicurezza viene ora rappresentato come $(\text{Livello di sicurezza}, \{\text{Insieme di categorie}\})$.

Un livello di sicurezza $(L, C)$ domina un livello di sicurezza $(L', C')$ se e solo se:
1) $\lambda(L) \geq \lambda(L')$;
2) $C' \subseteq C$.

------------------------------------------------------------

### Politiche di sicurezza basate sull'integrità ###
Con **integrità** si intende il prevenire modifiche non autorizzate alle informazioni.<br />
Alla base di questa tipologia di politiche ci sono 3 principi:
1) **Separazione dei doveri**: se nell'esecuzione di un processo ci sono due fasi, queste devono essere svolte da due soggetti diversi;
2) **Separazione delle funzioni**: lo sviluppo ed il testing devono essere due operazioni separate, in modo che la seconda non sia influenzata dalla prima;
3) **Auditing**: il sistema deve mantenere un **audit log** che memorizzi le responsabilità ( ogni programma eseguito e il soggetto che ha dato l'autorizzazione) ed il sistema deve eventualmente permettere di fare recovery, di tornare ad il precedente stato consistente (**rollback**).

------------------------------------------------------------

#### Biba ####
**Biba** è uno dei modelli principali che segue questa tipologia di politiche di sicurezza. Si tratta di una tipologia duale rispetto a quella basata sulla confidenzialità. Infatti, la confidenzialità è un vincolo sulla lettura mentre l'integrità è un vincolo sulla scrittura.<br />
Di conseguenza, le regole alla base di Biba sono il duale di quelle alla base del modello di Bell - La Padula:
1) **Simple Integrity Property** (**No Read Down**): un soggetto $S$ ha accesso in lettura ad un oggetto $O$ se e solo se $\lambda(O) \geq \lambda(S)$ e se $S$ ha il permesso di leggere $O$;
2) **\* Integrity Property** (**No Write Up**): Un soggetto $S$ ha accesso in scrittura ad un oggetto $O$ se e solo se $\lambda(S) \geq \lambda(O)$ e se $S$ ha il permesso di scrivere $O$.

------------------------------------------------------------

#### Clark-Wilson ####
**Clark-Wilson** è uno dei modelli principali che segue questa tipologia di politiche di sicurezza in cui il sistema evolve tramite transazioni ben formate che cambiano il sistema da uno stato sicuro ad un altro stato sicuro.<br />
In questo modello, l'integrità è definita da un insieme di vincoli:
1) i dati risultano validi se soddisfano i vincoli;
2) l'integrità del sistema si mantiene attraverso l'esecuzione di una transazione (valida);
3) una transazione ben formata sposta il sistema da uno stato consistente ad un altro sempre consistente.

Si tratta di un modello che è basato su due principi:
1) Prima e dopo ogni azione, le condizioni di consistenza devono essere mantenute. Una transazione **Well-formed** è una serie di operazioni grazie alle quali il sistema passa da uno stato consistente ad un altro consistente.
2) E' necessario avere la separazione dei doveri. Viene infatti richiesto che il certificatore e gli implementatori siano persone diverse. Nel caso della transazione, al fine di corrompere i dati, devono essere due persone diverse a commettere errori simili o a collaborare.

Nel modello, vengono definite entità e regole:
1) **Constrained Data Items** (**CDI**): sono tutti gli oggetti interni al sistema sui quali è posto il vincolo di integrità;
2) **Uncostrained Data Items** (**UDI**): sono tutti gli oggetti interni al sistema non sottoposti al vincolo di integrità;
3) **Integrity Verification Procedures** (**IVP**): sono procedure che permettono la verifica dell'integrità. Il loro obiettivo è di confermare che tutti i CDI siano conformi alle specifiche di integrità ogni volta che una IPV viene eseguita.
4) **Transformation Procedures**: sono tutte quelle procedure che permettono di modificare i CDI oppure di prendere in input i dati di un utente e creare da quelli un nuovo CDI. Queste trasformazioni corrispondono proprio a transazioni well-formed.

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
L'host mittente della ARP Request, ricevendo la comunicazione fake, aggiorna la sua **ARP Cache** e memorizza così l'associazione utente-indirizzo sbagliata (**Cache Poisoning**). Ciò provoca l'immediata deviazione dei paccheti diretti all'IP originale richiesto al [[MAC Address]] dell'host malizioso.<br />
Tutto questo avviene perchè:
1) Le richieste non sono tracciate;
2) Gli annunci ARP che viaggiano sulla rete non sono autenticati;
3) Le macchine si fidano l'un l'altra perchè il protocollo non ha alcuna garanzia di sicurezza. Una macchina attaccante può quindi ingannare tutte le altre.

Questa procedura può avere luogo anche nel caso in cui nessun utente abbia inviato una ARP Request. L'host malevolo può inviare una ARP Reply per fare Cache Poisoning in qualsiasi momento.

Il meccanismo di **ARP Poisoning** viene messo in atto per effettuare un [[Man in the Middle]] a livello datalink.

Eventuali contromisure possono essere l'utilizzo di [[IPSEC]] e l'utilizzo di tabelle statiche gestite da un admin di sistema.

------------------------------------------------------------

### MAC Address Flooding ###
Ogni [[Switch]] possiede una tabella dei MAC Address il cui scopo è quello di capire a quale posta sia collegato ciascun host.<br />
Per ogni frame ricevuto:
1) se lo switch ha all'interno della sua tabella il MAC Address al quale destinarlo, non scrive nulla nella tabella;
2) Se il MAC Address del destinatario non è presente all'interno della sua tabella, lo switch copia il valore presente nell'header del pacchetto e crea una entry nella tabella;
Un attaccante, mediante l'invio di un elevato numero di frames con MAC Address fake sempre diversi, può causare un overflow della tabella dello switch, poichè vengono registrate tante false associazioni $\text{(MAC Address - porta fisica)}$.<br /> Il risultato è che lo switch non riesce più a gestire il traffico nella maniera opportuna; esso comincia a funzionare come un hub, cioè non fa più l'instradamento dei pacchetti ma spedisce ciascuno di essi in broadcast attraverso ognuna delle sue porte. Un pacchetto che dovrebbe essere indirizzato ad un certo host viene invece destinato anche ad altri host, che non dovrebbero riceverlo. Così facendo, un attaccante può fare sniffing di tutti i pacchetti che transitano nella rete.<br />
Questa tecnica viene utilizzata per sniffare il traffico in reti in cui la presenza dello switch non consente a chiunque di accedere ai pacchetti a sè non destinati.

Una possibile contromisura consiste nel non generare dinamicamente la tabella contenente le coppie $(\text{MAC Address - porta fisica})$ ma avere l'accortezza e la pazienza di gestirla in maniera statica. E' inoltre possibile costruire dei filtri per scartare MAC falsi.

------------------------------------------------------------

### Problemi intrinsechi in TCP/IP ###
Non esiste alcun meccanismo di autenticazione fra le parti, quindi non si può avere la certezza di parlare con l'host che effettivamente si desidera.

i controlli di integrità sono banali. L'unico controllo di integrità che [TCP/IP] offre è un checksum dei pacchetti. Ad un attaccante basta sniffare il pacchetto dalla rete e manipolarlo in modo tale che il checksum risulti comunque veritiero.

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
1) Prima di cominciare l'attacco, l'attaccante interroga il server per ottenere qualche indicazione in più sulla generazione dell'**Initial Sequence Number** (**ISN**). Questo viene fatto per far sì che la previsione dell'ISN abbia più probabilità di successo (**ISN Prediction**). L'attaccante manda alcuni pacchetti **SYN** non spoofati per analizzare le risposte del serer e capire quindi il tipo di regola che quest'ultimo adotta per generare gli ISN;
2) L'attaccante apre una connessione con il server utilizzando l'IP spoofato di un host vittima. L'attaccante non riceverà la risposta;
3) L'host vittima, ricevendo una risposta dal server che non ha mai interrogato, invia subito un pacchetto di **FIN** o **RST** per terminare la connessione. In questa eventualità, l'attacco si può ritenere fallito. L'attaccante deve, pertanto, impegnare l'host vittima, tipicamente effettuando un **attacco DoS** per fare in modo che non possa chiudere la connessione con il server.
4) L'attaccante invia al server un pacchetto valido, utilizzando sempre l'IP spoofato della vittima. Tale pacchetto, per essere valido, dovrà contenere il giusto ACK-NUM ed il giusto SEQ-NUM.

Per sferrare un attacco di tipo Non-blind Spoofing, invece, è necessario utilizzare uno **sniffer**. Si tratta di un tool che mostra tutti i pacchetti della sottorete in cui è collegato (se non c'è uno switch; in tal caso occorre effettuare MAC flooding sullo switch prima di poter sniffare qualsiasi pacchetto nella rete). Lo sniffer può quindi intercettare anche una eventuale risposta che il server sta inviando al legittimo client (che l'attaccante ha DoSsato) e leggere i corretti ACK-NUM e SEQ-NUM.

------------------------------------------------------------

### TCP Session Hijacking ###
Con IP Spoofing e corretti SEQ-NUM e ACK-NUM, un attaccante può effettuare l'hijacking di una sessione TCP.<br />
Può essere:
1) **Passivo**: l'attaccante si limita ad ascoltare la conversazione tra client e server;
2) **Attivo**: l'attaccante silenzia il client e impartisce comandi al server impersonando il client.

------------------------------------------------------------

### TCP SYN Flood ###
Ogni web server, quando inizia una connessione, memorizza il fatto di aver ricevuto un pacchetto di SYN da un client in una struttura dati detta **Trasmission Control Block** (**TCB**). Questa struttura diventa una entry nella backlog queue la quale contiene le connessioni iniziate ma non ancora completate. Il server, a questo punto, invia un pacchetto di SYN-ACK al client sorgente e rimane in attessa della sua risposta con ACK per terminare il three-way handshake.<br />
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
1) **DHCP Starvation**: l'attaccante invia tanti DHCP discover con MAC differenti. Questo causa un DoS al server, il quale non riesce a soddisfare tutte le richieste perchè esaurisce il pool di indirizzi. Eventuali host legittimi che vogliono ottenere un indirizzo IP ora sono impossibilitati;
2) **Rogue DHCP**: l'attaccante può fingere di essere un server DHCP e rispondere alle DHCP discover dei client. Siccome nelle risposte del server, di solito, i nuovi host vengono istruit anche su quale sia il gateway della rete e altre informazioni utili, l'attaccante può comunicare un falso IP per il gateway (indicando sè stesso) e quindi risolvere gli URL come preferisce, compiere attacchi di phishing, sniffare il traffico facendo Man in the Middle o altro ancora.

Una contromisura attuabile per difendersi dagli attacchi al DHCP è il **DHCP snooping**. Si costruisce un **DHCP snooping binding database** (una tabella all'interno di uno switch) che contenga vari parametri:
1) **Client MAC Address;
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