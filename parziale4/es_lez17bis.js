/*
Scrivere una funzione JavaScript math che prende come primo parametro un
operatore (stringa) e poi un numero indefinito di operandi (numeri), e applica
l’operazione agli operandi, in sequenza. L’operatore può essere uno tra: '+',
'-', '*', '/'*/
let exp = ['+',4,2,7]
console.log(f(exp))
function f(exp)
{
  let [op, ...num] = exp

  return num.reduce((acc, curr) => eval(`${acc} ${op} ${curr}`))

}
