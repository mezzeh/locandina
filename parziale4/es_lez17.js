const prompt = require(`prompt-sync`)();

let list = [1, 2, 3, 4, 5]

console.log(findMax(list))
function sum(a)
{
  let [t, ...r] = a // cosa significa questo assegnamento inverso???A??!??!
  //devo sommare elemento per elemento finche non arrivo alla testa vuota

    return t?t + sum(r):0

}

function len(a)
{
  let [t, ...r] = a
  return t?1+len(r):0
}

function findMax(a)
{
  let [t, ...r] = a
  //prende il max ogni volta
  return t?Math.max(t,findMax(r)):0
}
