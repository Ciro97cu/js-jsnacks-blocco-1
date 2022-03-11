/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const numberList = [];

for (let i = 0; i < 6; i++) {
    let numberInput;
    while (isNaN(numberInput)) {
        numberInput = parseInt(prompt(`${i + 1} Inserisci un numero`));
    }
    if (numberInput % 2 !== 0) {
        numberList.push(numberInput);
    }
}
console.log(numberList);


/*
const numberList = [];

for (let i = 0; i < 6; i++) {
    const numberInput = parseInt(prompt(`${i + 1} Inserisci un numero`));
    if (!isNaN(numberInput) && numberInput % 2 !== 0) {
        numberList.push(numberInput);
    }
}
console.log(numberList);
*/