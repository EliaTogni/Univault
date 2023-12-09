---
"Titolo:": Evolving Game of Life
Sottotitolo: Neural Networks, Chaos and Complexity
"Autore:": Tom Grek
"Anno:": "2020"
"Link:": https://medium.com/@tomgrek/evolving-game-of-life-neural-networks-chaos-and-complexity-94b509bc7aa8
---
# Sommario
Può una [[Intelligenza Artificiale#Reti neurali |neural network]] apprendere le regole del [[The Game of Life |Game of Life]] di Conway? Perchè e come?

E' chiaro ormai che il [[Intelligenza Artificiale#Deep Learning |deep learning]] non è la risposta all'intelligenza artificiale generale (AGI). Le reti neurali spesso funzionano bene ma solo all'interno del dominio nel quale sono allenate, senza una vera comprensione o astrazione. Il reinforcement learning si è rivelato invece instabile, data hungry e, fondamentalmente, un metodo di brute forcing che non si applica a task del mondo reale.

L'autore pensa che sia necessario tornare alle origini dell'intelligenza artificiale. In particolare, Tom Grek sta esplorando come la **vita artificiale** (**Teoria della Complessità**) potrebbe aiutare l'AI.
## Rewind
L'autore fa un breve riassunto del funzionamento del [[The Game of Life |Game of Life]].

Qui un esempio di cosa è possibile ottenere da GoL.

![[GoL.gif]]

L'autore sottolinea come spesso chieda ai candidati per la sua compagnia di implementare GoL.

Un'altra osservazione dell'autore è il fatto che nessuno si sia mai offerto volontario per implementare GoL tramite convoluzione. Di seguito, il codice Python dell'autore per fare ciò.

```Python
import cv2
import numpy as np
import sys
import torch
import torch.nn.functional as F

from PIL import Image

BOARD_HEIGHT = 200
BOARD_WIDTH = 300

distrib = torch.distributions.Bernoulli(0.5)


weights = torch.tensor([[1,1,1],[1,10,1],[1,1,1]]).view(1,1,3,3)
board = distrib.sample((BOARD_HEIGHT,BOARD_WIDTH)).view(1,1,BOARD_HEIGHT,BOARD_WIDTH)
board = board.to(torch.int64)

cv2.namedWindow("game", cv2.WINDOW_NORMAL)


while True:
	newboard = F.conv2d(board, weights, padding=1).view(BOARD_HEIGHT,BOARD_WIDTH)
	newboard = (newboard==12) | (newboard==3) | (newboard==13)
	newboard_array = np.int8(newboard) * 255
	img = Image.fromarray(newboard_array).convert('RGB')
	img = np.array(img)
	cv2.imshow("game", img)
	q = cv2.waitKey(100)
	if q == 113: # 'q'
		cv2.destroyAllWindows()
		sys.exit(0)
	board = torch.tensor(newboard_array/255, dtype=torch.int64).view(1,1,BOARD_HEIGHT,BOARD_WIDTH)

```

Il frammento più importante è la convoluzione e la non linearità. Questo frammento è:

```Python
newboard = F.conv2d(board, weights, padding=1) \  .view(BOARD_HEIGHT,BOARD_WIDTH)newboard = (newboard==12) | (newboard==3) | (newboard==13)
```

Di seguito, un grafico che illustra semplicemente come e perchè la convoluzione funziona:

immagine convolution

In questo caso, il kernel è $3 \times 3$.

----------------------------------------------------------------
## Can a neural network learn Game of Life?
Ora abbiamo:
- illimitati training data (quante giocate vogliamo, partendo da configurazioni iniziali randomiche);
- un kernel di convoluzione con pesi che dovrebbero essere apprendibili;
- una non-linearità non differenziabile.

----------------------------------------------------------------

## Did it work?

## Conclusion

----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Related to


----------------------------------------------------------------