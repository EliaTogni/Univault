Recent technological advances have facilitated the production of multiple genome-wide high-throughput biological data types, collectively termed 'omics'. Analysis of omics datasets was proven invaluable for basic biological research and for medicine.
Until recently, research in computational biology has focused on analyzing a single omic type. While such inquiry provides insights on its own, methods for integrative analysis of multiple omic types may reveal more holistic, systems-level insights. Omic profiles of large cohorts can help to better characterize human disease, facilitating more personalized treatment of patients. In oncology, analysis of large datasets has led to the discovery of novl cancer subtypes. The classification of tumors into there subtypes is now used in treatment decision. However, these subtypes are usually defined based on a single omic, rather than through an integrative analysis of multiple data types The large international projects now provide multi-omic cohort data, but better methods for their integrated analysis are needed.

There are several approaches to multi-omics clustering:
The simplest approach, termed **early integration**, concatenates all omic matrices and applies single-omic clustering on the resulting matrix. This type of method probabilistically models the distribution of numeric, count, and discrete features. Early integration increases the dimensionality of the data and ignores the different distributions of values in different omics. 

**Late integration** methods cluster each omic separately, and then integrate the clustering results. Late integration ignores interactions that are weak but consistent across omics.

**Middle integration** approaches build a single model that accounts for all omics. These models include joint dimension reduction of omic matrices and similarity-based analyses.
Because of the high number of features and the complexity of dimension reduction algorithms, feature selection is required. Similarity based methods handle these shortcomings by working with inter-patient-similarities. These methods have improved runtime, and are less reliant on feature selection. Examples are **SNF** and **rMKL-LPP**.<br />
SNF builds a similarity network of patients per omic and iteratively updates these networks to increase their similarity until they converge to a single network, which is then partitioned using spectral clustering.

All the middle integration methods above use iterative optimization algorithms, and in some cases guarantee only conver-gence to local optimum.

All middle integration methods for multi-omics clustering developed within the bioinformatics community assume full datasets, i.e., data from all omics were measured for each patient. However, in real experimental settings, often for some patients, only a subset of the omics were measured. We call these **partial datasets** in the rest of the paper. This phenomenon is already prevalent in existing multi-omic datasets, such as TCGA, and will increase as cohorts grow. Being able to analyze partial data is of paramount importance due to the high cost of experiments and the unequal cost for acquiring data for different omics. Naive solutions like using only those patients with all omics measured or imputation have obvious disadvantages.

A close problem to multi-omics clustering was researched in the machine learning community. In the area of 'multi-view learning,' methods for multi-view clustering actually solve the multi-omic clustering problem.

PVC is such a method for clustering in the presence of partial data, which is based on joint non-negative matrix factorization, such that the objective function only considers observed values. This method has not been previously applied on multi-omic data.


**NEMO** (NEighborhood based Multi-Omics clustering) is a simple algorithm for multi-omics clustering. NEMO does not require iterative optimization and is faster than prior art.
NEMO is inspired and built on prior similarity-based multi-omics clustering methods such as SNF.
NEMO works in three phases. First, an inter-patient similarity matrix is built for each omic. Next, the matrices of different omics are integrated into one matrix. Finally, that network is clustered.

