Il linguaggio **Dart** è il core del framework [[Flutter]]. E' un linguaggio di alto livello che può essere utilizzato per il web development, desktop, lato-server ed applicazioni mobile.<br />
Dart mira ad aggregare i principali benefici dei linguaggi ad alto livello con feature di un linguaggio maturo, tra cui:
- Tools per analizzare il codice, plugins per [[IDE]], ...;
- Garbage collection, per gestire la deallocazione della memoria;
- Annotazioni del tipo;
- Dart è type-safe e utilizza l'[[Inferenza di tipo]] per analizzare i tipi a runtime;
- Portabilità;

### Come funziona Dart ###

Per comprendere da dove proviene la flessibilità del linguaggio, è necessario comprendere come eseguire il codice Dart. Questo può essere fatto in due modi:
- Dart Virtual Machines (VMs);
- Compilazione tramite Javascript.

Il codice Dart può essere eseguito in un ambiente _Dart-capable_. Questo ambiente provvede feature essenziali per un app, come:
- Sistemi runtime;
- Librerie core di Dart;
- Garbage collector.

L'esecuzione del codice Dart opera in due modi, compilazione**Just In Time** (**JIT**) o compilazione **Ahead-Of-Time** (**AOT**).

### Hello World ###
Ogni applicazione Dart deve avere una funzione che funga da entry-point, cioè la funzione $main()$.<br />
Nonostante Dart sia _type-safe_, le annotazioni di tipo sono opzionali.
Per displayare l'output su console, si utilizza la funzione $print()$.