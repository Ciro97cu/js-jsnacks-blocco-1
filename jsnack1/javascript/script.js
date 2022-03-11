/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// array guest list
const guestList = ["Ciro", "Antonio", "Lucia", "Matteo", "Lorenzo", "Valeria"];

// I ask the name of the user
const yourName = prompt("Inserisci il tuo nome", "Antonio");

// declare a boolean variable to stop the cycle when I find the name
let exit = false;

for (let i = 0; i < guestList.length && exit === false; i++) {

    /* if the inserted name corresponds to one of the list,
    the exit variable becomes true and the cycle stops */
    if (yourName.trim() === guestList[i]) {
        exit = true;
    }

}
/* I use a condition that prints a default message based 
on the value of our boolean variable */
if (exit) {
    console.log("Sei in lista");
} else {
    console.log("Non sei in lista");
}