Un **Algoritmo Greedy** è una tecnica algoritmica (related to [[Algoritmo]]) la quale viene tipicamente utilizzata per risolvere problemi di _ottimizzazione_.<br />
In un generico problema di ottimizzazione si avrà:
- Un insieme di candidati possibili;
- l'insieme dei candidati che sono già stati utilizzati;
- una funzione ammissibile, la quale verifica se un insieme di candidati fornisce una soluzione (anche se non necessariamente ottima) al problema considerato;
- una funzione _ottimo_ che verifica se un insieme di candidati fornisce una soluzione ottima al problema considerato;
- una funzione di selezione _seleziona_ che indica quale dei candidati non ancora esaminati sia il più promettente;
- una funzione obiettivo che fornisce il valore di una soluzione.

Per risolvere il problema di ottimizzazione, si dovrà trovare un insieme di candidati che goda delle seguenti proprietà:
- E' una soluzione del problema;
- ottimizza il valore della funzione obiettivo.

L'approccio generalmente seguito dalla tecnica greedy nel risolvere problemi di ottimizzazione è il seguente: inizialmente, l'insieme dei candidati selezionati $S$ è vuoto. Al generico passo $i$, si cerca di aggiungere a questo insieme il miglior candidato $x$ tra quelli non ancora considerati (viene segnalato dalla funzione _seleziona_). Se questa aggiunta rende l'insieme $S \cup \{x\}$ non ammissibile, allora si scarta $x$ e non lo si considera più in futuro. Altrimenti, si inserisce permanentemente $x$ nell'insieme dei candidati selezionati. Ogni volta che si inserisce un nuovo candidato in questo insieme, si verifica se si è raggiunta la soluzione ottima.<br />

--------------------------------------------------------------