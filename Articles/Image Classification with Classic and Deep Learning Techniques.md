---
"Titolo:": Image Classification with Classic and Deep Learning Techniques
"Autore:": Òscar Lorente CorominasIan, Riera Smolinska, Aditya Sangram Singh Rana
"Casa Editrice:": Universitat Autònoma de Barcelona
"Anno:": "2021"
"DOI:": arXiv:2105.04895v1
"Link:": https://doi.org/10.48550/arXiv.2105.04895
---
# Abstract
La classificazione delle immagini in base al contenuto è uno dei topic più studiati nel campo della **computer vision**. Al giorno d'oggi, questo problema viene comunemente affrontato con l'utilizzo delle **[[Convolutional Neural Networks |convolutional neural networks]]** (CNN) ma negli anni sono stati sviluppati vari approcci. In questo report verrà implementato un classificatore di immagini usando sia classiche tecniche di computer vision sia tecniche di deep learning. Nel dettaglio, verranno analizzate le performance di un classificatore **Bag of Visual Words** usando [[Statistical Methods for Machine Learning#Support Vector Machines |support vector machines]], [[Intelligenza Artificiale#Multi-layer perceptron |multy-layer perceptron]], una architettura esistente chiamata _InceptionV3_ e una nuova CNN, _TinyNet_, modellata da zero.<br />
Ciascun caso è stato valutato in termini di accuracy e loss e sono stati ottenuti risultati che variano tra $0.6$ e $0.96$, in base al modello ed alla configurazione utilizzata.

----------------------------------------------------------------

# Articolo
## Introduction

-----------------------------------------------------------------

## Problem definition
Dato un dataset suddiviso in $8$ classi differenti, l'obiettivo è, per ciascuna immagine nel dataset, predire a quale classe essa appartiene. Per fare ciò, vengono implementati e valutati quattro sistemi differenti: l'approccio BoVW, MLP based e architetture CNN: fine-tuning di una architettura esistente e il design di una da zero. In entrambi i casi, il modello è allenato con un sottoinsieme di immagini e testato con immagini mai viste prima al fine di validarne la performance in termini di accuracy and loss. Nella figura sottostante è possibile osservare uno schema semplificato del sistema.

![[SimplifiedImageClassificationSystem.png]]

-----------------------------------------------------------------

## Data
Il dataset contiene $2688$ immagini da $8$ classi differenti: costa, foresta, autostrada, città, montagna, campagna, strada e palazzo. Nella figura sottostante è possibile osservare un sample di ogni classe. Per allenare e valutare adeguatamente i sistemi implementati, il dataset è stato diviso in un training set di $1881$ immagini ($70\%$) ed in un test set di $807$ immagini ($30\%$).

E' importante osservare che se il numero di sample in ogni classe è distribuito in maniera non equa, l'accuratezza come metrica di valutazione non è una buona scelta.

-----------------------------------------------------------------

## Bag of Visual Words
L'approccio Bag of Visual Words consiste nel estrarre dei [[Local Descriptor |local descriptors]] a partire dai training data, clusterarli nello spazio delle feature multidimensionale al fine di creare **visual words** e contare il numero di words in ogni immagine. Questo processo è simile a come le parole vengono estratte da un testo per costruire un vocabolario.

Viene generato un istogramma per ogni label e usato per allenare un classificatore come [[Statistical Methods for Machine Learning#Support Vector Machines |Support Vector Machine]] (SVM). 

immagine

In questa sessione, i metodi usati per implementare il sistema BoVW sono spiegati in dettaglio e i risultati ottenuti con ogni configurazione sono presentati ed analizzati. Per questo motivo, l'accuratezza viene calcolata con $8$(stratified) fold cross-validation in ogni caso.
### Keypoints and descriptors
Nell'approccio BoVW, viene utilizzato un algoritmo di feature detection al fine di individuare dei **keypoint** ed estrarre i local descriptors da ogni immagine. Per questo motivo, il primo step riguarda il trovare quale algoritmo funziona meglio nel caso di studio utilizzando un classificatore [[Statistical Methods for Machine Learning#The Nearest Neighbour algorithm |k-Nearest Neighboors]]. I descriptors testati sono SIFT, SURF e DAISY:
1) **vanilla descriptors**: in questo scenario, i keypoint sono estratti usando
2) **dense descriptors**: 

-----------------------------------------------------------------

### Classifiers

-----------------------------------------------------------------

### Spatial pyramids

-----------------------------------------------------------------

### Normalization

-----------------------------------------------------------------

### Clustering

-----------------------------------------------------------------
### Reducing dimensionality

-----------------------------------------------------------------

### Fisher vectors

-----------------------------------------------------------------

## MLP
I risultati ottenuti con un approccio classico come il Bag Of Visual Words sono accettabili ma non abbastanza soddisfacenti da considerare il classificatore di immagini implementato come robusto o affidabile. Per questo motivo, è necessario utilizzare tecniche avanzate per migliorare le performance e ottenere i risultati desiderati: il **[[Intelligenza Artificiale#Deep Learning|Deep Learning]]** (DL). Come primo step, si esplorerà l'architettura più semplice, il [[Intelligenza Artificiale#Multi-layer perceptron |multi-layer perceptron]] (MLP).

Sono stati usati un semplice MLP e un layer **softmax**, un tipo specifico di layer di attivazione che viene spesso utilizzato nell'ultimo strato della rete neurale, soprattutto quando il problema è una classificazione multiclasse al fine di  convertire l'output della rete in una distribuzione di probabilità su più classi. La funzione softmax è utilizzata per convertire gli elementi del vettore di input in valori compresi tra $0$ e $1$, e la somma di tutti gli elementi nella sua uscita è sempre $1$. Questo risultato è interpretato come una distribuzione di probabilità sulla quale si basa la decisione di classe.

I risultati in termini di accuracy e loss non sono stati soddisfacenti, come mostrato nella figura sottostante.

immagine

La differenza tra le curve di accuratezza nel training e nella validazione è un indicatore che il modello sta overfittando sui dati di training e, perciò, non è in grado di generalizzare sufficientemente nel caso di sample mai visti. Inoltre, la curva loss di validazione è instabile e non propriamente minimizzata.

Per provare ad ottenere risultati miglior, si è provato a fare fine-tuning di diversi parametri: il learning rate, la size delle immagini, il numero di layer (la profondità della rete), la taglia dei layers, aggiungere normalizzazione o regolarizzazione, e così via. Anche se le performance migliorano marginalmente in alcuni casi, il potenziale del sistema è limitato da fatto che si sta utilizzando un semplice MLP per una task di classificazione di immagini complessa.

### Deep Features, SVM and BoVW
Prima di passare alle CNN, si esplorano ora differenti varianti del MLP al fine di migliorarne i risultati:
1) **Deep Features (DF) + SVM**: si estraggono le DF dall'hidden layer più profondo (quello che precede il layer softmax, dove le feature sono più astratte/generiche) e si usano per allenare un classificatore SVM;
2) **aggregare le predizioni**: si divide l'immagine in input in frammenti, si estrae la predizione per ogni frammento e si aggrega la predizione finale;
   3) **DF come un descriptor denso + BoVW**: si divide l'immagine in input in frammenti, si estraggono le DF dall'ultimo hidden layer per ogni frammetno e si concatenano al fine di creare un feature vector per ogni immagine.  Successivamente, si usa k-means per creare un codebook e allenare un classificatore SVM con l'istogramma di visual words.

I risultati ottenuti sono mostrati nella tabella sottostante. Come osservato, estrarre le DF e usarle per allenare un classificatore SVM non è una valida alternativa. 

Un altro approccio cinsiste nel dividere ogni immagine in frammenti e estrarre DF da ognuno di essi. In questi due altri casi, anche se i risultati sono migliorati leggermente, non solo non sono accettabili ma sono indubbiamente peggiore di uelli ottenuti con l'approccio BoVW classico. Per questo motivo, si conclude che MLP è troppo semplice epr questo problema di classificazione di immagini. 

-----------------------------------------------------------------

## InceptionV$3$
Dall'esplosione dell CNN nel $2012$ con AlexNet, molteplici architetture sono state presentate per affrontare il problema di classificazione, ottenendo risultati sempre migliori in termini di minimizzare l'errore di misclassificazione.
In questo paper, si prova a fare fine-tuning di InceptionV$3$ per adattarlo al dataset in questione. Questa NN, creata da Google, è basata sull'idea di utilizzare moduli Inception per usare differenti size di canali in parallelo, poichè ci sono quattro canali paralleli in ogni modoli, i quali sono concatenati ulteriormente alla fine. Nel dettaglio, ogni modulo include il fattorizzare convoluzioni con filter size larga in un filtro più piccolo, il fattorizzare in convoluzioni asimmetriche e classificatori ausiliari introdotti per correggere il problema del vanishing gradient. 

Questo modello è stato allenato e testato con il dataset ImageNet, il quale contiene circa $1$M di immagini divise in $1000$ classi. Perciò, non ha alcun collegamento con il dataset utilizzato in questo studio. E' quindi necessario adattarlo al problema in questione.

### Changing the network architecture
Il primo approccio consiste nell'usare l'architettura ed i pesi esistenti per modificare solamente l'ultimo layer, il layer softmax. Questo è uno step necessario per adattare l'output al numero di classi nel dataset da analizzare.
Per prima cosa, si freezano tutti i layer tranne l'ultimo, per far sì che lo stage di training non abbia effetto sui pesi preallenati del modello.<br />
Come è possibile osservare nell'immagine sottostante, i risultati migliorano singificativamente usando InceptionV$3$ rispetto a quelli ottenuti con il MLP semplice. In particolare, la differenza tra la training loss e la validation loss è molto più bassa, suggerendo così l'assenza di overfitting. Inoltre, entrambe le loss sono minimizzate correttamente. 

immagine

Nella matrice di confusione illustrata sotto, si nota come InceptionV$3$ performi davvero bene nella maggior parte dei casi ma misclassifichi numerosi sample di montagne e foreste come campagna. Questo è osservabile anche nella curva ROC, poichè l'AUC (Area Under the Curve) è minore. 

immagine

-----------------------------------------------------------------

### Unfreezing some layers
Lo step successivo consiste nell'unfreezare e riallenare alcuni layer di InceptionV$3$ per vedere se i pesi appresi migliorino i risultati. InceptionV$3$ è diviso in $11$ blocchi di Inception e da un totale di $311$ layer, rendendo non intuitivo il selezionare quale layer sbloccare. Per questo motivo, si sbloccheranno i layer per blocchi (partendo sempre dall'inizio).

Nei risultati presentati nella tabella sottostante, come atteso, l'accuratezza del test aumenta per ogni blocco del modello sblocato e riallenato. Tuttavia, il numero di parametri allenabili aumenta anch'esso e, di conseguenza, il costo computazionale è molto più alto.

immagine
 
-----------------------------------------------------------------

### Removing blocks of layers from InceptionV$3$
Al fine di ridurre il numero di parametri, si è deciso di rimuovere alcuni blocchi Inception e studiare le performance del nuovo modello sul dataset in analisi. Per far ciò, si prende l'output di un blocco specifico (e.g., il blocco #$3$, cioè si rimuovono gli $8$ blocchi successivi), si aggiunge un layer di global average pooling $2$d e un layer softmax finale. In ogni caso, il modello completo viene riallenato e necessità di un numero differente di epoche per convergere.

Come si può osservare nella tabella sottostante, rimuovendo $5$ blocchi si ottiene comunque una accuratezza elevata nonostante il numero di parametri sia stato ridotto da $21$M a $5$M. Questo è possibile perchè il dataset in analisi è molto più semplice di ImageNet, in quanto provvisto di solo $8$ classi differenti.

immagine

-----------------------------------------------------------------

### Tiny dataset
Una volta che l'architettura del modello è stata alleggerita, è possibile allenarla con un dataset più piccolo ($50$ sample per classe, per un totale di $400$ sample) per studiarne la performance. I risultati sono presentati nell'immagine sottostante. Come previsto, il modello non impara abbastanza bene nè abbastanza in fretta usando il tiny dataset, poichè necessita di più sample per impostare correttamente i pesi di ogni layer. L'accuratezza risultante è anch'essa più bassa.

immagine

Per migliorare l'apprendimento del nuovo modello con il tiny dataset, si introduce e si valuta l'utilizzo di data augmentation. Per fare ciò, si utilizzano differenti augmentations individualmente e combinate poi, per analizzare se l'aggiunta di ulteriore variabilità ai training fata migliora la performance del nuovo modello.

I risultati, visibili nella tabella sottostante, mostrano che ciascuno dei metodi di aumentazione sta aiutando il modello, perciò la data augmentation contribuisce positivamente alla variabilità dei training data e, di conseguenza, al learning.
Tuttavia, combinando le augmentations i risultati non migliorano ulteriormentein quanto potrebbero distorcere troppo le immagini. Perciò, il flip orizzontale è sufficiente per questo problema.

immagine

-----------------------------------------------------------------

### Random search to tune the hyperparameters
L'ultimo step consiste nel rifinire gli iperparametri del modello necessari ad ottimizzare i risultati di accuratezza della validazione usando le seguenti opzioni:
- **optimizer**: SGD, RMSprop, Adam, Adadelta, Adagrad;
- **learning rate**: $0.001$, $0.01$, $0.1$, $0.2$;
- **momentum**: $0.6$, $0.8$, $0.9$;
- **funzione di attivazione**: elu, relu, tanh;

Considerata la taglia della NN, non è possibile effettuare una gridsearch esaustiva, in quanto non fattibile in termini di tempo di computazione. Perciò, verrà utilizzata l'implementazione della random search da keras tuner.

I risultati migliori sono ottenuti con l'ottimizzatore SGD, learning rate $0.001$, momentum $0.9$ e funzione di attivazione relu. Le curve di accuratezza e loss sono rappresentate nell'immagine sottostante.

immagine

Come era prevedibile, il modello necessita di più epoche per raggiungerere la convergenza rispetto all'originale InceptionV$3$, in quanto si sta utilizzando un dataset di dimensioni notevolmente inferiori. Tuttavia, l'accuratezza risultante è più alta e la loss è minimizzata correttamente: ciò prova che la rete è stata correttamente affinata per il caso in analisi.<br />
La curva ROC e la matrice di confusione nella figura sottostante indicano che il nuovo modello è migliorato in termini di performance nelle classi ritenute più complesse da classificare nell'originale CNN. Tuttavia, il recupero (recall) della classe opencountry è diminuito, perciò questo modello potrebbe essere migliorato ulteriormente.

-----------------------------------------------------------------

## Designing out own CNN
Per fittare meglio il modello al problema, si produce il design di una CNN da zero. Il punto di partenza di questa rete è formato da due blocchi di un layer convoluzionale $2D$ e un max pooling $2D$, seguito da un layer dense output con una funzione di attivazione softmax. E' possibile osservare il modello nell'immagine sottostante, insieme alle performance di questa baseline in termini di accuracy e loss.

immagine

Si ottiene una accuratezza di $0.78$, già migliore di quella ottenuta con il MLP. Tuttavia, la curva di accuratezza mostra overfitting mentre la curva di loss è instabile ed inizia a divergere dal validation set.

I parametri utilizzati dai layer di convoluzione sono quelli di default degli esempi di Keras: Kernel size $5 \times 5$, $32$ filtri, funzione di attivazione Relu e inizializzazione Normale Gorot dei pesi.

### Kernel Size
Al fine di migliorare il sistema, si affinano i differenti parametri dei layer convoluzionali per scoprire i limiti di questa baseline. ll primo parametro da tunare è la kernel size, portando così ai risultati della tabella sottostante.

immagine

La migliore accuratezza è ottenuta con le size di $5 \times 5$ e $7 \times 7$. Tuttavia, per questa CNN si introduce un'ulteriore metrica da prendere in considerazione: il rapporto **accuracy-parameter**, che può essere calcolato come:

$$ratio = \frac{accuracy*10^5}{number \space of \space parameters}$$

Tenendo in considerazione questo rapporto, il miglior compromesso tra accuratezza, loss e rapporto è ottenuto con un kernel $3 \times 3$ e perciò si userà nei test seguenti. Questa taglia di kernel è stata introdotta da VGG ed è diventata uno standard. Per esempio, due layer di un kernel $3 \times 3$ producono un risultato migliore di un layer con kernel size $5 \times 5$.

-----------------------------------------------------------------

### Number of filters
Cambiando la kernel size si è ottenuto un miglioramento nel ratio in cambio di un peggioramento dell'accuracy. Di conseguenza, sono necessari ulteriori accorgimenti. Si modifica quindi il numero dei filtri usati in entrambi i layer convoluzionali, ottenendo i risultati mostrati nella tabella sottostante.

immagine

Di nuovo, il parametro che restituisce un'accuracy miglore, $64$ filtri, riduce considerabilmente la ratio. 

Invce di usare lo stesso numero di filtri per entrambi i layer, è possibile testare con due differenti numeri di filtri. La migliore combinazione trovata è data dall'utilizzare $64$ filtri per il primo layer e $32$ per il secondo. Questo risultato migliora la ratio dalla baseline mantenendo l'accuratezza, perciò si manterrà questa configurazione da qui in avanti.

-----------------------------------------------------------------

### Activation functions
Il prossimo parametro da affinare è la funzione di attivazione.è In questo caso è possibile osservare nella tabella sottostante come la funzione di attivazione di default, la ReLU, permette di ottenere i risultati migliori.

immagine

-----------------------------------------------------------------

### Weight initialization


-----------------------------------------------------------------

### Adding depth

-----------------------------------------------------------------

### Optimizer and Learning rate

-----------------------------------------------------------------

### Input size

-----------------------------------------------------------------

### Grad-CAM

-----------------------------------------------------------------

## Revisiting weight initialization

-----------------------------------------------------------------

## Bringing everything togheter: TinyNet

### Main Architecture

-----------------------------------------------------------------

### Adding Residual connections

-----------------------------------------------------------------

### Adding Depthwise Convolutions

-----------------------------------------------------------------

### Optimizers

-----------------------------------------------------------------

## Conclusions

----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Related to
- [[Intelligenza Artificiale]]
- [[Statistical Methods for Machine Learning]]

----------------------------------------------------------------