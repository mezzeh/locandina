/*
Reverse
Si scriva una funzione reverse(a) che, dato un array a, restituisca un nuovo array
contenente gli stessi elementi di a, ma in ordine inverso. La funzione reverse non deve
modificare a.
Si provino diverse tecniche di soluzione:
● iterativa
○ usando dei cicli e opportuni indici
○ usando i metodi degli array
● ricorsiva
○ usando i metodi degli array
○ usando assegnamenti destrutturanti e l’operatore di spreadFunprop
Si scriva una funzione funprop(f,p) che, date due funzioni f:N→R e*/
 let a = [1,2,3,4,5]
// console.log(a)
// console.log(reverseIT(a));
// function reverseIT(a)
// {
//   let newa = []
//   for (let i = a.length - 1; i >= 0; i--)
//   {
//     newa[a.length-1 - i ] = a[i]
//     }
//   return newa
// }
// console.log(reverseMT(a))
// function reverseMT(a)
// {
//   let arr = a.slice()
//   arr.reverse()
//   return arr
// }
// console.log(recReverse(a))
// function recReverse(a)
// {
//   if (a.length-1 === 0)
//     return []
//   else
//   {

//     console.log(a[0])
//     let r = recReverse(a.slice(1))
//     r.push(a[0])
//     return r
//     }
// }
//
console.log(reverseSp(a))
function reverseSp(a)
{
  if (a.length  == 0)
    return []

  let [t,...r] = a
  let av = reverseSp(r)

  av.push(t)
  return av
  //devo fare un push, devo ricere[]

}
