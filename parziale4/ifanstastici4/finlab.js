class FinestraLab extends Array
{
  #pmaxc
  constructor()
  {
     super()
    this.#pmaxc = 10
  }
  set maxc(x)
  {
    console.log("smaltimento : ", this.#pmaxc, x)
    this.#pmaxc = x

    let len = this.length - 1 - x
    console.log("pmaxc aggiornato : ",this.#pmaxc)
    for (let i = 0; i <= len; i++)
    {
      console.log()
      this.shift()
      }
    console.log("ora la lunghezza array ", this.length  )
  }

    get maxc()
  {
      return this.#pmaxc
  }
  push(x)
  {

    console.log(this, this.#pmaxc, this.length)
    if (this.length >= this.#pmaxc)
      this.shift()
    super.push(x)

  }
  pop()
  {
    return;
  }
  splice()
  {
    return
  }
  toString()
  {
    console.log("TEST DA QUA---------------------------------------",this)
    return super.toString()
  }
}


let fin= new FinestraLab()
fin.push(1)
fin.push(2)
fin.push(3)
fin.push(4)


fin.maxc = 2
console.log(fin)
console.log(fin.toString())
fin.push(5)
console.log(fin.toString())
