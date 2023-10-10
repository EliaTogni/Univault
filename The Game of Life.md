## The Game of Life ##
[[Simulation]] pseudo agent creata da Conway nel 1970.
La situazione iniziale consiste in una regione abitata nella quale gli abitanti seguono queste regole:
- ogni individuo vivo con meno di due vicini vivi muore (_underpopulation_);
- ogni individuo vivo con più di tre vicini vivi muore (_overpopulation_);
- qualsiasi individuo vivo con due o tre vicini vivi resta in vita;
- quando esattamente tre individui condividono uno spazio vuoto adiacente, un nuovo individuo nasce in quello spazio.<br />

---------------------------------------------------------------

Questa è una descrizione qualitativa della situazione. Per poterla modellare, è necessario definire in maniera più formale agenti e vincoli.<br />
La simulazione si basa sull'avere un agente per ogni individuo in una griglia discreta bidimensionale.<br />
Ogni cella di questa griglia può contenere al più un individuo.<br />
E' necessario definire la logica che modelli il comportamento degli agenti. Lo stato di ogni agente è facilmente definibile da una variabile binaria, in cui il valore $1$ indica che nella cella è presente un abitante vivo mentre $0$ indica il viceversa.<br />
Inoltre, è necessario definire il significato di spazio adiacente: possono essere adiacenti le celle verticali ed orizzontali connesse alla cella in questione, oppure possono essere adiacenti le stesse celle e le celle diagonali.<br />
La modellazione del tempo in questa simulazione è fondamentale per capire in quale ordine si aggiornano i contenuti delle celle ad ogni passo. Si può scegliere un aggiornamento sequenziale oppure parallelo, cioè aggiornare una cella basandosi sul contenuto delle celle adiacenti al passo precedente (ed ignorando il loro contenuto attuale).<br />
Questa scelta implica l'utilizzo di una valutazione discreta nel tempo. Gli individui si aggiorneranno al _day 0_, al _day 1_ (osservando i vicini al _day 0_) e così via.<br />

---------------------------------------------------------------

Lo step successivo è importare il modello su computer ed estrarre delle statistiche:

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

Questa simulazione sta raggiungendo uno stato stabile oppure continua a modificarsi? La risposta a questa domanda può dipendere dalla durata della simulazione. Non è escluso che una simulazione possa non terminare, ma è possibile che la simulazione termini in un numero di passi maggiore di quelli osservati. <br />

Poichè la configurazione iniziale non viene fornita, si cerca di costruirla approssimandola, cioè basandosi sulla probabilità di avere un individuo in una cella.<br />
Il sistema contiene quindi degli elementi stocastici. Elementi che tendono ad essere rappresentativi solo se osservati multiple volte. Come essere sicuri che queste osservazioni ripetute di elementi stocastici siano sensate nell'insieme?<br />

![[Images/GameOfLifePlot.png]]

Le visualizzazioni stimolano ipotesi e congetture ma si tratta di osservazioni puramente qualitative, mentre l'obiettivo primario è il fare osservazioni quantitative.
