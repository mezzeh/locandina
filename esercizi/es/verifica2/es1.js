/**
 * 
 * Si scriva una funzione sommaCoppie(A, k) che, ricevuto un array di valori 
 e un intero positivo 
 restituisca il numero di coppie di indici distinti (non necessariamente adiacenti) i cui corrispondenti elementi dell'array hanno somma divisibile per 
. Eventuali valori non numerici nell'array devono essere ignorati.

Le coppie sono considerate non ordinate: ad esempio, la coppia di indici (0,4) è considerata uguale alla coppia (4,0).
Esempi:

sommaCoppie([1, 2, 3, 4, 5], 3) → 4
Le coppie con somma divisibile per 3 sono: (1,2) con somma 3, (1,5) con somma 6, (2,4) con somma 6, e (4,5) con somma 9.



sommaCoppie([2, 4, 6, 8], 5) → 2
sommaCoppie([1, 1, 1], 2) → 3
 */

let A  = [1, 2, 3, 4, 5];
let k  = 3
sommaCoppie(A,k)
function sommaCoppie(A,k)
{
    if(k < 0)
        return null;
let count = 0;
    for(let i = 0; i <= A.length-1; i++)
    {
        for(let j =i+1; j <= A.length; j++)
        {
            //confronto ogni coppia 0 con 1 2 3 4  poi 1 f
            if((A[i]+ A[j]) % k === 0 && typeof A[i] === 'number' && typeof A[j] === 'number')
                count ++;
        }
    }
    return count;
}

