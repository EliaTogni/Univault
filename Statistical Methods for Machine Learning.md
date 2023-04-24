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
Let $\mathcal{F}$ be a given set of predictors and $\ell$ a loss function. The **empirical risk minimizer** (**ERM**) is the learning algorithm that outputs some predictor in $\mathcal{F}$ minimizing the training error

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
In order to analyze a learning algorithm, a mathematical model of how examples $(x, y)$ are generated must be deﬁned. In the statistical learning framework, we assume that every example $(x, y)$ is obtained through an **independent draw** from a ﬁxed but unknown [[Statistica e Probabilità |probablity distribution]] on $\mathcal{X} \times \mathcal{Y}$. We write $(X, Y)$ to highlight that $x$ and $y$ are **[[Statistica e Probabilità#Variabili Aleatorie|random variables]]**. it is important to recall that the difference between a random variable and a **realization** is that the realization is the possible value of a random variable while the random variable is a function. The assumption that not all data points $x$ are equally likely is quite natural (for example, when data points are images, only a small fraction of all possible pixel conﬁgurations correspond to real-world images). Similarly, as we previously argued, labels are typically noisy. This corresponds to assuming that labels of any given datapoint are stochastic.

Assuming that every example $(x, y)$ is the realization of an independent random draw from the same joint probability distribution $\mathcal{D}$ implies that every dataset (e.g., a training set or a test set) is a **statistical sample**. Note that the independence assumption is actually violated in many practical domains. Consider, for example, the problem of categorizing news stories. The newsfeed is clearly far from being an independent process, as the evolution of news reﬂects developing and related stories. Although not very realistic, the independence assumption is nevertheless convenient from the viewpoint of the analytical tractability of the problem, and works suprisingly well in practice.

In statistical learning, a **problem** is fully speciﬁed by a pair $(\mathcal{D}, \ell)$, where $\mathcal{D}$ is the data distribution and $\ell$ is a loss function. The performance of a predictor $h : \mathcal{X} \to \mathcal{Y}$ with respect to $(\mathcal{D}, \ell)$ is evaluated via the **statistical risk**, deﬁned by

$$\ell_{\mathcal{D}}(h) = \mathbb{E}[\ell(Y, h(X))]$$

This is the **expected value** of the loss function on a random example $(X, Y)$ drawn from $\mathcal{D}$. Without knowing $\mathcal{D}$ it is not possible to compute $\ell_{\mathcal{D}}(h)$ but it is possible to rank the predictors and, therefore, to find the optimal one.<br />
The best possible predictor $f^*: \mathcal{X} \to \mathcal{Y}$ given $\mathcal{D}$ is known as **Bayes optimal predictor**, and is deﬁned by

$$\forall x \in \mathcal{X} \quad f^*(x) = \underset{\widehat{y} \in \mathcal{Y}}{\operatorname{argmin}} \text{ } \mathbb{E}[\ell(Y, \widehat{y}) \vert X = x]$$

where $\widehat{y} \in \mathcal{Y}$ is the value for which the function $\mathbb{E}[\ell(Y, \widehat{y}) \vert X = x]$ attains its minimum.<br />
What does it mean to condition an expectation? It means that we want to know the prediction of $f^*$ on $x$. This predictor tries to pick the best $\widehat{y}$, the one minimizing the expected loss on $x$.<br />
The quantity $\mathbb{E} [\ell(Y, \widehat{y}) \vert X = x]$ is the **conditional risk**, which is the expected loss of the prediction with respect to the distribution of the label $Y$ conditioned on $x$. Hence $f^*(x)$ is the prediction $\widehat{y}$ minimizing the conditional risk, given $x$. By deﬁnition of $f^*$, we have that 

$$\forall x \in \mathcal{X} \quad \mathbb{E}[\ell(Y, f^*(X))\text{ } \vert \text{ } X = x] \leq \mathbb{E}[\ell(Y, h(X))\text{ } \vert \text{ } X = x]$$

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
$$= \underset{\widehat{y} \in \mathbb{R}}{\operatorname {argmin}}\Big( \widehat{y}^2 - 2\widehat{y} \mathbb{E}\big[Y \vert X = x\big]\Big)\quad \text{ignoring the term that does not depend on } \widehat{y}$$

and the reason why this is possible is because the term ignored is just a costant and so it is possible to extract it from the $argmin$ operator.<br />
Now, we have to minimize the function $F(\widehat{y}) = \widehat{y}^2 - 2\widehat{y}\mathbb{E}\big[Y \text{ } \vert \text{ } X = x\big]$, which can be seen as $F(z) = z^2 - 2zc$. Its derivative is $F'(z) = 2z -2c$ and it is minimized for $F'(z) = 0$. After the substitution, we obtain $2 \widehat{y} - 2 \mathbb{E}\big[Y \vert X = x\big] = 0$ and, therefore

$$ f^*(x) = \mathbb{E}\big[Y \text{ } \vert \text{ } X = x\big]$$
 
Thus, the Bayes optimal prediction for the quadratic loss function is the expected value of the label conditioned on the instance. So, if it is desired to minimize the loss, the expectation must be predicted.

Substituting in the conditional risk formula $\mathbb{E}[(Y - f^*(X))^2 \vert X = x]$ the Bayes optimal predictor $f^*(X) = \mathbb{E}[Y \text{ }\vert \text{ } X = x]$ we obtain

$$ \ell_{\mathcal{D}}(f^*) = \mathbb{E}\Big[\big(Y - f^*(X)\big)^2 \text{ }\Big \vert \text{ } X = x \Big] = \mathbb{E}\Big[\big(Y - \mathbb{E}[Y \text{ } \vert \text{ } X = x ]\big)^2 \text{ }\Big \vert \text{ } X = x \Big] = Var\big[Y \vert X = x\big]$$

In words, the conditional risk of the Bayes optimal predictor for the quadratic loss is the **conditional variance** of the label on the instance. By averaging over $X$ we obtain $\ell_{\mathcal{D}}(f^*) = \mathbb{E}\big[Var[Y \text{ } \vert \text{ } X]\big]$.<br />
Namely, the Bayes risk for the quadratic loss is the expected conditional variance of the label. Note that $\mathbb{E}\big[Var[ Y \text{ } \vert \text{ } X]\big]$ is generally diﬀerent from $Var[Y]$. Indeed, the **law of total variance** says that $Var[Y] - \mathbb{E}\big[Var[Y \text{ } \vert \text{ } X]\big] = Var\big[\mathbb{E}[Y \text{ } \vert \text{ } X]\big]$.

We now focus on binary classiﬁcation, where $\mathcal{Y} = \{−1, 1\}$. Let $\eta(x)$ be the probability of $Y = 1$ conditioned on $X = x$. We view $\eta(x) = \mathbb{P}( Y = +1 \text{ } \vert \text{ } X = x)$ as the value on $x$ of a function $\eta: \mathcal{X} \to [0, 1]$.
 
Let $\mathbb{I}\{A\} \in \{0, 1\}$ be the **indicator function** of an event $A$; that is, $\mathbb{I}\{A\} = 1$ if and only if $A$ occurs .<br />
The statistical risk with respect to the zero-one loss $\ell(y, \widehat{y}) = \mathbb{I}\{\widehat{y} \neq y\}$ is therefore defined by

$$\ell_{\mathcal{D}}(h) = \mathbb{E}\big[\ell(Y, h(X))\big] = \mathbb{E}\big[\mathbb{I}\{h(X) \neq Y \}\big] =$$ $$ = 1 \cdot \mathbb{P}(h(X) \neq Y) + 0 \cdot \mathbb{P}(h(X) = Y) =  \mathbb{P}(h(X) \neq Y)$$

The Bayes optimal predictor $f^*: \mathcal{X} \to \{−1, 1\}$ for binary classiﬁcation is derived as follows

$$\forall x \in \mathcal{X} \quad f^*(x) = \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\mathbb{E}\big[\ell(Y, \widehat{y}) \text{ } \vert \text{ } X = x\big]$$
$$= \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\mathbb{E}\Big[\mathbb{I}\big\{Y = +1\big\}\mathbb{I}\big\{\widehat{y} = -1\big\} + \mathbb{I}\big\{Y = -1\big\}\mathbb{I}\big\{\widehat{y} = +1\big\} \text{ } \vert \text{ } X = x\Big]$$
$$= \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\Big (  \mathbb{E}\big[\mathbb{I}\{Y = +1\} \vert X = x\big]\mathbb{I}\{\widehat{y} = -1\} +  \mathbb{E}\big[\mathbb{I}\{Y = -1\} \vert X = x\big]\mathbb{I}\{\widehat{y} = +1\}\Big )$$
$$= \underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\Big(\mathbb{P}\big(Y =  + 1 \text{ } \vert \text{ } X = x\big)\mathbb{I}\{\widehat{y} = -1\} + \mathbb{P}\big(Y = -1 \text{ } \vert \text{ } X = x\big)\mathbb{I}\{\widehat{y} = +1\}\Big)$$
$$=\underset{\widehat{y} \in \{-1, 1\}}{\operatorname{argmin}}\Big(\eta(x) \mathbb{I}\{\widehat{y}= -1\} + (1 - \eta(x))\mathbb{I}\{\widehat{y} = +1\}\Big)$$

If $\widehat{y} = 1$, the first term goes to $0$ and we predict the second term. Viceversa, we predict the first term. The algorithm should, then, predict $-1$ when $\eta(x) < (1 - \eta(x))$. So 

$$= \cases{-1 \quad \text{if } \eta(x) < \frac{1}{2} \cr \cr +1 \quad \text{if } \eta(x) \geq \frac{1}{2}}$$

Hence, the Bayes optimal classifier predicts the label whose probability is the highest when conditioned on the instance. Finally, it is easy to verify that the Bayes risk in this case is $\ell_{\mathcal{D}}(f^*) = \mathbb{E}[\ell(f^*(X), Y)] = \mathbb{E}\big[\mathbb{I}\{f^*(x) \neq Y\}\big] = \mathbb{P}(f^*(X) \neq Y)$.
Knowing that $\mathbb{P}(f^*(X) \neq Y \vert X = x) = min \{\eta(x), (1 - \eta(x))\}$ and knowing that $\mathbb{E}\Big[\mathbb{E}\big[\mathbb{I}\{f^*(x) \neq Y\}\big \vert X = x]\Big] = \mathbb{E}[\mathbb{I}\{f^*(x) \neq Y\}\big]$, it is possible to define $\ell_{\mathcal{D}}(f^*) = \mathbb{E}\big[min\{\eta(X), 1 - \eta(X)\}\big]$.<br />
That is, the Bayes risk is the expectation of the probability of the event that is less likely to happen conditioned on the instance.

Let's assume we have a one directional problem (that is, based on a one directional feature) and consider $\eta: X \to [0, 1]$.



Now, consider the plot of the function $min \{Z, (1 - Z)\}$:



In the central region of the first plot, the label is basically random, because the function $min \{Z, (1 - Z)\}$ returns $1$ and $-1$ both with probability $\frac{1}{2}.$

## Bounding the risk
Next, we study the problem of bounding the risk of a predictor. From now on, we assume $\ell(y, \widehat{y}) \in [0, 1]$. However, keep in mind that our analysis continues to hold also when $\ell(y, \widehat{y}) \in [0, M]$ for any $M > 0$.<br />
It should be clear that, given an arbitrary predictor $h: X \to Y$, we cannot directly compute its statistical risk $\ell_{\mathcal{D}}(h)$ with respect to $\mathcal{D}$ because $\mathcal{D}$ is typically unknown (if we knew $\mathcal{D}$, we could directly construct the Bayes optimal predictor). We thus consider the problem of estimating the statistical risk of a given predictor $h$. In order to compute this estimate, we can use the **test set** $S' = \{(x_1' , y_1' ), ... , (x_n' , y_n')$. We can then estimate $\ell_{\mathcal{D}}(h)$ with the **test error**, which is the average loss of $h$ on the test set

$$\ell_{s'}(h) = \frac{1}{n}\sum_{t = 1}^{n}\ell\big(y_{t}', h(x_t')\big)$$

Under the assumption that the test set is generated through independent draws from $\mathcal{D}$, the test error corresponds to the **sample mean** of the statistical risk. Indeed, for each $t = 1, ... , n$ the example $(X_t', Y_t')$ is an independent draw from $\mathcal{D}$. Therefore,

$$\mathbb{E}\Big[\ell\big(Y_t', h(X_t')\big)\Big] = \ell_{\mathcal{D}}(h) \quad \quad t= 1, ..., n$$

Note that the above equalities rely on the assumption that $h$ does not depend on the test set $S'$ (but it depends on the training set). If it did, then the above equalities would not be necessarily true. This fact is important in the analysis of learning algorithms.

In order to compute how good is the test error as an estimate for the risk, we can use the following result about the law of large numbers.

### Chernoﬀ-Hoeﬀding's lemma
Let $Z_1 , ... , Z_n$ be **independent and identically distributed random variables** with expectation $\mu$ and such that $0 \leq Z \leq 1$ for each $t = 1, ... , n$. Then, for any given $\varepsilon > 0$

$$\mathbb{P}\Bigg(\frac{1}{n}\sum_{t = 1}^{n}Z_t > \mu + \varepsilon \Bigg) \leq e^{-2\varepsilon^2n}\quad \text{and}\quad \mathbb{P}\Bigg(\frac{1}{n}\sum_{t = 1}^{n}Z_t < \mu + \varepsilon\Bigg) \leq e^{-2\varepsilon^2n}$$

This means that if we compute the sample mean of the variables, the probability that this will be much larger (or much smaller) than the expectation, with respect to the draw of the sample, decreases exponentially with the sample size.

In the rest of this course, we repeatedly use the following facts:
1) for any two events $A$ and $B$, if $B \implies A$, then $P(B) \leq P(A)$;

![[fact1.png]]

2) for any collection $A_1 , ... , A_n$ of (not necessarily disjoint) events, $\mathbb{P}(A_1, \cup ...\cup A_N) \leq \sum_{i = 1}^{n}\mathbb{P}(A_i)$ (**Union bound**). If the events $A_1 , ... , A_n$ are pairwise disjoint, then the union bound holds with equality.

![[facts2.jpg]]

Using the Chernoﬀ-Hoeﬀding bound with $Z_t = \ell(y_t , h(x_t)) \in [0, 1]$, we can compute a conﬁdence interval for the statistical risk as follows (where the test error is written as $\ell$ instead of $\ell_{S'}$ )

$$\mathbb{P}\Big(\vert\ell_{\mathcal{D}}(h) - \ell(h) \vert > \varepsilon\Big) = \mathbb{P}\Big(\ell_{\mathcal{D}}(h) - \ell(h) > \varepsilon \cup \ell(h) - \ell_{\mathcal{D}}(h) > \varepsilon\Big)$$
$$\quad = \mathbb{P}\Big(\ell_{\mathcal{D}}(h) - \ell(h) > \varepsilon\Big) + \Big(\ell(h) - \ell_{\mathcal{D}}(h) > \varepsilon \Big) \leq 2e^{-2\varepsilon^{2}n} \quad \text{ } \quad (1)$$

where in the last step we applied the union bound to the disjoint events $\ell_{\mathcal{D}}(h) − \ell(h) > \varepsilon$ and $\ell(h) − \ell_{\mathcal{D}}(h) > \varepsilon$. Note that the probability is computed with respect to the random draw of the test set. This inequality shows that the probability that a test set gives a test error $\ell_{S'}(h)$ diﬀering from the true statistical risk $\ell_{\mathcal{D}}(h)$ (which is $\mu$ in the Chernoff-Hoeffding bound) for more than $\varepsilon$ quickly decreases with the size $n$ of the test set.

More speciﬁcally: if we set to $\delta \in (0, 1)$ the right-hand side of the previous equation and then solve for $\varepsilon$, we get that

$$\varepsilon = \sqrt{\frac{1}{2n}\ln\frac{1}{\delta}}$$

For this value of $\varepsilon$, the probability (the right-hand side of the equation) is at most $\delta$.

$$\vert \ell_{\mathcal{D}}(h) - \ell_{S'}(h)\vert \leq \sqrt{\frac{1}{2n}\ln{\frac{2}{\delta}}}$$

holds with probability al least $1 − \delta$ with respect to the random draw of the test set.

The inequality $(1)$ is telling us how to use a test set to estimate the risk of a classiﬁer. More precisely, the inequality shows that the test set, which is how we measure in practice the performance of a classiﬁer on unseen data, is close to the statistical risk with high probability.

----------------------------------------------------------------

## Overﬁtting and underﬁtting
Fix a learning problem $(\mathcal{D}, \ell)$ and consider a generic learning algorithm $A$. Let $\mathcal{H}_A$ be the set of predictors generated by $A$ such that $h \in \mathcal{H}_A$ if and only if there exists a ﬁnite training set $S$ such that $A(S) = h$. For example, $A$ could be an algorithm for training a neural network and $\mathcal{H}_A$ is the set of all possible predictors obtained by training the neural network using arbitrary training sets of ﬁnite size. Let $h^*$ be any predictor with minimum risk $\ell_{\mathcal{D}}(h^*)$ in $\mathcal{H}_A$. That is,

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
2) the approximation (or bias) error, which is large when the algorithm underﬁts, arises because the risk of $H_A$ does not necessarily contain the Bayes optimal predictor;
3) the estimation (or variance) error, which is large when the algorithm overﬁts, arises because the risk of $h_S$ is generally diﬀerent from the risk of $h^*$.

We now use the bias-variance decomposition to balance overﬁtting and underﬁtting in the ERM algorithm run over a ﬁnite classe $\mathcal{H}$. Recall that ERM minimizes the training error in $\mathcal{H}$,

$$A(S) = h_S = \underset{h \in \mathcal{H}}{\operatorname {argmin}}\ell_S(h)$$

where $\ell_S(h)$ is the training error of $h$ on the training set $S$. Similarly to before, the best predictor in the class $\mathcal{H}$ is any predictor $h^*$ satisfying

$$\ell_{D}(h^*) = \underset{h \in \mathcal{H}}{\operatorname{min}}\ell_{\mathcal{D}}(h)$$

Thanks to the law of large numbers, we know that the training error $\ell_S(h^*)$ is close to $ℓ_{\mathcal{D}}(h^*)$ with high probability with respect to the random draw of the training set $S$. Unfortunately, we cannot directly apply the Chernoﬀ-Hoeﬀding bound to $h_S$ to show that $\ell_{\mathcal{D}}(h_S)$ is close to $\ell_S(h_S)$. The reason is that $h_S$ is a function of the training set, and thus a random variable. Chernoﬀ-Hoeﬀding ensures that $\widehat{\ell}_S(h)$ is close to $\ell_{\mathcal{D}}(h)$ for any ﬁxed $h$, whereas $h_S$ is not ﬁxed as it depends on the sample.

Next, we bound the variance error. For every given training set S of size m, we have that

$$\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) = \ell_{\mathcal{D}}(h_S) - \ell_S(h_S) + \ell_S(h_S) - \ell_{\mathcal{D}}(h^*)$$
$$\leq \ell_{\mathcal{D}}(h_S) - \ell_S(h_S) + \ell_S(h^*) - \ell_{\mathcal{D}}(h^*)$$

This replacement is legal because $h_S$ is the minimizer of the training error.
The last subctraction is bounded by $\sqrt(...)$ with probability at least $1 - \delta$.

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
$$\leq \vert \mathcal{H}\vert \underset{h \in H}{\operatorname{max}}\mathbb{P} \Big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h) > \frac{\varepsilon}{2}\Big)$$
$$\leq \vert \mathcal{H} \vert 2e^{-m \varepsilon^2/2} \quad \text{ } \quad (2)$$

where in the last step we used the Chernoﬀ-Hoeﬀding bound.

In conclusion, we have that

$$\mathcal{P}\big(\ell_{\mathcal{D}}(h_S) - \ell_{\mathcal{D}}(h^*) > \varepsilon\big) \leq 2 \vert \mathcal{H}\vert e^{-m\varepsilon^2/2} \quad \text{ } \quad (3)$$

Setting the right-hand side of $(3)$ equal to $\delta$ and solving for $\varepsilon$ we obtain that

$$\ell_{\mathcal{D}}(h_S) \leq \ell_{\mathcal{D}}(h^*) + \sqrt{\frac{2}{m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$$

holds with probability at least $1−\delta$ with respect to the random draw of a training set of cardinality $m$.

For a given cardinality $m$ of the training set, in order to decrease our bound on the variance error of ERM, $\sqrt{\frac{2}{m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$ we must decrease $\vert \mathcal{H} \vert$. But decreasing $\vert \mathcal{H} \vert$ might cause an increase of $\ell_{\mathcal{D}}(h^*)$, which produces a corresponding increase of the bias error. In light of this statistical analysis, we conclude that the ERM algorithm generates predictors with high risk (compared to Bayes risk) when there is an unbalance between the variance error and the bias error. In particular, overﬁtting occurs when the variance error dominates the bias error, and underﬁtting occurs when the bias error dominates the variance error.

In the proof of the bound on the variance error, we have also shown in $(2)$ that

$$\forall h \in \mathcal{H} \quad \vert\ell_S(h) - \ell_{\mathcal{D}}(h) \vert \leq \sqrt{\frac{1}{2m}\ln{\frac{2 \vert \mathcal{H}\vert}{\delta}}}$$

with probability at least $1 − \delta$ with respect to the random draw of the training set. This implies that when the cardinality of the training set $m$ is suﬃciently large with respect to $\ln{\vert \mathcal{H} \vert}$, then the training error $\ell_S(h)$ becomes a good estimate for the statistical risk $\ell_{\mathcal{D}}(h)$ simultaneously for all predictors $h \in \mathcal{H}$. This is suﬃcient to prevent overﬁtting, as it tells us the ranking the predictors in $\mathcal{H}$ according to their training error approximately corresponds to ranking them according to their risk.

----------------------------------------------------------------

# Risk analysis for tree predictors
The risk analysis for ERM over a ﬁnite class $\mathcal{H}$ of predictors states that, with probability at least $1 −\delta$ with respect the random draw of training set of size $m$, we have

$$\ell_{\mathcal{D}}(\widehat{h}) \leq \underset{h \in \mathcal{H}}{\operatorname{min}}\ell_{\mathcal{D}}(h) + \sqrt{\frac{2}{m} \ln\frac{2 \vert \mathcal{H} \vert}{\delta}} \quad \text{ } \quad (1)$$

We can see what happens when applying this result to the class of predictors computed by binary tree classiﬁers over $\mathcal{X} = {0, 1}^d$ (i.e., d binary attributes). We consider **complete [[Albero Binario|binary trees]]**: trees whose node have either zero or two children. A full binary tree is a complete binary tree whose leaves (nodes with zero children) are all at the same depth. A complete binary tree with $N$ nodes has always $(N + 1)/2$ leaves.

**Fact $1$**: for each function of the form $h : \{0, 1\}^d \to \{-1, 1\}$ there exists a binary tree classiﬁer with at most $2^{d+1}-1$ nodes that computes $h$.

To proof this assumption, consider a full binary tree with $2^d$ leaves (which therefore has $2^{d+1}-1$ nodes). The root node implements a binary test on $x_1$, the $2$ nodes at depth $1$ implement binary tests on $x_2$, and so on until the $2^{d−1}$ nodes at depth $d-1$ which test $x_d$. Now note that any path from root to a leaf corresponds to a binary sequence in $\{0, 1\}^d$ . Given any $h : \{0, 1\}^d \to \{-1, 1\}$, we can assign a label $y_\ell \in \{−1, 1\}$ to each leaf $\ell$ so that if the path to the leaf corresponds to $x \in \{0, 1\}$ , then the label is set to $h(x)$. The classiﬁer computed by the tree then corresponds to $h$.

Since there are $2^{2^d}$ binary functions over $\{0, 1\}$, it is possible to run ERM with a class $\mathcal{H}$ containing $2^{2^d}$ tree classiﬁers. The upper bound $(1)$ then becomes

$$\ell_{\mathcal{D}}(\widehat{h}) \leq \underset{h \in \mathcal{H}}{\operatorname{min}}\ell_{\mathcal{D}}(h) + \sqrt{\frac{2}{m}\Big(2^d \ln2 + \ln \frac{2}{\delta}\Big) }$$

Therefore, in order to make the risk of ERM small, the training set must contain a number $m$ of training examples of the order of $2^d$, which is the cardinality of $\mathcal{X}= \{0, 1\}$. This is a truly extreme case of overﬁtting.

## Limiting the number of nodes
In order to reduce overﬁtting, we can minimize training error within a smaller class of trees. Consider the set $\mathcal{H}_N$ of all classiﬁers computed by complete binary tree predictors with $N$ nodes on $\{0, 1\}^d$, where $N \ll 2^d$.

$$\vert \mathcal{H}\vert \leq (2de)^N$$

To proof this assumption,  note that $\vert \mathcal{H}_N \vert$ is smaller than the product of the number of binary trees with $N$ nodes, the number of ways of assigning binary tests to attributes at the internal nodes, the number of ways of assigning binary labels to the leaves. If we conventionally assign the left child of a node to the negative result of a test, and the right child to a positive result, a test is uniquely identiﬁed just by the index of the tested attribute. Therefore, if the tree has $M$ internal nodes, there are $d^M$ ways of assigning tests to internal nodes. Moreover, since there are $N-M$ leaves, there are $2^{N−M}$ ways of assigning binary labels to leaves. Therefore, each tree of $N$ nodes can implement up to $d^M 2^{N-M} \leq d^N$ classiﬁers. Finally, the number of complete binary trees with $N$ nodes ($N$ is odd because the tree is complete) is given by the $\frac{N-1}{2}$-th Catalan number

$$C_{\frac{N-1}{2}} = \frac{2}{N+1}\binom{N -1}{(N-1)/2} $$

Thus, using the standard upper bound $\binom{n}{k} \leq (\frac{en}{k})^k$ derived from **Stirling approximation to binomial coeﬃcients**, we get

$$\vert \mathcal{H}_N \vert \leq \frac{2}{N +1} \Big(\frac{2e(N -1)}{N-1} \Big)^{\frac{N-1}{2}}d^N < (2ed)^N$$

concluding the proof.

Hence, if $\widehat{h} = \underset{\mathcal{H}_N}{\operatorname{argmin}}\ell_S(h)$ for a given $N$ and training set $S$, the upper bound $(1)$ becomes

$$\ell_{\mathcal{D}}(\widehat{h}) \leq \underset{h \in \mathcal{H}_N}{\operatorname{min}}\ell_{\mathcal{D}}(h) + \sqrt{\frac{2}{m}\Big(N\big(1 + \ln(2d)\big) + \ln \frac{2}{\delta}\Big)}$$

From that, we deduce that in this case a training set of size of order $N \ln d$ is enough to control the risk of $\widehat{h} \in H_N$.

----------------------------------------------------------------

## A more reﬁned bound
As it is not clear what $N$ should be used in practice, we now derive a more reﬁned bound. Recall that we control the variance error of ERM in $H_N$ by making sure that the risk of each predictor in $H_N$ can exceed its training error by at most $\varepsilon$. We now take a diﬀerent approach. Namely, we upper bound the risk of a tree predictor h by its training error plus a quantity $\varepsilon_h$ that now depends on the size of the tree. To this purpose, let $H$ be the set of all tree classiﬁers with at most $2^{d+1}-1$ nodes. Because of Fact $1$, $\mathcal{H}$ implements all binary classiﬁers $h: \{0,1\}^d \to \{-1, 1\}$. We introduce a function $w : \mathcal{H} \to [0, 1]$ and call $w(h)$ the weight of tree predictor $h$. We assume

$$\sum_{h in \mathcal{H}}w(h) \leq 1 \quad \text{ } \quad (2)$$

We can then write the following chain of inequalities, where $\varepsilon_h > 0$ will be chosen later on,

$$\mathbb{P}\big(\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \varepsilon_h \big) \leq \sum_{h \in \mathcal{H}}\mathbb{P}\big(\vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \varepsilon_h\big) \leq \sum_{h \in \mathcal{H}}2e^{-2me_h^2}$$

Note that we used Chernoﬀ-Hoeﬀding bound in the last step. Now, choosing

$$\varepsilon_h = \sqrt{\frac{1}{2m}\Big(\ln\frac{1}{w(h)} + \ln\frac{2}{\delta}\Big)}$$

we get that

$$\mathbb{P}\big(\exists h \in \mathcal{H}: \vert \ell_S(h) - \ell_{\mathcal{D}}(h) \vert > \varepsilon_h \big) \leq \sum_{h \in \mathcal{H}}\delta w(h) \leq \delta$$

where we used the property $(2)$ of the function w.

A consequence of this analysis is that, with probabilty at least $1 − \delta$ with respect to the training set random draw, we have

$$ \ell_{\mathcal{D}}(h) \leq \ell_S(h)+ \sqrt{\frac{1}{2m}\Big(\ln\frac{1}{w(h)} + \ln\frac{2}{\delta}\Big)} \quad \text{ } (3)$$

simultaneously for every $h \in \mathcal{H}$. This suggests an alternative algorithm to training error minimization: while ERM uses

$$\widehat{h} = \underset{h \in \mathcal{H}_N}{\operatorname{argmin}}\ell_S(h)$$

for a given $N$, the new approach leads to the choice

$$\widehat{h} = \underset{h \in \mathcal{H}_N}{\operatorname{argmin}}\Bigg( \ell_S(h)+ \sqrt{\frac{1}{2m}\Big(\ln\frac{1}{w(h)} + \ln\frac{2}{\delta}\Big)} \Bigg) \quad \text{ } (4)$$

The function $w$ can be naturally viewed as a complexity measure for the tree predictor $h$. Note that this analysis oﬀers a diﬀerent viewpoint on overﬁtting: $\ell_S(h)$ becomes a good estimate of $\ell_{\mathcal{D}}(h)$ when it is “penalized” by the term

$$\sqrt{\frac{1}{2m}\Big(\ln\frac{1}{w(h)} + \ln\frac{2}{\delta}\Big)}$$

this accounts for the fact that we used the $m$ training examples to choose a tree predictor $h$ of complexity $w(h)$.

A concrete choice for the function $w$ is obtained as follows. Using coding theoretic techniques, we can encode each tree predictor $h$ with $N_h$ nodes using a binary string $\sigma(h)$ of length $\vert \sigma (h) \vert = (N_h +1 ) \lceil \log_2(d+3) \rceil + 2 \lfloor \log_2 N_h \rfloor + 1 = \mathcal{O}(N_h \log d)$, so that there are no two predictors $h$ and $h'$ such that $\sigma(h)$ is a preﬁx of $\sigma(h')$. Codes of this kind are called **instantaneous** and always satisfy the Kraft inequality

$$\sum_{h \in \mathcal{H}}2^{- \vert \sigma(h) \vert} \leq 1$$

Thanks to Kraft inequality (which implies property $(2)$) we can assign weight $w(h) = 2^{−\vert \sigma(h)\vert}$ to a classiﬁer $h$ computed by a tree predictor with $N_h$ nodes. Applying bound $(3)$ we get that, with probability at least $1 − \delta$ with respect to the training set random draw,

$$\ell_{\mathcal{D}}(h) \leq \ell_S(h)+ \sqrt{\frac{1}{2m}\Big(\vert \sigma(h) \vert + \ln\frac{2}{\delta}\Big)} \quad (\text{with }\vert \sigma(h) \vert = \mathcal{O}(N_h\log d)) $$

simultaneously for each $h \in \mathcal{H}$. Hence, a learning algorithm for tree predictors can control overﬁtting by generating predictors $\widehat{h}$ deﬁned by

$$\widehat{h} = \underset{h \in \mathcal{H}}{\operatorname{argmin}}\Bigg(\ell_S(h)+ \sqrt{\frac{1}{2m}\Big(\vert \sigma(h) \vert + \ln\frac{2}{\delta}\Big)}\Bigg)$$

Note that the choice of the weight function $w$ is not determined by the analysis. In particular, we may choose any other $w$ satisfying $(2)$. We should then interpret $w$ as a bias term, giving preference to certain trees as opposed to others. A bias towards smaller trees is an instance of the principle known as **Occam Razor**: if two explanations agree with a set of observations, then the shortest explanation is the one with the biggest predictive power. This is supported by the empirical observation that, given two predictors with the same training error, the “simpler” predictor tends to have smaller risk.

----------------------------------------------------------------

# Hyperparameter tuning and risk estimates
In practice, learning algorithms are often speciﬁed up to one or more hyperparameters. These are special parameters (like $k$ in $k-NN$ or the learning rate, the number of epochs, and the batch size in neural networks) whose value must be determined before the training phase can start. Crucially, setting the hyperparameters in the wrong way can lead to underfitting or overfitting.

A learning algorithm with one or more hyperparameters is not really an algorithm, but rather a family of algorithms, one for each possible assignment of values to the hyperparameters. Let $\{A_\theta : \theta \in \Theta\}$ be such a family of learning algorithms, where $\theta$ is a vector of hyperparameters and $\Theta$ is the set of all possible hyperparameter values. Fix a learning problem $(\mathcal{D}, \ell)$ and let $A_\theta(S) = h$ be the predictor output when $A_\theta$ is run on the training set $S$. Let $\ell_{\mathcal{D}}(A_\theta(S))$ be the risk of the predictor $A_\theta(S)$, and let $E\big[\ell_{\mathcal{D}}(A_\theta)\big]$ be the expected risk of $A_\theta(S)$ where the expectation is with respect to the random draw of the training set $S$ of a given ﬁxed size. Intuitively, $E\big[\ell_{\mathcal{D}}(A_\theta)\big]$ measures the performance of $A_\theta$ on a typical training set of that size.

## Evaluating a learning algorithm using external cross-validation
Assume for now the hyperparameter $\theta$ is ﬁxed and focus on the problem of estimating $E\big[\ell_{\mathcal{D}}(A(S_m))\big]$. To do so we can use a technique called $K$-fold (external) **cross-validation**.

Let $S$ be our entire dataset. We partition $S_m$ in $K$ subsets (also known as **folds**) $S_1, ..., S_K$ of size $m/K$ each (assume for simplicity that $K$ divides $m$). The extreme case $K = m$ provides an estimate known as **leave-one-out**. Now let $S_{-i} \equiv S \setminus S_i$. We call $S_i$ the **testing part** of the $i$-th fold while $S_{-i}$ is the **training part**.

For example, if we partition $S=\big \{(x_1, y_1), ..., (x_{20}, y_{20})\big \}$ in $K = 4$ subsets

$$S_1 = \Big\{(x_1, y_1), ..., (x_5, y_5) \Big \} \quad S_2 = \Big\{(x_6, y_6), ..., (x_{10}, y_{10}) \Big \}$$
$$S_3 = \Big\{(x_{11}, y_{11}), ..., (x_{15}, y_{15}) \Big \} \quad S_4 = \Big\{(x_{16}, y_{16}), ..., (x_{20}, y_{20}) \Big \}$$

then $S_{-2} = S_1 \cup S_2 \cup S_4$.

The **$K$-fold CV estimate** of $E\big[\ell_{\mathcal{D}}(A)\big]$ on $S$, denoted by $\ell_S^{CV}(A)$, is then computed as follows: we run $A$ on each training part $S_{-i}$ of the folds $i = 1, ..., K$ and obtain the predictors $h_1 =A(S_{-1}), ..., h_K =  A(S_{-K})$. We then compute the (rescaled) errors on the testing part of each fold,

$$\ell_{S_i}(h_i) = \frac{K}{m} \sum_{(x, y) \in  S_i} \ell(y, h_i(x))$$

Finally, we compute the CV estimate by averaging these errors

$$\ell_{S}^{CV}(A) = \frac{1}{K} \sum_{i = 1}^{K} \ell_{S_i}(h_i)$$

----------------------------------------------------------------

## Tuning hyperparameters on a given training set
In practice, we face the problem of choosing the hyperparameters so to obtain a predictor with small risk. This is typically done by minimizing a risk estimate computed using the training data. As $\Theta$ may be very large, possibly inﬁnite, the minimization is generally not over $\Theta$, but over a suitably chosen subset $\Theta_0 \subset \Theta$ (for example, if $\Theta = [0, 1]$, then $\Theta_0$ could by a ﬁnite grid of equally spaced values in $[0, 1]$). If $S$ is our training set, then we want to ﬁnd $\theta^* \in \Theta$ such that

$$\theta^* = \underset{\theta \in \Theta_0}{\operatorname{argmin}}\ell_{D}\Big(A_{\theta}(S)\Big)$$

That is

$$\ell_{D}\Big( A_{\theta^*}(S)\Big) = \underset{\theta \in \Theta_0}{\operatorname{min}}\ell_{D}\Big(A_{\theta}(S)\Big)$$

The estimate is computed by splitting the training data in two subsets $S_{train}$ and $S_{dev}$. The development set $S_{dev}$ (also called **validation set**) is used as a surrogate test set. The algorithm is run on $S_{train}$ once for each value of the hyperparameter in $\Theta_0$. The resulting predictors are tested on the dev set. In order to obtain the ﬁnal predictor, the learning algorithm is run once more on the original training set $S$ using the value of the hyperparameter corresponding to the predictor with smallest error on the validation set. That will provide an estimate of $\ell_{\mathcal{D}}\big(A_{\theta^*}(S)\big)$.

----------------------------------------------------------------

## Tuning parameters via nested cross-validation
What if we want to estimate the expected value of $(1)$ with respect to the random draw of the training set of ﬁxed size?

$$\mathbb{E}\Big[\text{ }\underset{\theta \in \Theta_0}{\operatorname{min}} \text{ } \ell_{\mathcal{D}}\big(A_\theta\big)\Big] \quad \text{ } (2)$$

In other words, we want to estimate the performance of $A_\theta$ on a typical training set of a given size when $\theta$ is tuned on the training set.

Given a dataset $S$, a cheap way of estimating $(2)$ is to use the best CV-estimate over $\{A_\theta : \theta \in \Theta_0\}$,

$$\underset{\theta \in \Theta_0}{\operatorname{min}} \text{ } \ell_{S}^{CV} \big(A_{\theta}\big) $$

Although this estimate tends to underestimate $(2)$, in practice the diﬀerence is typically small.

A better, though more computationally intensive estimate of $(2)$ is computed through nested CV.



Note that in each run of internal cross-validation we optimize $\theta$ locally, on the training part $S_{-i}$ of the external cross-validation fold. Hence, the nested cross-validation estimate is computed by averaging the performance of predictors obtained with potentially diﬀerent values of their hyper-parameters.

aggiungere jupyter cv

----------------------------------------------------------------

Ex binary classification w/ 0.1 loss
$D = d_x, \eta  x ~ D_x \eta(x9 = P(Y = 1 | X = x ))$

assume $\eta$ is Lipschitz on $\mathcal{X}$. This means $\exists c > 0 \quad \vert \eta(x) - \eta(x') \vert \leq c \Vert x - x' \Vert \quad \forall x, x' \in \mathcal{X}$

Disegno

Lipschitz implies continuity because if the function is discontinuous, this property will cause the function to jump.
in general this property will be stronger than continuity


Nonparametric algorihms:
$\mathcal{H}_m = \{h: \exists S_m A(S_m) = h\}$

----------------------------------------------------------------

# Consistency and nonparametric algorithms
Consistency is an asymptotical property certifying that the risk of the predictors generated by a learning algorithm converges to the Bayes risk in expectation as the size of the training set increases.<br />
Recall that $A(S_m)$ is the predictor generated by a learning algorithm $A$ on a training set $S_m$ of size $m$. A learning algorithm $A$ is **consistent** with respect to a loss function $\ell$ if for any data distribution $D$ it holds that

$$\underset{m \to \infty}{\operatorname{lim}}\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big] = \ell_{\mathcal{D}}(f^*)$$

where the expectation is with respect to the random draw of the training set $S_m$ of size $m$ from the distribution $\mathcal{D}$, and $\ell_{\mathcal{D}}(f^*)$ is the Bayes risk for $(D, \ell)$. In some cases, we may deﬁne consistency D with respect to a restricted class of distributions $\mathcal{D}$. For example, in binary classiﬁcation we may restrict to all distributions $\mathcal{D}$ such that $\eta(x) = \mathbb{P}(Y = 1 \vert X = x)$ is a **Lipschitz function** on $\mathcal{X}$. Formally, there exists $0 < c < \infty$ such that

$$\vert \eta(x) - \eta(x')\vert \leq c \Vert x - x' \Vert \quad \text{ for all } x, x' \in \mathcal{X}$$

Technically, this conditions implies that $\eta$ is Lipschitz in $\mathcal{X}$. This is a restriction on the set of all allowed $\eta$ as $c < \infty$ implies continuity (but the opposite is not true).

## Nonparametric algorithms
Given a learning algorithm $A$, let $\mathcal{H}_m$ be the set of predictors generated by $A$ on training sets of size $m: h \in \mathcal{H}_m$ if and only if there exists a training set $S_m$ of size $m$ such that $A(S_m) = h$.
We say that $A$ is a **nonparametric learning algorithm** if$A$'s approssimation error vanishes as $m$ grows to infinity. Formally,

$$\underset{m \to \infty}{\operatorname{lim}}\underset{h \in \mathcal{H}_m}{\operatorname{min}}\ell_{\mathcal{D}}(h^*) = \ell_{\mathcal{D}}(f^*)$$

Two notable examples of nonparametric learning algorithms are $k-NN$ and the greedy algorithm for decision tree classifiers (i.e., the algorithm that always chooses to split a leaf that maximizes the decrease in training error). Nonparametric algorithms are recognizable because:
- the size (memory footprint) of their predictors tends to grow with the training set size;
- for any $m$ and for all $S_m$, $\underset{h \in \mathcal{H}_m}{\operatorname{min}}\ell_{\mathcal{S}}(s)$ is close to zero.
The standard $k-NN$ algorithm is nonparametric but not known to be consistent for any ﬁxed value of $k$. Indeed, one can only show that

$$\underset{m \to \infty}{\operatorname{lim}}\mathbb{E}\Big[\ell_{\mathcal{D}}(k-NN(S_M))\Big] \leq \ell_{\mathcal{D}}(f^*) + 2 \sqrt{\frac{\ell_{\mathcal{D}}(f^*)}{k}} \quad \text{ } (1)$$

for any data distribution $\mathcal{D}$. However, if we let $k$ be chosen as a function $k_m$ of the training set size, then the algorithm becomes consistent provided $k_m \to \infty$ and $k_m = o(m)$.

![[behaviour_expected_risk.png]]

In the figure, it is possible to observe the typical behavior of expected risk $\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big]$ as a function of training set size for a consistent algorithm (red line) and for a nonconsistent algorithm (blue line). For small training set sizes $m < m^*$, the nonconsistent algorithm has a better performance.

Similarly, the greedy algorithm for building tree classiﬁers is consistent (for $X \equiv \mathbb{R}^d$ ) whenever the two following conditions are fulﬁlled. Let $\ell(x)$ be the leaf to which $x \in \mathbb{R}^d$ is routed in the current tree and let $N_{\ell}$ be the number of training examples routed to a leaf $\ell$. Then, as $m \to \infty$, to guarantee consistency we must have that
- diameter $\Big(\{x' \in \mathbb{R}^d : \ell(X) = \ell(x')\}\Big) \to 0$;
- $N_{\ell(X)} \to \infty$.

where both conditions must hold when $m \to \infty$ and in probability with respect to the random draw of $X$. In other words, the tree must grow unboundedly but not too fast.

In practice, a consistent algorithm may not be preferred over a nonconsistent one. This due to the fact that the rate of convergence to the Bayes risk of a consistent algorithm can be arbitrarily slow, as shown by the following result.

----------------------------------------------------------------

## Theorem of No Free Lunch
For any sequence $a_1 , a_2 , . . .$ of positive numbers converging to zero and such that $\frac{1}{16}≥ a_1 ≥ a_2 ≥ · · ·$ and for any consistent learning algorithm $A$ for binary classiﬁcation with zero-one loss, there exists a data distribution $\mathcal{D}$ such that $\ell_{\mathcal{D}}(f^*) = 0$ and $\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big] \geq a_m \quad \forall m \geq 1$.

Theorem of No Free Lunch does not prevent a consistent algorithm from converging fast to the Bayes risk for specific distributions $\mathcal{D}$. What the theorem shows is that if $A$ converges to the Bayes risk for any data distribution, then it will converge arbitrarily slow for some of these distributions.

For binary classiﬁcation, we can summarize the situation as follows:
- under Lipschitz assumptions on $\eta$, the typical convergence rate to Bayes risk is $m^{−1/(d+1)}$ (exponentially slow in $d$);
- under no assumption on $\eta$, there is no guaranteed convergence rate to Bayes risk;
- under no assumptions on $\eta$, the typical convergence rate to the risk of the best predictor in a parametric (or ﬁnite) class $\mathcal{H}$ is $m^{−1/2}$, exponentially better than the nonparametric rate.

Note that the convergence rate $m^{-1/(d+1)}$ implies that to get $\varepsilon$-close to Bayes risk, we need a traning set size $m$ of order $\varepsilon^{-(d+1)}$. This exponential dependence on the number of features of the training set size is known as **curse of dimensionality** and refers to the difficulty of learning in a nonparametric setting when datapoints live in a high-dimensional space.

----------------------------------------------------------------

# Risk Analysys for Nearest-Neighbor
We investigate the problem of bounding the zero-one loss risk of the $1-NN$ binary classiﬁer averaged with respect to the random draw of the training set. Under some assumptions on the data distribution $\mathcal{D}$, we prove a bound of the form

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big] \leq 2 \ell_{\mathcal{D}}(f^*) + \varepsilon_m \quad \text{ } (1)$$

where $A$ denotes the $1-NN$ algorithm, $S_m$ the training set of size $m$, $\ell_{\mathcal{D}}(f^*)$ is the Bayes risk, and $\varepsilon_m$ is a quantity that vanishes for $m \to \infty$. Note that we are able to compare $\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S_m))\Big]$ directly to the Bayes risk, showing that $1-NN$ is, in some sense, a powerful learning algorithm.

Recall that in binary classiﬁcation we denote the joint distribution of $(X, Y)$ with the pair $(\mathcal{D}_X, \eta)$, where $\mathcal{D}_X$ is the marginal of $\mathcal{D}$ on $X$ and $\eta(x) = \mathbb{P}(Y = 1 \vert X = x)$. Fix $m$ and let $S = (x_1, y_1), ..., (x_m, y_m)$ be a training set of size $m$. We deﬁne the map $\pi(S, \cdot) : \mathbb{R}^d \to \{1, ..., m\}$ by

$$\pi(S, x) = \underset{t = 1, ..., m}{\operatorname{argmin}}\Vert x - x_t \Vert$$

If there is more than one point $x_t$ achieving the minimum in the above expression, then $\pi(S, x)$ selects one of them using any deterministic tie-breaking rule; our analysis does not depend on the speciﬁc rule being used. The $1-NN$ classiﬁer $h_S = A(S)$ is deﬁned by $h_S(x) = y_{\pi(S, x)}$.

From now on, the training set $S$ is a sample $(X_1, Y_1), ..., (X_m, Y_m)$ drawn i.i.d. from $\mathcal{D}$. The expected risk is deﬁned by 

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(A(S))\Big] = \mathbb{P}\Big(Y_{\pi(S, X)} \neq Y\Big)$$

where probabilities and expectations are understood with respect to the random draw of training set $S$ and of the example $(X, Y)$ with respect to which the risk of $A(S)$ is computed.

We now state a crucial lemma.

## Lemma 1
The expected risk of the $1-NN$ classiﬁer can be written as follows

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] = \mathbb{E}\Big[\eta(X_{\pi(S, X)})(1- \eta(X))\Big] + \mathbb{E}\Big[\big(1 - \eta(X_{\pi(S, X)})\big)\eta(X)\Big]$$

To proceed with the analysis, we now need some assumptions on $D_X$ and $\eta$. First, all data points $X$ drawn from $D_X$ satisfy max $\vert X \vert \leq 1$ with probability one. In other words, $X \in [−1, 1]^d$ with probability 1. Let $X \equiv [−1, 1]^d$ the subsets of data points with this property. Second we assume that $\eta$ is Lipschitz on $\mathcal{X}$ with constant $c > 0$. We can thus write

$$\eta(x') \leq \eta(x) + c \Vert x - x' \Vert \quad \text{ } (2)$$
$$1 - \eta(x') \leq 1 - \eta(x) + c \Vert x - x' \Vert \quad \text{ } (3)$$

Using $(2)$ and $(3)$, for all $x, x′ \in X$ we have

$$\eta(x)(1 - \eta(x')) + (1 - \eta(x))\eta(x')$$
$$\leq \eta(x)(1-\eta(x)) + \eta(x) c \Vert x - x' \Vert + (1 - \eta(x))\eta(x) + (1 - \eta(x))c \Vert x - x' \Vert$$
$$= 2 \eta(x)(1- \eta(x)) + c \Vert x - x' \Vert$$
$$\leq 2 \text{ }min \{\eta(x), 1 - \eta(x)\} + c \Vert x - x' \Vert$$

where the last inequality holds because $z(1 − z) \leq min\{z, 1 − z\}$ for all $z \in [0, 1]$. Therefore

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] \leq 2 \text{ }\mathbb{E}\Big[min \{\eta(X), 1 - \eta(X)\}\Big] + c \text{ }\mathbb{E}\Big[\Vert X - X_{\pi(S, X)} \Vert\Big]$$

Recalling that the Bayes risk for the zero-one loss is $\ell_{\mathcal{D}}(f^*) = \mathbb{E}\Big[min\{\eta(X), 1 − \eta(X)\}\Big]$ we have

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] \leq 2 \text{ }\ell_{\mathcal{D}}(f^*) + c \text{ }\mathbb{E}\Big[\Vert X - X_{\pi(S, X)}\Vert\Big]$$

In order to bound the term containing the expected value of $\Vert X − X_{\pi(S, X)} \Vert$ we partition the data space $\mathcal{X}$ in $d$-dimensional hypercubes with side $\varepsilon > 0$, see in the figure below for a bidimensional example.

![[2d_example_analysis_1-NN.png]]

In the figure, it is possible to see a bidimensional example of the construction used in the analysis of $1-NN$. Left pane: $X$ (the red point) is in the same square $C_i$ as its closest training point $X_{\pi(S, X)}$. Hence, $\Vert X - X_{\pi(S, X)}\Vert$ is bounded by the length of the diagonal of this square. Right pane: here there are no training points in the square where $X$ lies. Hence, $\Vert X - X_{\pi(S, X)} \Vert$ can only be bounded by the length of the entire data space (the large square).

Let $C_1, ..., C_r$ the resulting hypercubes. We can now bound $\Vert X − X_{\pi(S, X)} \Vert$ using a case analysis. Assume first that $X$ belong to a $C_i$ in which there is at least a training point $X_t$. Then $\Vert X - X_{\pi(S, X)} \Vert$ is at most the length of the diagonal of the hypercube, which is $\varepsilon \sqrt{d}$, as it is possible to see int the left pane of the figure. Now assume that $X$ belongs to a $C_i$ in which there are no training points. Then $\Vert X − X_{\pi(S, X)} \Vert$ is only bounded by the length of the diagonal of $\mathcal{X}$, which is $2 \sqrt{d}$, as it is possible to see in the right pane of the figure. Hence, we may write

$$\mathbb{E}\Big[\Vert X - X_{\pi(S, X)}\Vert\Big] \leq \mathbb{E}\Big[ \varepsilon\sqrt{d} \sum_{i = 1}^{r} \mathbb{I}\{C_i \cap S \neq \emptyset\}\mathbb{I}\{X \in C_i\} + 2 \sqrt{d}\sum_{i = 1}^{r}\mathbb{I}\{C_i \cap S = \emptyset\}\mathbb{I}\{X \in C_i\}\Big]$$
$$= \varepsilon\sqrt{d}\mathbb{E} \Big[\sum_{i = 1}^r \mathbb{I}\{C_i \cap S \neq \emptyset\}\mathbb{I}\{X \in C_i\}\Big] + 2 \sqrt{d}\sum_{i = 1}^r \mathbb{E}\big[\mathbb{I}\{C_i \cap S \neq \emptyset\}\mathbb{I}\{X \in C_i\}\big]$$

where in the last step we used linearity of the expected value. Now observe that, for all $S$ and $X$,

$$\sum_{i = 1}^{r} \mathbb{I}\{C_i \cap S \neq \emptyset\} \mathbb{I}\{X \in C_i\} \in \{0, 1\}$$

because $X \in C_i$ for only one $i = 1, ..., d$. Therefore,

$$\mathbb{E}\Big[\sum_{i = 1}^{r} \mathbb{I}\{C_i \cap S \neq  \emptyset\} \mathbb{I}\{X \in C_i\}\Big] \leq 1$$

To bound the remaining term, we use the independence between $X$ and the training set $S$,

$$\mathbb{E}\big[\mathbb{I}\{C_i \cap S = \emptyset \} \mathbb{I}\{X \in C_i\}\big] = \mathbb{E}\big[\mathbb{I}\{C_i \cap S = \emptyset\}\big]\mathbb{E}\big[\mathbb{I}\{X \in C_i\}\big] = \mathbb{P}(C_i \cap S = \emptyset)\mathbb{P}(X \in C_i)$$

Since $S$ contains $m$ data points independently drawn, for a generic data point $X′$ we have that

$$\mathbb{P}(C_i \cap S = \emptyset) = (1 - \mathbb{P}(X' \in C_i))^m \leq exp(-m\mathbb{P}(X' \in C_i))$$

where in the last step we used the inequality $(1 − p)^m \leq e ^{-pm}$. Setting $p_i = \mathbb{P}(X' \in C_i)$ we have



The concave function $g(p) = e^{−pm}p$ is maximized for $p = \frac{1}{m}$. Therefore,

$$\mathbb{E}\Big[\Vert X - X_{\pi_{S}(X)} \Vert\Big] \leq \varepsilon \sqrt{d} + (2 \sqrt{d}) \frac{r}{em} = \sqrt{d}\Big(\varepsilon + \frac{2}{em} \Big(\frac{2}{\varepsilon}\Big)^d\Big)$$

where we used the fact that the number r of hypercubes is equal to $(\frac{2}{\varepsilon})^d$. Putting evertything together we ﬁnd that

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big] \leq 2 \ell_{\mathcal{D}}(f^*) + c \sqrt{d}\Big(\varepsilon + \frac{2}{em} \big(\frac{2}{\varepsilon}\big)^d\Big)$$

Since this holds for all $0 < \varepsilon < 1$, we can set $\varepsilon = 2 m^{−1/(d+1)}$. This gives

$$\varepsilon + \frac{2}{em} \Big(\frac{2}{\varepsilon}\Big)^d = 2m^{-1/(d+1)} + \frac{2^{d+1}2^{-d}m ^{d/(d+1)}}{em} = 2m^{-1/(d+1)} \Big(1 + \frac{1}{e}\Big) \leq 4m^{-1/(d+1)} \quad \text{ } (4)$$

Substituting this bound in $(4)$, we ﬁnally obtain

$$\mathbb{E}\Big[\ell_{\mathcal{D}}(h_S)\Big]t \leq 2 \ell_{\mathcal{D}}(f^*) + c4m^{-1/(d+1)}\sqrt{d}$$

Note that for $m \to \infty$, $\ell_{\mathcal{D}}(f^*) \leq \mathbb{E}[\ell_{\mathcal{D}(h_S)}] \leq 2\ell_{\mathcal{D}}(f^*)$. Namely, the asymptotic risk of $1-NN$ lies between the Bayes risk and twice the Bayes risk.

----------------------------------------------------------------

# Linear predictors
A linear predictor for $\mathcal{X} = \mathbb{R}^d$ is a function $h : \mathbb{R}^d \to \mathbb{R}$ such that $h(x) = f(w^{\top}x)$ for some $w \in \mathbb{R}^d$, where $f : \mathbb{R} \to \mathbb{R}$ is sometimes called the activation function. In linear regression tasks, $f$ is the identity function and so $h(x) = w^{\top}x$. In linear classification tasks, $h(x) = \operatorname{sgn}(w^{\top}x − c)$ for some $c \to \mathbb{R}$, where $\operatorname{sgn}(z) = 1$ if $z > 0$ and $−1$ otherwise. We mostly focus on classification and return to regression only at the end.

## Hyperplanes
Recall that an hyperplane with coefficients $(w,c)$ is defined by $\Big \{x \in \mathcal{R}^d : w^{\top}x = c\Big \}$ , where $w^{\top}x = \Vert w \Vert \Vert x \Vert \cos\theta$ and $\theta$ is the angle between $w$ and $x$ and $\Vert x \Vert \cos\theta$ is the length of the projection of $x$ onto $w$. Hence, the hyperplane defined by $(w,c)$ is orthogonal to $w$ and intersects it at distance $\frac{c}{\Vert w \Vert}$ from the origin.

The halfspaces $H^+$ e $H^−$ defined by the hyperplane $x \in \mathcal{R}^d : w^{\top}x = c$ are

$$H^+ \equiv \Bigg\{ x : w^{\top}x > c \Bigg\} \text{ and } \Bigg \{H^− \equiv x′ : w^{\top}x′ \leq c \Bigg\}$$

That is, all points $x$ whose projection onto $w$ has length strictly bigger than $\frac{c}{ \Vert w \Vert}$, and all points $x′$ whose projection onto $w$ has length not larger than $\frac{c}{\Vert w \Vert}$. Geometrically, a linear classifier is thus defined by

$$ h(x) = \cases{+1 \quad \text{ if } x \in H^+ \cr \cr −1 \quad \text{ if } x \in H^−}$$

Hyperplanes of the form $\Big \{x \in \mathbb{R}^d : w^{\top}x = 0\Big\}$ pass through the origin and are called **homogeneous**. Any non-homogeneous hyperplane $\Big \{x \in \mathbb{R}^d : w^{\top}x = c\Big\}$, with $c \neq 0$, is equivalent to the homogeneous hyperplane $\Big \{x \in \mathbb{R}^{d+1} : v^{\top}x = 0 \Big \}$ with $v = (w_1, ..., w_d, −c)$ in the following sense: $w^{\top}x − c = v^{\top}x′$ for all $x \in \mathbb{R}^d$ and $x′ = (x_1, ..., x_d, 1) \in \mathbb{R}^{d+1}$. For this reason, without any loss of generality we only deal with algorithms that learn linear predictors corresponding to homogeneous hyperplanes. This amounts to saying that we automatically add an extra feature with value $1$ to all of our data points.

----------------------------------------------------------------

## Training linear classifiers
Recall that a linear classifier is a predictor $h$ such that $h(x) = \operatorname{sgn}(w^{\top}x)$. Clearly, $\operatorname{sgn}(w^{\top}x) = \operatorname{sgn} \Vert w \Vert \Vert x \Vert \cos \theta = \operatorname{sgn}(\cos \theta)$. As the classification is only determined by the angle $\theta$ between $w$ and $x$, the value of $\Vert w \Vert$ is immaterial and we may take $\Vert w \Vert = 1$. Note that the zero-one loss $\mathbb{I}\{h(x_t) \neq y_t\}$ can be equivalently rewritten as $\mathbb{I}\{y_tw^{\top}x_t \leq 0\}$.<br />
Note that $y_tw^{\top}x_t = 0$ only when $w = 0$ (we assume $x_t = 0$ for all $t$). In this case, $\operatorname{sgn}w^{\top}x = −1$ and so the classification is actually correct when $y_t = −1$. Hence, using $\mathbb{I}\{y_tw^{\top}x_t \leq 0\}$ to count mistakes we overcount only when $w = 0$ and $y_t = −1$.

Let $\mathcal{H}_d$ be the family of linear classifiers $h(x) = \operatorname{sgn}(w^{\top}x)$ for $w \in \mathbb{R}^d$ such that $\Vert w \Vert = 1$. Consider the ERM algorithm for zero-one loss that, given a training set $S$ containing examples $(x_1,y_1), ..., (x_m,y_m) \in \mathbb{R}^d \times \{−1,1\}$, outputs

$$h_S = \underset{h \in \mathcal{H}_d}{\operatorname{argmin}} \frac{1}{m} \sum_{t = 1}^{m}\mathbb{I} \{h(x_t) \neq y_t\} = \underset{w \in \mathbb{R}^d : \Vert w \Vert = 1}{\operatorname{argmin}} \frac{1}{m} \mathbb{I}\{y_tw^{\top}x_t \leq 0\big\} \quad \quad (1)$$

Unfortunately, it is unlikely to find an efficient implementation of ERM for linear classifiers with zero-one loss. In fact, the decision problem associated with finding $h_S$ is $NP$-complete even when $x_t \in \{0,1\}^d$ for $t = 1, ..., m$. More precisely, introduce the following decision problem.

**MinDisagreement**<br />
Instance: Pairs $(x_1, y_1), ..., (x_m,y_m) \in \{0,1\}^d \times \{−1,1\}$. Integer $k$.<br />
Question: Is there $w \in Q^d$ such that $y_t w^{\top}x_t \leq 0$ for at most $k$ indices $t = 1, ..., m$?

The following result can be shown.

**Theorem 1**: MinDisagreement is NP-complete.

In addition to that, the following stronger hardness-of-approximation result can be also shown.

**MinDisOpt**<br />
Instance: Pairs $(x_1, y_1), ..., (x_m,y_m) \in \{0,1\}^d \times \{−1,1\}$.<br />
Solution: A point $w \in \mathbb{Q}^d$ minimizing the number of indices $t = 1, ..., m$ such that $y_t w^{\top}x_t \leq 0$.

Given an instance S (i.e., a training set) of **MinDisOpt**, let Opt(S) the number of examples in $S$ that are misclassified by the ERM classifier $h_S$. In other words, $\operatorname{Opt}(S)/m = \ell S(h_S)$.

**Theorem 2**: If $P \neq NP$, then for all $C > 0$ there are no polynomial time algorithms that approximately solve every instance $S$ of **MinDisOpt** with a number of misclassified examples bounded by $C \times \operatorname{Opt}(S)$.

This implies that, unless $P = NP$ (which is believed unlikely), there are no efficient algorithms that approximate the solution of $(1)$ to within any constant factor. Here efficient means with running time polynomial in the input size $md$.

The ERM problem $(1)$ becomes easier when the training set is linearly separable. A training set $(x_1, y_1), ..., (x_m,y_m)$ is linearly separable where there exists a linear classifier with zero training error. In other words, there exists a separating hyperplane $u \in \mathbb{R}^d$ such that

$$\gamma(u) \overset{def}{=} \underset{t = 1, ..., m}{\operatorname{min}} y_t u^{\top}x_t > 0$$

The quantity $\gamma(u)$ is known as the **margin** of $u$ on the training set. The scaled margin $\gamma(u)/ \Vert u \Vert$ measures the distance between the separating hyperplane and the closest training example.

Now observe that the ERM problem $(1)$ can be expressed as a system of linear inequalities,

$$y_t w^{\top} x_t > 0 \quad \text{ } \quad t = 1,...,m$$

When the training set is linearly separable, the system has at least a solution. This solution can be found in polynomial time using an algorithm for linear programming.

We now introduce a very simple algorithm for learning linear classifiers that can be used to solve the ERM problem in the linearly separable case. The Perceptron algorithm finds a homogeneous separating hyperplane by runnning through the training examples one after the other. The current linear classifier is tested on each training example and, in case of misclassification, the associated hyperplane is adjusted. Note that if the algorithm terminates, then $w$ is a separating hyperplane.

Data: Training set (x1,y1),..., (xm,ym) w = (0,..., 0)

while true do

for t = 1,...,m do (epoch)

if yt w⊤xt ≤ 0 then

w ← w + yt xt (update)

end

if no update in last epoch then break

end

Output: w

In this algorithm, it si possible to observe the Perceptron algorithm (for the linearly separable case).

The update $w \leftarrow w + y_t x_t$ when $y_t w^{\top}x_t \leq 0$ makes $y_t w^{\top} x_t$ bigger. Indeed,

$$y_t\Big(w + y_t x_t\Big)^{\top} x_t = y_t w^{\top}x_t + \Vert x_t \Vert ^2 > y_t w^{\top}x_t$$

Geometrically, each update moves $w$ towards $x_t$ if $y_t = 1$ and moves $w$ away from $x_t$ if $y_t = −1$. We now prove that Perceptron always terminates on linearly separable training sets.

**Theorem 3** (**Convergence of Perceptron**): Let $(x_1, y_1), ...,  (x_m, y_m)$ be a linearly separable training set. Then the Perceptron algorithm terminates after a number of updates not bigger than

$$\Bigg(\underset{u: \gamma(u) \geq 1}{\operatorname{min}} \Vert u \Vert^2 \Bigg)\Bigg( \underset{t = 1, ..., m}{\operatorname{max}} \Vert x_t \Vert^2 \Bigg) \quad \text{ } \quad (2)$$

The apparently stonger margin constraint $\gamma(u) \geq 1$ is actually achievable by any separating hyperplane $u$. Indeed, if $\gamma(u) > 0$, then $y_tu^{\top}x_t \geq \gamma(u)$ is equivalent to $y_tv^{\top}x_t \geq 1$ for $v = u/\gamma(u)$. Hence, $\gamma(u) \geq 1$ can be achieved simply by rescaling $u$.

**Proof**: Let $w_0 = (0, ..., 0)$ be the initial hyperplane. Let $w_M$ be the hyperplane after $M$ updates and let $t_M \in \{1, ..., m\}$ be the index of the training example $(x_t, y_t)$ that caused the $M$-th update $w_M = w_{M −1} + y_{t_M} x_{t_M}$. We prove an upper bound on $M$ by deriving upper and lower bounds on $\Vert w_M \Vert \Vert u \Vert$. We start by observing that

$$\Vert w_M \Vert^2 = \Vert w_{M−1} + y_{t_M} x_t \Vert^2 = \Vert w_{M −1} \Vert^2 + \Vert x_{t_M} \Vert^2 + 2y_{t_M}w^{\top}_{M −1}x_{t_M} \leq \Vert w_{M_1} \Vert^2 + \Vert x_{t_M} \Vert^2$$

because $y_t w^{\top}_{M −1}x_t \leq 0$ due to the update $w_M = w_{M −1} + y_{t_M} x_{t_M}$. Iterating this argument $M$ times, and recalling that $w_0 = (0, ...,  0)$, we obtain

$$\Vert w_M \Vert^2 \leq \Vert w_0\Vert^2 + \sum_{i = 1}^{M} \Vert x_{t_i} \Vert^2 \leq M \Big( \underset{t = 1, ...., m}{max} \Vert x_t \Vert^2 \Big )$$

Hence

$$\Vert w_M \Vert \Vert u \Vert \leq \Vert u \Vert \Big (\underset{t = 1, ..., m}{max} \Vert x_t \Vert \Big)\sqrt{M}$$

To prove the lower bound, fix any separating hyperplane $u$ with $\gamma(u) \geq 1$ and let $\theta$ be the angle between $u$ and $w_M$. We have

∥wM ∥∥u∥ ≥ ∥wM ∥∥u∥cos(θ) (since − 1 ≤ cos(θ) ≤ 1)

- w⊤M u (by definition of inner product)
- (wM −1 + yt xt )⊤ u

M M

- w⊤M −1u + yt u⊤xt

M M

≥ w⊤M −1u + 1

where the last inequality holds because $1 \leq \gamma(u) \leq y_tu^{\top}x_t$ for all $t = 1, ..., m$. Iterating $M$ times we get

$$\Vert w_M \Vert \Vert u \Vert \geq w^{\top}_0 u + M = M$$

Where we used $w^{\top}_0u = 0$ since $w_0 = (0, ..., 0)$. Combining upper and lower bound we obtain

$$M \leq \Vert u \Vert \Big ( \underset{t = 1, ..., m}{max} \Vert x_t \Vert \Big )\sqrt{M}$$

Solving for $M$, and recalling the choice of $u$, we obtain $(2)$. Hence, the update count $M$ cannot grow larger than $(2)$. Since the algorithm stops when no more updates are possible, we conclude that the Perceptron terminates after a bounded number of updates.

Note that the Perceptron convergence theorem does not imply that the Perceptron algorithm terminates in polynomial time on any linearly separable training set. Indeed, it can be shown that the bound $(2)$ is tight in any fixed dimension $d \geq 2$. Hence, although each update takes constant time $\Theta(d)$, the number of updates can still be exponential in $md$ whenever $\gamma(u) \geq 1$ only for those u whose length $\Vert u \Vert$ is very big. Or, equivalently, when the margin $\gamma(u)$ is very small for any linear separator $u$ such that $\Vert u \Vert = 1$.

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
When $S^{\top}S$ is nearly singular, $w_S$ is highly sensitive to perturbations of the training set. This instability increases the estimation error (or variance). A more stable predictor is obtained by introducing a regularizer in the ERM functional which increases the approximation error (or bias) and reduces the variance with a beneficial effect on the risk.

In other words, instead of defining $w_S$ by

$$w_S = \underset{w \in \mathbb{R}^d}{\operatorname{argmin}} \Vert S_w − y \Vert^2$$

we use the regularized form, also known as Ridge Regression,

$$w_{S,\alpha} = \underset{w \in \mathbb{R}^d}{\operatorname{argmin}} \Vert Sw − y \vert^2 + \alpha \Vert w \Vert ^2$$

where $\alpha > 0$ is the regularization parameter. When $\alpha \to 0$ we recover the standard linear regression solution. When $\alpha \to \infty$, the solution $w_{S,\alpha}$ becomes the zero vector. This shows that $\alpha$ can be used to control the bias of the algorithm.

Similarly to before, we have that

$$\nabla \Vert Sw − y \Vert ^2 + \alpha \Vert w\Vert ^2 = 2S^{\top}(Sw − y) + 2 \alpha w$$

Hence, the gradient vanishes for $w = w{S,\alpha} = (\alpha I + S^{\top}S)^{−1}S^{\top}y$. Note that we do not have to worry anymore about the singularity of $S^{\top}S$. Indeed, if $\lambda_1 \geq ··· \geq \lambda_d \geq 0$ are the eigenvalues of $S^{\top}S$, the eigenvalues of $\alpha I + S^{\top}S$ are simply $\alpha + \lambda_1 \geq ··· \geq \alpha + \lambda_d > 0$. Hence, $\alpha I + S^{\top}S$ is invertible for all $\alpha > 0$.

----------------------------------------------------------------