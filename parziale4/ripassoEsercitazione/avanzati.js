/*Esercizio 4a - Costruttore di pile
Si scriva una funzione JavaScript nuovaPila() con le seguenti caratteristiche:
● la funzione deve restituire un nuovo oggetto (chiamiamolo P), avente
(almeno) due chiavi impila e depila
● il valore di impila deve essere una funzione che, dato un valore, lo inserisce
in cima alla pila (memorizzandolo in un modo a vostra discrezione in P)
● il valore di depila deve essere una funzione che, senza prendere nessun
argomento, rimuove e restituisce l'elemento in cima alla pila (memorizzato in
precedenza da impila). Se la pila è vuota, deve restituire undefined.
Attenzione: si noti che ogni pila restituita da una chiamata a nuovaPila() è
distinta da ogni pila restituita da una diversa chiamata a nuovaPila() */

// let pila = [1, 2, 3, 4, 5]
// pila.push(0)
// console.log("push 0 nella pila : ", pila)
// pila.pop()
// console.log("pop nella pila: ,", pila)


// let P = nuovaPila()
// P.impila(5)
// console.log(P.pila)
// P.depila()
// console.log(P.pila)
// function nuovaPila()
// {
//   let A = []
//   return P = { impila: (x) => pila.push(x) , depila: (x) => pila.pop() ,pila  : A}

// }


/*Esercizio 4b - Costruttore di code
Si scriva una funzione JavaScript nuovaCoda() con le seguenti caratteristiche:
● la funzione deve restituire un nuovo oggetto (chiamiamolo Q), avente
(almeno) due chiavi enqueue e dequeue.
● il valore di enqueue deve essere una funzione che, dato un valore qualunque,
lo inserisce in coda (memorizzandolo in un modo a vostra discrezione in Q)
● il valore di dequeue deve essere una funzione che, senza prendere nessun
argomento, rimuove e restituisce il primo elemento dalla coda (memorizzato
in precedenza da enqueue). Se la coda è vuota, questa funzione deve
restituire undefined. */
nuovaCoda()
function nuovaCoda()
{
  let A = [1,2,3,4,5]
return Q = { enqueue: (x) => A.unshift(x), dequeue: (x) => A.shift(), coda: A }

}
let QU = nuovaCoda()
 QU.enqueue(5)
console.log(QU.coda)

QU.dequeue(5)
console.log(QU.coda)
