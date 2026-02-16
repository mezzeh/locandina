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
console.log(contiene(T1,15))
function contiene(T, v)
{
  if (T.val == null)
    return
  if (T.val == v)
    return true
  for (let i = 0; i <= T.figli.length - 1; i++)
  {
    contiene(T.figli[i])
    }
}
