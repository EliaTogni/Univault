# Introduction
**Data inference** is the study of methods that use data from the past for making predictions about the future. **Machine learning** is a powerful tool that can be used to solve a wide range of data inference problems including the ones listed below:
- **Clustering**: grouping data points according to their similarity (e.g., clustering customers according to their consumer profiles);
- **Prediction**: assigning semantic labels to data points (e.g., classifying documents based on their topics);
- **Control**: performing a sequence of actions in an environment in order to maximize a notion of utility (e.g., using a robot to map an unknown terrain).

[[Algoritmo |Algorithms]] that solve a [[Intelligenza Artificiale#Training delle ANN |learning task]] based on semantically annotated historical data (e.g., documents annotated with their topic or images annotated with the objects they contain) are said to operate in a **supervised learning mode**. In contrast, algorithms that use data without any semantic annotation are said to operate in an **unsupervised learning mode**. The focus of this course is on supervised learning and study the design of machine learning systems whose goal is to learn predictors, i.e., functions that map data points $x$ to their labels $y$. Once learned, these functions can be used to categorize documents or images, predict the future price of a stock based on the current market data, diagnose a disease based on a patient’s medical record, and so on.

## Label sets
It is common to use $Y$ to denote the set of all possible labels for a data point of a given learning problem. Note that labels can be of two different types: **categorical labels**, like the topics of a document, and **numerical labels**, like the price of a stock or the demand for a product. Categorical labels define **classification** problems, where labels sets $Y$ are typically finite and small (such as $Y = \{\text{sport, politics, business}\}$ for document topics). Numerical labels define **[[Intelligenza Artificiale#Regressione |regression]]** problems, where label sets $Y \subseteq R$ are typically infinite.

As it is always possible to map symbols to numbers, it is needed to specify more precisely how regression differs from classification. In regression, prediction mistakes are typically a function of the difference $|y−\widehat{y}|$, where $\widehat{y}$  is the prediction for $y$. In classification, mistakes are typically binary: either $\widehat{y} = y$ (no mistake) or $\widehat{y} = y$ (mistake). This because the label set in a classification task is an abstract set of symbols (irrespective to whether we encode the symbols using numbers) without a natural notion of distance between them. When $|Y| = 2$, for example $Y = \{\text{healthy, sick}\}$, it is a binary classification problem, and conventionally use the numerical encoding $Y = \{−1,1\}$.

## Loss functions
In order to measure the goodness of a prediction for a prediction task we use a nonnegative **loss function** $\ell$, measuring the discrepancy $\ell(y,\widehat{y})$ between the predicted label $\widehat{y}$  and the correct label $y$. We always assume that $\ell(y,\widehat{y}) = 0$ when $\widehat{y} = y$. The simplest loss function for classification is the **zero-one loss**:

$$\ell(y, \widehat{y}) = \cases{0 \quad \text{ if }
 \widehat{y} = y \cr \cr 1 \quad \text{otherwise.}}$$

In certain cases, it is needed a more complex classification losses.<br />
Consider the problem of categorizing spam email using the label set $Y = \{\text{spam, nonspam}\}$. It is possible to penalize a **false positive mistake** (i.e., a nonspam email wrongly classified as spam) more than a **false negative mistake** (i.e., a spam email wrongly classified as nonspam). For example:

$$\ell(y, \widehat{y}) = \cases{2 \quad \text{ if }
 y  = \text{nonspam and }\widehat{y} = \text{spam,} \cr \cr 1 \quad \text{ if } y = \text{spam and } \widehat{y} = \text{nonspam,}\cr \cr 0 \quad \text{ otherwise.}}$$

In regression, typical loss functions are the **absolute loss** $\ell(y,\widehat{y} ) = |y−\widehat{y}|$ and the **quadratic loss** $\ell(y,\widehat{y}) = (y − \widehat{y})^2$. Note that these losses are only meaningful for numerical labels.

In some cases, it may be convenient to choose predictions from a set $Z$ different from the label set $Y$. For example, consider the problem of assigning a probability $y  ∈ (0,1)$ to the event $y = \text{ “it will rain tomorrow”}$ (and, consequently, assigning probability $1 − y$  to the complementary event $y = \text{ “it will not rain tomorrow”}$). In this case,$Y = \text{\{“rain”, “no rain”\}}$ and $Z = (0,1)$. Denoting these two events with $1$ (for rain) and $0$ (for no rain), we may use a loss function for regression, such as the absolute loss $\ell(y,\widehat{y}) = |y− \widehat{y}| \in (0,1)$. In order to extend the range of the loss function, so to punish more harshly predictions that depart too much from reality, it is possible to use instead the **logarithmic loss**,

ln 1 if y = 1 (rain),

ℓ(y,y ) = y 

ln 1 if y = 0 (no rain).

1−y 

Unlike the absolute loss, the logarithmic loss may take arbitrarily high values, see Figure 1.

![](Aspose.Words.71aa4c53-d7ba-4657-87a5-91bea0ef3125.002.png)

Figure 1: Logarithmic loss function ℓ(1,y ) = ln 1 (blue curve) and absolute loss function ℓ(1,y ) =

y 

|1 − y | (red line) for the case y = 1. In particular, we have lim ℓ(1,y ) = lim ℓ(0,y ) = ∞.

y →0+ y →1−

In practice, this fact prevents the predictor from using predictions y  that are too certain, namely too close to zero or one.

Data domain. We use X to denote the set of all possible data points for a given learning problem. Each data point x is typically stored as a database record. In many interesting cases, data can be encoded as vectors of real numbers. Such a vector representation is natural whenever the data consist of a set of homogeneous quantities, such as pixels in an image or word frequencies in a document. The standard Euclidean geometry then works well because all coordinates use the same unit of measurement. In these cases we may hope that the semantic information carried by the labels be reflected in the geometrical relationships between data points (e.g., in a classification task data points with the same label are close to each other in terms of their Euclidean distance).

In other cases, a vector space representation may not be that natural. For example, the values in the fields of a medical record may use different units, such as age and height, or even be categorical, such as sex. Using rescaling and other techniques (like binary encoding) for dealing with categorical quantities, we can provide a homogenenous vector space representation to most types of data. However, the geometrical properties of these vectors might not be well correlated to their labels.

In this course, we often assume that data can be represented as vectors of numbers, namely X ≡ Rd. Irrespective of whether X ≡ Rd or X ≡ X1 × ··· × Xd for some arbitrary sets X1,..., Xd, given a data point x = (x1,...,xd), we say that xi is the value of the i-th feature or attribute.

A predictor is a function f : X → Y mapping data points to labels (or f : X → Z if the predictions belong to a set Z different from Y). Informally speaking, in a prediction problem the goal is to learn a function f that generates predictions y  = f (x) such that ℓ(y,y ) is small for most data points x ∈ X observed in practice. In practice, the function f is represented by a certain choice of parameters in a certain model. For examples, a certain setting of the weights of a neural network.

Examples. In supervised learning, an example is a pair (x,y) where x is a data point and y is the “true” label associated with x. In some cases, there is a unique true label for x. This happens when y measures some objective property of the data point; for example, y is the closing price of a stock on a certain day. In some other cases, the label y is subjectively assigned by a human annotator; for example, the genre of a movie. Clearly, different annotators may have different opinions about

a movie’s genre, implying that the same data point may occur with different “true” labels.

In order to estimate the predictive power of a predictor, which is what we are ultimately interested in, we typically use a test set. This is a set[^1] of examples (x′ ,y′ ),..., (x′ ,y′ ). Given a loss

1 1 n n

function ℓ, the test set is used to compute the test error of a predictors f ,

1 n

ℓ y′,f (x′)

n t t .

t=1

The test error is meant to estimate the average performance of the predictor on typical real-world data.

An learning algorithm receives a training set as input and outputs a predictor. A training set is a set of examples (x1,y1),..., (xm,ym). Training and test set are often prepared together, through a single round of data collection and annotation. Partitioning the examples in training and test data is done afterward, typically using a random split. Our objective is to develop a theory to guide us in the design of learning algorithms that generate predictors with low test error.

Since the only input to a learning algorithm is the training set S ≡ (x1,y1),..., (xm,ym) , a natural approach to the design of learning algorithms is to assume that the training error

1 m

ℓS(f ) = m ℓ yt,f (xt)

t=1

of a predictor be correlated to its test error.

Empirical risk minimization. Let F be a given set of predictors and ℓ a loss function. The em- pirical risk minimizer (ERM) is the learning algorithm that outputs some predictor in F minimizing the training error

f  ∈argmin ℓS(f ) .

f ∈F

The f  ∈ notation takes into account the fact that there could be multiple f ∈ F minimizing the training error.

Overfitting and underfitting. ERM obviously fails when no predictor in F has a low test error. This suggests the we should run ERM with a large F , so that there is a good chance that a predictor with low test error exists in F .

On the other hand, choosing F large can also lead ERM to fail. To see this, assume Y ≡ {−1,1} and consider a toy problem with only five data points, X ≡ {x1,..., x5}. Now, take some F containing a classifier f : x1,..., x5} → {−1,1} for each of the 25 = 32 possible binary labelings of the five data points, and suppose the training set contains any three points and the test set contains

the two remaining ones. Now assume data labels y ,...,y5 are all assigned using some f ∗ ∈ F,

1

yt = f ∗(xt) for t = 1,..., 5. Clearly f ∗ has zero training error and zero test error. However, with

a training set of three points, ERM always finds four classifiers in F that have zero training error. Of these four classifiers with zero training error, only one (i.e., f ∗) has also zero test error. But the

training set does not contain enough information to help ERM select this classifier.

The problem in the previous example is that F is too large with respect to the training set. Information theory tells us that we need log2 |F| = 5 bits of information to identify f ∗ ∈ F. Indeed, f ∗is determined the five labels f ∗(x ),...,f ∗(x5). This is telling us that the training set

1

should contain at least log2 |F| distinct data points. Equivalently, |F| should be smaller than 2m, where m is the training set size.

We may give specific names to these two ways of failing (i.e., returning a predictor with high test error) for a generic learning algorithm A:

- if A fails by returning predictors with high training error, then we say that A is underfitting ,
- if A fails by returning predictors with low training error, then we say that A is overfitting .

When A is ERM and the training set size m is fixed, our information-theoretic argument says that

we should expect overfitting when log2 |F| ≫ m. Vice versa, when |F| is too small, we should expect underfitting as soon as the training set satisfies m ≫ log2 |F|.

Noisy labels. Overfitting often arises when labels are noisy. Namely, when labels y are not deterministically associated with data points x, like in our previous example where yt = f ∗(xt).

Noise may occur for at least three (not mutually exclusive) reasons.

1. Human in the loop: The labels are assigned by a human annotator who decides the “true” label for each data point. In this case, different annotators may have different opinions.
1. Epistemic uncertainty: Each data point is represented by a feature vector x that does not contain enough information to uniquely determine the label. For example, suppose x encodes measurements such as today’s temperature, pressure, humidity, whereas y ∈ {−1,1} denotes whether tomorrow rains or not. It is quite possible that the same observed values lead to rain in some cases and to sun in other cases.
1. Aleatoric uncertainty: The feature vector x representing a data point is obtained through noisy measurements. The label associated with a given x is then stochastic because the same x could have been generated by different data points.

Noisy labels cause overfitting because they may mislead the algorithm with regard to what is the “true” label for a given data point.
5

[^1]: Technically, it is a multiset because some examples may occur more than once. However, treating datasets as multisets complicates the notation. For this reason, and without much loss of generality, we will mostly view datasets as sets in the standard mathematical acception.