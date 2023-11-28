Una sequenza è detta **UNIMODALE** se e solo se:
$$\exists\text{ } k \text{ tale che } A[1]>A[2]>...>A[k]< A[k+1]<...<A[n]$$
oppure
$$A[1]<A[2]<...<A[k]>A[k+1]>...>A[n]$$

Una sequenza è, invece detta **BITONICA** quando può essere trasformata in una sequenza unimodale mediante una permutazione ciclica di se stessa.<br />
A è bitonica se e solo se $\exists$ una permutazione ciclica di $A$ tale per cui mi dà una sequenza unimodale:<br />
$j \text{ tale che } A[j], .., A[n], A[1], ..., A[j-1] \text{ sia unimodale}$

![[Images/Sequenze.png]]

Se una sequenza è unimodale, essa è, ovviamente, anche bitonica, grazie alla permutazione identità.<br />
Inoltre, gli elementi di fine array devono essere maggiori degli elementi di inizio array per la forma $I$, viceversa nella forma $II$.<br />
Siano $A$,$B$ due sequenze ordinate crescenti (o decrescenti), la sequenza $A \cdot Rev(B)$ è unimodale.<br />

--------------------------------------------------------------

### Proposizione su sequenze BITONICHE ###

Sia $A$ bitonica. Se si esegue _minMax_($A$), si ottiene che:
1) $A_{min}$ e $A_{Max}$ sono bitoniche;
2) Ogni elemento di $A_{min}$ è minore di ogni elemento di $A_{Max}$.

![[Images/minMaxBitonica1.png]]

La dimostrazione di questa proprietà si ha graficamente.<br />

![[Images/minMaxBitonica2.png]]

Questa operazione divide la sequenza a metà e confronta un elemento della prima sequenza con l'elemento della seconda che si trova a distanza $\frac{n}{2}$ dal primo.<br />
Si osserva che le due sequenze così ottenute, evidenziate dal colore rosso, sono entrambe bitoniche.<br />
E', inoltre, evidente anche il secondo punto.

Tali proprietà suggeriscono un approccio [[Divide et Impera |divide et impera]] per le BITONICHE.<br />
1) _minMax_ suddivide il problema su $n$ elementi in istanze più piccole, $A_{min}$ e $A_{Max}$, grazie alla prima proposizione vista in precedenza;
2) Ordinando $A_{min}$ e $A_{Max}$, la funzione _merge_ avviene per concatenazione (grazie alla seconda proposizione dimostrata).

--------------------------------------------------------------

