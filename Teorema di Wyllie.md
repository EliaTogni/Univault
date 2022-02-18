### Teorema di Wyllie [1979, PhD Thesis] ###
Se l'efficienza di un algoritmo parallelo $E \rightarrow 0$, allora per migliorare l'algoritmo si provi a ridurre $p(n)$ senza degradare il tempo.<br />
Dato un algoritmo $A$, il quale lavora con $p$ processori con una data efficienza $E$, è in generale possibile estendere l'algoritmo a lavorare con un numero inferiore di processori senza che l'efficienza diminuisca significativamente.

$$\text{Se } k>1, \text{ allora } E_{A}\bigg( n, \frac{p}{k} \bigg) \geq E_{A}(n, p)$$

Dato un algoritmo $A$ che lavora con $p$ processori, basta infatti costruire un algoritmo modificato che utilizza $p/k$ processori. Ad ogni nuovo processore si fa corrispondere un blocco di $k$ vecchi processori: ogni nuovo processore usa al più $k$ passi per emulare il singolo passo parallelo dei $k$ processori corrispondenti.<br />
Il tempo di ogni singolo passo è quindi dettato dall'istruzione più lunga moltiplicata per il numero di istruzioni in un passo, $k \cdot t_{i}(n)$.
Il tempo parallelo richiesto è limitato superiormente dalla somma dell'$i$-esimo passo parallelo

$$T(n, \frac{p}{k}) \leq \sum_{i=1}^{k(n)} k \cdot t_{i}(n)$$

Quindi:

$$\sum_{i=1}^{k(n)} k \cdot t_{i}(n) = k \cdot \sum_{i=1}^{k(n)} t_{i}(n) = k \cdot T(n, p(n))$$

Si ha quindi:

$$T(n, \frac{p}{k}) \leq k \cdot T(n, p)$$

Partendo da questa disuguaglianza, si ottiene che $E$ cresce col diminuire dei processori. Infatti:

$$E(n, \frac{p}{k}) = \frac{T(n,1)}{\frac{p}{k}T(n, \frac{p}{k})} \geq \frac{T(n,1)}{\frac{p}{k} \cdot k T(n,p)} = \frac{T(n,1)}{p \cdot T(n,p)} = E(n,p)$$

Nel caso in cui $k \rightarrow p$, accade che:

$$ 1 = E(n,1) = E(n, \frac{p}{p}) \geq E(n,\frac{p}{k}) \geq E(n, p)$$

Attenzione però a mantenere $T(n, \frac{p}{k}) = o(T(n,1))$, altrimenti non ha senso parlare di algoritmo parallelo perchè $E(n,1) = 1$ ma $T(n,p=1) = T(n,1)$, cioè sequenziale.