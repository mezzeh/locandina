
class MediaMobile
{
  #a
  #k
  constructor(...n)
  {
    let kappa,an;
    [kappa, ...an] = n
    this.#k = kappa
    this.#a = an


  }
  succ()
  {
    for (let j = 0; j <= 10; j++)//PARTE DA UNO PERCHE PERCHEEEE LI ARRAYAAAAA
    {
          if (j >=this.#k)// NON POSSO FARLO PARTIRE DA UNOOOOOOO AAAA
          {
            let somma = 0

            for (let i = 1; i <= this.#k; i++)
            {
              somma += this.#a[j-i] // APPLICAZIONE DELLA FORMULA
              }

            let risultato = Math.floor(somma / this.#k)
            console.log(`la somma di a[${j}] è ${somma} ed il risultato è ${risultato}`)
            this.#a[j] = risultato
          }
      else
      {
        console.log("j < #k : ",this.#a[j])
      }
    }
    return this.#a.values() //speriam
  }
}


// console.log(mm.##k,mm.a)
// var x = mm.succ()
// console.log(x)
// let r = [1, 2, 3, 4];
// const t = r.values()
//


var mm = new MediaMobile(2, 10, 0);
var x = mm.succ(),
  r = [];
