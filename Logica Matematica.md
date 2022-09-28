## Logica Matematica ##

**Username**:
Password**:
Registrazioni: /mlrec
Esame: orale (inizia con esercizi scritti facili (45 min) e successivamente domande (1h)) oppure tesi/ricerca su un topic.

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

$$\forall x \quad f(x) \rightarrow Q(x)$$
$$f(s)$$
---------------------------------------------------------------

$$Q(s)$$

Every flower is perfumed.<br />
The rose is perfumed.<br />
Therefore, the rose is a flower.<br />

Ogni proposizione è corretta (nel nostro mondo) ma la linea di pensiero è errata.
$$\forall x \quad f(x) \rightarrow Q(x)$$
$$Q(s)$$
$$f(s)$$
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