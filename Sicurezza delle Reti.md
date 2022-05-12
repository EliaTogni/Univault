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
**Bell - La Padula** è un modello di politica confidenziale il quale classifica i diversi livellid i sicurezza con i seguenti tag:
1) **Top Secret**;
2) **Secret**;
3) **Confidential**;
4) **Unclassified**.

I soggetti e gli oggetti vengono ciascuno assegnati ad un livello di sicurezza. Le azioni permesse dipendono dal livello di sicurezza di entrambi soggetti ed oggetti in questione.<br />
In generale, in questo modello si devono rispettare due proprietà:
1) **Simple Security Property** (**No Read Up**): un soggetto $S$ ha accesso in lettura ad un oggetto $O$ se e solo se $\lambda (S) \geq \lambda (O)$;
2) **\* Security Property** (**No Write Down**): un soggetto $S$ ha accesso in scrittura ad un oggetto $O$ se e solo se $\lambda(O) \geq \lambda(S)$.

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
3) **Auditing**: il sistema deve mantenere un **audit log** che memorizzi le responsabilità ( ogni programma eseguito e il soggetto che ha dato l'autorizzazione) ed il sistema deve eventualmente permettere di fare recovery.

------------------------------------------------------------

#### Biba ####
**Biba** è uno dei modelli principali che segue questa tipologia di politiche di sicurezza. Si tratta di una tipologia duale rispetto a quella basata sulla confidenzialità. Infatti, la confidenzialità è un vincolo sulla lettura mentre l'integrità è un vincolo sulla scrittura.<br />
Di conseguenza, le regole alla base di Biba sono il duale di quelle alla base del modello di Bell - La Padula:
1) **Simple Integrity Property** (**No Read Down**): un soggetto $S$ ha accesso in lettura ad un oggetto $O$ se e solo se $\lambda(O) \geq \lambda(S)$;
2) **\* Integrity Property** (**No Write Up**): Un soggetto $S$ ha accesso in scrittura ad un oggetto $O$ se e solo se $\lambda(S) \geq \lambda(O)$.

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

## Attacchi ##
### ARP Spoofing / Cache Poisoning ###
[[Address Resolution Protocol]], come tutti i protocolli di rete, non ha implementato alcuna misura di sicurezza. Non ci sono controlli che vietino ad un host malizioso di rispondere ad una **ARP Request** nonostante non sia in possesso dell'**Indirizzo IP** richiesto (**ARP Spoofing**).<br />
L'host mittente della ARP Request, ricevendo la comunicazione fake, aggiorna la sua **ARP Cache** e memorizza così l'associazione utente-indirizzo sbagliata (**Cache Poisoning**). Ciò provoca l'immediata deviazione dei paccheti diretti all'IP originale richiesto al [[MAC Address]] dell'host malizioso.<br />
Tutto questo avviene perchè:
1) Le richieste non sono tracciate;
2) Gli annunci ARP che viaggiano sulla rete non sono autenticati;
3) Le macchine si fidano l'un l'altra perchè il protocollo non ha alcuna garanzia di sicurezza. Una macchina attaccante può quindi ingannare tutte le altre.

Il meccanismo di **ARP Poisoning** viene messo in atto per effettuare un [[Man in the Middle]] a livello datalink.

Eventuali contromisure possono essere l'utilizzo di [[IPSEC]] e l'utilizzo di tabelle statiche gestite da un admin di sistema.

### MAC Address Flooding ###

Ogni [[Switch]] possiede una tabella dei MAC Address il cui scopo è quello di capire a quale posta sia collegato ciascun host.<br />
Per ogni frame ricevuto:
1) se lo switch ha all'interno della sua tabella il MAC Address al quale destinarlo, non scrive nulla nella tabella;
2) Se il MAC Address del destinatario non è presente all'interno della sua tabella, lo switch copia il valore presente nell'header del pacchetto e crea una entry nella tabella;




