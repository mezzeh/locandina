
let A = [7, 10, 15];
let b = 2


console.log(repDigit(A,b))
function repDigit  (A,b)
{
    let somma = 0; 

    for( el of A)
    {
        let num  = el;
        let d0 = el %b

        while (num > 0) // se la condizione è 
        {
            let resto = num%b

            if(resto !== d0)
                break;

            num = (num - resto) / b
        }

        if(num == 0)
        {
            console.log("il numero ",el,"è repdigit")
            somma += el
        }
        else
            console.log("il numero ",el,"non èè rep digit")
    }

    return somma;
}