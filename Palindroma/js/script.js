console.log('Palindroma')

/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma:
la funzione deve ritornare true se la parola è palindroma
deve ritornare false se la parola non è palindroma
alla fine stampate in console un messaggio per dire all’utente il risultato del controllo */


//Chiediamo all`utente di inserire una parola
const word = prompt('inserisci una parola');


//controlliamo la parola inserita
console.log(word);

//dichiariamo una variabile da riempire con la parola al contrario scandita dal ciclo presente nella funzione
let reverseWord = '';

//costruiamo la funzione per comparare le parole e capire se sono palindrome
function isPalindroma(str,str2){
    //formiamo un ciclo che parte dalla lunghezza della parola e andiamo a decrementare l'indice a ogni
    //interazione
    for(let i = word.length -1 ; i >= 0; i--){
        

        //controlliamo la lunghezza della stringa
        //console.log(word[i]);

        //riempiamo la seguente variabile che abbiamo dichiarato fuori dalla funzione
        //con i valori corrispondenti a ogni indice
        reverseWord += `${word[i]}`;


        //console.log(reverseWord)

        

    }
    //controlliamo la stringa ottenuta
    console.log(reverseWord)


    //instauriamo la condizione SE la parola inserita e' uguale a quella ottenuta allora e' palindroma
    if(word === reverseWord){
        console.log('e` palindroma')
        return true;
        //ALTRIMENTI non e' palindroma
    }else{
        console.log('non e` palindroma');
        return false;
    }
}


//stampiamo in console invocando la funzione la funzione per controllarne il funzionamento
console.log(isPalindroma(word,reverseWord))