Le **Artificial Neural Network** sono sistemi di information processing , i quali principi di struttura e operazioni sono ispirati dal sistema nervoso e dal cervello di animali e umani.
Essi consistono di un largo numero di unità relativamente semplici, i [[Neuroni]], i quali lavorano in parallelo. Questi neuroni comunicano mandando informazioni tra di loro sotto forma di segnali di attivazione, lungo connessioni orientate.
Un sinonimo comunemente usato per le reti neurali è il termine **modello connessionista**. Perciò, l'espressione "processing distribuito in parallelo" può spesso essere trovato in relazione alle reti neurali artificiali.

Le reti neurali artificiali sono studiate per vari motivi:
- in ( Neuro ) Biologia e ( Neuro ) Fisiologia, ma anche in Psicologia, l'interesse principale è la similarità con il sistema nervoso biologico;
- In Computer Science ed Ingegneria, l'interesse è sulla mimica di certe capacità cognitive umane ( in particolar modo l'abilità dell'apprendimento ) usando elementi funzionali del sistema nervoso e del cervello; 
- In Fisica, certi modelli matematici analoghi alle reti neurali artificiali sono utilizzati per descrivere certi fenomeni.

La ragione per la quale le reti neurali vengono studiate in Computer Science si basa sull'ipotesi che le macchine possano comportarsi in maniera intelligente. Questa ipotesi sostiene che il requisito fondamentale per ottenere un comportamento intelligente è l'abilità di manipolare simboli e strutture di simboli rappresentate da strutture fisiche. Qui simbolo significa un token che si riferisce ad un oggetto o ad una situazione. 

**Physical Symbol System Hypotesis**: Un simbolo fisico ha i mezzi necessari e sufficienti per azioni intelligenti.

La classica [[Intelligenza Artificiale]] si concentra su forme simboliche per rappresentare la conoscenza e, in particolare, su logica dei predicati e delle proposizioni. Al contrario, le Artificial Neural Network non sono sistemi di simboli fisici ma, piuttosto, segnali più elementari, i quali, presi singolarmente, raramente hanno un significato chiaro. Di conseguenza, le reti neurali sono spesso chiamate **sotto - simboliche**.

Non ci sono dubbi sui risultati ottenuti dalla classica Intelligenza Artificiale. Ciò nonostante, quando diventa necessario mimare la percezione ( sentire, udire, ecc. ), i computer performano scarsamente in confronto agli umani, almeno nei casi in cui si fa affidamento sulla rappresentazione simbolica: in questo caso i computer sono troppo lenti, poco flessibili e troppo poco tolleranti a rumore ed errori. Il problema è che, al fine di riconoscere pattern, la rappresentazione simbolica non è adatta. 
Piuttosto, le misurazioni necessitano di essere strutturate ed elencate prima di poter applicare in maniera efficace metodi simbolici. 

Come già menzionato, le Artificial Neural Network sono ispirate dalla struttura e dai principi secondo cui operano il sistema nervoso ed, in particolare, il cervello di animali ed umani. Il sistema nervoso degli animali consiste del cervello, dei differenti sistemi sensoriali, i quali collezionano informazioni dalle differenti parti del corpo, ed il sistema motorio, il quale controlla i movimenti.
La parte principale del processing di informazioni avviene nel cervello e nel sistema nervoso centrale. I neuroni sono la componente fondamentale del sistema nervoso e processano informazioni principalmente interagendo tra di loro. 

La descrizione delle reti neurali biologiche finora rende naturale modellare i neuroni come [[Threshold Logic Unit]]: se un neurone riceve uno stimolo eccitatorio abbastanza forte, il quale non viene compensato da un altrettanto forte input inibitorio, diventa attivo e manda un segnale agli altri neuroni. 

Sfortunatamente, singole TLU sono fortemente limitate nella possibilità espressiva e potenza di calcolo.
E' possibile intuire, dall'intepretazione geometrica, che le TLU possono rappresentare funzioni che sono **linearmente separabili**, cioè funzioni per le quali i punti con output 1 possono essere separati dai punti con output 0 tramite una funzione lineare ( che sia una retta, un piano o un iperpiano ). Le TLU possono, quindi, rappresentare  funzioni che godono della [[Separabilità Lineare]].
Considerando l'esempio di una semplice funzione, la coimplicazione ( cioè $x_{1} \leftrightarrow x_{2}$)

![[The biimplication problem.png]]

Le Threshold Logic Unit sono fortemente limitate solo considerando le singole TLU. Il potere espressivo aumenta considerevolmente se consideriamo un [[Network di Threshold Logic Unit]].

Interpretando le computazioni di una TLU geometricamente, si ha un metodo semplice per trovare, data una funzione linearmente separabile, una TLU che possa risolverla.
Ciò nonostante, questo metodo diventa non ammissibile se la funzione da risolvere ha più di tre argomenti. Inoltre, è impossibile automatizzare questo metodo, perchè si trova una linea di separazione accettabile esclusivamente tramite "ispezione visiva" dei set di punti da separare. Ispezione visiva che, come già ribadito, non si è in grado di mimare tramite computer.
Si necessita quindi di un approccio differente.
Il principio di questo nuovo approccio si basa sullo stabilire dei valori per i pesi e per la soglia scelti in maniera randomica e sul variare questi valori in maniera iterativa fino a quando si è ottenuta la funzione desiderata.
Il lento adattarsi dei pesi e della soglia è anche detto **training** della Threshold Logic Unit.

In base ai valori scelti di pesi e soglia, il valore di output della TLU può essere più o meno corretto. Possiamo quindi definire una **funzione di errore** $e(w_{1}, ..., w_{n}, \theta)$, la quale misura quando la funzione calcolata coincide con quella desiderata.
L'obiettivo del training è determinare i valori adatti affinchè il valore della error function si azzeri. Ad ogni iterazione si cerca quindi di diminuire il valore di questa funzione.
