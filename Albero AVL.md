# Albero AVL #
Un **Albero AVL** o **Albero Binario di Ricerca Bilanciato** è una [[Struttura Dati]] basata su un [[Albero]] la quale garantisce un tempo di ricerca logaritmico.<br />
Pur partendo da un albero bilanciato, a fronte di inserimenti e cancellazioni, il bilanciamento dell'albero potrebbe perdersi e, con l'aumentare del numero di operazioni effettuate, le prestazioni degraderebbero.<br />
E' quindi opportuno mantenere il bilanciamento anche quando si inseriscono o si cancellano elementi.<br />
Un albero AVL con $n$ nodi ha altezza $O(\log(n))$.<br />

------------------------------------------------------------

#### Bilanciamento in Altezza ####
Un albero è bilanciato in altezza se le altezze dei sottoalberi sinistro e destro di ogni nodo differiscono al più di un'unità.<br />

------------------------------------------------------------

#### Fattore di Bilanciamento ####
Il fattore di bilanciamento $\beta(v)$ di un nodo $v$ è la differenza tra l'altezza del sottoalbero sinistro e quella del sottoalbero destro di $v$.<br />
$$\beta(v) = altezza(sin(v)) - altezza(des(v))$$

------------------------------------------------------------

Poichè inserimenti e cancellazioni potrebbero far perdere il bilanciamento di un albero AVL, esso dovrà essere ripristinato usando opportune rotazioni. le rotazioni vengono effettuate su nodi sbilanciati, ovvero su nodi il cui fattore di bilanciamento in valore assoluto è $\geq 2$. Ogni rotazione richiede tempo $O(1)$.<br />
Le operazioni _search_, _insert_ e _delete_ in un albero AVL con $n$ nodi richiedono tutte tempo $O(\log(n))$.<br />

------------------------------------------------------------
