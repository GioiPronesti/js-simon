# ex-js-simon-says-dom


Descrizione:

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

- Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

Descrizione del problema e la sua soluzione 

5 fasi del gioco: 

1- generazione randomica dei 5 numeri appare countdown + stampa testo 1 memorizza numeri

2- parte countdown(30s -> 0s) utente ha 30 secondi per memorizzare i numeri a schermo     
   dopo di che i numeri mostrati inizialmente scompaiono       

3- countdown sparisce, appaiono input vuoti, utente inserisce i numeri ricordati nelle caselle
   appare stampa testo 2,  inserisci i numeri ricordati

4- inserimento numeri utente e controllo che in ogni campo sia stato inserito un valore numerico

5- il software ti dice quanti e quali dei numeri da indovinare sono stati individuati. testo 3

