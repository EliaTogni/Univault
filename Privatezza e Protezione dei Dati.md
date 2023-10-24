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
It occurs if a third party can identify a respondent from the released data.<br />
Revealing that an individual is a respondent in a data collection may or may not violate confidentiality requirements.<br />
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

## $k$-Anonymity

**$k$-anonymity**, together with its enforcement via generalization and suppression, aims to protect respondents’ identities while releasing truthful information. It tries to capture the following requirement:
- the released data should be indistinguishably related to no less than a certain number of respondents;
- quasi-identifier, a set of attributes that can be exploited for linking (whose release must be controlled).

The basic idea is to translate the $k$-anonymity requirement on the released data. Each release of data must be such that every combination of values of quasi-identifiers can be indistinctly matched to at least $k$ respondents.<br />
In the released table the respondents must be indistinguishable (within a given set) with respect to a set of attributes. $k$-anonymity requires that each quasi-identifier value appearing in the released table must have at least $k$ occurrences. This is a sufficient condition for the satisfaction of $k$-anonymity requirement.

### Generalization and suppression
with **generalization**, the values of a given attribute are substituted by using more general values. Based on the definition of a generalization hierarchy, for example, consider the attribute ZIP code and suppose that a step in the corresponding generalization hierarchy consists in suppressing the least significant digit in the ZIP code. With one generalization step, $20222$ and $20223$ become $2022*$ and $20238$ and $20239$ become $2023*$.<br />
With **suppression**, it is possible to protect sensitive information by removing it. The introduction of suppression can reduce the amount of generalization necessary to satisfy the $k$-anonymity constraint.

----------------------------------------------------------------

### Domain generalization hierarchy
A **generalization relationship** $\leq_{D}$ defines a mapping between domain $D$ and its generalizations. Given two domains $D_i, D_j \in Dom$, $D_i \leq_{D} D_j$ states that the values in domain $D_j$ are generalizations of values in $D_i$. $\leq_{D}$ implies the existence, for each domain $D$, of a **domain generalization hierarchy** $DGH_D = (Dom, \leq_D )$:
- $\forall D_i, D_j, D_z \in Dom: D_i \leq_D D_j, D_i \leq_D D_z \to D_j \leq_D D_z \vee D_z \leq_D D_j$;
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

If there is no solution that guarantees $k$-anonymity suppressing less than $MaxSup$ tuples at height $h$, there cannot exist a solution, with height lower than h that guarantees it.<br />
The algorithm adopts a binary search on the lattice of distance vectors:
1) evaluate solutions at height $\lfloor h/2\rfloor$;
2) if there exists at least a solution satisfying $k$-anonymity
	1) then evaluates solutions at height $\lfloor h/4 \rfloor$;
	2) otherwise evaluates solutions at height $\lfloor 3h/4 \rfloor$.
3) until the algorithm reaches the lowest height for which there is a distance vector that satisfies $k$-anonymity.

To reduce the computational cost, it adopts a distance vector matrix that avoids the explicit computation of each generalized table.

An example for computing a $k$-minimal solution.

slide 53/155

Suppose $k = 2$ and $MaxSup = 2$.
Compute first solutions at height $1$ : $GT_{[1,0]}$ and $GT_{[0,1]}$.

Slide 54/155

Satisfies $2$-anonymity (suppressing $t_1$ and $t_6$).

slide 54_2/ 155

Satisfies $2$-anonymity (suppressing $t_8$ and $t_9$)

----------------------------------------------------------------

### $k$-Optimize algorithm
Order attributes in QI and the values in their domains. Associate an integer index value with each domain value, following the defined order.

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
- \[MW-04\]: $\mathcal{O}(k \log{k})$-approximation;
- \[AFKMPTZ-05a\]: with unbounded value of $k$, $\mathcal{O}(k)$-approximation solution.

Approximation algorithm for _CG_:
- \[AFKMPTZ-05b\]: with unbounded value of $k$, $\mathcal{O}(k)$-approximation solution.

----------------------------------------------------------------

### k-anonymity revisited
$k$-anonymity requirement: each release of data must be such that every combination of values of quasi-identifiers can be indistinctly matched to at least $k$ respondents.<br />
When generalization is performed at attribute level (_AG_) this is equivalent to require each quasi-identifier $n$-uple to have at least $k$ occurrences.<br />
When generalization is performed at cell level (_CG_) the existence of at least $k$ occurrences is a sufficient but not necessary condition; a less stricter requirement would suffice:
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

Therefore, the adversary is able to infer that Hellen’s disease is chest pain.

slide 72/155

----------------------------------------------------------------

### $\ell$-diversity
A $q$-block (i.e., set of tuples with the same value for $QI$) is $\ell$-diverse if it contains at least $\ell$ different “well-represented” values for the sensitive attribute. "Well-represented" has different definitions based on entropy or recursion (e.g., a q-block is $\ell$-diverse if removing a sensitive value it remains $(\ell-1)$-diverse).<br />
$\ell$-diversity means that an adversary needs to eliminate at least $\ell-1$ possible values to infer that a respondent has a given value.<br />
A table is $\ell$-diverse if all its $q$-blocks are $\ell$-diverse. This implies that the homogeneity attack is not possible anymore and, therefore, that the background knowledge attack becomes more difficult.<br />
$\ell$-diversity is monotonic with respect to the generalization hierarchies considered for $k$-anonymity purposes.<br />
Any algorithm for $k$-anonymity can be extended to enforce the $\ell$-diverse property BUT $\ell$-diversity leaves space to attacks based on the distribution of values inside $q$-blocks (**skewness and similarity attacks**):

----------------------------------------------------------------

### Skewness attack
**Skewness attack** occurs when the distribution in a $q$-block is different than the distribution in the original population.<br />
Consider the following example:<br />
$20\%$ of the population suffers from diabetes and $75\%$ of tuples in a $q$-block have diabetes. This implies that people in the $q$-block have higher probability of suffering from diabetes.

slide 75/155

----------------------------------------------------------------

### Similarity attack
Similarity attack happens when a $q$-block has different but semantically similar values for the sensitive attribute.

slide 76/155

----------------------------------------------------------------

### Group closeness
A $q$-block respects **$t$-closeness** if the distance between the distribution of the values of the sensitive attribute in the $q$-block and in the considered population is lower than $t$. A table respects $t$-closeness if all its $q$-blocks respect $t$-closeness.<br />
$t$-closeness is **monotonic** with respect to the generalization hierarchies considered for k-anonymity purposes. Any algorithm for $k$-anonymity can be extended to enforce the $t$-closeness property, which however might be difficult to achieve.

----------------------------------------------------------------

### External knowledge modeling
An observer may have external/background knowledge that can be exploited to infer information. Knowledge may be about:
- the target individual;
- others, that is, information about individuals other than the target;
- same-value families, that is, knowledge that a group (or family) of individuals have the same sensitive value (e.g., genomic information).

An example of external knowledge.

slides 79-80/155

An adversary knows that Harry, born in $64$ and living in area $94139$, is in the table. This implies that Harry belongs to the second group and, therefore, that Harry has aids with confidence $\frac{1}{4}$.

slide 81/155

From another dataset, the adversary knows that George (who is in the table, is born in $'64$, and leaves in area $941**$) has flu. This implies that Harry has aids with confidence $\frac{1}{3}$.

slide 82/155

From personal knowledge, the adversary knows that Harry does not have short breath. Therefore, Harry has aids with confidence $\frac{1}{2}$.

----------------------------------------------------------------

### Multiple releases
Data may be subject to frequent changes and may need to be published on regular basis. The multiple release of a microdata table may cause information leakage since a malicious recipient can correlate the released datasets.

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
It addresses the problem of longitudinal release A sequence $T_1 , . . . , T_n$ of released microdata tables satisfies $m$-invariance iff:
- each equivalence class includes at least $m$ tuples;
- no sensitive value appears more than once in each equivalence class;
- for each tuple $t$, the equivalence classes to which t belongs in the sequence are characterized by the same set of sensitive values.
Therefore, the correlation of the tuples in $T_1, . . . , T_n$ does not permit a malicious recipient to associate less than m different sensitive values with each respondent.

----------------------------------------------------------------


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
In addition to classical microdata release problem, the concept of $k$-anonymity and its extensions can be applied in different scenarios, e.g.:
- social networks;
- data mining;
- location data.

#### k-anonymity in social networks
**Neighborhood attack** $\to$ given a de-identified graph $G'$ of a social network graph $G$, exploit knowledge about the neighbors of user $u$ to re-identify the vertex representing $u$.

slide 91/155

Idea: adapt the $k$-anonymity requirement to social networks. A vertex $u$ is $k$-anonymous if there exist at least $k − 1$ other vertices $v_1 , . . . , v_{k−1}$ such that the sub-graphs induced by the neighborhood of $u$ and the neighborhood of $v_1 , . . . , v_{k−1}$ are **isomorphic**. $G'$ is $k$-anonymous if every vertex $u$ in $G'$ is $k$-anonymous.<br />
Intuition: add fake edges to satisfy the requirement.

If $G'$ is $k$-anonymous, with the neighborhood background knowledge, any vertex in $G$ cannot be re-identified in $G'$ with confidence larger than $1/k$.

Goal: compute a $k$-anonymous version of a social network graph minimizing the number of added edges.

----------------------------------------------------------------

#### $k$-anonymous data mining
Privacy preserving data mining techniques depend on the definition of privacy capturing what information is sensitive in the original data and should then be protected.<br />
$k$-anonymous data mining aims at ensuring that the data mining results do not violate the $k$-anonymity requirement over the original data.<br />
Threats to $k$-anonymity can arise from performing mining on a collection of data maintained in a private table $PT$ subject to $k$-anonymity constraints. E.g.:
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
In $2006$, to embrace the vision of an open research community, **AOL** (America OnLine) publicly posted to a website $20$ million search queries for $650,000$ users of AOL’s search engine summarizing three months of activity. AOL suppressed any obviously identifying information such as AOL username and IP address. AOL replaced these identifiers with unique identification numbers (this made searches by the same user linkable).

User $4417749$:
- “numb fingers”, “$60$ single men”, “dog that urinates on everything”;
- “hand tremors”, “nicotine effects on the body”, “dry mouth”, and “bipolar”;
- “Arnold” (several people with this last name);
- “landscapers in Lilburn, Ga”, “homes sold in shadow lake subdivision Gwinnett county, Georgia”.

All of these informations led to Thelma Arnold, a $62$-year-old widow who lives in Lilburn, Ga. She was re-identified by two New York Times reporters. She explained in an interview that she has three dogs and that she searched for medical conditions of some friends.

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
In $2006$, Netflix (the world largest online movie rental service), launched the "Netflix Prize" (a challenge that lasted almost three years). There was a prize of USD $1$ million to be awarded to those who could provide a movie recommendation algorithm that improved Netflix’s algorithm by $10\%$. Netflix provided $100$ million records revealing how nearly $500,000$ of its users had rated movies from Oct.$’98$ to Dec.$’05$. In each record Netflix disclosed the movie rated, the rating assigned ($1$ to $5$), and the date of the rating.<br />
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
**Syntactic privacy** definitions capture the protection degree enjoyed by data respondents with a numerical value. E.g., each release of data must be indistinguishably related to no less than a certain number of individuals in the population.<br />
**Semantic privacy** definitions are based on the satisfaction of a semantic privacy requirement by the mechanism chosen for releasing the data. E.g., the result of an analysis carried out on a released dataset must be insensitive to the insertion or deletion of a tuple in the dataset.

----------------------------------------------------------------

### Differential privacy
**Differential privacy** aims at preventing adversaries from being capable to detect the presence or absence of a given individual in a dataset. E.g., the count of individuals with cancer from a medical database is produced with a release mechanism that when executed on datasets differing on one individual probably returns the same result.<br />
Differential privacy defines a property on the data release mechanism.

Informally, differential privacy requires the probability distribution on the published results of an analysis to be “essentially the same” independent of whether an individual is represented or not in the dataset.<br />
Formally, a randomized function $K$ gives $\varepsilon$-differential privacy if for all data sets $D$ and $D'$ differing on at most one row, and all $S \subseteq Range(K), Pr[K(D) \in S] \leq e^{\varepsilon} \times Pr[K(D' ) \in S]$.

Differential privacy is applicable to two scenarios:
- **interactive scenario**: run-time evaluation of queries:
- **non-interactive scenario**: release of pre-computed macrodata tables.

Furthermore, it is typically enforced by adding random noise. This implies that data truthfulness is not preserved. $\varepsilon$-differentially private mechanisms compose automatically.

#### Differential privacy variations and applications
Variations of differential privacy to reduce the amount of noise in data/query result:
- **($\varepsilon$, $\delta$)-differential privacy**: the $\varepsilon$ bound on query answer probabilities may be violated with small probability (controlled by $\delta$);
- adversaries with polynomial time computational bounds;
- use of wavelet transforms for improving data utility.

Similarly to $k$-anonymity, differentially private mechanisms have been developed for different domains:
- social networks;
- data mining;
- location data.

----------------------------------------------------------------

#### Is differential privacy enough?
Limiting the inference about the presence of a tuple is different from limiting the inference about the participation of the individual in the data generating process. E.g., Bob’s participation in a social network can cause links to form between Bob’s friends (Bob’s participation affects more than just the tuple marked “Bob”).

Differential privacy composes well with itself but not necessarily with other privacy definitions or data release mechanisms (which represent background knowledge that can cause privacy breaches).

----------------------------------------------------------------

#### k-anonymity vs differential privacy
Each has its strengths and weaknesses, e.g., $k$-anonymity provides a nice capturing of real-world requirement but not complete protection. Differential privacy, on the other hand, has better protection guarantees but it is not easy to understand/enforce, not guaranteeing complete protection either.<br /> Therefore, there is still work to be done on both fronts

----------------------------------------------------------------

## Some Examples of Other Privacy Issues
### Sensitive value distributions
Individual tuples are not sensitive. A collection of tuples might leak sensitive information not explicitly reported (e.g., due to peculiar value distributions). E.g., soldiers’ medical records:
- individual records are not sensitive;
- age distribution of soldiers in a location may help to infer the type of location:
	- young soldiers: training campus;
	- old officials: headquarter.

slide 121/155

----------------------------------------------------------------

### Inference channel - Example

slide 122/155

#### Counteracting inference channels
Need to characterize:
- **what** is the sensitive information:
	- peculiar value distribution identifying an outlier;
	- information-theoretical distance measures.
- **when** to enforce the exposure control to avoid early false positives:
	- observable exposure approximates the real one $\to$ exposure accuracy;
	- number of released tuples reaches a threshold $\to$ number of releases.

How to assess the exposure of released data:
- a priori computation of the maximum amount of tuples w.r.t. the baseline $\to$ number of releases for different attribute values;
- evaluation of exposure metrics over the requested tuples.

slide 124/155

----------------------------------------------------------------

### Privacy and genomic data
Genomic information is an opportunity for medicine but there are several privacy issues to be addressed. E.g., human genome:
- identifies its owner;
- contains information about ethnic heritage, predisposition to several diseases, and other phenotypic traits;
- discloses information about the relatives and descendants of the genome’s owner.

----------------------------------------------------------------

### Individuals’ re-identification

slide 127/155

The $1000$ Genomes Project: international project ($2008$) to establish a catalogue of human genetic variation. Five men involved in both the $1000$ Genomes Project and a project that studied Mormon families from Utah have been re-identified:
- their identities were determined;
- identities of their male and female relatives were also discovered.

Cross-reference analysis by the Whitehead Institute for Biomedical Research in Cambridge (MA):
1) extract the haplotypes of short tandem repeats on the donor’s Y chromosome (only for males);
2) enter the haplotypes into genealogical databases to find possible surnames of the donor;
3) enter the surnames into demographic databases.

----------------------------------------------------------------

### Sensitive inference from data mining
#### The Target case
Target is the second-largest discount retailer in the U.S. It assigns every customer a Guest ID number:
- tied to credit card, name, email address, . . .;
- stores history of bought goods and other (bought) information;
- mining on these data for targeted advertising.

slide 131/155

Analysts at Target identified $\sim 25$ products that assign each shopper a pregnancy prediction score. E.g., woman, $23$ y.o., buying in March cocoa-butter lotion, a purse large enough to double as a diaper bag, zinc and magnesium supplements and a bright blue rug $\to$ $87\%$ due late August. Due time in a small window to send coupons timed to very specific stages of a pregnancy.

Mining data reveals customers’ major life events (e.g., graduating from college or getting a new job or moving to a new town):
- shopping habits became flexible, predictable, and potential gold mines for retailers;
- between $2002$ (starting of similar campaigns) and $2010$ Target’s revenues grew from $ $44$B to $ $67$B.

----------------------------------------------------------------

### Social media
#### Profiling in social media
Our social media activities and likes may reveal sensitive information.

slide 134/155

----------------------------------------------------------------

#### Is information shared with whom?
Facebook default sharing settings from 2005 to 2010

slide 136/155

----------------------------------------------------------------

#### Friends on Facebook?
In $2011$ an experiment was conducted to study how friendships are created on Facebook:
- implementation of a socialbot;
- software agent simulating human behaviors;
- impersonating a non-existing user.

The socialbot sent friendship requests to unknown users. Two-step process: no friends in common, and friends of friends.

Accepted requests:
- $2$ out of $10$ if no friends in common;
- $6$ out of $10$ if friends in common.

Three weeks activity, $102$ bots:
- $3,000$ friends;
- $46,500$ e-mail addresses;
- $14,500$ physical addresses

slide 139/155

#### Cambridge Analytica scandal

slide 142/155

Personality quiz app, installed by $330,000$ Facebook users who gave permission for accessing their data but the app was also collecting data of those users’ friends.<br />
Data from $87$ million Facebook users retrieved by the app:
- data shared with Cambridge Analytica;
- users profiled through their data.

----------------------------------------------------------------

#### User profiling - Facebook/Cambridge Analytica
**OCEAN model**:
- **Openness**: do you enjoy new experiences?
- **Conscientiousness**: do you prefer plans and order
- **Extraversion**: how social you are?
- **Agreeableness**: do you value others’ needs and society
- **Neuroticism** how much do you tend to worry

----------------------------------------------------------------

#### Some open issues
- New privacy metrics;
- new techniques to protect privacy;
- external knowledge and adversarial attacks;
- evaluation of privacy vs utility.

----------------------------------------------------------------

# Macrodata and Microdata Protection
## Outline
- **Statistical DBMS**
- **Macrodata protection**:
	- count and frequency tables;
	- magnitude tables.
- **Microdata protection**:
	- masking techniques;
	- synthetic techniques.

slide 2/98

### Statistical data dissemination
Often statistical data (or data for statistical purpose) are released. Such released data can be used to infer information that was not intended for disclosure.<br />
Disclosure can:
- occur based on the released data alone;
- result from combination of the released data with publicly available information;
- be possible only through combination of the released data with detailed external (public) data sources.

The disclosure risk from the released data should be very low.

----------------------------------------------------------------

### Statistical DBMS vs statistical data
Release of data for statistical purpose:
- statistical DBMS:
	- the DBMS responds only to statistical queries;
	- need run time checking to control information (indirectly) released.
- statistical data:
	- publish statistics (macrodata release);
	- control on indirect release performed before publication.


----------------------------------------------------------------

## Statistical DBMS
A statistical DBMS is a DBMS that provides access to statistics about groups of individuals. It should not reveal information about any particular individual. Confidential information about an individual can be deduced, combining the results of different statistics or combining the results of statistics with external knowledge (possibly about the database content).

An example of a statistical DBMS

slides 7/98

Query: sum of the incomes of females with major in EE.<br />
Result: it reveals the income of Baker (only female with EE) $\to$ the query is sensitive so it is necessary to block statistics computed over a single (or few) individual.

Another example of a Statistical DBMS 

slide 8/98

Query $1$: sum of the incomes of individuals with major in EE.<br />
Result: it does not reveal the income of any individual ($240k$) $\to$ the query is not sensitive<br />
Query $2$: sum of the incomes of males with major in EE.<br />
Result: it does not reveal the income of any individual ($190k$) $\to$ the query is not sensitive.<br />
Query 3 = sum of the incomes of females with major in EE ($50k$) = income of Baker $\to$ the combination of queries is sensitive.

----------------------------------------------------------------

## Macrodata protection
### Macrodata
Macrodata tables can be classified into the following two groups (types of tables):
- **Count/Frequency**: Each cell contains the number (count) or the percentage (frequency) of respondents that have the same value over all attributes in the table;
- **Magnitude data**: Each cell contains an aggregate value of  quantity of interest over all attributes in the table.

----------------------------------------------------------------

## Macrodata Disclosure Protection Techniques: Tables of Counts or Frequencies

Data collected from most surveys are published in tables of count or frequencies.<br />
Protection operates in three steps:
1) **sampling**;
2) **identification** of sensitive cells:
	- **special rules**;
	- **threshold rules**.
3) **protection** of sensitive cells:
	- **table restructuring**;
	- **suppression**;
	- **rounding**;
	- **confidentiality edit**.

### Sampling
Conduct (and publish) a sample survey rather than a census.<br />
Estimates are made by multiplying individual responses by a sampling weight before aggregating them. If weights are not published, weighting helps to make an individual respondent’s data less identifiable from published totals.<br />
Estimates must achieve a specified accuracy. Data that do not meet the accuracy requirements are not published (not considered meaningful).

----------------------------------------------------------------

### Special rules
When macrodata tables are defined on the whole population disclosure limitation procedures must be applied. Special rules define restrictions on the level of detail that can be provided in a table. Special rules differ depending on the agency and the kind of table.

An example of Special rules.
Social Security Administration (SSA) rules prohibit publishing tables where the value of a cell:
- is equal to a marginal total or:
- would allow users to determine:
	- an individual’s age within a five-year interval;
	- earnings within a $ $1,000$ interval;
	- benefits within a $ $50$ interval.
- to satisfy special rules:
	- table restructuring or category combination.

Another example of Special rules.

Number of employees by department and annual income (in $K$ Euro).<br />
Special rule: Income within a $5K$ Euro interval.
 
slide 22/98

Cells that cannot be released:
- its value is equal to total;
- the table allows users to determine benefit within a $ $5k$ interval:
	- between $23K$ and $25K$ for _Dept$4$_
	- between $23K$ and $27K$ for _Dept$2$_

Another example of Special rules (U.S. HIPAA).
Health Insurance Portability and Accountability Act “Safe Harbor” rules, include:
- identifying information must be removed;
- locations have to be generalized to units that contain at least $20,000$ residents;
- dates of birth must be rounded up to the year of birth only (or to larger value if the person is older than $90$).

----------------------------------------------------------------

### Threshold rules
A cell is sensitive if the number of respondents is less than some specified number (e.g., some agencies consider $5$, others $3$). A sensitive cell cannot be released. Different techniques can be applied to protect sensitive cells:
- table restructuring and category combination;
- cell suppression;
- random rounding;
- controlled rounding;
- confidentiality edit.

An example of Table with disclosures.
Table containing information about employees by company and education level.

slide 25/98

Suppress one additional cell for each row/column with a sensitive cell suppressed.<br />
A cell with fewer than 5 respondents is defined as sensitive
Suppress one additional cell for each row/column with a sensitive cell
suppressed

----------------------------------------------------------------

### Table restructuring
An example of Table restructuring.
Number of employees by department and annual income (in $K$ Euro).<br />
Special rule: Income within a $5K$ Euro interval.<br />
To protect confidentiality, the table can be restructured and rows or columns combined (“rolling-up categories”)

slide 27/98 1 e 2

Combining _Dept$1$_ with _Dept$2$_ and _Dept$3$_ with _Dept$4$_ does offer the required protection.

slide 27/98 3

Combining _Dept$2$_ with _Dept$4$_ would still reveal that the income is within a 5K interval $[23K, 27K)$.

----------------------------------------------------------------

### Cell suppression
One of the most used ways of protecting sensitive cells is **suppression**. Suppressing sensitive cells (**primary suppression**) is not sufficient. At least one additional cell must be suppressed (**complementary suppression**) for each row or column with a suppressed sensitive cell (primary suppression). The value in the sensitive cell can be calculated from the marginal total.<br />
Even with complementary suppression it is difficult to guarantee adequate protection.

----------------------------------------------------------------

### Complementary suppressions
The selection of cells for complementary suppression is complicated. **Linear programming** techniques are used to automatically select cells for complementary suppression.<br />
**Audit techniques** can be applied to evaluate the proposed suppression pattern to see if it provides the required protection.

An example of cell suppression: Table without disclosures.<br />
Table containing information about employees by company and education level

slide 30/98 2

A cell with fewer than 5 respondents is defined as sensitive.

slide 30/98 3

Suppress sensitive cells.

slide 30/98 4

Suppressing sensitive cells is not sufficient:<br />
$35 = D1 + 10 + 10 + 14 \to D1 = 1$<br />
$30 = D2 + 10 + 10 + 7 \to D2 = 3$<br />
$50 = 15 + 20 + D4 + 12 \to D4 = 3$
$35 = 12 + 14 + 7 + D6 \to D6 = 2$
$20 = 15 + 1 + 3 + D3 \to D3 = 1$
$25 = 3 + 10 + 10 + D5 \to D5 = 2$

slide 30/98 ??

Suppress one additional cell for each row/column with a sensitive cell suppressed.<br />
The table appears to offer protection to the sensitive cells but:
$(15 + D1 + D2 + D3 ) + (20 + D4 + D5 + 15) - (D1 + D4 + 10 + 14) - (D2 + D5 + 10 + 7)$
$= 20 + 55 - 35 - 30 \to D3 = 1$

slide 30/98 ?? più slides

The table provides adequate protection for the sensitive cells but out of a total of $16$ cells, only $7$ cells are published, while $9$ are suppressed.

slide 30/98 ultima

----------------------------------------------------------------

### Rounding
To reduce data loss due to suppression, use **rounding of values** to a multiple of the sensitivity threshold:
- **random**: random decision on whether cell values will be rounded up or down. The sum of the values in a row/column may be different from the published marginal totals (recipients may lose confidence in the data);
- **controlled**: ensure that the sum of published entries is equal to published marginal totals.

Note: all cell values must be a multiple of the threshold value.

An example of random rounding.

slide 32/98

----------------------------------------------------------------

### Controlled rounding

An example of controlled rounding.

slide 33/98

Linear programming methods are used to identify a controlled rounding for a table.<br />
Disadvantages:
- it requires the use of specialized computer programs;
- controlled rounding solutions may not always exist for complex tables.

----------------------------------------------------------------

### Confidentiality edit
Developed by the U.S. Census Bureau to provide protection of tables prepared from the $1990$ Census. Two different approaches:
- to protect the regular decennial Census data ($100\%$ of the population);
- to protect the long-form of the Census which refers to a sample of the population.

Both approaches apply statistical disclosure limitation techniques to the microdata on which statistics are calculated. Statistics are protected by changing input data.

For the $100$ percent microdata file, confidentiality edit applie **switching**:
1) take a sample of records from the microdata file;
2) find a match for these records in some other geographic region, matching on a specified set of important attributes;
3) swap all attributes on the matched records.

For small blocks, the sampling fraction is increased to provide additional protection. The microdata file can be used directly to prepare macrodata tables.

An example of confidentiality edit.

Records for the 20 employees of company Alfa 

slide 37/98

1) take a sample of records from the microdata file (say a $10\%$ sample, $2$ tuples for company Alfa). Assume that records number $4$ and $17$ were selected as part of our $10\%$ sample;
2) since we need tables by company and education level, we find a match in some other company on the other variables (race and salary, company totals for these variables remain unchanged):
	- a match for record $4$ (Pete) is found in company Beta, the match is with Alonso, who has very high education;
	- Record $17$ (Mike) is matched with George in company Delta, who has medium education.
3) we also assume that part of the randomly selected $10\%$ sample from other companies match records in company Alfa:
	- one record from company Delta (June with high education) matches with Virginia (record $12$);
	- One record from company Gamma (Heather with low education) matched with Nancy (record $20$).
4) After all matches are made, swap attributes on matched records;
5) Use the swapped data file directly to produce tables.

check slide 40/98


Take a sample of records from the microdata file (say a $10\%$ sample).

slide 40/98
 

Since we need tables by company and education level, we find a match in some other company on the other variables.

slide 40/98


Part of the randomly selected $10\%$ sample from other companies
match records in company Alfa.

slide 40/98

slide 41/98

----------------------------------------------------------------

## Macrodata Disclosure Protection Techniques: Tables of Magnitude Data
### Protection of tables of magnitude data 
Magnitude data are generally nonnegative quantities reported in surveys or censuses. The distribution of these values is likely to be skewed. Disclosure limitation techniques focus on preventing precise estimation of the values for outliers. Sampling is less likely to provide protection. The units that are most visible because of their size do not receive any protection from sampling.

1) Identify sensitive cells:
	 - **$p$-percent**;
	 - **$pq$**;
	 - **$(n,k)$**.
2) protect sensitive cells:
	- **suppression**.
3) verify result:
	- **audit**;
	- **information loss**;
	- (parameters are not disclosed)

----------------------------------------------------------------

### Suppression rules
Primary suppression rules determine whether a cell could reveal individual respondent information. Such cells are considered sensitive and cannot be released. The most common suppression rules are:
- the $p$-percent rule;
- the $pq$ rule;
- the $(n,k)$ rule.

These rules are used to identify sensitive cells by verifying whether it is enough difficult for one respondent to estimate the value reported by another respondent too closely.

----------------------------------------------------------------

#### Primary suppression rule: $p$-percent
Disclosure of magnitude data occurs if the user can estimate the contribution of a respondent too accurately. A cell is sensitive, if upper and lower estimates for the respondent’s value are closer to the reported value than a pre-specified percentage $p$.

Formally, a cell is protected if:

$$\sum_{i = c + 2}^{N} x_i \geq \frac{p}{100} x_1$$

$x_1, x_2, . . ., x_N$ : respondent’s value in decreasing order.<br />
$c$: size of a coalition of respondents interested in estimating $x_1$.

The largest value $x_1$ is the most exposed

An example of the primary suppression rule: $p$-percent.<br />
Consider the respondents that contribute to the total income in a city, which is equal to $250K$, to be (in decreasing order):
- Alice: $100K$;
- Bob: $80K$;
- Carol: $30K$;
- David: $20K$;
- Eve: $10K$;
- Frank: $3K$;
- ...

The most sensitive value is Alice’s, because it is easier to estimate. If Alice’s income cannot be estimated accurately, the income of the other citizens is protected.

Which is the coalition of $c = 3$ respondents that can better estimate Alice’s income? Bob, Carol, David, whose total income is $130K$, can estimate that Alice’s income is between $80K$ and $120K$:
- $\geq 80K$ since it is higher than Bob’s;
- $\leq 120K (=250K−130K)$.

Therefore, it is sensitive for any $p \geq 20$.
Formally, the cell is protected for any $p$ such that

$$\sum_{i = 3 + 2}^{N} x_i \geq \frac{p}{100} \text{Alice}$$
$$\sum_{i = 5}^{N} x_i \geq \frac{p}{100} 100$$
$$p \leq \text{ Cell } - \sum_{i = 1}^{4} x_i$$
$$p \leq \text{ Cell } − (\text{Alice } + \text{ Bob }+ \text{ Carol }+ \text{ David})$$
$$p \leq 250 − (100 + 80 + 30 + 20)$$$$p \leq 20$$

----------------------------------------------------------------

#### Primary suppression rule: $pq$
In the $p$-percent rule, we assumed that there was no prior knowledge about respondent’s values. Agencies should not make this assumption.<br />
In the $pq$ rule, agencies can specify how much prior knowledge there is by assigning a value $q$ which represents how accurately respondents can estimate another respondent’s value before any data are published ($p < q < 100$).<br />
Parameter $q$ represents the error in estimation before the cell is published.

Formally, a cell is protected if

$$\frac{q}{100} \sum_{i = c + 2}^{N} x_i \geq \frac{p}{100} x_1$$

$x_1, x_2, . . ., x_N$: respondent’s value in decreasing order.<br />
$c$: size of a coalition of respondents interested in estimating $x_1$.

The $pq$ rule reduces to the $p$-percent rule when $q=100$ (i.e., no estimate ability).

An example of the primary suppression rule: $pq$.<br />
Consider the respondents that contribute to the total income in a city, which is equal to $250K$, to be (in decreasing order):
- Alice: $100K$;
- Bob: $80K$;
- Carol: $30K$;
- David: $20K$;
- Eve: $10K$;
- Frank: $3K$;
- ...

Assume $q=80\%$ to represent how accurately respondents can estimate another respondent’s value before any data publishing. For Alice’s income this implies range $[20,180]$.<br />
Again, the coalition of $c = 3$ respondents that can better estimate Alice’s income is Bob, Carol, David.<br />
The coalition can reduce uncertainty about Alice’s income from $[20K-180K]$ to $[80K-120K]$:
- $\geq 80K$ since it is higher than Bob’s;
- $\leq 120K (=250K−130K)$.

Assuming $q = 80\%$ and $c = 3$, formally, the cell is protected for any $p$ such that:

$$\frac{q}{100} \sum_{i = c+2}^{N} x_i \geq \frac{p}{100}x_1$$
$$\frac{80}{100} \sum_{i = 3+2}^{N} x_i \geq \frac{p}{100}\text{Alice}$$
$$\frac{80}{100} \sum_{i = 5}^{N} x_i \geq \frac{p}{100}100$$
$$\frac{80}{100} \sum_{i = 5}^{N} x_i \geq p$$
$$\sum_{i = 5}^{N} x_i \geq \frac{p}{0.80}$$
$$\text{Cell} - \sum_{i = 1}^{4} x_i \geq \frac{p}{0.80}$$
$$\text{Cell} - (\text{Alice } + \text{ Bob } + \text{ Carol } + \text{ David}) \geq \frac{p}{0.80}$$
$$250 - (100 + 80 + 30 + 20) \geq \frac{p}{0.80}$$
$$20 \geq \frac{p}{0.80}$$
$$p \leq 16$$

----------------------------------------------------------------

#### Primary suppression rule: $(n,k)$
Regardless of the number of respondents in a cell, if a small number ($n$ or fewer) of these respondents contribute a large percentage ($k\%$ or more) of the total cell value, the cell is considered sensitive.

Intuitive rule: if a cell is dominated by one respondent, the published total is an upper estimate for her value. $n$ selected to be larger than the number of any suspected coalitions. Many agencies use an $(n,k)$ rule with $n = 1$ or $n = 2$

An example of the primary suppression rule: $(n,k)$.<br />
Consider the respondents that contribute to the total income in a city, which is equal to $250K$, to be (in decreasing order):
- Alice: $100K$;
- Bob: $80K$;
- Carol: $30K$;
- David: $20K$;
- Eve: $10K$;
- Frank: $3K$;
- ...

Assuming $n=2$ and $k=70$, the cell is considered sensitive. The income of Alice and Bob $(100K+80K=180K)$ represents the $72\%$ of the cell value ($250K$).

----------------------------------------------------------------

#### Secondary suppression
Once sensitive cells have been identified, there are two options:
- restructure the table and collapse cells until no sensitive cells remain;
- cell suppression: do not publish sensitive cells (**primary suppressions**) and remove other cells (**complementary suppressions**).

An administrative way to avoid cell suppression consists in obtaining written permission from respondents.<br />
Other non-sensitive cells must be selected for suppression to ensure that the respondent level data in sensitive cells cannot be estimated too accurately.A respondent’s data cannot be estimated too closely.

Sensitive cells might be leaked due to the fact that:
- implicitly published unions of suppressed cells may be sensitive according to the sensitivity rule adopted;
- the row and column equations represented by the published table may be solved, and the value for a suppressed cell estimated too accurately.

Any complementary suppression is acceptable as long as the sensitive cells are protected. For small tables the selection of complementary cells can be done manually.<br />
Data analysts know which cells are of greatest interest (and should not be used for complementary suppression). Manual selection of complementary cells is acceptable as long as the resulting table provides sufficient protection to sensitive cells. An automated audit should be applied to ensure this is true.

----------------------------------------------------------------

#### Audit
If totals are published the sum of the (primary or secondary) suppressed cells can be derived. Apply the sensitivity rule to these sums to ensure that they are not sensitive:
- rows and columns can be seen as a large system of linear equations;
- estimate a lower and upper bound of each suppressed cell using linear programming;
- if bounds are too close to the original value, the cell is sensitive.

Simple for small tables, possibly computationally intractable for large tables.

##### Information loss
The selection of the complementary cells should result in minimum **information loss**. There is no unique definition of information loss. For instance, we can try to minimize:
- the sum of the suppressed values (a large number of cells with small values can be suppressed);
- the total number of suppressed cells.

----------------------------------------------------------------

##### Information in parameter values
While the suppression rules can be published, parameter values
should be kept confidential.

For example, assume that:
- $p$-percent rule is used with $p=20\%$ and the same value is used for complementary suppression;
- a cell $x$ with value $100$ has been suppressed along with other suitable complementary cells;
- by solving a system of linear equations, the upper bound is $120$ and the lower bound is $80$: $80 \leq x  \leq 120 \to x =100$.

Once the value for one suppressed cell has been uniquely determined, other cell values can easily be derived.

An example of the protection of tables of magnitude data.

slide 63/98 3
slide 63/98 4

$(n,k)$ rule with $n=1$, $k=90$ implies that a cell is sensitive if one respondent contributes more than $90\%$.

slide 63/98 5

Secondary suppression.

----------------------------------------------------------------

## Microdata
Many situations require today that the specific stored data themselves (**microdata**) be released. The advantage of releasing microdata is an increased flexibility and availability of information for the recipients.

To protect the anonymity of the respondents, data holders often remove or encrypt explicit identifiers such as names, addresses, and phone numbers. De-identifying data, however, provides no guarantee of anonymity.

Released information often contains other quasi-identifying data (e.g., race, birth date, sex, and ZIP code) that can be linked to publicly available information to reidentify respondents. The data recipients can determine (or restrict uncertainty) to which respondent some pieces of released data refer. This has created an increasing demand to devote resources for an adequate protection of sensitive data. The microdata protection techniques follow two main strategies:
- reduce the information content;
- change the data in such a way that the information content is maintained as much as possible.

### Microdata disclosure protection techniques
To limit the disclosure risk, the following procedures should be applied:
- including data from a sample of the whole population only;
- removal of identifiers;
- limiting geographic details;
- limiting the number of variables.

#### Limiting geographic details
Geographic location is a characteristic that:
- often appears in microdata;
- can be used for re-identifying respondents.

It is therefore important limiting geographic details.
For example, the Census Bureau will not identify any geographic region with less than $100,000$ persons in the sampling ($250,000$ in the $’80$). Microdata contain, in fact, contextual variables that describe the area in which a respondent resides but do not identify that area (e.g., average temperature of an area).

----------------------------------------------------------------

### Classification of microdata protection techniques
These techniques are based on the principle that reidentification can be counteracted by reducing the amount of released information:
- masking the data (e.g., by not releasing or by perturbing their values);
- releasing plausible but made up values instead of the real ones.

According to this principle, the microdata protection techniques can be classified into two main categories:
- masking techniques;
- synthetic data generation techniques.

They can operate on different data types:
- **continuous**: an attribute is said to be continuous if it is numerical and arithmetic operations are defined on it (e.g., date of birth, temperature, . . .);
- **categorical**: an attribute is said to be categorical if it can assume a limited and specified set of values and arithmetic operations do not have sense on it (e.g., marital status, race, . . .).

----------------------------------------------------------------

### Microdata Disclosure Protection Techniques: Masking Techniques
The original data are transformed to produce new data that are valid for statistical analysis and such that they preserve the confidentiality of respondents. They are classified as:
- **non-perturbative**: the original data are not modified, but some data are suppressed and/or some details are removed;
- **perturbative**: the original data are modified.

slide 77/98

#### Non Perturbative Techniques
##### Sampling
The protected microdata table is obtained as a sample of the original microdata table. Since there is uncertainty about whether or not a specific respondent is in the sample, reidentification risk decreases.

An example of sampling.

slide 79/98

slide 79/98 2

Compute a sample of $3$ tuples out of $14$.

slide 79/98 3 

----------------------------------------------------------------


##### Local suppression
It suppresses the value of an attribute (i.e., it replaces it with a missing value) thus limiting the possibilities of analysis. This technique blanks out some attribute values (sensitive cells) that are likely to contribute significantly to the disclosure risk of the tuple involved.

An example of local suppression.

slide 81/98 2

Suppress cells that contribute significantly to re-identification.

slide 81/98 3

----------------------------------------------------------------

##### Global recoding
The domain of an attribute is partitioned into disjoint intervals, usually of the same width, and each interval is associated with a label. The protected microdata table is obtained by replacing the values of the attribute with the label associated with the corresponding interval.

An example of global recoding.

slide 83/98 2

Global recoding on _Income_:
$[150-199]$: low, $[200-289]$: medium, $[290-310]$ high.

slide 83/98 3

----------------------------------------------------------------

##### Top-coding and bottom-coding
**Top-coding** defines an upper limit (top-code) for each attribute to be protected. Any value greater than it is replaced with a flag that tells the user what the top-code is and that this value exceeds it. It can be applied to categorical attributes that can be linearly ordered as well as to continuous attributes.

**Bottom-coding** defines a lower limit (bottom-code) for each attribute to be protected. Any value lower than it is replaced with a flag that tells the user what the bottom-code is and that this value is less than it. It can be applied to categorical attributes that can be linearly ordered as well as to continuous attributes

An example of top-coding and bottom-coding.

slide 85/98 2

Top-coding on _Holidays_ for values higher than $30$.
Bottom-coding on _Holidays_ for values lower than $10$.

slide 85/98 3

----------------------------------------------------------------

##### Generalization
It replaces values with more general values. Typically based on the definition of a generalization hierarchy, where the most general value is the root and the leaves correspond to the most specific values.

Different generalized microdata tables can be built, depending on the number of generalization steps applied.

An example of generalization.

slide 87/98 2

Generalize attribute _DoB_ to the granularity of month.

slide 87/98 3

----------------------------------------------------------------

#### Perturbative Techniques
##### Random noise
It perturbs a sensitive attribute by adding or by multiplying it with a random variable with a given distribution. It is necessary to decide whether or not to publish the distribution(s) used to add noise to the data.<br />
Publishing the distribution(s) might increase disclosure risk of the data.

An example of random noise.

slide 90/98 1

Additive noise over attribute _Holidays_ (to preserve average).

slide 90/98 2


slide 90/98 3

----------------------------------------------------------------

##### Swapping
A small percent of records are matched with other records in the same file, perhaps in different geographic regions, on a set of predetermined variables. The values of all other variables on the file are then swapped between the two records.

This technique reduces the risk of reidentification because it introduces uncertainty about the true value of a respondentent’s data.

An example of swapping.

slide 92/98 1

Swap _Holidays_ and _Income_ for tuples with the same _Sex_ and _MarStat_. Identify $3$ pairs of tuples with same _Sex_ and _MarStat_

slide 92/98 2

Swap _Holidays_ and _Income_.

slide 92/98 3

----------------------------------------------------------------

##### Micro-aggregation (blurring)
It consists in grouping individual tuples into small groups of a fixed dimension $k$. The average over each group is published instead of individual values.<br />
Groups are formed by using maximal similarity criteria.

There are different variations of micro-aggregation:
-  the average can substitute the original value only for a tuple in the group or for all of them;
- different attributes can be protected through micro-aggregation using the same or different grouping;
- ...

An example of micro-aggregation (blurring).

slide 94/98 1

Group tuples based on _Sex_ and _MarStat_

slide 94/98 2

slide 94/98 3

Substitute _Income_ with the average for each group.

----------------------------------------------------------------

## Microdata Disclosure Protection Techniques: Synthetic Techniques
### Synthetic techniques
Since the statistical content of the data is not related to the information provided by each respondent, a model well representing the data could in principle replace the data themselves.

An important requirement for the generation of synthetic data is that the synthetic and original data should present the same quality of statistical analysis.

The main advantage of this class of techniques is that the released synthetic data are not referred to any respondent and therefore their release cannot lead to reidentification.

slide 98/98

----------------------------------------------------------------

# Privacy and Data Protection in Emerging Scenarios

ICT ecosystem
• Advancements in the ICT and networks have changed our society
• 5G and beyond, infrastructures and services are more powerful,
efficient, and complex

• ICT and network advancements are enabling factors for a smart
society . . .


. . . Everything is getting smart

Smart car

Augmented reality

Smart entertainment systems

Museum and exhibitions

Smart e-commerce

Smart governance

Health Care

Intelligent shops

Smart toothbrush

Smart society


Smart society - Advantages


Smart services and security – Advantages
+ Better protection mechanisms
+ Business continuity and disaster recovery
+ Prevention and response

. . . but . . .


Smart services and security – Disadvantages
− More complexity . . .
. . . weakest link becomes a point of attack
◦ system hacking
◦ improper information leakage
◦ data and process tampering

− Explosion of damages and violations
− Loss of control over data and processes

Maybe too smart? – 1


Maybe too smart? – 2

Security . . . a complex problem

The role of data in a smart environment

=⇒ better governance and intelligent systems

The most valuable resource - Data

Impact on data protection and privacy

Huge amount of data stored at external providers

Cloud computing
• The Cloud allows users and organizations to rely on external
providers for storing, processing, and accessing their data
+ high configurability and economy of scale
+ data and services are always available
+ scalable infrastructure for applications

• Users lose control over their own data
− new security and privacy problems

• Need solutions to protect data and to securely process them
in the cloud


Cloud computing: Today
Cloud Service Providers (CSPs) apply security measures in the
services they offer but these measures protect only the perimeter and
storage against outsiders

data owner

cloud

data owner

cloud

functionality implies full trust in the CSP that has full access to the da

protection but limited functionality since the CSP cannot access data



Cloud computing: Today
Cloud Service Providers (CSPs) apply security measures in the
services they offer but these measures protect only the perimeter and
storage against outsiders

data owner

cloud

data owner

cloud

functionality

• functionality
implies full trust in the CSP that has full access to the data (e.g., Goo

protection but limited functionality since the CSP cannot access data

Cloud computing: Today
Cloud Service Providers (CSPs) apply security measures in the
services they offer but these measures protect only the perimeter and
storage against outsiders

data owner

cloud

data owner

cloud

functionality but no protection
(key is with the CSP)

• functionality implies full trust in the CSP that has full access to the
data (e.g., Google Cloud Storage, iCloud)

protection but limited functionality since the CSP cannot access data

Cloud computing: Today
Cloud Service Providers (CSPs) apply security measures in the
services they offer but these measures protect only the perimeter and
storage against outsiders

data owner

cloud

functionality but no protection
(key is with the CSP)

data owner

cloud

protection

• functionality implies full trust in the CSP that has full access to the
data (e.g., Google Cloud Storage, iCloud)

• protection
but limited functionality since the CSP cannot access data (e.g., Boxc

Cloud computing: Today
Cloud Service Providers (CSPs) apply security measures in the
services they offer but these measures protect only the perimeter and
storage against outsiders

data owner

cloud

functionality but no protection
(key is with the CSP)

data owner

cloud

protection but limited functionality
(you cannot access data as you like)

• functionality implies full trust in the CSP that has full access to the
data (e.g., Google Cloud Storage, iCloud)
• protection but limited functionality since the CSP cannot access
data (e.g., Boxcryptor, SpiderOak)

Cloud computing: New vision
Solutions that provide protection guarantees giving the data owners
both: full control over their data and cloud functionality over them

data owner

cloud

client-side trust boundary: only the behavior of the client should be co
=⇒ techniques and implementations supporting direct processing
of encrypted data in the cloud

https://mosaicrown.eu

https://www.marsalproject.eu


https://glaciation-project.eu


Cloud computing: New vision
Solutions that provide protection guarantees giving the data owners
both: full control over their data and cloud functionality over them

• client-side trust boundary: only the behavior of the client should
be considered trusted
=⇒ techniques and implementations supporting direct processing
of encrypted data in the cloud

https://mosaicrown.eu

https://www.marsalproject.eu

https://glaciation-project.eu


Data protection – Base level


Data protection – Base level



Data protection – Regulation


Data protection – Confidentiality (1)
• Minimize release/exposition
◦ correlation among different data sources
◦ indirect exposure of sensitive information
◦ de-identification ̸= anonymization


Data protection – Confidentiality (2)

Characterization of Data Protection
Challenges in Cloud Scenarios

Scientific and technical challenges
Three dimensions characterize the problems and challenges


Security properties


Access requirements



Architectures


Combinations of the dimensions
• Every combination of the different instances of the dimensions
identifies new problems and challenges
• The security properties to be guaranteed can depend on the
access requirements and on the trust assumption on the providers
involved in storage and/or processing of data
• Providers can be:
◦ curious
◦ lazy
◦ malicious


Digital Data Market

Digital Data Market



Dimensions of the problem and challenges
• Requirements capturing and representation
policies regulating access, sharing, usage and processing

Enforcing technologies
data wrapping / sanitization

Enforcement phase
ingestion / storage / analytics


Dimensions of the problem and challenges
• Requirements capturing and representation
policies regulating access, sharing, usage and processing

Enforcing technologies
data wrapping / sanitization

Enforcement phase
ingestion / storage / analytics



Dimensions of the problem and challenges
• Requirements capturing and representation
policies regulating access, sharing, usage and processing

• Enforcing technologies
data wrapping / sanitization

Enforcement phase
ingestion / storage / analytics



Dimensions of the problem and challenges
• Requirements capturing and representation
policies regulating access, sharing, usage and processing

• Enforcing technologies
data wrapping / sanitization

Enforcement phase
ingestion / storage / analytics


Dimensions of the problem and challenges
• Requirements capturing and representation
policies regulating access, sharing, usage and processing

• Enforcing technologies
data wrapping / sanitization

• Enforcement phase
ingestion / storage / analytics



Enforcement phase
• Ingestion / Storage / Analytics
____
____
____

Data Market

Data Owner

____
____
____

Data Owner

____
____
____

Data Owner
LEGEND

policy

plaintext data

wrapped data

sanitized data

Multi-Owner data Sharing for Analytics and Integration respecting Confidentiality and OWNer control - https://mosaicrown.eu


Enforcement phase
• Ingestion / Storage / Analytics
____
____
____

Ingestion

Data Market

Data Owner

____
____
____

Ingestion

Data Owner

____
____
____

Ingestion

Data Owner
LEGEND

policy

plaintext data

wrapped data

sanitized data

Multi-Owner data Sharing for Analytics and Integration respecting Confidentiality and OWNer control - https://mosaicrown.eu

Enforcement phase
• Ingestion / Storage / Analytics
____
____
____

Ingestion

Data Market

Data Owner

____
____
____

Ingestion

Data Owner

Storage

____
____
____

Ingestion

Data Owner
LEGEND

policy

plaintext data

wrapped data

sanitized data

Multi-Owner data Sharing for Analytics and Integration respecting Confidentiality and OWNer control - https://mosaicrown.eu


Enforcement phase
• Ingestion / Storage / Analytics
____
____
____

Ingestion

Data Market

Data Owner

____
____
____
____
____
____

Ingestion
Analytics

Data Owner

Storage

Analytics

____
____
____

Ingestion

Data Owner
LEGEND

policy

plaintext data

wrapped data

sanitized data

Multi-Owner data Sharing for Analytics and Integration respecting Confidentiality and OWNer control - https://mosaicrown.eu


Some Challenges in Data Protection

Issues to be addressed
• Privacy of users
• Data protection
• Query execution
• Private access
• Data integrity and correctness
• Access control enforcement
• Data publication and utility
• Collaborative query execution: authorization enforcement
in distributed query execution


Security and privacy problems

S. De Capitani di Vimercati, S. Foresti, P. Samarati, “Protecting Data and Queries in Cloud-Based Scenarios,” in
SN Computer Science, vol. 4, n. 5, September 2023.


Security and privacy problems

S. De Capitani di Vimercati, S. Foresti, P. Samarati, “Protecting Data and Queries in Cloud-Based Scenarios,” in
SN Computer Science, vol. 4, n. 5, September 2023.


Security and privacy problems

S. De Capitani di Vimercati, S. Foresti, P. Samarati, “Protecting Data and Queries in Cloud-Based Scenarios,” in
SN Computer Science, vol. 4, n. 5, September 2023.


Security and privacy problems

S. De Capitani di Vimercati, S. Foresti, P. Samarati, “Protecting Data and Queries in Cloud-Based Scenarios,” in
SN Computer Science, vol. 4, n. 5, September 2023.


Security and privacy problems

S. De Capitani di Vimercati, S. Foresti, P. Samarati, “Protecting Data and Queries in Cloud-Based Scenarios,” in
SN Computer Science, vol. 4, n. 5, September 2023.

----------------------------------------------------------------


