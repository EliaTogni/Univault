Un **R - Layer Perceptron** è una rete neurale alla quale è associato un grafo $G = ( U, C )$, il quale soddisfa le seguenti restrizioni.
1) $U_{in} \cap U_{out} = \emptyset ,$
2) $U_{hidden} = U_{hidden}^{1} \cup ... \cup U_{hidden}^{(r-2)}, \forall 1\leq i < r - 2 : U_{hidden}^{(i)} \cap U_{hidden}^{(j)} = \emptyset$
3) $C \subseteq ( U_{in} \times U_{hidden}^{(1)}) \cup \bigcup_{i = 1}^{r-3} U_{hidden}^{(i)} \times U_{hidden}^{(i+1)} \cup$