Le **Artificial Neural Network** sono sistemi di information processing , i cui principi di struttura e azione sono ispirati dal sistema nervoso e dal cervello di animali e umani.
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

Per illustrare questo processo si utilizzerà una TLU con un singolo input. I parametri di questa unità saranno tali da permettere la computazione dell'operazione di negazione. 

![[TLU for the negation.png]]

Se l'input è 0, l'output calcolato varrà 1 e viceversa.

![[Error of computing the negation.png]]

Il diagramma di sinistra mostra l'errore per l'input $x$ = 0, per il quale si desidera un output di 1. Poichè la TLU calcola il valore 1 se **xw** $\geq \theta$, l'errore vale 0 per le soglie negative e 1 per le soglie positive.
Il diagramma centrale mostra l'errore per l'input $x$ = 1, per il quale si desidera un output di 0. Qui sia i pesi che la soglia influenzano il risultato. Se i pesi hanno un valore inferiore alla soglia, si avrà **xw** $< \theta$ e, perciò. l'output e, di conseguenza, l'errore sarà 0.
Il diagramma di destra invece mostra la somma di questi errori. E' possibile effettuare questa somma in quanto l'errore assume sempre un valore positivo. In caso di errore sia positivo che negativo, si sarebbe corso il rischio di cancellazione errone dell'errore.
Dal diagramma di destra, mentre un umano potrebbe leggere facilmente i valori di soglia e pesi tali per cui l'errore si annulla, una macchina non potrebbe farlo con altrettanta facilità, poichè non in grado di mimare l'ispezione visiva.

Si rende quindi necessario rimodellare la funzione di errore, in modo tale da poter osservare direttamente dalla forma di quest'ultima in quale direzione occorre modificare i pesi e la soglia in modo da ridurre l'errore. 
Quando la TLU produce l'output sbagliato, si considera di quanto è stata ecceduta la soglia ( per un output desiderato di 0 ) o quanto manca al suo raggiungimento ( per un output desiderato di 1 ). Per migliorare la scelta dei pesi e della soglia, ci si muove semplicemente nella direzione in cui la funzione di errore ha la maggiore pendenza in discesa.

![[Error of computing the negation 2.png]]

![[Directions of changes.png]]

Le regole di adattamento dei cambi di direzione possono essere applicate in due modi differenti. 
Si considerino gli input $x$ = 0 e $x$ = 1 alternati. Prima si adattano i pesi e la soglia in accordo con il diagramma di sinistra, poi in accordo con il diagramma centrale e si ripete fino all'azzerarsi dell'errore. Questo modo di allenare una rete neurale è chiamato **online learning** o **online training**.

![[Training processes.png]]

La seconda opzione consiste in non applicare i cambiamenti immediatamente dopo ogni esempio di training , ma aggregarli in gruppi. Solo al termine di una **training epoch**, i cambiamenti aggregati vengono applicati.
Alla fine di queste epoch, l'errore riduce. Questo modo di allenare è chiamato **batch learning** o **batch training**.

E' possibile definire il seguente metodo generale per il trainig di Threshold Logic Unit.
Sia **x** = $( x_{1}, ..., x_{n} )$ un vettore di input di una Threshold Logic Unit, $o$ l'output desiderato per questo vettore di input e $y$ l'output attuale della TLU.
se $y \neq o$, allora, al fine di ridurre l'errore, la soglia $\theta$ e il vettore di pesi **w** = $( w_{1}, ..., w_{n} )$ sono modificati come segue:

$$ \theta^{(new)} = \theta^{(old)} + \Delta \theta  \quad\text{ con }\quad \Delta \theta = -\eta (o - y),\\
\forall i \in {1, ..., n} \text{ : } w_{i}^{new} =w_{i}^{old} + \Delta w_{i} \quad\text{ con }\quad \Delta w_{i} = -\eta (o - y)x_{i}  $$

dove $\eta$ è un parametro chiamato **learning rate** o **tasso di apprendimento**. Esso determina la forza dei cambiamenti a soglia e pesi. Questo metodo è chiamato  **Delta Rule** o **procedura di Widrow - Hoff**.
In questa definizione, si deve istinguere tra l'adattamento della soglia e dei pesi, perchè le direzioni di questi cambiamenti sono opposti l'uno con l'altro.

Ora verrano mostrari alcuni esempi di training, partendo dai valori $\theta = 3/2$, $w = 2$ e learning rate = 1.

![[Online training ex.png]]

![[Batch training ex.png]]

Si può inferire che questa procedura non termina se la funzione che necessita di essere allenata non gode della [[Separabilità Lineare]].
Sapendo a priori che non esiste una TLU singola in grado di calcolare la coimplicazione, l'errore non può svanire e quindi l'algoritmo non termina.
Per quanto riguarda le funzioni linearmente separabili, tuttavia, cioè per funzioni che possono essere attualmente calcolate da un Threhold Logic Unit, è garantito che la procedura trovi la soluzione per il [[Teorema della Convergenza per la Delta Rule]].

Tutti gli esempi considerati finora si riferiscono a funzioni logiche nelle quali lo stato $false$ era codificato come 0 e lo stato $true$ era codificato come 1. Comunque, questa codifica ha lo svantaggio che, nel caso di input $false$, il peso corrispondente non può essere modificato, perchè la formula per la modifica del peso contiene l'input come fattore. Per evitare questo problema, si utilizza il [[Modello ADALINE]].
Nonostante la procedura di Widrow - Hoff è ugualmente applicabile per la codifica $false$ = 0, questa situazione è spesso chiamata **procedura di correzione dell'errore**, per evitare confusione. 

### Modello generale di reti neurali ###

Si introduce un modello generale di reti neurali artificiali che cattura tutte le casistiche particolari.
Il metodo con il quale sono state rappresentate le reti suggerisce di descrivere le reti neurali tramite un [[Grafo]].
Per descrivere reti neurali, si necessita esclusivamente di grafi orientati, poichè le connessioni tra i neuroni sono sempre orientate.

Una **rete neurale artificiale** è un grafo orientato $G = ( U, C )$ i cui vertici $u \in U$ sono chiamati **neuroni** o **unità** e i cui archi $c \in C$ sono chiamati **connessioni**. L'insieme $U$ dei vertci è diviso nell'insieme $U_{in}$ di **neuroni input**, l'insieme $U_{out}$ di **neuroni output** e l'insieme $U_{hidden}$ di **neuroni nascosti**.

$$U = U_{in} \cup U_{out} \cup U_{hidden}, \\
U_{in} \neq \emptyset, \quad U_{out} \neq \emptyset, \quad U_{hidden} \cap ( U_{in} \cup U_{out} ) = \emptyset$$

Ad ogni connessione $( v, u ) \in C$ è assegnato un peso $w_{uw}$ e ad ogni neurone $u \in U$ sono assegnati tre quantità: 
- il **network input** $net_{u}$;
- l'**attivazione** $act_{u}$;
- l'**output** $out_{u}$.

Inoltre, ad ogni neurone $u \in U_{in}$ è assegnata una quarta quantità, l'**external input** $ext_{U}$.
Ogni neurone  $u \in U$ possiede tre funzioni:
- la **network input function**;
- la **activation function**;
- la **output function**;

con le quali vengono calcolate le quantità precedentemente citate.

I neuroni sono divisi in **neuroni input**, **neuroni output** e **neuroni nascosti** ( o **hidden neurons**), al fine di distinguere quale neuroni ricevono input dall'ambiente ( neuroni input) e quali emettono output verso l'ambiente ( neuroni output). I neuroni rimanenti non hanno contatto con l'ambiente esterno e, perciò, vengono chiamati nascosti.
Un neurone può essere sia input che output.

In accordo con la **network structure**, si possono distinguere due tipi fondamentali di reti neurali:
- [[Feed Forward Network]];
- [[Recurrent Network]].

Se il grafo è aciclico, esiste una sola direzione, chiamata **forward**, dai neuroni input verso i neuroni output. Tuttavia, se esistono loops o cicli orientati, gli output possono tornare verso i neuroni input. 

### Operazioni delle reti neurali ###

Per descrivere le operazioni di una rete neurale, è necessario specificare come un singolo neurone calcola i propri output a partire dagli input e come è organizzata la computazione da parte dei differenti neuroni., in particolare come gli input esterni vengono processati ed in quale ordine i neuroni vengono aggiornati.

Ogni singolo neurone può essere considerato come un semplice processore.

![[Structure of a generalized neuron.png]]

La network input function $f_{net}^{(u)}$ calcola il network input $net_{u}$ dagli input $in_{uv_{1}}, ..., in_{uv_{n}}$, i quali corrispondono agli output $out_{v_{1}}, ..., out_{v_{n}}$ del neurone predecessore del neurone $u$, e dai pesi delle connessioni $w_{uv_{1}}, ..., w_{uv_{n}}$.
Questa computazione può essere influenzata da dei parametri addizionali, $\sigma_{1}, ..., \sigma_{n}$. A partire dal network input, da un certo numero di parametri $\theta_{1}, ..., \theta_{k}$ e, potenziamente, dal feedback della corrente attivazione del neurone $u$, la funzione di attivazione $f_{act}^{(u)}$ calcola la nuova attivazione $act_{u}$ del neurone $u$. Infine, la funzione di output $f_{out}^{(u)}$ calcola l'output del neurone $u$ a partire dalla sua attivazione. L'input esterno $ext_{u}$ definisce l'iniziare attivazione del neurone $u$, se si tratta di un neurone input.

il numero di argomenti addizionali della network input function $k_{1}(u)$ e il numero di argomenti dell'activation function $k_{2}(u)$ dipendono dal tipo di queste funzioni e dalla struttura del neurone.
Tipicamente, la network input function ha solo $2|pred(u)|$ argomenti ( cioè gli output dei neuroni predecessori e i corrispondenti pesi delle connessioni), poichè non viene aggiunto nessun parametro.
La funzione di attivazione, solitamente, necessita di due argomenti: il network input e un parametro, il quale può essere, per esempio, un valore soglia.
La funzione output, dall'altro lato, prende solamente l'attivazione come suo argomento e, di solito, ha lo scopo di scalare l'output in un rage di output desiderato, comunemente tramite linear mapping.

E' possibile dividere le computazioni di una rete neurale i due fasi:
- la **input phase** ( o **fase di input**), nella quale gli input esterni sono dati in pasto alla rete;
- la **work phase** ( o **fase di lavoro**), nella quale l'output della rete neurale viene calcolato.

La fase di input ha lo scopo di inizializzare la rete. In questa fase, le ativazioni dei neuroni input sono impostate al valore degli input esterni corrispondenti. Le attivazioni dei neuroni rimanenti sono inizializzate arbitrariamente, tipicamente settandole a 0. inoltre, la funzione di output è applicata alle attivazioni inizializzate, così che tutti i neuroni producano un output iniziale. 
Nella work phase, gli input esterni vengono scollegati e le attivazioni e gli output dei neuroni vengono ricalcolati ( potenzialmente molteplici volte). Per ottenere ciò, la network input function, la activation function e la output function sono applicate come descritto sopra. Se un neurone non riceve alcun network input, perchè non ha alcun predecessore, si definisce che mantiene semplicemente la sua attivazione ( e perciò anche il suo output). 
Questo è importante solo per i neuroni input in un feed forward network. 

Le ricomputazioni terminano nel caso in cui o il network raggiunge uno stato sabile ( cioè ulteriori ricomputazioni non modificano ulteriormene l'output dei neuroni ) o se è stato eseguito un numero predefinito di ricomputazioni.
L'ordine temporale delle ricomputazioni, generalmente, non è fissato.
Per esempio, tutti i neuroni di un network possono ricomputare il proprio output allo stesso tempo ( **update sincrono** ). E' possibile, inoltre, definire un ordine di neuroni nel quale loro computano il loro nuovo output uno dopo l'altro ( **update asincrono** ). In questo caso i nuovi output degli altri neuroni possono essere già stati utilizzati come input di computazioni successive. 
Per quanto riguarda le reti feed forward, le computazioni solitamente seguono l'[[Ordinamento Topologico]].
Per le recurrent network, l'output finale dipende dall'ordine nel quale i neuroni ricomputano l'output e da quante ricomputazioni sono state eseguite. 

### Training di neural network ###

Una delle proprietà più allettanti delle reti neurali è la possibilità di allenrale per certe task con l'aiuto di sample di dati.
Nonostante la Delta Rule sia solamente applicabile per singole Threshold Logic Unit e non può essere trasferita direttamente a reti di TLU, illustra già il principio base sul quale consiste il training di reti neurali. L'allenamento consiste nell'adattare i pwesi delle connessioni e, possibilmente, altri parametri, ad esempio la soglia, in modo che un certo criterio sia ottimizzato.
In base al tipo di training data e al criterio da ottimizzare, è possibile distinguere tra due **learning task** fondamentali:
- [[Learning Task Fissata]];
- [[Learning Task Libera]].

Data una Learning Task Fissato, l'obiettivo è allenare una rete neurale in modo che produca, per tutti i training pattern $l \in L_{fixed}$, gli output contenuti nel vettore di output $\textbf{o}^{(l)}$ se gli input esterni del corrispondente vettore di input $\textbf{i}^{(l)}$ sono dati in pasto al network.
Nella pratica, questo ottimo può essere ottenuto raramente e, perciò, spesso si rende necessario accontentarsi di una soluzione parziale o approssimata.
Al fine di determinare con quale bontà una rete neurale risolve una learning task fissata, viene utilizzata una funzione di errore, la quale misura quanto l'output ottenuto coincide con l'output desiderato nel training pattern.
Questa funzione di errore è comunemente definita come la somma delle deviazioni dell'output desiderato e ottenuto al quadrato, per tutti i traning pattern e tutti i neuroni di output.
L'errore di una rete neurale in riferimento a una learning task fissata $L_{fixed}$ è definito come:

$$e = \sum_{l \in L_{fixed}} e^{(l)} = \sum_{v \in U_{out}} e_{v} = \sum_{l \in L_{fixed}} \sum_{v \in U_{out}} e_{v}^{(l)}$$
dove

$$
e_{v}^{(l)} = \big( o_{v}^{(l)} - out_{v}^{(l)} \big)^2
$$

è l'errore individuale per un training pattern $l$ e per un neurone output $v$.

