export function saluta() {console.log("ciao")}
export function mergesort(A,p,r)
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
export function merge(A,p,q,r)
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


}