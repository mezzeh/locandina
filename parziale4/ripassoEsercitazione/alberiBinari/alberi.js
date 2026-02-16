/*Trovare il massimo fra i valori in un albero binario
Trovare la somma dei valori in un albero binario
Dire se un albero binario contiene un valore cercato o no
Contare quanti sono i nodi di un albero binario che hanno un valore dato
Scambiare fra di loro i rami destro e sinistro della radice di un albero binario
Tagliare da un albero binario tutti i rami che iniziano da un nodo con valore
dato */

let T1 = {
    val: 10,
    sx:
            {
                val: 5,
                sx:
                    { val: 1, sx:null,dx:null},
                dx:
                    { val: 4, sx:null,dx:null }

            },
    dx:
    {
        val: 8,
        sx:
            { val: 6, sx:null,dx:null},
        dx:
            { val: 7, sx:null,dx:null }

    },
};

function max(T)
{
  if (T == null)
    return null
return Math.min(T.val ,max(T.sx),max(T.dx))
}
console.log(somma(T1))
function somma(T)
{
  if (!T)
    return 0
  return somma(T.val + somma(T.sx)+ somma(T.dx))
}
