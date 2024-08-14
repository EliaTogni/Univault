# Introduzione
Questo tipo di animazione è molto simile dal punto di vista concettuale alle animazioni 2D, con la differenza che al posto di una sequenza di sprite viene usata una sequenza di mesh.
Possiamo notare come nella sequenza di mesh queste condividano tutti gli attributi e l'unica cosa che cambia è la posizione dei vertici: per questo motivo le blend shape vengono rappresentate in memoria come una mesh con diverse geometrie alternative.

*connectivity*:

| Triangolo | spigolo1 | spigolo2 | spigolo3 |
| --------- | -------- | -------- | -------- |
| T1        | V4       | V1         | V2         |
| T2        | V4         | V2         | V5         |
| T3        | V5         | V2         | V3         |

*geometry*:

| Vertice | Geometria 1 | Geometria 2 | ... | Attributo 1 | Attributo 2 | ... |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| V1 | $(x_1,y_1,z_1)$ | $(x_2,y_2,z_2)$ | ... | $a_1$ | $a_2$ | ... |
| V2 | ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... |
Si possono avere blend shape:
- relative -> memorizzate come posizione per vertice e le altre geometrie sono memorizzate come differenza dalla base shape
- assoluta -> ogni shape è memorizzata come posizione per vertice
Queste due modalità sono equivalenti ma il modo assoluto risulta più naturale quando le forme sono pensate per essere usate come alternative (per esempio come keyframe di una sequenza di animazione) mentre quelle relative sono più naturali quando le forme sono pensate per essere sovrapposte (per esempio una forma per l'occhio sinistro chiuso, una per il destro, una per un sorriso, ecc..).

# Keyframe
Inoltre a differenza del corrispettivo 2D non è necessario memorizzare una geometria alternativa per ogni frame (o comunque abbastanza da rendere il movimento fluido) ma si possono memorizzare solamente posizioni importanti (keyframe) e interpolarli per ottenere una forma intermedia. Per esempi avendo due keyframe $S_a$ e $S_b$ espresse in modo assoluto possiamo ottenere una posizione intermedia con la formula:
$$w_a S_a + w_bS_b$$
dove i pesi $w_a$ e $w_b$ dipendono dal tempo. Dato il tempo corrente $t$ tale che $t_a \leq t \leq t_b$ (dove $t_a$ è il tempo in cui l'oggetto deve avere forma $S_a$ e $t_b$ è il tempo in cui l'oggetto deve avere forma $S_b$) i pesi sono:
$$w_a = \frac{t-t_b}{t_a-t_c}$$
$$ w_b = (1-w_a) $$
In alternativa se vogliamo avere un effetto che non varia in modo lineare possiamo usare delle transition function per determinare i pesi. in questo caso la formula per determinare i pesi $w_a = f(\frac{t-t_b}{t_a-t_c})$. 
#TODO  inserire foto transition function 
Da notare che in alcune di queste funzioni si possono ottenere valori maggiori di 1 o inferiori a 0. In questo caso abbiamo un'estrapolazione, ovvero un'esagerazione di una delle due forme. Bisogna stare attenti in questo caso perché sono complesse da controllare e potrebbero generare animazioni distorte.
# Pro e contro
I lati positivi delle blend shape sono che:
- sono flessibili e offrono un gran numero di Dof in fase di creazione
- semplici da usare (basta definire i pesi)
Alcuni dei lati negativi sono:
- complesse da creare (forse troppi DoF)
- costosi in RAM
- in fase di utilizzo sono poco flessibili (pochi DoF)

Altri limiti sono che questo tipo di animazioni non può cambiare:
- la connettività della mesh (risoluzione, remeshing)
- gli attributi della mesh (come UV-map) a eccezione delle posizioni e delle normali
- le texture