const arr = [3,2,1,0]
/* let A = [1,3,5,7,9]
let B = [0,2,4,6]
 */

mergesort(arr,0 , arr.length-1)
console.log(arr)
function mergesort(arr,s,d)
{
    if(s < d )
    {
        let mid = Math.floor( (s+ d)/2 )
        console.log(mid)
        mergesort(arr,s,mid)
        mergesort(arr,mid+1,d)
        //ma devo acchiapparli sti caszz di array che mi rida.
        merge(arr,s,mid,d)
    }
    
}

// la funzione merge cosa deve fare: 
function merge(arr,s,mid,d)
{
    //qui divido l'array a meta con i suoi indici
    let n1 = mid -s +1 // perche cosa fa lui vuole il sinistro? 5 -0 +1 = 6? le iterazioni?
    let n2 = d -mid // 10 - 5 = 5 le iterazioni a sinistra???

    let A = []; let B = []

    for(let  i = 0; i < n1; i++)
            A[i] = arr[s+i]

     for(let  i = 0; i < n2; i++)
            B[i] = arr[mid+1+i]
 /*    A[n1+1] = Infinity
    B[n2+1] = Infinity */// puoi usarli solo in caso di for , perche nel while scorrerebbe all'infinito.
    //fine copiaggio array
    
    let i = 0;let j = 0;let  k = s;
    while ( i < n1 && j < n2)
    {   
        if(A[i] <= B[j])
        {
            arr[k] = A[i]
            i++
            k++
        }
        else if (A[i]> B[j])
        {
            arr[k] = B[j];
            j++;
            k++;
        }
    }

    // essendo uno dei due array finito procedo a copiare gli elementi rimasti se ce ne sono
      while(j < n2)
    {
                arr[k] = B[j]
                k++; 
                j++;
    }
    while(i < n1)
    {
                arr[k] = A[i]
                i++; k++
    } 
    //NB questi due cicli while finali possono essere sostituiti se alll'ultimo elemento dell'array quindi nell 'elemento A[n1]// quindi oltre si assegna infinity
  
    console.log(arr)
}


/* function merge (A,B)
{



    let i = 0;let j = 0;let  k = 0;let C = []
    while ( i < A.length && j < B.length)
    {   
        if(A[i] <= B[j])
        {
            C[k] = A[i]
            i++
            k++
        }
        else if (A[i]> B[j])
        {
            C[k] = B[i]
            j++
            k++
        }
    }

 
        if(i >= A.length)
        {
            while(j < B.length)
            {
                C[k] = B[j]
                k++; j++
            }
        }
        else if (j >= B.length)
        {
            while(i < A.length)
            {
                C[k] = A[i]
                i++; k++
            }
        }

        return C
}
 */





   //unire i restanti elementi avanzati negli array //prob solo un elemento
   /* 
    console.log("gli indici sono rispettivamente: i: ",i," j: ",j,)
    console.log("A[i]: ",A[i]," B[j]: ",B[j]," C[k]",C[k]) */
