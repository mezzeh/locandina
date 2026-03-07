export function linearSearch(array, i) {
  let cont = 0;
  for (let el of array) {
    cont += 1;
    if (el == i) return [1, cont];
  }
  return [0, cont];
}
export function trovaNumeroDue(A,B)
{
    for(let i = 0; i< A.length; i++)
        {
            for(let j = 0; j <B.length; j++)
            {
                if(A[i] == B[j])
                    return A[i]
            }
        }  
        return null;
        
}export function trovaNumeroUguale(A)
{
    for(let i = 0; i< A.length; i++)
        {
            for(let j = i+1; j <A.length; j++)
            {
                if(A[i] == A[j])
                    return A[i];
            }
        }  
        return null;
        
}