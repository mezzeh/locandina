/*
Esercizio 1.1 - Contiene Valore: Scrivi una funzione contiene(T, v) che restituisca true se il valore v è presente in un nodo dell'albero k-ario T, altrimenti false.*/
// Albero T1
let T1 = {
    val: 10,
    figli: [
            {
                val: 5,
                figli: [
                    { val: 1, figli: [] },
                    { val: 4, figli: [] }
                ]
            },
            {
                val: 20,
                figli: [
                    { val: 15, figli: [] }
                ]
            }
          ]
};
// Albero T2
let T2 = {
    val: 100,
    figli: [
        {
            val: 50,
            figli: [
                { val: 30, figli: [] },
                { val: 70, figli: [] }
            ]
        },
        {
            val: 80,
            figli: []
        }
    ]
};
console.log(contiene(T1,1))
function contiene(T, v)
{
  if (T.val == v)
    return true

  // for (let i = 0; i <= T.figli.length - 1; i++)
  // {
  //   if (contiene(T.figli[i], v))
  //     return true
  //   }

  //oppure

 for (let figlio of T.figli)
 {
 if(contiene(figlio,v))
 return true
 }

  return false;
}


/*Trovare la somma dei valori in un albero binario
Dire se un albero binario contiene un valore cercato o no
Contare quanti sono i nodi di un albero binario che hanno un valore dato
Scambiare fra di loro i rami destro e sinistro della radice di un albero binario
Tagliare da un albero binario tutti i rami che iniziano da un nodo con valore
dato */
console.log(somma(T1))
function somma(T)
{
  let som= 0
  for (let figlio of T.figli)
  {
    som += somma(figlio)
  }
  return som + T.val
}
