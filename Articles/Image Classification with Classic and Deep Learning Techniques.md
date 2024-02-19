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
L'approccio Bag of Visual Words consiste nel estrarre dei [[Local Descriptor |local descriptors]] a partire dai training data, clusterarli nello spazio delle feature multidimensionale al fine di creare visual words e contare il numero di words in ogni immagine.

Viene generato un istogramma per ogni label e usato per allenare un classificatore come [[Statistical Methods for Machine Learning#Support Vector Machines |Support Vector Machine]] (SVM). 

immagine

In questa sessione, i metodi usati per implementare il sistema BoVW sono spiegati in dettaglio e i risultati ottenuti con ogni configurazione sono presentati ed analizzati. Per questo motivo, l'accuratezza viene calcolata con $8$(stratified) fold cross-validation in ogni caso.
### Keypoints and descriptors

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

### Deep Features, SVM and BoVW

-----------------------------------------------------------------

## InceptionV3

### Changing the network architecture

-----------------------------------------------------------------

### Unfreezing some layers

-----------------------------------------------------------------

### Removing blocks of layers from InceptionV3

-----------------------------------------------------------------

### Tiny dataset

-----------------------------------------------------------------

### Random search to tune the hyperparameters

-----------------------------------------------------------------

## Designing out own CNN

### Kernel Size

-----------------------------------------------------------------

### Number of filters

-----------------------------------------------------------------

### Activation functions

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