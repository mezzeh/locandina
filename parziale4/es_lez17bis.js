/*
Scrivere una funzione JavaScript math che prende come primo parametro un
operatore (stringa) e poi un numero indefinito di operandi (numeri), e applica
l’operazione agli operandi, in sequenza. L’operatore può essere uno tra: '+',
'-', '*', '/'*/
let exp = ['+',4,2,7]
/* console.log(f(exp))
function f(exp)
{
  let [op, ...num] = exp

  return num.reduce((acc, curr) => eval(`${acc} ${op} ${curr}`))

}
 */


/* /**Scrivere una funzione fip(a,p) che, dato un array qualunque a, e un predicato p,
modifichi a in modo che tutti gli elementi che non soddisfano il predicato p siano
rimossi da a. Si curi di non lasciare “posti vuoti” in a. */
/*  
let arr = [5,4,2,7]
let p = x => x<=2
console.log(arr)
let Narr = arr.filter(x => p(x))
console.log(Narr) */

/**
 * Sommatoria
Si scriva una funzione somma(n1, …, nk) che, ricevuti come argomento un
numero qualunque di numeri, restituisca la loro somma
 */
/* let num = [1,2,3,4,5]
console.log("array iniziale",num)
console.log(somma(...num))
function somma(...n)
{
  console.log("spread",n)
  let b  =  n.reduce((acc,curr) =>acc + curr,0)
  return b;
}

 */
/* 
isSorted
Scrivere una funzione isSorted(a) con a un array di numeri. La funzione
restituisce true se l'array è ordinato in senso strettamente crescente, false
altrimenti. Risolverlo senza usare cicli (comandi for, while, do/while). Provare a
risolverlo con .reduce() */
/* isSorted([-21,-2,0,4,6,210])
isSorted([2,6,8,9,10,-42])
function isSorted(a)
{
  let bool = a.reduce((acc,curr,i) => {
  
  if(i == 0)
    return true; 

  if(acc == false)
    return false; 

  if(a[i] < a[i-1])
    return false
  else return true
  
  },true)
  console.log("res",bool)
  return bool
} */

/* 
  Scrivere una funzione deframmenta(a), con a array di numeri. La funzione
restituisce una copia di a da cui sono state eliminate le occorrenze dei numeri non
ripetute in sequenza (ovvero in posizioni contigue dell'array). Ad esempio dato
l'array a = [1,1,2,3,3,3,2,2,4] la chiamata deframmenta(a) restituisce
[1,1,3,3,3,2,2], dove gli elementi in posizione 2 e 4 sono stati eliminati in
quanto non ripetuti in sequenza. */
/* console.log(deframmenta([1,1,2,3,3,3,2,2,4]))
console.log(deframmenta([0,0,0,0,0,1,0,1,1]))
function deframmenta(a)
{
  return a.reduce((acc,curr,i)=>{

  if(curr == a[i+1]||curr == a[i-1])
    acc.push(curr)
  return acc
  },[])


} */

function fabbrica(k)
{
  return f (){return k }
}