# Introduzione
nei videogiochi 2D rappresentare rotazioni e' estremamente semplice: basta usare l'angolo di rotazione.
Questa soluzione e':
- semplice da memorizzare -> e' un solo scalare
- semplice da applicare -> $r_{\alpha} \begin{pmatrix} x \\ y\end{pmatrix}= \begin{pmatrix}cos(\alpha) - sin(\alpha)y \\ sin(\alpha) + cos(\alpha)y \end{pmatrix}$ 
- semplice da invertire -> basta invertire il segno
- semplice da cumulare -> basta sommare i due angoli
- semplice da un punto di vista di design -> concetto abbastanza compreso da qualsiasi persona che abbia superato le elementari

Questa implementazione ha il piccolo difetto che nonostante sia facile da interpolare con angoli la cui somma e' maggiore di $360 \degree$ perche' $360\degree + \alpha \cong \alpha$ ( #TODO aggiungere immagine carro armato ). Per risolvere questo problema se voglio interpolare tra due rotazioni $\alpha$ e $\beta$ devo per prima cosa trovare l'angolo $\beta' = min(difference(\alpha, \beta), difference(\alpha, \beta - 360\degree))$.

Un altro vantaggio di questo approccio e' che e' semplice passare da angolo a vettore 2D in quanto quest'ultimo non e' altro che $\vec{v} = \begin{pmatrix} cos(\alpha) \\ sin(\alpha) \end{pmatrix}$ #TODO aggiungere immagine con la circonferenza trigonometrica. Altrettanto comodo e' il passaggio inverso $\alpha = atan2(y,x)$ 

Trasportare questo concetto in 3D diventa pero complesso perche' un oggetto puo ruotare con 3 gradi di liberta'

# Matrici 3x3
una prima soluzione e' codificare una rotazione come una matrice 3x3 (nota che sono rotazioni "pure" nel senso che a differenza delle matrici usate precedentemente in [[Trasformazioni#Rappresentazione e operazioni]] qui non codifichiamo traslazioni). Queste sono delle sottomatrici della notazione pura 4x4 create sottointendendo l'ultima riga e colonna poiche sono costanti.

#TODO aggiungere immagine della rappresentazione matriciale

Questa soluzione e':
- **costosa da memorizzare** -> infatti occupa 9 scalari invece dei 3 minimi necessari
- **semplice da applicare** ->  basta fare il prodotto tra matrice e vettore per un totale di 9 moltiplicazioni
- **relativamente facile da comporre** -> e' un prodotto tra due matrici per un totale di 27 moltiplicazioni
- **non si puo' interpolare** -> infatti $kR_0 + (1-k)R_1 = M$ dove $M$ non e' una rotazione (non e' orthonormal) 

Una proprieta' particolare di questo tipo di codifica e' che le tre colonne della matrice rappresentano i tre versori $x$,$y$ e $z$ dello spazio **locale** espressi nello spazio **globale** 

## Composizione
Per comporre due rotazioni e' necessario moltiplicarne le matrici facendo attenzione all'ordine in quanto la moltiplicazione tra matrici non e' commutativa (conseguentemente non lo sara' nemmeno l'operazione di composizione).
La formula per ottenere la rotazione totale di un oggetto ruotato prima di $R_1$ e successivamente di $R_0$ (assumendo che $R_0$ e $R_1$ siano matrici e quindi orthonormal con determinante = 1)
$$R_{TOT} = R_0 \cdot R_1$$
Il risultato della composizione e' una matrice $R_{TOT}$ che rappresenta anch'essa una rotazione. Questo in teoria, purtroppo pero' nei computer avvengono frequentemente errori di calcolo che seppur piccoli possono accumularsi e portare, specialmente dopo un numero elevato di rotazioni, a risultati abnormali che non rispettano quest'ultima proprietà'.

## Inversione
Per invertire una rotazione basta trasporre la matrice corrispondente. Questa operazione e' semplice e veloce in quanto basta scambiare tre coppie di elementi. Nella matrice trasposta quindi le **righe** (e non piu le colonne) rappresenteranno gli assi $x$,$y$ e $z$ dello spazio globale espressi nello spazio globale.

Da notare che $R^T \cdot R = I$ in quanto per ogni cella corrispondente a una moltiplicazione tra elementi vettori diversi il risultato sara' 0 (in quanto sono tutti versori ortogonali a due a due) mentre le celle corrispondenti a una moltiplicazione tra versori uguali ma invertiti si ha che $\hat{x} \cdot x= ||\hat{x}||^2 = 1$ perche' essendo versori hanno lunghezza unitaria.

## Conclusioni
|                           |            |
| ------------------------- |:----------:|
| consumo **spazio**        |     ⭐     |
| facile da **applicare**   |  ⭐⭐⭐⭐  |
| facile da **invertire**   | ⭐⭐⭐⭐⭐ |
| facile da **comporre**    |    ⭐⭐    |
| facile da **interpolare** |     ⭐     |
| **intuitiva**             |     ⭐     |

# Angoli di Eulero
Un alro possibile approccio molto intuitivo e' quello degli angoli di eulero. Ogni rotazione in questo caso viene espressa come:
- una rotazione attorno all'asse $X$ di $\alpha$ gradi seguita da
- una rotazione attorno all'asse $Y$ di $\beta$ gradi seguita da
- una rotazione attorno all'asse $Z$ di $\gamma$ gradi

Dove $\alpha$,$\beta$ e $\gamma$ sono chiamati angoli di Eulero della rotazione (simili al concetto di coordinate trasportato alle rotazioni).

Nel linguaggio areonautico i tre angoli prendono il nome di **rollio, beccheggio e imbardata**.

da notare che una rotazione non corrisponde proprio in maniera 1:1 a una tripletta di angoli: esiste un'eccezione particolare chiamata **gimbal lock** che avviene quando la prima rotazione fa coincidere l'asse della rotazione successiva con un altro asse globale facendo in modo che le successive rotazioni vadano ad annullarsi. (questa spiegazione e' un po' complessa ma d'altronde non e' che la sua sia molto meglio. magari sarebbe piu' comodo un disegno o un'animazione).

Questa implementazione:
- **occupa poca memoria**-> infatti per memorizzarla sono necessari solamente tre scalari (il minimo necessario per i 3 gradi di liberta')
- **non semplicissima da applicare**-> per ogni rotazione vanno applicate tre diverse rotazioni in successione
- **non il massimo da interpolare**-> per farlo si possono interpolare i tre angoli separatamente stando attenti a scegliere lo shortest path (ricorda che possono esistere due triplette che codificano la stessa rotazione). Il problema e' che i risultati di questa operazione non sono sempre quelli che vorremmo
- **non facile ne' immediato calcolarne la composizione**-> non basta sommare gli angoli per ottenere la somma delle rotazioni.
- **non facile ne' immediato calcolarne nemmeno l'inversione**-> non basta invertire gli angoli per ottenere la rotazione inversa. (dovresti anche cambiare l'ordine di applicazione ==secondo me==)
## Conclusioni
|                           |            |
| ------------------------- |:----------:|
| consumo **spazio**        | ⭐⭐⭐⭐⭐ |
| facile da **applicare**   |     ⭐     |
| facile da **invertire**   |     ⭐     |
| facile da **comporre**    |     ⭐     |
| facile da **interpolare** |     ⭐     |
| **intuitiva**             | ⭐⭐⭐⭐⭐ |

# Asse + angolo
E' il metodo piu' utilizzato dai fisici (e di conseguenza per realizzare la fisica dei giochi). Si basa sul presupposto che ogni rotazione puo' essere espressa come ona rotazione di $\alpha$ gradi attorno a un asse di rotazione $\vec{a}$ (non forza uno degli assi come nel caso degli [[Rotazioni 3D#Angoli di Eulero|angoli di Eulero]].
Per memorizzare l'angolo possiamo quindi usare uno scalare, mentre ne dobbiamo usare altri tre per l'asse. Da notare che si considera l'asse che passa dall'origine mentre per il caso piu' generale va combinato con le traslazioni (questa frase non mi torna)

Questa soluzione e':
- **Relativamente compatta da memorizzare**-> solo uno scalare in piu' del minimo necessario
- **Non semplicissima da applicare**-> il modo piu semplice per applicarla e' convertirla prima a un'altra codifica come per esempio le [[Rotazioni 3D#Matrici 3x3|matrici 3x3]] o i [[Rotazioni 3D#Quaternioni|quaternioni]]. In alternativa si puo' usare anche la [formula di rotazione di "Rodrigues"](https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula). In entrambi i casi pero' bisogna fare uso di formule trigonometriche che sono lente da eseguire.
- **facilissima da invertire**-> basta cambiare il segno dell'angolo **oppure** cambiare il verso (quindi il segno) dell'asse. Se li cambio entrambi torno alla stessa rotazione quindi avro' dei [[Rotazioni 3D#Rappresentazioni equivalenti|duplicati]]
- **semplice da interpolare**-> basta interpolare separatamente l'asse e l'angolo prestando attenzione alle possibili [[Rotazioni 3D#Rappresentazioni equivalenti|rappresentazioni equivalenti]]
- **per nulla semplice ne' immediata da comporre**

## Rappresentazioni equivalenti
In questo formato ogni rotazione avra' due rappresentazioni equivalenti eccetto la rotazione identita'. Quest'ultima ha infinite possibili rappresentazioni poiche' e' data dall'angolo $\alpha = 0$ e da qualsiasi asse $\vec{a} = ( a_x,a_y,a_z)$. Questo pero' complica sia l'interpolazione (diventa necessario applicare shortest path) e complica anche i controlli di similarita' e equivalenza.
Bisogna pero' prestare attenzione e applicare shortest path sia per gli assi (provando a cambiare segno sia dell'asse che dell'angolo e vedere quale e' piu' vicino) sia per gli angoli (controllare similitudine in modulo $360\degree$). Questa interpolazione produce i risultati migliori visti fino ad ora e quasi in tutti i casi produce la rotazione intermedia attesa.

## Variante
Un altro metodo equivalente per questa rotazione e' rappresentarla come un singolo vettore $\vec{r}$(usando solamente tre scalari). In questo caso l'asse $\vec{a}$ e' un versore e come tale $||\vec{a}|| = 1$, l'angolo di rotazione $\alpha$ e' uno scalare e $$\vec{r} = \alpha||\vec{a}||$$
Di conseguenza avendo il vettore rotazione $\vec{r}$ posso ottenere l'angolo come $\alpha=||\vec{r}||$ e l'asse $\vec{a}= \vec{r}/\alpha$.

Questa notazione e' piu' compatta ma quasi del tutto equivalente a quella precedente. Leggermente migliore perche' in questo modo abbiamo solamente una rappresentazione per rotazione (infatti cambiando segno sia all'angolo che all'asse abbiamo $\vec{r} = -\alpha \cdot -||\vec{a}|| = \alpha||\vec{a}||$)

## Conclusioni
|                           |            |
| ------------------------- |:----------:|
| consumo **spazio**        | ⭐⭐⭐⭐ |
| facile da **applicare**   |     ⭐⭐⭐     |
| facile da **invertire**   |     ⭐⭐⭐⭐⭐     |
| facile da **comporre**    |     ⭐     |
| facile da **interpolare** |     ⭐⭐⭐⭐⭐     |
| **intuitiva**             | ⭐ |

# Quaternioni
Questa rappresentazione usa i numeri complessi: abbiamo infatti tre numeri complessi:
$$i,j,k \space\space\text{ s.t. }\space\begin{cases}
	i^2=k^2=j^2=1\\
	ij = k\\
	ji =-k\\
	jk = i\\
	kj =-i\\
	ki = j\\
	ik =-j\\
\end{cases} $$ 
Quindi abbiamo ora dei numeri complessi della forma $q=ai+bj+ck+d$, dove $a,b,c,d \in \mathbb{R}$ chiamati quaternioni. L'insieme dei quaternioni e' l'insieme $\mathbb{H}$.
L'algebra dei quaternioni e' semplicemente derivata dalle assunzioni sopra stabilite.

## Rappresentazione
I quaternioni possono essere rappresentati in vari modi:
- forma algebrica -> $ai+bj+ck+d$
- come vettori in $\mathbb{R}^4 \space : \space(a,b,c,d)$
- come una coppia vettore scalare $(\vec{v},d)$ dove $\vec{v}$ rappresenta la parte immaginaria $(a,b,c)$ e $d$ la parte reale
## Algebra dei quaternioni
- **coniugato di un quaternione**-> basta invertire il segno della parte immaginaria
- **somma, scalatura, interpolazione** -> estremamente semplice basta trattarli come se fossero dei vettori a 4 dimensioni
- **magnitudine** -> $||q|| = \sqrt{a^2+b^2+c^2+d^2}$ e di conseguenza $||q||^2= a^2+b^2+c^2+d^2$
- **prodotto** -> anche in questo caso e' semplice applicando le premesse sopra elencate. Da notare pero' che il prodotto in questo caso non risulta commutativo
- **inverso** -> come per i numeri complessi l'inverso e' $q^{-1} = \frac{\bar{q}}{||q||^2}$. Per i quaternioni unitari quindi e' semplicemente il coniugato.
- **conversione**-> il quaternione $q$ che rappresenta la rotazione 3D dell'angolo $\alpha$ attorno all'asse $\vec{a}$ e' $q=(sin(\frac{\alpha}{2})\vec{a}, cos(\frac{\alpha}{2}))$. Da notare che $||q||^2=1$
### Prodotto tra quaternioni
#TODO aggiungere immagine della matrirce del prodotto tra quaternioni
$$(\vec{w},h)\cdot(\vec{v},d) = (\vec{w}d+\vec{v}h+\vec{w}\times\vec{v}, hd - \vec{w}\cdot\vec{v})$$
## Interpretazione geometrica
Un quaternione q rappresenta:
- il punto 3D o vettore $\vec{v}$ quando d = 0 -> in questo caso il punto viene codificato come:  $q=xi+yj+zk$
- una rotazione 3D quando q e' unitario
- nessuna delle due altrimenti

Se $q$ e' una rotazione, $p$ e' un punto/vettore ed entrambi sono quaternioni, allora valgono le seguenti proprieta:
- $q \cdot p \cdot \bar{q}$ e' il punto/vettore ruotato
- $\bar{q}$ e' l'inverso della rotazione
- $\bar{q} \cdot p \cdot q$ e' il punto/vettore ruotato nella direzione opposta
- $q_0 \cdot q_1$ e' la rotazione composita (applicando prima $q_1$ e poi $q_2$) #TODO aggiungere la breve dimostrazione che mette

## Rappresentazioni equivalenti
Anche per i quaternioni purtroppo esiste il problema delle rappresentazioni equivalenti: infatti se $q = (sin(\frac{\alpha}{2})\vec{a},cos(\frac{\alpha}{2}))$ rappresenta la rotazione di angolo $\alpha$ attorno all'asse $\vec{a}$ la rotazione attorno allo stesso asse ma con angolo (equivalente) $\alpha + 2\pi$ diventa $q' = (sin(\frac{\alpha}{2}+\pi)\vec{a},cos(\frac{\alpha}{2}+\pi)) = -q$. Quindi $q$ e $-q$ codificano per la stessa rotazione.
## Interpolazione tra quaternioni
L'interpolazione tra quaternioni e' quella che da i risultati migliori ma con qualche attenzione particolare:

### shortest path
Come gia' detto prima esistono due rappresentazioni diverse per ogni rotazione usando i quaternioni, per questo bisogna utilizzare lo **shortest path** dove la distanza e' il dot product in quattro dimensioni (ricordiamo infatti che il dot product tra vettori unitari e' una misura di similarita').
Date due rotazioni $p,q$ da interpolare e essendo che $q=-q$ quale sara' quello piu vicino a p? $distance(p,q)=p\cdot q$ e $distance(p,-q)=p\cdot-q=-(p\cdot q)$ per le proprieta' del dot product. In conclusione se $p \cdot q\geq0$ interpoleremo con $q$, altrimenti interpoleremo con $-q$

### normalizzazione risultato
Inoltre se uso [[interpolazione#Tra vettori|NLERP]] il quaternione risultante non sara' normalizzato, quindi devo rinormalizzare. In alternativa posso usare direttamente [[interpolazione#Interpolazione sferica (slerp)|SLERP]].

## Conclusioni
Questo tipo di rappresentazione e':
- **facile da memorizzare**-> bastano infatti 4 scalari (uno in piu' del minimo)
- **facile da invertire**-> basta usare il coniugato
- **veloce da applicare**-> sono due moltiplicazioni tra vettori
- **stabile**-> basta normalizzare e qualsiasi quaternione e' una rotazione (questo non era vero per le matrici)
- **si interpola bene**->anche solo con NLERP ma da i risultati migliori con SLERP

In pratica questo lo rende la rappresentazione piu' utilizzata per le rotazioni nei videogiochi.

|                           |            |
| ------------------------- |:----------:|
| consumo **spazio**        | ⭐⭐⭐⭐ |
| facile da **applicare**   |     ⭐⭐⭐⭐⭐     |
| facile da **invertire**   |     ⭐⭐⭐⭐⭐     |
| facile da **comporre**    |     ⭐⭐⭐⭐⭐     |
| facile da **interpolare** |     ⭐⭐⭐⭐     |
| **intuitiva**             | ⭐ |

# Conversioni tra rappresentazioni
#TODO mettere grafichetta nella pagina finale delle slide

# Esercizi sulle rotazioni
#TODO da fare