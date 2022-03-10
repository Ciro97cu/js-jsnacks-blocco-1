/* Chiedi un numero di 4 cifre all’utente e calcola la somma di
tutte le cifre che compongono il numero. 
(questo potrebbe richiedere un minimo di ricerca) */

// const number = 1234;

// const arrOfDigits = Array.from(String(number), Number);
// console.log(arrOfDigits); // 👉️ [1, 2, 3, 4]


document.querySelector("button").addEventListener("click",
    function () {

        let numberInput = document.querySelector("input").value;
        const arrayOfDigits = Array.from(String(numberInput), Number);
        console.log(arrayOfDigits);
        let sumNumber;
        for (let i = 0; i < arrayOfDigits.length; i++) {
            sumNumber += parseInt(arrayOfDigits[i]);
        }
        console.log(sumNumber);

    }
)