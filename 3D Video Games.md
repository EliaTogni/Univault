### Esempi di 2d Tech ###
to blit: copiare uno sprite dalla sprite memory alla memoria video
Ovviamente non si fa pixel a pixel ma con un supporto hw.

TileMap e TileSet. Background diviso in due parti. per ogni tile memorizzo l'indice della mattonella che andrebbe visualizzata in quel punto.

### 3D  ###
1) Intro
2) Math for 3D VG
3) Scene Graph, the hierarchical structure that defne  ascene in a 3d g
4) physics ( dynamic + collisions)
5) Particle systems
6) Game 3d models
7) Game textures
8) animations
9) game 3d audio
10) networking
11) ai 4 3dvg
12) rendering techniques

The art of game design (schell)
HUD = Head Up Display

The digital artists are in charge of the assets (music, sfx, collision object, ...).
Assets:
- 3d data
	- models, textures, materials, shaders, animations, collision objects, scenes, etc
- Audio
	- music, sound fxs, ambient sounds, voiceovers, etc
- Video
	- cut-scenes, intros, etc
- 2d art
	- screen splashes, backgrounds, gui/hud elements, sprites and tilesets, fonts, etc
- Text
	- dialogues trees, messages, translations
- Etc
	- scripts, stats, levels, etc

Technical staff do the game tools and game engine.
Game tools helps the digital artist doing assets

#### The 3d part of game assets ####
3d models, materials (il materiale di un oggetto e come riflette la luce), animations, approssimazioni geometriche, particle effect and environments.

procedurality comporta un trade off - memory vs computng power

a baked asset is an asset born procedural but the artist decided that he wanted to have control.

------------------------------------------------------------

### Background Matematico ###
E' necessario comprendere ogni operazione che verrà introdotta in seguito da tre punti di vista diversi:

- **intuitivamente**, cioè essere in grado di visualizzare l'operazione spazialmente;
- **operazionalmente**, cioè essere in grado di calcolarne il risultato;
- **sintatticamente**, cioè essere in grado di trascriverla, di codificarla ( su carta o tramite codice).

E' ovviamente necessario sapere come manipolare le equazioni che definiscono il sistema.<br />

I concetti fondamentali utili per costruire e modellare il sistema sono i concetti di [[Punto]], [[Vettore]] e [[Versore]].<br />
