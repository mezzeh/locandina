/*Controllo ordinamento (isSorted): Scrivi una funzione isSorted(a) che riceve un array di numeri e restituisce true se l'array è ordinato in senso strettamente crescente, false altrimenti. L'esercizio suggerisce esplicitamente di non usare cicli tradizionali (for/while) e di provare a risolverlo utilizzando il metodo .reduce(). */
// function isSorted(a)
// {
//   let ris =  a.reduce((acc, next) => {
//     if (!acc) return false;
//     if (acc <= next) return next;
//       else return false
//   })
//  return ris == false?false:true

// }
// let arr = [1, 2, 1]
// console.log(isSorted(arr))

ksumlimit(0,3,1,1,1,1,1)
function ksumlimit(p, k, ...int)
{
  let i = 0;
  let sum = 0
  let arr = int.filter((el,i) => {
    if (el > p && (p + sum) <= k)
    { sum += el; return true }
    else {
      int.slice(0, i)// qua mi sono perso
      console.log("debug")
      return false;
    }
  })
  console.log(arr)
  return arr

}
/*Filtro in-place (fip): Scrivi una funzione fip(a, p) che riceve un array a e un predicato p. La funzione deve modificare a eliminando tutti gli elementi che non soddisfano p, facendo attenzione a non lasciare "posti vuoti" nell'array originale. */
function fip(a, p)
{
let i = 0
  a.every((el,i) => {
    if (!p(el))
    {
      a.splice(i,i)
      }
  })
}
