let arr = [10, 20, 30, 40, 50]
//hai due confini sx = 0 e dx = arr.length

console.log(ricercaBinaria(arr,50))
function ricercaBinaria(array,num)
{
let cont = 0
let sx = 0; let dx = array.length-1

//la condizione deve essere che i due indici non si sovrappongono,

// 0  e  5 sara 2 , ma se ho 5 e 10 sara 7 -
while(sx <= dx )
{
    let cx = Math.floor((sx + dx) /2 )
    cont +=1
    if(num == arr[cx])
        return cx
    else if(num > arr[cx])
    //si va a destra
        sx = cx +1
    else //num < arr[cx] // si va a sinistra 
        dx = cx -1
    
}
return -1
}