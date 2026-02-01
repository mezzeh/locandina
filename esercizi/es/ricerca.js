let arr = [3, 5, 7, 15, 23, 42, 56, 89, 91, 100]
let el = 23;
let num = binarysearch(arr, el)
if( num== -1)
    console.log("el non trovato")
else
    console.log("el trovato in pos: ",num) 
function binarysearch(arr,el)
{
    let sx = 0;
    let dx = arr.length-1;

    while(sx <= dx)// è vera si ripete finche è falsa
    {
        cx = Math.floor((sx +dx)/2);
        if(el == arr[cx])
            return cx

        if(el > arr[cx])
            sx = cx+1
        else
            dx = cx-1;
    }
    return -1


}