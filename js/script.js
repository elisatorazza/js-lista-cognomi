// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// 1. Creare una lista di cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// 2. Chiedere all’utente il cognome
var cognomeUtente = prompt("Inserisci il cognome");
// 3. Inserirlo in un array con altri cognomi
listaCognomi.push(cognomeUtente);
// 4. Stampare la lista ordinata alfabeticamente
listaCognomi.sort();
console.log (listaCognomi);
console.log(listaCognomi.indexOf(cognomeUtente,1));
// Scrivere la posizione "umana" della lista in cui il nuovo utente si trova