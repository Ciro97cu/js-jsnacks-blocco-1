/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

// I create an empty array
const numberList = [];

for (let i = 0; i < 6; i++) {
    // I create the variable numberInput
    let numberInput;

    // I verify with the while loop that the user inserts a number otherwise I repeat the loop
    while (isNaN(numberInput)) {
        numberInput = parseInt(prompt(`${i + 1} Inserisci un numero`));
    }
    // only if the user has inserted an odd number I insert it in the array 
    if (numberInput % 2 !== 0) {
        numberList.push(numberInput);
    }
}
// I print the array in the console
console.log(numberList);