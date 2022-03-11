/* Chiedi un numero di 4 cifre all’utente e calcola la somma di
tutte le cifre che compongono il numero. 
(questo potrebbe richiedere un minimo di ricerca) */

// I create an eventlistener on click on my button in the html
document.querySelector("button").addEventListener("click",
    function () {

        // I create a variable to extract the value inserted in the input tag
        let numberInput = document.querySelector("input").value;
        // I initialize to 0 the variable to extrapolate the sum of my numbers
        let sumNumber = 0;
        // I check if the number is composed by 4 digits
        if (numberInput.length === 4) {
            for (let i = 0; i < numberInput.length; i++) {
                /* I add the digits together taking care to insert the parseint
                because the input has returned a string type */
                sumNumber += parseInt(numberInput[i]);
            }
        } else {
            // if the number is not exactly made up of 4 digits, no sum will take place
            sumNumber = "Per favore inserisci un numero a sole 4 cifre";
        }
        // I print in the console and on the document the value of my variable sumNumber
        console.log(sumNumber);
        document.querySelector("p").innerText = `${sumNumber}`;

        /* METODO ALTERNATIVO

        let numberInput = document.querySelector("input").value;
        const arrayOfDigits = Array.from(String(numberInput), Number);
        console.log(arrayOfDigits);
        let sumNumber = 0;
        for (let i = 0; i < arrayOfDigits.length; i++) {
            sumNumber += arrayOfDigits[i];
        }
        console.log(sumNumber);
        document.querySelector("p").innerText = `La somma è ${sumNumber}`;
        */

    }
)