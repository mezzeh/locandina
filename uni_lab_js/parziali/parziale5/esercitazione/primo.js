import fs from "fs"
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
    {
      console.log("voto sbagliato : ",v)
      throw new InvalidValueError("IL VOTO DEVE ESSERE COMPRESO TRA 18 E 30 ",v)
      }
      else this.#voto = Number(v);
    if (l && v != 30)
      throw new InvalidValueError("NON PUOI ASSEGNARE LA LODE AD UN VOTO DIVERSO DA 30",v)
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

      toJSON(){ // <-- invocato da JSON.stringify
          return this.obj
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
class GradeBook {
  #grades = [];
  constructor(tc) {
    this.TotalCredits = tc;
  }
  get average() {
    return Math.floor(this.#grades.reduce((acc, curr) => acc + curr.voto, 0) / this.#grades.length)
  }
  get credits() {
    return this.#grades.reduce((acc, curr) => acc + curr.crediti, 0)
  }
  get missingCredits() {

    if (this.TotalCredits == 180) new MissingCreditsError("prova");
    return this.TotalCredits - this.credits;
  }
  get StartGrade() {
    return Math.floor((this.average * 110) / 30)
  }
  registra(...grades) {

    // for (let graded of v)
    //   if (!this.#grades.includes(graded))
    //     if (graded instanceof grade)
    //       this.#grades.push(graded)
    //     else
    //       throw new TypeError("La variable must be a class grade")
    //   else
    //     throw new DuplicatedGradeError("Non immettere esami duplicati")


             for (let grad of grades)
                 if (grad instanceof grade){
                     this.#grades.push(grad)
                 }

  }
  get obj() {
    return { grades: this.#grades, credits: this.credits, average: this.average, missingCredits: this.missingCredits, StartGrade: this.StartGrade }
  }
  get grades()
  {
    return this.#grades
  }
  toString() {
    // nell'esporazione i grades non vengono correttamente esportati:avendone due non li visualizzo.
    console.log("GradeBook to String: ")
    return JSON.stringify({grades : this.#grades,TotalCredits: this.TotalCredits})
  }
  exportJSON(f){
        let s = this.toString()
        fs.writeFileSync(f,s)
    }

   static fromJSON(f) {
    let s = fs.readFileSync(f)
    let ogg = JSON.parse(s)
    let newb = new GradeBook(ogg.TotalCredits)
     let arr = ogg.grades

     newb.registra(...arr.map(x => new grade(x.nome, x.crediti, x.data, x.voto, x.lode)))
     console.log(newb.toString())
    return newb

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
  constructor(txt,v)
  {
    super(txt);
    this.creditosbagliato = v
  }
};
class MissingCreditsError extends Error {
  constructor(txt) {
    super(txt);
  }
};

// try {
//   var fdi = new grade("analisi", 12, "21 marzo 2006", 30, false)

//   var ga = [ "fdi", 9, "21 marzo 2007", 20, false]
//    let g = new grade("fdi", 9, "21 marzo 2007", 20, false)
//   var libretto = new GradeBook( 180)
//   libretto.registra(fdi);
//   libretto.registra(g);
//   libretto.exportJSON('testo.txt')
//   console.log("oggetto creato dal file:",GradeBook.fromJSON('testo.txt'))

// }
// catch (e)
// {
//   console.log(e instanceof InvalidValueError);
//   console.log(e.creditosbagliato)
//   console.log(e.message); // "Hello"
//   console.log(e.name); // "TypeError"
//   console.log(e.stack); // Stack of the error
// }
export {GradeBook,MasterGradebook,grade,InvalidCreditsError,MissingCreditsError}
