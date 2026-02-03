let n = 0;
/* console.log("il valore f(n) di ",n," è ",fibonacciNsimo(n))
function fibonacciNsimo (n)
{
    if(n == 0)
        {
            console.log("+0 ")
        return 0;
    }

    if(n ==1)
    {
        console.log("+ 1")
        return 1;
    }
    return fibonacciNsimo(n-1)+fibonacciNsimo(n-2)
}
 */ fgfgfg;
n = 6;
arr = fibonacciPrimiN(n);
// una funzione che dato n ritorna i primi n numeri della successione: n = 7 =  0,1,1,2,3,5,8
//n = 3 0,1,1function fibonacciNsimo (n)
function fibonacciPrimiN(n) {
  if (n == 0) {
    return [1];
  }

  if (n == 1) {
    return [1, 1];
  }

  //return fibonacciNsimo(n-1) + fibonacciNsimo(n-2)
  let seq = fibonacciPrimiN(n - 1);
  let nesimo = seq[seq.length - 1] + seq[seq.length - 2];
  seq.push(nesimo);
  return seq;

  //ora che ho il risultato devo includerlo in un array
}

console.log("l'f di n è : ", arr);
