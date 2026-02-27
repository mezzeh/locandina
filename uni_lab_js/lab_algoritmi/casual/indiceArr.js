// let array = [1, 2, 4, 3, 54, 43, 5]

// let trovato = false
// let i = 0;
// while (i < array.length && !trovato)
// {
//   console.log(i)
//   if (i == array[i])
//     trovato = true;
//   i++
//   }
// console.log(trovato)


//versione con array ordinato:
trovato = false
 i = 0
let array = [1, 2, 3, 4, 5, 6, 7 ,8, 8, 56, 68]
//           0, 1, 2, 3, 4, 5, 6, 7, 8, 9,   10
            // se ho tripo i = 5 , el = 4 potrei trovare une elemento a sinistra ma non a destra perche ormai è stato superato il limite
console.log(trovael(0,array.length-1))
function trovael(s, d)
{
  while( s<= d )// nel momento in cui s > d finisce
  {
    let mid = Math.floor((s + d) / 2)
    if (mid == array[mid]) // ho i = 1 ed el = 2 io posso ancora trovare un el a destra .
      return true
    else if (array[mid] > mid)// se 4 > 3 come posso sperare di trovare 4 in 4? trovero 5 in 4 quindi mi sposto a sinistra in cui potro trovare ancora 2 su 2
      s= mid +1 //seconda iterazione
    else if (array[mid] < mid)
      d= mid -1
    // ragionimao: se arrivo ad un indice = 3 e trovo un elemento piu grosso? significa che a destra non potreo trovare niente perche tutti gli elementi saranno piu grossi
    // potro trovare elementi migliori solo a sinistra. in cui potro trovarea ancora indici
  }
  return false
}
