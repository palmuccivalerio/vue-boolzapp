esercizio di oggi: Boolzapp
nome repo: vue-boolzapp
Oggi iniziamo a realizzare Boolzapp - a (not very) innovative messaging platform ;)
Il compito di oggi è quello di svolgere almeno la milestone 1 e 2:
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione. Click sul contatto mostra la conversazione del contatto cliccato
Vi allego il brief completo e la cartella zip con lo starter HTML, CSS e dati js.
:lampadina: Il nostro consiglio è quello di utilizzare la parte grafica vostra, creata durante la prima parte del corso
Consigli del giorno:
scegliete con attenzione gli strumenti che utilizzerete;
tenete in mente le funzionalità che dovranno essere implementate nei giorni successivi;
ricordate che per arrivare alle caratteristiche interni della struttura dati contatti dovete percorrere tutta la struttura, chiedendovi ad ogni passaggio il tipo di dato a quale siete arrivati.

1. importare la cdn di vue
1. inizializzare l'istanza di Vue
1. importare i data dentro il data() di Vue
1. dinamicizzare tramite Vue l'elenco degli utenti
1. al click su un utente, visualizzare il suo nome nell'header
1. sempre al click, visualizzare la chat di quell'utente
1. dall'iinput, inviare un nuovo messaggio





Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
 
 1. leggere  il testo dall'input dei messaggi 
 2. aggiungere  il testo  nell'array dei messaggi dell'utente selezionato

 3. una volta inviato  dopo un secondo aggiungere un testo di risposta






Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

 1. sincronizzre la barra di ricerca con i contatti 
 2. fare in modo che quando scrivi appaiano i contatti combacianti con le lettere 



1. leggere il contenuto dall'input di ricerca
2. ad ogni cambiamento nell'input
    2.1 scorrere la lista degli utenti
    2.2 verificare se il nome dell'utente contiene le lettore inserite nel campo di ricerca
    2.3 rendere invisibili gli utenti che non hanno la stringa cercata
3. aggiungere un controllo per visualizzare solamente gli utenti visibili
