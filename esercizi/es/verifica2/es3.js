/**
 * numeri interi (implementata come visto a lezione), rimuova dalla lista tutti i nodi con valore dispari. Si ignorino i nodi con valori non interi (che vanno mantenuti nella lista).



La funzione deve restituire un oggetto con due proprietà:

: la lista modificata
: il numero totale di nodi rimossi


Esempi:

head = [ 2 → 5 → 8 → 3 → 6 ]
filtraLista(head) → {lista: [ 2 → 8 → 6 ], rimossi: 2}
Vengono rimossi i nodi con valori 5, 3 (tutti dispari).

filtraLista([ 1 → 2 → 3 → 4 → 5 ]) → {lista: [ 2 → 4 ], rimossi: 3}
filtraLista([ 10 → 20 → 30 ]) → {lista: [ 10 → 20 → 30 ], rimossi: 0}
filtraLista([ 1 → 3 → 5 ]) → {lista: null, rimossi: 3}
Come prassi, commentate opportunamente la funzione.
 */

let a = { val: 2, next: { val: 5, next: { val: 8, next: { val: 3, next: { val: 6, next: null } } } } }
console.log(filtraLista(a));

/*/ Test 1: Lista mista
assert.deepStrictEqual(
    filtraLista({ val: 2, next: { val: 5, next: { val: 8, next: { val: 3, next: { val: 6, next: null } } } } }),
    { lista: { val: 2, next: { val: 8, next: { val: 6, next: null } } }, rimossi: 2 }
) */
function filtraLista(head) {
    // per mettere lista all'inizio lo metto nel caso base
    if (head === null) 
        return { lista: null, rimossi: 0 };
    
    //lo metto anche qua all'inizio
    let { lista: succ, rimossi } = filtraLista(head.next);

    //metto un if iniziale
    if (Number.isInteger(head.val)) 
        if (head.val % 2 !== 0) 
            return { lista: succ, rimossi: rimossi + 1 };// qua per eliminare il nodo corrente passero il prossimo eslcudendo l'attuale.
        
    return { lista: { val: head.val, next: succ }, rimossi };// qua faccio un returno normale pnon escludendo niente
}
