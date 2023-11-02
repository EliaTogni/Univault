# Privacy and Data Protection in Emerging Scenarios
## Motivations:
- Continuous growth of:
	- government and company databases;
	- user-generated content delivered through collaborative Internet services such as YouTube, Flickr;
	- personally identifiable information collected whenever a user creates an account, submits an application, signs up for newsletters, participates in a survey, ...
- Data sharing and dissemination, for e.g.:
	- study trends or to make useful statistical inference;
	- share knowledge;
	- access on-line services.
- External data storage and computation:
	- cost saving and service benefits;
	- higher availability and more effective disaster protection.

Need to ensure data privacy and integrity are properly protected.

----------------------------------------------------------------

## Outline
- **Privacy in data publication** $\to$ data release/dissemination;
- **Privacy in data outsourcing** $\to$ third parties store and manage data (towards cloud scenarios).

----------------------------------------------------------------

## Privacy in Data Publication

### Statistical DBMS vs statistical data
Release of data to the public for statistical purpose:
- **statistical DBMS**:
	- the DBMS responds only to **statistical queries** (the aggregate ones);
	- need **run time checking** to control information (indirectly) released. Consider a dataset composed by $1000$ respondents, $999$ males and $1$ female, as an example. If the user makes a query which returns a value aggregated from all the **respondents** (the people replying with answers to a survey, the ones the data refers to) and, then, a query which returns a value aggregated from all the males, the DBMS must block the second query because it will expose the female respondent.<br />
	  Consider the same dataset and two different and colluded users as an example. The first one will be able to make the first query and the second one will be able to make the second one. Therefore, togheter they are able to expose the female respondent (**collusion**).
- **statistical data**:
	- publish statistics generated a priori and the user can only access these statistics;
	- control on indirect release performed before publication.

![[StatisticalDBMS.png]]

In the statistical DBMS case, the **transboundary** stands between the user and the DBMS.

![[StatisticalData.png]]

In the statistical data case, the transboundary stands between the statistical data released to the public and the initial data.

----------------------------------------------------------------

### Macrodata vs microdata
In the past data, were mainly released in tabular form (**macrodata**) and through statistical databases. Today many situations require that the specific stored data themselves, called **microdata**, be released, increasing flexibility and availability of information for the users. Microdata are subject to a greater risk of privacy breaches (**linking attacks**).

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
Disclosure relates to attribution of sensitive information to a respondent (an individual or organization). There is disclosure when:
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
- **revealed exactly**;
- **closely estimated**.

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
- **special rules**: define restrictions on the level of details that can be provided in a table (e.g., do not publish or make inferrable earnings within a $ $1000$ interval);
- **threshold rules**: define a cell of a table sensitive if the number of respondents is less than some specified number.

----------------------------------------------------------------

### Disclosure protection techniques for microdata
The classical protection techniques (often applied to protect microdata before computing statistics) can be classified as follows:
- **masking techniques**: transform the original set of data by not releasing or perturbing their values:
	- **non-perturbative**: the original data are not modified, but some data are suppressed and/or some details are removed (e.g., sampling, local suppression, generalization);
	- **perturbative**: the original data are modified (e.g., rounding, swapping).
- **synthetic data generation techniques**: release plausible but synthetic values instead of the real ones:
	- **fully synthetic**: the released dataset contains synthetic data only;
	- **partially synthetic**: the released dataset contains a mix of original and synthetic data.

----------------------------------------------------------------

### The anonymity problem
The amount of privately owned records that describe each citizen’s finances, interests, and demographics is increasing every day. These data are **de-identified** before release, that is, any explicit identifier (e.g., _SSN_) is removed.<br />
De-identification is not sufficient. In fact, most municipalities sell population registers that include the identities of individuals along with basic demographics. These data can then be used for linking identities with de-identified information (**re-identification**).

An example of the anonymity problem.

![[AnonymityProblem.png]]

----------------------------------------------------------------

### Classification of attributes in a microdata table
The attributes in the original microdata table can be classified as:
- **identifiers**: attributes that uniquely identify a microdata respondent (e.g., _SSN_ uniquely identifies the person with which is associated);
- **quasi-identifiers**: attributes that, in combination, can be linked with external information to reidentify all or some of the respondents to whom information refers or reduce the uncertainty over their identities (e.g., _DoB_, _ZIP_, and _Sex_);
- **confidential**: attributes of the microdata table that contain sensitive information (e.g., _Disease_);
- **non confidential**: attributes that the respondents do not consider sensitive and whose release does not cause disclosure.

The more detailed the information at disposal (e.g., a high number of attributes or a sufficient number of detailed attributes), the higher the chance of being able to re-identify a respondent.

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
A microdata table and the external sources of information naturally contain **noise** that decreases the ability to link the information and can also contain data expressed in different forms thus decreasing the ability to link information.

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
- the released data should be indistinguishably related to no less than a certain number of respondents.

The quasi-identifiers are the set of attributes that can be exploited for linking (whose release must be controlled).

The basic idea is to translate the $k$-anonymity requirement on the released data. Each release of data must be such that every combination of values of quasi-identifiers can be indistinctly matched to at least $k$ respondents. This assumption is based on the worst case scenario in which the respondents in the database are population uniques.<br />
In the released table the respondents must be indistinguishable (within a given set) with respect to a set of attributes. $k$-anonymity requires that each quasi-identifier value appearing in the released table must have at least $k$ occurrences. This is a sufficient condition for the satisfaction of $k$-anonymity requirement.

### Generalization and suppression
with **generalization**, the values of a given attribute are substituted by using more general values. Based on the definition of a generalization hierarchy, for example, consider the attribute ZIP code and suppose that a step in the corresponding generalization hierarchy consists in suppressing the least significant digit in the ZIP code. With one generalization step, $20222$ and $20223$ become $2022*$ and $20238$ and $20239$ become $2023*$.<br />
With **suppression**, it is possible to protect sensitive information by removing it. The introduction of suppression can reduce the amount of generalization necessary to satisfy the $k$-anonymity constraint.

----------------------------------------------------------------

### Domain generalization hierarchy
A **generalization relationship** $\leq_{D}$ defines a mapping between domain $D$ and its generalizations. Given two domains $D_i, D_j \in Dom$, $D_i \leq_{D} D_j$ states that the values in domain $D_j$ are generalizations of values in $D_i$. $\leq_{D}$ implies the existence, for each domain $D$, of a **domain generalization hierarchy** $DGH_D = (Dom, \leq_D )$:
- $\forall D_i, D_j, D_z \in Dom: D_i \leq_D D_j, D_i \leq_D D_z \to D_j \leq_D D_z \vee D_z \leq_D D_j$. This property shows that the generalization hiearchy is a chain, that is, there is a **total order** between the elements of the hierarchy;
- all maximal elements of $Dom$ are singleton. As an example, observe the $DGH_{Z_0}$ in the image below.

Given a domain tuple $D_T = \langle D_1, . . . , D_n \rangle$ such that $D_i \in Dom, i = 1, . . . , n$, the domain generalization hierarchy of $D_T$ is $DGH_{DT} = DGH_{D1} \times . . . \times DGH_{Dn}$. The domain generalization hiearchy of $D_T$ defines a [[Reticolo|lattice]].

An example of a domain generalization hierarchy.

![[DomainGeneralizationHierarchy.png]]

----------------------------------------------------------------

### Value generalization hierarchy
A **value generalization relationship** $\leq_V$ associates with each value in domain $D_i$ a unique value in domain $D_j$, direct generalization of $D_i$. $\leq_V$ implies the existence, for each domain $D$, of a **value generalization hierarchy** $VGH_D$.<br />
$VGH_D$ is a [[Albero|tree]] where the leaves are the values in $D$ and the root (i.e., the most general value) is the value in the maximum element in $DGH_D$.

An example of value generalization hierarchy.


![[ValueGeneralizationHierarchy.png]]

----------------------------------------------------------------

### Generalized table with suppression
Let $T_i$ and $T_j$ be two tables defined on the same set of attributes. Table $T_j$ is said to be a **generalization with tuple suppression** of table $T_i$, denoted $T_i \preceq T_j$ , if:
1) $\vert T_j \vert \leq \vert T_i \vert$;
2) the domain $dom(A, T_j)$ of each attribute $A$ in $T_j$ is equal to, or a generalization of, the domain $dom(A, T_i)$ of attribute $A$ in $T_i$;
3) it is possible to define an **injective function** associating each tuple $t_j$ in $T_j$ with a tuple $t_i$ in $T_i$ , such that the value of each attribute in $t_j$ is equal to, or a generalization of, the value of the corresponding attribute in $t_i$.

An example of a generalized table with suppression.

![[GeneralizedTableSuppression.png]]

----------------------------------------------------------------

### $k$-minimal generalization with suppression
Now, it will be provided the definition of **Distance Vector**. Let $T_i (A_1 , . . . , A_n)$ and $T_j (A_1 , . . . , A_n)$ be two tables such that $T_i \preceq T_j$. The distance vector of $T_j$ from $T_i$ is the vector $DV_{i,j} = [d_1 , . . . , d_n]$, where each $d_z, z = 1, . . . , n$, is the length of the unique path between $dom(A_z , T_i)$ and $dom(A_z, T_j)$ in the domain generalization hierarchy $DGH_{D_z}$.

![[DistanceVector.png]]

Let $T_i$ and $T_j$ be two tables such that $T_i \preceq T_j$, and let $MaxSup$ be the specified **threshold of acceptable suppression**. $T_j$ is said to be a **$k$-minimal generalization** of table $T_i$ iff:
1) $T_j$ satisfies $k$-anonymity enforcing minimal required suppression, that is, $T_j$ satisfies $k$-anonymity and $\forall T_z : T_i \preceq T_z, DV_{i,z} = DV_{i,j}$, $T_z$ satisfies $k$-anonymity $\to \vert T_j \vert \geq \vert T_z \vert$. This means that for each table $T_z$, which is a generalization of $T_i$, and with the same $DV$, $T_j$ has more tuples so it does perform less suppression; 
2) $\vert T_i \vert − \vert T_j \vert \leq MaxSup$;
3) $\forall T_z : T_i \preceq T_z$ and $T_z$ satisfies conditions $1$ and $2$ $\to \neg (DV_{i,z} < DV_{i,j})$

An example of $2$-minimal generalizations with $MaxSup = 2$.

![[Example2MinimalGeneralizations.png]]

----------------------------------------------------------------

### Computing a preferred generalization
Different preference criteria can be applied in choosing a preferred minimal generalization, among which:
- **minimum absolute distance** prefers the generalization(s) with the smallest absolute distance, that is, with the smallest total number of generalization steps (regardless of the hierarchies on which they have been taken). It is computed as $\sum_{i = 1}^{N}d_i$;
- **minimum relative distance** prefers the generalization(s) with the smallest relative distance, that is, that minimizes the total number of relative steps (a step is made relative by dividing it over the height of the domain hierarchy to which it refers). It is computed as $\sum_{i = 1}^{N} \frac{d_i}{n_i}$;
- **maximum distribution** prefers the generalization(s) with the greatest number of distinct tuples;
- **minimum suppression** prefers the generalization(s) that suppresses less tuples, that is, the one with the greatest cardinality.

----------------------------------------------------------------

### Classification of k-anonymity techniques
Generalization and suppression can be applied at different levels of granularity. Generalization can be applied at the level of **single column** (i.e., a generalization step generalizes all the values in the column) or single cell (i.e., for a specific column, the table may contain values at different generalization levels).<br />
Suppression can be applied at the level of row (i.e., a suppression operation removes a whole tuple), column (i.e., a suppression operation obscures all the values of a column), or single cells (i.e., a $k$-anonymized table may wipe out only certain cells of a given tuple/attribute).

![[ClassificationKAnonymity.png]]

The notation _not applicable_ refers to the fact that we are able to generalize to a finer level than the level at which we are able to suppress.

The notation $\equiv$ referst to the fact that the ability to generalize and suppress at the same level is equal to generalize the column or the cell at the highest level of the hierarchy. Therefore, the suppression is redundant.

An example of $2$-anonymized tables with regard to different models.

![[2Anonymized1.png]]
![[2Anonymized2.png]]
![[2Anonymized3.png]]

In the last example (_CG_CS_), each tuple has a different $DV$. This type of dataset is better in terms of utility but it worsen the performance.

![[2Anonymized4.png]]

----------------------------------------------------------------

### Algorithms for computing a $k$-anonymous table
The problem of finding minimal $k$-anonymous tables, with attribute generalization and tuple suppression, is **computationally hard**. The majority of the exact algorithms proposed in literature have computational time exponential in the number of the attributes composing the quasi-identifier. When the number $\vert QI \vert$ of attributes in the quasi-identifier is small compared with the number $n$ of tuples in the private table $PT$, these exact algorithms with attribute generalization and tuple suppression are practical.<br />
Many exact algorithms for producing $k$-anonymous tables through attribute generalization and tuple suppression have been proposed.

----------------------------------------------------------------

## Algorithms for AG_TS and AG_
### Computing a $k$-minimal solution
Each path in $DGH_{DT}$ represents a generalization strategy for $PT$. We call **locally minimal generalization** the lowest node of each path satisfying $k$-anonymity. The properties exploited by the algorithm are:
1) each $k$-minimal generalization is locally minimal with respect to a path (but the converse is not true);
2) going up in the hierarchy the number of tuples that must be removed to guarantee $k$-anonymity decreases.

If there is no solution that guarantees $k$-anonymity suppressing less than $MaxSup$ tuples at height $h$, there cannot exist a solution, with height lower than $h$ that guarantees it.<br />
The algorithm adopts a binary search on the lattice of distance vectors:
1) evaluate solutions at height $\lfloor h/2\rfloor$;
2) if there exists at least a solution satisfying $k$-anonymity
	1) then evaluates solutions at height $\lfloor h/4 \rfloor$;
	2) otherwise evaluates solutions at height $\lfloor 3h/4 \rfloor$.
3) until the algorithm reaches the lowest height for which there is a distance vector that satisfies $k$-anonymity.

To reduce the computational cost, it adopts a distance vector matrix that avoids the explicit computation of each generalized table.

An example for computing a $k$-minimal solution.

![[kMinimalSolution1.png]]

Suppose $k = 2$ and $MaxSup = 2$.<br />
Compute first solutions at height $1$ : $GT_{[1,0]}$ and $GT_{[0,1]}$.

![[kMinimalSolution2.png]]

Satisfies $2$-anonymity (suppressing $t_1$ and $t_6$).

![[kMinimalSolution3.png]]

Satisfies $2$-anonymity (suppressing $t_8$ and $t_9$).

----------------------------------------------------------------

### $k$-Optimize algorithm
This algorithm orders the attributes in $QI$ and the values in their domains. It also associates an integer index value with each domain value, following the defined order.

![[kOptimizeAlgorithm1.png]]

A generalization is the **union** of individual index values. The least value in an attribute domain is omitted. E.g., $\{6\}$ corresponds to:
- Race: $\{1\}$, that is: $\langle [\text{asian or black or white}]\rangle$;
- ZIP: $\{4, 6\}$, that is: $\langle[94138 \text{ or } 94139],[94141 \text{ or } 94142]\rangle$.

The order of values within domains has impact on generalization. $k$-Optimize builds a **set enumeration [[Albero|tree]]** over the set $I$ of indexes:

![[kOptimizeAlgorithm2.png]]

The root node of the tree is the empty set. The children of $n$ are the sets obtained by appending a single element $i$ of $I$ to $n$, such that $\forall i' \in n, i > i'$. Each node has a cost that reflects the amount of generalization and suppression of the anonymization represented by the node. This implies that each tuple is associated with a cost that reflects the information loss associated with its generalization or suppression.<br />
$k$-Optimize visits the tree (e.g., using a depth-first search) for searching the anonymization with lowest cost. Since the number of nodes in the tree is $2^{\vert I \vert}$, the visit of the tree is not practical. This implies that a **pruning** strategy is fundamental to reduce computational cost. The node $n$ is pruned iff none of its descendants could be optimal. This determination can be made by computing a lower bound on the cost of the nodes in the subtree rooted at $n$. If the lower bound is greater than the current best cost, node $n$ is pruned.

----------------------------------------------------------------

### Incognito algorithm
$k$-anonymity with respect to a proper subset of $QI$ is a necessary (not sufficient) condition for $k$-anonymity with respect to $QI$. The **Incognito algorithm** works in the following way:
- iteration $1$: check $k$-anonymity for each attribute in $QI$, discarding generalizations that do not satisfy $k$-anonymity;
- iteration $2$: combine the remaining generalizations in pairs and check $k$-anonymity for each couple obtained;
- ...
- iteration $i$: consider all the $i$-uples of attributes, obtained combining generalizations that satisfied $k$-anonymity at iteration $i − 1$. Discard non $k$-anonymous solutions;
- ...
- iteration $\vert QI \vert$ returns the final result.

Incognito adopts a **[[Programmazione Dinamica|bottom-up]]** approach for the visit of $DGH_s$.

An example of the Incognito algorithm.

![[IncognitoExample1.png]]
![[IncognitoExample2.png]]

----------------------------------------------------------------

### Heuristic algorithms
The exact algorithms have complexity exponential in the size of $QI$. Heuristic algorithms have been proposed:
- \[I-02\]: based on genetic algorithms, it solves the $k$-anonymity problem using an incomplete stochastic search method;
- \[MW-04\]: based on simulated annealing for finding locally minimal solutions, it requires high computational time and does not assure the quality of the solution;
- \[FWY-05\]: top-down heuristic to make a table to be released.

$k$-anonymous; it starts from the most general solution, and iteratively specializes some values of the current solution until the $k$-anonymity requirement is violated.

No bounds on efficiency and goodness of the solutions can be given.<br />
Experimental results can be used to assess the quality of the solution retrieved.

----------------------------------------------------------------

## Algorithms for _CS_ and _CG_
### Mondrian multidimensional algorithm
In the **Mondrian multidimensional algorithm**, each attribute in $QI$ represents a dimension. Each tuple in $PT$ represents a point in the space defined by $QI$. Tuples with the same $QI$ value are represented by giving a **multiplicity value** to points. The multi-dimensional space is partitioned by splitting dimensions such that each area contains at least $k$ occurrences of point values. All the points in a region are generalized to a unique value. The corresponding tuples are substituted by the computed generalization.<br />
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

An example of the Mondrian multidimensional algorithm.<br />
We wished $k=3$.

![[MondrianMultidimensionalExample1.png]]
![[MondrianMultidimensionalExample2.png]]

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

![[kAnonimityRevised.png]]

----------------------------------------------------------------

## Attribute Disclosure
### $2$-anonymous table according to the _AG_ model
$k$-anonymity is vulnerable to some attacks:

![[2AnonymousTableExample.png]]

----------------------------------------------------------------

### Homogeneity of the sensitive attribute values
All tuples with a quasi-identifier value in a $k$-anonymous table may have the same sensitive attribute value:
- an adversary knows that Carol is a black female and that her data are in the microdata table;
- the adversary can infer that Carol suffers from short breath.

![[SensitiveAttributeValuesHomogeneity.png]]

----------------------------------------------------------------

### Background knowledge
Based on prior knowledge of some additional external information:
- an adversary knows that Hellen is a white female and she is in the microdata table;
- the adversary can infer that the disease of Hellen is either chest pain or short breath;
- the adversary knows that Hellen runs $2$ hours a day and therefore that Hellen cannot suffer from short breath;

Therefore, the adversary is able to infer that Hellen’s disease is chest pain.

![[BackgroundKnowledgeExample.png]]

----------------------------------------------------------------

### $\ell$-diversity
A $q$-block (i.e., set of tuples with the same value for $QI$) is $\ell$-diverse if it contains at least $\ell$ different “well-represented” values for the sensitive attribute. "Well-represented" has different definitions based on entropy or recursion (e.g., a q-block is $\ell$-diverse if removing a sensitive value it remains $(\ell-1)$-diverse).<br />
$\ell$-diversity means that an adversary needs to eliminate at least $\ell-1$ possible values to infer that a respondent has a given value.<br />
A table is $\ell$-diverse if all its $q$-blocks are $\ell$-diverse. This implies that the homogeneity attack is not possible anymore and, therefore, that the background knowledge attack becomes more difficult.<br />
$\ell$-diversity is monotonic with respect to the generalization hierarchies considered for $k$-anonymity purposes.<br />
Any algorithm for $k$-anonymity can be extended to enforce the $\ell$-diverse property BUT $\ell$-diversity leaves space to attacks based on the distribution of values inside $q$-blocks (**skewness and similarity attacks**):

----------------------------------------------------------------

### Skewness attack
**Skewness attack** occurs when the distribution in a $q$-block is different than the distribution in the original population.

An example of the skewness attack.<br />
$20\%$ of the population suffers from diabetes and $75\%$ of tuples in a $q$-block have diabetes. This implies that people in the $q$-block have higher probability of suffering from diabetes.

![[SkewnessAttackExample.png]]

----------------------------------------------------------------

### Similarity attack
Similarity attack happens when a $q$-block has different but semantically similar values for the sensitive attribute.

![[SimilarityAttackExample.png]]

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

![[ExternalKnowledgeExample1.png]]

Released table is $4$-anonymized but suppose that an adversary knows that Harry, born in $64$ and living in area $94139$, is in the table. This helps discover that Harry belongs to the second group and, therefore, that Harry has aids with confidence $\frac{1}{4}$.

![[ExternalKnowledgeExample2.png]]

From another dataset, the adversary knows that George (who is in the table, is born in $'64$, and leaves in area $941**$) has flu. This implies that Harry has aids with confidence $\frac{1}{3}$.

![[ExternalKnowledgeExample3.png]]

From personal knowledge, the adversary knows that Harry does not have short breath. Therefore, Harry has aids with confidence $\frac{1}{2}$.

![[ExternalKnowledgeExample4.png]]

----------------------------------------------------------------

### Multiple independent releases
Data may be subject to frequent changes and may need to be published on regular basis. The multiple release of a microdata table may cause information leakage since a malicious recipient can correlate the released datasets.

An example of multiple independent releases.

![[MultipleReleasesExample1.png]]

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

![[kAnonymitySocialNetworks.png]]

Idea: adapt the $k$-anonymity requirement to social networks. A vertex $u$ is $k$-anonymous if there exist at least $k − 1$ other vertices $v_1 , . . . , v_{k−1}$ such that the sub-graphs induced by the neighborhood of $u$ and the neighborhood of $v_1 , . . . , v_{k−1}$ are **isomorphic**. $G'$ is $k$-anonymous if every vertex $u$ in $G'$ is $k$-anonymous.<br />
Intuition: add fake edges to satisfy the requirement.

If $G'$ is $k$-anonymous, with the neighborhood background knowledge, any vertex in $G$ cannot be re-identified in $G'$ with confidence larger than $1/k$.

Goal: compute a $k$-anonymous version of a social network graph minimizing the number of added edges.

----------------------------------------------------------------

#### $k$-anonymous data mining
Privacy preserving data mining techniques depend on the definition of privacy capturing what information is sensitive in the original data and should then be protected.<br />
$k$-anonymous data mining aims at ensuring that the data mining results do not violate the $k$-anonymity requirement over the original data.<br />
Threats to $k$-anonymity can arise from performing mining on a collection of data maintained in a private table $PT$ subject to $k$-anonymity constraints. E.g.:
- **association rule mining**;
- **classification mining**.

##### Association rule mining

![[AssociationRuleMining.png]]

$\{$divorced$\} \to \{$M$\}$ with support $\frac{19}{66}$ and confidence $\frac{19}{21}$.<br />
If $QI$ includes _Marital_status_ and _Sex_, then $\{$divorced$\} \to \{$M$\}$:
- violates $k$-anonymity for any $k > 19$;
- violates also $k$-anonymity for any $k > 2$ since it reflects the existence of $2$ divorced and female respondents.

![[ClassificationMiningDecisionTree.png]]

Path $\langle F,35 \rangle$ implies the existence of $2$ females working $35$ hours.<br />
paths $\langle F \rangle$ $(\#11)$ and $\langle F,50 \rangle$ $(\#9)$ imply the existence of $2$ females who do not work $50$ hours per week.<br />
If $QI$ includes _Sex_ and _Hours_ $\to$ $k$-anonym. is violated for any $k > 2$. (????)

----------------------------------------------------------------

##### Approaches for combining k-anonymity and data mining

![[ApprochesCombiningkAnonymityDM.png]]

----------------------------------------------------------------

#### k-anonymity in location-based services
Protect identity of people in locations by considering always locations that contain no less than $k$ individuals:
- enlarge the area to include at least other $k-1$ users ($k$ anonymity);

![[kAnonymityLBServices1.png]]
![[kAnonymityLBServices2.png]]

- protect the location of users (**location privacy**) $\to$ obfuscate the area so to decrease its precision or confidence;

![[PrivacyLB1.png]]
![[PrivacyLB2.png]]

- protect the location path of users (trajectory privacy) $\to$ block tracking by mixing trajectories.

![[PrivacyLB3.png]]
![[PrivacyLB4.png]]

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

![[AOL3.png]]


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

![[AOL5.png]]

----------------------------------------------------------------

#### Netflix prize data study
In $2006$, Netflix (the world largest online movie rental service), launched the "Netflix Prize" (a challenge that lasted almost three years). There was a prize of USD $1$ million to be awarded to those who could provide a movie recommendation algorithm that improved Netflix’s algorithm by $10\%$. Netflix provided $100$ million records revealing how nearly $500,000$ of its users had rated movies from Oct.$’98$ to Dec.$’05$. In each record Netflix disclosed the movie rated, the rating assigned ($1$ to $5$), and the date of the rating.<br />
Only a sample (one tenth) of the database was released. Some ratings were perturbed (but not much, not to alter statistics). Identifying information (e.g., usernames) was removed, but a unique user identifier was assigned to preserve rating-to-rating continuity. Release was not $k$-anonymous for any $k > 1$.<br />
Very little auxiliary information is needed to de-anonymize an average subscriber record:
- with $6$ movie ratings and dates ($\pm 2$ weeks), $99\%$ of records uniquely identified;
- with $2$ movie ratings and dates ($\pm 3$ days), $68\%$ of records uniquely identified;
- $84\%$ of subscribers in the dataset uniquely identified by knowing $6$ obscure (outside the top $500$) movies.
Auxiliary information can be obtained from other sources (e.g., user ratings from IMDb users).

Movies may reveal your political orientation, religious views, or sexual orientations (Netflix was sued by a lesbian for breaching her privacy).

----------------------------------------------------------------

#### JetBlue
In $2003$, JetBlue Airways Corporation gave the travel records of five million customers to Torch Concepts (a private DoD contractor) for an antiterrorism study to track high-risk passengers or suspected terrorists. Torch Concepts purchased additional customer demographic information (e.g., SSN) about these passengers from Axciom, one of the largest data aggregation companies in the U.S. The information from JetBlue and Axciom was then used by Torch Concepts to develop passenger profiles. Claims of violation of JetBlue Privacy Policy.

----------------------------------------------------------------

#### Fitness app
An interactive map shows the whereabouts of people who use fitness devices such as Fitbit also reveals highly sensitive information about the locations and activities of soldiers at U.S. military bases.

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

![[SensitiveValueDistributionsExample.png]]

An example of the inference channel.

![[InferenceChannelExample1.png]]
![[InferenceChannelExample2.png]]

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

![[CounteractingInferenceChannels.png]]

----------------------------------------------------------------

### Privacy and genomic data
Genomic information is an opportunity for medicine but there are several privacy issues to be addressed. E.g., human genome:
- identifies its owner;
- contains information about ethnic heritage, predisposition to several diseases, and other phenotypic traits;
- discloses information about the relatives and descendants of the genome’s owner.

----------------------------------------------------------------

### Individuals’ re-identification
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

Analysts at Target identified $\sim 25$ products that assign each shopper a pregnancy prediction score. E.g., woman, $23$ y.o., buying in March cocoa-butter lotion, a purse large enough to double as a diaper bag, zinc and magnesium supplements and a bright blue rug $\to$ $87\%$ due late August. Due time in a small window to send coupons timed to very specific stages of a pregnancy.

Mining data reveals customers’ major life events (e.g., graduating from college or getting a new job or moving to a new town):
- shopping habits became flexible, predictable, and potential gold mines for retailers;
- between $2002$ (starting of similar campaigns) and $2010$ Target’s revenues grew from $ $44$B to $ $67$B.

----------------------------------------------------------------

### Social media
#### Profiling in social media
Our social media activities and likes may reveal sensitive information.

![[ProfilingInSocialMedia.png]]

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

----------------------------------------------------------------

#### Cambridge Analytica scandal
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

![[Outline.png]]

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

An example of a statistical DBMS.

![[StatisticalDBMSExample.png]]

Query: sum of the incomes of females with major in EE.<br />
Result: it reveals the income of Baker (only female with EE) $\to$ the query is sensitive so it is necessary to block statistics computed over a single (or few) individual.

Another example of a Statistical DBMS.
Query $1$: sum of the incomes of individuals with major in EE.

![[StatisticalDBMSExample2-1.png]]

Result: it does not reveal the income of any individual ($240k$) $\to$ the query is not sensitive<br />
Query $2$: sum of the incomes of males with major in EE.

![[StatisticalDBMSExample2-2.png]]

Result: it does not reveal the income of any individual ($190k$) $\to$ the query is not sensitive.<br />
Query 3 = sum of the incomes of females with major in EE ($50k$) = income of Baker $\to$ the combination of queries is sensitive.

![[StatisticalDBMSExample2-3.png]]

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

An example of special rules.<br />
Social Security Administration (SSA) rules prohibit publishing tables where the value of a cell:
- is equal to a marginal total or:
- would allow users to determine:
	- an individual’s age within a five-year interval;
	- earnings within a $ $1,000$ interval;
	- benefits within a $ $50$ interval.
- to satisfy special rules:
	- table restructuring or category combination.

Another example of special rules.<br />
Number of employees by department and annual income (in $K$ Euro).<br />
Special rule: Income within a $5K$ Euro interval.
 
![[SpecialRuleExample.png]]

Cells that cannot be released:
- its value is equal to total;
- the table allows users to determine benefit within a $ $5k$ interval:
	- between $23K$ and $25K$ for _Dept$4$_;
	- between $23K$ and $27K$ for _Dept$2$_.

Another example of Special rules (U.S. HIPAA).<br />
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

An example of Table with disclosures.<br />
Table containing information about employees by company and education level.

![[TableDisclosuresExample.png]]

A cell with fewer than 5 respondents is defined as sensitive. Suppress one additional cell for each row/column with a sensitive cell suppressed.

----------------------------------------------------------------

### Table restructuring
An example of Table restructuring.<br />
Number of employees by department and annual income (in $K$ Euro).<br />
Special rule: Income within a $5K$ Euro interval.<br />
To protect confidentiality, the table can be restructured and rows or columns combined (“rolling-up categories”).

![[TableRestructuringExample1.png]]
![[TableRestructuringExample2.png]]

Combining _Dept$1$_ with _Dept$2$_ and _Dept$3$_ with _Dept$4$_ does offer the required protection.

![[TableRestructuringExample3.png]]

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
Table containing information about employees by company and education level.

![[CellSuppressionExample1.png]]

A cell with fewer than 5 respondents is defined as sensitive.

![[CellSuppressionExample2.png]]

Suppressing sensitive cells is not sufficient:<br />
$35 = D1 + 10 + 10 + 14 \to D1 = 1$<br />
$30 = D2 + 10 + 10 + 7 \to D2 = 3$<br />
$50 = 15 + 20 + D4 + 12 \to D4 = 3$
$35 = 12 + 14 + 7 + D6 \to D6 = 2$
$20 = 15 + 1 + 3 + D3 \to D3 = 1$
$25 = 3 + 10 + 10 + D5 \to D5 = 2$

![[CellSuppressionExample3.png]]

Suppress one additional cell for each row/column with a sensitive cell suppressed.<br />
The table appears to offer protection to the sensitive cells but:
$(15 + D1 + D2 + D3 ) + (20 + D4 + D5 + 15) - (D1 + D4 + 10 + 14) - (D2 + D5 + 10 + 7)$
$= 20 + 55 - 35 - 30 \to D3 = 1$

![[CellSuppresionExample4.png]]
![[CellSuppresionExample5.png]]
![[CellSuppresionExample6.png]]
![[CellSuppresionExample7.png]]

The table provides adequate protection for the sensitive cells but out of a total of $16$ cells, only $7$ cells are published, while $9$ are suppressed.

![[CellSuppressionExample8.png]]

----------------------------------------------------------------

### Rounding
To reduce data loss due to suppression, use **rounding of values** to a multiple of the sensitivity threshold:
- **random**: random decision on whether cell values will be rounded up or down. The sum of the values in a row/column may be different from the published marginal totals (recipients may lose confidence in the data);
- **controlled**: ensure that the sum of published entries is equal to published marginal totals.

Note: all cell values must be a multiple of the threshold value.

An example of random rounding.

![[RandomRoundingExample.png]]

----------------------------------------------------------------

### Controlled rounding

An example of controlled rounding.

![[ControlledRoundingExample.png]]

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

An example of confidentiality edit.<br />
Records for the $20$ employees of company Alfa.

![[ConfidentialityEditExample.png]]

1) take a sample of records from the microdata file (say a $10\%$ sample, $2$ tuples for company Alfa). Assume that records number $4$ and $17$ were selected as part of our $10\%$ sample;
2) since we need tables by company and education level, we find a match in some other company on the other variables (race and salary, company totals for these variables remain unchanged):
	- a match for record $4$ (Pete) is found in company Beta, the match is with Alonso, who has very high education;
	- Record $17$ (Mike) is matched with George in company Delta, who has medium education.
3) we also assume that part of the randomly selected $10\%$ sample from other companies match records in company Alfa:
	- one record from company Delta (June with high education) matches with Virginia (record $12$);
	- One record from company Gamma (Heather with low education) matched with Nancy (record $20$).
4) after all matches are made, swap attributes on matched records;
5) use the swapped data file directly to produce tables.


Take a sample of records from the microdata file (say a $10\%$ sample). Since we need tables by company and education level, we find a match in some other company on the other variables.

![[ConfidentialityEditExample1.png]]
![[ConfidentialityEditExample2.png]]


Part of the randomly selected $10\%$ sample from other companies match records in company Alfa.

![[ConfidentialityEditExample3.png]]

![[ConfidentialityEditExample4.png]]

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

The largest value $x_1$ is the most exposed.

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
Formally, the cell is protected for any $p$ such that:

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

Formally, a cell is protected if:

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
While the suppression rules can be published, parameter values should be kept confidential.

For example, assume that:
- $p$-percent rule is used with $p=20\%$ and the same value is used for complementary suppression;
- a cell $x$ with value $100$ has been suppressed along with other suitable complementary cells;
- by solving a system of linear equations, the upper bound is $120$ and the lower bound is $80$: $80 \leq x  \leq 120 \to x =100$.

Once the value for one suppressed cell has been uniquely determined, other cell values can easily be derived.

An example of the protection of tables of magnitude data.

![[ProtectionMagnitudeDataExample1.png]]
![[ProtectionMagnitudeDataExample2.png]]

$(n,k)$ rule with $n=1$, $k=90$ implies that a cell is sensitive if one respondent contributes more than $90\%$.

![[ProtectionMagnitudeDataExample3.png]]

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

![[MaskingTechniquesClassification.png]]

#### Non Perturbative Techniques
##### Sampling
The protected microdata table is obtained as a sample of the original microdata table. Since there is uncertainty about whether or not a specific respondent is in the sample, reidentification risk decreases.

An example of sampling.

![[SamplingExample1.png]]

Compute a sample of $3$ tuples out of $14$.

![[SamplingExample2.png]]

----------------------------------------------------------------


##### Local suppression
It suppresses the value of an attribute (i.e., it replaces it with a missing value) thus limiting the possibilities of analysis. This technique blanks out some attribute values (sensitive cells) that are likely to contribute significantly to the disclosure risk of the tuple involved.

An example of local suppression.

![[LocalSuppressionExample1.png]]

Suppress cells that contribute significantly to re-identification.

![[LocalSuppressionExample2.png]]

----------------------------------------------------------------

##### Global recoding
The domain of an attribute is partitioned into disjoint intervals, usually of the same width, and each interval is associated with a label. The protected microdata table is obtained by replacing the values of the attribute with the label associated with the corresponding interval.

An example of global recoding.

![[GlobalRecodingExample1.png]]

Global recoding on _Income_:
$[150-199]$: low, $[200-289]$: medium, $[290-310]$ high.

![[GlobalRecondingExample2.png]]

----------------------------------------------------------------

##### Top-coding and bottom-coding
**Top-coding** defines an upper limit (top-code) for each attribute to be protected. Any value greater than it is replaced with a flag that tells the user what the top-code is and that this value exceeds it. It can be applied to categorical attributes that can be linearly ordered as well as to continuous attributes.

**Bottom-coding** defines a lower limit (bottom-code) for each attribute to be protected. Any value lower than it is replaced with a flag that tells the user what the bottom-code is and that this value is less than it. It can be applied to categorical attributes that can be linearly ordered as well as to continuous attributes

An example of top-coding and bottom-coding.

![[TopCodingBottomCodingExample1.png]]

Top-coding on _Holidays_ for values higher than $30$.<br />
Bottom-coding on _Holidays_ for values lower than $10$.

![[TopCodingBottomCodingExample2.png]]

----------------------------------------------------------------

##### Generalization
It replaces values with more general values. Typically based on the definition of a generalization hierarchy, where the most general value is the root and the leaves correspond to the most specific values.

Different generalized microdata tables can be built, depending on the number of generalization steps applied.

An example of generalization.

![[GeneralizationExample1.png]]

Generalize attribute _DoB_ to the granularity of month.

![[GeneralizationExample2.png]]

----------------------------------------------------------------

#### Perturbative Techniques
##### Random noise
It perturbs a sensitive attribute by adding or by multiplying it with a random variable with a given distribution. It is necessary to decide whether or not to publish the distribution(s) used to add noise to the data.<br />
Publishing the distribution(s) might increase disclosure risk of the data.

An example of random noise.

![[RandomNoiseExample1.png]]

Additive noise over attribute _Holidays_ (to preserve average).

![[RandomNoiseExample2.png]]

![[RandomNoiseExample3.png]]

----------------------------------------------------------------

##### Swapping
A small percent of records are matched with other records in the same file, perhaps in different geographic regions, on a set of predetermined variables. The values of all other variables on the file are then swapped between the two records.

This technique reduces the risk of reidentification because it introduces uncertainty about the true value of a respondentent’s data.

An example of swapping.

![[SwappingExample1.png]]

Swap _Holidays_ and _Income_ for tuples with the same _Sex_ and _MarStat_. Identify $3$ pairs of tuples with same _Sex_ and _MarStat_.

![[SwappingExample2.png]]

Swap _Holidays_ and _Income_.

![[SwappingExample3.png]]

----------------------------------------------------------------

##### Micro-aggregation (blurring)
It consists in grouping individual tuples into small groups of a fixed dimension $k$. The average over each group is published instead of individual values.<br />
Groups are formed by using maximal similarity criteria.

There are different variations of micro-aggregation:
-  the average can substitute the original value only for a tuple in the group or for all of them;
- different attributes can be protected through micro-aggregation using the same or different grouping;
- ...

An example of micro-aggregation (blurring).

![[MicroAggregationBlurringExample1.png]]

Group tuples based on _Sex_ and _MarStat_

![[MicroAggregationBlurringExample2.png]]
![[MicroAggregationBlurringExample3.png]]

Substitute _Income_ with the average for each group.

----------------------------------------------------------------

## Microdata Disclosure Protection Techniques: Synthetic Techniques
### Synthetic techniques
Since the statistical content of the data is not related to the information provided by each respondent, a model well representing the data could in principle replace the data themselves.

An important requirement for the generation of synthetic data is that the synthetic and original data should present the same quality of statistical analysis.

The main advantage of this class of techniques is that the released synthetic data are not referred to any respondent and therefore their release cannot lead to reidentification.

![[SyntheticTechniques.png]]

----------------------------------------------------------------

# Privacy and Data Protection in Emerging Scenarios
### ICT ecosystem
Advancements in the ICT and networks have changed our society. $5$G and beyond, infrastructures and services are more powerful, efficient, and complex. ICT and network advancements are enabling factors for a smart society. Everything is getting smart: smart cars, augmented reality, smart entertainment systems, museum and exhibitions, smart e-commerce, smart governance, healthcare, intelligent shop, smart toothbrush...

----------------------------------------------------------------

### Smart society

slide 4/34
slide 5/34

The advantages of smart services and security are:
- better protection mechanisms;
- business continuity and disaster recovery;
- prevention and response.

While the disadvantages are:
- more complexity, that is, theweakest link becomes a point of attack:
	- system hacking;
	- improper information leakage;
	- data and process tampering.
- explosion of damages and violations;
- loss of control over data and processes.

----------------------------------------------------------------

### The role of data in a smart environment

slide 11/34

This implies better governance and intelligent systems.

----------------------------------------------------------------

### Cloud computing
The **Cloud** allows users and organizations to rely on external providers for storing, processing, and accessing their data:
- high configurability and economy of scale;
- data and services are always available;
- scalable infrastructure for applications.

Users lose control over their own data. This fact causes new security and privacy problems.Need solutions to protect data and to securely process them in the cloud.

#### Cloud computing: Today
Cloud Service Providers (CSPs) apply security measures in the
services they offer but these measures protect only the perimeter and
storage against outsiders

data owner

cloud

data owner

cloud

functionality implies full trust in the CSP that has full access to the da

protection but limited functionality since the CSP cannot access data


functionality but no protection
(key is with the CSP)

• functionality implies full trust in the CSP that has full access to the
data (e.g., Google Cloud Storage, iCloud)

protection but limited functionality since the CSP cannot access data


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

----------------------------------------------------------------

#### Cloud computing: New vision
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


Data protection – Confidentiality
• Minimize release/exposition
◦ correlation among different data sources
◦ indirect exposure of sensitive information
◦ de-identification ̸= anonymization

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

Privacy and Data Protection in Emerging Scenarios

Privacy of users

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

2/51

Privacy of users’ identities
Users may wish to remain anonymous or to not disclose much
information about themselves when operating in the cloud
• Anonymous communication techniques (e.g., Mix networks, onion
routing, Tor, Crowds)
• Privacy in location-based services [ACCDS-11, ALS-12]
• Attribute-based access control [ACCDS-11, BS-02, DFJPPS-12]
◦ instead of declaring their identities, users prove they satisfy
properties needed for the access
◦ changes the way access control process works

• Support for user-privacy preferences in information disclosure
[ACCM-12, ADFPS-10a, ADFPS-10b, ADFPS-12, CCKT-05, KOB-08, YFAR-08]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

3/51

User empowerment
Users may want to specify policies regulating information disclosed:
• when using external servers for sharing/disseminating their own
resources (e.g., Facebook)
• when releasing information in digital interactions (e.g., releasing
credit card to access a service)
Two aspects of protection:
• direct release regulates to whom, when, for what purpose a user
agrees to release information
• secondary usage regulates usage and further dissemination of
user information by the receiving parties (e.g., P3P)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

4/51

User empowerment
Users may want to specify policies regulating information disclosed:
• when using external servers for sharing/disseminating their own
resources (e.g., Facebook)
• when releasing information in digital interactions (e.g., releasing
credit card to access a service)
Two aspects of protection:
• direct release regulates to whom, when, for what purpose a user
agrees to release information
• secondary usage regulates usage and further dissemination of
user information by the receiving parties (e.g., P3P)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

4/51

Direct release – Several contributions (1)
The research community has been very active and produced several
approaches for regulating interactions among unknown parties through
the deﬁnition of attribute-based access control mechanisms
• What users can do depend on assertions (attributes) they can
prove presenting certiﬁcates
• Access control does not return “yes/no” anymore, but responds
with requirements that the requestor must satisfy to get access
• Not only the server needs to be protected . . .
◦ clients want guarantees too (e.g., privacy)
=⇒ some form of negotiation may be introduced

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

5/51

Direct release – Several contributions (2)
Large body of proposals (e.g., [BS-02; LWBW-08 WCJS-97, YWS-03])
addressing:
• credential/attribute-based policy speciﬁcations
• policy evaluation with partial information
• policy conﬁdentiality support
• policy communication and dialog
• negotiation strategies and trust management
• evaluation of termination, correctness, no improper information
disclosure in the negotiation
=⇒ typically using logic-based languages
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

6/51

Interactive access control

• No conditions by the client
Multi-step negotiation
Two-step interaction
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

7/51

Interactive access control

• No conditions by the client
• Multi-step negotiation
Two-step interaction
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

7/51

Interactive access control

• No conditions by the client
• Multi-step negotiation
• Two-step interaction
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

7/51

Existing/emerging technologies supporting ABAC
• U-Prove/Idemix: provide advance credential management
technologies (selective release, proof of possession, . . .)
• XACML: standard today for interoperation of access control
policies
◦ expressive but with limited features for reasoning about digital
certiﬁcates (e.g., attribute nationality should be certiﬁed by a
passport) or policy dialog

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

8/51

User privacy preferences
Access control speciﬁcations do not always ﬁt well with the problem at
the client (user) side
+ they are expressive and powerful
+ they allow users to specify whether some information can be or
cannot be released
− they do not allow users to express the fact that they might prefer to
release some information over other when given the choice
=⇒ Need to provide users with means to effectively deﬁne
privacy preferences on the release of their information

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

9/51

User privacy preferences: Desiderata – 1
• Context-based preferences
◦ e.g., “I want to disclose my credit card to ﬁnancial servers in the
context of payment transactions only”

• Forbidden disclosures
◦ e.g., “I do not want to release both my name and my nickname”

• Sensitive associations
◦ e.g., “The association between my zip code and my date of birth is
more sensitive than the two pieces of information singularly taken”

• Limited disclosure
◦ e.g., “I do not mind saying that I am older than 30 but I do not want
to release my age”

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

10/51

User privacy preferences: Desiderata – 2
• Instance-based preferences
◦ e.g., “I prefer to release my credit card over my bank account if the
credit card expires in less than one year”

• History-based preferences
◦ e.g., “I prefer to release my county over my phone if you already
have my zip code”

• Proof-based preferences
◦ e.g., “I prefer to release the proof that I have an Italian passport
rather than releasing the passport itself”

• Non-linkability preferences
◦ e.g., “I prefer to release the piece of information that, merged with
the other party knowledge, identiﬁes me the less”

• ...
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

11/51

User privacy preferences: Some approaches
• Cost-sensitive trust negotiation

• Point-based trust management model

• Logic-based minimal credential disclosure

• Privacy preferences in credential-based interactions

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

12/51

Cost-Sensitive Trust Negotiation

W. Chen, L. Clarke, J. Kurose, D. Towsley, “Optimizing Cost-Sensitive Trust-Negotiation Protocols,” in Proc. of INFOCOM, Miami,
FL, USA, March 2005.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

13/51

Cost-sensitive trust negotiation – 1
• Two parties (client and server) interact with each other to establish
mutual trust by the exchange of credentials
=⇒ trust negotiation protocol
• The disclosure of a credential is regulated by a policy that
speciﬁes the prerequisite conditions that must be satisﬁed to
disclose the credential
• Credentials and policies are associated with a cost
=⇒ more sensitive credentials/policies have higher cost
• The goal is to minimize the total sensitivity cost of credentials and
policies disclosed during a trust negotiation
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

14/51

Cost-sensitive trust negotiation – 2
Policies
Client:

Costs

Policy graph

• cost(c1 )=2

• c1 ← s1

• cost(c2 )=7

• c2 ← s3

• cost(c3 )=2

• c3 ← s2

• cost(c4 )=1

• c4 ← s2

• cost(s)=5
• cost(s1 )=2

Server:
• s← (c1 ∧ c4 )∨ c2

• cost(s2 )=0
• cost(s3 )=0

• s1 ← c3 ∨ c4
• s2 ← TRUE
• s3 ← TRUE

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

15/51

Cost-sensitive trust negotiation – 2
Policies
Client:

Costs

Policy graph

• cost(c1 )=2

• c1 ← s1

• cost(c2 )=7

• c2 ← s3

• cost(c3 )=2

• c3 ← s2

• cost(c4 )=1

• c4 ← s2

• cost(s)=5
• cost(s1 )=2

Server:
• s← (c1 ∧ c4 )∨ c2

• cost(s2 )=0
• cost(s3 )=0

• s1 ← c3 ∨ c4
• s2 ← TRUE
• s3 ← TRUE

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

15/51

Cost-sensitive trust negotiation – 2
Policies
Client:

Costs

Policy graph

• cost(c1 )=2

• c1 ← s1

• cost(c2 )=7

• c2 ← s3

• cost(c3 )=2

• c3 ← s2

• cost(c4 )=1

• c4 ← s2

• cost(s)=5
• cost(s1 )=2

Server:
• s← (c1 ∧ c4 )∨ c2

• cost(s2 )=0
• cost(s3 )=0

• s1 ← c3 ∨ c4
• s2 ← TRUE
• s3 ← TRUE

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

15/51

Cost-sensitive trust negotiation – 3
• Provide a mechanism for regulating the release of credentials
according to their sensitivity
• Put focus on negotiation rather than on client control
• Support only coarse-grain (credentials) speciﬁcations; sensitive
associations as well as forbidden releases cannot be expressed
• Possession-sensitive credentials (e.g., dialysis certiﬁcate) are not
considered
• Minimizing overall cost (client + server) has limited applicability
• Linear combination of costs may not be always desirable
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

16/51

Point-based Trust Management Model

D. Yao, K.B. Frikken, M.J. Atallah, R. Tamassia, “Private Information: To Reveal or not to Reveal,” in ACM TISSEC, vol. 12, no. 1,
October 2008.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

17/51

Point-based trust management model – 1
How to get a New York Driver License . . .
• Documents that prove your name are assigned a point value; you
must present identiﬁcation that totals six points or more:
◦ US Passport or Passport Card [4 points]
◦ Certiﬁcate of Naturalization (Form N-550, N-570) [3 points]
◦ Certiﬁcate of Citizenship (Form N-560 and N-561) [3 points]
◦ NYS Certiﬁcate of Title [2 points]
◦ US Social Security Card [2 points]
◦ Bank statement [1 point]
◦ ...
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

18/51

Point-based trust management model – 2
• A server associates a given number of points with each credential
◦ represent the trustworthiness of its holder
◦ the points associated with credentials are private

• A server requires a minimum total threshold of points before
granting a client access to a resource
◦ the threshold is private

• A client values each of its credentials with a private score
◦ indicates the sensitivity of the credential and should be kept private

Goal: ﬁnd a subset of the client credentials that satisﬁes the threshold
ﬁxed by the server and that has minimum privacy value to the client

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

19/51

Point-based trust management model – 3
Threshold of accessing a resource: 10
S ERVER
Point value

College ID Driver’s license Credit card SSN
3
6
8
10

C LIENT
College ID Driver’s license Credit card SSN
Sensitivity score
10
30
50
100

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

20/51

Point-based trust management model – 3
Threshold of accessing a resource: 10
S ERVER
Point value

College ID Driver’s license Credit card SSN
3
6
8
10

C LIENT
College ID Driver’s license Credit card SSN
Sensitivity score
10
30
50
100

Client’s options:
• SSN [Points: 10; Sensitivity: 100]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

20/51

Point-based trust management model – 3
Threshold of accessing a resource: 10
S ERVER
Point value

College ID Driver’s license Credit card SSN
3
6
8
10

C LIENT
College ID Driver’s license Credit card SSN
Sensitivity score
10
30
50
100

Client’s options:
• SSN [Points: 10; Sensitivity: 100]
• College ID, Credit card [Points: 11; Sensitivity: 60]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

20/51

Point-based trust management model – 3
Threshold of accessing a resource: 10
S ERVER
Point value

College ID Driver’s license Credit card SSN
3
6
8
10

C LIENT
College ID Driver’s license Credit card SSN
Sensitivity score
10
30
50
100

Client’s options:
• SSN [Points: 10; Sensitivity: 100]
• College ID, Credit card [Points: 11; Sensitivity: 60]
• Driver’s license, Credit card [Points: 14; Sensitivity: 80]
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

20/51

Point-based trust management model – 3
Threshold of accessing a resource: 10
S ERVER
Point value

College ID Driver’s license Credit card SSN
3
6
8
10

C LIENT
College ID Driver’s license Credit card SSN
Sensitivity score
10
30
50
100

Client’s options:
• SSN [Points: 10; Sensitivity: 100]
• College ID, Credit card [Points: 11; Sensitivity: 60]
• Driver’s license, Credit card [Points: 14; Sensitivity: 80]
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

20/51

Point-based trust management model – 4
Problem
• The problem consists in fulﬁlling the access threshold while
disclosing the least amount of sensitive information (Credential
Selection Problem)
Solution
• The problem is converted into a knapsack problem and solved
with a dynamic programming approach
• A secure two-party dynamic programming protocol is used for
solving the knapsack problem
◦ the server and user jointly compute the optimal sum of privacy
scores for the released credentials without revealing their private
parameters
◦ the protocol uses homomorphic encryption
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

21/51

Point-based trust management model – 5
• The solution can model only the additive characteristic of privacy
• The client and server must agree on the universe of possible
credential types (it may compromise the conﬁdentiality of the
server policy)
• Support only coarse-grain (credential) speciﬁcation; sensitive
associations as well as forbidden releases cannot be expressed
• Put focus on negotiation rather than on client control

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

22/51

Logic-based Minimal Credential Disclosure

P. Kärger, D. Olmedilla, W.-T. Balke, “Exploiting Preferences for Minimal Credential Disclosure in Policy-Driven Trust Negotiations,”
in Proc. of SDM, Auckland, New Zealand, August 2008.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

23/51

Logic-based minimal credential disclosure – 1
• Parties are involved in a trust negotiation where the release of
credentials is regulated by given policies
• Each credential contains a single attribute
• By matching the policies of the involved parties, several
negotiation paths (i.e., credential disclosure sets) will make the
negotiation succeed
• Logic-based approach for users to specify privacy preferences
exploited for selecting a negotiation path

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

24/51

Logic-based minimal credential disclosure – 2
On-line book shop’s policy

cname ← TRUE purchase ← pregister ∧ ppayment
pregister ← (cname ∧ cbdate ∧
cbdate ← cbbb
(cemail ∨ cpcode )) ∨
ctelephone ← cbbb
cid ∨ cpassport ∨
cemail ← cbbb
((cname ∨ cemail ) ∧ cid )
cpcode ← cbbb
ppayment ← (cbname ∧ cbaccount ) ∨
cid ← cbbb
(ccredit_card ∧ cpin )
cpassport ← cbbb
cbbb ← TRUE
cbname ← cbbb ∧ cosc
cosc ← TRUE
cbaccount ← cbbb ∧ cosc
ccredit_card ← cbbb ∧ cosc
cpin ← cbbb ∧ cosc

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Negotiation paths
name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Alice’s policy

S1 ××
S2 ××
S3 ××
S4 ××
S5
S6
S7
S8
S9 ×
S10 ×
S11
S12

×
×

××
××
×
×

××

××
× ××
×
××
×××
×
××
× ××
×
××
× × ××
× ×
××
25/51

Logic-based minimal credential disclosure – 2
On-line book shop’s policy

cname ← TRUE purchase ← pregister ∧ ppayment
cbdate ← cbbb
pregister ← (cname ∧ cbdate ∧
ctelephone ← cbbb
(cemail ∨ cpcode )) ∨
cemail ← cbbb
cid ∨ cpassport ∨
cpcode ← cbbb
((cname ∨ cemail ) ∧ cid )
cid ← cbbb
ppayment ← (cbname ∧ cbaccount ) ∨
cpassport ← cbbb
(ccredit_card ∧ cpin )
cbname ← cbbb ∧ cosc
cbbb ← TRUE
cbaccount ← cbbb ∧ cosc
cosc ← TRUE
ccredit_card ← cbbb ∧ cosc
cpin ← cbbb ∧ cosc

Disclosure sets are represented as binary vectors
=⇒ 0 means do not disclose; 1 means disclose
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Negotiation paths
name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Alice’s policy

S1 ××
S2 ××
S3 ××
S4 ××
S5
S6
S7
S8
S9 ×
S10 ×
S11
S12

×
×

××
××
×
×

××

××
× ××
×
××
×××
×
××
× ××
×
××
× × ××
× ×
××
25/51

Logic-based minimal credential disclosure – 2
On-line book shop’s policy

cname ← TRUE purchase ← pregister ∧ ppayment
cbdate ← cbbb
pregister ← (cname ∧ cbdate ∧
ctelephone ← cbbb
(cemail ∨ cpcode )) ∨
cemail ← cbbb
cid ∨ cpassport ∨
cpcode ← cbbb
((cname ∨ cemail ) ∧ cid )
cid ← cbbb
ppayment ← (cbname ∧ cbaccount ) ∨
cpassport ← cbbb
(ccredit_card ∧ cpin )
cbname ← cbbb ∧ cosc
cbbb ← TRUE
cbaccount ← cbbb ∧ cosc
cosc ← TRUE
ccredit_card ← cbbb ∧ cosc
cpin ← cbbb ∧ cosc

Disclosure sets are represented as binary vectors
=⇒ 0 means do not disclose; 1 means disclose
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Negotiation paths
name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Alice’s policy

S1 1 1 0 1 0 0 0 1 1 0 0
S2 1 1 0 1 0 0 0 0 0 1 1
S3 1 1 0 0 1 0 0 1 1 0 0
S4 1 1 0 0 1 0 0 0 0 1 1
S5 0 0 0 0 0 1 0 1 1 0 0
S6 0 0 0 0 0 1 0 0 0 1 1
S7 0 0 0 0 0 0 1 1 1 0 0
S8 0 0 0 0 0 0 1 0 0 1 1
S9 1 0 0 0 0 1 0 1 1 0 0
S10 1 0 0 0 0 1 0 0 0 1 1
S11 0 0 0 1 0 1 0 1 1 0 0
S12 0 0 0 1 0 1 0 0 0 1 1
25/51

Logic-based minimal credential disclosure – 3
• Default preference: not disclosing a credential is preferred to
disclosing it
=⇒ 0 ≻i 1, with i the i-th credential
• Disclosure sets are compared according to the Pareto
composition (≻P )
◦ Si dominates Sj if Si shows better or equal values than Sj with
respect to all credential preferences and is strictly better with
respect to at least one credential
Example
S5 : [0,0,0,0,0,1,0,1,1,0,0]

S9 : [1,0,0,0,0,1,0,1,1,0,0]

S5 [i] = S9 [i], i = 2, . . . , 11 and S5 [1] ≻1 S9 [1]
=⇒ S5 dominates S9 (S5 ≻P S9 )

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

26/51

Logic-based minimal credential disclosure – 4
• Hierarchies specify (possibly contextual) user preferences on the
release of credentials (ci → cj means that the user prefers to
release ci over cj )

passport

bname

name

id
telephone
bdate

pcode
if bdate
if¬bdate

email

baccount
credit_card
pin

• Transitive combination of preferences
◦ e.g., a disclosure set containing bname and baccount is preferred
than a disclosure set containing credit_card and pin
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

27/51

Logic-based minimal credential disclosure – 5

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Pareto composition

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

S5 dominates S9 since 0 ≻name 1

0
1
0
1
0
1
0
1
0
1
0
1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Pareto composition

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

S5 dominates S9 since 0 ≻name 1

0
1
0
1
0
1
0
1
0
1
0
1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Pareto composition

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

S5 dominates S9 since 0 ≻name 1
S5 dominates S11 since 0 ≻email 1

0
1
0
1
0
1
0
1
0
1
0
1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Pareto composition

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

S5 dominates S9 since 0 ≻name 1
S5 dominates S11 since 0 ≻email 1

0
1
0
1
0
1
0
1
0
1
0
1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Pareto composition

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

S5 dominates S9 since 0 ≻name 1
S5 dominates S11 since 0 ≻email 1
S6 dominates S10 since 0 ≻name 1

0
1
0
1
0
1
0
1
0
1
0
1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Pareto composition

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

S5 dominates S9 since 0 ≻name 1
S5 dominates S11 since 0 ≻email 1
S6 dominates S10 since 0 ≻name 1

0
1
0
1
0
1
0
1
0
1
0
1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Pareto composition

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S5
S5
S6
S6

dominates S9 since 0 ≻name 1
dominates S11 since 0 ≻email 1
dominates S10 since 0 ≻name 1
dominates S12 since 0 ≻email 1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Pareto composition

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S5
S5
S6
S6

dominates S9 since 0 ≻name 1
dominates S11 since 0 ≻email 1
dominates S10 since 0 ≻name 1
dominates S12 since 0 ≻email 1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Hierarchical preferences

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S5 dominates S7
S6 dominates S8

id
passport

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Hierarchical preferences

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S5 dominates S7
S6 dominates S8

id
passport

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Hierarchical preferences

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S5
S6
S1
S2

dominates S7
dominates S8
dominates S3
dominates S4

id

name

passport telephone

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

bdate

pcode
if bdate

if¬bdate

email

28/51

Logic-based minimal credential disclosure – 5
Hierarchical preferences

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S5
S6
S1
S2

dominates S7
dominates S8
dominates S3
dominates S4

id

name

passport telephone

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

bdate

pcode
if bdate
if¬bdate

email

28/51

Logic-based minimal credential disclosure – 5
Transitive combination of preferences

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S1 dominates S2
S5 dominates S6

bname
baccount
credit_card
pin

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Transitive combination of preferences

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S1 dominates S2
S5 dominates S6

bname
baccount
credit_card
pin

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 5
Transitive combination of preferences

name
bdate
telephone
email
pcode
id
passport
bname
baccount
credit_card
pin

Disclosure sets

S1
S2
S3
S4
S5
S6
S7
S8
S9
S10
S11
S12

1
1
1
1
0
0
0
0
1
1
0
0

1
1
1
1
0
0
0
0
0
0
0
0

0
0
0
0
0
0
0
0
0
0
0
0

1
1
0
0
0
0
0
0
0
0
1
1

0
0
1
1
0
0
0
0
0
0
0
0

0
0
0
0
1
1
0
0
1
1
1
1

0
0
0
0
0
0
1
1
0
0
0
0

1
0
1
0
1
0
1
0
1
0
1
0

1
0
1
0
1
0
1
0
1
0
1
0

0
1
0
1
0
1
0
1
0
1
0
1

0
1
0
1
0
1
0
1
0
1
0
1

S1 dominates S2
S5 dominates S6

bname
baccount
credit_card
pin
=⇒ user has to choose between S1 , S5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

28/51

Logic-based minimal credential disclosure – 6
• Users are still involved in choosing the disclosure set
• Assume only attributes (does not reason about credentials)
• The speciﬁcation of preferences among groups of attributes is not
always easy
• Possession-sensitive credentials are not considered
• Forbidden releases (e.g., the release of name, bdate, and pcode
is forbidden) are not supported

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

29/51

Privacy Preferences in
Credential-based Interactions

C.A. Ardagna, S. De Capitani di Vimercati, S. Foresti, S. Paraboschi, P. Samarati, “Minimizing Disclosure of Private Information in
Credential-Based Interactions: A Graph-Based Approach,” in Proc. of PASSAT , Minneapolis, MN, USA, August 2010.
C.A. Ardagna, S. De Capitani di Vimercati, S. Foresti, S. Paraboschi, P. Samarati, “Supporting Privacy Preferences in
Credential-Based Interactions,” in Proc. of WPES, Chicago, IL, USA, October 2010.
C.A. Ardagna, S. De Capitani di Vimercati, S. Foresti, S. Paraboschi, P. Samarati, “Minimising Disclosure of Client Information in
Credential-Based Interactions,” in IJIPSI, vol. 1, no. 2/3, 2012.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

30/51

Goal of the work
Enable users to effectively regulate disclosure of their properties and
credentials
• identify requirements and concepts that need to be captured
• organize user’s properties and credentials in the user portfolio
• enable user to specify how much she values the disclosure of
different components of the portfolio
• provide possible technical approaches for supporting
user’s preferences
• provide a basis for investigating user-friendly/user-understandable
approaches for regulating release of user’s properties

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

31/51

Client portfolio modeling
• The information of the client forms a client portfolio
• Credential: certiﬁcate issued and signed by a third party
◦ certiﬁes a set of properties
◦ has a type, an identiﬁer, and an issuer

• Declaration: property stored as a self-signed credential
• Hierarchy of abstractions of credential types H (T ,isa )
(e.g., id_card isa id , id isa credential)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

32/51

An example of hierarchy of credential types

∗

credential
id
id_card tax_id

declaration

med_record cc
passport

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

33/51

Client portfolio – Properties
• Credential-independent:
the value depends only
on the credential’s
owner (e.g., birth date)
Credential-dependent :
the value depends on
the certifying credential
(e.g., credit card
number)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

34/51

Client portfolio – Properties
• Credential-independent:
the value depends only
on the credential’s
owner (e.g., birth date)
• Credential-dependent:
the value depends on
the certifying credential
(e.g., credit card
number)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

34/51

Client portfolio – Credentials
• Atomic: released as a
whole (e.g., X.509)
non-atomic: properties
can be selectively
released,
proof-of-possession can
be certiﬁed (e.g., Idemix,
U-Prove)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

35/51

Client portfolio – Credentials
• Atomic: released as a
whole (e.g., X.509)
• Non-atomic: properties
can be selectively
released,
proof-of-possession can
be certiﬁed (e.g., Idemix,
U-Prove)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

35/51

Disclosure
A disclosure is a subset
of the client portfolio that
satisﬁes:
• certiﬁability: each
property is certiﬁed by a
credential
• atomicity: if a property of
an atomic credential is
disclosed, all its
properties are disclosed
Does not satisfy atomicity!

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

36/51

Disclosure

A disclosure is a subset
of the client portfolio that
satisﬁes:
• certiﬁability: each
property is certiﬁed by a
credential
• atomicity: if a property of
an atomic credential is
disclosed, all its
properties are disclosed
Does not satisfy atomicity!
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

36/51

Portfolio sensitivity
• Different portfolio components have different sensitivity
◦ the client may prefer to disclose some properties or credentials

• Sensitivity labels express privacy requirements:
◦ partial order relationship 
◦ arbitrary composition operator ⊕
(the composition of two sensitivity labels λ1 ⊕λ2 is a sensitivity label)

• We assume sensitivity labels to be integer values, composed
through the + operator

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

37/51

Sensitivity of properties and credentials

Specify how a client values
information in her portfolio
• λ (A): sensitivity of
property A individually
taken
• λ (c): sensitivity of the
existence of credential c

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

38/51

Sensitivity of associations

λ (A): sensitivity of an association A={Ai , . . . , Aj , c k , . . . , c n },
whose joint release carries:
more information than
the release of each
element in A
=⇒ sensitive view
less information than the
release of each element
in A
=⇒ dependency

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

39/51

Sensitivity of associations

λ (A): sensitivity of an association A={Ai , . . . , Aj , c k , . . . , c n },
whose joint release carries:
• more information than
the release of each
element in A
=⇒ sensitive view
less information than the
release of each element
in A
=⇒ dependency

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

39/51

Sensitivity of associations

λ (A): sensitivity of an association A={Ai , . . . , Aj , c k , . . . , c n },
whose joint release carries:
• more information than
the release of each
element in A
=⇒ sensitive view
• less information than the
release of each element
in A
=⇒ dependency

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

39/51

Disclosure constraints

Set A={Ai , . . . , Aj , c k , . . . , c n }
of elements whose release
must be controlled
forbidden view: the
release of A is prohibited
disclosure limitation: at
most n elements in A
can be released

A disclosure is valid if no disclosure constraints is violated
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

40/51

Disclosure constraints
Set A={Ai , . . . , Aj , c k , . . . , c n }
of elements whose release
must be controlled
• forbidden view: the
release of A is prohibited
disclosure limitation: at
most n elements in A
can be released

A disclosure is valid if no disclosure constraints is violated

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

40/51

Disclosure constraints
Set A={Ai , . . . , Aj , c k , . . . , c n }
of elements whose release
must be controlled
• forbidden view: the
release of A is prohibited
• disclosure limitation: at
most n elements in A
can be released

A disclosure is valid if no disclosure constraints is violated

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

40/51

Disclosure constraints
Set A={Ai , . . . , Aj , c k , . . . , c n }
of elements whose release
must be controlled
• forbidden view: the
release of A is prohibited
• disclosure limitation: at
most n elements in A
can be released

A disclosure is valid if no disclosure constraint is violated

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

40/51

Disclosure sensitivity

The sensitivity λ (D) of a disclosure D is the sum of the
sensitivity labels of released:
properties
credentials
associations

λ (D) = 1+5+5+10+1+3+5 = 30

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

41/51

Disclosure sensitivity

The sensitivity λ (D) of a disclosure D is the sum of the
sensitivity labels of released:
• properties
credentials
associations

λ (D) = 1+5+5+10+1+3+5 = 30

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

41/51

Disclosure sensitivity

The sensitivity λ (D) of a disclosure D is the sum of the
sensitivity labels of released:
• properties
• credentials
associations

λ (D) = 1+5+5+10+1+3+5 = 30

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

41/51

Disclosure sensitivity

The sensitivity λ (D) of a disclosure D is the sum of the
sensitivity labels of released:
• properties
• credentials
• associations

λ (D) = 1+5+5+10+1+3+5 = 30

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

41/51

Server request
Request R: disjunction of simple requests
• Simple request R: conjunction of terms
◦ term r =type.{A1 , . . . , Am }: disclosure of {A1 , . . . , Am } from c
s.t. type(c )isa type
=⇒ type is an abstraction of credential type type(c) in H

Example
R = r 1 ∧r 2
r 1 = id.{Name,Address}
r 2 = cc.{Name,CCNum}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

42/51

Min-disclosure problem
A disclosure D:
• satisﬁes R if it satisﬁes at
least a R in R
• satisﬁes R if, ∀
r =type.{A1 , . . . , Am } in R,
it includes c s.t.:
◦ c certiﬁes {A1 , . . . , Am }
◦ type(c )isa type

is minimum if ∄ a valid
disclosure D ′ s.t. D ′
satisﬁes R and
λ (D ′ )<λ (D)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

43/51

Min-disclosure problem
R = id.{Name,Address} ∧ cc.{Name,CCNum}

A disclosure D:
• satisﬁes R if it satisﬁes at
least a R in R
• satisﬁes R if, ∀
r =type.{A1 , . . . , Am } in R,
it includes c s.t.:
◦ c certiﬁes {A1 , . . . , Am }
◦ type(c )isa type

is minimum if ∄ a valid
disclosure D ′ s.t. D ′
satisﬁes R and
λ (D ′ )<λ (D)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

43/51

Min-disclosure problem
R = id.{Name,Address} ∧ cc.{Name,CCNum}

A disclosure D:
• satisﬁes R if it satisﬁes at
least a R in R
• satisﬁes R if, ∀
r =type.{A1 , . . . , Am } in R,
it includes c s.t.:
◦ c certiﬁes {A1 , . . . , Am }
◦ type(c )isa type

is minimum if ∄ a valid
disclosure D ′ s.t. D ′
satisﬁes R and
λ (D ′ )<λ (D)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

λ (D) = 1+8+1+5+5+15 = 35

43/51

Min-disclosure problem
R = id.{Name,Address} ∧ cc.{Name,CCNum}

A disclosure D:
• satisﬁes R if it satisﬁes at
least a R in R
• satisﬁes R if, ∀
r =type.{A1 , . . . , Am } in R,
it includes c s.t.:
◦ c certiﬁes {A1 , . . . , Am }
◦ type(c )isa type

• is minimum if ∄ a valid
disclosure D ′ s.t. D ′
satisﬁes R and
λ (D ′ )<λ (D)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

λ (D) = 35 =⇒ D is not minimum

43/51

Min-disclosure problem
R = id.{Name,Address} ∧ cc.{Name,CCNum}

A disclosure D:
• satisﬁes R if it satisﬁes at
least a R in R
• satisﬁes R if, ∀
r =type.{A1 , . . . , Am } in R,
it includes c s.t.:
◦ c certiﬁes {A1 , . . . , Am }
◦ type(c )isa type

• is minimum if ∄ a valid
disclosure D ′ s.t. D ′
satisﬁes R and
λ (D ′ )<λ (D)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

λ (D ′ ) = 30 =⇒ D ′ is minimum

43/51

Computing a minimal disclosure
The problem of computing a disclosure that minimizes release of
information is NP-hard
• exploit graph-based representation of portfolio and requests,
providing heuristics based on graph-matching [ADFPS-10a]
• exploit Max-SAT representation of the problem and existing SAT
solver [ADFPS-10b]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

44/51

Work to be investigated – 1
• Enable derivation of sensitivity levels of properties (e.g., based on
identity exposure)
• Support speciﬁcations in terms of preferences (e.g., my id_card is
less sensitive than my passport)
• Sensitivity labels assigned to proofs (provided by non-atomic
credentials)
• Support referring to existence of a credential (without releasing it)
• Allow recipient/context-based sensitivity speciﬁcations (e.g.,
dialysis certiﬁcates is less sensitive if released to a doctor than to
a generic server)
• User-intuitive approaches for expressing preferences (and
possibly translate them to sensitivity labels)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

45/51

Work to be investigated – 2
• Consideration of previous disclosures
• Type vs instance mismatch (server talks about classes, users refer
to instances)
• Integration with server-side solutions and more expressive server
requests [ADFNPPSV-10]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

46/51

Server-side open issues – 1
On the server-side there is still work to do to increase expressiveness.
Today XACML:
• does not provide a support for expressing and reasoning about
digital certiﬁcates in the speciﬁcation of the authorization policies:
◦ e.g., “attribute nationality should be certiﬁed by a passport”

• does not have support for abstractions
◦ e.g., “id_document is an abstraction including credentials
{identity_card, driver_license, passport}”

C. Ardagna, S. De Capitani di Vimercati, S. Paraboschi, E. Pedrini, P. Samarati, M. Verdicchio, “Expressive and Deployable
Access Control in Open Web Service Applications,” in IEEE TSC, vol. 4, no. 2, April-June 2011.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

47/51

Server-side open issues – 2
• does not have support for policy dialog (to communicate policies
to users):
◦ condition (e.g., “identity_card.age > 18”)
◦ predicate (e.g., “identity_card.age >”)
◦ property (e.g., “identity_card.age”)
◦ credential (e.g., “identity_card”)
◦ none (nothing can be disclosed about the condition)

• does not have support for recursive conditions:
◦ for expressing policies based on chains of credentials/properties
◦ for supporting delegation and recursion (e.g., “the certiﬁcation
authority signing a user’s credential has been directly or indirectly
delegated by a particular authority preferred by the server”)

----------------------------------------------------------------

# Privacy and Data Protection in Emerging Scenarios

## Privacy and integrity of data storage

slide 2/268

### Contributions and advancements
The research community has been very active and produced several contributions and advancements. E.g.,:
- solutions for protecting conﬁdentiality of stored data;
- indexes supporting different types of queries;
- inference exposure evaluation;
- data integrity;
- selective access to outsourced data
- ...

----------------------------------------------------------------

### Protecting data conﬁdentiality
Solutions for protecting data can be based on:
- encryption;
- encryption and fragmentation;
- fragmentation.

----------------------------------------------------------------

## Encryption
The server can be honest-but-curious and should not have access to the resource content.<br />
Data conﬁdentiality is provided by wrapping a layer of encryption around sensitive data. For performance reasons, encryption is typically applied at the tuple level.

slide 6/268

### Fine-grained access to data in the cloud
For conﬁdentiality reasons, Cloud Service Providers storing data cannot decrypt them for data processing/access. Need mechanisms to support access to the outsourced data:
- effective and efﬁcient;
- should not open the door to inferences.

### Fine-grained access: Approaches
- **Keyword-based searches directly on the encrypted data**: supported by speciﬁc cryptographic techniques;

slide 8/268


- **homomorphic encryption**: supports the execution of operations directly on the encrypted data;

slide 9/268

- **encryption schemas**: each column can be encrypted with a different encryption schema, depending on the conditions to be evaluated on it (e.g., Google encrypted BigQuery);
- **onion encryption (CryptDB)**: different onion layers each of which supports the execution of a speciﬁc SQL operation (e.g., HanaDB SEEED framework);

slide 10/268

- **indexes**: metadata attached to the data and used for ﬁne-grained information retrieval and query execution. They can also be complementary to encryption (even with encryption users want to have the ability to perform searches based on metadata).

slide 11/268

Indexes associated with attributes are used by the server to select data to be returned in response to a query.

slide 12/268

----------------------------------------------------------------

### Query Evaluation process

slide 13/268

#### Indexes for queries: Direct (1:1)
Actual value or coding:
- simple and precise for equality queries;
- preserves plaintext value distinguishability (inference attacks).

slide 14/268

----------------------------------------------------------------

#### Indexes for queries: Bucket (n:1)
Partition-based or hash-based:
- supports for equality queries; 
- collisions remove plaintext distinguishability;
- result may contain spurious tuples (postprocessing query); (cosa intende per spurie?)
- still vulnerable to inference attacks.

slide 15/268

----------------------------------------------------------------

#### Indexes for queries: Flattened (1:n)
Flat indexes:
- decreases exposure to inference attacks;
- remains vulnerabile to dynamic observations.

slide 16/268

----------------------------------------------------------------

### Partition-based index
Consider an arbitrary plaintext attribute $A_i$ in relational schema $R$, with domain $D_i$. $D_i$ is partitioned in a number of non-overlapping subsets of values, called **partitions**, containing contiguous values. Given a plaintext tuple $t$ in $r$, the value of attribute $A_i$ for $t$ belongs to a partition. The function $ident_{R.A_i} (p_j)$ assigns to each partition $p_j$ of attribute $A_i$ in $R$ an identiﬁer.

The corresponding index value is the unique value associated with the partition to which the plaintext value $t[A_i]$ belongs. $Map_{R.A_i} (v) = ident_{R.A_i} (p_j)$, where $p_j$ is the partition containing $v$.

$Map_{R.A_i}$ can be order-preserving or random.

An example of a partition-based index.<br />
Random mapping:

slide 18/268

- $MapBalance (100) = \mu$;
- $MapBalance (200) = \kappa$;
- $MapBalance (300) = \eta$;
- $MapBalance (400) = \theta$.

The partition-based index supports queries where conditions are boolean formulas over terms of the form;
- **Attribute op Value**;
- **Attribute op Attribute**.

The allowed operations for op include ${=, <, >, \leq, \geq}$.

----------------------

### Mapping conditions $Map_{cond}$
- $A_i = v$: the mapping is deﬁned as:

$$Map_{cond} (A_i = v) \to I_i =Map_{A_i} (v)$$

Example:

$$Map_{cond} (Balance = 100) \to I_{Balance} = Map_{Balance} (100) = \mu$$

- $A_i < v$: the mapping depends on whether or not the mapping function $Map_{A_i} is order-preserving or random:
	- **order-preserving**: $Map_{cond} (A_i < v) \to I_i \leq Map_{A_i} (v)$;
	- **random**: check if attribute $I_i$ lies in any of the partitions that may contain a value $v'$ where $v' < v: Map_{cond} (A_i < v) \to I_i \in Map^{<}_{A_i} (v)$.

Example:

$$Map_{cond} (Balance< 200) \to I_{Balance} \in \{\mu , \kappa\}$$

- $A_i > v$: symmetric with respect to $A_i < v$;
- $A_i = A_j$: the translation is performed by considering all possible pairs of partitions of $A_i$ and $A_j$ that overlap;

Example:

slide 21/268

$$ Map_{cond} (Balance=Benefit) \to (I_{Balance} = \mu \wedge I_{Benefit} = \gamma)
\vee (IBalance = \kappa \wedge IBenefit =gamma )
∨ (IBalance =\eta \wedge IBenefit = \alpha )
∨ (IBalance = \theta \wedge IBenefit =\alpha )$$

- $A_i < A_j$: the mapping depends on whether or not the mapping functions $Map_{A_i}$ and $Map_{A_j}$ are order-preserving or random.

----------------------------------------------------------------

#### Query execution
Each query $Q$ on the plaintext $DB$ is translated into:
- a query $Q_s$ to be executed at the server;
- a query $Q_c$ to be executed at client on the result.

Query $Q_s$ is deﬁned by exploiting the deﬁnition of $Map_{cond}(C)$.<br />
Query $Q_c$ is executed on the decrypted result of $Q_s$ to ﬁlter out spurious tuples.<br />
The translation should be performed in such a way that the server is responsible for the majority of the work.

An example of a query execution.

slide 23/268 multiple

----------------------------------------------------------------

### Hash-based index
The **hash-based index** is based on the concept of **one-way hash function**. For each attribute $A_i$ in $R$ with domain $D_i$, a secure one-way hash function $h : D_i \to B_i$ is deﬁned, where $B_i$ is the domain of index $I_i$ associated with $A_i$.

Given a plaintext tuple $t$ in $r$, the index value corresponding to $t[A_i]$ is $h(t[A_i])$.

Important properties of any secure hash function $h$ are:
- $\forall x, y \in D_i : x = y \to h(x) = h(y)$ (**determinism**);
- given two values $x, y \in D_i$ with $x \neq y$, we may have that $h(x) = h(y)$ (**collision**);
- given two distinct but near values $x, y (\vert x − y \vert < \varepsilon)$ chosen randomly in $D_i$, the discrete probability distribution of the difference $h(x) − h(y)$ is uniform (**strong mixing**).

An example of encrypted relation with hashing.

slide 25/268

- $h_c(Alice)=h_c(Chris)= \alpha$;
- $h_c(Donna)=h_c(Elvis)=\beta$;
- $h_c(Bob)= \delta$;
- $h_b(200)=h_b(400)= \kappa$;
- $h_b(100)= \eta$;
- $h_b (300)= \theta$.

----------------------------------------------------------------

#### Query conditions supported by the hash-based index
Support queries where conditions are boolean formulas over terms of the form:
- $Attribute = Value$;
- $Attribute1 = Attribute2$, if $Attribute1$ and $Attribute2$ are indexed with the same hash function.

It does not support range queries (a solution similar to the one adopted for partition-based methods is not viable). Colliding values in general are not contiguous in the plaintext domain.

Query translation works like in the partition-based method.

----------------------------------------------------------------

#### Interval-based queries
**Order-preserving indexing techniques**: support interval-based queries but expose to inference. Comparing the ordered sequences of plaintext and indexes would lead to reconstruct the correspondence;

**Non order-preserving techniques**: data are not exposed to inference but interval-based queries are not supported;

**DBMSs support interval-based queries using B+-trees**, but the $B+$-tree deﬁned by the server on indexes is of no use. Possible solution:
- calculate the nodes in the $B+$-tree at the client and encrypt each node as a whole at the server;
- $B+$-tree traversal must be performed at the trusted front-end.

----------------------------------------------------------------

#### $B+$-tree example 

slide 28/268

Query on the plaintext relation

```SQL
SELECT * FROM Accounts WHERE Customer = 'Bob'
```

Interaction for query evaluation

slide 29/268

----------------------------------------------------------------

## Searchable encryption
### Order preserving encryption
**Order Preserving Encryption Schema** (**OPES**) takes as input a target distribution of index values and applies an order preserving transformation so that the resulting index values follow the target distribution:
- comparison can be directly applied on the encrypted data;
- query evaluation does not produce spurious tuples;
- vulnerable with respect to inference attacks.

**Order Preserving Encryption with Splitting and Scaling** (**OPESS**)
schema creates index values so that their frequency distribution is
ﬂat [WL-06]

Fully homomorphic encryption [G-09, GKPVZ-13]
Fully homomorphic encryption schema:
• allows performing speciﬁc computation on encrypted data
• decryption of the computation result, yields the result of
operations performed on the plaintext data
Recent advancement: a functional-encryption schema that ﬁts
together several existing schemes (homomorphic encryption, garbled
circuit, attribute-based encryption) [GKPVZ-13]
• still too computationally intensive for practical DBMS applications


Inference exposure

A. Ceselli, E. Damiani, S. De Capitani di Vimercati, S. Jajodia, S. Paraboschi, and P. Samarati, “Modeling and Assessing Inference
Exposure in Encrypted Databases,” in ACM TISSEC, vol. 8, no. 1, February 2005.

Inference exposure
There are two conﬂicting requirements in indexing data:
• indexes should provide an effective query execution mechanism
• indexes should not open the door to inference and linking attacks
It is important to measure quantitatively the level of exposure due to
the publication of indexes:

ε = Exposure Coefﬁcient

Scenarios
The computation of the exposure coefﬁcient ε depends on two factors:
• the indexing method adopted, e.g.,
◦ direct encryption
◦ hashing

• the a-priori knowledge of the intruder, e.g.,
◦ Freq+DBk :
− the frequency distribution of plaintext values in the original database
(Freq)
− the encrypted database (DBk )

◦ DB+DBk :
− the plaintext database (DB)
− the encrypted database (DBk )

Possible inferences
Freq+DBk
• plaintext content: determine the existence of a certain tuple (or
association of values) in the original database
• indexing function: determine the correspondence between
plaintext values and indexes
DB+DBk
• indexing function: determine the correspondence between
plaintext values and indexes

Exposure coefﬁcient computation [CDDJPS-05]

Freq+DBk
DB+DBk

Direct Encryption
Quotient Table
RCV graph

Hashing
Multiple subset sum problem
RCV line graph


Freq+DBk – Example
Knowledge
Account
Acc1
Acc2
Acc3
Acc4
Acc5
Acc6

Customer
Alice
Alice
Bob
Chris
Donna
Elvis

Inference
Balance
100
200
300
200
400
200

• IA = Account
• IC = Customer
• IB = Balance
• κ = 200 (indexing inference)
• α =Alice (indexing inference)
• hAlice,200i is in the table (association inference)
• Alice is also associated with a value different
from 200 (“100,300,400”, all equiprobable)

Accountsk1
Counter Etuple
1
2
3
4
5
6

x4Z3tfX2ShOSM
mNHg1oC010p8w
WsIaCvfyF1Dxw
JpO8eLTVgwV1E
qctG6XnFNDTQc
4QbqC3hxZHklU

IA IC IB

π
ϖ
ξ
ρ
ς
ι

α
α
β
γ
δ
ε

µ
κ
η
κ
θ
κ


Direct encryption – Freq+DBk
• Correspondence between an index and a plaintext value can be
determined based on the number of occurrences of the
index/value
◦ Basic protection: values with the same number of occurrences are
indistinguishable to the attacker

• Assessment of index exposure based on equivalence relation
where index/plaintext values with same number of occurrences
belong to the same class
◦ Exposure of values in equivalence class C is 1/ | C |

Freq+DBk – Example of exposure computation
A.1 = {π , ϖ , ξ , ρ , ς , ι } = {Acc1,. . .,Acc6}
C.1 = {β , γ , δ , ε } = {Bob,Chris,Donna,Elvis}
C.2 = {α } = {Alice}
B.1 = {µ , η , θ } = {100,300,400}
B.3 = {κ } = {200}
I NDEX _ VALUES
IA IC
IB
π
α
µ
ϖ
α
κ
ξ
β
η
ρ
γ
κ
ς
δ
θ
ι
ε
κ

Q UOTIENT
qtA qtC qtB
A.1 C.2 B.1
A.1 C.2 B.3
A.1 C.1 B.1
A.1 C.1 B.3
A.1 C.1 B.1
A.1 C.1 B.3

I NVERSE C ARDINALITY
icA
icC
icB
1/6 1
1/3
1/6 1
1
1/6 1/4 1/3
1/6 1/4 1
1/6 1/4 1/3
1/6 1/4 1

E = 1n ∑ni=1 ∏kj=1 ICi,j = 1/18
# Arrivare qui

Direct encryption – DB+DBk
• 3-colored undirected Row-Column-Value graph:
◦
◦
◦
◦

one vertex of color “column” for every attribute
one vertex of color “row” for every tuple
one vertex for every distinct value in a column
an arc connects every value to the column and row(s) in which it
appears

• RCV on plaintext values is identical to the one on indexes
• Inference exposure can be measured by evaluating the
automorphisms of the graph
• Not sufﬁcient to count the number of automorphisms:
◦ if there are K automorphisms and in k of them the label assigned to
vi is the same, there is a probability of k/K of identifying the value

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

41/268

DB+DBk – Example (1)
Customer
Alice
Alice
Bob
Chris
Donna
Elvis

Balance
100
200
300
200
400
200

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

IC
α
α
β
γ
δ
ε

IB
µ
κ
η
κ
θ
κ

42/268

DB+DBk – Example (2)
Inference
• IC = Customer
• IB = Balance
• α = Alice
• µ = 100
• κ = 200
• {γ , ε } = {Chris,Elvis}
• {hβ ,η i,hδ ,θ i}=
{hBob,300i,hDonna,400i}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

43/268

Computing the exposure coefﬁcient
• The set of automorphisms constitutes a group described by the
coarsest equitable partition of the vertices:
◦ each subset appearing in the partition contains vertices that can be
substituted one for the other in an automorphism

• Nauty algorithm: iteratively derives the partition
• Probability of identifying a vertex in partition C: 1/ | C |
Exposure with equitable partition of n elements over a total number of
m: n/m
Example
• β indistinguishable from δ
• η indistinguishable from θ
• γ indistinguishable from ε
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

44/268

Computing the exposure coefﬁcient – Example
Inference
• IC = Customer
• IB = Balance
• α = Alice
• µ = 100
• κ = 200
• {γ , ε } = {Chris,Elvis}
• {hβ ,η i,hδ ,θ i}=
{hBob,300i,hDonna,400i}

Equitable partition: {(α ),(β , δ ),(γ , ε ),(µ ),(η , θ ),(κ )}
E = 6/9 = 2/3
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

45/268

Hashing exposure – Freq+DBk
• The hash function is characterized by a collision factor, denoting
the number of attribute values that on average collide on the same
index value
• There are different possible mappings of plaintext values in index
values, w.r.t. the constraints imposed by frequencies
• Need to enumerate the different mappings by using an adaptation
of Pisinger’s algorithm for the subset sum problem
• Compute the exposure coefﬁcient for each mapping

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

46/268

Hashing exposure – DB+DBk
• The RCV-graph built on plaintext and encrypted data are not
identical
• Different vertexes of the plaintext RCV-graph may collapse to the
same encrypted RCV-graph vertex
• The number of edges connecting row vertexes to value vertexes in
the plaintext and encrypted RCV-graph is the same
• The problem becomes ﬁnding a correct matching between the
edges of the plaintext RCV-graph and the edges of the encrypted
RCV-graph

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

47/268

Bloom Filter

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

48/268

Bloom ﬁlter [B-70]
A Bloom ﬁlter is at the basis of the construction of some indexing
techniques. It is an efﬁcient method to encode set membership
• Set of n elements (n is large)
• Vector of l bits (l is small)
• h independent hash functions Hi : {0, 1}∗ → [1, l]
Insert element x:
• Sets to 1 the bit values at index positions H1 (x), H2 (x), . . . , Hh (x)
Search element x:
• Compute H1 (x), H2 (x), . . . , Hh (x) and check whether those values
are set in the bit vector
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

49/268

Bloom ﬁlter [B-70] – Example
Let l = 10 and h = 3

1

2

3

4

5

6

7

8

9

10

Insert sun: H1 (sun)=2; H2 (sun)=5; H3 (sun)=9
Insert frog: H1 (frog)=1; H2 (frog)=5; H3 (frog)=7
Search dog: H1 (dog)=2; H2 (dog)=5; H3 (dog)=10
=⇒ No
Search car: H1 (frog)=1; H2 (frog)=5; H3 (frog)=9
=⇒ Yes; false positive!
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

50/268

Bloom ﬁlter [B-70] – Example
Let l = 10 and h = 3
1
1

2

1
3

4

5

1
6

7

8

9

10

• Insert sun: H1 (sun)=2; H2 (sun)=5; H3 (sun)=9
Insert frog: H1 (frog)=1; H2 (frog)=5; H3 (frog)=7
Search dog: H1 (dog)=2; H2 (dog)=5; H3 (dog)=10
=⇒ No
Search car: H1 (frog)=1; H2 (frog)=5; H3 (frog)=9
=⇒ Yes; false positive!
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

50/268

Bloom ﬁlter [B-70] – Example
Let l = 10 and h = 3
1

1

1

2

1
3

4

5

1
6

7

1
8

9

10

• Insert sun: H1 (sun)=2; H2 (sun)=5; H3 (sun)=9
• Insert frog: H1 (frog)=1; H2 (frog)=5; H3 (frog)=7
Search dog: H1 (dog)=2; H2 (dog)=5; H3 (dog)=10
=⇒ No
Search car: H1 (frog)=1; H2 (frog)=5; H3 (frog)=9
=⇒ Yes; false positive!
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

50/268

Bloom ﬁlter [B-70] – Example
Let l = 10 and h = 3
1

1

1

2

1

1
3

4

5

6

7

1
8

9

10

• Insert sun: H1 (sun)=2; H2 (sun)=5; H3 (sun)=9
• Insert frog: H1 (frog)=1; H2 (frog)=5; H3 (frog)=7
• Search dog: H1 (dog)=2; H2 (dog)=5; H3 (dog)=10
=⇒ No
Search car: H1 (car)=1; H2 (car)=5; H3 (car)=9
=⇒ Yes; false positive!
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

50/268

Bloom ﬁlter [B-70] – Example
Let l = 10 and h = 3
1

1

1

2

1

1
3

4

5

6

7

1
8

9

10

• Insert sun: H1 (sun)=2; H2 (sun)=5; H3 (sun)=9
• Insert frog: H1 (frog)=1; H2 (frog)=5; H3 (frog)=7
• Search dog: H1 (dog)=2; H2 (dog)=5; H3 (dog)=10
=⇒ No
Search car: H1 (car)=1; H2 (car)=5; H3 (car)=9
=⇒ Yes; false positive!
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

50/268

Bloom ﬁlter [B-70] – Example
Let l = 10 and h = 3
1

1

1

2

1

1
3

4

5

6

7

1
8

9

10

• Insert sun: H1 (sun)=2; H2 (sun)=5; H3 (sun)=9
• Insert frog: H1 (frog)=1; H2 (frog)=5; H3 (frog)=7
• Search dog: H1 (dog)=2; H2 (dog)=5; H3 (dog)=10
=⇒ No
• Search car: H1 (car)=1; H2 (car)=5; H3 (car)=9
=⇒ Yes; false positive!
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

50/268

Bloom ﬁlter [B-70] – Example
Let l = 10 and h = 3
1

1

1

2

1

1
3

4

5

6

7

1
8

9

10

• Insert sun: H1 (sun)=2; H2 (sun)=5; H3 (sun)=9
• Insert frog: H1 (frog)=1; H2 (frog)=5; H3 (frog)=7
• Search dog: H1 (dog)=2; H2 (dog)=5; H3 (dog)=10
=⇒ No
• Search car: H1 (car)=1; H2 (car)=5; H3 (car)=9
=⇒ Maybe Yes; false positive!
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

50/268

Bloom ﬁlter – Properties
• Generalization of hashing (Bloom ﬁlter with one hash function is
equivalent to ordinary hashing)
+ space efﬁcient (roughly ten bit for every element in the dictionary
with 1% error)
− elements cannot be removed

• Yield a constant false positive probability
− theoretically considered not acceptable
+ acceptable in practical applications as ﬁne price to pay for space
efﬁciency

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

51/268

Data Integrity

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

52/268

Integrity of outsourced data
Two aspects:
• Integrity in storage: data must be protected against improper
modiﬁcations
=⇒ unauthorized updates to the data must be detected
• Integrity in query computation: query results must be correct and
complete
=⇒ server’s misbehavior in query evaluation must be detected

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

53/268

Integrity in storage
• Data integrity in storage relies on digital signatures
• Signatures are usually computed at tuple level
◦ table and attribute level signatures can be veriﬁed only after
downloading the whole table/column
◦ cell level signature causes a high veriﬁcation overhead

• The veriﬁcation cost grows linearly with the number of tuples in
the query result
=⇒ the signature of a set of tuples can be combined to generate
the aggregated signature [MNT-06]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

54/268

Selective Encryption and
Over-Encryption

S. De Capitani di Vimercati, S. Foresti, S. Jajodia, S. Paraboschi, P. Samarati, “Encryption Policies for Regulating Access to Outsourced Data,” in ACM TODS, vol. 35, no. 2, April 2010.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

55/268

Selective information sharing
• Different users might need to enjoy different views on the
outsourced data
• Enforcement of the access control policy requires the data owner
to mediate access requests
=⇒ impractical (if not inapplicable)
• Authorization enforcement may not be delegated to the provider
=⇒ data owner should remain in control

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

56/268

Selective information sharing: Approaches – 1
• Attribute-based encryption (ABE): allow derivation of a key only by
users who hold certain attributes (based on asymmetric
cryptography)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

57/268

Selective information sharing: Approaches – 2
• Selective encryption: the authorization policy deﬁned by the data
owner is translated into an equivalent encryption policy

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

58/268

Selective encryption – Scenario

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

59/268

Selective encryption [DFJPS-10b]
Basic idea/desiderata:
• data themselves need to directly enforce access control
• different keys should be used for encrypting data
• authorization to access a resource translated into
knowledge of the key with which the resource is encrypted
• each user is communicated the keys necessary to decrypt the
resources she is entailed to access

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

60/268

Authorization policy
• The data owner deﬁnes a discretionary access control
(authorization) policy to regulate read access to the resources
• An authorization policy A , is a set of permissions of the form
huser,resourcei.
It can be represented as:
◦ an access matrix
◦ a directed and bipartite graph having a vertex for each user u and
for each resource r, and an edge from u to r for each permission
hu, ri

• Basic idea:
◦ different ACLs implies different encryption keys

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

61/268

Authorization policy – Example

A
B
C
D

r1
1
1
1
0

r2
1
1
1
0

r3
1
1
1
1

r4
0
1
1
1

r5
0
1
1
1

A

r1

B

r2

C

r3

D

r4
r5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

62/268

Encryption policy
• The authorization policy deﬁned by the data owner is translated
into an equivalent encryption policy
• Possible solutions:
◦ encrypt each resource with a different key and give users the keys
for the resources they can access
− requires each user to manage as many keys as the number of
resources she is authorized to access

◦ use a key derivation method for allowing users to derive from their
user keys all the keys that they are entitled to access
+ allows limiting to one the key to be released to each user

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

63/268

Key derivation methods
• Based on a key derivation hierarchy (K , )
◦ K is the set of keys in the system
◦  partial order relation deﬁned on K

• The knowledge of the key of vertex v1 and of a piece of
information publicly available allows the computation of the key of
a lower level vertex v2 such that v2  v1
• (K , ) can be graphically represented as a graph with a vertex for
each x ∈ K and a path from x to y iff y  x
• Depending on the partial order relation deﬁned on K , the key
derivation hierarchy can be:
◦ a chain [S-87]
◦ a tree [G-80,S-87,S-88]
◦ a DAG [AT-83,CMW-06,DFM-04,HL-90,HY-03,LWL-89,M-85,SC-02]
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

64/268

Token-based key derivation methods [AFB-05]
• Keys are arbitrarily assigned to vertices
• A public label li is associated with each key ki
• A piece of public information ti,j , called token, is associated with
each edge in the hierarchy
• Given an edge (ki ,kj ), token ti,j is computed as kj ⊕ h(ki , lj ) where
◦ ⊕ is the n-ary xor operator
◦ h is a secure hash function

• Advantages of tokens:
◦ they are public and allow users to derive multiple encryption keys,
while having to worry about a single one
◦ they can be stored on the remote server (just like the encrypted
data), so any user can access them
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

65/268

Key and token graph
• Relationships between keys through tokens can be represented
via a key and token graph
◦ a vertex for each pair hk, li, where k ∈ K is a key and l ∈ L the
corresponding label
◦ an edge from a vertex hki , li i to vertex hkj , lj i if there exists a token
ti,j ∈ T allowing the derivation of kj from ki

Example
k1 , l1
k2 , l2

k8 , l8
k7 , l7

k3 , l3

k10 , l10

k4 , l4
k5 , l5

k9 , l9

k6 , l6
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

66/268

Key assignment and encryption schema
Translation of the authorization policy into an encryption policy:
• Starting assumptions (desiderata):
◦ each user can be released only a single key
◦ each resource is encrypted only once (with a single key)

• Function φ :U ∪ R → L describes:
◦ the association between a user and (the label of) her key
◦ the association between a resource and (the label of) the key used
for encrypting it

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

67/268

Formal deﬁnition of encryption policy
• An encryption policy over users U and resources R, denoted E ,
is a 6-tuple hU ,R,K ,L ,φ ,T i, where:
◦ K is the set of keys deﬁned in the system and L is the set of
corresponding labels
◦ φ is a key assignment and encryption schema
◦ T is a set of tokens deﬁned on K and L

• The encryption policy can be represented via a graph by
extending the key and token graph to include:
◦ a vertex for each user and each resource
◦ an edge from each user vertex u to the vertex hk, li such that φ (u)=l
◦ an edge from each vertex hk, li to each resource vertex r such that
φ (r) = l

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

68/268

Encryption policy graph – Example
A

k1 , l1

B

k2 , l2

C

k3 , l3

D

k4 , l4

E

k5 , l5

F

k6 , l6

k8 , l8

r1

k7 , l7

• user A can access {r1 , r2 }
• user B can access {r2 , r3 }
• user C can access {r2 }

k10 , l10

k9 , l9

r2

r3

φ
token

• user D can access {r1 , r2 , r3 }
• user E can access {r1 , r2 , r3 }
• user F can access {r3 }
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

69/268

Policy transformation
Goal: translate an authorization policy A into an equivalent encryption
policy E .
A and E are equivalent if they allow exactly the same accesses:
E

A

A

E

• ∀u ∈ U , r ∈ R : u −→r =⇒ u −→r
• ∀u ∈ U , r ∈ R : u −→r =⇒ u −→r

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

70/268

Translating A into E – 1
• Naive solution
◦ each user is associated with a different key
◦ each resource is encrypted with a different key
◦ a token tu,r is generated and published for each permission hu, ri

=⇒ producing and managing a token for each single permission
can be unfeasible in practice
• Exploiting acls and user groups
◦ group users with the same access privileges
◦ encrypt each resource with the key associated with the set of users
that can access it

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

71/268

Translating A into E – 2
• It is possible to create an encryption policy graph by exploiting the
hierarchy among sets of users induced by the partial order
relationship based on set containment (⊆)
• If the system has a large number of users, the encryption policy
has a large number of tokens and keys (2|U | − 1)

=⇒ inefﬁcient key derivation
v5 [AB]

r1

A

v1 [A]

v6 [AC]

v11 [ABC]

B

v2 [B]

v7 [AD]

v12 [ABD]

C

v3 [C]

v8 [BC]

v13 [ACD]

r4

D

v4 [D]

v9 [BD]

v14 [BCD]

r5

r2

v15 [ABCD]

r3

v10 [CD]
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

72/268

Minimum encryption policy
• Observation: user groups that do not correspond to any acl do not
need to have a key
• Goal: compute a minimum encryption policy, equivalent to a given
authorization policy, that minimize the number of tokens to be
maintained by the server
• Solution: heuristic algorithm based on the observation that:
◦ only vertices associated with user groups corresponding to actual
acls need to be associated with a key
◦ the encryption policy graph may include only the vertices that are
needed to enforce a given authorization policy, connecting them to
ensure a correct key derivability
◦ other vertices can be included if they are useful for reducing the
size of the catalog
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

73/268

Construction of the key and token graph
Start from an authorization policy A
1. Create a vertex/key for each user and for each non-singleton acl
(initialization)
2. For each vertex v corresponding to a non-singleton acl, ﬁnd a
cover without redundancies (covering)
- for each user u in v.acl, ﬁnd an ancestor v′ of v with u ∈ v′ .acl

3. Factorize common ancestors (factorization)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

74/268

Key and token graph – Example
A
B
C
D

r1
0
1
0
0

r2
1
1
1
0

r3
0
1
1
1

r4
1
1
1
1

r5
1
1
1
1

Initialization
v1 [A]

v5 [ABC]

v2 [B]

v3 [C]

v4 [D]

v7 [ABCD]

v6 [BCD]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

75/268

Key and token graph – Example
A
B
C
D
Initialization
v1 [A]

v5 [ABC]

r3
0
1
1
1

r4
1
1
1
1

r5
1
1
1
1

v5 [ABC]

v2 [B]

v3 [C]

v4 [D]

r2
1
1
1
0

Covering
v1 [A]

v2 [B]

r1
0
1
0
0

v7 [ABCD]

v6 [BCD]

v3 [C]

v4 [D]

v7 [ABCD]

v6 [BCD]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

75/268

Key and token graph – Example
A
B
C
D
Initialization
v1 [A]

v5 [ABC]

r3
0
1
1
1

r4
1
1
1
1

v7 [ABCD]

v6 [BCD]

r5
1
1
1
1
Factorization

v5 [ABC]

v1 [A]

v2 [B]

v3 [C]

v4 [D]

r2
1
1
1
0

Covering
v1 [A]

v2 [B]

r1
0
1
0
0

v2 [B]

v3 [C]

v4 [D]

v7 [ABCD]

v6 [BCD]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

v5 [ABC]

v8 [BC]

v3 [C]

v4 [D]

v7 [ABCD]

v6 [BCD]

75/268

Key assignment and encryption schema φ and catalog
v1 [A]

v2 [B]

v5 [ABC]

v8 [BC]

v3 [C]

v7 [ABCD]

v4 [D]

u
A
B
C
D

φ (u)
v1 .l
v2 .l
v3 .l
v4 .l

r
r1
r2
r3
r4 ,r5

v6 [BCD]

φ (r)
v2 .l
v5 .l
v6 .l
v7 .l

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

source destination token_value
v1 .l
v5 .l
t1,5
v8 .l
t2,8
v2 .l
v3 .l
v8 .l
t3,8
v6 .l
t4,6
v4 .l
v7 .l
t5,7
v5 .l
v7 .l
t6,7
v6 .l
v8 .l
v5 .l
t8,5
v6 .l
t8,6
v8 .l
76/268

Multiple owners and policy changes
• When multiple owners need to share their data, the use of a key
agreement method allows two data owners to share a secret key
for subsequent cryptographic use [DFJPPS-10]
• When authorizations dynamically change, the data owner needs
to:
◦ download the resource from the server
◦ create a new key for the resource
◦ decrypt the resource with the old key
◦ re-encrypt the resource with the new key
◦ upload the resource to the server and communicate the public
catalog updates

=⇒ inefﬁcient
• Possible solution: over-encryption
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

77/268

Over-encryption [DFJPS-07]
• Resources are encrypted twice
◦ by the owner, with a key shared with the users and unknown to the
server (Base Encryption Layer - BEL level)
◦ by the server, with a key shared with authorized users
(Surface Encryption Layer - SEL level)

• To access a resource a user must know both the corresponding
BEL and SEL keys
• Grant and revoke operations may require
◦ the addition of new tokens at the BEL level
◦ the update of the SEL level according to the operations performed

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

78/268

BEL and SEL structures
• BEL. At the BEL level we distinguish two kinds of keys: access
(ka ) and derivation (k) keys
◦ each node in the BEL is associated with a pair of keys (k, ka ), where
ka = h(k), with h a one-way hash function, and a pair of labels (l, la )
◦ key k (with label l) is used for derivation purpose
◦ key ka (with label la ) is used to encrypt the resources associated
with the node
◦ this distinction separates the two roles associated with keys:
enabling key derivation and enabling resource access

• SEL. The SEL level is characterized by an encryption policy
deﬁned as previously illustrated

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

79/268

Full_SEL and Delta_SEL
• Full_SEL: starts from a SEL identical to the BEL and keeps the
SEL always updated to represent the current policy

• Delta_SEL: starts from an empty SEL and adds elements to it as
the policy evolves, such that the pair BEL-SEL represents the
policy

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

80/268

Running example for over-encryption
Access matrix
A
B
C
D
E
F

r1
0
0
0
1
0
0

r2
0
0
0
1
0
0

r3
0
1
1
0
0
0

r4
0
1
1
0
0
0

r5
0
1
1
0
0
0

r6
1
0
0
1
1
1

r7
1
0
0
1
1
1

r8
0
1
0
1
1
1

r9
1
1
1
1
1
1

Key and token graph
s1 [A]
s2 [B]

s8 [ADEF]
s7 [BC]

s3 [C]

s10 [ABCDEF]

s4 [D]
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

81/268

Initial conﬁguration for Full_SEL – Example
BEL
u
A
B
C
D
E
F

φb (u)
b1 .l
b2 .l
b3 .l
b4 .l
b5 .l
b6 .l

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

b1
b2

Full_SEL

φb (r)
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

u
A
B
C
D
E
F

b7

s2 [B]
b10

b4
b5

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

s1 [A]

b8

b3

φs (u)
s1 .l
s2 .l
s3 .l
s4 .l
s5 .l
s6 .l

φs (r)
s4 .l
s7 .l
s8 .l
s9 .l
s10 .l

s8 [ADEF]
s7 [BC]

s3 [C]

s10 [ABCDEF]

s4 [D]
b11

b9

b6
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]
82/268

Initial conﬁguration for Delta_SEL – Example
BEL
u
A
B
C
D
E
F

φb (u)
b1 .l
b2 .l
b3 .l
b4 .l
b5 .l
b6 .l

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

b1
b2

Delta_SEL

φb (r)
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

u
A
B
C
D
E
F

r
r 1 ,. . . ,r 9

φs (r)
NULL

s1 [A]

b8
b7

s2 [B]

b3

b10

b4
b5

φs (u)
s1 .l
s2 .l
s3 .l
s4 .l
s5 .l
s6 .l

s3 [C]
s4 [D]

b11

b9

b6
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

s5 [E]
s6 [F]
83/268

Algorithms for the evolution of SEL and BEL
• The evolution of the BEL and SEL are managed by:
◦ procedure over-encrypt that regulates the update process by
over-encrypting the resources at the SEL level
◦ grant and revoke procedures that are needed for granting and
revoking a privilege, respectively

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

84/268

Procedure over-encrypt (at SEL)
Receive from BEL requests of the form over-encrypt(U,R) to make the
set R of resources accessible only to users in U
1. for each resource in R, if currently over-encrypted =⇒ decrypt it;
2. if U =

ALL

end (no need to do anything);

3. check if ∃s s.t. s.key is derivable only by users in U;
if it does not exist, create it and add it to SEL graph
4. encrypt each resource r ∈ R with s.key and update φs (r) and the
corresponding table accordingly

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

85/268

Procedure Grant (at BEL)
Upon request to grant user u access to resource r, currently encrypted
with bj .key a
1. add u to acl(r)
2. if u cannot derive bj .key a =⇒ add a token from u’s key to bj .key a in
the BEL graph
3. if there is a set R′ of resources encrypted with bj .key a that should
not be accessible to u (need to be protected from u at SEL)
3.1. partition R′ in sets according to their acl (each set S ⊆ R′ includes all
resources with aclS )
3.2. for each set S, request over-encrypt(aclS ,S) to SEL

4. make r accessible by u at SEL
◦ Delta_SEL: if the set of users that can derive bj .key a is acl(r), call
over-encrypt(ALL,{r}); otherwise call over-encrypt(acl(r),{r})
◦ Full_SEL: call over-encrypt(acl(r),{r})
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

86/268

Procedure Revoke (at BEL)
Receive a request to revoke from user u access to resource r
1. remove u from acl(r)
2. request over-encrypt(acl(r),{r}) to SEL to make r accessible only
to users in acl(r)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

87/268

An example of grant operation – Full_SEL
BEL

A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

Full_SEL

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s8 [ADEF]
s7 [BC]

s3 [C]

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
s10 [ABCDEF]
r9

φs (r )
s4 .l
s7 .l
s8 .l
s9 .l
s10 .l

s4 [D]
b11

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

88/268

An example of grant operation – Full_SEL
BEL

Full_SEL

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s8 [ADEF]
s7 [BC]

s3 [C]

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
s10 [ABCDEF]
r9

φs (r )
s4 .l
s7 .l
s8 .l
s9 .l
s10 .l

s4 [D]
b11

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

88/268

An example of grant operation – Full_SEL
BEL

Full_SEL

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s8 [ADEF]
s7 [BC]

s3 [C]

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
s10 [ABCDEF]
r9

φs (r )
s4 .l
s7 .l
s8 .l
s9 .l
s10 .l

s4 [D]
b11

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

88/268

An example of grant operation – Full_SEL
BEL

Full_SEL
over_encrypt(BC,{r4,r5 })

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s8 [ADEF]
s7 [BC]

s3 [C]

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
s10 [ABCDEF]
r9

φs (r )
s4 .l
s7 .l
s8 .l
s9 .l
s10 .l

s4 [D]
b11

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

88/268

An example of grant operation – Full_SEL
BEL

Full_SEL
over_encrypt(BC,{r4,r5 })
over_encrypt(BCD,{r3})

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s8 [ADEF]
s7 [BC]

s3 [C]

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
s10 [ABCDEF]
r9

φs (r )
s4 .l
s7 .l
s8 .l
s9 .l
s10 .l

s4 [D]
b11

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

88/268

An example of grant operation – Full_SEL
BEL

Full_SEL
over_encrypt(BC,{r4,r5 })
over_encrypt(BCD,{r3})

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]
s3 [C]

s8 [ADEF]
s7 [BC]
s12 [BCD]

s4 [D]
b11

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r3
r 6 ,r 7
s10 [ABCDEF]
r8
r9

φs (r )
s4 .l
s7 .l
s12 .l
s8 .l
s9 .l
s10 .l

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

88/268

An example of grant operation – Delta_SEL
BEL

A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

Delta_SEL

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

r φS (r )
r 1 ,r 2 ,r 3 ,r 4 ,r 5 ,r 6 ,r 7 ,r 8 ,r 9 NULL
r 4 ,r 5 s7 .l

s3 [C]
s4 [D]
s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

89/268

An example of grant operation – Delta_SEL
BEL

Delta_SEL

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

r φS (r )
r 1 ,r 2 ,r 3 ,r 4 ,r 5 ,r 6 ,r 7 ,r 8 ,r 9 NULL
r 4 ,r 5 s7 .l

s3 [C]
s4 [D]
s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

89/268

An example of grant operation – Delta_SEL
BEL

Delta_SEL

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

r φS (r )
r 1 ,r 2 ,r 3 ,r 4 ,r 5 ,r 6 ,r 7 ,r 8 ,r 9 NULL
r 4 ,r 5 s7 .l

s3 [C]
s4 [D]
s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

89/268

An example of grant operation – Delta_SEL
BEL

Delta_SEL
over_encrypt(BC,{r4,r5 })

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

r φS (r )
r 1 ,r 2 ,r 3 ,r 4 ,r 5 ,r 6 ,r 7 ,r 8 ,r 9 NULL
r 4 ,r 5 s7 .l

s3 [C]
s4 [D]
s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

89/268

An example of grant operation – Delta_SEL
BEL

Delta_SEL
over_encrypt(BC,{r4,r5 })

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

r φS (r )
r 1 ,r 2 ,r 3 ,r 4 ,r 5 ,r 6 ,r 7 ,r 8 ,r 9 NULL
r 4 ,r 5 s7 .l

s3 [C]
s4 [D]
s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

89/268

An example of grant operation – Delta_SEL
BEL

Delta_SEL
over_encrypt(BC,{r4,r5 })
over_encrypt(ALL,r 3 )

grant(D,r3 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

r φS (r )
r 1 ,r 2 ,r 3 ,r 4 ,r 5 ,r 6 ,r 7 ,r 8 ,r 9 NULL
r 4 ,r 5 s7 .l

s3 [C]
s4 [D]
s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

89/268

An example of revoke operation – Full_SEL
BEL

A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

Full_SEL
r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]
s3 [C]

s8 [ADEF]
s7 [BC]
s12 [BCD]

s10 [ABCDEF]

s4 [D]
b11

r
r 1 ,r 2
r3
r 4 ,r 5
r 6 ,r 7
r8
r9

φs (r )
s4 .l
s12 .l
s7 .l
s8 .l
s9 .l
s10 .l

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

90/268

An example of revoke operation – Full_SEL
BEL

Full_SEL

revoke(F,r 8 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]
s3 [C]

s8 [ADEF]
s7 [BC]
s12 [BCD]

s10 [ABCDEF]

s4 [D]
b11

r
r 1 ,r 2
r3
r 4 ,r 5
r 6 ,r 7
r8
r9

φs (r )
s4 .l
s12 .l
s7 .l
s8 .l
s9 .l
s10 .l

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

90/268

An example of revoke operation – Full_SEL
BEL

Full_SEL
over_encrypt(BDE,{r 8})

revoke(F,r 8 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]
s3 [C]

s8 [ADEF]
s7 [BC]
s12 [BCD]

s10 [ABCDEF]

s4 [D]
b11

r
r 1 ,r 2
r3
r 4 ,r 5
r 6 ,r 7
r8
r9

φs (r )
s4 .l
s12 .l
s7 .l
s8 .l
s9 .l
s10 .l

b9
s5 [E]

s11 [DEF]

s9 [BDEF]

s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

90/268

An example of revoke operation – Full_SEL
BEL

Full_SEL
over_encrypt(BDE,{r 8})

revoke(F,r 8 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]
s3 [C]

s8 [ADEF]
s7 [BC]
s12 [BCD]

s4 [D]
b11

s10 [ABCDEF]

r
r 1 ,r 2
r3
r 4 ,r 5
r 6 ,r 7
r8
r8
r9

φs (r )
s4 .l
s12 .l
s7 .l
s8 .l
s9 .l
s13 .l
s10 .l

b9
s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

s13 [BDE]

90/268

An example of revoke operation – Delta_SEL
BEL
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

Delta_SEL
r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

s3 [C]
s4 [D]

r φS (r )
r 1 ,r 2 ,r 3 NULL
r 4 ,r 5 s7 .l
r 6 ,r 7 ,r 8 ,r 9 NULL

s13 [BDE]

s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

91/268

An example of revoke operation – Delta_SEL
BEL

Delta_SEL

revoke(F,r 8 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

s3 [C]
s4 [D]

r φS (r )
r 1 ,r 2 ,r 3 NULL
r 4 ,r 5 s7 .l
r 6 ,r 7 ,r 8 ,r 9 NULL

s13 [BDE]

s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

91/268

An example of revoke operation – Delta_SEL
BEL

Delta_SEL
over_encrypt(BDE,{r 8})

revoke(F,r 8 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

s3 [C]
s4 [D]

r φS (r )
r 1 ,r 2 ,r 3 NULL
r 4 ,r 5 s7 .l
r 6 ,r 7 ,r 8 ,r 9 NULL

s13 [BDE]

s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

91/268

An example of revoke operation – Delta_SEL
BEL

Delta_SEL
over_encrypt(BDE,{r 8})

revoke(F,r 8 )
A

b1

B

b2

C

b3

D

b4

E

b5

F

b6

b8
b7
b10

b11

b9

r
r 1 ,r 2
r 3 ,r 4 ,r 5
r 6 ,r 7
r8
r9

φb (r )
b4 .la
b7 .la
b8 .la
b9 .la
b10 .la

s1 [A]
s2 [B]

s7 [BC]

s3 [C]
s4 [D]

r φs (r )
r 1 ,r 2 ,r 3 NULL
r 4 ,r 5 s7 .l
r 6 ,r 7 ,r 8 ,r 9 NULL
r 8 s13 .l

s13 [BDE]

s5 [E]
s6 [F]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

91/268

Protection evaluation
• The BEL and SEL encryption policy are equivalent to the
authorization policy at initialization time
• Procedure grant, revoke, and over-encryption preserve the
equivalence
• The key derivation function adopted is secure
• All the encryption functions and the tokens are robust and cannot
be broken
• Each user correctly manages her keys, without the possibility for a
user to steal keys from another user
• Vulnerable to collusion?

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

92/268

Collusion attacks
• Collusion exists every time two entities combining their knowledge
can acquire knowledge that neither of them has access to
◦ collusion among users
◦ collusion with the server

• Collusion attacks depend on the different views that one can have
on a resource r
• We assume users to be not oblivious

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

93/268

Views on resource r – 1
• Four views:
◦ open: the user knows the key at the BEL level as well as the key at
the SEL level
◦ locked: the user knows neither the key at the BEL level nor the key
at the SEL level
◦ sel_locked: the user knows only the key at the BEL level but does
not know the key at the SEL level
◦ bel_locked: the user knows only the key at the SEL level but does
not know the one at the BEL level

• The server always has the bel_locked view

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

94/268

Views on resource r – 2

Server’s view

User’s view

SEL

SEL

BEL

r

SEL

BEL

SEL

BEL

SEL

BEL

BEL

r

r

r

r

open

locked

sel_locked

bel_locked

• Each layer is depicted as a fence
◦ discontinuous, if the key is known
◦ continuous, if the key is not known (protection cannot be passed)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

95/268

Classiﬁcation of users
• Consider a resource r and the history of its acl(r)
• Users in acl(r) can be classiﬁed into 4 categories

acl(r)

Past_acl

Bel_accessible

All users

• Collusion risk for r iff there are users in Bel_accessible that do not
belong to Past_acl

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

96/268

View transitions in the Full_SEL – 1
SEL
BEL

r
SEL
BEL

open
SEL

r

BEL

r

sel_locked

locked

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

97/268

View transitions in the Full_SEL – 2
A user can have the sel_locked view on r due to:
• past acl or
• policy split: u is authorized to access r′ (not r), encrypted at the
BEL level with the same key as r
SEL

SEL

BEL

BEL

r r’

grant(r’,u)

locked

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

r
sel_locked

r’
open

98/268

View transitions in the Delta_SEL – 1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

99/268

View transitions in the Delta_SEL – 2
The view of a user u′ on r can evolve from bel_locked to locked due to:
• policy split: u is authorized to access r′ (not r), encrypted at the
BEL level with the same key as r
u

SEL
BEL

r
u,u'

r’

SEL
sel_locked open

BEL

r r’

grant (r',u)

u'

SEL

bel_locked

BEL

r
locked

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

r’
bel_locked

100/268

Collusion in the Full_SEL
• Collusion among users:
◦ not a problem: users never gain in the exchange

• Collusion with the server:
◦ users in Bel_accessible who have a sel_locked view and who never
had the authorization to access the resource
◦ exposure is limited to resources involved in a policy split to make
other resources, encrypted with the same BEL key, available to the
user
=⇒ easily identiﬁable; can be avoided by re-encrypting

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

101/268

Collusion in the Delta_SEL
• A single user by herself can hold the two different views:
sel_locked and bel_locked
◦ a user could retrieve the resources at initial time, when she is not
authorized, getting and storing at her side resources’ bel_locked
views
◦ if the user acquires the sel_locked view on a resource r (the user is
released φ (r) to make accessible to her another resource r′ )
she can enjoy the open view on r

• Again, exposure is limited to resources involved in a policy split
=⇒ easily identiﬁable; can be avoided by re-encrypting

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

102/268

Mix&Slice for Policy Revocation

E. Bacis, S. De Capitani di Vimercati, S. Foresti, S. Paraboschi, M. Rosa, P. Samarati, “Mix&slice for Efﬁcient Access Revocation
on Outsourced Data,” in IEEE Transactions on Dependable and Secure Computing (TDSC), 2023.
E. Bacis, S. De Capitani di Vimercati, S. Foresti, S. Paraboschi, M. Rosa, P. Samarati, “Mix&Slice: Efﬁcient Access Revocation
in the Cloud,” in Proc. of the 23rd ACM Conference on Computer and Communications Security (CCS 2016), Vienna, Austria,
October 2016.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

103/268

Mix&Slice
• Over-encryption requires support by the server (i.e., the server
implements more than simple get/put methods)
• Alternative solution to enforce revoke operations: Mix&Slice
• Use different rounds of encryption to provide complete mixing of
the resource
=⇒ unavailability of a small portion of the encrypted resource prevents
its (even partial) reconstruction

• Slice the resource into fragments and, every time a user is revoked
access to the resource, re-encrypt a randomly chosen fragment
=⇒ lack of a fragment prevents resource decryption
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

104/268

Resource organization
• Block: sequence of bits input to a block cipher
Block: AES uses block of 128 bits
Mini-block:
Mini-block:
Mini-block:
Mini-block:

sequence of bits in a block
it is our atomic unit of protection
mini-blocks of 32 bits imply a cost of
232 for brute-force attacks

Macro-block: sequence of blocks
Macro-block: mixing operates at the level of macro-block
Macro-block: a macro-block of 1KB includes 8 blocks

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

105/268

Resource organization
• Block: sequence of bits input to a block cipher
Block: AES uses block of 128 bits
• Mini-block: sequence of bits in a block
Mini-block: it is our atomic unit of protection
Mini-block: mini-blocks of 32 bits imply a cost of
Mini-block: 232 for brute-force attacks
Macro-block: sequence of blocks
Macro-block: mixing operates at the level of macro-block
Macro-block: a macro-block of 1KB includes 8 blocks

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

105/268

Resource organization
• Block: sequence of bits input to a block cipher
Block: AES uses block of 128 bits
• Mini-block: sequence of bits in a block
Mini-block: it is our atomic unit of protection
Mini-block: mini-blocks of 32 bits imply a cost of
Mini-block: 232 for brute-force attacks
• Macro-block: sequence of blocks
Macro-block: mixing operates at the level of macro-block
Macro-block: a macro-block of 1KB includes 8 blocks

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

105/268

Mixing – 1
• When encryption is applied to a block, all the mini-blocks are
mixed
+ absence of a mini-block in a block from the result prevents
reconstruction of the block
− does not prevent the reconstruction of other blocks in the resource

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

106/268

Mixing – 2
• Extend mixing to a macro-block
◦ iteratively apply block encryption
◦ at iteration i, each block has a mini-block for each encrypted block
obtained at iteration i − 1 (at distance 4i−1 )
◦ x rounds mix 4x mini-blocks
[0]

0

[1]

0

[2]

0

[3]

0

[4]

0

[5]

1

[1]

1

[2]

1

[3]

1

[4]

1

[5]

E
[0]

2

[1]

2

0

[7]

0

[8]

0

[9]

0

1

[6]

1

[7]

1

[8]

1

[9]

1

E
[2]

2

[3]

2

[4]

2

[5]

2

[10] [11] [12] [13] [14] [15]
0

0

0

2

[7]

2

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

[8]

2

[9]

2

0

0

[10] [11] [12] [13] [14] [15]
1

1

1

1

1

1

E

E
[6]

0

E

E

E

E
[0]

[6]

0

[10] [11] [12] [13] [14] [15]
2

2

2

2

2

2

107/268

Slicing – 1
• To be mixed, large resources require large macro-blocks
− many rounds of encryption
− considerable computation and data transfer overhead

• Large resources are split in different macro-blocks for encryption
• Absence of a mini-block for each macro-block prevents the (even
partial) reconstruction of the resource

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

108/268

Slicing – 2
• Slice resources in fragments having a mini-block for each
macro-block (the ones in the same position)
◦ absence of a fragment prevents reconstruction of the resource

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

109/268

Revoke
To revoke user u access to a resource r
1. randomly select a fragment Fi of r and download it
2. decrypt Fi
3. generate a new key kl that u does not know and cannot derive
(generated with key regression and seed encrypted with new ACL)
4. re-encrypt Fi with the new key kl
5. upload the encrypted fragment

macroblock

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

fragment

F 00 F 10 F 20 F 30 F 40 F 50 F 60 F 70 F 80 F 90 F100 F110 F120 F130 F140 F150

110/268

Revoke
To revoke user u access to a resource r
1. randomly select a fragment Fi of r and download it
2. decrypt Fi
3. generate a new key kl that u does not know and cannot derive
(generated with key regression and seed encrypted with new ACL)
4. re-encrypt Fi with the new key kl
5. upload the encrypted fragment
F 00 F 10 F 20 F 30 F 40 F 50 F 60 F 70 F 80 F 90

F110 F120 F130 F140 F150

fragment

F101
macroblock

k0
key

k1

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

110/268

Revoke
To revoke user u access to a resource r
1. randomly select a fragment Fi of r and download it
2. decrypt Fi
3. generate a new key kl that u does not know and cannot derive
(generated with key regression and seed encrypted with new ACL)
4. re-encrypt Fi with the new key kl
5. upload the encrypted fragment
F 00 F 10 F 20 F 30

F 50 F 60 F 70 F 80 F 90

F110 F120 F130 F140 F150

F 42

fragment

F101
macroblock

k0

key

k1
k2

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

110/268

Revoke
To revoke user u access to a resource r
1. randomly select a fragment Fi of r and download it
2. decrypt Fi
3. generate a new key kl that u does not know and cannot derive
(generated with key regression and seed encrypted with new ACL)
4. re-encrypt Fi with the new key kl
5. upload the encrypted fragment

macroblock

F 50 F 60 F 70 F 80 F 90

F110 F120 F130 F140 F150

F 42
F103

fragment

F 00 F 10 F 20 F 30

k0

key

k1
k2
k3

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

110/268

Effectiveness of the approach
• A revoked user does not know the encryption key of at least one
fragment
◦ a brute force attack is needed to reconstruct the fragment (and the
resource)
◦ 2msize attempts, with msize the number of bits in a mini-block

• A user can locally store floc of the f fragments of a resource
◦ probability to be able to reconstruct the resource after fmiss
fragments have been re-encrypted: P = (floc /f )fmiss
− proportional to the number of locally stored fragments
− decreases exponentially with the number of policy updates

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

111/268

Write Authorizations

S. De Capitani di Vimercati, S. Foresti, S. Jajodia, S. Paraboschi, P. Samarati, “Support for Write Privileges on Outsourced Data,” in
Proc. of SEC, Heraklion, Crete, Greece, June 2012.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

112/268

Write authorizations
Problem:
• The support of only read accesses may be limiting
=⇒ users may be authorized to modify resources

• Keys regulating read accesses cannot regulate write accesses
=⇒ the set w[o] of users authorized to write o may be a subset of the
set r[o] of users authorized to read o

Solution: associate a write tag tag[o] with each resource o encrypted
with a key
• known to the users in w[o] (derivable from the key of w[o] via
secure hashing)
• known to the storage server (derivable from its key via tokens)
=⇒ write authorized iff u proves knowledge of tag[o] to the server
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

113/268

Key derivation graph
• Key derivation graph extended with the storage server S
• The key derivation graph has
◦ a key ku for each user u
◦ a key kS for the storage server S
◦ a key kr[o] for each read access control list r[o]
◦ a key kw[o] for each write access control list w[o]
◦ a key kw[o]∪{S} for each write access control list, extended with
the server w[o]∪{S}
◦ a secure hash function h to compute kw[o]∪{S} from kw[o]
◦ a set of tokens that permit each user u to derive kr[o] (kw[o] ) s.t.
u∈r[o] (u∈w[o])
◦ a set of tokens that permit the storage server S to derive kw[o]∪{S}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

114/268

Key derivation graph – Example
Alice

o1

A

tag[o1]

AB
Bob

B

ABC

o2
tag[o2]

BCD
Carol

C

David

D

tag[o3]
o3

CD

tag[o4]
o4

o r[o] w[o]
o1 ABC AB
o2 BCDCD
o3 ABC C
o4 AB AB
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

key assignment/
encryption
token

115/268

Key derivation graph – Example
Alice

o1

A
AB

Bob

B

Server

S

tag[o1]

ABS
ABC

tag[o2]

CS
BCD

Carol

C

David

D

o2
tag[o3]
o3

CD

CDS

tag[o4]
o4

o r[o] w[o]
o1 ABC AB
o2 BCD CD
o3 ABC C
o4 AB AB
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

key assignment/
encryption
hash
token

115/268

Authorization enforcement
• The data owner deﬁnes the key derivation graph and
◦ communicates to each user u key ku
◦ communicates to the storage server S key kS
◦ encrypts each resource o with key kr[o]
◦ encrypts the write tag tag[o] of each resource o with key kw[o]∪{S}

• Read accesses
◦ u can read o iff she can decrypt its content (i.e., if u∈r[o])

• Write accesses
◦ u sends a request to write o to the storage server
◦ the server accepts the request only if u provides (plaintext) tag[o]
◦ u can provide tag[o] only if u can decrypt it (i.e., if u∈w[o])
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

116/268

Structure of outsourced resources

METADATA



r_label
 w_label

 o_id
encw_tag

RESOURCE



lr[o]
lw[o]∪{S}
o_id
E(tag[o], kw[o]∪{S} )

label of the key used for o
label of the key used for tag[o]
object identiﬁer
encrypted write tag

encr_resource E(o, kr[o] ) encrypted resource

encw_ts E(ts, kw[o]∪{S} )
timestamp
user_tag HMAC(o||u_t′ ||ts, ku ) tag for the owner
group_tag HMAC(o||ts, kw[o] )
tag for writers

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

117/268

Authorization enforcement – Example
Alice

o1

A
AB

Bob

B

Server

S

tag[o1]

ABS

o2

ABC

tag[o2]

CS

tag[o3]

BCD
Carol

o3

C
CD

David

CDS

tag[o4]

D

o4
o r[o]
o1 ABC
o2 BCD
o3 ABC
o4 AB

w[o]
AB
CD
C
AB

r_label w_label o_id encw_tag encr_resource
lABC
lBCD
lABC
lAB

lABS
lCDS
lCS
lABS

1
2
3
4

α
β
γ
δ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

zKZlJxVcCrC0g
t9qdJqC7AImXU
AxalPH8Kv37Ts
xwfPJSLn.MVqY

li
lA
lB
lB
lC
lC
lD
lAB
lCD
lS
lS
lS

lj
lAB
lAB
lBCD
lABC
lCD
lCD
lABC
lBCD
lCS
lABS
lCDS

ti,j
kAB ⊕h(kA ,lAB )
kAB ⊕h(kB ,lAB )
kBCD ⊕h(kB ,lBCD )
kABC ⊕h(kC ,lABC )
kCD ⊕h(kC ,lCD )
kCD ⊕h(kD ,lCD )
kABC ⊕h(kAB ,lABC )
kBCD ⊕h(kCD ,lBCD )
kCS ⊕h(kS ,lCS )
kABS ⊕h(kS ,lABS )
kCDS ⊕h(kS ,lCDS )

118/268

Authorization enforcement – Example
Alice

o1

A
AB

Bob

B

Server

S

tag[o1]

ABS

o2

ABC

tag[o2]

CS

tag[o3]

BCD
Carol

o3

C
CD

David

CDS

tag[o4]

D

o4
o r[o]
o1 ABC
o2 BCD
o3 ABC
o4 AB

w[o]
AB
CD
C
AB

r_label w_label o_id encw_tag encr_resource
lABC
lBCD
lABC
lAB

lABS
lCDS
lCS
lABS

1
2
3
4

α
β
γ
δ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

zKZlJxVcCrC0g
t9qdJqC7AImXU
AxalPH8Kv37Ts
xwfPJSLn.MVqY

li
lA
lB
lB
lC
lC
lD
lAB
lCD
lS
lS
lS

lj
lAB
lAB
lBCD
lABC
lCD
lCD
lABC
lBCD
lCS
lABS
lCDS

ti,j
kAB ⊕h(kA ,lAB )
kAB ⊕h(kB ,lAB )
kBCD ⊕h(kB ,lBCD )
kABC ⊕h(kC ,lABC )
kCD ⊕h(kC ,lCD )
kCD ⊕h(kD ,lCD )
kABC ⊕h(kAB ,lABC )
kBCD ⊕h(kCD ,lBCD )
kCS ⊕h(kS ,lCS )
kABS ⊕h(kS ,lABS )
kCDS ⊕h(kS ,lCDS )

118/268

Authorization enforcement – Example
Alice

o1

A
AB

Bob

B

Server

S

tag[o1]

ABS

o2

ABC

tag[o2]

CS

tag[o3]

BCD
Carol

o3

C
CD

David

CDS

tag[o4]

D

o4
o r[o]
o1 ABC
o2 BCD
o3 ABC
o4 AB

w[o]
AB
CD
C
AB

r_label w_label o_id encw_tag encr_resource
lABC
lBCD
lABC
lAB

lABS
lCDS
lCS
lABS

1
2
3
4

α
β
γ
δ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

zKZlJxVcCrC0g
t9qdJqC7AImXU
AxalPH8Kv37Ts
xwfPJSLn.MVqY

li
lA
lB
lB
lC
lC
lD
lAB
lCD
lS
lS
lS

lj

ti,j

lAB
lAB
lBCD
lABC
lCD
lCD
lABC
lBCD
lCS
lABS
lCDS

kAB ⊕ h(kA , lAB )
kAB ⊕h(kB ,lAB )
kBCD ⊕h(kB ,lBCD )
kABC ⊕h(kC ,lABC )
kCD ⊕h(kC ,lCD )
kCD ⊕h(kD ,lCD )
kABC ⊕ h(kAB , lABC )
kBCD ⊕h(kCD ,lBCD )
kCS ⊕h(kS ,lCS )
kABS ⊕h(kS ,lABS )
kCDS ⊕h(kS ,lCDS )

118/268

Authorization enforcement – Example
Alice

o1

A
AB

Bob

B

Server

S

tag[o1]

ABS

o2

ABC

tag[o2]

CS

tag[o3]

BCD
Carol

o3

C
CD

David

CDS

tag[o4]

D

o4
o r[o]
o1 ABC
o2 BCD
o3 ABC
o4 AB

w[o]
AB
CD
C
AB

r_label w_label o_id encw_tag encr_resource
lABC
lBCD
lABC
lAB

lABS
lCDS
lCS
lABS

1
2
3
4

α
β
γ
δ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

zKZlJxVcCrC0g
t9qdJqC7AImXU
AxalPH8Kv37Ts
xwfPJSLn.MVqY

li
lA
lB
lB
lC
lC
lD
lAB
lCD
lS
lS
lS

lj

ti,j

lAB
lAB
lBCD
lABC
lCD
lCD
lABC
lBCD
lCS
lABS
lCDS

kAB ⊕ h(kA , lAB )
kAB ⊕h(kB ,lAB )
kBCD ⊕h(kB ,lBCD )
kABC ⊕h(kC ,lABC )
kCD ⊕h(kC ,lCD )
kCD ⊕h(kD ,lCD )
kABC ⊕ h(kAB , lABC )
kBCD ⊕h(kCD ,lBCD )
kCS ⊕h(kS ,lCS )
kABS ⊕h(kS ,lABS )
kCDS ⊕h(kS ,lCDS )

118/268

Authorization enforcement – Example
Alice

o1

A
AB

Bob

B

Server

S

tag[o1]

ABS

o2

ABC

tag[o2]

CS

tag[o3]

BCD
Carol

o3

C
CD

David

CDS

tag[o4]

D

o4
o r[o]
o1 ABC
o2 BCD
o3 ABC
o4 AB

w[o]
AB
CD
C
AB

r_label w_label o_id encw_tag encr_resource
lABC
lBCD
lABC
lAB

lABS
lCDS
lCS
lABS

1
2
3
4

α
β
γ
δ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

zKZlJxVcCrC0g
t9qdJqC7AImXU
AxalPH8Kv37Ts
xwfPJSLn.MVqY

li
lA
lB
lB
lC
lC
lD
lAB
lCD
lS
lS
lS

lj
lAB
lAB
lBCD
lABC
lCD
lCD
lABC
lBCD
lCS
lABS
lCDS

ti,j
kAB ⊕h(kA ,lAB )
kAB ⊕h(kB ,lAB )
kBCD ⊕h(kB ,lBCD )
kABC ⊕h(kC ,lABC )
kCD ⊕h(kC ,lCD )
kCD ⊕h(kD ,lCD )
kABC ⊕h(kAB ,lABC )
kBCD ⊕h(kCD ,lBCD )
kCS ⊕h(kS ,lCS )
kABS ⊕h(kS ,lABS )
kCDS ⊕h(kS ,lCDS )

118/268

Authorization enforcement – Example
Alice

o1

A
AB

Bob

B

Server

S

tag[o1]

ABS

o2

ABC

tag[o2]

CS

tag[o3]

BCD
Carol

o3

C
CD

David

CDS

tag[o4]

D

o4
o r[o]
o1 ABC
o2 BCD
o3 ABC
o4 AB

w[o]
AB
CD
C
AB

r_label w_label o_id encw_tag encr_resource
lABC
lBCD
lABC
lAB

lABS
lCDS
lCS
lABS

1
2
3
4

α
β
γ
δ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

zKZlJxVcCrC0g
t9qdJqC7AImXU
AxalPH8Kv37Ts
xwfPJSLn.MVqY

li
lA
lB
lB
lC
lC
lD
lAB
lCD
lS
lS
lS

lj
lAB
lAB
lBCD
lABC
lCD
lCD
lABC
lBCD
lCS
lABS
lCDS

ti,j
kAB ⊕h(kA ,lAB )
kAB ⊕h(kB ,lAB )
kBCD ⊕h(kB ,lBCD )
kABC ⊕h(kC ,lABC )
kCD ⊕h(kC ,lCD )
kCD ⊕h(kD ,lCD )
kABC ⊕h(kAB ,lABC )
kBCD ⊕h(kCD ,lBCD )
kCS ⊕h(kS ,lCS )
kABS ⊕ h(kS , lABS )
kCDS ⊕h(kS ,lCDS )

118/268

Write integrity
• The data owner needs to verify the proper behavior of users and
storage server
• Write integrity control
◦ allows detecting resource tampering
◦ discourages improper behaviors
◦ provides non repudiation

• Straightforward solution: signature-based approach
◦ users sign the resource with their private key
◦ the data owner checks if the signature has been produced by an
authorized user for the resource content
=⇒ it is computationally expensive

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

119/268

HMAC-based approach
• Each resource o has
◦ a timestamp, encw_ts, of the last write operation
◦ a user_tag computed as the HMAC, with the key ku of the writer,
over o, the old value of the user_tag, and the timestamp of the write
operation
◦ a group_tag computed as the HMAC, with key kw[o] , over o and the
timestamp of the write operation

• At each write operation, the writer updates the user_tag and
group_tag
• Aggregated signature guarantees metadata integrity and that no
resource is dropped

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

120/268

Integrity tags
• User_tag of resource o
◦ write integrity and accountability of user actions
◦ checked only by the data owner

• Group_tag of resource o
◦ write integrity of the resource content
◦ checked by all the users in w[o]

• Permit to detect
◦ tampering by S with o =⇒ S cannot produce a valid user_tag for o
◦ tampering by S with tag[o] to include u in w[o] =⇒ u cannot produce
valid integrity tags
◦ unauthorized write operations by u =⇒ u cannot produce valid
integrity tags
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

121/268

Structure of outsourced resources

METADATA



r_label
 w_label

 o_id
encw_tag

RESOURCE



lr[o]
lw[o]∪{S}
o_id
E(tag[o], kw[o]∪{S} )

label of the key used for o
label of the key used for tag[o]
object identiﬁer
encrypted write tag

encr_resource E(o, kr[o] ) encrypted resource


WRITE INTEGRITY 

encw_ts E(ts, kw[o]∪{S} )
timestamp
user_tag HMAC(o||u_t′ ||ts, ku ) tag for the owner
group_tag HMAC(o||ts, kw[o] )
tag for writers

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

122/268

Other issues
• Write integrity controlled by any reader
• Support for write privileges for data collections with multiple
owners
• Selective encryption for supporting subscription-based
authorization policies [DFJL-12]
◦ users are authorized to access all and only the resources published
during their subscribed periods
◦ user authorizations remain valid also after the expiration of their
subscriptions
=⇒ need to take into account both the subscriptions of the users
and the time when resources have been published
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

123/268

Fragmentation and Encryption

Fragmentation and encryption
• Encryption makes query evaluation and application execution
more expensive or not always possible
• Often what is sensitive is the association between values of
different attributes, rather than the values themselves
◦ e.g., association between employee’s names and salaries

=⇒protect associations by breaking them, rather than encrypting
• Recent solutions for enforcing privacy requirements couple:
◦ encryption
◦ data fragmentation

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

125/268

Conﬁdentiality constraints
• Sets of attributes such that the (joint) visibility of values of the
attributes in the sets should be protected
• Sensitive attributes: the values of some attributes are considered
sensitive and should not be visible
=⇒ singleton constraints
• Sensitive associations: the associations among values of given
attributes are sensitive and should not be visible
=⇒ non-singleton constraints

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

126/268

Conﬁdentiality constraints – Example
R = (Name,DoB,Gender,Zip,Position,Salary,Email,Telephone)
• {Telephone}, {Email}
◦ attributes Telephone and Email are sensitive (cannot be stored in
the clear)

• {Name,Salary}, {Name,Position}, {Name,DoB}
◦ attributes Salary, Position, and DoB are private of an individual and
cannot be stored in the clear in association with the name

• {DoB,Gender,Zip,Salary}, {DoB,Gender,Zip,Position}
◦ attributes DoB, Gender, Zip can work as quasi-identiﬁer

• {Position,Salary}, {Salary,DoB}
◦ association rules between Position and Salary and between Salary
and DoB need to be protected from an adversary

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

127/268

Outline
• Data fragmentation
◦ Non-communicating pair of servers [ABGGKMSTX-05]
◦ Multiple non-linkable fragments [CDFJPS-07,CDFJPS-10]
◦ Departing from encryption: Keep a few [CDFJPS-09b]
◦ Fragmentation and inferences [DFJLPS-14]

• Publishing obfuscated associations
◦ Anonymizing bipartite graph [CSYZ-08]
◦ Fragments and loose associations [DFJPS-10]
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

128/268

Non-communicating pair of servers
• Conﬁdentiality constraints are enforced by splitting information
over two independent servers that cannot communicate (need to
be completely unaware of each other) [ABGGKMSTX-05]
◦ Sensitive associations are protected by distributing the attributes
among the two servers
◦ Encryption is applied only when explicitly demanded by the
conﬁdentiality constraints or when storing an attribute in any of the
two servers would expose at least a sensitive association

• E ∪ C1 ∪ C2 = R
• C1 ∪ C2 ⊆ R

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

129/268

Enforcing conﬁdentiality constraints
• Conﬁdentiality constraints C deﬁned over a relation R are
enforced by decomposing R as hR1 , R2 , Ei where:
◦ R1 and R2 include a unique tuple ID needed to ensure lossless
decomposition
◦ R1 ∪ R2 = R
◦ E is the set of encrypted attributes and E ⊆ R1 , E ⊆ R2
◦ for each c ∈ C , c 6⊆ (R1 − E) and c 6⊆ (R2 − E)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

130/268

Non-communicating pair of servers – Example

SSN
t1
t2
t3
t4
t5
t6
t7
t8

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567

PATIENTS
Name
YoB

Job

Disease

Alice
Bob
Carol
David
Eva
Frank
Gary
Hilary

Clerk
Doctor
Nurse
Lawyer
Doctor
Doctor
Teacher
Nurse

Asthma
Asthma
Asthma
Bronchitis
Bronchitis
Gastritis
Gastritis
Diabetes

1980
1980
1970
1970
1970
1960
1960
1960

F1
tid Name YoB SSNk Diseasek
1
2
3
4
5
6
7
8

Alice
Bob
Carol
David
Eva
Frank
Gary
Hilary

1980
1980
1970
1970
1970
1960
1960
1960

jdkis
u9hs9
j9und
p0vp8
8nn[
j9jMK
87l’D
8pm}n

hyaf4k
j97;qx
9jp‘md
p;nd92
0-mw-n
wqp9[i
L0MB2G
@h8hwu

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

tid Job
1
2
3
4
5
6
7
8

Clerk
Doctor
Nurse
Lawyer
Doctor
Doctor
Teacher
Nurse

c0
c1
c2
c3

= {SSN}
= {Name, Disease}
= {Name, Job}
= {Job, Disease}

F2
SSNk

Diseasek

uwq8hd
j-0.dl;
8ojqdkf
j0i12nd
mj[9;’s
aQ14l[
8qsdQW
0890UD

jsd7ql
0],nid
j-0/?n
5lkdpq
j0982e
jnd%d
OP[’
UP0D@
131/268

Query execution
At the logical level: replace R with R1 ⊲⊳ R2
Query plans:
• Fetch R1 and R2 from the servers and execute the query locally
◦ extremely expensive

• Involve servers S1 and S2 in the query evaluation
◦ can do the usual optimizations, e.g. push down selections and
projections
◦ selections cannot be pushed down on encrypted attributes
◦ different options for executing queries:
− send sub-queries to both S1 and S2 in parallel, and join the results at
the client
− send only one of the two sub-queries, say to S1 ; the tuple IDs of the
result from S1 are then used to perform a semi-join with the result of
the sub-query of S2 to ﬁlter R2
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

132/268

Query execution – Example
• F1 : (tid,Name,YoB,SSNk ,Diseasek )
• F2 : (tid,Job,SSNk ,Diseasek )

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

133/268

Identifying the optimal decomposition – 1
Brute force approach for optimizing wrt workload W:
• For each possible safe decomposition of R:
◦ optimize each query in W for the decomposition
◦ estimate the total cost for executing the queries in W using the
optimized query plans

• Select the decomposition that has the lowest overall query cost
Too expensive! =⇒ Exploit afﬁnity matrix

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

134/268

Identifying the optimal decomposition – 2
Adapted afﬁnity matrix M:
• Mi,j : ‘cost’ of placing cleartext attributes i and j in different
fragments
• Mi,i : ‘cost’ of placing encrypted attribute i (across both fragments)
Goal: Minimize

∑
i,j:i∈(R1 −E),j∈(R2 −E)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Mi,j + ∑ Mi,i
i∈E

135/268

Identifying the optimal decomposition – 3
Optimization problem equivalent to hypergraph coloring problem
Given relation R, deﬁne graph G(R):
• attributes are vertexes
• afﬁnity value Mi,j =⇒ weight of arc (i, j)
• afﬁnity value Mi,i =⇒ weight of vertex i
• conﬁdentiality constraints C represent a hypergraph H(R, C ) on
the same vertexes

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

136/268

Identifying the optimal decomposition – 4
Find a 2-coloring of the vertexes such that:
• no hypergraph edge is monochromatic
• the weight of bichromatic edges is minimized
• a vertex can be deleted (i.e., encrypted) by paying the price equal
to the vertex weight
Coloring a vertex is equivalent to place it in one of the two fragments.
The 2-coloring problem is NP-hard.
Different heuristics, all exploiting:
• approximate min-cuts
• approximate weighted set cover

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

137/268

Multiple non-linkable fragments – 1
Coupling fragmentation and encryption is interesting and provides
advantages, but assumption of two non-communicating servers:
− too strong and difﬁcult to enforce in real environments
− limits the number of associations that can be solved by
fragmenting data, often forcing the use of encryption
=⇒ allow for more than two non-linkable fragments [CDFJPS-10]

• E1 ∪ C1 = . . . = En ∪ Cn = R
• C1 ∪ . . . ∪ Cn ⊆ R

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

138/268

Multiple non-linkable fragments – 2
• A fragmentation of R is a set of fragments F = {F1 , . . . , Fm }, where
Fi ⊆ R, for i = 1, . . . , m
• A fragmentation F of R correctly enforces a set C of
conﬁdentiality constraints iff the following conditions are satisﬁed:
◦ ∀F ∈ F , ∀c ∈ C : c 6⊆ F (each individual fragment satisﬁes the
constraints)
◦ ∀Fi , Fj ∈ F , i 6= j : Fi ∩ Fj = 0/ (fragments do not have attributes in
common)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

139/268

Multiple non-linkable fragments – 3
• Each fragment F is mapped into a physical fragment containing:
◦ all the attributes in F in the clear
◦ all the other attributes of R encrypted (a salt is applied on each
encryption)

• Fragment Fi = {Ai1 , . . . , Ain } of R mapped to physical fragment
Fie (salt,enc,Ai1 , . . . , Ain ):

◦ each t ∈ r over R is mapped into a tuple te ∈ fie where fie is a relation
over Fie and:
− te [enc] = Ek (t[R − Fi ] ⊗ te [salt])
− te [Aij ] = t[Aij ], for j = 1, . . . , n

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

140/268

Multiple non-linkable fragments – Example

SSN
t1
t2
t3
t4
t5
t6
t7
t8

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567

salt enc
S11
S12
S13
S14
S15
S16
S17
S18

PATIENTS
Name
YoB

Job

Disease

Alice
Bob
Carol
David
Eva
Frank
Gary
Hilary

Clerk
Doctor
Nurse
Lawyer
Doctor
Doctor
Teacher
Nurse

Asthma
Asthma
Asthma
Bronchitis
Bronchitis
Gastritis
Gastritis
Diabetes

F1
Name YoB

Bd6!l3
Oij3X.
9kEf6?
ker5/2
C:mE91
4lDwqz
me3,op
zWf4g>

Alice
Bob
Carol
David
Eva
Frank
Gary
Hilary

1980
1980
1970
1970
1970
1960
1960
1960

1980
1980
1970
1970
1970
1960
1960
1960

c0
c1
c2
c3

= {SSN}
= {Name, Disease}
= {Name, Job}
= {Job, Disease}

F2
salt enc
S21
S22
S23
S24
S25
S26
S27
S28

8de6TO
X’mlE3
wq.vy0
nh=I3a
hh%kj)
;vf5eS
e4+YUp
pgt6eC

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

F3
Job

salt enc

Clerk
Doctor
Nurse
Lawyer
Doctor
Doctor
Teacher
Nurse

S31
S32
S33
S34
S35
S36
S37
S38

ew3)V!
LkEd69
w8vd66
1"qPdd
(mn2eW
wD}x1X
0opAuEl
Sw@Fez

Disease
Asthma
Asthma
Asthma
Bronchitis
Bronchitis
Gastritis
Gastritis
Diabetes
141/268

Executing queries on fragments
• Every physical fragment of R contains all the attributes of R
=⇒ no more than one fragment needs to be accessed
to respond to a query
• If the query involves an encrypted attribute, an additional query
may need to be executed by the client
Original query on R

Translation over fragment F 3

Q3 := SELECT
Q := SELECT SSN, Name
FROM
FROM
PATIENTS
WHERE
WHERE (Disease=‘Gastritis’ OR
Disease=‘Asthma’) AND
Job=‘Doctor’
′
Q := SELECT
FROM
WHERE

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

salt, enc
F3
(Disease=‘Gastritis’ OR
Disease=‘Asthma’)
SSN, Name
Decrypt(Q3 , Key)
Job=‘Doctor’

142/268

Optimization criteria
• Goal: ﬁnd a fragmentation that makes query execution efﬁcient
• The fragmentation process can then take into consideration
different optimization criteria:
◦ number of fragments [CDFJPS-07]
◦ afﬁnity among attributes [CDFJPS-10]
◦ query workload [CDFJPS-09a]

• All criteria obey maximal visibility
◦ only attributes that appear in singleton constraints (sensitive
attributes) are encrypted
◦ all attributes that are not sensitive appear in the clear in one
fragment
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

143/268

Minimal number of fragments
Basic principles:
• avoid excessive fragmentation =⇒ minimal number of fragments
Goal:
• determine a correct fragmentation with the minimal number of
fragments
=⇒ NP-hard problem (minimum hyper-graph coloring problem)
Basic idea of the heuristic:
• deﬁne a notion of minimality that can be used for efﬁciently
computing a fragmentation
◦ F is minimal if all the fragmentations that can be obtained from F
by merging any two fragments in F violate at least one constraint

• iteratively select an attribute with the highest number of
non-solved constraints and insert it in an existing fragment if no
constraint is violated; create a new fragment otherwise
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

144/268

Minimal number of fragments – Example

SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369

Name
Nancy
Ned
Nell
Nick

M EDICAL D ATA
DoB
Zip
Illness
65/12/07 94142 hypertension
73/01/05 94141 gastritis
86/03/31 94139 ﬂu
90/07/19 94139 asthma

Physician
M. White
D. Warren
M. White
D. Warren

Conﬁdentiality constraints
c 0 = {SSN}
c 1 = {Name, DoB}
c 2 = {Name, Zip}
c 3 = {Name, Illness}
c 4 = {Name, Physician}
c 5 = {DoB, Zip, Illness}
c 6 = {DoB, Zip, Physician}

Minimal fragmentation F
• F1 = {Name}
• F2 = {DoB,Zip}
• F3 = {Illness,Physician}
Merging any two fragments would violate at least a constraint

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

145/268

Maximum afﬁnity
Basic principles:
• preserve the associations among some attributes
◦ e.g., association (Illness,DoB) should be preserved to explore the
link between a speciﬁc illness and the age of patients

• afﬁnity matrix for representing the advantage of having pairs of
attributes in the same fragment
Goal:
• determine a correct fragmentation with maximum afﬁnity (sum of
fragments afﬁnity computed as the sum of the afﬁnity of the
different pairs of attributes in the fragment)
=⇒ NP-hard problem (minimum hitting set problem)
Basic idea of the heuristic:
• iteratively combine fragments that have the highest afﬁnity and do
not violate any conﬁdentiality constraint
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

146/268

Maximum afﬁnity – Example

SSN
123-45-6789
987-65-4321
246-89-1357
135-79-2468

Name
A. Hellman
B. Dooley
C. McKinley
D. Ripley

F1 ={n}
F2 ={d}
F3 ={z}
F4 ={i}
F5 ={p}

F1
F2
F3
F4
F5

F1

M EDICAL D ATA
DoB
ZIP
81/01/03 94142
53/10/07 94141
52/02/12 94139
81/01/03 94139

F2
10

F3
5
5

F4
25
20
10

Illness
hypertension
obesity
hypertension
obesity

F5
15
30
5
15

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

n
d
z
i
p

Physician
M. White
D. Warren
M. White
D. Warren

c1
×
×

c2
×

Conﬁdentiality constraints
c 0 = {SSN}
c 1 = {Name, DoB}
c 2 = {Name, ZIP}
c 3 = {Name, Illness}
c 4 = {Name, Physician}
c 5 = {DoB, ZIP, Illness}
c 6 = {DoB, ZIP, Physician}

c3
×

c4
×

×
×
×

c5

c6

×
×
×

×
×
×

147/268

Maximum afﬁnity – Example

SSN
123-45-6789
987-65-4321
246-89-1357
135-79-2468

Name
A. Hellman
B. Dooley
C. McKinley
D. Ripley

F1 ={n}
F2 ={d}
F3 ={z}
F4 ={i}
F5 ={p}

F1
F2
F3
F4
F5

F1

M EDICAL D ATA
DoB
ZIP
81/01/03 94142
53/10/07 94141
52/02/12 94139
81/01/03 94139

F2
-1

F3
-1
5

F4
-1
20
10

Illness
hypertension
obesity
hypertension
obesity

F5
-1
30
5
15

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

n
d
z
i
p

Physician
M. White
D. Warren
M. White
D. Warren

c1
X
X

c2
X

Conﬁdentiality constraints
c 0 = {SSN}
c 1 = {Name, DoB}
c 2 = {Name, ZIP}
c 3 = {Name, Illness}
c 4 = {Name, Physician}
c 5 = {DoB, ZIP, Illness}
c 6 = {DoB, ZIP, Physician}

c3
X

c4
X

X
X
X

c5

c6

×
×
×

×
×
×

147/268

Maximum afﬁnity – Example

SSN
123-45-6789
987-65-4321
246-89-1357
135-79-2468

Name
A. Hellman
B. Dooley
C. McKinley
D. Ripley

F1 ={n}
F2 ={d}
F3 ={z}
F4 ={i}
F5 ={p}

F1
F2
F3
F4
F5

F1

M EDICAL D ATA
DoB
ZIP
81/01/03 94142
53/10/07 94141
52/02/12 94139
81/01/03 94139

F2
-1

F3
-1
5

F4
-1
20
10

Illness
hypertension
obesity
hypertension
obesity

F5
-1
30
5
15

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

n
d
z
i
p

Physician
M. White
D. Warren
M. White
D. Warren

c1
X
X

c2
X

Conﬁdentiality constraints
c 0 = {SSN}
c 1 = {Name, DoB}
c 2 = {Name, ZIP}
c 3 = {Name, Illness}
c 4 = {Name, Physician}
c 5 = {DoB, ZIP, Illness}
c 6 = {DoB, ZIP, Physician}

c3
X

c4
X

X
X
X

c5

c6

×
×
×

×
×
×

147/268

Maximum afﬁnity – Example

SSN
123-45-6789
987-65-4321
246-89-1357
135-79-2468

Name
A. Hellman
B. Dooley
C. McKinley
D. Ripley

F1 ={n}
F2 ={d,p}
F3 ={z}
F4 ={i}

F1
F2
F3
F4
F5

F1

M EDICAL D ATA
DoB
ZIP
81/01/03 94142
53/10/07 94141
52/02/12 94139
81/01/03 94139

F2
-1

F3
-1
-1

F4
-1
35
10

Illness
hypertension
obesity
hypertension
obesity

F5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

n
d
z
i
p

Physician
M. White
D. Warren
M. White
D. Warren

c1
X
X

c2
X

Conﬁdentiality constraints
c 0 = {SSN}
c 1 = {Name, DoB}
c 2 = {Name, ZIP}
c 3 = {Name, Illness}
c 4 = {Name, Physician}
c 5 = {DoB, ZIP, Illness}
c 6 = {DoB, ZIP, Physician}

c3
X

c4
X

X
X
X

c5

c6

×
×
×

X
X
X

147/268

Maximum afﬁnity – Example

SSN
123-45-6789
987-65-4321
246-89-1357
135-79-2468

Name
A. Hellman
B. Dooley
C. McKinley
D. Ripley

F1 ={n}
F2 ={d,p,i}
F3 ={z}

F1
F2
F3
F4
F5

F1

M EDICAL D ATA
DoB
ZIP
81/01/03 94142
53/10/07 94141
52/02/12 94139
81/01/03 94139

F2
-1

F3
-1
-1

F4

Illness
hypertension
obesity
hypertension
obesity

F5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

n
d
z
i
p

Physician
M. White
D. Warren
M. White
D. Warren

c1
X
X

c2
X

Conﬁdentiality constraints
c 0 = {SSN}
c 1 = {Name, DoB}
c 2 = {Name, ZIP}
c 3 = {Name, Illness}
c 4 = {Name, Physician}
c 5 = {DoB, ZIP, Illness}
c 6 = {DoB, ZIP, Physician}

c3
X

c4
X

X
X
X

c5

c6

X
X
X

X
X
X

147/268

Maximum afﬁnity – Example

SSN
123-45-6789
987-65-4321
246-89-1357
135-79-2468

Name
A. Hellman
B. Dooley
C. McKinley
D. Ripley

F1 ={n}
F2 ={d,p,i}
F3 ={z}

F1
F2
F3
F4
F5

F1

M EDICAL D ATA
DoB
ZIP
81/01/03 94142
53/10/07 94141
52/02/12 94139
81/01/03 94139

F2
-1

F3
-1
-1

F4

Illness
hypertension
obesity
hypertension
obesity

F5
n
d
z
i
p

Physician
M. White
D. Warren
M. White
D. Warren

c1
X
X

c2
X

Conﬁdentiality constraints
c 0 = {SSN}
c 1 = {Name, DoB}
c 2 = {Name, ZIP}
c 3 = {Name, Illness}
c 4 = {Name, Physician}
c 5 = {DoB, ZIP, Illness}
c 6 = {DoB, ZIP, Physician}

c3
X

c4
X

X
X
X

c5

c6

X
X
X

X
X
X

Maximum afﬁnity fragmentation F (fragmentation afﬁnity = 65)
Merging any two fragments would violate at least a constraint

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

147/268

Query workload
Basic principles:
• minimize the execution cost of queries
• representative queries (query workload) used as starting point
• query cost model: based on the selectivity of the conditions in
queries and queries’ frequencies
Goal:
• determine a fragmentation that minimizes the query workload cost
=⇒ NP-hard problem (minimum hitting set problem)
Basic idea of the heuristic:
• exploit monotonicity of the query cost function with respect to a
dominance relationship among fragmentations
• traversal (checking ps solutions at levels multiple of d ) over a
spanning tree of the fragmentation lattice
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

148/268

Fragmentation

Keep a few
Basic idea (hybrid scenarios):
− encryption makes query execution more expensive and not always
possible
− encryption brings overhead of key management
=⇒ Depart from encryption by involving the owner as a trusted
party to maintain a limited amount of data [CDFJPS-09b, CDFJPS-11]

• Fo ∪ Fs = R

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

150/268

Keep a few – Fragmentation
Given:
• R(A1 , . . . , An ): relation schema
• C = {c1 , . . . , cm }: conﬁdentiality constraints over R
Determine a fragmentation F = hFo , Fs i for R, where Fo is stored at the
owner and Fs is stored at a storage server, and
• Fo ∪ Fs = R (completeness)
• ∀c ∈ C , c 6⊆ Fs (conﬁdentiality)
• Fo ∩ Fs = 0/ (non-redundancy)

/* can be relaxed */

At the physical level Fo and Fs have a common attribute (additional tid
or non-sensitive key attribute) to guarantee lossless join

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

151/268

Keep a few – Example

SSN
t1
t2
t3
t4
t5
t6
t7
t8

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567

PATIENTS
Name
YoB

Job

Disease

Alice
Bob
Carol
David
Eva
Frank
Gary
Hilary

Clerk
Doctor
Nurse
Lawyer
Doctor
Doctor
Teacher
Nurse

Asthma
Asthma
Asthma
Bronchitis
Bronchitis
Gastritis
Gastritis
Diabetes

tid SSN
1
2
3
4
5
6
7
8

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567

1980
1980
1970
1970
1970
1960
1960
1960

Fo
Job

Disease

Clerk
Doctor
Nurse
Lawyer
Doctor
Doctor
Teacher
Nurse

Asthma
Asthma
Asthma
Bronchitis
Bronchitis
Gastritis
Gastritis
Diabetes

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

c0
c1
c2
c3

= {SSN}
= {Name, Disease}
= {Name, Job}
= {Job, Disease}

Fs
tid Name YoB
1
2
3
4
5
6
7
8

Alice
Bob
Carol
David
Eva
Frank
Gary
Hilary

1980
1980
1970
1970
1970
1960
1960
1960
152/268

Query evaluation
• Queries are formulated on R, therefore need to be translated into
equivalent queries on Fo and/or Fs
• Queries of the form: SELECT A FROM R WHERE C
where C is a conjunction of basic conditions
◦ C o : conditions that involve only attributes stored at the client
◦ C s : conditions that involve only attributes stored at the sever
◦ C so : conditions that involve attributes stored at the client and
attributes stored at the server

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

153/268

Query evaluation – Example
• Fo ={SSN,Job,Disease}, Fs ={Name,YoB}
• q=

SELECT
FROM
WHERE

SSN, YoB
Patients
(Disease=“Bronchitis”)
AND (YoB=“1970”)
AND (Name=Job)

• The conditions in the

WHERE

clause are split as follows

◦ C o = {Disease = “Bronchitis”}
◦ C s = {YoB = “1970”}
◦ C so = {Name = Job}
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

154/268

Query evaluation strategies
Server-Client strategy
• server: evaluate C s and return result to client
• client: receive result from server and join it with Fo
• client: evaluate C o and C so on the joined relation
Client-Server strategy
• client: evaluate C o and send tid of tuples in result to server
• server: join input with Fs , evaluate C s , and return result to client
• client: join result from server with Fo and evaluate C so

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

155/268

Server-client strategy – Example
q=

SSN, YoB

SELECT

C o ={Disease = “Bronchitis”}
C s ={YoB = “1970”}
C so ={Name = Job}

FROM Patients
WHERE (Disease
AND
AND

qs =

= “Bronchitis”)
(YoB = “1970”)
(Name = Job)

tid,Name,YoB
Fs
WHERE YoB = “1970”

SELECT
FROM

q so =

SELECT SSN, YoB
FROM F o JOIN r s

F o .tid=r s .tid
(Disease = “Bronchitis”)

ON
WHERE

AND

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

(Name = Job)

156/268

Client-server strategy – Example
q=

SSN, YoB

SELECT

FROM Patients
WHERE (Disease
AND
AND

qo =

= “Bronchitis”)
(YoB = “1970”)
(Name = Job)

tid

SELECT

FROM F o
WHERE Disease

qs =

SELECT

C o ={Disease = “Bronchitis”}
C s ={YoB = “1970”}
C so ={Name = Job}

= “Bronchitis”

tid,Name,YoB

FROM F s JOIN r o ON F s .tid=r o .tid
WHERE YoB = “1970”

q so =

SSN, YoB
F o JOIN r s ON F o .tid=r s .tid
WHERE Name = Job
SELECT

FROM

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

157/268

Server-client vs client-server strategies
• If the storage server knows or can infer the query:
◦ Client-Server leaks information: the server infers that some tuples
are associated with values that satisfy C o

• If the storage server does not know and cannot infer the query:
◦ Server-Client and Client-Server strategies can be adopted without
privacy violations
◦ possible strategy based on performances: evaluate most selective
conditions ﬁrst

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

158/268

Minimal fragmentation
• The goal is to minimize the owner’s workload due to the
management of F o
• Weight function w takes a pair hF o ,F s i as input and returns the
owner’s workload (i.e., storage and/or computational load)
• A fragmentation F = hFo , Fs i is minimal iff:
1. F is correct (i.e., it satisﬁes the completeness, conﬁdentiality, and
non-redundancy properties)
2. ∄F ′ such that w(F ′ )<w(F ) and F ′ is correct

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

159/268

Fragmentation metrics
Different metrics could be applied splitting the attributes between Fo
and Fs , such as minimizing:
• storage
◦ number of attributes in Fo (Min-Attr )
◦ size of attributes in Fo (Min-Size)

• computation/trafﬁc
◦ number of queries in which the owner needs to be involved
(Min-Query )
◦ number of conditions within queries in which the owner needs to be
involved (Min-Cond)

The metrics to be applied may depend on the information available

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

160/268

Data and workload information – Example
PATIENT(SSN,Name,DoB,Race,Job,Illness,Treatment,HDate)
A
SSN
Name
DoB
Race
Job
Illness
Treatment
HDate

q

freq(q )

q1
q2
q3
q4
q5
q6
q7

5
4
10
1
7
7
1

size(A)
9
20
8
5
18
15
40
8

Attr (q )

Cond(q )

DoB, Illness
Race, Illness
Job, Illness
Illness, Treatment
Illness
DoB, HDate, Treatment
SSN, Name

hDobi, hIllnessi
hRacei, hIllnessi
hJobi, hIllnessi
hIllnessi, hTreatmenti
hIllnessi
hDoB,HDatei, hTreatmenti
hSSNi, hNamei

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

161/268

Weight metrics and minimization problems – 1
• Min-Attr. Only the relation schema (set of attributes) and the
conﬁdentiality constraints are known
=⇒ minimize the number of the attributes in F o
◦ w a (F )=card(F o )

• Min-Size. The relation schema (set of attributes), the
conﬁdentiality constraints, and the size of each attribute are known
=⇒ minimize the physical size of F o
◦ w s (F )=∑A ∈F size(A)
o

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

162/268

Weight metrics and minimization problems – 2
• Min-Query. The relation schema (set of attributes), the
conﬁdentiality constraints, and a representative proﬁle of the
expected query workload are known
Query workload proﬁle:
Q={(q 1 , freq(q 1 ), Attr (q 1 )), . . . , (q l , freq(q l )Attr (q l ))}
◦ q 1 , . . . , q l queries to be executed
◦ freq(q i ) expected execution frequency of q i
◦ Attr (q i ) attributes appearing in the

WHERE

clause of q i

=⇒ minimize the number of query executions that require
processing at the owner
◦ w q (F )=∑q ∈Q freq(q ) s.t. Attr (q) ∩ F o 6= 0/

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

163/268

Weight metrics and minimization problems – 3
• Min-Cond. The relation schema (set of attributes), the
conﬁdentiality constraints, and a complete proﬁle (conditions in
each query of the form ai op v or ai op aj ) of the expected query
workload are known
Query workload proﬁle:
Q={(q 1 , freq(q 1 ), Cond(q 1 )), . . . , (q l , freq(q l )Cond(q l ))}
◦ q 1 , . . . , q l queries to be executed
◦ freq(q i ) expected execution frequency of q i
◦ Cond(q i ) set of conditions in the WHERE clause of query q i ; each
condition is represented as a single attribute or a pair of attributes

=⇒ minimize the number of conditions that require processing at
the owner
◦ w c (F )=∑cnd ∈Cond(Q) freq(cnd ) s.t. cnd ∩F o 6=0,
/ where Cond(Q)
denotes the set of all conditions of queries in Q, and freq(cnd ) is
the overall frequency of cnd
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

164/268

Modeling of the minimization problems – 1
• All the problems of minimizing storage or computation/trafﬁc aim
at identifying a hitting set
◦ F o must contain at least an attribute for each constraint

• Different metrics correspond to different criteria according to
which the hitting set should be minimized
• We represent all criteria with a uniform model based on:
◦ target set: elements (i.e., attributes, queries, or conditions) with
respect to which the minimization problem is deﬁned
◦ weight function: function that associates a weight with each target
element
◦ weight of a set of attributes: sum of the weights of the targets
intersecting with the set

=⇒ compute the hitting set of attributes with minimum weight

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

165/268

Modeling of the minimization problems – 2
Problem Target T

w(t) ∀t ∈T

Min-Attr {{A}|A∈R}
1
Min-Size {{A}|A∈R}
size(A) s.t. {A}=t
Min-Query {attr|∃q∈Q, Attr (q)=attr}
∑q ∈Q freq(q) s.t. Attr (q)=t
Min-Cond {cnd |∃q∈Q, cnd ∈Cond(q)} freq(cnd ) s.t. cnd =t

Weighted Minimum Target Hitting Set Problem (WMTHSP). Given a
ﬁnite set A, a set C of subsets of A, a set T (target) of subsets of A,
and a weight function w:T →R+ , determine a subset S of A such that:
1. S is a hitting set of A
2. ∄S′ such that S′ is a hitting set of A and
∑t∈T ,t∩S′ 6=0/ w(t) < ∑t∈T ,t∩S6=0/ w(t)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

166/268

Modeling of the minimization problems – 3
• The Minimum Hitting Set Problem can be reduced to the
WMTHSP
◦ T = {A1 , . . . , An }; w({Ai }) = 1, i = 1, . . . , n
◦ minimizing ∑t∈T ,t∩S6=0/ w(t) is equivalent to minimizing the cardinality
of the hitting set S

=⇒ WMTHSP is NP-hard
• We propose a heuristic algorithm for solving the WMTHSP that:
◦ ensures minimality, that is, moving any attribute from F o to F s
violates at least a constraint
◦ has polynomial time complexity in the number of attributes (efﬁcient
execution time)
◦ provides solutions close to the optimum (from experiments run:
optimum was returned in many cases, 14% maximum error
observed)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

167/268

Heuristic algorithm – Input and output
• Input
◦ A : set of attributes not appearing in singleton constraints
◦ C : set of well deﬁned constraints
◦ T : set of targets
◦ w: weight function deﬁned on T

• Output
◦ H : set of attributes composing, together with those appearing in
singleton constraints, F o
◦ F s is computed as R \ F o, obtaining a correct fragmentation

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

168/268

Heuristic algorithm – Data structure
• Priority-queue PQ with an element E for each attribute:
◦ E.A: attribute
◦ E.C: pointers to non-satisﬁed constraints that contain E.A
◦ E.T : pointers to the targets non intersecting H that contain E.A
◦ E.nc : number of constraints pointed by E .C
◦ E.w: total weight of targets pointed by E.T

Priority dictated by E.w/E.nc : elements with lower ratio have
higher priority

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

169/268

Heuristic algorithm – Example of initialization (1)
PATIENT(SSN,Name,DoB,Race,Job,Illness,Treatment,HDate)
Conﬁdentiality constraints
c 0 ={SSN}
c 1 ={Name,Illness}
c 2 ={Name,Treatment}
c 3 ={DoB,Race,Illness}
c 4 ={DoB,Race,Treatment}
c 5 ={Job,Illness}

q

freq(q )

q1
q2
q3
q4
q5
q6
q7

5
4
10
1
7
7
1

A

size(A)

SSN
Name
DoB
Race
Job
Illness
Treatment
HDate

9
20
8
5
18
15
40
8

Attr (q )

Cond(q )

DoB, Illness
Race, Illness
Job, Illness
Illness, Treatment
Illness
DoB, HDate, Treatment
SSN, Name

hDobi, hIllnessi
hRacei, hIllnessi
hJobi, hIllnessi
hIllnessi, hTreatmenti
hIllnessi
hDoB,HDatei, hTreatmenti
hSSNi, hNamei

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

170/268

Heuristic algorithm – Example of initialization (2)
NI

C

I

PQ

T

NT

3
1

D

2

DRI

N

1

2
1

R

2
1

DRT

T

2
1

1

J

C

JI

H

1

NI

0

R

PQ
1

1

1

1

1

1

1

1

N

D

R

J

I

T

H

NT

20

5

D

2

NI

N

PQ

T

NT

2
0

5

4

DI

RI

R

2
4

2
8

10

JI

D

2

12

N

DRT

2

1

J

18

R

T

18

20

JI

2

15

J

0

H

40

8

40

I

T

8

H

Min-Size

DRI

T

3

15

5

D

Min-Attr
C

I

8

8

N

T

2

DRI

DRT

I

3

27

1

IT

J

JI

1

H

10

7

I

C

NI

0

N

PQ
7

7

DHT

Min-Query
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

T

NT

2
1

1

5

N

D

R

DRI

2

T

4

4

R

2
8

D

2

12

10

J

DRT

I

3

J

JI

1

10

27

27

I

H

0
7

8

7

T

DH

Min-Cond
171/268

Heuristic algorithm – Working process
• while PQ6=0/ and ∃E∈PQ, E.nc 6=0
◦ extract the element E with lowest E.w/E.nc from PQ
◦ insert E.A into H
◦ ∀c pointed by E.C, remove the pointers to c from any element E ′ in
PQ and update E ′ .nc
◦ ∀t pointed by E.T , remove the pointers to t from any element E ′ in
PQ and update E ′ .w
◦ readjust PQ based on the new values for E.w/E.nc (to_be_updated)

• for each A∈H
◦ if H \{A} is a hitting set for C , remove A from H

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

172/268

Heuristic algorithm – Example of Min-Query

C

H = {}
E.A = N
E.C = {NI, NT}
E.T = {}
to_be_updated = {I,T}

NI

N

PQ

T

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

NT

2
0

5

4

DI

RI

R

2
4

DRI

T

2
8

10

JI

D

2

12

DRT

I

3

27

1

IT

J

JI

1

H

10

7

I

0
7

7

DHT

173/268

Heuristic algorithm – Example of Min-Query

C

H = {N}
E.A = R
E.C = {DRI, DRT}
E.T = {RI}
to_be_updated = {D,I,T}

DRI

R

PQ

T

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

2
4

5

4

DI

RI

DRT

D

2

T

12

10

JI

1
8

JI

J

1

10

1

IT

I

2
27

H

7

I

0
7

7

DHT

173/268

Heuristic algorithm – Example of Min-Query

C

H = {N,R}
E.A = J
E.C = {JI}
E.T = {JI}
to_be_updated = {I}

JI

J

PQ

1

I

10

5

T

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

DI

1
23

D

10

JI

0

12

1

IT

T

0

H

8

7

I

0
7

7

DHT

173/268

Heuristic algorithm – Example of Min-Query

C

H = {N,R,J}

I

PQ

T

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

0
13

D

0

12

T

0

H

8

5

1

7

DI

IT

I

0
7

7

DHT

173/268

Heuristic algorithm – Example of Min-Query

C

H = {N,R,J}

T

F o ={SSN,Name,Race,Job}

I

PQ

0
13

D

0

12

T

0

H

8

5

1

7

DI

IT

I

0
7

7

DHT

F s ={Illness,DoB,Treatment,HDate}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

173/268

Example of solutions computed by the heuristic algorithm
C

NI

N

PQ

T

NT

0

R

1

DRI

0

T

1

0
0

D

DRT

0
1

I

0

J

0

C

JI

0

H

1

NI

0

N

PQ
1

1

1

1

1

1

1

1

N

D

R

J

I

T

H

NT

20

NI

PQ

T

NT

N

0
0

5

4

DI

RI

R

0
4

DRI

T

0
0

10

JI

D

0
0

0
0

T

0

D

40

5

DRT

0

I

8

0

J

0

18

R

JI

0

H

18

15

J

0
8

40

I

8

T

H

Min-Size (40)

DRT

I

0
0

D

Min-Attr (2)
C

R

0

8

N

T

0

DRI

J

0

H

10

1

IT

C

JI

7

I

NI

0

N

PQ
0

7

DHT

Min-Query (14)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

T

NT

1

5

N

D

0
0

R

0
0

4

R

DRI

T

0

D

8

10

J

DRT

0

I

12

1
27

27

I

J

JI

0

H

0

0
7

8

7

T

DH

Min-Cond (15)
174/268

Fragmentation and inference
• Fragmentation assumes attributes to be independent
• In presence of data dependencies:
◦ sensitive attributes/associations may be indirectly exposed
◦ fragments may be indirectly linkable

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

175/268

Fragmentation and inference – Example
R(SSN, Birth, ZIP, Name, Treatment, Disease, Job, Premium, Insurance)

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

176/268

Fragmentation and inference – Example
R(SSN, Birth, ZIP, Name, Treatment, Disease, Job, Premium, Insurance)

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

176/268

Fragmentation and inference – Example
R(SSN, Birth, ZIP, Name, Treatment, Disease, Job, Premium, Insurance)

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

176/268

Fragmentation and inference – Example
R(SSN, Birth, ZIP, Name, Treatment, Disease, Job, Premium, Insurance)

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

176/268

Fragmentation and inference – Example
R(SSN, Birth, ZIP, Name, Treatment, Disease, Job, Premium, Insurance)

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

176/268

Fragmentation and inference – Example
R(SSN, Birth, ZIP, Name, Treatment, Disease, Job, Premium, Insurance)

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

176/268

Fragmentation and inference – Example
R(SSN, Birth, ZIP, Name, Treatment, Disease, Job, Premium, Insurance)

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

176/268

Fragmentation and inference – Example
R(SSN, Birth, ZIP, Name, Treatment, Disease, Job, Premium, Insurance)

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

176/268

Fragmenting with data dependencies
Take into account data dependencies in fragmentation
• Fragments should not contain sensitive attributes/associations
neither directly nor indirectly

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

177/268

Fragmenting with data dependencies
Take into account data dependencies in fragmentation
• Fragments should not contain sensitive attributes/associations
neither directly nor indirectly

Constraints

c 1 = {SSN}
c 2 = {Name, Disease}
c 3 = {ZIP, Premium}

Dependencies

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

d1
d2
d3
d4

= {Birth, ZIP} Name
= {Treatment} Disease
= {Disease} Job
= {Insurance, Premium} Job

177/268

Publishing Obfuscated Associations

Motivation
• Sensitive associations among data may need to be protected,
while allowing execution of certain queries
◦ e.g., the set of products available in a pharmacy and the set of
customers may be of public knowledge; allow retrieving the average
number of products purchased by customers while protecting the
association between a particular customer and a particular product

• Possible solutions:
◦ [CSYZ-08] exploits a graphical representation of sensitive
associations and masks the mapping from entities to nodes of the
graph while preserving the graph structure
◦ [DFJPS-10a] exploits fragmentation for enforcing conﬁdentiality
constraints and visibility requirements and publishes a sanitized
form of associations

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

179/268

Anonymizing Bipartite Graph

G. Cormode, D. Srivastava, T. YU, Q. Zhang, “Anonymizing Bipartite Graph Data Using Safe Groupings,” in Proc. of VLDB, Auckland,
New Zealand, August 2008.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

180/268

Private associations – Example [CSYZ-08]
Customer
c1
c2
c3
c4
c5
c6

State
NJ
NC
CA
NJ
NC
CA

Product
p1
p2
p3
p4
p5
p6

Avail
Rx
OTC
OTC
OTC
Rx
OTC

Customer
c1
c1
c2
c2
c3
c3
c4
c5
c5
c6
c6

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Product
p2
p6
p3
p4
p2
p4
p5
p1
p5
p3
p6

181/268

Problem statement
Publish anonymized and useful version of bipartite graph in such a way
that:
• a broad class of queries can be answered accurately
◦ Type 0 - Graph structure only. E.g., what is the average number of
products purchased by customers?
◦ Type 1 - Attribute predicate on one side only. E.g., what is the
average number of products purchased by NJ customers?
◦ Type 2 - Attribute predicate on both side. E.g., what is the average
number of OTC products purchased by NJ customers?

• privacy of the speciﬁc associations is preserved

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

182/268

(k,l) grouping
Basic idea: preserve the graph structure but permute mapping from
entities to nodes
(k,l) grouping of bipartite graph G = (V, W, E)
• Partition V (W, resp.) into non-intersecting subsets of size ≥ k (l,
resp.)
• Publish edges E′ that are isomorphic to E, where mapping from E
to E′ is anonymized based on partitions of V and W

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

183/268

(3,3) grouping – Example (1)
Customer
c1
c2
c3
c4
c5
c6

State
NJ
NC
CA
NJ
NC
CA

Product
p1
p2
p3
p4
p5
p6

Avail
Rx
OTC
OTC
OTC
Rx
OTC

Customer
c1
c1
c2
c2
c3
c3
c4
c5
c5
c6
c6

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Product
p2
p6
p3
p4
p2
p4
p5
p1
p5
p3
p6

184/268

c1
c2
c3
c4
c5
c6

CG1
CG1
CG2
CG1
CG2
CG2
HV

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

p1 PG2
p2 PG1
p3 PG1
p4 PG2
p5 PG1
p6 PG2
HW

x1
x2
x3
x4
x5
x6

CG1
CG1
CG1
CG2
CG2
CG2
RV

Group

Y-node

Group

X-node

Group

Product

Group

x1 y2
x1 y6
x2 y1
x3 y3
x3 y4
x4 y2
x4 y4
x5 y3
x5 y6
x6 y1
x6 y5
E′

Customer

(3,3) grouping – Example (2)

y1 PG1
y2 PG1
y3 PG1
y4 PG2
y5 PG2
y6 PG2
RW

185/268

Safe groupings
• There are different ways for creating a (k, l) grouping but not all the
resulting groupings offer the same level of privacy (e.g., local
clique)
=⇒ safe (k,l) groupings: nodes in the same group of V are not
connected to a same node in W
• The computation of a safe grouping can be hard even for small
values of k and l
◦ the computation of a safe, strict (3,3)-grouping is NP-hard
(reduction from partitioning a graph into triangles)

• The authors propose a greedy algorithm that iteratively adds a
node to a group with fewer than k nodes, if it is safe (it creates a
new group if such insertion is not possible)
• The algorithm works when bipartite graph is sparse enough
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

186/268

Fragments and Loose Associations

S. De Capitani di Vimercati, S. Foresti, S. Jajodia, S. Paraboschi, P. Samarati, “Fragments and Loose Associations: Respecting
Privacy in Data Publishing,” in Proc. of the VLDB Endowment, vol. 3, no. 1, September 2010.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

187/268

Data publication
• Fragmentation can also be used to protect sensitive associations
in data publishing
=⇒ publish/release to external parties only views (fragments) that
do not expose sensitive associations
• To increase utility of published information fragments could be
coupled with some associations in sanitized form
=⇒ loose associations: associations among groups of values
(in contrast to speciﬁc values)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

188/268

Conﬁdentiality constraints
As already discussed....
• Sets of attributes such that the (joint) visibility of values of the
attributes in the sets should be protected
• They permit to express different requirements
◦ sensitive attributes: the values of some attributes are considered
sensitive and should not be visible
◦ sensitive associations: the associations among values of given
attributes are sensitive and should not be visible

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

189/268

Conﬁdentiality constraints – Example
SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369
782-90-5280
816-52-7272
872-62-5178
712-81-7618

Patient
Page
Patrick
Patty
Paul
Pearl
Philip
Phoebe
Piers

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

• SSN is sensitive
◦ {SSN}

• Illness and Doctor are private of an individual and cannot be
stored in association with the name of the patient
◦ {Patient, Illness}, {Patient, Doctor}

• {Birth,City} can work as quasi-identiﬁer
◦ {Birth, City, Illness}, {Birth, City, Doctor}
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

190/268

Visibility requirements
• Monotonic Boolean formulas over attributes, representing views
over data (negations are captured by conﬁdentiality constraints)
• They permit to express different requirements
◦ visible attributes: some attributes should be visible
◦ visible associations: the association among values of given
attributes should be visible
◦ alternative views: at least one of the speciﬁed views should be
visible

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

191/268

Visibility requirements – Example
SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369
782-90-5280
816-52-7272
872-62-5178
712-81-7618

Patient
Page
Patrick
Patty
Paul
Pearl
Philip
Phoebe
Piers

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

• Either names of Patients or their Cities should be released
◦ Patient ∨ City

• Either Birth dates and Cities of patients in association should be
released or the SSN of patients should be released
◦ (Birth ∧ City)∨ SSN

• Illnesses and Doctors, as well as their association, should be
released
◦ Illness ∧ Doctor
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

192/268

Fragmentation
Fragmentation can be applied to satisfy both conﬁdentiality constraints
and visibility requirements
• Publish/release to external parties only fragments that
◦ do not include sensitive attributes and sensitive associations
◦ include the requested attributes and/or associations (all the
requirements should be satisﬁed, not necessarily by a single
fragment)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

193/268

Fragmentation – Example
SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369
782-90-5280
816-52-7272
872-62-5178
712-81-7618

Patient
Page
Patrick
Patty
Paul
Pearl
Philip
Phoebe
Piers

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}
v 1 =Patient ∨ City
v 2 =(Birth ∧ City)∨ SSN
v 3 =Illness ∧ Doctor

194/268

Fragmentation – Example
SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369
782-90-5280
816-52-7272
872-62-5178
712-81-7618

Patient
Page
Patrick
Patty
Paul
Pearl
Philip
Phoebe
Piers

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
56/12/9 Rome
53/3/19 Paris
58/5/18 Oslo
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
53/12/1 NY
60/7/25 Rome

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}
v 1 =Patient ∨ City
v 2 =(Birth ∧ City)∨ SSN
v 3 =Illness ∧ Doctor

Fr
Illness Doctor
diabetes David
gastritis Daisy
ﬂu
Damian
asthma Daniel
gastritis Dorothy
obesity Drew
measles Dennis
diabetes Daisy

194/268

Correct and minimal fragmentation
• A fragmentation is correct if
◦ each conﬁdentiality constraint is satisﬁed by all fragments
◦ each visibility requirement is satisﬁed by at least a fragment
◦ fragments do not have attributes in common (to prevent joins on
fragments to retrieve associations)

• A correct fragmentation is minimal if
◦ the number of fragments is minimum (i.e., any other correct
fragmentation has an equal or greater number of fragments)

• The Min-CF problem of computing a correct and minimal
fragmentation is NP-hard

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

195/268

Computing a correct and minimal fragmentation
A SAT solver can efﬁciently solve the Min-CF problem
• An instance of the Min-CF problem is translated into an instance
of the SAT problem
• The inputs to the Min-CF problem are interpreted as boolean
formulas
◦ visibility requirements are already represented as boolean formulas
◦ each conﬁdentiality constraint is represented via a boolean formula
as a conjunction of the attributes appearing in the constraint

• Iterate the evaluation of a SAT solver, starting with one fragment
and increasing fragments by one at each iteration, until a solution
is found (solution is guaranteed to be minimal)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

196/268

Publishing loose associations – 1
• Fragmentation breaks associations among attributes
• To increase utility of published information, fragments can be
coupled with some associations in sanitized form
• A given privacy degree of the association must be guaranteed
=⇒ loose associations: associations among groups of values
(in contrast to speciﬁc values)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

197/268

Publishing loose associations – 2
Given two fragments Fl and Fr , a loose association between Fl and Fr
• partitions tuples in the fragments in groups
• provides information on the associations at the group level
• does not permit to exactly reconstruct the original associations
among the tuples in the fragments
• provides enriched utility of the published data

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

198/268

Grouping
• Given fragment Fi and its instance fi , a k-grouping over fi partitions
the tuples in fi in groups of size greater than or equal to k
=⇒ each tuple t in fi is associated with a group identiﬁer Gi (t)
• A k-grouping is minimal if it maximizes the number of groups
(intuitively, it minimizes the size of the groups)
• (kl ,kr )-grouping denotes the groupings over two instances fl and fr
of Fl and Fr
• A (kl ,kr )-grouping is minimal if both the kl -grouping and the
kr -grouping are minimal

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

199/268

Minimal (2,2)-grouping – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
56/12/9 Rome
53/3/19 Paris
58/5/18 Oslo
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
diabetes David
gastritis Daisy
ﬂu
Damian
asthma Daniel
gastritis Dorothy
obesity Drew
measles Dennis
diabetes Daisy
200/268

Minimal (2,2)-grouping – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
200/268

Group association
• A (kl ,kr )-grouping induces a group association A among the
groups in fl and fr
• A group association A over fl and fr is a set of pairs of group
identiﬁers such that:
◦ A has the same cardinality as the original relation
◦ there is a bijective mapping between the original relation and A that
associates each tuple in the original relation with a pair (Gl (l),Gr (r))
in A, with l∈fl and r∈fr

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

201/268

Group association – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example
Birth
=⇒ 56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example
Birth City
=⇒ 56/12/9 Rome
=⇒ 53/3/19 Paris
58/5/18 Oslo
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
53/12/1 NY
60/7/25 Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example
Birth City Illness
=⇒ 56/12/9 Rome diabetes
=⇒ 53/3/19 Paris gastritis
=⇒ 58/5/18 Oslo ﬂu
53/12/9 Oslo asthma
56/12/9 Rome gastritis
57/6/25 Paris obesity
53/12/1 NY
measles
60/7/25 Rome diabetes
Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example

=⇒
=⇒
=⇒
=⇒

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example

=⇒
=⇒
=⇒
=⇒
=⇒

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example

=⇒
=⇒
=⇒
=⇒
=⇒
=⇒

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example

=⇒
=⇒
=⇒
=⇒
=⇒
=⇒
=⇒

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example

=⇒
=⇒
=⇒
=⇒
=⇒
=⇒
=⇒
=⇒

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
202/268

Group association – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

Birth
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Fl
City
Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

G
bc1
bc1
bc2
bc2
bc3
bc3
bc4
bc4

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Gl
bc1
bc1
bc2
bc2
bc3
bc3
bc4
bc4

Gr
id1
id2
id1
id3
id2
id4
id3
id4

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

G
id1
id1
id2
id2
id3
id3
id4
id4

Fr
Illness
gastritis
diabetes
asthma
ﬂu
obesity
measles
gastritis
diabetes

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Doctor
Daisy
David
Daniel
Damian
Drew
Dennis
Dorothy
Daisy
202/268

Group association protection
• Duplicates in fragments are maintained (all fragments have the
same cardinality as the original relation)
◦ fragments may contain tuples that are equal

• Even tuples that are different may have the same values for
attributes involved in a conﬁdentiality constraint
• The looseness protection offered by grouping can be
compromised
=⇒ need to control occurrences of the same values

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

203/268

Alikeness
• Two tuples li , lj in fl (ri , rj in fr ) are alike w.r.t. a constraint c,
denoted li ≃c lj (ri ≃c rj ), if
◦ c ⊆ (Fl ∪Fr ) (c is covered by Fl and Fr )
◦ li [c∩Fl ] = lj [c∩Fl ] (ri [c∩Fr ] = rj [c∩Fr ])

• Two tuples li , lj in fl (ri , rj in fr ) are alike li ≃lj (ri ≃rj ) if they are alike
w.r.t. at least a constraint c ⊆ (Fl ∪Fr )
• ≃c is transitive for any constraint c
• ≃ is not transitive if there are at least two constraints covered by
Fl and Fr

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

204/268

Alikeness – Example
SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369
782-90-5280
816-52-7272
872-62-5178
712-81-7618

Patient
Page
Patrick
Patty
Paul
Pearl
Philip
Phoebe
Piers

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
56/12/9 Rome
53/3/19 Paris
58/5/18 Oslo
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
diabetes David
gastritis Daisy
ﬂu
Damian
asthma Daniel
gastritis Dorothy
obesity Drew
measles Dennis
diabetes Daisy
205/268

Alikeness – Example
SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369
782-90-5280
816-52-7272
872-62-5178
712-81-7618

Patient
Page
Patrick
Patty
Paul
Pearl
Philip
Phoebe
Piers

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
56/12/9 Rome
53/3/19 Paris
58/5/18 Oslo
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
diabetes David
gastritis Daisy
ﬂu
Damian
asthma Daniel
gastritis Dorothy
obesity Drew
measles Dennis
diabetes Daisy







≃c4



205/268

Alikeness – Example
SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369
782-90-5280
816-52-7272
872-62-5178
712-81-7618

Patient
Page
Patrick
Patty
Paul
Pearl
Philip
Phoebe
Piers

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
56/12/9 Rome
53/3/19 Paris
58/5/18 Oslo
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
diabetes David
gastritis Daisy
ﬂu
Damian
asthma Daniel
gastritis Dorothy
obesity Drew
measles Dennis
diabetes Daisy







 
 
 
 ≃c3
≃c4 
 
 
 
205/268

Alikeness – Example
SSN
123-45-6789
987-65-4321
963-85-2741
147-85-2369
782-90-5280
816-52-7272
872-62-5178
712-81-7618

Patient
Page
Patrick
Patty
Paul
Pearl
Philip
Phoebe
Piers

Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
56/12/9 Rome
53/3/19 Paris
58/5/18 Oslo
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor 
diabetes David
6≃
gastritis Daisy
ﬂu
Damian
asthma Daniel
gastritis Dorothy
obesity Drew
measles Dennis
diabetes Daisy
205/268

k-loose association
• A group association is k-loose if every tuple in the group
association A indistinguishably corresponds to at least k distinct
associations among tuples in the fragments
• A k-loose association is also k′ -loose for any k′ ≤k
• A (kl ,kr )-grouping induces a minimal group association A if
◦ A is k-loose
◦ ∄ a (kl′ ,kr′ )-grouping inducing a k-loose association s.t. kl′ ·kr′ <kl ·kr

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

206/268

4-loose association – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
207/268

4-loose association – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

Birth
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Fl
City
Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

G
bc1
bc1
bc2
bc2
bc3
bc3
bc4
bc4

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Gl
bc1
bc1
bc2
bc2
bc3
bc3
bc4
bc4

Gr
id1
id2
id1
id3
id2
id4
id3
id4

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

G
id1
id1
id2
id2
id3
id3
id4
id4

Fr
Illness
gastritis
diabetes
asthma
ﬂu
obesity
measles
gastritis
diabetes

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Doctor
Daisy
David
Daniel
Damian
Drew
Dennis
Dorothy
Daisy
207/268

Heterogeneity properties
• There is a correspondence between kl , kr of the groupings and the
degree of k-looseness of the induced group association
◦ a (kl ,kr )-grouping cannot induce a k-loose association for a k >kl · kr
◦ the value k ≤ kl · kr depends on how groups are deﬁned

• If a (kl ,kr )-grouping satisﬁes given heterogeneity properties, the
induced group association is k-loose with k=kl ·kr
◦ group heterogeneity
◦ association heterogeneity
◦ deep heterogeneity

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

208/268

Group heterogeneity
No group can contain tuples that are alike with respect to the
constraints covered by Fl and Fr
• it ensures diversity of tuples within groups

c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Fr
Illness Doctor
gastritis Daisy
gastritis Dorothy
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
diabetes David
diabetes Daisy


NO


NO

209/268

Group heterogeneity
No group can contain tuples that are alike with respect to the
constraints covered by Fl and Fr
• it ensures diversity of tuples within groups

c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy

209/268

Association heterogeneity
No group can be associated twice with another group (the group
association cannot contain any duplicate)
• it ensures that for each real tuple in the original relation there are
at least kl ·kr pairs in the group association that may correspond to
it
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

NO

Fr
Illness Doctor
gastritis Daisy
diabetes
asthma
ﬂu
obesity
measles
gastritis
diabetes

David
Daniel
Damian
Drew
Dennis
Dorothy
Daisy

210/268

Association heterogeneity
No group can be associated twice with another group (the group
association cannot contain any duplicate)
• it ensures that for each real tuple in the original relation there are
at least kl ·kr pairs in the group association that may correspond to
it
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy

210/268

Deep heterogeneity
No group can be associated with two groups that contain alike tuples

• it ensures that all kl ·kr pairs in the group association to which each
tuple could correspond to contain diverse values for attributes
involved in constraints
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fl
Birth City
53/3/19 Paris
56/12/9 Rome
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
53/12/9 Oslo
53/12/1 NY
60/7/25 Rome

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Fr
Illness Doctor
gastritis Daisy
diabetes David
gastritis Dorothy
ﬂu
Damian
obesity Drew
measles Dennis
asthma Daniel
diabetes Daisy




NO


211/268

Deep heterogeneity
No group can be associated with two groups that contain alike tuples

• it ensures that all kl ·kr pairs in the group association to which each
tuple could correspond to contain diverse values for attributes
involved in constraints
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy

211/268

Flat grouping vs sparse grouping
• A (kl ,kr )-grouping is
◦ ﬂat if either kl or kr is equal to 1
◦ sparse if both kl and kr are different from 1

• Flat grouping resembles k-anonymity and captures at the same
time the ℓ-diversity property, but it works on associations and
attributes’ values are not generalized
• Sparse grouping guarantees larger applicability than ﬂat grouping,
with the same level of protection
(there may exist a sparse grouping providing k-looseness but not a
ﬂat grouping)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

212/268

Flat grouping – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
58/5/18 Oslo
53/12/1 NY
56/12/9 Rome
57/6/25 Paris
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
asthma Daniel
diabetes David
ﬂu
Damian
measles Dennis
gastritis Dorothy
obesity Drew
diabetes Daisy
213/268

Sparse grouping – Example
Birth
56/12/9
53/3/19
58/5/18
53/12/9
56/12/9
57/6/25
53/12/1
60/7/25

City
Rome
Paris
Oslo
Oslo
Rome
Paris
NY
Rome

Illness
diabetes
gastritis
ﬂu
asthma
gastritis
obesity
measles
diabetes

Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Doctor
David
Daisy
Damian
Daniel
Dorothy
Drew
Dennis
Daisy

c 0 ={SSN}
c 1 ={Patient,Illness}
c 2 ={Patient,Doctor}
c 3 ={Birth,City,Illness}
c 4 ={Birth,City,Doctor}

Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy
214/268

Privacy vs utility
• The publication of loose associations increases data utility
◦ it makes it possible to evaluate queries more precisely than if only
the fragments were published

• Increased utility corresponds to a greater exposure of information
(lower privacy degree)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

215/268

Association exposure
• The exposure of a sensitive association hl[c∩Fl ], r[c∩Fr ]i, with c a
constraint covered by Fl , Fr , can be expressed as the probability
of the association to hold in the original relation (given the
published information)
• The increased exposure due to the publication of loose
associations can be measured as the difference between
◦ the probability PA (l[c∩Fl ], r[c∩Fr ]) that the sensitive association
hl[c∩Fl ], r[c∩Fr ]i appears in the original relation, given fl , fr , and A
◦ the probability P(l[c∩Fl ], r[c∩Fr ]) that the sensitive association
hl[c∩Fl ], r[c∩Fr ]i appears in the original relation, given fl and fr

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

216/268

Exposure without loose association – 1
• Given l∈fl and r∈fr the probability P(l,r) that tuple hl,ri belongs to
the original relation is 1/|fl | = 1/|fr |

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

217/268

Exposure without loose association – 1
• Given l∈fl and r∈fr the probability P(l,r) that tuple hl,ri belongs to
the original relation is 1/|fl | = 1/|fr |
≃c3
q
pa
gastritis diabetes asthma
ﬂu
obesity measles gastritis diabetes
Daisy
David Daniel Damian Drew Dennis Dorothy Daisy
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

217/268

Exposure without loose association – 2
• Exposure (P(l[c∩Fl ], r[c∩Fr ])) depends on the presence of alike
tuples
• Let li ,lj be two tuples in fl s.t. li ≃c lj , P(li [c∩Fl ], r[c∩Fr ]) is the
composition of the probability that
◦ li is associated with r
◦ lj is associated with r

P(li ,r) + P(lj ,r) − (P(li ,r) · P(lj ,r))

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

218/268

Exposure without loose association – Example
≃c3
q
pa
gastritis diabetes asthma
ﬂu
obesity measles gastritis diabetes
Daisy
David Daniel Damian Drew Dennis Dorothy Daisy
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

219/268

Exposure without loose association – Example
≃c3
q
pa
gastritis diabetes asthma
ﬂu
obesity measles gastritis diabetes
Daisy
David Daniel Damian Drew Dennis Dorothy Daisy
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

c 3 ={Birth,City,Illness}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

219/268

Exposure without loose association – Example
≃c3
pa
gastritis diabetes asthma
ﬂu
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

q
obesity measles gastritis diabetes
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

c 3 ={Birth,City,Illness}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

219/268

Exposure without loose association – Example
≃c3
pa
gastritis diabetes asthma
ﬂu





≃c3 


53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

q
obesity measles gastritis diabetes
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

c 3 ={Birth,City,Illness}
P(56/12/9,Rome,gastritis) = P(56/12/9,Rome,diabetes) = ... = P(56/12/9,Rome,diabetes) =

1
1
1 1
+
−
·
8
8
8 8

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

219/268

Exposure without loose association – Example
≃c3
pa
gastritis diabetes asthma
ﬂu
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
NY
Rome

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

q
obesity measles gastritis diabetes
1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

c 3 ={Birth,City,Illness}
P(56/12/9,Rome,gastritis) = P(56/12/9,Rome,diabetes) = ... = P(56/12/9,Rome,diabetes) =
 15
1
1
1 1
+
−
·
8
8
8 8 = 64

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

219/268

Exposure without loose association – Example
≃c3
pa
gastritis diabetes asthma
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
NY
Rome

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

ﬂu
1/8
1/8
15/64
1/8
1/8
1/8
1/8

q
obesity measles gastritis diabetes
1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

c 3 ={Birth,City,Illness}
P(53/3/19,Paris,gastritis) = P(53/12/9,Oslo,gastritis) = ... = P(60/7/25,Rome,gastritis) =

1
1
1 1
+
−
·
8
8
8 8

15
15 15
15
P(56/12/9,Rome,gastritis) = 64 + 64 − 64 · 64
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

219/268

Exposure without loose association – Example
≃c3
pa
gastritis diabetes asthma
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
15/64
Oslo
15/64
Rome 1695/4096
Paris
15/64
Oslo
15/64
NY
15/64
Rome
15/64

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

ﬂu
1/8
1/8
15/64
1/8
1/8
1/8
1/8

q
obesity measles diabetes
1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

c 3 ={Birth,City,Illness}
P(53/3/19,Paris,gastritis) = P(53/12/9,Oslo,gastritis) = ... = P(60/7/25,Rome,gastritis) =
 15
1
1
1 1
+
−
·
8
8
8 8 = 64
 1695
15
15 15
15
P(56/12/9,Rome,gastritis) = 64 + 64 − 64 · 64 = 4096
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

219/268

Exposure without loose association – Example
≃c3
gastritis
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
15/64
Oslo
15/64
Rome 1695/4096
Paris
15/64
Oslo
15/64
NY
15/64
Rome
15/64

pa
diabetes asthma
1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

ﬂu
1/8
1/8
15/64
1/8
1/8
1/8
1/8

q
obesity measles diabetes
1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

c 3 ={Birth,City,Illness}
P(53/3/19,Paris,diabetes) = P(53/12/9,Oslo,diabetes) = ... = P(60/7/25,Rome,diabetes) =

1
1
1 1
+
−
·
8
8
8 8

15
15 15
15
P(56/12/9,Rome,diabetes) = 64 + 64 − 64 · 64
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

219/268

Exposure without loose association – Example
≃c3
gastritis
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

pa
diabetes asthma

Paris
15/64
15/64
1/8
Oslo
15/64
15/64
1/8
Rome 1695/4096 1695/4096 15/64
Paris
15/64
15/64
1/8
Oslo
15/64
15/64
1/8
NY
15/64
15/64
1/8
Rome
15/64
15/64
1/8

ﬂu
1/8
1/8
15/64
1/8
1/8
1/8
1/8

q
obesity measles
1/8
1/8
15/64
1/8
1/8
1/8
1/8

1/8
1/8
15/64
1/8
1/8
1/8
1/8

c 3 ={Birth,City,Illness}
P(53/3/19,Paris,diabetes) = P(53/12/9,Oslo,diabetes) = ... = P(60/7/25,Rome,diabetes) =
 15
1
1
1 1
+
−
·
8
8
8 8 = 64
 1695
15
15 15
15
P(56/12/9,Rome,diabetes) = 64 + 64 − 64 · 64 = 4096
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

219/268

Exposure with loose association
• Given l∈fl and r∈fr the probability PA (l,r) that tuple hl,ri belongs to
the original relation is at most 1/k
• PA (l[c∩Fl ], r[c∩Fr ]) is evaluated considering the alike ≃c
relationship
◦ let li ,lj in fl s.t. li ≃c lj , PA (li [c∩Fl ], r[c∩Fr ]) is the composition of the
probability that
− li is associated with r
− lj is associated with r

PA (li ,r) + PA (lj ,r) − (PA (li ,r) · PA (lj ,r))

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

220/268

Exposure with loose association – Example
pa
q
gastritis diabetes asthma
ﬂu
obesity measles gastritis diabetes
Daisy
David Daniel Damian Drew Dennis Dorothy Daisy
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8
Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

221/268

Exposure with loose association – Example
pa
q
gastritis diabetes asthma
ﬂu
obesity measles gastritis diabetes
Daisy
David Daniel Damian Drew Dennis Dorothy Daisy
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/4
1/4
1/4
1/4
–
–
–
–
Fl
Birth City
53/3/19 Paris
53/12/9 Oslo
56/12/9 Rome
57/6/25 Paris
58/5/18 Oslo
56/12/9 Rome
53/12/1 NY
60/7/25 Rome

1/4
1/4
1/4
1/4
–
–
–
–

1/4
1/4
–
–
1/4
1/4
–
–

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

1/4
1/4
–
–
1/4
1/4
–
–

–
–
–
–
1/4
1/4
1/4
1/4
–
–
–
–
1/4
1/4
1/4
1/4
Fr
Illness Doctor
gastritis Daisy
diabetes David
asthma Daniel
ﬂu
Damian
obesity Drew
measles Dennis
gastritis Dorothy
diabetes Daisy

–
–
–
–
1/4
1/4
1/4
1/4

–
–
–
–
1/4
1/4
1/4
1/4

221/268

Exposure with loose association – Example
pa
q
gastritis diabetes asthma
ﬂu
obesity measles gastritis diabetes
Daisy
David Daniel Damian Drew Dennis Dorothy Daisy
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/4
1/4
1/4
1/4
–
–
–
–

1/4
1/4
1/4
1/4
–
–
–
–

1/4
1/4
–
–
1/4
1/4
–
–

1/4
1/4
–
–
1/4
1/4
–
–

–
–
1/4
1/4
–
–
1/4
1/4

–
–
1/4
1/4
–
–
1/4
1/4

–
–
–
–
1/4
1/4
1/4
1/4

–
–
–
–
1/4
1/4
1/4
1/4

c 3 ={Birth,City,Illness}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

221/268

Exposure with loose association – Example
≃c3
pa
gastritis diabetes asthma
ﬂu





≃c3 


53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
56/12/9
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
Rome
NY
Rome

1/4
1/4
1/4
1/4
–
–
–
–

1/4
1/4
1/4
1/4
–
–
–
–

1/4
1/4
–
–
1/4
1/4
–
–

1/4
1/4
–
–
1/4
1/4
–
–

q
obesity measles gastritis diabetes
–
–
1/4
1/4
–
–
1/4
1/4

–
–
1/4
1/4
–
–
1/4
1/4

–
–
–
–
1/4
1/4
1/4
1/4

–
–
–
–
1/4
1/4
1/4
1/4

c 3 ={Birth,City,Illness}
P(56/12/9,Rome,gastritis) = P(56/12/9,Rome,diabetes) = ... = P(56/12/9,Rome,diabetes) =

1
1
4 +0− 4 ·0

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

221/268

Exposure with loose association – Example
≃c3
pa
gastritis diabetes asthma
ﬂu
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
NY
Rome

1/4
1/4
1/4
1/4
–
–
–

1/4
1/4
1/4
1/4
–
–
–

1/4
1/4
1/4
–
1/4
–
–

1/4
1/4
1/4
–
1/4
–
–

q
obesity measles gastritis diabetes
–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
–
1/4
1/4
1/4

–
–
1/4
–
1/4
1/4
1/4

c 3 ={Birth,City,Illness}
P(56/12/9,Rome,gastritis) = P(56/12/9,Rome,diabetes) = ... = P(56/12/9,Rome,diabetes) =
 1
1
1
4 +0− 4 ·0 = 4

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

221/268

Exposure with loose association – Example
≃c3
pa
gastritis diabetes asthma
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
NY
Rome

1/4
1/4
1/4
1/4
–
–
–

1/4
1/4
1/4
1/4
–
–
–

1/4
1/4
1/4
–
1/4
–
–

ﬂu
1/4
1/4
1/4
–
1/4
–
–

q
obesity measles gastritis diabetes
–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
–
1/4
1/4
1/4

–
–
1/4
–
1/4
1/4
1/4

c 3 ={Birth,City,Illness}
P(53/3/19,Paris,gastritis) = P(53/12/9,Oslo,gastritis) = ... = P(60/7/25,Rome,gastritis) =

1
1
4 +0− 4 ·0

1
1
1 1
P(56/12/9,Rome,gastritis) = 4 + 4 − 4 · 4

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

221/268

Exposure with loose association – Example
≃c3
pa
gastritis diabetes asthma
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
NY
Rome

1/4
1/4
7/16
1/4
1/4
1/4
1/4

1/4
1/4
1/4
1/4
–
–
–

1/4
1/4
1/4
–
1/4
–
–

ﬂu
1/4
1/4
1/4
–
1/4
–
–

q
obesity measles diabetes
–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
–
1/4
1/4
1/4

c 3 ={Birth,City,Illness}
P(53/3/19,Paris,gastritis) = P(53/12/9,Oslo,gastritis) = ... = P(60/7/25,Rome,gastritis) =
 1
1
1
4 +0− 4 ·0 = 4

1
1
1 1
7
P(56/12/9,Rome,gastritis) = 4 + 4 − 4 · 4 = 16

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

221/268

Exposure with loose association – Example
≃c3
pa
gastritis diabetes asthma
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
NY
Rome

1/4
1/4
7/16
1/4
1/4
1/4
1/4

1/4
1/4
1/4
1/4
–
–
–

1/4
1/4
1/4
–
1/4
–
–

ﬂu
1/4
1/4
1/4
–
1/4
–
–

q
obesity measles diabetes
–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
–
1/4
1/4
1/4

c 3 ={Birth,City,Illness}
P(53/3/19,Paris,diabetes) = P(53/12/9,Oslo,diabetes) = ... = P(60/7/25,Rome,diabetes) =

1
1
4 +0− 4 ·0

1
1
1 1
P(56/12/9,Rome,diabetes) = 4 + 4 − 4 · 4

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

221/268

Exposure with loose association – Example
≃c3
pa
gastritis diabetes asthma
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
NY
Rome

1/4
1/4
7/16
1/4
1/4
1/4
1/4

1/4
1/4
7/16
1/4
1/4
1/4
1/4

1/4
1/4
1/4
–
1/4
–
–

ﬂu
1/4
1/4
1/4
–
1/4
–
–

q
obesity measles
–
–
1/4
1/4
–
1/4
1/4

–
–
1/4
1/4
–
1/4
1/4

c 3 ={Birth,City,Illness}
P(53/3/19,Paris,diabetes) = P(53/12/9,Oslo,diabetes) = ... = P(60/7/25,Rome,diabetes) =
 1
1
1
4 +0− 4 ·0 = 4

1
1
1 1
7
P(56/12/9,Rome,diabetes) = 4 + 4 − 4 · 4 = 16

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

221/268

Measuring privacy and utility
• Utility: average over the variation of probability
|PA (l[c∩Fl ], r[c∩Fr ])− P(l[c∩Fl ], r[c∩Fr ])| for each sensitive
association hl[c∩Fl ], r[c∩Fr ]i
◦ measured also in terms of the precision in responding to queries

• Privacy: in addition to the k-loose degree, an exposure threshold
δmax could be speciﬁed
◦ given a threshold δmax , A can be published if
δmax ≥ (PA (l[c∩Fl ], r[c∩Fr ])− P(l[c∩Fl ], r[c∩Fr ])) for all sensitive
associations hl[c∩Fl ], r[c∩Fr ]i

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

222/268

Measuring utility – Example
PA
gastritis diabetes asthma
53/3/19 Paris
1/4
1/4
1/4
53/12/9 Oslo
1/4
1/4
1/4
56/12/9 Rome 7/16
7/16
1/4
57/6/25 Paris
1/4
1/4
–
58/5/18 Oslo
1/4
1/4
1/4
53/12/1 NY
1/4
1/4
–
60/7/25 Rome
1/4
1/4
–

53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
Oslo
Rome
Paris
Oslo
NY
Rome

ﬂu
1/4
1/4
1/4
–
1/4
–
–

obesity measles
–
–
–
–
1/4
1/4
1/4
1/4
–
–
1/4
1/4
1/4
1/4

P
gastritis
diabetes asthma
ﬂu
15/64
15/64
1/8
1/8
15/64
15/64
1/8
1/8
1695/4096 1695/4096 15/64 15/64
15/64
15/64
1/8
1/8
15/64
15/64
1/8
1/8
15/64
15/64
1/8
1/8
15/64
15/64
1/8
1/8

obesity measles
1/8
1/8
1/8
1/8
15/64
15/64
1/8
1/8
1/8
1/8
1/8
1/8
1/8
1/8

PA (l[Birth,City], r[Illness])− P(l[Birth,City], r[Illness])
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

223/268

Measuring utility – Example
PA (l[Birth,City], r[Illness])− P(l[Birth,City], r[Illness])
gastritis diabetes asthma
ﬂu
obesity measles
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
1/64
1/64
Oslo
1/64
1/64
Rome 97/4096 97/4096
Paris
1/64
1/64
Oslo
1/64
1/64
NY
1/64
1/64
Rome
1/64
1/64

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

1/8
1/8
1/64
-1/8
1/8
-1/8
-1/8

1/8
1/8
1/64
-1/8
1/8
-1/8
-1/8

-1/8
-1/8
1/64
1/8
-1/8
1/8
1/8

-1/8
-1/8
1/64
1/8
-1/8
1/8
1/8

223/268

Measuring utility – Example
PA (l[Birth,City], r[Illness])− P(l[Birth,City], r[Illness])
gastritis diabetes asthma
ﬂu
obesity measles
53/3/19
53/12/9
56/12/9
57/6/25
58/5/18
53/12/1
60/7/25

Paris
1/64
1/64
Oslo
1/64
1/64
Rome 97/4096 97/4096
Paris
1/64
1/64
Oslo
1/64
1/64
NY
1/64
1/64
Rome
1/64
1/64

1/8
1/8
1/64
-1/8
1/8
-1/8
-1/8

1/8
1/8
1/64
-1/8
1/8
-1/8
-1/8

-1/8
-1/8
1/64
1/8
-1/8
1/8
1/8

-1/8
-1/8
1/64
1/8
-1/8
1/8
1/8

∑ |PA (l[Birth,City],r [Illness])−P(l[Birth,City],r [Illness])|
=
Utility = l,r
42

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

13506
172032

223/268

Experimental evaluation
• Considered Census data (IPUMS-USA, http://www.ipums.org)
• Evaluated queries of the form
◦

SELECT FROM WHERE

◦

WHERE

condition

Vn

returning a COUNT aggregation function

Wm
i=1 ( j=1

ai = vij )

• Evaluated precision of queries
• Evaluated impact of k, kl , and kr on query precision

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

224/268

Experimental evaluation – Results
1.4

1.2

(1,k)
(2,k/2)
(3,k/3)
(4,k/4)

Relative error

1

0.8

0.6

0.4

0.2

0
10

12

14

16

18

20

k

• Precision in query evaluation progressively decreases as k
increases
• The critical parameter in the conﬁguration is the overall privacy
degree k, rather than individual values of kl and kr
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

225/268

Summary of contributions
• Novel approach to the problem of protecting privacy when
publishing data
• Generic setting of the privacy problem that explicitly takes into
consideration both privacy needs and visibility requirements
• Deﬁnition of loose associations for increasing data utility while
preserving a given degree of privacy

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

226/268

Some open issues...
• Schema vs. instance constraints and visibility requirements
• Data dependencies not captured by conﬁdentiality constraints
• External knowledge
• Support for different kinds of queries
• Different metrics to measure privacy and utility

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

227/268

Combining Indexes, Selective Encryption,
and Fragmentation

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

228/268

Exposure of conﬁdential information
• Indexes, fragmentation, and selective encryption are all solutions
providing the required security and privacy guarantees but...
• ...What happens when such solutions are combined?

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

229/268

Exposure of conﬁdential information
• Indexes, fragmentation, and selective encryption are all solutions
providing the required security and privacy guarantees but...
• ...What happens when such solutions are combined?
=⇒ They may open the door to inferences by users

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

229/268

Exposure of conﬁdential information
• Indexes, fragmentation, and selective encryption are all solutions
providing the required security and privacy guarantees but...
• ...What happens when such solutions are combined?
=⇒ They may open the door to inferences by users
• Indexes and selective encryption
• Indexes and fragmentation

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

229/268

Indexes and Selective Access to
Outsourced Data

S. De Capitani di Vimercati, S. Foresti, S. Jajodia, S. Paraboschi, P. Samarati, “Private Data Indexes for Selective Access to Outsourced Data,” in Proc. of WPES, Chicago, IL, USA, October 2011.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

230/268

The inference problem
• The storage server can be honest-but-curious
• The server cannot decrypt the data for executing queries
=⇒ indexes can be associated with encrypted data to allow the server
to execute queries on them

• The data owner may want to provide different data views to
different users
=⇒ selective encryption uses different keys for different portions of the
data

• The combination of the two solutions may open the door to
inferences by users

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

231/268

Blocking inferences [DFJPS-11]
• Characterize the exposure of conﬁdential information due to
indexes and access control enforcement
• Deﬁne a index function, depending on plaintext values and access
control restrictions, that
◦ supports efﬁcient query evaluation
◦ protects against inference exposure

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

232/268

Encrypted relation
• Symmetric encryption is applied at the tuple-level
• The encrypted version of relation r over schema R(A1 , . . . , An ) is a
relation re over schema Re (tid, etuple, I1 , . . . , Il ):
◦ tid: numerical attribute acting as primary key
◦ etuple: ciphertext resulting from the encryption of a tuple
◦ Ii , i=1,. . . ,l: index over attribute Aji ∈R
S HOPS
Id City Year Sales
t 1 001 NY
2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY
2011 700
t 5 005 Oslo 2011 700

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

233/268

Indexing techniques
Remember . . .:
• Direct index (e.g., [CDDJPS-05])
each plaintext value is mapped to a different index value and
viceversa
• Flattened index (e.g., [WL-06])
each plaintext value is mapped to a set of index values and each
index value corresponds to a unique plaintext value
• Bucket/hash-based index (e.g., [CDDJPS-05, HIML-02])
different plaintext values are mapped to the same index value

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

234/268

User knowledge
Each user knows the:
• index functions used to deﬁne indexes in Re
• plaintext tuples that she is authorized to access
• encrypted relation re in its entirety
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY
2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY
2011 700
t 5 005 Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

235/268

User knowledge
Each user knows the:
• index functions used to deﬁne indexes in Re
• plaintext tuples that she is authorized to access
• encrypted relation re in its entirety
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)
˘

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

235/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t 2 A,B
t3 B
t4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
2011
t5
2011

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
2011
t5
2011

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t2 A,B
t3 B
t4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
2011 700
t5
2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
2011 700
t5
2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
2011 700
t5
2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
2011 700
t5
2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)

236/268

Exposure risk – Direct index (1)
• Plaintext values are always represented by the same index value
and viceversa
=⇒ cells having the same plaintext values are exposed

acl
t1 A
t2 A,B
t3 B
t4 A,C
t5 C

S HOPS
Id City Year Sales
t1
Rome 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
Rome 2011 700
t5
Rome 2011 700

S HOPSe
tid etuple
Ic
Iy
1
α ι (NY)
ι (2010)
2
β ι (Rome) ι (2010)
3
γ ι (Rome) ι (2011)
4
δ ι (NY)
ι (2011)
5
ε ι (Oslo) ι (2011)

Is
ι (600)
ι (700)
ι (600)
ι (700)
ι (700)
˘

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

236/268

Exposure risk – Direct index (2)
• Each user knows index function ι
=⇒ all index-plaintext value correspondences are exposed to
brute-force attacks
=⇒ the whole outsourced relation is exposed to brute-force attacks
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
NY 2011 700
t5
Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

S HOPSe
tid etuple
Ic
Iy
Is
1
α ι (NY) ι (2010) ι (600)
2
β ι (Rome) ι (2010) ι (700)
3
γ ι (Rome) ι (2011) ι (600)
4
δ ι (NY) ι (2011) ι (700)
5
ε ι (Oslo) ι (2011) ι (700)

237/268

Exposure risk – Flattened and bucket/hash-based index
• Flattened index: an index value always represents the same
plaintext value and users know the index function
=⇒ cells having the same plaintext values are exposed
=⇒ all index-plaintext value correspondences are exposed to
brute-force attacks
=⇒ the whole outsourced relation is exposed to brute-force attacks

• Bucket/hash-based index: the same index value may represent
different plaintext values
=⇒ users can only infer with certainty that certain values do not
correspond to given cells

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

238/268

Intuitive approach – ACL-based index
Index values directly depend on ACLs
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY
2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY
2011 700
t 5 005 Oslo 2011 700

S HOPSe
tid etuple
Ic
1
α ιA (NY)
2
β ιAB (Rome)
3
γ ιB (Rome)
4
δ ιAC (NY)
5
ε ιC (Oslo)

Iy
Is
ιA (2010) ιA (600)
ιAB (2010) ιAB (700)
ιB (2011) ιB (600)
ιAC (2011) ιAC (700)
ιC (2011) ιC (700)

+ block inference exposure
− considerable burden at the client side for query translation
Ex: query submitted by user B with condition
Year=2010 =⇒ Iy

IN

{ιB (2010), ιAB (2010), ιBC (2010), ιABC (2010)}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

239/268

Intuitive approach – ACL-based index
Index values directly depend on ACLs
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY
2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY
2011 700
t 5 005 Oslo 2011 700

S HOPSe
tid etuple
Ic
1
α ιA (NY)
2
β ιAB (Rome)
3
γ ιB (Rome)
4
δ ιAC (NY)
5
ε ιC (Oslo)

Iy
Is
ιA (2010) ιA (600)
ιAB (2010) ιAB (700)
ιB (2011) ιB (600)
ιAC (2011) ιAC (700)
ιC (2011) ιC (700)

+ block inference exposure
− considerable burden at the client side for query translation
consider a query submitted by user B including condition
Year=2010 =⇒ Iy

IN

{ιB (2010), ιAB (2010), ιBC (2010), ιABC (2010)}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

239/268

Intuitive approach – ACL-based index
Index values directly depend on ACLs
acl
t1 A
t2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
t2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

S HOPSe
tid etuple
Ic
Iy
Is
1
α ιA (NY)
ιA (2010) ιA (600)
2
β ιAB (Rome) ιAB (2010) ιAB (700)
3
γ ιB (Rome) ιB (2011) ιB (600)
4
δ ιAC (NY)
ιAC (2011) ιAC (700)
5
ε ιC (Oslo) ιC (2011) ιC (700)

+ block inference exposure
− considerable burden at the client side for query translation
Ex: query submitted by user B with condition
Year=2010 =⇒ Iy

IN

{ιB (2010), ιAB (2010), ιBC (2010), ιABC (2010)}

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

239/268

Intuitive approach – ACL-based index
Index values directly depend on ACLs
acl
t1 A
t2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
t2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

S HOPSe
tid etuple
Ic
Iy
Is
1
α ιA (NY)
ιA (2010) ιA (600)
2
β ιAB (Rome) ιAB (2010) ιAB (700)
3
γ ιB (Rome) ιB (2011) ιB (600)
4
δ ιAC (NY)
ιAC (2011) ιAC (700)
5
ε ιC (Oslo) ιC (2011) ιC (700)

+ block inference exposure
− considerable burden at the client side for query translation
Ex: query submitted by user B with condition
Year=2010 =⇒ Iy

IN

{ιB (2010), ιAB (2010), ιBC (2010), ιABC (2010)}
˘

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

239/268

Intuitive approach – User-based index
• Each user u has an index function ιu that depends on a private
piece of information shared with the data owner
• For each cell t [A] in r and user u in acl(t ) there is index value
ιu (t [A]) in te [IA ]

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

240/268

Intuitive approach – User-based index
• Each user u has an index function ιu that depends on a private
piece of information shared with the data owner
• For each cell t [A] in r and user u in acl(t ) there is index value
ιu (t [A]) in te [IA ]
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

S HOPSe
tid etuple
Ic
Iy
Is
1
α ιA (NY)
ιA (2010)
ιA (600)
2
β ιA (Rome)ιB (Rome) ιA (2010)ιB (2010) ιA (700)ιB (700)
3
γ ιB (Rome)
ιB (2011)
ιB (600)
4
δ ιA (NY)ιC (NY)
ιA (2011)ιC (2011) ιA (700)ιC (700)
5
ε ιC (Oslo)
ιC (2011)
ιC (700)

=⇒ remains vulnerable to inference

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

240/268

Intuitive approach – User-based index
• Each user u has an index function ιu that depends on a private
piece of information shared with the data owner
• For each cell t [A] in r and user u in acl(t ) there is index value
ιu (t [A]) in te [IA ]
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

S HOPSe
tid etuple
Ic
Iy
Is
1
α ιA (NY)
ιA (2010)
ιA (600)
2
β ιA (Rome)ιB (Rome) ιA (2010)ιB (2010) ιA (700)ιB (700)
3
γ ιB (Rome)
ιB (2011)
ιB (600)
4
δ ιA (NY)ιC (NY)
ιA (2011)ιC (2011) ιA (700)ιC (700)
5
ε ιC (Oslo)
ιC (2011)
ιC (700)

=⇒ remains vulnerable to inference

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

240/268

Intuitive approach – User-based index
• Each user u has an index function ιu that depends on a private
piece of information shared with the data owner
• For each cell t [A] in r and user u in acl(t ) there is index value
ιu (t [A]) in te [IA ]
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t1
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

S HOPSe
tid etuple
Ic
Iy
Is
1
α ιA (NY)
ιA (2010)
ιA (600)
2
β ιA (Rome)ιB (Rome) ιA (2010)ιB (2010) ιA (700)ιB (700)
3
γ ιB (Rome)
ιB (2011)
ιB (600)
4
δ ιA (NY)ιC (NY)
ιA (2011)ιC (2011) ιA (700)ιC (700)
5
ε ιC (Oslo)
ιC (2011)
ιC (700)

=⇒ remains vulnerable to inference

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

240/268

Intuitive approach – User-based index
• Each user u has an index function ιu that depends on a private
piece of information shared with the data owner
• For each cell t [A] in r and user u in acl(t ) there is index value
ιu (t [A]) in te [IA ]
acl
t1 A
t2 A,B
t3 B
t4 A,C
t5 C

S HOPS
Id City Year Sales
t1
2010
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
700
t5
700

S HOPSe
tid etuple
Ic
Iy
Is
1
α ιA (NY)
ιA (2010)
ιA (600)
2
β ιA (Rome)ιB (Rome) ιA (2010)ιB (2010) ιA (700)ιB (700)
3
γ ιB (Rome)
ιB (2011)
ιB (600)
4
δ ιA (NY)ιC (NY)
ιA (2011)ιC (2011) ιA (700)ιC (700)
5
ε ιC (Oslo)
ιC (2011)
ιC (700)

=⇒ remains vulnerable to inference

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

˘

240/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

241/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

241/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales 
t 1 001 NY 2010 600
t 2 002 Rome 2010 700 
∼
t 3 003 Rome 2011 600  City
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t 1 ∼City t 4

t 2 ∼Sales t 4

241/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600 
t 2 002 Rome 2010 700
∼City
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t 1 ∼City t 4
t 2 ∼City t 3

t 2 ∼Sales t 4

241/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales 
t 1 001 NY 2010 600
∼Year
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t 1 ∼City t 4
t 2 ∼City t 3
t 1 ∼Year t 2
t 2 ∼Sales t 4

241/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600 
t 4 004 NY 2011 700
∼Year
t 5 005 Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t 1 ∼City t 4
t 2 ∼City t 3
t 1 ∼Year t 2
t 4 ∼Year t 5
t 2 ∼Sales t 4

241/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600 
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600 ∼Sales
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t 1 ∼City t 4
t 2 ∼City t 3
t 1 ∼Year t 2
t 4 ∼Year t 5
t 2 ∼Sales t 4

241/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600 
t 4 004 NY 2011 700
∼Sales
t 5 005 Oslo 2011 700

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t 1 ∼City t 4
t 2 ∼City t 3
t 1 ∼Year t 2
t 4 ∼Year t 5
t 2 ∼Sales t 4
t 4 ∼Sales t 5

241/268

Conﬂicting tuples
• Tuples t i and t j are in conﬂict over attribute A, t i ∼A t j , iff
◦ have the same value for the attribute
◦ can be accessed by different but overlapping sets of users
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales 
t 1 001 NY 2010 600
t 2 002 Rome 2010 700 6∼Sales
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

t 1 ∼City t 4
t 2 ∼City t 3
t 1 ∼Year t 2
t 4 ∼Year t 5
t 2 ∼Sales t 4
t 4 ∼Sales t 5
˘

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

241/268

Tuple exposure – Example
t i ∼A . . .∼A t j =⇒ t i [A] is exposed to all users in acl(t j )\acl(t i )
t i ∼A . . .∼A t j =⇒ t j [A] is exposed to all users in acl(t i )\acl(t j )

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

242/268

Tuple exposure – Example
t i ∼A . . .∼A t j =⇒ t i [A] is exposed to all users in acl(t j )\acl(t i )
t i ∼A . . .∼A t j =⇒ t j [A] is exposed to all users in acl(t i )\acl(t j )
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPSe
S HOPS
Ic
Iy
Is
Id City
Year Sales tid etuple
t1
1
α ιA (NY)
ιA (2010)
ιA (600)
t 2 002 Rome 2010 700
2
β ιA (Rome)ιB (Rome) ιA (2010)ιB (2010) ιA (700)ιB (700)
t 3 003 Rome 2011 600
3
γ ιB (Rome)
ιB (2011)
ιB (600)
t4
4
δ ιA (NY)ιC (NY)
ιA (2011)ιC (2011) ιA (700)ιC (700)
t5
5
ε ιC (Oslo)
ιC (2011)
ιC (700)

Exposures to B
t 1 ∼Year t 2 =⇒ t 1 [Year] is exposed to B
t 2 ∼Sales t 4 =⇒ t 4 [Sales] is exposed to B
t 4 ∼Sales t 5 =⇒ t 5 [Sales] is exposed to B

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

242/268

Tuple exposure – Example
t i ∼A . . .∼A t j =⇒ t i [A] is exposed to all users in acl(t j )\acl(t i )
t i ∼A . . .∼A t j =⇒ t j [A] is exposed to all users in acl(t i )\acl(t j )
acl
t1 A
t2 A,B
t3 B
t 4 A,C
t5 C

S HOPSe
S HOPS
Ic
Iy
Is
Id City
Year Sales tid etuple
t1
2010
1
α ιA (NY)
ιA (2010)
ιA (600)
t 2 002 Rome 2010 700
2
β ιA (Rome)ιB (Rome) ιA (2010)ιB (2010) ιA (700)ιB (700)
t 3 003 Rome 2011 600
3
γ ιB (Rome)
ιB (2011)
ιB (600)
t4
4
δ ιA (NY)ιC (NY)
ιA (2011)ιC (2011) ιA (700)ιC (700)
t5
5
ε ιC (Oslo)
ιC (2011)
ιC (700)

Exposures to B
• t 1 ∼Year t 2 =⇒ t 1 [Year]
t 2 ∼Sales t 4 =⇒ t 4 [Sales] is exposed to B
t 4 ∼Sales t 5 =⇒ t 5 [Sales] is exposed to B

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

242/268

Tuple exposure – Example
t i ∼A . . .∼A t j =⇒ t i [A] is exposed to all users in acl(t j )\acl(t i )
t i ∼A . . .∼A t j =⇒ t j [A] is exposed to all users in acl(t i )\acl(t j )
acl
t1 A
t2 A,B
t3 B
t4 A,C
t5 C

S HOPSe
S HOPS
Ic
Iy
Is
Id City
Year Sales tid etuple
t1
2010
1
α ιA (NY)
ιA (2010)
ιA (600)
t 2 002 Rome 2010 700
2
β ιA (Rome)ιB (Rome) ιA (2010)ιB (2010) ιA (700)ιB (700)
t 3 003 Rome 2011 600
3
γ ιB (Rome)
ιB (2011)
ιB (600)
t4
700
4
δ ιA (NY)ιC (NY)
ιA (2011)ιC (2011) ιA (700)ιC (700)
t5
5
ε ιC (Oslo)
ιC (2011)
ιC (700)

Exposures to B
• t 1 ∼Year t 2 =⇒ t 1 [Year]
• t 2 ∼Sales t 4 =⇒ t 4 [Sales]
t 4 ∼Sales t 5 =⇒ t 5 [Sales] is exposed to B

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

242/268

Tuple exposure – Example
t i ∼A . . .∼A t j =⇒ t i [A] is exposed to all users in acl(t j )\acl(t i )
t i ∼A . . .∼A t j =⇒ t j [A] is exposed to all users in acl(t i )\acl(t j )
acl
t1 A
t2 A,B
t3 B
t4 A,C
t5 C

S HOPSe
S HOPS
Ic
Iy
Is
Id City
Year Sales tid etuple
t1
2010
1
α ιA (NY)
ιA (2010)
ιA (600)
t 2 002 Rome 2010 700
2
β ιA (Rome)ιB (Rome) ιA (2010)ιB (2010) ιA (700)ιB (700)
t 3 003 Rome 2011 600
3
γ ιB (Rome)
ιB (2011)
ιB (600)
t4
700
4
δ ιA (NY)ιC (NY)
ιA (2011)ιC (2011) ιA (700)ιC (700)
t5
700
5
ε ιC (Oslo)
ιC (2011)
ιC (700)

Exposures to B
• t 1 ∼Year t 2 =⇒ t 1 [Year]
• t 2 ∼Sales t 4 =⇒ t 4 [Sales]
• t 2 ∼Sales t 4 ∼Sales t 5 =⇒ t 5 [Sales]
˘

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

242/268

Safe index
• An index function is safe if conﬂicting tuples have different index
values for all the users who can access them
• The index values computed by a safe index function cannot be
exploited for inference purposes
• We deﬁne a safe index for attribute A by
◦ safely partitioning tuples in clusters such that tuples in conﬂict over
A do not belong to the same cluster
◦ adopting a different salt for each cluster in the deﬁnition of the index
function for A

• To minimize the burden at the client side for query translation, the
number of salts (i.e., the number of clusters) must be minimized
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

243/268

Conﬂict graph

• Our minimization problem is
equivalent to the minimum vertex
coloring problem
• A conﬂict graph GA (VA , EA ) is a
non-directed graph with

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

a vertex in VA for each tuple in r
an edge (ti , tj ) in EA iff t i ∼A t j

A minimum coloring of GA is a
minimum safe partitioning of r that
solves conﬂicts w.r.t. A
not minimum
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

244/268

Conﬂict graph

• Our minimization problem is
equivalent to the minimum vertex
coloring problem
• A conﬂict graph GA (VA , EA ) is a
non-directed graph with

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

◦ a vertex in VA for each tuple in r
an edge (ti , tj ) in EA iff t i ∼A t j

A minimum coloring of GA is a
minimum safe partitioning of r that
solves conﬂicts w.r.t. A

GCity

t1

t2

t3

t4
t5

not minimum
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

244/268

Conﬂict graph

• Our minimization problem is
equivalent to the minimum vertex
coloring problem
• A conﬂict graph GA (VA , EA ) is a
non-directed graph with

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

◦ a vertex in VA for each tuple in r
◦ an edge (ti , tj ) in EA iff t i ∼A t j

A minimum coloring of GA is a
minimum safe partitioning of r that
solves conﬂicts w.r.t. A

GCity

t1

t2

t3

t4
t5

not minimum
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

244/268

Conﬂict graph

• Our minimization problem is
equivalent to the minimum vertex
coloring problem
• A conﬂict graph GA (VA , EA ) is a
non-directed graph with

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

◦ a vertex in VA for each tuple in r
◦ an edge (ti , tj ) in EA iff t i ∼A t j

• A minimum coloring of GA is a
minimum safe partitioning of r that
solves conﬂicts w.r.t. A

GCity

t1

t2

t3

t4
t5

not minimum
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

244/268

Conﬂict graph

• Our minimization problem is
equivalent to the minimum vertex
coloring problem
• A conﬂict graph GA (VA , EA ) is a
non-directed graph with

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

◦ a vertex in VA for each tuple in r
◦ an edge (ti , tj ) in EA iff t i ∼A t j

• A minimum coloring of GA is a
minimum safe partitioning of r that
solves conﬂicts w.r.t. A

GCity

t1

t2

t3

t4
t5

Safe but not minimum coloring
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

244/268

Conﬂict graph

• Our minimization problem is
equivalent to the minimum vertex
coloring problem
• A conﬂict graph GA (VA , EA ) is a
non-directed graph with

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

◦ a vertex in VA for each tuple in r
◦ an edge (ti , tj ) in EA iff t i ∼A t j

• A minimum coloring of GA is a
minimum safe partitioning of r that
solves conﬂicts w.r.t. A

GCity

t1

t2

t3

t4
t5

Safe and minimum coloring
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

244/268

˘

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

245/268

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700
S HOPSe

tid etuple
1
α
2
β
3
γ
4
δ
5
ε

Ic

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Iy

Is

245/268

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

GCity

t1

t2

t3

t4
t5

S HOPSe
tid etuple
1
α
2
β
3
γ
4
δ
5
ε

Ic

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Iy

Is

245/268

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

GCity

t1

t2

t3

t4
t5

S HOPSe
tid etuple
1
α
2
β
3
γ
4
δ
5
ε

Ic

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Iy

Is

245/268

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

GCity

t1

t2

t3

t4
t5

S HOPSe
tid etuple
Ic
1
α ιA (NY,sA )
2
β ιA (Rome,s′A )
3
γ
4
δ ιA (NY,s′A )
5
ε

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Iy

Is

245/268

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

GCity

t1

t2

t3

t4
t5

S HOPSe
tid etuple
Ic
1
α ιA (NY,sA )
2
β ιA (Rome,s′A )ιB (Rome,sB )
3
γ ιB (Rome,s′B )
4
δ ιA (NY,s′A )
5
ε

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Iy

Is

245/268

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

GCity

t1

t2

t3

t4
t5

S HOPSe
tid etuple
Ic
1
α ιA (NY,sA )
2
β ιA (Rome,s′A )ιB (Rome,sB )
3
γ ιB (Rome,s′B )
4
δ ιA (NY,s′A )ιC (NY,sC )
5
ε ιC (Oslo,sC )
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Iy

Is

245/268

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

GYear

t1

t2

t3

t4
t5

S HOPSe
tid etuple
Ic
1
α ιA (NY,sA )
2
β ιA (Rome,s′A )ιB (Rome,sB )
3
γ ιB (Rome,s′B )
4
δ ιA (NY,s′A )ιC (NY,sC )
5
ε ιC (Oslo,sC )

Iy
ιA (2010,sA )
ιA (2010,s′A )ιB (2010,sB )
ιB (2011,s′B )
ιA (2011,sA )ιC (2011,sC )
ιC (2011,s′C )

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

Is

245/268

Computing a safe index
Index function ιu for user u over attribute A is deﬁned applying
randomly generated salts to tuples
• tuples in different clusters are assigned different salts
• tuples in the same cluster are assigned the same salt
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700

GSales

t1

t2

t3

t4
t5

S HOPSe
tid etuple
Ic
1
α ιA (NY,sA )
2
β ιA (Rome,s′A )ιB (Rome,sB )
3
γ ιB (Rome,s′B )
4
δ ιA (NY,s′A )ιC (NY,sC )
5
ε ιC (Oslo,sC )

Iy
Is
ιA (2010,sA )
ιA (600,sA )
ιA (2010,s′A )ιB (2010,sB ) ιA (700,sA )ιB (700,sB )
ιB (2011,s′B )
ιB (600,sB )
ιA (2011,sA )ιC (2011,sC ) ιA (700,s′A )ιC (700,sC )
ιC (2011,s′C )
ιC (700,s′C )

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

245/268

Relation level approach – 1
• The conﬂict graph can also be
deﬁned over the whole schema of
the outsourced relation, deﬁning a
unique partitioning of r
• Each tuple t is associated with a
unique salt, used to compute all
the index values associated with t

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700
GCity

• Conﬂict graph GR (VR ,ER ) is a
non-directed graph with
a vertex in VR for each tuple in r
an edge (ti , tj ) in ER if ∃A∈R s.t. t i ∼A t j

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

246/268

Relation level approach – 1
• The conﬂict graph can also be
deﬁned over the whole schema of
the outsourced relation, deﬁning a
unique partitioning of r
• Each tuple t is associated with a
unique salt, used to compute all
the index values associated with t
• Conﬂict graph GR (VR ,ER ) is a
non-directed graph with

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700
GSHOPS

t1

t2

t3

t4

◦ a vertex in VR for each tuple in r

t5
an edge (ti , tj ) in ER if ∃A∈R s.t. t i ∼A t j

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

246/268

Relation level approach – 1
• The conﬂict graph can also be
deﬁned over the whole schema of
the outsourced relation, deﬁning a
unique partitioning of r
• Each tuple t is associated with a
unique salt, used to compute all
the index values associated with t
• Conﬂict graph GR (VR ,ER ) is a
non-directed graph with

acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City Year Sales
t 1 001 NY 2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY 2011 700
t 5 005 Oslo 2011 700
GSHOPS

t1

t2

t3

t4

◦ a vertex in VR for each tuple in r
◦ an edge (ti , tj ) in ER if ∃A∈R s.t.
t i ∼A t j

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t5

246/268

Relation level approach – 2
• Conﬂict graph GR (VR ,ER ) can be obtained by composing the
conﬂict graphs GA (VA ,EA ) of attributes in R
◦ a coloring for GR is a coloring for GA , with A∈R, but not viceversa
◦ a minimum coloring for GR may not be minimum for GA , with A∈R

GCity

GYear

GSales

GS HOPS

t1

t2

t1

t2

t1

t2

t1

t2

t3

t4

t3

t4

t3

t4

t3

t4

t5

t5

t5

t5

Safe but not minimum coloring
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

247/268

Relation level approach – 2
• Conﬂict graph GR (VR ,ER ) can be obtained by composing the
conﬂict graphs GA (VA ,EA ) of attributes in R
◦ a coloring for GR is a coloring for GA , with A∈R, but not viceversa
◦ a minimum coloring for GR may not be minimum for GA , with A∈R

GCity

GYear

GSales

GS HOPS

t1

t2

t1

t2

t1

t2

t1

t2

t3

t4

t3

t4

t3

t4

t3

t4

t5

t5

t5

t5

Safe but not minimum coloring
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

247/268

Relation level approach – 2
• Conﬂict graph GR (VR ,ER ) can be obtained by composing the
conﬂict graphs GA (VA ,EA ) of attributes in R
◦ a coloring for GR is a coloring for GA , with A∈R, but not viceversa
◦ a minimum coloring for GR may not be minimum for GA , with A∈R

GCity

GYear

GSales

GS HOPS

t1

t2

t1

t2

t1

t2

t1

t2

t3

t4

t3

t4

t3

t4

t3

t4

t5

t5

t5

t5

Safe but not minimum coloring
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

247/268

Relation level approach – 2
• Conﬂict graph GR (VR ,ER ) can be obtained by composing the
conﬂict graphs GA (VA ,EA ) of attributes in R
◦ a coloring for GR is a coloring for GA , with A∈R, but not viceversa
◦ a minimum coloring for GR may not be minimum for GA , with A∈R

GCity

GYear

GSales

GS HOPS

t1

t2

t1

t2

t1

t2

t1

t2

t3

t4

t3

t4

t3

t4

t3

t4

t5

t5

Safe and minimum coloring
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

t5

t5
˘
247/268

Query evaluation
• Each user u knows
◦ index function ιu
◦ the maximum number of salts nA,u used to deﬁne the index for
attribute A
◦ the pseudo-random function used to generate salts

• Condition A=v in a query submitted by user u is translated as
IA IN V, with
◦ IA : index over A
◦ V={ιu (v, s1 ), . . . , ιu (v, snA,u )}: values obtained applying ιu to v
combined with each of the nA,u salts

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

248/268

Query evaluation – Example
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City
Year Sales
t 1 001 NY
2010 600
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t 4 004 NY
2011 700
t 5 005 Oslo 2011 700
S HOPSe

tid etuple
Ic
1
α ιA (NY,sA )
2
β ιA (Rome,s′A )ιB (Rome,sB )
3
γ ιB (Rome,s′B )
4
δ ιA (NY,s′A )ιC (NY,sC )
5
ε ιC (Oslo,sC )

Iy
Is
ιA (2010,sA )
ιA (600,sA )
ιA (2010,s′A )ιB (2010,sB ) ιA (700,sA )ιB (700,sB )
ιB (2011,s′B )
ιB (600,sB )
ιA (2011,sA )ιC (2011,sC ) ιA (700,s′A )ιC (700,sC )
ιC (2011,s′C )
ιC (700,s′C )

Consider the following query by user B
SELECT
FROM
WHERE

City, Sales
S HOPS
Year=2010

SELECT

=⇒

FROM
WHERE

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

etuple
S HOPSe
Iy IN {ιB (2010,sB ),ιB (2010,s′B )}
249/268

Query evaluation – Example
acl
t1 A
t 2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City
Year Sales
t1
t 2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5
S HOPSe

tid etuple
Ic
1
α ιA (NY,sA )
2
β ιA (Rome,s′A )ιB (Rome,sB )
3
γ ιB (Rome,s′B )
4
δ ιA (NY,s′A )ιC (NY,sC )
5
ε ιC (Oslo,sC )

Iy
Is
ιA (2010,sA )
ιA (600,sA )
ιA (2010,s′A )ιB (2010,sB ) ιA (700,sA )ιB (700,sB )
ιB (2011,s′B )
ιB (600,sB )
ιA (2011,sA )ιC (2011,sC ) ιA (700,s′A )ιC (700,sC )
ιC (2011,s′C )
ιC (700,s′C )

Query by B, who has 2 salts for Year
SELECT
FROM
WHERE

City, Sales
S HOPS
Year=2010

SELECT

=⇒

FROM
WHERE

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

etuple
S HOPSe
Iy IN {ιB (2010,sB ),ιB (2010,s′B )}
249/268

Query evaluation – Example
acl
t1 A
t2 A,B
t3 B
t 4 A,C
t5 C

S HOPS
Id City
Year Sales
t1
t2 002 Rome 2010 700
t 3 003 Rome 2011 600
t4
t5

S HOPSe
tid etuple
Ic
Iy
Is
1
α ιA (NY,sA )
ιA (2010,sA )
ιA (600,sA )
2
β ιA (Rome,s′A )ιB (Rome,sB ) ιA (2010,s′A )ιB (2010,sB ) ιA (700,sA )ιB (700,sB )
3
γ ιB (Rome,s′B )
ιB (2011,s′B )
ιB (600,sB )
4
δ ιA (NY,s′A )ιC (NY,sC )
ιA (2011,sA )ιC (2011,sC ) ιA (700,s′A )ιC (700,sC )
5
ε ιC (Oslo,sC )
ιC (2011,s′C )
ιC (700,s′C )

Query by B, who has 2 salts for Year
SELECT
FROM
WHERE

City, Sales
S HOPS
Year=2010

translates to
SELECT

=⇒

FROM
WHERE

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

etuple
S HOPSe
Iy IN {ιB (2010,sB ),ιB (2010,s′B )}˘
249/268

Experimental results – 1
• Relational table built starting from the TPC-H benchmark
◦ three attributes with 5, 25, and 11,000 distinct values
◦ from 500 to 100,000 tuples

• Access control policy obtained extracting the authorship
information from the DBLP repository
◦ each paper is represented by a tuple in the table
◦ each author can access all and only her papers

• Attribute level and relation level approaches compared w.r.t.
◦ the number of clusters composing a safe partitioning (i.e., upper
bound of the number of salts required)
◦ the average number of salts per user (i.e., user overhead in query
translation)
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

250/268

Experimental results – 2
Attribute level
2.8

Relation level
2.8

Attribute with cardinality 11,000
Attribute with cardinality 25
Attribute with cardinality 5

2.6

2.4

2.4

2.2
Number of Salts (Avg)

Number of Salts (Avg)

Configuration with 3 attributes
Configuration with 2 attributes

2.6

2

1.8

1.6

1.4

2.2

2

1.8

1.6

1.4

1.2

1.2

1
0

10000

20000

30000

40000
50000
60000
Number of Tuples

70000

80000

90000

100000

• Attribute level salt, three
attributes:
◦ cardinality 5
◦ cardinality 25
◦ cardinality 11000
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

1
0

10000

20000

30000

40000
50000
60000
Number of Tuples

70000

80000

90000

100000

• Relation level salt, two
relations:
◦ three attributes, with
cardinality 5, 25, 11000
◦ two attributes, with
cardinality 25, 11000
251/268

Experimental results – 3
Specifying salts at the attribute level (in contrast to relation)
+ permits to reduce the overhead of queries with condition on the
most selective attributes (the difference for non-selective attributes
is minimal)
− requires storing a different value for the number of salts for every
attribute (in contrast to a value for the whole relation), for every
user
=⇒ If queries over selective attributes are more frequent: the
attribute level approach is preferred; otherwise, the relation level
approach is preferred for its simplicity and limited storage
overhead

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

252/268

Some open issues
• Protect against the server observing multiple queries
• Protect against collusion between users and server
• Use of indexes associated with clusters of tuples in contrast to
individual tuples

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

253/268

Indexes and Fragmentation

S. De Capitani di Vimercati, S. Foresti, S. Jajodia, S. Paraboschi, P. Samarati, “On Information Leakage by Indexes over Data
Fragments,” in Proc. of PrivDB, Brisbane, Australia, April 2013.
©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

254/268

Information exposure
+ Provides effectiveness and efﬁciency in query execution
◦ enables the partial server-side evaluation of selection conditions
over encrypted attributes

− Indexes combined with fragmentation can cause information
leakage of conﬁdential (encrypted or fragmented) information
◦ exposure to leakage varies depending on the kind of indexes

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

255/268

Kinds of knowledge
A curious observer can exploit
vertical knowledge due to values appearing in the clear
in one fragment and indexed in other fragments
horizontal knowledge due to external knowledge
of the presence of speciﬁc tuples in the table
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

F e2
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

256/268

Kinds of knowledge
A curious observer can exploit
• vertical knowledge due to values appearing in the clear in one
fragment and indexed in other fragments
horizontal knowledge due to external knowledge
of the presence of speciﬁc tuples in the table
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

256/268

Kinds of knowledge
A curious observer can exploit
• vertical knowledge due to values appearing in the clear in one
fragment and indexed in other fragments
• horizontal knowledge due to external knowledge of the presence
of speciﬁc tuples in the table
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

256/268

Direct index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge

ι (Flu) = α
ι (Gastritis) = γ =⇒ Falk has Gastritis
ι (Gastritis) = γ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

257/268

Direct index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge

ι (Flu) = α
ι (Gastritis) = γ =⇒ Falk has Gastritis
ι (Gastritis) = γ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

257/268

Direct index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge
• ι (Flu) = α
• ι (Gastritis) = γ
the other patients have Diabetes or Arthritis with p = 50%

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

257/268

Direct index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge
• ι (Flu) = α =⇒ Adams, Brown, Cooper have Flu
• ι (Gastritis) = γ =⇒ Falk has Gastritis
• the other patients have Diabetes or Arthritis with p = 50%

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

257/268

Direct index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge

ι (Flu) = α
ι (Gastritis) = γ =⇒ Falk has Gastritis
ι (Gastritis) = γ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

257/268

Direct index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge
• ι (Flu) = α

ι (Gastritis) = γ =⇒ Falk has Gastritis
ι (Gastritis) = γ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

257/268

Direct index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

α
α
α
β
β
γ
δ
δ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge
• ι (Flu) = α =⇒ also Brown and Cooper have Flu

ι (Gastritis) = γ =⇒ Falk has Gastritis
ι (Gastritis) = γ

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

257/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge

ι (Flu) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge

ι (Flu) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge
• ι (Flu) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge
• ι (Flu) = ζ =⇒ ι (Gastritis) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge
• ι (Flu) = ι (Gastritis) = ζ =⇒ Adams, Brown, Cooper, and Falk have
ι (Flu) = ι (Gastritis) = ζ =⇒ Flu with p = 75%,
ι (Flu) = ι (Gastritis) = ζ =⇒ Gastritis with p = 25%

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge

ι (Flu) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge
• ι (Flu) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge
• ι (Flu) = ζ =⇒ no inference
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical and Horizontal knowledge

ι (Flu) = ι (Gastritis) = ζ =⇒ Brown, Cooper, and Falk have
ι (Flu) = ι (Gastritis) = ζ =⇒ Flu with p = 66%,
ι (Flu) = ι (Gastritis) = ζ =⇒ Gastritis with p = 33%

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical and Horizontal knowledge
• ι (Flu) = ι (Gastritis) = ζ =⇒ Brown, Cooper, and Falk have
ι (Flu) = ι (Gastritis) = ζ =⇒ Flu with p = 66%,
ι (Flu) = ι (Gastritis) = ζ =⇒ Gastritis with p = 33%

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical and Horizontal knowledge
• ι (Flu) = ι (Gastritis) = ζ =⇒ Brown, Cooper, and Falk have
ι (Flu) = ι (Gastritis) = ζ =⇒ Flu with p = 66%,
ι (Flu) = ι (Gastritis) = ζ =⇒ Gastritis with p = 33%

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Davis Diabetes

Vertical and Horizontal knowledge

ι (Flu) = ι (Gastritis) = ζ =⇒ Brown, Cooper, and Falk have
ι (Flu) = ι (Gastritis) = ζ =⇒ Flu with p = 66%,
ι (Flu) = ι (Gastritis) = ζ =⇒ Gastritis with p = 33%

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Davis Diabetes

Vertical and Horizontal knowledge
• ι (Diabetes) = η =⇒ Eden has Diabetes
ι (Flu) = ι (Gastritis) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Bucket index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

ζ
ζ
ζ
η
η
ζ
θ
θ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Davis Diabetes

Vertical and Horizontal knowledge
• ι (Diabetes) = η =⇒ Eden has Diabetes
ι (Flu) = ι (Gastritis) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

258/268

Flattened index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

κ
λ
µ
ν
ξ
π
ρ
σ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge

ι (Flu) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

259/268

Flattened index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

κ
λ
µ
ν
ξ
π
ρ
σ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge

ι (Flu) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

259/268

Flattened index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

κ
λ
µ
ν
ξ
π
ρ
σ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Vertical knowledge
• each correspondence between plaintext and index values is
equally like
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

259/268

Flattened index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

κ
λ
µ
ν
ξ
π
ρ
σ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge

ι (Flu) = ζ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

259/268

Flattened index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

κ
λ
µ
ν
ξ
π
ρ
σ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge
• ι (Flu) = κ
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

259/268

Flattened index
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

κ
λ
µ
ν
ξ
π
ρ
σ

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

Horizontal knowledge
• ι (Flu) = κ =⇒ no inference
ι (Flu) = ζ =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

259/268

Intuitive approach: ﬂattening and collisions
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

φ
φ
ψ
χ
χ
ψ
ω
ω

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

+ blocks inference exposure
− exposed to inferences exploiting dynamic observations
=⇒
ι (Flu)={φ ,ψ } =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

260/268

Intuitive approach: ﬂattening and collisions
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

φ
φ
ψ
χ
χ
ψ
ω
ω

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

+ blocks inference exposure
− exposed to inferences exploiting dynamic observations
=⇒
ι (Flu)={φ ,ψ } =⇒

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

260/268

Intuitive approach: ﬂattening and collisions
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

φ
φ
ψ
χ
χ
ψ
ω
ω

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

+ blocks inference exposure
− exposed to inferences exploiting dynamic observations
Disease=‘Flu’ translates to id
ι (Flu)={φ ,ψ } =⇒

IN

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

{φ ,ψ } =⇒ ι (Flu)={φ ,ψ }

260/268

Intuitive approach: ﬂattening and collisions
F e1
salt enc Name State id
s11
s12
s13
s14
s15
s16
s17
s18

e
t11
e
t12
e
t13
e
t14
e
t15
e
t16
e
t17
e
t18

Adams
Brown
Cooper
Davis
Eden
Falk
Green
Hack

VA
MN
CA
VA
NY
CA
NY
NY

φ
φ
ψ
χ
χ
ψ
ω
ω

vertical knowledge
salt enc Disease
s21
s22
s23
s24
s25
s26
s27
s28

e
t21
e
t22
e
t23
e
t24
e
t25
e
t26
e
t27
e
t28

Flu
Flu
Flu
Diabetes
Diabetes
Gastritis
Arthritis
Arthritis

horizontal
Name Disease
Adams Flu

+ blocks inference exposure
− exposed to inferences exploiting dynamic observations
Disease=‘Flu’ translates to id IN {φ ,ψ } =⇒ ι (Flu)={φ ,ψ }
ι (Flu)={φ ,ψ } =⇒ Brown, Cooper, Frank have Flu with p = 66%

©Security, Privacy, and Data Protection Laboratory (SPDP Lab)

260/268

Still several open issues
• Protection against observation of accesses to fragments
• Protection against the release of multiple indexes
◦ multiple indexes in the same fragment
◦ indexes on the same attribute in multiple fragments
◦ two attributes appear one in plaintext and the other indexed in one
fragment and reversed in another fragment

• Protection against different types of observer’s knowledge
• Development of ﬂattened index functions that generate collisions
• Deﬁnition of metrics for assessing exposures due to indexes
• ...

----------------------------------------------------------------





