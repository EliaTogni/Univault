Related to: [[Git]]

### Inizializzazione di una repository in una directory esistente
<code> git init </code>

Questo comando crea una sottodirectory chiamata <code> .git </code>, la quale contiene tutti files necessari.

### Configurazione di parametri
<code> git config user.name </code> = Elia Togni  

<code> git config user.email </code> = elia97.togni@gmail.com

<code> git config --global core.editor </code> emacs/vim

### Creazione di un nuovo controllo versione di un file esistente
<code> git add nomefile.ext
			   git add LICENSE
			   </code> 

### Clonazione di una repository esistente
<code> git clone [url] </code>

### Check dello status dei file
<code> git status </code>
```console
On branch master
nothing to commit, working directory clean
```

Questo significa che la directory di lavoro è pulita, ovvero non ci sono file non tracciati o modificati.
```console
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    README

nothing added to commit but untracked files present (use "git add" to track)
```

In questo esempio il file README non è tracciato, cioè Git viede un file che non era presente nel precedente snapshot.

### Tracciare nuovi file
<code> git add README </code>

Eseguendo nuovamente il comando <code> git status </code>, si può notare come il file README ora viene tracciato:
```console
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
```

### Staging di file modificati
Supponiamo di modificare un file già tracciato. Osservando lo status, si avrà:
```console
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

"Changed but not staged for commit" significa che un file precedentemente tracciato è stato modificato nella directory di lavoro ma non è in staging. Per mandarlo in staging, si esegue nuovamente il comando <code> git add [nomefile] </code>.
```console
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
    modified:   CONTRIBUTING.md
```

### Commit di modifiche
Ora che la staging area è pronta, è possibile committare le modifiche con il comando <code> git commit </code>.
Questo comando apre l'editor configurato, il quale mostra questo testo:
```
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
# Changes to be committed:
#	new file:   README
#	modified:   CONTRIBUTING.md
#
~
~
~
".git/COMMIT_EDITMSG" 9L, 283C
```

E' possibile rimuovere questi commenti e inserire il proprio messaggio di commit.
In alternativa si può inserire il messaggio di commit nel comando:
<code> git commit -m "Story 182: Fix benchmarks for speed </code>

### Skippare la staging area
<code> git commit -a -m "messaggio" </code>
 In questo modo, Git manda in stage automaticamente ogni file che è stato già tracciato prima del commit.
 
 ### Rimuovere file
 Per rimuovere un file da Git, è necessario rimuoverlo dai file tracciati e poi eseguire un commit. 
 <code> git rm </come>
 Questo comando inoltre rimuove il file dalla directory di lavoro.
 
 Per rimuovere un file dalla staging area ma mantenerlo nel [[Working Tree]], si utilizza il comando:
 <code> git rm --cached [nomefile] </code>
 
 ### Muovere file
 Git non traccia il movimento dei file. Se un file viene rinominato, nessun metadato viene salvato per indicare che il file è stato nominato. Per rinominare un file si usa il comando:
 <code> git mv [nomefile_da] [nomefile_a] </code>
 Osservando lo status, si vede che
 ```console
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README
```

### Annullamento del commit
<code> git commit --amend </code>
