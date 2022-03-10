/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// array guest list
const guestList = ["Ciro", "Antonio", "Lucia", "Matteo", "Lorenzo", "Valeria"];

const yourName = prompt("Inserisci il tuo nome", "Antonio");

let feedback = "Non sei in lista";

for (let i = 0; i < guestList.length; i++) {

    if (yourName.trim() === guestList[i]) {
        feedback = "Sei in lista"
    }

}

console.log(feedback);
