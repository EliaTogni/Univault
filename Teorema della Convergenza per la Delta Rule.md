Il **Teorema della Convergenza per la Delta Rule** sostiene ciò:

Sia $L = {(\textbf{x}_{1,}, o_{1}), ..., (\textbf{x}_{m}, o_{m})}$ un set di sample per il training, ognuno dei quali consiste di un vettore di input $\textbf{x}_{i} \in \!R^{n}$ e dell'output desiderato $o_{i} \in \{0,1\}$ per il vettore di input.
Perciò, definito $L_{0} = \{(\textbf{x}, o) \in L | o  = 0\}$ e $L_{1} = \{(\textbf{x}, o) \in L | o = 1\}$. Se $L_{0}$ e $L_{1}$ sono lineramente separiabili, cioè se esiste $\textbf{w} \in \!R^{n}$ e $\theta \in \!R$ tale che:

$$\forall (x, 0) \in L_{0}: \textbf{wx} < \theta \quad\text{ and}\quad \\
\forall (x, 1) \in L_{1}: \textbf{wx} \geq \theta$$

allora la procedura di Widrow-Hoff termina.