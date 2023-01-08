## Introduzione ##
Dato un qualunque sistema, se si dispone di un insieme di leggi o regole che lo descrivono completamente (nel caso di un sistema fisico si avranno, ad esempio, delle equazioni differenziali), è possibile, in teoria, calcolarne in ogni momento lo stato e, quindi, prevederne l'evoluzione nel tempo. Tuttavia, è circostanza comune il non avere a disposizione una conoscenza completa di un certo sistema. Tale informazione:
1. può mancare;
2. può essere disponibile solamente in maniera parziale, cioè si possiede una conoscenza approssimata di essa.
 
L'**Intelligenza Artificiale** nasce con lo scopo di estrarre questa conoscenza direttamente dai dati a disposizione attraverso strumenti automatici.<br />
Questa tecnica si differenzia rispetto alla descrizione a priori del sistema in quanto simula quest'ultimo al fine di comprenderne a posteriori il suo comportamento. Per fare ciò, è stato utile studiare come gli esseri viventi interagiscano con l'ambiente circostante e come vi si adattino.<br />
Vari modelli di intelligenza artificiale sono stati proposti lungo la storia della disciplina ed una categorizzazione preliminare che si fa in letteratura è quella tra due tipi di modelli:
- **modelli simbolici**, in cui i dati vengono sottoposti a codifica e solo dopo manipolati. Storicamente questo è stato il primo approccio adottato;
- **modelli pre-simbolici**, in cui i dati vengono manipolati direttamente, senza la mediazione di una codifica. Fanno parte di questa famiglia le reti neurali, i sistemi fuzzy e gli algoritmi evolutivi.

----------------------------------------------------------------

## Reti neurali ##
Le **Artificial Neural Network** sono sistemi di information processing, i cui principi di struttura e azione sono ispirati dal sistema nervoso e dal cervello di animali e umani.<br />
Esse consistono di un largo numero di unità, le quali lavorano in parallelo.<br />
Un sinonimo comunemente usato per le reti neurali è il termine **modello connessionista**. Perciò, l'espressione "processing distribuito in parallelo" può spesso essere trovata in relazione alle reti neurali artificiali.<br />
I vantaggi delle reti neurali sono:
1. alta velocità di calcolo, grazie al parallelismo;
2. **Fault Tolerance**, grazie alla quale la rete rimane funzionale anche quando molti neuroni smettono di funzionare;
3. **Graceful Degradation**, cioè la performance degrada in maniera graduale se un numero crescente di neuroni termina di funzionare;
4. ottimo per l'apprendimento induttivo.

La ragione per la quale le reti neurali vengono studiate in Computer Science si basa sull'ipotesi che le macchine possano comportarsi in maniera intelligente. Questa ipotesi sostiene che il requisito fondamentale per ottenere un comportamento intelligente è l'abilità di manipolare simboli e strutture di simboli rappresentate da strutture fisiche, dove con simbolo si intende un token il quale si riferisce ad un oggetto o ad una situazione. 

**Physical Symbol System Hypotesis**: Un simbolo fisico ha i mezzi necessari e sufficienti per azioni intelligenti.

La classica intelligenza artificiale si concentra su forme simboliche per rappresentare la conoscenza e, in particolare, su logica dei predicati e delle proposizioni. Al contrario, le Artificial Neural Network non sono sistemi di simboli fisici ma, piuttosto, segnali più elementari, i quali, presi singolarmente, raramente hanno un significato chiaro. Di conseguenza, le reti neurali sono spesso definite come **sotto-simboliche**.

Non ci sono dubbi sui risultati ottenuti dalla classica Intelligenza Artificiale. Ciò nonostante, quando diventa necessario mimare la percezione (sentire, udire, ecc.), i computer performano scarsamente in confronto agli umani, almeno nei casi in cui si fa affidamento sulla rappresentazione simbolica: in questo caso i computer sono troppo lenti, poco flessibili e troppo poco tolleranti a rumore ed errori. Il problema è che, al fine di riconoscere pattern, la rappresentazione simbolica non è adatta. <br />
Piuttosto, le misurazioni necessitano di essere strutturate ed elencate prima di poter applicare in maniera efficace metodi simbolici. 

----------------------------------------------------------------

### Background biologico ###
Il sistema nervoso degli animali consiste del cervello, dei differenti sistemi sensoriali, i quali collezionano informazioni dalle differenti parti del corpo, e del sistema motorio, il quale controlla i movimenti.<br />
La parte principale del processing di informazioni avviene nel cervello e nel sistema nervoso centrale.<br />
Il cervello umano permette di analizzare in maniera sofisticata l'ambiente in cui si trova per agire nella maniera ritenuta migliore possibile. Tali analisi sono basate sul funzionamento del cervello stesso, su come esso estrae informazioni e su come quest'ultime interagiscano con le informazioni contenute in memoria, etc.<br />
Lo studio di questi processi è un campo di ricerca molto attivo e multidisciplinare nel quale convergono gli interessi della biologia, della medicina e della psicologia. Tali studi offrono dei modelli che simulano l'attività celebrale. Proprio questi modelli vengono poi utilizzati dall'informatica per offrire strumenti di predizione, ottimizzazione e problem-solving in vari campi applicativi (guida automatizzata, smart cities, etc.).<br />
Il successo di questi modelli è condizionato dal fatto che il cervello è considerabile alla pari di un potente computer capace di computare in parallelo grandi porzioni di dati.

![[neurone.jpeg]]

![[Biological neurons.png]]

Il cervello è composto da miliardi semplici unità, chiamate **neuroni**. Un neurone è una cellula la quale raccoglie e trasmette attività elettrica. I neuroni esistono in differenti forme e grandezze, ed è possibile risalire ad un neurone "prototipo" dal quale ricondursi a tutti i tipi di neuroni.<br />
Questi neuroni comunicano tra di loro inviando informazioni sotto forma di segnali di attivazione l'un l'altro, lungo connessioni orientate.<br />
Il neurone a sua volta è costituito da:
-   il **corpo cellulare**, il quale contiene il nucleo. Viene anche chiamato **soma**; 
-   i **dendriti**, i quali sono filamenti di scarsa lunghezza e fortemente ramificati, i quali si estendono dal corpo cellulare; 
-   l'**assone**: un lungo filamento che parte dal corpo centrale della cellula.

L'assone e i dendriti differiscono per la struttura e per le proprietà della **membrana cellulare**. In particolare, l'assone è spesso coperto da una **guaina mielinica**.<br />
Gli assoni sono i percorsi orientati lungo i quali i neuroni comunicano tra di loro e ciascuno di questi assoni conduce ai dendriti di altri neuroni. Alla sua terminazione, l'assone è fortemente ramificato e possiede alla fine di queste ramificazioni dei **bottoni sinaptici** o **bottoni terminali**.<br />
Ciascun bottone terminale entra quasi a contatto con un dendrite o con il corpo cellulare di un altro neurone. Questo gap che viene a formarsi è chiamato **sinapsi**.<br />
La più comune forma di comunicazione tra neuroni avviene quando un bottone terminale dell'assone rilascia determinate sostanze chimiche, i **neurotrasmettitori**, i quali agiscono sulla membrana del dendrite ricettore e cambiano la sua polarizzazione. A seconda del tipo di neurotrasmettitore rilasciato, la differenza di potenziale lato dendrite potrebbe essere ridotta oppure aumentata. Le sinapsi che riducono la differenza di potenziale vengono chiamate **eccitatorie** mentre quelle che la incrementano sono chiamate **inibitorie**.<br />
Il cambiamento del potenziale elettrico causato da una singola sinapsi è poco significativo ma questo effetto può accumularsi (considerando gli stimoli eccitatori come positivi e quelli inibitori come negativi). Se l'input netto eccitatorio è sufficientemente grande, la differenza di potenziale nel corpo della cellula può essere ridotto in maniera significativa e, se questa riduzione ha magnitudine sufficiente, la base dell'assone viene depolarizzata.<br />
Come conseguenza, l'interno della cellula diviene temporaneamente più positivo dell'esterno. L'improvviso cambio di potenziale, denominato **potenziale d'azione**, si propaga lungo l'assone. Quando questo impulso nervoso raggiunge la fine dell'assone, causa il rilascio dei neurotrasmettitori dai bottoni terminali, inducendo, quindi, un cambiamento del potenziale elettrico nel neurone ricettore.<br />
Nel sistema nervoso umano, l'informazione è codificata da quantità in continuo cambiamento, cioè dal potenziale elettrico della membrana di un neurone e dal numero di impulsi nervosi che un neurone trasmette per secondo (o **firing rate**).

----------------------------------------------------------------

### Threshold logic unit ###
Come già menzionato, le Artificial Neural Network sono ispirate alla struttura e ai principi secondo cui operano il sistema nervoso ed, in particolare, il cervello di animali ed umani. 
Per implementare una rete neurale artificiale occorre trovare, quindi, un analogo del neurone. La struttura che emula tale compito viene denominata **threshold logic unit** o **neurone di McCulloch e Pitts** (in seguito **TLU**).<br />
Una TLU è una semplice processing unit costituita da $n$ variabili di input $x_1 \dots x_n$ e un output $y$. Ad ogni unità viene assegnata una **threshold** $\theta$ e ad ogni variabile di input un peso $w_i$ dove $i \in \{1, \dots ,n\}$, il quale rappresenta la rilevanza di quel determinato input al fine della computazione.<br />
L'output della TLU viene calcolato secondo la seguente formula:

$$y =  \begin{cases}
    1 & \text{se } \sum w_ix_i \geq \theta \\
    0 & \text{altrimenti} 
   \end{cases}$$

Attraverso questo semplice meccanismo è possibile simulare alcune funzioni Booleane. Infatti, se fosse necessario eseguire la computazione dell'AND logico tra due input $x_1$ e $x_2$, risulterebbe sufficiente assegnare valori ai pesi e alla threshold in modo tale che essi soddisfino il seguente sistema di disequazioni:

$$\begin{cases}
    w_1 \cdot x_1 + w_2 \cdot x_2 \geq \theta \\
    w_1 \cdot x_1 < \theta\\
    w_2 \cdot x_2 < \theta
   \end{cases}$$

Risulta evidente che l'unica circostanza in cui l'output della TLU verrà posto ad $1$ sarà quando entrambi gli input varranno $1$. Inoltre, si noti che esistono varie scelte possibili di pesi e threshold tali per cui le disuaglianze siano verificate.

----------------------------------------------------------------

### Interpretazione geometrica ###
La condizione che calcola l'output della TLU ricorda l'equazione di un iperpiano (ovvero un piano in $n$ dimensioni):

$$\sum_{i = 1}^{n} w_ix_i - \theta = 0$$

Ricordando il caso precedente dell'AND logico e considerando i valori di input come coordinate in uno spazio bidimensionale, è possibile osservare che la retta definita da $x_1w_1 + x_2w_2 - \theta = 0$ corrisponde al confine che separa quelle combinazioni di valori i quali restituiscono come output $1$ da quelle che, invece, restituiscono $0$.<br />
Naturalmente, le computazioni delle TLU con più di due input possono essere interpretate geometricamente anch'esse.<br />
Da quanto detto, tuttavia, si può dedurre che una singola TLU potrà computare solo funzioni **linearmente separabili**. Due insiemi di punti in uno spazio Euclideo vengono definiti linearmente separabili  se e solo se esiste almeno un punto, una retta, un piano o iperpiano (dipendentemente dalla dimensione dello spazio Euclideo), tale che tutti i punti di un insieme giacciano da un lato e tutti i punti dell'altro insieme giacciano dall'altro lato di questo punto, retta, piano o iperpiano.<br />
Sfortunatamente, non tutte le funzioni sono linearmente separabili.

![[geometria.png]]

Un insieme di punti $X$ in uno spazio euclideo si dice **convesso** se e solo se non è vuoto, è connesso e, per ogni coppia di punti appartenenti all'insieme, ogni punto del segmento che li congiunge appartiene anch'esso all'insieme.

Un **guscio convesso** di un insieme di punti $X$ in uno spazio euclideo è il più piccolo insieme convesso che contiene $X$.

Due insiemi di punti $X$ e $Y$ si dicono **linearmente separabili** se e solo se i loro gusci convessi sono tra loro disgiunti.

Questo significa che, già all'interno delle funzioni Booleane, ne esistono alcune che non possono essere simulate da una TLU. Un esempio di ciò è la doppia implicazione.<br /> 
Sebbene solo due funzioni Booleane a due argomenti non siano linearmente separabili, il numero di funzioni linearmente separabili diminuisce rapidamente al crescere degli argomenti ed infatti, per un numero di argomenti arbitrariamente grande, una singola TLU non può calcolare praticamente nessuna funzione.

![[doppiaimplicazione.png]]

Il problema può essere ovviato attraverso la costruzione di network di TLU più complessi.<br />
Come esempio, si consideri il network che simula la doppia implicazione.

![[netTLU.png]]

E' risaputo, infatti, che la congiunzione di due variabili Booleane sia linearmente separabile.<br />
Può essere dimostrato, inoltre, che tutte le funzioni Booleane con un numero arbitrario di input possano essere computate da reti di TLU semplicemente sfruttando delle equivalenze logiche al fine di dividere queste funzioni in un modo tale che tutte le sottofunzioni occorrenti siano linearmente separabili. 

----------------------------------------------------------------

### Training delle TLU ###
L'interpretazione geometrica fornisce un'intuizione su come costruire una TLU avente 2 o 3 input, ma non è  un metodo scalabile nè automatizzato. Infatti, è impossibile automatizzare questo metodo, perchè si è in grado di trovare una linea di separazione accettabile esclusivamente tramite "ispezione visiva" dei set di punti da separare.<br />
E' necessario, quindi, evolvere una TLU affinchè converga in modo autonomo ad una soluzione.<br />
Un algoritmo che permette di automatizzare il processo è il seguente: 
 1. inizializzare i pesi e la threshold con valori randomici;
2. determinare l'errore nell'output per un insieme di controlli. L'errore viene calcolato come una funzione dei pesi e della threshold $e(w_1,\dots,w_n,\theta)$;
3. aggiornare i pesi e la threshold per correggere l'errore;
4. iterare finchè l'errore si annulla.

Si osservi il comportamento dell'algoritmo nel caso più semplice, ovvero il caso nel quale si hanno una threshold ed un unico input (quindi, un unico peso associato). Si presupponga che si voglia allenare la TLU a calcolare la negazione Booleana.<br />
Sia $x$ l'input, $w$ il peso associato e $\theta$ la threshold. Allora l'output $y$ sarà definito come:

$$y = \begin{cases}
    1 & \text{se } 0w = 0 \geq \theta \\
    0 & \text{se } 1w = w < \theta
   \end{cases}$$

Si calcoli la funzione errore al variare di $w$ e $\theta$. Nel caso in cui $x = 0$ l'errore sarà $0$ per un $\theta$ negativo e $1$ per un $\theta$ positivo. Il peso non avrà, infatti, alcuna influenza perchè viene annullato nella moltiplicazione con l'input.<br />
Quando, invece, $x = 1$, si avrà che la funzione dipenderà da entrambi i parametri.

![[error1.png]]

La funzione di errore così calcolata non può essere usata direttamente nella computazione perchè è composta da plateau e, quindi, non è ovunque derivabile. La soluzione è quella di calcolare la funzione di errore in modo tale che offra una misura di quanto sia sbagliata la relazione tra pesi e threshold. Si otterrà così una funzione di errore che, seppur ancora non differenziabile, lo sarà localmente nei punti in cui l'errore si discosta da $0$. Ciò che l'algoritmo farà per correggere l'errore, dunque, sarà discendere verso l'area dove la funzione di errore si annulla. Questo è possibile esattamente perché è stato scelto di utilizzare una funzione derivabile nei punti di interesse. E' sempre possibile calcolare la direzione migliore da seguire affinchè ci si muova nella direzione del plateau più basso, ovvero verso l'errore nullo.<br />
Le regole di adattamento possono essere applicate in due modi:
-  **online learning**, ovvero l'opzione di adattare i pesi e threshold ad ogni singolo step di training; 
- **batch learning**, ovvero l'opzione nel quale i cambiamenti vengono aggregati in **learning/training epoch** o **epoche**. Al termine di queste epoche, i cambiamenti aggregati vengono applicati.

![[error2.png]]

Si definisce di seguito la **delta rule** o **procedura di Widrow-Hoff** per allenare le TLU:

Sia $\mathbf{v}$ = ($x_1, \dots, x_n$) il vettore di input di una TLU, $o$ l'output atteso e $y$ il valore attuale. Se $o = y$, il training termina. Al contrario, per ridurre l'errore, verranno computati nuovi valori per la threshold e i pesi nel seguente modo:

$$\theta^{(new)} = \theta^{(old)} + \Delta\theta \text{ con } \Delta\theta = -\eta(o - y)$$
$$\forall i \in \{1, \dots, n\}:w_i^{(new)} = w_i^{(old)} + \Delta w_i \text{ con } \Delta w_i = \eta(o - y)x_i$$

dove $\eta$ è il **learning rate**. Più questo valore è alto, più i cambiamenti su pesi e sulla threshold sono drastici.

Ora verrano mostrari alcuni esempi di training, partendo dai valori $\theta = 3/2$, $w = 2$ e learning rate $\eta= 1$.

![[Online training ex.png]]

![[Batch training ex.png]]

E' stato osservato precedentemente, tuttavia, che non tutte le funzioni possono essere computate.<br />
Per le funzioni linearmente separabili, esiste un teorema che garantisce che, applicando la **delta rule**, l'algoritmo converga ad una soluzione.<br />
Sia $L = \{(\mathbf{v}_1,o_1), \dots (\mathbf{v}_n,o_n)\}$ una sequenza di pattern di allenamento per la TLU, dove $\mathbf{v}_i$ identifica l'$i$-esimo vettore di input e $o_i$ identifica l'$i$-esimo output atteso. Siano inoltre $L_0 = \{(\mathbf{v},o) \in L | o = 0\}$ e $L_1 = \{(\mathbf{v},o) \in L | o = 1\}$ rispettivamente gli insiemi delle coppie di pattern che hanno come output atteso $0$ e quelle che hanno come pattern atteso $1$.<br />
Se $L_0$ e $L_1$ sono linearmente separabili, allora esiste un $\mathbf{w}$ vettore di pesi e una threshold $\theta$ tale che:

$$\forall (\mathbf{v},0) \in L_0: \mathbf{w}\mathbf{v}< \theta$$
$$\forall (\mathbf{v},1) \in L_1: \mathbf{w}\mathbf{v}\geq \theta$$

Negli esempi precedenti, si è codificato il valore Booleano *falso* come $0$ e *vero* come $1$. Questa scelta ha lo svantaggio che, nel caso del valore *falso*, i pesi corrispondenti non possano essere modificati perchè la formula contiene l'input come fattore.<br />
Per evitare il problema si ricorre in letteratura ad una diversa codifica chiamata **ADALINE** (**ADAptive LINear Element**), dove *falso* viene ad assumere il valore $-1$
e il *vero* $1$.<br />
Si osservi che questa procedura di allenamento vale solo per le singole TLU nonostante si sia osservato che le TLU possono computare solo funzioni linearmente separabili. Sebbene questo inconveniente si possa evitare prendendo in esame network di TLU, questa procedura non si estende naturalmente a quel caso.

----------------------------------------------------------------

### Artificial neural network ###
Un'**artificial neural network** (in breve **ANN**) può essere rappresentata tramite un [[Grafo]] diretto $G = (U,C)$ dove i vertici $u \in U$ sono detti neuroni e gli archi $c \in C$ sono le connessioni tra le varie unità.<br />
L'insieme dei nodi $U$ può essere partizionato in tre sottoinsiemi:
- $U_{(in)}$: è l'insieme dei neuroni di input, i quali ricevono in modo diretto l'informazione dall'ambiente;
- $U_{(out)}$: è l'insieme dei neuroni di output, i quali sono i soli nodi a inviare informazioni all'esterno;
- $U_{(hidden)}$: è l'insieme dei neuroni interni, i quali propagano la computazione.

$$U = U_{in} \cup U_{out} \cup U_{hidden}, $$
$$
U_{in} \neq \emptyset, \quad U_{out} \neq \emptyset, \quad U_{hidden} \cap (U_{in} \cup U_{out}) = \emptyset$$

![[ANN.png]]

Ogni connessione $(v,u) \in C$ possiede un peso $w_{uv}$ che definisce l'importanza del dato originato da $v$ per il neurone $u$. Ogni neurone $u \in U$ possiede, inoltre, quattro variabili: 
- il **network input** $net_u$;
- la **activation** $act_u$; 
- l'**output** $out_u$; 
- l'**external input** $ext_u$.

Le prime tre variabili vengono calcolate in ogni momento dell'evoluzione dell'ANN grazie a tre funzioni associate:
1) La **network input function** $f^u_{net}$, la quale calcola la somma pesata degli input;
2) La **activation function** $f^u_{act}$, della quale ne esistono vari modelli (gaussiana, sigmoide, etc.) a seconda dell'applicazione;
3) La **output function** $f^u_{out}$, la quale definisce l'output a seconda che il neurone venga attivato o meno.

La network input function $f_{net}^{(u)}$ calcola il network input $net_{u}$ dagli input $in_{uv_{1}}, ..., in_{uv_{n}}$, i quali corrispondono agli output $out_{v_{1}}, ..., out_{v_{n}}$ del neurone predecessore del neurone $u$, e dai pesi delle connessioni $w_{uv_{1}}, ..., w_{uv_{n}}$.<br /> Questa computazione può essere influenzata da dei parametri addizionali, $\sigma_{1}, ..., \sigma_{n}$.<br />
A partire dal network input, da un certo numero di parametri $\theta_{1}, ..., \theta_{k}$ e, potenziamente, dal feedback della corrente attivazione del neurone $u$, la funzione di attivazione $f_{act}^{(u)}$ calcola la nuova attivazione $act_{u}$ del neurone $u$. Infine, la funzione di output $f_{out}^{(u)}$ calcola l'output del neurone $u$ a partire dalla sua attivazione. L'input esterno $ext_{u}$ definisce l'iniziale attivazione del neurone $u$ nel caso si tratti di un neurone input.

Il numero di argomenti addizionali della network input function $k_{1}(u)$ e il numero di argomenti dell'activation function $k_{2}(u)$ dipendono dal tipo di queste funzioni e dalla struttura del neurone.<br />
Tipicamente, la network input function ha solo $2|pred(u)|$ argomenti (cioè gli output dei neuroni predecessori e i corrispondenti pesi delle connessioni), poichè non viene aggiunto nessun parametro.<br />
La funzione di attivazione, solitamente, necessita di due argomenti: il network input e un parametro, il quale può essere, per esempio, un valore soglia.
La funzione output, dall'altro lato, prende solamente l'attivazione come suo argomento e, di solito, ha lo scopo di scalare l'output in un range di output desiderati, comunemente tramite linear mapping.

Se il grafo che rappresenta l'ANN è aciclico si parla di **feed forward network** e la computazione procede in modo unidirezionale da $U_{(in)}$ a $U_{(out)}$ seguendo l'ordine topologico del network. Nel caso in cui, invece, il grafo contenga un ciclo, allora si parla di **recurrent network**.

I processi all'interno di un ANN si dividono in due fasi:
1.  La **input phase**, dove gli input esterni vengono acquisiti dai neuroni di input;
2.  La **work phase**, dove gli input esterni vengono spenti e un nuovo output viene computato da ogni neurone. La work phase continua finchè gli output raggiungono la stabilità o si raggiunge un timeout.

![[rnn1.png]]

La fase di input ha lo scopo di inizializzare la rete. In questa fase, le attivazioni dei neuroni input sono impostate al valore degli input esterni corrispondenti. Le attivazioni dei neuroni rimanenti sono inizializzate arbitrariamente, tipicamente a $0$. Inoltre, la funzione di output va applicata alle attivazioni inizializzate. Di conseguenza, questa inizializzazione fa sì che tutti i neuroni producano un output iniziale.<br />
Nella work phase, gli input esterni vengono scollegati, mentre le attivazioni e gli output dei neuroni vengono ricalcolati (potenzialmente molteplici volte). Per ottenere ciò, la network input function, la activation function e la output function sono applicate come descritto precedentemente. Se un neurone non riceve alcun network input, poichè privo di predecessori, mantiene semplicemente la sua attivazione (e, perciò, anche il suo output).<br />
Questo è importante solo per i neuroni input in un feed forward network.

Le ricomputazioni terminano nel caso in cui o il network raggiunga uno stato stabile (cioè uno stato in cui ulteriori ricomputazioni non modifichino ulteriormene l'output dei neuroni) o se sia stato eseguito un numero predefinito di ricomputazioni.
L'ordine temporale delle ricomputazioni, generalmente, non è fissato.<br />
Per esempio, tutti i neuroni di un network possono ricomputare il proprio output allo stesso tempo (**update sincrono**). E' possibile, inoltre, definire un ordine di neuroni nel quale viene computato il nuovo output (**update asincrono**). In questo caso, i nuovi output degli altri neuroni possono essere già stati utilizzati come input di computazioni successive.<br />
Per quanto riguarda le reti feed forward, le computazioni solitamente seguono l'ordinamento topologico.<br />
Per le recurrent network, l'output finale dipende dall'ordine nel quale i neuroni ricomputano l'output e da quante ricomputazioni sono state eseguite.<br />
Nel caso delle recurrent neural network, potrebbe, però, accadere che non si giunga mai ad uno stato stabile a seconda di quale ordine di update dei neuroni si scelga di seguire. 

----------------------------------------------------------------

### Training delle ANN ###
Si è osservato in precedenza che è possibile allenare in modo automatico una singola TLU grazie alla delta rule. Questo procedimento non può essere generalizzato alle ANN, tuttavia, per quanto riguarda il training, ci si basa sui medesimi principi: calcolare correzioni ai pesi ed alle threshold dei singoli neuroni e aggiornarli di conseguenza.<br />
A seconda del tipo dei dati utilizzati per allenare le ANN e a seconda dei criteri di ottimizzazione, è possibile distinguere due tipi di apprendimento:
1. **fixed learning task** o apprendimento con supervisione;
2. **free learning task** o apprendimento senza supervisione.

Una **Learning Task Fissata** $L_{fixed}$ per una rete neurale con $n$ neuroni input, $U_{in} = \{ u_{1}, ..., u_{n} \}$, e $m$ neuroni output, $U_{out} = \{v_{1}, ..., v_{m}\}$, è un insieme di **training pattern** $l = (\textbf{i}^{(l)}, \textbf{o}^{(l)})$, ognuno consistente di un **vettore di input** $\textbf{i}^{(l)} = (ext_{u_{1}}^{(l)}, ..., ext_{u_{n}}^{(l)})$ e un **vettore di output** $\textbf{o}^{(l)} = (o_{v_{1}}^{(l)}, ..., o_{v_{m}}^{(l)})$.<br />
Nel caso di una fixed learning task si avrà, quindi, un insieme $L=\{(\mathbf{i}_1,\mathbf{o}_1),\dots,(\mathbf{i}_k,\mathbf{o}_k)\}$ di coppie le quali assegnano ad ogni input un output desiderato. Una volta completato il processo di apprendimento, la ANN dovrebbe essere in grado di restituire l'output adeguato rispetto all'input che le viene presentato. Data una Learning Task Fissata, l'obiettivo è allenare una rete neurale in modo che produca, per tutti i training pattern $l \in L_{fixed}$, gli output contenuti nel vettore di output $\textbf{o}^{(l)}$ se gli input esterni del corrispondente vettore di input $\textbf{i}^{(l)}$ sono dati in pasto al network. In pratica, però, questo accade raramente e bisogna accontentarsi di un risultato approssimativo.<br />
Per giudicare in che misura una ANN si avvicini alla soluzione della fixed learning task si adotta una funzione di errore, la quale misura quanto l'output ottenuto coincida con l'output desiderato nel training pattern.
Questa funzione di errore è comunemente definita come la somma delle deviazioni dell'output desiderato e dell'output ottenuto al quadrato, per tutti i traning pattern e tutti i neuroni di output.<br />
L'errore di una rete neurale in riferimento a una learning task fissata $L_{fixed}$ è definito come:

$$e = \sum_{l \in L_{fixed}} e^{(l)} = \sum_{v \in U_{out}} e_{v} = \sum_{l \in L_{fixed}} \sum_{v \in U_{out}} e_{v}^{(l)}$$

dove

$$e^l_v = (o^l_v - out_v^{l})^2$$

è l'errore individuale per una particolare coppia $l$ e per un neurone di output $v$.<br />
Il quadrato delle differenze viene scelto per vari motivi. In primo piano, è chiaro che non è possibile semplicemente sommare le deviazioni direttamente, poichè le deviazioni positive e negative potrebbero cancellarsi a vicenda, producendo quindi un'impressione sbagliata dell'attuale bontà del network.<br />
Tuttavia, il quadrato della deviazione dell'output desiderato e dell'output ottenuto ha almeno due vantaggi rispetto al valore assoluto:
- il quadrato è continuamente differenziabile ovunque, mentre la derivata del valore assoluto non esiste/è discontinua in 0. E' desiderabile che la funzione di errore sia continuamente differenziabile, perchè questo semplifica la derivazione delle regole di update per i pesi;
- Grandi deviazioni dall'output desiderato sono pesate in maniera più severa, così che ci sia una tendenza la quale permetta di evitare durante il training grandi deviazioni individuali dal valore desiderato.
 
Una **Learning Task Libera** $L_{free}$ per una rete neurale con $n$ neuroni input $U_{in} = \{ u_{1}, ..., u_{n} \}$, è un insieme di **training pattern** $l = (\textbf{i}^{(l)})$, ognuno consistente di un **vettore di input** $\textbf{i}^{(l)} = (ext_{u_{1}}^{(l)}, ..., ext_{u_{n}}^{(l)})$.<br />
Nel free learning task si avrà, quindi, solo una sequenza di input $L = \{\mathbf{i}_1, \dots, \mathbf{i}_n\}$. Questo comporta che, a differenza del fixed learning task, non si avrà modo di calcolare una funzione di errore rispetto ad un output atteso.<br />
Data una learning task libera, l'aspetto più importante al fine di allenare una rete neurale è il modo in cui venga misurata la similarità tra i traning pattern. Questa similarità può essere definita, per esempio, con l'aiuto di una funzione di distanza.<br />
Un caso particolare potrebbe essere quello del **clustering** dei vettori di input simili, così che per tutti i vettori in un cluster venga prodotto lo stesso output.<br />
Qualsiasi processo di apprendimento si scelga, esistono alcune norme comuni che è utile seguire. Una di queste best practice riguarda il normalizzare il vettore di input (**normalizzazione z-score**). Comunemente, si scala tale vettore in modo che esso abbia media uguale a $0$ e varianza uguale ad $1$. Per fare ciò, è necessario calcolare per ogni neurone $u_k \in U_{(in)}$, a partire dal vettore di input dei training patter, la media aritmetica $\mu_k$ e la deviazione standard $\sigma_k$ degli input esterni:

$$\mu_k = \frac{1}{|L|}\sum_{l \in L} ext^l_{u_k} \quad \quad \sigma_k = \sqrt{\frac{1}{|L|}\sum_{l \in L} (ext^l_{u_k} - \mu_k)^2}$$

Quindi gli input esterni vengono ricalcolati secondo questa formula:

$$ext^{new}_{u_k} = \frac{ext^{old}_{u_k} - \mu_k}{\sigma_k}$$
Questa normalizzazione può essere portata a termine come pre-processing step o dalla funzione di output dei neuroni input.

Si è assunto finora che gli input e gli output di una rete neurale fossero esclusivamente numeri reali. Tuttavia, nella pratica ci si trova spesso di fronte ad attributi nominali come, ad esempio, colori.<br />
Per poterli processare, è necessario trasformarli in numeri e, nonostante il numerare i valori degli attributi possa apparire semplice, questa conversione può portare ad effetti indesiderati se i numeri non riflettono il naturale ordine dei valori.<br />
Una migliore opzione è l'**$1$-in-$n$ encoding**, nel quale ogni attributo nominale è assegnato a tanti neuroni quanti i suoi possibili valori: ogni neurone corrisponde ad un valore dell'attributo. Con l'input di un training pattern, il neurone che corrisponde al valore dell'attributo nominale ottenuto viene impostato a $1$, mentre tutti gli altri neuroni che appartengono allo stesso attributo ma a valori diversi vengono settati a $0$. In questo modo solamente $1$ neurone su $n$ viene impostato ad $1$, mentre i rimanenti a $0$, spiegando così il nome di questo encoding.

----------------------------------------------------------------

### Multi-layer perceptron ###
![[MLP.png]]

Una delle prime ANN sviluppate furono i **multi-layer perceptron** (in seguito **MLP**). I MLP sono particolari feed-forward network in cui le unità base sono organizzate in **layer** ed ogni layer presenta connessioni solo con il layer successivo. Questo permette di minimizzare il fenomeno delle continue ricomputazioni che avverrebbero durante la propagazione del segnale nei normali feed-forward network.<br />
Un $r$-layer perceptron avrà, quindi, un input layer e un output layer totalmente disgiunti e $r-2$ layer nascosti, disgiunti gli uni dagli altri.

$$U_{in} \cap U_{out} = \emptyset $$
$$U_{hidden} = U_{hidden}^{(1)} \cup \dots \cup U_{hidden}^{(r-2)}, \quad \forall 1\leq i<j\leq r-2: \quad U_{hidden}^{(i)} \cap U_{hidden}^{(j)} = \emptyset$$

La network input function di ogni neurone $u \in U_{(hidden)} \cup U_{(out)}$ viene calcolata come la somma pesata degli input, cioè come:
$$f^u_{net}(\mathbf{w}_u,\mathbf{i}_u) = \sum_{v \in pred(u)} w_{uv}out_v$$
L'activation function di ogni neurone hidden, invece, è una cosiddetta **funzione sigmoide**, ossia una funzione monotona non descrescente tale che:
$$f: \mathbb{R} \to [0,1] \quad \text{ con } \lim_{x\to-\infty}f(x) = 0 \quad \text{ e } \lim_{x\to\infty}f(x) = 1$$

![[step.png]]

![[semilinear.png]]

![[sineup.png]]

![[logistic.png]]

La funzione di attivazione di ogni neurone di output, invece, può essere sia una sigmoide oppure una semplice funzione lineare.<br />
La struttura a layer di un MLP suggerisce che si possa descrivere il network con l'aiuto di una matrice dei pesi. In questo modo, la computazione del MLP può essere rappresentata attraverso la moltiplicazione tra matrici e vettori. Tuttavia, non si è utilizzata una matrice per l'intero network, ma una per ogni singolo layer.<br />
Siano $U_1 = \{ v_1, \dots, v_n \}$ e $U_2 = \{ u_1, \dots, u_m \}$ due layer consecutivi di neuroni. I pesi delle loro connessioni sono codificati in una matrice $W$ di dimensioni $n \times m$:

$$W = \begin{pmatrix}
  w_{u_1v_1} & w_{u_1v_2} & \cdots & w_{u_1v_n} \\
  w_{u_2v_1} & w_{u_2v_2} & \cdots & w_{u_2v_n} \\
  \vdots  & \vdots  & \ddots & \vdots  \\
  w_{u_mv_1} & w_{u_mv_2} & \cdots & w_{u_mv_n} 
 \end{pmatrix}$$

Se due neuroni $u_i$ e $v_j$ non sono connessi, è sufficiente porre $w_{u_iv_j} = 0$.<br />
Il vantaggio di questa matrice sta nel fatto che rende possibile scrivere il network input di un layer come:

$$\mathbf{net}_{U_2} = W \mathbf{in}_{U_2} = W \mathbf{out}_{U_1}$$

dove $\mathbf{net}_{U_2} = (net_{u_1}, \dots, net_{u_m})^\top$ e $\mathbf{in}_{U_2} = \mathbf{out}_{U_1} = (out_{v_1}, \dots, out_{v_n})^\top$.<br />
Fino ad adesso si è osservato che le ANN possono rappresentare funzioni Booleane. Invece, per quanto riguarda le funzioni a valori continui, ogni funzione Riemann-integrabile può essere approssimata con precisione arbitraria da un MLP avente quattro layer.

![[approx.png]]

![[riemann.png]]

Ogni funzione, infatti, può essere approssimata da una step function. Ad ogni pivot $x_i$ verrà associato nel MLP un neurone nel primo hidden layer. Nel secondo hidden layer si utilizzerà un neurone per ogni scalino, il quale riceverà input dai due neuroni del primo livello assegnati ai valori $x_i$ e $x_{i+1}$, i quali definiscono i bordi dello scalino stesso. A questo punto, si sceglieranno pesi e threshold in modo tale da attivare il neurone se e solo se l'input è maggiore di $x_i$ e
minore di $x_{i+1}$.<br />
La funzione di attivazione del neurone di output utilizzata in questo caso è la funzione di identità, in modo tale da restituire come output solamente il valore dell'approssimazione proveniente dai neuroni dell'ultimo hidden layer.<br />
Dovrebbe essere chiaro che l'approssimazione può crescere a piacere semplicemente aggiungendo neuroni e diminuendo la lunghezza dei gradini.<br />
E' possibile, inoltre, risparmiare un layer utilizzando come peso della connessione al neurone di output nel calcolo non l'altezza assoluta ma quella relativa. E' utile notare, comunque, che questo risultato non ha natura costruttiva, ossia non istruisce su come deve essere composto un MLP che approssimi con una data accuratezza una certa funzione. Tutto ciò che afferma il teorema è che limitare il numero di layer non pregiudica la proprietà del MLP di essere un **approssimatore universale**.

Una qualsiasi funzione integrabile secondo Riemann può essere approssimata con accuratezza arbitraria da un perceptron a tre-layer. Questa proposizione richiede soltanto che la funzione da rappresentare sia integrabile secondo Riemann. Non richiede, infatti, che sia continua.<br />
In questa proposizione, inoltre, l'errore di approssimazione è misurato dall'area tra la funzione da approssimare e tra l'output del perceptron. Questa area può essere ridotta in maniera arbitraria, come già ripetuto, tramite l'incremento del numero di neuroni.<br />
Ciò nonostante, questo non garantisce che, per un multi-layer perceptron, il quale ottiene un certa accuratezza, la differenza tra il suo output e la funzione da approssimare sia minore di un certo errore ovunque. La funzione, per esempio, potrebbe possedere uno spike molto sottile, il quale non è catturato da nessuno scalino.

![[Limits of the preposition.png]]

In un caso del genere, l'area tra la funzione da rappresentare e l'output del perceptron è piccola (poichè lo spike è sottile e quindi contiene solamente un'area piccola), ma, nel punto dello spike, la deviazione dell'output dal vero valore della funzione può, tuttavia, essere cosiderevole.

Naturalmente, l'idea di approssimare una funzione data tramite una funzione a scalini può essere trasferita ed applicata a funzioni con multipli argomenti: lo spazio di input viene diviso in rettangoli, box o iperbox, ad ognuno dei quali viene assegnato un valore di funzione.

Nonostante i multi-layer perceptron abbiano un enorme potere espressivo, essi hanno poca utilità nella pratica. Al fine di ottenere un'adeguata accuratezza, è necessario scegliere funzioni a scalini con scalini di larghezza sufficentemente piccola. Questo, perciò, forza a costruire un perceptron con un numero di neuroni potenzialmente altissimo.

----------------------------------------------------------------

### Regressione ###
Si è osservato come per allenare un'ANN occorra minimizzare la funzione di errore, la quale si calcola solitamente come il quadrato della differenza tra output atteso ed output attuale. Per minimizzare questa funzione si effettuano adattamenti ai pesi ed ai parametri della funzione di attivazione. Questo approccio conduce al **metodo dei quadrati minimi**, conosciuto anche come **regressione**.<br />
La regressione è una tecnica molto usata in analisi e in statistica per estrapolare la retta (o, più in generale, il polinomio) che meglio approssima la relazione esistente in un insieme di dati/osservazioni. Descritto in maniera formale, se $G = \{(\mathbf{w}_0,y_0), \dots, (\mathbf{w}_n,y_n)\}$ è il dataset e si immagina l'esistenza di una relazione funzionale tra il vettore di input $\mathbf{w}_i$ e l'ascissa $y$, allora la regressione permetterà di trovare i parametri di quella funzione. A seconda del diverso genere di funzione si avranno diverse forme di regressione.

#### Regressione lineare ####
Se ci si aspetta che le due quantità $x$ e $y$ esibiscano una dipendenza lineare, allora sarà necessario identificare i parametri $a$ e $b$ che individuino la retta $y = g(x) = a + bx$. In generale, tuttavia, non sarà possibile trovare una singola retta che passi per tutti i punti del dataset. Sarà necessario trovare la retta che devi dai punti il meno possibile e che, quindi, minimizzi l'errore calcolato come segue:

$$F(a,b) = \sum(g(x_i) - y_i)^2 = \sum(a + bx_i - y_i)^2$$

Il teorema di Fermat afferma che una condizione necessaria perchè un minimo della funzione $F(a,b)$ esista è che la derivata parziale si annulli in entrambi i parametri:

$$\frac{\partial F}{\partial a} = \sum 2(a + bx_i - y_i) = 0$$

$$\frac{\partial F}{\partial b} = \sum 2(a + bx_i - y_i)x_i = 0$$

La soluzione così trovata sarà unica a meno che ogni valore $x_i$ sia identico.<br />
La retta risultante è chiamata **retta di regressione**.

----------------------------------------------------------------

### Regressione polinomiale e multilineare
Il metodo precedente può essere esteso in modo ovvio a polinomi di ordine arbitrario. In questo caso, si prende come ipotesi che la funzione indotta dal dataset approssimi un polinomio di ordine $n$:

$$y = p(x) = a_o + a_1x + \dots + a_nx^n$$

Si cercherà, quindi, di minimizzare la funzione $F$ tale che:

$$F(a_1,\dots,a_n) = \sum(p(x_i) - y_i)^2 = \sum(a_o + a_1x + \dots + a_nx^n -y_i)^2$$

Come nel caso della regressione lineare, la funzione potrà essere minimizzata solo se all'annullarsi delle derivate parziali rispetto ai parametri $a_i$:

$$\frac{\partial F}{\partial a_1} = 0 \quad \dots \quad \frac{\partial F}{\partial a_n} = 0$$

Inoltre, non ci sono limitazioni che impongono di calcolare funzioni ad un solo argomento. Con alcune minori modifiche questo metodo è capace di approssimare funzioni in un numero arbitrario di argomenti. Per questo motivo si definisce **regressione multilineare**.

$$z = f(x, y) = a + bx + cy$$

----------------------------------------------------------------

### Regressione logistica
Nella situazione in cui il dataset non sia approssimato con sufficiente accuratezza da una funzione polinomiale, è possibile dover ricorrere a funzioni di generi diversi. Data, per esempio, una funzione della forma:

$$y = ax^b$$

è possibile trasformarla in un'equazione lineare applicando l'operazione di logaritmo:

$$ln(y) = ln(a) + b \cdot ln(x)$$

Questa equazione può essere utilizzata per calcolare una retta di regressione. Sarà necessario calcolare il logaritmo dei punti dati $(x_{i}, y_{i})$ e procedere con i valori trasformati.<br />
Nel caso delle ANN, si pone, in particolare, il focus sulla **funzione logistica**:

$$y = \frac{Y}{1 + e^{a+bx}}$$

dove $Y$, $a$ e $b$ sono delle costanti.<br />
Siccome molte ANN utilizzano come funzione di attivazione del neurone proprio la funzione logistica, se si riuscisse a trovare un modo di applicare su di essa il metodo della regressione, si potrebbero determinare i parametri di qualsiasi network a due layer con un unico input. Il valore $a$ nella funzione corrisponderebbe alla threshold del neurone di output e la $b$ al peso dell'input. E' possibile linearizzare la funzione logistica applicando le seguenti trasformazioni (comunemente chiamata **logit transformation**):

$$y = \frac{Y}{1 + e^{a+bx}} \leftrightarrow \frac{1}{y} = \frac{1 + e^{a+bx}}{Y} \leftrightarrow \frac{Y - y}{y} = e^{a+bx} \leftrightarrow ln(\frac{Y - y}{y}) = a+bx$$

Si fornisce ora un esempio di regressione logistica:

![[RegressioneLogistica.png]]

La retta di regressione e, di conseguenza, la funzione desiderata sono:

$$z \approx -1.3775x + 4.133 $$
$$y \approx \frac{6}{1 + e^{-1.3775x + 4.133}}$$

Se si estende l'approccio fino a comprendere funzioni con più argomenti, analogamente a quanto accade nella regressione multilineare, si può utilizzarlo per computare i pesi di network a due layer con arbitrari neuroni di input. La funzione di regressione logistica può essere calcolata da un singolo neurone.<br />
Tuttavia, siccome il metodo della somma degli errori ha senso di essere utilizzato solo in contesto di neuroni di output, questo approccio non può essere esteso a network con più di due layer.

----------------------------------------------------------------

### Backpropagation ###
Come osservato in precedenza, la regressione logistica funziona solo per MLP con due layer di neuroni. Un approccio più generale si basa sull'utilizzo del **gradient descent**. Questo metodo consiste nell'utilizzare la funzione di errore per calcolare la direzione in cui cambiare i pesi e la threshold al fine di minimizzare l'errore. Condizione necessaria per il suo utilizzo è che la funzione sia differenziabile. Tuttavia, poichè un MLP ha una funzione logistica come funzione di attivazione, la funzione di errore sarà differenziabile (posto che la funzione di output sia la funzione identità). A questo punto, è possibile determinare la direzione verso la quale pesi e bias devono essere modificati semplicimente calcolando il **gradiente** della funzione d'errore.<br />
Intuitivamente, il gradiente descrive la pendenza di una funzione. Si definisce gradiente della funzione $f$ nel punto $(x, y)$ il vettore che ha per componenti le derivate parziali della funzione nel punto considerato.
L'operazione del calcolo del gradiente di un punto o di una funzione viene comunemente denotata con l'operatore differenziale $\nabla$.

![[gradient.png]]

Nel caso dei MLP, calcolare il gradiente della funzione di errore si traduce nel calcolare la derivata parziale della funzione di errore rispetto ai pesi e le threshold presi come parametri.<br />
Sia $\mathbf{w}_u = (-\theta,w_{u_1},\dots,w_{u_k})$ il vettore dei pesi di un singolo layer esteso così da includere anche la threshold. Si calcoli il gradiente come segue:
$$\nabla_{\mathbf{w}_u} e = \frac{\partial e}{\partial \mathbf{w}_u} = (-\frac{\partial e}{\partial \theta}, \frac{\partial e}{\partial w_{u_1}},\dots,\frac{\partial e}{\partial w_{u_k}})$$
Siccome l'errore totale $e$ è dato dalla somma degli errori individuali rispetto a tutti i neuroni e tutti i training pattern $l$, il risultato ottenuto sarà:
$$\nabla_{\mathbf{w}_u} e = \frac{\partial e}{\partial \mathbf{w}_u} = \frac{\partial}{\partial \mathbf{w}_u} \sum_{l \in L} e^l = \sum_{l \in L} \frac{\partial e^l}{\partial \mathbf{w}_u}$$

Nel caso in cui si abbia la funzione logistica come $f_{(act)}$, i cambiamenti operati sul vettore $\mathbf{w}_u$ saranno proporzionali alla derivata della funzione $f_{(act)}$. Più i valori sono vicini allo $0$ della funzione, più ripido sarà il pendio della funzione e, per tanto, più rapido sarà l'apprendimento.

![[DerivataFunzioneLogistica.png]]

Il processo che permette di calcolare la correzione necessaria per ogni peso e threshold di ogni singolo neurone dopo aver trovato l'errore viene chiamato **error backpropagation**.<br />
Si assuma che la funzione di attivazione sia la funzione logistica per ogni neurone $u \in U_{(hidden)} \cup U_{(out)}$ e non per i neuroni di input.

![[backpropagation.png]]

Inizialmente, l'input viene passato ai neuroni di input che lo restituiscono senza modifiche in output al primo degli hidden layer. Ogni neurone dei seguenti layer calcola la somma pesata degli input ed applica al risultato la funzione logistica, generando così l'output che verrà propagato in tutto il network, fino ai neuroni terminali. A questo punto viene calcolata la differenza tra l'output atteso e quello attuale e, dato che la funzione di attivazione è invertibile, è possibile risalire dal vettore di errore all'input che ha condizionato quel particolare errore (la variabile $\delta_u$, nell'immagine). Avendo trasformato l'errore della variabile di output $out_u$ in quello della variabile di input $net_u$, diventa possibile distribuire l'errore (e la correzione necessaria) in modo proporzionale al ruolo dei singoli neuroni nel calcolo dell'output. L'errore viene propagato a ritroso fino ai neuroni di input. E' utile osservare che, data la forma della funzione logistica, l'errore non può azzerarsi completamente, in quanto il gradiente approssimerà il vettore nullo più l'errore si avvicinerà allo zero.

Se si inizializza il learning rate $\eta$ ad un valore troppo alto, al posto di discendere la curva, si corre il rischio di saltare da un picco della funzione all'altro senza convergere mai al minimo. Inoltre, non è affatto detto che il minimo raggiunto in questo modo sia il minimo globale della funzione. La causa sarà piuttosto da ascrivere alla scelta dei valori iniziali. Una soluzione al problema può essere quella di ripetere l'apprendimento, inizializzando il sistema con una diversa configurazione di pesi e threshold, e scegliere alla fine la configurazione risultante in un miglior minimo.

----------------------------------------------------------------

### Variazioni sul gradient descent ###
Esistono varie sofisticazioni della tecnica del gradient descent le quali permettono un più veloce apprendimento e, nello stesso momento, un miglior controllo sulla lunghezza dei singoli step di apprendimento.<br />
Alcuni esempi sono:
- **manhattan training**, il quale utlizza al posto del valore del gradiente solo il suo segno per calcolare la direzione. Questo permette di semplificare notevolmente la computazione;
- **flat spot elimination**, il quale cerca di limitare l'abbattimento della lunghezza degli step di apprendimento quando ci si avvicina ad un plateau della funzione incrementando artificialmente la derivata della funzione in quel punto;
- **momentum term**, il quale ad ogni successivo step si aggiunge al gradiente una frazione del precedente cambiamento di pesi, così da avere una memoria di quanto velocemente stava cambiando nel passato;
- **self-adaptive error backpropagation**, il quale permette ad ogni parametro (e, quindi, ad ogni neurone) di avere un diverso learning rate in modo da avere un controllo più fine rispetto alle caratteristiche del singolo parametro;
- **resilient error backpropagation**, il quale combina il Manhattan training con l'approccio self-adaptive;
- **quick propagation**, il quale, al posto di utilizzare il gradiente, approssima la funzione con una parabola e salta direttamente all'apice della parabola;
- **weight decay**, il quale riduce i pesi per evitare di rimanere intrappolato nella regione saturata della funzione di attivazione logistica, nella quale il gradiente tende ad azzerarsi.

----------------------------------------------------------------

### Overfitting e underfitting ###
Per avere un buon network, come regola di massima si dovrebbe scegliere il numero di neuroni negli hidden layer secondo la seguente formula:
$$\# \text{hidden neurons} = (\# \text{input neurons} + \# \text{output neurons})/2$$
Non esiste una spiegazione teoretica soddisfacente del perchè questo sia
un numero ragionevole, ma è stato dimostrato empiricamente. Se, infatti, il
numero dei neuroni negli hidden layer è troppo basso si corre il rischio di avere una situazione di **underfitting**, ossia che il MLP non riesca ad approssimare in modo soddisfacente la complessità della funzione che si vuole catturare.<br />
Al contrario se se ne hanno troppi, si rischia di incorrere nell'*overfitting*, ossia che il MLP si adatti agli esempi che gli sono stati forniti durante il periodo di apprendimento, ma anche alle loro specificità accidentali (errori e deviazioni).<br />
Per evitare questi fenomeni, è buona pratica effettuare la **Cross Validation**, cioè dividere il dataset in modo da avere due sottoinsiemi di dati: alcuni dati per l'apprendimento ed altri per la validazione del processo di apprendimento.<br />
I primi verranno usati per allenare il network e i secondi per giudicare se effettivamente il network approssimi la funzione desiderata. É possibile iterare a piacere questo procedimento, suddividendo i dati non in solo due sottoinsiemi, ma in un numero arbitrario, così da ottenere una conferma incrociata dei progressi nell'apprendimento del network.<br />
Una variante è la **N-fold cross validation**, nella quale il dataset viene diviso in $n$ parti o **sottoset** (chiamati anche **fold**) circa della stessa dimensione. La frequenza relativa dei valori di output nei fold rappresenta in maniera approssimativa la frequenza relativa di quei valori nell'intero dataset (**stratification**). Da questi $n$ subset vengono formati $n$ insiemi di training e validation, composti ognuno da un subset ogni volta differente, il quale verrà utilizzato per la validation, e dai rimanenti $n-1$ subset, i quali verranno utilizzati per il training.<br /> 
Durante l'allenamento, la performance è valutata dopo ogni epoca. L'errore sul dataset di training dovrebbe sempre decrementare, mentre l'errore sul dataset di validazione dovrebbe peggiorare in caso di overfitting. A questo punto il training termina.

----------------------------------------------------------------

### Sensitivity analysis ###
Uno svantaggio delle ANN è che la conoscenza risultante dal processo di apprendimento è codificata in matrici a valori reali e, quindi, di difficile comprensione per l'utente.<br />
E' stata mostrata un'interpretazione geometrica dei processi interni alle ANN ma tale interpretazione, sebbene sia generalizzabile ad ANN arbitrariamente complesse, offre poco aiuto all'intuizione quando lo spazio degli input supera le tre dimensioni.<br />
Una soluzione a questo problema è quella di operare una **sensitivity analysis**, la quale determinerà l'influenza dei vari input sull'output del network. Per eseguirla, occorrerà calcolare la somma delle derivate parziali degli output rispetto agli input esterni per ogni neurone di output e per ogni training pattern. Questa somma viene, infine, divisa per il numero di training pattern, per rendere la misura indipendente dalla grandezza del dataset.

$$\forall u \in U_{(in)}: \quad s(u) = \frac{1}{|L|} \sum_{l \in L} \sum_{\nu \in U_{(out)}} \frac{\partial out_\nu^l}{\partial ext_u^l}$$

Il valore $s(u)$ risultante indica quanto importante fosse l'input assegnato al neurone $u$ per la computazione del MLP. Grazie a questa considerazione sarà possibile decidere se semplificare il network, eliminando, cioè, i nodi con i valori di $s(u)$ più bassi.

----------------------------------------------------------------

### Deep Learning ###
E' stato mostrato come un MLP con un solo hidden layer possa approssimare ogni funzione continua su $\mathbb{R}^n$ con una precisione arbitraria. Questo risultato, tuttavia, non ha natura costruttiva e può non essere semplice conoscere a priori il numero esatto di neuroni necessari per approssimare una data funzione con un adeguato grado di precisione. Inoltre, a seconda della funzione, questo numero potrebbe assumere dimensioni considerevoli.<br />
I training dataset sono necessariamente limitati nella taglia. infatti, un dataset completo per una funzione Booleana $n$-aria necessita di $2^n$ esempi di training.
L'utilizzo di più di un hidden layer permetterebbe, nella maggior parte delle casistiche, di ridurre il numero di neuroni necessari.<br />
Un esempio esplicativo viene fornito considerando la funzione che calcola la parità su una parola di $n$-bit. L'output sarà $1$ se e solo se il vettore di input che rappresenta la parola conterrà un numero pari di bit con valore $1$. Nel caso si scegliesse di utilizzare un MLP con un solo hidden layer, quest'ultimo conterrà al suo interno $2^{n-1}$ neuroni, in quanto la forma normale disgiuntiva della funzione di parità su $n$-bit non è altro che una disgiunzione di $2^{n-1}$ congiunzioni.<br />
Se si permettesse, invece, di avere più di un layer, il numero di neuroni crescerebbe in modo lineare rispetto alla dimensione dell'input.<br />
Questa constatazione ha portato allo sviluppo del cosìddetto **deep learning**, dove con **profondità** della rete si definisce il più lungo cammino all'interno del [[Grafo |grafo]] che descrive la rete. Il trade-off sperato consiste nel permettere una maggiore profondità del network in cambio di un miglioramento delle risorse utilizzate nel calcolo e nella costruzione.<br />
Il deep learning, oltre ad offrire dei vantaggi, porta con se alcune problematiche:
- **Overfitting**, cioè l'incremento nel numero di neuroni e, quindi, dei parametri da adattare dovuti alla presenza dei molti layer;
- **Vanishing gradient**, infatti, durante la propagazione dell'errore, il gradiente si riduce dopo ogni layer fino a scomparire. Il learning nei primi hidden layer può diventare molto lento.

Alcune soluzioni al problema dell'overfitting sono:
- **Weigth decay**, ossia mettere un tetto massimo ai valori che i pesi possono assumere al fine di prevenire un adattamento troppo preciso al dataset;
- **Sparsity constraint**, ossia si introducono dei limiti al numero di neuroni negli hidden layer. Altrimenti, è possibile limitare il numero di quelli attivi;
- **Dropout training**, ossia per ogni learning pattern viene selezionato un diverso sottoinsieme di neuroni da ignorare durante l'evoluzione del network.

Il problema del vanishing gradient è dato dal fatto che la funzione di attivazione è una funzione logistica la cui derivata raggiunge al massimo il valore di $\frac{1}{4}$ (il quale è ottenuto per il valore della funzione $0.5$). Di conseguenza, ogni propagazione dell'errore ad un layer precedente vi aggiunge un valore moltiplicativo, spesso molto minore di $1$, riducendo così il gradiente, per via della chain rule delle derivate.<br /> 
Una soluzione possibile sta nel modificare leggermente la funzione di attivazione in modo che sia sempre crescente. Questa modifica fa sì che la derivata della funzione non abbia più un valore massimo. Alcuni candidati di funzione di attivazione proposti in letteratura sono la **ramp function** (o **ReLU)** e la **softplus function**.<br />

![[relu.png]]

Un approccio completamente diverso è si basa sul costruire il network **layer a layer**.<br />
Una tecnica molto usata è quella di pensare al network come una pila di **autoencoder**. Un autoencoder non è altro che un three-layer perceptron il quale mappa il suo input in una sua approssimazione, utilizzando un hidden layer di dimensioni minori. Il layer nascosto funge da encoder per la codifica dell'input in una sua rappresentazione interna, che è a sua volta decodificata dal layer di output. L'autoencoder, avendo un solo layer, non soffre delle stesse limitazioni e può essere allenato attraverso la normale backpropagation.<br />
Un problema con questo approccio è che la presenza di tanti neuroni negli hidden layer quanti quelli di input rischia di propagare il segnale con correzioni minori, senza che l'autoencoder estragga alcuna informazione utile dal dato.<br />
Per questo problema esistono tre principali soluzioni:
- **Sparse autoencoder**, il quale prevede di utilizzare un numero molto minore di neuroni nell'hidden layer, rispetto a quelli di input. L'autoencoder sarà così costretto ad estrarre dall'input qualche feature interessante al posto di propagare semplicemente il dato;
- **Sparse activation scheme**, nel quale, in modo simile a quanto veniva fatto per evitare l'overfitting, si decide di disattivare alcuni neuroni durante la computazione;
- **Denoising autoencoder**, nel quale si aggiunge rumore (variazioni randomiche) all'input.

Per ottenere un MLP con molteplici layer, si combinano diversi autoencoder.<br />
Inizialmente si allena un singolo autoencoder a ricostruire tramite la standard backpropagation gli esempi presenti nel dataset. Terminato l'allenamento del primo autoencoder, si costruisce un nuovo dataset con gli output dell'hidden layer. Questo nuovo dataset viene utilizzato per allenare un secondo autoencoder e, di nuovo, viene creato un nuovo dataset al fine di ripetere il training. Questo procedimento viene ripetuto fino al raggiungimento di un numero soddisfacente di layer interni. Terminati gli allenamenti, è possibile costruire il MLP finale semplicemente connettendo un input layer a tutti gli hidden layer allenati in questa maniera<br />
I MLP costruiti in questo modo sono risultati molto efficaci nel riconoscere con successo numeri scritti a mano.<br />

Se si volessero utilizzare network simili per una più ampia classe di applicazioni, dove, per esempio, le feature riconosciute dai layer interni non sono localizzate in una porzione specifica dell'immagine, sarebbe necessario rivolgersi alle **convolutional neural network** (in seguito CNN).<br />
Questa architettura è ispirata al funzionamento della retina umana, in cui i neuroni adibiti alla percezione hanno un campo ricettivo, ossia una limitata regione nella quale essi rispondono agli stimoli. Questo campo ricettivo viene simulato nelle CNN connettendo ogni neurone del primo hidden layer ad un piccolo numero di neuroni di input, i quali fanno riferimento ad una regione contigua dell'immagine di input. I pesi vengono condivisi in modo tale che i vari network parziali possano essere valutati da differenti prospettive dell'immagine. Il campo di input è shiftato step by step per coprire tutta l'immagine.<br />
I neuroni nei layer successivi applicano il max pooling su regioni di piccole dimensioni, dove con max pooling si definisce una delle tecniche con la quale si effettua il **downsampling** della mappa delle feature tramite un riassunto delle feature presenti in una sezione dell'immagine.<br />
Questo pooling permette di conservare la conoscenza ottenuta riguardo le features senza considerare la posizione nell'immagine in cui è stata acquisita.
Durante la computazione si procederà poi ad ampliare il **campo ricettivo** sulla totalità dell'immagine.

----------------------------------------------------------------

### Radial basis function network ###
I cosiddetti **radial basis function network** (in seguito RBFN) sono feed-forward network aventi tre layer di neuroni nei quali i neuroni di input ed i neuroni hidden sono sempre totalmente connessi.<br />
La $f_{net}$ di ogni neurone hidden è una **funzione di distanza**, calcolata tra il vettore di input ed il vettore dei pesi :

$$\forall u \in U_{hidden}: f_{net}^{(u)}(\textbf{w}_{u}, \textbf{in}_{u}) = d(\textbf{w}_{u}, \textbf{in}_{u})$$

dove la funzione distanza scelta sarà una **metrica** in senso geometrico, e, per tanto, dovrà rispettare i seguenti tre assiomi:

$$d(\mathbf{w},\mathbf{v}) = 0 \leftrightarrow \mathbf{w}= \mathbf{v}$$
$$d(\mathbf{w},\mathbf{v}) = d(\mathbf{v},\mathbf{w})$$
$$d(\mathbf{w},\mathbf{e}) + d(\mathbf{e},\mathbf{v}) \geq d(\mathbf{w},\mathbf{v})$$

Se, nel caso dei MLP, veniva impiegata una funzione sigmoide come $f_{act}$, ora si utilizzerà una funzione radiale di base. Questa funzione è una funzione monotona decrescente tale che:

$$f: \mathbb{R}^{+} \to [0,1] \quad \text{con} \quad f(0) = 1 \quad \text{e} \quad \lim_{x \to \infty} f(x) = 0$$

La $f_{net}$ dei neuroni di output è la somma pesata dei loro input, come in precedenza, mentre la $f_{act}$ di ciascun neurone di ouput $u \in U_{out}$ è una funzione lineare 

$$f_{act}^{(u)}(net_{u}, \theta_{u}) = net_{u} - \theta_{u}$$

La funzione di input e la funzione di attivazione dei neuroni hidden descrivono una sorta di **regione di utenza** per il neurone. I pesi delle connessioni dall'input layer al neurone dell'hidden layer definiscono il centro di questa regione poichè la distanza è misurata tra il vettore dei pesi ed il vettore di input. <br />
La tipologia di funzione di distanza determina la forma di questo bacino di utenza.<br />
Una famiglia di funzioni di distanza usate spesso nelle applicazioni è quella formulata dal matematico prussiano Hermann Minkowski e battezzata in suo onore famiglia di Minkowski. Tale famiglia è definita come:

$$d_{k}(\mathbf{w},\mathbf{v}) = (\sum (w_i - v_i)^k)^{\frac{1}{k}}$$

Alcuni esempi famosi di funzioni appartenenti alla famiglia sono:
$$k = 1: \text{Manhattan distance}$$ $$k=2:\text{Euclidian distance}$$
$$k = \infty: \text{Maximum distance, ovvero } d(\mathbf{w},\mathbf{v})_\infty = max |w_i - v_i|$$

![[circle.png]]

Un modo utile di visualizzare queste funzioni è quello di vedere che forma assume il luogo dei punti equidistanti dal centro, a seconda delle varie metriche. Variando la definizione di distanza, varia la forma che assume la figura nei diversi spazi.<br />
La funzione di attivazione dei neuroni hidden calcola l'area in cui il neurone focalizza la propria attenzione, definita dal **raggio di riferimento** $\sigma$. I vari parametri e la forma della funzione determinano l'ampiezza di questa area. Il nome attribuitogli, **funzione radiale**, deriva dal fatto che la funzione viene definita intorno ad un raggio e da un centro, descritto dal vettore dei pesi. Questa funzione assegna quindi ad ogni raggio un'attivazione. <br />
Le funzioni più utilizzate per determinare l'area di attivazione sono quelle riportate nella figura sottostante.

![[act_rbf.png]]

Non per tutte queste funzioni esiste un raggio oltre al quale il valore dell'attivazione vale $0$. Per esempio, la funzione Gaussiana restituisce un'attivazione positiva indipendentemente dalla distanza del vettore di input dal centro, nonostante la sua attivazione possa essere estremamente poco significiativa, dovuto al decadimento esponenziale della funzione stessa.<br />
Come esempio, viene applicato un RBFN per simulare una congiunzione Booleana. Un network che risolve il problema è quello costituito da un singolo neurone hidden, il cui vettore dei pesi (il centro della funzione radiale) è esattamente il punto in cui in output sarebbe desiderabile il valore *vero*, ovvero (1,1). Il raggio $\sigma$ sarà posto ad un valore minore di $1$, nel caso specifico ad $\frac{1}{2}$, e verrà codificato nella threshold del neurone. La funzione di distanza usata è quella euclidea e come $f_{act}$ si impiega una funzione rettangolare.

![[and_rbf.png]]

In generale, un RBFN ha lo stesso potere espressivo di un MLP e può essere visto come un approssimatore universale, ovvero può approssimare (con errore arbitrariamente piccolo) una qualsiasi funzione Riemann-integrabile.<br />
Il procedimento è lo stesso che nel caso degli altri network: la funzione viene approssimata da una funzione a scalini, la quale può essere calcolata facilmente da una funzione radiale, a condizione di definirla come la somma pesata di funzioni rettangolari.
Ciascuna delle funzioni rettangolari avrà un dominio $\rightarrow [0,1]$ ed il peso applicato corrisponderà all'altezza della funzione a livello del primo scalino.<br />
L'approssimazione può essere migliorata aumentando il numero dei punti in cui si valuta la funzione. Inoltre se, al posto della funzione rettangolare, venisse utilizzata una funzione Gaussiana, sarebbe possibile ottenere delle transizioni più morbide evitando bruschi salti.<br />
Questo teorema richiede solamente che la funzione da approssimare sia Riemann-integrabile. La funzione non necessita, infatti, di essere continua.

----------------------------------------------------------------

#### Training delle RBFN ####
Se negli altri ANN la fase di inizializzazione era triviale, in quanto bastava scegliere valori in modo casuale, quando si tratta di RBFN lo stesso approccio conduce a risultati subottimali. La causa è da attribuire alla differenza strutturale tra i layer: infatti, l'hidden layer e l'output layer di una RBFN differiscono in maniera considerevole, poichè possiedono differenti funzioni $f_{net}$ e $f_{act}$, in contrasto con un MLP, nel quale l'hidden layer e l'output layer sono omogenei.<br />
Si consideri, quindi, il caso speciale delle **simple radial basis function network**, dove ogni esempio di apprendimento viene associato ad una propria funzione radiale. Perciò, l'hidden layer conterrà esattamente tanti neuroni quanti esempi di training.<br />
Data una fixed learning task $L = \{l_1,\dots,l_m\}$, avente $m$ pattern $l = (\mathbf{i}^l,\mathbf{o}^l)$, si definisce il vettore dei pesi associato al neurone $v_k$ come:

$$\forall k \in \{1,\dots,m\}: \mathbf{w}_{v_k} = \mathbf{i}_k$$

La rete è composta da $m$ neuroni nell'hidden layer in quanto ciascuno di quei neuroni verrà allenato per riconoscere uno degli $m$ pattern forniti nel training.
Assumendo una funzione di attivazione Gaussiana, il raggio $\sigma_k$ è inizializzato in accordo a questa euristica:

$$\forall k \in \{1,\dots,m\}: \sigma_k = \frac{d_{max}}{\sqrt{2m}}$$

dove $d_{max}$ è la massima distanza tra i vettori di input di due training pattern (calcolata utilizzando la funzione di input scelta per i neuroni hidden).
Questa scelta permette di centrare le varie Gaussiane in modo che non si sovrappongano l'una all'altra in maniera eccessiva, ma si distribuiscano in modo relativamente ordinato rispetto allo spazio di input.
Per quanto riguarda, invece, i pesi dei neuroni di output, vengono calcolati basandosi sul seguente ragionamento: poichè i parametri dell'hidden layer (i centri ed i raggi) sono noti, è possibile computare l'output dei neuroni hidden per ogni esempio di training. Poichè la $f_{net}$ di un neurone di output è la somma pesata dei propri input e la sua attivazione e funzione di output sono entrambe lineari, ogni esempio di training $l$ restituisce, per ogni neurone di output $u$, un'equazione lineare:

$$\forall u: \sum_{k=1}^m w_{uv_{k}} out_{v_k} - \theta_{u}  = o_u$$

Si ottiene così, per ogni neurone di output, un sistema di equazioni lineari con $m$ equazioni ed $m+1$ incognite ($m$ pesi ed $1$ valore di bias). Il sistema risulta sottodeterminato ma, ponendo $\theta = 0$, sarà possibile eliminare l'eccessivo grado di libertà.<br />
La precedente equazione è equivalente alla seguente forma matriciale:

$$\mathbf{A}\cdot \mathbf{w}_u = \mathbf{o}_u$$

dove $\mathbf{A}$ è la matrice $m \times m$ che ha come componenti i vari output dei neuroni nel hidden layer per ogni training pattern. Se la matrice $\mathbf{A}$ ha rango completo, è possibile invertirla e calcolare il vettore dei pesi come segue:

$$\mathbf{w}_u = \mathbf{A}^{-1}\cdot \mathbf{o}_u$$

Se la matrice $\mathbf{A}$ non ha rango completo, i pesi devono essere scelti randomicamente fino a quando il rimanente sistema di equazioni non è unicamente risolvibile.<br />
Questo metodo garantisce una perfetta approssimazione. Non è necessario, quindi, allenare un simple radial basis function network.<br />
Ovviamente, le simple radial basis function network sono semplici da inizializzare poichè gli esempi di training fissano immediatamente i parametri dell'hidden layer. Nella pratica, tuttavia, queste reti sono di scarsa utilità. In primo luogo, il numero di esempi di training è tipicamente troppo grande per creare un neurone per ciascuno di essi. In secondo luogo, è auspicabile che una funzione radiale di base copra più di un esempio di training.<br />
In generale, se non si desidera avere un neurone per ogni training pattern, sarà necessario selezionare $k$ sottoinsiemi del dataset e trovare, per ogni sottoinsieme, un rappresentante che verrà associato ad un neurone nel layer hidden. In analogia a quanto accade nel caso della simple RBFN, si avrà una matrice $\mathbf{A}$ di dimensione $m\times (k+1)$ contenente i valori in output dei vari neuroni nel hidden layer per ogni esempio di training. Dato che la matrice non è quadrata, non è possibile calcolarne l'inversa come fatto in precedenza. Tuttavia, esiste una matrice alternativa chiamata la **matrice pseudo-inversa**, la quale permette di completare il calcolo con una buona approssimazione. Ovviamente, l'accuratezza del network costruito in questo modo dipenderà dalla precisione con cui verranno scelti i rappresentanti delle varie sottoclassi del dataset. Esistono vari metodi per effettuare questa scelta: 
- si scelgono tutti i punti del dataset come centri. In questo caso si ricade nel caso semplice e i valori di output possono essere calcolati precisamente. Tuttavia, il calcolo dei pesi può risultare infattibile in termini di complessità;
- si costruisce un sottoinsieme randomico per rappresentare i centri. Questo metodo ha il pregio di essere facilmente calcolabile. La performance, però, dipenderà dalla fortuna di scegliere dei buoni candidati per essere centri;
- si utilizza un algoritmo di clustering (c-means clustering,learning vector quantization..).

L'algoritmo **c-means** sceglie randomicamente $c$ centri di altrettanti cluster, non necessariamente tra i valori interni al training set. Il dataset viene quindi partizionato in $c$ sottoclassi, a seconda della vicinanza ai vari centri. In un passo successivo si calcola il **centro di gravità** del cluster così trovato e lo si elegge come nuovo centro. Si ricomputa, quindi, l'appartenza dei punti del dataset e si procede così fino a che i centri smettono di oscillare.

La fase di training avviene come nel caso dei MLP attraverso gradient descent e backpropagation.

----------------------------------------------------------------

### Self-organizing maps ###
Le **self-organizing maps** (o **Kohonen feature maps**) sono delle feed-forward network a due layer le quali possono essere interpretate come RBFN prive di output layer o, piuttosto, l'hidden layer di una RBFN è già l'output layer di una SOM.<br />
La $f_{(net)}$ dei neuroni di output è una funzione di distanza tra il vettore di input e quello dei pesi e la $f_{(act)}$ è una funzione radiale. La $f_{(out)}$ è la funzione identità, anche se l'output può essere reso discreto in accordo al principio del **winner-takes-all**, ossia il neurone con la massima attivazione restituirà come output il valore $1$ mentre tutti gli altri neuroni restituiranno come output il valore $0$.<br />
Viene, inoltre, definita una **relazione di vicinanza** tra i neuroni dell'output layer, descritta da una funzione di distanza:

$$d_{neuroni} : U_{out} \times U_{out} \to \mathbb{R}^+$$

Questa funzione assegna un numero reale non negativo ad ogni coppia di neuroni di output. Come conseguenza, una SOM viene considerata come una rete neurale a due layer, priva di neuroni hidden.

![[grid.png]]

Analogamente alle RBFN, i pesi delle connessioni dai neuroni di input ai neuroni di output definiscono le coordinate di un **centro**, dal quale viene misurata la distanza di un pattern di input. Questo centro è spesso chiamato **reference vector** o **vettore di riferimento**.<br />
Maggiore la vicinanza di un pattern di input ad un vettore di riferimento, maggiore sarà il valore dell'attivazione del neurone corrispondente. Tipicamente, tutti i neuroni di output avranno la stessa $f_{net}$ e la stessa $f_{act}$, con lo stesso **raggio di riferimento** $\sigma$.<br />
Questa relazione può essere rappresentata graficamente da una griglia bidimensionale, nella quale ogni punto identifica un neurone di output.<br />
La relazione di vicinanza potrebbe anche essere assente, condizione che viene rappresentata da un'estrema misura della distanza tra i neuroni: ogni neurone misurerà distanza $0$ da sè stesso e distanza infinita da tutti gli altri neuroni.<br />
Se una relazione di vicinanza è assente e l'output è discretizzato (cioè il neurone con l'attivazione più alta restituisce $1$ mentre tutti gli altri neuroni restituiscono $0$), una self-organizing map descrive una **quantizzazione vettoriale** dello spazio di input: lo spazio di input è diviso in tante regioni quanti i neuroni di output. Questo risultato è ottenuto assegnando ad un neurone di output tutti i punti dello spazio di input per i quali il neurone restituisce il valore di attivazione più alto tra tutti i neuroni della rete.<br />
Questa tassellazione in regioni può essere rappresentata da un **diagramma di Voronoi.** Per un input bidimensionale, i punti indicheranno la posizione dei vettori di riferimento mentre le linee indicheranno le divisioni nelle varie regioni.<br />
La relazione di vicinanza dei neuroni di output vincola la quantizzazione vettoriale. Infatti, l'obiettivo di questa quantizzazione viene raggiunto quando i vettori di riferimento vicini tra di loro nello spazio di input apparterranno ai neuroni di output relativamente vicini l'un l'altro. Questa relazione ha, quindi, lo scopo di riflettere la posizione relativa dei corrispettivi vettori di riferimento nello spazio di input.<br />
La self-organizing map, pertanto, descrive una **topology preserving map**, cioè una mappa che preserva la posizione relativa tra i punti del dominio.<br />
Un esempio famoso di funzione che preserva la topologia sono le così dette **proiezioni di Robinson** della superficie di una sfera rispetto al piano, le quali vengono usate per costruire le mappe del globo. Attraverso l'uso di queste funzioni, le relazioni di posizione tra i vari punti vengono conservate approssimativamente, anche se la proporzione tra le distanze di due punti nella proiezione e tra le distanze di due punti nella sfera è tanto più grande quanto più ci si allontana dall'equatore.<br />
Il vantaggio nell'usare queste funzioni risiede nel fatto che esse permettono di mappare strutture multidimensionali in spazi con dimensioni minori.

Al fine di spiegare il training delle self-organizing map, è necessario introdurre prima la **learning vector quantization**, una tecnica che aiuta ad operare il raggruppamento in modo automatico, trovando una adeguata tassellazione dello spazio di input.<br />
Come nel caso dell'algoritmo c-means, i vari cluster verranno rappresentati da punti detti **centri**, posizionati in modo tale da giacere circa nel mezzo del cloud di dati che costituisce il cluster.<br />
Per calcolare la learning vector quantization si utilizzerà una network feed-forward a due layer, chiamata **learning vector quantization network** (in seguito LVQN).<br />
Questo tipo particolare di network può essere visto anch'esso come una RBFN avente il layer di output al posto dell'hidden layer. Come nel caso delle RBFN si avrà, infatti, che la funzione di input del layer di output sarà una funzione della distanza del vettore di input dal vettore dei pesi. Allo stesso modo, la funzione di attivazione dei neuroni di output sarà una funzione radiale.<br />
La differenza, nel caso dei LVQN, risiede nella $f_{(out)}$ dei neuroni di output, la quale non è la semplice funzione identità, ma è una funzione la quale propaga il messaggio solo se l'attivazione del neurone è quella di valore massimo tra le attivazioni dei neuroni di output. Se più di un'unità restituisce il valore massimo, ne viene scelta una secondo un fashion random, mentre le altre vengono poste a zero (principio del **winner-takes-all**).

$$f^u_{out} (act_u) = \begin{cases}
                    1 \quad \text{if } act_u = \max_{v \in U_{out}} act_v\\
                    0 \quad \text{altrimenti}
                    \end{cases}$$

Un'altra differenza rispetto all'algoritmo c-means riguarda il metodo attraverso il quale vengono aggiornati i centri. In questo caso, infatti, i punti nel dataset vengono processati uno ad uno. Questa procedura è conosciuta con il nome di **competitive learning**: mentre nel c-means clustering i due step di assegnamento dei punti ai cluster e il ricalcolo dei centri di cluster come centri di gravità erano eseguiti in maniera alternata, in questo caso ogni input viene conteso dai vari neuroni di output e viene assegnato al neurone con il valore di attivazione più alto. Il neurone vincitore viene successivamente adattato, in modo che il suo vettore di riferimento venga spostato. Per far ciò, i neuroni di output e, quindi, anche i vettori di riferimento, vengono dotati di etichette di classi. Se la classe dei data point e la classe del vettore di riferimento del neurone vincitore coincidono, viene applicata la seguente regola:
 $$\text{Attraction Rule: } \quad r^{(new)} = r^{(old)} + \eta(\mathbf{x} - \mathbf{r}^{(old)})$$

dove $\mathbf{x}$ è il training pattern, $\mathbf{r}$ è il vettore di riferimento del neurone vincitore per $\mathbf{x}$ ed $\eta$ è il learning rate, tale per cui $0 < \eta <1$.<br />
Con il termine "coincidono", si intende, cioè, il caso in cui il vettore di riferimento si muova verso il training pattern o, in altre parole, se il vettore venga attratto dal training pattern. Tuttavia, se le classi dei data point e il vettore di riferimento differiscono, viene applicata la seguente regola:

$$\text{Repulsion rule: }\quad \mathbf{r}^{new} = \mathbf{r}^{old} -\eta(\mathbf{x} - \mathbf{r}^{old})$$

In questo modo i vettori di riferimento si muovono verso gruppi di data point etichettati allo stesso modo.

![[adapt.png]]

Fino ad ora si è sottointeso che il learning rate rimanesse fisso per la durata dell'apprendimento, tuttavia esistono delle situazioni in cui un learning rate costante può far insorgere alcuni problemi. Una di queste situazioni è rappresentata dal caso nel quale il vettore di riferimento oscilla ciclicamente verso uno dei punti possibili. Un metodo semplice per risolvere il problema è quello di decrementare il learning rate al crescere delle iterazioni (**time-dependent learning rate**). In questo modo, il movimento circolare collassa in una spirale con il passare del tempo, facendo così convergere l'algoritmo.

![[oscill.png]]

Nonostante un time-dependent learning rate garantisca che la procedura converga, è bene tenere a mente che il learning rate non deve decrementare troppo velocemente, poichè altrimenti la procedura potrebbe terminare in ciò che viene definito **starvation**, cioè la casistica nella quale i passi di adattamento divengono molto piccoli rapidamente, così che il vettore di riferimento non raggiunga mai la sua destinazione naturale.<br />
Un altro problema con la versione classica di questo algoritmo è che il processo di adattamento potrebbe portare i vettori di riferimento ad allontanarsi sempre di più tra loro. Per evitare questo effetto indesiderabile il quale ostacola la convergenza dell'algoritmo, si prevede la cosiddetta **window rule**, tale per cui un vettore di riferimento viene adattato solo se il punto $\mathbf{p}$ giace vicino al bordo della classificazione, ossia alla (iper-)superficie che separa le regioni contigue delle due classi. La nozione vaga di vicinanza viene formalizzata come segue:

$$\min(\frac{d(\mathbf{p},\mathbf{r_j})}{d(\mathbf{p},\mathbf{r_k})},\frac{d(\mathbf{p},\mathbf{r_k})}{d(\mathbf{p},\mathbf{r_j})}) > \theta \quad \text{dove} \quad \theta = \frac{1 - \xi}{1 + \xi}$$

dove $\xi$ è un parametro specificato dall'utente e, intuitivamente, descrive l'ampiezza della finestra attorno al bordo delle classificazioni. Se si assume che i dati siano stati scelti randomicamente da un insieme di distribuzioni normali, si potrebbe voler usare un assegnamento **soft**, in opposizione ad una divisione **crisp** tipica del clustering a là c-means. Si rinuncia, quindi, alla strategia del **winner-takes-all** e si cerca di descrivere i dati attraverso insiemi di Gaussiane.<br />
In questo modo, tutti i vettori di riferimento che appartengono alla stessa classe vengono attratti verso il centro (con varia intensità rispetto alla distanza) e tutti quelli che non vi appartengono vengono respinti. La densità di probabilità verrà rappresentata dalla seguente formula:

$$f_\mathbf{X} (\mathbf{x},C) = \sum^c_{y = 1} p_Y(y,C) \cdot f_{\mathbf{X}|Y}(\mathbf{x}|y,C)$$

dove $C$ è l'insieme dei cluster, $\mathbf{X}$ è un vettore randomico che ha come dominio lo spazio dell'input, $Y$ una variabile randomica che ha l'indice dei cluster come suo dominio, $p_Y(y,C)$ è la probabilità che un punto appartenga al $y$-esimo componente dell'insieme e $f_{\mathbf{X}|Y}(\mathbf{x}|y,C)$ è la funzione di probabilità condizionata dato il cluster $y$. Per approssimare questa funzione, decidendo la posizione e l'ampiezza delle gaussiane, sarà necessario risolvere un problema di ottimizzazione comunemente chiamato **maximum likelihood estimation** rispetto ai parametri del cluster. La funzione di likelihood è così calcolata:

$$L(\mathbf{X},C) = \prod_{j=1}^n f_\mathbf{X} (\mathbf{x},C) = \prod_{j=1}^n \sum^c_{y = 1} p_Y(y,C) \cdot f_{\mathbf{X}|Y}(\mathbf{x}|y,C)$$

Tuttavia, nella presente forma, la funzione è difficilmente ottimizzabile a causa della presenza della sommatoria. Si prende, quindi, come parametro aggiuntivo un insieme $Y_j$ di variabili:

$$L(\mathbf{X},y,C) = \prod_{j=1}^n f_{\mathbf{X}_j,Y_j} (\mathbf{x},y_j,C)$$

Il problema si traduce, ora, nel trovare i valori per $Y$. L'approccio utilizzato è quello di sceglierne di randomici e considerare la distribuzione di probabilità sui possibili valori. $L(\mathbf{X},y,C)$ diviene una variabile randomica della quale è possibile massimizzare il valore atteso. Per farlo, è possibile fissare $C$ in alcuni termini e computare iterativamente migliori approssimazioni.

Le SOM sono allenate, come per la vector quantization, attraverso il **competitive learning**. I training pattern sono visitati uno dopo l'altro e, per ognuno di essi, viene determinato il neurone il quale restituisce l'attivazione maggiore. Nelle SOM è obbligatorio che tutti i neuroni di output utilizzino la stessa funzione di distanza e la stessa funzione di attivazione.<br />
Tuttavia, a differenza di quanto accade nell'apprendimento delle LVQN, non solo il neurone vincitore viene aggiornato, ma anche tutti i neuroni vicini ad esso (sebbene in misura minore). In questo modo si ottiene che i vettori di riferimento di neuroni vicini non si spostino arbitrariamente lontano l'uno dall'altro, mantenendo così la topologia dello spazio di input.<br />
Un'ulteriore ed importante differenza con la learning vector quantization risiede nel fatto che le SOM sono quasi esclusivamente utilizzate per le free learning task.<br />
Per trovare la corretta funzione che preservi la topologia, si utilizza la seguente regola di apprendimento, la quale costituisce una generalizzazione dell'attraction rule presentata nel caso delle LVQN:

$$\mathbf{r}^{new} = \mathbf{r}^{old} + \eta(t) \cdot f_{nb}(d_{neuroni}(u,u_*),\rho(t))\cdot(\mathbf{x} - \mathbf{r}^{old})$$

dove $\mathbf{x}$ è il training pattern considerato, $\mathbf{r}^{old}$ è il vettore di riferimento del generico neurone $u$, $u_*$ è il neurone vincitore e $f_{nb}$ è una funzione radiale. Il learning rate $\eta$ è parametrizzato rispetto al tempo perchè varierà con il numero delle iterazioni, in modo da evitare update ciclici. Inoltre, è definito un raggio di vicinanza $\rho(t)$, anch'esso dipendente dal tempo, il cui scopo è la riduzione progressiva dell'influenza del centro scelto, permettendo così una più fine approssimazione della topologia.

----------------------------------------------------------------

### Hopfield network ###
Precedentemente si è posto l'interesse solo ed esclusivamente sulle feed-forward network, ovvero network rappresentati da un grafo aciclico. Esistono, tuttavia, in letteratura alcuni esempi di **recurrent network**, ovvero network il cui grafo contiene dei cicli diretti. Uno dei più semplici modelli di recurrent network è quello degli **Hopfield network** (in seguito HN). Una prima differenza degli HN rispetto alle altre ANN risiede nel fatto che tutti i neuroni sono sia neuroni di input che di output. Non esistono, inoltre, neuroni nascosti. Ogni neurone è connesso ad ogni altro neurone (sono esclusi cappi, cioè neuroni connessi a sè stessi. Per ogni neurone i cappi vengono esclusi imponendo a $0$ il peso dell'input proveniente dal neurone stesso) e i pesi delle connessioni sono simmetrici. La funzione di input di ogni neurone è la somma pesata degli output degli altri neuroni:

$$f_{(net)}^u(\mathbf{w},\mathbf{i}) = \sum_{v \in U - \{u\}} w_{uv} out_v$$

La funzione di attivazione, invece, è una threshold function:

$$f_{(act)}^u(net_u,\theta_u) = \begin{cases}
                1 \quad \text{se} \quad net_u >= \theta_u \\
                -1 \quad \text{se} \quad net_u < \theta_u
                              \end{cases}$$

Infine, la funzione di output è la funzione identità. E' possibile, quindi, rappresentare un HN con $n$ neuroni attraverso la sua matrice dei pesi, di dimensione $n \times n$:

$$\mathbf{W} = \begin{bmatrix} 
            0 & w_{u_1 u_2} & \dots & w_{u_1 u_n} \\
            w_{u_2 u_1} & 0 & \dots & w_{u_2 u_n} \\
            \vdots & \vdots & \vdots & \vdots \\
            w_{u_n u_1} & w{u_n u_2} & \dots & 0
            \end{bmatrix}$$

Il comportamento degli HN può cambiare a seconda che i neuroni vengano aggiornati in modo **sincrono** (in parallelo) o **asincrono** (in sequenza). Se si dovesse decidere di aggiornare i neuroni in parallelo, potrebbe capitare che non venga mai raggiunto uno stato stabile ma che, infatti, il valore continui ad oscillare. Il teorema di convergenza assicura, invece, che in un HN, nel caso si aggiornino i neuroni in modo sequenziale, si riesca sempre a raggiungere uno stato stabile.

**Teorema di convergenza per le Hopfield Network**:<br />
se le attivazioni di un HN sono aggiornate in modo asincrono, allora viene raggiunto uno stato stabile in un numero finito di passi. Se i neuroni sono attraversati in un fashion arbitrario ma ciclico, sono necessari al più $n\cdot 2^n$ passi, dove $n$ è il numero dei neuroni della rete.

Per provare questo teorema, si definisce una funzione la quale mappa ciascuno stato di una Hopfield Network in un numero reale, il quale rimane costante o viene decrementato ad ogni transizione di stato. Questa funzione viene comunemente definita **funzione di energia** di un HN. Il valore nel quale viene mappato uno stato di attivazione di questa funzione è chiamato **energia** dello stato. Poichè un HN possiede solo un numero finito di stati possibili, si raggiungerà una situazione nella quale transazioni successive non permetteranno di decrementare l'energia ulteriormente e, perciò, si sarà raggiunto uno stato stabile.

La funzione di energia di un Hopfield Network con $n$ neuroni $u_1, ..., u_n$ è definita come:

$$E = - \frac{1}{2}\mathbf{act}^{\top}\mathbf{Wact}+\mathbf{\theta}^{\top}\mathbf{act}$$

dove il vettore $\mathbf{act} = (act_{u_{1}}, ..., act_{u_{n}})^{\top}$ descrive lo stato di attivazione della rete, $\mathbf{W}$ è la matrice dei pesi di un HN e $\mathbf{\theta} = (\theta_{u_{1}}, ..., \theta_{u_{n}})^{\top}$ è il vettore contenente la threshold di ogni neurone. Un modo alternativo di definire questa funzione è:

$$E = -\frac{1}{2} \cdot \Bigg(\sum_{u,v \in U, u \neq v} w_{uv}act_u act_v \Bigg) + \sum_{u \in U} \theta_u act_u $$


Si può osservare che il sistema può solo evolversi da uno stato con energia maggiore ad uno con energia minore. Uno stato stabile sarà un minimo locale della funzione energia (perchè non è possibile risalire, **no way back**).<br />
Se l'attraversamento di tutti gli $n$ neuroni non ha apportato alcun cambiamento di attivazione, si è raggiunto uno stato stabile.<br/>
Se l'attraversamento di tutti gli $n$ neuroni ha causato almeno un cambiamento di attivazione, lo stato precedente non può essere più raggiunto.

E' possibile sfruttare questo teorema per utilizzare gli HN come memorie associative, cioè memorie indicizzate dal proprio contenuto. Se un pattern viene dato ad una memoria associativa, questa memoria restituirà il pattern memorizzato al quale il pattern dato coincide. Una memoria associativa può anche restituire il pattern memorizzato più simile possibile al pattern presentato. Gli HN sono utilizzati come memorie associative, sfruttando gli stati stabili. Determinando i pesi e la threshold di un HN in modo tale che i pattern da memorizzare coincidano con gli stati stabili, la normale procedura di update di una Hopfield Network troverà, per ogni input pattern, il pattern memorizzato più simile possibile. In questa maniera, i pattern contenenti rumore possono essere corretti oppure pattern contenenti deviazioni possono comunque essere riconosciuti (**Hebbian Learning Rule**).<br />
Un esempio di utilizzo è la memorizzazione delle bitmap di numeri.<br />
Allo stesso modo, è possibile utilizzare gli HN per calcolare problemi di ottimizzazione. Aggiornando un HN, viene raggiunto un minimo locale della funzione di energia. Se fosse possibile riscrivere una generica funzione da ottimizzare in modo tale che essa possa essere interpretata come funzione di energia di una Hopfield Network, sarebbe possibile costruire una rete estraendo pesi e threshold dai termini della funzione di energia stessa. Da questo starting point, si inizializza randomicamente la rete (la si pone, cioè, in uno stato di attivazione randomico) e si svolgono gli usuali passi di update. L'HN raggiungerà uno stato stabile, il quale corrisponderà ad un minimo della funzione di energia e, perciò, si avrà un ottimo della funzione da ottimizzare. Si noti, comunque, che l'ottimo trovato potrebbe essere un ottimo locale e non globale. Per evitare di rimanere intrappolati in minimi locali è opportuno inizializzare il network in modo randomico varie volte e ripetere gli aggiornamenti fino al raggiungimento della convergenza.<br />
Il problema che emerge tentando di risolvere problemi di ottimizzazione tramite Hopfield Network è causato principalmente dalla possibilità che il processo rimanga intrappolato in un minimo locale della funzione di energia. E' possibile applicare un approccio chiamato **simulated annealing**, utilizzato per gestire questa casistica in altri metodi di ottimizzazione.<br />
L'idea sulla quale si basa questo processo propone di utilizzare una soluzione al problema di ottimizazione generata randomicamente e di valutarla. In ogni step successivo, la soluzione corrente verrà modificata e rivalutata: se la nuova soluzione dovesse essere migliore della precedente, allora essa prenderà il posto della vecchia soluzione. Tuttavia, nel caso dovesse essere peggiore, la nuova soluzione verrà accettata solo con un certo grado di probabilità, il quale dipenderà da quanto peggiore è la nuova soluzione rispetto alla precedente. In aggiunta, la probabilità viene ridotta nel tempo, in modo che con il susseguirsi delle iterazioni, vengano accettate esclusivamente soluzioni migliori di quelle precedenti. Inoltre, la migliore soluzione trovata viene memorizzata parallelamente.
La ragione per la quale una soluzione peggiore viene accettata sporadicamente è dovuta al fatto che questo metodo è simile al gradient descend. L'unica differenza è che la direzione di discesa non viene determinata dal calcolo di un gradiente ma viene trovata tramite trial and error. Inoltre, un gradiente può facilmente rimanere bloccato in un minimo locale. Tuttavia, se le soluzioni che sono attualmente peggiori di quella correntemente considerata vengono accettate, questo comportamento indesiderato può essere controbilanciato fino ad un certo grado. Intuitivamente, questa tecnica permette di superare barriere (regioni dello spazio nelle quali le soluzioni candidate hanno una bassa qualità) le quali separano i minimi locali dal minimo globale. Solo alla fine, quando la probabilità di accettare una soluzione candidata peggiore di quella attuale sarà decrementata, la funzione obiettivo sarà ottimizzata localmente.<br />
L'applicazione del simulated annealing agli HN è molto semplice: dopo aver inizializzato randomicamente le attivazioni, i neuroni dell'HN sono attraversati in ordine qualsiasi e viene determinato se il cambiamento di un'attivazione ha portato ad una riduzione dell'energia della rete oppure no. Un cambiamento di attivazione il quale riduce l'energia viene sempre accettato. Tuttavia, se un cambiamento di attivazione incrementa l'energia della rete, viene accettato con una certa probabilità.

----------------------------------------------------------------

### Boltzmann machines ###
Le **macchine di Boltzmann** (in seguito BM) possono considerarsi del tutto simili a degli HN, salvo che esse differiscono nella procedura di aggiornamento. Analogamente al caso degli HN, per risolvere problemi di ottimizzazione ci si basa sul fatto che sia possibile definire una funzione di energia, la quale associa un valore numerico ad ogni stato della rete. Grazie a questa funzione, si è in grado di definire una distribuzione di probabilità rispetto agli stati della rete, basandosi sulla **distribuzione di probabilità di Boltzmann**:

$$P(\mathbf{s}) = \frac{1}{c} e^{-\frac{E(\mathbf{s})}{kT}}$$

dove $\mathbf{s}$ rappresenta lo stato discreto del sistema, $c$ è una costante di normalizzazione, $E$ è la funzione che restituisce l'energia dello stato $\mathbf{s}$, $T$ è la temperatura del sistema e $k$ è la costante di Boltzmann ($k \simeq 1,38 \cdot 10^{-23} \frac{J}{K}$). Gli stati del sistema corrispondono ai valori che le attivazioni dei singoli neuroni possono assumere. La probabilità di attivazione di un neurone è data dalla funzione logistica della differenza di energia tra il caso che considera il neurone attivo ed il caso che lo considera inattivo.

$$P(act_u = 1) = \frac{1}{1 + e^{-\frac{\Delta E_u}{kT}}}$$

dove la differenza di energia è strettamente correlata al network input:

$$\Delta E_u = E_{act_u = 1} - E_{act_u = 0} = \sum_{v \in U - \{u\}} w_{uv} act_v - \theta_u$$

La procedura di aggiornamento prevede di selezionare randomicamente un neurone e di calcolarne la differenza di energia $\Delta E_{u}$ e la probabilità che il neurone abbia attivazione $1$. L'attivazione del neurone viene quindi impostata a $1$ con questa probabilità o a $0$ con la probabilità complementare.<br />
Questa stessa procedura viene ripetuta svariate volte su neuroni scelti casualmente. Viene applicato il simulated annealing, riducendo lentamente la temperatura. La convergenza verso uno stato stabile è garantita dal fatto che la temperatura del sistema diminuisce nel tempo. Questo processo di aggiornamento è una procedura **Markov-Chain Monte Carlo**.<br />
Dopo un numero sufficiente di step, la probabilità che il network si trovi in uno specifico stato di attivazione dipenderà solamente dall'energia del tale stato. Lo stato finale viene anche definito **equilibrio termico** del sistema, il quale rappresenterà un minimo della funzione.<br />
E' fondamentale notare che una BM potrà calcolare in modo efficace una distribuzione di probabilità se gli esempi forniti sono compatibili con una distribuzione di Boltzmann. Per mitigare questa restrizione, si dividono i neuroni di una BM tra neuroni **visibili**, cioè neuroni i quali ricevono i segnali di input, e **nascosti**, la cui attivazione non dipende direttamente dal dataset, permettendo così un adattamento più flessibile ai pattern di allenamento.<br />
L'obiettivo di apprendimento consiste nell'adattare i pesi e le threshold in modo tale che la distribuzione implicita nel dataset sia approssimata dalla distribuzione rappresentata dai neuroni visibili di una BM. Questo obiettivo è raggiungibile scegliendo una misura che descriva la differenza tra le due distribuzioni ed utilizzando la tecnica del gradient descent per minimizzarla.<br />
Una delle misure più utilizzate è la **misura di Kullback-Leibler sulla divergenza dell'informazione**:

$$KL(p1,p2) = \sum_{\omega \in \Omega} p1(\omega) ln\frac{p1(\omega)}{p2(\omega)}$$

dove $p1$ fa riferimento al dataset e $p2$ fa riferimento ai neuroni visibili della macchina di Boltzmann.<br />
Ogni passo di apprendimento viene suddiviso in due fasi:
1) **positive phase**: in cui i neuroni visibili vengono fissati ad un dato di input scelto randomicamente e i neuroni nascosti vengono aggiornati fino al raggiungimento dell'equilibrio termico;
2) **negative phase**: tutte le unità vengono aggiornate fino al raggiungimento dell'equilibrio termico.

Definendo la probabilità che un neurone $u$ sia attivo nella positive phase come $p_u^{+}$, la probabilità che un neurone $u$ sia attivo nella negative phase come $p_u^{-}$, la probabilità che due neuroni $u$ e $v$ siano attivi simultaneamente nella positive phase come $p_{uv}^{+}$  e quella che gli stessi due neuroni siano attivi nella negative phase come $p_{uv}^{-}$, è possibile definire la regola di update dei pesi e della threshold come segue:

$$\Delta w_{uv} = \frac{1}{\eta} (p_{uv}^{+} - p_{uv}^{-}) 
\quad
\text{e}
\quad
\Delta \theta_u = -\frac{1}{\eta}(p_u^{+} - p_u^{-})$$

Se un neurone è attivo più frequentemente quando viene presentato un data sample rispetto a quando alla rete è permesso di computare liberamente, la probabilità che il neurone sia attivo è troppo bassa: perciò, la soglia dovrebbe essere ridotta.<br />
Similarmente, se due neuroni sono attivi insieme più frequentemente quando viene presentato un data sample rispetto a quando alla rete è permesso di computare liberamente, i pesi sulle connessioni tra di loro dovrebbero venir incrementati, così che sia più probabile che essi siano attivi insieme.

----------------------------------------------------------------

#### Restricted Boltzmann machines ####
Sebbene le BM siano molto potenti, allenarne anche solamente di medie dimensioni può risultare molto dispendioso. Per questo motivo sono state introdotte le **restricted Boltzmann machines** (in seguito RBM). La differenza rispetto alle normali BM risiede nel fatto che il grafo del network di una RBM, invece di essere un grafo totalmente connesso, è un grafo bipartito, ovvero un grafo nel quale i vertici sono divisi in due gruppi e nel quale sono possibili connessioni solo tra neuroni di gruppi differenti.<br />
Solitamente uno dei gruppi è formato dai neuroni visibili e l'altro da quelli nascosti. Un vantaggio di avere un network in cui non vi sono connessioni tra neuroni dello stesso gruppo è che il processo di apprendimento può essere compiuto ripetendo questi tre passi:
1) fase I: le unità di input vengono fissate rispetto ad un pattern scelto casualmente e quelle nascoste vengono aggiornate in parallelo. Il prodotto viene chiamato **positive gradient**;
2) fase II: avendo ottenuto un input preprocessato nella prima fase, si invertono le parti, cioè si fissano i neuroni nascosti e si aggiornano quelli visibili, ottenendo così il **negative gradient**;
3) fase III: si aggiornano pesi e threshold con la differenza tra positive e negative gradient.

In letteratura, le RBM sono state utilizzate per costruire deep network in modo simile alle pile di autoencoder nei MLP.

----------------------------------------------------------------

### Recurrent network ###
Sia gli HN che le BM sono esempi di **recurrent network**, ovvero network il cui grafo contiene, al suo interno, dei cicli, sia che coinvolgano singoli neuroni che gruppi di neuroni. L'output in questi network viene generato solo al raggiungimento di uno stato stabile nella computazione.<br />
La configurazione di un recurrent network può essere ottenuta costruendola manualmente, se la struttura della computazione da ottenere è nota, oppure estendendo l'algoritmo dell'error backpropagation nel tempo in modo da gestire la presenza di cicli.<br />
Tramite un recurrent neural network è possibile rappresentare e risolvere (approssimativamente) arbitrarie equazioni differenziali. Dato, infatti, un insieme di alcune equazioni differenziali rappresentate in forma ricorsiva

$$x(t_i) = x(t_{i-1}) + \Delta y_1(t_{i-1})$$
$$y_1(t_i) = y_1(t_{i-1}) + \Delta y_2(t_{i-1})$$ $$\vdots$$
$$y_{i-1}(t_i) = y_{i-1}(t_{i-1}) + f(t_{i-1}, x(t_{i-1}), \dots, y_{n-1}(t_{i-1}))$$

è possibile sfruttare la derivata della funzione nell'istante di tempo precedente per calcolarne il valore successivo. Questo permette di trasformarle in un recurrent network, creando, per ogni variabile, un nodo nel grafo, cioè un neurone, ed associando alle connessioni il valore del differenziale.

![[recurrent.png]]

Tramite i **vectorial neural network**, cioè recurrent network composti da multipli recurrent sub-network, è possibile computare equazioni differenziali vettoriali.<br />
I recurrent network vengono allenati allo stesso modo dei multilayer perceptron, cioè tramite error backpropagation. Tuttavia, a causa dei cicli nella struttura della rete, questo metodo non può essere applicato direttamente, in quanto questi cicli propagherebbero il segnale di errore in maniera ciclica. Un modo per risolvere questo problema consiste nel **dispiegare** (**unfolding**) nel tempo la rete tra due pattern di allenamento. A questo punto si potrà applicare la backpropagation come in un qualsiasi feed-forward network. Per calcolare gli aggiornamenti ai pesi e alle threshold sarà, però, necessario combinare gli aggiustamenti calcolati rispetto ai neuroni così aggiunti.
Questa speciale forma di error backpropagation è chiamata **error backpropagation through time**.

----------------------------------------------------------------

## Sistemi fuzzy ##
### Introduzione alla logica fuzzy ###
#### Motivazioni ####
La logica classica si fonda sul **principio di bivalenza**, il quale sostiene che una proposizione possa assumere solo due valori di verità: il valore **vero** o il valore **falso**. Questa assunzione può essere adeguata nel caso in cui l'interesse sia modellare concetti chiari e distinti che hanno definizioni precise, come nel caso dei concetti matematici. Quando, invece, si vuole formalizzare la conoscenza implicita nel linguaggio naturale é possibile imbattersi in alcune proposizioni che sono vere (o false) **in una certa misura**, oppure proprietà che hanno estensioni sfumate. Termini di utilizzo comune come "veloce", "grande", "piccolo" e così dicendo rendono impossibile decidere se un valore dato soddisfi o meno un concetto di tale vaghezza. Uno dei motivi per cui sussiste questa problematica è che questi concetti vaghi sono tipicamente dipendenti dal contesto. La logica fuzzy e la teoria insiemistica che da questa discende permette di ragionare in questi contesti, in modo da sfruttare a proprio vantaggio la vaghezza insita nell'uso che viene fatto delle parole nel linguaggio naturale.<br />
Bisogna, tuttavia, prestare attenzione a non confondere l'imprecisione con l'**incertezza**. L'incertezza si riferisce alla possibilità che un evento accada o meno. Può anche fare riferimento al valore di verità associato ad una proposizione. Il valore numerico associato all'accadimento di un evento incerto si chiama [[Statistica e Probabilità |probabilità]] ed è studiato dalla branca della matematica omonima. La differenza tra appartenenza fuzzy e probabilità sta nel fatto che la probabilità rimane comunque un fenomeno Booleano: un evento può accadere o non accadere, dove, invece, l'appartenenza fuzzy si riferisce a quanto una proprietà venga soddisfatta da un oggetto.

----------------------------------------------------------------

### Insiemi fuzzy ###
Un insieme classico è una collezione di elementi che possono (o meno) appartenere all'insieme. I set fuzzy, invece, sono in grado di gestire l'appartenenza parziale.<br />
Pertanto, mentre un insieme classico (o insieme crispy) può essere definito a partire da una funzione caratteristica che assegna ad ogni elemento nel dominio del discorso il valore 1 se questo elemento appartiene all'insieme oppure 0 altrimenti, un **insieme fuzzy** può essere visto come una generalizzazione di questo concetto.

Dato un dominio del discorso $X$, un insieme fuzzy $\mu$ è una funzione $\mu : X \to [0,1]$ la quale assegna ad ogni elemento $x \in X$ un **grado di appartenenza** $\mu(x)$ rispetto all'insieme $\mu$.

Queste funzioni sono scelte a seconda del contesto di utilizzo e i gradi di appartenenza sono fissati per convenzione all'intervallo $[0, 1]$ ma non è obbligatorio. la funzione di appartenenza potrebbe avere un intervallo arbitrario come immagine.<br />
E' possibile vedere i fuzzy set come interfacce tra espressioni lingustiche e loro rappresentazioni numeriche. Ad esempio, si voglia fornire un modello formale alla proprietà "essere alto per un bambino di 4 anni". Per farlo, si definirà un insieme fuzzy $\mu_{tall}$ attraverso una funzione sigmoide, tale per cui apparterranno **massimamente** all'estensione della proprietà i bambini più alti di 1.5 m e **massimamente** al di fuori dall'estensione quelli più bassi di 0.7 m. Tutti gli altri apparterranno all'insieme con un certo grado.

![[tall.png]]

Il grado di appartenenza è un concetto differente da quello della probabilità. Un insieme fuzzy $\mu$ non deve essere considerato come una distribuzione di probabilità o di densità perchè, in generale, $\mu$ non soddisfa la condizione richiesta nella teoria della probabilità per le funzioni di densità. Inoltre, il grado di appartenenza $\mu(x)$ di un elemento $x$ all'insieme fuzzy $\mu$ non deve essere interpretato come la probabilità che $x$ appartenga a $\mu$. La teoria della probabilità e gli insiemi fuzzy hanno lo scopo di modellare fenomeni totalmente differenti: da un lato, la probabilità mira a modellare la quantificazione dell'incertezza riguardo all'accadimento di un evento mentre, dall'altro lato, gli insiemi fuzzy mirano a quantificare quanto una proprietà o una proposizione sia soddisfatta o con quale grado una proprietà sia verificata.

----------------------------------------------------------------

### Interpretazioni della funzione di appartenenza ###

Gli insiemi fuzzy sono rilevanti in tre tipi di task information-driven:
1) classificazione e analisi dei dati;
2) problemi di decisione;
3) ragionamento approssimativo.

Ci sono varie semantiche che è possibile associare alla relazione di appartenenza fuzzy a seconda dell'applicazione:
1) **somiglianza**;
2) **preferenza**;
3) **possibilità**.

L'interpretazione più popolare del grado di appartenenza fuzzy è la somiglianza a dei valori di riferimento. $\mu(x)$ può essere visto come il grado di prossimità rispetto ad un elemento prototipale di $\mu$. Per ottenere un valore numerico indicativo di un'appartenenza graduale in questa interpetazione, l'approccio più naturale consiste nel comparare l'oggetto sotto considerazione con un oggetto che appartiene definitivamente al concetto considerato. Questa interpretazione viene utilizzata nei problemi di pattern classification, cluster analysis e regressione. Il secondo caso, l'espressione di preferenze, è legato all'interpretazione precedente. In questa casistica, il grado di appartenenza determina quali valori dovrebbero essere preferiti rispetto ad altri. Il grado di appartenenza va interpretato in termini di ordinamento. La funzione $\mu$ rappresenta sia l'insieme degli oggetti preferiti, sia il valore associato ad una decisione $X$ e $\mu(u)$ rappresenta sia l'intensità della preferenza associata a $u$, sia la possibilità di scegliere $u$ come valore di $X$. Questa interpretazione di grado di appartenenza viene utilizzata nei problemi di ottimizzazione fuzzy e nella teoria decisionale ed è spesso correlata all'interpretazione di somiglianza poichè un ordine di preferenza può essere derivato dalla somiglianza di un certo oggetto ad un oggetto ideale o ad un valore ideale. L'ultima delle tre interpretazioni è usata per esprimere possibilità. Questa interpretazione considera $\mu(u)$ come il grado di possibilità che l'elemento $u$ sia il valore del parametro $X$ ed è usata per quantificare lo stato epistemico di un agente, cioè il suo stato di conoscenza. L'obiettivo è distinguere cosa sia sorprendente da cosa sia aspettato, e cosa sia plausibile da cosa sia impossibile: $\mu(u) = 0$ significa che $u$ è rifiutato in quanto impossibile e $\mu(u) = 1$ significa che $u$ è totalmente possibile e, di conseguenza, più grande $\mu(u)$, più plausibile $u$. Questa interpretazione viene utilizzata in data analysis.

----------------------------------------------------------------

### Rappresentazione verticale e orizzontale ###
Come già mostrato, gli insiemi fuzzy possono essere rappresentati da una funzione la quale assegna un valore nell'intervallo reale unitario ad ogni elemento dell'universo del discorso. Nella maggior parte delle applicazioni, i valori assunti dalla funzione crescono monotonicamente fino ad un certo punto e da quel punto decrescono monotonicamente. Questo tipo di insiemi viene definito **convesso**. Le funzioni che rappresentano insiemi convessi sono dette **funzioni triangolari** ed assumono la forma:

$$\Lambda_{a,b,c} : \mathbb{R} \to [0,1],\quad x \mapsto 
\begin{cases}
\frac{x-a}{b-a} \text{ if } a \leq x < b \\
\frac{c-x}{c-b} \text{ if } b \leq x \leq c \\
0 \quad \text{  altrimenti}
\end{cases}$$

Le funzioni triangolari possono essere considerate un caso particolare delle **funzioni trapezoidali**:

$$\Pi_{a,b,c,d} : \mathbb{R} \to [0,1],\quad x \mapsto 
\begin{cases}
\frac{x-a}{b-a} \text{ if } a \leq x \leq b \\
1 \quad \text{ if  }  b \leq x \leq c \\
\frac{d-x}{d-c} \text{ if } c \leq x \leq d \\
0 \quad \text{  altrimenti}
\end{cases}$$

![[triang.png]]

Questa rappresentazione dei fuzzy set viene anche detta **rappresentazione verticale**.<br />
Una diversa rappresentazione è invece quella **orizzontale**. Per un qualsiasi valore $\alpha \in [0,1]$, si consideri l'insieme di elementi aventi un grado di appartenenza all'insieme $\mu \geq \alpha$.

Sia $\mu$ un fuzzy set definito rispetto al dominio del discorso $X$ e sia $\alpha \in [0,1]$. L'insieme

$$[\mu]_\alpha = \{x \in X | \mu(x) \geq \alpha \}$$

è chiamato **alpha-cut** dell'insieme $\mu$.<br />
Nel caso in cui l'insieme $\mu$ sia una funzione convessa, qualsiasi suo alpha-cut sarà un intervallo unico. Se, invece, l'insieme non è convesso, almeno uno dei suoi alpha-cut consisterà in intervalli disgiunti.<br />
Alcune proprietà degli alpha-cut sono le seguenti:
1) $[\mu]_0 = X$;
2) $\alpha \leq \beta \implies [\mu]_\alpha \supseteq [\mu]_\beta$;
3) $\cap_{\alpha:\text{ }\alpha < \beta}, [\mu]_\alpha = [\mu]_\beta$.

Da queste proprietà deriva la proprietà di ciascun insieme fuzzy di poter essere descritto specificando una famiglia di alpha-cut, come illustra il teorema seguente.<br />
Sia $\mu$ un fuzzy set. Allora:

$$\mu(x) = \sup \{\alpha \in [0,1] \quad \vert \quad  x \in [\mu]_\alpha\}$$

Per determinare il grado di appartenenza di un elemento, viene considerato l'alpha-cut superiore al quale l'elemento appartiene.

![[alpha_cut.png]]

Dal punto di vista geometrico, un fuzzy set può essere visto come un inviluppo superiore dei suoi alpha-cut. Ricostruire una funzione di appartenenza dai suoi alpha-cut restituisce una funzione a step.<br />
Questa connessione tra insiemi fuzzy e famiglie di alpha-cut è utilizzata nella rappresentazione degli insiemi fuzzy nei computer. Solitamente ci si limita a considerare un numero finito di alpha-cut rilevanti ai fini della rappresentazione dell'insieme. Gli insiemi vengono poi conservati in memoria come catene di liste lineari. Ogni lista è l'unione di intervalli rappresentati dai loro estremi.

----------------------------------------------------------------

### Alcune utili definizioni ###
Avendo introdotto gli alpha-cut come uno strumento per rappresentare i fuzzy set, è possibile sfruttarli per definire alcuni concetti.<br />
Si definisce **supporto** $S(\mu)$ di un insieme fuzzy $\mu$ l'insieme Booleano che contiene tutti e soli gli elementi del dominio del discorso aventi un grado di appartenenza non nullo rispetto a $\mu$. In simboli:

$$S(\mu) = [\mu]_{\bar{0}} = \{ x \in X | \mu(x) > 0 \}$$

Si definisce **core** $C(\mu)$ di un insieme fuzzy $\mu$ l'insieme Booleano che contiene tutti e soli gli elementi del dominio del discorso aventi un grado di appartenenza uguale a 1 rispetto a $\mu$. In simboli:

$$C(\mu) = [\mu]_{1} = \{ x \in X | \mu(x) = 1 \}$$

Si definisce **altezza** $h(\mu)$ di un insieme fuzzy $\mu$ il più alto grado di appartenenza ottenibile da un elemento di $\mu$. In simboli:
$$h(\mu) = \sup_{x \in X} \{\mu(x)\}$$

Un insieme fuzzy $\mu$ è definito **normale** se e solo se $h(\mu) = 1$. Altrimenti, è definito **subnormale**.

Un insieme fuzzy $\mu$ è definito **convesso** se e solo se i suoi alpha-cut sono convessi per ogni scelta di $\alpha \in (0,1]$.

Un insieme fuzzy $\mu$ è un **numero fuzzy** se e solo se $\mu$ è normale e $[\mu]_\alpha$ è chiuso, limitato e convesso per ogni scelta di $\alpha \in (0,1]$.

----------------------------------------------------------------

### Logica fuzzy ###
Un importante risultato della logica classica sostiene l'esistenza di un isomorfismo tra la logica proposizionale su un insieme finito di variabili e la teoria degli insiemi finiti. Entrambi questi sistemi, inoltre, possono essere dimostrati isomorfi ad un'algebra Booleana finita. Questo permette di definire gli operatori insiemistici di intersezione, unione e complementare utilizzando rispettivamente i classici operatori logici di congiunzione, disgiunzione e negazione. Un discorso simile vale per la logica fuzzy, ovvero la logica che ha come insieme di valori di verità l'intero intervallo reale $[0,1]$. Una volta ridefiniti gli operatori logici Booleani al fine di adattarli alla nuova semantica, sarà possibile utilizzarli per costruire sopra di essi una teoria degli operatori insiemistici "fuzzy".<br />
Siano $\mu$ e $\mu'$ due insiemi fuzzy. E' possibile, quindi, definire gli operatori della logica fuzzy come segue:
1.  $\neg \mu(x) \doteq 1 - \mu(x)$;
2.  $(\mu \wedge \mu')(x) \doteq \min\{\mu(x),\mu'(x)\}$;
3.  $(\mu \vee \mu')(x) \doteq \max\{\mu(x),\mu'(x)\}$.

![[fuzzyop.png]]

----------------------------------------------------------------

### Complemento fuzzy / negazione fuzzy ###
In generale, esistono vari modi di definire il complementare in una logica fuzzy. L'unico requisito è che la definizione rispetti tre proprietà che, intuitivamente, ogni complemento deve possedere:
1.  $\neg(0) = 1$;
2.  $\neg(1) = 0$;
3.  $x \leq y \implies \neg x \geq \neg y$.

In aggiunta a queste proprietà, una negazione può soddisfarne altre. Per esempio, si può chiedere che sia **strettamente decrescente**:

$$x < y \implies \neg x > \neg y$$

Oppure che $\neg$ sia **continua**, oppure, ancora, **involutiva**:

$$\neg \neg x = x$$

Una negazione si definisce **stretta** se e solo se è strettamente decrescente e continua.<br />
Una negazione si definisce **forte** se e solo se è stretta e involutiva.

----------------------------------------------------------------

### T-norma e t-conorma ###
Come la negazione, sia l'intersezione che l'unione fuzzy possono essere definite in diversi modi. Al fine di fare ciò, si introducono di seguito i concetti di **t-norma** e **t-conorma**.

Una funzione $\top : [0,1]^2 \to [0,1]$ si definisce **t-norma** se e solo se soddisfa le seguenti proprietà:
1) $\top(x,1) = x$;
2) **commutativa**: $\top(x,y) = \top(y,x)$;
3) **associativa**: $\top(x,\top(y,z)) = \top(\top(x,y),z)$;
4) **monotonicità** $y \leq z \implies \top(x,y) \leq \top(x,z)$.

Una funzione $\bot: [0,1]^2 \to [0,1]$ si definisce **t-conorma** se e solo se soddisfa le seguenti proprietà:
1) $\bot(x,0) = x$;
2) **commutativa**: $\bot(x,y) = \bot(y,x)$;
3) **associativa** $\bot(x,\bot(y,z)) = \bot(\bot(x,y),z)$;
4) **monotonicità** $y \leq z \implies \bot(x,y) \leq \bot(x,z)$.

Se nell'insiemistica classica un elemento $x \in X$ appartiene all'intersezione di due insiemi $M_{1}$ e $M_2$ se e solo se $x \in M_1 \wedge x \in M_2$, nella logica fuzzy il grado appartenenza all'intersezione di due insiemi fuzzy $\mu$ e $\mu'$ è dato dalla t-norma del grado di appartenenza dell'elemento ai due insiemi fuzzy

$$( \mu  \cap \mu')(x) = \top(\mu(x), \mu'(x))$$

Analogamente, se nell'insiemistica classica un elemento $x \in X$ appartiene all'unione di due insiemi $M_{1}$ e $M_2$ se e solo se $x \in M_1 \vee x \in M_2$, nella logica fuzzy il grado appartenenza all'unione di due insiemi fuzzy è dato dalla t-conorma del grado di appartenenza dell'elemento ai due insiemi fuzzy

$$( \mu  \cup \mu')(x) = \bot(\mu(x), \mu'(x))$$

Le definizioni di intersezione e unione date in termini di $\max$ e $\min$ soddisfano queste proprietà. Si può mostrare come l'operazione di minimo sia la più grande t-norma e il massimo la più piccola t-conorma. In aggiunta a queste, possono essere date altre definizioni di intersezione ed unione come, per esempio, quella in termini di prodotto e somma probabilistica:
$$\top_{prod}(x,y) = x \cdot y$$
$$\bot_{sum} (x,y) = x + y - x \cdot y$$

Oppure, seguendo Łukasiewicz: 

$$\top_{Luk}(x,y) = \max\{0,x + y - 1\}$$
$$\bot_{Luk}(x,y) = \min\{1,x + y\}$$

O ancora, come prodotto e somma drastica: 

$$\top_{-1}(x,y) = \begin{cases}
                \min(x,y) \quad \text{se } \max(x+y) = 1 \\
                0 \quad \text{ altrimenti}  
                \end{cases}$$
 $$\bot_{-1}(x,y) = \begin{cases}
                \max(x,y) \quad \text{se } \min(x+y) = 0 \\
                0 \quad \text{ altrimenti}  
                \end{cases}$$

![[tnorme.png]]

![[tconorme.png]]

----------------------------------------------------------------

### Implicazione fuzzy ###
Come nel caso Booleano, un insieme fuzzy è contenuto in un altro se tutti gli elementi del primo insieme sono contenuti nel secondo. Sfruttando l'isomorfismo tra operatori logici e insiemistici, sarà inoltre possibile definire il concetto di sottoinsieme a partire dal concetto di **implicazione**: 

$$I(a,b) = \neg a \vee b$$

A seconda della semantica data agli operatori logici fuzzy, si otterranno varie classi di implicazioni:
1) **S-implication**: $I(a,b) = \bot(\neg a, b)$;
2) **R-implication**: $I(a,b) = \sup \{x \in [0,1] | \top(a,x) \leq b\}$;
3) **QL-implication**: $I(a,b) = \bot(\neg a, \top(a,b))$.

----------------------------------------------------------------

### Teoria della logica fuzzy ###
#### Principio di estensione ####
Come estendere una funzione $\phi : X^n \to Y$ in un contesto fuzzy di modo che $\hat{\phi}$ abbia come dominio una tupla di fuzzy set e come codominio un fuzzy set? Un caso particolare è quello della valutazione di proposizioni.<br />
Definito un assegnamento fuzzy alle proposizioni atomiche, possiamo estenderlo a combinazioni arbitrarie di formule legate tra loro da operatori logici ($\wedge$ e $\vee$):
$$truth: \mathbb{P} \to [0,1]$$
$$truth(a \wedge b) =  \min\{truth(a),truth(b)\}$$
$$truth(a \vee b) =  \max\{truth(a),truth(b)\}$$Si possono considerare anche congiunzioni e disgiunzioni infinite:
$$truth(\forall i \in I : a_i) =  \inf \{ truth(a_i) | i \in I \}$$
$$truth(\exists i \in I : a_i) =  \sup \{ truth(a_i) | i \in I \}$$
Questo permette di riguadagnare la logica Booleana anche nel caso fuzzy. Un altro esempio di estensione riguarda la somma reale tra insiemi, definita, per insiemi classici, come:
$$+ : 2^{\mathbb{R}} \times 2^{\mathbb{R}} \to 2^{\mathbb{R}}$$
$$(A,B) \to A + B = \{y | \exists a,b (y = a + b) \land (a \in A) \land (b \in B) \}$$
La sua estensione ai fuzzy set verrà definita, per $\mu$ e $\mu'$ fuzzy set, come: $$(\mu,\mu') \to \mu \oplus \mu'$$
$$truth(y \in \mu \oplus \mu') = \sup_{a,b}\{ truth(y = a + b) \land truth(a \in A) \land truth(b \in B)\}$$
$$= \sup_{a,b:y=a+b} \{ \min(\mu(a),\mu'(b)) \}$$In generale, una funzione $\phi : X^n \to Y$ può essere estesa ad una $\hat{\phi} : [2^X]^n \to 2^Y$ su insiemi classici nel seguente modo:
$$\hat{\phi} (A_1, \dots, A_n) = \{ y \in Y | \exists x_1, \dots, x_n \in A_1 \times \dots \times A_n : \phi(x_1,\dots,x_n) = y \}$$
Basandoci su questa definizione, è possibile poi generalizzare al caso dei fuzzy set su un dominio di discorso $X$:
$$\hat{\phi}_{fuzzy} (\mu_1, \dots, \mu_n) = \sup\{ \min \{ \mu_1(x_1), \dots, \mu_n(x_n) \} | (x_1, \dots, x_n) \in X^n \land \phi(x_1, \dots, x_n) = y \}$$
Assumendo che $\sup \emptyset = 0$.

----------------------------------------------------------------

#### Alcuni insiemi fuzzy rilevanti ####
Vi sono vari tipi di insiemi fuzzy e particolare rilevanza assumono quelli definiti sull'insieme $\mathbb{R}$. Un insieme fuzzy sui valori reali ha un significato quantitativo utilizzabile per rappresentare variabili fuzzy. Queste ultime giocano un ruolo fondamentale in molte applicazioni: fuzzy control, ragionamento approssimato, ottimizzazione, etc. Alcune classi di $F(\mathbb{R})$ (l'insieme degli insiemi fuzzy sui reali) le quali vengono citate spesso in letteratura sono le seguenti:

1) **normal fuzzy set**: $F_N(\mathbb{R}) = \{\mu \in F(\mathbb{R}) | \exists x \in \mathbb{R} : \mu(x) = 1 \}$

2) **upper semi-continuous fuzzy set**: $F_C(\mathbb{R}) = \{\mu \in F_N(\mathbb{R}) | \forall \alpha \in (0,1] : [\mu]_\alpha \text{ è compatto }\}$

3) **fuzzy interval**: $F_I(\mathbb{R}) = \{\mu \in F_N(\mathbb{R}) | \forall a,b,c \in \mathbb{R} : c \in [a,b] \implies \mu(c) \geq \min\{ \mu(a),\mu(b) \} \}$

![[lingvar.png]]

Particolare interesse rivestono i **fuzzy interval**, anche detti **fuzzy numbers**, perchè essi permettono di definire **variabili fuzzy quantitative**. Tali variabili assumono come valore dei numeri fuzzy.<br />
Quando le quantità fuzzy rappresentano concetti linguistici (come, ad esempio, piccolo, grande, etc.) si parla di variabili linguistiche. Ogni variabile linguistica è definita da un quintupla $(v,T,X,g,m)$, dove $v$ è il nome della variabile, $T$ è l'insieme dei termini che coprono $v$, $X$ è il dominio del discorso, $g$ è la grammatica per generare i termini ed $m$ la semantica che assegna un fuzzy number ad ogni termine. Per processare questo genere di variabili sarà necessario estendere le operazioni insiemistiche e aritmetiche originalmente utilizzate per i numeri.

----------------------------------------------------------------

#### Rappresentazione per insiemi ####
Si è osservato in precedenza come, attraverso il principio di estensione, si possano definire le operazioni aritmetiche nel contesto di $F(\mathbb{R})$. Tuttavia, calcolare tali funzioni direttamente sugli insiemi fuzzy risulta oneroso, specialmente se si adotta la rappresentazione verticale rispetto alla rappresentazione orizzontale. Sarebbe desiderabile ridurre l'artimetica fuzzy all'ordinaria aritmetica sugli insiemi Booleani e, quindi, applicare alcune semplici operazioni su intervalli per ottenere il risultato. Questo è possibile attraverso la **rappresentazione per insiemi** di un insieme fuzzy.

Una famiglia $(A_\alpha)_{\alpha \in (0,1)}$ è una **rappresentazione per insiemi** di $\mu \in F_N(\mathbb{R})$ se
1.  $0 < \alpha < \beta < 1 \implies A_\alpha \subseteq A_\beta \subseteq \mathbb{R}$;
2.  $\mu(t) = \sup \{ \alpha \in [0,1] | t \in A_\alpha \}$.

Il seguente teorema assicura che una rappresentazione per insiemi sia una fedele immagine dell'insieme fuzzy che essa raffigura.<br />
Sia $\mu \in F_N(\mathbb{R})$. La famiglia $(A_\alpha)_{\alpha \in (0,1)}$ è una rappresentazione per insiemi di $\mu$ se e solo se

$$[\mu]_{\bar{\alpha}} = \{ t \in \mathbb{R} | \mu(t) > \alpha \} \subseteq A_\alpha \subseteq \{ t \in \mathbb{R} | \mu(t) \geq \alpha \} = [\mu]_\alpha$$ 
è valida per ogni $\alpha \in (0,1)$.<br />
Se $\mu_1, \dots, \mu_n$ sono normal fuzzy set su $\mathbb{R}$ e $\phi: \mathbb{R}^n \to \mathbb{R}$ una funzione e $\hat{\phi}$ la sua estensione fuzzy, allora valgono le seguenti:

$$\forall \alpha \in [0,1) : [\hat{\phi}(\mu_1,\dots,\mu_n)]_{\bar{\alpha}} = \phi([\mu_1]_{\bar{\alpha}}, \dots, [\mu_n]_{\bar{\alpha}})$$
$$\forall \alpha \in [0,1) : [\hat{\phi}(\mu_1,\dots,\mu_n)]_\alpha \subseteq \phi([\mu_1]_\alpha, \dots, [\mu_n]_\alpha)$$

Sia, quindi, $(A_\alpha)_{\alpha \in (0,1)}$ la rappresentazione per insiemi di $\mu_i$ per $1 \geq i \geq n$. Allora $(\phi((A_1)_\alpha, \dots, (A_n)_\alpha))_{\alpha \in (0,1)}$ è una rappresentazione di $\hat{\phi}$.

----------------------------------------------------------------

### Relazioni fuzzy ###
Una relazione Booleana $R$ tra gli insiemi $X_1, \dots, X_n$ è un sottoinsieme del loro prodotto cartesiano. Ogni relazione di questo tipo può essere definita, quindi, attraverso la propria funzione caratteristica: 

$$R(x_1,\dots,x_n) = \begin{cases}
                        1 \text{ se e solo se } (x_1, \dots, x_n) \in R \\
                        0 \text{ altrimenti }
                    \end{cases}
$$

Come accade nel caso della funzione caratteristica di insiemi, la variante delle relazioni può essere generalizzata per comprendere valori fuzzy. Il grado di appartenenza indica la forza della relazione tra i membri della tupla in considerazione.

Siano $n \geq 2$ fuzzy set $A_1, \dots, A_n$ definiti rispettivamente sul dominio del discorso $X_1, \dots, X_n$. Il prodotto cartesiano $A_1 \times \dots \times A_n$ è una relazione fuzzy nello spazio prodotto $X_1 \times \dots \times X_n$ ed è definita dalla seguente funzione di partecipazione:

$$\mu_{A_1 \times \dots \times A_n}(x_1, \dots, x_n) = \top(\mu_{A_1}(x_1), \dots,\mu_{A_n}(x_n))$$

dove $\top$ è una t-norma, solitamente il minimo o il prodotto.

Siano $\mathbf{w}= (x_1, \dots, x_n)$ e $\mathbf{v}= (y_1, \dots, y_m)$ due tuple. $\mathbf{w}$ è chiamato **sottosequenza** di $\mathbf{v}$ (in simboli, $\mathbf{w}\prec \mathbf{v}$) se e solo se $\forall j \in \{1,\dots,n\}, \mathbf{w}_j = \mathbf{v}_j$.

Data un relazione $R(x_1,\dots,x_n)$ e un sottoinsieme dei domini del discorso $Y \subseteq \{X_1, \dots, X_n\}$, si denota con $[R \downarrow Y]$ la **proiezione** di $R$ su $Y$ definita come:

$$[R \downarrow Y](\mathbf{v}) = \max_{\mathbf{v}\prec \mathbf{w}} R(\mathbf{w})$$

Data una proiezione $[R \downarrow Y]$, un'**estensione cilindrica**, che si denota come $[R \uparrow X-Y]$, è la relazione $R$ di partenza, salvo che ogni valore diverso da quello della proiezione viene sostituito con quello stesso valore: 

$$[R \uparrow X-Y](\mathbf{v}) = R(\mathbf{w})$$

----------------------------------------------------------------

### Relazioni binarie ###
Le relazioni binarie sono esempi particolarmente rilevanti tra tutte le relazioni $n$-dimensionali, in quanto generalizzazioni delle funzioni matematiche.<br />
Contrariamente a ciò che accade nel caso delle funzioni da $X$ a $Y$, una relazione $R(X,Y)$ può assegnare ad un elemento di $X$ ad un valore in $Y$. E' possibile estendere le consuete operazioni sulle funzioni (inversa e composizione) anche alle relazioni fuzzy.

Data una relazione $R(X,Y)$ il suo **dominio**, denotato $dom R$, è definito come: $$dom R(x) = \max_{y \in Y}\{ R(x,y) \}$$

Data una relazione $R(X,Y)$ il suo **codominio**, denotato $ran R$, è definito come: $$ran R(x) = \max_{x \in X}\{ R(x,y) \}$$
Data una relazione $R(X,Y)$ la sua **altezza**, denotata $h R$, è definita come: 
$$h R(x) = \max_{x \in X} \max_{y \in Y} \{ R(x,y) \}$$

Data una relazione $R(X,Y)$ la sua **inversa**, denotata $R^{-1}$, è definita come la relazione su $Y \times X$ tale che:

$$R^{-1} (y,x) = R(x,y) \quad \forall x \in X, \forall y \in Y$$

Data una relazione $R(X,Y)$ e una relazione $Q(Y,Z)$ la loro **composta**, denotata $R \circ Q (X,Z)$, è definita come la relazione su $X \times Z$ tale che:

$$R \circ Q (x,z) = \sup_{y \in Y} \{ \min \{ P(x,y),Q(y,z)\} \quad \forall x \in X, \forall z \in Z \}$$

Data una relazione $R(X,Y)$ e una relazione $Q(Y,Z)$ il loro **join**, denotato $R \star Q (X,Y,Z)$, è definito come quella relazione su $X \times Y \times Z$ tale che:

$$R \star Q (x,y,z) = \min \{ P(x,y),Q(y,z)\} \quad \forall x \in X, \forall y \in Y, \forall z \in Z$$

Data una relazione $R(X,X)$, si definisce una **relazione di equivalenza** se e solo se la relazione soddisfa le seguenti proprietà:
1) **riflessività**: $\forall x \in X \quad R(x,x) = 1$;
2) **simmetria**: $\forall x,y \in X \quad R(x,y) = R(y,x)$;
3) **transitività**: $\forall (x,z) \in X^2 \quad R(x,z) \geq \max_{y \in X} \min \{ R(x,y),R(y,z) \}$.

----------------------------------------------------------------

### Fuzzy controller ###

![[fuzzycontroller.png]]

Un'applicazione dei sistemi fuzzy che ha riscosso particolare successo riguarda i cosiddetti **fuzzy controller**.<br />
Il concetto su cui si basa il fuzzy control è quello di definire un controller non-lineare basato su tabelle tra i diversi stati del sistema, dove la sua funzione di transizione non-lineare può essere definita senza specificare ogni singola entry della tabella. Questo permette di modellare sistemi complessi le cui dinamiche possono sfuggire ad un'analisi matematicamente precisa.<br />
La **fuzzification interface** riceve i valori in input e si occupa di convertirli in un dominio adeguato (termini linguistici o fuzzy set). La **knowledge base** è composta da data base e rule base. La prima consiste di informazioni riguardanti intervalli, trasformazioni di dominio e a quali insiemi fuzzy corrisponderanno i termini linguistici. La seconda consiste di controlli del tipo **if-then** (i.e. "if temperature is **very high** and pressure is **slightly low**, then heat change should be **slightly negative**"). La **decision logic** rappresenta l'unità processore, la quale si occupa di computare l'output in base all'input misurato ed alla knowledge base. Infine, la **defuzzification interface** si occupa di mappare i valori fuzzy, output della computazione, in valori Booleani, i quali sono poi inviati come segnali al controller del sistema.

----------------------------------------------------------------

#### Fuzzification ####
La **fuzzification** è il processo utilizzato da tutti i fuzzy controller al fine di trasformare un input netto in un valore fuzzy. Tipicamente, il componente incaricato di questa task è la **fuzzification interface**, della quale l'architetto del controller definisce, basandosi sulla conoscenza dell'ambiente, le funzioni di appartenenza che verranno utilizzate per valutare gli input.

----------------------------------------------------------------

#### Defuzzification ####
Il processo di **defuzzificazione** è il processo usato da tutti i fuzzy controller al fine di trasformare l'output fuzzy, prodotto dal decision logic component, in un valore preciso, il quale possa essere usato dal controller per prendere una decisione. In letteratura, i metodi più comuni sono:
1) **Max Criterion Method** (MCM): questa tecnica si basa sullo scegliere il valore di output $y$ tale per cui $\mu(x_1,...,x_n)$ raggiunga il massimo grado di appartenenza. Il MCM comporta, come vantaggi, la facilità di computazione ed il fatto che sia sempre applicabile. D'altro canto, se valori multipli hanno lo stesso valore di output, sarà comunque necessario sceglierne solo uno (per esempio randomicamente). In questo modo non si ha un comportamento deterministico;
2) **Mean of Maxima** (MOM): al fine di risolvere il non determinismo della tecnica precedente, è possibile considerare tutti i valori $y_i$ per cui $\mu(x_1, ..., x_n)$ raggiunge il massimo grado di appartenenza e calcolare, poi, la loro media. Il MOM comporta, come vantaggi, la facilità di computazione ed il fatto che abbia comportamento deterministico ma, come svantaggio, non è sempre applicabile (infatti, il set di $y_i$ deve essere necessariamente un intervallo e deve esistere un insieme di valori misurabili);
3) **Center of Gravity** (COG): l'ultima tecnica considera tutti i valori di output, invece di considerare l'insieme massimo $Y$, e calcola la somma dei valori di output, ciascuno di essi moltiplicato per il grado di appartenenza diviso per il totale dei gradi di appartenenza. Il vantaggio di questa tecnica consiste nel considerare tutti i valori così da ottenere un comportamento molto più preciso ma, di contro, ha elevati costi computazionali ed il risultato può non essere intuitivo.

----------------------------------------------------------------

### Mamdani controller ###
Il primo modello di fuzzy controller è il cosiddetto **Mamdani controller**, sviluppato nel 1975 da Mamdani e Assilian. Questo controller è basato su un insieme finito $\mathbf{R}$ di regole **if-then** $R \in \mathbf{R}$ della forma

$$R: \text{ If }x_1 \text{ is } \mu_{R}^{(1)} \text{ and } \dots \text{ and } x_n \text{ is } \mu_{R}^{(n)} \text{, then } y \text{ is } \mu_R$$

$x_1, \dots, x_n$ sono variabili di input del controller, $y$ è il valore di output, $\mu_{R}^{(i)}$ identificano valori linguistici, cioè concetti vaghi (i.e. altezza media, ecc.) i quali sono rappresentati da insiemi fuzzy, così come $\mu_{R}$, il quale è l'insieme fuzzy della variabile di output corrispodente ad una delle regole presenti nella rule base.<br />
Nonostante le regole siano formulate nella forma di if-then statements, non devono essere interpretate come implicazioni logiche quanto come funzioni definite a tratti. 

Le regole possono assumere come valori intervalli **crisp**, oppure valori fuzzy.<br />
Questo controller necessita di tre fasi fondamentali:
1) la fase di fuzzificazione, nella quale l'input crisp esterno viene trasformato in un grado di appartenenza agli insiemi fuzzy dalle differenti regole del controller;
2) al fine di calcolare la funzione di output, è necessario calcolare per ogni regola il valore minimo tra i gradi di appartenenza del vettore di input alle differenti componenti della regola e salvare poi il cut off nella rispettiva output rule. Successivamente, per ogni valore del dominio dell'output, si sceglie il massimo tra i cut off ottenuti nello step precedente; 
3) la fase di defuzzificazione, utilizzata per tornare ad un valore crispy dall'insieme fuzzy. Il metodo utilizzato può essere MCM, MOM o COG.

![[rulesfuzzy.png]]

![[fuzrule.png]]

![[outputrules.png]]

----------------------------------------------------------------

### Takagi-Sugeno-Kang controller ###
Questo controller può essere visto come una modifica ed uno sviluppo del controller precedente. Nello stesso modo del Mamdani controller, i valori di input vengono descritti da fuzzy set. Tuttavia, l'output di una regola non sarà a sua volta un fuzzy set, ma sarà dato da una funzione che ha come argomenti le variabili di input (generalmente, una funzione lineare).

$$R : \text{ if } x_1 \text{ is } \mu_1 \text{ and } \dots \text{ and } x_n \text{ is } \mu_n, \text{ then } y = f(x_1,\dots,x_n)$$

L'output di ogni regola è dato da una funzione che prende gli input come parametri. Questo porta ad una gestione del calcolo dell'output differente, poichè ciascuno degli output è un valore crisp. In questo caso, è possibile defuzzificarli pesando ciascun'output delle regole con il corrispondente grado di appartenenza degli input, sommandoli e dividendo per la somma dei pesi. 

----------------------------------------------------------------

### Similarity-based reasoning ###
Una funzione $E: X^2 \to [0,1]$ è definita **relazione di somiglianza** rispetto ad una T-norma se e solo se soddisfa le seguenti condizioni:
1) $E(x,x) = 1$;
2) $E(x,y) = E(y,x)$;
3) $\top (E(x,y),E(y,z)) \leq E(x,z)$.

L'idea di fondo è l'utilizzo di una sequenza di equivalenze per output noti che sono triggerati da input specifici: sfruttando le relazioni di somiglianza tra input e valori noti, è possibile trovare l'output desiderato più simile all'input dato.<br />  
Questo genere di relazioni vengono utilizzate per tradurre l'informazione data dagli esperti in modo tale che le varie tuple coprano tutti i possibili comportamenti del sistema. Dalle classi di somiglianza, è possibile poi estrarre regole in tutto uguali a quelle valide per il Mamdani controller.

----------------------------------------------------------------

### Fuzzy data analysis ###
Ci sono due casistiche in cui si parla di **fuzzy data analysis**. Una di esse riguarda l'applicazione di tecniche di ragionamento fuzzy rispetto a dati crisp (si parlerà in questo caso di **fuzzy clustering**). Un'altra, invece, riguarda l'analisi di dati presentati sotto forma di fuzzy set (si parlerà in questo caso di **random set** e **random fuzzy variables**).

#### Fuzzy clustering ####

![[symmetricdata.png]]

Il **fuzzy clustering** è una procedura di apprendimento non supervisionato che permette di dividere il dataset in modo tale che 
1) oggetti nello stesso cluster siano quanto più possibile simili;
2) oggetti in cluster diversi siano quanto più possibile dissimili. 

La relazione di somiglianza è misurata in termini di una funzione di distanza. Minore è la distanza, maggiore è la probabilità che due elementi appartengano allo stesso cluster. Nel caso dell'algoritmo **hard c-means** si sceglie un numero $c$ di cluster, si distribuiscono in modo randomico i centri e si procede all'assegnamento dei punti più vicini ai centri dei rispettivi cluster. Successivamente si aggiorna la posizione dei centri tramite il calcolo del centro di gravità. Si ripete il processo fino a quando la posizione si stabilizza. La partizione in cluster ottenuta è ottimale quando la somma delle distanze tra i centri e gli elementi è minima. <br />
Un problema di questo approccio è che l'algoritmo può rimanere bloccato in minimi locali. Per ovviare a questo inconveniente, solitamente si fanno varie iterazioni e se ne sceglie la migliore. Un diverso problema è quello che discende dal fatto che la partizione è crisp. Qualora, infatti, esista un elemento equidistante da due centri, l'assegnamento ad uno dei due cluster è puramente arbitrario e non rispecchia l'informazione fornita dai dati. Il **fuzzy clustering** fornisce una soluzione a questo problema. Introducendo un concetto di appartenenza non binario ma continuo in $[0,1]$, il fuzzy clustering offre la possibilità di esprimere l'appartenenza di un punto a più di un cluster. Il risultato sarà una partizione del dataset in fuzzy set. E' possibile rappresentare questa partizione attraverso una matrice che assegna ad ogni elemento della matrice $u_{ij}$ il grado di appartenenza del punto $x_j$ al fuzzy set $\Gamma_i$, in simboli $u_{ij} = \mu_{\Gamma_i}(x_j)$.<br />
Esistono due tipi di fuzzy clustering: quello **probabilistico** e quello **possibilistico**. La differenza giace nelle condizioni imposte alla funzione di appartenenza.<br />
Nel caso *probabilistico* si avrà che: 
1) $\sum_{j=1}^{n} u_{ij} > 0, \quad \forall i \in \{1,\dots,c \}$;
2) $\sum_{i=1}^{c} u_{ij} = 1, \quad \forall j \in \{1,\dots,n \}$.

La prima condizione sta ad indicare che non possono esistere cluster vuoti. La seconda, invece, indica che l'appartenenza è esaurita dall'insieme dei fuzzy set che costituiscono la partizione.<br />
Nel caso **possibilistico** si mantiene solo la prima assunzione e si lascia cadere la seconda. L'interpretazione possibilistica è da preferire quando si ha a che fare con dati pieni di rumore o outlier.

----------------------------------------------------------------

#### Problemi con il fuzzy clustering ####
Come è possibile sapere se la partizione in cluster operata da un algoritmo rispecchia l'informazione implicita nei dati? Qual è l'ottimo numero di cluster per un dataset? Nel caso in cui si abbia un numero limitato di dimensioni, è possibile rappresentare visivamente il dataset ed avere un'intuizione di quanti centri avere, oltre che in quali posizioni collocarli. In generale, tuttavia, non è questo il caso. Per questo occorre definire una misura della qualità del clustering operato tramite l'algoritmo.<br />
Alcuni criteri da ricercare sono: una chiara separazione tra i cluster, minimo volume dei cluster e massimo numero di punti concentrati vicino al centro del cluster. In letteratura sono state proposte varie misure di questo tipo:
1) **Partition coefficient**: $PC = \frac{1}{n}\sum_{i=1}^{c} \sum_{j=1}^{n} u_{ij}^2$;
2) **Average partition density**: $APD = \frac{1}{c} \sum_{i=1}^c \frac{\sum_{j \in Y_i} u_{ij}}{\sqrt{|\sum_i|}}$;
3) **Partition entropy**: $PE = \sum_{i=1}^{c} \sum_{j=1}^{n} u_{ij} \log u_{ij}$.

----------------------------------------------------------------

#### Varianti ####
La misura di distanza più intuitiva è quella euclidea, ma questa ha l'inconveniente di permettere solo cluster sferici. Alcune varianti sono state proposte per rilassarne i vincoli. Nell'algoritmo di **Gustafson-Kessel** la distanza euclidea è sostituita con quella di **Mahalanobis** definita rispetto ad un cluster $\Gamma_i$ come:
$$d^2(x_j,C_j) = (x_j - c_i)^T \sum_i^{-1} (x_j - c_i)$$

dove $\sum_i$ è la matrice covariante del cluster $i$. Questo algoritmo è preferito nel caso in cui il clustering sia utilizzato per la generazione automatica di fuzzy rule per i controller. La dimensione dei vari cluster può variare a seconda del determinante della matrice (solitamente le dimensioni dei vari cluster sono le stesse e il determinante è uguale a 1). In generale, l'algoritmo di Gustafson-Kessel estrae più informazioni dell'algoritmo standard ma è anche più sensibile ad una corretta inizializzazione. Può essere utile, al fine di ottenere una buona inizializzazione, procedere preliminarmente con alcune iterazioni dell'algoritmo standard. Data la presenza dell'inversione della matrice, questo algoritmo è più costoso di quello standard e difficile da applicare a grossi dataset. Restringersi a cluster che risultano distribuiti lungo una retta parallela rispetto agli assi riduce il costo computazionale. Un altro approccio è quello di permettere cluster di forma non convessa. 

![[shellcluster.png]]

Gli algoritmi di **shell clustering** svolgono esattamente questo e sono particolarmente utili per il riconoscimento di immagini e la loro analisi. Un altro approccio presente in letteratura è quello del **kernel-based clustering**, il quale è utile qualora si abbia a che fare con dati non-vettoriali come sequenze, alberi o grafi. Questo metodo si basa su una mappa $\phi: \chi \to \mathbb{H}$, dove $\mathbb{H}$ è uno spazio di Hilbert e $\chi$ è lo spazio degli input. I dati così mappati non vengono utilizzati direttamente, ma solo attraverso il loro prodotto interno (la cui esistenza ci è garantita in quanto ci si trova in uno spazio di Hilbert). Si definisce per questo una funzione kernel $k$ tale che:

$$k: \chi \times \chi \to \mathbb{R}, \forall x,x' \in \chi: <\phi(x),\phi(x')> = k(x,x')$$

A differenza degli altri algoritmi di clustering, questa funzione non estrae dai dati dei prototipi per i singoli cluster, ma computa una relazione di somiglianza tra i vari input. I centri sono combinazioni lineari dei dati mappati in $\mathbb{H}$:

$$c_i^{\phi} = \sum_{r=1}^n a_{ir} \phi(x_r)$$

Alcuni svantaggi sono causati dalla difficoltà nella scelta di un'adeguata funzione kernel e dei parametri oltre che dalla mancanza di un'esplicita rappresentazione dei singoli cluster.<br />
Un ultimo tipo di algoritmo è quello detto di **noise clustering**. Questi algoritmi aggiungono un cluster $c$, il quale rappresenta tutti quei dati corrotti dal rumore o in altro modo non associabili a nessun altro cluster (outlier etc.). Il centro del cluster $c$ è scelto in modo da avere distanza costante da tutti i punti del dataset.

----------------------------------------------------------------

#### Random set ####
Se finora si sono applicate tecniche fuzzy a dati crisp, ora si vogliono estendere queste tecniche in modo da comprendere descrizioni di dati fuzzy. Per fare ciò occorre introdurre il concetto di **random set**. Nel trattamento statistico standard dei dati, la loro analisi è basata su variabili random, ovvero su una funzione misurabile da uno spazio di probabilità ad un insieme $U$ (solitamente l'insieme $\mathbb{R}$). Un random set è una generalizzazione di questa idea, nel senso che il valore della funzione non sarà più un elemento dell'insieme $U$, bensì un suo sottoinsieme.<br />
Data una funzione $\Gamma: \Omega \to 2^U$, alcuni utili concetti da definire sono quello di **limite superiore di probabilità** (in simboli $P^*(A)$), il quale indica la proporzione di elementi la cui immagine "tocca" un certo sottoinsieme di $U$:

$$P^*(A) = P(\{ \omega \in \Omega | \Gamma (\omega) \cap A \neq \emptyset \})$$

e quello di **limite inferiore di probabilità** (in simboli $P_*(A)$), il quale indica la proporzione di elementi la cui immagine è interamente contenuta in un dato sottoinsieme di $U$:

$$P_*(A) = P(\{ \omega \in \Omega | \Gamma (\omega) \subseteq A \text{ e } \Gamma(\omega) \neq \emptyset \})$$

Attraverso questi strumenti, è possibile analizzare dati descritti in modo fuzzy. E', Inoltre, è possibile associare ad ogni elemento della mappa una probabilità attesa $E(\Gamma)$ in modo che:

$$E(\Gamma) = \{ E(X) | X(\omega) \in \Gamma(\omega) \text{ e la } X \text{ è una variabile randomica tale che } E(X), \forall \omega \in \Omega \}$$

Si è in grado di generalizzare ancora l'approccio, permettendo alla funzione $\Gamma$ di mappare gli input in un insieme fuzzy.

----------------------------------------------------------------

### Fuzzy neural network ###
A differenza delle reti neurali, i fuzzy system hanno a che fare con il ragionamento ad alto livello, non si adattano al nuovo ambiente ma usano informazioni linguistiche relative al dominio del discorso e non si basano sui dati. I **fuzzy neural network** combinano la computazione parallela e le capacità di apprendimento delle reti neurali con la rappresentazione ad alto livello dei sistemi fuzzy. Questo permette di avere un'interpretazione più perspicua dello stato interno della rete neurale durante la computazione.<br />
Vi sono due modalità in cui i sistemi fuzzy e le reti neurali possono collaborare:
- modello **cooperativo**: i due sistemi lavorano indipendentemente. La rete neurale genera certi parametri o li ottimizza per il fuzzy controller;
- modello **ibrido**: i fuzzy set e le regole fuzzy sono mappate all'interno di una rete neurale. Le due strutture sono integrate e non si richiede l'overhead di comunicazione.

Nella modalità ibrida, i fuzzy set che appaiono negli antecedenti delle regole fuzzy possono essere modellati sia come pesi delle connessioni tra neuroni, oppure come funzione di attivazione dei neuroni stessi. Nel primo caso, i neuroni del primo strato rappresentano la regola. Nel secondo, i neuroni del primo strato rappresentano l'insieme di input, mentre quelli del secondo la regola.

----------------------------------------------------------------

### Algoritmo ###
Un insieme di regole fuzzy può essere tradotto in una rete neurale tramite la seguente procedura:
1) Per ogni variabile di input $x_i$, si crea un neurone nel layer di input;
2) Per ogni variabile di output $y_i$, si crea un neurone nel layer di output;
3) Per ogni fuzzy set $\mu_i^j$, si crea un neurone nel primo layer hidden e lo si connette al neurone di input corrispondente a $x_i$;
4) Per ogni regola fuzzy $R_i$, si crea un neurone nel secondo layer hidden e si specifica una T-norma per calcolare l'antecedente della regola;
5) Si connette ogni neurone del secondo layer hidden ai neuroni che rappresentano i fuzzy set degli antecedenti della loro regola corrispondente;

A questo punto l'algoritmo diverge a seconda di quale tipo di controller si voglia utilizzare:
- nel caso del Mamdani controller, si connette ogni neurone "regola" al neurone di output corrispondente al dominio del conseguente nella regola fuzzy. Come peso della connessione si sceglie il fuzzy set del conseguente della regola fuzzy;
- nel caso del Takagi-Sugeno-Kang controller, per ogni neurone "regola" si crea un neurone gemello, il quale computa la funzione di output. Le regole sono computate come nel caso precedente, e viene utilizzato un neurone finale per calcolare la somma pesata dei gradi di appartenenza degli input di ciascuna regola, moltiplicato per la corrispondente funzione di output e dividendo il tutto per la somma dei gradi di appartenenza.

Il network così costruito può essere allenato grazie alla backpropagation.

![[fuzzyneural.png]]

----------------------------------------------------------------

## Algoritmi evolutivi ##
### Introduzione ###
Gli **algoritmi evolutivi** comprendono una classe di tecniche di ottimizzazione le quali imitano i principi dell'evoluzione biologica. Il principio cardine degli algoritmi evolutivi è l'applicare principi quali mutazione e selezione a popolazioni di soluzioni candidate al fine di trovare una soluzione sufficientemente valida per un dato problema di ottimizzazione.<br />
Un **problema di ottimizzazione** può essere descritto da una tripla $(\Omega,f,\prec)$, dove $\Omega$ è lo spazio di ricerca, $f$ è una funzione di valutazione della forma $f:\Omega \to \mathbb{R}$ e $\prec$ un preordine. L'insieme $H \subseteq \Omega$ tale che:

$$H = \{ x \in \Omega | \forall x' \in \Omega: f(x) \succeq f(x') \}$$

è definito l'insieme degli **ottimi globali**. Dato un problema di questo genere, la sua soluzione sta nel fornire un elemento il quale appartenga all'insieme $H$. In letteratura sono stati proposti vari metodi di soluzione per i problemi di ottimizzazione:
- soluzioni analitiche;
- brute-forcing;
- random search;
- ricerca guidata.

Tutti questi metodi hanno delle criticità o sono applicabili solo ad alcuni tipi di funzione. Gli **algoritmi evolutivi** rispondono a questo problema adottando una strategia innovativa. Tali algoritmi sono direttamente ispirati alla teoria dell'evoluzione biologica, i cui principi fondamentali sono:
1) tratti vantaggiosi, risultati di mutazioni casuali, tendono ad essere favoriti dalla selezione naturale;
2) gli individui che mostrano questi tratti vantaggiosi hanno migliori opportunità di procreare e moltiplicarsi.

Gli elementi di un algoritmo evolutivo sono:
1) una **codifica** in **cromosomi** per i candidati, non in termini biologici ma in termini di oggetti computazionali, chiamati **geni**, rappresentati da bit, stringhe, interi, etc...;
2) un metodo per creare una **popolazione iniziale**, tramite un **algoritmo costruttivo**;
3) creare una **funzione di fitness** per valutare i candidati, il cui valore risultante rappresenta la qualità dell'individuo;
4) dei **metodi di selezione** in relazione ai valori di fitness: si scelgono così gli individui che dovranno procreare nella successiva generazione;
5) un insieme di **operatori genetici** che modifichino i cromosomi: i due più usati sono quello di **mutazione**, il quale modifica in modo random i cromosomi e quello di **crossover**, il quale ricombina i cromosomi dei genitori per creare la prole;
6) alcuni parametri come **dimensione della popolazione**, **probabilità di mutazione**, etc;
7) una **condizione di terminazione**: numero di generazioni, approssimazione all'ottimo, etc;

----------------------------------------------------------------

### Definizione formale ###
Per ogni problema di ottimizzazione occorre separare lo spazio dei **fenotipi** $\Omega$ (ovvero, come l'individuo appare) da quello dei **genotipi** $\Gamma$ (ovvero, come l'individuo è rappresentato dalla codifica scelta). La funzione di fitness sarà definita sui fenotipi, dove, invece, gli operatori genetici agiranno sui genotipi. Per valutare i cambiamenti nel genotipo sarà necessario fornire una funzione di
*decodifica* $dec: \Gamma \to \Omega$.

Ogni **individuo** $A$ è rappresentato da un tupla $(A.G, A.S, A.F)$ contenente il genotipo ($A.G \in \Gamma$), informazioni e parametri addizionali $A.S \in Z$ e la valutazione dello stesso rispetto alla funzione di fitness $A.F = f(dec(A.G))$.<br />
L'operatore di **mutazione** è definito come una mappa:

$$Mut^{\xi} : \Gamma \times Z \to \Gamma \times Z$$

dove $\xi$ è un numero randomicamente generato.
L'operatore di **ricombinazione** avente $r \geq 2$ genitori e $s \geq 1$ figli è definito come una mappa:

$$Rek^\xi : (\Gamma \times Z)^r \to (\Gamma \times Z)^s$$

dove $\xi$ è un numero randomicamente generato.<br />
L'operatore di **selezione** permette di scegliere grazie ai valori di fitness tra una popolazione di $r$ individui un numero $s$ di individui i quali continueranno la specie. Sia $P = \{\ A_1, \dots, A_r \}$ la popolazione di individui. Allora, l'operatore di selezione avrà la forma:

$$Sel^\xi : (\Gamma \times Z \times \mathbb{R})^r \to (\Gamma \times Z \times \mathbb{R})^s$$
$$\big\{A^{(i)}\big\}_{ 1 \leq i \leq r} \quad \mapsto  \quad \Big\{A^{(IS^\xi (c_1,\dots,c_r)_k)} \Big \}_{1 \leq k \leq s} $$

dove la selezione ha la forma:

$$IS^\xi : \mathbb{R}^r \to \{ 1, \dots, r \}^s$$

dove $\{1, ..., r\}$ è l'insieme degli indici degli individui nello spazio di ricerca.

![[evalg.png]]

E' possibile dare ora una definizione formale di algoritmo evolutivo: un **algoritmo evolutivo** su un problema di ottimizzazione $P$ è una tupla $(\Gamma, dec, Mut, Rek, IS_{genitori}, IS_{ambiente}, \mu, \lambda)$, dove $\mu$ descrive il numero degli individui della generazione precedente e $\lambda$ descrive il numero di figli per generazione.

$$Rek : (\Gamma \times Z)^k \to (\Gamma \times Z)^{k'}$$
$$IS_{genitori} : \mathbb{R}^\mu \to \{ 1, \dots, \mu \}^{\frac{k}{k'}\cdot \lambda} \quad \frac{k}{k'}\cdot \lambda \in \mathbb{N}$$
$$IS_{ambiente} : \mathbb{R}^{\mu + \lambda} \to \{ 1, \dots, \mu + \lambda \}^\mu$$

Vi è una distinzione che si può tracciare all'interno degli algoritmi evolutivi:
- gli **algoritmi genetici**: dove la codifica è una sequenza binaria;
- gli **algoritmi evolutivi propriamente detti**: dove la codifica dipende dal problema trattato e così gli operatori genetici;

----------------------------------------------------------------

### Meta-euristiche ###
Una **meta-euristica** è un metodo algoritmico per trovare soluzioni approssimate di un problema di ottimizzazione combinatoria. Si definiscono sequenze astratte di passi che possono essere applicate a qualsiasi problema del genere. Ogni singolo passo deve poi essere declinato a seconda della specificità del problema. Il bisogno per un approccio meta-euristico nasce dal fatto che alcune classi di problemi non hanno una soluzione algoritmica efficiente. L'approssimazione che si otterrà rispetto alla soluzione ottima dipende dalla definizione del problema e dall'implementazione dei singoli passi del meta-algoritmo.

----------------------------------------------------------------

### Local search method
Una meta-euristica è quella comunemente chiamata **local search method** e costituisce un caso particolare di algoritmo evolutivo. Dato un problema di ottimizzazione $P$ e la funzione da ottimizzare $f$, questo metodo cerca i massimi globali **localmente**, attorno cioè ai punti scelti durante la fase di inizializzazione. Viene assunto che il valore della funzione in $x_1$ e in $x_2$ differisca meno, quanto più i due argomenti siano simili, cioè $f$ è una funzione continua e priva di salti. La particolarità di questo approccio evolutivo è data dal fatto che la popolazione si limiti ad un solo individuo, cioè l'individuo che l'algoritmo considera come candidato ottimo all'iterazione corrente. Questo ha alcune conseguenze, soprattutto rispetto agli operatori genetici: l'operatore di ricombinazione non è più necessario e ci si limita a quello di mutazione. Ad ogni passo si può decidere se continuare a mutare l'individuo o crearne uno diverso (cioè reinizializzare la funzione per allontanarsi da minimi/massimi locali). L'idea è quella di utilizzare il **gradient ascent/descent** per identificare un punto di massimo/minimo, facendo un passo nella direzione del gradiente. L'ampiezza dei passi non deve essere troppo piccola perchè in quel caso l'algoritmo convergerebbe troppo lentamente, nè troppo grande perchè si rischia di saltare da un picco all'altro della funzione obiettivo, senza mai convergere. Per prevenire il fatto che si rimanga bloccati in minimi/massimi locali, si eseguono varie iterazioni dell'algoritmo a partire da diverse inizializzazioni. Se $f$ non dovesse risultare differenziabile, si cercherà di determinare la direzione di crescita di $f$, valutando punti casuali nell'intorno della posizione attuale (**hill climbing**).

Una generalizzazione dei precedenti approcci è ciò che in letteratura viene chiamato **simulated annealing**. L'idea alla base di questa tecnica si fonda sull'accettare anche soluzioni che non migliorano la funzione obiettivo, al fine di riuscire ad evadere da un ottimo locale. I movimenti fatti considerano l'**energia** del sistema, il quale deve cambiare fino al raggiungimento di un **equilibrio termico**, impedendo, così, di potersi spostare in un altro stato. Lo stato corrente identifica l'energia del sistema. Soluzioni migliori saranno accettate con probabilità pari a $1$, ma nel caso di soluzioni peggiori, queste potranno essere comunque accettate a seconda della loro "qualità". Più bassa la qualità, più bassa sarà la probabilità che la soluzione proposta venga accettata.

----------------------------------------------------------------

### Threshold accepting ###
Tecnica molto simile al simulated annealing: soluzioni peggiori sono accettate sporadicamente ma con un upper bound sulla degradazione della qualità.

----------------------------------------------------------------

### Great deluge algorithm ###
Tecnica molto simile al simulated annealing: soluzioni peggiori sono accettate sporadicamente ma viene utilizzato un lower bound assoluto.

----------------------------------------------------------------

### Record to record travel ###
Variante della tecnica great deluge, utilizza il rising water level, ovvero un lower bound collegato al valore di fitness del miglior individuo trovato.

----------------------------------------------------------------

### Tabu search ###
L'algoritmo **tabu search** può essere visto come una local search che, nel momento di creare un nuovo individuo, considera la storia delle passate generazioni. Si appronta una lista (FIFO) di **tabù**, la quale permette di evitare di ricorrere a candidati già testati o di memorizzare proprietà particolari di soluzioni già osservate. Ogni entry nella lista di tabù ha un time to leave, altrimenti l'algoritmo si troverebbe incastrato da soluzioni tabù nelle vicinanze. 

----------------------------------------------------------------

### Algoritmi memetici ###
Un diverso approccio è quello degli **algoritmi memetici**. Questi algoritmi uniscono i pregi dell'approccio **population-based** (lento, ma che offre più informazioni) e quello **local search** (veloce, ma suscettibile ai minimi locali). I "memes" sono elementi del comportamento che possono essere acquisiti individualmente. La procedura prevede che, per ogni individuo creato, si cerchi di ottimizzarlo e che solo dopo si consideri la popolazione nella sua interezza. Questo permette spesso di accellerare il processo di ottimizzazione, ma le dinamiche "evolutive" vengono limitate in modo critico: le mutazioni rischiano di bloccarsi frequentemente in minimi locali e la ricombinazione ha un raggio di azione limitato, date le precondizioni imposte. 

----------------------------------------------------------------

### Evoluzione differenziale ###
Un'altra strategia è quella dell'**evoluzione differenziale**. Non si ha, in questo caso, un adattamento dell'ampiezza dei passi, ma si cerca di calcolare quest'ampiezza utilizzando come base le relazioni tra gli individui nella popolazione. Si introduce un particolare operatore genetico: **DE-operator**. Questo operatore può essere visto come una combinazione dell'operatore di ricombinazione e quello di mutazione. Nella selezione, invece, un discendente può rimpiazzare i suoi antenati se e solo se ha un miglior valore di fitness.

----------------------------------------------------------------

### Scattered search ###
L'idea alla base degli algoritmi **scatter search** sfrutta l'avere una popolazione di individui e di operare una ricerca locale attorno a quest'ultimi.<br />
Si tratta di un processo iterativo in due fasi:
1) la generazione di nuovi individui e la selezione dei candidati che garantiscono la maggiore varietà possibile;
2) la ricombinazione di tutte le coppie possibili degli individui scelti e la selezione dei migliori. Si itera poi fino al raggiungimento di uno stato stabile.

Dati i valori registrati da questa ricerca, si forza l'evoluzione verso la direzione del massimo registrato. Questo è un metodo puramente deterministico, a differenza dei precedenti. La sua bontà dipende dalla copertura dello spazio di ricerca che si è in grado di offrire.

----------------------------------------------------------------

### Algoritmi culturali ###
Oltre alle informazioni genetiche, si possono considerare anche quelle "culturali", relative alle skill apprese dalle precedenti generazioni. Gli **algoritmi culturali** cercano di trarre vantaggio da questa memoria generazionale, in modo che gli individui vengano influenzati da quest'ultima. Esistono due tipi di sapere culturalmente rilevante: 
- **Sapere situazionale**: relativo a generazioni tra loro prossime;
- **Sapere normativo**: sempre rilevante.

----------------------------------------------------------------

## Elementi di algoritmi evolutivi ##
### Codifica ###
Le soluzioni al problema devono essere codificate in modo tale che si possa esplorare lo spazio delle possibili soluzioni attraverso questa rappresentazione.<br />
Non esiste una ricetta generale: la scelta della codifica è specifica per ogni problema. Tuttavia, esistono alcuni principi di massima da seguire:
1) Rappresentare fenotipi simili con genotipi simili, principio il quale assicura che mutazioni di certi geni risultino in genotipi simili e che radicali cambiamenti permettano di evadere da minimi locali;
2) La funzione di fitness deve restituire valori simili per candidati simili, principio il quale previene che si scelga una codifica troppo o troppo poco **epistatica**, ovvero fortemente dipendente da un singolo gene e non da tutto il cromosoma. Se troppo, una singola mutazione potrebbe produrre casuali cambiamenti di fitness. Se troppo poco, l'efficienza dell'algoritmo ne risente;
3) Lo spazio $\Omega$ deve essere chiuso rispetto agli operatori genetici. Infatti, se lo spazio di ricerca non dovesse essere chiuso, un cromosoma modificato potrebbe non essere più decodificato e interpretato.

----------------------------------------------------------------

### Fitness ###
Gli individui migliori (quelli che hanno migliori valori di fitness) dovrebbero avere le migliori opportunità di riprodursi. Per permettere questo, occorre esercitare ciò che in gergo viene chiamata **selective pressure** nel processo di creazione delle nuove generazioni. Se la selective pressure è bassa, si parla di **esplorazione dello spazio**: la deviazione permessa rispetto agli individui è la più ampia possibile (tutto $\Omega$), vi sono buone possibilità di raggiungere il massimo globale. Se la selective pressure è alta, si parla di **sfruttamento degli individui migliori**: si ricerca l'ottimo nelle vicinanze degli individui migliori e l'algoritmo converge velocemente, anche se col rischio di convergere ad un ottimo locale. Per poter scegliere la corretta selective pressure occorre una metrica per calcolarla. Alcune tra quelle utilizzate in letteratura sono: 
- **selection intensity**: il differenziale tra la qualità media prima e dopo l'avvenimento della selezione. Definisce la porzione di popolazione che sopravviverà e che verrà usata nella successiva iterazione;
- **time to takeover**: il numero di generazioni prima che la popolazione converga.

Gli stessi metodi di selezioni possono variare al variare della pressione evolutiva. Uno dei più usati è quello chiamato **roulette-wheel selection**. Si computa il valore di fitness relativo di ogni individuo grazie alla seguente formula:

$$f_{rel}(A_i) = \frac{A_i.F}{\sum_{j=1}^{|P|} A_j.F}$$

La probabilità per un individuo di essere selezionato per la riproduzione sarà proporzionale al suo valore di fitness relativo. Alcuni svantaggi sono:
- la computazione del valore di fitness relativo è costosa;
- gli individui con un alto valore di fitness potrebbero dominare la selezione (**scomparsa delle biodiversità**). La dominanza potrebbe diventare più forte nelle generazioni successive;
- molto veloce a trovare ottimi locali, ma pessima esplorazione dello spazio;
- convergenza prematura;
- **vanishing selective pressure**.

La stessa funzione di fitness può essere adattata per impedire una convergenza troppo rapida:
- **linear dynamical scaling**: riduciamo la rilevanza della funzione di fitness sottraendoci il minimo delle passate generazioni;
- **$\sigma$-scaling**: calcolata attraverso la formula $f_{\sigma}(A) = A.F - (\mu_f(t) - \beta \cdot \sigma_f(t))$, dove $\beta$ è un parametro positivo;
- **dipendente dal tempo**: il fattore temporale usato come esponente regola la selective pressure;
- **Boltzmann-selection**: determina la fitness relativa non direttamente, ma attraverso la funzione $g(x) = exp^{\frac{f(x)}{kT}}$. $T$ è una variabile che dipende dal tempo e $k$ è una costante di normalizzazione.

----------------------------------------------------------------

### Selezione ###
Vi sono varie strategie disponibili in letteratura per operare la selezione degli individui che costituiranno il pool genetico per la successiva generazione:
- **Roulette-wheel selection**: vedi sopra;
- **Rank-based selection**: si ordinano gli individui in ordine di fitness decrescente. A seconda della posizione si assegna ad ogni individuo un **rank** e con esso si definisce la probabilità di essere selezionati. Si procede ad una selezione del tipo roulette-wheel. Questo modello riesce ad ovviare al problema della dominanza e a regolare la pressione di selezione. Lo svantaggio sta nel fatto che occorre ordinare gli individui (complessità $O(n \log n)$);
- **Tournament selection**: si estraggono $k$ individui casualmente dalla popolazione. Tramite scontri individuali si decide il migliore, il quale riceverà un discendente nella prossima generazione. Tutti i partecipanti tornano poi nella popolazione (anche il vincitore). Si riesce così ad evitare il problema della dominanza e si riesce a regolare la pressione di selezione grazie alla grandezza del torneo;
- **Elitismo**: i migliori individui della generazione precedente costituiscono la generazione successiva. L'elite così scelta non è immune ai cambiamenti apportati dagli operatori genetici. Il vantaggio è che la convergenza viene ottenuta rapidamente. Lo svantaggio è che c'è il rischio di rimanere bloccati in ottimi locali.

Si vuole soprattutto prevenire il **Crowding**: gli individui delle generazioni successive dovrebbero rimpiazzare gli individui più simili a loro. La densità locale in $\Omega$ non può crescere in modo indefinito. Questo permette una migliore esplorazione dello spazio.

Di seguito si elencano alcune proprietà che possono caratterizzare i metodi di selezione:
- **Static**: la probabilità di selezione rimane costante;
- **Dynamic**: la probabilità di selezione può variare;
- **Extinguishing**: può darsi il caso che la probabilità di selezione sia 0;
- **Preservative**: la probabilità di selezione è sempre maggiore di 0;
- **Pure-bred**: gli individui possono avere discendenti solo in una generazione;
- **Under-bred**: gli individui possono avere discendenti in più di una generazione;
- **Right**: tutti gli individui possono riprodursi;
- **Left**: i migliori individui possono non riprodursi;
- **Generational**: i genitori non possono mutare fin quando i loro discendenti non vengono creati;
- **On-the-fly**: i discendenti sostituiscono i genitori;

----------------------------------------------------------------

### Operatori genetici ###
Gli **operatori genetici** sono applicati ad una frazione di individui scelti (popolazione intermedia). Vengono così generate mutazioni e ricombinazioni delle soluzioni già esistenti. Gli operatori genetici vengono classificati secondo la loro arietà in:
1) **One-parent operators**;
2) **Two-parent operators**;
3) **Multiple-parent operators**.

Nella prima classe è possibile trovare l'operatore di **mutazione**, il quale introduce piccoli cambiamenti randomici nel genoma della soluzione a cui viene applicato. Risulta utile per introdurre biodiversità nel pool delle soluzioni e per favorire l'esplorazione dello spazio di ricerca. Esistono vari metodi per operare una mutazione:
- **Standard mutation**: il valore di un gene o più viene mutato;
- **Pair swap**: si scambia la posizione di due geni;
- **Shift**: si shifta a destra o sinistra un gruppo di $k$ geni di $n$ posizioni;
- **Arbitrary permutation**: si permuta arbitrariamente un gruppo di geni;
- **Inversion**: si inverte l'ordine di apparizione di un gruppo di geni;
- **Binary Mutation**: si flippano dei bit;
- **Gaussian Mutation**: si aggiunge un numero randomico distribuito normalmente ad ogni gene.

Invece, l'operatore di gran lunga più importante tra quelli two-parent è quello di **ricombinazione** o **crossover**, il quale ha il compito, date due soluzioni, di creare attraverso una combinazione del loro codice genetico le soluzioni che costituiranno la generazione futura. Vi sono vari modi per operare questa ricombinazione:
- **one-point crossover**: si determina una posizione casuale nel cromosoma e si scambiano le due sequenze da un lato del taglio;
- **two-point crossover**: si determinano due posizioni casuali nel cromosoma e si scambia quell'intervallo di geni;
- **n-point crossover**: un generalizzazione dei precedenti. Si scambiano le aree incluse nei punti selezionati casualmente;
- **uniform crossover**: per ogni gene si determina se scambiarlo o meno a seconda di un certo parametro di probabilità;
- **shuffle crossover**: si procede inizialmente ad operare una permutazione randomica sui due cromosomi. Dopo si procede come nel one-point crossover e si conclude facendo l'unmixing;
- **uniform order-based crossover**: simile allo uniform crossover, per ogni gene si decide se tenerlo o cambiarlo. Gli spazi dei geni da cambiare sono riempiti nell'ordine di apparizione dei geni nell'altro cromosoma;
- **edge-recombination crossover**: il cromosoma è rappresentato come un grafo. Ogni gene è un vertice che ha archi verso i suoi vicini. Gli archi dei due grafi vengono mischiati. Si preserva l'informazione relativa alla vicinanza.

Un caso di multiple-parent operator è quello del **diagonal crossover**. Simile al n-point crossover, ma vi partecipano più di due genitori. Dati $k$ genitori, si scelgono $k-1$ punti per il crossover e si procede shiftando diagonalmente le sequenze rispetto ai punti scelti. Si generano così $k$ figli. Aumentando il numero di genitori si ottiene un ottimo grado di esplorazione dello spazio.

Alcune proprietà che possono caratterizzare gli operatori di crossover sono:
- **Positional bias**: si ha quando la probabilità che due geni vengano ereditati assieme dallo stesso genitore dipende dalla posizione (relativa) dei due geni nel cromosoma. Deve essere evitato perchè può rendere la disposizione dei differenti geni in un cromosoma cruciale per la riuscita dell'algoritmo;
- **Distributional bias**: si ha quando la probabilità che un certo numero di geni siano scambiati tra i genitori non è la stessa per tutti i possibili numeri di geni. Deve essere evitato perchè soluzioni parziali di differenti lunghezze hanno differenti probabilità di progredire alla generazione successiva. In generale, è meno problematico del positional bias.

Per migliorare le performance delle soluzioni si applicano due strategie:
- **Interpolating recombination**: si opera una fusione dei tratti dei due genitori in modo tale da creare nuovi discendenti. Si creano nuovi alleli (valori dei geni) e ne beneficiano particolarmente gli individui con migliore fitness. Per un'esplorazione sufficientemente ampia di $\Omega$ nelle prime iterazioni, occorre utilizzare una probabilità di mutazione molto alta;
- **Extrapolating recombination**: si inferiscono informazioni da una moltitudine di individui e si creano nuovi alleli in accordo E' l'unica tecnica di ricombinazione che prende in considerazione il fitness value. L'influenza della diversità è difficilmente quantificabile.

----------------------------------------------------------------

### Strategie di adattamento
Un ultimo aspetto da considerare è quello delle **strategie di adattamento** che rispondono a domande del tipo: dovremmo permettere che la mutazione introduca pesanti modifiche al fenotipo durante l'ottimizzazione? Per rispondere a questa ed altre domande occorre una metrica per misurare il miglioramento in fitness tra l'individuo e l'individuo mutato.

Il **miglioramento di fitness** di un individuo $A$ rispetto ad un individuo $B$ è definito come: 

$$imp(A,B) = |A.F - B.F|$$

se $A.F > B.F$, altrimenti $0$.

Il **miglioramento relativo atteso** di un operatore $mult$ rispetto ad un individuo $A$ è definito come: 

$$imp_{rel} = E(imp(A,mut(A)))$$

Data questa metrica si può giudicare le performance di un particolare operatore genetico. La qualità di una mutazione non può, però, essere giudicata a prescindere dal livello attuale di fitness. In generale, più ci si avvicina all'ottimo più occorre usare operatori locali. Esistono varie strategie di adattamento possibili:
- **Predefined adaptation**: si definiscono i cambiamenti prima della run;
- **Adaptive adaptation**: si definisce una metrica per stabilire durante la run quali operatori adottare;
- **Self-adaptation**: si utilizzano informazioni aggiuntive sugli individui.

----------------------------------------------------------------

### Swarm and population based optimization ###
La **swarm based optimization** e la **population based optimization** sono due meta-euristiche usate in letteratura al fine di sviluppare sistemi intelligenti multi-agente capaci di comportamento cooperativo. Il concetto di **swarm intelligence**, utilizzato per descrivere in natura il comportamento di alcune specie (api, formiche, etc.), sfrutta la capacità della popolazione di cooperare per il raggiungimento della soluzione di un problema. L'idea di base considera il fatto che i singoli individui (unità con skill limitate) scambino tra loro informazioni e si coordinino senza l'aiuto di un controllo centrale. Esistono varie tipologie di euristiche di questo genere:
- **Particle swarm optimization**: ispirato al pattern biologico della ricerca del cibo in uccelli e pesci, i quali si allontanano dall'insieme di individui per cercare cibo, e poi tornare per scambiare le informazioni scoperte. Gli individui aggregano informazioni, creando un insieme di conoscenze comuni, al fine di presentare una sola soluzione. Ogni individuo è un candidato ad essere la soluzione. La posizione di ogni individuo è aggiornata combinando la migliore soluzione visitata dall'individuo e la migliore soluzione conosciuta dall'intero swarm;
- **Ant colony optimization**: ispirato al pattern biologico delle formiche che cercano una strada che le conduca al cibo. Gli individui scambiano informazioni modificando l'ambiente, in modo che gli altri possano seguire (o meno) le loro tracce. Ogni individuo è un candidato ad essere la soluzione. Questa idea viene applicata utilizzando individui come formiche ed un grafo pesato nel quale è necessario trovare il path di costo minore;

Dal lato della **population based optimization** si trova, invece, il cosiddetto **population-based incremental learning**. Gli individui vengono generati randomicamente in accordo ad una distribuzione di probabilità. In realtà, non è necessario conservare in memoria gli individui in modo esplicito, ma è sufficiente conservare le statistiche della popolazione. Come operatore di ricombinazione viene utilizzato lo uniform crossover. Per la selezione, si scelgono gli individui che migliorino le statistiche della popolazione. La mutazione, invece, si limita ad un semplice **bit-flip**. La sua feature distintiva è che il **learning rate**, ovvero il parametro che regola la possibilità di movimento degli individui nello spazio, cambia nel tempo e si riduce con il numero di iterazioni. Questo permette, inizialmente, grande mobilità, per stabilizzarsi poi quando un ottimo viene trovato. Alcuni problemi con questa strategia sono:
- l'algoritmo può apprendere anche alcune dipendenze accidentali tra i cromosomi degli individui;
- considerare i singoli bit in isolamento gli uni dagli altri. 
- un diverso genere di problema riguarda la rappresentazione statistica della popolazione: la stessa statistica può rappresentare differenti popolazioni.

----------------------------------------------------------------

### Fondamenti teorici ###
Per dimostrare la correttezza degli algoritmi evolutivi occorre considerare gli **schemata**, ovvero cromosomi binari solo parzialmente specificati che codificano un particolare comportamento. Da qui, si partirà poi a studiare come il numero dei cromosomi che condividono lo schema si evolve rispetto alle generazioni. L'obbiettivo è quello di fornire una stima stocastica che descriva come un algoritmo evolutivo esplora lo spazio di ricerca.

Uno **schema** $h$ è una stringa di simboli di lunghezza $L$ sull'alfabeto $\{0,1,*\}$. Il carattere $*$ è una wildcard. Un cromosoma $c$ si dice che **condivide** lo schema $h$ (in simboli, $c \triangleleft h$) se e solo se, escluse le posizioni in $h$ aventi il simbolo $*$, $h$ coincide con $c$.

Per misurare gli effetti della selezione occorre calcolare la fitness dei cromosomi che condividono un certo schema. Di solito si sceglie come misura la **media del fitness** relativa ai soli cromosomi che condividono lo schema. Gli individui che condivideranno lo schema nella generazione successiva saranno proporzionali a questa media. Per calcolare, invece, l'influenza dell'operatore di mutazione occorre misurare la probabilità che, avvenuta la mutazione, lo schema si preservi. Si definisce, quindi, il concetto di **ordine** di uno schema.

L'**ordine** di uno schema $h$ è il numero degli 1 e degli 0 in $h$, ovvero

$$ord(h) = \#1 + \#0$$

E' possibile, ora, calcolare la probabilità che un operatore di mutazione preservi lo schema $h$ grazie alla formula:

$$(1 - p_m)^{ord(h)}$$

Per concludere, la probabilità che il crossover (ci si limiterà al caso **one-point**) preservi lo schema verrà misurato a seconda della **lunghezza definitoria** dello schema stesso.

La **lunghezza definitoria** di uno schema $h$ è la differenza tra l'ultima posizione in cui occorre un 1 o uno 0 in $h$ e la prima (in simboli, $dl(h)$).
La probabilità che il punto di \"taglio\" divida il cromosoma in modo tale che lo schema finisca nel mezzo sarà calcolata come:

$$\frac{dl(h)}{L-1}$$

dove $L$ è la lunghezza del cromosoma.Si definiscono, ora, alcuni concetti fondamentali per quello che segue. Il **valore atteso dei cromosomi che condividono lo schema** (in simboli, $N(h,t)$) è il numero di cromosomi che condividono lo schema durante la generazione $t$. Il **valore atteso (dei cromosomi che condividono lo schema) dopo gli operatori genetici** sarà calcolato come:
$$N(h,t + \Delta t_s + \Delta t_c + \Delta t_m) = N(h,t+1)$$ dove i vari $\Delta$ dipenderanno dalle probabilità dei singoli operatori definite sopra.

Un importante teorema, il così detto **schema theorem**, sostiene che schemi con un fitness sopra la media, una lunghezza definitoria corta e con ordine basso si riproducono in modo "quasi" esponenziale. Tuttavia, un altro importante teorema, il cosiddetto **no free lunch theorem**, sostiene che non esista un algoritmo evolutivo che possa essere utilizzato efficientemente per ogni problema. La scelta della "giusta" codifica e dei "corretti" operatori genetici dipenderà dalla conoscenza locale riguardo allo specifico problema.

---------------------------------------------------------------

### Programmazione genetica ###

![[parsetree.png]]

La **programmazione genetica** (in seguito GP) è una famiglia di algoritmi evolutivi i quali permettono la creazione automatica di programmi che possano risolvere problemi, mimando il processo mentale di un programmatore mentre costruisce un algoritmo. Per fare ciò occorre, innanzitutto, una codifica per rappresentare e manipolare un singolo programma:
- **F**: l'insieme dei simboli di funzione e degli operatori;
- **T**: l'insieme dei simboli terminali, come costanti e variabili.

Solitamente si rappresentano programmi sotto forma di **[[Albero|alberi sintattici]]**, dove i nodi interni sono le operazioni e le foglie variabili o costanti. L'insieme delle operazioni e dei simboli terminali varia da problema a problema. Se, per esempio, si volesse approssimare una funzione Booleana, si sceglierebbe l'insieme di operazioni $F = \{and, or, not\}$ e come insieme di terminali $T = \{ x_0, \dots, x_n, 1, 0 \}$. GP può risolvere un problema efficacemente ed efficientemente solo se l'insieme di operazioni e di simboli terminali è **completo** e **sufficiente**. Il problema di trovare il più piccolo insieme completo e sufficiente per un dato problema è, però, spesso un problema di [[Teoria della Complessità Computazionale |complessità NP-hard]].<br />
Può essere utile, inoltre, rappresentare i cromosomi come espressioni del linguaggio $L = F \cup T$ per semplificare la computazione.

----------------------------------------------------------------

#### Algoritmo ####
Come nel caso degli algoritmi evolutivi visti in precedenza, occorre inizializzare una popolazione di individui (espressioni simboliche o alberi sintattici, in questo caso) creati in modo random. Data la complessità che esibiscono queste strutture, nel processo di creazione, bisogna considerare alcuni parametri quali l'**altezza massima** degli alberi e il **numero massimo di nodi**. Esistono vari sottoalgoritmi che si occupano dell'inizializzazione degli alberi sintattici:
1) **Grow**: la probabilità di occorrenza di un nodo interno o uno terminale è distribuita in modo uniforme a qualsiasi livello di profondità. Questo permette di creare alberi "sbilanciati";
2) **Full**: i nodi terminali possono occorrere solo al livello dell'altezza massima dell'albero. Questo permette di creare alberi "bilanciati";
3) **Ramp-half-and-half**: questo approccio mischia i primi due per avere più varianza nella forma esibita dagli alberi sintattici.

Nello step successivo, le espressioni sono valutate basandosi sul tipo di problema da risolvere. Fatto ciò, si applica la selezione usando un algoritmo evolutivo.
La popolazione così inizializzata difficilmente avrà un buon punteggio di fitness. Il processo evolutivo si occuperà di apportare cambiamenti alla popolazione attraverso operatori genetici. I tre più importanti sono:
- **Crossover**;
- **Mutation**;
- **Cloning** (duplicazione di un individuo);

Nel caso del crossover, un approccio che si adotta spesso è quello dello scambio di due sottoespressioni: si scelgono due nodi interni e si scambiano tra i due alberi. Nel caso della mutazione, invece, si effettua sempre uno scambio di sottoalberi, ma con uno generato randomicamente.

----------------------------------------------------------------

#### Introni ####
Durante il processo evolutivo, gli individui tendono a sviluppare larghe porzioni di codice "inutile" ai fini della computazione. Un concetto simile ci viene dalla biologia: gli **introni** sono porzioni di DNA che non codificano alcuna informazione a livello del fenotipo (per questo vengono talvolta chiamati **junk-DNA**). Per evitare il verificarsi di questo fenomeno esistono alcune strategie:
- **Breeding recombination**: si generano molti figli usando parametri differenti, e si mantengono solo i migliori;
- **Intelligent recombination**: si scelgono in modo più selettivo i punti dove operare il crossover;
- **Continuos slight changes**: è possibile cambiare leggermente la funzione di valutazione in modo che gli introni non siano più tali.

----------------------------------------------------------------

### Strategie evolutive ###
In una **strategia evolutiva** si cerca non solo di ottimizzare i singoli individui, ma anche di prendere in analisi l'intero processo evolutivo: riproduzione, mortalità, lunghezza media della vita degli individui, etc. Questi parametri sono suscettibili alle scelte fatte in materia di operatori genetici. Quello che viene fatto è considerare un problema di ottimizzazione come una funzione da minimizzare $f: \mathbb{R}^n \to \mathbb{R}$. I cromosomi saranno rappresentati da array di numeri reali (a differenza degli algoritmi visti in precedenza, i quali utilizzavano per lo più rappresentazioni ad interi). Si utilizzerà, poi, unicamente l'operatore di mutazione per muovere il vettore cromosoma all'interno dello spazio di ricerca, aggiungendovi un vettore $r$ randomico ottenuto da una distribuzione normale. Il processo di selezione verrà applicato agli individui così mutati e solo i migliori accederanno direttamente alla generazione successiva (elitismo). Per operare questa scelta vi sono due diversi approcci:
- **Plus-strategy**: la selezione lavora sull'insieme degli individui non mutati e degli individui mutati;
- **Comma-strategy**: si generano molti individui mutati e si sceglie tra loro chi costituirà la nuova generazione. I cromosomi non mutati vengono persi.

Il vantaggio del primo approccio è dovuto al fatto che la fitness della popolazione non possa che migliorare per la politica elitista adottata. Purtroppo si corre il rischio di rimanere bloccati in minimi locali. In questi casi, può essere utile adottare la comma-strategy per creare diversità nella popolazione. Può anche essere opportuno adattare la varianza della mutazione durante il processo evolutivo. Se si permette una piccola varianza del rumore, allora si avrà un'esplorazione locale (**exploitation**). Se, invece, si dovesse permettere una ampia varianza, si avrà una ricerca globale nello spazio di ricerca (**exploration**). Occorre scegliere un parametro $\sigma$ che ottimizzi la convergenza. Solitamente si utilizza la cosiddetta $\frac{1}{5}$ **success rule**: la varianza è appropriata quando $\frac{1}{5}$ degli individui mutati ha una miglior fitness rispetto a quelli della passata generazione. Si può anche avere un approccio più locale e conservare per ogni vettore cromosoma la varianza associata ad esso come un'informazione addizionale. I cromosomi con una "cattiva" varianza genereranno "cattivi" discendenti. I cromosomi (e le loro varianze) che hanno i peggiori valori di fitness non potranno accedere alle seguenti generazioni e si estingueranno.

----------------------------------------------------------------

### Multi-criteria optimization ###
Esistono delle casistiche di problemi di ottimizzazione nelle quali si hanno diversi obiettivi e vincoli, possibilmente in conflitto, ognuno rappresentato da una propria funzione di fitness $f_i : \Omega \to \mathbb{R}$. L'approccio più diretto per ricondursi ad una soluzione risolvibile con tecniche note è quello di combinare le varie funzioni in un'unica funzione di fitness aggregata:

$$f(s) = \sum w_i \cdot f_i(s)$$

Ognuna delle singole funzioni si vedrà assegnato un peso il quale rispecchierà l'importanza relativa della funzione stessa rispetto agli altri parametri. Il problema fondamentale risiede nella scelta di una distribuzione dei pesi che rispetti i criteri di rilevanza. Se, inoltre, gli obiettivi sono tra loro in conflitto sarà ancora più difficile trovare una funzione che sia in grado di aggregarli in modo opportuno. In generale, il **teorema di impossibilità di Arrow** previene la possibilità che esista una funzione di aggregazione la quale massimizzi tutte le singole funzioni. Una soluzione è quella di scegliere una soluzione solo se è un **ottimo paretiano**. Un elemento $s \in \Omega$ si dice **ottimo paretiano** rispetto alle funzioni di valutazione $f_i$ con $i \in \{1, \dots, n\}$, se non esiste una soluzione $s' \in \Omega$ tale che:

$$\forall i, 1 \leq i \leq n: \quad f_i(s') \geq f_i(s)$$
$$\exists i, 1 \leq i \leq n: \quad f_i(s') > f_i(s)$$

E' possibile descrivere un ottimo paretiano come una soluzione per la quale non è possibile migliorare uno dei suoi criteri senza peggiorare gli altri. L'insieme delle soluzioni pareto-ottimali è detta **regione paretiana**. Un vantaggio di questo approccio è che si evita il bisogno di aggregare le singole funzioni di valutazione e, inoltre, la ricerca è da operare solo una volta.<br />
E' possibile utilizzare gli algoritmi evolutivi per trovare quante più soluzioni pareto-ottimali. Un approccio consiste nel definire la funzione di fitness come la somma pesata delle singole funzioni di valutazione. Purtroppo questo favorisce soluzioni che massimizzino una delle funzioni a discapito delle altre. Si può risolvere il problema individuando queste soluzioni "marginali" e scartandole in fase di selezione.<br />
Un secondo problema è quello della convergenza in un punto qualsiasi del fronte e si può rimediare applicando tecniche di **power law sharing**, simili a quelle per evitare **crowding**. Tali tecniche, tenendo conto delle zone già coperte del fronte, cercheranno di coprire punti inesplorati del fronte, in modo da garantire una copertura omogenea.

----------------------------------------------------------------

### Algoritmi evolutivi paralleli ###
Rispetto alle altre metaeuristiche si è osservato che gli algoritmi evolutivi spesso portano a risultati ottimi, ma con il prezzo di un tempo di esecuzione molto lento. È possibile parallelizzare alcune fasi del processo in modo da velocizzarlo o migliorarne il risultato. Osservando le varie fasi, è possibile infatti notare che alcune di esse sono parallelizzabili:
- la generazione iniziale, prestando attenzione ad eventuali duplicati, i quali potrebbero causare una popolazione sbilanciata;
- il calcolo del fitness degli individui, con l'accortezza di raccogliere i dati in un unico processore per calcolare il fitness relativo;
- la selezione, se costituita da eventi indipendenti, come ad esempio tournament selection. Altre tecniche richiedono invece un'unità centrale che combini i risultati;
- l'applicazione degli operatori genetici, i quali manipolano solo una parte ristretta della popolazione;
- il controllo di raggiungimento del criterio di terminazione.

Due architetture utilizzate in letteratura sono, rispettivamente:
- **island model**: È possibile sfruttare la parallelizzazione considerando un modello ad isola. Ogni isola avrà una popolazione ed eseguirà il processo evolutivo. Si può introdurre la migrazione degli individui da un isola all'altra in maniera random o definita da connessioni tra le isole. La migrazione può essere **randomica** (si scelgono coppie casuali di isole che scambieranno individui) o **grafata** (si dispongono le isole come un grado e le isole possono scambiare individui solo lungo gli archi del grafo);
- **cellular evolution**: I processori sono organizzati in una griglia. Ogni processore è responsabile di un cromosoma. Per la selezione, ogni processore sceglie il miglior cromosoma dei quattro processori adiacenti ad esso. Gli operatori genetici vengono applicabili solo il cromosoma scelto ed il proprio. Il miglior figlio risultante dal crossover sostituisce il cromosoma del processore.

----------------------------------------------------------------