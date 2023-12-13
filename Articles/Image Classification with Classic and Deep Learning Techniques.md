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
Given a dataset divided into $8$ different classes, for each image in the dataset, the goal is to predict the class it belongs to. To do so, we implement and evaluate four different systems: BoVW approach, MLP based, and CNNs archtectures: fine-tuning an existing one and designing one from scratch. In each case, the model is trained with a subset of images, and tested with unseen images to validate the performance by means of the accuracy and loss. In the figure below, we can see a simplified scheme of the system.



-----------------------------------------------------------------

## Data

-----------------------------------------------------------------

## Bag of Visual Words

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