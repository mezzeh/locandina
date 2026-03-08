

let A = [10,8,3,15,7,9,13,4,11,6]

// potrei scegliere il pivot anche a mezzo,
//metto a sinistra gli el < del pivot e a destr agli el > pivot, 
//quindi s e sono a destra aboh annullo
quicksort(A,0,A.length-1)
console.log(A)
function quicksort(A,p,r)
{

    if(p< r )
    {
    let q = partition(A,p,r)

    quicksort(A,p,q)
    console.log("prima parte: ")
    quicksort(A,q+1,r)
      for(let i = p; i<= q ; i++)
        console.log(A[i])
    console.log("seconda parte")
    for(let i = q+1; i<= r ; i++)
        console.log(A[i]) 
}
    }
function partition (A,p,r)
{

    let pivot = A[p]
    
    let i = p-1;let  j = r+1;

    do {
        do{
            j = j-1
        }while(A[j]> pivot)
        do {
            i += 1
        }while(A[i]< pivot)
        
        if(i < j)
        {
            let temp = A[i]
            A[i] = A[j]
            A[j] = temp
        }
    } while(i < j)


        return j
}