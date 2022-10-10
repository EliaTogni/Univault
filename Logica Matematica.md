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
Un primo modo per addentrarsi nelle tematiche della logica consiste nel porsi il problema della correttezza delle inferenze, ossia degli _schemi di ragionamento_.<br />
Ad esempio, l'inferenza:
$$\cases{\text{Ogni uomo è mortale.} \cr \cr \text{Socrate è un uomo.} \cr \cr \hline  \cr \text{perciò, Socrate è mortale.}}$$
è corretta. Per dimostrarlo, si associ all'enunciato _Ogni uomo è mortale_, la lettera proposizionale $P$ e all'enunciato _Socrate è un uomo_ la lettera proposizionale $Q$:
$$\cases{\forall x \quad P(x) \rightarrow Q(x) \cr \cr P(s) \cr \cr \hline  \cr Q(s)}$$

$$\cases{\text{Tutti i gatti hanno 7 zampe.} \cr \cr \text{Bob è un gatto.} \cr \cr \hline  \cr \text{Bob ha sette zampe}.}$$

Queste due sequenze di proposizioni seguono la stessa forma di ragionamento (e di formulazione) nonostante la premessa maggiore del secondo sillogismo sia falsa nel nostro mondo.<br />

Every tove is durfish.<br />
Sbroppo is a tove.<br />
Therefore, Sbroppo is a durfish.<br />

Di nuovo, la linea di ragionamento è corretta anche senza avere consapevolezza del significato delle parole utilizzate.<br />
La conclusione è corretta se accettiamo le premesse, indipendentemente dal significato.<br />
Ora è necessario formalizzare questa struttura:

$$\cases{\forall x \quad f(x) \rightarrow Q(x) \cr \cr f(s) \cr 
 \cr \hline \cr Q(s) }$$

Every flower is perfumed.<br />
The rose is perfumed.<br />
Therefore, the rose is a flower.<br />

Ogni proposizione è corretta (nel nostro mondo) ma la linea di pensiero è errata.
$$\cases{\forall x \quad f(x) \rightarrow Q(x) \cr \cr Q(s) \cr \cr \hline  \cr f(s)}$$
La conclusione ed una delle premesse sono state scambiate.

---------------------------------------------------------------
### Motivazioni ###
La disciplina è chiamata **Mathematical Logic** per due motivi che vanno in direzioni differenti:
- la necessità di astrarre per riuscire a comprendere linee di pensiero. Con astrarre si intende il tralasciare tutte le informazioni irrilevanti da un punto di vista logico. Si deve considerare solo la **forma** dell'argomentazione, non il contenuto;<br />
- perchè viene utilizzata per studiare e descrivere strutture definite matematicamente;

In comune con l'esperienza di un Computer Scientist vi è l'utilizzo di un linguaggio formale, composto da due rami:
- **Sintassi** utilizzata come tool per lo studio del ramo più rilevante;
- **Semantica**, il significato matematico connesso alla sintassi (ovvero insiemi, funzioni, relazioni e algebra);
 
_Computer Science is just logic implemented in electronics_.<br />

La logica utilizza un approccio dichiarativo, mentre CS ha un approccio procedurale o imperativo (benchè questo non sia completamente vero).<br />
Computer Science pone il focus su come la procedura debba essere implementata, sullo specificare l'algoritmo, mentre l'approccio dichiarativo pone il focus su cosa possa essere concluso, cioè su cosa possa  derivato dalle premesse iniziali.<br />

Le due discipline collimano nell'**Automated Deduction**, ovvero richiedere al calcolatore di svolgere le deduzioni.<br />

1) Propositional Logic
	1) Alphabet, connectives and formulae (Syntax);
	2) Evaluations, Truth tables and design principles (truth-functionality and bivalence);
	3) Tautology, contradiction, satisfiying formula;
	4) Logical consequences;
	5) Normal forms;
	6) Complexity, soundness, completeness;
	7) Compactness
	8) Formal tecniques for implementing deduction (Natural deduction, sequent calculi, tableaus and axiomatic systems).
	9) Refutational methods based on the principle of Resolution;
	10) Davis Patman Procedures and DPLL;
2)  Predicate logic (or First Order Logic)
	1) Syntax (quantifiers, variables, predicates, symbols)
	2) Semantics (Tarsky's L-Structures and models)
	3) Logical consequences 
	4) Soundness and Completness for first order calculus
	5) Deduction techniques
		1) Normal forms, ...
	6) Herbrand's Theory
	7) Lifted Resolution, unification
	8) Refutational Completness of Lifted Resolution
3) Final remarks
	1) Semidecidability of FO logic (Church's Theorem)
	2) Peano's Arithmetich
	3) Godel first incompleteness theoreme

---------------------------------------------------------------

If it rains, I take my umbrella
	it is the same thing as
	it says the same as

1) if it does not rain, I do not take umbrella
2) if I do not take my umbrella, then it does not rain $\checkmark$
3) if i take the umbrella, then it rains
4) either it does not rain or i take the umbrella (or inclusive) $\checkmark$
5) it rains only if I take umbrella $\checkmark$
6) it rains if I take the umbrella
7) it rains if and only if I take the umbrella
8) none of the above

---------------------------------------------------------------

## Lezione 2 ##
Due proposizioni "dicono la stessa cosa" se sono vere nelle stesse circostanze o negli stessi **mondi** possibili o se hanno la stessa **valutazione di verità**.<br />

If $P$, then $Q$.
(immagine universo + insiemi)
$P \rightarrow Q$

Esistono quattro classificazioni di mondi possibili in questo caso, corrispondenti alla tavola di verità dell'implicazione logica.

$P \rightarrow Q$ is true if every time that $p$ is true, then $q$ is true too.

-------------------
Si consideri $P \vee Q$ e un universo di infiniti possibili mondi:
Di nuovo, si avranno quattro possibili classificazioni di mondi.
- immagine mondi

Si consideri $P \oplus Q$:
- immagine mondi

Ora si consideri $\neg P \vee Q$:
- immagini mondi
Questa proposizione e quella iniziale sono equivalenti in ogni mondo possibile.

---------------------------------------------------------------

It rains **only if** I take the umbrella. ($P\rightarrow Q$)
It rains **if** I take the umbrella: $(P, \text{ if } Q) = (\text{ If } Q, P) =  (Q \rightarrow P)$

Se $P \rightarrow Q = True$ , $P$ è condizione sufficiente affinchè $Q$ sia vera.<br />
Se $P \rightarrow Q = True$ , Q è condizione necessaria affinchè $P$ sia vera.<br /> 

---------------------------------------------------------------
## Logica Proposizionale ##
Un'**enunciato** nel linguaggio naturale è una sequenza di parole tale che abbia senso chiedersi in una qualsiasi circostanza data (o in qualsiasi mondo possibile) se sia vera o falsa.<br />
In termini di significato, siamo interessanti a distinguere tra **Denotazione** e **Connotazione**.
- **Denotazione di _E_**: _E_ è un nome (un puntatore), il quale si riferisce ad un oggetto unicamente determinato all'interno del discorso;
- **Connotazione di _E_**: si riferisce al totale contenuto informativo di _E_.

La denotazione è semplice da gestire perchè gode della proprietà di **Invarianza in seguito a sostituzioni**.<br />
Si considerino due connotazioni differenti: 
- 2 = (1+1)
- 4 = 2^2 = (1+1)^2 = (1+1)^(1+1)
Ciascuna di queste connotazioni ha la stessa denotazione.

Denotazione di enunciati:
$4 = pred(5) \quad \checkmark$
$4 = succ(5) \quad \times$
$4 = 3+1 \quad \times$
$4 = 4 \quad\checkmark$
$4 = 6 \quad \times$ 

La denotazione di una proposizione in una data circostanza è il suo valore di verità, $True$ o $False$.

La **Logica Proposizionale** riguarda gli enunciati e la loro denotazione in qualsiasi circostanza possibile.<br />

Formalizzazione:<br />
**Enunciato Atomico**$\rightarrow$ **Formula Atomica**<br />
Si fissi un insieme di simboli $L$ di cardinalità infinita (numerabile).<br />
$L$ è un **Linguaggio Proposizionale**, i cui elementi sono le lettere proposizionali e le variabili proposizionali.<br />
in ogni mondo possibile, ciascuna lettera proposizionale è vera oppure falsa ($\oplus$).

...

Si necessita di essere in grado di riconoscere quando un'enunciato sia una formula e quando non lo sia.

Sia $w \in (L, \vee , \wedge , \rightarrow , \neg , \} , \bigcup L)\text{*}$ 
un insieme di tutte le stringhe finite dell'alfabeto.<br />
Si fornisce ora un primo esempio di **certificato**.<br />
Una **$L$-Struttura** che mostri come $w \in F_{L}$ è una sequenza finita di stringhe $w_{1}, ..., w_{n}\quad \vert \quad (w_{i} \in F_{L})$ tale che:
1) $w_{i} \in F_{L}$;
2) $w_{u} = w$;
3)$\forall i, i = 1, ..., u$ o $w_{i} \in L$ oppure $\exists j \leq i \text{ tale che } \neg W_{i}$  oppure $\exists j, k \leq i \text{ tale che } w_{i} = (w_{j} \wedge w_{K})$ oppure $w_{i}=(w_{j} \vee w_{k})$ oppure $w_{i} = (w_{j} \rightarrow w_{k})$. 

Si fornisce ora una $L$-struttura la quale dimostri che $((p \wedge q) \rightarrow r) \in F_{L}
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
Si definisca $I = \{F \in F_{L} : \rho \text{ è corretta per }F\}$.
E' sufficiente mostrare