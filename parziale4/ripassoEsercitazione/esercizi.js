/**
 * Esercizio 1 - FilteredSet
 Si scriva una funzione JavaScript filteredSet(S, p) che,
 dato un multi-insieme S codificato come visto a lezione
 e un predicato p da stringhe a booleani,
 restituisca un nuovo multi-insieme contenente
 solo gli elementi di S che soddisfano p,
 senza modificare S.
 La funzione deve restituire il nuovo multi-insieme,
 e il numero di elementi cancellati.
 */
// let p = x => x > 2
// let S = { "banane": 2, "PEre": 4 }
// console.log()
// console.log(filteredset(S,p))
// function filteredset(S,p)
// {
//   let newa = {}
//   for (let el in S)
//   {
//     if (p(S[el]))
//       newa[el] = S[el]
//   }
//   return [newa , Object.keys(S).length- Object.keys(newa).length ]
// }


/*Esercizio 2 - ksumlimit
Si scriva una funzione JavaScript
ksumlimit(p, k, n1, n2, n3, ...).
La funzione restituisce un array con i primi numeri,
incontrati scorrendo da sinistra verso destra,
strettamente maggiori di p
la cui somma totale non supera k.
ESEMPI:
ksumlimit(3, 20, 5, 10, 4, 8, 1, 7) --> [5, 10, 4] */
// console.log(ksumlimit(3, 20, 5, 10, 4, 8, 1, 7))
// function ksumlimit(p, k, ...n)
// {
//   let newa = n.filter((x => (x > p)))
//   let cont = []
//   newa = n.reduce((acc, curr) =>{
//     if ((curr + acc) < k)
//     {
//       cont.push(curr)
//       acc += curr
//         }
//     console.log(acc)
//     return acc
//   }, 0)
//   return [newa,cont]
// }


/*Esercizio 3 - Prodotto estremi
Si scriva una funzione in JavaScript prodEstremi(A) che,
dato un array A con elementi numerici, restituisca un nuovo array
contenente in posizione 0 il prodotto del minimo e del massimo di A;
in posizione 1 il prodotto del secondo più alto e del secondo
più basso elemento di A, ecc. Se A è di lunghezza dispari, il suo
elemento mediano viene moltiplicato per se stesso (e il risultato
sarà l'ultimo elemento dell'array risultante). L'array A non deve
essere modificato. */
let A = [2, 8, 4, 1, 0, 3]

console.log(prodEstremi([2,8,4,1,0]))
console.log(prodEstremi([10,3,7,1,0,3,1,4])) // 0, 7, 4, 9
function prodEstremi(A)
{
  A.sort((a,b) =>a -b)
  console.log(A)
  let newa = []
  let len = A.length -1

  for (let i = 0; i <= Math.floor(len / 2); i++)
  {
    newa[i] = A[i]* A[len-i]
    }
  return newa
}
