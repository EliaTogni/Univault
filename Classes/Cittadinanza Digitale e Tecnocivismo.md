# Domande
## L0
1) **Cos'è un "pacchetto"? Com'è strutturato?**
	Un pacchetto di rete non è altro che una sequenza di bit di lunghezza finita che viene trasmessa sotto forma di segnale elettrico (rame) o luminoso (fibra ottica) da un nodo all’altro di una rete. E' strutturato in segmenti, detti campi, ed ogni campo della sequenza ha una ben precisa semantica dipendente dal tipo di protocollo di rete utilizzato. I pacchetti vengono ordinati in sequenze che costruiscono dei flussi di dati che poi l’utente fruisce.
2) **Quali sono i concetti fondamentali (ai fini della CDT) dell'architettura di Internet?**
	i
3) **Chi è un "provider"? Che tipi di provider esistono?**
	 I provider di connettività forniscono il servizio ultimo miglio. Si definisce ultimo miglio quel tratto della rete che va dalla casa/uﬀicio dell’utente finale fino al primo concentratore
4) **Perché è importante (nel contesto della CDT) analizzare il (mal)funzionamento della rete?**
	che
5) **Cos'è il "routing" e perché ci interessa in CDT? (sia dal punto di vista storico che attuale)**
	i
6) **Cos'è il DNS e perché ci interessa in CDT? Esistono meccanismi simili (per funzioni) ma più semplici?**
	i
7) **Cos'è il multiplexing?**
	E' una tecnica utilizzata per permettere la gestione contemporanea di più comunicazioni sullo stesso canale. Ogni canale di trasmissione ha una sua capacità trasmissiva superiormente limitata, se ogni singola trasmissione impegnasse stabilmente un canale si rischierebbe di non poter servire altre richieste per tempo molto lungo. Spezzando la singola trasmissione si realizza il cosiddetto multiplexing del canale: viene inviato un pacchetto relativo ad una trasmissione, poi un pacchetto relativo ad un’altra, poi uno di un’altra ancora e così via. In questo modo ogni richiesta di trasmissione vedrà un avanzamento lavori progressivo, senza lunghe interruzioni.
8) **Cosa si intende con "percorso migliore"? Quali sono gli aspetti tecnici di una trasmissione in rete?**
	i
9) **Come si potrebbero definire dei concetti di "distanza" in rete?**
	Il concetto di distanza tra due nodi della rete. I retisti definiscono generalmente la distanza, declinata in termini spaziali e temporali, tra due nodi di una rete come:
	• numero di salti/hop tra i due nodi;
	• tempo di percorrenza di pacchetti speciali (ICMP - Internet Control Message Protocol - echo request) che vengono inviati e di cui si misura il tempo di ritorno, il cosiddetto ping time.
10) **Cos'è un "ping"? (e "ping time", con che ordini di grandezza?)**
	Pacchetti speciali (ICMP - Internet Control Message Protocol - echo request) che vengono inviati e di cui si misura il tempo di ritorno, il cosiddetto ping time, per valutare la distanza tra due nodi nella rete.
11) **Cos'è un "hop"?**
	Un hop, o salto, è una connessione tra due nodi della rete. Una sequenza di hop determinano un path, ovverso una catena di canali che collegano un generico nodo della rete ad un altro.
12) **Cos'è il "traceroute"?**
	E' uno strumento che combina la funzionalità del 'ping' con la possibilità di tenere traccia della rotta seguita dal flusso di pacchetti al fine di tracciare una rotta tra due nodi della rete e di misurarne il tempo.
13) **Come viene declinata in rete la frase di Orwell "Tutti gli animali sono uguali, ma alcuni sono più uguali degli altri"?**
	i
14) **Da cosa dipende la "funzione di routing"?**
	i
15) **Un pacchetto in rete ha un "autore"? Se sì, in che senso?**
	
16) **E' possibile decidere il routing di una sequenza di pacchetti in base alle convinzioni politiche del soggetto che genera il traffico? (argomentare)**
	i
17) **Quali metadati contiene un pacchetto IP?**
	- TTL (Time To Live): un contatore che viene decrementato ogni volta che il pacchetto passa da un router, quando il contatore va a 0 il pacchetto viene scartato e muore;
	- Protocol: tipo di protocollo, informazione che aiuta chi riceve il flusso di dati a capirne la semantica;
	- Checksum: valore di controllo per capire se il pacchetto è integro;
	- Source IP Address: indirizzo sorgente (mittente), il ricevente di un flusso dati sa da dove arriva (o dichiara di arrivare) l’informazione;
	- Destination IP Address: indirizzo destinatario;
	- Source Port e Destination Port;
	- Length: lunghezza, altro dato di controllo;
	- Sequence number: numero di sequenza, quando un flusso dati generico deve essere ordinato (ad esempio i frame di un video che non devono essere visualizzati in ordine sbagliato) il numero di sequenza permette la flessibilità di inviare pacchetti senza preoccuparsi troppo della strada che faranno perché lato ricezione sarà suﬀiciente memorizzarli temporaneamente per poterli riordinare prima di presentarli all’utente.
18) **Cos'è il Time To Live? Perché ci può interessare in CDT?**
	TTL (Time To Live): un contatore che viene decrementato ogni volta che il pacchetto passa da un router, quando il contatore va a 0 il pacchetto viene scartato e muore. Ci può interessare perchè modificando un TTL rendendolo elevato fa sì che il pacchetto possa andare lontano, cioè raggiungere destinazioni a molti hop di distanza. Se, invece, si modifica (tipicamente abbassandolo) il TTL si rende un pacchetto meno longevo e lo si confina ad un raggio d’azione limitato superiormente.
19) **Cosa si intende con "mittente" o "destinatario" di un flusso di pacchetti?**
	i
20) **Cos'è una "porta"?**
	il concetto di porta serve a differenziare un flusso dati tra due nodi in modo da simulare più sotto-flussi, i.e., i pacchetti che vanno da A a B vengono smistati su code diverse in funzione delle porte dichiarate nei pacchetti stessi;
21) **Cos'è un "protocollo"?**
	I protocolli di rete servono a codificare opportunamente (cioè al meglio per la particolare esigenza di scambio dati) i contenuti e le sequenze di dati in modo da ottenere la funzione richiesta.
22) **Che differenza c'è tra metadati e contenuto di un pacchetto?**
	i
22) **Cos'è un "Man-In-The-Middle attack"?**
	un router potrebbe tranquillamente modificare un pacchetto prima di ruotarlo, operando quello che viene chiamato Man-In-The-Middle attack.
23) **Cos'è la "Deep Packet Inspection"? E' sempre possibile/facile?**
	La deep packet inspection (DPI, ispezione profonda dei pacchetti), che prevede l’analisi non solo dei metadati ma anche del contenuto (tenendo perfino una traccia storica) dei pacchetti che vengono instradati. Con la DPI è possibile controllare ogni aspetto di tutta l’informazione veicolata su Internet, consentendo quindi - tipicamente ai governi e alle aziende che gestiscono la Rete - di esercitare il controllo sistematico del contenuto delle comunicazioni su intere zone di Internet e di conseguenza decidere cosa può essere comunicato, chi può comunicare e chi può ricevere la comunicazione.
24) **Cosa si intende con "crittografia"? Sai citare qualche tipo di crittografia nota?**
	i
25) **Cos'è un indirizzo IP? Che tipi esistono?**
	i
26) **Cosa si intende con "la rete è relativistica"?**
	i
1) In che senso la rete "non è un universo euclideo"?
2) Cos'è un URL? In cosa differisce da un indirizzo IP?
3) Cosa fa un motore di ricerca?
4) Un URL viene "risolto" sempre allo stesso modo da qualunque DNS?
5) Una volta che ottengo l'IP di un indirizzo simbolico, riesco sempre a raggiungere il nodo? Sempre lo stesso univocamente?
6) Cos'è `dig`? (o nslookup, ecc)
7) Cosa si intende con "sito oscurato" (mediante decisione legale)? (filtro DNS)
8) Cos'è Tor? Come funziona? Cosa c'entrano le cipolle?
9) Cos'è un "proxy"?
10) Cos'è "whois"?
11) Cosa fa un "firewall"?
12) Fai qualche esempio notevole di sottoreti quasi certamente "molto relativistiche" (in cui ci sono molte "ombre/buchi/ecc").
13) Differenze fra "whitelist" e "blacklist"?
14) Cosa si intende con "velocità di trasmissione" in Internet? Da cosa è influenzata?
15) Differenze fra ADSL, VDSL, FIBRA, ecc.
	ADSL sta per Asymmetrical Digital Subscriber Line 
1) Cosa si intende con "sito" e con "nodo della rete"?
2) Cosa si intende con "ultimo miglio"?
3) Cosa si intende con "offerta flat" nel campo della telefonia cellulare? Perché ci interessa? Quali effetti relativistici si possono incontrare?
4) Chi è FCC?
5) Cos'è VOIP?
6) Cosa si intende con QoS? Esistono usi "positivi" e "negativi" della QoS?
7) Cosa fa il Great Firewall of China?
8) Cosa fanno in generale i vari firewall "nazionali" e perché?
9) Cosa si intende con "supporto di memorizzazione"? Che tipi di supporto sono stati citati? Quali caratteristiche hanno?
10) Cosa si intende con "vita di un bit"?
11) Cos'è il MTBF?
12) Cosa rende un dato "immortale"?
13) Cosa si intende con "ridondanza"?
14) Cos'è il RAID?
15) Chi era Edmond Locard? Cosa ha enunciato?
16) Cos'è il "Principio di Scambio"?
17) Come è enunciato il "Principio di Locard digitale"?
18) Come è applicato Locard a livello rete?
19) Cos'è un "log"?
20) Cosa registra un "log" di un router?
21) Locard digitale è più efficace che nel mondo analogico? Se sì perché?
22) Cos'è un "dato"?
23) Cos'è una "informazione"?
24) Cosa si intende con "semantica"? (qual è la semantica di "semantica"?)
25) Cos'è una Macchina di Turing? Qual è il suo scopo/funzione?
26) La semantica di un dato è inequivocabile?
27) Cosa si intende con "traccia digitale"? (non in senso audio ovviamente)
28) Come posso capire chi ha "scritto" un bit/byte/stream?
29) Cosa si intende con metadati?
30) Cos'è il "forging"?
31) Un dato digitale è forgiabile?
32) Che "trust" posso dare ad un log raccolto come prova giudiziale? Come posso aumentare il "trust"?
33) Cos'è un "log certificato"?
34) Cosa si intende con "data retention"? Come si articola nei vari paesi?
35) Cosa si intende con "profilazione" (a livello di rete)?
36) Cosa si intende con "sorveglianza anticrimine" (a livello di rete)?
37) Cosa si intende con "pre-crime"?
38) A ccosa si riferisce il termine "DataGate"?
39) Chi è NSA?
40) Chi sono i Five Eyes?
41) Che tipi di dati ha raccolto (e raccoglie tuttora) la NSA?
42) Chi è Edward Snowden?
43) Chi è Glenn Greenwald?
44) Chi è Laura Poitras?
45) Come funzionano gli accordi fra le agenzie dei Five Eyes? A cosa servono?
46) Quante persone (ordine di grandezza) vengono "osservate" dai Five Eyes?
47) Quali aziende sono state coinvolte in PRISM?
48) Parla di qualche programma di spionaggio svelato dal DataGate.
49) Cos'è il "boomerang routing"? Perché viene applicato?
50) Cita e descrivi qualche programma di spionaggio/indicizzazione messo in atto da FiveEyes.
51) Quali attacchi (legal-politici, tecnici) alla crittografia sono stati portati nel corso degli anni?
52) Cos'è ECHELON?
53) A quali vantaggi puntano i programmi di spionaggio dei FiveEyes (e USA in particolare)?
54) In che senso Internet è "guasta"?
55) Cita qualche protocollo di rete crittografato e qualcuno in chiaro.
56) Nei protocolli di rete crittografati, in genere, rimane comunque una parte in chiaro? Discuti.
57) Qual è il "peccato originale" (autenticità) di Internet? Discuti.
58) Cos'è BGP?
59) Perché la crittografia non è stata introdotta fin dall'inizio nei protocolli di "base" di Internet?
60) Cosa si intende con "anonimato"? E' attualmente possibile in Internet?
61) Cos'è OONI Probe?
62) Cos'è Wehe?
63) Cos'è la "crittografia a chiave pubblica"? Discuti.
64) Cos'è una "rete overlay"?
65) Cos'è una VPN e cosa serve?
66) Cos'è un "exit node" (Tor)?
67) Cos'è I2P (garlic router)?
68) Cos'è Free-net?
69) Cosa si intende con "peer-to-peer" in generale?
70) Cosa indica il termine "mesh network"?
71) Cos'è GNUnet?
72) Cosa si intende con "perfect forward secrecy"?
73) Come viene identificato un nodo in GNUnet?
74) Cosa si intende con "confidenzialità" in GNUnet?
75) Come si tenta di proteggere l'anonimato in GNUnet?
76) Cos'è GNS (GNU Naming System) e in cosa differisce da DNS?
77) Cos'è Secushare?
78) Cos'è Next Generation Internet?

## L1
1) Differenza fra servizi "analogici" e "digitali".
2) In che senso può essere difficile l'accesso ad un servizio digitale? (quali restrizioni)
3) Cosa deve garantire un servizio digitale ai cittadini?
4) Cosa si intende con "digitalizzazione dei servizi"? (fare esempi di servizi "analogici" e "digitali")
5) Cosa sono "frontend" e "backend" di un servizio?
6) Cosa si intende con "appificazione"?
7) Quali sono gli aspetti importanti da considerare nella digitalizzazione di un servizio?
8) Quali vantaggi e svantaggi di un servizio digitale?
9) Cosa si intende con "fallback" in un servizio digitale?
10) Perché sono importanti i protocolli standard nei servizi digitali?
11) Perché vengono usati protocolli "segreti" (non documentati) in molti ambiti dei servizi digitali?
12) Cosa si intende con "formato" nell'ambito dei servizi digitali?
13) Vantaggi e svantaggi dei formati standard nei servizi digitali
14) Cosa si intende con formati standard "de iure" e "de facto"?
15) Cos'è il "reverse engineering" e perché potrebbe essere utile nel contesto dei servizi digitali?
16) Cos'è uno "standard 'aperto'"?
17) Cosa si intende con "interoperabilità"?
18) Cos'è un "broker" nel contesto dei servizi?
19) Cos'è lo standard REST(ful)?
20) Cosa si intende con API? perché sono utili nel contesto dei servizi digitali?
21) Cosa si intende con "lock-in"?
22) Fai degli esempi di "lock-in".
23) Cosa si intende con "esportazione dei dati"? Perché è utile?
24) Cosa si intende con "scalabilità" nei servizi digitali?
25) Cos'è l'effetto "slashdot"?
26) Cosa si intende con "sicurezza" nei servizi digitali?
27) Cos'è il GDPR?
28) Cos'è la 2FA? come viene realizzata di solito?
29) Cosa si intende con "accessibilità" nei servizi digitali?
30) Cos'è la "relatività" nei servizi digitali? In cosa si vede di solito?
31) Cosa si intende con "price discrimination"?
32) In cosa si nota la "relatività" nei servizi di streaming?
33) In cosa si nota la "relatività" nei social network?
34) Cos'è una "filter bubble"? A quale scopo viene applicata?
35) Cos'è Internet Archive? Perché può essere utile in questo contesto "relativistico"?
36) Cos'è il Principio di Locard applicato ai servizi digitali?
37) Cos'è un "log" e perché ci interessa in CDT?
38) Cos'è la "data retention"?
39) Fai qualche esempio da "Weapons of math destruction".
40) Cos'è la "digital footprint"?
41) Cos'è l'"orizzonte degli eventi" digitale? Da cosa è influenzato?
42) Cita qualche tecnologia che potrebbe comprimere l'"orizzonte degli eventi" digitale.
