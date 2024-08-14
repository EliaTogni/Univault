In grafica permette di trovare un oggetto (punto, vettore, ...) intermedio tra due o piu oggetti

# Terminologia
- $ax + by$ -> **combinazione lineare** di x e y
	- se $a+b=1$ e $a,b \in [0,1]$ -> **interpolazione (lineare)** di x e y
	- se $a+b=1$ e $a,b \notin [0,1]$ -> **estrapolazione (lineare)** di x e y
- $a, b$ sono i pesi
- se si usano solo due variabili si puo definire una combinazione con un solo peso $t$ (il secondo peso corrisponde a $1-t$)
- si possono interpolare anche piu oggetti ($ax + by + cz ...$)

# Interpolazioni lineari (lerp)
## Tra vettori
$$(1-t)\vec{v}_0 + (t)\vec{v}_1$$
## Tra punti
$$(1-t)p_0 + (t)p_1$$
da notare che questa formula sebbene abbia senso matematicamente ha qualche problema dal punto di vista geometrico: sommare o scalare punti non ha significato geometrico. Per questo motivo la formula puo essere riscritta nella seguente versione matematicamente equivalente:
$$p_0 + t(p_1 - p_0)$$
## Tra versori
$$(1-t)d_0 + (t)d_1$$
questo risultato pero non e' unitario e va normalizzato di nuovo per ottenere un versore come risultato. Un'alternativa e' usare l'interpolazione sferica

# Interpolazione sferica (slerp)
$$\frac{sin((1-t)\alpha)}{sin(\alpha)}d_0 + \frac{sin(t\alpha)}{sin(\alpha)}d_1$$
#TODO  aggiungere immagine differenza interpolazione sferica e interpolazione lineare

da notare che il risultato non e' esattamente uguale a quello ottenuto dalla interpolazione lineare ma e' abbastanza vicino soprattutto quando i due versori sono simili o t e' vicino a $\frac{1}{2}$ ma vale il costo computazionale extra?

e' applicabile a tutti i versori compresi quelli in 2D, 3D e ai [[quaternioni]]

e' applicabile anche ai vettori seguendo i seguenti step:
1. nuova direzione = SLERP delle direzioni dei vettori (i versori corrispondenti al verso)
2. nuova magnitudine = LERP delle magnitudini (scalari)
3. nuovo vettore = direzione * magnitudine