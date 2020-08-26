// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// 1. Creare una lista di cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// 2. Chiedere all’utente il cognome
var cognomeUtente = prompt("Inserisci il cognome");
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
// 3. Inserirlo in un array con altri cognomi
listaCognomi.push(cognomeUtente);
// 4. Ordinare alfabeticamente la listaCognomi
listaCognomi.sort();
// Stampare la lista dei cognomi
for (i = 0; i < listaCognomi.length; i++) {
  var lista = document.getElementById("cognomi").innerHTML;
  lista = lista + "<li>" + listaCognomi[i] + "</li>";
  document.getElementById("cognomi").innerHTML = lista;
}
// Scrivere la posizione "umana" della lista in cui il nuovo utente si trova
var posizione = listaCognomi.indexOf(cognomeUtente) + 1;
document.getElementById("posizione").innerHTML = "La posizione è " + posizione;
