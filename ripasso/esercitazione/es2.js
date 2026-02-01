/**Esercizio 2 - ksumlimit
Si scriva una funzione JavaScript
ksumlimit(p, k, n1, n2, n3, ...).
La funzione restituisce un array con i primi numeri,
incontrati scorrendo da sinistra verso destra,
strettamente maggiori di p
la cui somma totale non supera k.
 */

/*indici iniziali: 0,1:
parto da [2] se > 0 e [2] + somma di arr2  <[1] allora inserisco in arr2

avro due array , uno l'originale 
l'altro  è il risultato, inoltre avro una variabile sum che memorizzera ogni volta che inserisco un nuovo unmero la somme onde evitare di ricalcolarlo. 
*/
let arr = [5, 10, 4, 8, 1, 7]
//console.log(ksumlimit(3, 20, arr))
console.log(ksumlimita(3, 20, 5, 10, 4, 8, 1, 7))
function ksumlimit(p,k,arr)
{
    //itero su cosa? su il numero di elementi di arr
    let ris = [];
    let somma = 0;
    for (el of arr)
    {
        if(el > p && k > somma + el)
        {
            console.log("numero valido: ",el)
            somma += el ; 
            ris.push(el);
        }
    }
    return ris
}
function ksumlimita(p, k, ...arr) {
    //itero su cosa? su il numero di elementi di arr
   //filtra
   let flist = arr.filter( x => x > p)
   let sum = 0; 
    for( let i = 0; i < flist.length; i++ )
    {
        sum += flist[i]; 
        if (sum > k)
                return flist.slice(0,i)
    }
    return flist
}