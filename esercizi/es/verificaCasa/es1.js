
let A = [7, 10, 15];
let b = 2

repDigit(A,b)
function isDigit(el,b)
{

    let res = el % b 
    el = (el - res) / b
    if(el <= 0)// quando dntra nel ciclo se l'elemento /b <= 0 significa che sono arrivato allutlimo, e restituisco il resto
    {
       // console.log("caso base")
        //restituisci il resto 
        return res
    }
   
    //console.log(el,(el - res) / b)

    let prox =isDigit(el,b)
    
   // console.log(res, prox )
    if(res == prox)
        return res;
    else
        return 0;
        
}

function repDigit(A,b)
{
    if(b < 1)
        return null;
    let mul = 1;
    for(el of A)
    {
        if(isDigit(el,b))
        {
            console.log(`el ${el} is a digit`)
            mul = mul * el
        }
        else
            console.log(`el : ${el}, is not a digit`)
        
        
    }
    console.log(mul)
    //un numero è un rep digit se il suo resto del quoziente ricorsivamente è uguale
}

