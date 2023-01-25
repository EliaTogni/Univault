### Teoria degli Insiemi ###
Si definisce $\Omega$ l'**insieme universo**, anche chiamato **spazio campionario**, ossia l'insieme che contiene tutti gli elementi possibili.<br />
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

L’insieme universo $\Omega$ viene spesso chiamato anche **spazio degli eventi**:<br /> Esso identifica l’insieme di tutti gli esiti di un esperimento casuale.<br />Si definisce **evento elementare** un elemento $w$ appartenente all’universo $\Omega$.<br />Si definisce, banalmente, **evento** un generico sottoinsieme dello spazio degli eventi $E \subset \Omega$.<br />L’evento può essere interpretato come un sottoinsieme contenente eventi elementari. Gli insiemi composti da un solo elemento sono detti **insiemi singoletto**. Tra tutti gli insiemi, ve ne sono due di menzione particolare:
- $\{\}$: l'insieme di partenza, si verifica sempre;
- $\emptyset$: l'insieme vuoto, non si verifica mai.

--------------------------------------------------------------

#### Algebra degli Eventi ###
Si definisce **Algebra degli Eventi** l'insieme

$$A = \{E_{i} \subseteq \Omega \}$$

Per essere tale, è necessario che vengano soddisfatte le seguenti proprietà:
1) $\Omega \in A$
2) $\forall E$ se $E \in A$ allora $\overline{E} \in A$
3) $\forall E$, $F$ se $E \in A \wedge F \in A$ allora $E \cup F \in A$
4) L'algebra è chiusa rispetto all'unione infinita. Per questo motivo, $A$ è più di un'algebra e viene detta $\sigma$-algebra.

--------------------------------------------------------------

#### Funzione di probabilità ####
$$P :A \rightarrow [0, 1]$$

**Dominio**: generica algebra $A$.<br />
**Codominio**: tutti i valori dell'intervallo chiuso $[0, 1]$.<br />

Per ogni evento $A$, la **probabilità** di $A$, o **$P(A)$**, è un valore numerico tale che:
- $0 \leq P(A) \leq 1$;
- $P(\Omega) = 1$;
- per una sequenza di eventi mutualmente esclusivi $A_{1}, A_{2}, ..., A_{n}$ $$P(\bigcup_{i=1}^{n} A_{i}) = \sum_{i = 1}^{n} P(A_{i}) $$

--------------------------------------------------------------

#### Probabilità Condizionata ####
Con **Probabilità Condizionata** si definisce la probabilità che l'evento $E$ accada sapendo che l'evento $F$ è accaduto.
$$P(E\vert F) = \frac{P(E\cap F)}{P(F)}$$
Da questa definizione, è possibile definire la probabilità dell'evento $A$ come $$P(A) = P(A \vert B)P(B) + P(A \vert \overline{B})P(\overline{B})$$

--------------------------------------------------------------

#### Eventi Indipendenti ####
Nel caso in cui $P(E \vert F)$ e $P(E)$ siano uguali, si dice che $E$ ed $F$ sono indipendenti.<br />
Quindi, se

$$P(E \vert F) = \frac{P(E \cap F)}{P(F)}$$

è possibile formalizzare l'indipendenza di eventi dicendo che

$$P(E \cap F) = P(E)P(F)$$
Quindi, nel caso in cui $E$ ed $F$ siano due eventi indipendenti, $$P(E \vert F) = \frac{P(E)P(F)}{P(F)} = P(E)$$

--------------------------------------------------------------

#### Variabile Aleatoria ####
Si definisce **variabile aleatoria** una qualsiasi variabile:
$$X: \Omega \rightarrow R$$

dove con $X = \alpha$ si indica l'evento:

$$\{X = \alpha \} = \{w \in \Omega : X(w) = \alpha \}$$

Per semplicità, anzichè scrivere $P(\{X = \alpha\} )$, si scriverà $P(X = \alpha)$.<br />

--------------------------------------------------------------

#### Variabile Aleatoria Discreta ####
Le variabili aleatorie **discrete** assumono un insieme numerabile di specificazioni.

--------------------------------------------------------------

#### Funzione di Massa di Probabilità ####
Si definisce **funzione di massa di probabilità** la funzione:

$$p_X : R \rightarrow [0, 1]$$
$$\forall x \in R \qquad p_X(x) = P(X = x)$$
$$\sum_{i \in I} p(x_{i}) = 1$$
--------------------------------------------------------------

#### Funzione di Ripartizione o di Distribuzione Cumulativa ####
Si consideri una variabile aleatoria $X$ e si definisca:

$$F_X(x) = P(X \leq x)$$

E' possibile definire la funzione di ripartizione in funzione di quella di massa di probabilità e viceversa:

$$F_X(x) = P(X \leq x) = \sum_{a \leq x}P(X = a) = \sum_{a \leq x}p_X(a)$$

--------------------------------------------------------------

#### Valore Atteso di una Variabile Aleatoria Discreta ####

Data la variabile aleatoria discreta $X$ su $\{x_1, x_2, ..., x_n\}$ e $p_X$ come funzione di massa di probabilità, si definisce _valore atteso_ la quantità

$$E[X] = \sum_{i}x_{i}p(x_{i}) = \sum_{i}x_{i}P(X = x_{i})$$
Il valore atteso gode di diverse proprietà, tra cui la **linearità**, infatti

$$E[aX + b] = aE[X] +b$ e $E[\sum_{i = 1}^{k}X_{i}] = \sum_{i = 1}^{k}E[X_{i}]$$

La dimostrazione della prima proprietà si deriva dalla definizione di valore atteso

$$E[aX + b] = \sum_{i = 1}^{n}(ax_{i}+b)p(x_{i}) = \sum_{i = 1}^{n}ax_{i}p(x_{i}) + \sum_{i=1}^{n}bp(x_{i}) =
$$$$ = aE[X] + b\cdot 1 = aE[X] + b$$
La dimostrazione della seconda proprietà si deriva anch'essa dalla definizione di valore atteso:

$$E[X_{1} + X_{2}] = \sum_{i =1}^{n}\sum_{j = 1}^{m}(x_{1}^{i} + x_{2}^{j})p_{1}^{i}p_{2}^{j} =$$
$$= \sum_{i}\sum_{j} x_{1}^{i}p_{1}^{i}p_{2}^{j} + \sum_{i}\sum_{j} x_{2}^{j}p_{1}^{i}p_{2}^{j} = $$
$$= \sum_{i}x_{1}^{i}p_{1}^{i}\sum_{j}p_{2}^{j} + \sum_{j}x_{2}^{j}p_{2}^{j}\sum_{i}p_{1}^{i} = = \sum_{i}x_{1}^{i}p_{1}^{i}\cdot 1 + \sum_{j}x_{2}^{j}p_{2}^{j}\cdot 1 =$$
$$= E[X_{1}] + E[X_{2}]$$

La dimostrazione vale anche per $k>2$.

---------------------------------------------------------------

#### Varianza di una Variabile Aleatoria Discreta ####
Si consideri la variabile aleatoria $X$ ed il suo valore atteso $E[X] = \mu$. Se si considera $\vert X - \mu \vert$, si sta operando con una nuova variabile aleatoria della quale è possibile calcolare il valore atteso

$$E[\vert X - \mu \vert]$$

Per togliere il valore assoluto ed operare esclusivamente con valori positivi, si eleva al quadrato, ottenendo:

$$E[(X - \mu)^2]$$

Questo nuovo valore prende il nome di _varianza_ e viene indicata con $\sigma^2_X$

$$Var[X] = E[X^2 -2\mu X + \mu^2] = E[X^2] -2\mu E[X] + \mu^2 = E[X^2] -2\mu^2 + \mu^2 = E[X^2] -\mu^2 = E[X^2] - E[X]^2$$

La varianza fornisce una misura della variabilità dei valori assunti dalla variabile stessa; nello specifico, la misura di quanto essi si discostino quadraticamente rispettivamente dalla media aritmetica o dal valore atteso $E[X]$.<br />
La varianza ha la stessa unità di misura della variabile aleatoria elevata al quadrato.

La varianza **non** è un operatore lineare. Infatti:
$$Var[aX + b] = a^{2}Var[X]$$

--------------------------------------------------------------
#### Deviazione Standard ####
Se fosse necessaria una statistica che mantenga l'unità di misura della variabile aleatoria, si utilizza la _deviazione standard_, calcolata come:

$$\sigma_{x} = \sqrt{Var[X]}$$

--------------------------------------------------------------

#### Variabile Aleatoria Multivariata ####
Si ragioni in termini di coppie di variabili aleatorie $X$, $Y$.<br />
- _Funzione di ripartizione congiunta_: $F_{XY}(x, y) = P(X \leq x \wedge Y \leq y)$
-  _Funzione di massa di probabilità congiunta_: $P_{XY}(x, y) = P(X = x \wedge Y = y)$

Le variabili $X$ e $Y$ sono indipendenti se, per ogni coppia di insiemi $C \subseteq \mathbb{R}$, $D \subseteq \mathbb{R}$, vale la seguente proprietà:
$$P(X \in C, Y \in D) = P(X \in C) \cdot P(Y \in D)$$

#### Covarianza ####
Date due variabili aleatorie $X$, $Y$ e ponendo $\mu_{x} = E[X]$ e $\mu_{y} = E[Y]$, si definisce _covarianza_ la quantità

$$Cov(X, Y) = E[(X -\mu_{x})(Y - \mu_{y})]$$
$$Cov(X, Y) = E[XY -\mu_{x}Y -\mu_{y}X + \mu_{x}\mu_{y}] = E[XY] -E[X]E[Y]$$

La covarianza di due variabili aleatorie è un valore numerico che fornisce una misura di quanto le due varino assieme, ovvero della loro dipendenza.<br />
Nel caso in cui le variabili aleatorie $X$, $Y$ fossero indipendenti, avremmo infatti che il valore atteso del loro prodotto è il prodotto dei valori attesi $E[XY] = E[X]E[Y]$. Quindi, la covarianza di due variabili aleatorie indipendenti è 0.<br />

$$Cov(X, Y) = E[XY] -E[X]E[Y] = E[X]E[Y] - E[X]E[Y] = 0$$

--------------------------------------------------------------

#### Indice di Correlazione Lineare####
$$\rho_{X, Y} = \frac{Cov(X, Y)}{\sigma_{X}\sigma_{Y}}$$
L'indice di correlazione varia tra i valori $-1$ e $1$, dove il coefficiente $1$ indica la perfetta correlazione lineare e il segno $+$ o $-$ indica la pendenza della retta di correlazione.

--------------------------------------------------------------

#### Variabile Aleatoria Continua ####
Una variabile aleatoria X è detta _continua_ se
1) $$f_{x} : R \rightarrow R+$$
2) $$\forall B \subseteq R \qquad P(X \in B) = \int_{B} f_{X}(x)dx$$
--------------------------------------------------------------

#### Densità di Probabilità ####
$$F_{X}(a) = P(X \leq a) = \int_{-\infty}^{a}f_{X}(x)dx$$
o, in maniera equivalente $$\frac{dF(x)}{dx} = f(x)$$

--------------------------------------------------------------

#### Valore Atteso di una Variabile Aleatoria Continua ####
$$E[X] = \int_{-\infty}^{+\infty}x \cdot f_{X}(x)dx$$

--------------------------------------------------------------

#### Varianza di una Variabile Aleatoria Continua ####
$$Var(X) = E[(X -\mu_{X})^2]$$

--------------------------------------------------------------

#### Disuguaglianza di Markov ####
Supponendo $X \geq 0$, allora $\forall a > 0$ si ha:

$$P(X \geq a) \leq \frac{E[X]}{a}$$
Scegliendo valori di $a$ sempre maggiori, la probabilità che $X$ sia maggiore di $a$ diminuisce.<br />

Dimostrazione:<br />
si definisce una nuova variabile aleatoria di supporto $$Y = \left\{ \begin{array}{rcl}  
a & \mbox{if}  
& X\geq a \\ 0 & \mbox{if} & X<a
\end{array}\right.$$
Si osserva che per $X \geq Y$, $E[X] \geq E[Y]$.<br />
Inoltre, si osserva che $$E[Y] = a \cdot P(X\geq a) + 0 \cdot P(X < a)$$
Quindi $$E[X] \geq aP(X\geq a) \quad = \quad P(X \geq a) \leq \frac{E[X]}{a}$$

--------------------------------------------------------------

#### Disuguaglianza di Chebyshev ####
Presa una variabile aleatoria $X$ di valore atteso $E[X] = \mu$ e $Var[X] = \sigma^2$, allora $\forall k > 0$:

$$P(\vert X - \mu \vert \geq k) \leq \frac{\sigma^2}{k^2}$$

L’importanza di queste due disequazioni risiede nel fatto che permettono di derivare dei vincoli sulle probabilità quando la media o media e varianza della distribuzione di probabilità sono note. Ovviamente, se la distribuzione attuale fosse nota, allora le probabilità potrebbero essere calcolate direttamente e non sarebbe necessario ricorrere a questi vincoli.<br />

Dimostrazione:<br />
Si definisce una variabile aleatoria di supporto $$Y = \frac{(X -\mu)^2}{\sigma^2}$$
Si osserva che $E[Y] = \frac{E[(X-\mu)^2]}{\sigma^2}$ in quanto il valore atteso è un operatore lineare.<br />
Ma $E[(X-\mu)^2]$ è la definizione di varianza $Var[Y]$. Di conseguenza,$E[Y] = 1$.<br />
Si consideri ora $P[Y \geq k^2]$. E' possibile applicare la disuguaglianza di Markov. $$P(Y \geq k^2) \leq \frac{E[Y]}{k^2} = \frac{1}{k^2}$$
$$P\Bigg(\frac{(X-\mu)^2}{\sigma^2} \geq k^2\Bigg) \leq \frac{1}{k^2}$$

$$P\Bigg(\frac{(X-\mu)^2}{\sigma} \geq k\sigma\Bigg) \leq \frac{1}{k^2}$$
--------------------------------------------------------------

#### Legge Debole dei Grandi Numeri ####
Definita una sequenza di variabili aleatorie indipendenti ed identicamente distribuite $X_{1}, X_{2}, ..., X_{n}$ aventi valore atteso $\mu$ e varianza $\sigma$. Allora, $\forall\epsilon > 0$
$$P\Bigg(\Bigg\vert \frac{\sum_{i = 1}^{n}X_{i}}{n} -\mu \Bigg\vert > \epsilon\Bigg) \rightarrow 0 \text{ 
 per } n \rightarrow \infty $$
Dimostrazione:
Si definisce una variabile aleatoria di supporto $$Y = \frac{\sum_{i=1}^{n}X_{i}}{n}$$
$$E[Y] = E\Bigg[\frac{\sum_{i=1}^{n}X_{i}}{n}\Bigg] = \frac{1}{n} \cdot \sum_{i=1}^{n}E[X_{i}] =\frac{1}{n}\cdot n\mu = \mu$$
Si osservi ora la varianza
$$Var[Y] = Var\Bigg[\frac{\sum_{i=1}^{n}X_{i}}{n}\Bigg] = \frac{1}{n^2}Var\Big[\sum_{i=1}^{n}X_{i}\Big] = \frac{1}{n^2}\sum_{i=1}^{n}Var[X_{i}] =$$
$$= \frac{n \cdot \sigma_{X}^2}{n^2} = \frac{\sigma_X^{2}}{n}$$
$$\sigma_{Y}^{2} = \frac{\sigma_X^{2}}{n}$$
Si osservi ora la probabilità
$$P(\vert Y -\mu \vert \geq k\sigma_{Y})$$
Si è nello stesso setting della disuguaglianza di Chebyshev. Allora
$$P(\vert Y -\mu \vert \geq k\sigma_{Y}) \leq \frac{1}{k^2} = P\Bigg(\vert Y -\mu \vert \geq k \sqrt{\frac{\sigma_{X}^2}{n}}\Bigg) \leq \frac{1}{k^2}$$
Si scelga allora una costante $\epsilon$ 
$$\epsilon = k \sqrt{\frac{\sigma_{X}^2}{n}} \quad \text{ e } \quad k = \frac{\epsilon}{\sqrt{\frac{\sigma_{X}^2}{n}}}$$
Quindi
$$\frac{1}{k^2} = \frac{\sigma_{X}^2}{n} \cdot \frac{1}{\epsilon^2}$$
In conclusione
$$P\Bigg(\bigg\vert \frac{\sum_{i=1}^{n}X_i}{n} -\mu \Bigg \vert\ \geq \epsilon \Bigg) \leq \frac{\sigma_{X}^2}{n\epsilon^2}$$
Per $n \rightarrow \infty$, il secondo membro della disequazione tende a $0$. Così volevasi dimostrare.<br />
In contesti pratici, $n$ non sarà mai infinito. Fissando $n$ ed $\epsilon$, si è in grado di ottenere un upper bound per la probabilità di avere un errore consistente. 

--------------------------------------------------------------

#### Legge Forte dei Grandi Numeri ####
Definita una sequenza di variabili aleatorie indipendenti ed identicamente distribuite $X_{1}, X_{2}, ..., X_{n}$ aventi valore atteso $\mu$. Allora
$$\lim_{n\to\infty} \frac{\sum_{i=1}^{n}X_{i}}{n} = \mu \quad \text{ con probabilità } 1$$

---------------------------------------------------------------

## Variabili Aleatorie ##
### Variabile Aleatoria Bernoulliana ###
Si tratta di una variabile aleatoria discreta che considera come valori possibili i valori nell'insieme ${0, 1}$.
$$X = \left\{ \begin{array}{rcl}  
1 & \mbox{con probabilità } & p\\ 0 & \mbox{con probabilità} & (1-p)
\end{array}\right.$$
Inoltre: $$E[X] = 1 \cdot p + 0\cdot (1-p) = p$$
$$Var[X] = E[X^{2}] -(E[X])^{2} =(1^{2}\cdot p -0^{2}\cdot (1-p)) - p^{2} = p-p^{2} = p(1-p)$$
