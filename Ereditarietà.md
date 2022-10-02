# Ereditarietà #
Nella [[Programmazione Orientata agli Oggetti]], il meccanismo dell'**Ereditarietà** è utilizzato in fase di strutturazione/definizione/pianificazione del software o in successive estensioni e permette di derivare nuove classi a partire da quelle già definite, realizzando così una gerarchia di classi.<br />
Una classe derivata attraverso l'ereditarietà (_sottoclasse_ o classe figlia) mantiene i metodi e gli attributi delle classi da cui deriva (_classi base_, _superclassi_ o classi madre); inoltre, può definire i propri metodi o attributi, e ridefinire il codice di alcuni dei metodi ereditati tramite un meccanismo chiamato **Overriding**.<br />

---------------------------------------------------------------

### Sottotipizzazione ###
Sebbene concettualmente esistano delle differenze ben marcate, il meccanismo di eredità fra classi (_subclassing_), attraverso il meccanismo del [[Polimorfismo]], permette nei linguaggi ad oggetti di modellare l'eredità fra tipi (_subtyping_).<br />
Secondo il [[Principio di Sostituzione di Liskov]], un tipo $S$ è un _sottotipo_ di $T$ quando è possibile sostituire tutte le istanze di $T$ con delle istanze di $S$ mantenendo intatto il funzionamento del programma.<br />
Con gli opportuni accorgimenti è possibile creare una relazione di classe-sottoclasse che rispetti anche i vincoli della relazione tipo-sottotipo.<br />

--------------------------------------------------------------