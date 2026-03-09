/**
 * Sinistro: Left(i)=2i+1 
Destro: Right(i)=2i+2 
Padre: Parent(i)=⌊(i−1)/2⌋ 
 */
let arr =  [15,3,4,8,20,30]
buildHeap(arr)
console.log(arr)
function buildHeap(A)
{
    //inizia con un for.
    let len = A.length;
    //da quanto parte? parte da uno perche dobbiamo andare ad analizzare i padri non i nodi in se
    for(let i = 1; i < A.length ;i++)
    {   
        let p = Math.floor((i-1)/2)
        let j = i; // per il ciclo while 
        console.log(A,i,p)
        while(p >=0 && A[j] > A[p]) // se il padre è 0, è la radice, lui continua cioe, entra se non è corretto quindi se deve buildare.
        {
            console.log("dentro al while: ",i,j,p)
            let temp = A[j] 
            A[j] = A[p]
            A[p] = temp
            j = p // riparte automaticame nte dal membro scambiato per rieffettuare il controllo su il padre e stabilire 
            p = Math.floor((j-1)/2)// troviamo il padre di j !!
        } 
    }
} 

function aggiustaHeap(A,ultimo)
[
    
]
