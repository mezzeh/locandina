/**Si implementi una classe Parcometro che rappresenta un parcometro personale con credito protetto. Il costruttore prende due
argomenti: targa, una stringa non vuota; credito, un numero non negativo (default 0). Se i parametri non sono validi, il costruttore deve
lanciare un’eccezione di tipo TypeError. La classe deve consentire l’accesso in sola lettura al credito corrente disponibile e offrire i
seguenti metodi: ricarica(euro, motivo) che aggiunge euro al credito; paga(euro, motivo) che sottrae euro dal credito. I metodi ricarica e
paga devono lanciare TypeError se euro non è un numero strettamente positivo, oppure motivo non è una stringa. Il metodo paga deve
inoltre lanciare un’eccezione custom CreditoInsufficiente se euro è maggiore del credito disponibile. I metodi ricarica e paga devono
istanziare oggetti della classe Movimento con le seguenti proprietà: tipo ("R" = ricarica, "S" = spesa), euro, motivo, data. Parcometro
fornisce inoltre il metodo storico(k) che restituisce un array con gli ultimi k movimenti effettuati (default k = 5), ordinati dal più recente al
meno recente. Attenzione: modificare gli oggetti restituiti da storico() non deve alterare i movimenti interni al parcometro. Ogni
operazione effettuata da una istanza di Parcometro deve inoltre essere registrata in un registro globale della classe. Ogni elemento
del registro globale è un oggetto con due proprietà: parcometro, che contiene il riferimento all’istanza di Parcometro; movimento, che
contiene il riferimento al corrispondente Movimento. La classe deve offrire un metodo statico registro() che restituisce un array con
tutte le operazioni effettuate su tutte le istanze create. Attenzione: modificare l’array restituito da registro() non deve alterare il registro
globale della classe. Si curino con particolare attenzione i tip */
class CreditoInsufficente { }
class Movimento
{
  static tipi = new Set<string>(["R", "S"])
  //se li faccio rivati non sono modificabili, e sono reperiblii tramite dei get
  #tipo: string; #euro: number; #motivo: string;#data:Date
  constructor(tipo:string, euro:number, motivo:string, data:Date)
  {
    if (!Movimento.tipi.has(tipo)) throw new TypeError("movimento sconosociuto")
    if (motivo == "") throw new TypeError("motivo non valido")
    this.#tipo = tipo; this.#euro = euro; this.#motivo = motivo; this.#data = data;
  }
  get tipo() { return this.#tipo; }
  get euro() { return this.#euro; }
  get motivo() { return this.#motivo }
  get data() { return this.#data }

  toJSON()
  {
    return { tipo: this.tipo,euro :this.euro,motivo : this.motivo, data : this.data }
  }
  }
interface obj {
  movimento: Movimento;
  istanza: Parcometro
}
interface objA
{
  movimento: string,
  istanza : Parcometro
  }
class Parcometro
{
  static registro :obj[] = []
  #movimenti : Movimento[] = []
  #credito: number;
  targa: string;
  constructor(targa: string, credito: number = 0)
  {
    if (targa == "" || credito < 0)
      throw new TypeError("parametri non validi")
    this.#credito = credito;
    this.targa = targa;
  }
  ricarica(euro: number, motivo: string)
  {
    if (motivo == "" || euro <= 0)
      throw new TypeError("parametri non validi")

    this.#credito += euro

      this.registra(new Movimento("R",euro,motivo,new Date()))
  }
  paga(euro: number, motivo: string)
  {
    if (motivo == "" || euro <= 0)
      throw new TypeError("parametri non validi")

    if ((this.#credito - euro) < 0)
      throw new CreditoInsufficente()

    this.#credito -= euro;

      this.registra(new Movimento("S",euro,motivo,new Date()))
  }
  registra(mv:Movimento)
  {
    this.#movimenti.push(mv)
    Parcometro.registro.push({ movimento: mv, istanza: this })
  }
  storico(k:number): string[]
  {
    let mvs: Movimento[] = (this.#movimenti.reverse()).splice(0, k)
    //let MvJson = mvs.forEach((mv) => JSON.stringify(mv)) // foreach è mmutile
    let Mvs = mvs.map((x)=> JSON.stringify(x))
    return Mvs
  }
  static storicoGlobale(): objA[]
  {
    let Mvs:objA[] = Parcometro.registro.map((x) => ({ movimento: JSON.stringify(x.movimento), istanza: x.istanza })) // devo
    return Mvs
  }

}
let str: string = "d";
let parcometro: Parcometro = new Parcometro(str, 5)
parcometro.ricarica(1, " x parcheggio pisa")
parcometro.paga(1, "parcheggio pisa")
parcometro.ricarica(1, " x parcheggio pisa2")
parcometro.paga(1, "parcheggio pisa2")

console.log(Parcometro.storicoGlobale())
