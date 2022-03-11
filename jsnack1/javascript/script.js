/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// array guest list
const guestList = ["Ciro", "Antonio", "Lucia", "Matteo", "Lorenzo", "Valeria"];

const yourName = prompt("Inserisci il tuo nome", "Antonio");

let exit = false;

for (let i = 0; i < guestList.length && exit === false; i++) {

    if (yourName.trim() === guestList[i]) {
        exit = true;
    }

}

if (exit) {
    console.log("Sei in lista");
} else {
    console.log("Non sei in lista");
}
