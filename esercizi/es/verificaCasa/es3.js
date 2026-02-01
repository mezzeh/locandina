let A = [["a","b"],["b","c"],["a","c","d"]]

console.log(unioneParziale(A,3))
function unioneParziale(A,n)
{
    let insieme = {};

    //voglio prendere un elemento.
    //e ricercarlo nell'insieme,

    //o tramite ricerca degli array o tramite ricerca negli oggetti
    for(el of A)
    {
        
        for(elem of el)
        {
            if(insieme[elem]) 
                insieme[elem] +=1
            else 
                insieme[elem] = 1
        }

    }

    for(el in insieme)
        if(insieme[el] != n)
            delete insieme[el]

    return insieme; 
}