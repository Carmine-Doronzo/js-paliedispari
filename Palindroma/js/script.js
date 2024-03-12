console.log('Palindroma')

/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma:
la funzione deve ritornare true se la parola è palindroma
deve ritornare false se la parola non è palindroma
alla fine stampate in console un messaggio per dire all’utente il risultato del controllo */


//Chiediamo all`utente di inserire una parola
const word1 = prompt('inserisci una parola');


//controlliamo la parola inserita
console.log(word1);




//costruiamo la funzione per comparare le parole e capire se sono palindrome
function isPalindroma(word){
    //dichiariamo una variabile da riempire con la parola al contrario scandita dal ciclo presente nella funzione
    let reverseWord = '';

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
    //console.log(reverseWord);
    

    //Tentativo di utilizzo di un'altro tipo di ragionamento che prevede di confrontare la prima e l'ultima lettera, la seconda con la penultima e cosi via
    /*
    for( let i = 0; i < word.length ; i++){
        //console.log(word[i])

        console.log(word[i], word[word.length])

    }
    */

    //instauriamo la condizione SE la parola inserita e' uguale a quella ottenuta allora e' palindroma
    if(word === reverseWord){
        
        return true;
        //ALTRIMENTI non e' palindroma
    }else{
        
        return false;
    }
}


//stampiamo in console invocando la funzione la funzione per controllarne il funzionamento
const risultato = isPalindroma(word1);
if (risultato === true) {
    console.log('e` palindroma');
} else {
    console.log('non e` palindroma');
}