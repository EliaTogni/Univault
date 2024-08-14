# Introduction
.....
# Mathematics for 3D Games
#TODO  accorpare in una sintetica introduzione con i link ai vari pezzi
- [[Punti, versori e vettori]]
- [[Trasformazioni]]
- [[Rotazioni 3D]]
- [[Quaternioni doppi]]
# Scene Graph
Una volta definite le basi matematiche delle trasformazioni possiamo usarle per definire la posizione di un oggetto all'interno del mondo a partire da quella nello spazio locale, associando una trasformazione $T_D$.
Se volessimo aggiornare questa posizione applicando una trasformazione $T_{new}$ che sposta l'oggetto di due alla sua sinistra
$$T_{new} = 
\begin{cases}
		\text{rotation}&=\text{identity}\\
		scaling &= 1\\
		translation &=(-2,0,0)
\end{cases}$$
potremmo procedere in due modi:
- $T_D \leftarrow T_D \circ T_{new}$ : per spostare l'oggetto D di due unità alla *sua* destra
- $T_D \leftarrow T_{new} \circ T_D$ : per spostare l'oggetto di due unità a sinistra dell'origine *del mondo*

Ogni oggetto che ha una posizione nella scena ha una trasformazione associata che va dal local space al world space. Per comodità queste trasformazioni vengono spesso organizzate in maniera gerarchica attraverso lo [[Scene graph]]
# Game 3D Physics
- [[Motori fisici]]
# Game Particle Systems
- [[particle system]]
# Game 3D Models
- [[Modelli 3D]] #TODO da finire
# Game Textures
- [[Texture]]
# Game Materials
- [[Materials]]
# Game 3D Animations

Le animazioni 3D permettono il movimento degli oggetti e possono essere di diversi tipi a seconda dell'oggetto da animare e se si vuole usare un approccio procedurale (lasciando gestire l'animazione al motore fisico) o no (scripted animation create dagli artisti). Nel primo caso si ottengono animazioni realistiche e fisicamente giustificate con poco lavoro (umano), con lo svantaggio di avere animazioni difficili da controllare e che richiedono un notevole sforzo da parte della GPU. Nel secondo caso invece la realisticità dell'animazione dipende dalla bravura dell'artista, il vantaggio è che si ha più controllo sull'effetto finale dell'animazione ma si ottengono animazioni meno flessibili che non si adattano all'ambiente circostante (il piede del personaggio non è sempre a contatto con un terreno irregolare) e che vengono salvate come asset, richiedendo quindi più spazio in RAM. Inoltre in alcune situazioni può essere conveniente avere animazioni miste dove per esempio il ciclo della camminata di un personaggio è creato da un artista (authored) mentre la posizione dei piedi è procedurale per farli adattare al suolo (inverse kinematics) 

| tipo di oggetto                   | non procedurale      | procedurale                    |
| ------------------ | -------------------- | ------------------------------ |
| rigido         | kinematic animations | rigid body dynamics            |
| articolato | [[skeletal animation]]   | ragdolling, inverse kinematics |
| deformabile                   | [[blend-shapes]]         | cloth animation, rope animation                               |
Nel caso delle animazioni di oggetti rigidi bisogna solamente determinare la posizione dell'oggetto nello spazio (6 DoF), nei modelli articolati bisogna determinare la rotazione per ogni giuntura di un modello (3 DoF per giuntura -> 50-100 DoF), mentre nei modelli completamente deformabili (soft bodies) bisogna determinare la posizione di ogni poligono (3 DoF per vertice -> 300-10.000 Do3)
# Networking for 3D Games
Originariamente i giochi multiplayer erano solamente di due tipi:
- *hot-seat* -> stesso terminale e stessi controlli ma un solo giocatore in controllo alla volta (time-share)
- *local multiplayer* -> i giocatori condividono il terminale (a volte tramite split-screen) ma ognuno con i propri comandi.
Successivamente è stato però introdotto un terzo tipo di gioco multiplayer:
- *networked multiplayer* -> i giocatori hanno i propri controlli e il proprio terminale e questi sono connessi tra loro attraverso a una rete (LAN o internet). Questo permette a ogni giocatore di interagire con lo stesso mondo virtuale

Alcuni dei paradigmi di networking utilizzati nei videogiochi sono:
- [[Deterministic Lockstep#Peer to peer|deterministic lockstep peer to peer]]
- [[Deterministic Lockstep#Client-Server|deterministic lockstep client-server]]
- [[Game-Status snapshots]]
- [[Distributed physics]]
- [[Client-side prediction]]
- [[Cloud gaming]]
# 3D Audio for 3D Games
# Rendering Techniques for 3D Games
# Artificial Intelligence for 3D Games