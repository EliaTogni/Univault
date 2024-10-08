# Motivations:
- Continuous growth of:
	- government and company databases;
	- user-generated content delivered through collaborative Internet services such as YouTube, Flickr;
	- personally identifiable information collected whenever a user creates an account, submits an application, signs up for newsletters, participates in a survey, ...
- Data sharing and dissemination, for e.g.:
	- study trends or to make useful statistical inference;
	- share knowledge;
	- access on-line services.
- External data storage and computation (third party services):
	- cost saving and service benefits;
	- higher availability and more effective disaster protection.

Need to ensure **data privacy** and **integrity** are properly protected.

----------------------------------------------------------------

# Outline
- **Privacy in data publication** $\to$ data release/dissemination;
- **Privacy in data outsourcing** $\to$ third parties store and manage data (towards cloud scenarios).

----------------------------------------------------------------

# Privacy in Data Publication

![[Privacy in data publication.png]]

## Statistical DBMS vs statistical data
Release of data to the public for statistical purpose:
- **statistical DBMS**:
	- the DBMS responds only to **statistical queries** (the aggregate ones);
	- consider a dataset composed by $1000$ respondents, $999$ males and $1$ female, as an example. A query returning only the female respondent would be blocked by the DBMS. If the user would make a query which would return a value aggregated from all the **respondents** (the people replying with answers to a survey, the ones the data refers to) and, then, a query which would return a value aggregated from all the males, the DBMS will block the second query because it would expose the female respondent. Therefore, it is necessary to keep the **windows history** in check.<br />
	  Consider the same dataset and two different and colluded users as an example. The first one is able to make the first query and the second one is able to make the second one. Together they are able to expose the female respondent (**collusion**). Therefore, the statistical DBMS need **run time checking** to control information (directly and indirectly) released (**dinamic**).
- **statistical data**:
	- publish statistics generated a priori and the user can only access these statistics;
	- the control on the indirect release is performed before publication (**static**).

![[StatisticalDBMS.png]]

In the statistical DBMS case, the **transboundary** stands between the user and the DBMS.

![[StatisticalData.png]]

In the statistical data case, the transboundary stands between the statistical data released to the public and the initial data.

----------------------------------------------------------------

## Macrodata vs microdata
In the past, data were mainly released in tabular form (**macrodata**) and through statistical databases. Today many situations require that the specific stored data themselves, called **microdata**, be released, increasing flexibility and availability of information for the users. However, microdata are subject to a greater risk of privacy breaches (**linking attacks**).

### Macrodata
Macrodata tables can be classified into the following two groups (types of tables):
- **Count/Frequency**: each cell of the table contains the number of respondents (**count**) or the percentage of respondents (**frequency**) that have the same value over all attributes of analysis associated with the table;
- **Magnitude data**: each cell of the table contains an aggregate value of a quantity of interest over all attributes of analysis associated with the table.

An example of a count table is a two-dimensional table showing the number of employees by department and annual income (in $K$ Euro).

![[CountTable.png|600]]

An example of a magnitude table is the average number of days spent in the hospital by respondents with a given disease.

![[MagnitudeTable.png|600]]

An example of a microdata table is the records about delinquent children in county Alfa.

![[MicrodataTable.png|600]]

----------------------------------------------------------------

## Information disclosure
Disclosure relates to attribution of sensitive information to a respondent (an individual or organization). There is disclosure when:
- a respondent is identified from released data (**identity disclosure**);
- sensitive information about a respondent is revealed through the released data (**attribute disclosure**);
- the released data make it possible to determine the value of some characteristic of a respondent even if no released record refers to the respondent (**inferential disclosure**).

### Identity disclosure
It occurs if a third party can identify a respondent from the released data.<br />
Revealing that an individual is a respondent in a data collection may or may not violate confidentiality requirements.<br />
In macrodata, revealing identity is generally not a problem, unless the identification leads to divulging confidential information (attribute disclosure).
In microdata, identification is generally regarded as a problem, since microdata records are detailed; identity disclosure usually implies also attribute disclosure.

----------------------------------------------------------------

### Attribute disclosure
It occurs when confidential information about a respondent is revealed and can be attributed to her. Confidential information may be:
- **revealed exactly**;
- **closely estimated**.

----------------------------------------------------------------

### Inferential disclosure
It occurs when information can be inferred with high confidence from statistical properties of the released data. For example, the data may show a high correlation between income and purchase price of home. As purchase price of home is typically public information, a third party might use this information to infer the income of a respondent.<br />
Inference disclosure does not always represent a risk:
- statistical data are released for enabling users to infer and understand relationships between variables;
- inferences are designed to predict aggregate behavior, not individual attributes, and are then often poor predictors of individual data values.

----------------------------------------------------------------

## Restricted data and restricted access
The choice of **statistical disclosure limitation methods** depends on the nature of the data products whose confidentiality must be protected. Some microdata include explicit identifiers (e.g., name, address or Social Security Number). Removing such identifiers is a first step in preparing for the release of microdata for which the confidentiality of individual information must be protected.<br />
Confidentiality can be protected by:
- restricting the amount of information in the released tables (**restricted data**);
- imposing conditions on access to the data products (**restricted access**). The data are released only to autorized people and only for a predetermined purpose (**purpose of use**);
- some combination of these two strategies.

----------------------------------------------------------------

## Protection for count/frequencies macrodata
The data collected from most surveys about people are published in tables that show counts (number of people by category) or frequencies (fraction or percentage of people by category). The protection techniques include:
- **sampling**: publish a survey rather than a census;
- **special rules**: define restrictions on the level of details that can be provided in a table (e.g., do not publish or make inferrable earnings within a $ $1000$ interval);
- **threshold rules**: define a cell of a table sensitive if the number of respondents is less than some specified number.

----------------------------------------------------------------

## Disclosure protection techniques for microdata
The classical protection techniques (often applied to protect microdata before computing statistics) can be classified as follows:
- **masking techniques**: transform the original set of data by not releasing or perturbing their values:
	- **non-perturbative**: the original data are not modified, but some data are suppressed and/or some details are removed (e.g., sampling, local suppression, generalization);
	- **perturbative**: the original data are modified (e.g., rounding, swapping).
- **synthetic data generation techniques**: release plausible but synthetic values instead of the real ones:
	- **fully synthetic**: the released dataset contains synthetic data only;
	- **partially synthetic**: the released dataset contains a mix of original and synthetic data.

----------------------------------------------------------------

## The anonymity problem
The amount of privately owned records that describe each citizen’s finances, interests, and demographics is increasing every day. These data are **de-identified** before release, that is, any explicit identifier (e.g., _SSN_) is removed.<br />
De-identification is not sufficient. In fact, most municipalities sell population registers that include the identities of individuals along with basic demographics. These data can then be used for linking identities with de-identified information (**re-identification**).

An example of the anonymity problem.

![[AnonymityProblem.png|600]]

----------------------------------------------------------------

## Classification of attributes in a microdata table
The attributes in the original microdata table can be classified as:
- **identifiers**: attributes that uniquely identify a microdata respondent (e.g., _SSN_ uniquely identifies the person with which is associated);
- **quasi-identifiers**: attributes that, in combination, can be linked with external information to reidentify all or some of the respondents to whom information refers or reduce the uncertainty over their identities (e.g., _DoB_, _ZIP_, and _Sex_);
- **confidential**: attributes of the microdata table that contain sensitive information (e.g., _Disease_);
- **non confidential**: attributes that the respondents do not consider sensitive and whose release does not cause disclosure.

The more detailed the information at disposal (e.g., a high number of attributes or a sufficient number of detailed attributes), the higher the chance of being able to re-identify a respondent.

----------------------------------------------------------------

## Factors contributing to disclosure risk
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

## Factors contributing to decrease the disclosure risk
A microdata table often contains a subset of the whole population. This implies that the information of a specific respondent may not be included in the microdata table. Furthermore, the information specified in microdata tables released to the public is not always up-to-date (often at least one or two-year old). Therefore, the values of the attributes of the corresponding respondents may have been changed in the meanwhile. Also, the age of the external sources of information used for linking may be different from the age of the information contained in the microdata table.<br />
A microdata table and the external sources of information naturally contain **noise** that decreases the ability to link the information and can also contain data expressed in different forms thus decreasing the ability to link information.

----------------------------------------------------------------

## Measures of risk
Measuring the disclosure risk requires considering:
- the probability that the respondent for whom an intruder is looking for is represented on both the microdata and some external file;
- the probability that the matching variables are recorded in a linkable way on the microdata and on the external file;
- the probability that the respondent for whom the intruder is looking for is unique (or peculiar) in the population of the external file.

The percentage of records representing respondents who are unique in the population (**population unique**) plays a major role in the disclosure risk of microdata (with respect to the specific respondent). Note that each population unique is a sample unique; the vice-versa is not true.

----------------------------------------------------------------

# $k$-Anonymity

**$k$-anonymity**, together with its enforcement via generalization and suppression, aims to protect respondents’ identities while releasing truthful information. It tries to capture the following requirement:
- the released data should be indistinguishably related to no less than a certain number of respondents.

The quasi-identifiers are the set of attributes that can be exploited for linking (whose release must be controlled).

The basic idea is to translate the $k$-anonymity requirement on the released data. Each release of data must be such that every combination of values of quasi-identifiers can be indistinctly matched to at least $k$ respondents. This assumption is based on the worst case scenario in which the respondents in the database are population uniques.<br />
In the released table, the respondents must be indistinguishable (within a given set) with respect to a set of attributes. $k$-anonymity requires that each quasi-identifier value appearing in the released table must have at least $k$ occurrences. This is a sufficient condition for the satisfaction of $k$-anonymity requirement.

## Generalization and suppression
With **generalization**, the values of a given attribute are substituted by using more general values. Based on the definition of a generalization hierarchy, for example, consider the attribute ZIP code and suppose that a step in the corresponding generalization hierarchy consists in suppressing the least significant digit in the ZIP code. With one generalization step, $20222$ and $20223$ become $2022*$ and $20238$ and $20239$ become $2023*$. We are not perturbating the data, we are only removing details.<br />
With **suppression**, it is possible to protect sensitive information by removing it. The introduction of suppression can reduce the amount of generalization necessary to satisfy the $k$-anonymity constraint.

----------------------------------------------------------------

## Domain generalization hierarchy
A **generalization relationship** $\leq_{D}$ defines a mapping between domain $D$ and its generalizations. Given two domains $D_i, D_j \in Dom$, $D_i \leq_{D} D_j$ ($D_i$ is dominated by $D_j$) states that the values in domain $D_j$ are generalizations of values in $D_i$. $\leq_{D}$ implies the existence, for each domain $D$, of a **domain generalization hierarchy** $DGH_D = (Dom, \leq_D )$:
- $\forall D_i, D_j, D_z \in Dom: D_i \leq_D D_j, D_i \leq_D D_z \to D_j \leq_D D_z \vee D_z \leq_D D_j$. This property shows that the generalization hierarchy is a [[Grafo#Catena|chain]], that is, there is a **total order** between the elements of the hierarchy;
- all maximal elements (the **radices**) of $Dom$ are singleton. As an example, observe the $DGH_{Z_0}$ in the image below.

Given a domain tuple $D_T = \langle D_1, . . . , D_n \rangle$ such that $D_i \in Dom, i = 1, . . . , n$, the domain generalization hierarchy of $D_T$ is $DGH_{D_T} = DGH_{D_1} \times . . . \times DGH_{D_n}$. While the domain generalization hierarchy of a single domain defines a chain, the domain generalization hierarchy of a tuple of domains $D_T$ defines a [[Reticolo|lattice]].

An example of a domain generalization hierarchy.

![[DomainGeneralizationHierarchy.png|600]]

----------------------------------------------------------------

## Value generalization hierarchy
A **value generalization relationship** $\leq_V$ associates with each value in domain $D_i$ a unique value in domain $D_j$, direct generalization of $D_i$. $\leq_V$ implies the existence, for each domain $D$, of a **value generalization hierarchy** $VGH_D$.<br />
$VGH_D$ is a [[Albero|tree]] where the leaves are the values in $D$ and the root (i.e., the most general value) is the value in the maximum element in $DGH_D$.

An example of value generalization hierarchy.


![[ValueGeneralizationHierarchy.png|600]]

----------------------------------------------------------------

## Generalized table with suppression
Let $T_i$ and $T_j$ be two tables defined on the same set of attributes. Table $T_j$ is said to be a **generalization with tuple suppression** of table $T_i$, denoted $T_i \preceq T_j$ , if:
1) $\vert T_j \vert \leq \vert T_i \vert$;
2) the domain $dom(A, T_j)$ of each attribute $A$ in $T_j$ is equal to, or a generalization of, the domain $dom(A, T_i)$ of attribute $A$ in $T_i$;
3) it is possible to define an **injective function** associating each tuple $t_j$ in $T_j$ with a tuple $t_i$ in $T_i$ , such that the value of each attribute in $t_j$ is equal to, or a generalization of, the value of the corresponding attribute in $t_i$. The function is defined as injective because the viceversa isn't necessary true due to the suppression.

An example of a generalized table with suppression.

![[GeneralizedTableSuppression.png|600]]

----------------------------------------------------------------

## $k$-minimal generalization with suppression
Now, it will be provided the definition of **distance vector**. Let $T_i (A_1 , . . . , A_n)$ and $T_j (A_1 , . . . , A_n)$ be two tables such that $T_i \preceq T_j$. The distance vector of $T_j$ from $T_i$ is the vector $DV_{i,j} = [d_1 , . . . , d_n]$, where each $d_z, z = 1, . . . , n$, is the length of the unique path between $dom(A_z , T_i)$ and $dom(A_z, T_j)$ in the domain generalization hierarchy $DGH_{D_z}$.

![[DistanceVector.png|600]]

Let $T_i$ and $T_j$ be two tables such that $T_i \preceq T_j$, and let $MaxSup$ be the specified **threshold of acceptable suppression**. $T_j$ is said to be a **$k$-minimal generalization** of table $T_i$ iff:
1) $T_j$ satisfies $k$-anonymity enforcing minimal required suppression, that is, $T_j$ satisfies $k$-anonymity and $\forall T_z : T_i \preceq T_z, DV_{i,z} = DV_{i,j}$, $T_z$ satisfies $k$-anonymity $\to \vert T_j \vert \geq \vert T_z \vert$. This means that for each table $T_z$, which is a generalization of $T_i$, and with the same $DV$, $T_j$ has a number of tuples greater or equal than $T_i$ so it does perform less suppression; 
2) $\vert T_i \vert − \vert T_j \vert \leq MaxSup$;
3) $\forall T_z : T_i \preceq T_z$ and $T_z$ satisfies conditions $1$ and $2$ $\to \neg (DV_{i,z} < DV_{i,j})$. This means that for each $T_z$ such that it is a generalization of $T_i$ and that satisfies the previous conditions (satisfying $k$-anonymity enforcing minimal required suppression and suppressing less than $MaxSup$), it is not true that the $DV$ of $T_z$ is dominated by the $DV$ of $T_j$, with respect to $i$.

An example of $2$-minimal generalizations with $MaxSup = 2$.

![[Example2MinimalGeneralizations.png|600]]

----------------------------------------------------------------

## Computing a preferred generalization
Different preference criteria can be applied in choosing a preferred minimal generalization, among which:
- **minimum absolute distance** prefers the generalization(s) with the smallest absolute distance, that is, with the smallest total number of generalization steps (regardless of the hierarchies on which they have been taken). It is computed as $\sum_{i = 1}^{N}d_i$;
- **minimum relative distance** prefers the generalization(s) with the smallest relative distance, that is, that minimizes the total number of relative steps (a step is made relative by dividing it over the height of the domain hierarchy to which it refers). It is computed as $\sum_{i = 1}^{N} \frac{d_i}{n_i}$, where $n_i$ is the height of the $i$-th domain hierarchy;
- **maximum distribution** prefers the generalization(s) with the greatest number of distinct tuples;
- **minimum suppression** prefers the generalization(s) that suppresses less tuples, that is, the one with the greatest cardinality.

----------------------------------------------------------------

## Classification of k-anonymity techniques
Generalization and suppression can be applied at different levels of granularity. Generalization can be applied at the level of **single column** (i.e., a generalization step generalizes all the values in the column) or single cell (i.e., for a specific column, the table may contain values at different generalization levels).<br />
Suppression can be applied at the level of row (i.e., a suppression operation removes a whole tuple), column (i.e., a suppression operation obscures all the values of a column), or single cells (i.e., a $k$-anonymized table may wipe out only certain cells of a given tuple/attribute).

![[ClassificationKAnonymity.png|600]]

The notation _not applicable_ refers to the fact that we are able to generalize to a finer level than the level at which we are able to suppress.

The notation $\equiv$ referst to the fact that the ability to generalize and suppress at the same level is equal to generalize the column or the cell at the highest level of the hierarchy. Therefore, the suppression is redundant.

An example of $2$-anonymized tables with regard to different models.

![[2Anonymized1.png|600]]
![[2Anonymized2.png|600]]
![[2Anonymized3.png|600]]

In the last example (_CG\_CS_), each tuple has a different $DV$ because the tuple domain is heterogeneous. This type of dataset is better in terms of utility but it worsen the performance.

![[2Anonymized4.png|600]]

----------------------------------------------------------------

## Algorithms for computing a $k$-anonymous table
The problem of finding minimal $k$-anonymous tables, with attribute generalization and tuple suppression, is **computationally hard**. The majority of the exact algorithms proposed in literature have computational time exponential in the number of the attributes composing the quasi-identifier. When the number $\vert QI \vert$ of attributes in the quasi-identifier is small compared with the number $n$ of tuples in the private table $PT$, these exact algorithms with attribute generalization and tuple suppression are practical.<br />
Many exact algorithms for producing $k$-anonymous tables through attribute generalization and tuple suppression have been proposed.

----------------------------------------------------------------

# Algorithms for AG\_TS and AG\_
## Computing a $k$-minimal solution
Each path in $DGH_{D_T}$ represents a generalization strategy for $PT$. We call **locally minimal generalization** the lowest node of each path satisfying $k$-anonymity. The properties exploited by the algorithm are:
1) each $k$-minimal generalization is **locally minimal** with respect to a path (but the converse is not true, that is, a locally minimal generalization with respect to a path is not granted to be the $k$-minimal one). This means that a global minimal is also a locally minimal with respect to a path;
2) going up in the hierarchy the number of tuples that must be removed to guarantee $k$-anonymity decreases.

If there is no solution that guarantees $k$-anonymity suppressing less than $MaxSup$ tuples at height $h$, there cannot exist a solution, with height lower than $h$ that guarantees it. The current height $h$ depends on the $DV$ (e.g., $DV = [1, 1]$ implies that $h = 1 + 1 = 2$).<br />
The algorithm adopts a binary search on the lattice of distance vectors:
1) evaluate solutions at height $\lfloor h/2\rfloor$;
2) if there exists at least a solution satisfying $k$-anonymity:
	1) then evaluates solutions at height $\lfloor h/4 \rfloor$;
	2) otherwise evaluates solutions at height $\lfloor 3h/4 \rfloor$.
3) until the algorithm reaches the lowest height for which there is a distance vector that satisfies $k$-anonymity.

To reduce the computational cost, it adopts a distance vector matrix that avoids the explicit computation of each generalized table.

An example for computing a $k$-minimal solution.<br />
In the table on the right, every cell $c_{ij}$ measures how much the tuple $t_i$ is distant from the tuple $t_j$, that is, how many generalization steps are necessary until the tuples become the same.

![[kMinimalSolution1.png|600]]

Suppose $k = 2$ and $MaxSup = 2$.<br />
Compute first solutions at height $1$ : $GT_{[1,0]}$ and $GT_{[0,1]}$. 

At the level $[1, 0]$, which tuple becomes equal? $t2$ and $t9$ become equals and $t3/t4/t5$ and $t7$ and $t8$.

In the image below, all the cells with $DV \leq [1, 0]$ are generalized to the same value.

![[kMinimalSolution2.png|600]]

Satisfies $2$-anonymity (suppressing $t_1$ and $t_6$).<br />
In the image below, all the cells with $DV \leq [0, 1]$ are generalized to the same value.

![[kMinimalSolution3.png|600]]

Satisfies $2$-anonymity (suppressing $t_8$ and $t_9$).

All the assumptions of the algorithm are based on the fact that the $VGH_D$ is a tree. Therefore, we must be careful in choosing the steps of generalization because, if chosen wrongly, we may lose the monotonicity.

----------------------------------------------------------------

## $k$-Optimize algorithm
This algorithm orders the attributes in $QI$ and the values in their domains. It also associates an integer index value with each domain value, following the defined order.

![[kOptimizeAlgorithm1.png]]

A generalization is the **union** of individual index values. The least value in an attribute domain is omitted. E.g., $\{6\}$ corresponds to:
- Race: $\{1\}$, that is: $\langle [\text{asian or black or white}]\rangle$;
- ZIP: $\{4, 6\}$, that is: $\langle[94138 \text{ or } 94139],[94141 \text{ or } 94142]\rangle$.

The order of values within domains has impact on generalization. $k$-Optimize builds a **[[Albero di Copertura|set enumeration tree]]** over the set $I$ of indexes:

![[kOptimizeAlgorithm2.png]]

The root node of the tree is the empty set. The children of $n$ are the sets obtained by appending a single element $i$ of $I$ to $n$, such that $\forall i' \in n, i > i'$. Each node has a cost that reflects the amount of generalization and suppression of the anonymization represented by the node. This implies that each tuple is associated with a cost that reflects the information loss associated with its generalization or suppression.<br />
$k$-Optimize visits the tree starting from the root (e.g., using a depth-first search) for searching the anonymization with lowest cost. Since the number of nodes in the tree is $2^{\vert I \vert}$, the visit of the tree is not practical. This implies that a **pruning** strategy is fundamental to reduce computational cost. The node $n$ is pruned iff none of its descendants could be optimal. This determination can be made by computing a lower bound on the cost of the nodes in the subtree rooted at $n$. If the lower bound is greater than the current best cost, node $n$ is pruned. This algorithm exploit the monotonicity property of the trees.

----------------------------------------------------------------

## Incognito algorithm
$k$-anonymity with respect to a proper subset of $QI$ is a necessary (not sufficient) condition for $k$-anonymity with respect to $QI$. The **Incognito algorithm** works in the following way:
- iteration $1$: check $k$-anonymity for each attribute in $QI$, discarding generalizations that do not satisfy $k$-anonymity;
- iteration $2$: combine the remaining generalizations in pairs and check $k$-anonymity for each couple obtained;
- ...
- iteration $i$: consider all the $i$-uples of attributes, obtained combining generalizations that satisfied $k$-anonymity at iteration $i − 1$. Discard non $k$-anonymous solutions;
- ...
- iteration $\vert QI \vert$ returns the final result.

Incognito adopts a **[[Programmazione Dinamica|bottom-up]]** approach for the visit of $DGH_s$.

An example of the Incognito algorithm.

![[IncognitoExample1.png|600]]
![[IncognitoExample2.png]]

After the construction of the lattice by the Incognito algorithm, it is still necessary to search the solutions in the hierarchy. This algorithm searches by cutting the space of the solutions.

----------------------------------------------------------------

## Heuristic algorithms
The exact algorithms have complexity exponential in the size of $QI$. Heuristic algorithms have been proposed:
- based on genetic algorithms, it solves the $k$-anonymity problem using an incomplete stochastic search method;
- based on simulated annealing for finding locally minimal solutions, it requires high computational time and does not assure the quality of the solution;
- top-down heuristic to make a table to be released.

$k$-anonymous; it starts from the most general solution, and iteratively specializes some values of the current solution until the $k$-anonymity requirement is violated.

No bounds on efficiency and goodness of the solutions can be given.<br />
Experimental results can be used to assess the quality of the solution retrieved.

----------------------------------------------------------------

# Algorithms for _CS_ and _CG_
## Mondrian multidimensional algorithm
In the **Mondrian multidimensional algorithm**, each attribute in $QI$ represents a dimension. Each tuple in $PT$ represents a point in the space defined by $QI$. Tuples with the same $QI$ value are represented by giving a **multiplicity value** to points. The multi-dimensional space is partitioned by splitting dimensions such that each area contains at least $k$ occurrences of point values. All the points in a region are generalized to a unique value. The corresponding tuples are substituted by the computed generalization.<br />
Mondrian algorithm is flexible and can operate:
- on a different number of attributes:
	- **single-dimension**;
	- **multi-dimension**.
- with different recoding (generalization) strategies:
	- **global recoding** (attribute generalization);
	- **local recoding** (cell generalization).
- with different partitioning strategies:
	- strict (i.e., non-overlapping) partitioning;
	- relaxed (i.e., potentially overlapping, a point can belong to more than one cluster) partitioning.
- using different metrics to determine how to split on each dimension.

An example of the Mondrian multidimensional algorithm.<br />
We wished $k=3$.

![[MondrianMultidimensionalExample1.png|600]]
![[MondrianMultidimensionalExample2.png|600]]

----------------------------------------------------------------

## Approximation algorithms
There exist some **approximation algorithms** for general and specific values of $k$ (e.g., $1.5$-approximation for $2$-anonymity, and $2$-approximation for $3$-anonymity).<br />
Approximation algorithm for _CS_:
- \[MW-04\]: $\mathcal{O}(k \log{k})$-approximation;
- \[AFKMPTZ-05a\]: with unbounded value of $k$, $\mathcal{O}(k)$-approximation solution.

Approximation algorithm for _CG_:
- \[AFKMPTZ-05b\]: with unbounded value of $k$, $\mathcal{O}(k)$-approximation solution.

----------------------------------------------------------------

## k-anonymity revisited
$k$-anonymity requires that each release of data must be such that every combination of values of quasi-identifiers can be indistinctly matched to at least $k$ respondents.<br />
When generalization is performed at attribute level (_AG_), this is equivalent to require each quasi-identifier $n$-uple to have at least $k$ occurrences.<br />
When generalization is performed at cell level (_CG_) the existence of at least $k$ occurrences is a sufficient but not necessary condition; a less stricter requirement would suffice:
1) for each sequence of values $pt$ in $PT[QI]$ there are at least $k$ tuples in $GT[QI]$ that contain a sequence of values generalizing $pt$;
2) for each sequence of values $t$ in $GT[QI]$ there are at least $k$ tuples in $PT[QI]$ that contain a sequence of values for which $t$ is a generalization.

An example of $k$-anonymity revisited.

![[kAnonimityRevised.png|600]]

The issue of this algorithm is that to be sure to have reached $k$-anonymity, we have to check not only the sanitized table but also the primary one.

----------------------------------------------------------------

# Attribute Disclosure
## $2$-anonymous table according to the _AG_ model
$k$-anonymity is vulnerable to some attacks:

![[2AnonymousTableExample.png]]

----------------------------------------------------------------

## Homogeneity of the sensitive attribute values
All tuples with a quasi-identifier value in a $k$-anonymous table may have the same sensitive attribute value:
- an adversary knows that Carol is a black female and that her data are in the microdata table;
- the adversary can infer that Carol suffers from short breath.

![[SensitiveAttributeValuesHomogeneity.png]]

----------------------------------------------------------------

## Background knowledge
Based on prior knowledge of some additional external information:
- an adversary knows that Hellen is a white female and she is in the microdata table;
- the adversary can infer that the disease of Hellen is either chest pain or short breath;
- the adversary knows that Hellen runs $2$ hours a day and therefore infers that Hellen cannot suffer from short breath;

Therefore, the adversary is able to infer that Hellen’s disease is chest pain.

![[BackgroundKnowledgeExample.png]]

----------------------------------------------------------------

## $\ell$-diversity
A $q$-block (i.e., set of tuples with the same value for $QI$) is **$\ell$-diverse** if it contains at least $\ell$ different “well-represented” values for the sensitive attribute. "Well-represented" has different definitions based on entropy or recursion (e.g., a $q$-block is $\ell$-diverse if removing a sensitive value it remains $(\ell-1)$-diverse).<br />
$\ell$-diversity means that an adversary needs to eliminate at least $\ell-1$ possible values to infer that a respondent has a given value.<br />
A table is $\ell$-diverse if all its $q$-blocks are $\ell$-diverse. This implies that the homogeneity attack is not possible anymore and, therefore, that the background knowledge attack becomes more difficult.<br />
$\ell$-diversity is **monotonic** with respect to the generalization hierarchies considered for $k$-anonymity purposes.<br />
Any algorithm for $k$-anonymity can be extended to enforce the $\ell$-diverse property but $\ell$-diversity leaves space to attacks based on the distribution of values inside $q$-blocks (**skewness** and **similarity attacks**).

### Skewness attack
**Skewness attack** occurs when the distribution in a $q$-block is different than the distribution in the original population.

An example of the skewness attack.<br />
$20\%$ of the population suffers from diabetes and $75\%$ of tuples in a $q$-block have diabetes. This implies that people in the $q$-block have higher probability of suffering from diabetes.

![[SkewnessAttackExample.png]]

----------------------------------------------------------------

### Similarity attack
**Similarity attack** happens when a $q$-block has different but semantically similar values for the sensitive attribute.

![[SimilarityAttackExample.png]]

----------------------------------------------------------------

### Group closeness
A $q$-block respects **$t$-closeness** if the distance between the distribution of the values of the sensitive attribute in the $q$-block and in the considered population is lower than $t$. A table respects $t$-closeness if all its $q$-blocks respect $t$-closeness.<br />
$t$-closeness is **monotonic** with respect to the generalization hierarchies considered for $k$-anonymity purposes. Any algorithm for $k$-anonymity can be extended to enforce the $t$-closeness property, which however might be difficult to achieve.

----------------------------------------------------------------

## External knowledge modeling
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

## Multiple independent releases
Data may be subject to frequent changes and may need to be published on regular basis. The multiple release of a microdata table may cause information leakage since a malicious recipient can correlate the released datasets.

An example of multiple independent releases.

![[MultipleReleasesExample1.png]]

An adversary knows that Alice, born in $1974$ and living in area $94142$, is in both releases.

![[MultipleReleasesExample2.png]]


This implies that Alice belongs to the first group in $T_1$ and also belongs to the first group in $T_2$. Therefore, Alice suffers from aids (it is the only illness common to both groups).

![[MultipleReleasesExample1.png]]

An adversary knows that Frank, born in $1964$ and living in area $94132$, is the only patient in $T_1$ but not in $T_2$

![[MultipleReleasesExample3.png]]

Therefore, Frank suffers from short breath.

Multiple (e.g., **longitudinal**) releases cannot be independent. This implies that there is the need to ensure that multiple releases are safe with respect to **intersection attacks**.

----------------------------------------------------------------

## $m$-invariance
The **$m$-invariance** addresses the problem of longitudinal release. A sequence $T_1 , . . . , T_n$ of released microdata tables satisfies $m$-invariance iff:
- each equivalence class includes at least $m$ tuples;
- no sensitive value appears more than once in each equivalence class;
- for each tuple $t$, the equivalence classes to which $t$ belongs in the sequence are characterized by the same set of sensitive values.

Therefore, the correlation of the tuples in $T_1, . . . , T_n$ does not permit a malicious recipient to associate less than $m$ different sensitive values with each respondent.

----------------------------------------------------------------


## Extended scenarios
$k$-anonymity, $\ell$-diversity, and $t$-closeness are based on assumptions that make them not always applicable in specific scenarios.<br />
When we have multiple tuples per respondent we can apply:
- $(X,Y)$-privacy;
- $k^m$-anonymity.

When we have the release of multiple tables, characterized by (functional) dependencies, we can apply:
- $(X,Y)$-privacy;
- Multi$R$ $k$-anonymity.

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

## $k$-anonymity in various applications
In addition to classical microdata release problem, the concept of $k$-anonymity and its extensions can be applied in different scenarios, e.g.:
- **social networks**;
- **data mining**;
- **location data**.

### k-anonymity in social networks
**Neighborhood attack** $\to$ given a de-identified [[Grafo|graph]] $G'$ of a social network graph $G$, exploit knowledge about the neighbors of user $u$ to re-identify the vertex representing $u$.

![[kAnonymitySocialNetworks.png]]

Idea: adapt the $k$-anonymity requirement to social networks. A vertex $u$ is $k$-anonymous if there exist at least $k − 1$ other vertices $v_1 , . . . , v_{k−1}$ such that the sub-graphs induced by the neighborhood of $u$ and the neighborhood of $v_1 , . . . , v_{k−1}$ are **isomorphic**. $G'$ is $k$-anonymous if every vertex $u$ in $G'$ is $k$-anonymous.<br />
Intuition: add fake edges to satisfy the requirement.

If $G'$ is $k$-anonymous, with the neighborhood background knowledge, any vertex in $G$ cannot be re-identified in $G'$ with confidence larger than $1/k$.

Goal: compute a $k$-anonymous version of a social network graph minimizing the number of added edges.

Can the intuition utilized in this context be used also in the previous contexts? No, because the dataset will cease to be truthful (even though the majority of the tuples will still be). Can duplicating the data be an effective solution? No, because if the respondent is population unique, it will still be exposed.

----------------------------------------------------------------

### $k$-anonymous data mining
Privacy preserving [[Data Mining |data mining]] techniques depend on the definition of privacy capturing what information is sensitive in the original data and should then be protected.<br />
**$k$-anonymous data mining** aims at ensuring that the data mining results do not violate the $k$-anonymity requirement over the original data.<br />
Threats to $k$-anonymity can arise from performing mining on a collection of data maintained in a private table $PT$ subject to $k$-anonymity constraints. E.g.:
- **association rule mining** (**support** and **confidence**);
- **classification mining** (**[[Albero di Decisione |decision trees]]**).

#### Association rule mining
The association rules check on the correlations between datas.

![[AssociationRuleMining.png]]

$\{$divorced$\} \to \{$M$\}$ with **support** $\frac{19}{66}$ (where support is defined as $\frac{\#(x \wedge y)}{\#tuple}$) and **confidence** $\frac{19}{21}$ (where confidence is defined as $\frac{\#(x \wedge y)}{\#x}$).<br />
If $QI$ includes _Marital_status_ and _Sex_, then $\{$divorced$\} \to \{$M$\}$:
- violates $k$-anonymity for any $k > 19$;
- violates also $k$-anonymity for any $k > 2$ since it reflects the existence of $2$ divorced and female respondents.

----------------------------------------------------------------

#### Classification mining - Decision trees

![[AssociationRuleMining.png]]

![[ClassificationMiningDecisionTree.png]]

Path $\langle F,35 \rangle$ implies the existence of $2$ females working $35$ hours.<br />
paths $\langle F \rangle$ $(\#11)$ and $\langle F,50 \rangle$ $(\#9)$ imply the existence of $2$ females who do not work $50$ hours per week.<br />
If $QI$ includes _Sex_ and _Hours_ $\to$ $k$-anonymity is violated for any $k > 2$.

----------------------------------------------------------------

#### Approaches for combining k-anonymity and data mining

![[ApprochesCombiningkAnonymityDM.png]]

In these different strategies, the transboundary is put in different places.

![[ApprochesCombiningkAnonymityDM1.png]]

Do these techniques all have the same range of application? No, because in the first case everybody can mine the datas while, in the other cases, only who is authorized to access the $PT$ can mine the data.

----------------------------------------------------------------

### k-anonymity in location-based services
Protect identity of people in locations by considering always locations that contain no less than $k$ individuals:
- enlarge the area to include at least other $k-1$ users ($k$ anonymity);

![[kAnonymityLBServices1.png]]
![[kAnonymityLBServices2.png]]

- protect the location of users (**location privacy**) $\to$ obfuscate the area so to decrease its precision or confidence;

![[PrivacyLB1.png]]
![[PrivacyLB2.png]]

- protect the location path of users (**trajectory privacy**) $\to$ block tracking by mixing trajectories.

![[PrivacyLB3.png]]
![[PrivacyLB4.png]]

----------------------------------------------------------------

## Re-identification with any information
Any information can be used to re-identify anonymous data. Ensuring proper privacy protection is a difficult task since the amount and variety of data collected about individuals is increased. Two examples:
- AOL;
- Netflix.

### AOL data release
In $2006$, to embrace the vision of an open research community, **AOL** (America OnLine) publicly posted to a website $20$ million search queries for $650,000$ users of AOL’s search engine summarizing three months of activity. AOL suppressed any obviously identifying information such as AOL username and IP address. AOL replaced these identifiers with unique **identification numbers** (this made searches by the same user linkable). This approach is called **pseudonymization**.

User $4417749$:
- “numb fingers”, “$60$ single men”, “dog that urinates on everything”;
- “hand tremors”, “nicotine effects on the body”, “dry mouth”, and “bipolar”;
- “Arnold” (several people with this last name);
- “landscapers in Lilburn, Ga”, “homes sold in shadow lake subdivision Gwinnett county, Georgia”.

All of these informations led to Thelma Arnold, a $62$-year-old widow who lives in Lilburn, Ga. She was re-identified by two New York Times reporters. She explained in an interview that she has three dogs and that she searched for medical conditions of some friends.

![[AOL3.png]]

What about user $17556639$?
- how to kill your wife;
- steak and cheese;
- how to kill your wife;
- photo of death;
- wife killer;
- photo of death;
- how to kill a wife;
- death;
- poop;
- dead people photos;
- dead people;
- photo of dead people;
- pictures of dead people;
- www.murderdpeople.com;
- killed people;decapatated photos;
- dead pictures;
- decapatated photos;
- dead pictures;
- car crashes3;
- dead pictures;
- car crashes3;
- murder photo;
- car crash photo.

![[AOL5.png]]

----------------------------------------------------------------

### Netflix prize data study
In $2006$, Netflix (the world largest online movie rental service), launched the "Netflix Prize" (a challenge that lasted almost three years). There was a prize of USD $1$ million to be awarded to those who could provide a movie recommendation algorithm that improved Netflix’s algorithm by $10\%$. Netflix provided $100$ million records revealing how nearly $500,000$ of its users had rated movies from Oct.$’98$ to Dec.$’05$. In each record Netflix disclosed the movie rated, the rating assigned ($1$ to $5$), and the date of the rating.<br />
Only a sample (one tenth) of the database was released. Some ratings were perturbed (but not much, not to alter statistics). Identifying information (e.g., usernames) was removed, but a unique user identifier was assigned to preserve rating-to-rating continuity. Release was not $k$-anonymous for any $k > 1$.<br />
Very little auxiliary information is needed to de-anonymize an average subscriber record:
- with $6$ movie ratings and dates ($\pm 2$ weeks), $99\%$ of records uniquely identified;
- with $2$ movie ratings and dates ($\pm 3$ days), $68\%$ of records uniquely identified;
- $84\%$ of subscribers in the dataset uniquely identified by knowing $6$ obscure (outside the top $500$) movies.
Auxiliary information can be obtained from other sources (e.g., user ratings from IMDb users).

Movies may reveal your political orientation, religious views, or sexual orientations (Netflix was sued by a lesbian for breaching her privacy).

----------------------------------------------------------------

### JetBlue
In $2003$, JetBlue Airways Corporation gave the travel records of five million customers to Torch Concepts (a private DoD contractor) for an antiterrorism study to track high-risk passengers or suspected terrorists. Torch Concepts purchased additional customer demographic information (e.g., SSN) about these passengers from Axciom, one of the largest data aggregation companies in the U.S. The information from JetBlue and Axciom was then used by Torch Concepts to develop passenger profiles. Claims of violation of JetBlue Privacy Policy.

----------------------------------------------------------------

### Fitness app
An interactive map shows the whereabouts of people who use fitness devices such as Fitbit also reveals highly sensitive information about the locations and activities of soldiers at U.S. military bases.

----------------------------------------------------------------

## Syntactic vs semantic privacy definitions
**Syntactic privacy** definitions capture the protection degree enjoyed by data respondents with a numerical value. E.g., each release of data must be indistinguishably related to no less than a certain number of individuals in the population.<br />
**Semantic privacy** definitions are based on the satisfaction of a semantic privacy requirement by the mechanism chosen for releasing the data. E.g., the result of an analysis carried out on a released dataset must be insensitive to the insertion or deletion of a tuple in the dataset.

----------------------------------------------------------------

## Differential privacy
**Differential privacy** aims at preventing adversaries from being capable to detect the presence or absence of a given individual in a dataset. E.g., the count of individuals with cancer from a medical database is produced with a release mechanism that when executed on datasets differing on one individual probably returns the same result.<br />
Differential privacy defines a property on the **data release mechanism**.

Informally, differential privacy requires the probability distribution on the published results of an analysis to be “essentially the same” independent of whether an individual is represented or not in the dataset.<br />
Formally, a randomized function $K$ gives **$\varepsilon$-differential privacy** if for all data sets $D$ and $D'$ differing on at most one row, and all
$S \subseteq Range(K)$, $Pr[K(D) \in S] \leq e^{\varepsilon} \times Pr[K(D' ) \in S]$.

The goodness of differential privacy depends on $\varepsilon$: the smaller, the better.<br />
Differential privacy is applicable to two scenarios:
- **interactive scenario**: run-time evaluation of queries (statistical DBMS);
- **non-interactive scenario**: release of pre-computed macrodata tables (statistical data).

Furthermore, it is typically enforced by adding random noise. This implies that data truthfulness is not preserved. $\varepsilon$-differentially private mechanisms compose automatically.

### Differential privacy variations and applications
Variations of differential privacy to reduce the amount of noise in data/query result:
- **($\varepsilon$, $\delta$)-differential privacy**: the $\varepsilon$ bound on query answer probabilities may be violated with small probability (controlled by $\delta$);
- adversaries with polynomial time computational bounds;
- use of wavelet transforms for improving data utility.

Similarly to $k$-anonymity, differentially private mechanisms have been developed for different domains:
- social networks;
- data mining;
- location data.

----------------------------------------------------------------

### Is differential privacy enough?
Limiting the inference about the presence of a tuple is different from limiting the inference about the participation of the individual in the data generating process. E.g., Bob’s participation in a social network can cause links to form between Bob’s friends (Bob’s participation affects more than just the tuple marked “Bob”).

Differential privacy composes well with itself (the composition/observation of differential private documents is differential private itself) but not necessarily with other privacy definitions or data release mechanisms (which represent background knowledge that can cause privacy breaches).

----------------------------------------------------------------

### k-anonymity vs differential privacy
Each has its strengths and weaknesses, e.g., $k$-anonymity provides a nice capturing of real-world requirement but not complete protection. Differential privacy, on the other hand, has better protection guarantees but it is not easy to understand/enforce, not guaranteeing complete protection either.<br /> Therefore, there is still work to be done on both fronts.

----------------------------------------------------------------

# Some Examples of Other Privacy Issues
## Sensitive value distributions
Individual tuples are not sensitive. A collection of tuples might leak sensitive information not explicitly reported (e.g., due to peculiar value distributions). E.g., soldiers’ medical records:
- individual records are not sensitive;
- age distribution of soldiers in a location may help to infer the type of location:
	- young soldiers: training campus;
	- old officials: headquarter.

![[SensitiveValueDistributionsExample.png]]

An example of the inference channel.

![[InferenceChannelExample1.png]]
![[InferenceChannelExample2.png]]

### Counteracting inference channels
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

## Privacy and genomic data
Genomic information is an opportunity for medicine but there are several privacy issues to be addressed. E.g., human genome:
- identifies its owner;
- contains information about ethnic heritage, predisposition to several diseases, and other phenotypic traits;
- discloses information about the relatives and descendants of the genome’s owner.

----------------------------------------------------------------

## Individuals’ re-identification
The $1000$ Genomes Project: international project ($2008$) to establish a catalogue of human genetic variation. Five men involved in both the $1000$ Genomes Project and a project that studied Mormon families from Utah have been re-identified:
- their identities were determined;
- identities of their male and female relatives were also discovered.

Cross-reference analysis by the Whitehead Institute for Biomedical Research in Cambridge (MA):
1) extract the haplotypes of short tandem repeats on the donor’s Y chromosome (only for males);
2) enter the haplotypes into genealogical databases to find possible surnames of the donor;
3) enter the surnames into demographic databases.

----------------------------------------------------------------

## Sensitive inference from data mining
### The Target case
Target is the second-largest discount retailer in the U.S. It assigns every customer a Guest ID number:
- tied to credit card, name, email address, . . .;
- stores history of bought goods and other (bought) information;
- mining on these data for targeted advertising.

Analysts at Target identified $\sim 25$ products that assign each shopper a pregnancy prediction score. E.g., woman, $23$ y.o., buying in March cocoa-butter lotion, a purse large enough to double as a diaper bag, zinc and magnesium supplements and a bright blue rug $\to$ $87\%$ due late August. Due time in a small window to send coupons timed to very specific stages of a pregnancy.

Mining data reveals customers’ major life events (e.g., graduating from college or getting a new job or moving to a new town):
- shopping habits became flexible, predictable, and potential gold mines for retailers;
- between $2002$ (starting of similar campaigns) and $2010$ Target’s revenues grew from $ $44$B to $ $67$B.

----------------------------------------------------------------

## Social media
### Profiling in social media
Our social media activities and likes may reveal sensitive information.

![[ProfilingInSocialMedia.png]]

----------------------------------------------------------------

### Friends on Facebook?
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

### Cambridge Analytica scandal
Personality quiz app, installed by $330,000$ Facebook users who gave permission for accessing their data but the app was also collecting data of those users’ friends.<br />
Data from $87$ million Facebook users retrieved by the app:
- data shared with Cambridge Analytica;
- users profiled through their data.

----------------------------------------------------------------

### User profiling - Facebook/Cambridge Analytica
**OCEAN model**:
- **Openness**: do you enjoy new experiences?
- **Conscientiousness**: do you prefer plans and order?
- **Extraversion**: how social you are?
- **Agreeableness**: do you value others’ needs and society?
- **Neuroticism** how much do you tend to worry?

----------------------------------------------------------------

### Some open issues
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

![[Macrodata Disclosure Protection Techniques.png]]

## Statistical data dissemination
Often statistical data (or data for statistical purpose) are released. Such released data can be used to infer information that was not intended for disclosure.<br />
Disclosure can:
- occur based on the released data alone;
- result from combination of the released data with publicly available information;
- be possible only through combination of the released data with detailed external (public) data sources.

The disclosure risk from the released data should be very low.

----------------------------------------------------------------

## Statistical DBMS
A **statistical DBMS** is a DBMS that provides access to statistics about groups of individuals. It should not reveal information about any particular individual.<br />
Confidential information about an individual can be deduced, combining the results of different statistics or combining the results of statistics with external knowledge (possibly about the database content).

An example of a statistical DBMS.

![[StatisticalDBMSExample.png]]

Query: sum of the incomes of females with major in EE.<br />
Result: it reveals the income of Baker (only female with EE) $\to$ the query is sensitive so it is necessary to block statistics computed over a single (or few) individual.

Another example of a Statistical DBMS.<br />
Query $1$: sum of the incomes of individuals with major in EE.

![[StatisticalDBMSExample2-1.png]]

Result: it does not reveal the income of any individual ($240k$) $\to$ the query is not sensitive<br />
Query $2$: sum of the incomes of males with major in EE.

![[StatisticalDBMSExample2-2.png]]

Result: it does not reveal the income of any individual ($190k$) $\to$ the query is not sensitive.<br />
Query 3 = sum of the incomes of females with major in EE ($50k$) = income of Baker $\to$ the combination of queries is sensitive.

![[StatisticalDBMSExample2-3.png]]

----------------------------------------------------------------

# Macrodata Disclosure Protection Techniques: Tables of Counts or Frequencies
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

## Sampling
Conduct (and publish) a sample survey rather than a census.<br />
Estimates are made by multiplying individual responses by a **sampling weight** before aggregating them. If weights are not published, weighting helps to make an individual respondent’s data less identifiable from published totals.<br />
Estimates must achieve a specified accuracy. Data that do not meet the accuracy requirements are not published (not considered meaningful).

----------------------------------------------------------------

## Special rules
When macrodata tables are defined on the whole population, disclosure limitation procedures must be applied. Special rules define restrictions on the level of detail that can be provided in a table. These rules differ depending on the agency and the kind of table.

An example of special rules.<br />
**Social Security Administration** (**SSA**) rules prohibit publishing tables where the value of a cell is equal to a marginal total or would allow users to determine:
- an individual’s age within a five-year interval;
- earnings within a $ $1,000$ interval;
- benefits within a $ $50$ interval.

to satisfy special rules are applied techniques such as **table restructuring** or **category combination**.

Another example of special rules.<br />
Number of employees by department and annual income (in $K$ Euro).<br />
Special rule: Income within a $5K$ Euro interval.
 
![[SpecialRuleExample.png]]

Cells that cannot be released:
- its value is equal to total;
- the table allows users to determine benefit within a $ $5k$ interval:
	- between $23K$ and $25K$ for _Dept$4$_;
	- between $23K$ and $27K$ for _Dept$2$_.

Another example of Special rules.<br />
Health Insurance Portability and Accountability (U.S. HIPAA) Act “Safe Harbor” rules, include:
- identifying information must be removed;
- locations have to be generalized to units that contain at least $20,000$ residents;
- dates of birth must be rounded up to the year of birth only (or to larger value if the person is older than $90$).

----------------------------------------------------------------

## Threshold rules
A cell is sensitive if the number of respondents is less than some specified number (e.g., some agencies consider $5$, others $3$). A sensitive cell cannot be released. Different techniques can be applied to protect sensitive cells:
- **table restructuring** and **category combination**;
- **cell suppression**;
- **random rounding**;
- **controlled rounding**;
- **confidentiality edit**.

An example of table with disclosures.<br />
Table containing information about employees by company and education level.

![[TableDisclosuresExample.png]]

A cell with fewer than $5$ respondents is defined as sensitive. Suppress one additional cell for each row/column with a sensitive cell suppressed.

----------------------------------------------------------------

## Table restructuring
An example of table restructuring.<br />
Number of employees by department and annual income (in $K$ Euro).<br />
Special rule: _Income_ within a $5K$ Euro interval.<br />
To protect confidentiality, the table can be restructured and rows or columns combined (**rolling-up** categories).

![[TableRestructuringExample1.png]]
![[TableRestructuringExample2.png]]

Combining _Dept$1$_ with _Dept$2$_ and _Dept$3$_ with _Dept$4$_ does offer the required protection.

![[TableRestructuringExample3.png]]

Combining _Dept$2$_ with _Dept$4$_ would still reveal that the income is within a $5$K interval $[23K, 27K)$.

----------------------------------------------------------------

## Cell suppression
One of the most used ways of protecting sensitive cells is **suppression**. Suppressing sensitive cells (**primary suppression**) is not sufficient. At least one additional cell must be suppressed (**complementary suppression**) for each row or column with a suppressed sensitive cell (primary suppression). The value in the sensitive cell can be calculated from the marginal total.<br />
Even with complementary suppression it is difficult to guarantee adequate protection.

### Complementary suppressions
The selection of cells for complementary suppression is complicated. **Linear programming** techniques are used to automatically select cells for complementary suppression.<br />
**[[Privatezza e Protezione dei Dati#Audit|Audit]] techniques** can be applied to evaluate the proposed suppression pattern to see if it provides the required protection.

An example of cell suppression: table without disclosures.<br />
Table containing information about employees by company and education level.

![[CellSuppressionExample1.png]]

A cell with fewer than 5 respondents is defined as sensitive.

![[CellSuppressionExample2.png]]

Suppressing sensitive cells is not sufficient:<br />
$35 = D1 + 10 + 10 + 14 \to D1 = 1$;<br />
$30 = D2 + 10 + 10 + 7 \to D2 = 3$;<br />
$50 = 15 + 20 + D4 + 12 \to D4 = 3$;<br />
$35 = 12 + 14 + 7 + D6 \to D6 = 2$;<br />
$20 = 15 + 1 + 3 + D3 \to D3 = 1$;<br />
$25 = 3 + 10 + 10 + D5 \to D5 = 2$.

![[CellSuppressionExample3.png]]

Suppress one additional cell for each row/column with a sensitive cell suppressed. The table appears to offer protection to the sensitive cells but:
$(15 + D1 + D2 + D3 ) + (20 + D4 + D5 + 15) - (D1 + D4 + 10 + 14) - (D2 + D5 + 10 + 7)$
$= 20 + 55 - 35 - 30 \to D3 = 1$

![[CellSuppresionExample4.png]]
![[CellSuppresionExample5.png]]
![[CellSuppresionExample6.png]]
![[CellSuppresionExample7.png]]

The table provides adequate protection for the sensitive cells but out of a total of $16$ cells, only $7$ cells are published, while $9$ are suppressed.

![[CellSuppressionExample8.png]]

----------------------------------------------------------------

## Rounding
To reduce data loss due to suppression, use **rounding of values** to a multiple of the sensitivity threshold:
- **random**: random decision on whether cell values will be rounded up or down. The sum of the values in a row/column may be different from the published marginal totals (recipients may lose confidence in the data);
- **controlled**: ensure that the sum of published entries is equal to published marginal totals.

Note: all cell values must be a multiple of the threshold value.

An example of random rounding.

![[RandomRoundingExample.png]]

An example of controlled rounding.

![[ControlledRoundingExample.png]]

Linear programming methods are used to identify a controlled rounding for a table.<br />
Disadvantages:
- it requires the use of specialized computer programs;
- controlled rounding solutions may not always exist for complex tables.

----------------------------------------------------------------

## Confidentiality edit
Developed by the U.S. Census Bureau to provide protection of tables prepared from the $1990$ Census. Two different approaches:
- to protect the regular decennial Census data ($100\%$ of the population);
- to protect the long-form of the Census which refers to a sample of the population.

Both approaches apply statistical disclosure limitation techniques to the microdata on which statistics are calculated. Statistics are protected by changing input data.

For the $100$ percent microdata file, confidentiality edit applied **switching**:
1) take a sample of records from the microdata file;
2) find a match for these records in some other geographic region, matching on a specified set of important attributes;
3) swap all attributes on the matched records.

For small blocks, the sampling fraction is increased to provide additional protection. The microdata file can be used directly to prepare macrodata tables.

An example of confidentiality edit.<br />
Records for the $20$ employees of company Alfa.

![[ConfidentialityEditExample.png|600]]

1) take a sample of records from the microdata file (say a $10\%$ sample, $2$ tuples for company Alfa). Assume that records number $4$ and $17$ were selected as part of our $10\%$ sample;
2) since we need tables by _Company_ and _Education_ level, we find a match in some other company on the other variables (_Race_ and _Salary_, company totals for these variables remain unchanged):
	- a match for record $4$ (Pete) is found in company Beta. The match is with Alonso, who has very high education;
	- Record $17$ (Mike) is matched with George in company Delta, who has medium education.
3) we also assume that part of the randomly selected $10\%$ sample from other companies match records in company Alfa:
	- one record from company Delta (June with high education) matches with Virginia (record $12$);
	- One record from company Gamma (Heather with low education) matched with Nancy (record $20$).
4) after all matches are made, swap attributes on matched records;
5) use the swapped data file directly to produce tables.

Take a sample of records from the microdata file (say a $10\%$ sample). Since we need tables by company and education level, we find a match in some other company on the other variables.

![[ConfidentialityEditExample1.png|600]]
![[ConfidentialityEditExample2.png|600]]

Part of the randomly selected $10\%$ sample from other companies match records in company Alfa.

![[ConfidentialityEditExample3.png|600]]
![[ConfidentialityEditExample4.png|600]]

----------------------------------------------------------------

# Macrodata Disclosure Protection Techniques: Tables of Magnitude Data
## Protection of tables of magnitude data 
Magnitude data are generally nonnegative quantities reported in surveys or censuses. The distribution of these values is likely to be skewed. Disclosure limitation techniques focus on preventing precise estimation of the values for outliers. However, sampling is less likely to provide protection. The units that are most visible because of their size do not receive any protection from sampling.

1) Identify sensitive cells:
	 - **$p$-percent**;
	 - **$pq$**;
	 - **$(n,k)$**.
2) protect sensitive cells:
	- **suppression**.
3) verify result:
	- **audit**;
	- **information loss**;

----------------------------------------------------------------

## Suppression rules
Primary suppression rules determine whether a cell could reveal individual respondent information. Such cells are considered sensitive and cannot be released. The most common suppression rules are:
- the $p$-percent rule;
- the $pq$ rule;
- the $(n,k)$ rule.

These rules are used to identify sensitive cells by verifying whether it is enough difficult for one respondent to estimate the value reported by another respondent too closely.

----------------------------------------------------------------

### Primary suppression rule: $p$-percent
Disclosure of magnitude data occurs if the user can estimate the contribution of a respondent too accurately. A cell is sensitive if **upper and lower estimates** for the respondent’s value are closer to the reported value than a pre-specified percentage $p$.

Formally, a cell is protected if:

$$\sum_{i = c + 2}^{N} x_i \geq \frac{p}{100} x_1$$

$x_1, x_2, . . ., x_N$ : respondent’s value in decreasing order.<br />
$c$: size of a **coalition of respondents** interested in estimating $x_1$.

The largest value $x_1$ is the most exposed. Therefore, if $x_1$ is protected, every other value is protected too.

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
- $\leq 120K (=250K−130K = \sum_{i = 3 + 2}^{N} x_i)$.

Therefore, it is sensitive for any $p \geq 20$.
Formally, the cell is protected for any $p$ such that:

$$\sum_{i = 3 + 2}^{N} x_i \geq \frac{p}{100} \text{Alice}$$
$$\sum_{i = 5}^{N} x_i \geq \frac{p}{100} 100$$
$$p \leq \text{ Cell } - \sum_{i = 1}^{4} x_i$$
$$p \leq \text{ Cell } − (\text{Alice } + \text{ Bob }+ \text{ Carol }+ \text{ David})$$
$$p \leq 250 − (100 + 80 + 30 + 20)$$$$p \leq 20$$

----------------------------------------------------------------

### Primary suppression rule: $pq$
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

Assume $q=80$ to represent how accurately respondents can estimate another respondent’s value before any data publishing. For Alice’s income this implies range $[20,180]$.<br />
Again, the coalition of $c = 3$ respondents that can better estimate Alice’s income is Bob, Carol, David.<br />
The coalition can reduce uncertainty about Alice’s income from $[20K-180K]$ to $[80K-120K]$:
- $\geq 80K$ since it is higher than Bob’s;
- $\leq 120K (=250K−130K)$.

Assuming $q = 80$ and $c = 3$, formally, the cell is protected for any $p$ such that:

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

### Primary suppression rule: $(n,k)$
Regardless of the number of respondents in a cell, if a small number ($n$ or fewer) of these respondents contribute a large percentage ($k\%$ or more) of the total cell value, the cell is considered sensitive.

Intuitive rule: if a cell is dominated by one respondent, the published total is an upper estimate for her value. $n$ must be selected to be larger than the number of any suspected coalitions. Many agencies use an $(n,k)$ rule with $n = 1$ or $n = 2$

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

### Secondary suppression
Once sensitive cells have been identified, there are two options:
- restructure the table and collapse cells until no sensitive cells remain;
- cell suppression: do not publish sensitive cells (**primary suppressions**) and remove other cells (**complementary suppressions**) to close the inference channels that could expose the respondents.

An administrative way to avoid cell suppression consists in obtaining written permission from respondents.<br />
Other non-sensitive cells must be selected for suppression to ensure that the respondent level data in sensitive cells cannot be estimated too accurately. A respondent’s data cannot be estimated too closely.

Sensitive cells might be leaked due to the fact that:
- implicitly published unions of suppressed cells may be sensitive according to the sensitivity rule adopted;
- the row and column equations represented by the published table may be solved, and the value for a suppressed cell estimated too accurately.

Any complementary suppression is acceptable as long as the sensitive cells are protected. For small tables the selection of complementary cells can be done manually.<br />
Data analysts know which cells are of greatest interest (and should not be used for complementary suppression). Manual selection of complementary cells is acceptable as long as the resulting table provides sufficient protection to sensitive cells. An automated audit should be applied to ensure this is true.

----------------------------------------------------------------

### Audit
If totals are published, the sum of the (primary or secondary) suppressed cells can be derived. Apply the **sensitivity rule** to these sums to ensure that they are not sensitive:
- rows and columns can be seen as a large system of linear equations;
- estimate a lower and upper bound of each suppressed cell using linear programming;
- if bounds are too close to the original value, the cell is sensitive.

Simple for small tables, possibly computationally intractable for large tables.

#### Information loss
The selection of the complementary cells should result in minimum **information loss**. There is no unique definition of information loss. For instance, we can try to minimize:
- the sum of the suppressed values (a large number of cells with small values can be suppressed);
- the total number of suppressed cells.

----------------------------------------------------------------

#### Information in parameter values
While the suppression rules can be published, parameter values should be kept confidential.

For example, assume that:
- $p$-percent rule is used with $p=20$ and the same value is used for complementary suppression;
- a cell $x$ with value $100$ has been suppressed along with other suitable complementary cells;
- by solving a system of linear equations, the upper bound is $120$ and the lower bound is $80$: $80 \leq x  \leq 120 \to x =100$.

Once the value for one suppressed cell has been uniquely determined, other cell values can easily be derived.

An example of the protection of tables of magnitude data.

![[ProtectionMagnitudeDataExample1.png]]
![[ProtectionMagnitudeDataExample2.png]]

$(n,k)$ rule with $n=1$, $k=90$ implies that a cell is sensitive if one respondent contributes more than $90\%$. Consequently, the red cells below need to be suppressed.

![[ProtectionMagnitudeDataExample3.png]]

Therefore, It is compulsory to apply secondary suppression to hide these values.

----------------------------------------------------------------

# Microdata
Many situations require today that the specific stored data themselves (**microdata**) be released. The advantage of releasing microdata is an increased flexibility and availability of information for the recipients.

To protect the anonymity of the respondents, data holders often remove or encrypt explicit identifiers such as names, addresses, and phone numbers. De-identifying data, however, provides no guarantee of anonymity.

Released information often contains other quasi-identifying data (e.g., _Race_, _Birth_date_, _Sex_, and _ZIP_ code) that can be linked to publicly available information to reidentify respondents. The data recipients can determine (or restrict uncertainty) to which respondent some pieces of released data refer. This has created an increasing demand to devote resources for an adequate protection of sensitive data. The microdata protection techniques follow two main strategies:
- reduce the information content;
- change the data in such a way that the information content is maintained as much as possible.

## Microdata disclosure protection techniques
To limit the disclosure risk, the following procedures should be applied:
- including data from a sample of the whole population only;
- removal of identifiers;
- limiting geographic details;
- limiting the number of variables.

### Limiting geographic details
Geographic location is a characteristic that:
- often appears in microdata;
- can be used for re-identifying respondents.

Therefore, it is important limiting geographic details. For example, the Census Bureau will not identify any geographic region with less than $100,000$ persons in the sampling ($250,000$ in the $’80$). Microdata contain, in fact, contextual variables that describe the area in which a respondent resides but do not identify that area (e.g., average temperature of an area).

----------------------------------------------------------------

## Classification of microdata protection techniques
These techniques are based on the principle that reidentification can be counteracted by reducing the amount of released information:
- masking the data (e.g., by not releasing or by perturbing their values);
- releasing plausible but made up values instead of the real ones.

According to this principle, the microdata protection techniques can be classified into two main categories:
- **masking techniques**;
- **synthetic data generation techniques**.

They can operate on different data types:
- **continuous**: an attribute is said to be continuous if it is numerical and arithmetic operations are defined on it (e.g., date of birth, temperature, . . .);
- **categorical**: an attribute is said to be categorical if it can assume a limited and specified set of values and arithmetic operations do not have sense on it (e.g., marital status, race, . . .).

----------------------------------------------------------------

## Microdata Disclosure Protection Techniques: Masking Techniques
The original data are transformed to produce new data that are valid for statistical analysis and such that they preserve the confidentiality of respondents. They are classified as:
- **non-perturbative**: the original data are not modified, but some data are suppressed and/or some details are removed;
- **perturbative**: the original data are modified.

![[MaskingTechniquesClassification.png]]

### Non Perturbative Techniques
#### Sampling
The protected microdata table is obtained as a sample of the original microdata table. Since there is uncertainty about whether or not a specific respondent is in the sample, reidentification risk decreases.

An example of sampling.

![[SamplingExample1.png]]

Compute a sample of $3$ tuples out of $14$.

![[SamplingExample2.png]]

----------------------------------------------------------------


#### Local suppression
It suppresses the value of an attribute (i.e., it replaces it with a missing value) thus limiting the possibilities of analysis. This technique blanks out some attribute values (sensitive cells) that are likely to contribute significantly to the disclosure risk of the tuple involved.

An example of local suppression.

![[LocalSuppressionExample1.png]]

Suppress cells that contribute significantly to re-identification.

![[LocalSuppressionExample2.png]]

----------------------------------------------------------------

#### Global recoding
The domain of an attribute is partitioned into disjoint intervals, usually of the same width, and each interval is associated with a label. The protected microdata table is obtained by replacing the values of the attribute with the label associated with the corresponding interval.

An example of global recoding.

![[GlobalRecodingExample1.png]]

Global recoding on _Income_:
$[150-199]$: low, $[200-289]$: medium, $[290-310]$ high.

![[GlobalRecondingExample2.png]]

----------------------------------------------------------------

#### Top-coding and bottom-coding
**Top-coding** defines an upper limit (**top-code**) for each attribute to be protected. Any value greater than that is replaced with a flag that tells the user what the top-code is and that this value exceeds it. It can be applied to categorical attributes that can be linearly ordered as well as to continuous attributes.

**Bottom-coding** defines a lower limit (**bottom-code**) for each attribute to be protected. Any value lower than it is replaced with a flag that tells the user what the bottom-code is and that this value is less than it. It can be applied to categorical attributes that can be linearly ordered as well as to continuous attributes

An example of top-coding and bottom-coding.

![[TopCodingBottomCodingExample1.png]]

Top-coding on _Holidays_ for values higher than $30$.<br />
Bottom-coding on _Holidays_ for values lower than $10$.

![[TopCodingBottomCodingExample2.png]]

----------------------------------------------------------------

#### Generalization
It replaces values with more general values. Typically based on the definition of a generalization hierarchy, where the most general value is the root and the leaves correspond to the most specific values.

Different generalized microdata tables can be built, depending on the number of generalization steps applied.

An example of generalization.

![[GeneralizationExample1.png]]

Generalize attribute _DoB_ to the granularity of month.

![[GeneralizationExample2.png]]

----------------------------------------------------------------

### Perturbative Techniques
#### Random noise
It perturbs a sensitive attribute by adding or by multiplying it with a random variable with a given distribution. It is necessary to decide whether or not to publish the distribution(s) used to add noise to the data.<br />
Publishing the distribution(s) might increase disclosure risk of the data.

An example of random noise.

![[RandomNoiseExample1.png]]

Additive noise over attribute _Holidays_ (to preserve average).

![[RandomNoiseExample2.png]]

![[RandomNoiseExample3.png]]

----------------------------------------------------------------

#### Swapping
A small percent of records are matched with other records in the same file, perhaps in different geographic regions, on a set of predetermined variables. The values of all other variables on the file are then swapped between the two records.

This technique reduces the risk of reidentification because it introduces uncertainty about the true value of a respondentent’s data.

An example of swapping.

![[SwappingExample1.png]]

Swap _Holidays_ and _Income_ for tuples with the same _Sex_ and _MarStat_. Identify $3$ pairs of tuples with same _Sex_ and _MarStat_.

![[SwappingExample2.png]]

Swap _Holidays_ and _Income_.

![[SwappingExample3.png]]

----------------------------------------------------------------

#### Micro-aggregation (blurring)
It consists in grouping individual tuples into small groups of a fixed dimension $k$. The average over each group is published instead of individual values.<br />
Groups are formed by using **maximal similarity criteria**.

There are different variations of micro-aggregation:
- the average can substitute the original value only for a tuple in the group or for all of them;
- different attributes can be protected through micro-aggregation using the same or different grouping;
- ...

An example of micro-aggregation (blurring).

![[MicroAggregationBlurringExample1.png]]

Group tuples based on _Sex_ and _MarStat_

![[MicroAggregationBlurringExample2.png]]
![[MicroAggregationBlurringExample3.png]]

Substitute _Income_ with the average for each group.

----------------------------------------------------------------

# Microdata Disclosure Protection Techniques: Synthetic Techniques
## Synthetic techniques
Since the statistical content of the data is not related to the information provided by each respondent, a model well representing the data could in principle replace the data themselves.

An important requirement for the generation of synthetic data is that the synthetic and original data should present the same quality of statistical analysis.

The main advantage of this class of techniques is that the released synthetic data are not referred to any respondent and therefore their release cannot lead to reidentification.

![[SyntheticTechniques.png]]

----------------------------------------------------------------

# ICT ecosystem
Advancements in the **Information and Communication Technology** (**ICT**) and networks have changed our society. $5$G and beyond, infrastructures and services are more powerful, efficient, and complex. ICT and network advancements are enabling factors for a smart society. Everything is getting smart: smart cars, augmented reality, smart entertainment systems, museum and exhibitions, smart e-commerce, smart governance, healthcare, intelligent shop, smart toothbrush...

----------------------------------------------------------------

## Smart society
The advantages of smart services and security are:
- better protection mechanisms;
- business continuity and disaster recovery;
- prevention and response.

![[SmartSociety.png|500]]

While the disadvantages are:
- more complexity, that is, the weakest link becomes a point of attack:
	- system hacking;
	- improper information leakage;
	- data and process tampering.
- explosion of damages and violations;
- loss of control over data and processes.

----------------------------------------------------------------

## The role of data in a smart environment

![[RoleOfDataSmartEnvironment.png|500]]

This implies better governance and intelligent systems.

----------------------------------------------------------------

## Cloud computing
The **Cloud** allows users and organizations to rely on external providers for storing, processing, and accessing their data:
- high configurability and economy of scale;
- data and services are always available;
- scalable infrastructure for applications.

However, users lose control over their own data. This fact causes new security and privacy problems. There is a need of solutions to protect data and to securely process them in the cloud.

### Cloud computing: Today
**Cloud Service Providers** (**CSPs**) apply security measures in the services they offer but these measures protect only the perimeter and storage against outsiders (but not against the providers themselves).

![[CloudComputingToday.png]]

**Functionality** implies full trust in the CSP that has full access to the data (e.g., Google Cloud Storage, iCloud).

Protection but limited functionality since the CSP cannot access data (e.g., Boxcryptor, SpiderOak).


----------------------------------------------------------------

### Cloud computing: New vision
Solutions that provide protection guarantees giving the data owners both: full control over their data and cloud functionality over them.

![[CloudComputingNewVision.png]]

Client-side trust boundary: only the behavior of the client should be considered trusted $\to$ techniques and implementations supporting direct processing of encrypted data in the cloud.

----------------------------------------------------------------

## Data protection – Base level

![[DPBaseLevel.png|500]]

----------------------------------------------------------------

## Data protection – Regulation

![[DPRegulation.png|500]]

----------------------------------------------------------------


## Data protection – Confidentiality
Minimize release/exposition:
- correlation among different data sources;
- indirect exposure of sensitive information;
- de-identification $\neq$ anonymization.

----------------------------------------------------------------

## Characterization of Data Protection: Challenges in Cloud Scenarios
## Scientific and technical challenges
Three dimensions characterize the problems and challenges:

![[ScientificChallenges3D.png]]

The **Security Properties** are **Confidentiality**, **Integrity** and **Availability**, which in Cloud is tipically declined as SLA compliance, where SLA stands for **Service Level Agreement** (if I pay a provider for a service, I must be able to utilize that service at the level agreed).<br />
Confidentiality of the data means that only authorized personel can access the data (confidentiality not only with respect to the external world but also with respect to the cloud provider).<br />
Confidentiality of the users identities ...
Confidentiality of the actions that users perform on the data means that the queries the user performs may carry sensible informations and, therefore, must be protected.

Integrity of the data externally stored means that if data were manipolated in a illegal way it is still possible to recover the data. To do so it is also necessary to have a way to find if the data were compromised.<br />
Checking the integrity of the data on the computation and query results is complex because it is a dynamic task.

![[SecurityProperties.png]]

What the user wants to do with the data is what defines how to manage them. If the user only wants to archive them, the cloud provider has to grant him the ability to pull or push the data and the protection of the data in storage.<br />
If the user also wants to retrieve the data through queries, the cloud provider has to grant support for fine-grained data retrieval and queries and also protection of computaton and queries results.<br />
if the data are dynamic, the cloud provider must provide support for access retrieval and enfocement of updates.

![[AccessRequirements.png]]

There are different kind of architectures that can be behind the cloud provider.

![[Architectures.png]]

### Combinations of the dimensions
Every combination of the different instances of the dimensions identifies new problems and challenges. The security properties to be guaranteed can depend on the access requirements and on the trust assumption on the providers involved in storage and/or processing of data.

Providers can be:
- curious (honest-but-curious or trustworthy-but-not-trusted with respect to the data confidentiality);
- lazy (not trusted with respect to the integrity in addition to confidentiality, e.g., a low-cost server that could try to save some money interrupting a query before its end);
- malicious (not trusted with respect to the integrity in addition to confidentiality).

----------------------------------------------------------------

# Digital Data Market

![[DigitalDataMarket.png]]

## Dimensions of the problem and challenges
Requirements capturing and representation:
- policies regulating access, sharing, usage and processing.

![[Challenge1.png]]

Enforcing technologies:
- data wrapping / sanitization.

![[Challenge2.png]]

Enforcement phase:
- ingestion / storage / analytics.

![[EnforcementPhase.png]]

----------------------------------------------------------------

# Some Challenges in Data Protection
Issues to be addressed:
- privacy of users;
- data protection;
- query execution;
- private access;
- data integrity and correctness;
- access control enforcement;
- data publication and utility;
- collaborative query execution: authorization enforcement in distributed query execution.

### Security and privacy problems

![[PrivacyOfUsers.png|500]]
![[PrivacyOfStorage.png|500]]![[PrivacyOfQueries.png|500]]
![[SecureConnections.png|500]]

----------------------------------------------------------------

# Privacy of users
## Privacy of users’ identities

![[PrivacyOfUsers.png|500]]

Users may wish to remain **anonymous** or to not disclose much information about themselves when operating in the cloud:
- anonymous communication techniques (e.g., Mix networks, onion routing, Tor, Crowds);
- privacy in location-based services;
- **attribute-based** (or **credential-based** or **certificated-based**) access control;
	- instead of declaring their identities, users prove they satisfy properties needed for the access (with a certificate);
	- changes the way access control process works.
- support for user-privacy preferences in information disclosure.

## User empowerment
Users may want to specify policies regulating information disclosed:
- when using external servers for sharing/disseminating their own resources (e.g., Facebook);
- when releasing information in digital interactions (e.g., releasing credit card to access a service).

Two aspects of protection:
- direct release regulates to whom, when, for what purpose a user agrees to release information;
- secondary usage regulates usage and further dissemination of user information by the receiving parties (what usage is done with the data after the primary use).

----------------------------------------------------------------

## Direct release – Several contributions
The research community has been very active and produced several approaches for regulating interactions among unknown parties through the deﬁnition of attribute-based access control mechanisms (instead of identity-based access control mechanism).<br />
What users can do depend on assertions (**attributes**) they can prove presenting certiﬁcates. Access control does not return yes/no anymore, but responds with requirements that the requestor must satisfy to get access. Not only the server needs to be protected but the clients want guarantees too (e.g., privacy) $\to$ some form of negotiation may be introduced.

Large body of proposals addressing:
- credential/attribute-based policy speciﬁcations (the usage of the term credential means that these documents must be certificated by someone);
- policy evaluation with partial information;
- policy conﬁdentiality support;
- policy communication and dialog;
- negotiation strategies and **trust management**;
- evaluation of termination, correctness, no improper information disclosure in the negotiation.

$\to$ typically using logic-based languages.

------------------------------------------------------------------

## Interactive access control
- The negotiation proceed as in the image below, assuming that there are no conditions imposed by the client;

![[InteractiveAccessControl1.png]]

- **multi-step negotiation**: in the case depicted by the image below, the client too requires certificates from the server, multiple times. There is a problematic situation in the case of a failing transaction: the server acquires informations step by step but, in the case of termination of the transaction before the server has granted the service, this one has now access to the previous data (leakage). E.g., the server asks the age of the user but doesn't explicitly say what age is necessary to access to the server. Furthermore, not providing a credential is also leaking the information that the user does not posses that credential. This approach is too complex for practical applications.;

![[InteractiveAccessControl2.png]]

- **two-step interaction**: this technique is a trade-off between the two previous approaches and it consists in the server asking the client a prerequisite necessary to discover what the requisite is. If the client provides it, the server now asks for the second and final requirement before granting access.

![[InteractiveAccessControl3.png]]

The existing/emerging technologies supporting Attribute-based Access Control are:
- **U-Prove/Idemix**: provide advance credential management technologies (selective release, proof of possession, ...);
- **XACML**: standard today for interoperation of access control policies:
	- expressive but with limited features for reasoning about digital certiﬁcates (e.g., attribute nationality should be certiﬁed by a passport) or policy dialog.

----------------------------------------------------------------

## User privacy preferences
Access control speciﬁcations do not always ﬁt well with the problem at the client (user) side:
- they are expressive and powerful;
- they allow users to specify whether some information can be or cannot be released;
- they do not allow users to express the fact that they might prefer to release some information over other when given the choice.

$\to$ need to provide users with means to effectively deﬁne privacy preferences on the release of their information.

### User privacy preferences: Desiderata
- **context-based preferences**:
	-  e.g., “I want to disclose my credit card to ﬁnancial servers in the context of payment transactions only”.
- **forbidden disclosures**:
	- e.g., “I do not want to release both my name and my nickname”.
- **sensitive associations**:
	- e.g., “The association between my zip code and my date of birth is more sensitive than the two pieces of information singularly taken” (a combination of $QI$ is more effective than a single one for doing linkage).
- **limited disclosure**:
	- e.g., “I do not mind saying that I am older than $30$ but I do not want to release my age”.
- **instance-based preferences**:
	- e.g., “I prefer to release my credit card over my bank account if the credit card expires in less than one year”.
- **history-based preferences**:
	- e.g., “I prefer to release my county over my phone if you already have my zip code”.
- **proof-based preferences**:
	- e.g., “I prefer to release the proof that I have an Italian passport rather than releasing the passport itself”.
- **non-linkability preferences**:
	- e.g., “I prefer to release the piece of information that, merged with the other party knowledge, identiﬁes me the less”.

These preferences are hard to express with classical access control mechanisms.

----------------------------------------------------------------

### User privacy preferences: Some approaches
- **cost-sensitive trust negotiation**;
- **point-based trust management model**;
- **logic-based minimal credential disclosure**;
- **privacy preferences in credential-based interactions**.

#### Cost-Sensitive Trust Negotiation
Two parties (client and server) interact with each other to establish mutual trust by the exchange of credentials $\to$ **trust negotiation protocol**.<br />
The disclosure of a credential is regulated by a policy that speciﬁes the prerequisite conditions that must be satisﬁed to disclose the credential.<br />
Credentials and policies are associated with a cost $\to$ more sensitive credentials/policies have higher cost.<br />
The goal is to minimize the total sensitivity cost of credentials and policies disclosed during a trust negotiation.

![[CostSensitiveTrustNegotiation.png|600]]

In this example, the client has $4$ credentials, $c_1$, $c_2$, $c_3$ and $c_4$. The server has $3$ credentials, $s_1$, $s_2$ and $s_3$, and the service he provides, $s$.<br />
The policies release the service only the conditions are satisfied. Therefore, in this example, $s_2$ and $s_3$ are released to everyone (because the condition is always true).<br />
The graph describes the paths to reach the release of the service. It provides a mechanism for regulating the release of credentials according to their sensitivity.<br />
This approach puts focus on negotiation (total of released informations) rather than on client control but it supports only coarse-grain (credentials) speciﬁcations: infact, sensitive associations as well as forbidden releases cannot be expressed.<br />
Possession-sensitive credentials (e.g., dialysis certiﬁcate) are not considered.<br />
Minimizing overall cost (client $+$ server) has limited applicability and, also, linear combination of costs may not be always desirable.

----------------------------------------------------------------

#### Point-based Trust Management Model
How to get a New York Driver License? Documents that prove your name are assigned a point value; you must present identiﬁcation that totals six points or more:
- US Passport or Passport Card \[$4$ points\];
- Certiﬁcate of Naturalization (Form N-$550$, N-$570$) \[$3$ points\];
- Certiﬁcate of Citizenship (Form N-$560$ and N-$561$) \[$3$ points\];
- NYS Certiﬁcate of Title \[$2$ points\].
- US Social Security Card \[$2$ points\].
- Bank statement \[$1$ point\];
- ...

A server associates a given number of points with each credential:
- represent the trustworthiness of its holder;
- the points associated with credentials are private.

A server requires a **minimum total threshold** of points before granting a client access to a resource. The threshold is private. A client values each of its credentials with a **private score**. It indicates the sensitivity of the credential and should be kept private.

Goal: ﬁnd a subset of the client credentials that satisﬁes the threshold ﬁxed by the server and that has minimum privacy value to the client.

Threshold of accessing a resource: $10$

![[PointBasedTrustManagementModel.png]]

Client’s options:
- _SSN_ \[Points: $10$; Sensitivity: $100$\];
- _College ID_, _Credit card_ \[Points: $11$; Sensitivity: $60$\].
- _Driver’s license_, _Credit card_ \[Points: $14$; Sensitivity: $80$\].

There is an evident problem that consists in fulﬁlling the access threshold while disclosing the least amount of sensitive information (**Credential Selection Problem**).
To solve it, the problem is converted into a knapsack problem and solved with a [[Programmazione Dinamica |dynamic programming]] approach. A secure two-party dynamic programming protocol is used for solving the knapsack problem:
- the server and user jointly compute the optimal sum of privacy scores for the released credentials without revealing their private parameters;
- the protocol uses **homomorphic encryption** (the result of the operation on the crypted data is the same as if we operated on the decrypted data and then we crypted them).

The solution can model only the additive characteristic of privacy.<br/>
The client and server must agree on the universe of possible credential types (it may compromise the conﬁdentiality of the server policy).<br />
Support only **coarse-grain** (credential) **speciﬁcation**; sensitive associations as well as forbidden releases cannot be expressed.<br />
Again, this approach puts the focus on the negotiation rather than on the client control.

----------------------------------------------------------------

#### Logic-based Minimal Credential Disclosure
Parties are involved in a trust negotiation where the release of credentials is regulated by given policies. Each credential contains a single attribute. By matching the policies of the involved parties, several negotiation paths (i.e., credential disclosure sets) will make the negotiation succeed. Logic-based approach for users to specify privacy preferences exploited for selecting a negotiation path.

![[LogicBasedMinimalCredentialDisclosure1.png|600]]

Disclosure sets are represented as binary vectors $\to$ $0$ means do not disclose; $1$ means disclose.

![[LogicBasedMinimalCredentialDisclosure2.png|600]]

Default preference: not disclosing a credential is preferred to disclosing it $\to$ $0 \succ_i 1$, with $i$ the $i$-th credential.
Disclosure sets are compared according to the **Pareto composition** ($\succ_P$):
	$S_i$ dominates $S_j$ if $S_i$ shows better or equal values than $S_j$ with respect to all credential preferences and is strictly better with respect to at least one credential.

Example:
$S_5: [0,0,0,0,0,1,0,1,1,0,0]$
$S_9: [1,0,0,0,0,1,0,1,1,0,0]$

$S_5[i] = S_9[i], i = 2, . . . , 11$ and $S_5[1] \succ_1 S_9[1] \to S_5$ dominates $S_9$ ($S_5 \succ_P S_9$).

Hierarchies specify (possibly contextual) user preferences on the release of credentials ($c_i \to c_j$ means that the user prefers to release $c_i$ over $c_j$). In the example below, the user prefers to release the _id_ than the _passport_.

![[LogicBasedMinimalCredentialDisclosure3.png]]

**Transitive combination of preferences**:
- e.g., a disclosure set containing _bname_ and _baccount_ is preferred than a disclosure set containing _credit_card_ and _pin_.

![[LogicBasedMinimalCredentialDisclosure4.png]]

**Pareto composition**.<br />
$S_5$ dominates $S_9$ since $0 \succ_{name} 1$;
$S_5$ dominates $S_{11}$ since $0 \succ_{email} 1$;
$S_6$ dominates $S_{10}$ since $0 \succ_{name} 1$;
$S_6$ dominates $S_{12}$ since $0 \succ_{email} 1$.

**Hierarchical preferences**.<br />
$S_5$ dominates $S_7$ because the user prefers to release the _id_ than the _passport_;
$S_6$ dominates $S_8$ for the same reason;
$S_1$ dominates $S_3$;
$S_2$ dominates $S_4$.

![[LogicBasedMinimalCredentialDisclosure5.png]]

**Transitive combination of preferences**.<br />
$S_1$ dominates $S_2$ because the user prefers to release _bname_ and _baccount_ than _credit_card_ and _pin_;
$S_5$ dominates $S_6$ for the same reason.

![[LogicBasedMinimalCredentialDisclosure6.png]]

$\to$ user has to choose between $S_1$, $S_5$.

Users are still involved in choosing the disclosure set.<br />
Assume only attributes (does not reason about credentials).<br />
The speciﬁcation of preferences among groups of attributes is not always easy. Possession-sensitive credentials are not considered. Forbidden releases (e.g., the release of name, bdate, and pcode is forbidden) are not supported.

----------------------------------------------------------------

#### Privacy Preferences in Credential-based Interactions
The goal of the work is to enable users to effectively regulate disclosure of their properties and credentials:
- identify requirements and concepts that need to be captured;
- organize user’s properties and credentials in the **user portfolio** (the set of his credentials);
- enable user to specify how much she values the disclosure of different components of the portfolio;
- provide possible technical approaches for supporting user’s preferences;
- provide a basis for investigating user-friendly/user-understandable approaches for regulating release of user’s properties.

##### Client portfolio modeling
The information of the client forms a **client portfolio**.<br />
**Credential**: certiﬁcate issued and signed by a third party:
- it certiﬁes a set of properties;
- it has a **type**, an **identiﬁer**, and an **issuer**.

**Declaration**: property stored as a self-signed credential.

Credentials have a type, therefore it is possible to define a hierarchy of abstractions of credential types $\mathcal{H}$ ($\mathcal{T}$, $\preceq_{isa}$) (e.g., _id_card_ $\preceq_{isa}$ _id_, _id_ $\preceq_{isa}$ _credential_).

An example of hierarchy of credential types.

![[HierarchyCredentialTypesExample.png]]

----------------------------------------------------------------

##### Client portfolio - Properties
- **Credential-independent**: the value depends only on the credential’s owner (e.g., birth date, name, surname);
- **credential-dependent**: the value depends on the credential's owner and also on the certifying credential itself (e.g., credit card number).

![[ClientPortfolioProperties.png]]

----------------------------------------------------------------
###### Client portfolio – Credentials
- **Atomic**: released as a whole (e.g., $X.509$). The black boxes in the example below;
- **non-atomic**: properties can be selectively released, proof-of-possession can be certiﬁed (e.g., Idemix, U-Prove). The red boxes in the example below

![[ClientPortfolioCredentials.png]]

----------------------------------------------------------------

##### Disclosure
A **disclosure** is a subset of the client portfolio that satisﬁes:
- **certiﬁability**: each property is certiﬁed by a credential;
- **atomicity**: if a property of an atomic credential is disclosed, all its properties are disclosed.

![[Disclosure.png]]

----------------------------------------------------------------

##### Portfolio sensitivity
Different portfolio components have different sensitivity. In fact, the client may prefer to disclose some properties or credentials.

**Sensitivity labels** express privacy requirements:
- partial order relationship $\succeq$;
- arbitrary composition operator $\oplus$ (the composition of two sensitivity labels $\lambda_1 \oplus \lambda_2$ is a sensitivity label).

We assume sensitivity labels to be integer values, composed through the $+$ operator. In a multilevel policy (where the labels can assume the values _unclassified_, _classified_, _secret_ and _top secret_) the labels are composed through the _max_ operator, where it returns the maximum level of security from the the set of lables.

----------------------------------------------------------------

##### Sensitivity of properties and credentials
Specify how a client values information in her portfolio:
- $\lambda(A)$: sensitivity of property $A$ individually taken;
- $\lambda(c)$: sensitivity of the existence of credential $c$. In fact, the credential itself can carry informations.

![[SensitivityPropertiesCredentials.png]]

----------------------------------------------------------------

##### Sensitivity of associations
$\lambda(A)$: sensitivity of an association $A=\{A_i , ..., A_j, c_k, ..., c_n\}$, whose joint release carries:
- more information than the release of each element in $A$ $\to$ **sensitive view**;

![[SensitivityOfAssociations1.png]]

- less information than the release of each element in $A$ $\to$ **dependency**.

![[SensitivityOfAssociations2.png]]

----------------------------------------------------------------

##### Disclosure constraints
Set $A=\{A_i, ..., A_j, c_k, ..., c_n\}$ of elements whose release must be controlled:
- **forbidden view**: the release of $A$ is prohibited;

![[Disclosure1.png]]

- **disclosure limitation**: at most $n$ elements in $A$ can be released.

![[Disclosure2.png]]

A disclosure is valid if no disclosure constraints is violated.

----------------------------------------------------------------

##### Disclosure sensitivity

![[DisclosureSensitivity1.png]]

The sensitivity $\lambda(\mathcal{D})$ of a disclosure $\mathcal{D}$ is the sum of the sensitivity labels of released:
- properties;

![[DisclosureSensitivity2.png]]

- credentials;

![[DisclosureSensitivity3.png]]

- associations.

![[DisclosureSensitivity4.png]]


$$\lambda(\mathcal{D}) = 1+5+5+10+1+3+5 = 30$$

----------------------------------------------------------------

##### Server request
Request $\mathcal{R}$: disjunction of **simple requests**, where a simple request $R$ is a conjunction of **terms**:
- term $r =type.\{A_1, ..., A_m\}$: disclosure of $\{A_1, ..., A_m\}$ from $c$ such that $type(c) \preceq_{isa} type$. This implies that $type$ is an abstraction of credential type $type(c)$ in $\mathcal{H}$. The server can't talk in terms of instances.

Example:
$$\mathcal{R} = r_1 \wedge r_2$$
$$r_1 = id.\{Name,Address\}$$
$$r_2 = cc.\{Name,CCNum\}$$

----------------------------------------------------------------

##### Min-disclosure problem
A disclosure $\mathcal{D}$:
- satisﬁes $\mathcal{R}$ if it satisﬁes at least a $R$ in $\mathcal{R}$;
- satisﬁes $R$ if, $\forall r =type.\{A_1, ..., A_m\}$ in $R$, it includes $c$ such that:
	- $c$ certiﬁes $\{A_1, ..., A_m\}$;
	- $type(c) \preceq_{isa} type$;

![[MinDisclosure1.png]]

$\lambda(\mathcal{D}) = 1 + 8 + 1 + 5 + 5 + 15 = 35$

- is minimum if $\nexists$ a valid disclosure $\mathcal{D}'$ s.t. $\mathcal{D}'$ satisﬁes $\mathcal{R}$ and $\lambda(\mathcal{D}')< \lambda(\mathcal{D})$.

![[MinDisclosure2.png]]

$\lambda(\mathcal{D}) = 35 \to \mathcal{D}$ is not minimum.

![[MinDisclosure3.png]]

$\lambda(\mathcal{D}') = 30 \to \mathcal{D}'$ is minimum.

----------------------------------------------------------------

##### Computing a minimal disclosure
The problem of computing a disclosure that minimizes release of information is $NP$-hard:
- exploit **graph-based** representation of portfolio and requests, providing heuristics based on graph-matching;
- exploit **Max-SAT** representation of the problem and existing SAT solver.

----------------------------------------------------------------

##### Work to be investigated
It is desirable to:
- enable **derivation of sensitivity levels** of properties (e.g., based on identity exposure);
- support speciﬁcations in terms of **preferences** (e.g., my id_card is less sensitive than my passport);
- have sensitivity labels assigned to **proofs** (e.g., a proof that the user is of age provided by non-atomic credentials);
- have support referring to **existence of a credential** (without releasing it);
- allow **recipient/context-based sensitivity speciﬁcations** (e.g., dialysis certiﬁcates is less sensitive if released to a doctor than to a generic server);
- have user-intuitive approaches for expressing preferences (and possibly translate them to sensitivity labels);
- have a consideration of previous disclosures;
- have type vs instance mismatch (server talks about classes, users refer to instances);
- have the integration with server-side solutions and more expressive server requests.

----------------------------------------------------------------

##### Server-side open issues
On the server-side there is still work to do to increase expressiveness. Today XACML:
- does not provide a support for expressing and reasoning about digital certiﬁcates in the speciﬁcation of the authorization policies:
	- e.g., “attribute nationality should be certiﬁed by a passport”.
- does not have support for abstractions:
	-  e.g., “_id_document_ is an abstraction including credentials $\{identity\_card, driver\_license, passport\}$”
- does not have support for policy dialog (to communicate policies to users):
	- condition (e.g., "_identity_card.age_ $> 18$”);
	- predicate (e.g., “_identity_card.age_ $>$”);
	- property (e.g., “_identity_card.age_”);
	- credential (e.g., “_identity_card_”);
	- none (nothing can be disclosed about the condition).
- does not have support for recursive conditions:
	- for expressing policies based on chains of credentials/properties;
	- for supporting **delegation** and **recursion** (e.g., “the certiﬁcation authority signing a user’s credential has been directly or indirectly delegated by a particular authority preferred by the server”).

----------------------------------------------------------------

# Privacy and integrity of data storage

![[PrivacyAndIntegrityOfDataStorage.png|500]]

## Contributions and advancements
The research community has been very active and produced several contributions and advancements. E.g.,:
- solutions for protecting conﬁdentiality of stored data;
- indexes supporting different types of queries;
- inference exposure evaluation;
- data integrity;
- selective access to outsourced data;
- ...

----------------------------------------------------------------

## Protecting data conﬁdentiality
Solutions for protecting data can be based on:
- **encryption**;
- **encryption and fragmentation**;
- **fragmentation**.

----------------------------------------------------------------

## Encryption
The server can be **honest-but-curious** (therefore we want to protect the confidentiality and not the integrity) and should not have access to the resource content.<br />
Data conﬁdentiality is provided by wrapping a **layer of encryption** around sensitive data. For performance reasons, encryption is typically applied at the tuple level but it is also possible to apply it at the table level, at the column level or at the cell level.

![[Encryption.png]]

### Fine-grained access to data in the cloud
For conﬁdentiality reasons, **Cloud Service Providers** storing data cannot decrypt them for data processing/access. Therefore, it is needed a mechanisms to support access to the outsourced data:
- effective and efﬁcient, that is, does not require to import the whole data every time;
- should not open the door to inferences.

The most used approaches for granting fine-grained access are:
- **Keyword-based searches directly on the encrypted data**: supported by speciﬁc cryptographic techniques;

![[FineGrainedAccessApproach1.png]]


- **homomorphic encryption**: supports the execution of operations directly on the encrypted data;

![[FineGrainedAccessApproach2.png]]

- **encryption schemas**: each column can be encrypted with a different encryption schema, depending on the conditions to be evaluated on it (e.g., Google encrypted BigQuery);
- **onion encryption (CryptDB)**: different onion layers, each of which supports the execution of a speciﬁc SQL operation (e.g., HanaDB SEEED framework). It suffers from two problems:
	- in storage, the data are protected but, when a layer is peeled, the data are exposed;
	- the encryption layer could leak informations about the data, e.g., the use of order preserving encryption leaks the order of the data.

![[FineGrainedAccessApproach3.png]]

- **indexes**: metadata attached to the data and used for ﬁne-grained information retrieval and query execution. They can also be complementary to encryption (even with encryption users want to have the ability to perform searches based on metadata).

![[FineGrainedAccessApproach4.png]]

An example of encryption and indexes.<br />
Indexes associated with attributes are used by the server to select data to be returned in response to a query. 

![[EncryptionAndIndexesExample.png]]

In the example above, it is possible to notice how the original tuple is encrypted and how the indexes are used by the server.

An example of how does the query evaluation process works.

![[QueryEvaluationProcessExample.png]]

#### Indexes for queries: Direct (1:1)
It is possible to use actual value or coding as indexes, because they are simple and precise for equality queries but they preserves plaintext value distinguishability (inference attacks).

![[IndexesForQueriesDirect.png]]

Technically, it is not advisable to use the actual value as index but, in case the data is not sensible and it does not leak informations (like an identifier does), it becomes possible to utilize it.

----------------------------------------------------------------

#### Indexes for queries: Bucket (n:1)
The term **bucket** let suppose that there will be **collisions**. We want to have different values mapped on the same encryption. This tecnhique could be **partition-based** or **hash-based** and it still supports for equality queries while collisions remove plaintext distinguishability. Nevertheless, result may contain spurious tuples (**postprocessing query**, e.g., we wanna return all the tuples about doctor Angel but he is mapped on the same values of doctor Bell. Therefore, we return all the tuple with this value and then we do a postprocessing step, removing the tuples we don't need) and this approach is still vulnerable to inference attacks (based on frequence of the tuples).

![[IndexesForQueriesBucket.png]]

----------------------------------------------------------------

#### Indexes for queries: Flattened (1:n)
A plaintext value can be mapped to $n$ indexes, e.g., the three occurrences of _Asthma_ in the example below are mapped to three different indexes. The use of flat indexes decreases exposure to inference attacks but remains vulnerabile to dynamic observations (because every time the user needs to access the value _Asthma_, he will be obliged to ask every time the same indexes).

![[IndexedForQueriesFlattened.png]]

----------------------------------------------------------------

##### Partition-based index
Consider an arbitrary plaintext attribute $A_i$ in relational schema $R$, with domain $D_i$. $D_i$ is partitioned in a number of non-overlapping subsets of values, called **partitions**, containing contiguous values. Given a plaintext tuple $t$ in $r$, the value of attribute $A_i$ for $t$ belongs to a partition. The function $ident_{R.A_i} (p_j)$ assigns to each partition $p_j$ of attribute $A_i$ in $R$ an identiﬁer.

The corresponding index value is the unique value associated with the partition to which the plaintext value $t[A_i]$ belongs. $Map_{R.A_i} (v) = ident_{R.A_i} (p_j)$, where $p_j$ is the partition containing $v$. $Map_{R.A_i}$ can be order-preserving or random. This mapping is $n:1$, therefore it has collisions. The index of an attribute is the identifier of the partition in which it falls.

An example of a partition-based index.<br />
Random mapping:

![[PartitionBasedIndexExample.png]]

- $Map_{Balance} (100) = \mu$;
- $Map_{Balance} (200) = \kappa$;
- $Map_{Balance} (300) = \eta$;
- $Map_{Balance} (400) = \theta$.

The partition-based index supports queries where conditions are boolean formulas over terms of the form;
- **Attribute op Value**;
- **Attribute op Attribute**.

The allowed operations for op include $\{=, <, >, \leq, \geq\}$.

----------------------

###### Mapping conditions $Map_{cond}$
To map the conditions of a query using the partition-based index, we proceed as follows:
- $A_i = v$: the mapping is deﬁned as:

$$Map_{cond} (A_i = v) \to I_i =Map_{A_i} (v)$$
 
 For example, to map the condition $Balance = 100$ of a query, we map it into $I_B = \mu$:

$$Map_{cond} (Balance = 100) \to I_{Balance} = Map_{Balance} (100) = \mu$$

- $A_i < v$: the mapping depends on whether or not the mapping function $Map_{A_i}$ is order-preserving (the order on the plaintext is kept on the indexes) or random:
	- **order-preserving**: $Map_{cond} (A_i < v) \to I_i \leq Map_{A_i} (v)$;
	- **random**: check if attribute $I_i$ lies in any of the partitions that may contain a value $v'$ where $v' < v: Map_{cond} (A_i < v) \to I_i \in Map^{<}_{A_i} (v)$.

Example:

$$Map_{cond} (Balance< 200) \to I_{Balance} \in \{\mu , \kappa\}$$

- $A_i > v$: symmetric with respect to $A_i < v$;
- $A_i = A_j$: the translation is performed by considering all possible pairs of partitions of $A_i$ and $A_j$ that overlap;

Example:

![[MappingConditions.png]]

$$ Map_{cond} (Balance=Benefit) \to (I_{Balance} = \mu \wedge I_{Benefit} = \gamma)$$
$$\vee (IBalance = \kappa \wedge IBenefit =\gamma )$$
$$∨ (IBalance =\eta \wedge IBenefit = \alpha )
∨ (IBalance = \theta \wedge IBenefit =\alpha )$$

- $A_i < A_j$: the mapping depends on whether or not the mapping functions $Map_{A_i}$ and $Map_{A_j}$ are order-preserving or random.

----------------------------------------------------------------

###### Query execution
Each query $Q$ on the plaintext $DB$ is translated into:
- a query $Q_s$ to be executed at the server;
- a query $Q_c$ to be executed at client on the result.

Query $Q_s$ is deﬁned by exploiting the deﬁnition of $Map_{cond}(C)$.<br />
Query $Q_c$ is executed on the decrypted result of $Q_s$ to ﬁlter out spurious tuples.

The translation should be performed in such a way that the server is responsible for the majority of the work.

An example of a query execution.

![[QueryExecutionExample.png]]

----------------------------------------------------------------

##### Hash-based index
The **hash-based index** is based on the concept of **one-way [[Funzione Hash |hash function]]**. For each attribute $A_i$ in $R$ with domain $D_i$, a secure one-way hash function $h : D_i \to B_i$ is deﬁned, where $B_i$ is the domain of index $I_i$ associated with $A_i$.

Given a plaintext tuple $t$ in $r$, the index value corresponding to $t[A_i]$ is $h(t[A_i])$.

Important properties of any secure hash function $h$ are:
- $\forall x, y \in D_i : x = y \to h(x) = h(y)$ (**determinism**);
- given two values $x, y \in D_i$ with $x \neq y$, we may have that $h(x) = h(y)$ (**collision**);
- given two distinct but near values $x, y (\vert x − y \vert < \varepsilon)$ chosen randomly in $D_i$, the discrete probability distribution of the difference $h(x) − h(y)$ is uniform (**strong mixing**). Therefore, the hash does not respect the order and the distance between two tuples.

An example of encrypted relation with hashing.

![[EncryptedRelationWithHashingExample.png]]

- $h_c(Alice)=h_c(Chris)= \alpha$;
- $h_c(Donna)=h_c(Elvis)=\beta$;
- $h_c(Bob)= \delta$;
- $h_b(200)=h_b(400)= \kappa$;
- $h_b(100)= \eta$;
- $h_b (300)= \theta$.

----------------------------------------------------------------

###### Query conditions supported by the hash-based index
Support queries where conditions are boolean formulas over terms of the form:
- $Attribute = Value$ (mapping them into the form $I_{Attribute} = h_{Value}$);
- $Attribute1 = Attribute2$, if $Attribute1$ and $Attribute2$ are indexed with the same hash function (because if the hash function is deterministic, hashing the same value twice will result into the same hash).

It does not support range queries (a solution similar to the one adopted for partition-based methods is not viable) because colliding values in general are not contiguous in the plaintext domain.

Query translation works like in the partition-based method.

----------------------------------------------------------------

#### Interval-based queries
- **Order-preserving indexing techniques**: support interval-based queries but expose to inference. Comparing the ordered sequences of plaintext and indexes would lead to reconstruct the correspondence;
- **Non order-preserving techniques**: data are not exposed to inference but interval-based queries are not supported;
- **DBMSs support interval-based queries using [[B-Albero|B+-trees]]** (for each node $n$, the values in the left subtree are smaller than the value in $n$ and the values in the right subtree are bigger than the value in $n$.), but the $B+$-tree deﬁned by the server on indexes is of no use. Possible solution:
	- calculate the nodes in the $B+$-tree at the client and encrypt each node as a whole at the server;
	- $B+$-tree traversal must be performed at the trusted front-end.

An example of a $B+$-tree. In a $B+$-tree, the leaves are linked to reduce the search time.

![[B+-TreeExample1.png]]

Query on the plaintext relation.

```SQL
SELECT * FROM Accounts WHERE Customer = 'Bob'
```

Interaction for query evaluation.

![[B+-TreeExample2.png]]

----------------------------------------------------------------

## Searchable encryption
### Order preserving encryption
**Order Preserving [[Schema di cifratura |Encryption Schema]]** (**OPES**) takes as input a target distribution of index values and applies an order preserving transformation so that the resulting index values follow the target distribution:
- comparison can be directly applied on the encrypted data;
- query evaluation does not produce spurious tuples.

However, this approach is vulnerable with respect to inference attacks.

**Order Preserving Encryption with Splitting and Scaling** (**OPESS**) schema creates index values so that their frequency distribution is ﬂat.

----------------------------------------------------------------

### Fully homomorphic encryption
Fully homomorphic encryption schema:
- allows performing speciﬁc computation on encrypted data;
- decryption of the computation result, yields the result of operations performed on the plaintext data.

Recent advancement: a functional-encryption schema that ﬁts together several existing schemes (homomorphic encryption, garbled circuit, attribute-based encryption). This is still too computationally intensive for practical DBMS applications.

----------------------------------------------------------------

## Inference exposure
There are two conﬂicting requirements in indexing data:
- indexes should provide an effective query execution mechanism;
- indexes should not open the door to inference and linking attacks

It is important to measure quantitatively the level of exposure due to the publication of indexes:

$$\varepsilon = \text{ Exposure Coefficient}$$

### Scenarios
The computation of the exposure coefﬁcient $\varepsilon$ depends on two factors:
- the indexing method adopted, e.g.:
	- direct encryption ($1:1$);
	- hashing ($n:1$).
- the a-priori knowledge of the intruder, e.g.:
	- **Freq+DB$^k$**:
		- the frequency distribution of plaintext values in the original database (**Freq**);
		- the encrypted database (**DB$^k$**).
	- **DB+DB$^k$**:
		- the plaintext database (**DB**);
		- the encrypted database (**DB$^k$**).

The possible inferences, having Freq+DB$^k$, are:
- **plaintext content**: determine the existence of a certain tuple (or association of values) in the original database;
- **indexing function**: determine the correspondence between plaintext values and indexes.

The possible inferences, having DB+DB$^k$, are:
- **indexing function**: determine the correspondence between plaintext values and indexes.

#### Exposure coefﬁcient computation

![[ExposureCoefficientComputation.png]]

##### Direct encryption – Freq+DB$^k$
Correspondence between an index and a plaintext value can be determined based on the number of occurrences of the index/value:
- basic protection: values with the same number of occurrences are indistinguishable to the attacker.

An example of Freq+DB$^k$ ($1:1$).

![[Freq+DBkExample.png]]

To quantify how a tuple is exposed, we just have to do the product of the inverse cardinality of each element of the tuple itself. To quantify how a table is exposed, we just have to calculate the mean of the exposure of the tuples in the table itself.

Assessment of index exposure based on equivalence relation where index/plaintext values with same number of occurrences belong to the same class. The exposure of values in equivalence class $C$ is $\frac{1}{\vert  C \vert}$.

An example of exposure computation in Freq+DB$^k$.<br />

![[Freq+DBkExposureComputationExample.png]]

----------------------------------------------------------------

##### Direct encryption – DB+DB$^k$
$3$-colored undirected **Row-Column-Value** [[Grafo |graph]]:
- one vertex of color “column” for every attribute;
- one vertex of color “row” for every tuple;
- one vertex for every distinct value in a column;
- an arc connects every value to the column and row(s) in which it appears ($1:1$).

RCV on plaintext values is identical to the one on indexes, as it is possible to notice in the images below. Inference exposure can be measured not by evaluating the frequencies of the values but by evaluating the **[[Grafo#Automorfismo |automorphisms]]** of the graph. However, it is not sufﬁcient to count the number of automorphisms:
- if there are $K$ automorphisms and in $k$ of them the label assigned to $v_i$ is the same, there is a probability of $k/K$ of identifying the value.

An example of DB+DB$^k$.

![[DB+DBkExample1.png]]
![[DB+DBkExample2.png]]

----------------------------------------------------------------

###### Computing the exposure coefﬁcient
The set of automorphisms constitutes a group described by the coarsest **equitable partition** of the vertices, where an equitable partition is composed by each subset appearing in the partition that contains vertices that can be substituted one for the other in an automorphism.

**Nauty algorithm**: iteratively derives the partition.

Probability of identifying a vertex in partition $C: 1/ \vert C \vert$.
Exposure with equitable partition of $n$ elements over a total number of $m: n/m$

For example:
- $\beta$ indistinguishable from $\delta$;
- $\eta$ indistinguishable from $\theta$;
- $\gamma$ indistinguishable from $\varepsilon$.

An example of computing the exposure coefﬁcient.

![[ComputingTheExposureCoefficientExample.png]]

----------------------------------------------------------------

##### Hashing exposure – Freq+DB$^k$
The hash function is characterized by a collision factor, denoting the number of attribute values that on average collide on the same index value.

There are different possible mappings of plaintext values in index values, with regard to the constraints imposed by frequencies. Need to enumerate the different mappings by using an adaptation of Pisinger’s algorithm for the subset sum problem. Compute the exposure coefﬁcient for each mapping.

----------------------------------------------------------------

##### Hashing exposure – DB+DB$^k$
The RCV-graph built on plaintext and encrypted data are not identical.

Different vertexes of the plaintext RCV-graph may collapse to the same encrypted RCV-graph vertex. The number of edges connecting row vertexes to value vertexes in the plaintext and encrypted RCV-graph is the same. The problem becomes ﬁnding a correct matching between the edges of the plaintext RCV-graph and the edges of the encrypted RCV-graph.

----------------------------------------------------------------

## Bloom Filter
A **Bloom ﬁlter** is at the basis of the construction of some indexing techniques. It is an efﬁcient method to encode set membership:
- set of $n$ elements ($n$ is large);
- vector of $l$ bits ($l$ is small);
- $h$ independent [[Funzione Hash |hash functions]] $H_i : \{0, 1\}^* \to [1, l]$.

Insert element $x$:
- sets to $1$ the bit values at index positions $H_1(x), H_2(x), ..., H_h (x)$.

Search element $x$:
- compute $H_1(x), H_2(x), ..., H_h(x)$ and check whether those values are set in the bit vector.

An example of Bloom ﬁlter.<br />
Let $l = 10$ and $h = 3$.

![[BloomFilterExample.png]]

Insert sun: $H_1(sun)=2$; $H_2(sun)=5$; $H_3(sun)=9$.<br />
Insert frog: $H_1(frog)=1$; $H_2(frog)=5$; $H_3(frog)=7$.<br />
Search dog: $H_1(dog)=2$; $H_2(dog)=5$; $H_3(dog)=10$.<br />
$\to$ No.
Search car: $H_1(frog)=1$; $H_2(frog)=5$; $H_3(frog)=9$.<br />
$\to$ maybe Yes; false positive!

### Bloom ﬁlter – Properties
It is a generalization of hashing (Bloom ﬁlter with one hash function is equivalent to ordinary hashing) and it is space efﬁcient (roughly ten bit for every element in the dictionary with $1\%$ error). However, elements cannot be removed.

It obviously yields a constant false positive probability, which theoretically considered not acceptable but becomes acceptable in practical applications as it is  a ﬁne price to pay for having space efﬁciency. Notice that this technique cannot yield false negative and also that deletion cannot be implemented in this technique.

----------------------------------------------------------------

## Data Integrity
### Integrity of outsourced data
Two aspects:
- **integrity in storage**: data must be protected against improper modiﬁcations $\to$ unauthorized updates to the data must be detected;
- **integrity in query computation**: query results must be correct and complete $\to$ server’s misbehavior in query evaluation must be detected.

#### Integrity in storage
Data integrity in storage relies on **digital signatures**. Signatures are usually computed at tuple level:
- table and attribute level signatures can be veriﬁed only after downloading the whole table/column;
- cell level signature causes a high veriﬁcation overhead.

The **veriﬁcation cost** grows linearly with the number of tuples in the query result $\to$ the signature of a set of tuples can be combined to generate the aggregated signature.

----------------------------------------------------------------

## Selective Encryption and Over Encryption
### Selective information sharing
Different users might need to enjoy different views on the outsourced data. Enforcement of the access control policy requires the data owner to mediate access requests $\to$ impractical (if not inapplicable).<br />
Authorization enforcement may not be delegated to the provider $\to$ data owner should remain in control. 

There are different approaches to the selective information sharing: 
- **attribute-based encryption** (**ABE**): this approach allows **derivation** of a key (the computation of a key to gain access to an object) only by users who hold certain attributes (based on asymmetric cryptography);

![[SelectiveInformationSharingApproach1.png]]

- **selective encryption**: the authorization policy deﬁned by the data owner is translated into an equivalent encryption policy. Different parts of the datas are encrypted with different symmetric keys and giving a user only one of the keys grants him access only to that specific fragment of the datas

![[SelectiveInformationSharingApproach2.png]]

This is a typical scenario of selective encryption.

![[SelectiveEncryptionScenario.png]]

#### Selective encryption
Basic idea/desiderata:
- data themselves need to directly enforce access control;
- different keys should be used for encrypting data;
- authorization to access a resource translated into knowledge of the key with which the resource is encrypted;
- each user is communicated the keys necessary to decrypt the resources she is entailed to access.

##### Authorization policy
The data owner deﬁnes a **discretionary access control** (authorization) policy to regulate **read access** to the resources. An authorization policy $\mathcal{A}$ is a set of **permissions** of the form $\langle \text{ user, resource } \rangle$ (because only the owner can write and the user can only read, therefore it is useless to specify the operation to apply on the data). It can be represented as an access matrix or a directed and bipartite [[Grafo|graph]], having a vertex for each user $u$ and for each permissions resource $r$, and an edge from $u$ to $r$ for each permission $\langle u, r \rangle$.

The basic idea is that different ACLs implies different encryption keys.

An example of an authorization policy and its representations.

![[AuthorizationPolicy.png]]

##### Encryption policy
The authorization policy deﬁned by the data owner is translated into an equivalent encryption policy. Possible solutions could be to encrypt each resource with a different key and give users the keys for the resources they can access. However, this approach requires each user to manage as many keys as the number of resources she is authorized to access.<br />
Alternatively, it is possible to use a **key derivation method** for allowing users to derive from their user keys all the keys that they are entitled to access, which allows limiting to one the key to be released to each user.

###### Key derivation methods
This approach is based on a key derivation hierarchy $(\mathcal{K} , \preceq)$:
- $\mathcal{K}$ is the set of keys in the system;
- $\preceq$ is the partial order relation deﬁned on $\mathcal{K}$.

The knowledge of the key of vertex $v_1$ and of a piece of information publicly available allows the computation of the key of a lower level vertex $v_2$ such that $v_2 \preceq v_1$.

$(\mathcal{K} , \preceq)$ can be graphically represented as a graph with a vertex for each $x \in \mathcal{K}$ and a path from $x$ to $y$ iff $y \preceq x$.

Depending on the partial order relation deﬁned on $\mathcal{K}$, the key derivation hierarchy can be:
- a [[Grafo#Catena |chain]];
- a [[Albero |tree]];
- a direct acyclic [[Grafo |graph]];

----------------------------------------------------------------

###### Token-based key derivation methods
Keys are arbitrarily assigned to vertices. A public **label** $l_i$ is associated with each key $k_i$. A piece of public information $t_{i,j}$, called **token**, is associated with each edge in the hierarchy. Given an edge $(k_i,k_j)$, token $t_{i,j}$ is computed as $k_j \oplus h(k_i, l_j)$ where:
- $\oplus$ is the $n$-ary xor operator;
- $h$ is a secure [[Funzione Hash |hash function]].

Computing the token in this way makes possible to derive the desired key $k_j$ from the token $t_{i, j}$ and the key $k_i$.

Advantages of tokens:
- they are public and allow users to derive multiple encryption keys, while having to worry about a single one;
- they can be stored on the remote server (just like the encrypted data), so any user can access them.

----------------------------------------------------------------

###### Key and token graph
Relationships between keys through tokens can be represented via a **key and token graph**:
- a vertex for each pair $\langle k, l \rangle$, where $k \in \mathcal{K}$ is a key and $l \in \mathcal{L}$ the corresponding label;
- an edge from a vertex $\langle k_i, l_i \rangle$ to vertex $\langle k_j, l_j \rangle$ if there exists a token $t_{i,j} \in \mathcal{T}$ allowing the derivation of $k_j$ from $k_i$.

![[KeyAndTokenGraph.png]]

----------------------------------------------------------------

###### Key assignment and encryption schema
We want a translation of the authorization policy into an encryption policy. The starting assumptions (desiderata):
- each user can be released only a single key;
- each resource is encrypted only once (with a single key).

Function $\phi$ : $\mathcal{U} \cup \mathcal{R} \to \mathcal{L}$ describes:
- the association between a user and (the label of) her key;
- the association between a resource and (the label of) the key used for encrypting it.

----------------------------------------------------------------

###### Formal deﬁnition of encryption policy
An **encryption policy** over users $\mathcal{U}$ and resources $\mathcal{R}$, denoted $\mathcal{E}$ , is a $6$-tuple $\langle \mathcal{U}, \mathcal{R}, \mathcal{K}, \mathcal{L}, \phi, \mathcal{T} \rangle$, where:
- $\mathcal{K}$ is the set of keys deﬁned in the system and $\mathcal{L}$ is the set of corresponding labels;
- $\phi$ is a key assignment and [[Schema di cifratura |encryption schema]];
- $\mathcal{T}$ is a set of tokens deﬁned on $\mathcal{K}$ and $\mathcal{L}$.

The encryption policy can be represented via a graph by extending the key and token graph to include:
- a vertex for each user and each resource;
- an edge from each user vertex $u$ to the vertex $\langle k, l \rangle$ such that $\phi (u)=l$;
- an edge from each vertex $\langle k, l \rangle$ to each resource vertex $r$ such that $\phi (r) = l$.

An example of an encryption policy graph.

![[EncryptionPolicyGraph1.png]]
![[EncryptionPolicyGraph2.png]]

- user $A$ can access $\{r_1, r_2\}$;
- user $B$ can access $\{r_2, r_3\}$;
- user $C$ can access $\{r_2\}$;
- user $D$ can access $\{r_1, r_2, r_3\}$;
- user $E$ can access $\{r_1, r_2, r_3\}$;
- user $F$ can access $\{r_3\}$.

----------------------------------------------------------------

###### Policy transformation
Goal: translate an authorization policy $\mathcal{A}$ into an equivalent encryption policy $\mathcal{E}$.

$\mathcal{A}$ and $\mathcal{E}$ are equivalent if they allow exactly the same accesses:
- $\forall u \in \mathcal{U}, r \in \mathcal{R} : u \rightarrow^{\mathcal{E}} r \Rightarrow u \to^{\mathcal{A}} r$;
- $\forall u \in \mathcal{U}, r \in \mathcal{R} : u \rightarrow^{\mathcal{A}} r \Rightarrow u \to^{\mathcal{E}} r$.

The naive solution is structured in the following way:
- each user is associated with a different key;
- each resource is encrypted with a different key;
- a token $t_{u,r}$ is generated and published for each permission $\langle u, r \rangle$ (it practically means to use the bipartite graph previously seen as a key and token graph) $\to$ producing and managing a token for each single permission can be unfeasible in practice.

Exploiting acls and user groups:
- group users with the same access privileges;
- encrypt each resource with the key associated with the set of users that can access it.

![[AuthorizationPolicy.png]]

$r4$ and $r5$ can be accessed by the same users. Therefore, these resources may be encrypted in the same way.

It is possible to create an encryption policy graph by exploiting the hierarchy among sets of users induced by the partial order relationship based on set containment ($\subseteq$). If the system has a large number of users, the encryption policy has a large number of tokens and keys (at most $2^{\vert \mathcal{U} \vert } − 1$ because we subtract the empty set) $\to$ inefﬁcient key derivation.

![[TranslatingAIntoE.png]]

----------------------------------------------------------------

###### Minimum encryption policy
Observation: user groups that do not correspond to any acl do not need to have a key.

Goal: compute a **minimum encryption policy**, equivalent to a given authorization policy that minimize the number of tokens to be maintained by the server.

Solution: heuristic algorithm based on the observation that:
- only vertices associated with user groups corresponding to actual acls need to be associated with a key;
- the encryption policy graph may include only the vertices that are needed to enforce a given authorization policy, connecting them to ensure a correct key derivability;
- other vertices can be included if they are useful for reducing the size of the catalog.

----------------------------------------------------------------

###### Construction of the key and token graph
Start from an authorization policy $\mathcal{A}$:
1) create a vertex/key for each user and for each **non-singleton acl** (**initialization**);
2) for each vertex $v$ corresponding to a non-singleton acl, ﬁnd a cover without redundancies (**covering**):
	1) for each user $u$ in $v$._acl_, ﬁnd an ancestor $v'$ of $v$ with $u \in v'$._acl_.
3) factorize common ancestors (**factorization**).

An example of a key and token graph.

![[KeyAndTokenGraphExample.png]]

----------------------------------------------------------------

###### Key assignment and encryption schema $\phi$ and catalog

![[KeyAssignment.png]]

These informations can be stored on the server.

----------------------------------------------------------------

##### Multiple owners and policy changes
When multiple owners need to share their data, the use of a key agreement method allows two data owners to share a secret key for subsequent cryptographic use.

When authorizations dynamically change, the data owner needs to:
- download the resource from the server;
- create a new key for the resource;
- decrypt the resource with the old key;
- re-encrypt the resource with the new key;
- upload the resource to the server and communicate the public catalog updates.

$\to$ inefﬁcient. A possible solution is the **over-encryption**.

----------------------------------------------------------------

###### Over-encryption
Resources are encrypted twice:
- by the owner, with a key shared with the users and unknown to the server (**Base Encryption Layer** - **BEL** level);
- by the server, with a key shared with authorized users (**Surface Encryption Layer** - **SEL** level).

To access a resource a user must know both the corresponding BEL and SEL keys. Grant and revoke operations may require:
- the addition of new tokens at the BEL level;
- the update of the SEL level according to the operations performed.

----------------------------------------------------------------

###### BEL and SEL structures
At the BEL level we distinguish two kinds of keys, **access** ($k_a$) and **derivation** ($k$) keys:
- each node in the BEL is associated with a pair of keys $(k, k_a)$, where $k_a = h(k)$, with $h$ a one-way hash function, and a pair of labels $(l, l_a)$. To the users that needs to access further resources is given $k$, so they can hash it and obtain $k_a$. To the others is given directly $k_a$;
- key $k$ (with label $l$) is used for derivation purpose;
- key $k_a$ (with label $l_a$) is used to encrypt the resources associated with the node;
- this distinction separates the two roles associated with keys: enabling key derivation and enabling resource access.
The SEL level is characterized by an encryption policy deﬁned as previously illustrated.

----------------------------------------------------------------

###### Full_SEL and Delta_SEL
**Full_SEL** starts from a SEL identical to the BEL and keeps the SEL always updated to represent the current policy.

**Delta_SEL** starts from an empty SEL and adds elements to it as the policy evolves, such that the pair BEL-SEL represents the policy.

A running example for over-encryption with 5 different acls ($r_1 = r_2$, $r_3 = r_4 = r_5$, $r_6 = r_7$, $r_8$ and $r_9$).

![[RunningExampleForOverEncryption.png|600]]

An example of an initial conﬁguration for Full_SEL.

![[InitialConfigurationFullSELExample.png|600]]

An example of an initial conﬁguration for Delta_SEL.

![[InitialConfigurationDeltaSELExample.png|600]]

----------------------------------------------------------------

###### Algorithms for the evolution of SEL and BEL
The evolution of the BEL and SEL are managed by:
- procedure over-encrypt that regulates the update process by over-encrypting the resources at the SEL level;
- grant and revoke procedures that are needed for granting and revoking a privilege, respectively.

----------------------------------------------------------------

###### Procedure over-encrypt (at SEL)
Receive from BEL requests of the form $over-encrypt(U,R)$ to make the
set $R$ of resources accessible only to users in $U$:
1) for each resource in $R$, if currently over-encrypted $\to$ decrypt it;
2) if $U = ALL$ (so everybody can see the resource), end (no need to do anything);
3) check if $\exists s$ such that _s.key_ is derivable only by users in $U$; if it does not exist, create it and add it to SEL graph;
4) encrypt each resource $r \in R$ with _s.key_ and update $\phi_s(r)$ and the corresponding table accordingly.

----------------------------------------------------------------

###### Procedure Grant (at BEL)
Upon request to grant user $u$ access to resource $r$, currently encrypted
with $b_j.key_a$:
1) add $u$ to $acl(r)$;
2) if $u$ cannot derive $b_j.key_a \to$ add a token from $u$’s key to $b_j.key_a$ in the BEL graph;
3) if there is a set $R'$ of resources encrypted with $b_j.key_a$ that should not be accessible to $u$ (need to be protected from $u$ at SEL);
	1) partition $R'$ in sets according to their acl (each set $S \subseteq R'$ includes all resources with $acl_S$);
	2) for each set $S$, request $over-encrypt(acl_S ,S)$ to SEL.
4) make $r$ accessible by $u$ at SEL:
	- Delta_SEL: if the set of users that can derive $b_j.key_a$ is $acl(r)$, call $over-encrypt(ALL,\{r\})$; otherwise call $over-encrypt(acl(r),\{r\})$;
	- Full_SEL: call $over-encrypt(acl(r),\{r\})$.

----------------------------------------------------------------

###### Procedure Revoke (at BEL)
Receive a request to revoke from user $u$ access to resource $r$:
1) remove $u$ from $acl(r)$;
2) request $over-encrypt(acl(r),\{r\})$ to SEL to make $r$ accessible only to users in $acl(r)$.

An example of grant operation – Full_SEL. In this case, we want to grant $D$ access to $r_3$ but we can't just add a token from $b_4$ to $b_7$ because it will expose $r_4$ and $r_5$. Therefore, the server must perform an over-encrypt on $r_4$ and $r_5$.

![[GrantFullSEL.png|650]]

An example of grant operation – Delta_SEL. The server encrypts only to cover data from unauthoryzed users. In this case, the server encrypts $r_4$ and $r_5$.

![[GrantDeltaSEL.png|650]]

An example of revoke operation – Full_SEL. We want to revoke the access to $r_8$ from $F$. At the start, $B$, $D$, $E$ and $F$ have access to it. The graph changes because the hub $b_{11}$ isn't needed anymore.

![[RevokeFullSEL.png|650]]

An example of revoke operation – Delta_SEL

![[RevokeDeltaSEL.png|650]]

----------------------------------------------------------------

###### Protection evaluation
The BEL and SEL encryption policy are equivalent to the authorization policy at initialization time. Procedure grant, revoke, and over-encryption preserve the equivalence. The key derivation function adopted is secure. All the encryption functions and the tokens are robust and cannot be broken. Each user correctly manages her keys, without the possibility for a user to steal keys from another user. Vulnerable to collusion?

----------------------------------------------------------------

###### Collusion attacks
**Collusion** exists every time two entities combining their knowledge can acquire knowledge that neither of them has access to. It can happen in case of:
- collusion among users;
- collusion with the server;

Collusion attacks depend on the different views that one can have on a resource $r$. We assume users to be not oblivious.

----------------------------------------------------------------

###### Views on resource $r$. 
Four views:
1) **_open_**: the user knows the key at the BEL level as well as the key at the SEL level;
2) **_locked_**: the user knows neither the key at the BEL level nor the key at the SEL level;
3) **_sel_locked_**: the user knows only the key at the BEL level but does not know the key at the SEL level;
4) **_bel_locked_**: the user knows only the key at the SEL level but does not know the one at the BEL level.

The server always has the _bel_locked_ view.

![[ViewsOnResourceR.png]]

Each layer is depicted as a fence:
- discontinuous, if the key is known;
- continuous, if the key is not known (protection cannot be passed).

----------------------------------------------------------------

###### Classiﬁcation of users
Consider a resource $r$ and the **history** of its $acl(r)$. Users in $acl(r)$ can be classiﬁed into $4$ categories.

![[ClassificationOfUsers.png]]

There is **collusion risk** for $r$ iff there are users in _Bel_accessible_ that do not belong to _Past_acl_.

----------------------------------------------------------------

###### View transitions in the Full_SEL
The two states on the left are the possible starting points, where the server and the client are synchronized.

![[ViewTransitionFullSEL1.png]]

A user can have the _sel_locked_ view on $r$ due to a past acl or **policy split**, that is, $u$ is authorized to access $r'$ (not $r$), encrypted at the BEL level with the same key as $r$.

![[ViewTransitionFullSEL2.png]]

----------------------------------------------------------------

###### View transitions in the Delta_SEL 

![[ViewTransitionDeltaSEL1.png]]

The view of a user $u'$ on $r$ can evolve from bel_locked to locked due to the **policy split**, that is, $u$ is authorized to access $r'$ (not $r$), encrypted at the BEL level with the same key as $r$.

![[ViewTransitionDeltaSEL2.png]]

----------------------------------------------------------------

###### Collusion in the Full_SEL
Collusion among users is not a problem. In fact, users never gain in the exchange.

About collusion with the server:
- users in Bel_accessible who have a sel_locked view and who never had the authorization to access the resource;
- exposure is limited to resources involved in a policy split to make other resources, encrypted with the same BEL key, available to the user $\to$ easily identiﬁable; can be avoided by re-encrypting.

----------------------------------------------------------------

###### Collusion in the Delta_SEL
A single user by herself can hold the two different views, _sel_locked_ and _bel_locked_:
- a user could retrieve the resources at initial time, when she is not authorized, getting and storing at her side resources’ _bel_locked_ views;
- if the user acquires the _sel_locked_ view on a resource $r$ (the user is released $\phi (r)$ to make accessible to her another resource $r'$) she can enjoy the open view on $r$.

Again, exposure is limited to resources involved in a policy split $\to$ easily identiﬁable; can be avoided by re-encrypting.

----------------------------------------------------------------

# Mix&Slice for Policy Revocation
## Mix&Slice
Over-encryption requires support by the server (i.e., the server implements more than simple get/put methods). Alternative solution to enforce revoke operations: **Mix&Slice**.

Mix&Slice uses different rounds of encryption to provide complete mixing of the resource $\to$ unavailability of a small portion of the encrypted resource prevents its (even partial) reconstruction $\to$ **All Or Nothing Trasformation** (**AONT**).

Slice the resource into fragments and, every time a user is revoked access to the resource, re-encrypt a randomly chosen fragment $\to$ lack of a fragment prevents resource decryption.

----------------------------------------------------------------

### Resource organization
- **Block**: sequence of bits input to a block cipher AES uses block of $128$ bits.
- **mini-block**: sequence of bits in a block it is our **atomic unit of protection** mini blocks of $32$ bits imply a cost of $232$ for brute-force attacks.
- **macro-block**: sequence of blocks mixing operates at the level of macro-block a macro-block of $1$KB includes $8$ blocks.

![[ResourceOrganization.png]]

----------------------------------------------------------------



### Mixing
When encryption is applied to a block, all the mini-blocks are mixed. The absence of a mini-block in a block from the result prevents reconstruction of the block. It does not prevent the reconstruction of other blocks in the resource.

![[Mixing1.png]]

Extend mixing to a macro-block:
- iteratively apply block encryption;
- at iteration $i$, each block has a mini-block for each encrypted block obtained at iteration $i − 1$ (at distance $4^{i−1}$);
- $x$ rounds mix $4^x$ mini-blocks.

![[Mixing2.png]]

----------------------------------------------------------------

### Slicing
To be mixed, large resources require large macro-blocks:
- many rounds of encryption;
- considerable computation and data transfer overhead.

Large resources are split in different macro-blocks for encryption. Absence of a mini-block for each macro-block prevents the (even partial) reconstruction of the resource.

Slice resources in fragments having a mini-block for each macro-block (the ones in the same position). Absence of a fragment prevents reconstruction of the resource.

![[Slicing.png]]

----------------------------------------------------------------

### Revoke
To revoke user $u$ access to a resource $r$:
1) randomly select a fragment $F_i$ of $r$ and download it;
2) decrypt $F_i$;
3) generate a new key $k_l$ that u does not know and cannot derive (generated with **key regression** and seed encrypted with new ACL);
4) re-encrypt $F_i$ with the new key $k_l$;
5) upload the encrypted fragment.

![[Revoke.png]]

----------------------------------------------------------------

#### Effectiveness of the approach
A revoked user does not know the encryption key of at least one fragment:
- a brute force attack is needed to reconstruct the fragment (and the resource);
- $2^{msize}$ attempts, with $msize$ the number of bits in a mini-block.

A user can locally store $f_{loc}$ of the $f$ fragments of a resource:
- probability to be able to reconstruct the resource after $f_{miss}$ fragments have been re-encrypted: $P = (f_{loc} /f)^{f_{miss}}$:
	- proportional to the number of locally stored fragments;
	- decreases exponentially with the number of policy updates.

----------------------------------------------------------------

# Write Authorizations
Problem: the support of only read accesses may be limiting $\to$ users may be authorized to modify resources.

Keys regulating read accesses cannot regulate write accesses $\to$ the set $w[o]$ of users authorized to write $o$ may be a subset of the set $r[o]$ of users authorized to read $o$.

Solution: associate a write tag $tag[o]$ with each resource $o$ encrypted with a key:
- known to the users in $w[o]$ (derivable from the key of $w[o]$ via secure hashing);
- known to the storage server (derivable from its key via tokens);

$\to$ write authorized iff $u$ proves knowledge of $tag[o]$ to the server.

## Key derivation graph
Key derivation graph extended with the storage server $S$. The key derivation graph has:
- a key $k_u$ for each user $u$;
- a key $k_S$ for the storage server $S$;
- a key $k_{r[o]}$ for each read access control list $r[o]$;
- a key $k_{w[o]}$ for each write access control list $w[o]$;
- a key $k_{w[o] \cup \{S\}}$ for each write access control list, extended with the server $w[o] \cup \{S\}$;
- a secure hash function $h$ to compute $k_{w[o]} \cup \{S\}$ from $k_{w[o]}$;
- a set of tokens that permit each user $u$ to derive $k_{r[o]} (k_{w[o]})$ such that $u \in r[o]$ ($u \in w[o]$);
- a set of tokens that permit the storage server $S$ to derive $k_{w[o]} \cup \{S\}$.

An example of a key derivation graph.

![[KeyDerivationGraphExample1.png|600]]
![[KeyDerivationGraphExample2.png|600]]

----------------------------------------------------------------

## Authorization enforcement
The data owner deﬁnes the key derivation graph and:
- communicates to each user $u$ key $k_u$;
- communicates to the storage server $S$ key $k_S$;
- encrypts each resource $o$ with key $k_{r[o]}$;
- encrypts the write tag $tag[o]$ of each resource $o$ with key $k_{w[o] \cup \{S\}}$.

Read accesses: $u$ can read $o$ iff she can decrypt its content (i.e., if $u \in r[o]$).

Write accesses:
- $u$ sends a request to write $o$ to the storage server;
- the server accepts the request only if $u$ provides (plaintext) $tag[o]$;
- $u$ can provide $tag[o]$ only if $u$ can decrypt it (i.e., if $u \in w[o]$).

----------------------------------------------------------------

### Structure of outsourced resources

![[StructureOfOutsourcedResources.png]]

An example of an authorization enforcement.

![[AuthorizationEnforcementExample.png]]

----------------------------------------------------------------

### Write integrity
The data owner needs to verify the proper behavior of users and storage server. Write integrity control:
- allows detecting resource tampering;
- discourages improper behaviors;
- provides non repudiation.

Straightforward solution: signature-based approach:
- users sign the resource with their private key;
- the data owner checks if the signature has been produced by an authorized user for the resource content $\to$ it is computationally expensive.

#### HMAC-based approach
Each resource $o$ has:
- a timestamp, _encw_ts_, of the last write operation;
- a _user_tag_ computed as the HMAC, with the key $k_u$ of the writer, over $o$, the old value of the user_tag, and the timestamp of the write operation;
- a _group_tag_ computed as the HMAC, with key $kw[o]$, over $o$ and the timestamp of the write operation.

At each write operation, the writer updates the _user_tag_ and _group_tag_.

**Aggregated signature** guarantees metadata integrity and that no resource is dropped.

----------------------------------------------------------------

### Integrity tags
User_tag of resource $o$:
- write integrity and accountability of user actions;
- checked only by the data owner.

Group_tag of resource $o$:
- write integrity of the resource content;
- checked by all the users in $w[o]$.

Permit to detect:
- tampering by $S$ with $o \to S$ cannot produce a valid user_tag for $o$;
- tampering by $S$ with $tag[o]$ to include $u$ in $w[o] \to u$ cannot produce valid integrity tags;
- unauthorized write operations by $u \to u$ cannot produce valid integrity tags.

### Structure of outsourced resources

![[StructureOfOutsourcedResources1.png|600]]


----------------------------------------------------------------

### Other issues
Write integrity controlled by any reader. Support for write privileges for data collections with multiple owners. Selective encryption for supporting subscription-based authorization policies:
- users are authorized to access all and only the resources published during their subscribed periods;
- user authorizations remain valid also after the expiration of their subscriptions $\to$ need to take into account both the subscriptions of the users and the time when resources have been published.

----------------------------------------------------------------

## Fragmentation and Encryption
Encryption makes query evaluation and application execution more expensive or not always possible. Often what is sensitive is the association between values of different attributes, rather than the values themselves, e.g., association between employee’s names and salaries $\to$ protect associations by breaking them, rather than encrypting.

Recent solutions for enforcing privacy requirements couple:
- **encryption**;
- **data fragmentation**.

### Conﬁdentiality constraints
Sets of attributes such that the (joint) visibility of values of the attributes in the sets should be protected.

Sensitive attributes: the values of some attributes are considered sensitive and should not be visible $\to$ singleton constraints.

Sensitive associations: the associations among values of given attributes are sensitive and should not be visible $\to$ non-singleton constraints.

An example of conﬁdentiality constraints.<br />
$R = (Name,DoB,Gender,Zip,Position,Salary,Email,Telephone)$
- $\{Telephone\}$, $\{Email\}$: attributes _Telephone_ and _Email_ are sensitive (cannot be stored in the clear);
- $\{Name,Salary\}$, $\{Name,Position\}$, $\{Name,DoB\}$: attributes _Salary_, _Position_, and _DoB_ are private of an individual and cannot be stored in the clear in association with the name;
- $\{DoB,Gender,Zip,Salary\}$, $\{DoB,Gender,Zip,Position\}$: attributes _DoB_, _Gender_, _Zip_ can work as quasi-identiﬁer.
- $\{Position,Salary\}$, $\{Salary,DoB\}$: association rules between _Position_ and _Salary_ and between _Salary_ and _DoB_ need to be protected from an adversary.

----------------------------------------------------------------

### Outline
Data fragmentation:
- non-communicating pair of servers;
- multiple non-linkable fragments;
- departing from encryption: **Keep a few**;
- fragmentation and inferences.

Publishing obfuscated associations:
- anonymizing bipartite graph;
- fragments and loose associations.

#### Non-communicating pair of servers
Conﬁdentiality constraints are enforced by splitting information over two independent servers that cannot communicate (need to be completely unaware of each other):
- sensitive associations are protected by distributing the attributes among the two servers;
- encryption is applied only when explicitly demanded by the conﬁdentiality constraints or when storing an attribute in any of the two servers would expose at least a sensitive association.

![[NonCommunicatingPairOfServers.png]]

----------------------------------------------------------------

#### Enforcing conﬁdentiality constraints
Conﬁdentiality constraints $\mathcal{C}$ deﬁned over a relation $R$ are enforced by decomposing $R$ as $\langle R_1, R_2, E \rangle$ where:
- $R_1$ and $R_2$ include a unique tuple $ID$ needed to ensure lossless decomposition;
- $R_1 \cup R_2 = R$;
- $E$ is the set of encrypted attributes and $E \subseteq R_1, E \subseteq R_2$;
- for each confidentiality constraint $c \in \mathcal{C}, c \nsubseteq (R_1 − E)$ and $c \nsubseteq (R_2 − E)$.

An example of non-communicating pair of servers.

![[NonCommunicatingPairOfServersExample.png]]

When deciding in which server to store an attribute, it is important to consider which queries will be asked more frequently.

----------------------------------------------------------------

#### Query execution
At the logical level: replace $R$ with $R_1 \bowtie R_2$. Query plans:
- fetch $R_1$ and $R_2$ from the servers and execute the query locally but it is extremely expensive;
- involve servers $S_1$ and $S_2$ in the query evaluation can do the usual optimizations, e.g. push down selections and projections.
- Selections cannot be pushed down on encrypted attributes different options for executing queries:
	- send sub-queries to both $S_1$ and $S_2$ in parallel, and join the results at the client;
	- send only one of the two sub-queries, say to $S_1$; the tuple IDs of the result from $S_1$ are then used to perform a semi-join with the result of the sub-query of $S_2$ to ﬁlter $R_2$.

An example of a query execution.

![[QueryExecutionExample 1.png]]

##### Identifying the optimal decomposition
Brute force approach for optimizing with regard to workload $W$:
- for each possible safe decomposition of $R$:
	- optimize each query in $W$ for the decomposition;
	- estimate the total cost for executing the queries in $W$ using the optimized query plans.
- select the decomposition that has the lowest overall query cost.

Too expensive! $\to$ Exploit afﬁnity matrix


Adapted afﬁnity matrix $M$:
- $M_{i,j}$: ‘cost’ of placing cleartext attributes $i$ and $j$ in different fragments;
- $M_{i,i}$: ‘cost’ of placing encrypted attribute $i$ (across both fragments).

The goal is to minimize

$$\sum_{i,j: i\in (R_1 - E), j \in (R_2 - E)} M_{i, j} + \sum_{i \in E} M_{i, i}$$

Optimization problem equivalent to **hypergraph coloring problem**, where an hypergraph is a graph in which an edge can be linked to any number of vertices. Given relation $R$, deﬁne graph $G(R)$:
- attributes are vertexes;
- afﬁnity value $M_{i,j} \to$ weight of arc $(i, j)$;
- afﬁnity value $M_{i,i} \to$ weight of vertex $i$;
- conﬁdentiality constraints $\mathcal{C}$ represent a hypergraph $H(R, \mathcal{C})$ on the same vertexes.

Find a $2$-coloring of the vertexes such that:
- no hypergraph edge is monochromatic;
- the weight of bichromatic edges is minimized;
- a vertex can be deleted (i.e., encrypted) by paying the price equal to the vertex weight.

Coloring a vertex is equivalent to place it in one of the two fragments. The $2$-coloring problem is NP-hard. Different heuristics, all exploiting:
- approximate min-cuts;
- approximate weighted set cover.

----------------------------------------------------------------

#### Multiple non-linkable fragments
Coupling fragmentation and encryption is interesting and provides advantages, but assumption of two non-communicating servers:
- too strong and difﬁcult to enforce in real environments;
- limits the number of associations that can be solved by fragmenting data, often forcing the use of encryption $\to$ allow for more than two non-linkable fragments.

![[MultipleNonLinkableFragments.png]]


A fragmentation of $R$ is a set of fragments $\mathcal{F} = \{F_1, ..., F_m\}$, where $F_i \subseteq R$, for $i = 1, ..., m$.

A fragmentation $\mathcal{F}$ of $R$ correctly enforces a set $\mathcal{C}$ of conﬁdentiality constraints iff the following conditions are satisﬁed:
- $\forall F \in \mathcal{F}, \forall c \in \mathcal{C}: c \nsubseteq F$ (each individual fragment satisﬁes the constraints);
- $\forall F_i, F_j \in \mathcal{F}, i \neq j: F_i \cap F_j = \emptyset$ (fragments do not have attributes in common).

Each fragment $F$ is mapped into a physical fragment containing:
- all the attributes in $F$ in the clear;
- all the other attributes of $R$ encrypted (a **salt** (something random) is applied on each encryption).

Fragment $F_i = \{A_{i_1}, ..., A_{i_n}\}$ of $R$ mapped to physical fragment $F_i^e (salt, enc, A_{i_1}, ..., A_{i_n})$:
- each $t \in r$ over $R$ is mapped into a tuple $t^e \in f_i^e$ where $f_i^e$ is a relation over $F_i^e$ and:
	- $t^e[enc] = E_k (t[R − F_i] \otimes t^e[salt])$;
	- $t^e[A_{i_j}] = t[A_{i_j}]$, for $j = 1, ..., n$.

An example of multiple non-linkable fragments.

![[MultipleNonLinkableFragmentsExample.png]]

##### Executing queries on fragments
Every physical fragment of $R$ contains all the attributes of $R \to$ no more than one fragment needs to be accessed to respond to a query.<br />
If the query involves an encrypted attribute, an additional query may need to be executed by the client.

![[ExecutingQueriesOnFragments.png]]

----------------------------------------------------------------

##### Optimization criteria
Goal: ﬁnd a fragmentation that makes query execution efﬁcient. The fragmentation process can then take into consideration different optimization criteria:
- number of fragments;
- afﬁnity among attributes;
- query workload.

All criteria obey **maximal visibility**:
- only attributes that appear in singleton constraints (sensitive attributes) are encrypted;
- all attributes that are not sensitive appear in the clear in one fragment.

----------------------------------------------------------------

##### Minimal number of fragments
Basic principles:
- avoid excessive fragmentation $\to$ minimal number of fragments.

Goal:
- determine a correct fragmentation with the minimal number of fragments $\to$ NP-hard problem (minimum hyper-graph coloring problem).

Basic idea of the heuristic:
- deﬁne a notion of **minimality** that can be used for efﬁciently computing a fragmentation;
	- $\mathcal{F}$ is minimal if all the fragmentations that can be obtained from $\mathcal{F}$ by merging any two fragments in $\mathcal{F}$ violate at least one constraint.
- iteratively select an attribute with the highest number of non-solved constraints and insert it in an existing fragment if no constraint is violated; create a new fragment otherwise.

An example of minimal number of fragments.

![[MinimalNumberOfFragmentsExample.png]]

Minimal fragmentation $\mathcal{F}$;
- $F_1 = \{Name\}$;
- $F_2 = \{DoB, Zip\}$;
- $F_3 = \{Illness, Physician\}$.

Merging any two fragments would violate at least a constraint. The minimal fragmentation $\mathcal{F}$ does not necessary correspond to the minimum fragmentation.

----------------------------------------------------------------

#### Maximum afﬁnity
Basic principles:
- preserve the associations among some attributes, e.g., association (_Illness_, _DoB_) should be preserved to explore the link between a speciﬁc illness and the age of patients;
- **afﬁnity matrix** for representing the advantage of having pairs of attributes in the same fragment.

The goal is todetermine a correct fragmentation with maximum afﬁnity (sum of fragments afﬁnity computed as the sum of the afﬁnity of the different pairs of attributes in the fragment) $\to$ NP-hard problem (**minimum hitting set problem**).

The basic idea of the heuristic is to iteratively combine fragments that have the highest afﬁnity and do not violate any conﬁdentiality constraint.

An example of maximum afﬁnity.

![[MaximumAffinityExample1.png]]

The matrix on the left is the affinity matrix while the matrix on the right is the one representing the constraints.

![[MaximumAffinityExample2.png]]

In this step, we notice that $\{Name\}$ can't be paired with the other attributes, therefore we substitute his value with $-1$, meaning that this value will not be taken while optimizing. In this way, the constraints involving $\{Name\}$ are resolved.

![[MaximumAffinityExample3.png]]

In this step, it is possible to notice that the fragmentation composed by the union of $F_2$ and $F_5$ has maximum affinity. Therefore, these two fragmentatin are merged togheter.

![[MaximumAffinityExample4.png]]

Therefore, the column representing the attribute _Physician_ is removed. His valued are added to the other cells, e.g. $F_2, F_4$ went from $20$ to $35$ (because, in the previous step, $F_2, F_4 = 20$ and $F_4, F_5 = 10$). $F_2, F_3$ is setted to $-1$ because merging these fragmentations would violate $c_6$.

![[MaximumAffinityExample5.png]]

Maximum afﬁnity fragmentation $F$ (fragmentation afﬁnity $= 30 + 35 = 65$). Merging any two fragments would violate at least a constraint.

----------------------------------------------------------------

##### Query workload
Basic principles:
- minimize the execution cost of queries;
- representative queries (**query workload**) used as starting point;
- **query cost model**: based on the selectivity of the conditions in queries and queries’ frequencies.

Goal:
- determine a fragmentation that minimizes the query workload cost $\to$ NP-hard problem (minimum hitting set problem).

Basic idea of the heuristic:
- exploit monotonicity of the query cost function with respect to a dominance relationship among fragmentations;
- traversal (checking ps solutions at levels multiple of $d$) over a spanning tree of the fragmentation lattice.

----------------------------------------------------------------

## Fragmentation
### Keep a few
Basic idea (hybrid scenarios):
- encryption makes query execution more expensive and not always possible;
- encryption brings overhead of key management.

$\to$ Depart from encryption by involving the owner as a trusted party to maintain a limited amount of data.

![[KeepAFew.png]]

Given:
- $R(A_1, ..., A_n)$: relation schema;
- $\mathcal{C} = \{c_1, ..., c_m\}$: conﬁdentiality constraints over $R$.

Determine a fragmentation $\mathcal{F} = \langle F_o, F_s \rangle$ for $R$, where $F_o$ is stored at the owner and $F_s$ is stored at a storage server, and:
- $F_o \cup F_s = R$ (**completeness**);
- $\forall c \in \mathcal{C}, c \nsubseteq F_s$ (**conﬁdentiality**);
- $F_o \cap F_s = \emptyset$ (**non-redundancy**). This property can be relaxed.

At the physical level $F_o$ and $F_s$ have a common attribute (additional _tid_ or non-sensitive key attribute) to guarantee lossless join.

An example of Keep a few.

![[KeepAFewExample.png]]

----------------------------------------------------------------

### Query evaluation
Queries are formulated on $R$, therefore need to be translated into equivalent queries on $F_o$ and/or $F_s$. Queries of the form

```MySQL
SELECT A FROM R WHERE C
```

where $C$ is a conjunction of basic conditions:
- $C_o$: conditions that involve only attributes stored at the client;
- $C_s$: conditions that involve only attributes stored at the sever;
- $C_{so}$: conditions that involve attributes stored at the client and attributes stored at the server.

An example of query evaluation.

![[QueryEvaluationExample.png|600]]

#### Query evaluation strategies
Server-Client strategy:
- server: evaluate $C_s$ and return result to client;
- client: receive result from server and join it with $F_o$;
- client: evaluate $C_o$ and $C_{so}$ on the joined relation.

An example of a Server-Client strategy.

![[ServerClientStrategyExample.png|600]]

Client-Server strategy:
- client: evaluate $C_o$ and send _tid_ of tuples in result to server;
- server: join input with $F_s$, evaluate $C_s$, and return result to client;
- client: join result from server with $F_o$ and evaluate $C_{so}$.

An example of the client-server strategy.

![[ClientServerStrategyExample.png|600]]

#### Server-client vs client-server strategies
If the storage server knows or can infer the query, Client-Server leaks information: the server infers that some tuples are associated with values that satisfy $C_o$.

If the storage server does not know and cannot infer the query, Server-Client and Client-Server strategies can be adopted without privacy violations. Possible strategy based on performances: evaluate most selective conditions ﬁrst.

----------------------------------------------------------------

### Minimal fragmentation
The goal is to minimize the **owner’s workload** due to the management of $F_o$. Weight function $w$ takes a pair $\langle F_o, F_s \rangle$ as input and returns the owner’s workload (i.e., storage and/or computational load). A fragmentation $\mathcal{F} = \langle F_o, F_s \rangle$ is minimal iff:
1) $\mathcal{F}$ is correct (i.e., it satisﬁes the completeness, conﬁdentiality, and non-redundancy properties);
2) $\nexists \mathcal{F}'$ such that $w(\mathcal{F}') < w(\mathcal{F})$ and $\mathcal{F}'$ is correct.

#### Fragmentation metrics
Different metrics could be applied splitting the attributes between $F_o$ and $F_s$, such as minimizing:
- **storage**:
	- number of attributes in $F_o$ (**Min-Attr**);
	- size of attributes in $F_o$ (**Min-Size**).
- **computation/trafﬁc**:
	- number of queries in which the owner needs to be involved (**Min-Query**);
	- number of conditions within queries in which the owner needs to be involved (**Min-Cond**).

The metrics to be applied may depend on the information available.

An example of data and workload information.

![[DataAndWorkloadInformationExample.png|600]]

----------------------------------------------------------------

### Weight metrics and minimization problems
- **Min-Attr**: only the relation schema (set of attributes) and the conﬁdentiality constraints are known $\to$ minimize the number of the attributes in $F_o$: $w_a(\mathcal{F})=card(F_o)$;
- **Min-Size**: the relation schema (set of attributes), the conﬁdentiality constraints, and the size of each attribute are known $\to$ minimize the physical size of $F_o$: $w_s(\mathcal{F})=\sum_{A \in F_o} size(A)$;
- **Min-Query**: the relation schema (set of attributes), the conﬁdentiality constraints, and a representative proﬁle of the expected query workload are known. Query workload proﬁle:
	$Q=\{(q_1, freq(q_1), Attr(q_1)), ..., (q_l, freq(q_l)Attr(q_l))\}$:
	- $q_1, ..., q_l$ queries to be executed;
	- $freq(q_i)$ expected execution frequency of $q_i$;
	- $Attr(q_i)$ attributes appearing in the $WHERE$ clause of $q_i$.

	$\to$ minimize the number of query executions that require processing at the owner: $w_q(F) = \sum_{q \in \mathcal{Q}} freq(q)$ such that $Attr(q) \cap F_o \neq \emptyset$;
- **Min-Cond**: the relation schema (set of attributes), the conﬁdentiality constraints, and a complete proﬁle (conditions in each query of the form $a_i$ op $v$ or $a_i$ op $a_j$) of the expected query workload are known. Query workload proﬁle:
	$\mathcal{Q}=\{(q_1, freq(q_1), Cond(q_1)), ..., (q_l, freq(q_l)Cond(q_l))\}$:
	- $q_1, ..., q_l$ queries to be executed;
	- $freq(q_i)$ expected execution frequency of $q_i$;
	- $Cond(q_i)$ set of conditions in the $WHERE$ clause of query $q_i$; each condition is represented as a single attribute or a pair of attributes.

	 $\to$ minimize the number of conditions that require processing at the owner: $w_c(F)= \sum_{cnd \in Cond(\mathcal{Q})} freq(cnd)$ such that $cnd \cap F_o \neq \emptyset$, where $Cond(\mathcal{Q})$ denotes the set of all conditions of queries in $Q$, and $freq(cnd)$ is the overall frequency of $cnd$ ()in the example above, the difference between Min-Query and Min-Cond is observable in the query $q6$.

----------------------------------------------------------------

### Modeling of the minimization problems
All the problems of minimizing storage or computation/trafﬁc aim at identifying a **hitting set**, that is, $F_o$ must contain at least an attribute for each constraint.<br />
Different metrics correspond to different criteria according to which the hitting set should be minimized. We represent all criteria with a uniform model based on:
- **target set**: elements (i.e., attributes, queries, or conditions) with respect to which the minimization problem is deﬁned;
- **weight function**: function that associates a weight with each target element;
- **weight of a set of attributes**: sum of the weights of the targets intersecting with the set.

$\to$ compute the hitting set of attributes with minimum weight.

![[ModelingOfTheMinimizationProblems.png]]

**Weighted Minimum Target Hitting Set Problem** (**WMTHSP**). Given a ﬁnite set $A$, a set $C$ of subsets of $A$, a set $\mathcal{T}$ (target) of subsets of $A$, and a weight function $w: \mathcal{T} \to \mathbb{R}^+$, determine a subset $S$ of $A$ such that:
1) $S$ is a hitting set of $A$;
2) $\nexists S'$ such that $S'$ is a hitting set of $A$ and $\sum_{t \in \mathcal{T}, t \cap S' \neq \emptyset} w(t) < \sum_{t \in \mathcal{T}, t\cap S \neq \emptyset} w(t)$ (the weight is minimum).

The Minimum Hitting Set Problem can be reduced to the WMTHSP:
- $\mathcal{T} = \{A_1, ..., A_n\}$; $w(\{A_i\}) = 1, i = 1, ..., n$;
- minimizing $\sum_{t \in T, t \cap S \neq \emptyset} w(t)$ is equivalent to minimizing the cardinality of the hitting set $S$.

$\to$ WMTHSP is NP-hard.

We propose a heuristic algorithm for solving the WMTHSP that:
- ensures **minimality**, that is, moving any attribute from $F_o$ to $F_s$ violates at least a constraint;
- has **polynomial time complexity** in the number of attributes (efﬁcient execution time);
- provides solutions close to the optimum (from experiments run: optimum was returned in many cases, $14\%$ maximum error observed).

Input and output of the heuristic algorithm.<br />
Input:
- $\mathcal{A}$: set of attributes not appearing in singleton constraints (the attributes in the singleton constraints are keeped at the owner);
- $\mathcal{C}$: set of well deﬁned constraints, that is, $\forall c_1, c_2 \in \mathcal{C}: c_1 \neq c_2$;
- $\mathcal{T}$: set of targets;
- $w$: weight function deﬁned on $\mathcal{T}$.

Output:
- $\mathcal{H}$: set of attributes composing, together with those appearing in singleton constraints, $F_o$;
- $F_s$ is computed as $R \setminus F_o$, obtaining a correct fragmentation.

The data structure on which the heuristic algorithm is based is a priority-queue $PQ$ with an element $E$ for each attribute:
- $E.A$: attribute;
- $E.C$: pointers to non-satisﬁed constraints that contain $E.A$;
- $E.T$: pointers to the targets non intersecting $\mathcal{H}$ that contain $E.A$;
- $E.n_c$: number of constraints pointed by $E .C$;
- $E.w$: total weight of targets pointed by $E.T$.

The priority is dictated by $E.w$/$E.nc$: elements with lower ratio have higher priority.

An example of inizialization of the heuristic algorithm.

![[ExampleOfInitializationHeuristicAlgorithm.png]]


![[ExampleOfInitializationHeuristicAlgorithm1.png]]

The following is the working process of the heuristic algorithm:
- While $PQ \neq \emptyset$ and $\exists E \in PQ$, $E.n_c \neq 0$:
	- extract the element $E$ with lowest $E.w$/$E.n_c$ from $PQ$;
	- insert $E.A$ into $\mathcal{H}$;
	- $\forall c$ pointed by $E.C$, remove the pointers to $c$ from any element $E'$ in $PQ$ and update $E'.n_c$;
	- $\forall t$ pointed by $E.T$, remove the pointers to $t$ from any element $E'$ in $PQ$ and update $E'.w$;
	- readjust $PQ$ based on the new values for $E.w$/$E.n_c$ (to_be_updated).
- for each $A \in \mathcal{H}$:
	- if $\mathcal{H} \setminus \{A\}$ is a hitting set for $\mathcal{C}$, remove $A$ from $\mathcal{H}$.

An example of Min-Query by the heuristic algorithm.

![[MinQueryExample1.png]]

![[MinQueryExample2.png]]

![[MinQueryExample3.png]]

![[MinQueryExample4.png]]

An example of solutions computed by the heuristic algorithm.

![[ExampleOfSolutionsHeuristicAlgorithm.png]]

----------------------------------------------------------------

### Fragmentation and inference
Fragmentation assumes attributes to be independent. In presence of data dependencies:
- sensitive attributes/associations may be indirectly exposed;
- fragments may be indirectly linkable.

An example of fragmentation and inference.

![[FragmentationAndInferenceExample1.png]]

![[FragmentationAndInferenceExample.png]]

----------------------------------------------------------------

#### Fragmenting with data dependencies
Take into account data dependencies in fragmentation. Fragments should not contain sensitive attributes/associations neither directly nor indirectly.

![[FragmentingWithDataDependencies.png]]

----------------------------------------------------------------

## Publishing Obfuscated Associations
### Motivation
Sensitive associations among data may need to be protected, while allowing execution of certain queries, e.g., the set of products available in a pharmacy and the set of customers may be of public knowledge; allow retrieving the average number of products purchased by customers while protecting the
association between a particular customer and a particular product.

Possible solutions:
- exploits a graphical representation of sensitive associations and masks the mapping from entities to nodes of the graph while preserving the graph structure;
- exploits fragmentation for enforcing conﬁdentiality constraints and visibility requirements and publishes a sanitized form of associations.

----------------------------------------------------------------

### Anonymizing Bipartite Graph
An example of private associations. The table $n:n$ _Customer_-_Product_ contains sensible informations and it can also be represented as a bipartite graph.

![[PrivateAssociationsExample.png|600]]

#### Problem statement
Publish anonymized and useful version of bipartite graph in such a way that:
- a broad class of queries (aggregated) can be answered accurately:
	- type $0$ - Graph structure only, e.g., what is the average number of products purchased by customers?
	- type $1$ - Attribute predicate on one side only, e.g., what is the average number of products purchased by $NJ$ customers?
	- type $2$ - Attribute predicate on both side, e.g., what is the average number of OTC products purchased by $NJ$ customers?
- privacy of the speciﬁc associations is preserved.

----------------------------------------------------------------

### $(k, l)$ grouping
Basic idea: preserve the graph structure but permute mapping from entities to nodes. **$(k, l)$ grouping** of bipartite graph $G = (V, W, E)$:
- partition $V$ (or $W$, respectively) into non-intersecting subsets of size $\geq k$ (or $l$, respectively);
- publish edges $E'$ that are isomorphic to $E$, where mapping from $E$ to $E'$ is anonymized based on partitions of $V$ and $W$.

An example of $(3,3)$ grouping.

![[(3,3)GroupingExample1.png|600]]

$c_1$, $c_2$ and $c_4$ are associated to the customer group $CG1$. In the released structure, however, they are substituted by $x_1$, $x_2$ and $x_3$ in no particular order ($c_1$ may or may not correspond to $x_1$ and so on) (aliasing).

![[(3,3)GroupingExample2.png|600]]

All these tables are published.
#### Safe groupings
There are different ways for creating a $(k, l)$ grouping but not all the resulting groupings offer the same level of privacy (e.g., local clique) $\to$ safe $(k,l)$ groupings; this means that nodes in the same group of $V$ are not connected to a same node in $W$ otherwise the nodes could be exposed.

The computation of a safe grouping can be hard even for small values of $k$ and $l$. In fact, the computation of a safe, strict $(3,3)$-grouping is NP-hard (reduction from partitioning a graph into triangles).

The authors propose a greedy algorithm that iteratively adds a node to a group with fewer than $k$ nodes, if it is safe (it creates a new group if such insertion is not possible). The algorithm works when bipartite graph is sparse enough.

----------------------------------------------------------------

## Fragments and Loose Associations
### Data publication
Fragmentation can also be used to protect sensitive associations in data publishing $\to$ publish/release to external parties only views (**fragments**) that do not expose sensitive associations. To increase utility of published information fragments could be coupled with some associations in sanitized form $\to$ **loose associations**: associations among groups of values (in contrast to speciﬁc values).

#### Conﬁdentiality constraints
As already discussed, confidentiality constraints are a sets of attributes such that the (joint) visibility of values of the attributes in the sets should be protected. They permit to express different requirements:
- **sensitive attributes**: the values of some attributes are considered sensitive and should not be visible;
- **sensitive associations**: the associations among values of given attributes are sensitive and should not be visible.

An example of conﬁdentiality constraints.

![[ConfidentialityCostraintsExample.png]]

- SSN is sensitive: $\{SSN\}$;
- Illness and Doctor are private of an individual and cannot be stored in association with the name of the patient: $\{Patient, Illness\}$, $\{Patient, Doctor\}$;
- $\{Birth, City\}$ can work as quasi-identiﬁer, therefore they can be used to identify a patient: $\{Birth, City, Illness\}$, $\{Birth, City, Doctor\}$.

#### Visibility requirements
**Visibility requirements** are monotonic Boolean formulas over attributes, representing views over data (negations are captured by conﬁdentiality constraints). They permit to express different requirements:
- **visible attributes**: some attributes should be visible;
- **visible associations**: the association among values of given attributes should be visible;
- **alternative views**: at least one of the speciﬁed views should be visible.

An example of visibility requirements.

![[ConfidentialityCostraintsExample.png]]

- Either names of Patients or their Cities should be released: $Patient \vee City$ (alternative views);
- either Birth dates and Cities of patients in association should be released or the SSN of patients should be released: $(Birth \wedge City) \vee SSN$ (visible associations and alternative views);
- Illnesses and Doctors, as well as their association, should be released: $Illness \wedge Doctor$ (visible attributes and visible associations).

----------------------------------------------------------------

### Fragmentation
**Fragmentation** can be applied to satisfy both conﬁdentiality constraints and visibility requirements. Publish/release to external parties only fragments that:
- do not include sensitive attributes and sensitive associations;
- include the requested attributes and/or associations (all the requirements should be satisﬁed, not necessarily by a single fragment).

An example of fragmentation.

![[FragmentationExample.png|600]]

#### Correct and minimal fragmentation
A fragmentation is **correct** if:
- each conﬁdentiality constraint is satisﬁed by all fragments;
- each visibility requirement is satisﬁed by at least a fragment;
- fragments do not have attributes in common to prevent joins on fragments to retrieve associations (**non-linkability**).

A correct fragmentation is **minimal** if the number of fragments is minimum (i.e., any other correct fragmentation has an equal or greater number of fragments).

The Min-CF problem of computing a correct and minimal fragmentation is NP-hard.

##### Computing a correct and minimal fragmentation
A SAT solver can efﬁciently solve the Min-CF problem. An instance of the Min-CF problem is translated into an instance of the SAT problem. The inputs to the Min-CF problem are interpreted as boolean formulas:
- visibility requirements are already represented as boolean formulas;
- each conﬁdentiality constraint is represented via a boolean formula as a conjunction of the attributes appearing in the constraint.

Iterate the evaluation of a SAT solver, starting with one fragment and increasing fragments by one at each iteration, until a solution is found (solution is guaranteed to be minimal).

##### Publishing loose associations
Fragmentation breaks associations among attributes. To increase utility of published information, fragments can be coupled with some associations in sanitized form. A given **privacy degree** of the association must be guaranteed $\to$ **loose associations**, that is, associations among groups of values (in contrast to speciﬁc values).

Given two fragments $F_l$ and $F_r$, a loose association between $F_l$ and $F_r$:
- partitions tuples in the fragments in groups;
- provides information on the associations at the group level;
- does not permit to exactly reconstruct the original associations among the tuples in the fragments;
- provides enriched utility of the published data.

###### Grouping
Given fragment $F_i$ and its instance $f_i$, a $k$-grouping over $f_i$ partitions the tuples in $f_i$ in groups of size greater than or equal to $k$ $\to$ each tuple $t$ in $f_i$ is associated with a group identiﬁer $G_i(t)$.

A $k$-grouping is **minimal** if it maximizes the number of groups (intuitively, it minimizes the size of the groups). $(k_l, k_r)$-grouping denotes the groupings over two instances $f_l$ and $f_r$ of $F_l$ and $F_r$. A $(k_l, k_r)$-grouping is minimal if both the $k_l$-grouping and the $k_r$-grouping are minimal.

An example of minimal $(2, 2)$-grouping.

![[Minimal(2,2)-GroupingExample1.png|600]]8

![[Minimal(2,2)-GroupingExample2.png|600]]

----------------------------------------------------------------

###### Group association
A $(k_l, k_r)$-grouping induces a **group association** $A$ among the groups in $f_l$ and $f_r$. A group association $A$ over $f_l$ and $f_r$ is a set of pairs of group identiﬁers such that:
- $A$ has the same cardinality as the original relation;
- there is a bijective mapping between the original relation and $A$ that associates each tuple in the original relation with a pair $(G_l(l), G_r(r))$ in $A$, with $l \in f_l$ and $r \in f_r$.

An example of group association.

![[GroupAssociationExample1.png|600]]

![[GroupAssociationExample2.png|600]]

![[GroupAssociationExample3.png|600]]

E.g, somebody in group _bc1_ is associated to somebody in group _id1_ and somebody else in group _bc1_ is associated to somebody in group _id2_. The uncertainty of the correct association has value $4$ in this example ($\leq k_r \cdot k_l$, as it will be shown in the paragraph [[Privatezza e Protezione dei Dati#Heterogeneity properties |Heterogeneity properties]]).

----------------------------------------------------------------

###### Group association protection
Duplicates in fragments are maintained (all fragments have the same cardinality as the original relation). Fragments may contain tuples that are equal. Furthermore, even tuples that are different may have the same values for attributes involved in a conﬁdentiality constraint. The looseness protection offered by grouping can be compromised. Therefore, there is the need to control occurrences of the same values.

----------------------------------------------------------------

###### Alikeness
Two tuples $l_i$, $l_j$ in $f_l(r_i, r_j$ in $fr)$ are **alike** with regard to a constraint $c$, denoted $l_i \simeq_c l_j (r_i \simeq_c r_j)$, if:
- $c \subseteq (F_l \cup F_r)$ ($c$ is covered by $F_l$ and $F_r$);
- $l_i [c \cap F_l] = l_j [c \cap F_l]$ (and, similarly, $r_i [c \cap F_r] = r_j [c \cap F_r])$.

Two tuples $l_i$, $l_j$ in $f_l (r_i, r_j$ in $f_r)$ are alike $l_i \simeq l_j (r_i \simeq r_j)$ if they are alike with regard to at least a constraint $c \subseteq (F_l \cup F_r)$. $\simeq$ is transitive for any constraint $c$. $\simeq$ is not transitive if there are at least two constraints covered by $F_l$ and $F_r$ ($r_1 \simeq_{c_3} r_8$, $r_2 \simeq_{c_4} r_8$ but $r_1 \nsim r_2$).

An example of alikeness.

![[AlikenessExample1.png|600]]

![[AlikenessExample2.png|600]]

----------------------------------------------------------------

###### k-loose association
A group association is **$k$-loose** if every tuple in the group association $A$ indistinguishably corresponds to at least $k$ distinct associations among tuples in each fragment. A $k$-loose association is also $k'$-loose for any $k' \leq k$.

A $(k_l, k_r)$-grouping induces a minimal group association $A$ if:
- $A$ is $k$-loose;
- $\nexists$ a $(k_l', k_r')$-grouping inducing a $k$-loose association such that $k_l' \cdot k_r' < k_l \cdot k_r$.

An example of a $4$-loose association.

![[4-LooseAssociationExample1.png|600]]

![[4-LooseAssociationExample2.png|600]]

----------------------------------------------------------------

###### Heterogeneity properties
There is a correspondence between $k_l$, $k_r$ of the groupings and the degree of $k$-looseness of the induced group association:
- a $(k_l, k_r)$-grouping cannot induce a $k$-loose association for a $k > k_l \cdot k_r$;
- the value $k \leq k_l \cdot k_r$ depends on how groups are deﬁned.

If a $(k_l, k_r)$-grouping satisﬁes given heterogeneity properties, the induced group association is $k$-loose with $k = k_l \cdot k_r$:
- **group heterogeneity**;
- **association heterogeneity**;
- **deep heterogeneity**.

###### Group heterogeneity
No group can contain tuples that are alike with respect to the constraints covered by $F_l$ and $F_r$. It ensures diversity of tuples within groups.

![[GroupHeterogeneity1.png|600]]

![[GroupHeterogeneity2.png|600]]

----------------------------------------------------------------

###### Association heterogeneity
No group can be associated twice with another group (the group association cannot contain any duplicate). it ensures that for each real tuple in the original relation there are at least $k_l \cdot k_r$ pairs in the group association that may correspond to it.

![[AssociationHeterogeneity1.png|600]]

![[AssociationHeterogeneity2.png|600]]

----------------------------------------------------------------

###### Deep heterogeneity
No group can be associated with two groups that contain alike tuplet. It ensures that all $k_l \cdot k_r$ pairs in the group association to which each tuple could correspond to contain diverse values for attributes involved in constraints.

![[DeepHeterogeneity1.png|600]]

![[DeepHeterogeneity2.png|600]]

----------------------------------------------------------------

###### Flat grouping vs sparse grouping
A $(k_l, k_r)$-grouping is:
- **ﬂat** if either $k_l$ or $k_r$ is equal to $1$;
- **sparse** if both $k_l$ and $k_r$ are different from $1$.

Flat grouping resembles $k$-anonymity and captures at the same time the $\ell$-diversity property, but it works on associations and attributes’ values are not generalized. Sparse grouping guarantees larger applicability than ﬂat grouping,
with the same level of protection (there may exist a sparse grouping providing $k$-looseness but not a ﬂat grouping).

An example of flat grouping.

![[FlatGroupingExample.png|600]]

An example of sparse grouping.

![[SparseGroupingExample.png|600]]

----------------------------------------------------------------

###### Privacy vs utility
The publication of loose associations increases **data utility**. It makes it possible to evaluate queries more precisely than if only the fragments were published.

Increased utility corresponds to a greater exposure of information (**lower privacy degree**).

----------------------------------------------------------------

###### Association exposure
The exposure of a sensitive association $\langle l[c \cap F_l]$, $r[c \cap F_r] \rangle$, with $c$ a constraint covered by $F_l$, $F_r$, can be expressed as the probability of the association to hold in the original relation (given the published information). The increased exposure due to the publication of loose associations can be measured as the difference between:
- the probability $P^A( l[c \cap F_l]$, $r[c \cap F_r])$ that the sensitive association $\langle l[c \cap F_l]$, $r[c \cap F_r] \rangle$ appears in the original relation, given $f_l$, $f_r$, and $A$;
- the probability $P(l[c \cap F_l]$, $r[c \cap F_r])$ that the sensitive association $\langle l[c \cap F_l]$, $r[c \cap F_r] \rangle$ appears in the original relation, given $f_l$ and $f_r$.

----------------------------------------------------------------

###### Exposure without loose association
Given $l \in f_l$ and $r \in f_r$ the probability $P(l, r)$ that tuple $\langle l,r \rangle$ belongs to the original relation is $1/ \vert f_l \vert = 1/ \vert f_r \vert$.

![[ExposureWithoutLooseAssociation.png|600]]

Exposure $(P(l[c \cap F_l]$, $r[c \cap F_r]))$ depends on the presence of alike tuples. Let $l_i$, $l_j$ be two tuples in $f_l$ such that $l_i \simeq_c l_j$, $P(l_i [c \cap F_l]$, $r[c \cap F_r])$ is the composition of the probability that:
- $l_i$ is associated with $r$;
- $l_j$ is associated with $r$.

$$P(l_i, r) + P(l_j, r) − (P(l_i, r) \cdot P(l_j, r))$$

An example of exposure without loose association (the released tables are disjointed). The two tuples _56/12/9 - Rome_ collapse into one and also the tuples _diabetes_ and _gastritis_. The attribute _doctor_ isn't accounted because the constraint $c_3$ doesn't contan it. 

![[ExposureWithoutLooseAssociationExample.png|600]]

Given $l \in f_l$ and $r \in f_r$ the probability $P^A(l, r)$ that tuple $\langle l,r \rangle$ belongs to the original relation is at most $1/k$.

$P^A(l[c \cap F_l]$, $r[c \cap F_r])$ is evaluated considering the alike $\simeq_c$ relationship. Let $l_i$, $l_j$ in $f_l$ s.t. $l_i \simeq_c l_j$, $P^A(l_i [c \cap F_l]$, $r[c \cap F_r])$ is the composition of the probability that:
- $l_i$ is associated with $r$;
- $l_j$ is associated with $r$.

$$P^A(l_i, r) + P^A(l_j, r) − (P^A(l_i, r) \cdot P^A(l_j, r))$$

Another example of exposure with loose association. The first table shown is the one referring to the case without loose association while the second one is the starting table referring to the exposure with loose association. Starting one because we still have to evaluate the exposure of the tuples with more than one occurrence.

![[ExposureWithLooseAssociation1Example1.png|600]]

![[ExposureWithLooseAssociation1Example2.png|600]]

![[ExposureWithLooseAssociation1Example3.png|600]]

![[ExposureWithLooseAssociation1Example4.png|600]]

![[ExposureWithLooseAssociation1Example5.png|600]]

![[ExposureWithLooseAssociation1Example6.png|600]]

![[ExposureWithLooseAssociation1Example7.png|600]]

![[ExposureWithLooseAssociation1Example8.png|600]]

![[ExposureWithLooseAssociation1Example9.png|600]]

----------------------------------------------------------------

###### Measuring privacy and utility
- **Utility**: average over the variation of probability $\vert P^A (l[c \cap F_l],$ $r[c \cap F_r]) − P(l[c \cap F-l ]$, $r[c \cap F_r]) \vert$ for each sensitive association $\langle l[c \cap F_l]$, $r[c \cap F_r] \rangle$. It is measured also in terms of the precision in responding to queries;
- **privacy**: in addition to the $k$-loose degree, an exposure threshold $\delta_{max}$ could be speciﬁed. Given a threshold $\delta_{max}$, $A$ can be published if $\delta_{max} \geq (P^A (l[c \cap F_l]$, $r[c \cap F_r]) − P(l[c \cap F_l]$, $r[c \cap F_r]))$ for all sensitive associations $\langle l[c \cap F_l]$, $r[c \cap F_r] \rangle$.

An example of measuring utility.

![[MeasuringUtilityExample1.png|600]]

![[MeasuringUtilityExample2.png|600]]

![[MeasuringUtilityExample3.png|600]]

----------------------------------------------------------------

###### Experimental evaluation
Considered Census data (IPUMS-USA, http://www.ipums.org). Evaluated queries of the form:
- SELECT FROM WHERE returning a COUNT aggregation function;
- WHERE condition $\bigwedge_{i = 1}^{n} (\bigvee_{j = 1}^{m} a_i = v_{i_j})$.

Evaluated precision of queries. Evaluated impact of $k$, $k_l$, and $k_r$ on query precision.

The results of experimental evaluation.

![[ExperimentalEvaluationResults.png]]

Precision in query evaluation progressively decreases as $k$ increases. The critical parameter in the conﬁguration is the overall privacy degree $k$, rather than individual values of $k_l$ and $k_r$.

----------------------------------------------------------------

###### Summary of contributions
Novel approach to the problem of protecting privacy when publishing data. Generic setting of the privacy problem that explicitly takes into consideration both privacy needs and visibility requirements.Deﬁnition of loose associations for increasing data utility while preserving a given degree of privacy.

Some open issues are:
- schema vs. instance constraints and visibility requirements;
- data dependencies not captured by conﬁdentiality constraints;
- external knowledge;
- support for different kinds of queries;
- different metrics to measure privacy and utility.

----------------------------------------------------------------

# Privacy and integrity of queries and computations

![[PrivacyAndIntegrityOfQueriesAndComputations.png|500]]

## Access and pattern confidentiality
Guaranteeing privacy of outsourced data entails protecting the confidentiality of the data (content confidentiality) as well as of the accesses to them:
- **access confidentiality**: confidentiality of the fact that an access aims at a specific data;
- **pattern confidentiality**: confidentiality of the fact that two accesses aim at the same data.

### Approaches for protecting data accesses
- **Private Information Retrieval** (**PIR**) proposals;
- **oblivious traversal of tree-structured data/indexes**;
- **pyramid-shaped database layout of Oblivious RAM**;
- **path ORAM protocol**, working on a tree structure;
- **ring ORAM,** variation of Path ORAM with better performance and same protection guarantees;
- **shuffle index** based on the definition of a $B+$-tree structure with dynamic allocation of data.

#### Path ORAM
Server side:
- binary tree structure with $L$ levels ($L = \lceil \log_2{(N)} − 1\rceil$, with $N$ the number of blocks);
- each node in the tree is a **bucket** that contains up to $Z$ real blocks (padded with **dummy blocks**);
- each leaf node $x$ defines a unique path $P(x)$ from $x$ to the root.

Client side:
- the client locally stores a small number of blocks in a **stash** (kinda like a local cache);
- the client stores a position map: $x = position[a]$ means that a block identified by $a$ is currently mapped to the $x$-th leaf node $\to$ block $a$ (if it exists) resides in some bucket in path $P(x)$ or in the stash;
- The position map changes every time blocks are accessed and remapped.

The main invariant are that at any time:
- each block is mapped to a uniformly random leaf bucket in the tree;
- unstashed blocks (the ones that are not stored locally) are always placed in some bucket along the path to the mapped leaf.

The path ORAM reads and writes are managed in the following way:
1) **remap block**: let $x$ be the old position of $a$. Randomly remap the position of $a$ to a new random position (a new leaf node);
2) **read path**: read nodes in $P(x)$ containing $a$. If the access is a write, update the data stored for block $a$;
3) **write path**: write the nodes in $P(x)$ back possibly including some additional blocks from the stash if they can be placed into the path (i.e., the main invariant is satisfied).

An example of Path ORAM.

![[PathORAMExample1.png|600]]

![[PathORAMExample2.png|600]]

![[PathORAMExample3.png|600]]

----------------------------------------------------------------

#### Ring ORAM
Variation of Path ORAM that reduces the online access bandwidth to $\mathcal{O}(1)$ and the overall bandwidth to $\sim 2 − 2.5\log{(N)}$.<br />
Same server-side structure as Path ORAM but each node has:
- $S$ additional dummy blocks;
- a small **map** of the offsets of its blocks;
- a counter of accesses.

Protocol:
- remap (step $1$) is the same as Path ORAM;
- read path (step $2$) is revised to download only one block per bucket;
- write path (step $3$) is factorized among multiple access operations (eviction phase).

----------------------------------------------------------------

#### Path ORAM and Ring ORAM: Pros and cons
Path ORAM and Ring ORAM provide access and pattern confidentiality same protection guarantees as ORAM (no inferences). The advantages are:
- much more efficient than ORAM $\to$ more applicable in practice;
- limited access time.

However:
- range queries are not supported;
- accesses by multiple clients are not supported;
- vulnerable to failures of the client;
- $\sim 2 − 2.5\log{(N)}$ overall bandwidth overhead with regard to non protected accesses.

----------------------------------------------------------------

## Shuffle Index
### Shuffle index data structure
Data are indexed over a candidate key $K$ and organized client-side as an **unchained** $B+$-tree with fan out $F$ (the max capacity of a node). Unchained means that there are no links between leafs and, in this case, having chained leafs would leak information regarding the order of the data.<br />
Data are stored in the leaves in association with their index values. Accesses to the data (searches) are based on the value of the index.

Node structure:
- $q \geq \lceil F/2 \rceil$ children with $q − 1$ values $v_1 \leq ... \leq v_{q−1}$ (every node must be filled at least halfway);
- $i$-th child is the root of a subtree containing the values $v$ with: $v < v_1$ (for the children of the first ); $v_{i−1} \leq v < v_i, i = 2, ..., q − 2$; $v \geq v_{q−1}$.

An example of the abstract representation of shuffle index.

![[AbstractRepresentationOfShuffleIndexExample.png|600]]

----------------------------------------------------------------

### Logical representation of shuffle index
Pointers between nodes of the abstract data structure correspond, at logical level, to node identifiers. Set of pairs $\langle id, n \rangle$, with _id_ the node identifier and $n$ the node content. The order between identifiers does not necessarily correspond to the order in which nodes appear in the abstract representation.

An example of the abstract and logical shuffle index.

![[AbstractAndLogicalShuffleIndexExample.png|600]]

----------------------------------------------------------------

### Physical representation of shuffle index
Each node $\langle id, n \rangle$ of the logical shuffle index is stored on the server in encrypted form (**content confidentiality**). A node $\langle id, n \rangle$ corresponds to a block $\langle id, b \rangle$, with $b= \mathcal{C} \Vert \mathcal{T}$ (the concatenation of a encrypted block and a sign), $\mathcal{C} =E_k (s \Vert n)$ (encrypted with a random salt), $T=MAC_{k'} (id \Vert \mathcal{C})$ (signing the enrypted content with the identifier), $s$ a value chosen at random during each encryption (salt).

An example of the logical and physical shuffle index.

![[LogicalAndPhysicalShuffleIndexExample.png|600]]

----------------------------------------------------------------
### Data accesses
Access to the data requires an iterative process between the client and the server. The client performs an iteration for each level of the shuffle index starting from the root. At each iteration, the client:
- decrypts the retrieved block;
- determines the block to be retrieved from the server at the next level.

The process ends when a leaf block is retrieved.

An example of data accesses.

![[DataAccessesExample1.png|600]]

![[DataAccessesExample2.png|600]]


![[DataAccessesExample3.png|600]]

![[DataAccessesExample4.png|600]]

![[DataAccessesExample5.png|600]]

![[DataAccessesExample6.png|600]]

![[DataAccessesExample7.png|600]]

![[DataAccessesExample8.png|600]]

![[DataAccessesExample9.png|600]]

----------------------------------------------------------------

### Knowledge of the observer (server)
The server receives a set of blocks to store. The server receives requests to access the blocks that translate into **observations**, where an observation $o_i$ corresponds to a sequence of blocks $\{b_{i1}, ..., b_{ih}\}$.

The server knows or can easily infer:
- the number $m$ of blocks and their identifiers;
- the height $h$ of the shuffle index (when the user stops after $n$ readings, the server is able to infer that $n$ is the height of the tree);
- the level associated with each block (after the observation of a long history of accesses).

Problem statement: given a sequence of observations $\{o_1, ..., o_z\}$, the server should not be able to infer:
- the data stored in the shuffle index (**content confidentiality**);
- the data to which access requests are aimed, that is, $\forall i = 1, ..., z$. the server should not infer that $o_i$ aims at a specific node (**access confidentiality**);
- $o_i$ aims at accessing the same node as $o_j$, $\forall i, j = 1, ..., z, i \neq j$ (**pattern confidentiality**).

Is encryption enough? It protects:
- content confidentiality of data at rest;
- access confidentiality of individual requests.

However, access and pattern confidentiality are not provided. Accesses to the same blocks imply accesses to the same data $\to$ frequency-based attacks allow the server to reconstruct the correspondence between plaintext values and blocks.

The rationale of the approach is to destroy the correspondence between the frequencies with which blocks are accessed and the frequencies of accesses to different values.

Combine three strategies:
- **cover searches**, which provide confusion in individual accesses;
- **cached searches**, which allow protection of accesses to the same values;
- **shuffling**, which dynamically changes node allocation to blocks at every access, so destroying the fixed node-block correspondence.

#### Cover searches
Introduce confusion on the target of an access by hiding it within a group of other requests that act as covers. The number of covers (_num_cover_) is a protection parameter.

Cover searches must:
- provide **block diversity** (i.e., on a path disjoint from the target searched, apart from the root);
- be indistinguishable from actual searches (i.e., enjoy a believable frequency of access).

An example of cover searches.

![[CoverSearchesExample.png|600]]

Protection offered by cover searches:
- leaf blocks have the same probability of containing the actual target, e.g., blocks $201$ and $207$ can be both the target block;
- the parent-child relationship between accessed blocks is confused, e.g., block $201$ could be child of either $101$ or $103$.


However, parent-child relationship can be disclosed by intersection attacks.

Another example of cover searches.

![[CoverSearchesExample2.png|600]]

An example of an intersection attack on cover searches. The observer can intersect the two observations and notice that block $207$ is accessed both times.

![[CoverSearchesIntersectionAttack1.png|600]]

![[CoverSearchesIntersectionAttack2.png|600]]

![[CoverSearchesIntersectionAttack3.png|600]]

----------------------------------------------------------------

#### Cached searches
The client maintains a local **cache** of nodes in the path to the target for counteracting intersection attack:
- initialized with _num_cache_ disjoint paths and is managed according to the Least Recently Used policy;
- if a node is in cache, its parent also is (**path continuity property**). The opposite is not possible (if a parent is in cache, the sons also are) because the root is always in cache and, therefore, all the tree would be;
- refreshed at every access;
- recently searched nodes will be found in the cache;
- if a target node is in cache, only cover searches will be performed:
	- provides fake observations for the server;
	- allows (with shuffling) refreshing the cache.

An example of cached searches.

![[CachedSearches1Example1.png|600]]

![[CachedSearches1Example2.png|600]]

![[CachedSearches1Example3.png|600]]

![[CachedSearches1Example4.png|600]]

![[CachedSearches1Example5.png|600]]

![[CachedSearches1Example6.png|600]]

Another example of cached searches.

![[CachedSearches2Example1.png|600]]

![[CachedSearches2Example2.png|600]]

![[CachedSearches2Example3.png|600]]

![[CachedSearches2Example4.png|600]]

No intersection attack on cached searches.

![[CachedSearchesNoIntersectionAttack.png|600]]

Protection offered by cached searches:
- caching helps in counteracting short term intersection attacks, e.g., the observations of the server on the two previous requests would be $\{(001); (101,103); (201,207)\}$ and $\{(001); (102,104); (208,211)\} \to$ the server would not be able to determine whether the two requests aim at the same target;
- caching does not prevent intersection attacks on observations that go beyond the size of the cache;
- a long history of observations will allow the server to reconstruct the topology (**parent-child relationship**) of the shuffle index.

----------------------------------------------------------------

#### Shuffling
Shuffling breaks the one-to-one correspondence blocks-nodes by exchanging the content among nodes (and therefore blocks). Shuffling requires node decryption and re-encryption. Encrypted text corresponding to a given node changes at each access (different node identifier and salt).<br />
The contents of all blocks read in the execution of an access and the nodes in cache are exchanged.

The shuffled blocks are rewritten back on the server $\to$ node shuffling at a given level requires to update the parents of the nodes.

An example of shuffling.

![[ShufflingExample1.png|600]]

![[ShufflingExample2.png|600]]

##### Access execution and shuffle index management
Let $v$ be the target value. Determine _num_cover_$+1$ cover values and for each level $l$ of the shuffle index:
- determine the identifiers (_ToRead_ids_) of the blocks in the path to $v$ and cover values;
- if the node in the path to $v$ does not belong to $Cache_l$ (cache miss), only _num_cover_ cover searches are performed;
- send to the server a request for the blocks with identifier in _ToRead_ids_ and decrypt their content (set Read of nodes);
- shuffle nodes in Read and in $Cache_l$ according to a permutation $\pi$;
- update the pointers of the parents of the shuffled nodes;
- update $Cache_l$ by inserting the most recently accessed node in the path to $v$ (only if a cache miss occurred).

An example of access execution.

![[AccessExecutionExample1.png|600]]

![[AccessExecutionExample2.png|600]]

![[AccessExecutionExample3.png|600]]

![[AccessExecutionExample4.png|600]]

![[AccessExecutionExample5.png|600]]

![[AccessExecutionExample6.png|600]]

![[AccessExecutionExample7.png|600]]

![[AccessExecutionExample8.png|600]]

![[AccessExecutionExample9.png|600]]

![[AccessExecutionExample10.png|600]]

Impact on the logical index of access execution. 

![[AccessExecutionImpactOnTheLogicalIndex.png|600]]

----------------------------------------------------------------

### Protection analysis
- **Degradation due to shuffling**: shuffling degrades any information the server may possess on the correspondence between nodes and blocks;
- **access confidentiality**: every time an access is performed any information on the specific access has to be divided among _num_cover_$+1$ nodes and shuffling destroys the correspondence nodes-blocks;
- **pattern confidentiality**: accesses separated by a significant number of steps cannot be recognized (shuffling):
	- protection by covers and cache (**short term**);
	- protection by covers and shuffling (**long term**).

#### Protection vs performance
Protection comes at a cost:
- one read access implies _num_cover_$+$_num_cache_$+1$ writes back to the server;
- better performance with respect to Path ORAM;
- no solution providing support for access and pattern confidentiality offers comparable performance (even in a WAN configuration).

### Extensions to the shuffle index
The shuffle index can be extended to efficiently:
 - support concurrent accesses (delta versions);
 - operate on multiple servers for storing and accessing data (shadows).

----------------------------------------------------------------

# Domande esame

1) Introdurre access e pattern confidentiality e spiegare shuffle index con cover searches, cached searches e shuffling facendo disegni per spiegare.
2) Encryption per proteggere la confidenzialità dei dati con enfasi su indicizzazione (e.g. diretta), vantaggi e svantaggi.
3) Data fragmentation: alcune tecniche (non communicating pair of servers, multiple non linkable fragments, keep a few) e come si frammentano. Parlare di visibility requirements.
4) Frammentazione multiple non linkable fragments: con quasi identifiers, associazioni da spezzare e anche dipendenze.




