## Simulation ##
Una **simulation** (**simulazione**), secondo l'Oxford Dictionary, è il prodotto della modellazione a computer, della rappresentazione formale di un evento, un processo o sistema complesso nel mondo reale, soprattutto al fine di studio.<br />

Una simulazione è uno strumento economico per approssimare comportamenti della vita reale all'interno di un calcolatore, tramite l'implementazione di un [[Modello#Modello descrittivo |modello di analisi descrittiva]], il quale può essere usato per testare una selezione di scenari.<br />
Sistemi complessi differenti richiedono capacità di modellazione differenti.<br />
L'arte della costruzione del modello stesso può portare al modellatore un superiore livello di comprensione del sistema reale.<br />

Spesso la modellazione di un evento, nonostante le numerose semplificazioni e restrizioni poste sul problema da modellare, può risultare estremamente complessa ed impossibile da modellare nel minimo dettaglio. In questo caso, si converge l'attenzione esclusivamente sugli elementi che si desidera studiare e si approssimano due porzioni del sistema:
- i **connettori** con il mondo esterno, che fungono da legante tra la porzione di realtà che è il caso di studio, ed il mondo esterno;
- alcuni dettagli interni, approssimati tramite componenti stocastiche.

I motivi dell'utilizzo di simulazioni sono molteplici:
- si tratta di un valido strumento (e, spesso, molto economico) per approssimare un evento reale;
- permette di testare scenari;
- la costruzione del modello stesso può giovare al modellatore in termini di maggior comprensione del sistema che si sta modellando;
- la possibilità di eseguire analisi _what-if_ su circuito (i.e. _cosa succederebbe se questo parametro variasse da questo valore a quest'altro?_);
- la possibilità di visualizzare i risultati di metodi complessi.

Al contrario, l'utilizzo di simulazioni non è la migliore opzione quando i problemi analitici hanno soluzioni in forme chiuse oppure le analisi _what-if_ hanno troppi parametri (meglio utilizzare un [[Modello#Modello prescrittivo |modello di analisi prescrittiva]]).<br />

Ovviamente, l'ottenimento di una soluzione ottima per la simulazione non implica l'aver trovato una soluzione ottima in real-world.<br />
Queste simulazioni rappresentano solo una porzione del mondo reale. In ogni sistema complesso esistono delle connessioni tra modello e realtà, le quali dovranno essere approssimate con un grado di precisione direttamente proporzionale alla rilevanza della connessione stessa.<br />

-------------------------------------------------------------

Una semplice simulazione è [[The Game of Life]].<br /> 
 
-------------------------------------------------------------

Esistono tre macro paradigmi per la costruzione ed implementazione di modelli descrittivi:
- **discrete events simulation**;
- **[[Agent-Based Simulation |agent-based simulation]]**;
- **[[System Dynamics Simulation |system dynamics simulation]]**.

Questi tre paradigmi fanno affidamento su modelli che comprendono componenti stocastiche al fine di approssimare connessioni al mondo esterno e parti del sistema interno che sono al centro del focus dell'analisi.<br />
E' possibile effettuare una comparazione tra questi paradigmi in termini di diverse feature:

![[ComparisonSimulation.png]]

--------------------------------------------------------------

### Discrete Event Simulation ###
Nelle simulazioni di tipo **discrete events**, il sistema procede per step durante il tempo di esecuzione e gli eventi accadono solamente durante questi precisi momenti.<br />


Si consideri la seguente funzione:
$$y = f(x)$$
Dal punto di vista del modellatore, $x$ rappresenta i dati in input mentre $y$ è un'astrazione del processo modellato da $f()$.<br />
Se $f()$ è solamente un'approssimazione del sistema reale, quando si applicherà $f()$ al parametro $x$, si otterrà una determinata osservazione, un determinato valore. Riapplicando la funzione, è plausibile ottenere un risultato differente. Per questo motivo, in un mondo deterministico, si definirebbero $x$ **variabile indipendente** e $y$ **variabile dipendente** mentre il risultato che si ottiene in $y$ è stocastico, quindi $y$ è una **variabile aleatoria**.
Il risultato complessivo della modellazione descrittiva di un sistema è una variabile aleatoria più complessa.<br />


### Pharmacist (Ex. from Sheldon M. Ross "Simulation")###
![[PharmacistSimulation.png]]

Il modello descrittivo che andrà costruito renderà più chiara la distribuzione della variabile aleatoria. 
E' possibile costruire un modello deterministico di questo sistema? La risposta è sì, anche se il considerare ogni singola variabile (ogni individuo esistente, la condizione di salute di ogni individuo, ...) è di gran lunga più complesso di quanto sia possibile fare. Per questo motivo, si approssimano delle componenti del sistema.<br />
Ci sono due punti cardine i quali verranno approssimati:
- i **connettori**, cioè i collegamenti tra il sistema ed il mondo esterno;
- i **dettagli** del sistema stesso, i quali non sono cruciali per lo studio.

Come si approssimano questi due punti? Con l'utilizzo di ulteriori, sebbene più semplici, variabili aleatorie.<br />

![[Pharmacy Scheme.png]]

Un'assunzione comune è che gli individui del mondo esterno agiscano in maniera indipendente e, perciò, osservare che ad un determinato tempo $t$ è arrivata una prescrizione non fornisce nessuna informazione sull'arrivo della prossima prescrizione. Questa assunzione è sufficiente per modellare il processo dell'arrivo delle prescrizioni tramite una **variabile aleatoria esponenziale**.<br />
Per quanto riguarda il processo di preparazione delle medicine, il problema fornisce una media ed una deviazione standard senza fornire la forma della distribuzione. Le informazioni riguardanti il processo sono minime e la forma della perturbazione non ha una particolare struttura, quindi è possibile utilizzare una **variabile aleatoria normale**.<br />

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

-------------------------------------------------------------

### Ripasso di [[Statistica e Probabilità |statistica e probabilità]] ###

-------------------------------------------------------------

### Generazione di numeri randomici ###
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
- calcolare $x_{0} = s; \qquad x_{i+1} = (a \cdot x_{i} + c) \text{ mod } m$

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
- **funzione di distribuzione cumulativa empirica** (su sample $r$):<br />$ECDF(x) = \text{ }$ numero di elementi di $r$ aventi valore $\leq x$. Il **teorema di Glivenko-Cantelli** sostiene che se $\hat{F}$ è stata calcolata usando un sample di dimensione $n$ estratto da una distribuzione la cui funzione di ripartizione è $F$, $\hat{F}$ converge in probabilità a $F$ con l'aumentare di $n$.

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

-------------------------------------------------------------

#### Shift Register Generator ####
Un'alternativa per la generazione di numeri randomici è lo **Shift Register Generator**.<br />
Le proprietà attese di un generatore random sono:
- l'insieme dei valori pseudorandomici generati non può essere distinto da un semple analogo estratto da una distribuzione uniforme discreta nell'intervallo $\{0, ..., m-1\}$;
- il periodo del generatore deve essere più ampio possibile;
- l'implementazione del generatore deve essere efficiente (ad esempio, la scelta di $m = 2^{31} -1$ permette di codificarlo su $32$ bit).

-------------------------------------------------------------

## Metodo Monte Carlo ##
Si vuole computare (numericamente) il valore di $\pi$.<br />
Si consideri un cerchio. La sua area è definita dalla formula $A = \pi \cdot r^{2}$. Quindi, è possibile calcolare $\pi = \frac{A}{r^{2}}$.<br />
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

-------------------------------------------------------------