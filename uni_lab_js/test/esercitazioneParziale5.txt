
import fs from "fs"

class InvalidCreditsError extends Error{
    constructor(m,c){
        super(m)
        this.creditoSbagliato = c
    }
}
class InvalidValueError extends Error{}
class DuplicatedGradeError extends Error{}

class Grade{
    #nome
    #crediti
    #data
    #voto
    #lode
    constructor(n,c,d,v,l){
        this.#nome = n
        if (c<=0){
            throw new InvalidCreditsError("Crediti negativi???", c)
        }
        else{
            this.#crediti = c
        }
        this.#data = d // new Date(d)
        if (v<18 || v>30){
            throw new InvalidValueError("Voto sbagliato!")
        }
        else if(v!=30 && l){
            throw new InvalidValueError("Lode non ammissibile!")
        }
        else{
            this.#voto = v
        }
        this.#lode = l // Boolean(l)
    }
    get nome(){ return this.#nome}
    get crediti(){ return this.#crediti}
    get data(){ return this.#data}
    get voto(){ return this.#voto + (this.lode ? 2 : 0) }
    get lode(){ return this.#lode}

    equals(g){
        if (g instanceof Grade){
            let a = g.nome === this.nome
            let b = g.crediti === this.crediti
            let c = g.data === this.data
            let d = g.voto === this.voto
            let e = g.lode === this.lode
            return a && b && c && d && e
        }
    }
    #toOggetto(){
        return {
            nome: this.#nome,
            crediti: this.#crediti,
            data: this.#data,
            voto: this.#voto,
            lode: this.#lode
        }
    }
    toString(){
        return JSON.stringify(this.#toOggetto())
    }
    toJSON(){ // <-- invocato da JSON.stringify
        return this.#toOggetto()
    }
}

let g1 = new Grade("Lab 1", 12, "26 Feb 2026", 19, false)
let g2 = new Grade("Algo", 15, "27 Feb 2026", 18, false)
console.log(g1.equals(g2))
console.log(g1.toString())

try{
    let g3 = new Grade("Algo", -15, "27 Feb 2026", 18, false)
}
catch(e){
    console.log(e.message + " Crediti " + e.creditoSbagliato + " non è ammissibile!")
}


class GradeBook{
    #grades = []
    #totalCredits
    constructor(totCred){
        this.#totalCredits = totCred
    }

    get credits(){
        return this.#grades.reduce( (r,e)=> r+e.crediti , 0 )
    }
    get missingCredits() {return this.#totalCredits - this.credits}
    get average() {
        return this.#grades.reduce( (r,e)=> r + e.crediti * e.voto , 0 ) / this.credits
    }
    get startingGrade() {
        return this.average / 30 * 110
    }

    register(...grades){
        for (let grade of grades)
            if (grade instanceof Grade){
                this.#grades.push(grade)
            }
    }

    toString(){
        let newogg
        newogg = {grades: this.#grades, totalCredits: this.#totalCredits}
        return JSON.stringify(newogg)
    }

    exportJSON(f){
        let s = this.toString()
        fs.writeFileSync(f,s)
    }

    static fromJSON(f){
        let s = fs.readFileSync(f)
        let ogg = JSON.parse(s)
        let newb = new GradeBook(ogg.totalCredits)
        let arr = ogg.grades
        newb.register(...arr.map( x=>new Grade(x.nome, x.credit, x.data, x.voto, x.lode) ))
        return newb
    }
}

let b = new GradeBook(180)
b.register(g1)
b.register(g2)
console.log(b.toString())
b.exportJSON("/myfiles/libretto.json")
let newogg = GradeBook.fromJSON("/myfiles/libretto.json")
console.log(newogg instanceof GradeBook)
console.log(newogg.toString())

class BachelorGradeBook extends GradeBook{
    constructor(){
        super(180)
    }
}
class MasterGradeBook extends GradeBook{
    constructor(){
        super(120)
    }
}
