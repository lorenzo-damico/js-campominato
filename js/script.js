// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di
// inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti si continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce
// un numero “vietato” o raggiunge il numero massimo
// possibile di numeri consentiti.
// Al termine della partita il software deve comunicare
// il punteggio, cioè il numero di volte che l’utente ha
// inserito un numero consentito.

// 1. Creo le variabili bombe e tentativi per poter modificare i valori.
var bombe = 16;
var tentativi = 100;

// 2. Creo una funzione che generi un numero casuale tra un min e un max.
function randomNumber(min, max) {
  var numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroCasuale;
}

// 3. Creo una funzione che controlli la presenza di un numero in un array,
//    ritornando true se presente, false se assente.
function inArray(contenitore, num) {
  var presente = false;
  for (var i = 0; i < contenitore.length && presente == false; i++) {
    if (num == contenitore[i]) {
      presente = true;
    }
  }
  return presente;
}
