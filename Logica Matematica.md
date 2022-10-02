# Logica Matematica ##
**Username**: elia.togni
**Password**: 435345
**Registrazioni**: https://aguzzoli.di.unimi.it/mlrec/
**Esame**: orale (inizia con esercizi scritti facili (45 min) e successivamente domande (1h)) oppure tesi/ricerca su un topic.

---------------------------------------------------------------
## Prerequisiti ##
### Linguaggi Proposizionali ###
Con il termine **enunciato** si intende una qualsiasi proposizione per la quale sia sensato chiedersi se sia vera o falsa.<br />
Si definisce poi un **enunciato semplice** o **enunciato atomico** se un enunciato non contiene nessun'altro enunciato come sua parte propria. Si definisce invece un **enunciato composto** se un enunciato contiene altri enunciati, cioè se è possibile scomporlo in enunciati più semplici.<br />

Le parole _e_, _o_, _se...allora_, _non_, _ma_ sono chiamate **connettivi**. I connettivi permettono di ottenere enunciati da altri enunciati, cioè permettono di ottenere enunciati composti mediante enunciati più semplici.<br />
Si consideri l'enunciato _Piove e c'è vento_. Assegnando all'enunciato atomico _piove_ la lettera $p$, all'enunciato atomico _C'è vento_ la lettera $q$ e indicando con il carattere $\wedge$ il connettivo _e_, è possibile associare all'enunciato _Piove e c'è vento_ un'espressione formale del tipo $p \wedge q$. L'espressione $p \wedge q$ è un esempio di **formula**.<br />
Le formule costituiscono la rappresentazione in un linguaggio artificiale del contenuto concettuale degli enunciati del linguaggio naturale.

Un **Linguaggio Proposizionale** _L_ è semplicemente un insieme i cui elementi si dicono **Lettere Proposizionali** e vengono indicati con i caratteri $p$, $q$, $r$, ...<br />
Utilizzando gli elementi di _L_, le parentesi (, ) ed i caratteri relativi ai connettivi proposizionali $\wedge$, $\vee$, $\rightarrow$, $\neg$, si è in grado di scrivere tutte le possibili stringhe di simboli.<br />


---------------------------------------------------------------
Every man is mortal.<br />
Socrates is a man.<br />
Therefore, Socrates is mortal.<br />

All cats have 7 legs.<br />
Bob is a cat.<br />
Therefore, Bob has 7 legs.<br />

Queste due sequenze di proposizioni seguono la stessa forma di ragionamento (e di formulazione) nonostante la premessa maggiore del secondo sillogismo sia falsa nel nostro mondo.<br />

Every tove is durfish.<br />
Sbroppo is a tove.<br />
Therefore, Sbroppo is a durfish.<br />

Di nuovo, la linea di ragionamento è corretta anche senza avere consapevolezza del significato delle parole utilizzate.<br />
La conclusione è corretta se accettiamo le premesse, indipendentemente dal significato.<br />
Ora è necessario formalizzare questa struttura:

$$\cases{\forall x \quad f(x) \rightarrow Q(x) \cr \cr f(s) \cr 
 \cr \hdashline \cr Q(s) }$$

Every flower is perfumed.<br />
The rose is perfumed.<br />
Therefore, the rose is a flower.<br />

Ogni proposizione è corretta (nel nostro mondo) ma la linea di pensiero è errata.
$$\cases{\forall x \quad f(x) \rightarrow Q(x) \cr \cr Q(s) \cr \cr \hdashline \cr f(s)}$$
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

la logica utilizza un approccio dichiarativo, mentre CS ha un approccio procedurale o imperativo (benchè questo non sia completamente vero).<br />
CS pone il focus su come la procedura debba essere implementata, sullo specificare l'algoritmo mentre l'approccio dichiarativo pone il focus su cosa può essere concluso, derivato dalle premesse iniziali.<br />

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
2) if I do not take my umbrella, then it does not rain
3) if i take the umbrella, then it rains
4) either it does not rain or i take the umbrella (or inclusive)
5) it rains only if I take umbrella
6) it rains if I take the umbrella
7) it rains if and only if I take the umbrella
8) none of the above

if A, then B

1) if NOT A, then NOT B
2) if NOT B, then NOT A
3) if B, then A
4) NOT A or B
5) A only if B
6) A if B
7) A if and only if B
