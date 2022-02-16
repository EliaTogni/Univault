Un **albero di decisione** è una struttura dati derivata da un [[Albero]]. Relativamente ad algoritmi di ordinamento, viene visto come la dinamica dell' algoritmo di ordinamento che si basa sui confronti. Infatti, un algoritmo di ordinamento basato sui confronti, durante l'esecuzione, produce un albero di decisione o, meglio, un cammino all'interno di un albero di decisione.

![[AlberoDecisioneAlgo.png]]

Ogni nodo dell'albero di decisione corrisponde ad un confronto mentre ogni arco corrisponde ad uno dei possibili risultati del confronto.<br />
Le foglie dell'albero di decisione rappresentano, quindi, le **permutazioni dell'input**. Ogni foglia individua un unico cammino a partire dalla radice e, quindi, i confronti che permettono di ordinare l'input.<br />
L'altezza di questo albero rappresenta il tempo dell'algoritmo di ordinamento. In un generico albero, l'altezza rappresenta il cammino più lungo all'interno dell'albero binario. Il cammino più lungo è dato anche dal massimo numero di confronti che è necessario effettuare.<br />

Le possibili permutazioni dell'input su $n$ elementi sono $n!$ permutazioni. Le foglie devono allora prevedere tutte le possibili permutazioni dell'input.<br />
Data $t$, altezza dell'albero di decisione, il massimo numero di foglie è pari a $2^t$ e deve essere completamente blanciato.<br />
Da questo si ricava che $t \geq \log(n!)$.<br />

$$\log(n!) \geq \log \Bigg(\prod_{i = \frac{n}{2}+1}^{n} i \Bigg)\geq \log(\frac{n}{2})^{frac{n}{2}} = \frac{n}{2}\log(\frac{n}{2}) \sim n\log(n)$$

Di conseguenza si ha un lower bound dell'altezza dell'albero pari a $n\log(n)$. Ma, come già ribadito, l'altezza dell'albero trova una diretta corrispondenza nel tempo di esecuzione dell'algoritmo. Quindi, il tempo minimo di esecuzione di un algoritmo di ordinamento basato sui confronti su un input di dimensione $n$ è almeno di $n\log(n)$ unità di tempo.

