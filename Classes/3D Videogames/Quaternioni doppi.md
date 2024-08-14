E' possibile anche memorizzare le rotazioni e le traslazioni congiuntamente . Un primo modo e' quello delle [[Trasformazioni#Trasformazioni affini|matrici 4x4]] (che permettono di modellare tutte le trasformazioni affini) ma abbiamo gia' visto che non sono il massimo ne' come utilizzo dello spazio ne' come velocita' di applicazione. 
Un'alternativa e' data dai quaternioni doppi che permettono di modellare le **roto-traslation** o trasformazioni "rigide".
Modellare traslazione e rotazioni nello stesso "pacchetto" ha il vantaggio di essere piu semplice da interpolare. Infatti nel caso delle rappresentazioni di rotazione e traslazione separate bisogna scegliere cosa interpolare prima tra le due e questa scelta porta a risultati molto diversi e solitamente nessuno dei due e' quello che vorremmo ottenere.

I quaternioni doppi si basano su un'altra ipotesi: l'esistenza di un $\varepsilon\neq0$ tale che $\varepsilon^2=0$.
Un quaternione doppio algebricamente non e' altro che un numero immaginario $p+\varepsilon q$ dove $p$ e $q$ sono due quaternioni.
In pratica questo vuol dire memorizzare 8 scalari: (a,b,c,d,e,f,g,h)
$$p+\varepsilon q = a+bi+cj+dk+e\varepsilon+f\varepsilon i+ g\varepsilon j+h \varepsilon k$$
Un quaternione doppio puo' rappresentare:
- un punto -> se $p=0$ e  $e=0$ (la parte reale di q). Equivale a dire $(f,g,h)=(x,y,z)$
- una roto-traslazione->se $||p||=1$ e $p\cdot q=0$. In questo caso p codifica la parte di rotazione mentre q la parte di traslazione

Per eseguire una roto-traslazione si procede come nel caso dei quaternioni:
$$a'\leftarrow b\cdot a \cdot \bar{b}$$
Dove con "$\cdot$" si intende la moltiplicazione tra quaternioni doppi.