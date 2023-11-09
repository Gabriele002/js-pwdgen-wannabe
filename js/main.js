// Questo è il file che contiene tutto il codice JS della pagina web

// INformazioni date dall' utente

let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let preferiteColor = prompt("Inserisci il tuo colore preferito");

// Numero casuale per rendere più sicura la psw

let casualNumber = Math.floor((Math.random() * 21) + 1);

//Operazioni

let psw = name + surname + preferiteColor + casualNumber;

//Sostituzioni front html

document.getElementById("name").innerHTML = name;
document.getElementById("surname").innerHTML = surname;
document.getElementById("color").innerHTML = preferiteColor;
document.getElementById("psw_generated").innerHTML = psw;
document.getElementById("casual_number").innerHTML = casualNumber;
