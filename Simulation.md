## Simulation ##
Una **Simulation** (**Simulazione**), secondo l'Oxford Dictionary, è il prodotto della modellazione a computer, della rappresentazione formale di un evento, un processo o sistema complesso nel mondo reale, soprattutto al fine di studio.<br />

Una simulazione è uno strumento economico per approssimare comportamenti della vita reale all'interno di un calcolatore, tramite l'implementazione di un modello di [[Analisi Descrittiva]], il quale può essere usato per testare una selezione di scenari.<br />
Sistemi complessi differenti richiedono capacità di modellazione differenti.<br />
L'arte della costruzione del modello stesso può portare al modellatore un superiore livello di comprensione del sistema reale.<br />

Spesso la modellazione di un evento, nonostante le numerose semplificazioni e restrizioni poste sul problema da modellare, può risultare estremamente complessa ed impossibile da modellare nel minimo dettaglio. In questo caso, si converge l'attenzione esclusivamente sugli elementi che si desidera studiare e si approssimano due porzioni del sistema:
- i **Connettori** con il mondo esterno, che fungono da legante tra la porzione di realtà che è il caso di studio, ed il mondo esterno;
- alcuni dettagli interni, approssimati tramite componenti stocastiche.

I motivi dell'utilizzo di simulazioni sono molteplici:
- si tratta di un valido strumento (e, spesso, molto economico) per approssimare un evento reale;
- la costruzione del modello stesso può giovare al modellatore in termini di maggior comprensione del sistema che si sta modellando;
- la possibilità di eseguire analisi _what-if_ su circuito (i.e. _cosa succederebbe se questo parametro variasse da questo valore a quest'altro?_);
- la possibilità di visualizzare i risultati di metodi complessi.

Al contrario, l'utilizzo di simulazioni non è la migliore opzione quando i problemi analitici hanno soluzioni in forme chiuse oppure le analisi _what-if_ hanno troppi parametri (meglio utilizzare un modello di [[Analisi Prescrittiva]]).<br />

Ovviamente, l'ottenimento di una soluzione ottima per la simulazione non implica l'aver trovato una soluzione ottima in real-world.<br />
Queste simulazioni rappresentano solo una porzione del mondo reale. In ogni sistema complesso esistono delle connessioni tra modello e realtà, le quali dovranno essere approssimate con un grado di precisione direttamente proporzionale alla rilevanza della connessione stessa.<br />

--------------------------------------------------------------

Una semplice simulazione è [[The Game of Life]].<br /> 
 
--------------------------------------------------------------

Esistono tre macro paradigmi per la costruzione ed implementazione di modelli descrittivi:
- [[Discrete Events Simulation]];
- [[Agent-Based Simulation]];
- [[System Dynamics Simulation]].

Questi tre paradigmi fanno affidamento su modelli che comprendono componenti stocastiche.<br />
E' possibile effettuare una comparazione tra questi paradigmi in termini di diverse feature:

![[ComparisonSimulation.png]]

--------------------------------------------------------------

Dal punto di vista del modellatore, se si considera la funzione $y = f(x)$, $x$ rappresenta i dati in input mentre $y$ è un'astrazione del processo modellato da $f()$.<br />

### Farmacista ###

![[PharmacistSimulation.png]]

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

def get_next_delay(Lambda):
    
    return random.expovariate(Lambda)

def get_service_time(exp_time, std_dev_time):
    
    return random.normalvariate(exp_time, std_dev_time)
    
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
				
```

--------------------------------------------------------------

### Ripasso di [[Statistica e Probabilità]] ###

###  Generazione di Numeri Randomici ###

La definizione di random descrive l'avvenimento di un evento dovuto al caso piuttosto che ad un motivo programmato.<br />
Secondo Von Neumann, è impossibile produrre una cifra randomica usando metodi aritmetici.<br />
Infatti, la produzione di numeri attraverso calcolatore appare randomica ma, in realtà, non lo è. Il calcolatore agisce in maniera puramente deterministica, nonostante l'apparenza possa far pensare ad un comportamente casuale.<br />

Si distingue, quindi, in due categorie:
- **Randomicità genuina**, cioè quella che è possibile osservare nel mondo;
- **Randomicità artificiale**, o **pseudorandomicità**, cioè quella che è possibile simulare tramite computer.

------------------------------------------------------------

La prima idea di algoritmi generatori di numeri pseudorandomici è il **Von Neumann's Middle Square Generator**.<br />
L'algoritmo suggerisce di:
- prendere un numero (**seed**);
- calcolarne il quadrato;
- memorizzare le cifre centrali come "numero randomico";
- usare questo numero randomico come seed per le iterazioni seguenti.

Questo algoritmo ha una debolezza. Se viene scelto il numero $0$ come seed, anche tutti i seed successivi generati a partire da quello scelto saranno $0$.<br />

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



------------------------------------------------------------

La seconda idea di algoritmi generatori è il  **Congruential Generator**.<br />
L'algoritmo suggerisce di:
- scegliere tre parametri, $a$, $c$ e $m$, e un seed $s$.<br />
- calcolare $x_{0} = s; \qquad x_{i+1} = (a \cdot x_{i} + c) \text{ mod } m$

Anche questo algoritmo ha una debolezza. Infatti, la sequenza prodotta tende a diventare ciclica dopo un numero fissato di iterazioni.<br />
Il parametro chiave di questi generatori è $m$, il quale definisce il periodo dell'iterazione.

Avere un periodo abbastanza lungo è sufficiente?<br />


------------------------------------------------------------

### Ripley Test ###

```python
def ripley_test(v):
	w = v[1:len(v)]
	w.append(v[0])
	plt.scatter(v, w)
				
```

