# Simulation
A **simulation** is, according to the Oxford Dictionary, the product of computer modeling, the formal representation of an event, a process, or a complex system in the real world, especially for study purposes.<br />

A simulation is a digital representation of a system, an economic tool for approximating real-life behaviors within a computer, through the implementation of a [[Modello#Modello descrittivo|descriptive analysis model]], which can be used to test a selection of scenarios.<br />
Different complex systems require different modeling capabilities.<br />
The art of constructing the model itself can lead the modeler to a higher level of understanding of the real system.<br />

Often, modeling an event, despite the numerous simplifications and restrictions imposed on the problem to be modeled, can be extremely complex and impossible to model in minute detail. In this case, attention is focused exclusively on the elements that one wishes to study, and two portions of the system are approximated:
- **connectors** to the external world, which act as a link between the portion of reality being studied and the external world;
- some internal details, approximated through stochastic components.

The reasons for using simulations are manifold:
- tt is a valid (and often cost-effective) tool for approximating a real event;
- it allows testing of scenarios;
- the construction of the model itself can benefit the modeler in terms of a greater understanding of the system being modeled;
- the ability to perform _what-if_ analyses on a system (i.e., _what would happen if this parameter varied from this value to that value?_);
- the ability to visualize the results of complex methods.

On the contrary, the use of simulations is not the best option when analytical problems have closed-form solutions or when _what-if_ analyses involve too many parameters (it is better to use a [[Modello#Modello prescrittivo|prescriptive analysis model]]).

Obviously, obtaining an optimal solution in simulation does not imply finding an optimal solution in the real world.<br />
These simulations represent only a portion of the real world. In every complex system, there are connections between the model and reality, which must be approximated with a degree of precision directly proportional to the relevance of the connection itself.

## The Game of Life
An example of a simple simulation is [[The Game of Life]], a pseudo-agent simulation created by Conway in 1970. The initial scenario consists of an inhabited region where inhabitants follow these rules:
- every living individual with fewer than two living neighbors dies (underpopulation);
- every living individual with more than three living neighbors dies (overpopulation);
- any living individual with two or three living neighbors survives;
- when exactly three individuals share an adjacent empty space, a new individual is born in that space.

This is a qualitative description of the situation. To model it, it is necessary to formally define agents and constraints.<br />
The simulation is based on having an agent for each individual in a two-dimensional discrete grid. Also, each cell in this grid can contain at most one individual.<br />
It is necessary to define the logic that models the behavior of the agents. The state of each agent is easily definable by a binary variable, where the value $1$ indicates that a living inhabitant is present in the cell, while $0$ indicates the opposite.<br />
Furthermore, it is necessary to define the meaning of adjacent space: vertical and horizontal cells connected to the current cell can be considered adjacent, or the same cells and diagonal cells can be considered adjacent.<br />
Modeling time in this simulation is crucial to understand the order in which cell contents are updated at each step. One can choose either sequential or parallel updating, e.g., updating a cell based on the contents of adjacent cells at the previous step (and ignoring their current content).<br />
This choice implies the use of discrete time evaluation. Individuals will update at _day 0_, at _day 1_ (observing neighbors at _day 0_), and so on.

The next step is to import the model onto the computer and extract some statistics:

```python
import numpy as np
import plotly.express as px
import matplotlib.pyplot as plt
import random

def print_map(I,J, M):
    
    plt.imshow(M, cmap='hot', interpolation='nearest')
    plt.show()
    #fig = px.density_heatmap(m)
    #fig.show()

    #for i in range(I):
    #    for j in range(J): print(M[i][j], end='')
    #    print("")
        
        
def init_map(I,J,p):

    m = [[int(random.random() <= p) for j in range(J)] for i in range(I)]
    
    return m

def update_map(I, J, m):

    for i in range(I):
        for j in range(J):
            u = (i-1) % I
            d = (i+1) % I
            l = (j-1) % J
            r = (j+1) % J
            neighbors = m[u][l] + m[u][j] + m[u][r] + m[d][l] + m[d][j] + m[d][r] + m[i][l] + m[i][r]
            if neighbors == 3:
                m[i][j] = 1
            elif neighbors > 3 or neighbors < 2:
                m[i][j] = 0
    
    return m
    
def simulate(I, J, T, r, p):

    #np.random.seed(r)
    random.seed(r)
    m = init_map(I,J,p)

    v = []
    s = 0
    for i in range(I): s = s + sum(m[i])
    v.append(s)
    
    for t in range(T):
        m = update_map(I, J, m)
        print_map(I, J, m)
        s = 0
        for i in range(I): s = s + sum(m[i])
        v.append(s)
        
    return v

#plt.plot(simulate(50, 50, 50, 1))
#plt.plot(simulate(50, 50, 50, 2))
```

Is this simulation reaching a stable state or is still changing? The answer to this question depends on how much the simulation lasts. It is not excluded that a simulation may not terminate, but it is possible that the simulation ends in a number of steps greater than those observed.

Since the initial configuration is not provided, an attempt is made to construct it by approximation, based on the probability of having an individual in a cell. The system, therefore, contains stochastic elements, elements that tend to be representative only when observed multiple times. How can we ensure that these repeated observations of stochastic elements make sense as a whole?

![[Images/GameOfLifePlot.png]]

Visualizations stimulate hypotheses and conjectures, but these are purely qualitative observations. The primary objective is to make quantitative observations.

----------------------------------------------------------------

There are three macro paradigms for the construction and implementation of descriptive models:
- **discrete events simulation**;
- **[[Agent-Based Simulation |agent-based simulation]]**;
- **[[System Dynamics Simulation |system dynamics simulation]]**.

These three paradigms rely on models that include stochastic components to approximate connections to the external world and parts of the internal system that are at the center of the analysis focus.<br />
It is possible to make a comparison between these paradigms in terms of different features:

![[Images/ComparisonSimulation.png]]

--------------------------------------------------------------

## Discrete Event Simulation
In **discrete events simulations**, the system proceeds in steps during the runtime, and events only occur at these specific moments.

Let's consider the following function:

$$y = f(x)$$

From the modeler's perspective, $x$ represents input data, while $y$ is an abstraction of the process modeled by $f()$.<br />
If $f()$ is only an approximation of the real system, applying $f()$ to the parameter $x$ will yield a specific observation, a specific value. Reapplying the function may result in a different outcome. For this reason, in a deterministic world, $x$ would be defined as the **independent variable** and $y$ as the **dependent variable**, while the result obtained in $y$ is stochastic, making $y$ a **random variable**.
The overall result of the descriptive modeling of a system is a more complex random variable.

### Pharmacist (Ex. from Sheldon M. Ross "Simulation")
![[Images/PharmacistSimulation.png]]

The descriptive model that will be constructed will make the distribution of the random variable clearer. Is it possible to build a deterministic model of this system? The answer is yes, even though considering each individual variable (every existing individual, the health condition of each individual, ...) is much more complex than it is possible to do. For this reason, components of the system will be approximated.

There are two key points that will be approximated:
- the **connectors**, that is, the links between the system and the external world;
- the **details** of the system itself, which are not crucial for the study.

Both of these points are approximated through the use of additional, albeit simpler, random variables.

![[Images/Pharmacy Scheme.png]]

A common assumption is that individuals in the external world act independently, and therefore, observing that a prescription has arrived at a certain time $t$ provides no information about the arrival of the next prescription. This assumption is sufficient to model the prescription arrival process through an **exponential random variable**.

As for the medicine preparation process, the problem provides a mean and a standard deviation without specifying the distribution shape. The information about the process is minimal, and the perturbation's form lacks a specific structure, so it is possible to use a **normal random variable**.

```python
import random
import numpy

class Event():
    
    type = 'a'
    time = 0

def get_next_event(events):

    k = 0
    mintime = events[0].time
    for i in range(len(events)):
        if events[i].time < mintime or (events[i].time == mintime and events[i].type == 'S'):
            k = i
            mintime = events[i].time

    current = events[k]
    events = events[:k] + events[k+1:]

    return current, events

#fornisce il tempo atteso tra una prescrizione e la successiva
#il connettore viene approssimato dalla variabile aleatoria esponenziale
#lambda è il valore atteso per la variabile aleatoria
def get_next_delay(Lambda):
    
    return random.expovariate(Lambda)

#tempo necessario a completare la prescrizione
#necessita della media e della deviazione standard per calcolare la gaussiana
def get_service_time(exp_time, std_dev_time):
    
    return random.normalvariate(exp_time, std_dev_time)

#variabile aleatoria comprensiva di tutte le altre
def pharmacy(daily_working_time, exp_prescriptions_day, exp_prescr_time, stdev_prescr_time):
    
    # interesting events:
    # (A) arrival of prescription
    # (S) starting of prescription filling
    # (F) finishing of prescription filling
    
    busy = False
    in_queue = 0
    
    lost_prescriptions = 0
    
    events = []
    
    e = Event()
    e.type = 'A'
    e.time = get_next_delay(exp_prescriptions_day / daily_working_time)
    
    events.append(e)
    
	# each event will produce the next events
    while len(events) > 0:
        
        # pick next event (one of minimum time in events):
        current, events = get_next_event(events) 
        
        print("Handling Event at time", current.time, " of type ", current.type)
        print("System status: pharmacist busy: ", busy, " queue: ", in_queue)
        
        if current.type == 'A':
            
            e = Event()
            e.type = 'A'
            e.time = current.time + get_next_delay(exp_prescriptions_day / daily_working_time)

            if in_queue < 5:

                
                if e.time <= daily_working_time:
                    
                    events.append(e)
            
                if not busy:
                    
                    e = Event()
                    e.type = 'S'
                    e.time = current.time
                    
                    events.append(e)
                    
                else:
                    
                    in_queue = in_queue + 1
                
            else:
                
                lost_prescriptions = lost_prescriptions + 1
                
        elif current.type == 'S':
            
                busy = True
                
                s_time = get_service_time(exp_prescr_time, stdev_prescr_time)
                    
                e = Event()
                e.type = 'F'
                e.time = current.time + s_time
                
                events.append(e)
                
        elif current.type == 'F':
            
                busy = False
            
                if in_queue > 0:
                    
                    e = Event()
                    e.type = 'S'
                    e.time = current.time

                    events.append(e)
                    
                    in_queue = in_queue - 1
                    
    return current.time >= 510 #max(current.time, daily_working_time)
    
pharmacy(480, 32, 10, 4)
```

----------------------------------------------------------------

## Elements of probability
### Sample space and events
Consider an experiment whose outcome is not known in advance. Let $S$, called the **sample space** of the experiment, denote the set of all possible outcomes.<br />
Any subset $A$ of the sample space is known as an **event**. That is, an event is a set consisting of possible outcomes of the experiment. If the outcome of the experiment is contained in $A$, we say that $A$ has occurred.

For any two events $A$ and $B$ we define the new event $A \cup B$, called the **union** of $A$ and $B$, to consist of all outcomes that are either in $A$ or $B$ or in both $A$ and $B$. Similarly, we define the event $A \cap B$, called the **intersection** of $A$ and $B$, to consist of all outcomes that are in both $A$ and $B$. That is, the event $A \cup B$ occurs if either $A$ or $B$ occurs, whereas the event $A \cap B$ occurs if both $A$ and $B$ occur. We can also define unions and intersections of more than two events. In particular, the union of the events $A_1, ..., A_n$, designated by $\bigcup^n_{i=1} A_i$, is defined to consist of all outcomes that are in any of the $A_i$. Similarly, the intersection of the events $A_1, ..., A_n$, designated by $A_1 \cap A_2 ... \cap A_n$, is defined to consist of all outcomes that are in all of the $A_i$. For any event $A$ we define the event $A^c$, referred to as the **complement** of $A$, to consist of all outcomes in the sample space $S$ that are not in $A$. That is, $A^c$ occurs if and only if $A$ does not. Since the outcome of the experiment must lie in the sample space $S$, it follows that $S^c$ does not contain any outcomes and thus cannot occur. We call $S^c$ the **null set** and designate it by $\emptyset$. If $A \cap B = \emptyset$ so that $A$ and $B$ cannot both occur (since there are no outcomes that are in both $A$ and $B$), we say that $A$ and $B$ are **mutually exclusive**.

----------------------------------------------------------------

### Axioms of probability
Suppose that for each event $A$ of an experiment having sample space $S$ there is a number, denoted by $P(A)$ and called the probability of the event $A$, which is in accord with the following three axiom:
- $0 \leq P(A) \leq 1$;
- $P(S) = 1$;
- for any sequence of mutually exclusive events $A_1, A_2, ...$ it holds that $P\Big(\bigcup_{i = 1}^n A_i\Big) = \sum_{i = 1}^n P(A_i), \space n = 1, 2, ..., \infty$. 

Axiom $1$ states that the probability that the outcome of the experiment lies
within $A$ is some number between $0$ and $1$; Axiom $2$ states that with probability $1$ this outcome is a member of the sample space; finally, Axiom $3$ states that for any set of mutually exclusive events, the probability that at least one of these events occurs is equal to the sum of their respective probabilities.

These three axioms can be used to prove a variety of results about probabilities. For instance, since $A$ and $A^c$ are always mutually exclusive, and since $A \cup A^c = S$, we have from Axioms $2$ and $3$ that

$$1 = P(S) = P(A \cup A^c) = P(A) + P(A^c)$$

or, equivalently:

$$P(A^c) = 1 - P(A)$$

In words, the probability that an event does not occur is $1$ minus the probability that it does.

In classical probability, the probability for an event $A$ to occur is defined as $P(A) = \frac{\vert A \vert}{\vert S \vert}$.

----------------------------------------------------------------

### Conditional probability and independence
Consider an experiment that consists of flipping a coin twice, noting each time whether the result was heads or tails. The sample space of this experiment can be taken to be the following set of four outcomes:

$$S = \{(H, H), (H, T), (T, H), (T, T)\}$$

where $(H, T)$ means, for example, that the first flip lands heads and the second tails. Suppose now that each of the four possible outcomes is equally likely to occur and thus has probability $\frac{1}{4}$. Suppose further that we observe that the first flip lands on heads. Then, given this information, what is the probability that both flips land on heads? To calculate this probability it is possible to reason as follows: given that the initial flip lands heads, there can be at most two possible outcomes of the experiment, namely, $(H, H)$ or $(H, T)$. In addition, as each of these outcomes originally had the same probability of occurring, they should still have equal probabilities. That is, given that the first flip lands heads, the (conditional) probability of each of the outcomes $(H, H)$ and $(H, T)$ is $\frac{1}{2}$, whereas the (conditional) probability of the other two outcomes is $0$. Hence the desired probability is $\frac{1}{2}$. If we let $A$ and $B$ denote, respectively, the event that both flips land on heads and the event that the first flip lands on heads, then the probability obtained above is called the conditional probability of $A$ given that $B$ has occurred and is denoted by $P(A \vert B)$.

A general formula for $P(A \vert B)$ that is valid for all experiments and events $A$ and $B$ can be obtained in the same manner as given previously. Namely, if the event $B$ occurs, then in order for $A$ to occur it is necessary that the actual occurrence be a point in both $A$ and $B$; that is, it must be in $A \cap B$. Now since we know that $B$ has occurred, it follows that $B$ becomes our new sample space and hence the probability that the event $A \cap B$ occurs will equal the probability of $A \cap B$ relative to the probability of $B$:

$$P(A \vert B) = \frac{P(A \cap B)}{P(B)}$$

The determination of the probability that some event $A$ occurs is often simplified by considering a second event $B$ and then determining both the conditional probability of $A$ given that $B$ occurs and the conditional probability of $A$ given that $B$ does not occur. To do this, note first that

$$A = (A \cap B) \cup (A \cap B^c) $$

Because $A \cap B$ and $A \cap B^c$ are mutually exclusive, the preceding yields

$$P(A) = P(A \cap B) + P(A \cap B^c) = P(A \vert B) P(B) + P(A \vert B^c)P(B^c)$$

When we utilize the preceding formula, we say that we are computing $P(A)$ by conditioning on whether or not $B$ occurs.

Some examples follow below.

#### Insurance company
An insurance company classifies its policy holders as being either accident prone or not. Their data indicate that an accident prone person will file a claim
within a one-year period with probability $.25$, with this probability falling to $.10$ for a non accident prone person. If a new policy holder is accident prone with probability $.4$, what is the probability he or she will file a claim within a year?

Let $C$ be the event that a claim will be filed, and let $B$ be the event that the
policy holder is accident prone. Then

$$P(C) = P(C \vert B)P(B) + P(C \vert B^c)P(B^c) = (.25)(.4) + (.10)(.6) = .16$$

Suppose that exactly one of the events $B_i, i = 1, ..., n$ must occur. That is, suppose that $B_1, B_2, ..., B_n$ are mutually exclusive events whose union is the sample space $S$. Then we can also compute the probability of an event $A$ by conditioning on which of the $B_i$ occur. The formula for this is obtained by using that

$$A = A \cap S = A \bigcup^n_{i=1} B_i = \bigcup^n_{i=1} A \cap B_i$$

which implies that

$$P(A) = \sum_{i = 1}^n P(A \cap B_i) = \sum_{i = 1}^n P(A \vert B_i) P(B_i)$$

----------------------------------------------------------------

#### Coupons
Suppose there are $k$ types of coupons, and that each new one collected
is, independent of previous ones, a type $j$ coupon with probability $p_j$, $\sum^k_{j =1} p_j = 1$. Find the probability that the $n^{th}$ coupon collected is a different type than any of the preceding $n − 1$.

Let $N$ be the event that coupon $n$ is a new type. To compute $P(N)$, condition
on which type of coupon it is. That is, with $T_j$ being the event that coupon $n$ is a type $j$ coupon, we have

$$P(N) = \sum_{j = 1}^{k} P(N \vert T_j) P(T_j)$$
$$= \sum_{j = 1}^{k} (1 - p_j)^{n-1}p_j$$

where $P(N \vert T_j)$ was computed by noting that the conditional probability that coupon $n$ is a new type given that it is a type $j$ coupon is equal to the conditional probability that each of the first $n − 1$ coupons is not a type $j$ coupon, which by independence is equal to $(1 − p_j)^{n−1}$.

As indicated by the coin flip example, $P(A \vert B)$ (the conditional probability of
$A$, given that $B$ occurred) is not generally equal to $P(A)$ (the unconditional probability of $A$). In other words, knowing that $B$ has occurred generally changes the probability that $A$ occurs. But what if they were mutually exclusive? In the special case where $P(A \vert B)$ is equal to $P(A)$, we say that $A$ and $B$ are **independent**. Since $P(A \vert B)= P(A \cap B)/P(B)$, we see that $A$ is independent of $B$ if $P(A \cap B) = P(A)P(B)$. Since this relation is symmetric in $A$ and $B$, it follows that whenever $A$ is independent of $B$, $B$ is independent of $A$.

$$\frac{\vert A \vert}{\vert S \vert} = \frac{\vert A \cap B\vert}{\vert B \vert}$$
$$P[A \cap B] = P[A] \cdot P[B]$$
$$P[A \vert B] = P[A]$$

-------------------------------------------------------------

### Random Variables
How many variables can be identified in the example below?

$$y = f(x)$$

For a modeler, $x$ is input data, while $y$ is an abstraction of the process modeled by $f()$. When an experiment is performed, the concern is sometimes on the value of some numerical quantity determined by the result. These quantities of interest that are determined by the results of the experiment are known as **random variables**.

#### Cumulative distribution function
The **cumulative distribution function**, or, more simply, the distribution function $F$ of the random variable $X$ is defined for any real number $x$ by

$$F(x) = P[X \leq x]$$

grafico

-------------------------------------------------------------

#### Probability mass function
A random variable that can take either a finite or at most a countable number of possible values is said to be **discrete**. For a discrete random variable $X$, its **probability mass function** $p(x)$ is defined as

$$p(x) = P[X = x]$$

If $X$ is a discrete random variable that takes on one of the possible values $x_1, x_2,  \dots$, then, since $X$ must take on one of these values, it holds that

$$\sum_{i = 1}^{\infty}p(x_i) = 1$$

A graphical example of a probability mass function.

grafico

esempio numerico

-------------------------------------------------------------

#### Probability density function
Whereas a discrete random variable assumes at most a countable set of possible values, it is common to have to consider random variables whose set of possible values is an interval. It is sad that the random variable $X$ is a **continuous random variable** if there is a nonnegative function $f(x)$ defined for all real numbers $x$ and having the property that for any set $C$ of real numbers

$$P[X \in C] = \int_{C} f(x) dx$$

The function $f$ is called the **probability density function** of the random variable $X$.

The relationship between the cumulative distribution $F(\cdot)$ and the probability density $f( \cdot)$ is expressed by

$$F(a) = P[X \in (-\infty, a)] = \int_{-\infty}^{a} f(x) dx$$

A graphical example of a probability density function.

grafico

-------------------------------------------------------------

#### Joint cumulative probability distribution function
In many experiments we are interested not only in probability distribution functions of individual random variables, but also in the relationships between two or more of them. In order to specify the relationship between two random variables, we define the **joint cumulative probability distribution function** of $X$ and $Y$ by

$$F(x, y) = P[X \leq x, Y \leq y]$$

Thus, $F(x, y)$ specifies the probability that $X$ is less than or equal to $x$ and simultaneously $Y$ is less than or equal to $y$.

-------------------------------------------------------------

#### Dependent and independent random variables
The random variables $X$ and $Y$ are said to be **independent** if, for any two sets of real numbers $C$ and $D$, it holds that

$$P[X \in C, Y \in D] = P[X \in C \space \wedge \space Y \in D] = P[X \in C] \cdot P[Y \in D]$$

That is, $X$ and $Y$ are independent if, for all sets $C$ and $D$, the events $A = \{X \in C\}$ and $B = \{Y \in D\}$ are independent. Loosely speaking, $X$ and $Y$ are independent if knowing the value of one of them does not affect the probability distribution of the other. Random variables that are not independent are said to be **dependent**.

-------------------------------------------------------------

#### Expectation
One of the most useful concepts in probability is that of the **expectation** of a random variable. If $X$ is a discrete random variable that takes on one of the possible values $x_1, x_2, \dots$, then the expectation or **expected value** of $X$, also called the mean of $X$ and denoted by $\mathbb{E}[X]$, is defined by

$$\mathbb{E}[X] = \sum_{i} x_i P[X = x_i]$$
In words, the expected value of $X$ is a weighted average of the possible values that $X$ can take on, each value being weighted by the probability that $X$ assumes it.

Suppose now that that it is desired to determine the expected value not of the random variable $X$ but of the random variable $g(X)$, where $g$ is some given function. Since $g(X)$ takes on the value $g(x)$ when $X$ takes on the value $x$, it seems intuitive that $\mathbb{E}[g(X)]$ should be a weighted average of the possible values $g(x)$ with, for a given $x$, the weight given to $g(x)$ being equal to the probability (or probability density in the continuous case) that $X$ will equal $x$. If $X$ is a discrete random variable having probability mass function
$p(x)$, then

$$\mathbb{E}[g(X)] = \sum_xg(x)p(x)$$

whereas if $X$ is continuous with probability density function $f(x)$, then

$$\mathbb{E}[g(X)] = \int_{-\infty}^{\infty} g(x)f(x)dx$$

A consequence of the above proposition is the fact that, if $a$ and $b$ are constants, then

$$\mathbb{E}[aX + b] = a\mathbb{E}[X] + b$$

It can also be shown that expectation is a linear operation in the sense that for any two random variables $X_1$ and $X_2$

$$\mathbb{E}[X_1 + X_2] = \mathbb{E}[X_1] + \mathbb{E}[X_2]$$

which easily generalizes to give

$$\mathbb{E}\Big[\sum_{i = 1}^{n} x_i\Big] = \sum_{i = 1}^{n}\mathbb{E}[X_i]$$

-------------------------------------------------------------

#### Variance
Whereas $\mathbb{E}[X]$, the expected value of the random variable $X$, is a weighted average of the possible values of $X$, it yields no information about the variation of these values.<br />
One way of measuring this variation is to consider the average value of the square of the difference between $X$ and $\mathbb{E}[X]$. If $X$ is a random variable with mean $\mu$, then the **variance** of $X$, denoted by $Var(X)$, is defined by

$$Var[X] = \mathbb{E}[(X - \mu)^2]$$

The variance is not a linear operator. In fact

$$Var[aX + b] = a^2Var[X]$$

An alternative formula for $Var[X]$ is derived as follows:

$$Var[X] = \mathbb{E}[(X - \mu)^2]$$
$$\space = \mathbb{E}[X^2 - 2\mu X + \mu^2]$$
$$ = \mathbb{E}[X^2] - \mathbb{E}[2\mu X] + \mathbb{E}[\mu^2]$$
$$= \mathbb{E}[X^2] - 2\mu\mathbb{E}[X] + \mu^2$$
$$= \mathbb{E}[X^2] - \mu^2$$

That is,

$$Var[X] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$$

Whereas the expected value of a sum of random variables is equal to the sum of the expectations, the corresponding result is not, in general, true for variances. It is, however, true in the important special case where the random variables are independent. Before proving this, lets define the concept of the **covariance** between two random variables. The covariance of two random variables $X$ and $Y$, denoted $Cov(X, Y)$, is defined by

$$Cov[X, Y] = \mathbb{E}[(X - \mu_x)(Y -\mu_y)]$$

where $\mu_x = \mathbb{E}[X]$ and $\mu_y = \mathbb{E}[Y]$.

A useful expression for $Cov[X, Y]$ is obtained by expanding the right side of the above equation and then making use of the linearity of expectation. This yields

$$Cov[X, Y] = \mathbb{E}[XY - \mu_xY - X\mu_y + \mu_x\mu_y]$$
$$= \mathbb{E}[XY] - \mu_x \mathbb{E}[Y] - \mathbb{E}[X]\mu_y + \mu_x \mu_y$$
$$= \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$$

It is now possible to derive an expression for $Var[X + Y]$ in terms of their individual variances and the covariance between them. Since

$$\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y] = \mu_x + \mu_y$$

it is possible to notice that

$$Var[X + Y] = \mathbb{E}[(X + Y - \mu_x - \mu_y)^2]$$
$$= \mathbb{E}[(X - \mu_x)^2 + (Y -\mu_y)^2 + 2(X - \mu_x)(Y - \mu_y)]$$
$$= \mathbb{E}[(X -\mu_x)^2] + \mathbb{E}[(Y -\mu_y)] + 2\mathbb{E}[(X - \mu_x)(Y -\mu_y)]$$
$$Var[X] + Var[Y] + 2Cov[X, Y]$$

This section is ended by showing that the variance of the sum of independent random variables is equal to the sum of their variances. If $X$ and $Y$ are independent random variables, then

$$Cov[X, Y] = 0$$

and so

$$Var[X + Y] = Var[X] + Var[Y]$$

-------------------------------------------------------------

#### Correlation
The **correlation** between two random variables $X$ and $Y$, denoted as $Corr(X, Y)$, is defined by

$$Corr(X, Y) = \frac{Cov(X, Y)}{\sqrt{Var(X) Var(Y)}}$$

-------------------------------------------------------------

#### Markov's Inequality
If $X$ takes on only nonnegative values, then for any value $a > 0$

$$P[X \geq a] \leq \frac{\mathbb{E}[X]}{a}$$

This inequality is proved in the following way.<br />
Define the random variable $Y$ by

$$Y = \cases{a, \space \text{ if } X \geq a \cr \cr
0, \space \text{ if } X < a}$$

Because $X \geq 0$, it easily follows that

$$X \geq Y$$

Taking expectations of the preceding inequality yields

$$\mathbb{E}[X] \geq \mathbb{E}[Y] = aP[X \geq a]]$$

and the result is proved.

-------------------------------------------------------------

#### Chebishev's Inequality
**Chebyshev’s inequality** states that the probability that a random variable differs from its mean by more than $k$ of its standard deviations is bounded by $\frac{1}{k^2}$, where the standard deviation of a random variable is defined to be the square root of its variance. If $X$ is a random variable having mean $\mu$ and
variance $\sigma^2$, then for any value $k > 0$

$$P[\vert X - \mu \vert \geq k \sigma] \leq \frac{1}{k^2}$$

Since it is possible to define $Y = \frac{(X − \mu)^2}{\sigma^2}$ as a nonnegative random variable whose mean is

$$\mathbb{E}[Y] = \mathbb{E}\Big[\frac{(X - \mu)^2}{\sigma^2}\Big] = \frac{\mathbb{E}[(X - \mu)^2]}{\sigma^2} = \frac{\sigma^2}{\sigma^2} =1$$

it is possible to use Markov's inequality to derive that

$$P \Big[\frac{(X - \mu)^2}{\sigma^2} \geq k^2\Big] \leq \frac{1}{k^2}$$

The result now follows since the inequality $\frac{(X − \mu)^2}{\sigma^2} \geq k^2$ is equivalent to the inequality $\vert X − \mu \vert \geq k \sigma$.

-------------------------------------------------------------

#### Weak law of large numbers
using Chebyshev’s inequality it is possible to prove the **weak law of large numbers**, which states that the probability that the average of the first $n$ terms of a sequence of independent and identically distributed random variables differs from its mean by more than $\varepsilon$ goes to $0$ as $n$ goes to infinity.

Let $X_1, X_2, \dots$ be a sequence of independent and identically distributed random variables having mean $\mu$. Then, for any $\varepsilon > 0$

$$P\Bigg[ \bigg \vert \frac{X_1 + \cdots + X_n}{n} - \mu \bigg\vert \geq \varepsilon \Bigg] \leq \frac{\sigma^2}{n \varepsilon^2}$$

which establishes the result.

The last passage of the demonstration also permits to have an upper bound on the probability of making an error greater than $\varepsilon$ if it is decided to use the mean of some random variables instead of the random variables themselves.

is it also possible to choose some accuracy target in order to evaluate the simulation. To do so, it is necessary to be in possess of the variance, which is tipically a bold assumption. However, it is possible to estimate it.

-------------------------------------------------------------

#### Strong law of large numbers
A generalization of the weak law is the strong law of large numbers, which states that, with probability $1$

$$\lim_{N \to\infty} \frac{X_1 + \cdots + X_n}{n} = \mu$$

That is, with certainty, the long-run average of a sequence of independent and identically distributed random variables will converge to its mean.
While the weak law defines this property in a probabilistic way, the strong law defines it in a deterministic way (with probability $1$).

-------------------------------------------------------------

#### Some discrete random variables


-------------------------------------------------------------

## Random numbers
The Cambridge dictionary defines «random» as: "happening, done, or chosen by chance rather than according to a plan". Indeed, common sense reasoning suggests that it is possible to speak of randomness when a given experience can be repeated several times, always with exactly the same modalities, yet not always giving the same result. For instance, the result of a coin toss, or the closing value of a stock exchange, or even the actual occurrence of rainfalls during daytime when you see a grey sky during the morning. Note that this unpredictability only concerns a specific event, that is, it is not possible to have full confidence on any statement for the result of a single die toss, or for the closing value of a stock exchange and so on.

Things are different if you consider a sequence of such events and try to formulate statements about some form of average result: you can, for instance, be more or less confident about the fact that almost a given fraction of one hundred tosses of a given coin give head.

On the other hand, an electronic computer is probably the tool which is more distant from the notion of randomness: when it is given a task, say computing the sum of numbers in a spreadsheet, it is expected to solve the task without any error, thus it is also expected (and typically obtain) that repeated executions ot a same task give always the same result. Besides, it is told that an electronic computer is nothing more than a mechanism, for sure a complex one, yet a mechanism only able to do what it is encoded in its circuits.

Quoting John Von Neumann, any one who considers arithmetical methods of producing random digits is, of course, in a state of sin.

The behaviour of a computer is, in fact, always the result of a program execution and thus it is purely deterministic; in spite of this, computers can be deterministically be programmed in such a way that they exhibit random behaviours.

### Pseudorandom number generation
In all cases where it will be necessary to mark a clear distinction between **genuine** randomness that is possible to naturally observe in the world (say for instance that of a phisical die) from the **artificial** one that is possible to simulate through computers, called **pseudorandomness**.

The first attempts to describe procedures able to automatically generate pseudorandom numbers dates back to the first half of $1900$. A pionieer in this fields was Maurice G. Kendall, who contributed to build a machine producing tables of random digits. Before that time, randomization procedures such as sampling were performed via consultation of manually produced tables, such as for instance the one published in $1927$ by Leonard H. C. Tippett and relying to census reports.

#### Middle-square generator
As electronic computers became available, more concrete approaches started to be considered. In particular, John Von Neumann began his work on pseudorandomness generation while he was involved in the research activities of the Los Alamos National laboratories within the Manhattan project. One of the first algorithms he studied led around in $1946$ to the so-called **middle-square generator**, outputting a sequence of numbers in which every element is obtained squaring its predecessor and dropping from the result the leading and trailing two digits. Such a sequence is univoquely defined when its first element (the **seed**) has been fixed, typically choosing a four-digits value.

For instance, let $1461$ be this initial value: the successor in the sequence would be equal to $1461$ raised to the second power, that is $2134521$, without its leading a trailing couple of digits, resulting in $1345$. Analogously, the following value would be equal to $8090$ and so on, as computable in the following panel, which also allows the use of a different initial value.

``` python
def middle_square_generator(seed = 1461, n = 1):
	
	if (n == 1):
		
		return seed
	
	curr_val = seed
	v = list(range(n))
	for i in range(n):
		v[i] = curr_val
		curr_val = int(((curr_val ** 2) % (10 **6) ))/100

	return(v)
```

The simplicity of this method results in a poor quality of its outputs. Indeed, finding an initial value giving rise to a clearly non random sequence is fairly easy: for instance, whenever the sequence starts with a number having both central digits equal to zero (such as $1001$, $4005$ and so on), all the remaining elements nullify. An analogous behaviour occurs once one of the generated values has this property.

There are other particular cases when the middle-square generator fails to output an acceptable sequence, for instance it can get stuck in limit cycles, that is eventually repeating the same values in a cycle of a limited number of elements.

The flaws in the middle-square generator suggest a set of desirable properties for pseudorandom generators. However, it is worth to note that the requirements to be used in order to assess the quality of a pseudorandom generator are obviously linked to the context in which the generator itself is applied: nobody would probably bother that much if, for instance, a solitaire game installed in a smartphone would use a relatively poor pseudorandom generator to set the color of its bricks. Things would be different in case such a generator be used for shuffling a virtual deck of cards in an online gambling site, where bets are placed using real money.

Despite its harmless simplicity and its poor performance, the middle-square generator introduced before computes his output precisely in the same way of modern and more reliable generators: each element in the sequence is obtained applying a fixed function to its predecessor, and the first element, referred to as the **seed**, must be fixed beforehand. Thus, denoting by the pseudorandom sequence and by the seed, choosing a generator corresponds to selecting a function such that

```pseudo
	\begin{algorithm}
	\caption{Pseudorandom generator}
	\begin{algorithmic}
		\State $x_{0} = s$
		\State $x_{i + 1} = f(x_i) \textnormal{ for } i > 0$
	\end{algorithmic}
	\end{algorithm}
```

Such equation is referred to as the generator's **recurrency relation**.

-------------------------------------------------------------

#### Congruential generators
Several of the first broadly used pseudorandom generators belonged to the family of **congruential generators**, whose recurrency relation is defined by

$$x_{i + 1} = (ax_i + c) \mod m$$

where $x_i$ represents the $i$-th element in the sequence, $a$, $c$ and $m$ denotes the **modulus operator**, that is $\alpha \mod \beta$ is the reminder of the integer division between $\alpha$ and $\beta$. More precisely, the latter formula gives rise to a so-called **mixed congruential generator** because of the additive term. The term **congruential generator**, indeed, usually refers to the case of pseudorandom numbers simulated using a simpler recurrence relation of the form $x_{i + 1} = (ax_i) \mod m$.

```python
def congruential_generator(seed = 1, a= 7 ** 5, c=0, m=(2 ** 31 - 1), n=1):

  if (n == 1): return(seed);
  
  curr_val = seed
  v = list(range(n))
  for i in range(n):
    v[i] = curr_val;
    curr_val = (a * curr_val + c) % m
    
  return(v)
```

Which is the quality of pseudorandom numbers generating using this technique? First of all, note that once the seed has been fixed the recurrence relation is completely deterministic, and this means that after at most elements the sequence will generate already produced elements, thus repeating itself. In general, however, the sequence will start repeating after a number of iterations, which it will be designate as the **period** of the generator.

In general, there are three main distinctive properties that drive the choice of the parameters of a congruential generator:
1) the set of generated pseudorandom values should be undistinguishable from an analogous sample drawn from a discrete uniform distribution over $\{0 , \dots, m-1\}$;
- its period should be as higher as possible;
- its computer implementation should be efficient.

Note that a high period per se does not tell anything about the quality of its generator: consider for instance the trivial generator obtained by setting $x_{i + 1} = x_i + 1$ which has maximum period $m -1$ for any value of $m$. Such a generator would be useless because of the **predictability** of the unseen part of a pseudorandom sequence: each item is the successor of previous element modulo $m$ . This is why a good generator should guarantee the first two above mentioned requirements: the first one requires the generator to output a sequence of values difficult to predict, and the second one requires that this sequence be as long as possible. Finally, the third requirement deals with parameters allowing an efficient implementation of the corresponding generators in a computer: for instance, the previous choice of $m = 2^{31} -1$ allows to store each of the produced values in a $32$-bit CPU register.

How is it possible to check the first requirement of unpredictability of the generated pseudorandom sequence? A procedure called **Ripley test**consists in verifying that there is a small dependency between successive elements in the sequence, for instance plotting in a bidimensional plane a set of points whose $X$ coordinates have been obtained by the pseudorandom generator, and the $Y$ coordinates are simply the $X$ ones rotated by one item, say on the left.

```python
def ripley_test(v):
	w = v[1:len(v)]
	w.append(v[0])
	plt.scatter(v, w)	
```

immagini ripley test

autocorrelation analysis libro malchiodi + codice

-------------------------------------------------------------

#### Empirical Cumulative Distribution Function
It is desired for the random values to be extracted from a uniform distribution

Uniform distribution

uniform discrete rv 

$$X = \cases{1 \text{ with } p = 1/n \cr \cr
2 \text{ with } p = 1/n \cr \cr
\vdots \cr \cr
n \text{ with } p = 1/n }$$

Like the throwing of a dice.

grafico probability mass function and cumulative distribution function of  uniform probability distribution.

To evaluate this, it is possible to use the **Empirical Cumulative Distribution function**, another mathematical tool which can be used in order to assess the goodness of a congruential generator. It which associates a sample with an approximation of the c.d.f of the distribution from which the sample has been drawn. Formally, given a sample $S$ drawn from a distribution whose c.d.f. is , the empirical c.d.f. is defined as

$$\widehat{F}(x) = \frac{1}{m} \sum_{i = 1}^{m} \mathbb{I}_{(-\infty, x]}(x_i)$$

that is, the number of elements of $S$ having value $\leq x$.

grafici e spiegazione

It is easy to see that an empirical c.d.f. is a step function and each step starts precisely at one observation, raising the graph of a quantity equal to the number of times that observation occur in the sample, divided by the total number of observations.

##### Glivenko-Cantelli theorem
To formalize the validity of the previous assumptions, a theoretical result known as the **Glivenko-Cantelli theorem**, has been proposed:<br />
If $\widehat{F}$ has been computed using a sample of size $n$ drawn from a distribution whose c.d.f. is $F$, $\widehat{F}$ converges in probability to $F$ as $n$ increases.

Below, some code examples of what discussed above.

```python
def build_ecdf(v):
	return lambda x: sum( map( lambda el_v: el_v <= x, v)) / len(v)
```

```python
def empirical_cdf(S, x):
	count = 0
	for i in S:
		if vi <= x:
			count = count + 1
	return count / len(S)
```

----------------------------------------------------------------

#### Shift Register Generator

----------------------------------------------------------------

## Monte Carlo methods
The term Monte Carlo refers to a wide family of **estimation methods** based on the use of pseudorandom numbers. The basic idea beneath this kind of methods is well described by the anndedoct describing its discovery on part of Stan Ulam, an ungarian mathematician who, playing a card solitaire while recovering from an encephalitis, wondered about the probability of dealing a specific, nontrivial hand from a shuffled deck. As he couldn't get the result through combinatorics, Ulam noticed that an approximation of the probability value could be easily found: it was sufficient to repeatedly shuffle the deck and compute the frequency of time that the desired card configuration appeared.

Although on that time this idea did not result in any application, when some years later Ulam was involved in the design of nuclear weapons at the Los Alamos National laboratories, the studies he was conducting with John Von Neumann and Nicholas Metropolis required to estimate the distribution of distances traveled by neutrons during a fission experiment. His early intuition could now be applied to a real-world problem: it just sufficed a bunch of random values. Those values could have been found in tables commonly used at that time, byt the availability the ENIAC computer suggested John Von Neumann to simulate the extraction of such numbers through the middle-square method introduced at the beginning of this lecture, which he designed specifically with this purpose.

The secrecy policies of the Manhattan project required each methodelogy invented in the Los Alamos laboratories to have a code name, so Metropolis suggested **Monte Carlo**, referring to the casino in Monaco frequented by Ulam's uncle.

### Estimating $\pi$
One of the most famous involving the simulation of pseudorandom values is that leading to an estimate of $\pi$. It requires to simulate the uniform distribution in a given square in order to draw points at random and then chek whether or not they fall inside the circle inscribed in the square. For instance, it is possible to consider the square and denote by the circle inscribed in (that is, the circle centered in the origin and having unit radius).

immagine cerchio

Given a circle $C$ of radius $r$, its area is $\pi \cdot r^2$, while the area of the smallest square $S$ containing such a circle is $(2 \cdot r)^2$. The use of a uniform distribution insures that the probability of drawing a point $x$ falling inside $C$ equals the ratio between the areas of $C$ and $S$, that is

$$P[X \in C \vert x \in S] = \frac{P[x \in C \cap S]}{P[x \in S]} = \frac{P[x \in C]}{P[x \in S]} = \frac{\pi \cdot r^2}{(2 \cdot r)^2} = \frac{\pi}{4}$$

Therefore

$$\pi = 4 \cdot P[x \in C \vert x \in S]$$

```python
def montecarlo_pi(iteration_number):

	s = congruential_generator(iteration_number)
	x = [s[i] / (2 ** 31 - 1) for i in range(iteration_number)]

	t = congruential_generator(seed = 1432, iteration_number)
	y = [t[i] / (2 ** 31 - 1) for i in range(iteration_number)]

	#sqrt(x[i]^2 + y[i]^2) <= 1
	#x[i]^2 + y[i]^2 <= 1

	count = 0
	for i in range(iteration_number)
		if x[i] ** 2 + y[i] ** 2 <= 1.0:
			count = count + 1

	return (4 * count / iteration_number)
```

----------------------------------------------------------------

### Uses of random numbers
One of the earliest applications of random numbers was in the computation of integrals. Let $g(x)$ be a function and suppose we wanted to compute $\theta$ where 

$$\theta = \int_{0}^{1} g(x)dx$$

immagine curva

Approssimare area sottesa da una funzione -> chiuderla in un rettangolo e applicare montecarlo. i punti sotto la curva sono i successi.

How to get precision up to $k$-th digit?

immagine model trial \#i

We want to have a random variable $X_i$ describing the experiment

Expected value and variance (check formula varianza)

-> setting della law of large numbers.

Calcolo $\mu$ e $\sigma^2$ per l'esperimento del pigreco e poi applico la legge dei grandi numeri. Seleziono $\varepsilon$ in modo tale da avere precisione alla $k$-esima cifra. $\varepsilon = \gamma \frac{\pi}{4}$.

Target accuracy and target confidence \#number of runs

accuracy is in terms of number of digits, so something in the form of $10^{-k}$.

-------------------------------------------------------------

## Generating Random Variables

...

### Main families of Random Variables
#### DIscrete Random Variables

immagine slide

##### Bernoulli Random Variable


-------------------------------------------------------------

##### Binomial Random Variable


-------------------------------------------------------------

##### Poisson Random Variable


-------------------------------------------------------------

##### Geometric Random Variable


-------------------------------------------------------------

##### Negative Binomial Random Variable


-------------------------------------------------------------

##### Hypergeometric Random Variable



-------------------------------------------------------------

#### Continuous Random Variables


-------------------------------------------------------------

### Generating discrete Random Variables

#### The Inverse Transform method
Suppose we want to generate the value of a custom discrete random variable $X$ having probability mass function

$$P[X = x_j] = p_j, \quad j = 0, 1, \dots, \quad \sum_{j}p_j = 1$$

To accomplish this, a random number $U$ is generated, that is, $U$ is uniformly distributed over $(0, 1)$, and set

$$X = \cases{1 \space \text{ con } p = \frac{1}{2} \cr \cr 2 \space \text{ con } p = \frac{1}{10} \cr \cr 3 \space \text{ con } p = \frac{1}{10} \cr \cr 4 \space \text{ con } p = \frac{1}{10} \cr \cr 5 \space \text{ con } p = \frac{1}{10} \cr \cr 6 \space \text{ con } p = \frac{1}{10}}$$

grafico cdf con inverse transformation

The preceding can be written algorithmically as

```pseudo
	\begin{algorithm}
	\caption{Native algorithm for custom discrete Random Variable}
	\begin{algorithmic}
	\State $p =$ get\_random$() \space$ //output of a good (pseudo) random generator
	\State $r = 0.0$
	\State $i = 0$
	\While{$r \leq p$}
		\State $i = i + 1$
		\State $r = r + p_i$
    \EndWhile
    \State return $i$
	\end{algorithmic}
	\end{algorithm}
```

-------------------------------------------------------------