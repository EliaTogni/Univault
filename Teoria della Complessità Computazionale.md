In Informatica, la **Teoria della Complessità Computazionale** è una branca della **Teoria della Computabilità** che studia le risorse minime necessarie (principalmente tempo di calcolo e memoria) per la risoluzione di un problema.

Per misurare l'efficienza di un algoritmo in maniera univoca, bisogna definire una metrica indipendente dalle tecnologie utilizzate. Per questo motivo si usa fare riferimento ad un modello di calcolo generico: la [[Macchina di Turing]].

Per quel che riguarda la misurazione della risorsa _tempo_, data una macchina di Turing $M$, si dice che $M$ opera in tempo $f(n)$ se $f(n)$ è il massimo numero di passi necessari alla macchina per produrre il risultato su un input $x$ di lunghezza $n$.

Per quel che riguarda la misurazione della risorsa _spazio_, data una macchina di Turing $M$ , si dice che $M$ opera in spazio $f(n)$ se $f(n)$ è il massimo numero di celle visitate durante una computazione su un input $x$ di lunghezza $n$, oltre a quelle occupate dall'input.

Affinchè queste affermazioni siano valide, $f(n)$ dev'essere una _funzione di complessità propria_, cioè deve essere:
- monotona crescente;
- calcolabile in tempo e spazio limitati dal valore della funzione stessa.
Poichè questo tipo di misurazione è molto dettagliato, si introducono approssimazioni che permettano di operare su algoritmi più astratti. In particolare si ricorre alle [[Funzioni Asintotiche]].

### Classi di complessità ###

Partendo dalla misurazione delle risorse computazionali, si possono definire le classi di complessità:
- La classe $TIME(f(n))$ è l'insieme dei problemi che ammettono una macchina di Turing che li risolve e che opera in tempo $O(f(n))$.
- La classe $NTIME(f(n))$ è l'insieme dei problemi che ammettono una [[Macchina di Turing Non Deterministica]] che li risolve e che opera in tempo $O(f(n))$.
- La classe $SPACE(f(n))$ è l'insieme dei problemi che ammettono una macchina di Turing che li risolve e che opera in spazio $O(f(n))$.
- La classe $NSPACE(f(n))$ è l'insieme dei problemi che ammettono una macchina di Turing non deterministica che li risolve e che opera in spazio $O(f(n))$.

Si possono così definire le seguenti classi di complessità:
- $L = SPACE(log(n))$
- $NL = NSPACE(log(n))$
- $P = \cup_{k>0}TIME(n^{k})$
- $NP = \cup_{k>0}NTIME(n^{k})$
.
.
.
.
.


E' possibile caratterizzare anche la classe dei problemi che ammettono algoritmi paralleli efficienti.
- La classe $NC$ è l'insieme dei problemi risolti da algoritmi paralleli veloci con
	- tempo polilogaritmico;
	- hardware polinomiale.

Alcuni esempio di problemi in NC sono la somma di due numeri binari o il problema dell'ordinamento.

In realtà è ragionevole al fine dei casi di studio solo una sottoclasse di NC. Come per P, infatti, se il grado del polinomio è troppo alto (così come le costanti nascoste), il tempo è sì polinomiale ma poco pratico.

### $NC \in FP$ ###
Per ottenere un algoritmo sequenziale partendo da quello parallelo, basta simulare, utilizzando un singolo processore, in sequenza il lavoro dei processori coinvolti. Si ottiene un algoritmo sequenziale polinomiale in tempo.

### $NC = FP?$ ###

La questione $NC = FP$ ripropone il problema di capire se ogni algoritmo sequenziale efficiente è parallelizzabile. Si crede di no, ma il problema è ancora aperto.