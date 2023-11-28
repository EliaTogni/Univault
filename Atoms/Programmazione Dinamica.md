La **Programmazione Dinamica** è una tecnica di progettazione di un [[Algoritmo]] **bottom-up**.<br />
Questa tecnica può essere descritta nel seguente modo:
- Si identificano dei sottoproblemi del problema originario, e si utilizza una tabella per memorizzare i risultati intermedi dei sottoproblemi;
- inizialmente si definiscono i valori iniziali di alcuni elementi della tabella, corrispondenti ai sottoproblemi più semplici;
- al generico passo $i$, si avanza in modo opportuno sula tabella, calcolando il valore della soluzione di un sottoproblema (corrispondente ad un dato elemento della tabella) in base alla soluzione dei sottoproblemi precedentemente risolti (corrispondenti ad elementi della tabella precedentemente calcolati);
- alla fine, restituiamo la soluzione del problema originario, la quale è stata memorizzata in un particolare elemento della tabella.

--------------------------------------------------------------