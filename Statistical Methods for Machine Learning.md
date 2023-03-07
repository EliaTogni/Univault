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

We now introduce a concrete learning algorithm for classification. This algorithm differs from ERM because it is not minimizing the training error in a given class of predictors. For now, we restrict our attention to binary classification tasks with numerical features, namely X = Rd and Y = {−1,1}. Given a training set, the classifier generated by this algorithm is based on the following simple rule: predict every point in the training set with its own label, and predict any other point with the label of the point in the training set which is closest to it.

More formally, given a training set S ≡ (x1,y1),..., (xm,ym) , the nearest neighbour algorithm (NN) generates a classifier hNN : Rd → {−1,1} defined by:

hNN(x) = label yt of the point xt ∈S closest to x.

If there is more than one point in S with smallest distance to x, then the algorithm predicts with the majority of the labels of these closest points. If there is an equal number of closest points with positive and negative labels, then the algorithm predicts a default value in {−1,1} (for instance, the most frequent label in the training set).

Note that hNN(xt) = yt for every training example (xt,yt). The distance between x = (x1,...,xd) and xt = (xt,1,...,xt,d), denoted by ∥x − xt∥, is computed using the Euclidean distance,

d

∥x − xt∥= (xi − xt,i)2 .

i=1

Figure 1: Voronoi diagram for a training set in R2.

The classifier generated by NN induces a partition of Rd in Voronoi cells, where each training instance xt (here called a “center”) is contained in a cell, and the border between two cells is the

set of points in Rd that have equal distance from the two cell centers (see Figure 1). As NN typically stores the entire training set, the algorithm does not scale well with the number |S| = m of training points. Moreover, given any test point x, computing hNN(x) is costly, as it requires computing the distance between x and every point of the training set, which in Rd takes time Θ(dm) (shorter running times are possible when distances are approximated rather than being computed exactly). Finally, note that NN always generates a classifier hNN such that ℓS(hNN) = 0. This is not surprising because, as we already said, NN stores the entire training set.

+ ~~+ + − − + + + − − − −![](Aspose.Words.3350d2fb-3819-4c0e-a2d1-adf4ad772550.002.png)![](Aspose.Words.3350d2fb-3819-4c0e-a2d1-adf4ad772550.003.png)~~
+ ~~+ + − − + + + − − − −~~

Complexityoftheclassifier ~~+ + + − − + + + − − − −~~         Figure 2: Plot of the hk−NN classifier for k = 1,3,5 on a 1-dimensional training set. As k increases,

the classifier becomes simpler and the number of mistaken points in the training set increases.

Starting from NN, we can obtain a family of algorithms denoted by k-NN for k = 1,3,5,..., where

k cannot be taken larger than the size of the training set. These algorithms are defined as follows: given a training set S = (x1,y1),..., (xm,ym) , k-NN generates a classifier hk−NN such that hk−NN(x) is the label yt ∈ {−1,1} appearing in the majority of the k points xt ∈ S which are closest to x.[^1] Hence, in order to compute hk−NN(x), we perform the following operations:

1. Find the k training points xt ,..., xt closest to x.1 Let yt ,...,ytk be their labels.

1 k 1

2. If the majority of the labels yt ,...,yt is +1, then hk−NN(x) = +1; if the majority is −1, 1 k

then hk−NN(x) = −1.

Note that, for each k ≥ 1 and for each xt in the training set, xt is always included in the k points that are closest to xt.

It is important to note that, unlike 1-NN, in general we have that ℓS(hk−NN) > 0. Moreover, in Figure 2 we see that, as k grows, the classifiers generated by k-NN become simpler. In particular, when k is equal to the size of the training set, hk−NN becomes a constant classifier that always predicts the most common label in the training set.

![](Aspose.Words.3350d2fb-3819-4c0e-a2d1-adf4ad772550.004.png)

The figure above shows the typical trend of training error (orange curve) and test error (blue curve) of the k-NN classifier for increasing values of the parameter k on a real dataset (Breast Cancer Wisconsin) for binary classification with zero-one loss. Note that the minimum of the test error

is attained at a value corresponding to a hk−NN classifier with training error generally bigger than zero. The learning algorithm suffers from high test error for small values of k (overfitting) and for large values of k (underfitting).

In addition to binary classification, k-NN can be used to solve multiclass classification problems (where Y contains more than two symbols) and also regression problems (where Y = R). In the first case, we operate like in the binary case and predict using the label corresponding to the majority

of the labels of the k closest training points. In the second case, the prediction is the average of the labels of the k closest training points.

in the training set. If k′ is strictly bigger than k, even, and there is an equal number of closest points with positive and negative labels, then the algorithm predicts a default value in {−1,1}.
4

[^1]: Just like in the case of 1-NN, there could be training points at the same distance from x such that more than k points are closest to x. In this case we proceed by ranking the training points based on their distance from x and

    then taking the k′ closest points where k′ is the smallest integer bigger or equal to k such that the (k′ +1)-th point in the ranking has distance from x strictly larger that the k′-th point. If no such k′ exists, then we take all the points