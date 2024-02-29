---
"Titolo:": Preprocessing for Image Classification byConvolutional Neural Networks
Sottotitolo: 
"Autore:": Kumar Pal Kuntal and K. S. Sudeep
"Casa Editrice:": IEEE
"Anno:": "2016"
"DOI:": 10.1109/RTEICT.2016.7808140
"Link:": https://doi.org/10.1109/RTEICT.2016.7808140
---
# Abstract
Negli ultimi tempo, le CNN sono diventate il metodo più potente per classificare immagini. Vari ricercatori hanno mostrato l'importanza dell'architettura della rete per ottenere migliori performance facendo cambiamenti in diversi layer del network. Alcuni hanno mostrato l'importanza dell'attivazione dei neuroni utilizzando vari tipi di funzioni di attivazione. In questo paper, verrà mostrata l'importanza delle tecniche di preprocessing per la classificazione di immagini utlizzando il CIFAR10 dataset e tre variazioni delle CNN. I risultati che sono stati ottenuti outperformano sia la tecnica Mean Normalization e Standardization per tutte e tre le reti e, perciò, è la più importante tecnica di preprocessing per la classificazione di immagini tramite CNN.

----------------------------------------------------------------

# Articolo
## Introduction
La Convolutional Neural Network è stata introdotta per la prima volta da Yann LeCun et al. Da allora è stata applicata in numerose aree di ricerca come la classificazione di documenti, la speech recognition, facial recognition, recognition of traffic signs e cifre scritte a mano. Tuttavia, è nel $2012$ che si è stati in grado di ottenere migliorie significative nella classificazione di oggetti. Da allora, l'utilizzo di CNN in questo ambito ha guadagnato popolarità e sono stati proposti innumerevoli modelli.

Così come la CNN è stata introdotta, c'era la necessità di un dataset etichettato che potesse essere utilizzato come standard per la classificazione delle immagini. Krizhevsky e Hinton hanno introdotto nel $2009$ il dataset CIFAR$10$, che ha sfidato innumerevoli ricercatori da allora.

==Non è stato possibile per le sole architetture dei modelli CNN proposti raggiungere una buona precisione di classificazione su un qualsiasi set di dati. Le tecniche di preprocessing svolgono un ruolo vitale nel raggiungere lo stato dell'arte su qualsiasi set di dati. In seguito si fornirà un'analisi basata su confronti tra alcune delle più note tecniche di preprocessing su tre architetture convoluzionali.==

----------------------------------------------------------------

## Methodology
Le CNN considerate qui sono ispirate dai lavori di Krizhevsky, Hinton e Sutskever. L'architettura di questa rete è simile ad una single layer NN con alcuni layer addizionali. L'architettura base include un layer convoluzionale composto da un numero predefinito di filtri di taglia $3 \times 5 \times 5$, chiamati feature map, le quali imparano le feature dalle immagini in input. Qua i neuroni sono connessi solo ad una piccola area (locally connected), avente taglia dei filtri. Questo layer è seguito da un pooling layer di taglia fissata $2 \times 2$. Per ognuno dei modelli si è usato il max pooling. Questo layer di pooling campiona il proprio input in larghezza e altezza. A questo layer succede uno fully connected dove tutti i neuroni considerano ogni attivazione del layer precedente. Ogni layer del modello apprende i pesi e i bias (parametri sconosciuti) utilizzando il [[Intelligenza Artificiale#Backpropagation |gradient descent]] in piccoli mini-batches di training sample.

I valori iniziali dei pesi e dei bias di ogni feature map sono assegnati seguendo la distribuzione normale random. Sono presenti diversi iperparametri, come learning rate ($\eta$), decay del learning rate, costante di regolarizzazione del costo ($\lambda$), la taglia dei minibatch e il numero di neuroni nel layer fully connected, i quali svolgono un ruolo vitale nell'ottenere buone performance.

Le architetture delle tre reti sono descritte nei capitoli sottostanti.

### Convolutional Neural Network $1$
La prima rete convoluzionale è composta da $3$ strati. Un layer di convoluzione e pooling combinati, uno strato completamente connesso e uno strato softmax con la funzione sigmoide utilizzata come attivazione. Questa architettura verrà rappresentata come CNN-$1$ per il resto del documento.

----------------------------------------------------------------

### Convolutional Neural Network $2$
La seconda rete convoluzionale è simile alla prima (CNN-$1$) con un'eccezione, che è l'uso delle Rectified Linear Units (ReLU) come funzione di attivazione, definita come $f(x) = \max(0, x)$. Nair e Hinton le hanno utilizzate per migliorare la loro [[Intelligenza Artificiale#Boltzmann machines|Boltzmann Machine]]. Il vantaggio nell'utilizzo di ReLU è che opera molto più velocemente rispetto all'attivazione sigmoidea, poiché evita il calcolo di operazioni complesse. Di conseguenza, il tempo di addestramento si riduce notevolmente. Questa architettura verrà rappresentata come CNN-$2$ per il resto del documento.

----------------------------------------------------------------

### Convolutional Neural Network $3$
La terza rete convoluzionale è composta da $4$ strati. Due strati combinati di convoluzione e pooling, uno strato completamente connesso e uno strato softmax con ReLU utilizzato come funzione di attivazione. Questa architettura verrà rappresentata come CNN-$3$ per il resto del documento.

----------------------------------------------------------------

## Dataset
E' stato utilizzato CIFAR$10$ come dataset. Questo è composto da $60000$ immagini a colori di taglia $32 \times 32$ divisa in $10$ classi, chiamate aeroplano, automobile, uccello, gatto, cervo, cane, rana, cavallo, nave, camion. Tra queste immagini, $50000$ sono già state scelte per il training e le rimanente per il testing. 
Sono state utilizzate le prime $10000$ immagini dal training set come set di validazione. $10$ immagini campione da ognuna delle $10$ classi del dataset sono mostrate nella figura sottostante.

immagine

----------------------------------------------------------------

## Preprocessing
Se ai dati grezzi viene applicato un qualsiasi metodo di classificazione, essi non producono una buona accuratezza, come può essere verificato dai risultati ottenuti. L'obiettivo di questo paper è mostrare quanto può variare l'accuracy con l'applicazione di alcune tecniche di preprocessing well-known su alcune semplici CNN. Alcune delle tecniche di preprocessing sono menzionate nei paragrafi seguenti.

### Mean Normalization
La media lungo ciascuna delle feature (dimensioni delle immagini) dei training sample è calcolata e sottratta da ciascuna delle immagini. In questo modo, l'intero training set è trasformato in dati organizzati. Perciò, la luminosità dell'intero training set è normalizzata rispetto ad ogni dimensione. Questo si ottiene tramite la formula:

$$X' = X -\mu$$

dove $X'$ è il dato normalizzato, $X$ è il dato originale e $\mu$ è il vettore medio lungo tutte le feature di $X$.

----------------------------------------------------------------

### Standardization
I dati vengono prima normalizzati rispetto alla media e successivamente viene calcolata e divisa la deviazione standard lungo ciascuna delle caratteristiche dei campioni di addestramento. Ciò rende i dati finali normalizzati rispetto alla media e alla varianza. Quindi i dati grezzi sono organizzati rispetto sia alla media che alla varianza di ciascuna dimensione dell'insieme di addestramento. Questa è la standardizzazione dei dati di input $X$ eseguita tramite la formula:

$$X' = (X - \mu) / \Sigma $$

dove $X'$ è il dato normalizzato, $\mu$ è il vettore medio lungo tutte le feature e $\Sigma$ è il vettore della deviazione standard lungo tutte le feature.

----------------------------------------------------------------

### Zero Component Analysis
Zero Component Analysis (ZCA) fu applicato per la prima volta sui training data da Krizhevsky. La trasformazione ZCA rende gli edge degli oggetti più prominenti, come può essere osservato nell'immagine sottostante

immagine

IL layer convoluzionale individua varie feature attraverso le feature map basandosi su questi edge.

Il metodo di esecuzione di ZCA è descritto in dettaglio. Inizialmente, i dati ($X$) vengono normalizzati in base alle dimensioni mediante il ridimensionamento delle caratteristiche con la seguente formula:

$$X' = X/ 255$$

Successivamente, vengono normalizzati rispetto alla media come visto in precedenza e, successivamente, viene calcolata la decomposizione in valori singolari della matrice di covarianza dei dati normalizzati rispetto alla media. Infine, viene eseguita la sbiancatura con la seguente formula:

$$X_{ZCA} = U.diag(1/ \sqrt{diag(S) + \varepsilon}).U^{\top}.X'.$$

dove $diag(a)$ rappresenta la matrice diagonale della matrice data $a$, $U$ è la matrice degli autovettori e $S$ è la matrice degli autovalori della decomposizione ai valori singolari della matrice di covarianza, $U^{\top}$ è la trasposta della matrice degli autovettori $U$, $\varepsilon$ è il coefficiente di sbiancamento. Questo metodo di preelaborazione introduce un altro iperparametro, il coefficiente di sbiancamento $\varepsilon$.

----------------------------------------------------------------

## Training and Testing
Il metodo di addestramento e test su CNN-$3$ con preelaborazione ZCA è stato dimostrato dal diagramma a blocchi nella figura sottostante. Qui è stata mostrata la struttura di output dei dati sotto ogni blocco. Durante l'addestramento, la rete apprende i parametri sconosciuti e, durante il test, predice la classe di output.

immagine

Il training avviene utilizzando un insieme casuale dei $40000$ dati per generalizzare il processo. Tutti i dati sono segregati in dimensioni $3 \times 32 \times 32$ poiché sono immagini a colori (R, G, B) di dimensioni $32 \times 32$. E' stato utilizzato un minibatch di dimensione $50$ per lo stochastic gradient descend minibatch. A causa di questa randomizzazione e dei valori iniziali casuali selezionati per ciascuno degli strati (valori per pesi e bias), l'accuratezza dell'output varierà ad ogni esecuzione. Pertanto, sono state prese le accuratezze medie di tre esecuzioni riuscite per la generalizzazione, mantenendo costanti i valori degli iperparametri (tasso di apprendimento, costo di regolarizzazione, dimensione del minibatch). Il tasso di apprendimento è stato utilizzato con un fattore di decadimento dello $0.1$ dopo $10$ incrementi non riusciti delle accuratezze di convalida, per ottimizzare l'accuratezza del test.

----------------------------------------------------------------

## Results


----------------------------------------------------------------

## Conclusion


----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Domande


----------------------------------------------------------------

# Related to
- [[Intelligenza Artificiale]]
- [[Statistical Methods for Machine Learning]]

----------------------------------------------------------------