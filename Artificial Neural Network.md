# Artificial Neural Network #
Le **Artificial Neural Network** sono sistemi di information processing, i cui principi di struttura e azione sono ispirati dal sistema nervoso e dal cervello di animali e umani.<br />
Esse consistono di un largo numero di unità relativamente semplici, i [[Neuroni]], i quali lavorano in parallelo. Questi neuroni comunicano mandando informazioni tra di loro sotto forma di segnali di attivazione, lungo connessioni orientate.<br />
Un sinonimo comunemente usato per le reti neurali è il termine **modello connessionista**. Perciò, l'espressione "processing distribuito in parallelo" può spesso essere trovata in relazione alle reti neurali artificiali.<br />
Le reti neurali artificiali sono studiate per vari motivi:
- in (Neuro) Biologia e (Neuro) Fisiologia, ma anche in Psicologia, l'interesse principale è la similarità con il sistema nervoso biologico;
- In Computer Science ed Ingegneria, l'interesse è sulla mimica di certe capacità cognitive umane (in particolar modo l'abilità dell'apprendimento) usando elementi funzionali del sistema nervoso e del cervello; 
- In Fisica, certi modelli matematici analoghi alle reti neurali artificiali sono utilizzati per descrivere certi fenomeni.

La ragione per la quale le reti neurali vengono studiate in [[Computer Science]] si basa sull'ipotesi che le macchine possano comportarsi in maniera intelligente. Questa ipotesi sostiene che il requisito fondamentale per ottenere un comportamento intelligente è l'abilità di manipolare simboli e strutture di simboli rappresentate da strutture fisiche, dove con simbolo si intende un token il quale si riferisce ad un oggetto o ad una situazione. 

**Physical Symbol System Hypotesis**: Un simbolo fisico ha i mezzi necessari e sufficienti per azioni intelligenti.

La classica [[Intelligenza Artificiale]] si concentra su forme simboliche per rappresentare la conoscenza e, in particolare, su logica dei predicati e delle proposizioni. Al contrario, le Artificial Neural Network non sono sistemi di simboli fisici ma, piuttosto, segnali più elementari, i quali, presi singolarmente, raramente hanno un significato chiaro. Di conseguenza, le reti neurali sono spesso definite come **sotto-simboliche**.

Non ci sono dubbi sui risultati ottenuti dalla classica Intelligenza Artificiale. Ciò nonostante, quando diventa necessario mimare la percezione (sentire, udire, ecc.), i computer performano scarsamente in confronto agli umani, almeno nei casi in cui si fa affidamento sulla rappresentazione simbolica: in questo caso i computer sono troppo lenti, poco flessibili e troppo poco tolleranti a rumore ed errori. Il problema è che, al fine di riconoscere pattern, la rappresentazione simbolica non è adatta. <br />
Piuttosto, le misurazioni necessitano di essere strutturate ed elencate prima di poter applicare in maniera efficace metodi simbolici. 

Come già menzionato, le Artificial Neural Network sono ispirate alla struttura e ai principi secondo cui operano il sistema nervoso ed, in particolare, il cervello di animali ed umani. Il sistema nervoso degli animali consiste del cervello, dei differenti sistemi sensoriali, i quali collezionano informazioni dalle differenti parti del corpo, ed il sistema motorio, il quale controlla i movimenti.<br />
La parte principale del processing di informazioni avviene nel cervello e nel sistema nervoso centrale. I neuroni sono la componente fondamentale del sistema nervoso e processano informazioni principalmente interagendo tra di loro. 

La descrizione delle reti neurali biologiche finora rende naturale modellare i neuroni come [[Threshold Logic Unit]]: se un neurone riceve uno stimolo eccitatorio abbastanza forte, il quale non viene compensato da un altrettanto forte input inibitorio, diventa attivo e manda un segnale agli altri neuroni.<br />
Sfortunatamente, singole TLU sono fortemente limitate nella possibilità espressiva e potenza di calcolo.<br />
E' possibile intuire, dall'intepretazione geometrica, che le TLU possono rappresentare funzioni che sono **linearmente separabili**, cioè funzioni per le quali i punti con output 1 possono essere separati dai punti con output 0 tramite una funzione lineare (che sia una retta, un piano o un iperpiano). Le TLU possono, quindi, rappresentare  funzioni che godono della [[Separabilità Lineare]].<br />
Considerando l'esempio di una semplice funzione, la coimplicazione (cioè $x_{1} \leftrightarrow x_{2}$):

![[The biimplication problem.png]]

Le Threshold Logic Unit sono fortemente limitate solo considerando le singole TLU. Il potere espressivo aumenta considerevolmente se consideriamo un [[Network di Threshold Logic Unit]].

Interpretando le computazioni di una TLU geometricamente, si ha un metodo semplice per trovare, data una funzione linearmente separabile, una TLU che possa risolverla.<br />
Ciò nonostante, questo metodo diventa non ammissibile se la funzione da risolvere ha più di tre argomenti. Inoltre, è impossibile automatizzare questo metodo, perchè si è in grado di trovare una linea di separazione accettabile esclusivamente tramite "ispezione visiva" dei set di punti da separare. Ispezione visiva che, come già ribadito, non si è in grado di mimare tramite computer.<br />
Si necessita quindi di un approccio differente.<br >/
Il principio di questo nuovo approccio si basa sullo stabilire dei valori per i pesi e per la soglia scelti in maniera randomica e sul variare questi valori in maniera iterativa fino a quando si è ottenuta la funzione desiderata.<br />
Il lento adattarsi dei pesi e della soglia è anche detto **training** della Threshold Logic Unit. <br />
In base ai valori scelti di pesi e soglia, il valore di output della TLU può essere più o meno corretto. Possiamo quindi definire una **funzione di errore** $e(w_{1}, ..., w_{n}, \theta)$, la quale misura quando la funzione calcolata coincide con quella desiderata.<br />
L'obiettivo del training è determinare i valori adatti affinchè il valore della error function si azzeri. Ad ogni iterazione si cerca quindi di diminuire il valore di questa funzione.<br />
Per illustrare questo processo si utilizzerà una TLU con un singolo input. I parametri di questa unità saranno tali da permettere la computazione dell'operazione di negazione. 

![[TLU for the negation.png]]

Se l'input è 0, l'output calcolato varrà 1 e viceversa.

![[Error of computing the negation.png]]

Il diagramma di sinistra mostra l'errore per l'input $x$ = 0, per il quale si desidera un output di 1. Poichè la TLU calcola il valore 1 se **xw** $\geq \theta$, l'errore vale 0 per le soglie negative e 1 per le soglie positive.
Il diagramma centrale mostra l'errore per l'input $x$ = 1, per il quale si desidera un output di 0. Qui sia i pesi che la soglia influenzano il risultato. Se i pesi hanno un valore inferiore alla soglia, si avrà **xw** $< \theta$ e, perciò. l'output e, di conseguenza, l'errore sarà 0.<br />
Il diagramma di destra invece mostra la somma di questi errori. E' possibile effettuare questa somma in quanto l'errore assume sempre un valore positivo. In caso di errore sia positivo che negativo, si sarebbe corso il rischio di cancellazione errone dell'errore.<br />
Dal diagramma di destra, mentre un umano potrebbe leggere facilmente i valori di soglia e pesi tali per cui l'errore si annulla, una macchina non potrebbe farlo con altrettanta facilità, poichè non in grado di mimare l'ispezione visiva.<br />
Si rende quindi necessario rimodellare la funzione di errore, in modo tale da poter osservare direttamente dalla forma di quest'ultima in quale direzione occorre modificare i pesi e la soglia in modo da ridurre l'errore.<br />
Quando la TLU produce l'output sbagliato, si considera di quanto è stata ecceduta la soglia (per un output desiderato di 0) o quanto manca al suo raggiungimento (per un output desiderato di 1). Per migliorare la scelta dei pesi e della soglia, ci si muove semplicemente nella direzione in cui la funzione di errore ha la maggiore pendenza in discesa.

![[Error of computing the negation 2.png]]

![[Directions of changes.png]]

Le regole di adattamento dei cambi di direzione possono essere applicate in due modi differenti. <br />
Si considerino gli input $x$ = 0 e $x$ = 1 alternati. Prima si adattano i pesi e la soglia in accordo con il diagramma di sinistra, poi in accordo con il diagramma centrale e si ripete fino all'azzerarsi dell'errore. Questo modo di allenare una rete neurale è chiamato **online learning** o **online training**.

![[Training processes.png]]

La seconda opzione consiste nel non applicare i cambiamenti immediatamente dopo ogni esempio di training, ma aggregarli in gruppi. Solo al termine di una **training epoch**, i cambiamenti aggregati vengono applicati.<br />
Alla fine di queste epoch, l'errore riduce. Questo modo di allenare è chiamato **batch learning** o **batch training**.

E' possibile definire il seguente metodo generale per il trainig di Threshold Logic Unit.<br />
Sia **x** = $( x_{1}, ..., x_{n} )$ un vettore di input di una Threshold Logic Unit, $o$ l'output desiderato per questo vettore di input e $y$ l'output attuale della TLU.<br />
se $y \neq o$, allora, al fine di ridurre l'errore, la soglia $\theta$ e il vettore di pesi **w** = $( w_{1}, ..., w_{n} )$ sono modificati come segue:

$$ \theta^{(new)} = \theta^{(old)} + \Delta \theta  \quad\text{ con }\quad \Delta \theta = -\eta (o - y),$$
$$
\forall i \in {1, ..., n} \text{ : } w_{i}^{new} =w_{i}^{old} + \Delta w_{i} \quad\text{ con }\quad \Delta w_{i} = -\eta (o - y)x_{i}  $$

dove $\eta$ è un parametro chiamato **learning rate** o **tasso di apprendimento**. Esso determina la forza dei cambiamenti a soglia e pesi. Questo metodo è chiamato  **Delta Rule** o **procedura di Widrow-Hoff**.<br />
In questa definizione, si deve distinguere tra l'adattamento della soglia e dei pesi, perchè le direzioni di questi cambiamenti sono opposti l'uno con l'altro.

Ora verrano mostrari alcuni esempi di training, partendo dai valori $\theta = 3/2$, $w = 2$ e learning rate = 1.

![[Online training ex.png]]

![[Batch training ex.png]]

Si può inferire che questa procedura non termina se la funzione che necessita di essere allenata non gode della separabilità lineare.<br />
Sapendo a priori che non esiste una TLU singola in grado di calcolare la coimplicazione, l'errore non può svanire e quindi l'algoritmo non termina.
Per quanto riguarda le funzioni linearmente separabili tuttavia, cioè per funzioni che possono essere attualmente calcolate da un Threhold Logic Unit, è garantito che la procedura trovi la soluzione per il [[Teorema della Convergenza per la Delta Rule]].

Tutti gli esempi considerati finora si riferiscono a funzioni logiche nelle quali lo stato $false$ era codificato come 0 e lo stato $true$ era codificato come 1. Comunque, questa codifica ha lo svantaggio che, nel caso di input $false$, il peso corrispondente non può essere modificato, perchè la formula per la modifica del peso contiene l'input come fattore. Per evitare questo problema, si utilizza il [[Modello ADALINE]].<br />
Nonostante la procedura di Widrow-Hoff è ugualmente applicabile per la codifica $false$ = 0, questa situazione è spesso chiamata **procedura di correzione dell'errore**, per evitare confusione. 

---------------------------------------------------------------

### Modello generale di reti neurali ###
Si introduce un modello generale di reti neurali artificiali che cattura tutte le casistiche particolari.<br />
Il metodo con il quale sono state rappresentate le reti suggerisce di descrivere le reti neurali tramite un [[Grafo]].<br />
Per descrivere reti neurali, si necessita esclusivamente di grafi orientati, poichè le connessioni tra i neuroni sono sempre orientate.

Una **rete neurale artificiale** è un grafo orientato $G = (U, C)$ i cui vertici $u \in U$ sono chiamati **neuroni** o **unità** e i cui archi $c \in C$ sono chiamati **connessioni**. L'insieme $U$ dei vertici è diviso nell'insieme $U_{in}$ di **neuroni input**, l'insieme $U_{out}$ di **neuroni output** e l'insieme $U_{hidden}$ di **neuroni nascosti**.

$$U = U_{in} \cup U_{out} \cup U_{hidden}, $$
$$
U_{in} \neq \emptyset, \quad U_{out} \neq \emptyset, \quad U_{hidden} \cap (U_{in} \cup U_{out}) = \emptyset$$

Ad ogni connessione $(v, u) \in C$ è assegnato un peso $w_{uv}$ e ad ogni neurone $u \in U$ sono assegnati tre quantità: 
- il **network input** $net_{u}$;
- l'**attivazione** $act_{u}$;
- l'**output** $out_{u}$.

Inoltre, ad ogni neurone $u \in U_{in}$ è assegnata una quarta quantità, l'**external input** $ext_{U}$.<br />
Ogni neurone  $u \in U$ possiede tre funzioni:
- la **network input function**;
- la **activation function**;
- la **output function**;

con le quali vengono calcolate le quantità precedentemente citate.

I neuroni sono divisi in **neuroni input**, **neuroni output** e **neuroni nascosti** (o **hidden neurons**), al fine di distinguere quale neuroni ricevono input dall'ambiente (neuroni input) e quali emettono output verso l'ambiente (neuroni output). I neuroni rimanenti non hanno contatto con l'ambiente esterno e, perciò, vengono chiamati nascosti.
Un neurone può essere sia input che output.

In accordo con la **network structure**, si possono distinguere due tipi fondamentali di reti neurali:
- [[Feed Forward Network]];
- [[Recurrent Network]].

Se il grafo è aciclico, esiste una sola direzione, chiamata **forward**, dai neuroni input verso i neuroni output. Tuttavia, se esistono loops o cicli orientati, gli output possono tornare verso i neuroni input. 

---------------------------------------------------------------

### Operazioni delle reti neurali ###
Per descrivere le operazioni di una rete neurale, è necessario specificare come un singolo neurone calcola i propri output a partire dagli input e come è organizzata la computazione da parte dei differenti neuroni, in particolare come gli input esterni vengono processati ed in quale ordine i neuroni vengono aggiornati.<br />
Ogni singolo neurone può essere considerato come un semplice processore.

![[Structure of a generalized neuron.png]]

La network input function $f_{net}^{(u)}$ calcola il network input $net_{u}$ dagli input $in_{uv_{1}}, ..., in_{uv_{n}}$, i quali corrispondono agli output $out_{v_{1}}, ..., out_{v_{n}}$ del neurone predecessore del neurone $u$, e dai pesi delle connessioni $w_{uv_{1}}, ..., w_{uv_{n}}$.<br />
Questa computazione può essere influenzata da dei parametri addizionali, $\sigma_{1}, ..., \sigma_{n}$. A partire dal network input, da un certo numero di parametri $\theta_{1}, ..., \theta_{k}$ e, potenziamente, dal feedback della corrente attivazione del neurone $u$, la funzione di attivazione $f_{act}^{(u)}$ calcola la nuova attivazione $act_{u}$ del neurone $u$. Infine, la funzione di output $f_{out}^{(u)}$ calcola l'output del neurone $u$ a partire dalla sua attivazione. L'input esterno $ext_{u}$ definisce l'iniziale attivazione del neurone $u$, se si tratta di un neurone input.

Il numero di argomenti addizionali della network input function $k_{1}(u)$ e il numero di argomenti dell'activation function $k_{2}(u)$ dipendono dal tipo di queste funzioni e dalla struttura del neurone.<br />
Tipicamente, la network input function ha solo $2|pred(u)|$ argomenti ( cioè gli output dei neuroni predecessori e i corrispondenti pesi delle connessioni), poichè non viene aggiunto nessun parametro.<br />
La funzione di attivazione, solitamente, necessita di due argomenti: il network input e un parametro, il quale può essere, per esempio, un valore soglia.
La funzione output, dall'altro lato, prende solamente l'attivazione come suo argomento e, di solito, ha lo scopo di scalare l'output in un range di output desiderati, comunemente tramite linear mapping.

E' possibile dividere le computazioni di una rete neurale i due fasi:
- la **input phase** (o **fase di input**), nella quale gli input esterni sono dati in pasto alla rete;
- la **work phase** (o **fase di lavoro**), nella quale l'output della rete neurale viene calcolato.

La fase di input ha lo scopo di inizializzare la rete. In questa fase, le attivazioni dei neuroni input sono impostate al valore degli input esterni corrispondenti. Le attivazioni dei neuroni rimanenti sono inizializzate arbitrariamente, tipicamente a $0$. Inoltre, la funzione di output è applicata alle attivazioni inizializzate, così che tutti i neuroni producano un output iniziale.<br />
Nella work phase, gli input esterni vengono scollegati, mentre le attivazioni e gli output dei neuroni vengono ricalcolati (potenzialmente molteplici volte). Per ottenere ciò, la network input function, la activation function e la output function sono applicate come descritto precedentemente. Se un neurone non riceve alcun network input, poichè privo di predecessori, mantiene semplicemente la sua attivazione (e, perciò, anche il suo output).<br />
Questo è importante solo per i neuroni input in un feed forward network. 

Le ricomputazioni terminano nel caso in cui o il network raggiunge uno stato stabile (cioè uno stato in cui ulteriori ricomputazioni non modifichino ulteriormene l'output dei neuroni) o se è stato eseguito un numero predefinito di ricomputazioni.
L'ordine temporale delle ricomputazioni, generalmente, non è fissato.<br />
Per esempio, tutti i neuroni di un network possono ricomputare il proprio output allo stesso tempo (**update sincrono**). E' possibile, inoltre, definire un ordine di neuroni nel quale loro computano il loro nuovo output uno dopo l'altro (**update asincrono**). In questo caso i nuovi output degli altri neuroni possono essere già stati utilizzati come input di computazioni successive.<br />
Per quanto riguarda le reti feed forward, le computazioni solitamente seguono l'[[Ordinamento Topologico]].<br />
Per le recurrent network, l'output finale dipende dall'ordine nel quale i neuroni ricomputano l'output e da quante ricomputazioni sono state eseguite. 

---------------------------------------------------------------

### Training di neural network ###
Una delle proprietà più allettanti delle reti neurali è la possibilità di allenarle per certe task con l'aiuto di sample di dati.<br />
Nonostante la Delta Rule sia solamente applicabile per singole Threshold Logic Unit e non può essere trasferita direttamente a reti di TLU, illustra già il principio base sul quale consiste il training di reti neurali. L'allenamento consiste nell'adattare i pesi delle connessioni e, possibilmente, altri parametri, ad esempio la soglia, in modo che un certo criterio sia ottimizzato.
In base al tipo di training data e al criterio da ottimizzare, è possibile distinguere tra due **learning task** fondamentali:
- [[Learning Task Fissata]];
- [[Learning Task Libera]].


### Learning Task Fissata ###
Data una Learning Task Fissata, l'obiettivo è allenare una rete neurale in modo che produca, per tutti i training pattern $l \in L_{fixed}$, gli output contenuti nel vettore di output $\textbf{o}^{(l)}$ se gli input esterni del corrispondente vettore di input $\textbf{i}^{(l)}$ sono dati in pasto al network.<br />
Nella pratica, questo ottimo può essere ottenuto raramente e, perciò, spesso si rende necessario accontentarsi di una soluzione parziale o approssimata.<br />
Al fine di determinare con quale bontà una rete neurale risolve una learning task fissata, viene utilizzata una funzione di errore, la quale misura quanto l'output ottenuto coincide con l'output desiderato nel training pattern.
Questa funzione di errore è comunemente definita come la somma delle deviazioni dell'output desiderato e dell'output  ottenuto al quadrato, per tutti i traning pattern e tutti i neuroni di output.<br />
L'errore di una rete neurale in riferimento a una learning task fissata $L_{fixed}$ è definito come:

$$e = \sum_{l \in L_{fixed}} e^{(l)} = \sum_{v \in U_{out}} e_{v} = \sum_{l \in L_{fixed}} \sum_{v \in U_{out}} e_{v}^{(l)}$$

dove:

$$
e_{v}^{(l)} = \big( o_{v}^{(l)} - out_{v}^{(l)} \big)^2
$$

è l'errore individuale per un training pattern $l$ e per un neurone output $v$.
Il quadrato della deviazione dell'output desiderato e dell'output ottenuto è stato scelto per varie ragioni. In primo piano, è chiaro che non è possiile semplicemente sommare le deviazioni direttamente, poichè le deviazioni positive e negative potrebbero cancellarsi a vicenda, producendo quindi un'impressione sbagliata dell'attuale bontà del network.<br />
Tuttavia, il quadrato della deviazione dell'output desiderato e dell'output ottenuto ha almeno due vantaggi rispetto al valore assoluto:
- il quadrato è continuamente differenziabile ovunque, mentre la derivata del valore assoluto non esiste / è discontinua in 0. E' desiderabile che la funzione di errore sia continuamente differenziabile, perchè questo semplifica la derivazione delle regole di update per i pesi.
- Grandi deviazioni dall'output desiderato sono pesate in maniera più severa, così che ci sia una tendenza la quale permetta di evitare durante il training grandi deviazioni individuali dal valore desiderate.

### Learning Task Libera ###

Mentre il training pattern di una learning task fissata contiene un output desiderato, la quale permette di computare un errore, le learning task libere necessitano di un criterio differente per intuire quanto bene una rete neurale risolve la task.<br />
L'obiettivo del training può essere, per esempio, raggruppare i vettori di input in [[Cluster]] di vettori simili così che per tutti i vettori in un cluster venga prodotto lo stesso output.

Data una learning task libera, l'aspetto più importante al fine di allenare una rete neurale è come viene misurata la similarità tra i traning pattern. Questa similarità può essere definita, per esempio, con l'aiuto di una funzione di distanza.<br />
E' consigliabile normalizzare l'input di una rete neruale, al fine di evitare certi problemi numerici, i quali possono essere risultati di uno scaling non uguale delle differenti variabili di input. Più comunemente, ogni variabile viene scalata in mdoo tale da avere la media aritmetica pari a 0 e la varianza pari a 1. Per ottenere questo, si computa a partire dal vettore di input dei trainign pattern $l$ della learning task $L$ per ogni neurone input $u_{k}$

$$
\mu_{k} = \frac{1}{|L|} \sum_{l \in L} ext_{u_{k}}^{(l)} \quad \text{ and }\quad \sigma_{k} = \sqrt{\frac{1}{|L|} \sum_{l \in L} (ext_{u_{k}}^{(l)}-\mu_k)^2} \quad ,
$$

cioè la [[Media Aritmetica]] e la [[Deviazione Standard]] degli input esterni.
Così, gli input esterni sono strasformati in questo modo:

$$
ext_{u_{k}}^{(l)(new)} = \frac{ext_{u_{k}}^{(l)(old)} -\mu_{k}}{\sigma_{k}}
$$

Questa normalizzazione può essere portata a termine come pre-procssing step o dalla funzione di output dei neuroni input.

Si è assunto finora che gli input e gli outpu di una rete neurale fossero numeri reali. Tuttavia, in pratica ci si trova spesso di fronte ad attributi nominali, come ad esempio colori.<br />
Per poterli processare, è necessario trasformarli in numeri e, nonostante possa apparire semplice il semplicemente numerare i valori degli attributi, questa conversione può portare ad effetti indesiderati, se i numeri non riflettono il naturale ordine dei valori.<br />
Una migliore opzione è l'**1-in-$n$ encoding**, nel quale ogni attributo nominate è assegnato a tanti neuroni quanto il suo valore: ogni neurone corrisponde ad un valore dell'attributo. Con ll'input di un training pattern, il neurone che corrisponde al valore ottenuto dell'attributo nominale viene impostato a 1, mentre tuti gli altri neuroni che appartengono allo stesso attributo sono settati a 0.

La forma più conosciuta e largamente usata delle reti neurali è il [[Multi-Layer Perceptron]].

--------------------------------------------------------------