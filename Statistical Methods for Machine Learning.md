# Introduction
**Data inference** is the study of methods that use data from the past for making predictions about the future. **Machine learning** is a powerful tool that can be used to solve a wide range of data inference problems, including the ones listed below:
- **clustering**: grouping data points according to their similarity (e.g., clustering customers according to their consumer profiles);
- **prediction**: assigning semantic labels to data points (e.g., classifying documents based on their topics);
- **control**: performing a sequence of actions in an environment in order to maximize a notion of utility (e.g., using a robot to map an unknown terrain).

[[Algoritmo |Algorithms]] that solve a [[Intelligenza Artificiale#Training delle ANN |learning task]] based on semantically annotated historical data (e.g., documents annotated with their topic or images annotated with the objects they contain) are said to operate in a **supervised learning mode**. In contrast, algorithms that use data without any semantic annotation are said to operate in an **unsupervised learning mode**. Finally, algorithms that combine both the previous modes are said to operate in a **reinforcement learning mode**. The focus of this course is on supervised learning and study the design of machine learning systems whose goal is to learn predictors, i.e., functions that map data points $x$ to their labels $y$. Once learned, these functions can be used to categorize documents or images, predict the future price of a stock based on the current market data, diagnose a disease based on a patient’s medical record, and so on.

## Label sets
It is common to use $\mathcal{Y}$ to denote the set of all possible labels for a data point of a given learning problem. Note that labels can be of two different types: **categorical labels**, like the topics of a document, and **numerical labels**, like the price of a stock or the demand for a product. Categorical labels define **classification** problems, where labels sets $\mathcal{Y}$ are typically finite and small (such as $\mathcal{Y} = \{\text{sport, politics, business}\}$ for document topics). Numerical labels define **[[Intelligenza Artificiale#Regressione |regression]]** problems, where label sets $\mathcal{Y} \subseteq \mathbb{R}$ are typically infinite.

As it is always possible to map symbols to numbers, it is needed to specify more precisely how regression differs from classification. In regression, prediction mistakes are typically a function of the difference $|y−\widehat{y}|$, where $y$ is the "true" label and $\widehat{y}$  is the prediction for it. In classification, mistakes are typically binary: either $\widehat{y} = y$ (no mistake) or $\widehat{y} \neq y$ (mistake). This happens because the label set in a classification task is an abstract set of symbols (irrespective to whether we encode the symbols using numbers) without a natural notion of distance between them. When $|\mathcal{Y}| = 2$, for example $\mathcal{Y} = \{\text{healthy, sick}\}$, it is a **binary classification** problem, and conventionally use the numerical encoding $\mathcal{Y} = \{−1,1\}$.

----------------------------------------------------------------

## Loss functions
In order to measure the goodness of a prediction for a prediction task we use a nonnegative **loss function** $\ell$, measuring the discrepancy $\ell(y,\widehat{y})$ between the predicted label $\widehat{y}$  and the correct label $y$. We always assume that $\ell(y,\widehat{y}) = 0$ when $\widehat{y} = y$. The simplest loss function for classification is the **zero-one loss**:

$$\ell(y, \widehat{y}) = \cases{0 \quad \text{ if }
 \widehat{y} = y \cr \cr 1 \quad \text{otherwise.}}$$

In certain cases, more complex classification losses are needed.<br />
Consider the problem of categorizing spam email using the label set $\mathcal{Y} = \{\text{spam, nonspam}\}$. It is possible to penalize a **false positive mistake** (i.e., a nonspam email wrongly classified as spam) more than a **false negative mistake** (i.e., a spam email wrongly classified as nonspam). For example:

$$\ell(y, \widehat{y}) = \cases{2 \quad \text{ if }
 y  = \text{nonspam and }\widehat{y} = \text{spam,} \cr \cr 1 \quad \text{ if } y = \text{spam and } \widehat{y} = \text{nonspam,}\cr \cr 0 \quad \text{ otherwise.}}$$

In regression, typical loss functions are the **absolute loss** $\ell(y,\widehat{y} ) = |y−\widehat{y}|$ and the **quadratic loss** $\ell(y,\widehat{y}) = (y − \widehat{y})^2$. Note that these losses are only meaningful for numerical labels.

In some cases, it may be convenient to choose predictions from a set $\mathcal{Z}$ different from the label set $\mathcal{Y}$. For example, consider the problem of assigning a probability $y  ∈ (0,1)$ to the event $y = \text{ “it will rain tomorrow”}$ (and, consequently, assigning probability $1 − y$  to the complementary event $y = \text{ “it will not rain tomorrow”}$). In this case, $\mathcal{Y} = \text{\{“rain”, “no rain”\}}$ and $\mathcal{Z} = (0,1)$. Denoting these two events with $1$ (for rain) and $0$ (for no rain), we may use a loss function for regression, such as the absolute loss $\ell(y,\widehat{y}) = |y− \widehat{y}| \in (0,1)$. In order to extend the range of the loss function, so to punish more harshly predictions that depart too much from reality, it is possible to use instead the **logarithmic loss**,

$$\ell(y, \widehat{y}) = \cases{\ln\frac{1}{\widehat{y}} \quad \text{ if }
y = 1 \text{ (rain) }\cr \cr \ln\frac{1}{1-\widehat{y}} \quad \text{ if } y = 0 \text{ (no rain ).}}$$

Unlike the absolute loss, the logarithmic loss may take arbitrarily high values.

![[logarithmic_loss.png]]

In the figure, it is possible to observe the logarithmic loss function $\ell(1,\widehat{y}) = \ln \frac{1}{\widehat{y}}$ (blue curve) and absolute loss function $\ell(1,\widehat{y}) = |1 − \widehat{y}|$ (red line) for the case $y = 1$. In particular, we have $\lim_{y →0^+} \ell(1,\widehat{y}) = \lim_{y →1^−} \ell(0,\widehat{y}) = \infty$.

In practice, this fact prevents the predictor from using predictions $\widehat{y}$ that are too certain, namely too close to zero or one.

----------------------------------------------------------------

## Data domain
The symbol $\mathcal{X}$ denote the set of all possible data points for a given learning problem. Each data point $x$ is typically stored as a database record. In many interesting cases, data can be encoded as vectors of real numbers. Such a vector representation is natural whenever the data consist of a set of homogeneous quantities, such as pixels in an image or word frequencies in a document. The standard Euclidean geometry then works well because all coordinates use the same unit of measurement. In these cases, it is hopeful that the semantic information carried by the labels be reflected in the geometrical relationships between data points (e.g., in a classification task data points with the same label are close to each other in terms of their Euclidean distance).

In other cases, a vector space representation may not be that natural. For example, the values in the fields of a medical record may use different units, such as age and height, or even be categorical, such as sex. Using rescaling and other techniques (like binary encoding) for dealing with categorical quantities, it is possible to provide a homogenenous vector space representation to most types of data. However, the geometrical properties of these vectors might not be well correlated to their labels.

In this course, it is often assumed that data can be represented as vectors of numbers, namely $\mathcal{X} \equiv \mathbb{R}^d$. Irrespective of whether $\mathcal{X} \equiv \mathbb{R}^d$ or $\mathcal{X} \equiv \mathcal{X}_1 \times ··· \times \mathcal{X}_d$ for some arbitrary sets $\mathcal{X}_1,..., \mathcal{X}_d$, given a data point $x = (x_1,...,x_d)$, it is said that $x_i$ is the value of the $i$-th feature or attribute.

----------------------------------------------------------------

## Predictor
A **predictor** is a function $f : \mathcal{X} \to \mathcal{Y}$ mapping data points to labels (or $f : \mathcal{X} \to \mathcal{Z}$ if the predictions belong to a set $\mathcal{Z}$ different from $\mathcal{Y}$). Informally speaking, in a prediction problem the goal is to learn a function $f$ that generates predictions $\widehat{y} = f(x)$ such that $\ell(y,\widehat{y})$ is small for most data points $x \in \mathcal{X}$ observed in practice. In practice, the function $f$ is represented by a certain choice of parameters in a certain model. For examples, a certain setting of the weights of a neural network.

----------------------------------------------------------------

## Example
In supervised learning, an **example** is a pair $(x,y)$ where $x$ is a data point and $y$ is the “true” label associated with $x$. In some cases, there is a unique true label for $x$. This happens when $y$ measures some objective property of the data point; for example, $y$ is the closing price of a stock on a certain day. In some other cases, the label $y$ is subjectively assigned by a human annotator; for example, the genre of a movie. Clearly, different annotators may have different opinions about a movie’s genre, implying that the same data point may occur with different “true” labels.

In order to estimate the predictive power of a predictor it is typically used a **test set**. This is a set of examples $(x_1′ ,y_1′ ),..., (x_n′ ,y_n′ )$. Technically, it is a multiset because some examples may occur more than once. However, treating datasets as multisets complicates the notation. For this reason, and without much loss of generality, datasets will be mostly viewed as sets in the standard mathematical acception. Given a loss function $\ell$, the test set is used to compute the **test error**   of a predictors $f$,

$$ \frac{1}{n}\sum_{t = 1}^{n}\ell(y'_t, f({\mathbf{x}}'_t))$$

The test error is meant to estimate the **average performance** of the predictor on typical real-world data.

A **learning algorithm** receives a **training set** as input and outputs a predictor. A training set is a set of examples $\{(x_1,y_1), ..., (x_m,y_m)\}$. Training and test set are often prepared together, through a single round of data collection and annotation. Partitioning the examples in training and test data is done afterward, typically using a random split. The objective is to develop a theory to guide in the design of learning algorithms that generate predictors with low test error.

Since the only input to a learning algorithm is the training set $S \equiv (x_1,y_1),..., (x_m,y_m)$, a natural approach to the design of learning algorithms is to assume that the **training error** (or **empirical risk**)

$$\ell_s(f) = \frac{1}{m}\sum_{t=1}^{m}\ell(y_t, f(\mathbf{x}_t))$$

of a predictor be correlated to its test error.

----------------------------------------------------------------

## Empirical risk minimization
Let $\mathcal{F}$ be a given set of predictors and $\ell$ a loss function. The **empirical risk minimizer** (**ERM**) is the learning algorithm that outputs some predictors in $\mathcal{F}$ minimizing the training error

$$\widehat{f} \in \underset{f \in \mathcal{F}}{\operatorname{argmin}} \ell_{s}(f)$$

The $\widehat{f} \in$ notation takes into account the fact that there could be multiple $f \in \mathcal{F}$ minimizing the training error.

----------------------------------------------------------------

## Overfitting and underfitting
ERM obviously fails when no predictor in $\mathcal{F}$ has a low test error. This suggests the fact that it should be better to run ERM with a large $\mathcal{F}$, so that there is a good chance that a predictor with low test error exists in $\mathcal{F}$ .

On the other hand, choosing $\mathcal{F}$ large can also lead ERM to fail. To see this, assume $\mathcal{Y} \equiv \{−1,1\}$ and consider a toy problem with only five data points, $\mathcal{X} \equiv {x_1,..., x_5}$. Now, take some $\mathcal{F}$ containing a classifier $f : \{x_1,..., x_5\} \to \{−1,1\}$ for each of the $2^5 = 32$ possible binary labelings of the five data points, and suppose the training set contains any three points and the test set contains the two remaining ones. Now assume data labels $y_1,...,y_5$ are all assigned using some $f^* \in \mathcal{F}$, $y_t = f^*(x_t) \text{ for } t = 1,..., 5$. Clearly $f^*$ has zero training error and zero test error. However, with a training set of three points, ERM always finds four classifiers in $\mathcal{F}$ that have zero training error. Of these four classifiers with zero training error, only one (i.e., $f^*$) has also zero test error. But the training set does not contain enough information to help ERM select this classifier.

The problem in the previous example is that $\mathcal{F}$ is too large with respect to the training set. Information theory says that there are needed $\log_2 |\mathcal{F}| = 5$ bits of information to identify $f^* \in \mathcal{F}$. Indeed, $f^*$ is determined by the five labels $f^*(x_1), ..., f^*(x_5)$. This is telling us that the training set should contain at least $\log_2|\mathcal{F}|$ distinct data points. Equivalently, $|\mathcal{F}|$ should be smaller than $2^m$, where $m$ is the training set size.

it is possible to give specific names to these two ways of failing (i.e., returning a predictor with high test error) for a generic learning algorithm $A$:
- if $A$ fails by returning predictors with high training error, then we say that $A$ is **underfitting**;
- if $A$ fails by returning predictors with low training error, then we say that $A$ is **overfitting**.

When $A$ is ERM and the training set size $m$ is fixed, the information-theoretic argument says that overfitting is expected when $\log_2|\mathcal{F}| \gg m$. Vice versa, when $|\mathcal{F}|$ is too small, underfitting is expected as soon as the training set satisfies $m \gg \log_2 |\mathcal{F}|$.

----------------------------------------------------------------

## Noisy labels
Overfitting often arises when labels are **noisy**. Namely, when labels $y$ are not deterministically associated with data points $x$, like in the previous example where $y_t = f^*(x_t)$.<br />Noise may occur for at least three (not mutually exclusive) reasons:
1) **human in the loop**: the labels are assigned by a human annotator who decides the “true” label for each data point. In this case, different annotators may have different opinions;
2) **epistemic uncertainty**: each data point is represented by a feature vector $x$ that does not contain enough information to uniquely determine the label. For example, suppose $x$ encodes measurements such as today’s temperature, pressure, humidity, whereas $y \in \{−1,1\}$ denotes whether tomorrow rains or not. It is quite possible that the same observed values lead to rain in some cases and to sun in other cases;
3) **aleatoric uncertainty**: the feature vector $x$ representing a data point is obtained through noisy measurements. The label associated with a given $x$ is then stochastic because the same $x$ could have been generated by different data points.

Noisy labels cause overfitting because they may mislead the algorithm with regard to what is the “true” label for a given data point.

----------------------------------------------------------------

# The Nearest Neighbour algorithm
It will now be introduced a concrete learning algorithm for classification. This algorithm differs from ERM because it is not minimizing the training error in a given class of predictors (because the training error will always be $0$). For now, the attention will be restricted to binary classification tasks with numerical features, namely $\mathcal{X} = \mathbb{R}^d$ and $\mathcal{Y} = \{−1,1\}$. Given a training set, the classifier generated by this algorithm is based on the following simple rule: predict every point in the training set with its own label, and predict any other point with the label of the point in the training set which is the closest to it.<br />
More formally, given a training set $S \equiv \{(x_1,y_1),..., (x_m,y_m)\}$ , the **nearest neighbour algorithm** (**$NN$**) generates a classifier $h_{NN} : \mathbb{R}^d \to \{−1,1\}$ defined by:

$$h_{NN}(x) = \text{ label } y_t \text{ of the point } x_t \in S \text{ closest to } x$$

If there is more than one point in $S$ with smallest distance to $x$, then the algorithm predicts with the majority of the labels of these closest points. If there is an equal number of closest points with positive and negative labels, then the algorithm predicts a default value in $\{−1,1\}$ (for instance, the most frequent label in the training set).

Note that $h_{NN}(x_t) = y_t$ for every training example $(x_t,y_t)$. The distance between $x = (x_1,...,x_d)$ and $x_t = (x_{t,1},...,x_{t,d})$, denoted by $∥x − x_t∥$, is computed using the Euclidean distance:

$$ \Vert x − x_t \Vert= \sqrt{\sum_{i = 1}^{d}(x_i − x_{t,i})^2}$$

The classifier generated by $NN$ induces a partition of $\mathbb{R}^d$ in Voronoi cells, where each training instance $x_t$ (here called a **center**) is contained in a cell, and the border between two cells is the set of points in $\mathbb{R}^d$ that have equal distance from the two cell centers.

![[voronoi_diagram.png]]

In figure, the Voronoi diagram for a training set in $\mathbb{R}^2$.

As $NN$ typically stores the entire training set, the algorithm does not scale well with the number $\vert S \vert = m$ of training points. Moreover, given any test point $x$, computing $h_{NN}(x)$ is costly, as it requires computing the distance between $x$ and every point of the training set, which in $\mathbb{R}^d$ takes time $\Theta(dm)$ (shorter running times are possible when distances are approximated rather than being computed exactly). Finally, note that $NN$ always generates a classifier $h_{NN}$ such that $\ell _S(h_{NN}) = 0$. This is not surprising because, as we already said, $NN$ stores the entire training set.

Starting from $NN$, we can obtain a family of algorithms denoted by $k-{NN}$ for $k = 1,3,5,...$, where $k$ cannot be taken larger than the size of the training set. These algorithms are defined as follows: given a training set $S = \{(x_1,y_1),..., (x_m,y_m)\}$ , $k-NN$ generates a classifier $h_{k−NN}$ such that $h_{k−NN}(x)$ is the label $y_t \in \{−1,1\}$ appearing in the majority of the $k$ points $x_t \in S$ which are closest to $x$. Just like in the case of $1-NN$, there could be training points at the same distance from $x$ such that more than $k$ points are closest to $x$. In this case it is possible to proceed by ranking the training points based on their distance from $x$ and then taking the $k'$ closest points where $k'$ is the smallest integer bigger or equal to $k$ such that the $(k' +1)$-th point in the ranking has distance from $x$ strictly larger that the $k'$-th point. If no such $k'$ exists, then all the points must be taken in the training set. If $k'$ is strictly bigger than $k$, is even and there is an equal number of closest points with positive and negative labels, then the algorithm predicts a default value in $\{−1,1\}$.<br />
Hence, in order to compute $h_{k−NN}(x)$, the following operations are performed:
1) find the $k$ training points $x_{t_1} ,..., x_{t_k}$ closest to $x$. Let $y_{t_1} ,...,y_{t_k}$ be their labels;
2) if the majority of the labels $y_{t_1} ,...,y_{t_k}$ is $+1$, then $h_{k−NN}(x) = +1$; if the majority is $−1$, then $h_{k−NN}(x) = −1$.

Note that, for each $k \geq 1$ and for each $x_t$ in the training set, $x_t$ is always included in the $k$ points that are closest to $x_t$.

![[hknn.png]]

In figure, the plot of the $h_{k−NN}$ classifier for $k = 1,3,5$ on a $1$-dimensional training set. As $k$ increases, the classifier becomes simpler and the number of mistaken points in the training set increases.

It is important to note that, unlike $1-NN$, in general we have that $\ell_{S}(h_{k−NN}) > 0$. Moreover, as $k$ grows, the classifiers generated by $k-NN$ become simpler. In particular, when $k$ is equal to the size of the training set, $h_{k−NN}$ becomes a constant classifier that always predicts the most common label in the training set.

![[trend_training_error.png]]

The figure above shows the typical trend of training error (orange curve) and test error (blue curve) of the $k-NN$ classifier for increasing values of the parameter $k$ on a real dataset (Breast Cancer Wisconsin) for binary classification with zero-one loss. Note that the minimum of the test error is attained at a value corresponding to a $h_{k−NN}$ classifier with training error generally bigger than zero. The learning algorithm suffers from high test error for small values of $k$ (overfitting) and for large values of $k$ (underfitting).

In addition to binary classification, $k-NN$ can be used to solve multiclass classification problems (where $\mathcal{Y}$ contains more than two symbols) and also regression problems (where $\mathcal{Y} = \mathbb{R}$). In the first case, we operate like in the binary case and predict using the label corresponding to the majority of the labels of the $k$ closest training points. In the second case, the prediction is the average of the labels of the $k$ closest training points.

----------------------------------------------------------------

# Tree Predictors
As it was already said, while certain types of data (like images and texts) have a natural representation as vectors $x \in \mathbb{R}^d$, others (like medical records and other structured data) do not. For example, consider a problem of medical diagnosis, where data consist of medical records containing the following fields:

$$age \in \{12, ...,90\} $$
$$smoker \in \{yes,no,ex\}$$
$$weight \in [10,120]$$$$sex \in \{M,F\}$$
$$therapy \in \{antibiotics,cortisone,none\}$$

Even if we compute rescaled numerical representations for the features (including the categorical fields _smoker_ and _sex_), algorithms based on Euclidean distance like $k-NN$ may not work well.

In order to learn data whose features vary in heterogeneous sets $\mathcal{X}_1, ..., \mathcal{X}_d$ (i.e., sets with incomparable ranges, including ranges corresponding to categorical variables), a new family of predictors will be introduced: the **tree predictors**.

A tree predictor has the structure of an **ordered and rooted [[Albero |tree]]** where each node is either a **leaf** (if it has zero children) or an **internal node** (if it has at least two children). Recall that an ordered tree is one where the children of any internal node are numbered consecutively. Hence, if the internal node $v$ has $k \geq 2$ children, it is possible to access the first child, the second child, and so on until the $k$-th child.

![[tree_classifier_example.png]]

In the figure, it is possible to see a classical example of a tree classifier for a binary classification task. The features are: outlook, humidity e windy.

Fix $\mathcal{X} = \mathcal{X}_1 \times ... \times \mathcal{X}_d$, where $\mathcal{X}_i$ is the range of the $i$-th attribute $x_i$. A **tree predictor** $h_T : \mathcal{X} \to \mathcal{Y}$ is a predictor defined by a tree $T$ whose internal nodes are tagged with **tests** and whose leaves are tagged with **elements** (or **labels**) in $\mathcal{Y}$. A test on attribute $i$ for an internal node with $k$ children is a function $f : \mathcal{X}_i \to \{1, ..., k\}$. The function $f$ maps each element of $\mathcal{X}_i$ to the node children. For example, if $\mathcal{X}_i \equiv \{a,b,c,d\}$ and $k = 3$, then $f$ could be defined by

$$f(x_i) = \cases{1 \quad \text{ if }
x_i = c, \cr \cr 2 \quad \text{ if } x_i = d, \cr \cr 3 \quad \text{ if } x_i \in \{a, b\}}$$

An example with $\mathcal{X}_i = \mathbb{R}$ and $k = 3$ is the following

$$f(x_i) = \cases{1 \quad \text{ if }
x_i \in (-\infty, \alpha], \cr \cr 2 \quad \text{ if } x_i \in (\beta, +\infty)\, \cr \cr 3 \quad \text{ if } x_i \in (\alpha, \beta]}$$

where $\alpha < \beta$ are arbitrary values.

The prediction $h_T(x)$ is computed as follows. Start by assigning $v \leftarrow r$, where $r$ is the root of $T$;
1) if $v$ is a leaf $\ell$, then stop and let $h_T(x)$ be the label $y \in \mathcal{Y}$ associated with $\ell$;
2) otherwise, if $f : \mathcal{X}_i \to \{1, ..., k\}$ is the test associated with $v$, then assign $v \leftarrow v_j$, where $j = f(x_i)$ and $v_j$ denotes the $j$-th children of $v$;
3) go to step $1$.

If the computation of $h_T(x)$ terminates in leaf $\ell$, we say that the example $x$ is routed to $\ell$. Hence $h_T(x)$ is always the label of the leaf to which $x$ is routed.

How can a tree predictor be built given a training set $S$? For simplicity, we focus on the case of binary classication $\mathcal{Y} = \{-1, 1\}$ and we only consider complete binary trees, i.e., all internal nodes have exactly two children. The idea is to grow the tree classifier starting from a single-node tree (which must be a leaf) that corresponds to the classifier assigning to any data point the label that occurs most frequently in the training set (and the reason of that is, obviously, the existence of only one node and, therefore, only one possible label tagged to it). The tree is grown by picking a leaf (at the beginning there is only a leaf to pick) and replacing it with an internal node and two new leaves.

Suppose we have grown a tree $T$ up to a certain point, and the resulting classifier is $h_T$. We start by computing the contributions of each leaf to the training error $\ell_{S}(h_T)$ (recall that each $x$ is classified by some leaf, the leaf which $x$ is routed to). For each leaf $\ell$, define $S_\ell \equiv \{(x_t,y_t) \in S : x_t$ is routed to $\ell\}$. That is, $S_\ell$ is the subset of training examples that are routed to $\ell$. Define further two subsets of $S_\ell$, namely $S^+_\ell \equiv \{(x_t, y_t ) \in S_\ell : y_t = +1\}$ and $S^-_\ell \equiv \{(x_t, y_t) \in S_\ell : y_t = -1\}$.

For each leaf $\ell$, let $N^+_\ell = \vert S^+_\ell \vert$, $N^-_\ell = \vert S^-_\ell \vert$ and $N_\ell = \vert S_\ell \vert = N^+_\ell + N^-_\ell$. In order to minimize the training error $\ell_{S}(h_T)$, the label associated with $\ell$ must be:

$$y_\ell = \cases{+1 \quad \text{ if } N^+_\ell \geq N^-_\ell, \cr \cr -1 \quad \text{ otherwise.}}$$

Thus, $\ell$ errs on exactly $\operatorname{min}\{N^-_\ell, N^+_\ell\}$ training examples in $S_\ell$. Therefore, it is possible to write the training error as a sum of contributions due to all leaves

$$\widehat{\ell}(h) = \frac{1}{m}\sum_\ell min \Big\{ \frac{N^-_\ell}{N_\ell}, \frac{N^+_\ell}{N_\ell} \Big\} \cdot N_\ell = \frac{1}{m}\sum_{\ell}\psi \Big(\frac{N^+_\ell}{N_\ell}\Big)N_\ell$$

where we introduced the function $\psi(a) = \operatorname{min}\{a, 1 - a \}$ defined on $[0, 1]$. Recall that $(N^+_\ell + N^-_\ell )/ N_\ell = 1$, so the argument of $\psi$ is a number between zero and one. ``

![[tree_classifier_growth.png]]

In this figure it is possible to observe a step in the growth of a tree classifier: a leaf $\ell$ is replaced by an internal node $v$ and by two new leaves $\ell'$ and $\ell''$.

Suppose we replace a leaf $\ell$ in $T$ with an internal node, and its associated test, and two new leaves $\ell'$ and $\ell''$. Can the training error of the new tree be larger than the training error of $T$? To answer this question is sufficient to observe that $\psi$ is a concave function (just like the logarithm).<br />
We can then apply **Jensen's inequality**, stating that 

$$\psi(\alpha a + (1 -\alpha)b) \geq \alpha \psi (a) + (1 - \alpha) \psi (b) \quad \forall a, b \in \mathbb{R} \text{ and all } \alpha \in [0,1]$$

Hence, via Jensen's inequality, we can study how the training error changes when $\ell$ is replaced by two new leaves $\ell'$ and $\ell''$,

$$\underbrace{\psi \Big ( \frac{N^+_\ell}{N_\ell} \Big)N_\ell}_{\text{contribution of }\ell \text { to the training error}} = \psi \Big ( \frac{N^+_{\ell'}}{N_\ell} + \frac{N^+_{\ell''}}{N_\ell} \Big)N_\ell = \psi \Big ( \frac{N^+_{\ell'}}{N_\ell} \frac{N_{\ell'}}{N_{\ell'}} + \frac{N^+_{\ell''}}{N_\ell}\frac{N_{\ell''}}{N_{\ell''}} \Big)N_\ell = $$

At this point it is possible to apply Jensen's inequality:

$$= \psi \Big ( \text{ }\underbrace{\frac{N^+_{\ell'}}{N_{\ell'}}}_{a} \underbrace{\frac{N_{\ell'}}{N_\ell}}_{\alpha} + \underbrace{\frac{N^+_{\ell''}}{N_{\ell''}}}_{b} \underbrace{\frac{N_{\ell''}}{N_{\ell}}}_{1- \alpha} \text{ } \Big ) N_{\ell} \geq \psi \Big( \text{ }\underbrace{\frac{N^+_{\ell'}}{N_{\ell'}}}_{a} \text { }\Big) \underbrace{\frac{N_{\ell'}}{N_{\ell}}}_{\alpha}N_{\ell} + \psi \Big( \text{ } \underbrace{\frac{N^+_{\ell''}}{N_{\ell''}}}_{b} \text{ } \Big ) \underbrace{\frac{N_{\ell''}}{N_\ell}}_{1-\alpha} N_{\ell} =$$
$$= \underbrace{\psi \Big ( \frac{N^+_\ell}{N_\ell} \Big)N_\ell}_{\text{contribution of }\ell} \geq \underbrace{\psi \Big(\frac{N^+_{\ell'}}{N_{\ell'}} \Big )N_{\ell'}}_{\text{contribution of }\ell'} + \underbrace{\psi \Big ( \frac{N^+_{\ell''}}{N_{\ell''}}\Big )N_{\ell''}}_{\text{contribution of }\ell''} $$

meaning that a split never increases the training error (recall that $N_{\ell'}^+ + N_{\ell''}^+ = N_{\ell}^+$).

A leaf $\ell$ such that $N^+_{\ell} \in \{0, N_{\ell}\}$ is called **pure** because it does not contribute to the training error. Note that $\ell_S(h_T) > 0$ unless all leaves are pure.

We now describe a generic method to construct a binary tree given a training set $S$:
1) **initialization**: create $T$ with only the root $\ell$ and let $S_\ell = S$. Let the label associated with the root be the most frequent label in $S_\ell$;
2) **main loop**: pick a leaf $\ell$ and replace it with an internal node $v$ creating two children $\ell'$ (first child) and $\ell''$ (second child). Pick an attribute $i$ and a test $f : \mathcal{X}_i \to \{1,2\}$. Associate the test $f$ with $v$ and partition $S_\ell$ in the two subsets $S_{\ell '} = \{(x_t, y_t) \in S_{\ell} : f(x_{t, i}) = 1\}$ and $S_{\ell''} = \{(x_t, y_t) \in S_{\ell} : f(x_{t, i}) = 2\}$. Let the labels associated with $\ell'$ and $\ell''$ be, respectively, the most frequent labels in $S_{\ell'}$ and $S_{\ell''}$;

Just like the classifiers generated by the $k-NN$ algorithm, also tree predictors may suffer from overfitting. In this case, the relevant parameter is the number of tree nodes. If the number of tree nodes grows too much compared to the cardinality of the training set, then the tree may overfit the training data. For this reason, the choice of the leaf to expand should at least approximately guarantee the largest decrease in the training error.

	In practice, functions different from $\psi(p) = \operatorname{min}\{p, 1-p\}$ are used to measure this decrease. This happens because the $\operatorname{min}$ function might be problematic in certain circumstances. For example, consider splitting a leaf where $p = \frac{N^+_{\ell}}{N_{\ell}} = 0.8, q = \frac{N^+_{\ell'}}{N_{\ell'}} = 0.6, r = \frac{N^+_{\ell''}}{N^{\ell''}} = 1$ and $\alpha = \frac{N_{\ell'}}{N_{\ell}} = 0.5$. In this case, when $\psi(p) = \operatorname{min}\{p, 1-p\}$ we have that

$$\psi(p) - \Big(\alpha \psi(q) + (1 - \alpha)\psi(r) \Big ) = 0.2 - (0.5 \times 0.4 + 0.5 \times 0) = 0$$

As this split leaves the training error unchanged, it would be not be considered when growing the tree, and the algorithm might even get stuck if no split can be found to decrease the training error. On the other hand, the test in the new internal node is correctly classifying half of the examples in $S_\ell$, and all these correctly classified examples are routed to leaf $\ell''$ which is pure. Hence, half of the data in $S_\ell$ is explained by the split.

In order to fix this problem, different functions $\psi$ are used in practice. These functions are similar to $\operatorname{min}$ because they are symmetric around $\frac{1}{2}$ and satisfy $\psi(0) = \psi(1) = 0$. However, unlike $\operatorname{min}$, they have a nonzero curvature (i.e., strictly negative second derivative). The curvature helps in cases like the one described in the example above, that is when $p, q, r$ are all on the same side with respect to $\frac{1}{2}$ and $p = \alpha q+ (1 - \alpha)r$. In this case, $\psi(p) - (\alpha \psi (q) + (1 - \alpha)\psi(r)) = 0$ because between $0$ and $\frac{1}{2}$ the function $\psi(a) = \operatorname{min}\{a, 1 - a\}$ is a straight line.

Some examples of functions $\psi$ used in practice are:
1) **Gini function**: $\psi_2(p) = 2p(1-p)$;
2) **scaled entropy**: $\psi_3(p) = -\frac{p}{2}\log_2(p) - \frac{1-p}{2}\log_2(1-p)$;
3) $\psi_4(p) = \sqrt{p(1-p)}$.

The following inequalities hold: $\operatorname{min}\{p, 1-p\} \leq \psi_2(p) \leq \psi_3(p) \leq \psi_4(p)$.

![[curves_plot_tree_classifier.png]]

In the figure, it is possible to observe the plots of the curves $\operatorname{min} \{p, 1-p\}$ (green line) and $\psi2$, $\psi3$, $\psi4$.

Note that tree predictors can be naturally used also to solve multiclass classification or regression tasks. In the first case, the label associated with a leaf is, once more, the most frequent label among all training examples routed to that leaf. In the regression case, where $\mathcal{Y} = \mathbb{R}$, the label associated to a leaf is the mean of the labels of all training examples that are routed to that leaf.

An interesting feature of tree predictors for binary classication is that they can be represented with a formula of [[Logica Matematica |propositional logic]] in **disjunctive normal form** (DNF). This representation is obtained by considering the clauses (conjunctions of predicates) that result from the tests on each path that leads from the root to a leaf associated with label $+1$. For example, the classifier corresponding to the tree in the figure below is represented by the formula

![[tree_classifier_example.png]]

$$(outlook = sunny) \wedge (humidity \leq 70\%) \vee (outlook = overcast) \vee (outlook = rainy) \wedge (windy = false)$$

This rule-based representation of the tree classifier is very intuitive, and lends itself to being manipulated using the tools of propositional logic; for example, to obtain more compact representations of the same classifier. More importantly, this representation provides an interpretable description of the knowledge the learning algorithm extracted from the training set.

----------------------------------------------------------------

# Statistical Learning
In order to analyze a learning algorithm, a mathematical model of how examples $(x, y)$ are generated must be deﬁned. In the statistical learning framework, we assume that every example $(x, y)$ is obtained through an **independent draw** from a ﬁxed but unknown [[Statistica e Probabilità |probability distribution]] on $\mathcal{X} \times \mathcal{Y}$. We write $(X, Y)$ to highlight that $x$ and $y$ are **[[Statistica e Probabilità#Variabili Aleatorie|random variables]]**. it is important to recall that the difference between a random variable and a **realization** is that the realization is the possible value of a random variable while the random variable is a function. The assumption that not all data points $x$ are equally likely is quite natural (for example, when data points are images, only a small fraction of all possible pixel conﬁgurations correspond to real-world images). Similarly, as we previously argued, labels are typically noisy. This corresponds to assuming that labels of any given datapoint are stochastic.

Assuming that every example $(x, y)$ is the realization of an independent random draw from the same joint probability distribution $\mathcal{D}$ implies that every dataset (e.g., a training set or a test set) is a **statistical sample**. Note that the independence assumption is actually violated in many practical domains. Consider, for example, the problem of categorizing news stories. The newsfeed is clearly far from being an independent process, as the evolution of news reﬂects developing and related stories. Although not very realistic, the independence assumption is nevertheless convenient from the viewpoint of the analytical tractability of the problem, and works suprisingly well in practice.

In statistical learning, a **problem** is fully speciﬁed by a pair $(\mathcal{D}, \ell)$, where $\mathcal{D}$ is the data distribution and $\ell$ is a loss function. The performance of a predictor $h : \mathcal{X} \to \mathcal{Y}$ with respect to $(\mathcal{D}, \ell)$ (where $\ell$ is known and $\mathcal{D}$ is uknown) is evaluated via the **statistical risk**, deﬁned by

$$\ell_{\mathcal{D}}(h) = \mathbb{E}[\ell(Y, h(X))]$$

This is the **expected value** of the loss function on a random example $(X, Y)$ drawn from $\mathcal{D}$. Without knowing $\mathcal{D}$ it is not possible to compute $\ell_{\mathcal{D}}(h)$ but it is easy to understand that the predictors are ranked according to the statistical risk and, therefore, is possible to find the optimal one.<br />
The best possible predictor $f^*: \mathcal{X} \to \mathcal{Y}$ given $\mathcal{D}$ is known as **Bayes optimal predictor**, and is deﬁned by

$$\forall x \in \mathcal{X} \quad f^*(x) = \underset{\widehat{y} \in \mathcal{Y}}{\operatorname{argmin}} \text{ } \mathbb{E}[\ell(Y, \widehat{y}) \vert X = x]$$

where $\widehat{y} \in \mathcal{Y}$ is the value for which the function $\mathbb{E}[\ell(Y, \widehat{y}) \vert X = x]$ attains its minimum.<br />
What does it mean to condition an expectation? It means that we want to know the prediction of $f^*$ on $x$. This predictor tries to pick the best $\widehat{y}$, the one minimizing the expected loss on $x$.<br />
The quantity $\mathbb{E} [\ell(Y, \widehat{y}) \vert X = x]$ is the **conditional risk**, which is the expected loss of the prediction with respect to the distribution of the label $Y$ conditioned on $x$. Hence $f^*(x)$ is the prediction $\widehat{y}$ minimizing the conditional risk, given $x$. By deﬁnition of $f^*$, we have that 

$$\mathbb{E}[\ell(Y, f^*(X))\text{ } \vert \text{ } X = x] \leq \mathbb{E}[\ell(Y, h(X))\text{ } \vert \text{ } X = x]$$

for every predictor $h : \mathcal{X} \to \mathcal{Y}$ and for any $x \in \mathcal{X}$. Because the above inequality holds for every $x \in \mathcal{X}$, it also holds in expectation with respect to the random draw of $X$. But, since

$$\mathbb{E}\Big[ \mathbb{E} \big[Y \vert X \big] \Big] = \mathbb{E}\big[Y \big]\quad \forall X, Y \text{ random variables} $$

for any predictor $h$ holds that

$$\mathbb{E} \Big[\mathbb{E}[\ell(Y, h(X))\text{ } \vert \text{ } X]\Big] = \mathbb{E}[\ell(Y, h(X))] = \ell_{\mathcal{D}}(h)$$

Therefore, we have that

$$\forall x \in X \quad \mathbb{E}\Big[\mathbb{E}[\ell(Y, f^*(X))\text{ } \vert \text{ } X = x]\Big ] \leq \mathbb{E} \Big[\mathbb{E}[\ell(Y, h(X))\text{ } \vert \text{ } X = x]\Big]$$

and, therefore, $\ell_{\mathcal{D}}(f^*) \leq \ell_{\mathcal{D}}(h)$ for every predictor $h: \mathcal{X} \to \mathcal{Y}$. The risk $\ell_{\mathcal{D}}(f^*)$ of the Bayes optimal predictor is called **Bayes risk**. Typically, the Bayes risk is larger than zero because labels are stochastic, noisy and that means that $Y$ is not always determined by $X$.

We now compute the Bayes optimal predictor $f^*$ for the quadratic loss function $\ell(y, \widehat{y}) = (y − \widehat{y})^2$ when $\mathcal{Y} \equiv \mathbb{R}$,

$$f^*(x) = \underset{\widehat{y} \in \mathbb{R}}{\operatorname{argmin}} \mathbb{E}\Big[(Y - \widehat{y})^2 \text{ } \vert \text{ } X = x\Big]$$
$$= \underset{\widehat{y} \in \mathbb{R}}{\operatorname{argmin}} \mathbb{E}\Big[Y^2 + \widehat{y}^2 -2\widehat{y}Y \text{ } \vert \text{ } X = x\Big]$$

Because we are interested in the minimizing of $\widehat{y}$, it is possible to notice that the term $Y^2$ is a costant and, in fact, it does not depend on $\widehat{y}$. Using the linear property of expectation $\mathbb{E}[aX + bY] = a\mathbb{E}[X] + b\mathbb{E}[Y], \quad a, b \in \mathbb{R}$, we are able to write 

$$= \underset{\widehat{y} \in \mathcal{Y}}{\operatorname {argmin}}\Big(\underbrace{\mathbb{E}\big[Y^2 \text{ }\vert \text{ }X = x \big]}_{\text{does not depend on }\widehat{y}} + \widehat{y}^2 - 2 \widehat{y} \mathbb{E} \big[Y \text{ }\vert \text{ }X = x\big] \Big)$$
$$= \underset{\widehat{y} \in \mathbb{R}}{\operatorname {argmin}}\Big( \widehat{y}^2 - 2\widehat{y} \mathbb{E}\big[Y \vert X = x\big]\Big)\quad \text{ } \quad (\text{ignoring the term that does not depend on } \widehat{y})$$

and the reason why this is possible is because the term ignored is just a costant and so it is possible to extract it from the $\operatorname{argmin}$ operator.<br />
Now, we have to minimize the function $F(\widehat{y}) = \widehat{y}^2 - 2\widehat{y}\mathbb{E}\big[Y \text{ } \vert \text{ } X = x\big]$, which can be seen as $F(z) = z^2 - 2zc$. Its derivative is $F'(z) = 2z -2c$ and it is minimized for $F'(z) = 0$. After the substitution in the derivative, we obtain $2 \widehat{y} - 2c = 2 \widehat{y} - 2 \mathbb{E}\big[Y \vert X = x\big] = 0$ and, therefore

$$ f^*(x) = \mathbb{E}\big[Y \text{ } \vert \text{ } X = x\big]$$
 
Thus, the Bayes optimal prediction for the quadratic loss function is the expected value of the label conditioned on the instance. So, if it is desired to minimize the loss, the expectation must be predicted.

Substituting in the conditional risk formula $\mathbb{E}[(Y - f^*(X))^2 \vert X = x]$ the Bayes optimal predictor $f^*(X) = \mathbb{E}[Y \text{ }\vert \text{ } X = x]$ we obtain

$$ \mathbb{E}\Big[\big(Y - f^*(X)\big)^2 \text{ }\Big \vert \text{ } X = x \Big] = \mathbb{E}\Big[\big(Y - \mathbb{E}[Y \text{ } \vert \text{ } X = x ]\big)^2 \text{ }\Big \vert \text{ } X = x \Big] = Var\big[Y \vert X = x\big]$$

In words, the conditional risk of the Bayes optimal predictor for the quadratic loss is the **conditional variance**, the variance of the label conditioned on the instance. By averaging over $X$ we obtain $\ell_{\mathcal{D}}(f^*) = \mathbb{E}\big[Var[Y \text{ } \vert \text{ } X]\big]$.<br />
Namely, the Bayes risk for the quadratic loss is the expected conditional variance of the label. Note that $\mathbb{E}\big[Var[ Y \text{ } \vert \text{ } X]\big]$ is generally diﬀerent from $Var[Y]$. Indeed, the **law of total variance** says that $Var[Y] - \mathbb{E}\big[Var[Y \text{ } \vert \text{ } X]\big] = Var\big[\mathbb{E}[Y \text{ } \vert \text{ } X]\big]$.

We now focus on binary classiﬁcation, where $\mathcal{Y} = \{−1, 1\}$. Let $\eta(x)$ be the probability of $Y = 1$ conditioned on $X = x$. We view $\eta(x) = \mathbb{P}( Y = +1 \text{ } \vert \text{ } X = x)$ as the value on $x$ of a function $\eta: \mathcal{X} \to [0, 1]$.
 
Let $\mathbb{I}\{A\} \in \{0, 1\}$ be the **indicator function** of an event $A$, that is, $\mathbb{I}\{A\} = 1$ if and only if $A$ occurs.<br />
The statistical risk with respect to the zero-one loss $\ell(y, \widehat{y}) = \mathbb{I}\{\widehat{y} \neq y\}$ is therefore defined by

$$\ell_{\mathcal{D}}(h) = \mathbb{E}\big[\ell(Y, h(X))\big] = \mathbb{E}\big[\mathbb{I}\{h(X) \neq Y \}\big] =$$ $$ = 1 \cdot \mathbb{P}(h(X) \neq Y) + 0 \cdot \mathbb{P}(h(X) = Y) =  \mathbb{P}(h(X) \neq Y)$$

The Bayes optimal predictor $f^*: \mathcal{X} \to \{−1, 1\}$ for binary classiﬁcation is derived as follows

$$\quad f^*(x) = \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\mathbb{E}\big[\ell(Y, \widehat{y}) \text{ } \vert \text{ } X = x\big]$$
$$= \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\mathbb{E}\Big[\mathbb{I}\big\{Y = +1\big\}\mathbb{I}\big\{\widehat{y} = -1\big\} + \mathbb{I}\big\{Y = -1\big\}\mathbb{I}\big\{\widehat{y} = +1\big\} \text{ } \vert \text{ } X = x\Big]$$
$$= \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\Big (  \mathbb{E}\big[\mathbb{I}\{Y = +1\} \vert X = x\big]\mathbb{I}\{\widehat{y} = -1\} +  \mathbb{E}\big[\mathbb{I}\{Y = -1\} \vert X = x\big]\mathbb{I}\{\widehat{y} = +1\}\Big )$$
$$= \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\Big(\mathbb{P}\big(Y =  + 1 \text{ } \vert \text{ } X = x\big)\mathbb{I}\{\widehat{y} = -1\} + \mathbb{P}\big(Y = -1 \text{ } \vert \text{ } X = x\big)\mathbb{I}\{\widehat{y} = +1\}\Big)$$
$$=\underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\Big(\eta(x) \mathbb{I}\{\widehat{y}= -1\} + (1 - \eta(x))\mathbb{I}\{\widehat{y} = +1\}\Big)$$

If $\widehat{y} = 1$, the first term goes to $0$ and we predict the second term. Viceversa, we predict the first term. The algorithm should, then, predict $-1$ when $\eta(x) < (1 - \eta(x))$. So 

$$ f^*(x)= \cases{-1 \quad \text{if } \eta(x) < \frac{1}{2} \cr \cr +1 \quad \text{if } \eta(x) \geq \frac{1}{2}}$$

Hence, the Bayes optimal classifier predicts the label whose probability is the highest when conditioned on the instance. Finally, it is easy to verify that the Bayes risk in this case is $\ell_{\mathcal{D}}(f^*) = \mathbb{E}[\ell(f^*(X), Y)] = \mathbb{E}\big[\mathbb{I}\{f^*(X) \neq Y\}\big] = \mathbb{P}(f^*(X) \neq Y)$.
Knowing that $\mathbb{P}(f^*(X) \neq Y \vert X = x) = \operatorname{min} \{\eta(x), (1 - \eta(x))\}$ and knowing that $\mathbb{E}\Big[\mathbb{E}\big[\mathbb{I}\{f^*(X) \neq Y\}\big \vert X = x]\Big] = \mathbb{E}[\mathbb{I}\{f^*(X) \neq Y\}\big]$, it is possible to define $\ell_{\mathcal{D}}(f^*) = \mathbb{E}\big[min\{\eta(X), 1 - \eta(X)\}\big]$.<br />
That is, the Bayes risk is the expectation of the probability of the event that is less likely to happen conditioned on the instance.

Let's assume we have a one directional problem (that is, based on a one directional feature) and consider $\eta: X \to [0, 1]$.



Now, consider the plot of the function $\operatorname{min} \{Z, (1 - Z)\}$:



In the central region of the first plot, the label is basically random, because the function $\operatorname{min} \{Z, (1 - Z)\}$ returns $1$ and $-1$ both with probability $\frac{1}{2}.$

## Bounding the risk
Next, we study the problem of bounding the risk of a predictor. From now on, we assume $\ell(y, \widehat{y}) \in [0, 1]$. However, keep in mind that our analysis continues to hold also when $\ell(y, \widehat{y}) \in [0, M]$ for any $M > 0$.

It should be clear that, given an arbitrary predictor $h: \mathcal{X} \to \mathcal{Y}$, we cannot directly compute its statistical risk $\ell_{\mathcal{D}}(h)$ with respect to $\mathcal{D}$ because $\mathcal{D}$ is typically unknown (if we knew $\mathcal{D}$, we could directly construct the Bayes optimal predictor). We thus consider the problem of estimating the statistical risk of a given predictor $h$. In order to compute this estimate, we can use the **test set** $S' = \{(x_1' , y_1' ), ... , (x_n' , y_n')\}$. We can then estimate $\ell_{\mathcal{D}}(h)$ with the **test error**, which is the average loss of $h$ on the test set

$$\ell_{s'}(h) = \frac{1}{n}\sum_{t = 1}^{n}\ell\big(y_{t}', h(x_t')\big)$$

Under the assumption that the test set is generated through independent draws from $\mathcal{D}$, the test error corresponds to the **sample mean** of the statistical risk. Indeed, for each $t = 1, ... , n$ the example $(X_t', Y_t')$ is an independent draw from $\mathcal{D}$. Therefore,

$$\mathbb{E}\Big[\ell\big(Y_t', h(X_t')\big)\Big] = \ell_{\mathcal{D}}(h) \quad \quad t= 1, ..., n$$

Note that the above equalities rely on the assumption that $h$ does not depend on the test set $S'$ (but it depends on the training set). If it did, then the above equalities would not be necessarily true. This fact is important in the analysis of learning algorithms.

In order to compute how good is the test error as an estimate for the risk, we can use the following result about the law of large numbers.

### Chernoﬀ-Hoeﬀding's lemma
Let $Z_1 , ... , Z_n$ be **independent and identically distributed random variables** with expectation $\mu$ and such that $0 \leq Z_t \leq 1$ for each $t = 1, ... , n$. Then, for any given $\varepsilon > 0$

$$\mathbb{P}\Bigg(\frac{1}{n}\sum_{t = 1}^{n}Z_t > \mu + \varepsilon \Bigg) \leq e^{-2\varepsilon^2n}\quad \text{and}\quad \mathbb{P}\Bigg(\frac{1}{n}\sum_{t = 1}^{n}Z_t < \mu - \varepsilon\Bigg) \leq e^{-2\varepsilon^2n}$$

This means that if we compute the sample mean of the variables, the probability that this will be much larger (or much smaller) than the expectation, with respect to the draw of the sample, decreases exponentially with the sample size.

In the rest of this course, we repeatedly use the following facts:
1) for any two events $A$ and $B$, if $B \implies A$, then $P(B) \leq P(A)$;

![[fact1.png]]

2) for any collection $A_1 , ... , A_n$ of (not necessarily disjoint) events, $\mathbb{P}(A_1 \cup ...\cup A_n) \leq \sum_{i = 1}^{n}\mathbb{P}(A_i)$ (**Union bound**). If the events $A_1 , ... , A_n$ are pairwise disjoint, then the union bound holds with equality.

![[facts2.jpg]]

Using the Chernoﬀ-Hoeﬀding bound with $Z_t = \ell(y_t , h(x_t)) \in [0, 1]$, we can compute a conﬁdence interval for the statistical risk as follows (where the test error is written as $\ell$ instead of $\ell_{S'}$ )

$$\mathbb{P}\Big(\vert\ell_{\mathcal{D}}(h) - \ell(h) \vert > \varepsilon\Big) = \mathbb{P}\Big(\ell_{\mathcal{D}}(h) - \ell(h) > \varepsilon \cup \ell(h) - \ell_{\mathcal{D}}(h) > \varepsilon\Big)$$
$$\quad = \mathbb{P}\Big(\ell_{\mathcal{D}}(h) - \ell(h) > \varepsilon\Big) + \mathbb{P}\Big(\ell(h) - \ell_{\mathcal{D}}(h) > \varepsilon \Big) \leq 2e^{-2\varepsilon^{2}n} \quad \text{ } \quad (1)$$

where in the last step we applied the union bound to the disjoint events $\ell_{\mathcal{D}}(h) − \ell(h) > \varepsilon$ and $\ell(h) − \ell_{\mathcal{D}}(h) > \varepsilon$. Note that the probability is computed with respect to the random draw of the test set. This inequality shows that the probability that a test set gives a test error $\ell_{S'}(h)$ diﬀering from the true statistical risk $\ell_{\mathcal{D}}(h)$ (which is $\mu$ in the Chernoff-Hoeffding bound) for more than $\varepsilon$ quickly decreases with the size $n$ of the test set.

More speciﬁcally: if we set to $\delta \in (0, 1)$ the right-hand side of $(1)$ and then solve for $\varepsilon$, we get that

$$\varepsilon = \sqrt{\frac{1}{2n}\ln\frac{1}{\delta}}$$

For this value of $\varepsilon$, the probability (the right-hand side of the equation) is at most $\delta$.

$$\vert \ell_{\mathcal{D}}(h) - \ell_{S'}(h)\vert \leq \sqrt{\frac{1}{2n}\ln{\frac{2}{\delta}}}$$

holds with probability al least $1 − \delta$ with respect to the random draw of the test set.

The inequality $(1)$ is telling us how to use a test set to estimate the risk of a classiﬁer. More precisely, the inequality shows that the test error, which is how we measure in practice the performance of a classiﬁer on unseen data, is close to the statistical risk with high probability.

----------------------------------------------------------------

## Overﬁtting and underﬁtting
Fix a learning problem $(\mathcal{D}, \ell)$ and consider a generic learning algorithm $A$. In the following, we write $A(S)$ to denote the predictor output by $A$ when given the training set $S$. Let $\mathcal{H}_A$ be the set of predictors generated by $A: h \in \mathcal{H}_A$ if and only if there exists a ﬁnite training set $S$ such that $A(S) = h$. For example, $A$ could be an algorithm for training a neural network and $\mathcal{H}_A$ is the set of all possible predictors obtained by training the neural network using arbitrary training sets of ﬁnite size. Let $h^*$ be any predictor with minimum risk $\ell_{\mathcal{D}}(h^*)$ in $\mathcal{H}_A$. That is,

$$\ell_{\mathcal{D}}(h^*) \leq \underset{h \in \mathcal{H}_A}{\operatorname{min}}\ell_{\mathcal{D}}(h)$$

In general $\ell_{\mathcal{D}}(h^*) > \ell_{\mathcal{D}}(f^*)$.

Fix a finite training set $S$ and let $h_S = A(S)$. The following is called the **bias-variance** decomposition:
 
$$\ell_{\mathcal{D}}(h_S) = \ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*)\quad\text{estimation error (large when overfitting)}$$
$$\quad + \ell_{\mathcal{D}}(h^*) - \ell_{\mathcal{D}}(f^*)\quad \text{approximation error (large when underfitting)}$$
$$\quad + \ell_{\mathcal{D}}(f^*) \quad \text{Bayes error (unavoidable)}$$

where $f^*$ is the Bayes optimal predictor for $(\mathcal{D}, \ell)$. 

![[bias-variance_decomposition.png]]

In the figure it is possible to observe a visual explanation of the bias-variance decomposition.

Note that:
1) the Bayes error is not controllable because it only depends on $\mathcal{D}$ and the loss $\ell$;
2) the approximation (or bias) error, which is large when the algorithm underﬁts (the range of $\mathcal{H}_A$ is too short), arises because $\mathcal{H}_A$ does not necessarily contain the Bayes optimal predictor;
3) the estimation (or variance) error, which is large when the algorithm overﬁts (the ranghe of $\mathcal{H}_A$ is too big), arises because the risk of $h_S$ is generally diﬀerent from the risk of $h^*$.

We now use the bias-variance decomposition to balance overﬁtting and underﬁtting in the ERM algorithm run over a ﬁnite classe $\mathcal{H}$. Recall that ERM minimizes the training error in $\mathcal{H}$,

$$A(S) = h_S = \underset{h \in \mathcal{H}}{\operatorname {argmin}}\ell_S(h)$$

where $\ell_S(h)$ is the training error of $h$ on the training set $S$. Similarly to before, the best predictor in the class $\mathcal{H}$ is any predictor $h^*$ satisfying

$$\ell_{D}(h^*) = \underset{h \in \mathcal{H}}{\operatorname{min}}\ell_{\mathcal{D}}(h)$$

Thanks to the law of large numbers, we know that the training error $\ell_S(h^*)$ is close to $ℓ_{\mathcal{D}}(h^*)$ with high probability with respect to the random draw of the training set $S$. Unfortunately, we cannot directly apply the Chernoﬀ-Hoeﬀding bound to $h_S$ to show that $\ell_{\mathcal{D}}(h_S)$ is close to $\ell_S(h_S)$. The reason is that $h_S$ is a function of the training set, and thus a random variable. Indeed Chernoﬀ-Hoeﬀding ensures that the sample mean $\ell_S(h)$ is close to its true mean $\ell_{\mathcal{D}}(h)$ with high probability for any given $h$. On the other hand, it is unclear how to prove that $\ell_S(h_S)$ is close to $\ell_{\mathcal{D}}(h_S)$ given that they are both random variables whose expectations do not necessarily coincide.

We now show how to overcome this problem and bound the variance error. For every given training set $S$ of size $m$, we have that

$$\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) = \ell_{\mathcal{D}}(h_S) - \underbrace{\ell_S(h_S) + \ell_S(h_S)}_{\text{they sum to }0} - \ell_{\mathcal{D}}(h^*)$$
$$\leq \ell_{\mathcal{D}}(h_S) - \ell_S(h_S) + \ell_S(h^*) - \ell_{\mathcal{D}}(h^*)$$

This replacement is legal because $h_S$ is the minimizer of the training error.
The last subctraction is bounded by $\sqrt{\frac{1}{2n}\ln{\frac{2}{\delta}}}$ with probability at least $1 - \delta$.

$$\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*)\leq \vert \ell_{\mathcal{D}}(h_S) - \ell_S(h_S)\vert + \vert \ell_S(h^*) - \ell_{\mathcal{D}}(h^*) \vert$$
$$\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) \leq 2 \underset{h \in \mathcal{H}}{\operatorname{max}} \vert \ell_S(h) - \ell_{\mathcal{D}}(h)\vert$$

where we used the assumption that $h_S$ minimizes $\ell_S(h)$ among all $h \in \mathcal{H}$. Therefore, for all $\varepsilon > 0$,

$$\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) > \varepsilon \implies \underset{h \in \mathcal{H}}{\operatorname {max}}\vert\ell_S(h) - \ell_{\mathcal{D}}(h)\vert > \frac{\varepsilon}{2} \implies \exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h)\vert > \frac{\varepsilon}{2}$$

Since the above chain of implications holds for any realization of the training set of size $m$, we can write

$$\mathbb{P}\big(\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) > \varepsilon\big) \leq \mathbb{P} \Big(\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \frac{\varepsilon}{2}\Big)$$

We now study the case $\vert \mathcal{H}\vert < \infty$, that is when the model space contains a ﬁnite number of predictors. Note that the event

$$\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \frac{\varepsilon}{2}$$

is the union over $h \in \mathcal{H}$ of the (not necessarily disjoint) events $\vert \ell_S(h) − \ell_{\mathcal{D}}(h) \vert > \frac{\varepsilon}{2}$. Using the union bound we get

$$\mathbb{P}\Big(\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) > \frac{\varepsilon}{2} \Big) = \mathbb{P} \Bigg(\ \bigcup_{h \in \mathcal{H}} \Big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h)\vert > \frac{\varepsilon}{2} \Big)\Bigg)$$
$$ \leq \sum_{h \in \mathcal{H}}\mathbb{P}\Big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \frac{\varepsilon}{2}\Big)$$
$$\leq \vert \mathcal{H}\vert \underset{h \in H}{\operatorname{max}}\mathbb{P} \Big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \frac{\varepsilon}{2}\Big)$$
$$\leq \vert \mathcal{H} \vert 2e^{-m \varepsilon^2/2} \quad \text{ } \quad (2)$$

where in the last step we used the Chernoﬀ-Hoeﬀding bound.

In conclusion, we have that

$$\mathbb{P}\big(\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) > \varepsilon\big) \leq 2 \vert \mathcal{H}\vert e^{-m\varepsilon^2/2} \quad \text{ } \quad (3)$$

Setting the right-hand side of $(3)$ equal to $\delta$ and solving for $\varepsilon$ we obtain that

$$\ell_{\mathcal{D}}(h_S) \leq \ell_{\mathcal{D}}(h^*) + \sqrt{\frac{2}{m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$$

holds with probability at least $1−\delta$ with respect to the random draw of a training set of cardinality $m$.

For a given cardinality $m$ of the training set, in order to decrease our bound on the variance error of ERM, $\sqrt{\frac{2}{m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$ we must decrease $\vert \mathcal{H} \vert$. But decreasing $\vert \mathcal{H} \vert$ might cause an increase of $\ell_{\mathcal{D}}(h^*)$, which produces a corresponding increase of the bias error. In light of this statistical analysis, we conclude that the ERM algorithm generates predictors with high risk (compared to Bayes risk) when there is an unbalance between the variance error and the bias error. In particular, overﬁtting occurs when the variance error dominates the bias error, and underﬁtting occurs when the bias error dominates the variance error.

In the proof of the bound on the variance error, we have also shown in $(2)$ that

$$\forall h \in \mathcal{H} \quad \vert\ell_S(h) - \ell_{\mathcal{D}}(h) \vert \leq \sqrt{\frac{1}{2m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$$

with probability at least $1 − \delta$ with respect to the random draw of the training set. This implies that when the cardinality of the training set $m$ is suﬃciently large with respect to $\ln{\vert \mathcal{H} \vert}$, then the training error $\ell_S(h)$ becomes a good estimate for the statistical risk $\ell_{\mathcal{D}}(h)$ simultaneously for all predictors $h \in \mathcal{H}$. This is suﬃcient to prevent overﬁtting, as it tells us that ranking the predictors in $\mathcal{H}$ according to their training error approximately corresponds to ranking them according to their risk.

----------------------------------------------------------------

# Risk analysis for tree predictors
The risk analysis for ERM over a ﬁnite class $\mathcal{H}$ of predictors states that, with probability at least $1 −\delta$ with respect the random draw of training set of size $m$, we have

$$\ell_{\mathcal{D}}(\widehat{h}) \leq \underset{h \in \mathcal{H}}{\operatorname{min}}\ell_{\mathcal{D}}(h) + \sqrt{\frac{2}{m} \ln\frac{2 \vert \mathcal{H} \vert}{\delta}} \quad \text{ } \quad (1)$$

We can see what happens when applying this result to the class of predictors computed by binary tree classiﬁers over $\mathcal{X} = \{0, 1\}^d$ (i.e., $d \geq 2$ binary attributes). We consider **complete [[Albero Binario|binary trees]]**: trees whose nodes have either zero or two children. A full binary tree is a complete binary tree whose leaves (nodes with zero children) are all at the same depth. A complete binary tree with $N$ nodes has always $(N + 1)/2$ leaves.

**Fact $1$**: for each function of the form $h : \{0, 1\}^d \to \{-1, 1\}$ there exists a binary tree classiﬁer with at most $2^{d+1}-1$ nodes that computes $h$.

To proof this assumption, consider a full binary tree with $2^d$ leaves (which therefore has $2^{d+1}-1$ nodes). The root node implements a binary test on $x_1$, the $2$ nodes at depth $1$ implement binary tests on $x_2$, and so on until the $2^{d−1}$ nodes at depth $d-1$ which test $x_d$. Now note that any path from root to a leaf corresponds to a binary sequence in $\{0, 1\}^d$ . Given any $h : \{0, 1\}^d \to \{-1, 1\}$, we can assign a label $y_\ell \in \{−1, 1\}$ to each leaf $\ell$ so that if the path to the leaf corresponds to $x \in \{0, 1\}^d$ , then the label is set to $h(x)$. The classiﬁer computed by the tree then corresponds to $h$.

Since there are $2^{2^d}$ binary functions over $\{0, 1\}^d$, it is possible to run ERM with a class $\mathcal{H}$ containing $2^{2^d}$ tree classiﬁers. The upper bound $(1)$ then becomes

$$\ell_{\mathcal{D}}(\widehat{h}) \leq \underset{h \in \mathcal{H}}{\operatorname{min}}\ell_{\mathcal{D}}(h) + \sqrt{\frac{2}{m}\Big(2^d \ln2 + \ln \frac{2}{\delta}\Big) }$$

Therefore, in order to make the risk of ERM small, the training set must contain a number $m$ of training examples of the order of $2^d$, which is the cardinality of $\mathcal{X}= \{0, 1\}^d$. This is a truly extreme case of overfitting.

## Limiting the number of nodes
In order to reduce overﬁtting, we can minimize training error within a smaller class of trees. Consider the set $\mathcal{H}_N$ of all classifiers computed by complete binary tree predictors with $N$ nodes on $\{0, 1\}^d$, where $N \ll 2^d$.

**Fact 2**: $\vert \mathcal{H}\vert \leq (2de)^N$
To proof this assumption, note that $\vert \mathcal{H}_N \vert$ is smaller than the product of the number of binary trees with $N$ nodes, the number of ways of assigning binary tests to attributes at the internal nodes, the number of ways of assigning binary labels to the leaves. If we conventionally assign the left child of a node to the negative result of a test, and the right child to a positive result, a test is uniquely identified just by the index of the tested attribute. Therefore, if the tree has $M$ internal nodes, there are $d^M$ ways of assigning tests to internal nodes (it is possible to assign the same test to different nodes). Moreover, since there are $N-M$ leaves, there are $2^{N−M}$ ways of assigning binary labels to leaves. Therefore, each tree of $N$ nodes can implement up to $d^M 2^{N-M} \leq d^N$ classifiers (because for $d = 2$, the inequality is $2^N2^{N-M} \leq 2^N \to 2^N = 2^N$). Finally, the number of complete binary trees with $N$ nodes ($N$ is odd because the tree is complete) is given by the $\frac{N-1}{2}$-th Catalan number

$$C_{\frac{N-1}{2}} = \frac{2}{N+1}\binom{N -1}{(N-1)/2} $$

Thus, using the standard upper bound $\binom{n}{k} \leq (\frac{en}{k})^k$ derived from **Stirling approximation to binomial coefficients**, we get

$$\vert \mathcal{H}_N \vert \leq \frac{2}{N +1} \Big(\frac{2e(N -1)}{N-1} \Big)^{\frac{N-1}{2}}d^N < (2ed)^N$$

concluding the proof.

Hence, if $\widehat{h} = \underset{\mathcal{H}_N}{\operatorname{argmin}}\ell_S(h)$ for a given $N$ and training set $S$, the upper bound $(1)$ becomes

$$\ell_{\mathcal{D}}(\widehat{h}) \leq \underset{h \in \mathcal{H}_N}{\operatorname{min}}\ell_{\mathcal{D}}(h) + \sqrt{\frac{2}{m}\Big(N\big(1 + \ln(2d)\big) + \ln \frac{2}{\delta}\Big)}$$

From that, we deduce that in this case a training set of size of order $N \ln d$ is enough to control the risk of $\widehat{h} \in \mathcal{H}_N$.

----------------------------------------------------------------

## A more refined bound
As it is not clear what $N$ should be used in practice, we now derive a more refined bound. Recall that we control the variance error of ERM in $\mathcal{H}_N$ by making sure that the risk of each predictor in $\mathcal{H}_N$ can exceed its training error by at most $\varepsilon$. We now take a diﬀerent approach. Namely, we upper bound the risk of a tree predictor $h$ by its training error plus a quantity $\varepsilon_h$ that now depends on the size of the tree. To this purpose, let $\mathcal{H}$ be the set of all tree classifiers with at most $2^{d+1}-1$ nodes. Because of Fact $1$, $\mathcal{H}$ implements all binary classifiers $h: \{0,1\}^d \to \{-1, 1\}$.

We introduce a function $w : \mathcal{H} \to [0, 1]$ and call $w(h)$ the weight of tree predictor $h$. We assume

$$\sum_{h \in \mathcal{H}}w(h) \leq 1 \quad \text{ } \quad (2)$$

We can then write the following chain of inequalities, where $\varepsilon_h > 0$ will be chosen later on,

$$\mathbb{P}\big(\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \varepsilon_h \big) \leq \sum_{h \in \mathcal{H}}\mathbb{P}\big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \varepsilon_h\big) \leq \sum_{h \in \mathcal{H}}2e^{-2m\varepsilon_h^2}$$

Note that we used Chernoﬀ-Hoeﬀding bound in the last step. Now, choosing

$$\varepsilon_h = \sqrt{\frac{1}{2m}\Big(\ln\frac{1}{w(h)} + \ln\frac{2}{\delta}\Big)}$$

we get that

$$\mathbb{P}\big(\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \varepsilon_h \big) \leq \sum_{h \in \mathcal{H}}\delta w(h) \leq \delta$$

where we used the property $(2)$ of the function $w$.

A consequence of this analysis is that, with probabilty at least $1 − \delta$ with respect to the training set random draw, we have

$$ \ell_{\mathcal{D}}(h) \leq \ell_S(h)+ \sqrt{\frac{1}{2m}\Big(\ln\frac{1}{w(h)} + \ln\frac{2}{\delta}\Big)} \quad \text{ } (3)$$

simultaneously for every $h \in \mathcal{H}$. This suggests an alternative algorithm to training error minimization: while ERM uses

$$\widehat{h} = \underset{h \in \mathcal{H}_N}{\operatorname{argmin}}\ell_S(h)$$

for a given $N$, the new approach (which is sometimes called **Structural Risk Minimization**) leads to the choice

$$\widehat{h} = \underset{h \in \mathcal{H}}{\operatorname{argmin}}\Bigg( \ell_S(h)+ \sqrt{\frac{1}{2m}\Big(\ln\frac{1}{w(h)} + \ln\frac{2}{\delta}\Big)} \Bigg) \quad \text{ } (4)$$

The function $w$ can be naturally viewed as a **complexity measure** for the tree predictor $h$. Note that this analysis oﬀers a diﬀerent viewpoint on overfitting: $\ell_S(h)$ becomes a good estimate of $\ell_{\mathcal{D}}(h)$ when it is “penalized” by the term

$$\sqrt{\frac{1}{2m}\Big(\ln\frac{1}{w(h)} + \ln\frac{2}{\delta}\Big)}$$

this accounts for the fact that we used the $m$ training examples to choose a tree predictor $h$ of complexity $w(h)$.

A concrete choice for the function $w$ is obtained as follows. Using coding theoretic techniques, we can encode each tree predictor $h$ with $N_h$ nodes using a binary string $\sigma(h)$ of length $\vert \sigma (h) \vert = (N_h +1 ) \lceil \log_2(d+3) \rceil + 2 \lfloor \log_2 N_h \rfloor + 1 = \mathcal{O}(N_h \log d)$, so that there are no two predictors $h$ and $h'$ such that $\sigma(h)$ is a prefix of $\sigma(h')$. Codes of this kind are called **instantaneous** and always satisfy the Kraft inequality

$$\sum_{h \in \mathcal{H}}2^{- \vert \sigma(h) \vert} \leq 1$$

Thanks to Kraft inequality (which implies property $(2)$) we can assign weight $w(h) = 2^{−\vert \sigma(h)\vert}$ to a classifier $h$ computed by a tree predictor with $N_h$ nodes. Applying bound $(3)$ we get that, with probability at least $1 − \delta$ with respect to the training set random draw,

$$\ell_{\mathcal{D}}(h) \leq \ell_S(h)+ \sqrt{\frac{1}{2m}\Big(\vert \sigma(h) \vert + \ln\frac{2}{\delta}\Big)} \quad \text{ } \quad (\text{with }\vert \sigma(h) \vert = \mathcal{O}(N_h\log d)) $$

simultaneously for each $h \in \mathcal{H}$. Hence, a learning algorithm for tree predictors can control overfitting by generating predictors $\widehat{h}$ defined by

$$\widehat{h} = \underset{h \in \mathcal{H}}{\operatorname{argmin}}\Bigg(\ell_S(h)+ \sqrt{\frac{1}{2m}\Big(\vert \sigma(h) \vert + \ln\frac{2}{\delta}\Big)}\Bigg)$$

Note that the choice of the weight function $w$ is not determined by the analysis. In particular, we may choose any other $w$ satisfying $(2)$. We should then interpret $w$ as a bias term, giving preference to certain trees as opposed to others. A bias towards smaller trees is an instance of the principle known as **Occam Razor**: if two explanations agree with a set of observations, then the shortest explanation is the one with the biggest predictive power. This is supported by the empirical observation that, given two predictors with the same training error, the “simpler” predictor tends to have smaller risk.

----------------------------------------------------------------

# Hyperparameter tuning and risk estimates
In practice, learning algorithms are often specified up to one or more hyperparameters. These are special parameters (like $k$ in $k-NN$ or the learning rate, the number of epochs, and the batch size in neural networks) whose value must be determined before the training phase can start. Crucially, setting the hyperparameters in the wrong way can lead to underfitting or overfitting.

A learning algorithm with one or more hyperparameters is not really an algorithm, but rather a family of algorithms, one for each possible assignment of values to the hyperparameters. Let $\{A_\theta : \theta \in \Theta\}$ be such a family of learning algorithms, where $\theta$ is a vector of hyperparameters and $\Theta$ is the set of all possible hyperparameter values. Fix a learning problem $(\mathcal{D}, \ell)$ and let $A_\theta(S) = h$ be the predictor output when $A_\theta$ is run on the training set $S$. Let $\ell_{\mathcal{D}}(A_\theta(S))$ be the risk of the predictor $A_\theta(S)$, and let $\mathbb{E}\big[\ell_{\mathcal{D}}(A_\theta)\big]$ be the expected risk of $A_\theta(S)$ where the expectation is with respect to the random draw of the training set $S$ of a given fixed size. Intuitively, $\mathbb{E}\big[\ell_{\mathcal{D}}(A_\theta)\big]$ measures the performance of $A_\theta$ on a typical training set of that size.

## Evaluating a learning algorithm using external cross-validation
Assume for now the hyperparameter $\theta$ is fixed and focus on the problem of estimating $\mathbb{E}\big[\ell_{\mathcal{D}}(A)\big]$. To do so we can use a technique called $K$-fold (external) **cross-validation**.

Let $S$ be our entire dataset. We partition $S$ in $K$ subsets (also known as **folds**) $S_1, ..., S_K$ of size $m/K$ each (assume for simplicity that $K$ divides $m$). The extreme case $K = m$ provides an estimate known as **leave-one-out**. Now let $S_{-i} \equiv S \setminus S_i$. We call $S_i$ the **testing part** of the $i$-th fold while $S_{-i}$ is the **training part**.

For example, if we partition $S=\big \{(x_1, y_1), ..., (x_{20}, y_{20})\big \}$ in $K = 4$ subsets

$$S_1 = \Big\{(x_1, y_1), ..., (x_5, y_5) \Big \} \quad S_2 = \Big\{(x_6, y_6), ..., (x_{10}, y_{10}) \Big \}$$
$$S_3 = \Big\{(x_{11}, y_{11}), ..., (x_{15}, y_{15}) \Big \} \quad S_4 = \Big\{(x_{16}, y_{16}), ..., (x_{20}, y_{20}) \Big \}$$

then $S_{-2} = S_1 \cup S_3 \cup S_4$.

The **$K$-fold CV estimate** of $\mathbb{E}\big[\ell_{\mathcal{D}}(A)\big]$ on $S$, denoted by $\ell_S^{CV}(A)$, is then computed as follows: we run $A$ on each training part $S_{-i}$ of the folds $i = 1, ..., K$ and obtain the predictors $h_1 =A(S_{-1}), ..., h_K =  A(S_{-K})$. We then compute the (rescaled) errors on the testing part of each fold,

$$\ell_{S_i}(h_i) = \frac{K}{m} \sum_{(x, y) \in  S_i} \ell(y, h_i(x))$$

Finally, we compute the CV estimate by averaging these errors

$$\ell_{S}^{CV}(A) = \frac{1}{K} \sum_{i = 1}^{K} \ell_{S_i}(h_i)$$

----------------------------------------------------------------

## Tuning hyperparameters on a given training set
In practice, we face the problem of choosing the hyperparameters so to obtain a predictor with small risk. This is typically done by minimizing a risk estimate computed using the training data. As $\Theta$ may be very large, possibly infinite, the minimization is generally not over $\Theta$, but over a suitably chosen subset $\Theta_0 \subset \Theta$ (for example, if $\Theta = [0, 1]$, then $\Theta_0$ could by a finite grid of equally spaced values in $[0, 1]$). If $S$ is our training set, then we want to find $\theta^* \in \Theta$ such that

$$\theta^* = \underset{\theta \in \Theta_0}{\operatorname{argmin}}\ell_{D}\Big(A_{\theta}(S)\Big)$$

That is

$$\ell_{D}\Big( A_{\theta^*}(S)\Big) = \underset{\theta \in \Theta_0}{\operatorname{min}}\ell_{D}\Big(A_{\theta}(S)\Big) \quad \text{ } \quad (1)$$

The estimate is computed by splitting the training data in two subsets $S_{train}$ and $S_{dev}$. The development set $S_{dev}$ (also called **validation set**) is used as a surrogate test set. The algorithm is run on $S_{train}$ once for each value of the hyperparameter in $\Theta_0$. The resulting predictors are tested on the dev set. In order to obtain the final predictor, the learning algorithm is run once more on the original training set $S$ using the value of the hyperparameter corresponding to the predictor with smallest error on the validation set. That will provide an estimate of $\ell_{\mathcal{D}}\big(A_{\theta^*}(S)\big)$.

----------------------------------------------------------------

## Tuning parameters via nested cross-validation
What if we want to estimate the expected value of $(1)$ with respect to the random draw of the training set of fixed size?

$$\mathbb{E}\Big[\text{ }\underset{\theta \in \Theta_0}{\operatorname{min}} \text{ } \ell_{\mathcal{D}}\big(A_\theta\big)\Big] \quad \text{ } (2)$$

In other words, we want to estimate the performance of $A_\theta$ on a typical training set of a given size when $\theta$ is tuned on the training set.

Given a dataset $S$, a cheap way of estimating $(2)$ is to use the best CV-estimate over $\{A_\theta : \theta \in \Theta_0\}$,

$$\underset{\theta \in \Theta_0}{\operatorname{min}} \text{ } \ell_{S}^{CV} \big(A_{\theta}\big) $$

Although this estimate tends to underestimate $(2)$, in practice the diﬀerence is typically small.

A better, though more computationally intensive estimate of $(2)$ is computed through nested CV.

![[K-fold Nested Cross Validation.png]]

Note that in each run of internal cross-validation we optimize $\theta$ locally, on the training part $S_{-i}$ of the external cross-validation fold. Hence, the nested cross-validation estimate is computed by averaging the performance of predictors obtained with potentially diﬀerent values of their hyper-parameters.

----------------------------------------------------------------

# Consistency and nonparametric algorithms
**Consistency** is an asymptotical property certifying that the risk of the predictors generated by a learning algorithm converges to the Bayes risk in expectation as the size of the training set increases.<br />
Recall that $A(S_m)$ is the predictor generated by a learning algorithm $A$ on a training set $S_m$ of size $m$. A learning algorithm $A$ is **consistent** with respect to a loss function $\ell$ if for any data distribution $\mathcal{D}$ it holds that

$$\underset{m \to \infty}{\operatorname{lim}}\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big] = \ell_{\mathcal{D}}(f^*)$$

where the expectation is with respect to the random draw of the training set $S_m$ of size $m$ from the distribution $\mathcal{D}$, and $\ell_{\mathcal{D}}(f^*)$ is the Bayes risk for $(\mathcal{D}, \ell)$. In some cases, we may define consistency with respect to a restricted class of distributions $\mathcal{D}$. For example, in binary classification we may restrict to all distributions $\mathcal{D}$ such that $\eta(x) = \mathbb{P}(Y = 1 \vert X = x)$ is a **Lipschitz function** on $\mathcal{X}$. Formally, there exists $0 < c < \infty$ such that

$$\vert \eta(x) - \eta(x')\vert \leq c \Vert x - x' \Vert \quad \text{ for all } x, x' \in \mathcal{X}$$

Technically, this conditions implies that $\eta$ is Lipschitz in $\mathcal{X}$. This is a restriction on the set of all allowed $\eta$ as $c < \infty$ implies continuity (but the opposite is not true).

## Nonparametric algorithms
Given a learning algorithm $A$, let $\mathcal{H}_m$ be the set of predictors generated by $A$ on training sets of size $m: h \in \mathcal{H}_m$ if and only if there exists a training set $S_m$ of size $m$ such that $A(S_m) = h$.
We say that $A$ is a **nonparametric learning algorithm** if $A$'s approssimation error (or bias error )vanishes as $m$ grows to infinity. Formally,

$$\underset{m \to \infty}{\operatorname{lim}}\underset{h \in \mathcal{H}_m}{\operatorname{min}}\ell_{\mathcal{D}}(h) = \ell_{\mathcal{D}}(f^*)$$

Two notable examples of nonparametric learning algorithms are $k-NN$ and the greedy algorithm for decision tree classifiers (i.e., the algorithm that always chooses to split a leaf that maximizes the decrease in training error). Nonparametric algorithms are recognizable because:
- the size (memory footprint) of their predictors tends to grow with the training set size;
- for any $m$ and for all $S_m$, $\underset{h \in \mathcal{H}_m}{\operatorname{min}}\ell_{S}(h)$ is close to zero.
The standard $k-NN$ algorithm is nonparametric but not known to be consistent for any fixed value of $k$. Indeed, one can only show that

$$\underset{m \to \infty}{\operatorname{lim}}\mathbb{E}\Big[\ell_{\mathcal{D}}(k-NN(S_m))\Big] \leq \ell_{\mathcal{D}}(f^*) + 2 \sqrt{\frac{\ell_{\mathcal{D}}(f^*)}{k}} \quad \text{ } (1)$$

for any data distribution $\mathcal{D}$. However, if we let $k$ be chosen as a function $k_m$ of the training set size, then the algorithm becomes consistent provided $k_m \to \infty$ and $k_m = o(m)$.

![[behaviour_expected_risk.png]]

In the figure, it is possible to observe the typical behavior of expected risk $\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big]$ as a function of training set size for a consistent algorithm (red line) and for a nonconsistent algorithm (blue line). For small training set sizes $m < m^*$, the nonconsistent algorithm has a better performance.

Similarly, the greedy algorithm for building tree classifiers is consistent (for $\mathcal{X} \equiv \mathbb{R}^d$ ) whenever the two following conditions are fulfilled. Let $\ell(x)$ be the leaf to which $x \in \mathbb{R}^d$ is routed in the current tree and let $N_{\ell}$ be the number of training examples routed to a leaf $\ell$. Then, as $m \to \infty$, to guarantee consistency we must have that
- diameter$\Big(\{x' \in \mathbb{R}^d : \ell(X) = \ell(x')\}\Big) \to 0$;
- $N_{\ell(X)} \to \infty$.

where both conditions must hold when $m \to \infty$ and in probability with respect to the random draw of $X$. In other words, the tree must grow unboundedly but not too fast.

In practice, a consistent algorithm may not be preferred over a nonconsistent one. This due to the fact that the rate of convergence to the Bayes risk of a consistent algorithm can be arbitrarily slow, as shown by the following result.

----------------------------------------------------------------

## Theorem of No Free Lunch
For any sequence $a_1 , a_2 , . . .$ of positive numbers converging to zero and such that $\frac{1}{16}≥ a_1 ≥ a_2 ≥ · · ·$ and for any consistent learning algorithm $A$ for binary classification with zero-one loss, there exists a data distribution $\mathcal{D}$ such that $\ell_{\mathcal{D}}(f^*) = 0$ and $\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big] \geq a_m \quad \forall m \geq 1$.

Theorem of No Free Lunch does not prevent a consistent algorithm from converging fast to the Bayes risk for specific distributions $\mathcal{D}$. What the theorem shows is that if $A$ converges to the Bayes risk for any data distribution, then it will converge arbitrarily slow for some of these distributions.

For binary classification, we can summarize the situation as follows:
- under Lipschitz assumptions on $\eta$, the typical convergence rate to Bayes risk is $m^{−1/(d+1)}$ (exponentially slow in $d$);
- under no assumption on $\eta$, there is no guaranteed convergence rate to Bayes risk;
- under no assumptions on $\eta$, the typical convergence rate to the risk of the best predictor in a parametric (or finite) class $\mathcal{H}$ is $m^{−1/2}$, exponentially better than the nonparametric rate.

Note that the convergence rate $m^{-1/(d+1)}$ implies that to get $\varepsilon$-close to Bayes risk, we need a traning set size $m$ of order $\varepsilon^{-(d+1)}$. This exponential dependence on the number of features of the training set size is known as **curse of dimensionality** and refers to the difficulty of learning in a nonparametric setting when datapoints live in a high-dimensional space.

----------------------------------------------------------------

# Risk Analysis for Nearest-Neighbor
We investigate the problem of bounding the zero-one loss risk of the $1-NN$ binary classifier averaged with respect to the random draw of the training set. Under some assumptions on the data distribution $\mathcal{D}$, we prove a bound of the form

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big] \leq 2 \ell_{\mathcal{D}}(f^*) + \varepsilon_m \quad \text{ } \quad (1)$$

where $A$ denotes the $1-NN$ algorithm, $S_m$ the training set of size $m$, $\ell_{\mathcal{D}}(f^*)$ is the Bayes risk, and $\varepsilon_m$ is a quantity that vanishes for $m \to \infty$. Note that we are able to compare $\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big]$ directly to the Bayes risk, showing that $1-NN$ is, in some sense, a powerful learning algorithm.

Recall that in binary classification we denote the joint distribution of $(X, Y)$ with the pair $(\mathcal{D}_X, \eta)$, where $\mathcal{D}_X$ is the marginal of $\mathcal{D}$ on $X$ and $\eta(x) = \mathbb{P}(Y = 1 \vert X = x)$. Fix $m$ and let $S = \{(x_1, y_1), ..., (x_m, y_m)\}$ be a training set of size $m$. We define the map $\pi(S, \cdot) : \mathbb{R}^d \to \{1, ..., m\}$ by

$$\pi(S, x) = \underset{t = 1, ..., m}{\operatorname{argmin}}\Vert x - x_t \Vert$$

If there is more than one point $x_t$ achieving the minimum in the above expression, then $\pi(S, x)$ selects one of them using any deterministic tie-breaking rule; our analysis does not depend on the specific rule being used. The $1-NN$ classifier $h_S = A(S)$ is defined by $h_S(x) = y_{\pi(S, x)}$.

From now on, the training set $S$ is a sample $\{(X_1, Y_1), ..., (X_m, Y_m)\}$ drawn i.i.d. from $\mathcal{D}$. The expected risk is defined by 

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S))\Big] = \mathbb{P}\Big(Y_{\pi(S, X)} \neq Y\Big)$$

where probabilities and expectations are understood with respect to the random draw of training set $S$ and of the example $(X, Y)$ with respect to which the risk of $A(S)$ is computed.

We now state a crucial lemma.

## Lemma 1
The expected risk of the $1-NN$ classifier can be written as follows

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] = \mathbb{E}\Big[\eta(X_{\pi(S, X)})(1- \eta(X))\Big] + \mathbb{E}\Big[\big(1 - \eta(X_{\pi(S, X)})\big)\eta(X)\Big]$$

To proceed with the analysis, we now need some assumptions on $\mathcal{D}_X$ and $\eta$. First, all data points $X$ drawn from $\mathcal{D}_X$ satisfy $\operatorname{max}_i \vert X_i \vert \leq 1$ with probability one. In other words, $X \in [−1, 1]^d$ with probability $1$. Let $\mathcal{X} \equiv [−1, 1]^d$ the subsets of data points with this property. Second we assume that $\eta$ is Lipschitz on $\mathcal{X}$ with constant $c > 0$. We can thus write

$$\eta(x') \leq \eta(x) + c \Vert x - x' \Vert \quad \text{ } \quad (2)$$
$$1 - \eta(x') \leq 1 - \eta(x) + c \Vert x - x' \Vert \quad \text{ } \quad (3)$$

Using $(2)$ and $(3)$, for all $x, x' \in \mathcal{X}$ we have

$$\eta(x)(1 - \eta(x')) + (1 - \eta(x))\eta(x')$$
$$\leq \eta(x)(1-\eta(x)) + \eta(x) c \Vert x - x' \Vert + (1 - \eta(x))\eta(x) + (1 - \eta(x))c \Vert x - x' \Vert$$
$$= 2 \eta(x)(1- \eta(x)) + c \Vert x - x' \Vert$$
$$\leq 2 \text{ }\operatorname{min} \{\eta(x), 1 - \eta(x)\} + c \Vert x - x' \Vert$$

where the last inequality holds because $z(1 − z) \leq \operatorname{min}\{z, 1 − z\}$ for all $z \in [0, 1]$. Therefore

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] \leq 2 \text{ }\mathbb{E}\Big[\operatorname{min} \{\eta(X), 1 - \eta(X)\}\Big] + c \text{ }\mathbb{E}\Big[\Vert X - X_{\pi(S, X)} \Vert\Big]$$

Recalling that the Bayes risk for the zero-one loss is $\ell_{\mathcal{D}}(f^*) = \mathbb{E}\Big[\operatorname{min}\{\eta(X), 1 − \eta(X)\}\Big]$ we have

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] \leq 2 \text{ }\ell_{\mathcal{D}}(f^*) + c \text{ }\mathbb{E}\Big[\Vert X - X_{\pi(S, X)}\Vert\Big]$$

In order to bound the term containing the expected value of $\Vert X − X_{\pi(S, X)} \Vert$ we partition the data space $\mathcal{X}$ in $d$-dimensional hypercubes with side $\varepsilon > 0$, see in the figure below for a bidimensional example.

![[2d_example_analysis_1-NN.png]]

In the figure, it is possible to see a bidimensional example of the construction used in the analysis of $1-NN$. Left pane: $X$ (the red point) is in the same square $C_i$ as its closest training point $X_{\pi(S, X)}$. Hence, $\Vert X - X_{\pi(S, X)}\Vert$ is bounded by the length of the diagonal of this square. Right pane: here there are no training points in the square where $X$ lies. Hence, $\Vert X - X_{\pi(S, X)} \Vert$ can only be bounded by the length of the entire data space (the large square).

Let $C_1, ..., C_r$ the resulting hypercubes. We can now bound $\Vert X − X_{\pi(S, X)} \Vert$ using a case analysis. Assume first that $X$ belong to a $C_i$ in which there is at least a training point $X_t$. Then $\Vert X - X_{\pi(S, X)} \Vert$ is at most the length of the diagonal of the hypercube, which is $\varepsilon \sqrt{d}$, as it is possible to see int the left pane of the figure. Now assume that $X$ belongs to a $C_i$ in which there are no training points. Then $\Vert X − X_{\pi(S, X)} \Vert$ is only bounded by the length of the diagonal of $\mathcal{X}$, which is $2 \sqrt{d}$, as it is possible to see in the right pane of the figure. Hence, we may write

$$\mathbb{E}\Big[\Vert X - X_{\pi(S, X)}\Vert\Big] \leq \mathbb{E}\Big[ \varepsilon\sqrt{d} \sum_{i = 1}^{r} \mathbb{I}\{C_i \cap S \neq \emptyset\}\mathbb{I}\{X \in C_i\} + 2 \sqrt{d}\sum_{i = 1}^{r}\mathbb{I}\{C_i \cap S = \emptyset\}\mathbb{I}\{X \in C_i\}\Big]$$
$$= \varepsilon\sqrt{d}\mathbb{E} \Big[\sum_{i = 1}^r \mathbb{I}\{C_i \cap S \neq \emptyset\}\mathbb{I}\{X \in C_i\}\Big] + 2 \sqrt{d}\sum_{i = 1}^r \mathbb{E}\big[\mathbb{I}\{C_i \cap S = \emptyset\}\mathbb{I}\{X \in C_i\}\big]$$

where in the last step we used linearity of the expected value. Now observe that, for all $S$ and $X$,

$$\sum_{i = 1}^{r} \mathbb{I}\{C_i \cap S \neq \emptyset\} \mathbb{I}\{X \in C_i\} \in \{0, 1\}$$

because $X \in C_i$ for only one $i = 1, ..., d$. Therefore,

$$\mathbb{E}\Big[\sum_{i = 1}^{r} \mathbb{I}\{C_i \cap S \neq  \emptyset\} \mathbb{I}\{X \in C_i\}\Big] \leq 1$$

To bound the remaining term, we use the independence between $X$ and the training set $S$,

$$\mathbb{E}\big[\mathbb{I}\{C_i \cap S = \emptyset \} \mathbb{I}\{X \in C_i\}\big] = \mathbb{E}\big[\mathbb{I}\{C_i \cap S = \emptyset\}\big]\mathbb{E}\big[\mathbb{I}\{X \in C_i\}\big] = \mathbb{P}(C_i \cap S = \emptyset)\mathbb{P}(X \in C_i)$$

Since $S$ contains $m$ data points independently drawn, for a generic data point $X'$ we have that

$$\mathbb{P}(C_i \cap S = \emptyset) = (1 - \mathbb{P}(X' \in C_i))^m \leq \operatorname{exp}(-m\mathbb{P}(X' \in C_i))$$

where in the last step we used the inequality $(1 − p)^m \leq e ^{-pm}$. Setting $p_i = \mathbb{P}(X' \in C_i)$ we have

$$\mathbb{E}\Big[\Vert X - X_{\pi(S, X)} \Vert\Big] \leq \varepsilon \sqrt{d} + (2 \sqrt{d})\sum_{i = 1}^{r} e^{-p_im}p_i $$
$$\leq \varepsilon \sqrt{d} + (2 \sqrt{d})\sum_{i = 1}^{r} \underset{0 \leq p \leq 1}{\operatorname{max}}e^{-pm}p$$
$$\leq \varepsilon \sqrt{d} + (2 \sqrt{d})r \underset{0 \leq p \leq 1}{\operatorname{max}}e^{-pm}p$$

The concave function $g(p) = e^{−pm}p$ is maximized for $p = \frac{1}{m}$. Therefore,

$$\mathbb{E}\Big[\Vert X - X_{\pi_{S}(X)} \Vert\Big] \leq \varepsilon \sqrt{d} + (2 \sqrt{d}) \frac{r}{em} = \sqrt{d}\Big(\varepsilon + \frac{2}{em} \Big(\frac{2}{\varepsilon}\Big)^d\Big)$$

where we used the fact that the number $r$ of hypercubes is equal to $(\frac{2}{\varepsilon})^d$. Putting evertything together we find that

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] \leq 2 \ell_{\mathcal{D}}(f^*) + c \sqrt{d}\Big(\varepsilon + \frac{2}{em} \big(\frac{2}{\varepsilon}\big)^d\Big)$$

Since this holds for all $0 < \varepsilon < 1$, we can set $\varepsilon = 2 m^{−1/(d+1)}$. This gives

$$\varepsilon + \frac{2}{em} \Big(\frac{2}{\varepsilon}\Big)^d = 2m^{-1/(d+1)} + \frac{2^{d+1}2^{-d}m ^{d/(d+1)}}{em} = 2m^{-1/(d+1)} \Big(1 + \frac{1}{e}\Big) \leq 4m^{-1/(d+1)} \quad \text{ } (4)$$

Substituting this bound in $(4)$, we finally obtain

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] \leq 2 \ell_{\mathcal{D}}(f^*) + c4m^{-1/(d+1)}\sqrt{d}$$

Note that for $m \to \infty$, $\ell_{\mathcal{D}}(f^*) \leq \mathbb{E}[\ell_{\mathcal{D}}(h_S)] \leq 2\ell_{\mathcal{D}}(f^*)$. Namely, the asymptotic risk of $1-NN$ lies between the Bayes risk and twice the Bayes risk.

----------------------------------------------------------------

# Linear predictors
A linear predictor for $\mathcal{X} = \mathbb{R}^d$ is a function $h : \mathbb{R}^d \to \mathbb{R}$ such that $h(x) = f(w^{\top}x)$ for some $w \in \mathbb{R}^d$, where $f : \mathbb{R} \to \mathbb{R}$ is sometimes called the activation function. In linear regression tasks, $f$ is the identity function and so $h(x) = w^{\top}x$. In linear classification tasks, $h(x) = \operatorname{sgn}(w^{\top}x − c)$ for some $c \in \mathbb{R}$, where $\operatorname{sgn}(z) = 1$ if $z > 0$ and $−1$ otherwise. We mostly focus on classification and return to regression only at the end.

## Hyperplanes
Recall that an hyperplane with coefficients $(w,c)$ is defined by $\Big \{x \in \mathbb{R}^d : w^{\top}x = c\Big \}$ , where $w^{\top}x = \Vert w \Vert \Vert x \Vert \cos\theta$ and $\theta$ is the angle between $w$ and $x$ and $\Vert x \Vert \cos\theta$ is the length of the projection of $x$ onto $w$. Hence, the hyperplane defined by $(w,c)$ is orthogonal to $w$ and intersects it at distance $\frac{c}{\Vert w \Vert}$ from the origin.

The halfspaces $H^+$ e $H^−$ defined by the hyperplane $\{x \in \mathbb{R}^d : w^{\top}x = c\}$ are

$$H^+ \equiv \Bigg\{ x : w^{\top}x > c \Bigg\} \quad \text{ and } \quad H^− \equiv \Bigg \{ x' : w^{\top}x' \leq c \Bigg\}$$

That is, all points $x$ whose projection onto $w$ has length strictly bigger than $\frac{c}{ \Vert w \Vert}$, and all points $x'$ whose projection onto $w$ has length not larger than $\frac{c}{\Vert w \Vert}$. Geometrically, a linear classifier is thus defined by

$$ h(x) = \cases{+1 \quad \text{ if } x \in H^+ \cr \cr −1 \quad \text{ if } x \in H^−}$$

Hyperplanes of the form $\Big \{x \in \mathbb{R}^d : w^{\top}x = 0\Big\}$ pass through the origin and are called **homogeneous**. Any non-homogeneous hyperplane $\Big \{x \in \mathbb{R}^d : w^{\top}x = c\Big\}$, with $c \neq 0$, is equivalent to the homogeneous hyperplane $\Big \{x \in \mathbb{R}^{d+1} : v^{\top}x = 0 \Big \}$ with $v = (w_1, ..., w_d, −c)$ in the following sense: $w^{\top}x − c = v^{\top}x'$ for all $x \in \mathbb{R}^d$ and $x' = (x_1, ..., x_d, 1) \in \mathbb{R}^{d+1}$. For this reason, without any loss of generality we only deal with algorithms that learn linear predictors corresponding to homogeneous hyperplanes. This amounts to saying that we automatically add an extra feature with value $1$ to all of our data points.

----------------------------------------------------------------

## Training linear classifiers
Recall that a linear classifier is a predictor $h$ such that $h(x) = \operatorname{sgn}(w^{\top}x)$. Clearly, $\operatorname{sgn}(w^{\top}x) = \operatorname{sgn} (\Vert w \Vert \Vert x \Vert \cos \theta ) = \operatorname{sgn}(\cos \theta)$ (because the norm is always positive). As the classification is only determined by the angle $\theta$ between $w$ and $x$, the value of $\Vert w \Vert$ is immaterial and we may take $\Vert w \Vert = 1$. Note that the zero-one loss $\mathbb{I}\{h(x_t) \neq y_t\}$ can be equivalently rewritten as $\mathbb{I}\{y_tw^{\top}x_t \leq 0\}$ (because if the prediction differs from the actual label, the sign must be negative).<br />
Note also that $y_tw^{\top}x_t = 0$ only when $w = 0$ (we assume $x_t \neq 0$ for all $t$). In this case, $\operatorname{sgn}(w^{\top}x_t) = −1$ and so the classification is actually correct when $y_t = −1$. Hence, using $\mathbb{I}\{y_tw^{\top}x_t \leq 0\}$ to count mistakes we overcount only when $w = 0$ and $y_t = −1$.

Let $\mathcal{H}_d$ be the family of linear classifiers $h(x) = \operatorname{sgn}(w^{\top}x)$ for $w \in \mathbb{R}^d$ such that $\Vert w \Vert = 1$. Consider the ERM algorithm for zero-one loss that, given a training set $S$ containing examples $(x_1,y_1), ..., (x_m,y_m) \in \mathbb{R}^d \times \{−1,1\}$, outputs

$$h_S = \underset{h \in \mathcal{H}_d}{\operatorname{argmin}} \frac{1}{m} \sum_{t = 1}^{m}\mathbb{I} \{h(x_t) \neq y_t\} = \underset{w \in \mathbb{R}^d : \Vert w \Vert = 1}{\operatorname{argmin}} \frac{1}{m} \sum_{t = 1}^{m} \mathbb{I}\{y_tw^{\top}x_t \leq 0\big\} \quad \quad (1)$$

Unfortunately, it is unlikely to find an efficient implementation of ERM for linear classifiers with zero-one loss. In fact, the decision problem associated with finding $h_S$ is $NP$-complete even when $x_t \in \{0,1\}^d$ for $t = 1, ..., m$. More precisely, introduce the following decision problem.

**MinDisagreement**<br />
Instance: Pairs $(x_1, y_1), ..., (x_m,y_m) \in \{0,1\}^d \times \{−1,1\}$. Integer $k$.<br />
Question: Is there $w \in \mathbb{Q}^d$ such that $y_t w^{\top}x_t \leq 0$ for at most $k$ indices $t = 1, ..., m$?

The following result can be shown.

**Theorem 1**: **MinDisagreement is NP-complete**.

In addition to that, the following stronger hardness-of-approximation result can be also shown.

**MinDisOpt**<br />
Instance: Pairs $(x_1, y_1), ..., (x_m,y_m) \in \{0,1\}^d \times \{−1,1\}$.<br />
Solution: A point $w \in \mathbb{Q}^d$ minimizing the number of indices $t = 1, ..., m$ such that $y_t w^{\top}x_t \leq 0$.

Given an instance $S$ (i.e., a training set) of **MinDisOpt**, let $\operatorname{Opt}(S)$ be the number of examples in $S$ that are misclassified by the ERM classifier $h_S$. In other words, $\operatorname{Opt}(S)/m = \ell_S(h_S)$.

**Theorem 2**: if $P \neq NP$, then for all $C > 0$ there are no polynomial time algorithms that approximately solve every instance $S$ of **MinDisOpt** with a number of misclassified examples bounded by $C \times \operatorname{Opt}(S)$.

This implies that, unless $P = NP$ (which is believed unlikely), there are no efficient algorithms that approximate the solution of $(1)$ to within any constant factor. Here efficient means with running time polynomial in the input size $md$.

The ERM problem $(1)$ becomes easier when the training set is **linearly separable**. A training set $(x_1, y_1), ..., (x_m,y_m)$ is linearly separable where there exists a linear classifier with zero training error. In other words, there exists a separating hyperplane $u \in \mathbb{R}^d$ such that

$$\gamma(u) \overset{def}{=} \underset{t = 1, ..., m}{\operatorname{min}} y_t u^{\top}x_t > 0$$

The quantity $\gamma(u)$ is known as the **margin** of $u$ on the training set. The scaled margin $\gamma(u)/ \Vert u \Vert$ measures the distance between the separating hyperplane and the closest training example.

Now observe that the ERM problem $(1)$ can be expressed as a system of linear inequalities,

$$y_t w^{\top} x_t > 0 \quad \text{ } \quad t = 1,...,m$$

When the training set is linearly separable, the system has at least a solution. This solution can be found in polynomial time using an algorithm for linear programming.

We now introduce a very simple algorithm for learning linear classifiers that can be used to solve the ERM problem in the linearly separable case. The Perceptron algorithm finds a homogeneous separating hyperplane by runnning through the training examples one after the other. The current linear classifier is tested on each training example and, in case of misclassification, the associated hyperplane is adjusted. Note that if the algorithm terminates, then $w$ is a separating hyperplane.

```
Data: Training set (x_1,y_1),..., (x_m,y_m) w = (0,..., 0)

while true do
	for t = 1,...,m do (epoch)
		if y_t w^{\top}x_t ≤ 0 then
			w ← w + yt xt     (update)
	end
	if no update in last epoch then break
end

Output: w
```

In this algorithm, it si possible to observe the Perceptron algorithm (for the linearly separable case).

The update $w \leftarrow w + y_t x_t$ when $y_t w^{\top}x_t \leq 0$ makes $y_t w^{\top} x_t$ bigger. Indeed,

$$y_t\Big(w + y_t x_t\Big)^{\top} x_t = y_t w^{\top}x_t + \Vert x_t \Vert ^2 > y_t w^{\top}x_t$$

Geometrically, each update moves $w$ towards $x_t$ if $y_t = 1$ and moves $w$ away from $x_t$ if $y_t = −1$.

We now prove that Perceptron always terminates on linearly separable training sets.

**Theorem 3** (**Convergence of Perceptron**): let $(x_1, y_1), ...,  (x_m, y_m)$ be a linearly separable training set. Then the Perceptron algorithm terminates after a number of updates not bigger than

$$\Bigg(\underset{u: \gamma(u) \geq 1}{\operatorname{min}} \Vert u \Vert^2 \Bigg)\Bigg( \underset{t = 1, ..., m}{\operatorname{max}} \Vert x_t \Vert^2 \Bigg) \quad \text{ } \quad (2)$$

The apparently stonger margin constraint $\gamma(u) \geq 1$ is actually achievable by any separating hyperplane $u$. Indeed, if $\gamma(u) > 0$, then $y_tu^{\top}x_t \geq \gamma(u)$ is equivalent to $y_tv^{\top}x_t \geq 1$ for $v = u/\gamma(u)$. Hence, $\gamma(u) \geq 1$ can be achieved simply by rescaling $u$.

**Proof**: let $w_0 = (0, ..., 0)$ be the initial hyperplane. Let $w_M$ be the hyperplane after $M$ updates and let $t_M \in \{1, ..., m\}$ be the index of the training example $(x_{t_M}, y_{t_M})$ that caused the $M$-th update $w_M = w_{M −1} + y_{t_M} x_{t_M}$. We prove an upper bound on $M$ by deriving upper and lower bounds on $\Vert w_M \Vert \Vert u \Vert$. We start by observing that

$$\Vert w_M \Vert^2 = \Vert w_{M−1} + y_{t_M} x_{t_M} \Vert^2 = \Vert w_{M −1} \Vert^2 + \Vert x_{t_M} \Vert^2 + 2y_{t_M}w^{\top}_{M −1}x_{t_M} \leq \Vert w_{M-1} \Vert^2 + \Vert x_{t_M} \Vert^2$$

because $y_{t_M} w^{\top}_{M −1}x_{t_M} \leq 0$ due to the update $w_M = w_{M −1} + y_{t_M} x_{t_M}$. Iterating this argument $M$ times, and recalling that $w_0 = (0, ...,  0)$, we obtain

$$\Vert w_M \Vert^2 \leq \Vert w_0\Vert^2 + \sum_{i = 1}^{M} \Vert x_{t_i} \Vert^2 \leq M \Big( \underset{t = 1, ...., m}{max} \Vert x_t \Vert^2 \Big )$$

Hence

$$\Vert w_M \Vert \Vert u \Vert \leq \Vert u \Vert \Big (\underset{t = 1, ..., m}{max} \Vert x_t \Vert \Big)\sqrt{M}$$

To prove the lower bound, fix any separating hyperplane $u$ with $\gamma(u) \geq 1$ and let $\theta$ be the angle between $u$ and $w_M$. We have

$$\Vert w_M \Vert \Vert u \Vert \geq \Vert w_M \Vert \Vert u \Vert cos(\theta)\quad \text{ } \quad (since − 1 \leq cos(\theta) \leq 1)$$

$$= w^{\top}_M u \quad \text{ } \quad \text{(by definition of inner product)}$$
$$ = (w_{M−1} + y_{t_M} x_{t_M} )^{\top} u$$
$$= w^{\top}_{M −1}u + y_{t_M} u^{\top}x_{t_M}$$
$$\geq w^{\top}_{M−1}u + 1$$

where the last inequality holds because $1 \leq \gamma(u) \leq y_tu^{\top}x_t$ for all $t = 1, ..., m$. Iterating $M$ times we get

$$\Vert w_M \Vert \Vert u \Vert \geq w^{\top}_0 u + M = M$$

where we used $w^{\top}_0u = 0$ since $w_0 = (0, ..., 0)$. Combining upper and lower bound we obtain

$$M \leq \Vert u \Vert \Big ( \underset{t = 1, ..., m}{max} \Vert x_t \Vert \Big )\sqrt{M}$$

Solving for $M$, and recalling the choice of $u$, we obtain $(2)$. Hence, the update count $M$ cannot grow larger than $(2)$. Since the algorithm stops when no more updates are possible, we conclude that the Perceptron terminates after a bounded number of updates.

Note that the Perceptron convergence theorem does not imply that the Perceptron algorithm terminates in polynomial time on any linearly separable training set. Indeed, it can be shown that the bound $(2)$ is tight in any fixed dimension $d \geq 2$. Hence, although each update takes constant time $\Theta(d)$, the number of updates can still be exponential in $md$ whenever $\gamma(u) \geq 1$ only for those $u$ whose length $\Vert u \Vert$ is very big. Or, equivalently, when the margin $\gamma(u)$ is very small for any linear separator $u$ such that $\Vert u \Vert = 1$.

----------------------------------------------------------------

## Linear regression
In linear regression our predictors are linear functions $h : \mathbb{R}^d \to \mathbb{R}$ each parameterized by a vector $w \in \mathbb{R}^d$ of real coefficients. That is, $h(x) = w^{\top}x$.

Given a training set $(x_1, y_1), ..., (x_m, y_m) \in \mathbb{R}^d \times \mathbb{R}$, the linear regression predictor is the ERM with respect to the square loss,

$$w_S = \underset{w \in \mathbb{R}^d}{\operatorname{argmin}} \sum_{t=1}^{m} \Big ( w^{\top}x_t − y_t \Big)^2$$

Now let $v = (w^{\top}x_1, ..., w^{\top}x_m)$ and $y = (y_1, ..., y_m)$. Then

$$\sum_{t =1}^{m}\big (w^{\top}x_t − y_t\big)^2 = \Vert v − y \Vert^2$$

View all vectors as column vectors. Since $v = Sw$, where $S$ is the $m \times d$ **design matrix** such that $S^{\top} = [x_1, ..., x_m]$, we may also write

$$w_S = \underset{w \in \mathbb{R}^d}{\operatorname{argmin}} \Vert Sw − y \Vert ^2$$

Since $F(w) = \Vert Sw − y\Vert^2$ is a convex function, the minimizer satisfies the condition $\nabla F(w) = 0$.

Using matrix calculus, we have that $\nabla \Vert Sw − y \Vert^2 = 2S^{\top}(Sw − y)$. Hence, $\nabla \Vert Sw − y \Vert^2 = 0$ for $w = (S^{\top}S)^{−1}S^{\top}y$ provided $S^{\top}S$ is nonsingular (i.e., invertible), which is equivalent to $x_1, ..., x_m$ spanning $\mathbb{R}^d$. When this happens, we have that the ERM with respect to the square loss is $w_S = (S^{\top}S)^{-1}S^{\top}y$.

----------------------------------------------------------------

## Ridge Regression
When $S^{\top}S$ is nearly singular, $w_S$ is highly sensitive to perturbations of the training set. This instability increases the estimation error (or variance). A more stable predictor is obtained by introducing a **regularizer** in the ERM functional which increases the approximation error (or bias) and reduces the variance with a beneficial effect on the risk.

In other words, instead of defining $w_S$ by

$$w_S = \underset{w \in \mathbb{R}^d}{\operatorname{argmin}} \Vert Sw − y \Vert^2$$

we use the regularized form, also known as Ridge Regression,

$$w_{S,\alpha} = \underset{w \in \mathbb{R}^d}{\operatorname{argmin}} \Vert Sw − y \vert^2 + \alpha \Vert w \Vert ^2$$

where $\alpha > 0$ is the regularization parameter. When $\alpha \to 0$ we recover the standard linear regression solution. When $\alpha \to \infty$, the solution $w_{S,\alpha}$ becomes the zero vector. This shows that $\alpha$ can be used to control the bias of the algorithm.

Similarly to before, we have that

$$\nabla \Big (\Vert Sw − y \Vert ^2 + \alpha \Vert w\Vert ^2 \Big ) = 2S^{\top}(Sw − y) + 2 \alpha w$$

Hence, the gradient vanishes for $w = w{S,\alpha} = (\alpha I + S^{\top}S)^{−1}S^{\top}y$. Note that we do not have to worry anymore about the singularity of $S^{\top}S$. Indeed, if $\lambda_1 \geq ··· \geq \lambda_d \geq 0$ are the eigenvalues of $S^{\top}S$, the eigenvalues of $\alpha I + S^{\top}S$ are simply $\alpha + \lambda_1 \geq ··· \geq \alpha + \lambda_d > 0$. Hence, $\alpha I + S^{\top}S$ is invertible for all $\alpha > 0$.

----------------------------------------------------------------

# Online Gradient Descent
The Perceptron algorithm accesses training data in a sequential fashion, processing each training example in time $\Theta(d)$ where $d$ is the number of features. This fact, and the observation that a linear model $w$ can be stored in space $\Theta(d)$, make the Perceptron very competitive on large training sets, when we cannot afford a training time growing faster than linear in the number of data points.

Algorithms that learn sequentially, like the Perceptron, are also very good at dealing with scenarios in which new training data are generated at all times. For example: sensor data, financial data, user interaction data, and so on. In these cases, the traditional learning protocol, where predictors are generated by feeding a fixed-size training set to a learning algorithm, becomes inefficient. This happens because everytime new train data are available we would have to run again the algorithm from scratch.

This sequential learning protocol, which we call **online learning**, can be summarized as follows.

**Parameters**: Class $\mathcal{H}$ of predictors, loss function $\ell$.
The algorithm outputs a default initial predictor $h_1 \in \mathcal{H}$.
For $t = 1,2,...$
1) the next example $(x_t,y_t)$ is observed;
2) the loss $\ell\Big( h_t(x_t),y_t\Big)$ of the current predictor $h_t$ is computed;
3) the online learner updates $h_t$ generating a new predictor $h_{t+1} \in \mathcal{H}$.

A characterizing feature of online learning is that the model update $h_t \to h_{t+1}$ is typically **local**. That is, it only involves the current predictor $h_t$ and the current example $(x_t,y_t)$.

Note that an online learner $A$ generates a sequence $h_1,h_2,... \in \mathcal{H}$ of predictors. We evaluate the performance of $A$ through the notion of **sequential risk**,

$$\frac{1}{T}\sum_{t = 1}^{T}\ell\Big(h_t(x_t), y_t\Big)$$

measuring, as a function of $T$, the average loss of the predictor sequence over the first $T$ examples. The sequential risks is the online learning counterpart of the notion of statistical risk in statistical learning.

In what follows, we use the notation $\ell_t(h) = \ell\big( h(x_t),y_t \big)$ when the sequence $(x_1, y_1), (x_2, y_2), ...$ is understood from the context. This defines a sequence $\ell_1, \ell_2, ...$ of loss functions.

In keeping with the analogy between online and statistical learning, we also define the **regret**

$$\frac{1}{T}\sum_{t = 1}^{T}\ell_t(h_t) - \underset{h \in \mathcal{H}}{\operatorname{min}}\frac{1}{T}\sum_{t = 1}^{T}\ell_t(h)$$

which measures the difference between the sequential risk of $h_1, ..., h_T$, generated by some online algorithm $A$, and the sequential risk of the best predictor in the class $\mathcal{H}$ for the loss functions $\ell_1, ..., \ell_T$. Regret can be viewed as the sequential counterpart of variance error in statistical learning.

We now introduce the online version of gradient descent, **online gradient descent** (**OGD**), which can be applied to any convex and differentiable loss function. Gradient descent is the workhorse of convex optimization. Given a convex and differentiable function $f : \mathbb{R}^d \to \mathbb{R}$ which we want to minimize, gradient descent works by iterating $w_{t+1} = w_t − \eta_t \nabla f(w_t)$ starting from some initial point $w_1$ in the domain of $f$, where $\eta > 0$ is a parameter. If the current point $w_t$ is not a minimum of $f$, then $\nabla f(w_t) \neq 0$ and $w_{t+1} − w_t$ points in the direction opposite to $\nabla f(w_t)$, which is, by definition of gradient, the direction where $f$ decreases the most when moving away from $w_t$. In order to analyze OGD, we must understand the behavior of gradient descent when the function to minimize changes at every step.

We focus on OGD applied to linear predictors $h(x) = w^{\top}x$, for $w \in \mathbb{R}^d$. We use the notation $\ell_t(w) = \ell(w^{\top}x_t, y_t)$ and assume that losses $\ell_1, \ell_2, ...$ are all convex and differentiable. For example, $\ell_t(w) = \Big(w^{\top}x_t − y_t \Big)^2$.

## Projected OGD
Parameters: $\eta > 0, U > 0$<br />
Initialization: $w_1 = 0$<br />
For $t = 1, 2, ...$
1) $w_{t+1}' = w_t − \frac{\eta}{\sqrt{t}} \nabla \ell_t(w_t)$;
2) $w_{t+1} = \underset{w: \Vert w \Vert \leq U}{\operatorname{argmin}} \Vert w − w_{t+1}' \Vert$.

In step $2$, we project $w_{t+1}'$ in an Euclidean sphere of radius $U$. If $\Vert w_{t+1}' \Vert \leq U$, then $w_{t+1} = w_{t+1}'$. Let $\eta_t = \frac{\eta}{\sqrt{t}}$, where $\eta > 0$ will be determined by the analysis.

Our goal is to control the regret

$$\frac{1}{T}\sum_{t = 1}^{T}\ell_t(w_t) - \frac{1}{T}\sum_{t = 1}^{T}\ell_t(u^*_T) \quad \text{ where } \quad u^*_T = \underset{u:\Vert u \Vert \leq U}{\operatorname{argmin}} \frac{1}{T} \sum_{t = 1}^{T}\ell_t(u)$$

Note that $u^*_T$ is the predictor in the ball of radius $U$ with smallest average loss over the first $T$ steps. In what follows, we use the notation $R_T(u) = \sum_{t = 1}^{T} \big(\ell_t(w_t) - \ell_t(u) \big)$. The analysis of OGD is based on the following well-know result. 

--------------------------------------------

## Lemma 1 (Taylor’s formula for multivariate functions)
Let $f : \mathbb{R}^d \to \mathbb{R}$ be a **twice differentiable function**. Then, for all $w,u \in \mathbb{R}^d$,

$$f (u) = f (w) + \nabla f (w)^{\top}(u − w) + \frac{1}{2}(u − w)^{\top}\nabla^2f(\xi)(u − w)$$

where $\nabla^2f(\xi)$ is the **Hessian matrix** of $f$ evaluated at a point $\xi$ on the segment joining $u$ and $w$.

If $f$ is convex, then $\nabla^2 f$ is positive semidefinite, and so $z^{\top}\nabla^2f(\xi)z \geq 0$ for all $z,\xi \in \mathbb{R}^d$. This in turn implies

$$f(w) − f(u) \leq \nabla f(w)^{\top}(w − u) \quad \text{ } \quad (1)$$

This actually holds for any convex and differentiable $f$ (i.e., $f$ need not be twice differentiable). Now fix $T$, let $u = u_{T}^*$, and note that, for each $t = 1,2,...$,

$$\ell_t(w_t) - \ell_t(u) \leq \nabla \ell_t(w_t)^{\top}(w_t - u) \quad \text{ } \quad (2)$$
$$= -\frac{1}{\eta_t}(w_{t+1}' - w_t)^{\top}(w_t - u) \quad \text{ } \quad (3)$$
$$= \frac{1}{\eta_t}\Big(\frac{1}{2} \Vert w_t - u \Vert^2 - \frac{1}{2}\Vert w_{t+1}' - u\Vert^2 + \frac{1}{2} \Vert w_{t+1}' - w_t\Vert^2 \Big) \quad \text{ } \quad (4)$$
$$\leq \frac{1}{\eta_t}\Big(\frac{1}{2} \Vert w_t - u \Vert^2 - \frac{1}{2}\Vert w_{t+1} - u\Vert^2 + \frac{1}{2} \Vert w_{t+1}' - w_t\Vert^2 \Big) \quad \text{ } \quad (5)$$


Inequality $(2)$ is due to $(1)$. Equality $(3)$ uses $w_{t+1}' − w_t = −\eta_t \nabla \ell_t(w_t)$. Equality $(4)$ is an easily verified algebraic identity. Finally, inequality $(5)$ holds because $u$ belong to the sphere of radius $U$ centered at the origin. Hence, by projecting $w_{t+1}'$ onto this sphere, the distance to $u$ can not increase.

We now add and subtract the same term $\frac{1}{2\eta_{t+1}}\Vert w_{t+1} − u \Vert^2$ to the last member of the above chain of inequalities. Then, we regroup terms as indicated below here

$$\underbrace{\frac{1}{2\eta_t}\Vert w_t - u\Vert^2 - \frac{1}{2\eta_{t+1}} \Vert w_{t+1} - u \Vert^2} \underbrace{- \frac{1}{2\eta_t}\Vert w_{t+1} - u \Vert^2 + \frac{1}{2\eta_{t+1}}\Vert w_{t+1} - u\Vert^2} + \frac{1}{2\eta_t} \Vert w_{t+1}' - w_t \Vert^2$$

Summing over $t = 1, ..., T$ we observe that the first pair of terms forms a telescopic sum, while the terms in the second pair have a common factor,

$$R_T(u) \leq \frac{1}{2\eta_1} \Vert w_1 - u \Vert^2 - \frac{1}{2\eta_{T+1}}\Vert w_{T+1} - u \Vert^2  + ...$$$$... + \frac{1}{2}\sum_{t = 1}^{T} \Vert w_{t+1} - u\Vert^2 \Big(\frac{1}{\eta_{t+1}} - \frac{1}{\eta_t}\Big) + \frac{1}{2}\sum_{t = 1}^{T}\frac{1}{\eta_t}\Vert w_{t+1}' - w_t\Vert^2 \quad \text{ } \quad (6)$$

Next, we make use of the following facts:

$$w_1 = 0 \quad \text{ by construction}$$

$$\Vert w_{t+1} − u\Vert^2 \leq 4U^2 \quad \text{ since both } w_{t+1} \text{ and } u \text{ belong to a sphere of radius} U$$
$$\Vert w_{t+1}' − w_t \Vert^2 = \eta_t^2 \Vert \nabla \ell_t(w_t)\Vert^2 \quad \text{ by construction}$$

Substituting these relations in $(6)$, and choosing $G$ so that $\Vert \nabla \ell_t(w_t)∥ \leq G$ for all $t \leq T$, we obtain

$$R_T(u) \leq \frac{U^2}{2\eta_1} - \frac{1}{2\eta_{T+1}} \Vert w_{T+1} -u\Vert^2 + ...$$
$$... + 2U^2\sum_{t = 1}^{T-1}\Big(\frac{1}{\eta_{t+1}} - \frac{1}{\eta_t}\Big) + \frac{1}{2\eta_{T+1}} \Vert w_{T+1} - u\Vert^2 - \frac{1}{2\eta_T}\Vert w_{T+1} - u\Vert^2 + \frac{G^2}{2}\sum_{t = 1}^{T}\eta_t$$

We proceed by simplifying the telescopic sum, deleting terms with opposite signs, and dropping the term $−\frac{1}{2\eta_T} \Vert w_{T+1} − u \Vert^2$,

$$R_T(u) \leq \frac{U^2}{2\eta_1} + \frac{2U^2}{\eta_T} - \frac{2U^2}{\eta_1} + \frac{G^2}{2}\sum_{t = 1}^{T}\eta_t \leq \frac{2U^2\sqrt{T}}{\eta} + \frac{G^2\eta}{2}\sum_{t = 1}^{T}\frac{1}{\sqrt{t}} \leq \frac{2U^2\sqrt{T}}{\eta} + G^2\eta\sqrt{T}$$

where we used the upper bound

$$\sum_{t = 1}^{T}\frac{1}{\sqrt{t}} \leq 2 \sqrt{T}$$

Choosing $\eta = (U/G)\sqrt{2}$ and dividing everything by $T$ we obtain the final regret bound

$$\frac{1}{T}\sum_{t = 1}^{T}\ell_t(w_t) \leq \underset{u : \Vert u \Vert \leq U}{\operatorname{min}} \frac{1}{T} \sum_{t = 1}^{T} \ell_t(u) + UG\sqrt{\frac{8}{T}} \quad \text{ } \quad (7)$$

Explicit values for $G$ may be obtained under specific assumptions. For example, in case of regression with square loss $\ell_t(w) = (w^{\top}x_t − y_t)^2$, assuming $\Vert x_t \Vert \leq X$ and $\vert y_t \vert \leq UX$ for all $t$ we can compute

$$\Vert \nabla \ell_t(w_t)\Vert \leq 2 \vert w^{\top}x_t - y_t \vert \Vert x_t \Vert \leq 2(\Vert w_t \Vert \Vert x_t \Vert + \vert y_t \vert) \Vert x_t \Vert \leq 4UX^2$$

Substituting this value for $G$ in the previous upper bound we get

$$\frac{1}{T}\sum_{t = 1}^{T}\ell_t(w_t) \leq \underset{u : \Vert u \Vert \leq U}{\operatorname{min}} \frac{1}{T} \sum_{t = 1}^{T} \ell_t(u) + 8(UX)^2\sqrt{\frac{2}{T}}$$

----------------------------------------------------------------

## OGD with strongly convex losses
The upper bound $(7)$ holds for any sequence $\ell_1, \ell_2, ...$ of convex and differentiable loss functions, including linear functions such as $\ell_t(w) = \vert y_t −w^{\top}x_t \vert$ for $x_t \in \mathbb{R}^d$ and $y_t \in \mathbb{R}$. It can be shown that $(7)$ can not be significantly improved if the loss functions are all linear. But what if all loss functions are convex and never flat? To formalize this scenario, we use the notion of **strong convexity**. A differentiable function $\ell$ is $\sigma$-strongly convex, for some $\sigma > 0$, if

$$\ell(w) − \ell(u) \leq \nabla \ell(w)^{\top}(w − u) − \frac{\sigma}{2}\Vert u − w \Vert^2 \quad \text{ } \quad (8)$$

If $\ell$ is also twice-differentiable, then $(8)$ is equivalent to saying that the Hessian matrix of $\ell$ has full rank, that is, all of its eigenvalues are positive. A simple example of strongly convex function is $\ell(w) = \frac{1}{2} \Vert w \Vert^2$. Indeed,

$$\frac{1}{2} \Vert w \Vert^2 - \frac{1}{2} \Vert u \Vert^2 = w^{\top}(w - u) - \frac{1}{2} \Vert w - u\Vert^2$$

Hence, this function is strongly convex for $\sigma = 1$.

As we see later, OGD with strongly convex functions can be applied to a vast and important class of learning algorithms, including **Support Vector Machines**, corresponding to regularized forms of ERM.

When run on a sequence of strongly convex function, OGD does not need the projection step.

----------------------------------------------------------------

## The OGD algorithm for σ-strongly convex functions
Initialization: $w_1 = 0$<br />
For $t = 1, 2, ...$
1) $w_{t+1} = w_t − \frac{1}{\sigma t} \nabla \ell_t(w_t)$

In order to prove a regret bound, we apply $(4)$ to the analysis of OGD under the assumption that $\ell_1, \ell_2, ...$ are all $\sigma$-strongly convex functions. Setting $\eta_t = \frac{1}{\sigma_t}$ we get

$$\ell_t(w_t) - \ell_t(u) \leq \nabla \ell_t(w_t)^{\top}(w_t - u) - \frac{\sigma}{2}\Vert u - w_t\Vert^2$$
$$= -\frac{1}{\eta_t}(w_{t+1} - w_t)^{\top}(w_t - u) - \frac{\sigma}{2}\Vert u - w_t\Vert^2$$
$$= \frac{1}{\eta_t}\Big(\frac{1}{2}\Vert w_t -u \Vert^2 - \frac{1}{2}\Vert w_{t+1} -u \Vert^2 + \frac{1}{2}\Vert w_{t+1} -w_t \Vert^2\Big) - \frac{\sigma}{2}\Vert u -w_t \Vert^2$$

Proceeding just like we did in the proof of OGD with projection, while exploiting the additional terms $−\frac{\sigma}{2} \Vert u − w_t\Vert^2$, we obtain

$$R_T(u) \leq \Big(\frac{1}{\eta_1} - \sigma\Big) \frac{1}{2} \Vert w_1 - u\Vert^2 - \frac{1}{2\eta_{T+1}}\Vert w_{T+1} - u\Vert^2 + ...$$
$$... + \frac{1}{2}\sum_{t = 1}^{T-1} \Vert w_{t+1} - u\Vert^2 \Big(\frac{1}{\eta_{t- 1}} - \frac{1}{\eta_t} - \sigma\Big) + \Vert w_{T+1} - u\Vert^2 \frac{1}{2}\Big(\frac{1}{\eta_{T + 1}} - \frac{1}{\eta_t}\Big) + \frac{G^2}{2}\sum_{t = 1}^{T}\eta_t$$

where, similarly to before, $G \geq \operatorname{max}_t \Vert \nabla \ell_t(w_t)\Vert$.

Dropping the negative term $−\frac{1}{2\eta_T} \Vert w_{T+1} − u \Vert^2$, simplifying the term $\frac{1}{2\eta_{T+1}} \Vert w_{T+1} − u \Vert^2$ which occurs with opposite signs, using the choice $\eta_t = \frac{1}{\sigma t}$, and making some further cancellations leads us to

$$R_T(u) \leq \frac{G^2}{2\sigma} \sum_{t = 1}^{T} \frac{1}{t} \leq \frac{G^2}{2\sigma}\ln{(T + 1)}$$

where we used a simple logarithmic upper bound to the harmonic sum $1 + \frac{1}{2} + \frac{1}{3} + ···+ \frac{1}{T}$.

This gives the final result

$$\frac{1}{T}\sum_{t = 1}^{T}\ell_t(w_t) \leq \underset{u \in \mathbb{R}^d}{\operatorname{min}} \frac{1}{T} \sum_{t = 1}^{T} \ell_t(u) + \frac{G^2}{2\sigma}\frac{\ln{(T + 1)}}{T}$$

Note the improved dependence $\frac{\ln{T}}{T}$ compared to $\frac{1}{\sqrt{T}}$ obtained in $(7)$ for convex (as opposed to strongly convex) loss functions.

----------------------------------------------------------------

## A mistake bound for the Perceptron algorithm
We now prove an upper bound on the number of prediction mistakes made by the Perceptron on an arbitrary stream. Because the zero-one loss is not convex, we cannot directly apply the machinery developed for OGD. Instead, we adapt the proof of the Perceptron convergence theorem and use a convex upper bound on the zero-one loss to compensate for the lack of convexity.

Let $(x_1 , y_1),(x_2, y_2), ... \in \mathbb{R}^d \times \{−1,1\}$ be a stream of data points with binary labels and let $M$ be the number of prediction mistakes made by the Perceptron in the first $T$ examples of the stream. Let $w_M$ be the Perceptron hyperplane after these $M$ prediction mistakes and let $t_M \in \{1, ..., T\}$ be the index of the example $(x_{t_M}, y_{t_M})$ in the stream that caused the $M$-th mistake $w_M = w_{M −1}+y_{t_M}x_{t_M}$. Now fix any $u \in \mathbb{R}^d$. This $u$ is not necessarily a separator, because we are not making any assumption on the stream. The first part of the proof of the Perceptron convergence theorem does not use any special property of $u$. Therefore, proceeding in exactly the same way, we have that

$$\Vert w_M \Vert \Vert u \Vert \leq \Vert u \Vert \Bigg (\underset{t = 1, ..., m}{\operatorname{max}}\Vert x_t \Vert \Bigg) \sqrt{M}$$

In order to prove a lower bound on $\Vert w_M \Vert \Vert u \Vert$ and finish the proof, we proceed as follows

$$\Vert w_M \Vert \Vert u \Vert \geq w_M^{\top}u$$
$$= (w_{M-1} + y_{t_M}x_{t_M})^{\top}u$$
$$= w_{M-1}^{\top} u + y_{t_M} u ^{\top} x_{t_M}$$
$$= w_{M-1}^{\top} u + 1 - 1 + y_{t_M} u ^{\top} x_{t_M}$$
$$\geq w_{M-1}^{\top} u + 1 - [1 + y_{t_M} u ^{\top} x_{t_M}]_+$$

where $[z]_+ = \operatorname{max}\{0,z\}$. Iterating $M$ times we get

$$\Vert w_M \Vert \Vert u \Vert \geq M + \sum_{i = 1}^{M}[1 + y_{t_i}u^{\top}x_{t_i}]_+$$

Where we used $w^{\top}_0 u = 0$ since $w_0 = (0, ..., 0)$. Let $X = \operatorname{max}_t \Vert x_t \Vert$. Combining upper and lower bound we obtain

$$M \leq \sum_{i = 1}^{M}[1 + y_{t_i}u^{\top}x_{t_i}]_+ + \Vert u \Vert X \sqrt{M} \quad \text{ } \quad (9)$$

The function $h_t(u) = [1 + y_t u^{\top}x_t]_+$ is a loss function called **hinge loss**. Since $\mathbb{I}\{\operatorname{sgn}(z) \neq y\} \leq [1− zy]_+$ for all $z \in \mathbb{R}$ and $y \in \{−1,1\}$, the hinge loss is a convex upper bound on the zero-one loss. Because $\{t_1, ..., t_M\} \subseteq \{1, ..., T\}$,

$$\sum_{i = 1}^{M}h_{t_i}(u) \leq \sum_{t = 1}^{T}h_t(u)$$

we can rewrite $(9)$ as

$$M \leq \sum_{t = 1}^{T}h_t(u) + \Vert u \Vert X \sqrt{M}$$

Solving with respect to $M$ and overapproximating, we get

$$M \leq \sum_{t = 1}^{T}h_t(u) + \big(\Vert u \Vert X\big)^2 + \Vert u \Vert X \sqrt{\sum_{t = 1}^{T}h_t(u)} \quad \text{ for all } u \in \mathbb{R}^d$$

This shows a bound on the number of mistakes made by the Perceptron on any data sequence of arbitrary length $T$, including those sequences that are not linearly separable. When the sequence is linearly separable, then there exists $u \in \mathbb{R}^d$ such that $y_t u^{\top}x_t \geq 1$ for all $t$, which in turn implies $h_t(u) = 0$ for all $t$. Hence, the bound reduces to the one already proved in the Perceptron convergence theorem, $M_T \leq (\Vert u \Vert X)^2$.

----------------------------------------------------------------

# Kernel functions
Linear predictors may potentially suffer from a large approximation error because they are always described by a number of coefficients which can not be larger than the number of features. A popular technique to reduce this bias is feature expansion, which adds new parameters by constructing new features through nonlinear combinations of the base features. Formally, this can be viewed in terms of a function $\phi: \mathbb{R}^d \to \mathcal{H}$ mapping data points $x \in \mathbb{R}^d$ to a higher-dimensional space $\mathcal{H}$. By training a linear predictor on a feature-expanded training set, one actually learns a more complex nonlinear predictor in the original space.

For example, consider the quadratic feature-expansion map $\phi : \mathbb{R}^2 \to \mathbb{R}^6$ defined by $\phi(x_1, x_2) = (1, x_1^2, x_2^2, x_1, x_2, x_1x_2)$. Recall that a homogeneous hyperplane in $\mathbb{R}^6$ with coefficients given by $w = (w_1, ..., w_6)$ is the set of points $\{z \in \mathbb{R}^6 : w^{\top}z = 0\}$. Now note that $w^{\top}\phi(x) = w_1 + w_2x^2_1+ w_3x^2_2+ w_4x1+w_5x_2 + w_6x_1x_2$. Sets of the form $\{x \in \mathbb{R}^2 : w_1 + w_2x_1^2 + w_3x_2^2 + w_4x_1 + w_5x_2 + w_6x_1x_2 = 0\}$ describe second-degree curves on the plane $\mathbb{R}^2$. These  surfaces include ellipses, parabolas, and hyperbolas.

In general, we may consider polynomial feature expansion maps $\phi : \mathbb{R}^d \to \mathcal{H}$, where $\mathcal{H} \equiv \mathbb{R}^N$ , that use features of the form $\prod_{s = 1}^{k}x_{v_s}$ for all $v \in \{1,...,d\}^k$ and for all $k = 0, 1, ..., n$ (the previous example is a special case for $d = 2$ and $n = 2$). Fix such a $\phi$ and consider the classifier $h : \mathbb{R}^d \to \{−1,1\}$ defined by

$$h(x) = \operatorname{sgn}(w^{\top}\phi(x)) \quad \text {where } \quad w^{\top}\phi(x) = \sum_{i = 1}^{N}w_i \phi(x)_i$$

This nonlinear classifier in $\mathbb{R}^d$ corresponds to a linear classifier in the space $\mathbb{R}^N$ . Note, however, that

$$N = \sum_ {k = 0}^{n}\vert \{1, ..., d\}^k\vert = \sum_{k = 0}^{n}d^k = \frac{d^{n+1}-1}{d-1}$$

This implies that $N = \Theta(d^n)$ is exponential in the degree $n$, and computing $\phi$ becomes infeasible even for moderately large $n$.

This computational barrier can be fully sidestepped using the so-called **kernel trick**, which can be applied to many algorithms for learning linear predictors. For example, recall the Perceptron update rule $w_{t+1} = w_t+ y_tx_t$ where $w_1 = 0$. Then, linear classifiers learned through the Perceptron are of the form

$$h(x) = \operatorname{sgn}\Big(\sum_{s \in S}y_sx_s^{\top}x \Big)$$

where $S$ is the set of indices $s$ of training examples $(x_s, y_s)$ on which the Perceptron made an update. If we run the Perceptron in the space $\mathbb{R}^N$ , the linear classifier $h$ becomes

$$h_{\phi}(x) = \operatorname{sgn}\Big(\sum_{s \in S}y_s\phi(x_s)^{\top}\phi(x)\Big)$$

Hence, in order to compute $h_{\phi}(x)$ quickly we need a way of computing quickly each term $\phi(x_s)^{\top}\phi(x)$. The kernel trick helps us find an efficiently computable kernel function $K : \mathbb{R}^d \times \mathbb{R}^d \to \mathbb{R}$ such that

$$K(x, x') = \phi(x)^{\top}\phi(x') \quad \text{ for all } x, x' \in \mathbb{R}^d \quad \text{ } \quad (1)$$

For example, the quadratic kernel, corresponding to the quadratic feature-expansion map

$$\phi(x_1, x_2) = (1, x_1^2, x_2^2, \sqrt{2}x_1, \sqrt{2}x_2, \sqrt{2}x_1x_2)$$

is $K(x,x') = (1 + x^{\top}x')^2$, as one can easily verify (the presence of the $\sqrt{2}$ coefficients, which is needed for the math, does not change the class of linear predictors that are representable using the mapping).

Given a kernel $K$, we can then write the linear classifier generated by the Perceptron as

$$h_K(x) = \operatorname{sgn}\Bigg(\sum_{s \in S}y_sK(x_s, x) \Bigg)\quad \text{ } \quad (2)$$

Below here, we give the pseudo-code of the Kernel Perceptron algorithm.

## Algorithm: Kernel Perceptron
Let S be the empty set.<br />
For all $t = 1, 2, ...$
1) get next example $(x_t, y_t)$;
2) compute $\hat{y}_t = \operatorname{sgn} \Bigg(\sum_{s \in S}y_sK(x_s, x_t)\Bigg)$;
3) if $\hat{y}_t \neq y_t$ add $t$ to $S$.

The polynomial kernel $K_n(x,x') = (1 + x{\top}x')^n$ for all $n \in \mathbb{N}$ generalizes the quadratic kernel defined earlier. Using Newton’s Binomial Theorem, we can explicitely compute the map $\phi_n$ such that $K_n(x,x') = \phi_n(x)^{\top}\phi_n(x')$,

$$(1 + x^{\top}x')^n = \sum_{k = 0}^{n} \binom{n}{k}(x^{\top}x')\quad \text{ } \quad(3)$$

Now observe that

$$(x^\top x')^k = \Big(\sum_{i = 1}^{d}x_ix'_i \Big)^k = \sum_{v \in \{1, ..., d\}^k}\Big(\prod_{s = 1}^{k} x_{v_s}x'_{v_s}\Big)$$

Therefore, 

$$\phi_n(x) = \Bigg( \sqrt{\binom{n}{k}} \prod_{s = 1}^{k}x_{v_s}\Bigg)_{k = 0, ..., n,\text{ } v \in \{1, ..., d\}^k} \quad \text{ } \quad (4)$$

In other words, the feature map $\phi_n: \mathbb{R}^d \to \mathbb{R}^N$ associated with the polynomial kernel $K_n$ sends each $x \in \mathbb{R}^d$ to a vector whose components are indexed by all monomials $\prod_{s = 1}^k x_{v_s}$ of degree at most $n$ and weighted by the roots of the binomial coefficients.

Another type of kernel is the Gaussian kernel,

$$K_{\gamma}(x, x') = \operatorname{exp}\Big(-\frac{1}{2\gamma} \Vert x - x'\Vert^2\Big) \quad \text{ } \quad \gamma > 0$$

In order to derive the map $\phi_\gamma$ associated with $K_\gamma$ we proceeed as follows,

$$\operatorname{exp}\Big(-\frac{1}{2\gamma} \Vert x - x' \Vert^2 \Big) = \operatorname{exp}\Big(-\frac{1}{2\gamma} (\Vert x \Vert^2 + \Vert x' \Vert^2 \Big)$$
$$= \operatorname{exp}\Big(-\frac{\Vert x \Vert^2}{2\gamma} \Big) \operatorname{exp}\Big(-\frac{\Vert x' \Vert^2}{2\gamma} \Big) \sum_{n = 0}^{\infty} \frac{1}{n!} \frac{(x^\top x')^n}{\gamma^n} \quad \text{ }\quad (5)$$

where we used the Taylor series expansion $e^x = 1 + x + \frac{x^2}{2!} + ···$. A closer look at $(5)$ reveals that the Gaussian kernel is a linear combination of infinitely many polynomial kernels $(3)$ of increasing degree, each weighted by the reciprocal of the factorial of its degree. The parameter $\gamma$ is a scaling factor for the products $x^{\top}x'$. Finally, the factors $e^{-\Vert x \Vert^2 / (2 \gamma)}e^{-\Vert x' \Vert^2/(2\gamma)}$ normalize with respect to $x$ and $x'$ giving $K_\gamma(x,x) = 1$ for each $x \in \mathbb{R}^d$.

Note that predictors of the form $(2)$ that utilize Gaussian kernels predict any point $x$ using a linear combination (with coefficients $y_t$) of Gaussians $e^{-z^2/(2\gamma)}$ centered on $x_s$ for $s \in S$ and evaluated at $x$.

The Gaussian kernel is **universal** in the following sense: for each $\gamma > 0$, for each continuous function $f : \mathbb{R}^d \to \mathbb{R}$, and for each $\varepsilon > 0$, there exists a function $g$ of the form

$$g = \sum_{i = 1}^{N} \alpha_i K_\gamma(x_i, \cdot)$$

for some $x_1, ..., x_N \in \mathcal{X}, \alpha_1, ..., \alpha_N \in  \mathbb{R}$, and $N \in \mathbb{N}$ such that $g$ approximates $f$ with error bounded by $\varepsilon$. An important consequence of this fact is that learning algorithms that use Gaussian kernels can be consistent (that is, the expected risk of their predictors converges to the Bayes risk as the sample size grows to infinity).

Given a data space $\mathcal{X}$ (not necessarily $\mathbb{R}^d$) and a symmetric function $K : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ how can we check whether $K$ is a kernel? In other words, we want to know whether there exists a feature map $\phi_K: \mathcal{X} \to \mathcal{H}_K$, where $\mathcal{H}_K$ is a linear space with inner product $\langle \cdot, \cdot \rangle$ such that $\langle \phi_K(x), \phi_K(x')\rangle_K = K(x, x')$ for all $x, x' \in \mathcal{X}$. The space $\mathcal{H}_K$ must be linear because our algorithms build linear predictors using additive updates. Luckily, there is a very simple characterization: $K$ is a kernel if and only if for all $m \in \mathbb{N}$ and for all $x_1, ..., x_m \in  \mathcal{X}$, the $m\times m$ matrix $K$ such that $K_{i, j} = K(x_i, x_j)$ is positive semidefinite. That is, $z^{\top}Kz \geq 0$ for all $z \in \mathbb{R}^m$.

The above result tells us the conditions under which $\phi_K$ exists for a given $K$. On the other hand, it does not tell us how $\phi_K$ looks like. In fact, there is no unique representation of the pair $\big(\Phi_K ,\mathcal{H}_K\big)$ for a given kernel $K$. However, it can be shown that if $K$ is a kernel, then we can always represent $\phi_K : \mathcal{X} \to \mathcal{H}_K$ as $\phi_K(x) = K(x, \cdot )$. Now, since $\mathcal{H}_K$ must be a linear space, we define it as the set of all linear combinations of $K(x,\cdot)$ for arbitrary choices of the coefficients and of the points $x \in  \mathcal{X}$,

$$\mathcal{H}_K \equiv \Bigg \{\sum_{i = 1}^N \alpha_i K(x_i, \cdot) : x_1, ..., x_N \in \mathcal{X}, \alpha_i, ...., \alpha_N \in \mathbb{R}, N \in \mathbb{N} \Bigg\}$$

An element $f \in \mathcal{H}_K$ is then a function $f : \mathcal{X} \to \mathbb{R}$ such that

$$f(x) = \sum_{i = 1}^{N}\alpha_iK(x_i, x)$$

for some $x_1, ..., x_N \in \mathcal{X}, \alpha_1, ..., \alpha_N \in \mathbb{R}$, and $N \in \mathbb{N}$.

A learning algorithm producing linear predictors $g \in \mathcal{H}_K$ becomes nonparametric when $K$ is the Gaussian kernel and $N$ (the number of terms in the sum defining any $g \in \mathcal{H}_K$) is free to grow unbounded as the sample size increases. If, instead, $K$ is a kernel such that $\phi_K$ maps $\mathcal{X}$ to a finite dimensional space, then any $g \in \mathcal{H}_K$ can be always represented with a fixed number of parameters, and therefore any algorithm choosing predictors from $\mathcal{H}_K$ is parametric.

For linear predictors $w \in \mathbb{R}^d$, we compute $w^{\top}x$ using the standard notion of Euclidean inner product. For linear predictors $f \in \mathcal{H}_K$ , instead, we compute $\langle f, \phi_K(x)\rangle_K$ using the inner product for $\mathcal{H}_K$ . Now, since $\phi_K$ is the feature map for $K$, we must have $\langle \phi_K(x), \phi_K(x')\rangle_K = K(x,x')$. Thus, recalling that the inner product is a bilinear operator, we can write

$$\langle f, \phi_K(x)\rangle_K = \sum_{i = 1}^{N}\alpha_i \langle K(x_i, \cdot), \phi_K(x)\rangle_K = \sum_{i = 1}^{N} \alpha_i \langle \phi_K(x_i), \phi_K(x)\rangle_K = \sum_{i = 1}^{N} \alpha_i K(x_i, x) = f(x)$$

The equality $\langle f,\phi_K(x)\rangle_K = f(x)$ is known as **reproducing property**. For this reason, $\mathcal{H}_K$ (or, more precisely, an appropriate completion of $\mathcal{H}_K$ ) is also known as **reproducing kernel Hilbert space** (**RKHS**).

Next, we see how the inner product $\langle f,g \rangle_K$ between two arbitrary $f, g \in \mathcal{H}_K$ is computed, where

$$f = \sum_{i = 1}^{N} \alpha_i K (x_i, \cdot) \quad \text{ and } \quad g = \sum_{j = 1}^{M}\beta_jK(x'_j, \cdot)$$

Using once more the bilinearity of inner products,

$$\langle f, g \rangle_K = \Bigg \langle  \sum_{i = 1}^{N} \alpha_i K (x_i, \cdot), \sum_{j = 1}^{M}\beta_jK(x'_j, \cdot)\Bigg \rangle_K$$
$$= \sum_{i = 1}^{N} \alpha_i \Bigg \langle   K (x_i, \cdot), \sum_{j = 1}^{M}\beta_jK(x'_j, \cdot)\Bigg \rangle_K$$
$$= \sum_{i = 1}^{N} \sum_{j = 1}^{M} \alpha_i \beta_j \Bigg \langle   K (x_i, \cdot), K(x'_j, \cdot)\Bigg \rangle_K$$
$$= \sum_{i = 1}^{N} \sum_{j = 1}^{M} \alpha_i \beta_j K(x_i, x'_j)$$

We can lift to any RKHS the bounds we derived for learning algorithms that can be run with kernels. For instance recall the bound on the number of mistakes provided by the Perceptron convergence theorem,

$$\Vert u \Vert^2 \Big(\underset{t}{\operatorname{max}} \Vert x_t \Vert^2\Big)$$

which holds for any $u \in \mathbb{R}^d$ such that $y_tu^{\top}x_t \geq 1$ for $t = 1, ..., m$.

In a generic RKHS $\mathcal{H}_K$ , the linear separator $u$ is some $g \in \mathcal{H}_K$ such that $y_tg(x_t) \geq 1$ for $t = 1, ..., m$. The squared norm $\Vert x_t \Vert^2 = x^{\top}_tx_t$ becomes $\Vert \phi_K(x)\Vert^2_K = \langle K(x,\cdot), K(x, \cdot)\rangle_K = K(x,x)$. Finally $\Vert u \Vert^2$ is replaced by

$$\Vert f \Vert^2_K = \Bigg \Vert \sum_{i = 1}^{N}\alpha_iK(x_i, \cdot)\Bigg \Vert^2_K = \Bigg \langle  \sum_{i = 1}^{N} \alpha_i K (x_i, \cdot), \sum_{j = 1}^{N}\alpha_jK(x_j, \cdot)\Bigg \rangle_K = \sum_{i, j = 1}^{N}\alpha_i \alpha_j K (x_i, x_j)$$

A more complex linear predictor that can be kernelized is ridge regression, $w = \big( \alpha I + S^{\top}S\big)^{−1}S^\top y$, where $S$ is the $m \times d$ matrix whose rows are the training points $x_1, ...,  x_m \in \mathbb{R}^d$ and $y = (y_1, ..., y_m)$ is the vector of training labels $y_t \in \mathbb{R}$. Using the identity

$$\Big( \alpha I + S^{\top}S\Big)^{−1}S^\top = S^\top \Big(\alpha I + SS^\top\Big)^{−1} \quad  \text{ } \quad (6)$$

we can represent the ridge regression predictor in a generic RHKS by $y^\top \Big( \alpha I + K\Big)^{−1} k(\cdot)$, where $K$ is the $m \times m$ matrix with entries $K_{i,j} = K(x_i,x_j)$ and $k(\cdot)$ is the vector $\Big (K(x_1,\cdot), ..., K(x_m,\cdot)\Big)$ of functions $K(x_t,\cdot) = \langle \phi_K(x_t),\cdot \rangle_K$. Indeed, using $(6)$,

$$w^\top x = y^\top S \Big( \alpha I + S^\top S\Big)^{−1}x = y^\top \Big( \alpha I + SS^{\top}\Big)^{−1}Sx$$

Now, the elements of $SS^\top$ are $x^\top_i x_j$, that in kernel space become $K(x_i, x_j)$. Similarly, the components of $Sx$ are $x^\top_i x$, that correspond to $K(x_i, x)$ in kernel space. Hence, the ridge regression prediction $w^\top x = y^\top S\Big( \alpha I + S^\top S\Big)^{−1}x$ in kernel space becomes $\langle g, \phi_K(x)\rangle_K = y^\top \Big( \alpha I + K\Big)^{−1}k(x)$.

Linear predictors in RKHS can incur overfitting. For example, by increasing the degree $n$ of a polynomial kernel $K_n$ we reduce the training error because higher-degree curves can be used to separate the training points. If the degree is too high, the predictor will overfit. A similar reasoning applies to Gaussian kernels $K_\gamma$. The $\gamma$ parameter corresponds to the width of the Gaussians centered on training points $x_s$. If $\gamma$ is small relatively to the typical squared distances $\Vert x_s − x \Vert^2$ between training and test points, then the classification of a test point $x$ is essentially determined by the training point closest to it. This implies a training error equal or close to zero, because, similarly to $1-NN$ classifiers,  the training points are never misclassified. Once again, the resulting predictor is likely to overfit. On the other hand, for values of $\gamma$ that are large with respect to the squared distances $\Vert x_s − x \Vert^2$, the Gaussians centered on training points are very wide, and the resulting predictors are similar to $k-NN$ classifiers when $k$ is chosen close to the training set size, which is likely to cause underfitting.

We established that any symmetric function $K : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ is a kernel if and only if the kernel matrix $K$ is positive semidefinite. This is an important result, because it holds irrespective to the choice of the data space $\mathcal{X}$. We can therefore define kernels on any set $\mathcal{X}$: be it a set of matrices, sequences, trees, graphs, and so on. Kernels can be viewed as a way of encapsulating the data space, offering a uniform interface to a learning algorithm that can be efficiently run in the corresponding RKHS. In order to guide the intuition when designing a kernel function on a given data space $\mathcal{X}$, one should recall that $K(x,x')$ implements an inner product between $K(x, \cdot)$ and $K(x',\cdot)$ in some RKHS. We can then first define a notion of similarity on $\mathcal{X}$, and then adjust it so that arbitrary kernel matrices are always positive semidefinite.

----------------------------------------------------------------

# Support Vector Machines

The **Support Vector Machine** (**SVM**) is an algorithm for learning linear classifiers. Given a linearly separable training set $(x_1, y_1), ..., (x_m,y_) \in \mathbb{R}^d \times \{−1, 1\}$, SVM outputs the linear classifier corresponding to the unique solution $w^* \in \mathbb{R}^d$ of the following convex optimization problem with linear constraints

$$\underset{w \in \mathbb{R}^d}{\operatorname{min}} \frac{1}{2}\Vert w \Vert ^2 \quad \text{ } \quad (1)$$
$$\text{s.t. }\quad y_tw^{\top}x_t \geq 1 \quad t = 1, ..., m$$

Geometrically, $w^*$ corresponds to the **maximum margin separating hyperplane**. For every linearly separable set $(x_1, y_1), ..., (x_m, y_m) \in \mathbb{R}^d \times \{−1, 1\}, the maximum margin is defined by

$$\gamma^* = \underset{u: \Vert u \Vert = 1}{\operatorname{max}} \underset{t = 1, ..., m}{\operatorname{min}} y_t u^{\top}x_t$$

and the vector $u^*$ achieving the maximum margin is the maximum margin separator.

## Theorem $1$
For every linearly separable set $(x_1, y_1), ..., (x_m, y_m) \in \mathbb{R}^d \times \{−1, 1\}$, the maximum margin separator $u^*$ satisfies $u^* =  \gamma^*w^*$, where $w^*$ is the unique solution of $(1)$.

**Proof**: Note that $u^*$ is the solution of the following optimization problem

$$\underset{u \in \mathbb{R}^d, \gamma > 0}{\operatorname{max}} \quad \gamma^2$$
$$\text{s.t.} \quad \Vert u \Vert ^2 = 1$$
$$\quad \text{ } \quad y_tu^{\top}x_t \geq \gamma \quad \text{ } t = 1, ..., m$$

Indeed, $u$ maximizing the margin $\gamma$ is the same $u$ maximizing $\gamma^2$ because the function $f(\gamma) = \gamma^2$, is monotone for $\gamma > 0$. Dividing by $\gamma > 0$ both sides of each constraint $y_t u^{\top} x_t \geq \gamma$, we obtain the equivalent constraint $y_t(u^{\top} x_t)/ \gamma \geq 1$. Introducing $w = u/\gamma$, and noting that $\Vert w \Vert^2 = 1/\gamma^2$ because of the constraint $\Vert u \Vert^2 = 1$, we obtain the equivalent problem

$$\underset{u \in \mathbb{R}^d,\gamma > u}{\operatorname{max}} \quad \gamma^2$$
$$\text{s.t. } \gamma^2 \Vert w \Vert^2 = 1$$
$$y_tw^{\top}x_t \geq 1 \quad t = 1, ..., m$$

Now observe that the constraint $\gamma^2 \Vert w \Vert^2 = 1$ is reduntant and can be eliminated. Indeed, for all $w \in \mathbb{R}^d$ we can find $\gamma >0$ such that the constraint is satisfied. Multiplying the objective function by $\frac{1}{2}$, we obtain

$$\underset{w \in \mathbb{R}^d}{\operatorname{min}} \frac{1}{2}\Vert w \Vert ^2$$
$$s.t. y_tw^{\top}x_t \geq 1 \quad \text{ } t = 1, ..., m$$

concluding the proof.

We have thus shown the equivalence between the problem of maximizing the margin of $u$ while keeping the norm $\Vert u \Vert$ constant, and the problem of minimizing the norm $\Vert w \Vert$ while keeping the margin of $w$ constant.

The following result helps us compute the form of the optimal solution $w^*$.

----------------------------------------------------------------

## Lemma $2$ (Fritz John optimality condition)
Consider the problem

$$\underset{w \in \mathbb{R}^d}{\operatorname{min}} f(w)$$
$$\text{s.t.}\quad \text{ } g_t(w) \leq 0 \quad \text{ } t = 1, ..., m$$

where the functions $f, g_1, ..., g_m$ are all differentiable. If $w_0$ is an optimal solution, then there exists a nonnegative vector $\alpha \in \mathbb{R}^m$ such that

$$\nabla f(w_0) + \sum_{t \in I}\alpha_t\nabla_{g_t}(w_0) = 0$$

where $I = \{1 \leq t \leq m : g_t(w_0) = 0\}$.

By applying the Fritz John optimality condition to the SVM objective with $f(w) = \frac{1}{2} \Vert w \Vert^2$ and $g_t(w) = 1 − y_tw^{\top}x_t$ we obtain

$$w^* - \sum_{t \in I} \alpha_ty_tx_t = 0$$

Hence, the optimal solution has form

$$w^* = \sum_{t \in I} \alpha_ty_yx_t$$
where I denotes the set of training examples $(x_t, y_t)$ such that $y_t(w^*)^{\top} x_t = 1$. These $x_t$ are called **support vectors**, and are all those training points for which the margin of $w^*$ is exactly $1$. If we removed all training examples except for the support vectors, the SVM solution would not change.

We now move on to consider the case of a training set that is not linearly separable. How should we change the SVM objective? Conside the following formulation

$$\underset{(w, \xi) \in \mathbb{R}^{d+m}}{\operatorname{min}}\quad \text{ } \frac{\lambda}{2} \Vert w \Vert^2 + \frac{1}{m} \sum_{t = 1}^{m}\xi_t$$
$$\text{s.t. } \quad \text{ } y_tw^{\top}x_t \geq 1 - \xi_t \quad \text{ }t = 1, ...., m$$
$$\xi_t \geq 0 \quad \text{ } \quad t = 1, ..., m$$

The components of $\xi = (\xi_1, ..., \xi_m)$ are called **slack variables** and measure how much each margin constraint is violated by a potential solution $w$. The average of these violations is then added to the objective function. Finally, a regularization parameter $\lambda > 0$ is introduced to balance the two terms.

We now consider the constraints involving the slack variables $\xi_t$. That is, $\xi_t \geq 1 − y_tw^{\top}x_t$ and $\xi_t \geq 0$. In order to minimize each $\xi_t$, we can set

$$\xi_t = \cases{1 - y_tw^{\top}x_t \quad \text{ if }y_tw^{\top}x_t < 1 \\ \\ \quad 0 \quad \text{ } \quad \text{ otherwise}}$$

To see this, fix $w \in \mathbb{R}^d$. If the constraint $y_tw^{\top}x_t \geq 1$ is satisfied by $w$, then $xi_t$ can be set to zero. Otherwise, if the constraint is not satisfied by $w$, then we set $xi_t$ to the smallest value such that the constraint becomes satisfied, namely $1-y_tw^{\top}x_t$. Summarizing, $\xi_t = [1 - y_tw^{\top}x_t]_+$, which is exactly the hinge loss $h_t(w)$ of $w$.

The SVM problem can then be re-formulated as $\underset{w \in \mathbb{R}^d}{\operatorname{min}} F(w)$, where

$$F(w) = \frac{1}{m} \sum_{t = 1}^{m} h_t(w) + \frac{\lambda}{2} \Vert w \Vert^2$$

We now show that, even when the training set is not linearly separable, the solution $w^*$ belongs to the subspace defined by linear combinations of training points multiplied by their labels.

## Theorem 3
The minimizer $w^*$ of $F$ can be written as a linear combination of $y_1x_1, ..., y_mx_m$. 

**Proof**
By contradiction, assume

$$w^* = \sum_{t = 1}^{m} \alpha_ty_yx_t + u \quad \text{ } \quad (2)$$

where $u \in \mathbb{R}^d$ is the component of $w^*$ orthogonal to the subspace spanned by $x_1, ..., x_m$. Therefore,

$$y_tu^{\top}x_t = 0 \quad \text{ } \quad t = 1, ..., m$$

Now, let $v = w^* − u$. First, $\Vert v \Vert^2 \leq \Vert w^* \Vert^2$ because in $(2)$ we wrote $w^*$ as a sum of two orthogonal components and we removed one of them, and so its length decreased. Second,

$$h_t(v) = [1 - y_tv^{\top}x_t]_+ = [1 - y_t(w^* - u)^{\top} x_t] = [1 - y_t(w^*)^{\top}x_t + y_tu^{\top}x_t] = h_t(w^*)$$

using $(3)$. Therefore $F(v) \leq F(w^*)$, contradicting the optimality of $w^*$. Hence $u = 0$ and the proof is concluded.

Note that, as in the linearly separable case, $w^*$ generally depends on a subset of support vectors. However, unlike the linearly separable case, these support vectors also include the training points associated with positive slack variables.

We proceed by showing how $F$ can be minimized using Online Gradient Descent (OGD). First, observe that

$$F(w) = \frac{1}{m} \sum_{t = 1}^{m} \ell_t(w)$$

where $\ell_t(w) = h_t(w)+ \frac{\lambda}{2} \Vert w \Vert^2$ is a strongly convex function. Indeed, $\frac{\lambda}{2} \Vert w \Vert^2$ is $\lambda$-strongly convex, and h_t is convex (and also piecewise linear). This implies that their sum is $\lambda$-strongly convex. We can then apply the OGD algorithm for strongly convex functions to the set of losses $\ell_1, ..., \ell_m$. This instance of OGD, which is known as **Pegasos**, can be described as follows.

**Parameters**: number $T$ of rounds, regularization coefficient $\lambda > 0$<br />
**Input**: Training set $(x_1, y_1), ..., (x_m, y_m) \in \mathbb{R}^d \times \{−1, 1\}$<br />

Set $w_1 = 0$

For $t = 1, ..., T$:
1) draw uniformly at random an element $(x_{Z_t} ,y_{Z_t})$ from the training set;
2) set $w_{t+1} = w_t − \eta_t\nabla \ell_{Z_t}(w_t$)$

**Output**: $\overline{w} = \frac{1}{T}(w_1 + ··· + w_T)$.

Pegasos is an example of a class of algorithms known as **stochastic gradient descent**. These are OGD-like algorithms that are run over a sequence of examples randomly drawn from the training set.

We now move on to analyze Pegasos. Let $(x_{Z_1}, y_{Z_1}), ..., (x_{Z_T}, y_{Z_T})$ the sequence of training set examples that were drawn at random in step $1$ of the algorithm, and let $\ell_{Z_1}, ..., \ell_{Z_T}$ the corresponding sequence of loss functions. Namely, $\ell_{Z_t}(w) = h_{Z_t}(w) + \frac{\lambda}{2} \Vert w \Vert^2$ where $h_{Z_t}(w) = [1 - y_{Z_t}, w^{\top} x_{Z_t}]_+$.

Let $w^*$ be the optimal SVM solution,

$$w^* = \underset{w \in \mathbb{R}^d}{\operatorname{argmin}} \Bigg( \frac{1}{m} \sum_{t = 1}^m h_t(w) + \frac{\lambda}{2} \Vert w \Vert^2 \Bigg) \quad \text{ } \quad (4)$$

For every realization $s_1, ..., s_T$ of the random variables $Z_1, ..., Z_T$, OGD analysis for strongly convex losses immediately gives

$$\frac{1}{T}\sum_{t = 1}^{T}\ell_{S_t}(w_t) \leq \frac{1}{T} \sum_{t = 1}^{T} \ell_{S_t}(w^*) + \frac{G^2}{2\lambda T}\ln{T + 1} \quad \text{ } \quad (5)$$

where $G = \underset{t = 1, ..., T}{\operatorname{max}} \Vert \nabla \ell_{S_t}(w_t) \Vert$ is also a random variable.

In order to show how this result can be used to bound $F(\overline{w})$, we use the following fact

$$\mathbb{E}[\ell_{Z_t}(w_t)] \vert Z_1, ..., Z_{t-1}] = \frac{1}{m} \sum_{s = 1}^{m} \ell_s(w_t) = F(w_t) \quad \text{ } \quad (6)$$

In other words, conditioned on the first $t - 1$ random draws (which determine $w_t$), the expected value of $\ell_{Z_t}(w_t)$ is equal to $F(w_t)$. We also use the fact that for every pair of random variables $X, Y$ the following holds $\mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X \vert Y]$. Hence, we can write

$$\mathbb{E}[F(\overline{w})] = \mathbb{E}\Bigg[F\Big(\frac{1}{T}\sum_{t = 1}^{T}w_t\Big)\Bigg]$$
$$\leq \mathbb{E}\Bigg[\frac{1}{T}\sum_{t = 1}^{T}F(w_t)\Bigg] \quad \text{ using Jensen inequality, since }F \text{ is convex}$$
$$= \mathbb{E}\Bigg[\frac{1}{T}\sum_{t = 1}^{T}\mathbb{E}[\ell_{Z_t}(w_t) \vert Z_1, ..., Z_{t-1}]\Bigg] \quad \text{ using }(6)$$
$$= \mathbb{E}\Bigg[\frac{1}{T}\sum_{t = 1}^{T}\ell_{Z_t}(w_t)\Bigg] \quad \text{ using }\mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X \vert Y]]$$
$$\leq \mathbb{E}\Bigg[\frac{1}{T}\sum_{t = 1}^{T}\ell_{Z_t}(w^*)\Bigg] + \frac{\mathbb{E}[G^2]}{2 \lambda T}\ln(T + 1) \quad \text{ using }(5)$$
$$= \mathbb{E}\Bigg[\frac{1}{T}\sum_{t = 1}^{T}\mathbb{E}[\ell_{Z_t}(w^*) \vert Z_1, ..., Z_{t-1}]\Bigg] + \frac{\mathbb{E}[G^2]}{2 \lambda T}\ln(T + 1) \quad \text{ using }\mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X \vert Y]]$$
$$= F(w^*) + \frac{\mathbb{E}[G^2]}{2 \lambda T}\ln(T + 1) \quad \text{ using }(6)$$


We thus obtained

$$\mathbb{E}[F(\overline{w})] \leq F(w^*) + \frac{\mathbb{E}[G^2]}{2\lambda T} (\ln{T} + 1) \quad \text{  } \quad (7)$$

Therefore, if $\mathbb{E}[G^2]$ can be upper bounded by a constant, the average $\overline{w}$ of the vectors generated by OGD converges (in expectation with respect to the random draw of the elements from the training set) to $w^*$ with rate $\frac{\ln{T}}{T}$. With a bit more work, one can show that $\overline{w}$ converges to $w^*$ not only in expectation but also in probability.

We now bound $G$ for every realization $s_1, ..., s_T$ of the random variables $Z_1, ..., Z_T$. We have $\nabla \ell_{s_t}(w_t) = −y_{s_t} x_{s_t} \mathbb{I}\{h_{s_t}(w_t) > 0\} + \lambda w_t$. Let $v_t = y_{s_t} x_{s_t} \mathbb{I}\{h_{s_t} (w_t) > 0\}$. Because $\eta_t = \frac{1}{(\lambda t)}$, the update rule for $w_t$ takes the following simple form,

$$w_{t+1} = w_t - \eta_t \nabla \ell_t (w_t) = w_t + \eta_t v_t - \eta_t \lambda w_t = \big(1 - \frac{1}{t} \big)w_t + \frac{1}{\lambda t}v_t$$

Let $X = \underset{s = 1, ..., m}{\operatorname{max}}\Vert x_s \Vert$. Since $\Vert \nabla \ell_s (w_t) \Vert \leq \Vert v_t \Vert + \lambda \Vert w_t \Vert \leq X + \lambda \Vert w_t \Vert$, we are left with the task of computing an upper bound for $\Vert w_t \Vert$. In order to do so, we look at the recurrence

$$w_{t+1} = \Big( 1 - \frac{1}{t}\Big)w_t + \frac{1}{\lambda t}v_t$$

As one can easily show by induction, $w_{t+1}$ can be written as a linear combination of $v_1, ..., v_t$. In order to determine the coefficients of this linear combination, we fix $s \leq t$ and observe that $v_s$ is added to the sum with coefficient $\frac{1}{(\lambda s)}$. When $w_{t+1}$, is computed, the coefficient of $v_s$ has become

$$\frac{1}{\lambda s} \prod_{r = s+1}^{t} \Big(1 - \frac{1}{r}\Big) = \frac{1}{\lambda s} \prod_{r = s+1}^{t} \frac{r-1}{r} = \frac{1}{\lambda t}$$

We thus obtain a simple expression for $w_{t+1}$,

$$w_{t+1} = \frac{1}{\lambda t}\sum_{s = 1}^{t}v_s \quad \text{ } \quad (8)$$

Because $w_{t+1}$ is an average of $v_s$ divided by $\lambda$, we finally have $\Vert w_{t+1} \Vert \leq \frac{1}{\lambda} \operatorname{max}_s \Vert v_s \Vert \leq \frac{1}{\lambda}X$. This allows us to conclude that $\Vert \nabla \ell_t (w_t) \Vert  \leq X + \nabla \Vert w_t \Vert \leq 2X$. Substituting this bound for $G$ in $(7)$ we get

$$\mathbb{E}[F(\overline{w})] \leq F(w^*) + \frac{2X^2}{\lambda T} \ln{(T+1)}$$

Theorem $3$ states that the solution $w^*$ to the SVM problem can be written as

$$w^* = \sum_{s \in S} y_s \alpha_s x_s$$

where $\alpha_s > 0$ and $S \equiv \{t = 1,...,m : h_t(w^*) > 0\}$. An important consequence of this result is that we can solve the problem $(4)4 in a RKHS $\mathcal{H}_K$, where the objective function $F$ becomes

$$F_K(g) = \frac{1}{m}\sum_{t = 1}^m h_t(g) + \frac{\lambda}{2}\Vert g \Vert^2_K \quad \text{ } \quad g \in \mathcal{H}_K$$

with $h_t(g) = [ 1 − y_tg(x_t)]_+$. In $\mathcal{H}_K$, the SVM solution can therefore be written as

$$\sum_{s \in S} y_s \alpha_s K(x_s, \cdot)$$

which is clearly an element of the RKHS

$$\mathcal{H}_K \equiv \Bigg\{\sum_{i = 1}^{N} \alpha_iK(x_i, \cdot) : x_1, ..., x_N \in \mathbb{R}^d, \alpha_1, ..., \alpha_N \in \mathbb{R}, N \in \mathbb{N} \Bigg\}$$

As we did for the Perceptron, we can run Pegasos in the RKHS $\mathcal{H}_K$ . The gradient update in kernel Pegasos on some training example $(x_{s_t} ,y_{s_t})$ can be written as

$$g_{t+1} = \Big (1 - \frac{1}{t} \Big) g_t + \frac{y_{s_t}}{\lambda_t} \mathbb{I}\{h_{s_t}(g_t) > 0\}K(x_{s_t},\cdot)$$

where $h_{s_t}(g_t) = [1 − y_{s_t}g_t(x_{s_t})]_+$.

----------------------------------------------------------------

# Stability and risk control for SVM
We investigate stability, a technique that prevents overfitting by ensuring a learning algorithm has enough bias. The bias is quantified by how much the learning algorithm is able to react to small changes in the training set.

Fix a training set $S$ of examples $(x_1, y_1), ..., (x_m, y_m)$ and use $z_t$ to denote the $t$-th example $(x_t, y_t) \in \mathbb{R}^d \times \mathbb{R}$. Given a loss function $\ell$ and a predictor $h$, let $\ell(h, z_t) = \ell(h(x_t), y_t)$ and use

$$\ell_S(h) = \frac{1}{m}\sum_{t = 1}^{m}\ell(h, z_t)$$

to denote the training error of $h$. From now on, we assume $S = S_m$ is a sample of $m$ examples $Z_t = (X_t, Y_t)$ independently drawn from a distribution $\mathcal{D}$. We use $S^{(t)}$ to denote $S$ where the $t$-th example $(X_t, Y_t)$ is replaced by $Z_t' = (X_t', Y_t')$, also drawn from $\mathcal{D}$ independently of $S$.

Fix a learning algorithm $A$ and let $h_S = A(S)$ and $h_{S^{(t)}} = A(S^{(t)})$. We say that $A$ is $\varepsilon$-stable for a training set size $m$ if, for each $t = 1, ..., m$

$$\mathbb{E}\big[ \ell(h_{S^{(t)}}, Z_t) - \ell(h_S, Z_t)\big] \leq \varepsilon$$

where the expected value is computed with respect to the random draw of $S$ and $Z'$. Note that, in general, $\ell(h_{S^{(t)}}, Z_t) > \ell(h_S,Z_t)$ because $Z_t$ is not in $S^{(t)}$. Stability demands that $\ell(h_{S^{(t)}}, Z_t)$ be not much bigger than $\ell(h_S, Z_t)$ in expectation with respect to $S$ and $Z_t'$. In other words, an algorithm is stable if replacing a single example in the training set does not significantly increase the loss on that example. In our analysis, we use the following equivalent definition of stability:

$$\mathbb{E}\big[ \ell(h_S, Z_t') - \ell(h_{S^{(t)}, Z_t'})\big] \leq \varepsilon$$

The next result shows that a stable algorithm produces predictors whose training error is a good proxy for their risk.

**Theorem 1**: If $A$ is $\varepsilon$-stable for training set size $m$, then $\mathbb{E}\Big[\ell_\mathcal{D}(A(S_m)) − \ell_S(A(S_m))\Big] \leq \varepsilon$.

Proof: let $S = \{(x_1, y_1), ..., (x_m, y_m)\}$ and $S' = \{(x'_1, y'_1 ), ..., (x'_m, y'_m)\}$ be drawn i.i.d. from $\mathcal{D}$. Let $h_S = A(S_m)$. Then

$$\mathbb{E}[\ell_S(h_S)] = \mathbb{E}\Big[ \frac{1}{m} \sum_{t = 1}^{m} \ell(h_S, z_t)\Big] = \frac{1}{m} \sum_{t = 1}^{m} \mathbb{E}[\ell(h_S, z_t)] = \frac{1}{m}\sum_{t = 1}^{m}\mathbb{E}[\ell(h_{S^{(t)}}, z'_t)]$$

Moreover,

$$\ell_{\mathcal{D}}(h_S) = \mathbb{E}\big[\ell(h_S, z'_t) \vert S\big] = \frac{1}{m} \sum_{t = 1}^{m} \mathbb{E}\big[\ell(h_S, z'_t) \vert S \big]$$

averaging with respect to the random draw of $S$, this implies

$$\mathbb{E}\big[\ell_{\mathcal{D}}(h_S)\big] = \frac{1}{m}\sum_{t = 1}^{m}\mathbb{E}\big[\ell(h_S, z'_t)\big]$$

Therefore,

$$\mathbb{E}\big[\ell_{\mathcal{D}}(h_S)- \ell_S(h_S)\big] = \frac{1}{m}\sum_{t = 1}^{m}\mathbb{E}\big[\ell(h_S, z'_t) - \ell(h_{S^{(t)}}, z'_t)\big] \leq \varepsilon$$

due to the stability assumption. 

In order to control the estimation error using stability, we need to control the training error. Indeed, if the training error is small and the algorithm is stable, then the risk is also small because of the previous result. We say that an algorithm $A$ is $\gamma$-ERM for training set size $m$ and with respect to a class $\mathcal{H}$ of predictors if

$$\ell_{S}(h_S) \leq \underset{h \in \mathcal{H}}{\operatorname{inf}} \ell_S(h) + \gamma$$

for all $S$ of size $m$.

**Theorem 2**: If for a training set size $m$ the algorithm $A$ is $\gamma$-ERM and $\varepsilon$-stable with respect to a class $\mathcal{H}$ of predictors, then

$$\mathbb{E}\Big[\ell_\mathcal{D}(A(S_m))\Big] \leq \underset{h \in \mathcal{H}}{\operatorname{inf}} \ell_{\mathcal{D}}(h) + \varepsilon + \gamma$$

Proof: let $h_S = A(S_m)$ and let $h^*$ be the predictor with smallest risk in $\mathcal{H}$. Then

$$\mathbb{E}\big[\ell_{\mathcal{D}}(h_S)\big] 0 \mathbb{E}\Big[\underbrace{\ell_{\mathcal{D}}(h_S) - \ell_S(h_S)}_{\leq \varepsilon \text{ (stability) }}\Big] + \mathbb{E}\Big[\Big]$$

The proof is concluded by observing that E ℓS(h∗) = ℓD(h∗), namely the expected value of the empirical risk is the risk. □

In case of predictors parameterized by a vector w ∈Rd (like linear predictors), ERM can be made stable by adding to the empirical loss a so-called regularization term. We also need an additional condition, namely that the loss function ℓis such that ℓ(·,z) be convex and Lipschitz, where ℓ(w,z) is the error of w on the example z. Recall that Lipschitz means that there exists a constant L

such that ℓ(w,z) − ℓ(w′,z)  ≤ L ∥w − w′∥for all w,w′ ∈ Rd and for all z = (x,y). No other assumptions on ℓ are required.

Theorem 3. Let ℓ be a loss function such that ℓ(·,z) is convex, differentiable[^1] and Lipschitz with constant L > 0. Then the learning algorithm A such that

A(S) = argmin ℓS(w) + λ ∥w∥[^2]

w∈Rd 2

for all training sets S of size m is (2L)2/(λm)-stable for every λ > 0.

Proof. Introduce

FS(w) = ℓS(w) + λ2 ∥w∥2

and also

wS = argmin FS(w) and wS(t) = argmin FS(t)(w) .

w∈Rd w∈Rd

In order to prove stability, we need to upper bound E ℓ(wS,z′t) − ℓ(wS(t),z′t) . We actually prove

,z′) − ℓ(w ,z′) for all S and z′. As a first step, a stronger result by bounding the quantity ℓ(wS t S(t) t t

we use the Lipschitz condition to write

ℓ(wS,z′t) − ℓ(wS(t),z′t) ≤ L ∥wS − wS(t)∥ . (1) Next, we upper bound ∥wS − wS(t)∥. Introduce the abbreviations w = wS e w′ = wS(t). Then

F (w′) − F (w) = ℓ (w′) − ℓ (w) + λ  w′ 2 − ∥w∥2

S S S S 2

- ℓ (t)(w ) − ℓS(t)(w) + ℓ(w′,z )m− ℓ(w,z ) − t m t +
- t t ℓ(w′,z′) − ℓ(w,z′)
- FS(t)(w′) − FS(t)(w) + ℓ(w ,zt)m− ℓ(w,z ) − m λ2 w′ 2 − ∥w∥2

S

- t ℓ(w′,z′t) − ℓ(w,z′)

t

- ℓ(w′,zt) − ℓ(w,zt) + ℓ(w′,z′t) − ℓ(w,z′t)

m m

- 2L w − w′ 

m

where the first inequality holds because w′ = w (t) minimizes F (t) and the second inequality holds

S S

because ℓ(·,z) is Lipschitz.

is λ-strongly convex: indeed, ℓ(·,z) is convex, λ ∥w∥2 is We proceed by noting that the function FS 2

λ-strongly convex, which implies that their sum is also λ-strongly convex. Therefore, by definition of strongly convex function,

F (w′) ≥ F (w) + ∇F (w)⊤(w′ − w) + λ w − w′ 2 .

S S S 2

Because w is the minimizer of FS, ∇FS(w) = 0 and so

F (w′) − F (w) = ℓ (w′) + λ w′ 2 − ℓ (w) + λ ∥w∥2 ≥ λ w − w′ 2

S S S 2 S 2 2

Combining the two inequalities we get

λ w − w′ 2 ≤ 2L w − w′ ovvero w − w′  ≤ 4L

2 m λm

which, together with (1) shows the stability of w = wS. □

We now show how the notion of stability can be used to control the risk of the SVM predictor. First, recall that the hinge loss ℓ w,(x,y) = 1 − yw⊤x is convex in w for (x,y) ∈Rd × {−1,1}. In

\+

order to compute the Lipschitz constant L, observe that, using Taylor’s theorem and the Cauchy- Schwartz inequality u⊤v ≤ ∥u∥∥v∥, we can write

ℓ(w′,z) − ℓ(w,z) ≤ ∇ℓ(w,z)⊤ w′ − w) ≤ ∥∇ℓ(w,z)∥ w′ − w

Now note that ∇ℓ(w,z) = yx I{yw⊤x ≤ 1}, and thus ∥∇ℓ(w,z)∥ ≤ ∥x∥. Assuming ∥xt∥ ≤ X for t = 1,...,m we can then set L = X and show the following result.

Theorem 4. Given a training set S of size m, the SVM solution

wS = argmin ℓS(w) + λ ∥w∥2 (2)

w∈Rd 2

satisfies

0-1 λ 2 4X 2

E ℓD (wS) ≤ umin∈R ℓD(u) + 2 ∥u∥ λm .

\+

d

where ℓ0-1(w ) is the risk of w with respect to the zero-one loss.

D S S

Proof. Clearly, for each u ∈Rd we have

λ 2 λ 2

ℓS(wS) ≤ ℓS(wS) + 2 ∥wS∥ ≤ ℓS(u) + 2 ∥u∥ . (3) Therefore, because Theorem 3 implies that wS is (4L2)/(λm)-stable for L = X,

2

E ℓD(wS) ≤ E ℓS(wS) + 4λmX by Theorem 1

λ 2 4X 2

- E ℓ (u) + + using (3)

S 2 ∥u∥ λm

- ℓD(u) + 2 ∥u∥2 + 4λmX 2

λ

The proof is concluded by noting that, for any linear predictor w, ℓ0-1(w) = P Y w⊤X ≤ 0 ≤

D

ℓD(w). This is an immediate consequence of the fact that the hinge loss is a convex upper bound

on the zero-one loss. □

Consistency of SVM. In a kernel space HK the SVM objective function (2) becomes

gS = argmin ℓS(g) + λ ∥g∥2K

g∈HK 2

If the kernel is Gaussian, then one can prove that SVM becomes a consistent learning algorithm (with respect to the zero-one loss) when the regularization parameter λ is chosen as a function λm of the training set size m. In particular, for m → ∞, λm must satisfy the two following conditions: λm = o(1) and λm = ω(m−1/2).
5

[^1]: Some loss functions, notably the hinge loss, are not everywhere differentiable. However, they are everywhere subdifferentiable, which is sufficient for this theorem to hold.
[^2]: 

----------------------------------------------------------------

[[Quiz Statistical Methods for Machine Learning]]