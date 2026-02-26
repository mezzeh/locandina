/*
1. Gestione Dinamica e Invarianti di Classe (Rif. FinestraLab)

Obiettivo: Gestire un array interno applicando rigorosamente un limite di capienza tramite cicli while, evitando calcoli manuali di offset.
Specifica: Progetta una classe LogTracker. Deve memorizzare stringhe di log. Ha una proprietà maxLogs (di default 100).

    Implementa l'inserimento: se l'aggiunta di un nuovo log fa superare la soglia maxLogs, il log più vecchio deve essere eliminato.

    Implementa il setter per maxLogs: se il limite viene abbassato a runtime (es. da 100 a 50), 
    il buffer deve immediatamente scartare tutti i log in eccesso partendo dai più vecchi, fino a rientrare nella nuova dimensione.
*/


// 1) creare array di log
//2) creare una classe 

class LogTracker extends Array
{
    #maxLogs
   constructor()
   {
    super();//importante dichiararlo sempre.
    this.#maxLogs = 10
   }
   get logs()
   {
    return this.#maxLogs
   }
   set logs(x)
   {
    while(this.length > x)
        super.shift() 
    this.#maxLogs = x
   }
   push(x)
   {    
       super.push(x)
       this.logs = this.logs // richiama il set e aggiusta automaticamente
   }   
}

let accessi = new LogTracker()
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13]
array.forEach(element => {
    accessi.push(element)
});
console.log(accessi.logs)

