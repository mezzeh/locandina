

//esercizi di prerequisito a esercizio stazione. 
class stationRegistry
{
    #stazioni
    constructor()
    {
        this.#stazioni = new Set()
    }
    add(nome)
    {
        this.#stazioni.add(nome)
    }
    get size()
    {
        return this.#stazioni.size
    }

}

let stazRoma = new stationRegistry()

class stazione
{
    #neighbors
    constructor(nome)
    {
        this.nome = nome
        this.#neighbors = new Set()
    }
    link(otherNode)
    {
        if(this.#neighbors.has(otherNode)) return // condizione per non far andare in loop, dando un return e spezzando il ciclo visto che se gia esiste
        // non ce bisogno di riaggiungerlo anche perche è un set e non funzionerebbe. //returna ricorsivamente "return" 

        this.#neighbors.add(otherNode)//devo aggiungere l'oggetto o devo aggiungere solo il nodo?
        //dovrei mettere un controllo che other node sia di tipo stazione, come controllo  type of()?
        otherNode.link(this)
    }
    canReach(target,visited = new Set())
    {
        if(this.nome == target)
            return true
        if(visited.has(this))
            return false
        visited.add(this)// devo inserire il nome della stazione o devo inserire l'oggetto in se?//visited add on funziona
        //continua a cercare all'infinito, devo fare in modo che si il for funzioni, ma che se la stazione attuale è presente ritorna false
        for(let el of this.#neighbors)
        {    if(el.canReach(target,visited ))return true;

        }
        
        return false
    }
    get neighborsN()
    {
        //return this.#neighbors
        return Array.from(this.#neighbors).map(n => n.nome);
    }
}
let termini = new stazione("termini")
let rossore = new stazione("sanrossore")
termini.link(rossore)
console.log("termini neighborg",termini.nome,termini.neighborsN)
console.log("rossore neighborgh",termini.nome,rossore.neighborsN)

console.log("ricerca: san rossordore", termini.canReach("sanrdossore"))