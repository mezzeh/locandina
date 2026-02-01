/**
 * ricerca lineare: scorre finche non c'è ricorrenza
 * 
 */
let arr = [3, 5, 7, 15, 23, 42, 56, 89, 91, 100]
let el = 5;
/*     console.log("l'el",el,"è stato trovato in pos ",trovaEl(el,arr,0))
    function trovaEl(el,arr,i)
    {
        //Caso base : 
        if(!arr[i] && i > arr.length)
            return -1;
        if(arr[i] == el)
            return i; 

        return trovaEl(el,arr,i+1);
    } */
 console.log(  ricercaBin(0,arr.length-1,el,arr))
function ricercaBin(sx,dx,el,arr)
{
    cx = Math.floor((sx+dx)/2);

    if(sx > dx)
        return -1;
    if(el == arr[cx])
        return cx;

    if(el > arr[cx])
        sx = cx+1;
    else
        dx = cx-1

    return ricercaBin(sx,dx,el,arr);

}