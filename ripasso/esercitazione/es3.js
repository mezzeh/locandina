/**Si scriva una funzione in JavaScript prodEstremi(A) che,
dato un array A con elementi numerici, restituisca un nuovo array
contenente in posizione 0 il prodotto del minimo e del massimo di A;
in posizione 1 il prodotto del secondo più alto e del secondo
più basso elemento di A, ecc. Se A è di lunghezza dispari, il suo
elemento mediano viene moltiplicato per se stesso (e il risultato
sarà l'ultimo elemento dell'array risultante). L'array A non deve
essere modificato. */
let A = [2, 8, 4, 1, 0] //[0, 4, 4]
let B = [10, 3, 7, 1, 0, 3, 1, 4] // [0, 7, 4, 9]
console.log(prodEstremi(A))

console.log(prodEstremi(B))
//prodEstremi(B)

function prodEstremi(A)
{
    let copyA = [...A]
    copyA.sort((a,b) => a - b);
   
    let ris = []
    let len = copyA.length 
    for( let i = 0; i < Math.ceil(copyA.length/2) ; i++ )
        ris.push(copyA[i] * copyA[len-i-1])

    
    return ris
  

}