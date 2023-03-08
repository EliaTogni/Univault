# Introduction
**Data inference** is the study of methods that use data from the past for making predictions about the future. **Machine learning** is a powerful tool that can be used to solve a wide range of data inference problems including the ones listed below:
- **Clustering**: grouping data points according to their similarity (e.g., clustering customers according to their consumer profiles);
- **Prediction**: assigning semantic labels to data points (e.g., classifying documents based on their topics);
- **Control**: performing a sequence of actions in an environment in order to maximize a notion of utility (e.g., using a robot to map an unknown terrain).

[[Algoritmo |Algorithms]] that solve a [[Intelligenza Artificiale#Training delle ANN |learning task]] based on semantically annotated historical data (e.g., documents annotated with their topic or images annotated with the objects they contain) are said to operate in a **supervised learning mode**. In contrast, algorithms that use data without any semantic annotation are said to operate in an **unsupervised learning mode**. The focus of this course is on supervised learning and study the design of machine learning systems whose goal is to learn predictors, i.e., functions that map data points $x$ to their labels $y$. Once learned, these functions can be used to categorize documents or images, predict the future price of a stock based on the current market data, diagnose a disease based on a patient’s medical record, and so on.

## Label sets
It is common to use $\mathcal{Y}$ to denote the set of all possible labels for a data point of a given learning problem. Note that labels can be of two different types: **categorical labels**, like the topics of a document, and **numerical labels**, like the price of a stock or the demand for a product. Categorical labels define **classification** problems, where labels sets $\mathcal{Y}$ are typically finite and small (such as $\mathcal{Y} = \{\text{sport, politics, business}\}$ for document topics). Numerical labels define **[[Intelligenza Artificiale#Regressione |regression]]** problems, where label sets $\mathcal{Y} \subseteq R$ are typically infinite.

As it is always possible to map symbols to numbers, it is needed to specify more precisely how regression differs from classification. In regression, prediction mistakes are typically a function of the difference $|y−\widehat{y}|$, where $\widehat{y}$  is the prediction for $y$. In classification, mistakes are typically binary: either $\widehat{y} = y$ (no mistake) or $\widehat{y} = y$ (mistake). This because the label set in a classification task is an abstract set of symbols (irrespective to whether we encode the symbols using numbers) without a natural notion of distance between them. When $|\mathcal{Y}| = 2$, for example $\mathcal{Y} = \{\text{healthy, sick}\}$, it is a binary classification problem, and conventionally use the numerical encoding $\mathcal{Y} = \{−1,1\}$.

----------------------------------------------------------------

## Loss functions
In order to measure the goodness of a prediction for a prediction task we use a nonnegative **loss function** $\ell$, measuring the discrepancy $\ell(y,\widehat{y})$ between the predicted label $\widehat{y}$  and the correct label $y$. We always assume that $\ell(y,\widehat{y}) = 0$ when $\widehat{y} = y$. The simplest loss function for classification is the **zero-one loss**:

$$\ell(y, \widehat{y}) = \cases{0 \quad \text{ if }
 \widehat{y} = y \cr \cr 1 \quad \text{otherwise.}}$$

In certain cases, it is needed a more complex classification losses.<br />
Consider the problem of categorizing spam email using the label set $\mathcal{Y} = \{\text{spam, nonspam}\}$. It is possible to penalize a **false positive mistake** (i.e., a nonspam email wrongly classified as spam) more than a **false negative mistake** (i.e., a spam email wrongly classified as nonspam). For example:

$$\ell(y, \widehat{y}) = \cases{2 \quad \text{ if }
 y  = \text{nonspam and }\widehat{y} = \text{spam,} \cr \cr 1 \quad \text{ if } y = \text{spam and } \widehat{y} = \text{nonspam,}\cr \cr 0 \quad \text{ otherwise.}}$$

In regression, typical loss functions are the **absolute loss** $\ell(y,\widehat{y} ) = |y−\widehat{y}|$ and the **quadratic loss** $\ell(y,\widehat{y}) = (y − \widehat{y})^2$. Note that these losses are only meaningful for numerical labels.

In some cases, it may be convenient to choose predictions from a set $Z$ different from the label set $\mathcal{Y}$. For example, consider the problem of assigning a probability $y  ∈ (0,1)$ to the event $y = \text{ “it will rain tomorrow”}$ (and, consequently, assigning probability $1 − y$  to the complementary event $y = \text{ “it will not rain tomorrow”}$). In this case,$Y = \text{\{“rain”, “no rain”\}}$ and $Z = (0,1)$. Denoting these two events with $1$ (for rain) and $0$ (for no rain), we may use a loss function for regression, such as the absolute loss $\ell(y,\widehat{y}) = |y− \widehat{y}| \in (0,1)$. In order to extend the range of the loss function, so to punish more harshly predictions that depart too much from reality, it is possible to use instead the **logarithmic loss**,

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

In order to estimate the predictive power of a predictor it is typically used a test set. This is a set of examples $(x_1′ ,y_1′ ),..., (x_n′ ,y_n′ )$. Technically, it is a multiset because some examples may occur more than once. However, treating datasets as multisets complicates the notation. For this reason, and without much loss of generality, datasets will be mostly viewed as sets in the standard mathematical acception.Given a loss function $\ell$, the test set is used to compute the test error of a predictors $f$,

$$ \frac{1}{n}\sum_{t = 1}^{n}\ell(y'_t, f({\mathbf{x}}'_t))$$

The test error is meant to estimate the **average performance** of the predictor on typical real-world data.

A **learning algorithm** receives a training set as input and outputs a predictor. A training set is a set of examples $(x_1,y_1),..., (x_m,y_m).$ Training and test set are often prepared together, through a single round of data collection and annotation. Partitioning the examples in training and test data is done afterward, typically using a random split. The objective is to develop a theory to guide in the design of learning algorithms that generate predictors with low test error.

Since the only input to a learning algorithm is the training set $S \equiv (x_1,y_1),..., (x_m,y_m)$, a natural approach to the design of learning algorithms is to assume that the **training error**

$$\ell_s(f) = \frac{1}{m}\sum_{t=1}^{m}\ell(y_t, f(\mathbf{x}_t)$$

of a predictor be correlated to its test error.

----------------------------------------------------------------

## Empirical risk minimization
Let $\mathcal{F}$ be a given set of predictors and ℓ a loss function. The **empirical risk minimizer** (ERM) is the learning algorithm that outputs some predictor in F minimizing the training error

$\widehat{f} \in argmin_{f \in \mathcal{F}}\ell_{s}(f)$

The $\widehat{f} \in$ notation takes into account the fact that there could be multiple $f \in \mathcal{F}$ minimizing the training error.

----------------------------------------------------------------

## Overfitting and underfitting
ERM obviously fails when no predictor in $\mathcal{F}$ has a low test error. This suggests the fact that it should be better to run ERM with a large $\mathcal{F}$, so that there is a good chance that a predictor with low test error exists in $\mathcal{F}$ .

On the other hand, choosing $\mathcal{F}$ large can also lead ERM to fail. To see this, assume $\mathcal{Y} \equiv \{−1,1\}$ and consider a toy problem with only five data points, $\mathcal{X} \equiv {x_1,..., x_5}$. Now, take some $\mathcal{F}$ containing a classifier $f : \{x_1,..., x_5\} → \{−1,1\} for each of the $2^5 = 32$ possible binary labelings of the five data points, and suppose the training set contains any three points and the test set contains the two remaining ones. Now assume data labels $y_1,...,y_5$ are all assigned using some $f^* \in \mathcal{F}$, $y_t = f^*(x_t) for t = 1,..., 5$. Clearly $f^*$ has zero training error and zero test error. However, with a training set of three points, ERM always finds four classifiers in $\mathcal{F}$ that have zero training error. Of these four classifiers with zero training error, only one (i.e., $f^*$) has also zero test error. But the
training set does not contain enough information to help ERM select this classifier.

The problem in the previous example is that $\mathcal{F}$ is too large with respect to the training set. Information theory tells us that we need $\log_2 |\mathcal{F}| = 5$ bits of information to identify $f^* \in \mathcal{F}$. Indeed, $f^*$ is determined the five labels $f^*(x ), ..., f^*(x_5)$. This is telling us that the training set should contain at least $\log_2|\mathcal{F}|$ distinct data points. Equivalently, $|\mathcal{F}|$ should be smaller than $2^m$, where $m$ is the training set size.

it is possible to give specific names to these two ways of failing (i.e., returning a predictor with high test error) for a generic learning algorithm $A$:
- if $A$ fails by returning predictors with high training error, then we say that $A$ is **underfitting**;
- if $A$ fails by returning predictors with low training error, then we say that $A$ is **overfitting**.

When $A$ is ERM and the training set size $m$ is fixed, the information-theoretic argument says that overfitting is expected when $\log_2|\mathcal{F}| \gg m$. Vice versa, when $|\mathcal{F}|$ is too small, underfitting is expected as soon as the training set satisfies $m \gg \log_2 |\mathcal{F}|$.

----------------------------------------------------------------

## Noisy labels
Overfitting often arises when labels are **noisy**. Namely, when labels $y$ are not deterministically associated with data points $x$, like in the previous example where $y_t = f^*(x_t$)$.<br />
Noise may occur for at least three (not mutually exclusive) reasons:
1) **Human in the loop**: The labels are assigned by a human annotator who decides the “true” label for each data point. In this case, different annotators may have different opinions;
2) **Epistemic uncertainty**: Each data point is represented by a feature vector $x$ that does not contain enough information to uniquely determine the label. For example, suppose $x$ encodes measurements such as today’s temperature, pressure, humidity, whereas $y \in \{−1,1\}$ denotes whether tomorrow rains or not. It is quite possible that the same observed values lead to rain in some cases and to sun in other cases;
3) **Aleatoric uncertainty**: The feature vector $x$ representing a data point is obtained through noisy measurements. The label associated with a given $x$ is then stochastic because the same $x$ could have been generated by different data points.

Noisy labels cause overfitting because they may mislead the algorithm with regard to what is the “true” label for a given data point.

----------------------------------------------------------------

# The Nearest Neighbour algorithm
We now introduce a concrete learning algorithm for classification. This algorithm differs from ERM because it is not minimizing the training error in a given class of predictors. For now, we restrict our attention to binary classification tasks with numerical features, namely $\mathcal{X} = \mathbb{R}^d$ and $\mathcal{Y} = \{−1,1\}$. Given a training set, the classifier generated by this algorithm is based on the following simple rule: predict every point in the training set with its own label, and predict any other point with the label of the point in the training set which is closest to it.<br />
More formally, given a training set $\mathcal{S} \equiv (x_1,y_1),..., (x_m,y_m)$ , **the nearest neighbour algorithm** (**$NN$**) generates a classifier $h_{NN} : \mathbb{R}^d \to \{−1,1\}$ defined by:

$$h_{NN}(x) = \text{ label yt of the point} x_t \in \mathcal{S} \text{ closest to } x$$

If there is more than one point in $\mathcal{S}$ with smallest distance to $x$, then the algorithm predicts with the majority of the labels of these closest points. If there is an equal number of closest points with positive and negative labels, then the algorithm predicts a default value in $\{−1,1\}$ (for instance, the most frequent label in the training set).

Note that $h_{NN}(x_t) = y_t$ for every training example $(x_t,y_t)$. The distance between $x = (x_1,...,x_d)$ and $x_t = (x_{t,1},...,x_{t,d})$, denoted by $∥x − x_t∥$, is computed using the Euclidean distance:

$$ \Vert x − x_t \Vert= \sqrt{\sum_{i = 1}^{d}(x_i − x_{t,i})^2}$$

![[voronoi_diagram.png]]

In figure, the Voronoi diagram for a training set in $\mathbb{R}^2$.

The classifier generated by $NN$ induces a partition of $\mathbb{R}^d$ in Voronoi cells, where each training instance $x_t$ (here called a **center**) is contained in a cell, and the border between two cells is the set of points in $\mathbb{R}^d$ that have equal distance from the two cell centers. As NN typically stores the entire training set, the algorithm does not scale well with the number $\vert \mathcal{S} \vert = m$ of training points. Moreover, given any test point $x$, computing $h_{NN}(x)$ is costly, as it requires computing the distance between $x$ and every point of the training set, which in $\mathbb{R}^d$ takes time $\Theta(d_m)$ (shorter running times are possible when distances are approximated rather than being computed exactly). Finally, note that $NN$ always generates a classifier $h_{NN}$ such that $\ell \mathcal{S}(h_{NN}) = 0$. This is not surprising because, as we already said, $NN$ stores the entire training set.

![[hknn.png]]

In figure, the plot of the $h_{k−NN}$ classifier for $k = 1,3,5$ on a $1$-dimensional training set. As $k$ increases, the classifier becomes simpler and the number of mistaken points in the training set increases.

Starting from $NN$, we can obtain a family of algorithms denoted by $k-NN$ for $k = 1,3,5,...$, where $k$ cannot be taken larger than the size of the training set. These algorithms are defined as follows: given a training set $\mathcal{S} = (x_1,y_1),..., (x_m,y_m)$ , $k-NN$ generates a classifier $h_{k−NN}$ such that $h_{k−NN}(x)$ is the label $y_t \in \{−1,1\}$ appearing in the majority of the $k$ points $x_t \in \mathcal{S}$ which are closest to $x$. Just like in the case of $1-NN$, there could be training points at the same distance from $x$ such that more than $k$ points are closest to $x$. In this case it is possible to proceed by ranking the training points based on their distance from $x$ and then taking the $k′$ closest points where $k′$ is the smallest integer bigger or equal to $k$ such that the $(k′ +1)$-th point in the ranking has distance from $x$ strictly larger that the $k′$-th point. If no such $k′$ exists, then all the points must be taken in the training set. If $k′$ is strictly bigger than $k$, even, and there is an equal number of closest points with positive and negative labels, then the algorithm predicts a default value in $\{−1,1\}$.<br />
Hence, in order to compute $h_{k−NN}(x)$, we perform the following operations:
1) find the $k$ training points $x_{t_1} ,..., x_{t_k}$ closest to $x$. Let $y_{t_1} ,...,y_{t_k}$ be their labels;
2) if the majority of the labels $y_{t_1} ,...,y_{t_k}$ is $+1$, then $h_{k−NN}(x) = +1$; if the majority is $−1$, then $h_{k−NN}(x) = −1$.

Note that, for each $k \geq 1$ and for each $x_t$ in the training set, $x_t$ is always included in the $k$ points that are closest to $x_t$.

It is important to note that, unlike $1-NN$, in general we have that $\ell \mathcal{S}(h_{k−NN}) > 0$. Moreover, as $k$ grows, the classifiers generated by $k-NN$ become simpler. In particular, when $k$ is equal to the size of the training set, $h_{k−NN}$ becomes a constant classifier that always predicts the most common label in the training set.

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

In order to learn data whose features vary in heterogeneous sets $\mathcal{X}_1, ..., \mathcal{X}_d$ (i.e., sets with incomparable ranges, including ranges corresponding to categorical variables), it will be introduced a new family of predictors: the **tree predictors**.

A tree predictor has the structure of an ordered and rooted [[Albero |tree]] where each node is either a **leaf** (if it has zero children) or an **internal node** (if it has at least two children). Recall that an ordered tree is one where the children of any internal node are numbered consecutively. Hence, if the internal node $v$ has $k \geq 2$ children, we can access the first child, the second child, and so on until the $k$-th child.

![[tree_classifier_example.png]]

In the figure, it is possible to see a classical example of a tree classifier for a binary classification task. The features are: outlook, humidity e windy.

Fix $\mathcal{X} = \mathcal{X}_1 \times ... \times \mathcal{X}_d$,where $\mathcal{X}_i$ is the range of the $i$-th attribute $x_i$. A **tree predictor** $h_T : \mathcal{X} \to \mathcal{Y}$ is a predictor defined by a tree $T$ whose internal nodes are tagged with **tests** and whose leaves are tagged with **elements** in $\mathcal{Y}$. A test on attribute $i$ for an internal node with $k$ children is a function $f : \mathcal{X}_1 \to \{1, ..., k\}$. The function $f$ maps each element of $\mathcal{X}_i$ to the node children. For example, if $\mathcal{X}_i \equiv \{a,b,c,d\}$ and $k = 3$, then $f$ could be defined by

$$f(x_i) = \cases{1 \quad \text{ if }
x_i = c, \cr \cr 2 \quad \text{ if } x_i = d, \cr \cr 3 \quad \text{ if } x_i \in \{a, b\}}$$

An example with $\mathcal{X}_i = \mathbb{R}$ and $k = 3$ is the following

$$f(x_i) = \cases{1 \quad \text{ if }
x_i \in (-\infty, \alpha], \cr \cr 2 \quad \text{ if } x_i \in (\beta, +\infty)\, \cr \cr 3 \quad \text{ if } x_i \in (\alpha, \beta]}$$

where $\alpha < \beta$ are arbitrary values.<br />
The prediction $h_T(x)$ is computed as follows. Start by assigning $v \leftarrow r$, where $r$ is the root of $T$:
1) if $v$ is a leaf , then stop and let $h_T(x)$ be the label $y in \mathcal{Y}$ associated with $\ell$;
2) otherwise, if $f : \mathcal{X}_i \to \{1, ..., k\}$ is the test associated with $v$, then assign $v \to  v_j$ where $j = f(x_i)$ and $v_j$ denotes the $j$-th children of $v$;
2) go to step $1$.

If the computation of $h_T(x)$ terminates in leaf $\ell$, we say that the example $x$ is routed to $\ell$. Hence $h_T(x)$ is always the label of the leaf to which $x$ is routed.

![[decision_surface.png]]

In the above figure, it is plotted the decision surface for a multiclass tree classier trained on the colored dots (where each color corresponding to a different class) using the zero-one loss. It is possible to figure out a tree classifier consistent with this decision surface?

How can a tree predictor be built given a training set S? For simplicity, we focus on the case of binary classication $\mathcal{Y} = \{-1, 1\}$ and we only consider complete binary trees, i.e., all internal nodes have exactly two children. The idea is to grow the tree classifier starting from a single-node tree (which must be a leaf) that corresponds to the classifier assigning to any data point the label that occurs most frequently in the training set. The tree is grown by picking a leaf (at the beginning there is only a leaf to pick) and replacing it with an internal node and two new leaves.

Suppose we have grown a tree $T$ up to a certain point, and the resulting classifier is $h_T$. We start by computing the contributions of each leaf to the training error $\ell_{\mathcal{S}}(h_T)$ (recall that each $x$ is classified by some leaf, the leaf which $x$ is routed to). For each leaf $\ell$, define $\mathcal{S}_\ell \equiv \{(x_t,y_t) \in \mathcal{S} : x_t$ is routed to $\ell\}$. That is, $\mathcal{S}_\ell$ is the subset of training examples that are routedt to $\ell$. Define further two subsets of $\mathcal{S}_\ell$, namely $\mathcal{S}^+_\ell \equiv \{(x_t, y_t ) \in \mathcal{S}_\ell : y_t = +1\}$ and $\mathcal{S}^-_\ell \equiv \{(x_t, y_t) \in \mathcal{S}_\ell : y_t = -1\}$.

For each leaf $\ell$, let $N^+_\ell = \vert \mathcal{S}^+_\ell \vert$, $N^-_\ell = \vert \mathcal{S}^-_\ell \vert$ and  $N_\ell = \vert \mathcal{S}_\ell \vert = N^+_\ell + N^-_\ell$. In order to minimize the training error $\ell_{\mathcal{S}}(h_T)$, the label associated with $\ell$ must be:

$$y_\ell = \cases{+1 \quad \text{ if } N^+_\ell \geq N^-_\ell, \cr \cr -1 \quad \text{ otherwise.}}$$

Thus, $\ell$ errs on exactly $min\{N^-_\ell, N^+_\ell\}$ training examples in $S_\ell$. Therefore, it is possible to write the training error as a sum of contributions due to all leaves

$$\widehat{\ell}(h) = \frac{1}{m}\sum_\ell min \Big\{ \frac{N^-_\ell}{N_\ell}, \frac{N^+_\ell}{N_\ell} \Big\} \cdot N_\ell = \frac{1}{m}\sum_{\ell}\psi \Big(\frac{N^+_\ell}{N_\ell}\Big)N_\ell$$

where we introduced the function $\psi(a) = min\{a, 1 - a \}$ defined on $[0, 1]$. Recall that $(N^+_\ell + N^-_\ell )/ N_\ell = 1$, so the argument of $\psi$ is a number between zero and one. ``

![[tree_classifier_growth.png]]

In this figure it is possible to observe a step in the growth of a tree classier: a leaf $\ell$ is replaced by an internal node $v$ and be two new leaves $\ell'$ and $\ell''$.

Suppose we replace a leaf $\ell$ in $T$ with an internal node, and its associated test, and two new leaves $\ell'$ and $\ell''$. Can the training error of the new tree be larger than the training error of $T$? To answer this question is sufficient to observe that $\psi$ is a concave function (just like the logarithm).<br />
We can then apply **Jensen's inequality**, stating that 

$$\psi(\alpha a + (1 -\alpha)b \geq \alpha \psi (a) + (1 - \alpha) \psi (b) \quad \forall a, b \in \mathbb{R} \text{ and all } \alpha \in [0,1]$$

Hence, via Jensen's inequality, we can study how the training error changes when $\ell$ is replaced by two new leaves $\ell'$ and $\ell''$,

$$\underbrace{\psi \Big ( \frac{N^+_\ell}{N_\ell} \Big)N_\ell}_{\text{contribution of }\ell} = \psi \Big ( \frac{N^+_{\ell'}}{N_{\ell'}} \frac{N_{\ell'}}{N_\ell} + \frac{N^+_{\ell''}}{N_{\ell''}} \frac{N_{\ell''}}{N_{\ell}}\ \Big ) N_{\ell} \geq \psi \Big (\frac{N^+_{\ell'}}{N_{\ell'}} \Big) \frac{N_{\ell'}}{N_{\ell}}N_{\ell} + \psi \Big(\frac{N^+_{\ell''}}{N_{\ell}} \Big ) N_{ell} =$$
$$= \underbrace{\psi \Big(\frac{N^+_{\ell'}}{N_{\ell'}} \Big )N_{\ell'}}_{\text{contribution of }\ell'} + \underbrace{\psi \Big ( \frac{N^+_{\ell''}}{N_{\ell''}}N_{\ell''}}_{\text{contribution of }\ell''} \Big )$$


meaning that a split never increases the training error.

A leaf $\ell$ such that $N^+_{\ell} \in \{0, N_{\ell}\}$ is called **pure** because it does not contribute to the training error. Note that $\widehat{\ell}(h_T) > 0$ unless all leaves are pure.

We now describe a generic method to construct a binary tree given a training set $S$.
1) **initialization**: create $T$ with only the root $\ell$ and let $S_\ell = S$. Let the label associated with the root be the most frequent label in $S_\ell$;
2) **main loop**: pick a leaf $\ell$ and replace it with an internal node $v$ creating two children $\ell'$ (first child) and $\ell''$ (second child). Pick an attribute $i$ and a test $f : \mathcal{X}_i \to \{1,2\}$. Associate the test $f$ with $v$ and partition $S_\ell$ in the two subsets

$$S_{\ell} = \{(x_t, y_t) \in S_{\ell} : f(x_t, i) = 1\}$$

and

$$S_{\ell''} = \{(x_t, y_t) \in S_{\ell} : f(x_t, i) = 2\}$$

Let the labels associated with $\ell'$ and $\ell''$ be, respectively, the most frequent labels in $S_{\ell'}$ and $S_{\ell''}$.

Just like the classiers generated by the $k-NN$ algorithm, also tree predictors may suffer from overtting. In this case the relevant parameter is the number of tree nodes. If the number of tree nodes grows too much compared to the cardinality of the training set, then the tree may overfit the training data. For this reason, the choice of the leaf to expand should at least approximately guarantee the largest decrease in the training error.

In practice, functions different from $\psi(p) = min\{p, 1-p\}$ are used to measure this decrease. This happens because the min function might be problematic in certain circumstances. For example, consider splitting a leaf where $p = \frac{N^+_{\ell}}{N^{\ell}} = 0.8, q = \frac{N^+_{\ell'}}{N_{\ell'}} = 0.6, r = \frac{N^+_{\ell''}}{N^{\ell''}} = 1$ and $\alpha = \frac{N_{\ell'}}{N_{|ell}} = 0.5$. In this case, when $\psi(p) = min\{p, 1-p\}$ we have that

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
$\forall \ell \mathcal{S} = \Big\{ (x_t, y_t) \in \mathcal{S} : X_t \text{ is related to } \ell$
$U_l S_l = \mathcal{S} \quad \forall \ell , \ell' , \ell \neq \ell' S_{\ell} \wedge S_{\ell'} = \emptyset$

$S_\ell^+ = \Big\{(x_t, y_t) \in S_\ell : y_t = 1$
$S_\ell^-$
$N_\ell = N_\ell^+ + N_\ell^-$
$N_\ell^+ = \vert S_\ell^+ \vert$   $N_{\ell}^- = ...$


in $\widehat{\ell}(h)$ si divide per $N_\ell$ e si moltiplica per lo stesso valore perchè farà comodo più avanti, ma è ovviamente corretto senza.

template algorithm:
start from root
	repeat
		pick a leaf and split it
	until some criterion is met ( i.e. too many nodes, the traning error does not go down, the training error is zero)

----------------------------------------------------------------