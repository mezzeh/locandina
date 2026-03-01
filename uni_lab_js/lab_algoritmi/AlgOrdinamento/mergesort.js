let primo = [2, 6, 8,9,10]
let secondo = [3, 5, 7, 9]
let arr = [9,8,7,6,5]
mergesort(arr,0,arr.length)
function mergesort(p, q) {
  if (p > q)
    return;

  let mid = Math.floor((p, q) / 2)
    merge(mergesort(arr, p, mid), mergesort(arr, mid + 1, q))

}


function merge(primo, secondo)// funzione non ricorsiva che unisce i due array in base al criterio di grandezza
{
  let C = []
  //se deve posizionare gli elementi? deve sicuramente ordinare tutto il primo e dopo dovra incollare quel che resta, quindi deve fare n< n2 +1?
  let i = 0; let j = 0;let k = 0
  let cont = 0; // contatore per controllare la complessita

  while(i < primo.length && j < secondo.length) //scorre tutto il primo // posso accorciare? no
  {
    if (primo[i] <= secondo[j])
    {
      C[k] = primo[i]
      i++
      cont++
      console.log(`primo[i]: ${primo[i]} < secondo[j]:${secondo[j]} cont++ `,cont)
      }
    else
    {
      C[k] = secondo[j]
      j++
      cont++
      console.log(`primo[i]: ${primo[i]} > secondo[j]:${secondo[j]} cont++`,cont)
      }
    k++
    console.log(`i : ${i}, j : ${j}, k: ${k}`)
    if (i >= primo.length)
      while(j < secondo.length)
      {
        C[k] = secondo[j]
        j++;k++
      }
      else if( j >= secondo.length) // metti che hoj = 4 e ho let secondo = [3, 5, 7, 9] length = 4 devo mettere maggiore uguale
        while(i < primo.length)
        {
          C[k] = primo[i]
          i++;k++
        }
  }

  for (let el of C)
    console.log(el)
  return C
 }
