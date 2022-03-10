/* Chiedi un numero di 4 cifre all’utente e calcola la somma di
tutte le cifre che compongono il numero. 
(questo potrebbe richiedere un minimo di ricerca) */

document.querySelector("button").addEventListener("click",
    function () {

        let numberInput = document.querySelector("input").value;
        let sumNumber = 0;
        for (let i = 0; i < numberInput.length; i++) {
            sumNumber += parseInt(numberInput[i]);
        }
        console.log(sumNumber);

        // let numberInput = document.querySelector("input").value;
        // const arrayOfDigits = Array.from(String(numberInput), Number);
        // console.log(arrayOfDigits);
        // let sumNumber = 0;
        // for (let i = 0; i < arrayOfDigits.length; i++) {
        //     sumNumber += arrayOfDigits[i];
        // }
        // console.log(sumNumber);
        // document.querySelector("p").innerText = `La somma è ${sumNumber}`;

    }
)