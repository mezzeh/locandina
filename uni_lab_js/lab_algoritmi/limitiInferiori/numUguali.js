import * as mezze from "../../moduli/ordinamenti.js";
import * as ricerca from "../../moduli/ricerca.js"

// devo fare un programma che trova se due array hanno lo stesso elemento
let A = [9,7,5,5,3,1]
let B = [0,2,2,6,8]

   
//versione complessa ; trovare un numero uguale ordinando l'array con la ricerca lineare, si potrebbe trovare con una ricerca binaria?

// forse si.

mezze.saluta()
mezze.mergesort(A,0,A.length-1)
console.log("dopo il merge",A)
console.log(ricerca.trovaNumeroUguale(A))


/* function mergesort(A,p,r)
{
    // caso base
    if(p >=r)
    return;

    let q = Math.floor((p+r)/2)
    console.log("entra nel merge con ",p,q,r)
    mergesort(A,p,q)
    mergesort(A,q+1,r)
    merge(A,p,q,r)
}
function merge(A,p,q,r)
{

// creo due array temporaneai
    let lenA = q-p +1;
    let lenB = r -q ; 
    let C = []; let B = [];
    for(let i = 0; i< lenA; i++)
        B[i] = A[p +i]
    for(let j = 0; j< lenB; j++)
        C[j] = A[q+j+1] // non mi ricordo maiiiii
    console.log(A,B,C)
     
    let i = 0;let j = 0;let  k = p;
    while ( i < lenA && j < lenB)
    {   
        if(B[i] <= C[j])
        {
            A[k] = B[i]
            i++
            k++
        }
        else if (B[i]> C[j])
        {
            A[k] = C[j];
            j++;
            k++;
        }
    }

     
    while(j < lenB)
    {
                A[k] = C[j]
                k++; 
                j++;
    }
    while(i < lenA)
    {
                A[k] = B[i]
                i++; k++
    } 


} */