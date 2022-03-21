### Teoria degli Insiemi ###

Si definisce $\Omega$ l'_insieme Universo_, ossia l'insieme che contiene tutti gli elementi possibili.<br />
Si dirà che $w \in \Omega$ quando l'elemento $w$ appartiene all'insieme $\Omega$. <br />
Si definisce $E \subseteq \Omega$ quando $E$ è un sottoinsieme dell'insieme $\Omega$.<br />
Si definisce insieme $\emptyset$ l'_insieme vuoto_ e con $\{\}$ l'insieme privo di elementi.<br />

#### Unione ####

$$E \cup F \qquad x \in E \cup F \leftrightarrow x \in E \vee x \in F $$

#### Intersezione  ####

$$E \cap F \qquad x \in E \cap F \leftrightarrow x \in E \wedge x \in F $$

#### Disgiunzione ####

$$E \cap F = \emptyset $$

### Elementi di Probabilità ###

#### Interpretazione fequentista ####

La probabilità di un esito è considerata una proprietà dell'esito stesso. In tal caso, essa viene calcolata come rapporto tra il numero di casi favorevoli ed il numero di casi possibili.<br />

#### Interpretazione Soggettivistica ####

La probabilità di un esito non è una proprietà oggettiva, bensì la precisazione del livello di fiducia che lo studioso ripone nel verificarsi di un evento.<br />

--------------------------------------------------------------

L’insieme universo $\Omega$ viene spesso chiamato anche “spazio campionario” oppure “spazio degli eventi”:<br /> in entrambi i casi essi identificano l’insieme di tutti gli esiti di un esperimento casuale.<br />Si definisce “evento elementare” un elemento $w$ appartenente all’universo $\Omega$.<br />Si definisce banalmente _evento_ un generico sottoinsieme dello spazio degli eventi $E \subset \Omega$.<br />L’evento può essere interpretato come un sottoinsieme contenente eventi elementari. Gli insiemi composti da un solo elemento sono detti _insiemi singoletto_. Tra tutti gli insiemi, ve ne sono due di menzione particolare:
- $\{\}$: l'insieme di partenza, si verifica sempre;
- $\emptyset$: l'insieme vuoto, non si verifica mai.

--------------------------------------------------------------

.<br />
.<br />
.<br />

#### Probabilità Condizionata ####

$$P(E\vert F) = \frac{P(E\cap F)}{P(F)}$$

#### Variabile Aleatoria ####

Si definisce _variabile aleatoria_ una qualsiasi variabile:
$$X: \Omega \rightarrow R$$

dove con $X = \alpha$ si indica l'evento:

$$\{X = \alpha \} = \{w \in \Omega : X(w) = \alpha \}$$

Per semplicità, anzichè scrivere $P(\{X = \alpha\} )$, si scriverà $P(X = \alpha)$.<br />

#### Variabile Aleatoria Discreta ####
 
Le variabili aleatorie _discrete_ assumono un insieme numerabile di specificazioni.

#### Funzione di Massa di Probabilità ####
Si definisce _funzione di massa di probabilità_ la funzione:

$$p_X : R \rightarrow [0, 1]$$
$$\foreach x \in R \qquad p_X(x) = P(X = x)$$

#### Funzione di Ripartizione o di Distribuzione Cumulativa ####

Si consideri una variabile aleatoria $X$ e si definisca:

$$F_X(x) = P(X \leq x)$$

E' possibile definire la funzione di ripartizione in funzione di quella di massa di probabilità e viceversa:

$$F_X(x) = P(X \leq x) = \sum_{aa \leq X}P(X = a) = \sum_{a \leq X}p_X(a)$$

#### Valore Atteso ####

Data la variabile aleatoria discreta $X$ su $\{x_1, x_2, ..., x_n\}$ e $p_X$ come funzione di massa di probabilità, si definisce _valore atteso_ la quantità

$$E(X) = \sum_{i}x_{i}p(x_{i}) = \sum_{i}x_{i}P(X = x_{i})$$

#### Varianza ####

