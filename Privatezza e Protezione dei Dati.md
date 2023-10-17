# Privacy and Data Protection in Emerging Scenarios
## Motivations:
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

## Outline
- Privacy in data publication $\to$ data release/dissemination;
- Privacy in data outsourcing $\to$ third parties store and manage data (towards cloud scenarios).

----------------------------------------------------------------

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

An example of a count table is a two-dimensional table showing the number of employees by department and annual income (in $K$ Euro).

![[CountTable.png]]

An example of a magnitude table is the average number of days spent in the hospital by respondents with a given disease.

![[MagnitudeTable.png]]

An example of a microdata table is the records about delinquent children in county Alfa.

![[MicrodataTable.png]]

----------------------------------------------------------------

### Information disclosure
Disclosure relates to attribution of sensitive information to a respondent (an individual or organization) There is disclosure when:
- a respondent is identified from released data (**identity disclosure**);
- sensitive information about a respondent is revealed through the released data (**attribute disclosure**);
- the released data make it possible to determine the value of some characteristic of a respondent even if no released record refers to the respondent (**inferential disclosure**).

#### Identity disclosure
It occurs if a third party can identify a respondent from the released data. Revealing that an individual is a respondent in a data collection may or may not violate confidentiality requirements.<br />
In macrodata, revealing identity is generally not a problem, unless the identification leads to divulging confidential information (attribute disclosure).
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
- statistical data are released for enabling users to infer and understand relationships between variables;
- inferences are designed to predict aggregate behavior, not individual attributes, and are then often poor predictors of individual data values.

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

![[AnonymityProblem.png]]

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
A microdata table often contains a subset of the whole population. This implies that the information of a specific respondent may not be included in the microdata table.<br /> Furthermore, the information specified in microdata tables released to the public is not always up-to-date (often at least one or two-year old). Therefore, the values of the attributes of the corresponding respondents may have been changed in the meanwhile. Also, the age of the external sources of information used for linking may be different from the age of the information contained in the microdata table.<br />
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
- quasi-identifier, a set of attributes that can be exploited for linking (whose release must be controlled).

The basic idea is to translate the $k$-anonymity requirement on the released data. Each release of data must be such that every combination of values of quasi-identifiers can be indistinctly matched to at least $k$ respondents.<br />
In the released table the respondents must be indistinguishable (within a given set) with respect to a set of attributes. $K$-anonymity requires that each quasi-identifier value appearing in the released table must have at least $k$ occurrences. This is a sufficient condition for the satisfaction of $k$-anonymity requirement

### Generalization and suppression
with **generalization**, the values of a given attribute are substituted by using more general values. Based on the definition of a generalization hierarchy, for example, consider the attribute ZIP code and suppose that a step in the corresponding generalization hierarchy consists in suppressing the least significant digit in the ZIP code.
With one generalization step, $20222$ and $20223$ become $2022*$ and $20238$ and $20239$ become $2023*$.<br />
With **suppression**, it is possible to protect sensitive information by removing it. The introduction of suppression can reduce the amount of generalization necessary to satisfy the $k$-anonymity constraint.

----------------------------------------------------------------

### Domain generalization hierarchy
A **generalization relationship** $\leq_{D}$ defines a mapping between
domain $D$ and its generalizations. Given two domains $D_i, D_j \in Dom$, $D_i \leq_{D} D_j$ states that the values in domain $D_j$ are generalizations of values in $D_i$. $\leq_{D}$ implies the existence, for each domain $D$, of a **domain generalization hierarchy** $DGH_D = (Dom, \leq_D )$:
- $\forall D_i, D_j, D_z \in Dom: D_i \leq_D D_j, D_i \leq_D D_z \to D_j \leq_D D_z \vee D_z \leq_D D_j$
- all maximal elements of $Dom$ are singleton.

Given a domain tuple $D_T = \langle D_1, . . . , D_n \rangle$ such that $D_i \in Dom, i = 1, . . . , n$, the domain generalization hierarchy of $D_T$ is $DGH_{DT} = DGH_{D1} \times . . . \times DGH_{Dn}$.

An example of a domain generalization hierarchy.

![[DomainGeneralizationHierarchy.png]]

----------------------------------------------------------------

### Value generalization hierarchy
A **value generalization relationship** $\leq_V$ associates with each value in domain $D_i$ a unique value in domain $D_j$, direct generalization of $D_i$. $\leq_V$ implies the existence, for each domain $D$, of a value generalization hierarchy $VGH_D$. $VGH_D$ is a tree where the leaves are the values in $D$ and the root (i.e., the most general value) is the value in the maximum element in $DGH_D$.

An example of value generalization hierarchy.


![[ValueGeneralizationHierarchy.png]]

----------------------------------------------------------------

### Generalized table with suppression
Let $T_i$ and $T_j$ be two tables defined on the same set of attributes. Table $T_j$ is said to be a generalization (with tuple suppression) of table $T_i$, denoted $T_i \preceq T_j$ , if:
1) $\vert T_j \vert \leq \vert T_i \vert$;
2) the domain $dom(A, T_j)$ of each attribute $A$ in $T_j$ is equal to, or a generalization of, the domain $dom(A, T_i)$ of attribute $A$ in $T_i$;
3) it is possible to define an injective function associating each tuple $t_j$ in $T_j$ with a tuple $t_i$ in $T_i$ , such that the value of each attribute in $t_j$ is equal to, or a generalization of, the value of the corresponding attribute in $t_i$.

An example of a generalized table with suppression.

![[GeneralizedTableSuppression.png]]

----------------------------------------------------------------

### $k$-minimal generalization with suppression
Now, it will be provided the definition of **Distance vector**. Let $T_i (A_1 , . . . , A_n)$ and $T_j (A_1 , . . . , A_n)$ be two tables such that $T_i \preceq T_j$. The distance vector of $T_j$ from $T_i$ is the vector $DV_{i,j} = [d_1 , . . . , d_n]$, where each $d_z, z = 1, . . . , n$, is the length of the unique path between $dom(A_z , T_i)$ and $dom(A_z, T_j)$ in the domain generalization hierarchy $DGH_{D_z}$.

![[DistanceVector.png]]

Let $T_i$ and $T_j$ be two tables such that $T_i \preceq T_j$ , and let $MaxSup$ be the specified threshold of acceptable suppression. $T_j$ is said to be a **$k$-minimal generalization** of table $T_i$ iff:
1) $T_j$ satisfies $k$-anonymity enforcing minimal required suppression, that is, $T_j$ satisfies $k$-anonymity and $\forall T_z : T_i \preceq T_z, DV_{i,z} = DV_{i,j}$, $T_z$ satisfies $k$-anonymity $\to \vert T_j \vert \geq \vert T_z \vert$;
2) $\vert T_i \vert − \vert T_j \vert \leq MaxSup$;
3) $\forall T_z : T_i \preceq T_z$ and $T_z$ satisfies conditions $1$ and $2$ $\to \neg (DV_{i,z} < DV_{i,j})$

Examples of $2$-minimal generalizations with $MaxSup = 2$.

![[Example2MinimalGeneralizations.png]]

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

![[ClassificationKAnonymity.png]]


An example of $2$-anonymized tables with regard to different models.

![[2Anonymized1.png]]

![[2Anonymized2.png]]

![[2Anonymized3.png]]

![[2Anonymized4.png]]

----------------------------------------------------------------

### Algorithms for computing a $k$-anonymous table
The problem of finding minimal $k$-anonymous tables, with attribute generalization and tuple suppression, is computationally hard. The majority of the exact algorithms proposed in literature have computational time exponential in the number of the attributes composing the quasi-identifier. When the number $\vert QI \vert$ of attributes in the quasi-identifier is small compared with the number $n$ of tuples in the private table PT, these exact algorithms with attribute generalization and tuple suppression are practical.<br />
Many exact algorithms for producing $k$-anonymous tables through attribute generalization and tuple suppression have been proposed.

----------------------------------------------------------------

## Algorithms for AG_TS and AG_
### Computing a $k$-minimal solution
Each path in $DGH_{DT}$ represents a generalization strategy for PT. We call **locally minimal generalization** the lowest node of each path satisfying $k$-anonymity. The properties exploited by the algorithm are:
1) each $k$-minimal generalization is locally minimal with respect to a path (but the converse is not true);
2) going up in the hierarchy the number of tuples that must be removed to guarantee $k$-anonymity decreases.

If there is no solution that guarantees $k$-anonymity suppressing
less than $MaxSup$ tuples at height $h$, there cannot exist a solution, with height lower than h that guarantees it.<br />
The algorithm adopts a binary search on the lattice of distance
vectors:
1) evaluate solutions at height $\lfloor h/2\rfloor$;
2) if there exists at least a solution satisfying $k$-anonymity
	1) then evaluates solutions at height $\lfloor h/4 \rfloor$;
	2) otherwise evaluates solutions at height $\lfloor 3h/4 \rfloor$.
3) until the algorithm reaches the lowest height for which there is a distance vector that satisfies $k$-anonymity.

To reduce the computational cost, it adopts a distance vector
matrix that avoids the explicit computation of each generalized
table.

An example for computing a $k$-minimal solution

slide 53/155

Suppose $k = 2$ and $MaxSup = 2$.
Compute first solutions at height $1$ : $GT_{[1,0]}$ and $GT_{[0,1]}$.

Slide 54/155

Satisfies $2$-anonymity (suppressing $t_1$ and $t_6$).

slide 54_2/ 155

Satisfies $2$-anonymity (suppressing $t_8$ and $t_9$)

----------------------------------------------------------------

### $k$-Optimize algorithm
Order attributes in QI and the values in their domains. Associate an integer index value with each domain value, following the defined order

slide 55/155

A generalization is the union of individual index values. The least value in an attribute domain is omitted. E.g., $\{6\}$ corresponds to:
- Race: $\{1\}$, that is: $\langle [\text{asian or black or white}]\rangle$;
- ZIP: $\{4, 6\}$, that is: $\langle[94138 \text{ or } 94139],[94141 \text{ or } 94142]\rangle$.

Order of values within domains has impact on generalization. $k$-Optimize builds a set enumeration tree over the set $I$ of indexes:

slide 56/155

The root node of the tree is the empty set. The children of $n$ are the sets obtained by appending a single element $i$ of $I$ to $n$, such that $\forall i' \in n, i > i'$. Each node has a cost that reflects the amount of generalization and suppression of the anonymization represented by the node. this implies that each tuple is associated with a cost that reflects the information loss associated with its generalization or suppression.<br />
$k$-Optimize visits the tree (e.g., using a depth-first search) for searching the anonymization with lowest cost. Since the number of nodes in the tree is $2^{\vert I \vert}$, the visit of the tree is not practical. This implies that a **pruning** strategy is fundamental to reduce computational cost. The node $n$ is pruned iff none of its descendants could be optimal. This determination can be made by computing a lower bound on the cost of the nodes in the subtree rooted at $n$. if the lower bound is greater than the current best cost, node $n$ is pruned.

----------------------------------------------------------------

### Incognito algorithm
$k$-anonymity with respect to a proper subset of $QI$ is a necessary (not sufficient) condition for $k$-anonymity with respect to $QI$.
- iteration $1$: check $k$-anonymity for each attribute in $QI$, discarding generalizations that do not satisfy $k$-anonymity;
- iteration $2$: combine the remaining generalizations in pairs and check $k$-anonymity for each couple obtained;
- ...
- iteration $i$: consider all the $i$-uples of attributes, obtained combining generalizations that satisfied $k$-anonymity at iteration $i − 1$. Discard non $k$ anonymous solutions;
- ...
- iteration $\vert QI \vert$ returns the final result.
Incognito adopts a bottom-up approach for the visit of $DGH_s$.

An example of the Incognito algorithm.

slide 59-60/155

----------------------------------------------------------------

### Heuristic algorithms
The exact algorithms have complexity exponential in the size of $QI$. Heuristic algorithms have been proposed:
- \[I-02\]: based on genetic algorithms, it solves the $k$-anonymity problem using an incomplete stochastic search method;
- \[MW-04\]: based on simulated annealing for finding locally minimal solutions, it requires high computational time and does not assure the quality of the solution;
- \[FWY-05\]: top-down heuristic to make a table to be released
$k$-anonymous; it starts from the most general solution, and iteratively specializes some values of the current solution until the k-anonymity requirement is violated

No bounds on efficiency and goodness of the solutions can be
given. Experimental results can be used to assess the quality of the solution retrieved.

----------------------------------------------------------------

## Algorithms for _CS_ and _CG_
### Mondrian multidimensional algorithm
Each attribute in $QI$ represents a dimension. Each tuple in PT represents a point in the space defined by $QI$. Tuples with the same $QI$ value are represented by giving a multiplicity value to points. The multi-dimensional space is partitioned by splitting dimensions such that each area contains at least k occurrences of point values. All the points in a region are generalized to a unique value. The corresponding tuples are substituted by the computed generalization.<br />
Mondrian algorithm is flexible and can operate:
- on a different number of attributes:
	- single-dimension;
	- multi-dimension.
- with different recoding (generalization) strategies:
	- global recoding;
	- local recoding.
- with different partitioning strategies:
	- strict (i.e., non-overlapping) partitioning;
	- relaxed (i.e., potentially overlapping) partitioning.
- using different metrics to determine how to split on each dimension.

An example of the Mondrian multidimensional algorithm.
We wished $k=3$

slide 65/155

----------------------------------------------------------------

### Approximation algorithms
Approximation algorithms for general and specific values of $k$ (e.g., $1.5$-approximation for $2$-anonymity, and $2$-approximation for $3$-anonymity).<br />
Approximation algorithm for _CS_:
- [MW-04]: $\mathcal{O}(k \log{k})$-approximation;
- [AFKMPTZ-05a]: with unbounded value of $k$, $\mathcal{O}(k)$-approximation solution.

Approximation algorithm for _CG_:
- [AFKMPTZ-05b]: with unbounded value of $k$, $\mathcal{O}(k)$-approximation solution.

----------------------------------------------------------------

### k-anonymity revisited
$k$-anonymity requirement: each release of data must be such that
every combination of values of quasi-identifiers can be indistinctly matched to at least $k$ respondents.<br />
When generalization is performed at attribute level (_AG_) this is equivalent to require each quasi-identifier $n$-uple to have at least $k$ occurrences.<br />
When generalization is performed at cell level (_CG_) the existence
of at least $k$ occurrences is a sufficient but not necessary condition; a less stricter requirement would suffice:
1) for each sequence of values $pt$ in $PT[QI]$ there are at least $k$ tuples in $GT[QI]$ that contain a sequence of values generalizing $pt$;
2) for each sequence of values $t$ in $GT[QI]$ there are at least $k$ tuples in $PT[QI]$ that contain a sequence of values for which $t$ is a generalization.

An example of $k$-anonymity revisited.

slide 68/155

----------------------------------------------------------------

## Attribute Disclosure
### $2$-anonymous table according to the _AG_ model
$k$-anonymity is vulnerable to some attacks:

slide 70/155

----------------------------------------------------------------

### Homogeneity of the sensitive attribute values
All tuples with a quasi-identifier value in a $k$-anonymous table may have the same sensitive attribute value:
- an adversary knows that Carol is a black female and that her data are in the microdata table;
- the adversary can infer that Carol suffers from short breath.

slide 71/155

----------------------------------------------------------------

### Background knowledge
Based on prior knowledge of some additional external information:
- an adversary knows that Hellen is a white female and she is in the microdata table;
- the adversary can infer that the disease of Hellen is either chest pain or short breath;
- the adversary knows that Hellen runs $2$ hours a day and therefore that Hellen cannot suffer from short breath;

$\to$ the adversary infers that Hellen’s disease is chest pain.

slide 72/155

----------------------------------------------------------------

### $\ell$-diversity
A $q$-block (i.e., set of tuples with the same value for $QI$) is $\ell$-diverse if it contains at least $\ell$ different “well-represented” values for the sensitive attribute. "Well-represented" has different definitions based on entropy or recursion (e.g., a q-block is $\ell$-diverse if removing a sensitive value it remains $(\ell-1)$-diverse).<br />
$\ell$-diversity means that an adversary needs to eliminate at least $\ell-1$ possible values to infer that a respondent has a given value.<br />
A table is $\ell$-diverse if all its $q$-blocks are $\ell$-diverse. This implies that the homogeneity attack is not possible anymore and, therefore, that the background knowledge attack becomes more difficult.<br />
$\ell$-diversity is monotonic with respect to the generalization hierarchies considered for $k$-anonymity purposes.<br />
Any algorithm for $k$-anonymity can be extended to enforce the
$\ell$-diverse property BUT $\ell$-diversity leaves space to attacks based on the distribution of values inside $q$-blocks (**skewness and similarity attacks**):

----------------------------------------------------------------

### Skewness attack
**Skewness attack** occurs when the distribution in a $q$-block is different than the distribution in the original population.<br />
Consider the following example:
$20\%$ of the population suffers from diabetes and $75\%$ of tuples in a $q$-block have diabetes. This implies that people in the $q$-block have higher probability of suffering from diabetes.

slide 75/155

----------------------------------------------------------------

### Similarity attack
Similarity attack happens when a $q$-block has different but
semantically similar values for the sensitive attribute.

slide 76/155

----------------------------------------------------------------

### Group closeness
A $q$-block respects **$t$-closeness** if the distance between the
distribution of the values of the sensitive attribute in the $q$-block
and in the considered population is lower than $t$. A table respects $t$-closeness if all its $q$-blocks respect $t$-closeness.<br />
$t$-closeness is **monotonic** with respect to the generalization
hierarchies considered for k-anonymity purposes. Any algorithm for $k$-anonymity can be extended to enforce the $t$-closeness property, which however might be difficult to achieve.

----------------------------------------------------------------

### External knowledge modeling
An observer may have external/background knowledge that can be exploited to infer information. Knowledge may be about:
- the target individual;
- others, that is, information about individuals other than the target;
- same-value families, that is, knowledge that a group (or family) of individuals have the same sensitive value (e.g., genomic information).

An example of external knowledge.

slides 79-80/155

An adversary knows that Harry, born in 64 and living in area $94139$, is in the table. This implies that Harry belongs to the second group and, therefore, that Harry has aids with confidence $\frac{1}{4}$.

slide 81/155

From another dataset, the adversary knows that George (who is in the table, is born in $'64$, and leaves in area $941**$) has flu. This implies that Harry has aids with confidence $\frac{1}{3}$.

slide 82/155

From personal knowledge, the adversary knows that Harry does not have short breath. Therefore, Harry has aids with confidence $\frac{1}{2}$.

----------------------------------------------------------------

### Multiple releases
Data may be subject to frequent changes and may need to be
published on regular basis. The multiple release of a microdata table may cause information leakage since a malicious recipient can correlate the released datasets.

An example of multiple independent releases.

slide 84/155

An adversary knows that Alice, born in $1974$ and living in area $94142$, is in both releases.

slide 84/155


This implies that Alice belongs to the first group in $T_1$ and, therefore, Alice belongs to the first group in $T_2$. Alice suffers from aids (it is the only illness common to both groups).

slide 85/155

An adversary knows that Frank, born in $1964$ and living in area $94132$, is the only patient in $T_1$ but not in $T_2$

slide 85/155

Therefore, Frank suffers from short breath.

Multiple (i.e., longitudinal) releases cannot be independent. This implies that there is the need to ensure multiple releases are safe with respect to intersection attacks.

----------------------------------------------------------------

### $m$-invariance
It addresses the problem of longitudinal release A sequence $T_1$ , . . . , T_n$ of released microdata tables satisfies $m$-invariance iff:
- each equivalence class includes at least $m$ tuples;
- no sensitive value appears more than once in each equivalence class;
- for each tuple $t$, the equivalence classes to which t belongs in the sequence are characterized by the same set of sensitive values.
Therefore, the correlation of the tuples in $T_1, . . . , T_n$ does not permit a malicious recipient to associate less than m different sensitive values with each respondent.

--------------------------------------------------------------


### Extended scenarios
$k$-anonymity, $\ell$-diversity, and $t$-closeness are based on assumptions that make them not always applicable in specific scenarios. When we have multiple tuples per respondent we can apply:
- $(X,Y)$-privacy;
- $k^m$-anonymity.

When we have the release of multiple tables, characterized by (functional) dependencies, we can apply:
- $(X,Y)$-privacy;
- MultiR $k$-anonymity.

When we have multiple quasi-identifiers, we can apply:
- butterfly.

When we have non-predefined quasi-identifiers, we can apply:
- $k^m$-anonymity.

When we have the release of data streams, we can apply:
- anonymize temporal data;
- $k$-anonymous data streams.

When we have fine-grained privacy preferences, we can apply:
- $(\alpha_i, \beta_i)$-closeness;
- personalized anonymity;
- $\delta$-presence.

----------------------------------------------------------------

### $k$-anonymity in various applications
In addition to classical microdata release problem, the concept of
$k$-anonymity and its extensions can be applied in different scenarios, e.g.:
- social networks;
- data mining;
- location data.

#### k-anonymity in social networks
**Neighborhood attack** $\to$ given a de-identified graph $G'$ of a social
network graph $G$, exploit knowledge about the neighbors of user $u$ to re-identify the vertex representing $u$

slide 91/155

Idea: adapt the $k$-anonymity requirement to social networks. A vertex $u$ is $k$-anonymous if there exist at least $k − 1$ other vertices
$v_1 , . . . , v_{k−1}$ such that the sub-graphs induced by the neighborhood of $u$ and the neighborhood of $v_1 , . . . , v_{k−1}$ are **isomorphic**. $G'$ is $k$-anonymous if every vertex $u$ in $G'$ is $k$-anonymous. Intuition: add fake edges to satisfy the requirement.

If $G'$ is $k$-anonymous, with the neighborhood background
knowledge, any vertex in $G$ cannot be re-identified in $G'$ with
confidence larger than $1/k$.

Goal: compute a $k$-anonymous version of a social network graph
minimizing the number of added edges.

----------------------------------------------------------------

#### $k$-anonymous data mining
Privacy preserving data mining techniques depend on the
definition of privacy capturing what information is sensitive in the
original data and should then be protected.<br />
$k$-anonymous data mining aims at ensuring that the data mining results do not violate the $k$-anonymity requirement over the original data.<br />
Threats to $k$-anonymity can arise from performing mining on a
collection of data maintained in a private table $PT$ subject to
$k$-anonymity constraints. E.g.:
- association rule mining;
- classification mining.

##### Association rule mining

slide 94/155

$\{$divorced$\} \to \{$M$\}$ with support $\frac{19}{66}$ and confidence $\frac{19}{21}$.<br />
If $QI$ includes _Marital_status_ and _Sex_, then $\{$divorced$\} \to \{$M$\}$:
- violates $k$-anonymity for any $k > 19$;
- violates also $k$-anonymity for any $k > 2$ since it reflects the existence of $2$ divorced and female respondents.

slide 95/155

Path $\langle F,35 \rangle$ implies the existence of $2$ females working $35$ hours.<br />
paths $\langle F \rangle$ $(\#11)$ and $\langle F,50 \rangle$ $(\#9)$ imply the existence of $2$ females who do not work $50$ hours per week.<br />
If $QI$ includes _Sex_ and _Hours_ $\to$ $k$-anonym. is violated for any $k > 2$. (????)

----------------------------------------------------------------

##### Approaches for combining k-anonymity and data mining

slide 96/155

----------------------------------------------------------------

#### k-anonymity in location-based services
Protect identity of people in locations by considering always locations that contain no less than $k$ individuals:
- enlarge the area to include at least other $k-1$ users ($k$ anonymity);
- protect the location of users (**location privacy**) $\to$ obfuscate the area so to decrease its precision or confidence;
- protect the location path of users (trajectory privacy) $\to$ block tracking by mixing trajectories.

slides 97-98/155

----------------------------------------------------------------

### Re-identification with any information
Any information can be used to re-identify anonymous data. Ensuring proper privacy protection is a difficult task since the amount and variety of data collected about individuals is increased. Two examples:
- AOL;
- Netflix.

#### AOL data release
In 2006, to embrace the vision of an open research community,
**AOL** (America OnLine) publicly posted to a website $20$ million
search queries for $650,000$ users of AOL’s search engine summarizing three months of activity. AOL suppressed any obviously identifying information such as AOL username and IP address. AOL replaced these identifiers with unique identification numbers (this made searches by the same user linkable).

User $4417749$:
- “numb fingers”, “$60$ single men”, “dog that urinates on everything”;
- “hand tremors”, “nicotine effects on the body”, “dry mouth”, and “bipolar”;
- “Arnold” (several people with this last name);
- “landscapers in Lilburn, Ga”, “homes sold in shadow lake subdivision Gwinnett county, Georgia”.

$\to$ Thelma Arnold, a $62$-year-old widow who lives in Lilburn, Ga. She was re-identified by two New York Times reporters. She explained in an interview that she has three dogs and that she searched for medical conditions of some friends.

slide 102/155


What about user $17556639$?
• how to kill your wife;
• steak and cheese;
• how to kill your wife;
• photo of death;
• wife killer;
• photo of death;
• how to kill a wife;
• death;
• poop;
• dead people photos;
• dead people;
• photo of dead people;
• pictures of dead people;
• www.murderdpeople.com;
• killed people;
• decapatated photos;
• dead pictures;
• decapatated photos;
• dead pictures;
• car crashes3;
• dead pictures;
• car crashes3;
• murder photo;
• car crash photo;

slide 104/155

----------------------------------------------------------------

#### Netflix prize data study
In $2006$, Netflix (the world largest online movie rental service),
launched the "Netflix Prize" (a challenge that lasted almost three
years). There was a prize of USD $1$ million to be awarded to those who could provide a movie recommendation algorithm that improved Netflix’s algorithm by $10\%$. Netflix provided $100$ million records revealing how nearly $500,000$ of its users had rated movies from Oct.$’98$ to Dec.$’05$. In each record Netflix disclosed the movie rated, the rating assigned ($1$ to $5$), and the date of the rating.<br />
Only a sample (one tenth) of the database was released. Some ratings were perturbed (but not much, not to alter statistics). Identifying information (e.g., usernames) was removed, but a unique user identifier was assigned to preserve rating-to-rating continuity. Release was not $k$-anonymous for any $k > 1$.<br />
Very little auxiliary information is needed to de-anonymize an average subscriber record:
- with $6$ movie ratings and dates ($\pm 2$ weeks), $99\%$ of records uniquely identified;
- with $2$ movie ratings and dates ($\pm 3$ days), $68\%$ of records uniquely identified;
- $84\%$ of subscribers in the dataset uniquely identified by knowing $6$ obscure (outside the top $500$) movies.
Auxiliary information can be obtained from other sources (e.g., user ratings from IMDb users).

----------------------------------------------------------------

#### Another example of privacy issue
Movies may reveal your political orientation, religious views, or sexual orientations (Netflix was sued by a lesbian for breaching her privacy).

slide 108/155

----------------------------------------------------------------

#### JetBlue
In $2003$, JetBlue Airways Corporation gave the travel records of five million customers to Torch Concepts (a private DoD contractor) for an antiterrorism study to track high-risk passengers or suspected terrorists. Torch Concepts purchased additional customer demographic information (e.g., SSN) about these passengers from Axciom, one of the largest data aggregation companies in the U.S. The information from JetBlue and Axciom was then used by Torch Concepts to develop passenger profiles. Claims of violation of JetBlue Privacy Policy.

slide 109/155

----------------------------------------------------------------

#### Fitness app
An interactive map shows the whereabouts of people who use fitness devices such as Fitbit also reveals highly sensitive information about the locations and activities of soldiers at U.S. military bases.

slide 110/155

----------------------------------------------------------------

### Syntactic vs semantic privacy definitions
Syntactic privacy definitions capture the protection degree enjoyed by data respondents with a numerical value. E.g., each release of data must be indistinguishably related to no less than a certain number of individuals in the population. Semantic privacy definitions are based on the satisfaction of a semantic privacy requirement by the mechanism chosen for releasing the data. E.g., the result of an analysis carried out on a released dataset must be insensitive to the insertion or deletion of a tuple in the dataset.

Differential privacy
• Differential privacy aims at preventing adversaries from being
capable to detect the presence or absence of a given individual in
a dataset. E.g.,:
◦ the count of individuals with cancer from a medical database is
produced with a release mechanism that when executed on
datasets differing on one individual probably returns the same result

• It defines a property on the data release mechanism

Informally:
• Differential privacy requires the probability distribution on the
published results of an analysis to be “essentially the same”
independent of whether an individual is represented or not in the
dataset
Formally:
• A randomized function K gives ε-differential privacy if for all data
sets D and D′ differing on at most one row, and all S ⊆ Range(K),
Pr[K(D) ∈ S] ≤ eε × Pr[K(D′ ) ∈ S]

• Applicable to two scenarios
◦ interactive scenario: run-time evaluation of queries
◦ non-interactive scenario: release of pre-computed macrodata
tables

• It is typically enforced by adding random noise
=⇒ data truthfulness is not preserved
• ε-differentially private mechanisms compose automatically


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


Some Examples of Other Privacy Issues

Sensitive value distributions


Sensitive value distributions
• Individual tuples are not sensitive
• A collection of tuples might leak sensitive information not explicitly
reported (e.g., due to peculiar value distributions)
E XAMPLE : soldiers’ medical records
• Individual records are not sensitive
• Age distribution of soldiers in a location =⇒ type of location
◦ young soldiers: training campus
◦ old officials: headquarter


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

compare

observer

◦ young
soldiers:
training
campus
◦ old officials:
headquarter


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
Genomic information is an opportunity for medicine but there are
several privacy issues to be addressed
E.g., human genome:
• identifies its owner
• contains information about ethnic heritage, predisposition to
several diseases, and other phenotypic traits
• discloses information about the relatives and descendants of the
genome’s owner


Individuals’ re-identification – 1


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


Sensitive inference from data mining

The Target case – 1
• Target is the second-largest discount retailer in the U.S.
• Target assigns every customer a Guest ID number:
◦ tied to credit card, name, email address, . . .
◦ stores history of bought goods and other (bought) information
◦ mining on these data for targeted advertising


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


# Social media

Profiling in social media
Our social media activities and likes may reveal sensitive information

... With the users’ help

“Can’t I just email you a link to my blog, Miss?”


Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

Friends on Facebook? – 1
• In 2011: experiment to study how friendships are created on
Facebook
• Implementation of a socialbot
◦ software agent simulating human behaviors
◦ impersonating a non-existing user

• The socialbot sent friendship requests to unknown users
• Two-step process: no friends in common, and friends of friends

• Accepted requests:
◦ 2 out of 10 if no friends in
common
◦ 6 out of 10 if friends in
common

• Three weeks activity, 102 bots:
◦ 3,000 friends
◦ 46,500 e-mail addresses
◦ 14,500 physical addresses



Facebook: information on you


Facebook: information on you


Facebook: information on you


. . . And it’s not only Facebook


. . . And data can be shared


Cambridge Analytica scandal – 1

• Personality quiz app
◦ installed by 330,000 Facebook users who gave permission for
accessing their data. . .
◦ . . . but the app was also collecting data of those users’ friends

• Data from 87 million Facebook users retrieved by the app
◦ data shared with Cambridge Analytica
◦ users profiled through their data

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




Conscientious individual with
high neuroticism:

“The second amendment isn’t just
a right. It’s an insurance policy.
Defend the righ to bear arms!”



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

Online quizzes?

• What color are you?
• Which famous historical figure are you?
• Which famous painting are you?
• Who will be your Valentine’s Day date?
• ...
• What will you look like when old?

... Is it worth?

“It’s this new app – you put in your Social Security Number,
and it makes you look like a cat.”

Facebook facial recognition

Facebook facial recognition

Some open issues
• New privacy metrics
• New techniques to protect privacy
• External knowledge and adversarial attacks
• Evaluation of privacy vs utility

----------------------------------------------------------------







