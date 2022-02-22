**Git** è un [[Version Control System]].<br />
La maggior parte degli altri sistemi salvano l' informazione come una lista di modifiche ai file.

![[deltas.png]]

Git. invece, considera i propri dati più come **snapshot** di un filesystem.

![[snapshots.png]]

Con Git, ogni volta che viene eseguito un commit o viene salvato lo stato del progetto, esso crea lo snapshot di tutti i file in quel momento, salvando un riferimento allo snapshot. Se alcuni file non cambiano, Git crea semplicemente un collegamento al file precedente già salvato.<br />
La maggior parte delle operazioni in Git necessitano solo di file e risorse locali per operare. Per navigare la storia di un progetto, Git non ha bisogno di connettersi al server per scaricarla e poi mostrarla.<br />
Quasi tutte le azioni aggiungono dati al database di Git.<br />
I file in Git possono essere in tre stati principali: **modified**, **staged** e **committed**:
 - Modificato significa che il file è stato modificato, ma non è ancora stato committato nel database;
 - In stage significa che hai contrassegnato un file, modificato nella versione corrente, perché venga inserito nello snapshot alla prossima commit;
 - Committato significa che il file è registrato al sicuro nel database locale.
 
  ![[areas.png]]
  
 La **Working Directory** è un checkout di una versione specifica del progetto. Questi file vengono estratti dal database compresso nella directory di Git e salvati sul disco per essere usati o modificati.<br />
La **Staging Area** è un file con tutte le informazioni riguardanti la prossima commit.<br />
La **directory di Git** è dove Git salva i metadati e il database degli oggetti del tuo progetto.<br />

Il workflow di base in Git funziona in questo modo:
- Modifica i file nel tuo albero di lavoro;
-  Seleziona per lo stage solo quei ccambiamenti che si vuole facciano parte del prossimo commit, il quale aggiunge solo queste modifiche all'area di stage;
-  Commit, ovvero salvare i file nell'area di stage in uno snapshot permanente nella directory di Git.

Se una particolare versione di un file è nella directory di Git, viene considerata come già committed. Se il file è stato modificato ma è stato aggiunto all'area di staging, è in stage. E se è stato modificato da quando è stata estratto ma non è in stage, è modificato.<br />
 
--------------------------------------------------------------