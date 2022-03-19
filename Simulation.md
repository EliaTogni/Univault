Una **Simulation** (**Simulazione**) è il prodotto della modellazione a computer, della rappresentazione formale di un evento, un processo o sistema complesso nel mondo reale, soprattutto al fine di studio.<br />

Una simulazione è uno strumento economico per approssimare comportamenti della vita reale all'interno di un calcolatore, tramite l'implementazione di un modello di [[Analisi Descrittiva]], il quale può essere usato per testare una selezione di scenari.<br />
Sistemi complessi differenti richiedono capacità di modellazione differenti.<br />
L'arte della costruzione del modello stesso può portare al modellatore un superiore livello di comprensione del sistema reale.<br />

Al contrario, l'utilizzo di simulazioni non è la migliore opzione quando i problemi analitici hanno soluzioni in forme chiuse oppure le analisi _what-if_ hanno troppi parametri (meglio utilizzare un modello di [[Analisi Prescrittiva]]).<br />

Ovviamente, l'ottenimento di una soluzione ottima per la simulazione non implica l'aver trovato una soluzione ottima in real-world.<br />
Queste simulazioni rappresentano solo una porzione del mondo reale. Esistono, in ogni sistema complesso, delle connessioni tra modello e realtà, connessioni le quali dovranno essere approssimate con un grado di precisione direttamente proporzionale alla rilevanza della connessione stessa.<br />

--------------------------------------------------------------

Una semplice simulazione è [[The Game of Life]].<br /> 
 
--------------------------------------------------------------

Esistono tre macro paradigmi per la costruzione ed implementazione di modelli descrittivi:
- [[Discrete Events Simulation]];
- [[Agent-Based Simulation]];
- [[System Dynamics Simulation]].

E' possibile effettuare una comparazione tra questi paradigmi in termini di diverse feature:

![[ComparisonSimulation.png]]

--------------------------------------------------------------

Dal punto di vista del modellatore, se si considera la funzione $y = f(x)$, $x$ rappresenta i dati in input mentre $y$ è un'astrazione del processo modellato da $f()$.<br />

### Farmacista ###

![[PharmacistSimulation.png]]

```python

import random

class Event():
	
	type = "a"
	time = 0
	

def get_next_delay(Lambda):
	
	return random.expovariate(Lambda)


def get_service_time(exp_time, std_dev_time):
	
	return random.normalvariate(exp_time, std_dev_time)
				

def pharmacy(sim_time, daily_working_time, exp_prescriptions_day, exp_prescr_time, stdev_prescr_time):
	
	#interesting events:
	#(a) arrival of prescriptions
	#(s) starting of prescription filling
	#(f) finishing of prescription filling

	busy = False
	events = []
	in_queue = 0
	
	current = Event()
	current.type = "A"
	current.time = get_next_delay(exp_prescription_day/daily_working_time)

	while current.time < sim_time:
		
		if current.type == "A":
			
			e = Event()
			e.type = "A"
			e.time = current.time + get_next_delay(exp_prescription_day/daily_working_time
												   
			if e.time <= daily_working_time:
				events.append(e)
			
			if not busy
				
				e = Event()
				e.type = "S"
				e.time = current.time
			
				events.append(e)
				
			else:
				
				in_queue = in_queue + 1
												   
		elif current.type == "S":
							
			busy = True 
												  
			s_time = get_service_time(exp_prescr_time, stdev_prescr_time)
			
												  
			e = Event()
			e.type = "F"
			e.time = current.time + s_time
						
			events.append(e)
												  
		elif current.type == "F":
									
			busy = False
												   
			if in_queue > 0
												  
			e = Event()
			e.type = "S"
			e.time = current.time
												   
			events.append(e)
				
				
```

--------------------------------------------------------------

### Ripasso di [[Probabilità]] ###

I concetti di base necessari per comprendere gli argomenti introdotti in futuro sono:
- lo [[Spazio degli Eventi]];
- un [[Evento]] e tutte le sue proprietà;