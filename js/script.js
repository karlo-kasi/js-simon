/***Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
**BONUS:**
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
>
> - Pensate prima in italiano.
> - Dividete in piccoli problemi la consegna.
> - Individuate gli elementi di cui avete bisogno per realizzare il programma.
> - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"




1 - per prima cosa cosa creo una funzione per visualizzare i 5 numeri casuali che vaddo da 1 a 50
  1.1 - metto i numeri generati un arrey vuoto (.push)

2 - dopo di che creo una timing function che farte fino a 30000 millisecondi al caricamento della pagina 
  2.1 al termine dei 30 secondi rimuovo i numeri random
  2.2 aggiungo 5 campi input 

3 - aggiungo i numeri degli input in un array vuoto chiamato array numeri utenti 
4 - creo un clico per verificare che i numeri inseriti nell'array vuoto dall'autente siano uguali a quello dell'arrey random 
  4.1 con una confizione stampo il risultato in base a quanti sono uguali 

*/


let numero1 = document.getElementById ("num1");
let numero2 = document.getElementById ("num2");
let numero3 = document.getElementById ("num3");
let numero4 = document.getElementById ("num4");
let numero5 = document.getElementById ("num5");

const countdown = document.getElementById ("countdown")
const form = document.getElementById ("answers-form")
const frase = document.getElementById ("instructions")
const numbersList =document.getElementById ("numbers-list")


// creo l'array vuoto per i numeri random
let arrayRandom = []



//creo la funzione per generare numeri vuoti, li pusho dentro l'array vuoto, poi li inserisco nel Dom
function numberGeneration (numeri){
     
    for (let i = 0; i < 5; i++){
        numeri.push(Math.floor((Math.random() * 50) + 1)) 
        
    }
    return arrayRandom  
}

console.log (numberGeneration (arrayRandom))

// funzione per pushare gli elementi nel HTML 
function pushNumber(array){

    for (let i = 0; i < array.length; i++){
        let lista = document.getElementById("num" + (i + 1));
        lista.innerHTML = array[i];
    }
}
pushNumber (arrayRandom)


// funzione countdown
let counter = 5
let timer;

function contatore (){
    console.log( 'start' )
    

    //parte il contatore
    timer = setInterval( function(){
        countdown.innerHTML = counter--
        if( counter === -2 ){
            clearInterval(timer)
            countdown.classList.add ("d-none");
            form.classList.remove ("d-none");
            frase.classList.add ("d-none");
            numbersList.classList.add ("d-none");

         }
    }, 1000 )
    
}

contatore ()


