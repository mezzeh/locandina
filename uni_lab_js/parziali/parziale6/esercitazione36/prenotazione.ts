class Passeggero
{
  #nome: string; #categoria: string;
  constructor(nome: string, categoria: string) {
    if (!(nome != "" && (categoria == "adulto" || categoria == "minore")))
      throw new TypeError("parametri non corretti")
    this.#nome = nome;
    this.#categoria = categoria;
  }
  get nome() { return this.#nome }
  get categoria() { return this.#categoria }

}
class Prenotazione
{
  #codice: string;
  #posti: number;
  #stati: string[] = ["aperta", "chiusa"];
  #stato: string = "aperta";
  #passeggeri: Passeggero[] = []
  constructor(codice: string, posti: number)
  {
    if (!(codice != "" && posti > 0))
      throw new TypeError("parametri non validi")
    this.#codice = codice;
    this.#posti = posti;
  }
  aggiungi(p:Passeggero)
  {
    if (this.postiLiberi() <= 0)
      throw new TypeError("posti pieni impossibile aggiungere")
    if (this.#passeggeri.filter((x) => x.nome == p.nome).length > 0)//find non poteva funzioare(Credo)
      throw new TypeError("passeggero duplicato")
    if(this.#stato == "chiusa") throw new TypeError("prenotazione chiusa")
    this.#passeggeri.push(p);

  }
  chiudi()
  {
    this.#stato = "chiuso";
  }
  elenco():Passeggero[]
  {
    return this.#passeggeri
  }
  conteggioMinori():Passeggero[]
  {
    let arr:Passeggero[] = []
    for (let el of this.#passeggeri)
    { if (el.categoria == "minore") arr.push(el) }
    return arr;
  }
  postiLiberi():number
  {
    return this.#posti - this.#passeggeri.length-1
  }
}
class PrenotazionePremium extends Prenotazione
{
  #passeggeriExtra:Passeggero[] = []
  #extra: string;
  constructor(codice:string,posti:number,extra:string)
  {
    super(codice, posti);
    if (extra == "") throw new TypeError("paremtri invalidi")
    this.#extra = extra;
  }
  get extra() { return this.#extra }
  elencoPremium()
  {

  }
}
