//  var tester = "hey hi"; // ha scope globale. perche esiste fuori da una funzione.


//     function newFunction() {
//       var hello = "hello"; // ha scope locale
//       console.log(tester) //
//     }
//     //console.log(hello); // error: hello is not defined
// newFunction()


// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//     var greeter = "say Hello instead";
// }

// console.log(greeter) // "say Hello instead"
//il problema di var è che puo essere ridichiarata.
// let greeting = "say Hi";
// let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// //D'altro canto, se la stessa variabile è definita in ambiti diversi, non ci sarà un errore:

// let greeting = "say Hi";
// if (true) {
//     var greeting = "say Hello instead"; // var ha scope globale
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting + "ciao"); // "say Hi"

if (true) {
    let greeting = "say Hello instead with let"; // let ha scope di blocco
    console.log(greeting); // "say Hello instead"
}
console.log(greeting + "ciao with let"); // "say Hi"
// let puo essere aggiornato ma non ridichiarato eccetto se ridichiarato in ambiti diversi essendo variabili di blocco.
//lo stesso all'interno dell'ambito. Non può essere aggiornato o ri-dichiarato. Quindi se dichiaramo una variabile con const, non possiamo fare questo:

    // const greetin = "say Hi";
    // greetin = "say Hello instead";// error: Assignment to constant variable.


    //L'hoisting porta tutte le dichiarazioni in cima al loro ambito. Ma mentre le varabili var sono inizializzate con undefined, le variabili let e const non sono inizializzate.
