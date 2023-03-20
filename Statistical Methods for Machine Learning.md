# Introduction
**Data inference** is the study of methods that use data from the past for making predictions about the future. **Machine learning** is a powerful tool that can be used to solve a wide range of data inference problems, including the ones listed below:
- **clustering**: grouping data points according to their similarity (e.g., clustering customers according to their consumer profiles);
- **prediction**: assigning semantic labels to data points (e.g., classifying documents based on their topics);
- **control**: performing a sequence of actions in an environment in order to maximize a notion of utility (e.g., using a robot to map an unknown terrain).

[[Algoritmo |Algorithms]] that solve a [[Intelligenza Artificiale#Training delle ANN |learning task]] based on semantically annotated historical data (e.g., documents annotated with their topic or images annotated with the objects they contain) are said to operate in a **supervised learning mode**. In contrast, algorithms that use data without any semantic annotation are said to operate in an **unsupervised learning mode**. The focus of this course is on supervised learning and study the design of machine learning systems whose goal is to learn predictors, i.e., functions that map data points $x$ to their labels $y$. Once learned, these functions can be used to categorize documents or images, predict the future price of a stock based on the current market data, diagnose a disease based on a patient’s medical record, and so on.

## Label sets
It is common to use $\mathcal{Y}$ to denote the set of all possible labels for a data point of a given learning problem. Note that labels can be of two different types: **categorical labels**, like the topics of a document, and **numerical labels**, like the price of a stock or the demand for a product. Categorical labels define **classification** problems, where labels sets $\mathcal{Y}$ are typically finite and small (such as $\mathcal{Y} = \{\text{sport, politics, business}\}$ for document topics). Numerical labels define **[[Intelligenza Artificiale#Regressione |regression]]** problems, where label sets $\mathcal{Y} \subseteq \mathbb{R}$ are typically infinite.

As it is always possible to map symbols to numbers, it is needed to specify more precisely how regression differs from classification. In regression, prediction mistakes are typically a function of the difference $|y−\widehat{y}|$, where $\widehat{y}$  is the prediction for $y$. In classification, mistakes are typically binary: either $\widehat{y} = y$ (no mistake) or $\widehat{y} \neq y$ (mistake). This happens because the label set in a classification task is an abstract set of symbols (irrespective to whether we encode the symbols using numbers) without a natural notion of distance between them. When $|\mathcal{Y}| = 2$, for example $\mathcal{Y} = \{\text{healthy, sick}\}$, it is a binary classification problem, and conventionally use the numerical encoding $\mathcal{Y} = \{−1,1\}$.

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

In order to estimate the predictive power of a predictor it is typically used a **test set**. This is a set of examples $(x_1′ ,y_1′ ),..., (x_n′ ,y_n′ )$. Technically, it is a multiset because some examples may occur more than once. However, treating datasets as multisets complicates the notation. For this reason, and without much loss of generality, datasets will be mostly viewed as sets in the standard mathematical acception. Given a loss function $\ell$, the test set is used to compute the test error of a predictors $f$,

$$ \frac{1}{n}\sum_{t = 1}^{n}\ell(y'_t, f({\mathbf{x}}'_t))$$

The test error is meant to estimate the **average performance** of the predictor on typical real-world data.

A **learning algorithm** receives a training set as input and outputs a predictor. A training set is a set of examples $(x_1,y_1),..., (x_m,y_m).$ Training and test set are often prepared together, through a single round of data collection and annotation. Partitioning the examples in training and test data is done afterward, typically using a random split. The objective is to develop a theory to guide in the design of learning algorithms that generate predictors with low test error.

Since the only input to a learning algorithm is the training set $S \equiv (x_1,y_1),..., (x_m,y_m)$, a natural approach to the design of learning algorithms is to assume that the **training error**

$$\ell_s(f) = \frac{1}{m}\sum_{t=1}^{m}\ell(y_t, f(\mathbf{x}_t))$$

of a predictor be correlated to its test error.

----------------------------------------------------------------

## Empirical risk minimization
Let $\mathcal{F}$ be a given set of predictors and $\ell$ a loss function. The **empirical risk minimizer** (**ERM**) is the learning algorithm that outputs some predictor in $\mathcal{F}$ minimizing the training error

$$\widehat{f} \in \underset{\widehat{f} \in \mathcal{F}}{\operatorname{argmin}} \ell_{s}(f)$$

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
More formally, given a training set $\mathcal{S} \equiv (x_1,y_1),..., (x_m,y_m)$ , the **nearest neighbour algorithm** (**$NN$**) generates a classifier $h_{NN} : \mathbb{R}^d \to \{−1,1\}$ defined by:

$$h_{NN}(x) = \text{ label } y_t \text{ of the point } x_t \in \mathcal{S} \text{ closest to } x$$

If there is more than one point in $\mathcal{S}$ with smallest distance to $x$, then the algorithm predicts with the majority of the labels of these closest points. If there is an equal number of closest points with positive and negative labels, then the algorithm predicts a default value in $\{−1,1\}$ (for instance, the most frequent label in the training set).

Note that $h_{NN}(x_t) = y_t$ for every training example $(x_t,y_t)$. The distance between $x = (x_1,...,x_d)$ and $x_t = (x_{t,1},...,x_{t,d})$, denoted by $∥x − x_t∥$, is computed using the Euclidean distance:

$$ \Vert x − x_t \Vert= \sqrt{\sum_{i = 1}^{d}(x_i − x_{t,i})^2}$$

The classifier generated by $NN$ induces a partition of $\mathbb{R}^d$ in Voronoi cells, where each training instance $x_t$ (here called a **center**) is contained in a cell, and the border between two cells is the set of points in $\mathbb{R}^d$ that have equal distance from the two cell centers.

![[voronoi_diagram.png]]

In figure, the Voronoi diagram for a training set in $\mathbb{R}^2$.

As NN typically stores the entire training set, the algorithm does not scale well with the number $\vert \mathcal{S} \vert = m$ of training points. Moreover, given any test point $x$, computing $h_{NN}(x)$ is costly, as it requires computing the distance between $x$ and every point of the training set, which in $\mathbb{R}^d$ takes time $\Theta(dm)$ (shorter running times are possible when distances are approximated rather than being computed exactly). Finally, note that $NN$ always generates a classifier $h_{NN}$ such that $\ell _\mathcal{S}(h_{NN}) = 0$. This is not surprising because, as we already said, $NN$ stores the entire training set.

Starting from $NN$, we can obtain a family of algorithms denoted by $k-{NN}$ for $k = 1,3,5,...$, where $k$ cannot be taken larger than the size of the training set. These algorithms are defined as follows: given a training set $\mathcal{S} = (x_1,y_1),..., (x_m,y_m)$ , $k-NN$ generates a classifier $h_{k−NN}$ such that $h_{k−NN}(x)$ is the label $y_t \in \{−1,1\}$ appearing in the majority of the $k$ points $x_t \in \mathcal{S}$ which are closest to $x$. Just like in the case of $1-NN$, there could be training points at the same distance from $x$ such that more than $k$ points are closest to $x$. In this case it is possible to proceed by ranking the training points based on their distance from $x$ and then taking the $k′$ closest points where $k′$ is the smallest integer bigger or equal to $k$ such that the $(k′ +1)$-th point in the ranking has distance from $x$ strictly larger that the $k′$-th point. If no such $k′$ exists, then all the points must be taken in the training set. If $k′$ is strictly bigger than $k$, even, and there is an equal number of closest points with positive and negative labels, then the algorithm predicts a default value in $\{−1,1\}$.<br />
Hence, in order to compute $h_{k−NN}(x)$, the following operations are performed:
1) find the $k$ training points $x_{t_1} ,..., x_{t_k}$ closest to $x$. Let $y_{t_1} ,...,y_{t_k}$ be their labels;
2) if the majority of the labels $y_{t_1} ,...,y_{t_k}$ is $+1$, then $h_{k−NN}(x) = +1$; if the majority is $−1$, then $h_{k−NN}(x) = −1$.

Note that, for each $k \geq 1$ and for each $x_t$ in the training set, $x_t$ is always included in the $k$ points that are closest to $x_t$.

![[hknn.png]]

In figure, the plot of the $h_{k−NN}$ classifier for $k = 1,3,5$ on a $1$-dimensional training set. As $k$ increases, the classifier becomes simpler and the number of mistaken points in the training set increases.

It is important to note that, unlike $1-NN$, in general we have that $\ell_{\mathcal{S}}(h_{k−NN}) > 0$. Moreover, as $k$ grows, the classifiers generated by $k-NN$ become simpler. In particular, when $k$ is equal to the size of the training set, $h_{k−NN}$ becomes a constant classifier that always predicts the most common label in the training set.

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

Even if we compute rescaled numerical representations for the features (including the categorical fields smoker and sex), algorithms based on Euclidean distance like $k-NN$ may not work well.

In order to learn data whose features vary in heterogeneous sets $\mathcal{X}_1, ..., \mathcal{X}_d$ (i.e., sets with incomparable ranges, including ranges corresponding to categorical variables), a new family of predictors will be introduced: the **tree predictors**.

A tree predictor has the structure of an **ordered and rooted [[Albero |tree]]** where each node is either a **leaf** (if it has zero children) or an **internal node** (if it has at least two children). Recall that an ordered tree is one where the children of any internal node are numbered consecutively. Hence, if the internal node $v$ has $k \geq 2$ children, it is possible to access the first child, the second child, and so on until the $k$-th child.

![[tree_classifier_example.png]]

In the figure, it is possible to see a classical example of a tree classifier for a binary classification task. The features are: outlook, humidity e windy.

Fix $\mathcal{X} = \mathcal{X}_1 \times ... \times \mathcal{X}_d$,where $\mathcal{X}_i$ is the range of the $i$-th attribute $x_i$. A **tree predictor** $h_T : \mathcal{X} \to \mathcal{Y}$ is a predictor defined by a tree $T$ whose internal nodes are tagged with **tests** and whose leaves are tagged with **elements** (or **labels**) in $\mathcal{Y}$. A test on attribute $i$ for an internal node with $k$ children is a function $f : \mathcal{X}_i \to \{1, ..., k\}$. The function $f$ maps each element of $\mathcal{X}_i$ to the node children. For example, if $\mathcal{X}_i \equiv \{a,b,c,d\}$ and $k = 3$, then $f$ could be defined by

$$f(x_i) = \cases{1 \quad \text{ if }
x_i = c, \cr \cr 2 \quad \text{ if } x_i = d, \cr \cr 3 \quad \text{ if } x_i \in \{a, b\}}$$

An example with $\mathcal{X}_i = \mathbb{R}$ and $k = 3$ is the following

$$f(x_i) = \cases{1 \quad \text{ if }
x_i \in (-\infty, \alpha], \cr \cr 2 \quad \text{ if } x_i \in (\beta, +\infty)\, \cr \cr 3 \quad \text{ if } x_i \in (\alpha, \beta]}$$

where $\alpha < \beta$ are arbitrary values.<br />
The prediction $h_T(x)$ is computed as follows. Start by assigning $v \leftarrow r$, where $r$ is the root of $T$:
1) if $v$ is a leaf $\ell$, then stop and let $h_T(x)$ be the label $y \in \mathcal{Y}$ associated with $\ell$;
2) otherwise, if $f : \mathcal{X}_i \to \{1, ..., k\}$ is the test associated with $v$, then assign $v \leftarrow v_j$, where $j = f(x_i)$ and $v_j$ denotes the $j$-th children of $v$;
3) go to step $1$.

If the computation of $h_T(x)$ terminates in leaf $\ell$, we say that the example $x$ is routed to $\ell$. Hence $h_T(x)$ is always the label of the leaf to which $x$ is routed.

How can a tree predictor be built given a training set $\mathcal{S}$? For simplicity, we focus on the case of binary classication $\mathcal{Y} = \{-1, 1\}$ and we only consider complete binary trees, i.e., all internal nodes have exactly two children. The idea is to grow the tree classifier starting from a single-node tree (which must be a leaf) that corresponds to the classifier assigning to any data point the label that occurs most frequently in the training set (and the reason of that is, obviously, the existence of only one node and, therefore, only one possible label tagged to it). The tree is grown by picking a leaf (at the beginning there is only a leaf to pick) and replacing it with an internal node and two new leaves.

Suppose we have grown a tree $T$ up to a certain point, and the resulting classifier is $h_T$. We start by computing the contributions of each leaf to the training error $\ell_{\mathcal{S}}(h_T)$ (recall that each $x$ is classified by some leaf, the leaf which $x$ is routed to). For each leaf $\ell$, define $\mathcal{S}_\ell \equiv \{(x_t,y_t) \in \mathcal{S} : x_t$ is routed to $\ell\}$. That is, $\mathcal{S}_\ell$ is the subset of training examples that are routed to $\ell$. Define further two subsets of $\mathcal{S}_\ell$, namely $\mathcal{S}^+_\ell \equiv \{(x_t, y_t ) \in \mathcal{S}_\ell : y_t = +1\}$ and $\mathcal{S}^-_\ell \equiv \{(x_t, y_t) \in \mathcal{S}_\ell : y_t = -1\}$.

For each leaf $\ell$, let $N^+_\ell = \vert \mathcal{S}^+_\ell \vert$, $N^-_\ell = \vert \mathcal{S}^-_\ell \vert$ and $N_\ell = \vert \mathcal{S}_\ell \vert = N^+_\ell + N^-_\ell$. In order to minimize the training error $\ell_{\mathcal{S}}(h_T)$, the label associated with $\ell$ must be:

$$y_\ell = \cases{+1 \quad \text{ if } N^+_\ell \geq N^-_\ell, \cr \cr -1 \quad \text{ otherwise.}}$$

Thus, $\ell$ errs on exactly $min\{N^-_\ell, N^+_\ell\}$ training examples in $S_\ell$. Therefore, it is possible to write the training error as a sum of contributions due to all leaves

$$\widehat{\ell}(h) = \frac{1}{m}\sum_\ell min \Big\{ \frac{N^-_\ell}{N_\ell}, \frac{N^+_\ell}{N_\ell} \Big\} \cdot N_\ell = \frac{1}{m}\sum_{\ell}\psi \Big(\frac{N^+_\ell}{N_\ell}\Big)N_\ell$$

where we introduced the function $\psi(a) = min\{a, 1 - a \}$ defined on $[0, 1]$. Recall that $(N^+_\ell + N^-_\ell )/ N_\ell = 1$, so the argument of $\psi$ is a number between zero and one. ``

![[tree_classifier_growth.png]]

In this figure it is possible to observe a step in the growth of a tree classifier: a leaf $\ell$ is replaced by an internal node $v$ and be two new leaves $\ell'$ and $\ell''$.

Suppose we replace a leaf $\ell$ in $T$ with an internal node, and its associated test, and two new leaves $\ell'$ and $\ell''$. Can the training error of the new tree be larger than the training error of $T$? To answer this question is sufficient to observe that $\psi$ is a concave function (just like the logarithm).<br />
We can then apply **Jensen's inequality**, stating that 

$$\psi(\alpha a + (1 -\alpha)b) \geq \alpha \psi (a) + (1 - \alpha) \psi (b) \quad \forall a, b \in \mathbb{R} \text{ and all } \alpha \in [0,1]$$

Hence, via Jensen's inequality, we can study how the training error changes when $\ell$ is replaced by two new leaves $\ell'$ and $\ell''$,

$$\underbrace{\psi \Big ( \frac{N^+_\ell}{N_\ell} \Big)N_\ell}_{\text{contribution of }\ell} = \psi \Big ( \frac{N^+_{\ell'}}{N_\ell} + \frac{N^+_{\ell''}}{N_\ell} \Big)N_\ell = \psi \Big ( \frac{N^+_{\ell'}}{N_\ell} \frac{N_{\ell'}}{N_{\ell'}} + \frac{N^+_{\ell''}}{N_\ell}\frac{N_{\ell''}}{N_{\ell''}} \Big)N_\ell = $$

At this point it is possible to apply Jensen's inequality:

$$= \psi \Big ( \text{ }\underbrace{\frac{N^+_{\ell'}}{N_{\ell'}}}_{a} \underbrace{\frac{N_{\ell'}}{N_\ell}}_{\alpha} + \underbrace{\frac{N^+_{\ell''}}{N_{\ell''}}}_{b} \underbrace{\frac{N_{\ell''}}{N_{\ell}}}_{1- \alpha} \text{ } \Big ) N_{\ell} \geq \psi \Big( \text{ }\underbrace{\frac{N^+_{\ell'}}{N_{\ell'}}}_{a} \text { }\Big) \underbrace{\frac{N_{\ell'}}{N_{\ell}}}_{\alpha}N_{\ell} + \psi \Big( \text{ } \underbrace{\frac{N^+_{\ell''}}{N_{\ell''}}}_{b} \text{ } \Big ) \underbrace{\frac{N_{\ell''}}{N_\ell}}_{1-\alpha} N_{\ell} =$$
$$= \underbrace{\psi \Big ( \frac{N^+_\ell}{N_\ell} \Big)N_\ell}_{\text{contribution of }\ell} \geq \underbrace{\psi \Big(\frac{N^+_{\ell'}}{N_{\ell'}} \Big )N_{\ell'}}_{\text{contribution of }\ell'} + \underbrace{\psi \Big ( \frac{N^+_{\ell''}}{N_{\ell''}}\Big )N_{\ell''}}_{\text{contribution of }\ell''} $$

meaning that a split never increases the training error (recall that $N_{\ell'}^+ + N_{\ell''}^+ = N_{\ell}^+$).

A leaf $\ell$ such that $N^+_{\ell} \in \{0, N_{\ell}\}$ is called **pure** because it does not contribute to the training error. Note that $\widehat{\ell}(h_T) > 0$ unless all leaves are pure.

We now describe a generic method to construct a binary tree given a training set $S$.
1) **initialization**: create $T$ with only the root $\ell$ and let $S_\ell = S$. Let the label associated with the root be the most frequent label in $S_\ell$;
2) **main loop**: pick a leaf $\ell$ and replace it with an internal node $v$ creating two children $\ell'$ (first child) and $\ell''$ (second child). Pick an attribute $i$ and a test $f : \mathcal{X}_i \to \{1,2\}$. Associate the test $f$ with $v$ and partition $S_\ell$ in the two subsets $S_{\ell} = \{(x_t, y_t) \in S_{\ell} : f(x_t, i) = 1\}$ and $S_{\ell''} = \{(x_t, y_t) \in S_{\ell} : f(x_t, i) = 2\}$. Let the labels associated with $\ell'$ and $\ell''$ be, respectively, the most frequent labels in $S_{\ell'}$ and $S_{\ell''}$;

Just like the classifiers generated by the $k-NN$ algorithm, also tree predictors may suffer from overfitting. In this case, the relevant parameter is the number of tree nodes. If the number of tree nodes grows too much compared to the cardinality of the training set, then the tree may overfit the training data. For this reason, the choice of the leaf to expand should at least approximately guarantee the largest decrease in the training error.

In practice, functions different from $\psi(p) = min\{p, 1-p\}$ are used to measure this decrease. This happens because the min function might be problematic in certain circumstances. For example, consider splitting a leaf where $p = \frac{N^+_{\ell}}{N^{\ell}} = 0.8, q = \frac{N^+_{\ell'}}{N_{\ell'}} = 0.6, r = \frac{N^+_{\ell''}}{N^{\ell''}} = 1$ and $\alpha = \frac{N_{\ell'}}{N_{\ell}} = 0.5$. In this case, when $\psi(p) = min\{p, 1-p\}$ we have that

$$\psi(p) - \Big(\alpha \psi(q) + (1 - \alpha)\psi(r) \Big ) = 0.2 - (0.5 \times 0.4 + 0.5 \times 0) = 0$$

As this split leaves the training error unchanged, it would be not be considered when growing the tree, and the algorithm might even get stuck if no split can be found to decrease the training error. On the other hand, the test in the new internal node is correctly classifying half of the examples in $S\ell$, and all these correctly classified examples are routed to leaf $\ell''$ which is pure. Hence, half of the data in $S\ell$ is explained by the split.

In order to fix this problem, different functions $\psi$ are used in practice. These functions are similar to min because they are symmetric around $\frac{1}{2}$ and satisfy $\psi(0) = \psi(1) = 0$. However, unlike min, they have a nonzero curvature (i.e., strictly negative second derivative). The curvature helps in cases like the one described in the example above, that is when $p, q, r$ are all on the same side with respect to $\frac{1}{2}$ and $p = \alpha q+ (1 - \alpha)r$. In this case, $\psi(p) - (\alpha \psi (q) + (1 - \alpha)\psi(r)) = 0$ because between $0$ and $\frac{1}{2}$ the function $\psi(a) = min\{a, 1 - a\}$ is a straight line.

Some examples of functions $\psi$ used in practice are:
1) **Gini function**: $\psi_2(p) = 2p(1-p)$;
2) **scaled entropy**: $\psi_3(p) = -\frac{p}{2}\log_2(p) - \frac{1-p}{2}\log_2(1-p)$.

The following inequalities hold: $min\{p, 1-p\} \leq \psi_2(p) \leq \psi_3(p) \leq \psi_4(p)$.

![[curves_plot_tree_classifier.png]]

In the figure, it is possible to observe the plots of the curves $min \{p, 1-p\}$ (green line) and $\psi2$, $\psi3$, $\psi4$.

Note that tree predictors can be naturally used also to solve multiclass classification or regression tasks. In the first case, the label associated with a leaf is, once more, the most frequent label among all training examples routed to that leaf. In the regression case, where $\mathcal{Y} = \mathbb{R}$, the label associated to a leaf is the mean of the labels of all training examples that are routed to that leaf.

An interesting feature of tree predictors for binary classication is that they can be represented with a formula of [[Logica Matematica |propositional logic]] in **disjunctive normal form** (DNF). This representation is obtained by considering the clauses (conjunctions of predicates) that result from the tests on each path that leads from the root to a leaf associated with label $+1$. For example, the classifier corresponding to the tree in the figure below is represented by the formula

![[tree_classifier_example.png]]

$$(outlook = sunny) \wedge (humidity 70\%) \vee (outlook = overcast) \vee (outlook = rainy) \wedge (windy = false)$$

This rule-based representation of the tree classfiier is very intuitive, and lends itself to being manipulated using the tools of propositional logic; for example, to obtain more compact representations of the same classifier. More importantly, this representation provides an interpretable description of the knowledge the learning algorithm extracted from the training set.

----------------------------------------------------------------

zero training error in any prediction problem -> un esempio per rettangolo -> overfitting sicuramente

$U_l S_l = \mathcal{S} \quad \forall \ell , \ell' , \ell \neq \ell' S_{\ell} \wedge S_{\ell'} = \emptyset$

template algorithm:
start from root
	repeat
		pick a leaf and split it
	until some criterion is met ( i.e. too many nodes, the traning error does not go down, the training error is zero)

----------------------------------------------------------------

# Statistical Learning
In order to analyze a learning algorithm, a mathematical model of how examples $(x, y)$ are generated must be deﬁned. In the statistical learning framework, we assume that every example $(x, y)$ is obtained through an **independent draw** from a ﬁxed but unknown [[Statistica e Probabilità |probablity distribution]] on $\mathcal{X} \times \mathcal{Y}$. We write $(X, Y)$ to highlight that $x$ and $y$ are **[[Statistica e Probabilità#Variabili Aleatorie|random variables]]**. The assumption that not all data points $x$ are equally likely is quite natural (for example, when data points are images, only a small fraction of all possible pixel conﬁgurations correspond to real-world images). Similarly, as we previously argued, labels are typically noisy. This corresponds to assuming that labels of any given datapoint are stochastic.

Assuming that every example $(x, y)$ is the realization of an independent random draw from the same joint probability distribution $\mathcal{D}$ implies that every dataset (e.g., a training set or a test set) is a **statistical sample**. Note that the independence assumption is actually violated in many practical domains. Consider, for example, the problem of categorizing news stories. The newsfeed is clearly far from being an independent process, as the evolution of news reﬂects developing and related stories. Although not very realistic, the independence assumption is nevertheless convenient from the viewpoint of the analytical tractability of the problem, and works suprisingly well in practice.

In statistical learning, a **problem** is fully speciﬁed by a pair $(\mathcal{D}, \ell)$, where $\mathcal{D}$ is the data distribution and $\ell$ is a loss function. The performance of a predictor $h : \mathcal{X} \to \mathcal{Y}$ with respect to $(\mathcal{D}, \ell)$ is evaluated via the **statistical risk**, deﬁned by

$$\ell_{\mathcal{D}}(h) = \mathbb{E}[\ell(Y, h(X))]$$

This is the **expected value** of the loss function on a random example $(X, Y)$ drawn from $\mathcal{D}$. The best possible predictor $f^*: \mathcal{X} \to \mathcal{Y}$ given $\mathcal{D}$ is known as **Bayes optimal predictor**, and is deﬁned by

$$f^*(x) = \underset{\widehat{y} \in \mathcal{Y}}{\operatorname{argmin}} \text{ } \mathbb{E}[\ell(Y, \widehat{y}) \vert X = x]$$

where $\widehat{y} \in \mathcal{Y}$ is the value for which the function $\mathbb{E}[\ell(Y, \widehat{y}) \vert X = x]$ attains its minimum.<br />
The quantity $\mathbb{E} [\ell(Y, \widehat{y}) \vert X = x]$ is the **conditional risk**, which is the expected loss of the prediction with respect to the distribution of the label $Y$ conditioned on $x$. Hence $f^*(x)$ is the prediction minimizing the conditional risk. By deﬁnition of $f^*$, we have that 

$$\mathbb{E}[\ell(Y, f^*(X))\text{ } \vert \text{ } X = x] \leq \mathbb{E}[\ell(Y, h(X))\text{ } \vert \text{ } X = x]$$

for every predictor $h : \mathcal{X} \to \mathcal{Y}$ and for any $x \in \mathcal{X}$. Because the above inequality holds for every $x \in \mathcal{X}$, it also holds in expectation with respect to the random draw of $X$. But since, for any predictor $h$,

$$\mathbb{E} \Big[\mathbb{E}[\ell(Y, h(X))\text{ } \vert \text{ } X]\Big] = \mathbb{E}[\ell(Y, h(X))] = \ell_{\mathcal{D}}(h)$$

we have that $\ell_{\mathcal{D}}(f^*) \leq \ell_{\mathcal{D}}(h)$ for every predictor $h$. The risk $\ell_{\mathcal{D}}(f^*)$ of the Bayes optimal predictor is called **Bayes risk**. Typically, the Bayes risk is larger than zero because labels are stochastic.

We now compute the Bayes optimal predictor for the quadratic loss function $\ell(y, \widehat{y}) = (y − \widehat{y})^2$ when $\mathcal{Y} \equiv \mathbb{R}$,

$$f^*(x) = \underset{\widehat{y} \in \mathbb{R}}{\operatorname{argmin}} \mathbb{E}\Big[(Y - \widehat{y})^2 \text{ } \vert \text{ } X = x\Big]$$
$$= \underset{\widehat{y} \in \mathcal{Y}}{\operatorname {argmin}}\Big(\mathbb{E}\big[Y^2 \text{ }\vert \text{ }X = x \big] + \widehat{y}^2 - 2 \widehat{y} \mathbb{E} \big[Y \text{ }\vert \text{ }X = x\big] \Big)$$
$$= \underset{\widehat{y} \in \mathbb{R}}{\operatorname {argmin}}\Big( \widehat{y}^2 - 2\widehat{y} \mathbb{E}\big[Y \vert X = x\big]\Big)\quad \text{ignoring the term that does not depend on } \widehat{y}$$
$$= \mathbb{E}\big[Y \text{ } \vert \text{ } X = x\big] \quad \Big(\text{minimizing the function }F(\widehat{y}) = \widehat{y}^2 - 2\widehat{y}\mathbb{E}\big[Y \text{ } \vert \text{ } X = x\big]\Big)$$

Thus, the Bayes optimal prediction for the quadratic loss function is the expected value of the label conditioned on the instance.

Substituting in the conditional risk formula $\mathbb{E}[(Y - f^*(X)^2 \vert X = x]$ the Bayes optimal predictor $f^*(X) = \mathbb{E}[Y \text{ }\vert \text{ } X = x]$ we obtain

$$\mathbb{E}\Big[\big(Y - f^*(X)\big)^2 \text{ }\Big \vert \text{ } X = x \Big] = \mathbb{E}\Big[\big(Y - \mathbb{E}[Y \text{ } \vert \text{ }x ]\big)^2 \text{ }\Big \vert \text{ } X = x \Big] = Var\big[Y \vert X = x\big]$$

In words, the conditional risk of the Bayes optimal predictor for the quadratic loss is the **variance** of the label conditioned on the instance. By averaging over $X$ we obtain $\ell_{\mathcal{D}}(f^*) = \mathbb{E}\big[Var[Y \text{ } \vert \text{ } X]\big]$.<br />
Namely, the Bayes risk for the quadratic loss is the expected conditional variance of the label. Note that $\mathbb{E}\big[var[ Y \text{ } \vert \text{ } X]\big]$ is generally diﬀerent from $Var[Y]$. Indeed, the law of total variance says that $Var[Y] - \mathbb{E}\big[Var[Y \text{ } \vert \text{ } X]\big] = Var\big[\mathbb{E}[Y \text{ } \vert \text{ } X]\big]$.

We now focus on binary classiﬁcation, where $\mathcal{Y} = \{−1, 1\}$. Let $\eta(x)$ be the probability of $Y = 1$ conditioned on $X = x$. We view $\eta(x) = \mathbb{P}( Y = +1 \text{ } \vert \text{ } X = x$ as the value on x of a function $\eta: \mathcal{X} \to [0, 1]$.

Let $\mathbb{I}\{A\} \in \{0, 1\}$ be the **indicator function** of an event $A$; that is, $\mathbb{I}\{A\} = 1$ if and only if $A$ occurs.<br />
The statistical risk with respect to the zero-one loss $\ell(y, \widehat{y}) = \mathbb{I}\{\widehat{y} \neq y\}$ is therefore defined by

$$\ell_{\mathcal{D}}(h) = \mathbb{E}\big[\ell(Y, h(X))\big] = \mathbb{E}\big[\mathbb{I}\{h(X) \neq Y \}\big] = \mathbb{P}(h(X) \neq Y)$$

The Bayes optimal predictor $f^*: \mathcal{X} \to \{−1, 1\}$ for binary classiﬁcation is derived as follows

$$f^*(x) = \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\mathbb{E}\big[\ell(Y, \widehat{y}) \text{ } \vert \text{ } X = x\big]$$
$$= \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\mathbb{E}\Big[\mathbb{I}\big\{Y = +1\big\}\mathbb{I}\big\{\widehat{y} = -1\big\} + \mathbb{I}\big\{Y = -1\big\}\mathbb{I}\big\{\widehat{y} = +1\big\} \text{ } \vert \text{ } X = x\Big]$$
$$= \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\Big(\mathbb{P}\big(Y =  + 1 \text{ } \vert \text{ } X = x\big)\mathbb{I}\{\widehat{y} = -1\} + \mathbb{P}\big(Y = -1 \text{ } \vert \text{ } X = x\big)\mathbb{I}\{\widehat{y} = +1\}\Big)$$
$$=\underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\Big(\eta(x) \mathbb{I}\{\widehat{y}= -1\} + (1 - \eta(x))\mathbb{I}\{\widehat{y} = +1\}\Big)$$
$$= \cases{-1 \quad \text{if } \eta(x) < \frac{1}{2} \cr \cr +1 \quad \text{if} \eta(x) \geq \frac{1}{2}}$$

Hence, the Bayes optimal classiﬁer predicts the label whose probability is the highest when conditioned on the instance. Finally, it is easy to verify that the Bayes risk in this case is $\ell_{\mathcal{D}}(f^*) = \mathbb{E}\big[min\{\eta(X), 1 - \eta(X)\}\big]$.

## Bounding the risk
Next, we study the problem of bounding the risk of a predictor. From now on, we assume $\ell(y, \widehat{y}) \in [0, 1]$. However, keep in mind that our analysis continues to hold also when $\ell(y, \widehat{y}) \in [0, M]$ for any $M > 0$.

It should be clear that, given an arbitrary predictor h, we cannot directly compute its risk $\ell_{\mathcal{D}}(h)$ with respect to $\mathcal{D}$ because $\mathcal{D}$ is typically unknown (if we knew $\mathcal{D}$, we could directly construct the Bayes optimal predictor). We thus consider the problem of estimating the risk of a given predictor $h$. In order to compute this estimate, we can use the **test set** $S' = \{(x_1' , y_1' ), ... , (x_n' , y_n')$. We can then estimate $\ell_{\mathcal{D}}(h)$ with the **test error**, which is the average loss of $h$ on the test set,

$$\ell_{s'}(h) = \frac{1}{n}\sum_{t = 1}^{n}\ell\big(y_{t}', h(x_t')\big)$$

Under the assumption that the test set is generated through independent draws from $\mathcal{D}$, the test error corresponds to the **sample mean** of the risk. Indeed, for each $t = 1, ... , n$ the example $(X_t', Y_t')$ is an independent draw from $\mathcal{D}$. Therefore,

$$\mathbb{E}\Big[\ell\big(Y_t', h(X_t')\big)\Big] = \ell_{\mathcal{D}}(h) \quad \quad t= 1, ..., n$$

Note that the above equalities rely on the assumption that $h$ does not depend on the test set. If it did, then the above equalities would not be necessarily true. This fact is important in the analysis of learning algorithms.

In order to compute how good is the test error as an estimate for the risk, we can use the following result about the law of large numbers.

### Chernoﬀ-Hoeﬀding's lemma
Let $Z_1 , ... , Z_n$ be **independent and identically distributed random variables** with expectation $\mu$ and such that $0 \leq Z \leq 1$ for each $t = 1, ... , n$. Then, for any given $\epsilon > 0$

$$\mathbb{P}\Bigg(\frac{1}{n}\sum_{t = 1}^{n}Z_t > \mu + \epsilon \Bigg) \leq e^{-2\epsilon^2n}\quad \text{and}\quad \mathbb{P}\Bigg(\frac{1}{n}\sum_{t = 1}^{n}Z-t < \mu + \epsilon\Bigg) \leq e^{-2\epsilon^2n}$$

In the rest of this course, we repeatedly use the following facts:
1) for any two events $A$ and $B$, if $B \implies A$, then $P(B) \leq P(A)$;

![[fact1.png]]

2) for any collection $A_1 , ... , A_n$ of (not necessarily disjoint) events, $\mathbb{P}(A_1, \cup ...\cup A_N) \leq \sum_{i = 1}^{n}\mathbb{P}(A_i)$ (**Union bound**). If the events $A_1 , ... , A_n$ are pairwise disjoint, then the union bound holds with equality.

![[facts2.jpg]]

Using the Chernoﬀ-Hoeﬀding bound with $Z_t = \ell(y_t , h(x_t)) \in [0, 1]$, we can compute a conﬁdence interval for the risk as follows (where the test error is written as $\ell$ instead of $\ell_{S'}$ ),

$$\mathbb{P}\Big(\vert\ell_{\mathcal{D}}(h) - \ell(h) \vert > \epsilon\Big) = \mathbb{P}\Big(\ell_{\mathcal{D}}(h) - \ell(h) > \epsilon \cup \ell(h) - \ell_{\mathcal{D}}(h) > \epsilon\Big)$$
$$\quad = \mathbb{P}\Big(\ell_{\mathcal{D}}(h) - \ell(h) > \epsilon\Big) + \Big(\ell(h) - \ell_{\mathcal{D}}(h) > \epsilon \Big) \leq 2e^{-2\epsilon^{2}n} \quad \text{ } \quad (1)$$

where in the last step we applied the union bound to the disjoint events $\ell_{\mathcal{D}}(h) − \ell(h) > \epsilon$ and $\ell(h) − \ell_{\mathcal{D}}(h) > \epsilon$. Note that the probability is computed with respect to the random draw of the test set. This inequality shows that the probability that a test set gives a test error $\ell_{S'}(h)$ diﬀering from the true risk $\ell_{\mathcal{D}}(h)$ for more than $\epsilon$ quickly decreases with the size $n$ of the test set.

More speciﬁcally: if we set to $\delta \in (0, 1)$ the right-hand side of the previous equation and then solve for $\epsilon$, we get that

$$\vert \ell_{\mathcal{D}}(h) - \ell_{S'}(h)\vert \leq \sqrt{\frac{1}{n}\ln{\frac{2}{\delta}}}$$

holds with probability al least $1 − \delta$ with respect to the random draw of the test set.

The inequality $(1)$ is telling us how to use a test set to estimate the risk of a classiﬁer. More precisely, the inequality shows that the test set, which is how we measure in practice the performance of a classiﬁer on unseen data, is close to the statistical risk with high probability.

----------------------------------------------------------------

## Overﬁtting and underﬁtting
Fix a learning problem $(\mathcal{D}, \ell)$ and consider a generic learning algorithm $A$. Let $\mathcal{H}_A$ be the set of predictors generated by $A: h \in \mathcal{H}_A$ if and only if there exists a ﬁnite training set $S$ such that $A(S) = h$. For example, $A$ could be an algorithm for training a neural network and $\mathcal{H}_A$ is the set of predictors obtained by training the neural network using arbitrary training sets of ﬁnite size. Let $h^*$ be any predictor with minimum risk $\ell_{\mathcal{D}}(h^*)$ in $\mathcal{H}_A$. That is,

$$\ell_{\mathcal{D}}(h^*) \leq \underset{h \in \mathcal{H}_A}{\operatorname{min}}\ell_{\mathcal{D}}(h)$$

Fix a training set $S$ and let $h_S = A(S)$. The following is called the **bias-variance** decomposition:

$$\ell_{\mathcal{D}}(h_S) = \ell_{\mathcal{D}}(H-S) - \ell_{\mathcal{D}}(h^*)\quad\text{estimation error (large when overfitting)}$$
$$\quad + \ell_{\mathcal{D}}(h^*) - \ell_{\mathcal{D}}(f^*)\quad \text{approximation error (large when underfitting)}$$
$$\quad + \ell_{\mathcal{D}}(f^*) \quad \text{Bayes error (unavoidable)}$$

where $f^*$ is the Bayes optimal predictor for $(\mathcal{D}, \ell)$. Note that:
1) the Bayes error is not controllable because it only depends on $\mathcal{D}$ and the loss $\ell$;
2) the approximation (or bias) error, which is large when the algorithm underﬁts, arises because the risk of $H_A$ does not necessarily contain the Bayes optimal predictor;
3) the estimation (or variance) error, which is large when the algorithm overﬁts, arises because the risk of $h_S$ is generally diﬀerent from the risk of $h^*$.

We now use the bias-variance decomposition to balance overﬁtting and underﬁtting in the ERM algorithm run over a ﬁnite classe $\mathcal{H}$. Recall that ERM minimizes the training error in $\mathcal{H}$,

$$h_S = \underset{h \in \mathcal{H}}{\operatorname {argmin}}\ell_S(h)$$

where $\ell_S(h)$ is the training error of $h$ on the training set $S$. Similarly to before, the best predictor in the class $\mathcal{H}$ is any predictor $h^*$ satisfying

$$\ell_{D}(h^*) = \underset{h \in \mathcal{H}}{\operatorname{min}}\ell_{\mathcal{D}}(h)$$

Thanks to the law of large numbers, we know that the training error $\ell_S(h^*)$ is close to $ℓ_{\mathcal{D}}(h^*)$ with high probability with respect to the random draw of the training set $S$. Unfortunately, we cannot directly apply the Chernoﬀ-Hoeﬀding bound to $h_S$ to show that $\ell_{\mathcal{D}}(h_S)$ is close to $\ell_S(h_S)$. The reason is that $h_S$ is a function of the training set, and thus a random variable. Chernoﬀ-Hoeﬀding ensures that $\widehat{\ell}_S(h)$ is close to $\ell_{\mathcal{D}}(h)$ for any ﬁxed $h$, whereas $h_S$ is not ﬁxed as it depends on the sample.

Next, we bound the variance error. For every given training set S of size m, we have that

$$\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) = \ell_{\mathcal{D}}(h_S) - \ell_S(h_S) + \ell_S(h_S) - \ell_{\mathcal{D}}(h^*)$$
$$\leq \ell_{\mathcal{D}}(h_S) - \ell_S(h_S) + \ell_S(h^*) - \ell_{\mathcal{D}}(h^*)$$
$$\leq \vert \ell_{\mathcal{D}}(h_S) - \ell_S(h_S)\vert + \vert \ell_S(h^*) - \ell_{\mathcal{D}}(h^*) \vert$$
$$\leq 2 \underset{h \in \mathcal{H}}{\operatorname{max}} \vert \ell_S(h) - \ell_{\mathcal{D}}(h)\vert$$

where we used the assumption that $h_S$ minimizes $\ell_S(h)$ among all $h \in \mathcal{H}$. Therefore, for all $\epsilon > 0$,

$$\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) > \epsilon \implies \underset{h \in \mathcal{H}}{\operatorname {max}}\vert\ell_S(h) - \ell_{\mathcal{D}}(h)\vert > \frac{\epsilon}{2} \implies \exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h)\vert > \frac{\epsilon}{2}$$

Since the above chain of implications holds for any realization of the training set of size $m$, we can write

$$\mathbb{P}\big(\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) > \epsilon\big) \leq \mathbb{P} \Big(\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \frac{\epsilon}{2}\Big)$$

We now study the case $\vert \mathcal{H}\vert < \infty$, that is when the model space contains a ﬁnite number of predictors. Note that the event

$$\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \frac{\epsilon}{2}$$

is the union over $h \in \mathcal{H}$ of the (not necessarily disjoint) events $\vert \ell_S(h) − \ell_{\mathcal{D}}(h) \vert > \frac{\epsilon}{2}$. Using the union bound we get

$$\mathbb{P}\Big(\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) > \frac{\epsilon}{2} \Big) = \mathbb{P} \Bigg(\ \bigcup_{h \in \mathcal{H}} \Big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h)\vert > \frac{\epsilon}{2} \Big)\Bigg)$$
$$ \leq \sum_{h \in \mathcal{H}}\mathbb{P}\Big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \frac{\epsilon}{2}\Big)$$
$$\leq \vert \mathcal{H}\vert \underset{h \in H}{\operatorname{max}}\mathbb{P} \Big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h) > \frac{\epsilon}{2}\Big)$$
$$\leq \vert \mathcal{H} \vert 2e^{-m \epsilon^2/2} \quad \text{ } \quad (2)$$

where in the last step we used the Chernoﬀ-Hoeﬀding bound.

In conclusion, we have that

$$\mathcal{P}\big(\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) > \epsilon\big) \leq 2 \vert \mathcal{H}\vert e^{-m\epsilon^2/2} \quad \text{ } \quad (3)$$

Setting the right-hand side of $(3)$ equal to $\delta$ and solving for $\epsilon$ we obtain that

$$\ell_{\mathcal{D}}(h_S) \leq \ell_{\mathcal{D}}(h^*) + \sqrt{\frac{2}{m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$$

holds with probability at least $1−\delta$ with respect to the random draw of a training set of cardinality $m$.

For a given cardinality $m$ of the training set, in order to decrease our bound on the variance error of ERM, $\sqrt{\frac{2}{m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$ we must decrease $\vert \mathcal{H} \vert$. But decreasing $\vert \mathcal{H} \vert$ might cause an increase of $\ell_{\mathcal{D}}(h^*)$, which produces a corresponding increase of the bias error. In light of this statistical analysis, we conclude that the ERM algorithm generates predictors with high risk (compared to Bayes risk) when there is an unbalance between the variance error and the bias error. In particular, overﬁtting occurs when the variance error dominates the bias error, and underﬁtting occurs when the bias error dominates the variance error.

In the proof of the bound on the variance error, we have also shown in $(2)$ that

$$\forall h \in \mathcal{H} \quad \vert\ell_S(h) - \ell_{\mathcal{D}}(h) \vert \leq \sqrt{\frac{1}{2m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$$

with probability at least $1 − \delta$ with respect to the random draw of the training set. This implies that when the cardinality of the training set is suﬃciently large with respect to $\ln{\vert \mathcal{H} \vert}$, then the training error $\ell_S(h)$ becomes a good estimate for the statistical risk $\ell_{\mathcal{D}}(h)$ simultaneously for all predictors $h \in \mathcal{H}$. This is suﬃcient to prevent overﬁtting, as it tells us the ranking the predictors in $\mathcal{H}$ according to their training error approximately corresponds to ranking them according to their risk.

----------------------------------------------------------------