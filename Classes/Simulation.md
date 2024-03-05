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

Is this simulation reaching a stable state or is still changing? The answer to this question depends on how much the simulation lasts. It is not excluded that a simulation may not terminate, but it is possible that the simulation ends in a number of steps greater than those observed.

Since the initial configuration is not provided, an attempt is made to construct it by approximation, based on the probability of having an individual in a cell. The system, therefore, contains stochastic elements, elements that tend to be representative only when observed multiple times. How can we ensure that these repeated observations of stochastic elements make sense as a whole?

![[Images/GameOfLifePlot.png]]

Visualizations stimulate hypotheses and conjectures, but these are purely qualitative observations. The primary objective is to make quantitative observations.

----------------------------------------------------------------

## Statistics and probability

----------------------------------------------------------------

## Generazione di numeri randomici ##
La definizione di **random** descrive l'avvenimento di un evento dovuto al caso piuttosto che ad una causa deterministica.<br />
E' noto che i calcolatori sono puramente deterministici. Infatti, secondo Von Neumann, è impossibile produrre una cifra casuale usando metodi aritmetici.<br />
Infatti, la produzione di numeri attraverso calcolatore appare randomica ma, in realtà, non lo è. Il calcolatore agisce in maniera puramente deterministica, nonostante l'apparenza mascheri questo modo di agire, facendo pensare ad un comportamente casuale della macchina.<br />

Si distingue, quindi, in due categorie:
- **randomicità genuina**, cioè quella che è possibile osservare nel mondo;
- **randomicità artificiale**, o **pseudorandomicità**, cioè quella che è possibile simulare tramite computer.

La prima idea di algoritmi generatori di numeri pseudorandomici è il **Von Neumann's Middle Square Generator**.<br />
L'algoritmo suggerisce di:
- selezionare un numero (**seed**);
- calcolarne il quadrato;
- memorizzare le cifre centrali come numero randomico;
- usare questo numero randomico come seed per le iterazioni seguenti.

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

Questo algoritmo ha una debolezza (oltre al fatto che la scelta del seed è deterministica ed il comportamento del calcolatore è il risultato dell'esecuzione di un programma e, a maggior ragione, è deterministico): se viene scelto il numero $0$ come seed, anche tutti i seed successivi generati a partire da quello scelto saranno $0$.<br />

Inoltre, può accadere che i numeri generati dall'algoritmo inizino a ripetersi ciclicamente.<br />

La seconda idea di algoritmi generatori è il **congruential generator**.<br />
L'algoritmo suggerisce di:
- scegliere tre parametri, $a$, $c$ e $m$, e un seed $s$;<br />
- calcolare $x_{0} = s; \qquad x_{i+1} = (a \cdot x_{i} + c) \text{ mod } m$.

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

Anche questo algoritmo ha una debolezza. Infatti, la sequenza prodotta tende a diventare ciclica dopo un numero fissato di iterazioni (oppure con una pessima scelta di parametri come, ad esempio, $a = 1$, $c = 0$ e $m$ libero.<br />
E' possibile, però, fissare dei parametri in modo tale da avere un **periodo completo**, dove con completo si intende l'avere il massimo numero di step possibili nella sequenza prima che la sequenza inizi a ripetersi.<br />
Il periodo del generatore è il parametro chiave, $m$.<br />
Sono stati formulati diversi criteri per la scelta di questi parametri:
- **Knuth, 1981**: un generatore congruente misto ha periodo completo per tutti i valori scelti come seed se e solo se:
	- $m$ e $c$ sono primi tra di loro;
	- $a-1$ è divisibile per tutti i fattori primi di $m$;
	- $a-1$ è divisibile per $4$ se $m$ è divisibile per $4$.
- **Ripley, 1987**: un generatore congruente ha periodo $m-1$
	- solo se $m$ è primo;
	- quando $m-1$ è primo, il periodo è un divisore di $m-1$ ed è precisamente $m-1$ quando $a$ è una radice primitiva di $m$ ($a \neq 0$ e $a^{(m-1)p}$ non congruente ad $1$ modulo $m$ per ogni fattore primo $p$ di $m-1$ ) .
- **Park and Miller, 1988**: quando $m$ è il **numero primo di Mersenne**, $2^{31}-1$, uno delle sue radici primitive è $a = 7^{5}$, perciò la relazione ricorrente $x_{i+1} = 7^{5}x_{i} \text{ mod } 2^{31}-1$ avrà periodo completo.

L'obiettivo successivo è produrre numeri randomici composti sempre dallo stesso numero di bit. Si può utilizzare il criterio di Park and Miller per ottenere il risultato desiderato.

Avere un periodo ampio non è abbastanza per ottenere un generatore pseudo randomico. Infatti, se, ad esempio, il generatore ha un periodo completo ma aumenta il valore di un'unità ad ogni iterazione, sarà tutt'altro che randomico.<br />
La **predicibilità** è, quindi, un ulteriore fattore che determina la bontà del generatore. Meno un generatore è predicibile da parte dell'utente, meglio è.<br />
E' possibile progettare un test che permetta di valutare la predicibilità di un generatore? 
- **Ripley test**: questo test considera il vettore di valori generati $v$ e il vettore $w$, ottenuto shiftando il precedente di una posizione. Per valutare la bontà, si può considerare la correlazione tra gli elementi dei due vettori nella stessa posizione ma questa analisi non è in grado di cogliere eventuali legami tra i due vettori. Per poter prevedere dei valori della sequenza, è necessario osservarne altri interni alla sequenza ma non esclusivamente considerando i due punti su cui si vuole effettuare un analisi di correlazione. Si può quindi procedere a verificare la correlazione tra il vettore iniziale con tutti i possibili vettori ottenuti dagli shift del vettore iniziale.
- **funzione di distribuzione cumulativa empirica** (su sample $r$):<br />$ECDF(x) =$ numero di elementi di $r$ aventi valore $\leq x$. Il **teorema di Glivenko-Cantelli** sostiene che se $\hat{F}$ è stata calcolata usando un sample di dimensione $n$ estratto da una distribuzione la cui funzione di ripartizione è $F$, $\hat{F}$ converge in probabilità a $F$ con l'aumentare di $n$.

```python
def ripley_test(v):
	w = v[1:len(v)]
	w.append(v[0])
	plt.scatter(v, w)	
```

-------------------------------------------------------------

Si osservi ora la forma di una funzione di densità di probabilità e di una funzione di ripartizione (o di distribuzione cumulativa) per una variabile aleatoria uniformemente distribuita.

immagine 1h26'32''

Dai valori ottenuti, si vuole fare reverse engineering e costruire la funzione di ripartizione associata alla variabile aleatoria. Questa viene definita **Funzione di Ripartizione Empirica**.

```python
def build_ecdf(v):
	return lambda x: sum( map( lambda el_v: el_v <= x, v)) / len(v)
```

Il **Test della Funzione di Ripartizione Empirica** è un ulteriore test, oltre al Ripley Test, per la valutazione della randomicità.<br />
Si osservino i numeri all'interno di una sequenza generata da un algoritmo ma si pretenda che essi provengano dall'osservazione di una variabile aleatoria la quale segue una distribuzione di probabilità discreta.<br />
Di conseguenza, questa variabile possiederà una funzione di massa di probabilità ed una funzione di densità di probabilità associata.
Si costruisca, quindi, la funzione che assomigli questa funzione di ripartizione cumulativa senza conoscere $X$ ma avendo soltanto alcuni valori della sequenza, ovvero la funzione di ripartizione empirica.<br />
La funzione, banalmente, conta quanti valori della sequenza $v$ sono minori o uguali di $x$.

```python
def empirical_cdf(v, x):
	count = 0
	for i in range(len(v)):
		if v[i] <= x:
			count = count + 1
	return (count / len(v))
```

----------------------------------------------------------------

#### Shift Register Generator ####
Un'alternativa per la generazione di numeri randomici è lo **Shift Register Generator**.<br />

Le proprietà attese di un generatore random sono:
- l'insieme dei valori pseudorandomici generati non può essere distinto da un semple analogo estratto da una distribuzione uniforme discreta nell'intervallo $\{0, ..., m-1\}$;
- il periodo del generatore deve essere più ampio possibile;
- l'implementazione del generatore deve essere efficiente (ad esempio, la scelta di $m = 2^{31} -1$ permette di codificarlo su $32$ bit).

----------------------------------------------------------------

## Metodo Monte Carlo ##
Si vuole computare (numericamente) il valore di $\pi$.<br />
Si consideri un cerchio. La sua area è definita dalla formula $A = \pi \cdot r^{2}$. Quindi, è possibile calcolare $\pi = \frac{A}{r^{2}}$.<br />
L'area del più piccolo quadrato $S$ contenente tale cerchio è $(2 \cdot r)^2$.
Si applica ora il **Metodo Montecarlo**. L'idea è di procedere numericamente ma con un approccio geometrico.

immagine cerchio 1.27.30

Si fissi il raggio del cerchio $r = 1$. Ora è solo necessario stimare l'area del quarto di cerchio per poter calcolare $\pi$.<br />
L'approccio Montecarlo consiste nel riempire il quadrato di punti. Alcuni di essi cadranno all'interno dell'area del cerchio, altri al di fuori (ma sempre all'interno dell'area del quadrato).<br />
Si chiami l'area del quarto di cerchio $B$. E' possibile stimare $B$ dal numero di punti caduti all'interno di $B$ diviso il numero di punti totali generati:

$$B = \frac{\text{numero di punti interni a } B}{\text{numero di punti totali}}$$
Il codice si basa sul generare coppie di valori, ciascuno dei quali estratto da una distribuzione uniforme.<br />
Per scoprire se i punti così ottenuti ricadono all'interno dell'area del quarto di cerchio, basta porre la distanza euclidea del punto dall'origine del quadrante minore di $1$.

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

E' possibile stimare $\pi$ attraverso il calcolo $$\pi = 4 \cdot P[C \vert S]$$
Dove $C$ è l'evento corrispondente alla caduta di un punto all'interno del cerchio e $S$ è l' evento corrispondente alla caduta di un punto all'interno del quadrato.<br />
Alcuni parametri che è utile stabilire sono:
- l'accuratezza, intesa come numero $d$ di cifre da stimare;
- il grado di fiducia $\delta$, inteso come la probabilità di raggiungere l'accuratezza.
- il numero di punti $n$.

Il trovarsi all'interno di un cerchio può essere modellato con una variabile aleatoria Bernoulliana:$$X = \cases{1 \qquad p \cr \cr 0 \qquad (1-p) }$$
Il valore atteso di questa variabile aleatoria sarà $E[X] = 1 \cdot p + 0 \cdot (1-p) = p$, mentre la sua varianza sarà $V[X] = E[X^{2}] - E[X]^{2}$ = .

----------------------------------------------------------------

