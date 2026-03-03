import fs from "fs"
class GradeBook
{
   #grades  = [];
  constructor(tc) {
    this.TotalCredits = tc;
   }
  get average()
  {
    return Math.floor(this.#grades.reduce((acc,curr) => acc+curr.voto,0)/this.#grades.length)
  }
  get credits()
  {
    return this.#grades.reduce((acc, curr) => acc + curr.crediti,0)
  }
  get missingCredits()
  {

    if (this.TotalCredits == 180)new MissingCreditsError("prova");
    return this.TotalCredits- this.credits;
  }
  get StartGrade()
  {
    return   Math.floor((this.average * 110) / 30)
  }
  registra(...v)
  {

    for (let graded of v)
      if(!this.#grades.includes(graded) )
        if(graded instanceof grade)
          this.#grades.push(graded)
          else
            throw new TypeError("La variable must be a class grade")
      else
        throw new DuplicatedGradeError("Non immettere esami duplicati")

  }
  get obj()
  {
    return {grades: this.#grades, credits: this.credits, average: this.average, missingCredits: this.missingCredits, StartGrade: this.StartGrade}
  }
  toString()
  {
    return JSON.stringify(this.obj)
  }
  exportJSON(f)
  {

    fs.writeFileSync(f, ga.toString())
  }
  static fromJSON(f)
  {
    let data = fs.readFileSync(f)
    data = JSONparse(data)
    // come metto in ordine gli oggetti da passare? un for che inseirsce ?
    //ora io ho l'oggetto
    let arr = data.grades
    let newb = new GradeBook(data.TotalCredits)
    newb.registra(...arr.map((x) => x = new grade(x.nome,x.voto, x.credit,x.data,x.lode)))

  }

}
class MasterGradebook extends GradeBook
{
  constructor()
  {
    super();
    this.tc = 120;

  }
}
class BachelorGradebook extends GradeBook
{
  constructor()
  {
    super();
  }
}
class grade
{
  #nome
  #crediti
  #data
  #voto
  #lode
  constructor(n, c, d, v, l)
  {
    this.#nome = String(n);
    if (c <0)
      throw new InvalidCreditsError ("I CREDITI DEVONO ESSERE POSITIVI")
    else
       this.#crediti = Number(c);
    this.#data = new Date(d) // e("19 marzo 2021"
    if (!(v >= 18 && v <= 30))
      throw new InvalidValueError("IL VOTO DEVE ESSERE COMPRESO TRA 18 E 30 ")
      else this.#voto = Number(v);
    if (l && v != 30)
      throw new InvalidValueError("NON PUOI ASSEGNARE LA LODE AD UN VOTO DIVERSO DA 30")
      else
        this.#lode = Boolean(l)
      }
      equals(g)
      {
        let obj = this.obj
        let gobj = g.obj
        for (let el in obj) {
          console.log(obj[el], gobj[el])
          if (!(obj[el] instanceof Date)) {
            if (obj[el] != gobj[el]) { return false }
          }

          else{
            console.log("valore delle date:",obj[el].valueOf() , gobj[el].valueOf())
            if (obj[el].valueOf() != gobj[el].valueOf())
              return false
          }
          }
          return true;

      }
      toString()
      {
        return JSON.stringify(this.obj)
      }
      get obj()
      {
        return {nome : this.#nome , crediti : this.#crediti , data : this.#data , voto : this.#voto , lode : this.#lode}
      }
  get crediti()
  {

    return this.#crediti
  }
  get voto()
  {
    return this.#voto
  }
}


//errorriii
class InvalidCreditsError extends Error
{
  constructor(txt)
  {
    super(txt);
  }
}
class DuplicatedGradeError extends Error
{
  constructor(txt)
  {
    super(txt)

  }
  }
class InvalidValueError extends Error
{
  constructor(txt)
  {
    super(txt);
  }
};
class MissingCreditsError extends Error {
  constructor(txt) {
    super(txt);
  }
};

try {
  var fdi = new grade("analisi", 12, "21 marzo 2006", 30, false)

  var ga = [ "fdi", 9, "21 marzo 2007", 20, false]
   let g = new grade("fdi", 9, "21 marzo 2007", 20, false)
  var libretto = new GradeBook( 180)
  libretto.registra(fdi);
  libretto.registra(g);

  libretto.exportJSON('testo.txt')
  GradeBook.fromJSON('testo.txt')
}
catch (e)
{
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
