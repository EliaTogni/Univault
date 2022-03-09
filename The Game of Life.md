[[Simulation]] pseudo agent creata da Conway nel 1970.
La situazione iniziale consiste in una regione abitata nella quale gli abitanti seguono queste regole:
- ogni individuo vivo con meno di due vicini vivi muore (_underpopulation_);
- qgni individuo vivo con più di tre vicini vivi muore (_overpopulation_);
- qualsiasi individuo vivo con due o tre vicini vivi resta in vita;
- quando esattamente tre individui condividono uno spazio vuoto, un nuovo individuo nasce in quello spazio.<br />

---------------------------------------------------------------

La simulazione si basa sull'avere un agente per ogni individuo in una griglia discreta bidimensionale.<br />
Ogni cella di questa griglia può contenere al più un agente.<br />
E' necessario definire la logica che modelli il comportamento degli agenti. Lo stato di ogni agente è facilmente definibile da una variabile binaria, in cui il valore $1$ indica che nella cella è presente un abitante vivo mentre $0$ indica il viceversa.<br />