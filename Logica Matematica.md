# Logica Matematica ##
**Username**: elia.togni
**Password**: 435345
**Registrazioni**: https://aguzzoli.di.unimi.it/mlrec/
**Esame**: orale (inizia con esercizi scritti facili (45 min) e successivamente domande (1h)) oppure tesi/ricerca su un topic.

---------------------------------------------------------------
## Prerequisiti ##
### Linguaggi Proposizionali ###
Con il termine **enunciato** si intende una qualsiasi proposizione per la quale sia sensato chiedersi se sia vera o falsa:
- Piove;
- Se piove, starò a casa;
- $2+2 = 4$;
- $2+2 = 5$.

Si definisce poi un **enunciato semplice** o **enunciato atomico** se un enunciato non contiene nessun'altro enunciato come sua parte propria. Si definisce invece un **enunciato composto** se un enunciato contiene altri enunciati, cioè se è possibile scomporlo in enunciati più semplici.<br />

Le parole _e_, _o_, _se...allora_, _non_, _ma_ sono chiamate **connettivi**. I connettivi permettono di ottenere enunciati da altri enunciati, cioè permettono di ottenere enunciati composti mediante enunciati più semplici.<br />
Si consideri l'enunciato _Piove e c'è vento_. Assegnando all'enunciato atomico _piove_ la lettera $p$, all'enunciato atomico _C'è vento_ la lettera $q$ e indicando con il carattere $\wedge$ il connettivo _e_, è possibile associare all'enunciato _Piove e c'è vento_ un'espressione formale del tipo $p \wedge q$. L'espressione $p \wedge q$ è un esempio di **formula**.<br />
Le formule costituiscono la rappresentazione in un linguaggio artificiale del contenuto concettuale degli enunciati del linguaggio naturale.

Un **Linguaggio Proposizionale** $L$ è semplicemente un insieme i cui elementi si dicono **Lettere Proposizionali** o **Variabili Proposizionali** e vengono indicati con i caratteri $p$, $q$, $r$, ...<br />
Utilizzando gli elementi di $L$, le parentesi $($, $)$ ed i caratteri relativi ai connettivi proposizionali $\wedge$, $\vee$, $\rightarrow$, $\neg$, si è in grado di scrivere tutte le possibili stringhe di simboli.<br />

Sono **$L$ Formule** o, più brevemente, **formule** solo quelle stringhe di simboli che sono ottenute applicando un numero finito di volte le seguenti regole di formazione:
- ogni $p \in L$ è una formula (detta **Formula Atomica**);
- se $A_{1}$ e $A_{2}$ sono formule, tali sono $(A_{1} \wedge A_{2})$, $(A_{1} \vee A_{2})$, $(A_{1} \rightarrow A_{2}$), $(\neg A_{1})$.

In termini del tutto equivalenti, si può enunciare che una stringa di simboli è una $L$-formula qualora compaia all'ultimo posto di una **$L$-costruzione**, dove una $L$-costruzione è una lista di stringhe di simboli ciascun elemento della quale o è una stringa fatta di un solo carattere o è ottenuto da elementi della lista che lo precedono secondo quanto descritto dalla seconda proprietà enunciata precedentemente.<br />
Ad esempio, la $L$-costruzione $$p,\quad q, \quad (p \vee q), \quad (\neg(p \vee q))$$
testimonia che $(\neg(p \vee q))$ è una formula.<br />
Le formule vengono indicate con le lettere $A$, $B$, ... dette **Metavariabili**.<br />
L'insieme di tutte le formule viene indicato con $F_{L}$.

### Funzioni di Verità ###
Una formula denota un'asserzione che, in una data situazione specifica, risulta essere vera o falsa (ma non comportamente vera e falsa). Una volta noto il valore di verità dei suoi costituenti, si può determinare meccanicamente in modo agevole il valore di tutta una formula, analizzando i connettivi in un'ottica **vero-funzionale**, ossia come funzioni ch ehanno sia in ingresso che in uscita dei valori di verità.<br />
La **Semantica** proposta è **bivalente**, cioè i valori di verità sono due, vero e falso.<br />
Si analizzi ora il significato dei connettivi:
- il connettivo _e_ si chiama **congiunzione**, indicato con il simbolo $\wedge$.<br /> La formula $p \wedge q$ è vera se e solo se sia $p$ che $q$ siano vere.<br />In generale, indicati con $A$ e $B$ due enunciati qualsiasi , la formula $A \wedge B$ è vera se e solo se sia $A$ che $B$ sono vere. <br />Si può riassumere quanto detto mediante la **tavola di verità per il connettivo $\wedge$**:<br />
| $p$ | $q$ | $p \wedge q$ |
| - | - | - |
| T | T | T |
| F | T | F |
| T | F | F |
| F | F | F |
- Il connettivo _o_ si chiama **disgiunzione** e si indica con il simbolo $\vee$.<br />Nel linguaggio naturale esistono almeno due usi diversi della disgiunzione, l'uso **inclusivo** (corrispondente al latino _vel_) e l'uso **esclusivo** (corrispondente al latino _aut_). I due usi differiscono per la valutazione del caso in cui entrambi i disgiunti siano veri: nell'uso inclusivo la disgiunzione corrispondente viene considerata vera, nell'uso esclusivo viene considerata falsa. Nella logica classica, con disgiunzione si intende l'uso inclusivo.<br /><Indicati con $p$ e $q$ due enunciati qualsiasi, la formula $p \vee q$ è vera se e solo se o $p$ o $q$ è vera.<br />Si può riassumere quanto detto mediante la **tavola di verità per il connettivo** $\vee$:
| $p$ | $q$ | $p \vee q$ |
| - | - | - |
| T | T | T |
| F | T | T |
| T | F | T |
| F | F | F |
- Il connettivo _non_ si chiama **negazione** e si indica con il simbolo $\neg$.<br />Indicato con $p$ un enunciato qualsiasi, la formula $\neg p$ è vera se e solo se $p$ € falsa.<br />Si può riassumere quanto detto mediante la **tavola di verità per $\neg$**:
| $p$ | $\neg p$ |
| - | - |
| T | F |
| F | T |
- Il connettivo _se...allora_ si chiama **implicazione** e si indica con $\rightarrow$.<br />Indicati con $p$ e $q$ due enunciati qualsiasi, la formula $p \rightarrow q$ è falsa solamente quando $p$ è vera e $q$ è falsa.<br />Nella formula $p \rightarrow q$, la sottoformula $p$ viene chiamata **antecedente** o **premessa** dell'implicazione, mentre la sottoformula $q$ viene chiamata **conseguente** o **conclusione** dell'implicazione.<br />Si può riassumere quanto detto mediante la **tavola di verità per $\rightarrow$**:
| $p$ | $q$ | $p \rightarrow q$ |
| - | - | - |
| T | T | T |
| F | T | T |
| T | F | F |
| F | F | T |

---------------------------------------------------------------

## Lezione 1 ##
Un primo modo per addentrarsi nelle tematiche della **Logica** consiste nel porsi il problema della correttezza delle inferenze, ossia degli **schemi di ragionamento**.<br />
Ad esempio, l'inferenza:
$$\cases{\text{Ogni uomo è mortale.} \cr \cr \text{Socrate è un uomo.} \cr \cr \hline  \cr \text{Perciò, Socrate è mortale.}}$$
è corretta.
Un altro esempio:
$$\cases{\text{Tutti i gatti hanno 7 zampe.} \cr \cr \text{Bob è un gatto.} \cr \cr \hline  \cr \text{Bob ha sette zampe}.}$$

Queste due sequenze di proposizioni seguono la stessa forma di ragionamento (e di formulazione) nonostante la premessa maggiore del secondo sillogismo sia falsa nel nostro mondo.<br />

$$\cases{\text{Every tove is durfish.} \cr \cr \text{Sbroppo is a tove.} \cr \cr \hline \cr \text{Therefore, Sbroppo is a durfish.}}$$


Di nuovo, la linea di ragionamento è corretta anche senza avere consapevolezza del significato delle parole utilizzate.<br />
La conclusione è corretta se accettiamo le premesse, indipendentemente dal significato.<br />
Ora è necessario formalizzare questa struttura:

$$\cases{\forall x \quad f(x) \rightarrow Q(x) \cr \cr f(s) \cr 
 \cr \hline \cr Q(s) }$$
Si consideri ora il seguente esempio:
$$\cases{\text{Ogni fiore è profumato.} \cr \cr \text{La rosa è profumata.} \cr \cr \hline  \cr \text{Perciò, la rosa è un fiore.}}$$

Ogni proposizione è corretta (nel nostro mondo) ma la linea di pensiero è errata.
$$\cases{\forall x \quad f(x) \rightarrow Q(x) \cr \cr Q(s) \cr \cr \hline  \cr f(s)}$$
La conclusione ed una delle premesse sono state, infatti, scambiate.

---------------------------------------------------------------
### Motivazioni ###
La disciplina è chiamata **Mathematical Logic** per due motivi che vanno in direzioni differenti:
- il primo motivo riguarda la necessità di astrarre per riuscire a comprendere le linee di pensiero. Con astrarre si intende il tralasciare tutte le informazioni irrilevanti da un punto di vista logico. Si deve considerare solo la **forma** dell'argomentazione, non il contenuto;<br />
- il secondo motivo riguarda l'utilizzo, infatti la logica matematica viene utilizzata per studiare e descrivere strutture definite matematicamente.

In comune con l'esperienza di un Computer Scientist vi è l'utilizzo di un **Linguaggio Formale**, composto da due rami:
- **Sintassi**, ovvero i termini da un punto di vista grammaticale;
- **Semantica**, il significato connesso alla sintassi. Per essere formale, la semantica deve utilizzare termini matematici, ovvero insiemi, funzioni, relazioni e algebra;

---------------------------------------------------------------

_Computer Science is just logic implemented in electronics_.<br />

La logica utilizza un approccio dichiarativo, mentre CS ha un approccio procedurale o imperativo (benchè questo non sia completamente vero). Con dichiarativo si intende porre il focus su cosa possa essere dedotto partendo da delle premesse date mentre con procedurale si intende porre il focus su come implementare una computazione.<br />

Le due discipline collimano nell'**Automated Deduction**, ovvero richiedere al calcolatore di svolgere le deduzioni.<br />

---------------------------------------------------------------

_Se piove, prendo l'ombrello_ è equivalente a dire:

1) _Se non piove, non prendo l'ombrello_. $\times$
2) _Se non prendo l'ombrello, allora non piove_. $\checkmark$
3) _Se prendo l'ombrello, allora piove_. $\times$
4) _Non piove oppure prendo l'ombrello_. $\checkmark$
5) _Piove solo se prendo l'ombrello_ $\checkmark$
6) _Piove se prendo l'ombrello_. $\times$
7) _Piove se e solo se prendo l'ombrello_. $\times$
8) Nessuna delle precedenti $\times$

---------------------------------------------------------------

## Lezione 2 ##
Due enunciati "dicono la stessa cosa" se sono vere nelle stesse esatte circostanze (oppure negli stessi **mondi** possibili oppure se hanno la stessa **valutazione di verità**).<br />

_Se piove allora prendo l'ombrello_ dopo aver astratto diventa _se $A$ allora $B$_.

If $P$, then $Q$.
![[Implicazione.png]]
$P \rightarrow Q$

Esistono quattro classificazioni di mondi possibili in questo caso, corrispondenti alla tavola di verità dell'implicazione logica. All'interno di ogni insieme sono compresi tutti i mondi nei quali è vero l'enunciato indicato dal nome dell'insieme.

$P \rightarrow Q$ è vero se ogniqualvolta $p$ è vero, anche $q$ è vero.

-------------------
Si consideri $P \vee Q$ e un universo di infiniti possibili mondi:
Di nuovo, si avranno quattro possibili classificazioni di mondi.
![[Unione.png]]

Si consideri $P \wedge Q$:
![[Intersezione.png]]

Si consideri $P \oplus Q$:
![[XOR.png]]

Ora si consideri $\neg P \vee Q$:
![[Implicazione2.png]]
Questa proposizione e quella iniziale sono equivalenti in ogni mondo possibile.

---------------------------------------------------------------

Si valuti ora come intrerpretare **Solo se** all'interno di un enunciato.

_Piove **solo se** prendo l'ombrello_. ($P\rightarrow Q$)
_Piove se prendo l'ombrello_: $(P, \text{ if } Q) = (\text{ If } Q, P) =  (Q \rightarrow P)$

Se $P \rightarrow Q = True$ , $P$ è condizione sufficiente affinchè $Q$ sia vera.<br />
Se $P \rightarrow Q = True$ , Q è condizione necessaria affinchè $P$ sia vera.<br /> 

---------------------------------------------------------------
## Logica Proposizionale ##
Un **enunciato** nel linguaggio naturale è una sequenza di parole tale che abbia senso chiedersi in una qualsiasi circostanza  data (o in qualsiasi mondo possibile) se sia vera o falsa.<br />
In termini di significato, siamo interessanti a distinguere tra **Denotazione** e **Connotazione**.<br />Definita un'espressione E:
- **Denotazione di _E_**: _E_ è un nome (o un puntatore) il quale si riferisce ad un oggetto unicamente determinato all'interno del discorso.
- **Connotazione di _E_**: si riferisce al totale contenuto informativo di _E_.

Si considerino le seguenti espressioni:
-  $4$;
- $2^{2}$;
- $pred(5)$;
- $3+1$.

Ciascuna di queste espressioni denota il numero naturale $4$ e sono tutte espressioni che descrivono modi **distinti** per ottenere il numero $4$.<br />
La connotazione è complessa da gestire in termini di strumenti formali.
La denotazione, invece, è semplice da gestire perchè gode della proprietà di **Invarianza in seguito a sostituzioni** (**Invariance under Substitutions Property**).<br />
Si considerino due connotazioni differenti: 
- $2 = (1+1)$
- $4 = 2^2 = (1+1)^2 = (1+1)^(1+1)$
Ciascuna di queste connotazioni ha la stessa denotazione e, quindi, possono essere interscambiati all'interno di uno stesso enunciato.

Denotazione di enunciati:
$4 = pred(5) \quad \checkmark$
$4 = succ(5) \quad \times$
$4 = 3+1 \quad \times$
$4 = 4 \quad\checkmark$
$4 = 6 \quad \times$ 

Ciascuna di queste espressioni è anche un enunciato, in quanto possiedono un valore di verità.
La denotazione di un enunciato in una data circostanza è il suo valore di verità, $True$ o $False$.

La **Logica Proposizionale** riguarda gli enunciati e la loro denotazione in qualsiasi circostanza possibile.<br />

**Formalizzazione**:<br />
**Enunciato Atomico** $\rightarrow$ **Formula Atomica**<br />
Si fissi un insieme di simboli $L$ di cardinalità infinita (numerabile).<br />
$L$ è un **Linguaggio Proposizionale**, i cui elementi sono le lettere proposizionali o variabili proposizionali (_p_, _q_, _r_, ...).<br />
in ogni mondo possibile, ciascuna lettera proposizionale è vera oppure falsa ($\oplus$).

**Enunciato Complesso**:<br />
Fissato un linguaggio $L$, l'insieme di formule proposizionali su $L$, ($F_{L})$, è definito come segue:
- $F_{L}$ è il più piccolo insieme tale che:
	- per ogni $p \in L$, $p \in F_{L}$;
	- se $A$, $B \in F_{L}$, allora $(A \vee B)$, $(A \wedge B)$, $(A \rightarrow B)$, $(\neg A) \in F_{L}$.

Una definizione equivalente è:<br />
- $F_{Ł}$ è l'intersezione tra tutti gli insiemi $X$ tali che:
	- $L \subseteq X$;
	- se $A$, $B \in X$, allora $(A \vee B)$, $(A \wedge B)$, $(A \rightarrow B)$, $(\neg A) \in X$.

Un'ulteriore definizione equicalente è la definizione induttiva di $F_{L}$:
- $F_{L} è l'insieme costruito in modo tale che soddisfi le seguenti proprietà:
	- $L \in F_{Ł};
	- se $A$, $B \in F_{L}$, allora $(A \vee B)$, $(A \wedge B)$, $(A \rightarrow B)$, $(\neg A) \in F_{L}$.
	- Nient'altro appartiene a $F_{Ł}$.

Si necessita di essere in grado di riconoscere quando un enunciato sia una formula e quando non lo sia.<br />
Sia $w \in (L, \vee , \wedge , \rightarrow , \neg , \{, \} , \bigcup L)\text{*}$  un insieme di tutte le stringhe finite dell'alfabeto.<br />
Si fornisce ora un primo esempio di **certificato**.<br />
Una **$L$-Struttura** che mostri come $w \in F_{L}$ è una sequenza finita di stringhe $w_{1}, ..., w_{u}\quad \vert \quad (w_{i} \in F_{L})$ tale che:
1) $\forall i w_{i} \in F_{L}$;
2) $w_{u} = w$;
3)$\forall i, i = 1, ..., u$, $w_{i} \in L$ oppure $\exists j \leq i \text{ tale che } \neg W_{i}$  oppure $\exists j, k \leq i \text{ tale che } w_{i} = (w_{j} \wedge w_{K})$ oppure $w_{i}=(w_{j} \vee w_{k})$ oppure $w_{i} = (w_{j} \rightarrow w_{k})$. 

Si fornisce ora una $L$-struttura la quale dimostri che $((p \wedge q) \rightarrow r) \in F_{L}$
$$p, q, r, (p \wedge q), ((p \wedge q) \rightarrow r)$$
![[L-Struttura.png]]

Sono possibili infinite L-costruzioni, basta definire lettere che non verranno utilizzate.<br />
Si provi ora a dimostrare che $\rightarrow (p \wedge q) \notin F_{L}$.

### Structural Induction Principle (on $F_{L}$) ###
Sia $\rho$ una proprietà che possa essere descritta tramite formula ($\rho$ può essere corretta oppure no). Allora:
- $\rho$ è corretta per $F \in F_{L}$ se e solo se:
	- Premessa: ) $\rho$ è corretta per ogni $p \in L$;
	- step(s); )se $\rho$ è corretta per $A, B \in F_{L}$, allora $\rho$ è corretta per $(A \vee B)$,...


Oppure $F_{L}$ è l'intersezione di tutti gli insiemi $X$ tali che 
1) $L \subseteq X$
2) Se $A, B \in X$, then $(A_{1} \wedge A_{2})$, ...<br />
Esiste anche una definizione induttiva di $F_{L}$: $F_{L}$ è un insieme tale per cui:
1) $L \subseteq F_{L}$;
2) uguale a sopra;
3) Nient'altro appartiene a $F_{L}$.

---------------------------------------------------------------

## Lezione 3 ##
#### Dimostrazione del Structural Induction Principle ####
Si definisca $I = \{F \in F_{L} : \rho \text{ è corretta per }F\}$.<br />
E' sufficiente mostrare che $I = F_{L}$.<br />
Come si dimostra che due insiemi siano lo stesso insieme? E' necessaria un'inclusione bidirezionale:
$$\cases{I \subseteq F_{L} \cr \cr F_{L} \subseteq I}$$
La prima inclusione è vera per definizione di $I$.<br />
Per dimostrare la seconda inclusione, si ricorda che $\rho$ gode della premessa e degli step. Quindi, per la premessa, $I$ soddisfa la condizione $L \subseteq F_{L}$.<br />

per mostrare che $w \in F_{L}$ si necessita di mostrare una L-struttura.

------------------------------------------

#### Proprietà dell'unica leggibilità delle formule ####
Se $w \in F_{L}$, allora esattamente uno dei seguenti casi è corretto:
- $w \in L$;
- $\exists v \in F_{L} \quad \vert \quad w = \neg v$
- $\exists v_{1}, v_{2} \in F_{Ł} \quad \vert \quad w = (v_{1} \wedge v_{2})$
- $\exists v_{1}, v_{2} \in F_{Ł} \quad \vert \quad w = (v_{1} \vee v_{2})$
- $\exists v_{1}, v_{2} \in F_{Ł} \quad \vert \quad w = (v_{1} \rightarrow v_{2})$

