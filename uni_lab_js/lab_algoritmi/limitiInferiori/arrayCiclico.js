let arr = [ 10,12,2,6,7,8,9]


// secondo la ricerca , dovrei dividere l'arr a meta , proviamo su carta.
console.log(co(arr,0,arr.length-1))

function co(A, p, r) {
    if (p == r) return [p, A[p]]; // Base case: trovato 

    let q = Math.floor((p + r) / 2);

    // Se il valore a metà è minore del primo, il minimo è a sinistra (incluso q) 
    if (A[q] < A[p]) {
        return co(A, p, q); 
    } 
    // Altrimenti il minimo è a destra di q [cite: 53, 64]
    else {
        // Caso speciale: se l'array è già ordinato (es. [2, 6, 7]), 
        // A[q] > A[p] ma il minimo è A[p]. 
        // In un array C.O., se A[r] > A[p], l'array è già dritto.
        if (A[r] > A[p]) return [p, A[p]];
        
        return co(A, q + 1, r);
    }
}
/*
La logica di base (confronto tra A[q] e A[p]) è il cuore dell'algoritmo ottimo. Le imprecisioni sui -1 o +1 negli appunti sono spesso semplificazioni scritte a lezione, ma per l'implementazione pratica:

    Se A[q] < A[p]: il minimo è tra p e q (incluso).

    Se A[q] > A[p]: il minimo è tra q+1 e r (perché A[p] è già più piccolo di A[q], quindi q non può essere il minimo assoluto).*/
