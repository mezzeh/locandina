/*Si scriva una classe Pacco con i seguenti campi:

- un identificatore (stringa),

- un peso (numero),

- uno stato (stringa) tra "CREATO", "IN_TRANSITO", "CONSEGNATO", e "BLOCCATO", e

- una sequenza cronologica di eventi di cambiamento di stato, ciascuno modellato come una coppia [dataOraCambiamento,statoRaggiunto], con dataOraCambiamento istanza della classe Date.

Tutti i campi devono essere accessibili in sola lettura, ad eccezione del campo peso che è accessibile in lettura e scrittura. Le modifiche di peso sono però consentite solo nello stato "CREATO"; se un pacco non è in stato "CREATO", un tentativo di modifica deve causare il lancio dell'eccezione ModificaNonConsentita, definita in modo da tenere traccia (come campi addizionali) di identificatore e stato del pacco che l'ha causata */
class Pacco {
  #id
  #stato
  #peso
  #eventi = [] // [dataOraCambiamento,statoRaggiunto],con dataOraCambiamento istanza della classe Date.
  #statiAmmessi = ["CREATO", "IN_TRANSITO", "CONSEGNATO",  "BLOCCATO"]
  constructor(id, peso)
  {
    this.#id = id;
    this.#peso = peso;
    this.#stato = "CREATO"
  }
   avanza(stato)
  {
    if (this.#statiAmmessi.find((element) => element == stato))
    {
      this.#stato = stato
      let d = new Date()
      this.#eventi.push([d,stato])
      }
    else
      throw new StatoNonValido("stato non valido",this.#id,this.#stato)

  }
  get id() { return this.#id }
  get stato() { return this.#stato }
  get peso() { return this.#peso }
  get eventi() { return this.#eventi }
  set peso(p)
  {
    //aggiungere controllo di stato = creato
    //
    if (this.#stato != "CREATO")
      throw new ModificaNonConsentita("modifica non consentita",this.#id,this.#stato)
    else
      this.#peso = p
  }
}
class ModificaNonConsentita extends Error
{
  constructor(txt, id, stato)
  {
    super(txt);
    this.id = id;
    this.stato = stato;
  }
}
class StatoNonValido extends Error
{
  constructor(txt, id, stato)
  {
    super(txt);
    this.id = id;
    this.stato = stato;
  }
}
class RangeError extends Error
{
  constructor(txt, tmin, tmax){
    super(txt);
    this.tmin = tmin;
    this.tmax = tmax
  }
}
class CatenaDelFreddoRotta extends Error
{
  constructor(txt, ta, tmin, tmax)
  {
    super(txt);
    this.ta = ta
    this.tmin = tmin;
    this.tmax = tmax;
  }
  }
/*
Si scriva una classe PaccoRefrigerato che estende Pacco e introduce due campi temperatura_minima e temperatura_massima, accessibili in sola lettura, e un campo temperatura_attuale. Il costruttore di PaccoRefrigerato verifica che temperatura_minima sia inferiore a temperature_massima, altrimenti lancia un RangeError. Quando viene creata e modificata la temperatura_attuale, la classe PaccoRefrigerato verifica che si trovi nell'intervallo [temperatura_minima,temperatura_massima]; se questo non si verifica, lo stato viene aggiornato in "BLOCCATO" e viene lanciata un'eccezione CatenaDelFreddoRotta, definita opportunamente. */

class PaccoRefrigerato extends Pacco
{
  #temperatura_minima
  #temperatura_massima
  #temperatura_attuale
  constructor(id,peso,ta, tmin, tmax)
  {
    super(id, peso);
    if (tmin >= tmax)
      throw  new CatenaDelFreddoRotta ("la temperatura minima deve essere inferiiore a quella massima",tmin,tmax)
    this.#temperatura_minima = tmin;
    this.#temperatura_massima = tmax;
    if (ta > tmin && ta < tmax) this.#temperatura_attuale = ta
    else {
      avanza("BLOCCATO");
      throw new RangeError("la temperatura attuale non è nell'intervallo corretto",ta,tmin,tmax)
      }
  }
 set  temperatura_attuale(ta)
  {
   if (ta >= this.#temperatura_minima && ta <= this.#temperatura_massima)
     this.#temperatura_attuale = ta
   else {
     avanza("BLOCCATO")
     throw new CatenaDelFreddoRotta("la temperatura attuale non è nell'intervallo corretto", ta, tmin, tmax)
   }
 }
  get temperatura_massima() { return this.#temperatura_massima }
  get temperatura_minima() { return this.#temperatura_minima }
  get temperatura_attuale() {return this.#temperatura_attuale}
}

class PaccoFreezer extends PaccoRefrigerato
{
  constructor()
  {}
}
/*ggiorna(pacchi_refrigerati,temperatura) che, dato un array di pacchi_refrigerati, aggiorna la loro temperatura_attuale alla temperatura passata e restituisce un nuovo array contenente tutti i pacchi la cui catena del freddo è stata rotta, nello stesso ordine in cui compaiono nell'array pacchi_refrigerati; */
try
{
  // var p = new Pacco("IT001", 2.5);
  //   console.log(p.stato, "CREATO");
  //   p.peso = 3.0;
  //    console.log(p.peso, 3.0);

  //   p.avanza("IN_TRANSITO");
  //    console.log(p.stato, "IN_TRANSITO");
  //   var ev = p.eventi;
  //    console.log(ev.length, 1);
  //   console.log(ev[0][0] instanceof Date);
  //    console.log(ev[0][1], "IN_TRANSITO");

}
catch (e)
{
  console.log(e)
  console.log(e.message + e.id + e.stato)
}
