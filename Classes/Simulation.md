# Simulation
A **simulation** is, according to the Oxford Dictionary, the product of computer modeling, the formal representation of an event, a process, or a complex system in the real world, especially for study purposes.<br />

A simulation is a digital representation of a system, an economic tool for approximating real-life behaviors within a computer, through the implementation of a [[Modello#Modello descrittivo|descriptive analysis model]], which can be used to test a selection of scenarios.<br />
Different complex systems require different modeling capabilities.<br />
The art of constructing the model itself can lead the modeler to a higher level of understanding of the real system.<br />

Often, modeling an event, despite the numerous simplifications and restrictions imposed on the problem to be modeled, can be extremely complex and impossible to model in minute detail. In this case, attention is focused exclusively on the elements that one wishes to study, and two portions of the system are approximated:
- **connectors** to the external world, which act as a link between the portion of reality being studied and the external world;
- some internal details, approximated through stochastic components.

The reasons for using simulations are manifold:
- it is a valid (and often cost-effective) tool for approximating a real event;
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
Suppose that for each event $A$ of an experiment having sample space $S$ there is a number, denoted by $P[A]$ and called the probability of the event $A$, which is in accord with the following three axiom:
- $0 \leq P[A] \leq 1$;
- $P[S] = 1$;
- for any sequence of mutually exclusive events $A_1, A_2, ...$ it holds that $P\Big[\bigcup_{i = 1}^n A_i\Big] = \sum_{i = 1}^n P[A_i], \space n = 1, 2, ..., \infty$. 

Axiom $1$ states that the probability that the outcome of the experiment lies within $A$ is some number between $0$ and $1$; Axiom $2$ states that with probability $1$ this outcome is a member of the sample space; finally, Axiom $3$ states that for any set of mutually exclusive events, the probability that at least one of these events occurs is equal to the sum of their respective probabilities.

These three axioms can be used to prove a variety of results about probabilities. For instance, since $A$ and $A^c$ are always mutually exclusive, and since $A \cup A^c = S$, we have from Axioms $2$ and $3$ that

$$1 = P[S] = P[A \cup A^c] = P[A] + P[A^c]$$

or, equivalently:

$$P[A^c] = 1 - P[A]$$

In words, the probability that an event does not occur is $1$ minus the probability that it does.

In classical probability, the probability for an event $A$ to occur is defined as $P[A] = \frac{\vert A \vert}{\vert S \vert}$.

----------------------------------------------------------------

### Conditional probability and independence
Consider an experiment that consists of flipping a coin twice, noting each time whether the result was heads or tails. The sample space of this experiment can be taken to be the following set of four outcomes:

$$S = \{(H, H), (H, T), (T, H), (T, T)\}$$

where $(H, T)$ means, for example, that the first flip lands heads and the second tails. Suppose now that each of the four possible outcomes is equally likely to occur and thus has probability $\frac{1}{4}$. Suppose further that we observe that the first flip lands on heads. Then, given this information, what is the probability that both flips land on heads? To calculate this probability it is possible to reason as follows: given that the initial flip lands heads, there can be at most two possible outcomes of the experiment, namely, $(H, H)$ or $(H, T)$. In addition, as each of these outcomes originally had the same probability of occurring, they should still have equal probabilities. That is, given that the first flip lands heads, the (conditional) probability of each of the outcomes $(H, H)$ and $(H, T)$ is $\frac{1}{2}$, whereas the (conditional) probability of the other two outcomes is $0$. Hence the desired probability is $\frac{1}{2}$. If we let $A$ and $B$ denote, respectively, the event that both flips land on heads and the event that the first flip lands on heads, then the probability obtained above is called the conditional probability of $A$ given that $B$ has occurred and is denoted by $P[A \vert B]$.

A general formula for $P[A] \vert B]$ that is valid for all experiments and events $A$ and $B$ can be obtained in the same manner as given previously. Namely, if the event $B$ occurs, then in order for $A$ to occur it is necessary that the actual occurrence be a point in both $A$ and $B$; that is, it must be in $A \cap B$. Now since we know that $B$ has occurred, it follows that $B$ becomes our new sample space and hence the probability that the event $A \cap B$ occurs will equal the probability of $A \cap B$ relative to the probability of $B$:

$$P[A \vert B] = \frac{P[A \cap B]}{P[B]}$$

The determination of the probability that some event $A$ occurs is often simplified by considering a second event $B$ and then determining both the conditional probability of $A$ given that $B$ occurs and the conditional probability of $A$ given that $B$ does not occur. To do this, note first that

$$A = (A \cap B) \cup (A \cap B^c) $$

Because $A \cap B$ and $A \cap B^c$ are mutually exclusive, the preceding yields

$$P[A] = P[A \cap B] + P[A \cap B^c] = P[A \vert B] P[B] + P[A \vert B^c]P[B^c]$$

When we utilize the preceding formula, we say that we are computing $P[A]$ by conditioning on whether or not $B$ occurs.

Some examples follow below.

Let's consider an example.<br />
An insurance company classifies its policy holders as being either accident prone or not. Their data indicate that an accident prone person will file a claim within a one-year period with probability $.25$, with this probability falling to $.10$ for a non accident prone person. If a new policy holder is accident prone with probability $.4$, what is the probability he or she will file a claim within a year?

Let $C$ be the event that a claim will be filed, and let $B$ be the event that the policy holder is accident prone. Then

$$P[C] = P[C \vert B]P[B] + P[C \vert B^c]P[B^c] = .25)(.4) + (.10)(.6) = .16$$

Suppose that exactly one of the events $B_i$, $i = 1, ..., n$ must occur. That is, suppose that $B_1, B_2, ..., B_n$ are mutually exclusive events whose union is the sample space $S$. Then we can also compute the probability of an event $A$ by conditioning on which of the $B_i$ occur. The formula for this is obtained by using that

$$A = A \cap S = A \cap \bigcup^n_{i=1} B_i = \bigcup^n_{i=1} A \cap B_i$$

which implies that

$$P[A] = \sum_{i = 1}^n P[A \cap B_i] = \sum_{i = 1}^n P[A \vert B_i] P[B_i]$$

Let's consider anpther example.<br />
Suppose there are $k$ types of coupons, and that each new one collected is, independent of previous ones, a type $j$ coupon with probability $p_j$, $\sum^k_{j =1} p_j = 1$. Find the probability that the $n^{th}$ coupon collected is a different type than any of the preceding $n − 1$.

Let $N$ be the event that coupon $n$ is a new type. To compute $P[N]$, condition on which type of coupon it is. That is, with $T_j$ being the event that coupon $n$ is a type $j$ coupon, we have

$$P[N] = \sum_{j = 1}^{k} P[N \vert T_j] P[T_j]$$
$$= \sum_{j = 1}^{k} (1 - p_j)^{n-1}p_j$$

where $P[N \vert T_j]$ was computed by noting that the conditional probability that coupon $n$ is a new type given that it is a type $j$ coupon is equal to the conditional probability that each of the first $n − 1$ coupons is not a type $j$ coupon, which by independence is equal to $(1 − p_j)^{n−1}$.

As indicated by the coin flip example, $P[A \vert B]$ (the conditional probability of $A$, given that $B$ occurred) is not generally equal to $P[A]$ (the unconditional probability of $A$). In other words, knowing that $B$ has occurred generally changes the probability that $A$ occurs.

In the special case where $P[A \vert B]$ is equal to $P[A]$, we say that $A$ and $B$ are **independent**. Since $P[A \vert B]= P[A \cap B]/P[B]$, we see that $A$ is independent of $B$ if $P[A \cap B] = P[A]P[B]$. Since this relation is symmetric in $A$ and $B$, it follows that whenever $A$ is independent of $B$, $B$ is independent of $A$.

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

An example of a cumulative distribution function.

![[CumulativeDistributionFunction.png]]

-------------------------------------------------------------

#### Probability mass function
A random variable that can take either a finite or at most a countable number of possible values is said to be **discrete**. For a discrete random variable $X$, its **probability mass function** $p(x)$ is defined as

$$p(x) = P[X = x]$$

If $X$ is a discrete random variable that takes on one of the possible values $x_1, x_2,  \dots$, then, since $X$ must take on one of these values, it holds that

$$\sum_{i = 1}^{\infty}p(x_i) = 1$$

A graphical example of a probability mass function.

![[ProbabilityMassFunction.png]]

-------------------------------------------------------------

#### Probability density function
Whereas a discrete random variable assumes at most a countable set of possible values, it is common to have to consider random variables whose set of possible values is an interval. It is said that the random variable $X$ is a **continuous random variable** if there is a nonnegative function $f(x)$ defined for all real numbers $x$ and having the property that for any set $C$ of real numbers

$$P[X \in C] = \int_{C} f(x) dx$$

The function $f$ is called the **probability density function** of the random variable $X$.

The relationship between the cumulative distribution $F(\cdot)$ and the probability density $f( \cdot)$ is expressed by

$$F(a) = P[X \in (-\infty, a)] = \int_{-\infty}^{a} f(x) dx$$

The total area under the curve of a probablity density function is always equal to $1$, which represents the total probability.

A graphical example of a probability density function.

![[ProbabilityDensityFunction.png]]

The curve represents the distribution of heights for adult males with a mean of $70$ inches and a standard deviation of $3$ inches. The area under the curve is $1$, indicating the total probability, and the curve shows that heights around the mean ($70$ inches) are the most likely, with probability density decreasing as you move further away from the mean.

-------------------------------------------------------------

#### Joint cumulative probability distribution function
In many experiments we are interested not only in probability distribution functions of individual random variables, but also in the relationships between two or more of them. In order to specify the relationship between two random variables, we define the **joint cumulative probability distribution function** of $X$ and $Y$ by

$$F(x, y) = P[X \leq x, Y \leq y]$$

Thus, $F(x, y)$ specifies the probability that $X$ is less than or equal to $x$ and simultaneously $Y$ is less than or equal to $y$. The joint cumulative probability distribution function gives also the joint probability that two or more random variables simultaneously fall within certain specified intervals.

-------------------------------------------------------------

#### Dependent and Independent Random Variables
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

$$\mathbb{E}\Big[\sum_{i = 1}^{n} X_i\Big] = \sum_{i = 1}^{n}\mathbb{E}[X_i]$$

-------------------------------------------------------------

#### Variance
Whereas $\mathbb{E}[X]$, the expected value of the random variable $X$, is a weighted average of the possible values of $X$, it yields no information about the variation of these values.<br />
One way of measuring this variation is to consider the average value of the square of the difference between $X$ and $\mathbb{E}[X]$. If $X$ is a random variable with mean $\mu$, then the **variance** of $X$, denoted by $Var[X]$, is defined by

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

Whereas the expected value of a sum of random variables is equal to the sum of the expectations, the corresponding result is not, in general, true for variances. It is, however, true in the important special case where the random variables are independent. Before proving this, let's define the concept of the **covariance** between two random variables. The covariance of two random variables $X$ and $Y$, denoted $Cov(X, Y)$, is defined by

$$Cov[X, Y] = \mathbb{E}[(X - \mu_x)(Y -\mu_y)]$$

where $\mu_x = \mathbb{E}[X]$ and $\mu_y = \mathbb{E}[Y]$.

- **Positive Covariance** $(Cov(X,Y)>0)$: if the covariance is positive, it means that when one of the variables takes on values greater than its mean, the other variable tends to do the same. In other words, the two variables tend to move in the same direction. For example, if $X$ increases, $Y$ tends to increase as well;
- **Negative Covariance** $(Cov(X,Y)<0)$: if the covariance is negative, it means that when one of the variables takes on values greater than its mean, the other variable tends to decrease. In other words, the two variables tend to move in opposite directions. For example, if $X$ increases, $Y$ tends to decrease;
- **Zero Covariance** $(Cov(X,Y)=0)$: if the covariance is zero, it means that there is no linear relationship between the two variables. However, it's important to note that zero covariance does not necessarily imply that the variables are independent, but rather that there is no linear dependence between them. The variables could still be correlated in a non-linear way.

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

$$Corr(X, Y) = \frac{Cov(X, Y)}{\sqrt{Var[X] Var[Y]}}$$

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

$$\mathbb{E}[X] \geq \mathbb{E}[Y] = aP[X \geq a] + 0P[X < a] = aP[X \geq a]$$

and 

$$\mathbb{E}[Y] = aP[X \geq a] + 0P[X < a] = aP[X \geq a]$$

Therefore

$$\mathbb{E}[Y] = aP[X \geq a]$$
$$P[X \geq a] = \frac{\mathbb{E}[Y]}{a} \to P[X \geq a] \leq \frac{\mathbb{E}[X]}{a}$$


and the result is proved.

-------------------------------------------------------------

#### Chebishev's Inequality
**Chebyshev’s inequality** states that the probability that a random variable differs from its mean by more than $k$ of its standard deviations is bounded by $\frac{1}{k^2}$, where the standard deviation of a random variable is defined to be the square root of its variance. If $X$ is a random variable having mean $\mu$ and variance $\sigma^2$, then for any value $k > 0$

$$P\Big[\vert X - \mu \vert \geq k \sigma\Big] \leq \frac{1}{k^2}$$

Since it is possible to define $Y = \frac{(X − \mu)^2}{\sigma^2}$ as a nonnegative random variable whose mean is

$$\mathbb{E}[Y] = \mathbb{E}\Big[\frac{(X - \mu)^2}{\sigma^2}\Big] = \frac{\mathbb{E}[(X - \mu)^2]}{\sigma^2} = \frac{\sigma^2}{\sigma^2} =1$$

it is possible to use Markov's inequality to derive that

$$P \Big[\frac{(X - \mu)^2}{\sigma^2} \geq k^2\Big] \leq \frac{1}{k^2}$$

The result now follows since the inequality $\frac{(X − \mu)^2}{\sigma^2} \geq k^2$ is equivalent to the inequality $\vert X − \mu \vert \geq k \sigma$.

A more general form of the Chebishev's Inequality is the following. If $X$ is a random variable having mean $\mu$ and variance $\sigma^2$, then for any value $k > 0$

$$P\Big[\vert X− \mu \vert \geq k\Big] \leq \frac{\sigma^2}{k^2}$$

If we define $k = \sigma \cdot k'$, where $k'$ is a positive number, the inequality becomes

$$P\Big[\vert X - \mu \vert \geq k' \sigma\Big] \leq \frac{1}{k'^2}$$
which is the initial one.

-----

#### Weak law of large numbers
Using Chebyshev’s inequality it is possible to prove the **weak law of large numbers**, which states that the probability that the average of the first $n$ terms of a sequence of independent and identically distributed random variables differs from its mean by more than $\varepsilon$ goes to $0$ as $n$ goes to infinity.

**Claim**:<br />
Let $X_1, X_2, \dots$ be a sequence of independent and identically distributed random variables having mean $\mu$. Then, for any $\varepsilon > 0$

$$P\Bigg[ \bigg \vert \frac{X_1 + \cdots + X_n}{n} - \mu \bigg\vert \geq \varepsilon \Bigg] \to 0 \text{ as } n \to \infty$$

**Proof**:<br />
We give a proof under the additional assumption that the random variables $X_i$ have a finite variance $\sigma^2$. Now

$$\mathbb{E}\Bigg[\frac{X_1 + \dots + X_n}{n}\Bigg] = \frac{1}{n} \Big(\mathbb{E}[X_1] + \dots + \mathbb{E}[X_n]\Big) = \frac{1}{n} \cdot n\mu = \mu$$

and

$$Var \Bigg[\frac{X_1 + \dots + X_n}{n}\Bigg] = \frac{1}{n^2} \Big[Var[X_1] + \dots + Var[X_n]\Big] = \frac{1}{n^2} \cdot n\sigma^2 = \frac{\sigma^2}{n}$$

where the above equation makes use of the fact that the variance of the sum of independent random variables is equal to the sum of their variances. Hence, from Chebyshev’s inequality, which says that

$$P\Bigg[\vert X - \mu] \vert \geq k \sigma\Bigg]≤\frac{1}{k^2}$$​
it follows that for any positive $k$

$$P\Bigg[ \bigg \vert \frac{X_1 + \cdots + X_n}{n} - \mu \bigg\vert \geq \frac{k\sigma}{\sqrt{n}} \Bigg] \leq \frac{1}{k^2}$$

Hence, for any $\varepsilon > 0$, by letting $k$ be such that $\frac{k\sigma}{n} = \varepsilon$, that is, by letting $k^2 = \frac{n\varepsilon^2}{\sigma^2}$, we see that

$$P\Bigg[ \bigg \vert \frac{X_1 + \cdots + X_n}{n} - \mu \bigg\vert \geq \varepsilon \Bigg] \leq \frac{\sigma^2}{n \varepsilon^2}$$

which establishes the result.

The last passage of the demonstration also permits to have an upper bound on the probability of making an error greater than $\varepsilon$ if it is decided to use the mean of some random variables instead of the random variables themselves.

It is also possible to choose some accuracy target in order to evaluate the simulation. To do so, it is necessary to be in possess of the variance, which is tipically a bold assumption. However, it is possible to estimate it.

-----

#### Strong law of large numbers
A generalization of the weak law is the strong law of large numbers, which states that, with probability $1$

$$\lim_{n \to\infty} \frac{X_1 + \cdots + X_n}{n} = \mu$$

That is, with certainty, the long-run average of a sequence of independent and identically distributed random variables will converge to its mean.

While the weak law defines this property in a probabilistic way, the strong law defines it in a deterministic way (with probability $1$).

-----

## Random numbers
The Cambridge dictionary defines **random** as: "happening, done, or chosen by chance rather than according to a plan". Indeed, common sense reasoning suggests that it is possible to speak of randomness when a given experience can be repeated several times, always with exactly the same modalities, yet not always giving the same result. For instance, the result of a coin toss, or the closing value of a stock exchange, or even the actual occurrence of rainfalls during daytime when you see a grey sky during the morning. Note that this unpredictability only concerns a specific event, that is, it is not possible to have full confidence on any statement for the result of a single die toss, or for the closing value of a stock exchange and so on.

Things are different if you consider a sequence of such events and try to formulate statements about some form of average result: you can, for instance, be more or less confident about the fact that almost a given fraction of one hundred tosses of a given coin give head.

On the other hand, an electronic computer is probably the tool which is more distant from the notion of randomness: when it is given a task, say computing the sum of numbers in a spreadsheet, it is expected to solve the task without any error, thus it is also expected (and typically obtain) that repeated executions ot a same task give always the same result. Besides, it is told that an electronic computer is nothing more than a mechanism, for sure a complex one, yet a mechanism only able to do what it is encoded in its circuits.

Quoting John Von Neumann: "any one who considers arithmetical methods of producing random digits is, of course, in a state of sin".

The behaviour of a computer is, in fact, always the result of a program execution and thus it is purely deterministic; in spite of this, computers can be deterministically be programmed in such a way that they exhibit random behaviours.

### Pseudorandom number generation
In all cases where it will be necessary to mark a clear distinction between **genuine** randomness, which is possible to naturally observe in the world (say for instance that of a phisical die) from the **artificial** one, which is possible to simulate through computers, we will speak in the latter case of **pseudorandomness**.

The first attempts to describe procedures able to automatically generate pseudorandom numbers dates back to the first half of $1900$. A pioneer in this fields was Maurice G. Kendall, who contributed to build a machine producing tables of random digits. Before that time, randomization procedures such as sampling were performed via consultation of manually produced tables, such as for instance the one published in $1927$ by Leonard H. C. Tippett and relying to census reports.

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

-----

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

Which are the qualities of pseudorandom numbers generated using this technique? First of all, note that once the seed has been fixed the recurrence relation is completely deterministic, and this means that after at most $m$  elements the sequence will generate already produced elements, thus repeating itself. In general, the sequence will start repeating after a number of iterations, which will be designate as the **period** of the generator.

In general, there are three main distinctive properties that drive the choice of the parameters of a congruential generator:
-  the set of generated pseudorandom values should be undistinguishable from an analogous sample drawn from a discrete uniform distribution over $\{0 , \dots, m-1\}$;
- its period should be as higher as possible;
- its computer implementation should be efficient.

Note that a high period per se does not tell anything about the quality of its generator: consider for instance the trivial generator obtained by setting $x_{i + 1} = x_i + 1$ which has maximum period $m -1$ for any value of $m$. Such a generator would be useless because of the **predictability** of the unseen part of a pseudorandom sequence: each item is the successor of previous element modulo $m$. This is why a good generator should guarantee the first two above mentioned requirements: the first one requires the generator to output a sequence of values difficult to predict, and the second one requires that this sequence be as long as possible. Finally, the third requirement deals with parameters allowing an efficient implementation of the corresponding generators in a computer: for instance, the previous choice of $m = 2^{31} -1$ allows to store each of the produced values in a $32$-bit CPU register.

How is it possible to check the first requirement of unpredictability of the generated pseudorandom sequence? Through the **autocorrelation analysis**, a statistical tool used to measure the correlation between elements of a sequence and their lagged counterparts. Based on this tool, there exist a procedure, called **Ripley test**, which consists in verifying if there is a small dependency between successive elements in the sequence, for instance plotting in a bidimensional plane a set of points whose $X$ coordinates have been obtained by the pseudorandom generator and whose $Y$ coordinates are simply the $X$ ones shifted by one item, say on the left.

```python
def ripley_test(v):
	w = v[1:len(v)]
	w.append(v[0])
	plt.scatter(v, w)	
```

![[RipleyTest.png]]

-----

#### Empirical cumulative distribution function
Let's consider the following random sequence: $1$, $3$, $2$, $9$, $8$, $7$, $4$, $5$, $6$, $10$. Is it a random sequence between $1$ and $10$? The response is no, because it is desired for the random values to be extracted from a **uniform distribution**.

A uniform discrete random variable is defined as  

$$X = \cases{1 \text{ with } p = 1/n \cr \cr
2 \text{ with } p = 1/n \cr \cr
\vdots \cr \cr
n \text{ with } p = 1/n }$$

 e.g., the throwing of a dice.

In the image below, the probability mass function of an uniform discrete random variable.

![[UniformProbabilityMassFunction.png]]

In the image below, the cumulative distribution function of a uniform discrete random variable.

![[DiscreteUniformCumulativeDistributionFunction.png]]

With the increasing of the number of steps, the discrete uniform cumulative distribution function will approximate the continuous uniform cumulative distribution function (in the image below).

![[ContinuousUniformCumulativeDistributionFunction.png]]

To evaluate if a function is approximating this behaviour, it is possible to use the **empirical cumulative distribution function** $\widehat{F}$, another mathematical tool which can be used in order to assess the goodness of a congruential generator. This function associates a sample with an approximation of the cumulative distribution function of the distribution from which the sample has been drawn. Formally, given a sample $S = \{x_1, \dots, x_m\}$ drawn from a distribution whose cumulative distribution function is $F$, the empirical cumulative distribution function is defined as

$$\widehat{F}(x) = \frac{1}{m} \sum_{i = 1}^{m} \mathbb{I}_{(-\infty, x]}(x_i)$$

that is, the number of elements of $S$ having value $\leq x$ over $m$.

![[EmpiricalCumulativeDistributionFunction.png]]

It is easy to see that an empirical cumulative distribution function is a step function and each step starts precisely at one observation, raising the graph of a quantity equal to the number of times that observation occur in the sample, divided by the total number of observations.

##### Glivenko-Cantelli theorem
To formalize the validity of the previous assumptions, a theoretical result known as the **Glivenko-Cantelli theorem**, has been proposed:<br />
If $\widehat{F}$ has been computed using a sample of size $n$ drawn from a distribution whose cumulative distribution function is $F$, $\widehat{F}$ converges in probability to $F$ as $n$ increases.

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

Below, some graphical example of $F$ and $\widehat{F}$.

![[GlivenkoCantelli.png]]

-----

## Monte Carlo methods
The term Monte Carlo refers to a wide family of **estimation methods** based on the use of pseudorandom numbers. The basic idea beneath this kind of methods is well described by the anndedoct describing its discovery on part of Stan Ulam, an ungarian mathematician who, playing a card solitaire while recovering from an encephalitis, wondered about the probability of dealing a specific, nontrivial hand from a shuffled deck. As he couldn't get the result through combinatorics, Ulam noticed that an approximation of the probability value could be easily found: it was sufficient to repeatedly shuffle the deck and compute the frequency of time that the desired card configuration appeared.

Although on that time this idea did not result in any application, when some years later Ulam was involved in the design of nuclear weapons at the Los Alamos National laboratories, the studies he was conducting with John Von Neumann and Nicholas Metropolis required to estimate the distribution of distances traveled by neutrons during a fission experiment. His early intuition could now be applied to a real-world problem: it just sufficed a bunch of random values. Those values could have been found in tables commonly used at that time, but the availability the ENIAC computer suggested John Von Neumann to simulate the extraction of such numbers through the middle-square method introduced at the beginning of this lecture, which he designed specifically with this purpose.

The secrecy policies of the Manhattan project required each methodelogy invented in the Los Alamos laboratories to have a code name, so Metropolis suggested **Monte Carlo**, referring to the casino in Monaco frequented by Ulam's uncle.

### Estimating $\pi$
One of the most famous experiment involving the simulation of pseudorandom values is that leading to an estimate of $\pi$. It requires to simulate the uniform distribution in a given square in order to draw points at random and then check whether or not they fall inside the circle inscribed in the square. For instance, it is possible to consider the square and denote by the circle inscribed in (that is, the circle centered in the origin and having unit radius).

![[MonteCarloCircle.png]]

Given a circle $C$ of radius $r$, its area is $\pi \cdot r^2$, while the area of the smallest square $S$ containing such a circle is $(2 \cdot r)^2$. The use of a uniform distribution insures that the probability of drawing a point $x$ falling inside $C$ equals the ratio between the areas of $C$ and $S$, that is

$$P[x \in C \vert x \in S] = \frac{P[x \in C \cap S]}{P[x \in S]} = \frac{P[x \in C]}{P[x \in S]} = \frac{\pi \cdot r^2}{(2 \cdot r)^2} = \frac{\pi}{4}$$

Therefore

$$\pi = 4 \cdot P[x \in C \vert x \in S]$$

```python
def montecarlo_pi(iteration_number):

	s = congruential_generator(iteration_number)
	x = [s[i] / (2 ** 31 - 1) for i in range(iteration_number)]

	t = congruential_generator(seed = 1432, iteration_number)
	y = [t[i] / (2 ** 31 - 1) for i in range(iteration_number)]

	#sqrt(x[i]^2 + y[i]^2) <= 1 is equal to x[i]^2 + y[i]^2 <= 1

	count = 0
	for i in range(iteration_number)
		if x[i] ** 2 + y[i] ** 2 <= 1.0:
			count = count + 1

	return (4 * count / iteration_number)
```

-----

### Uses of random numbers
One of the earliest applications of random numbers was in the computation of integrals. Let $g(x)$ be a function and suppose we wanted to compute $\theta$ where 

$$\theta = \int_{0}^{1} g(x)dx$$

To approximate the area under the curve using a Monte Carlo method simply means to throw points into the rectangle contanining the function and calculate the ratio of successes over total throws. Each point is described by a couple of coordinates $(x, y)$ and to understand if it's below or above the curve, the value $\widehat{y} = f(x)$ will be compute and then $\widehat{y}$ will be compared with $y$. If $y \leq \widehat{y}$, a counter will be increased by $1$ and by $0$ otherwise.

How to get precision up to $k$-th digit?

![[MonteCarloPiExample.png]]

Let's try to model the $i$-th throw of a dart. The first thing is to build a random variable $X_i$ describing the experiment.

$$X_i = \cases{1 \quad \text{ if point \#} i \text{ is inside the circle, with } p = \frac{\pi}{4} \cr \cr 0 \quad \text{ otherwise, with } p = 1 - \frac{\pi}{4}}$$

Knowing that, it is possible to derive that $\mathbb{E}[X_i] = 1 \cdot \frac{\pi}{4} + 0 \cdot (1 - \frac{\pi}{4}) = \frac{\pi}{4}$.<br />
It is also possible to measure the variance $Var[X_i] = (1 - \frac{\pi}{4})^2 \cdot \frac{\pi}{4} + (0 - \frac{\pi}{4})^2 \cdot (1 - \frac{\pi}{4})$. This formulation of the variance is based on the definition, that is, $\mathbb{E}[(X - \mu)^2]$. Since in this case, the random variable can only take two value, it is possible to rewrite the formula using the actual values of $X$: $(1 - \mu)^2 \cdot P[1] + (0 - \mu)^2 \cdot P[0]$.

Defining $\frac{\pi}{4} = q$, it is that $Var[X_i] = (1 - q)^2 \cdot q + (0 - q)^2 \cdot (1 - q) = (1 - q)\big[(1 - q)\cdot q + q^2\big] = (1 - q) \cdot q = (1 - \frac{\pi}{4})\cdot \frac{\pi}{4}$. Whenever the experiment is succesfull, the counter is incremented by $1$ and by $0$ otherwise. The overall counting is $\sum_{i=1}^{n}X_i$ and the probability is $\frac{\sum_{i=1}^{n}X_i}{n}$. This formula reminds of the setting of the law of large numbers (a set of independent and identically distributed random variables for which the average is computed). Let's compute

$$P\Bigg[\Big\vert \frac{\sum_{i=1}^{n}X_i}{n} - \mu \Big\vert > \varepsilon \Bigg] \leq \frac{\sigma^2}{n \varepsilon^2}$$

Let's define $\mu = \frac{\pi}{4}$ and $\sigma^2 = (1 - \frac{\pi}{4}) \cdot \frac{\pi}{4}$. The aim is to set $\varepsilon$ in a way that would help to have precision up to the $k$-th digit.<br />
Choosing $\varepsilon = \gamma \frac{\pi}{4}$, 

$$P\Bigg[\Big\vert \frac{\sum_{i=1}^{n}X_i}{n} - \frac{\pi}{4} \Big\vert > \gamma \frac{\pi}{4} \Bigg] \leq \frac{(1 - \frac{\pi}{4}) \cdot \frac{\pi}{4}}{n (\gamma \frac{\pi}{4})^2}$$

$$P\Bigg[\frac{\Big\vert \frac{\sum_{i=1}^{n}X_i}{n} - \frac{\pi}{4} \Big\vert}{\frac{\pi}{4}} > \frac{\gamma \frac{\pi}{4}}{\frac{\pi}{4}} \Bigg] \leq \frac{(1 - \frac{\pi}{4}) \cdot \frac{\pi}{4}}{n (\gamma \frac{\pi}{4})^2}$$

Now

$$\frac{\Big\vert \frac{\sum_{i=1}^{n}X_i}{n} - \frac{\pi}{4} \Big\vert}{\frac{\pi}{4}}$$

is a measurement of the **relative error**, the difference between the value obtained ($\frac{\sum_{i=1}^{n}X_i}{n}$) and the expected value ($\frac{\pi}{4}$) in terms of percentage with respect to the expected value. That is, an absolute percentage error.

$$P\Big[ \text{ relative error } > \gamma \Big] \leq \frac{(1 - \frac{\pi}{4}) \cdot \frac{4}{\pi}}{n \gamma^2}$$
$$P\Big[ \text{ relative error } \leq \gamma \Big] > 1- \frac{(1 - \frac{\pi}{4}) \cdot \frac{4}{\pi}}{n \gamma^2}$$

Now, $\gamma$ is the **target accuracy** while $n$ identifies the number of runs of the experiment. Furthermore, the right-hand side of the disequation ($1 - \frac{(1 - \frac{\pi}{4}) \cdot \frac{4}{\pi}}{n \gamma^2}$) is what is called the **confidence** of getting that target accuracy, that is, a lower bound on the probability of making an error greater than the accuracy of interest.<br />
Let's define $\frac{(1 - \frac{\pi}{4}) \cdot \frac{4}{\pi}}{n \gamma^2} = \delta$, where $\delta$ is the **target confidence** we want to obtain. It is therefore possible to fix two values chosen from accuracy, confidence and number of experiments and determine the third value such that it will respect this inequality.

Accuracy will always be in terms of number of digits, so it will be in the form of $\gamma = 10^{-k}$, where $k$ is the position of the last digit of interest.<br />
Calling $(1 - \frac{\pi}{4}) \cdot \frac{4}{\pi} = \eta$, which it is a constant number, it is possible to observe that 

$$1 - \frac{(1 - \frac{\pi}{4}) \cdot \frac{4}{\pi}}{n \gamma^2} = 1 - \frac{\eta}{n \gamma^2} \geq \delta$$

that is, it is desirable for the obtained confidence to be greater or equal than the target confidence. Henceforth

$$- \frac{\eta}{n (10^{-k})^2} \geq \delta - 1$$
$$\frac{\eta}{n (10^{-k})^2} \leq 1 - \delta$$
$$n \geq \Bigg \lceil \frac{\eta}{(1 - \delta)10^{-2k}} \Bigg \rceil$$

While this theoretical result seems extremely useful, it assumes to have at disposal $\eta$ which in our case is a constant but only because it derives from an analytical step and holds only for a very specifical random variable known from the beginning. Therefore, it is tipically necessary to estimate $\eta$ through experiments to utilize this property.

-----

# Generating Random Variables
Systems can be modeled, including non trivial components, in the form of random variables. Statistics allow to reliably run experiments and obtain results by observations on these models. At the base of this process, there is the ability to generate pseudorandom numbers algorithmically.

The next step is to learn when and how to use noticeable random variables from the literature and also to generate observations of random variables algorithmically.

## Main Families of Random Variables
There are certain types of random variables that frequently appear in applications. In this section we survey some of the discrete ones.

### Discrete Random Variables

![[DiscreteRandomVariables.png]]

### Generating Discrete Random Variables

#### The Inverse Transform Method
Suppose we want to generate the value of a custom (single value) discrete random variable $X$ having probability mass function

$$P[X = x_j] = p_j, \quad j = 0, \dots, 6 \quad \sum_{j = 1}^6 p_j = 1$$

To accomplish this, a random number $U$ is generated, that is, $U$ is uniformly distributed over $(0, 1)$, and set

$$X = \cases{1 \space \text{ with } p = \frac{1}{2} \cr \cr 2 \space \text{ with } p = \frac{1}{10} \cr \cr 3 \space \text{ with } p = \frac{1}{10} \cr \cr 4 \space \text{ with } p = \frac{1}{10} \cr \cr 5 \space \text{ with } p = \frac{1}{10} \cr \cr 6 \space \text{ with } p = \frac{1}{10}}$$

Expected value $\mathbb{E}[X] = 1 \cdot \frac{1}{2} + \dots + 6 \cdot \frac{1}{10} = \sum_{i = 1}^{6} v_i \times p_i = \mu$<br />
Variance $Var[X] = \sum_{i = 1}^{6}( v_i - \mu)^2 \cdot p_i$

How is possible to simulate the readings of such custom discrete random variable? A technique is called the **inverse transform** method (for discrete random variables).

First of all, the cumulative distribution function is built out of the random variable.

![[InverseCDF.png]]

The inverse transform method suggests to use this cumulative distribution function in reverse, that is, picking a probability value and reading the corresponding value of the random variable generating this probability. 

At this point, we are able to generate valid values for probability and therefore we can get the corresponding value. The probability values must be numbers between $0$ and $1$, chosen from a uniform distribution and independent.

Defining $P[X = x_i] = p_i$, the preceding idea can be written algorithmically as

```pseudo
	\begin{algorithm}
	\caption{Native algorithm for Custom Discrete Random Variables}
	\begin{algorithmic}
	\State $u =$ get\_random$() \space$ //output of a good (pseudo) random generator
	\State $q = 0.0$
	\State $i = 0$
	\While{$q \leq u$}
		\State $i = i + 1$
		\State $ q=  q+ p_i$
    \EndWhile
    \State return $i$
	\end{algorithmic}
	\end{algorithm}
```

Take into account the case of a random variable $X$ such that:

$$P[X = x_j] = p_j, \quad j = 0, \dots, 6 \quad \sum_{j = 1}^6 p_j = 1$$
$$X = \cases{x_1 \space \text{ with } p = p_1 \cr \cr x_2 \space \text{ with } p = p_2 \cr \cr \vdots \cr \cr x_n \space \text{ with } p = p_n}$$

Let's consider two specific cases for this discrete random variable:
- $n = 2$;
- $p_1 = p_2 = \dots = p_n$.

In the case that $n=2$, it would be a random variable defined as follows:

$$X = \cases{x_1 \space \text{ with } p = p_1 \cr \cr x_2 \space \text{ with } p = p_2 = 1 - p_1}$$

In the case that $p_1 = p_2 = \dots = p_n$, it would be a random variable defined as follows:

$$X = \cases{x_1 \space \text{ with } p = \frac{1}{n} \cr \cr x_2 \space \text{ with } p = \frac{1}{n} \cr \cr \vdots \cr \cr x_n \space \text{ with } p = \frac{1}{n}}$$

This is called a **uniform discrete random variable**.<br />
A general method for generating valid values for these customs discrete random variables was already explored in the previous chapter, the Inverse Transform method, which refers to the inverse of the cumulative distribution function. Basing on this technique, are we able to create an algorithm for producing a value for a uniform random variable?

A valid algorithm for producing values for a uniform discrete random variable is the following:

```python
def UniformDRV1(n):
	u = random.random()
	for i in range(1, n + 1, 1):
		if u <= i/n:
			return i
```

Another approach is based on the following sequence of inequalities. We stop if the condition $u \leq \frac{i}{n}$ is met. If this condition is met, it is also true that $u >\frac{(i-1)}{n}$ (that is, $u$ is greater than the preceding cumulate probability) and this equivalence leads to the following sequence of disequations:

$$(i -1) \cdot \frac{1}{n} < u \leq i \cdot  \frac{1}{n}$$
$$(i - 1) < n \cdot u \leq i$$

Now, it is possible to round up and say that $i \geq \lceil n \cdot u \rceil$. The other side of the disequation says that $i < n \cdot u + 1$. Remembering that $i$ is an integer value, it follows that the previous algorithm can be written as

```python
def UniformDRV2(n):
	u = random.random()
	return math.ceil(n * u)
```

Now considering the second specific case, that is, the case in which $n = 2$, it is possible to write an algorithm that generates observations for this random variable in the following way: 

```python
def binaryDRV(p)
	u = random.random()
	if u <= p:
		return 0
	else:
		return 1
```

Now the goal is to apply these ideas to solve a small computing task, that is, generating a permutation of the numbers $1, 2, \dots , n$ which is such that all $n!$ possible orderings are equally likely.

The first intuition is to apply swapping between couples of elements of the array picked at random. The problem with this approach is that it makes hard to understand if each random permutation is equiprobable.

The following small variant of the previous algorithm will accomplish this by first choosing one of the numbers $1, \dots , n$ at random and then putting that number in position $n$; it, then, chooses at random one of the remaining $n − 1$ numbers and puts that number in position $n − 1$; it then chooses at random one of the remaining $n − 2$ numbers and puts it in position $n − 2$; and so on (where choosing a number at random means that each of the remaining numbers is equally likely to be chosen). Starting with any initial ordering $P_1, P_2 , \dots , P_n$, one of the positions $1, \dots , n$ will be picked at random and then the number in that position will be interchanged with the one in position $n$. Now we randomly choose one of the positions $1, \dots , n − 1$ and interchange the number in this position with the one in position $n − 1$, and so on.

Let's evaluate if the probability of each permutation to appear is the same.

$$P[\text{Each permutation}] = \bar{p}$$

Let's observe it in a different way. Let's check for the last position what is the probability of containing each element. What the algorithm does is to choose at random one of the $n$ position and swap, therefore only one condition has to be satistisfied, that is, the choice must be made uniformly. In other words, the choice is read as the output of a uniform discrete random variable:

$$P[\text{ The element } i \text{ in position } n] = \bar{q} = \frac{1}{n}$$
$$P[ i \text{ in position } n] = \frac{1}{n} \quad \forall i = 1, \dots, n$$

Now let's check it for the position $n-1$:

$$P[ i \text{ in position } n -1] = \frac{n-1}{n} \cdot \frac{1}{n-1} \quad \forall i = 1, \dots, n$$
that is, the probability of not being chosen in the first round times the probability of being chosen in the second one, and so on and so forth for each other round.

Now, the implementation

```python
def RandomPerm(v : list):
	for i in range(len(v)):
		# position to fix: v[n - i - 1]
		# position to swap: chosen randomly
		s = random.randint(0, len(v) - i - 1)
		v[len(v) - i - 1], v[s] = v[s], v[len(v) - i - 1]
	return v
```

-------------------------------------------------------------

##### Bernoulli Random Variable
A **Bernoulli random variable** models a single trial that can be succesful or not. The probability of success of the trial is known.

Expected Value $\mathbb{E}[X] = 1 \cdot p + 0 \cdot (1 - p) = p$.<br />
Variance $Var[X]= \mathbb{E}[(X - \mu)^2] = (1 - p)^2 p + (0 - p)^2 (1 - p) = p(1 - p) (1 - p + p)$ $= p ( 1 - p )$.

-------------------------------------------------------------

##### Binomial Random Variable
A **Binomial random variable** models $n$ trials in which each trial is described as a Bernoulli random variable. The goal is to count the number of successful trials.

How to generate a valid value for a Binomial random variable?<br />
One way is by simulation, that is, simulating $n$ Bernoullli random variables all with equal probability of success $p$ and independent one another. Another option considers the use of the native algorithm for the Inverse Transform method.

Consider the following example.<br />
Alice and Bob play a dice game. It consists in rolling a single dice exactly $10$ times. Alice wins if she gets $5$ times the value $1$. What is her probability of winning? To compute the answer, the following formula will be used.

$$P[X = i] = \binom{n}{i} p^i (1 - p)^{n - i} = \frac{n!}{i! (n - i)!} p^i(1 - p)^{n - i}$$

However, the calculation of the probability for large values of $n$ and, in particular, of the binomial coefficient is computationally challenging. An idea is to compute this probability incrementally.

$$P[X = i] = \binom{n}{i} p^i (1 - p)^{n - i} = \frac{n!}{i! (n - i)!} p^i(1 - p)^{n - i}$$

Let's start looking at the probability of the random variable to assume value $i+1$ and writing it in a way that resembles the previous equation:

$$P[X = i + 1] = \frac{n!}{(i + 1)!(n  - i - 1)!} p^{i + 1}(1 - p)^{n - i - 1}$$

Adding to both the numerator and the denominator the term $n - i$, it is possible to obtain

$$P[X = i + 1] = \frac{n!\cdot (n-i)}{(i + 1)\cdot i!\cdot (n - i) \cdot (n  - i - 1)!}\cdot( p^{i}\cdot p) \frac{(1 - p)^{n - i}}{1-p}$$

Now, by noticing that $(n - i) \cdot (n  - i - 1)! = (n - i)!$ and by grouping some terms, it is possible to obtain

$$P[X = i + 1] = \frac{n!}{i! (n - i)!} p^i(1 - p)^{n - i} \space \cdot \space  \frac{p}{1-p} \cdot \frac{n-i}{i +1}$$

After this rewriting, it is possible to notice that

$$P[X = i + 1] = P[X = i] \cdot \frac{p}{1-p} \cdot \frac{n-i}{i +1}$$

Noting that $\frac{p}{1-p}$ is a constant and, therefore, it is possible to refers to it as $c$, the only thing that must be computed each iteration is $\frac{n-i}{i + 1}$ and, obviously, the final product.

Expected value $\mathbb{E}[X] = np$ ($n$ indipendent trials of a Bernoulli random variable, that is, $n$ times the expected value of a Bernoulli random variable).<br />
Variance $Var[X] = \sum_{i = 1}^{n}Var[X_i] = np (1 - p)$ (since each $X_i$ is independent).

-----
##### Poisson Random Variable
There exists a significant similarity between **Poisson random variables** and Binomial random variables. The only difference is that in the Binomial ones, $n$ is a reasonable number while in the Poisson one, $n$ is a huge number.

The term $\lambda = n \cdot p$ is called **rate**. The choice of utilizing only one parameter derived from the product of other two is due to the fact that $p$ tends to be a really small number while $n$ tends to be a really large one. Therefore, $\lambda$ tends to be a good compromise between the other two.

It is intuitive, given the relationship between Binomial and Poisson random variables, that for a Poisson random variable $X$ having parameter $\lambda$, it holds that

$$\mathbb{E}[X] = Var[X] = \lambda$$

In fact, the expected value $\mathbb{E}[X] = np = \lambda$ and the variance $Var[X] = np(1 - p) = n(p - p^2)$. But if $p$ is a small value, $p^2$ tends to $0$ and, therefore, it can be dropped. The remaining product is $np$, which is again $\lambda$.

As for the Binomial, the calculation of the probability for large values of $n$ and, in particular, of the binomial coefficient is computationally challenging. An idea is to compute this probability incrementally.

$$P[X = i] = \binom{n}{i}p^i(1-p)^{n-i} = \frac{n!}{(n - i)!i!}p^i (1-p)^{n-i}$$

Knowing that $\lambda = np$ and, therefore, $p = \frac{\lambda}{n}$

$$\frac{n!}{(n - i)!i!}\Big(\frac{\lambda}{n}\Big)^i \Big(1-\frac{\lambda}{n}\Big)^{n-i} =$$
$$\frac{n(n-1) \dots (n - i + 1)(n - i)!}{n^i(n - i)!} \cdot\frac{\lambda^i}{i!} \cdot \frac{\Big(1-\frac{\lambda}{n}\Big)^{n}}{\Big(1-\frac{\lambda}{n}\Big)^{i}}$$
$$\frac{n(n-1) \dots (n - i + 1)}{n^i} \cdot\frac{\lambda^i}{i!} \cdot \frac{\Big(1-\frac{\lambda}{n}\Big)^{n}}{\Big(1-\frac{\lambda}{n}\Big)^{i}} =$$

Now, for $n$ large and $p$ small, it follows from a well-known limit that

$$\Big(1 - \frac{\lambda}{n}\Big)^n \approx e^{-\lambda}$$
$$\frac{n(n-1) \dots (n - i + 1)}{n^i} \approx 1$$
$${\Big(1-\frac{\lambda}{n}\Big)^{i}} \approx 1$$
This last similarity is due to the fact that $\lambda / n = p$ but $p$ is small and therefore the result is close to $1$.

Hence, for $n$ large and $p$ small, it holds that

$$P[X = i] \approx e^{-\lambda}\frac{\lambda^i}{i!}$$

Another interesting result about Poisson random variables is that they are **invariant** to aggregation (and to disaggregation). Let's consider a Poisson random variable $X$ of parameter $\lambda$ that is counting the number of successes over a large number of trials. Let's assume that the type of these successful events may not be unique. Is it correct to model the readings of this numbers as the reading of a Poisson random variable? Let's recall the example of the pharmacy and assume that is desired to measure the number of male and female customers. Knowing that the total number of customers entering in the pharmacy can be modelled as a Poisson random variable, it is possible to demonstrate that also the number of male customers and of female customers entering in the pharmacy can be modelled as Poisson random variables too. 

**Claim**:<br />
Starting from

$$X = X_A + X_B$$

we claim that $X_A$ (and $X_B$) are Poisson random variables, where

$$X_A \text{ is a Poisson random variable of parameter } \lambda_A \space(\text{such that }\lambda_A =\lambda \cdot p_A)$$
$$X_B \text{ is a Poisson random variable of parameter } \lambda_B \space(\text{such that }\lambda_B =\lambda \cdot p_B)$$

In fact, $\lambda = \lambda_A + \lambda_B = \lambda \cdot p_A + \lambda \cdot p_B = \lambda \cdot (p_A + p_B) = \lambda \cdot 1 = \lambda$.<br />

**Proof**:<br />

$$P[X_A = n, X_B = m] =$$
$$= P[X_A = n, X_B = m \space \vert X = n + m] \cdot P[X = n + m] + P[X_A = n, X_B = m \vert X \neq n + m] \cdot P[X \neq n + m] = $$

However, $X$ is defined as $X = X_A + X_B$ and, therefore, $P[X_A = n, X_B = m \vert X \neq n + m] = 0$.

$$P\Big[X_A = n, X_B = m\Big] = P\Big[X_A = n, X_B = m \vert X = n + m\Big] \cdot P\Big[X = n + m\Big] + 0$$

This is the setting of a Binomial random variable and, therefore, its probability can be written as

$$ P[X_A = n, X_B = m \vert X = n + m] = \binom{n + m}{n}p_A^{n}(1- p_A)^{n + m - n}$$
$$P[X = n + m] = e^{-\lambda} \frac{\lambda^{n+ m}}{(n + m)!}$$
$$\binom{n + m}{n}p_A^{n}(1- p_A)^{n + m - n} \cdot e^{-\lambda} \frac{\lambda^{n+ m}}{(n + m)!} = $$

Since $e^{-\lambda}$ can be written as $e^{-\lambda p_A} \cdot e^{-\lambda(1 - p_A)}$

$$= \frac{(n + m)!}{n!m!}p_A^{n}(1- p_A)^{m} \space \cdot e^{-\lambda p_A} \space e^{- \lambda (1 - p_A)}\frac{\lambda^{n} \lambda^{m}}{(n + m)!} = $$
$$= \frac{\cancel{(n + m)!}}{n!m!}p_A^{n}(1- p_A)^{m} \space \cdot e^{-\lambda p_A} \space e^{- \lambda (1 - p_A)}\frac{\lambda^{n} \lambda^{m}}{\cancel{(n + m)!}} =$$
$$= e^{-\lambda p_A} \frac{(\lambda p_A)^{n}}{n!} \cdot e^{- \lambda (1 - p_A)}\frac{ (\lambda (1- p_A))^{m}}{m!}$$

Therefore, recalling that we started from $P[X_A = n, X_B = m]$, we are interested in $P[X_A = n]$

$$P[X_A = n] = \sum_{m = 0}^{\infty} P[X_A = n, X_B = m] =$$
$$= e^{-\lambda p_A} \frac{(\lambda P_A)^{n}}{n!} \sum_{m = 0}^{\infty} e^{-\tilde{\lambda}} \frac{(\tilde{\lambda})^m}{m!}$$

And this is the expression of a general probability for a Poisson random variable of parameter $\tilde{\lambda} = \lambda (1 - p_A)$.

$$= e^{-\lambda p_A} \frac{(\lambda P_A)^{n}}{n!} \underbracket{\sum_{m = 0}^{\infty} e^{-\tilde{\lambda}} \frac{(\tilde{\lambda})^m}{m!}}_1 = $$
$$= e^{-\lambda p_A} \frac{(\lambda P_A)^{n}}{n!}\quad \text{ with } \lambda_A = \lambda \cdot p_A$$

The following is a Random generation algorithm for a Poisson random variable.

```pseudo
	\begin{algorithm}
	\caption{Random Generation Algorithm for a Poisson random variable}
	\begin{algorithmic}
		\State $u$ = random() $\space$   //$[0, 1)$
		 \State $q = 0$ \#cumulative probability
		 \State $i = 0$
		 \While{$u \geq q + P[X = i]$}
			 \State $q = q + P[X = i]$
			 \State $i = i + 1$
         \EndWhile
         \State return $i$
	\end{algorithmic}
	\end{algorithm}
```

The calculation of $P[X = i]$ is computationally complex and, therefore, there is the need for a simpler way to compute it. Let's start from

$$\frac{P[X = i + 1]}{P[X = i]} = \frac{\cancel{e^{-\lambda}}\frac{\lambda^{(i + 1)}}{(i + 1)!}}{\cancel{e^{-\lambda}}\frac{\lambda^{(i)}}{(i)!}} = \frac{\lambda^{(i + 1)}}{\lambda^{i}}\cdot \frac{i!}{(i + 1)!} = \lambda \cdot \frac{1}{i + 1}$$
In this way, the computation of $P[X = i]$ just needs the previous probability ($P[X = i - 1]$) and the coefficient just obtained.

-------------------------------------------------------------

##### Geometric Random Variable
Consider independent trials, each of which is a success with probability $p$. If $X$ represents the number of the first trial that is a success, then

$$P[X = i] = p(1 - p)^{i - 1}, \quad i \geq 1$$

which is easily obtained by noting that in order for the first success to occur on the $i$-th trial, the first $i − 1$ must all be failures and the $i$-th a success. The previous equation now follows because the trials are independent.

Expected value $\mathbb{E}[X] = \sum_{n = 1}^{\infty} np(1 - p)^{n-1} = \frac{1}{p}$.<br />
Variance $Var[X] = \frac{1 - p}{p^2}$.

How to generate algorithmically geometric random variables? The first possible approach consists in simulating the repetition of a Bernoulli experiment. Another possible one is using, again, the inverse cumulative distribution function approach and the Native Algorithm.<br />
Since $P[X = i] = (1 - p)^{i - 1} \cdot p$, we can pass $p$ instead of $X$ to the algorithm.

```pseudo
	\begin{algorithm}
	\caption{Native Algorithm for generating Geometric Random Variables}
	\begin{algorithmic}
		\State $u$ = random() $\space$   //$[0, 1)$
		\State $q = 0.0$ \#cumulative probability
		\State $i = 0$ 
		 \While{$u \geq q + (1 - p)^{i - 1} \cdot p$}
			 \State $q = q + (1 - p)^{i - 1} \cdot p$
			 \State $i = i + 1$
		\EndWhile
		\State return $i$
	\end{algorithmic}
	\end{algorithm}
```

Can we do it more efficiently? We can try to reduce the number of iterations since the formula has only exponentials and no factorials in it. Let's observe $P[X = 1] = 1 - P[X \neq 1] = 1 - (1 - p)$. Also, $P[X = 1 \lor 2] = 1 - P[X \neq 1 \wedge X \neq 2]$. At the $j$-th iteration, if the algorithm doesn't stop, it means that $u \geq 1 - (1 -p)^{j -1}$. On the other hand, if we stop it means that $u < 1 - (1 -p)^j$. <br />
If the final output of the algorithm is $j$ and we call $(1 - p) = q$, it holds that

$$1 - q^{j - 1} \leq u < 1 - q^j$$
$$- q^{j - 1} \leq u -1 < - q^j$$
$$q^{j} < 1 - u \leq q^{j-1}$$
$$\text{output } \widehat{\text{j}} = \min \Big\{j \space \vert \space q^j < 1 - u\Big\}$$

How can we find this minimum without computing all these terms? Moving to the logarithm in both terms of the condition, we obtain

$$\log(q^j) < \log(1 - u)$$

Since the logarithm is a monotone function, when $\log(q^j) < \log(1 - u)$, then $qj < 1 - u$. Therefore, this is a valid modification.

$$j \log(q) < \log(1 - u)$$
$$j  > \frac{\log(1 - u)}{\log(q)}$$

At this point, we know that we can define this $j = \Bigg \lfloor \frac{\log(1 - u)}{\log(q)} \Bigg \rfloor + 1$. Also, if $u$ is a random number between $0$ and $1$, also $1 - u$ is a random number between $0$ and $1$. Therefore, we can say that $j = \Bigg \lfloor \frac{\log(u)}{\log(q)} \Bigg \rfloor + 1$.

-------------------------------------------------------------

##### Negative Binomial Random Variable
Let $X$ denote the number of trials needed to obtain $r$ successes when each trial is independently a success with probability $p$. Then, $X$ is defined as a **negative binomial random variable** of parameters $p, r$ and it models the number of failures in a sequence of independent and identically distributed Bernoulli trials before a specified (non-random) number of successes (denoted $r$) occurs.

The last iteration is the $r$-th success. On the previous iteration ($i-1$ iteration) we got $r-1$ successes. The probability of getting this configuration is defined by a binomial random variable:

$$\binom{i - 1}{r -1} p^{r-1}(1-p)^{i-1 -(r-1)}$$

Therefore, $P[X = i] = \binom{i - 1}{r -1} p^{r-1}(1-p)^{i-r} \cdot p = \binom{i - 1}{r -1} p^{r}(1-p)^{i-r}$

To compute the expected value, we can consider this random variable as $r$ observation of a geometric random variable, that is, $r$ observation of the first success:

$$X = \sum_{k = 1}^{r}X_k$$

and, therefore, $\mathbb{E}[X] = \mathbb{E}[\sum_{k = 1}^{r}X_k] = \sum_{k = 1}^{r}\mathbb{E}[X_k] =  \sum_{k = 1}^{r} \frac{1}{p} = r \cdot \frac{1}{p}$.<br />
The same holds for its variance $Var[X] = r \cdot \frac{1 - p}{p^2}$.

-------------------------------------------------------------

##### Hypergeometric Random Variable
$N$ blue balls $+ M$ not blue balls. What is the number of blue balls that i get by drawing $n$ of them from the urn? This experiment cannot be seen as a Bernoulli experiment due to the fact that trials are not identical anymore.

A population of size $N + M$ is given, where $N$ individuals hold a feature and $M$ do not. Knowing that $n$ is the size of the sample, an hypergeometric random variable $X$ takes on the number of individuals in the sample holding the feature.

$$P[X = i] = \frac{\binom{N}{i} \cdot \binom{M}{n - i}}{\binom{N + M}{n}}$$

-------------------------------------------------------------

#### Summary of the Random Variables
To summarize it

![[CheatSheetRandomVariables.png]]

-------------------------------------------------------------

### Continuous Random Variables
Continuous random variables have one big advantage over the discrete ones, which is their visual representation.

Differently from its discrete counterpart, it makes very little sense to ask what is the probability for a continuous random variable to take a specific value (because it is a single point in a continuous domain). It makes more sense to look at how these probabilities are distributed in certain ranges and to represent these distributions as functions.

Each of the techniques for generating a discrete random variable has its analogue in the
continuous case. The way to generate continuous random variables is the continuous counterpart of the Inverse Transform Method.
#### Uniformly Distributed Continuous Random Variable 
The probability distribution describing the possible outcome is constant over a certain range. That is why it is called uniform.

This range is defined by two parameters, $a$ and $b$, that is, the lowest and the highest possible value that the random variable can take. Therefore, the probability of getting a reading of the random variable lower than $a$ or greater than $b$ is $0$.

$$f(x) = \cases{ \frac{1}{b-a} \text{ if } a \leq x \leq b \cr \cr 0 \text{ otherwise}}$$

Equal probability means that if I sum up all these probability, I need to get $1$. But we need to use the counterpart of the sum, that is, the integral. The integral of this probability distribution is exactly the cumulative distribution function $F(x)$

$$F(x) = \frac{x-a}{b-a}$$

![[UniformlyDistributedRandomVariable.png]]

The area under the line in the first graph above must obviously be equal to $1$.

The point of modeling with continuous random variables is that the geometric representation of these functions ($f(x)$ and $F(x)$) helps in modeling. Having in mind what these functions look like in terms of graph is really useful.

Let's analyze the algorithmic part.

We can exploit the idea of the Inverse Transform Method and apply it in a similar way to this context. We consider a continuous random variable having distribution function $F$ and, firstly, we compute its inverse, $F^{-1}(u) =a + (b-a) \cdot u$.

![[InverseCDFUniformlyDistributeContinuousRV.png]]

For simulating a reading of a uniform continuous random variable it is enough to apply the following algorithm.

```pseudo
	\begin{algorithm}
	\caption{Native Algorithm}
	\begin{algorithmic}
		\State $a$, $b$ float
		\State $u = random(0, 1)$
		\State $x = F^{-1}(u)$ \#$x = a + (b-a) \cdot u$
		\State return $x$
	\end{algorithmic}
	\end{algorithm}
```

**Claim**:<br />
Let $U$ be a uniform random variable in range $(0, 1)$. We claim that for any continuous cumulative distribution function $F()$ (and, therefore, for any random variable because every one of them has a cumulative distribution function), the random variable $X = F^{-1}(U)$ has cumulative distribution function $F()$ and, therefore, it is the random variable we wish to simulate. 

This claim firstly suggests that the native algorithm using the Inverse Transform concept is correct for each target random variable. The second point of discussion that will open for other algorithmic techniques is asking ourselves if this algorithm is really always applicable. While in the discrete case, any cumulative distribution function is invertible, in the continuous it depends.

**Proof**:<br />
Let $F_X$ the cumulative distribution function of $X = F^{-1}(U)$. We don't actually know the shape of this random variable. It is possible to say that

$$F_X(x) = P[X \leq x] = P[F^{-1}(U) \leq x]$$

Now, $F$ is monotone increasing function of $x$ since it is a cumulative distribution function that sums up probabilities. Hence, $a \leq  b \to F(a) \leq F(b)$. Therefore

$$P[F^{-1}(U) \leq x] = P\Bigg[F\Big(F^{-1}(U)\Big) \leq F(x)\Bigg] = P[U \leq F(x)]$$

This is the probability that a uniform random number between $0$ and $1$ (so, a probability value) is less or equal to $F(x)$ and, since $F(x)$ is a cumulative distribution function of a uniformly distributed random variable, we have that

$$P[U \leq F(x)] = F(x)$$

Concluding,

$$F_X(x) = F(x)$$

-----

#### Exponential Random Variable
Suppose to have a continuous random variable having probability density function

$$f(x) = \lambda \cdot e^{-\lambda x}, \quad 0 < x < \infty$$

for some $\lambda > 0$ is said to be an **exponential random variable** with parameter $\lambda$, which it is interpreted as a **rate**.

Is it easy to verify that the expected value and variance of such a random variable are as follows:

Expected Value $\mathbb{E}[X] = \frac{1}{\lambda}$.<br />
Variance $Var[X] = \frac{1}{\lambda^2}$

$\lambda$ is the value that we expect from a phenomenon that assumes low values with much higher probability than high values. Hence, the probability of this phenomenon decreases exponentially.

The cumulative distribution function of an exponential random variable is given by

$$F(x) = \int_{0}^{x}{\lambda e^{-\lambda z}dz} = 1 - e^{-\lambda x}, \quad 0 < x < \infty$$

![[ExponentialRandomVariable.png]]

**Claim**:<br />
This random variable is very useful to model the lifetime of an object or, in general, breakdowns of machines due to the **memoryless property**, that is, the probability $P[X > s + t | X > s] = P[X > t]$, where $s + t$ are constants. To understand why the above is called the memoryless property, imagine that $X$ represents the lifetime of some unit, and consider the probability that a unit of age $s$ will survive an additional time $t$. This property is telling that the probability that a machine breaks down after, for example, $15$ minutes knowing that no breakdown occurred for the first $10$ minutes equals the probability that the machine will break down in $5$ minutes.

**Proof**:

$$\text{Knowing that } P[A \vert B] = \frac{P[A \cap B]}{P[B]}\text{, is it possible to obtain }$$
$$P[X > s + t \vert X > s] = \underbrace{\frac{P[X > s + t \wedge X > s]}{P[X > s]}}_{P[X > t]} = \frac{P[X > s + t]}{P[X > s]}$$

It is known that

$$P[X>s+t] = e^{-\lambda(s+t)}$$

since $P[X < s + t] = 1 - e^{-\lambda(s+t)}$ and, therefore, $P[X>s+t] = 1 - (1 - e^{-\lambda(s+t)})$. Furthermore

$$P[X>s] = e^{-\lambda(s)}$$

From this point, it is possible to derive that

$$\frac{P[X>s+t]}{P[X>s]} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda(s)}} =$$
$$= e^{-\lambda(t)}= P[X>t]$$

Therefore

$$\underbrace{P[X > s + t] = P[X > t] \cdot P[X > s]}_{\text{Rearrangement of the memoryless property}}$$

Let's see if the cumulative distribution function of the exponential fits this claim. We can write $P[X > s + t]$ as $1 - F_X(s + t)$:

$$\underbrace{1 - F_X(s + t)}_{1 - (1 - e^{-\lambda x})} = [1 - F(t)] [1 - F(s)] = $$
$$e^{- \lambda (s + t)} = e^{-\lambda t} e ^{- \lambda s}$$

Now, let's look at it in reverse: which are the cumulative distribution functions that, once plugged in in this definition, satisfy this equality? In other terms, which are the other random variables which satisfy the definition of being memoryless?

The exponential random variable are the only ones having this memoryless property since the product of two exponentials is the exponential of the sum. Whenever we have this phenomenon, like an independent arrival or anything else, then the length of this observation must be an exponential random variable.

Another useful property of exponential random variables is that they remain exponential when multiplied by a positive constant.

**Claim**:<br />
Let $X$ be am exponential random variable of parameter $\lambda$, then $c \cdot X$ is an exponential random variable of parameter $\frac{\lambda}{c}$.

**Proof**: 

$$P[Y \leq x] = P[c\cdot X \leq x] = P[X \leq \frac{x}{c}] = 1 - e^{- \lambda \cdot \frac{x}{c}} = 1 - e^{- \frac{\lambda}{c} \cdot x}$$

**Claim**:<br />
Let $X_1, \dots, X_n$ be a set of independent exponential random variables of rate $\lambda_i$ for $i = 1, \dots, n$. Then, the minimum $\min\{X_1, \dots, X_n\}$ is, again, an exponential random variable with rate $\sum_{i = 1}^{n} \lambda_i$, independently on which $X_i$ is the smallest.

This is kinda the counterpart of the property of Poisson random variables of being invariant to aggregation and disaggregation.

**Proof**:<br />
Let the random variable $M$ be the minimum $\min\{X_1, \dots, X_n\}$. Knowing which of these random variables is the smallest does not give us further structure on the understanding of the phenomenon. Let 

$$Y_j = \cases{1 \quad \text{ if } X_j \text{ is minimum} \cr \cr 0 \quad \text{ otherwise}}$$

Now we will prove them to be independent. Firstly, suppose that each random variable exceeds a constant value $t$ and consider $P[Y_j \vert M > t]$. This is equal to $P[X_j - t = \min_{i}\{X_i - t\} \vert M > t]$. We are subtracting a constat to each term of the definition. This is equal to $P[X_j - t = \min_i\{X_i - t \}\vert X_i > t \space \forall i]$. Here we just switched from $M$ to the definition of minimum. We can now remove $t$ from the equality:

$$P[X_j = \min_i\{X_i - t\}] = P[X_j = \min_i\{X_i\}] = P[Y_j]$$

The final equalities follow because, by the memoryless property of exponential random variables, given that $X_i$ exceeds $t$, the amount by which it exceeds it is exponential with rate $\lambda_i$. Consequently, the conditional distribution of $X_1−t, \dots, X_n−t$ given that all the $X_i$ exceed $t$ is the same as the unconditional distribution of $X_1, \dots, X_n$. The probability that one of them is the minimum is determined solely by their respective rates $\lambda_i$​. Therefore, even conditioned on $M>t$, the probability that $X_j$​ is the minimum remains the same as in the absence of the condition $M>t$. Thus, $M$ is independent of which of the $X_i$ is the smallest.

As second step, let's look at $P[M > t]$. This is equal to $P[X_i > t \space \forall i] = \prod_i P[X_i > t]$ since these random variables are independent. Hence, this is equal to $\prod_i (1 - F(t))$ and to $\prod_i e^{-\lambda_i t} = e^{-(\sum_i \lambda_i) t}$.  Therefore, the distribution of $M$ is exponential with rate $\sum_i \lambda_i$.

**Claim**:<br />
The probability of $X_j$ being the smallest is $P[X_j = M] = \frac{\lambda_j}{\sum_i \lambda_i}$. Taking as an example the pharmacy exercise, the probability of the next customer to wear a red hat is the ratio between the rate of red hats and the sum of the rates of all the hats. Therefore, the probability of the next event of being of a particular type is proportional to the rate of that particular type.

How to generate an exponential random variable of parameter $\lambda$? A first approach is again the Inverse Transform method. It is known that $F(x) = 1 - e^{-\lambda x}$, so the inverse of this function must be computed:

$$u = 1 - e^{-\lambda x}$$
$$1 - u = e^{-\lambda x}$$
$$\log(1 - u) = -\lambda x$$
$$x = - \frac{\log(1 - u)}{\lambda}$$

```pseudo
	\begin{algorithm}
	\caption{Generating an Exponential Random Variable}
	\begin{algorithmic}
		\State u = random($0$, $1$)
		\State $x = - \frac{\log(1 - u)}{\lambda}$
		\State return x
	\end{algorithmic}
	\end{algorithm}
```

-----

#### Normal Random Variable
This random variable is famous for the shape of its probability density function. In fact, its distribution resembles a bell. The normal random variables are parameterized by two parameters, $\mu$ and $\sigma$. $\mu$ is giving the center of the bell and $\sigma$ is giving the width of the bell. 

![[NormalRandomVariable.png]]

Its probability density function is

$$f(x) = \frac{1}{\sqrt{2 \pi \sigma^2}} \cdot e^{-\frac{(x - \mu)^2}{2 \sigma^2}}$$

The expected value of this random variable $\mathbb{E}[X] = \mu$ while its variance $Var[X] = \sigma^2$.

It is possible to express the cumulative distribution function of this random variable in terms of its $\Phi$ function:

$$F(x) = \Phi \Big( \frac{x - \mu}{\sigma^2} \Big)$$

where 

$$\Phi(x) = \frac{1}{\sqrt{2 \pi}} \int_{- \infty}^x e^{-z^2 / 2} dz$$

A kind of normalization is done in $\Phi$. In other terms, $\Phi(x)$ could be seen as the cumulative distribution function of a normal random variable having expected value $0$ and variance $1$.

As for the exponential, we have properties guiding our modeling.<br />
First of all, the function $\Phi$ cannot be expressed using only additions, subtractions, multiplications and root extractions. Thus is necessary a numerical approximation. 

If $X$ is normally distributed with parameters $\mu$ and $\sigma^2$, $Z = aX + b$ is normally distributed with parameters $a\mu + b$ and $a^2 \sigma^2$.

Also, $\Phi$ is not an invertible function: therefore, in term of creating an algorithm for producing valid values for normal random variables, it is not possible to apply the Inverse Transform technique and it is necessary to use other algorithm design techniques.

##### Central Limit Theorem
Let $X_1, \dots, X_n$ be a sequence of $n$ indipendent and identically distributed random variables having finite expected value $\mu$ and variance $\sigma^2$.

$$\lim_{n \to \infty} P\Bigg[\frac{\sum_{i = 1}^{n}X_i - n \cdot \mu}{\sigma \sqrt{n}} < x\Bigg] = \Phi(x)$$

that is, the sum of a large number of independent random variables is a normally distributed random variable (indipendently on the distribution of the starting ones). In other terms, the probability of finding this sum to be different from $n$ times the expected value is not only decreasing (as in the law of large numbers) but the error we get has a particular distribution: it is always distributed as a normal random variable.

-----

## Composition method
The **Composition method** can be applied if a random variable $X$ needs to be generated with cumulative distribution function equal to $F()$, where $F()$ can be expressed as a case function such that: 

$$F(x) = \sum_{i=1}^n \alpha_i \cdot F_i(x) \space \text{ with } \space \sum_{i=1}^n \alpha_i = 1$$

In other words, this means that $F()$ can be decomposed as a convex linear combination of a set of $F_i$ functions (the weights must sum up to $1$). It is possible to notice that the constraint that $\sum_{i=1}^n \alpha_i = 1$ is similar to the constraint of probabilities. So we can find $F(x)$ as:

$$F(x) = \begin{cases} 
F_1(x) \text{ with probability }\alpha_1 \cr \cr
F_2(x) \text{ with probability }\alpha_2\cr \cr
...\cr \cr
F_n(x) \text{ with probability }\alpha_n\cr

\end{cases}$$

Given this hypothesis, it is possible to generate a random value in this distribution by: 
- first generating a random value $j$  in the range from $1$ to $n$ with each value $i$ having the probability $\alpha_i$;
- then we draw a random value from the selected function $F_j$.

The value obtained in this way is distributed according to $F()$.

**Proof**:<br />
By following this process, the resulting $F(x)$ is defined as:

$$F(x) = P[X \leq x] = \sum_{j=1}^n P[X \leq x | J= j]\cdot P[J=j]$$

Since $j$ is extracted with probability defined by $\alpha$, it is easy to notice that this is equal to

$$\sum_{j=1}^n P[X \leq x | J= j]\cdot \alpha_j = \sum_j \alpha_j F_j(x)$$
$\square$

An example of use of the Composition technique. Let's consider a triangular distribution.

![[TriangularDistribution.jpg]]

>[!Note]
>From a modelling point of view, the triangular distribution does not have the nice properties of the normal, but what can make it an appealing choice is that we have full control of the range: in fact the probability of generating numbers greater than $1$ or lower than $-1$ is $0$, while the range of a normal is $\mathbb{R}$. Notice that an obvious solution would be truncating and re-scaling the normal, but that would also mean losing the nice properties of the normal.

$f(x)$, analytically speaking, can be defined by cases, that is

$$f(x) = \begin{cases}
x+1 \space\space & -1\leq x < 0\\
-x+1 \space\space &0\leq x \leq 1\\
0 \space\space & \text{elsewhere}
\end{cases}$$

so the two cases for $F(x)$ are:

$$ F(x) = \begin{cases}
0 & x <-1\\
\frac{x^2}{2}+x+\frac{1}{2} & -1\leq x < 0\\
\frac{-x^2}{2}+x+\frac{1}{2} & 0 \leq x \leq 1
\end{cases}$$

$$ F(x) = \begin{cases}
F_1(x)=\frac{x^2}{2}+x+\frac{1}{2} & \alpha_1=0.5\\
F_2(x)=\frac{-x^2}{2}+x+\frac{1}{2} & \alpha_2=0.5\\
\end{cases}$$

The first step of the algorithm is trivial. Let's imagine that $F_1$ is extracted: after we define the $F_i$, we need to calculate the Inverse Transform:

$$y =\frac{x^2}{2}+x+\frac{1}{2} \rightarrow y = \frac{(x+1)^2 }{2} \rightarrow 2y = (x+1)^2$$

Both members are always positive, so

$$\rightarrow \sqrt{2y} = x + 1 \rightarrow x = \sqrt{2y}-1 = F_1^{-1}$$

so, as usual, we draw a uniform random value between $0$ and $1$ and use it as argument of the Inverse Function.

```pseudo
	\begin{algorithm}
	\caption{Algo Caption}
	\begin{algorithmic}
		\State u = random()
		\State j = discreteRV($0.5$,$0.5$)
		\If{j == 1}
			\State return inv$F_1(u)$
		\Else
		\State return $invF_2(u)$
		\EndIf
	\end{algorithmic}
	\end{algorithm}
```

-----
## Acceptance-rejection method
Sadly, seeing the normal random variable as a composition of two distribution does not help since the two are still not invertible.

Say we have a random variable $X$ that needs to be generated with probability density function $f(x)$ and its cumulative distribution function is not invertible. Suppose we also have another random variable $Y$ that is easy to generate (for instance, its cumulative distribution function is invertible) and with probability density function $g(y)$. It is also known that $f(y)/g(y) \leq c \space\space \forall y$. That is, $f(y)$ is at most $c$ times $g(y) \space \forall(y)$. 

In order to generate valid values for $X$, we can follow this procedure:
- generate a value $y$ for $Y$ (having probability density function $g(y)$);
- generate a value $u$ for a uniformly distributed random variable $U$ in the range $[0, 1]$;
- if $u \leq \frac{f(y)}{c\cdot g(y)}$, then output $X = y$;
- otherwise iterate.

![[AcceptanceRejection.png]]

This not only generates a random variable with probability density function $f(x)$ $\fbox{a}$, but also does that in a number of iteration that follows a geometric random variable with expected value $c$ $\fbox{b}$.

If $X$ follows a normal distribution, then a good distribution for $Y$ is an exponential.

### Proof $\fbox{b}$

>[!Observation]
>$P[Y=y \land \text{is accepted}] = P[Y=y]\cdot P[\text{accepted }|Y=y]$ because the acceptance step depends on the value $Y$. Since $P[Y=y] = g(y)$ and $P[\text{accepted }| Y=y] = \frac{f(y)}{c \cdot g(y)}$ (since we draw a random number between $0$ and $1$ and the probability of being accepted is the probability of it being less or equal that this ratio) we can rewrite it as:
>$g(y) \cdot \frac{f(y)}{c \cdot g(y)} = \frac{f(y)}{c}$
>

If $Y$ was discrete we could write $P[accepted] = \sum_{y \in Y}  \frac{f(y)}{c}$, since $\frac{f(y)}{c}$ is the probability of a specific $y$ being accepted and the probability of being accepted in general is the sum over every possible value of $y$.<br />
Since $Y$ is continuous:

$$P[accepted] = \int_{-\infty}^{+\infty} \frac{f(y)}{c} dy = \frac{1}{c} \int_{-\infty}^{+\infty} f(y) dy = \frac{1}{c}$$

The probability of being accepted at each iteration is, therefore, a constant. Since we are interested in the first success, that is, in the first value of $y$ that has been accepted, we are in the setting of the geometric random variable. The expected value of a geometric random variable of parameter $p$ is $\mathbb{E}[X] = 1/p$ and in this case $p = 1/c$: hence, it is obvious that the expected value of the number of iterations is $\frac{1}{1/c}$ and, therefore, $c$.

In the image below, it is possible to observe the structure of the algorithm and notice that this structure follows exactly the geometric random variable's behaviour.

![[Acceptance-RejectionGeometricRandomVariable.png]]

### Proof $\fbox{a}$
We now want to demonstrate that we obtain a random variable with probability density function $f(x)$. $P[X=x] = \sum_{i=1}^{+\infty} P[\text{x accepted at iteration i}]$ but being accepted at iteration $i$ means not being accepted in all iteration until $i$ and then getting accepted at iteration $i$.

$$= \sum_{i=1}^\infty (1-\frac{1}{c})^{i-1} \frac{1}{c} f(x) = \frac{1}{c} f(x) \sum_{i=1}^\infty (1-\frac{1}{c})^{i-1}$$

Remembering that $\sum_{i=0}^\infty q^n \rightarrow \frac{1}{1-q}$, we can apply to $\sum_{i=1} (1-\frac{1}{c})^{i-1}$ by substituting $j=i-1$ and $q= 1-\frac{1}{c}$ and obtain $\sum_{j=0}^\infty q^j \rightarrow \frac{1}{1-q} = \frac{1}{1-(1-1/c)} = c$. So going back to the original  equation:

$$\frac{1}{c} f(x) \sum_{i=1}^\infty (1-\frac{1}{c})^{i-1} = \frac{1}{c} f(x) \cdot c = f(x)$$

-----

### Acceptance-rejection for a Normal Random Variable
Remember that to generate a valid value for every normal random variable is enough to generate a valid value for a normal random variable with $\mu = 0$ and $\sigma^2 = 1$ and then simply shift and rescale.
For half a normal random variable with $\mu = 0$ and $\sigma^2 = 1$, $f(x) = \frac{2}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}$. We then define $g(x)$ as an exponential random variable of parameter $\lambda = 1$, with $g(x) = e^{-x}$ and $h(x) = \frac{f(x)}{g(x)} = \frac{2}{\sqrt{2\pi}}e^{x-x^2/2}$ .
To find the maximum of $h(x)$, we derive it and obtain $\frac{2}{\sqrt{2\pi}} e^{x-x^2/2} (1-x)$ that is equal to $0$ in $x=1$, that is a maximum but we'll not prove it. We set $c = h(1) = \frac{2}{\sqrt{2\pi}}e^{1/2}$ since that is the maximum distance between $f$ and $g$.

![[HalfNormalAndExponential.png]]

To obtain a normal, we first need to define

$$F_{normal}(x) = \frac{1}{2}F^+_{normal}(x)+\frac{1}{2}F^-_{normal}(x)$$
$$F_{normal}(x) = \begin{cases}
F^+_{normal}(x) & p^+ = 0.5\cr \cr
F^-_{normal}(x) & p^- = 0.5
\end{cases}$$

The process of generating a normal is then defined as:

```python
def genNormal():
	u = random()
	if u <= 0.5:
		return genHalfNormal()
	else:
		return -genHalfNormal()
```


```python
def genHalfNormal():
	while True:
		y = genExp()
		u = random()
		if u*c <= 2/sqrt(2*pi) * e**(y - y**2/2):
			return y
```

-------------------------------------------------------------
## Poisson processes
Suppose that events are occurring at random time points. These events are said to constitute a **Poisson Process** having rate $\lambda$ if:
- events are occurring at random time points;
- $N(t)$ is the number of events in the interval $[0, t]$;
- $N(0) = 0$ (process begins at time $0$);
- the number of events in disjoint time intervals are independent (**independent increment assumption**);

![[IndependentIncrementAssumtpion.png]]

- the probability density function of the number of events in a given interval depend only on its length, not on its position (**stationary increment assumption**);
- $\lim_{h \to 0} \frac{P[N(h) = 1]}{h} = \lambda$ (in small intervals, the probability of an event to occur is approximately $h\lambda$);
- $\lim_{h \to 0} \frac{P[N(h) \geq 2]}{h} = 0$ (it is unlikely that two or more events occur in small intervals).

**Claim**:<br />
If a process satisfies the previous conditions, then $N(t)$ is a Poisson random variable with expected value $t\lambda$.

**Proof**:<br />
Recall that $N(t)$ is the number of events in $[0, t]$. Let's take the slot between $0$ and $t$ and split it into $n$ slots of equal length $t/n$. Now, let's consider one of them and assume $n$ to be large enough: then we are in the case of a small interval. Therefore, $P[N(t/n) \geq 2] \to 0$ and $P[N(t/n) = 1]  \to \frac{t}{n} \cdot \lambda = p$. We made this reasoning for only one of these slots but if we look at the number of events in this joint time interval, we can do the analysis independently, due to the independent increment assumption. Even more, for the stationary increment assumption, we know that the result of the analysis on each slot will be the same since they have the same length. Therefore, we will have $n$ copies of the first analysis.

![[NSlotsPP.png]]

We want to count the number of slots containing an event. This is a binomial random variable of parameter $p$. What happens to a binomial random variable when $n$ is very large and $p = \frac{t}{n} \lambda$ is very small? This random variable becomes a Poisson one of parameter $n \cdot p = \cancel{n} \cdot \frac{t}{\cancel{n}} \cdot \lambda = t \cdot \lambda$.

Furthermore, the interarrival times (the times in between one event and the next one) are independent and identically distributed exponential random variables with parameter $\lambda$.

**Proof**:<br />
Let's call $X_i$ to be the time between event #$i -1$ and event #$i$. This random quantity is the interarrival time. Indeed, the $X_i$ random variable, that is, the time in between two events defines time slots, which are disjoint. Since disjoint time intervals are independent, these variables also are.
We also know that the number of events depends only on the length of the interval, so these random variables are independent and also identically distributed: in fact if we take intervals of the same length, we have the same probability of finding events in them. Therefore, their probability density function is the same. Now we make an assumption: $X_i$ is an exponential random variable.

Let's be more formal. Consider $P[X_1 > t]$, that is, the probability of the arrival time of the first event to be greater than $t$. This is equal to not finding events up to $t$: $P[N(t) = 0]$. Since $N(t)$ is a Poisson random variable of parameter $\lambda t$, we know that $P[X = 0] = e^{- \lambda t} \frac{(\lambda t)^0}{0!} =e^{- \lambda t}$. This is indeed exponential. Therefore, $P[X_1 \leq t] = 1 - e^{- \lambda t}$, which is a cumulative distribution function of an exponential. Hence, the arrival time of the first event is an exponential random variable. Now, let's take $P[X_i > s + t \vert X_{i - 1} = s] = P\Big[\emptyset \text{ events in } [s, s + t] \vert X_{i - 1} = s\Big]$. Again we are in the setting of counting the number of events in a certain slot but the number of events in this slot is independent on what happened before. Hence, this is equal to $P\Big[\emptyset \text{ events in } [s, s + t]\Big] = P\Big[\emptyset \text{ events in } [0,t]\Big] =$ $P[N(t) = 0] = e^{-\lambda t} \frac{(\lambda t)^0}{0!} = e^{- \lambda t}$, which is again exponential.

Let's define a gamma random variable of parameter $n$, $\lambda$ to be a continuous random variable having the following probability distribution function:

$$f(t) = \lambda e^{- \lambda t} \frac{(\lambda t)^{n -1}}{(n - 1)!}$$

These gamma random variables are the continuous counterparts of a specific type of discrete random variables: the sum of $n$ independent exponential random variables, each having parameter $\lambda$, is a gamma random variable with parameters $n$, $\lambda$. Furthermore, the time of the $n$-th event of a Poisson process having rate $\lambda$ is a gamma random variable with parameters $n$, $\lambda$.

How can we simulate a Poisson Process? A discrete event approach is to generate the first interesting event, which is the first event in the process, and to generate this event we draw a value from an exponential random variable, which is the interarrival time.

Another possible ways to simulate a Poisson Process of parameter $\lambda$ for a time horizon $T$ consists in the following steps:
- we generate a value $n$ drawing it from a Poisson random variable of parameter $T \lambda$. That is, we draw the number of events we will see in the process up to time $T$.
- them, we draw $n$ random numbers $u_1, \dots, u_n$ from a uniform distribution in $[0, 1]$. Since they are random, they are not properly sorted: therefore, it is necessary to sort them to have consequential arrival times;
- we set the arrival times as $u_1 T, u_2 T, \dots u_n T$. This is equivalent to drawing interarrival times through exponential random variables.

Is it true that this algorithm is producing a valid Poisson process? What is giving the structure is only the generation of $n$.

**Proof**:<br />
Let's define $N(t)$ to be the number of values of $\{u_1 T, u_2 T, \dots u_n T\}$, which are $\leq t$. We will pretend this $N(t)$ to be a random variable of unknown structure and we want to prove that $N(t)$ is actually defining a Poisson process. We define $I_1, \dots I_r$, which are $r$ disjoint intervals in the range $[0, T]$. An event is of type $k$ if it falls inside $I_k$ and an event is of type $r + 1$ if it falls outside of any $I_k$. Now, let $p_1, \dots, p_{r +1}$ be the probabilities of being in $I_1, \dots, I_r$ or of type $r + 1$. These probabilities, however, since we have drawn the $n$ points uniformly at random, depend on the length of this interval and not on its position. So $p_i = \frac{\vert I_i \vert}{T}$, that is the length of the interval divided by $T$. Hence, $p_{r + 1} = 1 - \sum_{k=1}^{r}p_k$.

Recalling that $I_1, \dots I_r$ are disjoint and that, therefore, the events are independently classified, we now can check the conditions of a Poisson process:
- events are occuring at random time points since they are chosen uniformly at random; 
- $N(t)$ is the number of events in the interval $[0, t]$ for definition;
- $N(0) = 0$ (process begins at time $0$);
- the number of events in disjoint time intervals are independent (**independent increment assumption**);
- the probability density function of the number of events in a given interval depend only on its length, not on its position (**stationary increment assumption**) $\to p_i = \frac{\vert I_i \vert}{T}$;
- $\lim_{h \to 0} \frac{P[N(h) = 1]}{h} = \lambda$ (in small intervals, the probability of an event to occur is approximately $h\lambda$);
- $\lim_{h \to 0} \frac{P[N(h) \geq 2]}{h} = 0$ (it is unlikely that two or more events occur in small intervals).

### Nonhomogeneous Poisson Processes
The stationary increment assumption is the strictest of these assumptions. We can relax this one with **Nonhomogeneous Poisson Processes**. In this kind of process, instead of using $\lambda$ as a fixed **intensity** over the time horizon, we have $\lambda(t)$ that is the intensity at time $t$. This is a function telling how likely an event will occurr around some time $t$.

As a result where we would use $\lambda$ we instead use $\lambda(t)$:

$$\lim_{h\to 0} \frac{P[N(h)=1]}{h} = \lambda(t)$$

This means that, in small intervals, the probability of an event to occur is approximately $h\lambda(t)$.

This is a common behavior, e.g., in mobile networks, where the arrival of packets during the day is not constant but instead is very high during certain hours and low during the night.

How can we define this intensity when we model? The definition of $\lambda(t)$ is up to the modeler. One possible interpretation is that if $\bar{p}(t)$ is the probability that an event occurring at time $t$ in a Poisson process with parameter $\lambda$ is discarded (e.g., the customer of the pharmacy, at the point of coming in, decides to go away) and $p(t)=1-\bar p(t)$, then the process involving the non discarded events is a non-homogeneous Poisson Process with intensity $\lambda(t) = \lambda \cdot p(t)$.

In the example below, some of the events are discarded.

![[Diagram.svg]]

Obviously this kind of model are harder to model since it's necessary to have an estimate of $\lambda(t)$, to do so a solution is discretize the behavior observed in real world. I can use Poisson process to simulating and modeling these systems: it is enough to represent the intensity of the Poisson process by replicating this demand profile. In particular, we model it as if the intensity is always at the highest level but, sometimes, we drop some packets.

![[NonHomogeneousPoissonProcess.png]]

**Claim**:<br />
If we have an homogeneous Poisson Process of intensity $\lambda$ and accept an event with probability $p(t)$, we obtain a non homogeneous Poisson Process of parameter $\lambda(t) = \lambda \cdot p(t)$.

**Proof**:<br />
- events are occurring at random time points $\to$ true, because the selection is also a random process;
- $N(t)$ is the number of events in the interval $[0,t]$ $\to$ this is only a definition;
- $N(0) = 0$ (process begins at time $0$) $\to$ true, because nonomogeneous Poisson processes can't have more events than homogeneous ones. So, if it holds that $N(0) = 0$ in an homogeneous Poisson process, it also holds for a nonhomogeneous one;
- the number of events in disjoint time intervals are independent (**independent increment assumption**) $\to$ true, because the events in Poisson processes are independent and the dropping is performed randomly and independently, one by one;
- $\lambda(t)$ is the intensity at time $t$ (how likely an event will occurr at time $t$);
- $\lim_{h\to 0} \frac{P[N(h)=1]}{h} = \lambda(t)$ (in small intervals, the probability of an event to occur is approximately $h\lambda(t)$) $\to$ proved below;
- $\lim_{h\to 0} \frac{P[N(h)\geq 2]}{h} = 0$ $\to$ true, because was true before and we are not adding new events (at most this is a Poisson process) so the probability cannot increase.

**Proof**:

$$\begin{align}
&P[\text{finding an event in }[t,t+h]&\land \space &\text{ not discarding it}] = \\
=\space & P[\text{find one event in }[t,t+h]]&\cdot \space & P[\text{not discarding}] =\\
= \space& \lambda \cdot h & \cdot \space &p(t)
\end{align}$$

and therefore:

$$
\begin{align}
&\lim_{h\to 0} \frac{P[\text{finding an event in } [t,t+h] \text{ and not discarding it}]}{h}=\\
=&\lim_{h\to 0} \frac{h\cdot \lambda}{h} p(t) = \lambda p(t) = \lambda(t) \\ &&\square
\end{align}$$

-----

## Copulas
So far we have always discussed the generation of a single or multiple observation but always from a single random value. What if we want to observe multiple random variables at once and those random variables are not independent one another?

An easy way to generate them is to know the probability distribution and also the joint probability cumulative distribution function for common set of variables. Often this is not easy to implement because we don't know this distribution or it's not easy to extract it from an algorithm midway. That's where copulas become the best alternative.

First of all, if we have a joint distribution of two variables $X$ and $Y$, the **marginal distribution** of $X$ is obtained by integrating out $Y$ (if it's continuous) or summing over $Y$ (if it's discrete).

A **copula** is a joint probability distribution $C(x,y)$ with both marginal distributions being uniformly distributed in $(0,1)$:

$$\begin{align}
&C(0,0)= 0\\
&C(x,1) = x\\
&C(1,y) = y\\
\end{align}$$

For example, we want to use this copula to represent another joint probability distribution function $H(x,y)$ for the random variables $X$ and $Y$ whose marginal distributions are known to be respectively the continuous cumulative distribution functions $F()$ and $G()$:

$$H(x,y) = P[X\leq x, Y \leq y]$$

Because $X$ has cumulative distribution $F()$ and $Y$ has distribution $G()$, it follows that $F(X)$ and $G(Y)$ are both uniform on $(0, 1)$, since cumulative distribution functions map random variables to uniform distribution. Consequently, the joint distribution function of $F(X)$, $G(Y)$ is a copula. Since the cumulative distribution function is a monotone function, we can apply it at both sides of the inequalities. What we get is a probability of finding some cumulative distribution function less or equal to certain value for both arguments.

$$P[F(X)\leq F(x), G(Y) \leq G(y)] = C(F(x),G(y))$$

So, this copula is the joint probability on the distribution of these values: not $X$ and $Y$ but $F(X)$ and $G(Y)$.

In other words: we know both $F(X)$ and $G(Y)$ but not their joint cumulative distribution function $H(X,Y)$, only that they are not independent. 

The advantages of copulas are that we can define some specific types of copulas that can afterwards be applied not to a specific cumulative distribution function but to any cumulative distribution function and are able to produce pairs of values that maybe are not exactly as pairs of values thrown from a joint cumulative distribution of the two random variables but preserve some properties.

To generate pairs of meaningful values we first generate values for the copula, then apply the inverse transform method to get values of the original distributions.

Different types of copulas model different types of dependencies between variables. If we think $X$ and $Y$ to have linear correlation $\rho$, the values generated by the copula should have linear correlation (approximately) $\rho$ (not implying linear correlation $\rho$ between $F(X)$ and $G(Y)$). For example:
- **Gaussian copula** $\to$ basically is a joint normal distribution, good to model variables with a known correlation between them;
- **Marshall-Olkin copula** $\to$ good to model chain dependencies.

### Gaussian Copula
Let's consider two random variables $X$ and $Y$ that have known linear correlation $\rho$ and known cumulative distribution functions. We also know that these distribution functions are invertible. We generate a pair of values $Z = (z_1, z_2)$ from a **bivariate norma**l (a probability distribution used to model two random variables that may be correlated with each other) with the same correlation $\rho$. Then we obtain pairs of random uniform values correlated among them by computing $U= (u_1,u_2) = (\Phi(z_1), \Phi(z_2))$. These two uniform random variables are still correlated and then are used to obtain a random couple of observations for the original random variables apply independently the inverse of their cumulative distribution function:

$$R=(F^{-1}(u_1), G^{-1}(u_2))$$

The couple generated has the same correlation value of the variables $X$ and $Y$.

We can now prove a result that broadens the scope of this copula.

**Claim**:<br />
Say $C_{X,Y} (x,y)$ to be the copula generated by $X,Y$ and $s(x),t(y)$ to be an arbitrary increasing function of $x$ and $y$. Then $C_{s(X),t(Y)}(x,y) = C_{X,Y}(x,y)$.

**Proof**:<br />

$$\begin{align}
&X \rightarrow \text{cumulative distribution function} \space F\\
&Y \rightarrow \text{cumulative distribution function} \space G\\
&s(X) \rightarrow \text{cumulative distribution function} \space F_s\\
&t(Y) \rightarrow \text{cumulative distribution function} \space G_t\\
\\
&F_s(x) = P[s(X) \leq x] =  && \text{ since s is increasing}\\
&= P[X \leq s^{-1}(x)] = F(s^{-1}(x))
\end{align}$$

For the same reasoning, it holds that $G_t(y) = G(t^{-1}(y))$. However, $F_s(s(x)) = F(s^{-1}(s(x))) = F(x)$ and $G_t(t(y)) = G(t^{-1}(t(y))) = G(y)$, so:

$$C_{s(X),t(Y)}(x, y) = P[F_s(s(X)) \leq x, G_t(t(Y)) \leq y] = P[F(X)\leq x, G(Y) \leq y] = C_{X,Y}(x,y)$$
$\square$

The result broadens the scope of the copula because it shows that the dependence structure captured by a copula remains invariant under arbitrary increasing transformations of the random variables involved. In other words, **the copula is unchanged by monotonic (increasing) transformations of the random variables**.

Let's observe some code for using these copulas. This algorithm is for generating pairs of values for random variables having cumulative distribution function $F$ and $G$ and some correlation among them of value $\rho$ using the idea of the Gaussian copula.

```python
def generate_gaussian_copula(invF, invG, rho):
	
	z1 = gen_normal()
	z2 = gen_normal()
	v1 = math.sqrt((1 + rho) / 2)
	v2 = math.sqrt((1 - rho) / 2)
	y1 = v1 * z1 + v2 * z2
	y2 = v1 * z1 - v2 * z2
	
	x1 = invF(phi(y1))
	x2 = invG(phi(y2))
	
	return x1, x2
	

def invExp(x)
	return - math.log(x)

q1, q2 = generate_gaussian_copula(invExp, invUnif, 0.7)
```

The first block of code of the _generate_gaussian_copula_ function generates two values, $y1$ and $y2$, from a multivariate (technically a bivariate) normal distribution in which the two cordinates have correlation $\rho$. Then the algorithm moves from the values to the probabilities mapping the values to a uniform distribution and uses these probabilities as they were the outputs of a random generator.

Let's define the multivariate normal. If we look at $X_1$ and $X_2$ independently, they will look like bell shaped distribution.

![[MultivariateNormal.png]]

When we look at both the distributions together, we see probability level curves. Each curve identifies the same probability value. They could also look like the second graph above. So, if we look at specific values for $X_1$, they indeed have the shape of a normal but it's not the same one. So the value of one is affected by the value of the other.

If we look at projections, single dimensions, etc., of these bivariate normals, they will still look normal. However, they will be shifted, scaled or combined depending one on the value of the other. In fact, we can define the coordinates in a normal as a combination of other indipendent and identically distributed normal random variables having mean $\mu =0$ and variance $\sigma^2 = 1$. That is, suppose to have $X_1$, $X_2$, $\dots$, $X_n$:

$$X_1 = a_{11}Z_1 + a_{12}Z_2 + \dots + a_{1n}Z_n + \mu_1$$
$$X_2 = a_{21}Z_1 + a_{22}Z_2 + \dots + a_{2n}Z_n + \mu_2$$
$$\dots$$
$$X_n = a_{n1}Z_1 + a_{n2}Z_2 + \dots + a_{nn}Z_n + \mu_n$$

Each single normal random variable $Z_i$ of them can be generated and we have already seen how.

Now, we can generate a random vector of $n$ values from a multivariate normal distribution. It is enough to generate the $n$ values for the $Z_i$ and then combining them accordingly to these coefficients. At this point, it is possible to return this vector in our copula for generating random vector not of all normal but from different marginal distributions.

The point is in finding these $a_{ii}$ in order to obtain specific relations between the components of this vector. For instance, we may wish to generate a vector in which the first two components have a correlation of $0.65$. In the computation in these $a$ values, we combine linearly independent random variables of expected value $\mu = 0$ and we get another random variable with expected value $\mu = 0$. We are also allowed to add some constants $\mu_i$ to each row to change the expected value of the random variable $X_i$ (because we sum $n$ times $0$ and one time $\mu_i$). 

What about the covariance $Cov(X_i, X_j)$? This is defined as 

$$Cov(X_i, X_j) = \sum_{k = 1}^{n} a_{ik}a_{jk} = c_{ij}$$
$$Var[X_i] = \sum_{k = 1}^{n} a_{ik}^2$$

If we discover the values of $a_{ii}$, we can find both the covariance and the variance. Let's exploit this idea backwards: if we are given a target covariance between $X_i$ and $X_j$ (which is like being given a target correlation) and a target variance for each of them, we are able to find the values of $a_{ii}$ producing such covariance and variance.

So, given a target covariance matrix $C$ (composed by $c_{ij}$), we are able to produce another matrix $A$ having these properties. We just need to solve a system of equations. One method to do so is to use the Cholesky's decomposition, that is, to find $C$ as the product between the matrix $A$ and its transposed:

$$C = A A^{\top}$$
$$A = \begin{bmatrix} a_{11} & \emptyset \\ a_{21} & r_{22} \end{bmatrix}$$

We need to solve basically 

$$A \cdot A^{\top} = \begin{bmatrix} \sigma^2_1 & c \\ c & \sigma^2_2 \end{bmatrix}$$

In the bivariate case, we can solve it analitically

$$A = \begin{bmatrix} \sigma_1 & \emptyset \\ \rho\sigma_1  & \sigma_2\sqrt{1 - \rho^2} \end{bmatrix}$$

As soon as we get this $A$, we'll have the coefficients to use in this algorithm and obtain $X_i$.

-----

### Marshall-Olkin Copula
Suppose to have two electrical components and three possible shocks: shock $1$ affects component $1$, shock $2$ affects component $2$ and shock $3$ affects both components. So, graphically speaking, we have

![[ElectricCircuti.png]]

Let $T_i$ denote the time until a type $i$ shock occurs, and suppose that $T_1$, $T_2$ and $T_3$ are independent exponential random variables with respective means $\mathbb{E}[T_i] = 1/\lambda_i$.Now, we know that these $3$ shocks occur at different rates $\lambda_1$, $\lambda_2$ and $\lambda_3$. What we are interest in is the rate of failure of the components. The shocks are independent. The failures, however, are not (e.g., the probability of the failure of $T_2$ changes if we know that $T_1$ failed). We wish to generate times for these two failures.

In this type of situation, we normally don't know the joint distribution of $T_1$ and $T_2$ since it depends on the actual distribution of failure times. We are however able to approximate the joint distribution with the **Marshall-Olkin copula**, which is a copula defined in this way

$$C(x, y) = \min\{x^\alpha y, xy^\beta\} \text{, with } \alpha = \frac{\lambda_1}{\lambda_1 + \lambda_3} \text{ and } \frac{\lambda_2}{\lambda_2 + \lambda_3}$$

for $\lambda_1$, $\lambda_2$ and $\lambda_3$ known through empirical observation. Because item $1$ will fail either when a type $1$ or a type $3$ shock occurs, it follows from the fact that the minimum of independent
exponential random variables is also exponential, with a rate equal to the sum of the
rates, that $X$ is exponential with rate $\lambda_1 + \lambda_3$. Similarly, $Y$ is exponential with rate
$\lambda_2 + \lambda_3$.



Algorithmically speaking, how do we use this copula?

```python
def generate_marshallolkin(invF, invG, lambda1, lambda2, lambda3):
	
	t1 = gen_exponential(lambda1)
	t2 = gen_exponential(lambda2)
	t3 = gen_exponential(lambda3)
	
	x1 = min(t1, t3)
	x2 = min(t2, t3)
	
	y1 = exponential_pdf(-(lambda1 + lambda3) * x1)
	y2 = exponential_pdf(-(lambda2 + lambda3) * x2)
	
	return invF(y1), invG(y2)
```

-----

# Statistical Analysis of Simulated Data
Either by generating or by building a simulation model, we are now able to produce valid outputs for random variables even with unknown structure.

When we get the cumulative distribution function of a random variable, we basically have everything about it. So we will now focus on the measurement of some parameters of this distribution. We know that to understand a random variable we need the distribution function but we can still be satisfied by some other parameters that may be enough to support our decisions.

## Estimators and Interval Estimates
The expected value $\theta$ is one of the things we need the most but there is no way to compute it from a simulated variable: we can only compute it from the random variables that we know theoretically. We can, however, compute an approximation $\tilde{\theta}$ of it, that we try to understand from the data. That is what we call an **estimate**. And how can we move from a set of measurement to an estimate? We obviously apply a function, called an **estimator**.

We are interested in what we define as **unbiased and reliable estimators**. If we draw $n$ random values from our random variable and compute a function of them, the result is still a random value. If the expected value of this random variable is matching the theoretical value we are looking for, then the estimator is unbiased.

One of the most important and basics estimators is the **sample mean**, a function that we can apply to the data and estimate the expected value:

$$\overline{X} = \sum_{i = 1}^{n} \frac{X_i}{n}$$

This is the arithmetic average of the $n$ data values. When the population mean $\theta$ is unknown, the sample mean is often used to estimate it.

There is another property of estimators: not being unbiased is telling us that there is no convergence to the actual expected value, there is some error. So let's assume to take an estimator unbiased: we may be interested in the rate in which we approach the actual value. How fast are we converging? If such rate is fast enough, we say that this estimator is reliable, that is, we don't need an infinite number of runs to get something valid.

Let's take the sample mean and try to measure the error rate of the sample mean.<br />
The error $E$ that we get could be the squared difference between the real value of the expected value $\mu$ and our sample mean estimate $\overline{X}$: $E = (\overline{X} - \theta)^2$. We also know that $\overline{X}$ will be the output of an algorithm so different runs of the algorithm would produce different values. This implies that this single evaluation is not really meaningful, hence we will use the **mean squared error**

$$MSE = \mathbb{E}[(\overline{X} - \theta)^2]$$

This type of reasoning can be done for any parameter. However, in the case of the sample mean, we have a further advantage in measuring the error in this way: this is actually the expression of the variance $Var[\overline{X}] = Var[\frac{1}{n} \sum_{i = 1}^{n} X_i]$. Since the $X_i$ are independent and identically distributed, we have $\frac{1}{n^2} \sum_{i = 1}^{n} Var[X_i] = \frac{1}{n^2} \sum_{i = 1}^{n} \sigma^2 = \frac{1}{n^2} n \sigma^2 = \frac{\sigma^2}{n}$. 
Thus, $X$, the sample mean of the $n$ data values $X_1, \dots , X_n$, is a random variable with mean $\theta$ and variance $\sigma^2/n$. Furthermore, the more experiment we do, the lower the error we get since we are dividing by $n$ and this error is decreasing fairly fast: since $\frac{\sigma^2}{n}$ is the squared error, the error is $\frac{\sigma}{\sqrt{n}}$. Is it fast enough?

Having this error estimate is great theoretically, that is, it let us know if we are in a good track. Eventually, we also get to the parameter we are looking for by repeating the experiment over and over again. Let's suppose that for a specific system, $\sigma = 1.2$: what is the error you expect to get by $100$ repetitions? We compute and obtain $\frac{1.2}{\sqrt{100}} = \frac{1.2}{10} = 0.12$. We have no guarantee that the error will be this value but the probability of it being greater will become lower and lower with the increasing of the measurements.

The more precision we ask for, the more repetitions we need to do and, therefore, the higher the probability of actually reaching that precision. These quantities depends one another and we can fix two of them and find the third one that is helping us in matching the theoretical understanding that we have.

This is the **sample variance**, an estimator for the variance:

$$S^2 = \frac{\sum_{i = 1}^{n}(X_i - \overline{X})^2}{n - 1}$$

We claim that the sample variance is an unbiased estimator for the variance and that the expected value that we get by writing this algorithm an infinite number of times is matching the variance of our random variable. We use the sample variance $S^2$ as our estimator of the population variance $\sigma^2$, and we use $S =\sqrt{S^2}$, the so-called sample standard deviation, as our estimator of $\sigma$.

Let's consider the pharmacy example and assume we want to understand the expected time that the prescription needs to be filled from its arrival in the shop. We already know the time the prescription needs when the pharmacist starts working on it but since there is the queueing system, the actual time from the arrival may be different. So, this time is a random variable. We would be interested in having its distribution but it is not possible. Hence, we will try to measure the expected value computing the sample mean of the time that it takes to fill out a prescription. What would be the number of repetitions to obtain an error of one minute?

Let's call $\theta$ the expected time of filling a prescription. We model the system as a discrete events simulation, we run it $n$ times and apply the sample mean as the estimator. The error we get is, again, $\frac{\sigma}{\sqrt{n}}$. Therefore

$$1m = \frac{\sigma}{\sqrt{n}}$$
$$\sqrt{n} = \frac{\sigma}{1m}$$
$$n = \frac{\sigma^2}{(1m)^2}$$

So, we just need the variance. But this is also an unknow random variable. At this point, we can use an estimator for the variance too, the sample variance. Now, the problem keeps going. How many runs should we do to have a low error on the sample variance? 

The answer to this question is that we should first choose an acceptable value $d$ for the standard deviation of our estimator. We also need to recall that the central limit theorem tells us that the reading of the sample mean is a normal random variable. 

Since the sample standard deviation $S$ may not be a particularly good estimate of $\sigma$ (nor may the normal approximation be valid) when the sample size is small, we thus recommend the following procedure to determine when to stop generating new data values:
1) suppose $\theta = \mathbb{E}[X]$ (do it by sample mean $\overline{X}$);
2) fix a confidence, that is, the target probability of actually getting the error with $n$ runs (e.g., $95\%$);
3) fix a precision we pretend to get, that is, the amount of errors we tend to do (precision $p = 1.96d$, where $d$ is the standard deviation of our estimate $\mathbb{E}[X]$). The number $1.96$ comes from the normal distribution: $95\%$ of the values in a standard normal distribution fall within $1.96$ standard deviations from the mean;
4) perform a certain number ($100$) of iterations a priori and compute an initialization value for $s$ ($s$ is the sample standard deviation);
5) keep on running the simulation until the measured error $\frac{S}{\sqrt{n}}$ (that is, the standard deviation of the estimator) became less than $d$;
6) return $\overline{X} = \sum_{i = 1}^{n} \frac{X_i}{n}$.

In other words, the more data is generated, the more precise the estimate of $\theta$ becomes, because the uncertainty (measured by the standard deviation) decreases.

How can we fix the precision? One thing we can do about the sample mean is that we have one more theoretical result allowing us to understand something about this confidence: we know the central limit theorem. This theorem says that the readings of the sample mean (recall that the sample mean is also a random variable itself) is always a normal one, independently on what we are measuring.

What would be the value of a normal random variable which gives a guarantee of being not further than that value from the expected value in the $95\%$ of the cases? We can look at our known normal distribution, remembering that it is symmetric, and we can exclude the tails of the distribution accounting for the last $5\%$.

![[GaussianWebsite.png]]

### Interval Estimates
Let's extend the previous reasoning. Indeed, we understood that returning a specific value, a single real number is not so meaningful. That is why we are more likely to give **interval estimates**.

![[IntervalEstimatesExample.png]]

Now, consider the case of the interval estimates of the expected value. Theoretically speaking, the simulation runs are observations of independent and identically distributed random variables with expected value $\mathbb{E}[X_i] = \Theta$ and variance $Var[X_i] = \sigma^2$. Also, we know that $\overline{X}$ is an unbiased and reliable estimator of $\Theta$, that $\mathbb{E}[\overline{X}] = \Theta$ and that $Var[\overline{X}] = \frac{\sigma^2}{n}$. Then, by the central limit theorem, $\overline{X}$ is a normal random variable for large values of $n$. In other words, we know that $\sqrt{n} \frac{(\overline{X} - \Theta)}{\sigma} \simeq \mu(0, 1)$. What we want to estimate now is the left hand side of this approximation. This is also a random variable itself, that is, a rescaling and shifting of the random variable $\overline{X}$.
Our understanding of the normal is telling us, indeed, that if we take a normal random variable, we multiply it by a constant and add/subtract another constant, we still get a random variable.

However, it is still tricky because we don't know $\sigma$: hence, we replace it with $s$, an estimate of it.

$$\sqrt{n} \frac{(\overline{X} - \Theta)}{s}$$

What is telling us that we can do this replacement and still get the same result is the **Slutsky theorem** (we will not prove it). Now, the central limit theorem tells us that $\forall 0 < \alpha < 1$, let $z_\alpha$ such that $P[Z > z_\alpha] = \alpha$. E.g., if we fix $\alpha = 5\%$, we can find $z_\alpha = 1.96$ reading $0.025$ from the normal (because of the two tails). ==non ho capito ma é simile al discorso dell'immagine sopra==
Now we can exploit symmetry and, knowing that $z_{1 - \alpha} = - z_{\alpha}$, $P[-\frac{z_\alpha}{2} < z < \frac{z_\alpha}{2}] = 1 - \alpha$.
Now, $P[-\frac{z_\alpha}{2} < \sqrt{n} \frac{(\overline{X} - \Theta)}{s} < \frac{z_\alpha}{2}] \simeq 1 - \alpha$. Our target is $\Theta$ so we reshuffle the terms in the inequality and get 

$$P\Bigg[ \overline{X} -\frac{z_\alpha}{2}\frac{s}{\sqrt{n}} < \Theta < \overline{X} + \frac{z_\alpha}{2}\frac{s}{\sqrt{n}}\Bigg ] \simeq 1 - \alpha$$

Look at how we define the range $[-\frac{z_\alpha}{2}\frac{s}{\sqrt{n}}, \frac{z_\alpha}{2}\frac{s}{\sqrt{n}}]$. $\Theta$ is our target expected value, $\overline{X}$ is our estimate. Therefore, this interval is centered in our estimate and have width given by the error we are assuming to be doing. We can state the parameter to actually fit into this range with certain probability. Overall, if (after $n$ simulation observations) $\overline{X}$ and $s$ are sample mean and standard deviation, we call the interval $\overline{X} \pm \frac{z_\alpha}{2}\frac{s}{\sqrt{n}}$ an interval estimate of $\Theta$ with $100(1 - \alpha)\%$ confidence.

Again, we may fix $\alpha$ (the confidence) and $n$ (the number of the iterations) and then the width of the interval is given.

-----

## Bootstrapping
What if the parameter to estimate is not the mean (like the median or the variance)? The estimator may not be the average of values and our way to measure the error may not be the variance. Can we have a similar framework to what we have seen for the mean and the variance? The idea is to rely on more ambitious but more general target, that is, to rebuild, by means of our simulation runs, the whole cumulative distribution function describing our random variable. This is the idea behind **Bootstrapping**.

![[Bootstrapping.png]]

To answer the question "what is the value of this parameter $\theta$ of my random variable $X$?", we have always looked at the simulation model as a random variable and what we typically did was to run it $n$ times and to get $n$ values $x_1, \dots, x_n$. Then, these $n$ values were given to some estimators $g()$ which would produce $\overline{\theta}$, our approximation.

We want to rebuild the cumulative distribution function using the empirical cumulative distribution function. We just need to sort the $n$ values and place them in a histogram.

If we believe that $F_e$ is a good approximation of $F$, we can basically do anything algorithmically speaking, like computing parameters out of $F_e$ pretending to be approximations of parameters computed on the actual $F$.

We can also do a **resampling** using $F_e$. From the empirical cumulative distribution function, we draw other $n$ values at random. We compute $\overline{\theta}_1$, $\overline{\theta}_2$, and so on, $m$ times, by giving these $n$ values in input to $g()$. In this way, we have $\overline{\theta}$, computed on the original simulation, and a set of $m$ other $\overline{\theta_i}$ values which are computed by resampling from $F_e$.

If $F_e$ was really matching $F$, all the values should be the same. In an hypotetical world in which $n$ is an arbitrary large value, we will get all the possible values out of $X$, compute the estimate on all these values and, if the estimator is unbiased, we would get the actual value of the parameter. Then, we exactly rebuild $F$, so $F_e$ is exactly $F$, and by redoing the same operation we get again $\overline{\theta_1}, \overline{\theta_2}, \dots$, that is, the actual values of our parameter.

If we try to measure in an hypotetical limit condition the difference between $\overline{\theta_1}, \overline{\theta_2}, \dots$ and $\overline{\theta}$, we would get $0$. Since we are not in this hypotetical limit condition but in an actual working condition in which $n$ is a limited number, we will get different values.

We claim that the average of the differences that we can measure from $\overline{\theta_i}$ from the $\overline{\theta}$ initial, is a measure of the approximation error we are doing. The larger these differences, the less confident we are that our $n$ is sufficiently large to approach this limit condition. We compute the **mean squared error**.

$$MSE = \sum_{i = 1}^{m}\frac{\Big( \bar{\theta_i} - \bar{\theta}\Big)^2}{m}$$

Now, from an algorithmic point of view, we are able to use $\bar{\theta}$ as if it was the sample mean and, then, we use $MSE$ as if it was the variance. The algorithm remains the same.

All of this process is supported by theory. By the Glivenko-Cantelli theorem that states that 

$$\lim_{n \to + \infty}F_e(x) \rightarrow F(x) \space \text{ uniformly in } x$$

Since we are not doing an infinite number of steps, we need to compare samples of the same size. In computing estimates, we need to compute an initial estimate (the first result of $g()$) and other reference estimates (the other results of $g()$) out of sample of the same size to have a comparable precision.

So, if we revise the data generation stopping criterion, that is, we want to estimate a parameter $\theta$ up to an acceptable value $d$ of precision with certain confidence, we do the same steps: we replace the estimate ==not as the sample mean== but with our estimator and replace our sample variance with mean square error computation obtained by means of bootstrapping.

What about the interval estimates? We tried to figure out for a target confidence which was the range of values having the probability of containing the real value of our parameter. Since we know we are measuring the expected value, we are using the sample variance, therefore we will have this result. Since we are doing a different estimate, this result does not hold anymore. However, since we are able to do this resampling many times, also computationally speaking because drawing $n$ values out of an empirical cumulative distribution function is much faster in general than running a simulation model $n$ times, we do it for a very large number of times $m$ and use these values of $\overline{\theta}$ ($\overline{\theta}_1, \dots, \overline{\theta}_m$) to build another distribution of $\overline{\theta}$.

In the image below, it is possible to observe an example of probability density function for this distribution.

![[DistributionBuilding.png]]

We have no guarantee that this distribution is a normal one. Now, if we want to have an estimate with confidence, for example, $95\%$, which would be the region containing this percentage? We cut of the tails for $5\%$ and the two $\theta$ will be the limits of the range.

-----
## Variance Reduction
In order to have a low number of iterations, is it better to have an high variance or a low one? Obviously the low one. The lower the variance, the sooner we get to the stopping condition, as it was in interval estimates. This also implies that high variance means low confidence about the values produced. We also want to keep the randomness of the model.

The core idea is to reduce the variance without touching anything from theory, to keep the structure of the random variable as it is. We will mention three techniques.
### Variance Reduction by Antithetic Variables
Say you have $2$ identical and independent distributed random variables $X_1$ and $X_2$ with expected value $\theta$. What if we want to estimate this specific value? We can repeat $n$ observation of $X_1$ (or $X_2$), use the sample mean and that's it.

What if they are not independet but, for example, negatively correlated? We can measure the variance of the average of these two random variables. 

$$Var\Bigg[\frac{X_1 + X_2}{2}\Bigg] = \frac{1}{4}\Big(Var[X_1] + Var[X_2] + 2Cov[X_1, X_2]\Big)$$

With that result, if $X_1$ and $X_2$ are negatively correlated, the variance of this quantity is lower than the variance of the random variables singlely taken.

Now, how can two runs of the same simulation model be negatively correlated? The trick is the following: let differenciate between the odd runs and the even ones in the model. Let see the value of the odd runs as a function $h()$ of the set $U_1, \dots, U_m$ of random numbers used in the simulation, that is, the output of the random generator in the simulation.

Indeed, in our simulation models if we give the same sequence of random number, we get the same output. For this reason the simulation model can be seen as a function of a set of random numbers.

Instead of simulate the even runs, we take our random numbers and compute their complements (e.g., $1 - U_1, \dots 1- U_m$).

When $h$ is a monotone function of these random numbers, $X_1$ and $X_2$ are negatively correlated. Monotone means that the higher the random numbers, the higher the value of $X_1$ for instance.

When the model satisfies this condition, we actually get a lower value for the variance.

How realistic is to make this assumption? When $h()$ is a monotone function? This is qualitative, there is no strict rule. Let's assume we believe our model to be a monotone function but actually it's not. What we get is not a wrong estimate: we still get a valid estimate but we lose the guarantee of reducing the variance.

At the same time, we can think about random generation algorithm of our knowledge, for instance, in the simplest case: Bernoulli.

We can generate a Bernoulli random variable of parameter $p$.

```pseudo
	\begin{algorithm}
	\caption{Algo Caption}
	\begin{algorithmic}
		\State $u = random()$
		\If{$u \leq p$}
			\State return $0$
		\Else
			\State return $1$
        \EndIf
		
	\end{algorithmic}
	\end{algorithm}
```

This is, obviously, a monotone function. The higher the value of $u$, the higher the value returned by the Bernoulli random variable.

Let's observe an example. Imagine to want to simulate the network in the image below.

![[CircuitExample.png]]

This is a network of links which are subject to failure and we ask ourselves some questions about the robustness of this network. For instance, we send one packet into the network and we ask ourselves: "will we get it on the other side or not?" So, the failures will be associated to each links and each link will be associated to a probability.

For instance, we may wish to measure the number of paths from some point $a$ to some point $b$. This is a discrete random variable. What is the shape of this random variable? It has no particular shape so how can we simulate it?

```python
def simulate_net(p1, p2, p3, p4, p5)
	s1 = bernoulli(p1) #observation of Bernoulli random variables
	s2 = bernoulli(p2)
	s3 = bernoulli(p3)
	s4 = bernoulli(p4)
	s5 = bernoulli(p5)
	
	if s1*s2*s4*s5 == 1:
		return 2
	elif max(s1*s4, s2*s5, s1*s3*s5, s2*s3*s4) == 1:
		return 1
	else:
		return 0
```

Is it true that this simulation function is monotone in the random values that we draw? It is not so trivial but we can check: the Bernoulli random variables are monotone. Therefore, the higher their value, the higher $s_1*s_2*s_4*s_5$ and, consequently, the higher the output. Hence, it is monotone.

What is the limit of this approach? Was it really for free (in the sense that if the function isn't monotone, we have literally no drawbacks)? 

Firstly, how can we split between the one random variable and its antithetic?<br />
Secondly, if we have a large number of random numbers in our run, if one random number is higher and one is lower, we cannot observe this behavior. The theorem seen above becomes effective only when we are able to trick the random numbers. If we wait bu chance to have two subsequent runs in which the random numbers all increase or all decrease, we will never get it.

-----

### Variance Reduction by Control Variates
$X$ is the random variable output of the simulation, that is the value we are looking for. $\theta$ is its expected value. We are able to get another output random variable for the model, $Y$, an intermediate point in the simulation for which we already know the expected value. The random variable $Y$ is a **control variate** for the simulation estimator $X$. 

The technique of control variate is based on the use in our estimator the following expression $Z = X + c \cdot (Y - \mu)$ as the undbiased estimator of $\theta$ instead of $X$, for any constant $c$.

Let's look at the expected value of $Z$: is the expected value of all the right hand side of the expression and, by linearity, is equal to $\mathbb{E}[Z] = \mathbb{E}[X] + c \cdot \mathbb{E}[Y] - \mu =  \mathbb{E}[X] + c \cdot \mu - \mu =  \mathbb{E}[X]$.

Furthermore, we can also prove that the variance of $Z$ is not greater than that of $X$ (and possibly it is lower) depending on the choice of $c$.

$$Var[Z] = Var[X + c \cdot (Y - \mu)] =$$
$$= Var[X + cY] =$$
$$= Var[X] + c^2Var[Y] + 2cCov[X, Y] =$$
$$= Var[X] - \frac{Cov[X, Y]^2}{Var[Y]}$$
$$\frac{Var[Z]}{Var[X]} = 1 - Corr^2[X, Y]$$

How can we implement this method? The only thing that we need is to be able to read values of another random variable during the simulation run. It can even be the output of a single random variable from our model. Of course, the more we are able to find control variate which are strongly correlated to our output, the more variance reduction we get.

-----

### Variance Reduction by Conditioning
The idea is similar to the reduction by control variate. We still take two outputs: $X$, the actual output of the simulation model, and $Y$, which is another random variable we can read from the model. Instead of computing $\mathbb{E}[X]$, we move to the conditional expectation of $X$ with respect to $Y$, $\mathbb{E}[X \vert Y]$.

$$\mathbb{E}[X \vert Y] = \sum_{i = 1}^{m} \mathbb{E}[X \vert Y_i] \cdot p_i$$

Algorithmically speaking, we can run the simulation model, measure both $X$ and $Y$ and have one pair for each run.

![[VarianceReductionByConditioning.png]]

Then, we cluster on the $Y$ and compute each expected value. In this instance, we will compute the expected value of $x$ in which $y$ took value $1$, the expected value of $x$ in which $y$ took value $2$ and so on. We estimate the probabilities basing on their frequencies and then we compute.
$\mathbb{E}[X \vert Y_i]$ are the clusters average values and $p_i$ are the estimates.

Theory is telling us that the conditional expected value is also an unbiased estimator of $\theta$ and what we get is the variance which will not be greater than that of $X$.

If we already know the probability of $Y$ to take specific values, this approach gives us an advantage.

Algorithmically speaking, there is a variant of this methos called **reduction by stratified sampling**. This is a variant in the sense that the principle is the same: we assume to have $X$ and $Y$ and to be willing to compute our estimates in terms of conditional expectation but instead of running the simulation model, observing $Y$ and clustering, we fix $Y$ in advance and run our simulation with $Y$ not being a random variable anymore.

-----