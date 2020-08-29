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

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// 1. Creo le variabili bombe e tentativi per poter modificare i valori.
var bombe = 16;
// 1A. Chiedo all'utente di impostare un livello di difficoltà.
var difficolta = parseInt(prompt("Inserisci un livello di difficoltà compreso fra 0 e 2"));

// 1B. Imposto un ciclo per validare la difficoltà.
while (difficolta != 0 && difficolta != 1 && difficolta != 2) {
  difficolta = parseInt(prompt("Difficoltà non valida! Inserisci nuovamente un livello di difficoltà compreso fra 0 e 2"));
}

// 1C. Imposto la variabile tentativi in funzione del valore di difficoltà
//     inserito dall'utente.
//     Se 0 => tra 1 e 100
//     Se 1 => tra 1 e 80
//     Se 2 => tra 1 e 50
if (difficolta == 0) {
  var tentativi = 100;
} else if (difficolta == 1) {
  var tentativi = 80;
} else {
  var tentativi = 50;
}
console.log("La difficoltà impostata è: " + difficolta + ". I tentativi sono: " + tentativi);

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

// 4. Creo l'array nel quale inserire le bombe create.
var contenitoreBombe = [];
console.log(contenitoreBombe);

// 5. Creo un ciclo per creare le bombe.
while (contenitoreBombe.length < bombe) {
  var bombaCreata = randomNumber(1, tentativi);
  console.log(bombaCreata);

  // 5A. Controllo se la bomba è presente nel contenitore delle bombe.
  var presenzaBomba = inArray(contenitoreBombe, bombaCreata);

  // 5B. Se non presente, la aggiungo, altrimenti no.
  if (presenzaBomba == false) {
    contenitoreBombe.push(bombaCreata);
  }
  console.log("Le bombe sono: " + contenitoreBombe);
}

// 6. Creo l'array nel quale inserire i numeri scelti dall'utente.
var contenitoreUtente = [];
console.log(contenitoreUtente);

// 7. Creo una variabile booleana hoperso = false per imporre
//    la condizione di fine ciclo.
var hoPerso = false;

// 8. Creo un ciclo per far giocare l'utente inserendo un numero.
while (contenitoreUtente.length < tentativi - bombe && hoPerso == false) {

  // 8A. Chiedo all'utente un numero.
  var numeroUtente = parseInt(prompt("Inserisci un numero compreso fra 1 e " + tentativi));

  // 8B. Controllo che il numero sia compreso fra 1 e 100, altrimenti lo richiedo.
  while (numeroUtente < 1 || numeroUtente > tentativi) {
    numeroUtente = parseInt(prompt("Hai sbagliato! Inserisci un numero compreso fra 1 e " + tentativi));
  }

  // 8C. Controllo se il numero è già presente nel contenitore utente.
  var presenzaUtente = inArray(contenitoreUtente, numeroUtente);

  // 8D. Se già presente, lo richiedo  e rieffettuo il controllo.
  while (presenzaUtente == true) {
    numeroUtente = parseInt(prompt("Hai già scelto questo numero! Inserisci un numero compreso fra 1 e " + tentativi));
    presenzaUtente = inArray(contenitoreUtente, numeroUtente);
  }

  // 8E. Aggiungo il numero all'array contenitore utente.
  contenitoreUtente.push(numeroUtente);
  console.log(contenitoreUtente);

  // 8F. Controllo se il numero è una bomba.
  var bombaColpita = inArray(contenitoreBombe, numeroUtente);

  // 8G. Se il numero scelto è una bomba, scrivo alert hai perso,
  //     indico il livello raggiunto, modifico la variabile hoPerso
  //     per uscire dal ciclo.
  if (bombaColpita == true) {
    alert("Hai colpito una bomba! Hai perso.");
    alert("Hai raggiunto il livello: " + contenitoreUtente.length);
    hoPerso = true;
  }
}

// 9. Se la variabile hoPerso è ancora false, scrivo alert vittoria
//    indicando il livello raggiunto.
if (hoPerso == false) {
  alert("Hai vinto! Hai evitato tutte le bombe.");
  alert("Hai raggiunto il livello: " + contenitoreUtente.length);
}
