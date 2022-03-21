### Teoria degli Insiemi ###

Si definisce $\Omega$ l'_insieme Universo_, ossia l'insieme che contiene tutti gli elementi possibili.<br />
Si dirà che $w \in \Omega$ quando l'elemento $w$ appartiene all'insieme $\Omega$. <br />
Si definisce $E \subseteq \Omega$ quando $E$ è un sottoinsieme dell'insieme $\Omega$.<br />
Si definisce insieme $\emptyset$ l'_insieme vuoto_ e con $\{\}$ l'insieme privo di elementi.<br />

--------------------------------------------------------------

#### Unione ####

$$E \cup F \qquad x \in E \cup F \leftrightarrow x \in E \vee x \in F $$

--------------------------------------------------------------

#### Intersezione  ####

$$E \cap F \qquad x \in E \cap F \leftrightarrow x \in E \wedge x \in F $$

--------------------------------------------------------------

#### Disgiunzione ####

$$E \cap F = \emptyset $$

--------------------------------------------------------------

### Elementi di Probabilità ###

#### Interpretazione fequentista ####

La probabilità di un esito è considerata una proprietà dell'esito stesso. In tal caso, essa viene calcolata come rapporto tra il numero di casi favorevoli ed il numero di casi possibili.<br />

--------------------------------------------------------------

#### Interpretazione Soggettivistica ####

La probabilità di un esito non è una proprietà oggettiva, bensì la precisazione del livello di fiducia che lo studioso ripone nel verificarsi di un evento.<br />

--------------------------------------------------------------

L’insieme universo $\Omega$ viene spesso chiamato anche “spazio campionario” oppure “spazio degli eventi”:<br /> in entrambi i casi essi identificano l’insieme di tutti gli esiti di un esperimento casuale.<br />Si definisce “evento elementare” un elemento $w$ appartenente all’universo $\Omega$.<br />Si definisce banalmente _evento_ un generico sottoinsieme dello spazio degli eventi $E \subset \Omega$.<br />L’evento può essere interpretato come un sottoinsieme contenente eventi elementari. Gli insiemi composti da un solo elemento sono detti _insiemi singoletto_. Tra tutti gli insiemi, ve ne sono due di menzione particolare:
- $\{\}$: l'insieme di partenza, si verifica sempre;
- $\emptyset$: l'insieme vuoto, non si verifica mai.

--------------------------------------------------------------

#### Algebra degli Eventi ###

Si definisce _Algebra degli Eventi_ l'insieme

$$A = \{E_{i} \subseteq \Omega \}$$

Per essere tale, è necessario che vengano soddisfatte le seguenti proprietà:
1) $\Omega \in A$
2) $\forall E$ se $E \in A$ allora $\overline{E} \in A$
3) $\forall E$, $F$ se $E \in A \wedge F \in A$ allora $E \cup F \in A$
4) L'algebra è chiusa rispetto all'unione infinita. Per questo motivo, $A$ è più di un'algebra e viene detta $\sigma$-algebra.

--------------------------------------------------------------

#### Funzione di Probabilità ####

$$P :A \rightarrow [0, 1]$$

**Dominio**: generica algebra $A$.<br />
**Codominio**: tutti i valori dell'intervallo chiuso $[0, 1]$.<br />

--------------------------------------------------------------

#### Probabilità Condizionata ####

$$P(E\vert F) = \frac{P(E\cap F)}{P(F)}$$

--------------------------------------------------------------

#### Eventi Indipendenti ####

Nel caso in cui $P(E \vert F)$ e $P(E)$ siano uguali, si dice che $E$ ed $F$ sono indipendenti.<br />
Quindi, se

$$P(E \vert F) = \frac{P(E \cap F)}{P(F)}$$

è possibile formalizzare l'indipendenza di eventi dicendo che

$$P(E \cap F) = P(E)P(F)$$

--------------------------------------------------------------

#### Variabile Aleatoria ####

Si definisce _variabile aleatoria_ una qualsiasi variabile:
$$X: \Omega \rightarrow R$$

dove con $X = \alpha$ si indica l'evento:

$$\{X = \alpha \} = \{w \in \Omega : X(w) = \alpha \}$$

Per semplicità, anzichè scrivere $P(\{X = \alpha\} )$, si scriverà $P(X = \alpha)$.<br />

--------------------------------------------------------------

#### Variabile Aleatoria Discreta ####
 
Le variabili aleatorie _discrete_ assumono un insieme numerabile di specificazioni.

--------------------------------------------------------------

#### Funzione di Massa di Probabilità ####
Si definisce _funzione di massa di probabilità_ la funzione:

$$p_X : R \rightarrow [0, 1]$$
$$\foreach x \in R \qquad p_X(x) = P(X = x)$$

--------------------------------------------------------------

#### Funzione di Ripartizione o di Distribuzione Cumulativa ####

Si consideri una variabile aleatoria $X$ e si definisca:

$$F_X(x) = P(X \leq x)$$

E' possibile definire la funzione di ripartizione in funzione di quella di massa di probabilità e viceversa:

$$F_X(x) = P(X \leq x) = \sum_{aa \leq X}P(X = a) = \sum_{a \leq X}p_X(a)$$

--------------------------------------------------------------

#### Valore Atteso di una Variabile Aleatoria Discreta ####

Data la variabile aleatoria discreta $X$ su $\{x_1, x_2, ..., x_n\}$ e $p_X$ come funzione di massa di probabilità, si definisce _valore atteso_ la quantità

$$E(X) = \sum_{i}x_{i}p(x_{i}) = \sum_{i}x_{i}P(X = x_{i})$$

--------------------------------------------------------------

#### Varianza  di una Variabile Aleatoria Discreta ####

Si consideri la variabile aleatoria $X$ ed il suo valore atteso $E(X) = \mu$. Se si considera $\vert X - \mu \vert$, si sta operando con una nuova variabile aleatoria della quale è possibile calcolare il valore atteso

$$E(\vert X - \mu \vert)$$

Per togliere il valore assoluto ed operare esclusivamente con valori positivi, si eleva al quadrato, ottenendo:

$$E((X - \mu)^2)$$

Questo nuovo valore prende il nome di _varianza_ e viene indicata con $\sigma^2_X$

$$Var(X) = E(X^2 -2\mu X + \mu^2) = E(X^2) -2\mu E(X) + \mu^2 = E(X^2) -2\mu^2 + \mu^2 = E(X^2) -\mu^2 = E(X^2) - E(X)^2$$

La varianza ha la stessa unità di misura della variabile aleatoria elevata al quadrato.

--------------------------------------------------------------
#### Deviazione Standard ####

Se fosse necessaria una statistica che mantenga l'unità di misura della variabile aleatoria, si utilizza la _deviazione standard_, calcolata come:

$$\sigma_{x} = \sqrt{Var(X)}$$

--------------------------------------------------------------

#### Variabile Aleatoria Multivariata ####

Si ragioni in termini di coppie di variabili aleatorie $X$, $Y$.<br />
- _Funzione di ripartizione congiunta_: $F_{XY}(x, y) = P(X \leq x \wedge Y \leq y)$
-  _Funzione di massa di probabilità_: $P_{XY}(x, y) = P(X = x \wedge Y = y)$

#### Covarianza ####

Date due variabili aleatorie $X$, $Y$ e ponendo $\mu_{x} = E(X)$ e $\mu_{y} = E(Y)$, si definisce _covarianza_ la quantità

$$Cov(X, Y) = E((X -\mu_{x})(Y - \mu_{y}))$$

$$Cov(X, Y) = E(XY -\mu_{x}Y -\mu_{y}X + \mu_{x}\mu_{y}) = E(XY) -E(X)E(Y)$$

Nel caso in cui le variabili aleatorie $X$, $Y$ fossero indipendenti, avremmo che il valore atteso del loro prodotto è il prodotto dei valori attesi $E(XY) = E(X)E(Y)$. Ma allora, la covarianza di due variabili aleatorie indipendenti è 0.<br />

$$Cov(X, Y) = E(XY) -E(X)E(Y) = E(X)E(Y) - E(X)E(Y) = 0$$

--------------------------------------------------------------

#### Indice di Correlazione Lineare####

$$\rho_{X, Y} = \frac{Cov(X, Y)}{\sigma_{X}\sigma_{Y}}$$

--------------------------------------------------------------

#### Variabile Aleatoria Continua ####

Una variabile aleatoria X è detta _continua_ se
1) $$f_{x} : R \rightarrow R+$$
$\forall B \subseteq R$
2) $$P(X \in B) = \int_{B} f_{X}(x)dx$$

--------------------------------------------------------------

#### Densità di Probabilità ####

$$F_{X}(a) = P(X \leq a) = \int_{-\infty}^{a}f_{X}(x)dx$$

--------------------------------------------------------------

#### Valore Atteso di una Variabile Aleatoria Continua ####

$$E(X) = \int_{-\infty}^{+\infty}f_{X}(x)dx$$

--------------------------------------------------------------

#### Varianza di una Variabile Aleatoria Continua ####

$$Var(X) = E((X -\mu_{X})^2)$$

--------------------------------------------------------------

#### Disuguaglianza di Markov ####

Supponendo $X \geq 0$, allora $\forall a > 0$ si ha:

$$P(X \geq a) \leq \frac{E(x)}{a}$$

--------------------------------------------------------------

#### Disuguaglianza di Chebyshev ####

Presa una variabile aleatoria $X$ di valore atteso $E(X) = \mu$ e $Var(X) = \sigma^2$, allora $\forall r > 0$:

$$P(\vert X - \mu \vert \geq r) \leq \frac{\sigma^2}{r^2}$$

L’importanza di queste due disequazioni risiede nel fatto che ci consentono di avere stime della probabilità a partire dal valore atteso o dall’unione del valore atteso con la varianza.<br />

--------------------------------------------------------------