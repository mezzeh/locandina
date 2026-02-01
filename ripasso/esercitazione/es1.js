/**Si scriva una funzione JavaScript filteredSet(S, p) che,
dato un multi-insieme S codificato come visto a lezione
e un predicato p da stringhe a booleani,
restituisca un nuovo multi-insieme contenente
solo gli elementi di S che soddisfano p,
senza modificare S.
La funzione deve restituire il nuovo multi-insieme,
e il numero di elementi cancellati. */

let S = {
    "mela": 3,
    "pera": 2,
    "banana": 1
};
let p  = s => s.length > 5 
//console.log(p("banana"))
let [nuovo,cont] = (filtered(S,p))
console.log("Il nuomo multiinsieme: ",nuovo,"\nil numero di el eliminati: ",cont)
/* function filtered(S,p)
{
    let nuovo = {}
    let cont = 0; 
    for (key in S) 
        {
            if(p(key))
                 nuovo[key] = S[key]
            else
                cont+=1;
        } 
    console.log(nuovo)
    return {"eliminati": cont, "insieme": nuovo};
} */
function filtered(S,p)
{
    let nuovo = {...S}
    let cont = 0; 
    for( key in nuovo)
    {
        if(!p(key))
        {
            cont += nuovo[key]
            delete nuovo[key]
        }
            
    }
    return [nuovo,cont]
}