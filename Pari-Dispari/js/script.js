console.log('Pari e dispari')

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//Dichiaro le veriabili per agganciare l'event listener
const evenDomElement = document.querySelector('.pari');
const oddDomElement = document.querySelector('.dispari');

//genero una funzione che inserendo due numeri ne fa la somma e verifica che il risultato sia pari
function isEven(num1,num2){

    const sum = num1 + num2;
    console.log('la somma e`:',sum)
    const rest = sum % 2;
    //SE la variabile rest contenente il resto di sum % 2 e' 0 allora sara' pari e 
    //dara' di ritorno il valore booleano true
    if(rest === 0){
        console.log('e` pari')
        return true
    }//ALTRIMENTI sara' dispari e dara' di ritorno il valore booleano false
    else{ 
        console.log('e` dispari')
        return false
    }
}


//aggancio le variabili all'event listener per il pari
evenDomElement.addEventListener('click',function(){
    do{
        //richiedo all'utente di inserire un numero da 1 a 5 e la inserisco nella variabile userNumber
        const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
        
        if(userNumber > 5 || userNumber < 1){
            console.log('inserisci un numero nel range indicato')
        }else{
        //stampo in console il numero inserito dall'utente
        console.log('il tuo numero e`:',userNumber)
        }
    }while(userNumber > 5 && userNumber < 1)
    //creo una variabile che genera un numero casuale da 1 a 5 per il pcNumber
    const pcNumber = Math.floor(Math.random() * 5) + 1;

    //stampo in console il numero generato per il PC
    console.log('il numero del PC e`:',pcNumber)
    
    //invoco la fuzione isEven creata a monte per sommare le variabili ottenute 
    const result = isEven(userNumber,pcNumber)

    //SE la funzione restituisce true vuol dire che e' pari
    if(result === true){
        console.log('hai vinto')
    //Altrimenti vuol dire che e' dispari
    }else{
        console.log('ha vinto il pc')
    }

})
//Stesso procedimento di evenDomElement
oddDomElement.addEventListener('click',function(){
    const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
    console.log('il tuo numero e`:',userNumber)

    const pcNumber = Math.floor(Math.random() * 5) + 1;
    console.log('il numero del PC e`:',pcNumber)
    
    const result = isEven(userNumber,pcNumber)

    //con la differenza che:
    //SE la funzione restituisce true, con l'operatore di diversita , vincera` cmq l'utente perche' risultera' false
    //(effettivamente potevo mettere anche result === false)
    if(result !== true){
        console.log('hai vinto')
    }else{
        console.log('ha vinto il pc')
    }

})


