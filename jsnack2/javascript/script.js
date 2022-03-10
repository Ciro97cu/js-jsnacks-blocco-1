/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

// array number list
const numberList = [];

for (let i = 1; i <= 6; i++) {
    const numberInput = prompt("Inserisci un numero");
    if (!isNaN(numberInput) && numberInput % 2 !== 0) {
        numberList.push(numberInput);
    }
}
console.log(numberList);
