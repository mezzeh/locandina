/**i scriva una funzione JavaScript nuovaPila() con le seguenti caratteristiche:
● la funzione deve restituire un nuovo oggetto (chiamiamolo P), avente
(almeno) due chiavi impila e depila
● il valore di impila deve essere una funzione che, dato un valore, lo inserisce
in cima alla pila (memorizzandolo in un modo a vostra discrezione in P)
● il valore di depila deve essere una funzione che, senza prendere nessun
argomento, rimuove e restituisce l'elemento in cima alla pila (memorizzato in
precedenza da impila). Se la pila è vuota, deve restituire undefined.
Attenzione: si noti che ogni pila restituita da una chiamata a nuovaPila() è
distinta da ogni pila restituita da una diversa chiamata a nuovaPila() */

let p = nuovaPila()
console.log(p.depila())
console.log(p)

function nuovaPila()
{
   
     let pa = {impila(v){this.pila.push(v) },depila(){this.pila.pop()},pila : []}
     return pa
}
