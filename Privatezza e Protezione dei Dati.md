# Privacy and Data Protection in Emerging Scenarios
### Motivations:
- Continuous growth of:
	- government and company databases;
	- user-generated content delivered through collaborative Internet services such as YouTube, Flickr;
	- personally identifiable information collected whenever a user creates an account, submits an application, signs up for newsletters, participates in a survey, . . .
- Data sharing and dissemination, for e.g.:
	- study trends or to make useful statistical inference;
	- share knowledge;
	- access on-line services.
- External data storage and computation:
	- cost saving and service benefits;
	- higher availability and more effective disaster protection.
- Need to ensure data privacy and integrity are properly protected.

----------------------------------------------------------------

### Outline
- Privacy in data publication $\to$ data release/dissemination;
- Privacy in data outsourcing $\to$ third parties store and manage data (towards cloud scenarios).

## Privacy in Data Publication

### Statistical DBMS vs statistical data
Release of data for statistical purpose:
- statistical DBMS:
	- the DBMS responds only to statistical queries;
	- need run time checking to control information (indirectly) released.
- statistical data:
	- publish statistics;
	- control on indirect release performed before publication.

----------------------------------------------------------------

### Macrodata vs microdata
In the past data were mainly released in tabular form (**macrodata**) and through statistical databases. Today many situations require that the specific stored data themselves, called **microdata**, be released, increasing flexibility and availability of information for the users. Microdata are subject to a greater risk of privacy breaches (**linking attacks**).

#### Macrodata
Macrodata tables can be classified into the following two groups (types of tables):
- **Count/Frequency**: each cell of the table contains the number of respondents (**count**) or the percentage of respondents (**frequency**) that have the same value over all attributes of analysis associated with the table;
- **Magnitude data**: each cell of the table contains an aggregate value of a quantity of interest over all attributes of analysis associated with the table.


An example of a count table is a two-dimensional table showing the number of employees by department and annual income (in K Euro).

slide 9/155

An example of a magnitude table is the average number of days spent in the hospital by respondents with a given disease.

slide 10/155

An example of a microdata table is the records about delinquent children in county Alfa.

slide 11/155

----------------------------------------------------------------

### Information disclosure
Disclosure relates to attribution of sensitive information to a
respondent (an individual or organization) There is disclosure when:
- a respondent is identified from released data (**identity disclosure**);
- sensitive information about a respondent is revealed through the released data (**attribute disclosure**);
- the released data make it possible to determine the value of some characteristic of a respondent even if no released record refers to the respondent (**inferential disclosure**).

#### Identity disclosure
It occurs if a third party can identify a respondent from the released data. Revealing that an individual is a respondent in a data collection may or may not violate confidentiality requirements.<br />
In macrodata, revealing identity is generally not a problem, unless
the identification leads to divulging confidential information
(attribute disclosure)
In microdata, identification is generally regarded as a problem, since microdata records are detailed; identity disclosure usually implies also attribute disclosure.

----------------------------------------------------------------

#### Attribute disclosure
It occurs when confidential information about a respondent is revealed and can be attributed to her. Confidential information may be:
- revealed exactly;
- closely estimated.

----------------------------------------------------------------

#### Inferential disclosure
It occurs when information can be inferred with high confidence from statistical properties of the released data. For example, the data may show a high correlation between income and purchase price of home. As purchase price of home is typically public information, a third party might use this information to infer the income of a respondent.<br />
Inference disclosure does not always represent a risk:
- statistical data are released for enabling users to infer and
understand relationships between variables;
- inferences are designed to predict aggregate behavior, not
individual attributes, and are then often poor predictors of
individual data values.

----------------------------------------------------------------

### Restricted data and restricted access
The choice of statistical disclosure limitation methods depends on the nature of the data products whose confidentiality must be protected. Some microdata include explicit identifiers (e.g., name, address or Social Security Number). Removing such identifiers is a first step in preparing for the release of microdata for which the confidentiality of individual information must be protected.<br />
Confidentiality can be protected by:
- restricting the amount of information in the released tables (restricted data);
- imposing conditions on access to the data products (restricted access);
- some combination of these two strategies.

----------------------------------------------------------------

### Protection for count/frequencies macrodata
The data collected from most surveys about people are published in tables that show counts (number of people by category) or frequencies (fraction or percentage of people by category). The protection techniques include:
- **sampling**: publish a survey rather than a census;
- **special rules**: define restrictions on the level of details that can be provided in a table (e.g., do not publish or make inferrable earnings within a $ 1,000 interval);
- **threshold rules**: define a cell of a table sensitive if the number of respondents is less than some specified number.

----------------------------------------------------------------

### Disclosure protection techniques for microdata
The classical protection techniques (often applied to protect microdata before computing statistics) can be classified as follows:
- **masking techniques**: transform the original set of data by not releasing or perturbing their values:
	- non-perturbative: the original data are not modified, but some data are suppressed and/or some details are removed (e.g., sampling, local suppression, generalization);
	- perturbative: the original data are modified (e.g., rounding, swapping).
- synthetic data generation techniques: release plausible but synthetic values instead of the real ones:
	- fully synthetic: the released dataset contains synthetic data only;
	- partially synthetic: the released dataset contains a mix of original and synthetic data.

----------------------------------------------------------------

### The anonymity problem
The amount of privately owned records that describe each citizen’s finances, interests, and demographics is increasing every day. These data are de-identified before release, that is, any explicit identifier (e.g., SSN) is removed. De-identification is not sufficient. In fact, most municipalities sell population registers that include the identities of individuals along with basic demographics. These data can then be used for linking identities with de-identified information (**re-identification**).

An example of the anonymity problem

slides 21/155

----------------------------------------------------------------

### Classification of attributes in a microdata table
The attributes in the original microdata table can be classified as:
- **identifiers**: attributes that uniquely identify a microdata respondent (e.g., SSN uniquely identifies the person with which is associated);
- **quasi-identifiers**: attributes that, in combination, can be linked with external information to reidentify all or some of the respondents to whom information refers or reduce the uncertainty over their identities (e.g., DoB, ZIP, and Sex);
- **confidential**: attributes of the microdata table that contain sensitive information (e.g., Disease);
- **non confidential**: attributes that the respondents do not consider sensitive and whose release does not cause disclosure.

----------------------------------------------------------------

### Factors contributing to disclosure risk
Possible sources of the disclosure risk of microdata:
- **existence of high visibility records**: some records on the file may represent respondents with unique characteristics such as very unusual jobs (e.g., movie star) or very large incomes;
- **possibility of matching the microdata with external information**: there may be individuals in the population who possess a unique or peculiar combination of the characteristic variables on the microdata:
	- if some of those individuals happen to be chosen in the sample of the population, there is a disclosure risk;
	- note that the identity of the individuals that have been chosen should be kept secret.

The possibility of linking or its precision increases with:
- the existence of a high number of common attributes between the microdata table and the external sources;
- the accuracy or resolution of the data;
- the number and richness of outside sources, not all of which may be known to the agency releasing the microdata.

----------------------------------------------------------------

### Factors contributing to decrease the disclosure risk
A microdata table often contains a subset of the whole population. This implies that the information of a specific respondent may not be included in the microdata table.<br />
Furthermore, the information specified in microdata tables released to the
public is not always up-to-date (often at least one or two-year old). Therefore, the values of the attributes of the corresponding respondents may have been changed in the meanwhile. Also, the age of the external sources of information used for linking may be different from the age of the information contained in the
microdata table.<br />
A microdata table and the external sources of information naturally contain noise that decreases the ability to link the information and can also contain data expressed in different forms thus decreasing the ability to link information.

----------------------------------------------------------------

### Measures of risk
Measuring the disclosure risk requires considering:
- the probability that the respondent for whom an intruder is looking for is represented on both the microdata and some external file;
- the probability that the matching variables are recorded in a linkable way on the microdata and on the external file;
- the probability that the respondent for whom the intruder is looking for is unique (or peculiar) in the population of the external file.
The percentage of records representing respondents who are unique in the population (**population unique**) plays a major role in the disclosure risk of microdata (with respect to the specific respondent). Note that each population unique is a sample unique; the vice-versa is not true.

----------------------------------------------------------------

## $K$-Anonymity

**$K$-anonymity**, together with its enforcement via generalization and suppression, aims to protect respondents’ identities while releasing truthful information. It tries to capture the following requirement:
- the released data should be indistinguishably related to no less than a certain number of respondents;
- Quasi-identifier: set of attributes that can be exploited for linking (whose release must be controlled).

The basic idea is to translate the $k$-anonymity requirement on the released data. Each release of data must be such that every combination of values of quasi-identifiers can be indistinctly matched to at least $k$ respondents.<br />
In the released table the respondents must be indistinguishable
(within a given set) with respect to a set of attributes. $K$-anonymity requires that each quasi-identifier value appearing in the released table must have at least $k$ occurrences. This is a sufficient condition for the satisfaction of $k$-anonymity requirement

### Generalization and suppression
with **generalization**, the values of a given attribute are substituted by using more general values. Based on the definition of a generalization hierarchy, for example, consider the attribute ZIP code and suppose that a step in the corresponding generalization hierarchy consists in suppressing the least significant digit in the ZIP code.
With one generalization step, $20222$ and $20223$ become $2022*$ and 
$20238$ and $20239$ become $2023*$.<br />
With **suppression**,  it is possible to protect sensitive information by removing it. The introduction of suppression can reduce the amount of generalization necessary to satisfy the $k$-anonymity constraint.

----------------------------------------------------------------

### Domain generalization hierarchy
A **generalization relationship** $\leq_{D}$ defines a mapping between
domain $D$ and its generalizations. Given two domains $D_i, D_j \in Dom$, $D_i \leq_{D} D_j$ states that the values in domain $D_j$ are generalizations of values in $D_i$. $\leq_{D}$ implies the existence, for each domain $D$, of a **domain generalization hierarchy** $DGH_D = (Dom, \leq_D )$:
- $\forall D_i, D_j, D_z \in Dom: D_i \leq_D D_j, D_i \leq_D D_z \to D_j \leq_D D_z \vee D_z \leq_D D_j$
- all maximal elements of $Dom$ are singleton.

Given a domain tuple $D_T = \langle D_1, . . . , D_n \rangle$ such that $D_i \in Dom, i = 1, . . . , n$, the domain generalization hierarchy of $D_T$ is $DGH_{DT} = DGH_{D1} \times . . . \times DGH_{Dn}$.


An example of a domain generalization hierarchy.
slide 34/155

----------------------------------------------------------------

### Value generalization hierarchy
A **value generalization relationship** $\leq_V$ associates with each value in domain $D_i$ a unique value in domain $D_j$, direct generalization of $D_i$. $\leq_V$ implies the existence, for each domain $D$, of a value generalization hierarchy $VGH_D$. $VGH_D$ is a tree where the leaves are the values in $D$ and the root (i.e., the most general value) is the value in the maximum element in $DGH_D$.

An example of value generalization hierarchy.
slide 36/155

----------------------------------------------------------------

### Generalized table with suppression
Let $T_i$ and $T_j$ be two tables defined on the same set of attributes. Table $T_j$ is said to be a generalization (with tuple suppression) of table $T_i$, denoted $T_i \preceq T_j$ , if:
1) $\vert T_j \vert \leq \vert T_i \vert$;
2) the domain $dom(A, T_j)$ of each attribute $A$ in $T_j$ is equal to, or a generalization of, the domain $dom(A, T_i)$ of attribute $A$ in $T_i$;
3) it is possible to define an injective function associating each tuple $t_j$ in $T_j$ with a tuple $t_i$ in $T_i$ , such that the value of each attribute in $t_j$ is equal to, or a generalization of, the value of the corresponding attribute in $t_i$.


An example of a generalized table with suppression.
slide 38/155

----------------------------------------------------------------

### $k$-minimal generalization with suppression
Now, it will be provided the definition of **Distance vector**. Let $T_i (A_1 , . . . , A_n)$ and $T_j (A_1 , . . . , A_n)$ be two tables such that $T_i \preceq T_j$. The distance vector of $T_j$ from T_i$ is the vector $DV_{i,j} = [d_1 , . . . , d_n]$, where each $d_z, z = 1, . . . , n$, is the length of the
unique path between $dom(A_z , T_i)$ and $dom(A_z, T_j)$ in the domain
generalization hierarchy $DGH_{D_z}.

slide 39/155

Let $T_i$ and $T_j$ be two tables such that $T_i \preceq T_j$ , and let $MaxSup$ be the specified threshold of acceptable suppression. $T_j$ is said to be a **$k$-minimal generalization** of table $T_i$ iff:
1) $T_j$ satisfies $k$-anonymity enforcing minimal required suppression, that is, $T_j$ satisfies $k$-anonymity and $\forall T_z : T_i \preceq T_z, DV_{i,z} = DV_{i,j}$, $T_z$ satisfies $k$-anonymity $\to \vert T_j \vert \geq \vert T_z \vert$;
2) $\vert T_i \vert − \vert T_j \vert \leq MaxSup$;
3) $\forall T_z : T_i \preceq T_z$ and $T_z$ satisfies conditions $1$ and $2$ $\to \neg (DV_{i,z} < DV_{i,j})$

Examples of $2$-minimal generalizations with $MaxSup = 2$.
slide 41/155

----------------------------------------------------------------

### Computing a preferred generalization
Different preference criteria can be applied in choosing a preferred minimal generalization, among which:
- **minimum absolute distance** prefers the generalization(s) with the smallest absolute distance, that is, with the smallest total number of generalization steps (regardless of the hierarchies on which they have been taken);
- **minimum relative distance** prefers the generalization(s) with the smallest relative distance, that is, that minimizes the total number of relative steps (a step is made relative by dividing it over the height of the domain hierarchy to which it refers):
- **maximum distribution** prefers the generalization(s) with the greatest number of distinct tuples;
- **minimum suppression** prefers the generalization(s) that suppresses less tuples, that is, the one with the greatest cardinality.

----------------------------------------------------------------

### Classification of k-anonymity techniques
Generalization and suppression can be applied at different levels of granularity. Generalization can be applied at the level of single column (i.e., a generalization step generalizes all the values in the column) or single cell (i.e., for a specific column, the table may contain values at different generalization levels).<br />
Suppression can be applied at the level of row (i.e., a suppression operation removes a whole tuple), column (i.e., a suppression operation obscures all the values of a column), or single cells (i.e., a $k$-anonymized table may wipe out only certain cells of a given tuple/attribute).

slide 44/155


An example of $2$-anonymized tables with regard to different models.

slides 45 - 48 /155

----------------------------------------------------------------

### Algorithms for computing a $k$-anonymous table
The problem of finding minimal k-anonymous tables, with attribute generalization and tuple suppression, is computationally hard. The majority of the exact algorithms proposed in literature have computational time exponential in the number of the attributes composing the quasi-identifier. When the number $\vert QI \vert$ of attributes in the quasi-identifier is small
compared with the number $n$ of tuples in the private table PT, these exact algorithms with attribute generalization and tuple suppression are practical.<br />
Many exact algorithms for producing $k$-anonymous tables through attribute generalization and tuple suppression have been
proposed.

----------------------------------------------------------------

## Algorithms for AG_TS and AG_
### Computing a $k$-minimal solution
• Each path in DGHDT represents a generalization strategy for PT
• We call locally minimal generalization the lowest node of each
path satisfying k-anonymity
• Properties exploited by the algorithm:
1. each k-minimal generalization is locally minimal with respect to a
path (but the converse is not true)
2. going up in the hierarchy the number of tuples that must be
removed to guarantee k-anonymity decreases

• If there is no solution that guarantees k-anonymity suppressing
less than MaxSup tuples at height h, there cannot exist a solution,
with height lower than h that guarantees it
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

51/155

Computing a k-minimal solution [S-01] – 2
• The algorithm adopts a binary search on the lattice of distance
vectors:
1. evaluate solutions at height ⌊h/2⌋
2. if there exists at least a solution satisfying k-anonymity
− then evaluates solutions at height ⌊h/4⌋
− otherwise evaluates solutions at height ⌊3h/4⌋

3. until the algorithm reaches the lowest height for which there is a
distance vector that satisfies k-anonymity

• To reduce the computational cost, it adopts a distance vector
matrix that avoids the explicit computation of each generalized
table
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

52/155

Computing a k-minimal solution – Example (1)
Distance vector matrix

t1
t2
t3
t4
t5
t6
t7
t8
t9

Race:R0

ZIP:Z0

asian
asian
asian
asian
asian
black
black
white
white

94142
94141
94139
94139
94139
94138
94139
94139
94141

t1
t2
t6
t7
t8
t9

t1
[0, 0]
[0, 1]
[1, 2]
[1, 2]
[1, 2]
[1, 1]

t2 t3 /t4 /t5
[0, 1] [0, 2]
[0, 0] [0, 2]
[1, 2] [1, 1]
[1, 2] [1, 0]
[1, 2] [1, 0]
[1, 0] [1, 2]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t6
[1, 2]
[1, 2]
[0, 0]
[0, 1]
[1, 1]
[1, 2]

t7
[1, 2]
[1, 2]
[0, 1]
[0, 0]
[1, 0]
[1, 2]

t8
[1, 2]
[1, 2]
[1, 1]
[1, 0]
[0, 0]
[0, 2]

t9
[1, 1]
[1, 0]
[1, 2]
[1, 2]
[0, 2]
[0, 0]

53/155

Computing a k-minimal solution – Example (2)
Suppose k = 2 and MaxSup=2.
Compute first solutions at height 1: GT[1,0] and GT[0,1]
Race:R1 ZIP:Z0
t1
t2
t3
t4
t5
t6
t7
t8
t9

person
person
person
person
person
person
person
person
person

94142
94141
94139
94139
94139
94138
94139
94139
94141

t1
t2
t6
t7
t8
t9

t1
[0, 0]
[0, 1]
[1, 2]
[1, 2]
[1, 2]
[1, 1]

t2 t3 /t4 /t5
[0, 1] [0, 2]
[0, 0] [0, 2]
[1, 2] [1, 1]
[1, 2] [1, 0]
[1, 2] [1, 0]
[1, 0] [1, 2]

t6
[1, 2]
[1, 2]
[0, 0]
[0, 1]
[1, 1]
[1, 2]

t7
[1, 2]
[1, 2]
[0, 1]
[0, 0]
[1, 0]
[1, 2]

t8
[1, 2]
[1, 2]
[1, 1]
[1, 0]
[0, 0]
[0, 2]

t9
[1, 1]
[1, 0]
[1, 2]
[1, 2]
[0, 2]
[0, 0]

Satisfies 2-anonymity (suppressing t1 and t6 )
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

54/155

Computing a k-minimal solution – Example (2)
Suppose k = 2 and MaxSup=2.
Compute first solutions at height 1: GT[1,0] and GT[0,1]
Race:R0 ZIP:Z1
t1
t2
t3
t4
t5
t6
t7
t8
t9

asian
asian
asian
asian
asian
black
black
white
white

9414*
9414*
9413*
9413*
9413*
9413*
9413*
9413*
9414*

t1
t2
t6
t7
t8
t9

t1
[0, 0]
[0, 1]
[1, 2]
[1, 2]
[1, 2]
[1, 1]

t2 t3 /t4 /t5
[0, 1] [0, 2]
[0, 0] [0, 2]
[1, 2] [1, 1]
[1, 2] [1, 0]
[1, 2] [1, 0]
[1, 0] [1, 2]

t6
[1, 2]
[1, 2]
[0, 0]
[0, 1]
[1, 1]
[1, 2]

t7
[1, 2]
[1, 2]
[0, 1]
[0, 0]
[1, 0]
[1, 2]

t8
[1, 2]
[1, 2]
[1, 1]
[1, 0]
[0, 0]
[0, 2]

t9
[1, 1]
[1, 0]
[1, 2]
[1, 2]
[0, 2]
[0, 0]

Satisfies 2-anonymity (suppressing t8 and t9 )
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

54/155

k-Optimize algorithm [BA-05] – 1
• Order attributes in QI and the values in their domains
• Associate an integer index value with each domain value,
following the defined order
Race
ZIP
⟨[asian] [black] [white]⟩ ⟨[94138] [94139] [94141] [94142]⟩
1
2
3
4
5
6
7
• A generalization is the union of individual index values
• The least value in an attribute domain is omitted. E.g., {6}
corresponds to:
◦ Race: {1}, that is: ⟨[asian or black or white]⟩
◦ ZIP: {4, 6}, that is: ⟨[94138 or 94139],[94141 or 94142]⟩

• Order of values within domains has impact on generalization

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

55/155

k-Optimize algorithm [BA-05] – 2
• k-Optimize builds a set enumeration tree over the set I of indexes

• The root node of the tree is the empty set
• The children of n are the sets obtained by appending a single
element i of I to n, such that ∀i′ ∈ n, i > i′
• Each node has a cost that reflects the amount of generalization
and suppression of the anonymization represented by the node
=⇒ each tuple is associated with a cost that reflects the
information loss associated with its generalization or
suppression
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

56/155

k-Optimize algorithm [BA-05] – 3
• k-Optimize visits the tree (e.g., using a depth-first search) for
searching the anonymization with lowest cost
• Since the number of nodes in the tree is 2|I| , the visit of the tree is
not practical =⇒ pruning strategy to reduce computational cost
• Node n is pruned iff none of its descendants could be optimal
• This determination can be made by computing a lower bound on
the cost of the nodes in the subtree rooted at n
=⇒ if the lower bound is greater than the current best cost, node n
is pruned

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

57/155

Incognito algorithm [LDR-05]
k-anonymity with respect to a proper subset of QI is a necessary (not
sufficient) condition for k-anonymity with respect to QI
• Iteration 1: check k-anonymity for each attribute in QI, discarding
generalizations that do not satisfy k-anonymity
• Iteration 2: combine the remaining generalizations in pairs and
check k-anonymity for each couple obtained
...
• Iteration i: consider all the i-uples of attributes, obtained
combining generalizations that satisfied k-anonymity at iteration
i − 1. Discard non k-anonymous solutions
...
• Iteration |QI| returns the final result
Incognito adopts a bottom-up approach for the visit of DGHs
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

58/155

Incognito – Example (1)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

59/155

Incognito – Example (2)
Race Sex Marital status
asian
asian
asian
asian
asian
black
black
white
white

F
F
F
M
M
F
F
F
F

divorced
divorced
married
married
married
single
single
single
widow

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

60/155

Heuristic algorithms
• The exact algorithms have complexity exponential in the size of QI
• Heuristic algorithms have been proposed
◦ [I-02]: based on genetic algorithms, it solves the k-anonymity
problem using an incomplete stochastic search method
◦ [MW-04]: based on simulated annealing for finding locally minimal
solutions, it requires high computational time and does not assure
the quality of the solution
◦ [FWY-05]: top-down heuristic to make a table to be released
k-anonymous; it starts from the most general solution, and
iteratively specializes some values of the current solution until the
k-anonymity requirement is violated

• No bounds on efficiency and goodness of the solutions can be
given
• Experimental results can be used to assess the quality of the
solution retrieved
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

61/155

Algorithms for _CS and CG_

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

62/155

Mondrian multidimensional algorithm [LDR-06] – 1
• Each attribute in QI represents a dimension
• Each tuple in PT represents a point in the space defined by QI
• Tuples with the same QI value are represented by giving a
multiplicity value to points
• The multi-dimensional space is partitioned by splitting dimensions
such that each area contains at least k occurrences of point values
• All the points in a region are generalized to a unique value
• The corresponding tuples are substituted by the computed
generalization
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

63/155

Mondrian multidimensional algorithm [LDR-06] – 2
Mondrian algorithm is flexible and can operate
• on a different number of attributes
◦ single-dimension
◦ multi-dimension

• with different recoding (generalization) strategies
◦ global recoding
◦ local recoding

• with different partitioning strategies
◦ strict (i.e., non-overlapping) partitioning
◦ relaxed (i.e., potentially overlapping) partitioning

• using different metrics to determine how to split on each
dimension
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

64/155

Mondrian multidimensional algorithm – Example
wished k=3
Race

ZIP

asian
asian
asian
asian
asian
black
black
white
white

94142
94141
94139
94139
94139
94138
94139
94139
94141
PT

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

65/155

Mondrian multidimensional algorithm – Example
wished k=3
Race

ZIP

asian
asian
asian
asian
asian
black
black
white
white

94142
94141
94139
94139
94139
94138
94139
94139
94141
PT

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

65/155

Mondrian multidimensional algorithm – Example
wished k=3
Race

ZIP

asian
asian
asian
asian
asian
black
black
white
white

94142
94141
94139
94139
94139
94138
94139
94139
94141
PT

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

65/155

Mondrian multidimensional algorithm – Example
wished k=3
Race

ZIP

asian
asian
asian
asian
asian
black
black
white
white

94142
94141
94139
94139
94139
94138
94139
94139
94141
PT

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

65/155

Mondrian multidimensional algorithm – Example
wished k=3
Race

ZIP

asian or white
asian or white
asian
asian
asian
black or white
black or white
black or white
asian or white

9414*
9414*
94139
94139
94139
9413*
9413*
9413*
9414*

GT

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

65/155

Approximation algorithms
• Approximation algorithms for general and specific values of k
(e.g., 1.5-approximation for 2-anonymity, and 2-approximation for
3-anonymity [AFKMPTZ-05b])
• Approximation algorithm for _CS
◦ [MW-04]: O(k log(k))-approximation
◦ [AFKMPTZ-05a]: with unbounded value of k, O(k)-approximation
solution

• Approximation algorithm for CG_
◦ [AFKMPTZ-05b]: with unbounded value of k, O(k)-approximation
solution

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

66/155

k-anonymity revisited [GMT-08]
• k-anonymity requirement: each release of data must be such that
every combination of values of quasi-identifiers can be indistinctly
matched to at least k respondents
• When generalization is performed at attribute level (AG) this is
equivalent to require each quasi-identifier n-uple to have at least k
occurrences
• When generalization is performed at cell level (CG) the existence
of at least k occurrences is a sufficient but not necessary
condition; a less stricter requirement would suffice
1. for each sequence of values pt in PT[QI] there are at least k tuples
in GT[QI] that contain a sequence of values generalizing pt
2. for each sequence of values t in GT[QI] there are at least k tuples in
PT[QI] that contain a sequence of values for which t is a
generalization
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

67/155

k-anonymity revisited – Example
Race
white
black
asian
asian
asian

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
9414*
asian
9414*
2-anonymity
(revisited)

ZIP
94138
94139
94141
94141
94142
PT

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
9414*
2-anonymity

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
94142
no 2-anonymity

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
94141
asian
9414*
no 2-anonymity

68/155

k-anonymity revisited – Example
Race
white
black
asian
asian
asian

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
9414*
asian
9414*
2-anonymity
(revisited)

ZIP
94138
94139
94141
94141
94142
PT

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
9414*
2-anonymity

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
94142
no 2-anonymity

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
94141
asian
9414*
no 2-anonymity
68/155

k-anonymity revisited – Example
Race
white
black
asian
asian
asian

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
9414*
asian
9414*
2-anonymity
(revisited)

ZIP
94138
94139
94141
94141
94142
PT

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
9414*
2-anonymity

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
94142
no 2-anonymity

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
94141
asian
9414*
no 2-anonymity
68/155

k-anonymity revisited – Example
Race
white
black
asian
asian
asian

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
9414*
asian
9414*
2-anonymity
(revisited)

ZIP
94138
94139
94141
94141
94142
PT

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
9414*
2-anonymity

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
94142
no 2-anonymity

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
94141
asian
9414*
no 2-anonymity
68/155

k-anonymity revisited – Example
Race
white
black
asian
asian
asian

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
9414*
asian
9414*
2-anonymity
(revisited)

ZIP
94138
94139
94141
94141
94142
PT

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
9414*
2-anonymity

Race
ZIP
person 9413*
person 9413*
asian
9414*
asian
9414*
asian
94142
no 2-anonymity

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Race
ZIP
person 9413*
person 9413*
asian
94141
asian
94141
asian
9414*
no 2-anonymity
68/155

Attribute Disclosure

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

69/155

2-anonymous table according to the AG_ model
k-anonymity is vulnerable to some attacks [MGK-06,S-01]
Race

DOB

Sex

ZIP

asian
asian
asian
asian
asian
black
black
white
white

64
64
64
63
63
64
64
64
64

F
F
F
M
M
F
F
F
F

941**
941**
941**
941**
941**
941**
941**
941**
941**

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Disease
hypertension
obesity
chest pain
obesity
obesity
short breath
short breath
chest pain
short breath

70/155

Homogeneity of the sensitive attribute values
• All tuples with a quasi-identifier value in a k-anonymous table may
have the same sensitive attribute value
◦ an adversary knows that Carol is a black female and that her data
are in the microdata table
◦ the adversary can infer that Carol suffers from short breath

Race

DOB

Sex

ZIP

...
black
black
...

...
64
64
...

...
F
F
...

...
941**
941**
...

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Disease
...
short breath
short breath
...

71/155

Background knowledge
• Based on prior knowledge of some additional external information
◦ an adversary knows that Hellen is a white female and she is in the
microdata table
◦ the adversary can infer that the disease of Hellen is either
chest pain or short breath
◦ the adversary knows that Hellen runs 2 hours a day and therefore
that Hellen cannot suffer from short breath
=⇒ the adversary infers that Hellen’s disease is chest pain

Race

DOB

Sex

ZIP

...
white
white

...
64
64

...
F
F

...
941**
941**

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Disease
...
chest pain
short breath
72/155

ℓ-diversity – 1
• A q-block (i.e., set of tuples with the same value for QI) is ℓ-diverse
if it contains at least ℓ different “well-represented” values for the
sensitive attribute
◦ “well-represented”: different definitions based on entropy or
recursion (e.g., a q-block is ℓ-diverse if removing a sensitive value it
remains (ℓ-1)-diverse)

• ℓ-diversity: an adversary needs to eliminate at least ℓ-1 possible
values to infer that a respondent has a given value

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

73/155

ℓ-diversity – 2
• A table is ℓ-diverse if all its q-blocks are ℓ-diverse
=⇒ the homogeneity attack is not possible anymore
=⇒ the background knowledge attack becomes more difficult

• ℓ-diversity is monotonic with respect to the generalization
hierarchies considered for k-anonymity purposes
• Any algorithm for k-anonymity can be extended to enforce the
ℓ-diverse property
BUT
ℓ-diversity leaves space to attacks based on the distribution of values
inside q-blocks (skewness and similarity attacks)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

74/155

Skewness attack
• Skewness attack occurs when the distribution in a q-block is
different than the distribution in the original population
• 20% of the population suffers from diabetes; 75% of tuples in a
q-block have diabetes
=⇒ people in the q-block have higher probability of suffering from
diabetes
Race

DOB

Sex

ZIP

black
black
black
black

64
64
64
64

F
F
F
F

941**
941**
941**
941**

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Disease
diabetes
short breath
diabetes
diabetes

75/155

Similarity attack
• Similarity attack happens when a q-block has different but
semantically similar values for the sensitive attribute
Race

DOB

Sex

ZIP

black
black
black

64
64
64

F
F
F

941**
941**
941**

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Disease
stomach ulcer
stomach ulcer
gastritis

76/155

Group closeness
• A q-block respects t-closeness if the distance between the
distribution of the values of the sensitive attribute in the q-block
and in the considered population is lower than t
• A table respects t-closeness if all its q-blocks respect t-closeness
• t-closeness is monotonic with respect to the generalization
hierarchies considered for k-anonymity purposes
• Any algorithm for k-anonymity can be extended to enforce the
t-closeness property, which however might be difficult to achieve

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

77/155

External knowledge modeling
• An observer may have external/background knowledge that can
be exploited to infer information
• Knowledge may be about:
◦ the target individual
◦ others: information about individuals other than the target
◦ same-value families: knowledge that a group (or family) of
individuals have the same sensitive value (e.g., genomic
information)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

78/155

External knowledge – Example (1)
Name
Alice
Bob
Carol
David
Elen
Frank
George
Harry

DOB Sex ZIP
74/04/12 F 94142
74/04/13 M 94141
74/09/15 F 94139
74/03/13 M 94139
64/03/18 F 94139
64/09/27 M 94138
64/09/27 M 94139
64/09/27 M 94139
Original table

Disease
aids
flu
flu
aids
flu
short breath
flu
aids

=⇒

DOB Sex ZIP Disease
047412 * 941** aids
74
* 941** flu
74
* 941** flu
74
* 941** aids
64
* 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

Released table is 4-anonymized but . . . . . .

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

79/155

External knowledge – Example (2)
DOB Sex ZIP Disease
047412 * 941** aids
74
* 941** flu
74
* 941** flu
74
* 941** aids
64
* 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

An adversary knows that Harry, born in 64 and living in area 94139, is
in the table

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

80/155

External knowledge – Example (2)
DOB Sex ZIP Disease
047412 * 941** aids
74
* 941** flu
74
* 941** flu
74
* 941** aids
64
* 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

DOB Sex

=⇒

ZIP

Disease

046412 * 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

An adversary knows that Harry, born in 64 and living in area 94139, is
in the table
=⇒ Harry belongs to the second group
=⇒ Harry has aids with confidence 1/4

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

80/155

External knowledge – Example (3)
DOB Sex

ZIP

Disease

046404 * 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

From another dataset, the adversary knows that George (who is in the
table, is born in 64, and leaves in area 941**) has flu

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

81/155

External knowledge – Example (3)
DOB Sex

ZIP

Disease

046404 * 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

DOB Sex

ZIP

Disease

=⇒
046404 * 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

From another dataset, the adversary knows that George (who is in the
table, is born in 64, and leaves in area 941**) has flu
=⇒ Harry has aids with confidence 1/3

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

81/155

External knowledge – Example (4)
DOB Sex

ZIP

Disease

046404 * 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

From personal knowledge, the adversary knows that Harry does not
have short breath

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

82/155

External knowledge – Example (4)
DOB Sex

ZIP

Disease

DOB Sex

ZIP

Disease

=⇒
046404 * 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table

046404 * 941** flu
64
* 941** aids
4-anonymized table

From personal knowledge, the adversary knows that Harry does not
have short breath
=⇒ Harry has aids with confidence 1/2

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

82/155

Multiple releases
• Data may be subject to frequent changes and may need to be
published on regular basis
• The multiple release of a microdata table may cause information
leakage since a malicious recipient can correlate the released
datasets

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

83/155

Multiple independent releases – Example (1)
T1
DOB Sex ZIP Disease
74
* 941** aids
74
* 941** flu
74
* 941** flu
74
* 941** aids
64
* 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table at time t1

T2
DOB Sex ZIP Disease
[70-80] * 9414* hypertension
[70-80] * 9414* gastritis
[70-80] * 9414* aids
[70-80] * 9414* gastritis
[60-70] * 9413* flu
[60-70] * 9413* aids
[60-70] * 9413* flu
[60-70] * 9413* gastritis
4-anonymized table at time t2

An adversary knows that Alice, born in 1974 and living in area 94142,
is in both releases

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

84/155

Multiple independent releases – Example (1)
T1
DOB Sex ZIP Disease
74
* 941** aids
74
* 941** flu
74
* 941** flu
74
* 941** aids

T2
DOB Sex ZIP Disease
[70-80] * 9414* hypertension
[70-80] * 9414* gastritis
[70-80] * 9414* aids
[70-80] * 9414* gastritis

4-anonymized table at time t1

4-anonymized table at time t2

An adversary knows that Alice, born in 1974 and living in area 94142,
is in both releases
=⇒ Alice belongs to the first group in T1
=⇒ Alice belongs to the first group in T2
Alice suffers from aids (it is the only illness common to both groups)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

84/155

Multiple independent releases – Example (1)
T1
DOB Sex ZIP Disease
74
* 941** aids
74
* 941** flu
74
* 941** flu
74
* 941** aids

T2
DOB Sex ZIP Disease
[70-80] * 9414* hypertension
[70-80] * 9414* gastritis
[70-80] * 9414* aids
[70-80] * 9414* gastritis

4-anonymized table at time t1

4-anonymized table at time t2

An adversary knows that Alice, born in 1974 and living in area 94142,
is in both releases
=⇒ Alice belongs to the first group in T1
=⇒ Alice belongs to the first group in T2
Alice suffers from aids (it is the only illness common to both groups)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

84/155

Multiple independent releases – Example (2)
T1
DOB Sex ZIP Disease
74
* 941** aids
74
* 941** flu
74
* 941** flu
74
* 941** aids
64
* 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table at time t1

T2
DOB Sex ZIP Disease
[70-80] * 9414* hypertension
[70-80] * 9414* gastritis
[70-80] * 9414* aids
[70-80] * 9414* gastritis
[60-70] * 9413* flu
[60-70] * 9413* aids
[60-70] * 9413* flu
[60-70] * 9413* gastritis
4-anonymized table at time t2

An adversary knows that Frank, born in 1964 and living in area 94132,
is the only patient in T1 but not in T2

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

85/155

Multiple independent releases – Example (2)
DOB Sex
M

T1
ZIP Disease

64
* 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table at time t1

DOB

Sex

T2
ZIP

Disease
hypertension

[60-70] * 9413* flu
[60-70] * 9413* aids
[60-70] * 9413* flu
[60-70] * 9413* gastritis
4-anonymized table at time t2

An adversary knows that Frank, born in 1964 and living in area 94132,
is the only patient in T1 but not in T2

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

85/155

Multiple independent releases – Example (2)
DOB Sex
M

T1
ZIP Disease

64
* 941** flu
64
* 941** short breath
64
* 941** flu
64
* 941** aids
4-anonymized table at time t1

DOB

Sex

T2
ZIP

Disease
hypertension

[60-70] * 9413* flu
[60-70] * 9413* aids
[60-70] * 9413* flu
[60-70] * 9413* gastritis
4-anonymized table at time t2

An adversary knows that Frank, born in 1964 and living in area 94132,
is the only patient in T1 but not in T2
=⇒ Frank suffers from short breath

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

85/155

Multiple releases
Multiple (i.e., longitudinal) releases cannot be independent
=⇒ need to ensure multiple releases are safe with respect to
intersection attacks

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

86/155

m-invariance [XT-07]
Addresses the problem of longitudinal release
A sequence T1 , . . . , Tn of released microdata tables satisfies
m-invariance iff
• each equivalence class includes at least m tuples
• no sensitive value appears more than once in each equivalence
class
• for each tuple t, the equivalence classes to which t belongs in the
sequence are characterized by the same set of sensitive values
=⇒ the correlation of the tuples in T1 , . . . , Tn does not permit a
malicious recipient to associate less than m different sensitive
values with each respondent
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

87/155

Extended scenarios – 1
k-anonymity, ℓ-diversity, and t-closeness are based on assumptions
that make them not always applicable in specific scenarios
• Multiple tuples per respondent
◦ (X,Y)-privacy [WF-06]
◦ km -anonymity [TMK-08]

• Release of multiple tables, characterized by (functional)
dependencies
◦ (X,Y)-privacy [WF-06]
◦ MultiR k-anonymity [NCN-07]

• Multiple quasi-identifiers
◦ butterfly [PTLX-09]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

88/155

Extended scenarios – 2
• Non-predefined quasi-identifiers
◦ km -anonymity [TMK-08]

• Release of data streams
◦ anonymize temporal data [WXWF-10]
◦ k-anonymous data streams [ZHPJTJ-09]

• Fine-grained privacy preferences
◦ (αi , βi )-closeness [FZ-08]
◦ personalized anonymity [XT-06]
◦ δ -presence [NAC-07]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

89/155

k-anonymity in various applications
In addition to classical microdata release problem, the concept of
k-anonymity and its extensions can be applied in different scenarios,
e.g.:
• social networks (e.g., [HMJTW-08])
• data mining (e.g., [CDFS-08, FWY-07, FWS-08])
• location data (e.g., [GL-08])
• ...

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

90/155

k-anonymity in social networks – 1
• Neighborhood attack =⇒ given a de-identified graph G′ of a social
network graph G, exploit knowledge about the neighbors of user u
to re-identify the vertex representing u

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

91/155

k-anonymity in social networks – 2
Idea: adapt the k-anonymity requirement to social networks [ZP-11]
• A vertex u is k-anonymous if there exist at least k − 1 other vertices
v1 , . . . , vk−1 such that the sub-graphs induced by the neighborhood
of u and the neighborhood of v1 , . . . , vk−1 are isomorphic
• G′ is k-anonymous if every vertex u in G′ is k-anonymous
◦ intuition: add fake edges to satisfy the requirement

• If G′ is k-anonymous, with the neighborhood background
knowledge, any vertex in G cannot be re-identified in G′ with
confidence larger than 1/k
• Goal: compute a k-anonymous version of a social network graph
minimizing the number of added edges

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

92/155

k-anonymous data mining
• Privacy preserving data mining techniques depend on the
definition of privacy capturing what information is sensitive in the
original data and should then be protected
• k-anonymous data mining aims at ensuring that the data mining
results do not violate the k-anonymity requirement over the
original data
• Threats to k-anonymity can arise from performing mining on a
collection of data maintained in a private table PT subject to
k-anonymity constraints. E.g.:
◦ association rule mining
◦ classification mining
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

93/155

Association rule mining
Marital_status
divorced
divorced
divorced
married
married
single

Sex

Hours

M
M
F
M
F
M

35
40
35
35
50
40

• {divorced} → {M} with support

19
66

#tuples (Hyp. values)
2
17
2
10
9
26

(0Y, 2N)
(16Y, 1N)
(0Y, 2N)
(8Y, 2N)
(2Y, 7N)
(6Y, 20N)

and confidence

19
21

If QI includes Marital_status and Sex =⇒
{divorced} → {M}:
◦ violates k-anonymity for any k > 19
◦ violates also k-anonymity for any k > 2 since it reflects the existence
of 2 divorced and female respondents

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

94/155

Classification mining – Decision trees
Marital_status
divorced
divorced
divorced
married
married
single

Sex

Hours

M
M
F
M
F
M

35
40
35
35
50
40

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

#tuples (Hyp. values)
2
17
2
10
9
26

(0Y, 2N)
(16Y, 1N)
(0Y, 2N)
(8Y, 2N)
(2Y, 7N)
(6Y, 20N)

95/155

Classification mining – Decision trees
Marital_status
divorced
divorced
divorced
married
married
single

Sex

Hours

M
M
F
M
F
M

35
40
35
35
50
40

#tuples (Hyp. values)
2
17
2
10
9
26

(0Y, 2N)
(16Y, 1N)
(0Y, 2N)
(8Y, 2N)
(2Y, 7N)
(6Y, 20N)

path ⟨F,35⟩ implies the existence
of 2 females working 35 hours

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

95/155

Classification mining – Decision trees
Marital_status
divorced
divorced
divorced
married
married
single

Sex

Hours

M
M
F
M
F
M

35
40
35
35
50
40

#tuples (Hyp. values)
2
17
2
10
9
26

(0Y, 2N)
(16Y, 1N)
(0Y, 2N)
(8Y, 2N)
(2Y, 7N)
(6Y, 20N)

path ⟨F,35⟩ implies the existence
of 2 females working 35 hours
paths ⟨F⟩ (#11) and ⟨F,50⟩
(#9) imply the existence of 2
females who do not work 50 hours
per week

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

95/155

Classification mining – Decision trees
Marital_status
divorced
divorced
divorced
married
married
single

Sex

Hours

M
M
F
M
F
M

35
40
35
35
50
40

#tuples (Hyp. values)
2
17
2
10
9
26

(0Y, 2N)
(16Y, 1N)
(0Y, 2N)
(8Y, 2N)
(2Y, 7N)
(6Y, 20N)

path ⟨F,35⟩ implies the existence
of 2 females working 35 hours
paths ⟨F⟩ (#11) and ⟨F,50⟩
(#9) imply the existence of 2
females who do not work 50 hours
per week
If QI includes Sex and Hours =⇒
k-anonym. is violated for any k > 2
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

95/155

Approaches for combining k-anonymity and data mining

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

96/155

k-anonymity in location-based services
Protect identity of people in locations
by considering always locations that
contain no less than k individuals:
=⇒ enlarge the area to include
at least other k-1 users
(k-anonymity)
protect the location of users (location privacy)
=⇒ obfuscate the area so to
decrease its precision or
confidence
protect the location path of users (trajectory privacy)
=⇒ block tracking by mixing
©Security, Privacy,
and Data Protection Laboratory (SPDP Lab)
trajectories

97/155

k-anonymity in location-based services
Protect identity of people in locations
by considering always locations that
contain no less than k individuals:
• enlarge the area to include
at least other k-1 users
(k-anonymity)
protect the location of users (location privacy)
=⇒ obfuscate the area so to
decrease its precision or
confidence
protect the location path of users (trajectory privacy)
=⇒ block tracking by mixing
©Security, Privacy,
and Data Protection Laboratory (SPDP Lab)
trajectories

97/155

k-anonymity in location-based services
Protect identity of people in locations
by considering always locations that
contain no less than k individuals:
• enlarge the area to include
at least other k-1 users
(k-anonymity)
protect the location of users (location privacy)
=⇒ obfuscate the area so to
decrease its precision or
confidence
protect the location path of users (trajectory privacy)
=⇒ block tracking by mixing
©Security, Privacy,
and Data Protection Laboratory (SPDP Lab)
trajectories

97/155

Privacy in location-based applications
Protect identity of people in locations
by considering always locations that
contain no less than k individuals:
• enlarge the area to include
at least other k-1 users
(k-anonymity)
• protect the location of users
(location privacy)
=⇒ obfuscate the area so to
decrease its precision or
confidence
protect the location path of users (trajectory privacy)
=⇒ block tracking by mixing
©Security, Privacy,
and Data Protection Laboratory (SPDP Lab)
trajectories

98/155

Privacy in location-based applications
Protect identity of people in locations
by considering always locations that
contain no less than k individuals:
• enlarge the area to include
at least other k-1 users
(k-anonymity)
• protect the location of users
(location privacy)
=⇒ obfuscate the area so to
decrease its precision or
confidence
protect the location path of users (trajectory privacy)
=⇒ block tracking by mixing
©Security, Privacy,
and Data Protection Laboratory (SPDP Lab)
trajectories

98/155

Privacy in location-based applications
Protect identity of people in locations
by considering always locations that
contain no less than k individuals:
• enlarge the area to include
at least other k-1 users
(k-anonymity)
• protect the location of users
(location privacy)
=⇒ obfuscate the area so to
decrease its precision or
confidence
• protect the location path of users
(trajectory privacy)
=⇒ block tracking by mixing/
modifying trajectories
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

98/155

Privacy in location-based applications
Protect identity of people in locations
by considering always locations that
contain no less than k individuals:
• enlarge the area to include
at least other k-1 users
(k-anonymity)
• protect the location of users
(location privacy)
=⇒ obfuscate the area so to
decrease its precision or
confidence
• protect the location path of users
(trajectory privacy)
=⇒ block tracking by mixing/
modifying trajectories
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

98/155

Re-identification with any information
• Any information can be used to re-identify anonymous data
=⇒ ensuring proper privacy protection is a difficult task since the
amount and variety of data collected about individuals is
increased
• Two examples:
◦ AOL
◦ Netflix

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

99/155

AOL data release – 1
• In 2006, to embrace the vision of an open research community,
AOL (America OnLine) publicly posted to a website 20 million
search queries for 650,000 users of AOL’s search engine
summarizing three months of activity
• AOL suppressed any obviously identifying information such as
AOL username and IP address
• AOL replaced these identifiers with unique identification numbers
(this made searches by the same user linkable)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

100/155

AOL data release – 2
• User 4417749:
◦ “numb fingers”, “60 single men”, “dog that urinates on everything”
◦ “hand tremors”, “nicotine effects on the body”, “dry mouth”, and
“bipolar”
◦ “Arnold” (several people with this last name)
◦ “landscapers in Lilburn, Ga”, “homes sold in shadow lake
subdivision Gwinnett county, Georgia”

=⇒ Thelma Arnold, a 62-year-old widow who lives in Lilburn, Ga
• She was re-identified by two New York Times reporters
• She explained in an interview that she has three dogs and that
she searched for medical conditions of some friends
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

101/155

AOL data release – 3

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

102/155

AOL data release – 4
What about user 17556639?
• how to kill your wife

• steak and cheese

• how to kill your wife

• photo of death

• wife killer

• photo of death

• how to kill a wife

• death

• poop

• dead people photos

• dead people

• photo of dead people

• pictures of dead people

• www.murderdpeople.com

• killed people

• decapatated photos

• dead pictures

• decapatated photos

• dead pictures

• car crashes3

• dead pictures

• car crashes3

• murder photo

• car crash photo

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

103/155

AOL data release – 5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

104/155

Netflix prize data study – 1
• In 2006, Netflix (the world largest online movie rental service),
launched the "Netflix Prize" (a challenge that lasted almost three
years)
◦ Prize of USD 1 million to be awarded to those who could provide a
movie recommendation algorithm that improved Netflix’s algorithm
by 10%

• Netflix provided 100 million records revealing how nearly 500,000
of its users had rated movies from Oct.’98 to Dec.’05
• In each record Netflix disclosed the movie rated, the rating
assigned (1 to 5), and the date of the rating

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

105/155

Netflix prize data study – 2
• Only a sample (one tenth) of the database was released
• Some ratings were perturbed (but not much, not to alter statistics)
• Identifying information (e.g., usernames) was removed, but a
unique user identifier was assigned to preserve rating-to-rating
continuity
• Release was not k-anonymous for any k > 1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

106/155

Netflix prize data study – 3
Very little auxiliary information is needed to de-anonymize an average
subscriber record:
• with 6 movie ratings and dates (± 2 weeks), 99% of records
uniquely identified
• with 2 movie ratings and dates (± 3 days), 68% of records
uniquely identified
• 84% of subscribers in the dataset uniquely identified by knowing 6
obscure (outside the top 500) movies
Auxiliary information can be obtained from other sources (e.g., user
ratings from IMDb users)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

107/155

Another example of privacy issue
Movies may reveal your political orientation, religious views, or sexual
orientations (Netflix was sued by a lesbian for breaching her privacy)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

108/155

JetBlue
• In 2003, JetBlue Airways Corporation
gave the travel records of five million
customers to Torch Concepts (a
private DoD contractor) for an
antiterrorism study to track high-risk
passengers or suspected terrorists
• Torch Concepts purchased additional
customer demographic information
(e.g., SSN) about these passengers
from Axciom, one of the largest data
aggregation companies in the U.S.
• The information from JetBlue and
Axciom was then used by Torch
Concepts to develop passenger
profiles
• Claims of violation of JetBlue Privacy
Policy

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

109/155

Fitness app
An interactive map shows the whereabouts of people who use fitness
devices such as Fitbit also reveals highly sensitive information about
the locations and activities of soldiers at U.S. military bases

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

110/155

Syntactic vs semantic privacy definitions
• Syntactic privacy definitions capture the protection degree enjoyed
by data respondents with a numerical value
E.g., each release of data must be indistinguishably related to no
less than a certain number of individuals in the population
• Semantic privacy definitions are based on the satisfaction of a
semantic privacy requirement by the mechanism chosen for
releasing the data
E.g., the result of an analysis carried out on a released dataset
must be insensitive to the insertion or deletion of a tuple in the
dataset

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

111/155

Differential privacy [D-06] – 1
• Differential privacy aims at preventing adversaries from being
capable to detect the presence or absence of a given individual in
a dataset. E.g.,:
◦ the count of individuals with cancer from a medical database is
produced with a release mechanism that when executed on
datasets differing on one individual probably returns the same result

• It defines a property on the data release mechanism

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

112/155

Differential privacy [D-06] – 2
Informally:
• Differential privacy requires the probability distribution on the
published results of an analysis to be “essentially the same”
independent of whether an individual is represented or not in the
dataset
Formally:
• A randomized function K gives ε-differential privacy if for all data
sets D and D′ differing on at most one row, and all S ⊆ Range(K),
Pr[K(D) ∈ S] ≤ eε × Pr[K(D′ ) ∈ S]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

113/155

Differential privacy [D-06] – 3
• Applicable to two scenarios
◦ interactive scenario: run-time evaluation of queries
◦ non-interactive scenario: release of pre-computed macrodata
tables

• It is typically enforced by adding random noise
=⇒ data truthfulness is not preserved
• ε-differentially private mechanisms compose automatically

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

114/155

Differential privacy variations and applications
• Variations of differential privacy to reduce the amount of noise in
data/query result:
◦ (ε, δ )-differential privacy [DS-09]: the ε bound on query answer
probabilities may be violated with small probability (controlled by δ )
◦ adversaries with polynomial time computational bounds
(e.g., [MPRV-09])
◦ use of wavelet transforms for improving data utility [XWG-11]
◦ ...

• Similarly to k-anonymity, differentially private mechanisms have
been developed for different domains:
◦ social networks (e.g., [HLMJ-09, MW-09, RHMS-09])
◦ data mining (e.g., [CMFDX-11, DWHL-11, MCFY-11])
◦ location data (e.g., [HR-11])
◦ ...

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

115/155

Is differential privacy enough?
• Limiting the inference about the presence of a tuple is different
from limiting the inference about the participation of the individual
in the data generating process [KM-11, KM-12]
◦ Bob’s participation in a social network can cause links to form
between Bob’s friends (Bob’s participation affects more than just
the tuple marked “Bob”)

• Differential privacy composes well with itself but not necessarily
with other privacy definitions or data release mechanisms (which
represent background knowledge that can cause privacy
breaches)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

116/155

k-anonymity vs differential privacy
Each has its strengths and weaknesses, e.g.,
k-anonymity:
+ nice capturing of real-world requirement
− not complete protection
Differential privacy:
+ better protection guarantees
− not easy to understand/enforce, not guaranteeing complete
protection either
Still work to be done on both fronts

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

117/155

Some Examples of Other Privacy Issues

Sensitive value distributions

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

119/155

Sensitive value distributions
• Individual tuples are not sensitive
• A collection of tuples might leak sensitive information not explicitly
reported (e.g., due to peculiar value distributions)
E XAMPLE : soldiers’ medical records
• Individual records are not sensitive
• Age distribution of soldiers in a location =⇒ type of location
◦ young soldiers: training campus
◦ old officials: headquarter

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

120/155

Sensitive value distributions

trusted environment

X
x1
x2
x2
.
.
.

NS
Y
y1
y2
y1

external world

...
...
...
...

.
.
.

.

Y
y1
y2
.
.
.

.

.

S

s(y)

s(y1 )
s(y2 )
.
.
.

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

121/155

Sensitive value distributions

trusted environment

X
x1
x2
x2
.
.
.

NS
Y
y1
y2
y1

external world

...
...
...
...

.
.
.

.

Y
y1
y2
.
.
.

.

.

S

s(y)

s(y1 )
s(y2 )
.
.
.

observer

public
statistics

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

121/155

Sensitive value distributions

trusted environment

external world
x1
x2

data
releases

y2

x2
x1

y1

.
.
.

NS
Y
y1
y2
y1

...
...
...
...

.
.
.

.

Y
y1
y2
.
.
.

.

x3

...

y1

...

...
x2

X
x1
x2
x2

y1
...

y2

y2

...

...

.

S

s(y)

s(y1 )
s(y2 )
.
.
.

observer

public
statistics

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

121/155

Sensitive value distributions

trusted environment

external world
x1
x2

data
releases

y2

x2
x1

y1

.
.
.

NS
Y
y1
y2
y1

...
...
...
...

.
.
.

.

Y
y1
y2
.
.
.

.

x3

...

y1

...

...
x2

X
x1
x2
x2

y1
...

y2

y2

...

...

.

S

s(y)

s(y1 )
s(y2 )
.
.
.

observed
statistics

observer

public
statistics

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

121/155

Sensitive value distributions

trusted environment

external world
x1
x2

data
releases

y2

x2
x1

y1

.
.
.

NS
Y
y1
y2
y1

...
...
...
...

.
.
.

.

Y
y1
y2
.
.
.

.

x3

• Age distribution
of soldiers in a
location =⇒ type
of location

...

y1

...

...
x2

X
x1
x2
x2

y1
...

y2

y2

...

...

.

S

s(y)
s(y1 )
s(y2 )
.
.
.

observed
statistics

public
statistics

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

compare

observer

◦ young
soldiers:
training
campus
◦ old officials:
headquarter

121/155

Inference channel - Example
Attributes:
R= {Name, Age, Location}
Inference channel:
Age⇝Location

Age
<18
18-19
20-24
25-29
30-34
35-39
40-44
45-49
50-54
≥55
Total

L1

L2

72
151
539
452
335
321
128
20
9
2
2029

26
53
147
114
213
238
219
205
71
13
1299

Number of tuples
L3
L4
38
82
449
370
234
277
122
50
28
2
1652

47
140
505
418
318
332
162
49
34
2
2007

L5

Total

73
223
736
613
501
538
220
76
31
2
3013

256
649
2376
1967
1601
1706
851
400
173
21
10000

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

122/155

Inference channel - Example
Baseline distribution P(Age)
0.3

Attributes:
R= {Name, Age, Location}

P(Age)

0.25
0.2
0.15

Inference channel:
Age⇝Location

0.1
0.05
0

5
>5
4
-5

9
-4

4
-4

50

9
-3

45

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

40

256
649
2376
1967
1601
1706
851
400
173
21
10000

4
-3

Total

73
223
736
613
501
538
220
76
31
2
3013

35

L5

9
-2

47
140
505
418
318
332
162
49
34
2
2007

30

38
82
449
370
234
277
122
50
28
2
1652

4
-2

26
53
147
114
213
238
219
205
71
13
1299

25

72
151
539
452
335
321
128
20
9
2
2029

Number of tuples
L3
L4

9
-1

L2

20

<18
18-19
20-24
25-29
30-34
35-39
40-44
45-49
50-54
≥55
Total

L1

18

8
<1

Age

122/155

Inference channel - Example
Baseline distribution P(Age)
0.3

Attributes:
R= {Name, Age, Location}

P(Age)

0.25
0.2
0.15

Inference channel:
Age⇝Location

0.1
0.05
0

5
>5
4
-5

9
-4

50

4
-4

45

9
-3

40

35

4
-3

30

9
-2

4
-2

25

P(Age|L1)

0.25
0.2
0.15
0.1
0.05
0

5

4

9

-5

>5

4

-4

50

9

-4

45

4

9

-3

40

35

4

-3

30

9

-2

-2

25

8

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

256
649
2376
1967
1601
1706
851
400
173
21
10000

-1

73
223
736
613
501
538
220
76
31
2
3013

0.3

20

47
140
505
418
318
332
162
49
34
2
2007

P(Age|L1 )

Total

18

38
82
449
370
234
277
122
50
28
2
1652

L5

20

26
53
147
114
213
238
219
205
71
13
1299

Number of tuples
L3
L4

<1

72
151
539
452
335
321
128
20
9
2
2029

L2

9
-1

<18
18-19
20-24
25-29
30-34
35-39
40-44
45-49
50-54
≥55
Total

L1

18

8
<1

Age

122/155

Inference channel - Example
Baseline distribution P(Age)
0.3

Attributes:
R= {Name, Age, Location}

P(Age)

0.25
0.2
0.15

Inference channel:
Age⇝Location

0.1
0.05
0

5
>5
4
-5

9
-4

50

4
-4

45

9
-3

40

35

4
-3

30

9
-2

4
-2

25

P(Age|L2)

0.25
0.2
0.15
0.1
0.05
0

5

4

9

-5

>5

4

-4

50

9

-4

45

4

9

-3

40

35

4

-3

30

9

-2

-2

25

8

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

256
649
2376
1967
1601
1706
851
400
173
21
10000

-1

73
223
736
613
501
538
220
76
31
2
3013

0.3

20

47
140
505
418
318
332
162
49
34
2
2007

P(Age|L2 )

Total

18

38
82
449
370
234
277
122
50
28
2
1652

L5

20

26
53
147
114
213
238
219
205
71
13
1299

Number of tuples
L3
L4

<1

72
151
539
452
335
321
128
20
9
2
2029

L2

9
-1

<18
18-19
20-24
25-29
30-34
35-39
40-44
45-49
50-54
≥55
Total

L1

18

8
<1

Age

122/155

Counteracting inference channels – 1
Need to characterize:
• What is the sensitive information
◦ peculiar value distribution identifying an outlier
◦ information-theoretical distance measures

• When to enforce the exposure control to avoid early false positives
◦ observable exposure approximates the real one =⇒ exposure
accuracy
◦ number of released tuples reaches a threshold =⇒ number of
releases

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

123/155

Counteracting inference channels – 2
• How to assess the exposure of released data
◦ a priori computation of the maximum amount of tuples w.r.t. the
baseline =⇒ number of releases for different attribute values
◦ evaluation of exposure metrics over the requested tuples
P(Age|L2 )

Baseline Distribution
0.3

Fitting

0.3

P(Age)

0.25

250

P(Age|L2)

0.25

0.2

0.2

0.15

0.15

Affordable Tuples
Exposed Tuples

200

150

100

50

0

5

>5

4

9

-5

4

-4

50

9

-4

45

4

9

-3

40

35

4

-3

-2

30

4

9

9

-2

25

8

-1

20

18

<1

5

>5

4

-5

50

9

-4

-4

45

4

-3

40

9

-3

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

35

4

-2

30

9

-2

25

20

8

4

-1

18

<1

5

9

-5

>5

4

9

-4

50

45

4

-4

40

9

-3

-3

35

4

-2

30

9

-2

8

-1

25

0

20

0

18

0.1
0.05

<1

0.1
0.05

124/155

Privacy and genomic data

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

125/155

Privacy and genomic data
Genomic information is an opportunity for medicine but there are
several privacy issues to be addressed
E.g., human genome:
• identifies its owner
• contains information about ethnic heritage, predisposition to
several diseases, and other phenotypic traits
• discloses information about the relatives and descendants of the
genome’s owner

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

126/155

Individuals’ re-identification – 1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

127/155

Individuals’ re-identification – 2
The 1000 Genomes Project: international project (2008) to establish a
catalogue of human genetic variation
• Five men involved in both the 1000 Genomes Project and a project
that studied Mormon families from Utah have been re-identified
◦ their identities were determined
◦ identities of their male and female relatives were also discovered

• Cross-reference analysis by the Whitehead Institute for
Biomedical Research in Cambridge (MA):
1. extract the haplotypes of short tandem repeats on the donor’s
Y chromosome (only for males)
2. enter the haplotypes into genealogical databases to find possible
surnames of the donor
3. enter the surnames into demographic databases
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

128/155

Sensitive inference from data mining

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

129/155

The Target case – 1
• Target is the second-largest discount retailer in the U.S.
• Target assigns every customer a Guest ID number:
◦ tied to credit card, name, email address, . . .
◦ stores history of bought goods and other (bought) information
◦ mining on these data for targeted advertising

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

130/155

The Target case – 2

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

131/155

The Target case – 3
• Analysts at Target identified ∼ 25 products that assign each
shopper a pregnancy prediction score
◦ e.g., woman, 23 y.o., buying in March cocoa-butter lotion, a purse
large enough to double as a diaper bag, zinc and magnesium
supplements and a bright blue rug =⇒ 87% due late August
◦ due time in a small window to send coupons timed to very specific
stages of a pregnancy

• Mining data reveals customers’ major life events (e.g., graduating
from college or getting a new job or moving to a new town)
◦ shopping habits became flexible, predictable, and potential gold
mines for retailers
◦ between 2002 (starting of similar campaigns) and 2010 Target’s
revenues grew from $44B to $67B
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

132/155

Social media

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

133/155

Profiling in social media
Our social media activities and likes may reveal sensitive information

[M. Kosinski, D. Stillwell, T. Graepel, “Digital records of behavior expose personal traits,” PNAS, Apr 2013, 110 (15) 5802-5805]
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

134/155

... With the users’ help

“Can’t I just email you a link to my blog, Miss?”

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

135/155

Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

136/155

Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

136/155

Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

136/155

Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

136/155

Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

136/155

Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

136/155

Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

136/155

Friends on Facebook? – 1
• In 2011: experiment to study how friendships are created on
Facebook
• Implementation of a socialbot
◦ software agent simulating human behaviors
◦ impersonating a non-existing user

• The socialbot sent friendship requests to unknown users
• Two-step process: no friends in common, and friends of friends

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

137/155

Friends on Facebook? – 2
• Accepted requests:
◦ 2 out of 10 if no friends in
common
◦ 6 out of 10 if friends in
common

• Three weeks activity, 102 bots:
◦ 3,000 friends
◦ 46,500 e-mail addresses
◦ 14,500 physical addresses

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

138/155

Friends on Facebook? – 2
• Accepted requests:
◦ 2 out of 10 if no friends in
common
◦ 6 out of 10 if friends in
common

• Three weeks activity, 102 bots:
◦ 3,000 friends
◦ 46,500 e-mail addresses
◦ 14,500 physical addresses

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

138/155

Facebook: information on you

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

139/155

Facebook: information on you

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

139/155

Facebook: information on you

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

139/155

. . . And it’s not only Facebook

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

140/155

. . . And data can be shared

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

141/155

Cambridge Analytica scandal – 1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

142/155

Cambridge Analytica scandal – 2
• Personality quiz app
◦ installed by 330,000 Facebook users who gave permission for
accessing their data. . .
◦ . . . but the app was also collecting data of those users’ friends

• Data from 87 million Facebook users retrieved by the app
◦ data shared with Cambridge Analytica
◦ users profiled through their data

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

143/155

User profiling - Facebook/Cambridge Analytica
OCEAN model
• Openness
do you enjoy new experiences?
• Conscientiousness
do you prefer plans and order?
• Extraversion
how social you are?
• Agreeableness
do you value others’ needs
and society?
• Neuroticism
how much do you tend to worry?
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

144/155

User profiling - Facebook/Cambridge Analytica
OCEAN model
• Openness
do you enjoy new experiences?
• Conscientiousness
do you prefer plans and order?
• Extraversion
how social you are?
• Agreeableness
do you value others’ needs
and society?
• Neuroticism
how much do you tend to worry?
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

144/155

User profiling - Facebook/Cambridge Analytica
OCEAN model
• Openness
Message to push support for
do you enjoy new experiences? Second Amendment of US Constitution
• Conscientiousness
do you prefer plans and order?

Conscientious individual with
high neuroticism:

• Extraversion
how social you are?
• Agreeableness
do you value others’ needs
and society?
• Neuroticism
how much do you tend to worry?

“The second amendment isn’t just
a right. It’s an insurance policy.
Defend the righ to bear arms!”

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

144/155

User profiling - Facebook/Cambridge Analytica
OCEAN model
• Openness
Message to push support for
do you enjoy new experiences? Second Amendment of US Constitution
• Conscientiousness
do you prefer plans and order?

Close and agreeable individual:
individual:

• Extraversion
how social you are?
• Agreeableness
do you value others’ needs
and society?
• Neuroticism
how much do you tend to worry?

“From father to son,
since the birth of our Nation.
Defend the second amendment.”

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

144/155

Online quizzes?

• What color are you?
• Which famous historical figure are you?
• Which famous painting are you?
• Who will be your Valentine’s Day date?
• ...
• What will you look like when old?
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

145/155

... Is it worth?

“It’s this new app – you put in your Social Security Number,
and it makes you look like a cat.”

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

146/155

Facebook facial recognition

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

147/155

Facebook facial recognition

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

147/155

Some open issues
• New privacy metrics
• New techniques to protect privacy
• External knowledge and adversarial attacks
• Evaluation of privacy vs utility

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

148/155

References – 1
• [AFKMPTZ-05a] G. Aggarwal, T. Feder, K. Kenthapadi, R. Motwani, R.
Panigrahy, D. Thomas, A. Zhu, “Anonymizing Tables,” in Proc. of ICDT,
Edinburgh, Scotland, January 2005.
• [AFKMPTZ-05b] G. Aggarwal, T. Feder, K. Kenthapadi, R. Motwani, R.
Panigrahy, D. Thomas, A. Zhu, “Approximation Algorithms for k-Anonymity,”
Journal of Privacy Technology, paper number 20051120001.
• [ALP-12] C.A. Ardagna, G. Livraga, P. Samarati, “Protecting Privacy of User
Information in Continuous Location-Based Services,” in Proc. of CSE, Paphos,
Cyprus, December 2012.
• [AW-89] N.R. Adam, J.C. Wortmann, “Security-control Methods for Statistical
Databases: A Comparative Study,” in ACM Computing Survey, vol. 21, no. 4,
December 1989.
• [BA-05] R.J. Bayardo, R. Agrawal, “Data Privacy through Optimal
k-anonymization,” in Proc. of ICDE, Tokyo, Japan, April 2005.
• [BDFLSS-12] M. Bezzi, S. De Capitani di Vimercati, S. Foresti, G. Livraga, P.
Samarati, R. Sassi, “Modeling and Preventing Inferences from Sensitive Value
Distributions in Data Release,” in JCS, vol. 2, no. 4, 2012.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

149/155

References – 2
• [BDLS-10] M. Bezzi, S. De Capitani di Vimercati, G. Livraga, P. Samarati,
“Protecting Privacy of Sensitive Value Distributions in Data Release” in Proc. of
STM, Athens, Greece, September 2010.
• [CDFS-07a] V. Ciriani, S. De Capitani di Vimercati, S. Foresti, P. Samarati,
“k-Anonymity,” in Secure Data Management in Decentralized Systems, T. Yu and
S. Jajodia (eds), Springer-Verlag, 2007.
• [CDFS-07b] V. Ciriani, S. De Capitani di Vimercati, S. Foresti, P. Samarati,
“Microdata Protection,” in Secure Data Management in Decentralized Systems,
T. Yu, and S. Jajodia (eds.), Springer, 2007.
• [CDFS-08] V. Ciriani, S. De Capitani di Vimercati, S. Foresti, P. Samarati,
“k-Anonymous Data Mining: A Survey,” in Privacy-Preserving Data Mining:
Models and Algorithms, C.C. Aggarwal, P.S. Yu (eds.), Springer-Verlag, 2008.
• [CMFDX-11] R. Chen, N. Mohammed, B.C.M. Fung, B.C. Desai, L. Xiong,
“Publishing Set-Valued Data via Differential Privacy,” in PVLDB, vol. 4, no. 11,
September 2011.
• [CLR-07] B-C. Chen, K. LeFevre, R. Ramakrishnan, “Privacy Skyline: Privacy
with Multidimensional Adversarial Knowledge,” in Proc. of VLDB, Vienna,
Austria, September 2007.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

150/155

References – 3
• [D-06] C. Dwork, “Differential Privacy,” in Proc. of ICALP, Venice, Italy, July 2006.
• [DFLS-11] S. De Capitani di Vimercati, S. Foresti, G. Livraga, P. Samarati,
“Protecting Privacy in Data Release,” in Foundations of Security Analysis and
Design VI, A. Aldini, R. Gorrieri (eds.), Springer, 2011.
• [DS-09] C. Dwork, A. Smith, “Differential Privacy for Statistics: What We Know
and What We Want to Learn,” in Journal of Privacy and Confidentiality, vol. 1,
no. 2, 2009.
• [DWHL-11] B. Ding, M. Winslett, J. Han, Z. Li, “Differentially Private Data Cubes:
Optimizing Noise Sources and Consistency,” in Proc. of SIGMOD, Athens,
Greece, June 2011.
• [FWY-05] B. Fung, K. Wang, P. Yu, “Top-down Specialization for Information and
Privacy Preservation,” in Proc. of ICDE, Tokyo, Japan, April 2005.
• [FWY-07] B.C.M. Fung, K. Wang, P.S. Yu, “Anonymizing Classification Data for
Privacy Preservation,” in IEEE TKDE, vol. 19, no. 5, May 2007.
• [FWS-08] A. Friedman, R. Wolff, A. Schuster, “Providing k-anonymity in Data
Mining,” in the VLDB Journal, vol. 17, no. 4, July 2008.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

151/155

References – 4
• [FZ-08] K.B. Frikken, Y. Zhang, “Yet Another Privacy Metric for Publishing
Micro-Data,” In Proc. of WPES, Alexandria, VA, USA, October 2008.
• [GL-08] B. Gedik, L. Liu, “Protecting Location Privacy with Personalized
k-anonymity: Architecture and Algorithms,” in IEEE TMC, vol. 7, no. 1, January
2008.
• [GMT-08] A. Gionis, A. Mazza and T. Tassa, “k-Anonymization Revisited,” in
Proc. of ICDE, Cancun, Mexico, April 2008.
• [HLMJ-09] M. Hay, C. Li, G. Miklau, D. Jensen, “Accurate Estimation of the
Degree Distribution of Private Networks,” in Proc. of ICDM, Miami, FL, USA,
December 2009.
• [HMJTW-08] M. Hay, G. Miklau, D. Jensen, D. Towsley, P. Weis, “Resisting
Structural Re-Identification in Anonymized Social Networks,” in PVLDB, vol. 1,
no. 1, August 2008.
• [HR-11] S.-S. Ho, S. Ruan, “Differential Privacy for Location Pattern Mining,” in
Proc. of SPRINGL, Chicago, IL, USA, November 2011.
• [KM-11] D. Kifer, A. Machanavajjhala, “No Free Lunch in Data Privacy,” in Proc.
of SIGMOD, Athens, Greece, June 2011.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

152/155

References – 5
• [KM-12] D. Kifer, A. Machanavajjhala, “A Rigorous and Customizable Framework
for Privacy,” in Proc. of PODS, Scottsdale, AZ, USA, May 2012.
• [I-02] V. Iyengar, “Transforming Data to Satisfy Privacy Constraints,” in Proc. of
ACM SIGKDD, Edmonton, Alberta, Canada, June 2002.
• [LDR-05] K. LeFevre, D.J. DeWitt, R. Ramakrishnan, “Incognito: Efficient
Fulldomain k-Anonymity,” in Proc. of ACM SIGMOD , Baltimore, MD, USA, June
2005.
• [LLV-07] N. Li, T. Li, and S. Venkatasubramanian. “t-closeness: Privacy Beyond
k-Anonymity and ℓ-Diversity,” in Proc. of ICDE, Istanbul, Turkey, April 2007.
• [MCFY-11] N. Mohammed, R. Chen, B.C.M. Fung, P.S. Yu, “Differentially Private
Data Release for Data Mining,” in Proc. of KDD, San Diego, CA, USA, August
2011.
• [MGK-06] A. Machanavajjhala, J. Gehrke, D. Kifer “ℓ-Diversity: Privacy Beyond
k-Anonymity,” in Proc. of ICDE, Atlanta, GA, USA, April 2006.
• [MKMGH-07] D.J. Martin, D. Kifer, A. Machanavajjhala, J. Gehrke, J.Y. Halpern,
“Worst-Case Background Knowledge for Privacy-Preserving Data Publishing,” in
Proc. of ICDE, Istanbul, Turkey, April 2007.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

153/155

References – 6
• [MPRV-09] I. Mironov, O. Pandey, O. Reingold, S.P. Vadhan, “Computational
Differential Privacy.” in Proc. of CRYPTO, Santa Barbara, CA, USA, August
2009.
• [MW-04] A. Meyerson and R. Williams, “On the Complexity of Optimal
k-Anonymity,” in Proc. of PODS, Paris, France, June 2004.
• [MW-09] D.J. Mir, R.N. Wright, “A Differentially Private Graph Estimator,” in Proc.
of ICDMW, Miami, FL, USA, December 2009.
• [NAC-07] M.E. Nergiz, M. Atzori, C. Clifton, “Hiding the Presence of Individuals
from Shared Databases,” in Proc. of ACM SIGMOD , Beijing, China, 2007.
• [NCN-07] M. Nergiz, C. Clifton, A. Nergiz, “Multirelational k-anonymity,” in Proc.
of ICDE, Istanbul, Turkey April 2007.
• [PTLX-09] J. Pei, Y. Tao, J. Li, X. Xiao, “Privacy Preserving Publishing on Multiple
Quasi-Identifiers,” in Proc. of ICDE, Shanghai, China, April 2009.
• [S-01] P. Samarati, “Protecting Respondents’ Identities in Microdata Release,” in
IEEE TKDE, vol. 13, no. 6, November/December 2001.
• [TMK-08] M. Terrovitis, N. Mamoulis, P. Kalnis, “Privacy-Preserving
Anonymization of Set-Valued Data,” Proc. of the VLDB Endowment, vol. 1, no. 1,
August 2008.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

154/155

References – 7
• [WF-06] K. Wang, B. Fung, “Anonymizing Sequential Releases,” in Proc. of
KDD, Philadelphia, PA, USA, August 2006.
• [WXWF-10] K. Wang, Y. Xu, R. Wong, A. Fu, “Anonymizing Temporal Data,” in
Proc. of ICDM, Sydney, Australia, December 2010.
• [XT-06] X. Xiao, Y. Tao, “Personalized Privacy Preservation,” in Proc. of ACM
SIGMOD , Chicago, IL, USA, June 2006.
• [XT-07] X. Xiao, Y. Tao, “m-Invariance: Towards Privacy Preserving
Re-Publication of Dynamic Datasets,” in Proc. of ACM SIGMOD, Beijing, China,
June 2007.
• [XWG-11] X. Xiao, G. Wang, J. Gehrke, “Differential Privacy via Wavelet
Transforms,” in IEEE TKDE, vol. 23, no. 8, August 2011.
• [ZHPJTJ-09] B. Zhou, Y. Han, J. Pei, B. Jiang, Y. Tao, Y. Jia, “Continuous Privacy
Preserving Publishing of Data Streams,” in Proc. of EDBT, Saint Petersburg,
Russia, March 2009.
• [ZP-11] B. Zhou, J. Pei, “The k-anonymity and ℓ-diversity Approaches for Privacy
Preservation in Social Networks Against Neighborhood Attacks,” in KAIS, vol. 28,
no. 1, July 2011.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

155/155

