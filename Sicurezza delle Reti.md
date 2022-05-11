## Politiche di sicurezza e modelli ##
Una **Politica di sicurezza** è un insieme di regole e linee guida le quali descrivono gli obiettivi di sicurezza di un sistema. Include:
1) soggetti che interagiscono con il sistema;
2) oggetti e risorse di cui si vuole proteggere l'accesso;
3) le azioni che i soggetti possono compiere sugli oggetti e sulle risorse;
4) i permessi;
5) le protezioni, cioè ulteriori regole che aiutano a raggiungere il goal (la sicurezza).

Un **Modello** definisce formalmente l'implementazione specifica della politica di sicurezza presa in considerazione.

Un **Meccanismo** implementa la politica a basso livello. Le politiche, infatti, utilizzano meccanismi (come la [[Crittografia]]) per raggiungere il goal.<br />
Questi meccanismi devono fare in modo che il sistema resti in uno stato sicuro e non passi in uno stato non sicuro. <br />

Le politiche di sicurezza sono alla base del concetto di **Controllo degli accessi**, il quale può essere diviso in tre macrocategorie:
1) **DAC** (**Discretionary Access Control**): ciascun utente può determinare i permessi per ogni altro utente e definire le **Access Control Lists** (**ACL**);
2) **MAC** (**Mandatory Access Control**): un amministratore centrale determina i permessi di accesso dei vari oggetti;
3) **ORCON** (**Originator Controlled Access Control**): il proprietario di un oggetto determina i permessi di accesso dell'oggetto in questione;

Esistono diversi tipi di politiche di sicurezza:

### Politiche di sicurezza basate sulla confidenzialità ###
Con **confidenzialità** si intende il prevenire la divulgazione non autorizzata ad informazioni.<br />
Spesso in questa tipologia di politica si utilizzano metodi mandatori di tipo multilivello.

#### Bell - La Padula ####
**Bell - La Padula** è un modello di politica confidenziale il quale classifica i diversi livellid i sicurezza con i seguenti tag:
1) **Top Secret**;
2) **Secret**;
3) **Confidential**;
4) **Unclassified**.

I soggetti e gli oggetti vengono ciascuno assegnati ad un livello di sicurezza. Le azioni permesse dipendono dal livello di sicurezza di entrambi soggetti ed oggetti in questione.<br />
In generale, in questo modello si devono rispettare due proprietà:
1) **Simple Security Property** (**No Read Up**): un soggetto $S$ ha accesso in lettura ad un oggetto $O$ se e solo se $\lambda (S) \geq \lambda (O)$;
2) **\* Security Property** (**No Write Down**): un soggetto $S$ ha accesso in scrittura ad un oggetto $O$ se e solo se $\lambda(O) \geq \lambda(S)$.

Combinando questi due principi si previene un possibile flusso di informazioni dall'alto verso il basso dei livelli di sicurezza.

Il modello Bell - La Padula può essere esteso includendo delle categorie nei livelli di sicurezza che inducono un reticolo. <br />
Un livello di sicurezza viene ora rappresentato come $(\text{Livello di sicurezza}, \{\text{Insieme di categorie}\})$.

Un livello di sicurezza $(L, C)$ domina un livello di sicurezza $(L', C')$ se e solo se:
1) $\lambda(L) \geq \lambda(L')$;
2) $C' \subseteq C$.

### Politiche di sicurezza basate sull'integrità ###
Con **integrità** si intende il prevenire modifiche non autorizzate alle informazioni.<br />


#### Biba ####
**Biba **



