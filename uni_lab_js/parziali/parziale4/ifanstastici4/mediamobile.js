// class MediaMobile
// {
//   #a
//   #k
//   constructor(...n)
//   {
//     let kappa,an;
//     [kappa, ...an] = n
//     this.#k = kappa
//     this.#a = an


//   }
//   succ()
//   {
//     for (let j = 0; j <= 10; j++)//
//     {
//           if (j >=this.#k)// se supera la soglia
//           {
//             let somma = 0

//             for (let i = 1; i <= this.#k; i++)//itera su k elementi a partire da 1 senno no funzionerebbe la sottr
//             {
//               somma += this.#a[j-i] // APPLICAZIONE DELLA FORMULA
//               }

//             let risultato = Math.floor(somma / this.#k)
//             console.log(`la somma di a[${j}] è ${somma} ed il risultato è ${risultato}`)
//             this.#a[j] = risultato
//           }
//       else
//       {
//         console.log("j < #k : ",this.#a[j])
//       }
//     }
//     return this.#a.values() //speriam
//   }
// }


class MediaMobile
{
  #k; #buf;
  constructor(k, ...init)
  {
    this.#k = k
    this.#buf = init.slice(0,k) //cosa caazzo? cosa fa questa parte?
  }
  *succ()
  {
    for (let i = 0; i < this.#buf.length; i++)yield this.#buf[i]
    {
      while (true)
      {
        let s = this.#buf.reduce((a, e) => a + e, 0)
        let n = Math.floor(s / this.#k)
        this.#buf.shift()
        this.#buf.push(n)
        yield n
        }
      }
  }
}


