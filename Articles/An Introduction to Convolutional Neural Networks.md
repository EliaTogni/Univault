---
"Titolo:": An Introduction to Convolutional Neural Networks
Sottotitolo: 
"Autore:": Keiron O’Shea, Ryan Nash
"Casa Editrice:": 
"Anno:": "2017"
"DOI:": 10.48550/arXiv.1511.08458
"Link:": https://doi.org/10.48550/arXiv.1511.08458
---
# Abstract
L'ambito del machine learning ha preso una piega drammatica negli ultimi tempi, con l'insorgere delle Artificial Neural Network (ANN). Questi modelli computazionali ispirati dalla biologia sono in grado di superare di gran lunga le performance delle precedenti forme di intelligenza artificiale nelle comuni task di machine learning. Una delle forme più impressionanti delle architetture ANN è
quella delle Convolutional Neural Network (CNN). Le CNN sono usate per risolvere complesse task di pattern recognition basate su immagini e, con la loro architettura precisa nonostante la sua semplicità, offrono un metodo semplificato per approcciarsi alle ANN.<br />
Questo documento fornisce una breve introduzione alle CNN, discutendo articoli pubblicati di recente e tecniche di recente sviluppo.

----------------------------------------------------------------

# Articolo
## Introduction
Le Artificial Neural Networks sono sistemi di processing fortemente ispirati al modo in cui il sistema nervoso opera. Le ANN sono principalmente composte da un alto numero di nodi computazionali interconnessi (neuroni), il cui lavoro si intreccia in un fashion distribuito per apprendere collettivamente dagli input, al fine di ottimizzare l'output finale.

La struttura base di una ANN può essere modellata come mostrato nell'immagine sottostante. L'input, tipicamente nella forma di un vettore multidimensionale, viene dato in pasto all'input layer il quale lo distribuirà agli hidden layer. Quest'ultimi prenderanno decisioni basate sui layer precedenti e valuteranno come un cambiamento stocastico al loro interno danneggi o migliori l'output finale, e questo è chiamato il processo di apprendimento. Avere più hidden layer impilati l'uno sull'altro è comunemente chiamato [[Intelligenza Artificiale#Deep Learning|deep learning]]

Nell'immagine sottostante è possibile osservare una semplice feedforward neural network a tre layer, composta da un input layer, un hidden layer e un output layer. Questa struttura è la base per innumerevoli architetture ANN, incluse feedforward NN, Restricted Boltzmann Machines e recurrent NN.

immagine

I due paradigmi di learning fondamentali nelle task di image processing sono il learning supervisionato e non supervisionato. Il supervised learning è l'apprendimento attraverso input pre-etichettati, i quali agiscono come target. Per ogni esempio di traning, ci sarà un insieme di valori in input (vettori) e uno o più valori di output associati. L'obiettivo di questo tipo di allenamento è di ridurre l'errore di classificazione complessivo del modello. 

L'unsupervised learning differisce nel fatto che il training set non include alcuna label. Il successo dipende dalla capacità del network di ridurre o aumentare una funzione di costo associata. Tuttavia, è importante tenere a mente che le task di pattern recognition più incentrate sulle immagini tipicamente sfruttano la classificazione usando supervised learning.

Le Convolutional Neural Network (CNN) sono analoghe alle tradizionali ANN nel senso che sono composte da neuroni che si auto-regolano tramite learning. Ogni neurone riceverà un input e performerà un'operazione (come il prodotto scalare seguito da una funzione non lineare). Dai vettori di immagini dati in pasto come input all'etichetta di classe coem score finale, la rete nella sua interezza esprimerà comunque una singola funzione di score (il peso). L'ultimo layer conterrà delle funzioni di loss associate con le classi.

L'unica differenza notabile tra le CNN e le ANN tradizionali è che le CNN sono principalmente utilizzate nel campo del pattern recognition in immagini. Questo permette di codificare feature specifiche delle immagini nell'architettura, rendendo la rete più adatta alle task image-focused e, di conseguenza, riducendo il numero di parametri richiesti per impostare il modello.

Una delle più importanti limitazioni delle tradizionali ANN è il fatto che esse tendono a faticare con la complessità computazionale richiesta per processare dati sotto forma di immagini.<br />
Comuni set di dati di riferimento per il machine learning, come il database MNIST di cifre scritte a mano, sono adatti per la maggior parte delle forme di reti neurali artificiali (ANN), grazie alla sua relativamente ridotta dimensionalità delle immagini di soli $28 \times 28$. Con questo set di dati, un singolo neurone nel primo strato nascosto conterrà $784$ pesi ($28 \times 28 \times 1$, considerando che MNIST è normalizzato solo per valori in bianco e nero), il che è gestibile per la maggior parte delle forme di reti neurali artificiali (ANN).

Se si considera un input di immagine a colori più sostanziale di dimensioni $64 \times 64$, il numero di pesi su un singolo neurone del primo strato aumenta notevolmente a $12.288$. Si tenga anche presente che, per gestire questa scala di input, la rete dovrà essere molto più grande di quella utilizzata per classificare cifre MNIST normalizzate a colori. In questo modo, si comprenderanno gli svantaggi nell'uso di modelli di questo tipo.

### Overfitting
Perchè questo è importante? Certamente si potrebbe aumentare il numero di hidden layer nella rete e, anche, incrementare il numero di neuroni in ciascuno dei layer. Questo però non viene fatto principalmente per due motivi.<br />
Il primo motivo è il non avere illimitata potenza computazionale e tempo per allenare queste enormi ANN mentre il secondo è il voler annullare o ridurre gli effetti dell'overfitting.


----------------------------------------------------------------

## CNN architecture
### Overall architecture

----------------------------------------------------------------

### Convolutional layer

----------------------------------------------------------------

### Pooling layer

----------------------------------------------------------------

### Fully-connected layer

----------------------------------------------------------------

## Recipes

----------------------------------------------------------------

## Conclusion

----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Domande

----------------------------------------------------------------

# Related to


----------------------------------------------------------------