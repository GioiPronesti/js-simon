console.log("hello console)");

/*Descrizione:

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.


descrivi il problema per passaggi 

dividi in piccoli problemi la consegna 

individua gli elementi di cui hai bisogno

immagina la logica, passo passo 

"Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

5 fasi del gioco: 

1- generazione randomica dei 5 numeri appare countdown + stampa testo 1 memorizza numeri

2- parte countdown(30s -> 0s) utente ha 30 secondi per memorizzare i numeri a schermo     
   dopo di che i numeri mostrati inizialmente scompaiono 

3- countdown sparisce, appaiono input vuoti, utente inserisce i numeri ricordati nelle caselle
   appare stampa testo 2,  inserisci i numeri ricordati

4- inserimento numeri utente e controllo che in ogni campo sia stato inserito un valore numerico

5- il software ti dice quanti e quali dei numeri da indovinare sono stati individuati. testo 3
*/

/* 1) Raccolta dati

abbiamo una lista di 5 numeri random, array 5 numeri 

es.  

const display = document.getElementById('display');

let timer

 funzione timer()    

// Gestiamo il timer  
// modifica per ottenere il countdown da 30 secondi a 0 
  
  count = 0;
  display.innerText = count;

  // incremento il tempo
  timer = setInterval(() => {
    display.innerText = ++count;
  }, 1000);
});

quando count === 0 

l'elemento countdown sparisce e compaiono i campi di input 
per l'inserimento dati,  il gioco continua. 

*/

// Recupero elementi html nelle variabili

const displayCountDown = document.getElementById("countdown");
//console.log(displayCountDown)

const displayStepsToDo = document.getElementById("instructions");
//console.log(displayStepsToDo)

const displayNumbers = document.getElementById("numbers-list");
//console.log(displayNumbers)

const displayForm = document.getElementById("answers-form");
//console.log(displayForm)

const displayAlert = document.getElementById("message");
//console.log(displayAlert)

// Gestisco il countdown di 30 secondi

//function countdown() {
/*
let timerdown;
// modifica per ottenere il countdown da 30 secondi a 0

count = 5;
displayCountDown.innerText = count;

// decremento del tempo
timerdown = setInterval(() => {
  displayCountDown.innerText = --count;
}, 1000);

// Blocco il timer

if (count <= 0) {
    clearInterval(timerdown);
}

//}

*/

const arrayNumbers = [34, 25, 16, 2, 48];

const userNumbers = [];
