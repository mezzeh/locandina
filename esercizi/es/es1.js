//stampaCIfreRec

const prompt = require('prompt-sync')();

/* let cifra = prompt("inserisci un numero: ") */

let arr = [2,3,5,4];

stampaCifreRec(arr)



 function stampaCifreRec(n)
{
    //logicamente noi vogliamo arrivare fino alla fine e stampare di volta in volta.
    //essendo che non possiamo fare operazioni su dei null dobbiamo capire. 
    //posso farlo sensza indici^^^^^^????
    console.log(n)
    if(n == 0) // funziona anche con 0perche tanto deve arrivare a 0 essendo la divisione perfetta
    
        return; 
    //passo induttivo 
    //devo arrivare a 0
    
    let resto = n % 10;
    let quoziente  =  (n-resto) / 10;
    console.log("debug PRE FUNCT:resto ", resto, "CIFRA", n)
    stampaCifreRec(quoziente)
   //lui riesce a fare meno operazioni perche può confrontare fin da subito?
    
    console.log(resto) 
}   

/* 
function stampaCifreRec(n) {
    //logicamente noi vogliamo arrivare fino alla fine e stampare di volta in volta.
    //essendo che non possiamo fare operazioni su dei null dobbiamo capire. 
    //posso farlo sensza indici^^^^^^????
    console.log(n[0])
    if (n[i] == 0) // funziona anche con 0perche tanto deve arrivare a 0 essendo la divisione perfetta

        return;
    //passo induttivo 
    //devo arrivare a 0

    let resto = n[i] % 10;
    let quoziente = (n[i] - resto) / 10;
    console.log("debug PRE FUNCT:resto ", resto, "CIFRA", n)
    stampaCifreRec(quoziente)
    //lui riesce a fare meno operazioni perche può confrontare fin da subito?

    console.log(resto)
} */
stampaCifreRec(cifras)
/* function stampaCifreRec(n){
    // caso base
    if (n == 0) {
        console.log(n)
        return
    }
    // caso ricorsivo
    let resto = n % 10
    let quoziente = (n - resto) / 10
    stampaCifreRec(quoziente)
    console.log(resto)
} */
//cifra = 164392