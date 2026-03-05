class Caveau
{
  #owner;
  #saldo = 0;
  #movimenti = []
  constructor(owner, saldoIniziale)
  {
    if (owner != "")
      this.#owner = owner;
    else
      throw  new TypeError("owner non puo esser vuoto")
    if (saldoIniziale > 0)
      this.#saldo = saldoIniziale;
      else throw new TypeError("saldo non puo essere <= 0")
  }
  get saldo()
  {
    return this.#saldo
  }
  versa(n, causal)
  {
    if (n >= 0)
      this.#saldo += n;
      else throw new TypeError ("n must be postitive")

   if (typeof causal != String)
      throw new TypeError("causale must be a string")


   this.#movimenti.push({tipo:'V',importo:n,causale:causal})
  }
  preleva(n, causal)
  {
    if (n >= 0)
    {
      if ((this.#saldo - n) < 0)
        throw new  FondiInsufficienti ("non hai abbastanza soldi",n)
      this.#saldo -= n
      }
      else throw TypeError("n must be positive")

    if (typeof causal!= String)
      throw new TypeError("causale must be a string")

    this.#movimenti.unshift({tipo:'P',importo:n,causale:causal})
  }
  estratto(k)
  {
    for (let i = 0; i <= k; i++)
    {
      console.log(this.#movimenti[k])
      }
  }

}
class FondiInsufficienti extends Error
{
  constructor(txt)
  {
    super(txt)
  }
}
