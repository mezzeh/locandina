let arr = [ 8,6,5,4];




insertionSort(arr)
console.log(arr)
function insertionSort(array)
{
  //un ciclo for per iterare su tutti gli elementi cmpreso l'ultimo
  for (let i = 1; i < array.length; i++)
  {
    console.log("primo giro ",i ,array)
      //non metto l'if, ma confronto l'attuale con quelli gia ordinati.
    let j = i - 1
    let el = array[i]
    while (array[j] > el  && j >= 0)//finche  l'array attuale minore di queli gia ordiati shifta,
    //cosa significa shifta? ottieni l'elemento dove inserire l'array?
    {
      console.log("debug casereccio : array : ",array,"el",el)
      array[j + 1] = array[j]// shifto l'elemento verso avanti?
      j--

      console.log("debug casereccio shifting.. : array : ",array,"el",el)
    }
    // // }

     array[j+1] = el// dopo aver shiftato verso avanti reinserisco.
    // a fine corsa pero assegno a [j ]
  }

}
