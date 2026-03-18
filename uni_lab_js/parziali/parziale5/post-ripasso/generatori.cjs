const prompt = require('prompt-sync')({sigint: true});

// let n = 10
// let gen = scorri(n)

// for (let el of gen)
// {
//   console.log(el)// se volessi accedere ad el.done?

//   }
// // let flag = false;
// // while (!flag)// facendo un controllo pero non va bene e va avanti di due.
// // {
// //   let el = gen.next()
// //   console.log(el)
// //   if (el.done == true)
// //     flag = true;
// //   let vel = prompt("inserisci")
// //   }
// function* scorri(n)
// {
//   for (let i = n; i >=0; i--)
//   {
//     yield i
//     }
// }
// let pari = numeriPari()
// for (let el of pari)
// {
//   console.log(el)
//   let blocco = prompt()
//   }

// function* numeriPari()
// {
//   let i = 0;
//   while (true)
//   {
//     yield i;
//     i= i+2
//     }
// }

/*filtra(iterabile, predicato). Deve accettare un iterabile (come un array) e una funzione predicato (che accetta un elemento e restituisce true o false). Il generatore deve produrre uno alla volta solo gli elementi dell'iterabile per cui il predicato restituisce true. */
let p = (x) => x %2 == 0
let filtrato = filtra([10, 8, 9, 3, 4, 6], p)
for (let el of filtrato)
  console.log(el)
function* filtra(iterabile, predicato)
{
  for (el of iterabile)
  {
    if (predicato(el))
      yield el

  }
}
