//troviamo il minimo ogni volta e lo swappiamo con l'attuale
let array = [7, 5, 4, 3, 4, 34, 53, 35]

//un for che scorre tuuutto l'array
//devo dichiareare il minimo, //assegnazione
console.log(array)
for (let j = 0; j < array.length-1; j++)//non posso farlo partire da 1 , perche avendo quel for a j+1 perderei il primo elemento.//pero devo fare array.lenght. meno 1 perche, avrei un ciclo finale, in cui confronto l'ultimo elemento con se stesso o pegigo un undefined
{
  let min = j // qua parto col primo e confronto tutti gli altri // ma sto sbagliando non devo partire da 1 e basta , devo partire da j ed arrivare alla fne ogni volta
      for (let i = j+1; i < array.length; i++)
      {
        //ora confronto il successivo con il mio ed in caso scambio
        //essendo che ho assegnato il minimo al primo elemento posso partire da 1
        if (array[i] < array[min])//NB devi confrontare i due elementi che sono presenti nello stesso array , tramite gli indici in moodo da
        //saper dove sono continuamente, senno non potresti scambiarli ma solo asseg
        {min = i
          }// se lo faccio durante l'esecuzione cosa succede? scambia continuamente? il punto è che non inserirebbe l'elemento minore nella prima posizione
        //ma li scambierebbe solo continuamente

      }
      //avendo trovato il minimo qua lo mando a console:
     // console.log(array[min])
      //ora qua devo scambiare gli array, devo scambiare l'indice del minimo con l'elemento j
  let temp = array[j]
  array[j] = array[min]
  array[min ] = temp
}
console.log(array)

//analizziamo la complessita e l'invariante di ciclo
