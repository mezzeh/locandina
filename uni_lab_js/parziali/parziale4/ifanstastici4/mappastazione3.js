//
/*
Si vuole rappresentare una mappa di collegamenti tra stazioni.
Le stazioni sono identificate da stringhe (es. "GPP", "Termini", "Pisa Centrale"). I collegamenti sono bidirezionali.
Si scriva una classe MapStation con:
-costruttore senza argomenti
-campo pubblico size: contiene il numero di stazioni presenti nella mappa
-metodo binario(u, v): aggiunge il collegamento tra le stazioni u e v (e crea le stazioni u e v se mancanti)
-metodo diretto(u, v): restituisce true se c'è un collegamento diretto tra le stazioni u e v, false altrimenti
-metodo raggiungibile(u, v): restituisce true se v è raggiungibile da u, altrimenti false
-metodo percorso(u, v): restituisce un array con un cammino da u a v (estremi inclusi). Se non esiste, restituisce null.
*/
//rappresentare una stazione senza la sua classe potrebbe essere piu complesso rispetto al semplicemente farla e rappresntarla con il suo nome
// in formato stringa, ci allego pure i diretti vicini, che sarebbero i nodi adiacenti al nodo. creo cosi un grafo capace di poter costruire
// un walk.
// a qundo pare il collegamento deve essere chiamato da mapStation, me posso solo passargli la chiamata per evitare di incasinarmi con logiche esterne.nome

//proviamo a creare la classe mapStaion

class mapStation {
  #stazioni
  constructor() {
    this.#stazioni = []//evitiamo duplicatis
    this.size = 0
  }

  binario(u, v) {
    let U
    let V
    //controllo nodo
    for (let i = 0; i < this.#stazioni.length; i++) {
      if (this.#stazioni[i].nome === u)
        U = this.#stazioni[i];
      if (this.#stazioni[i].nome === v)
        V = this.#stazioni[i];
    }
    //creo una lista di adiacenza, creo un array di oggetti , per cui il nome sara accessibilie tramite .nome creando dei vicini,
    if (!U) {
      U = { nome: u, vicini: [] };
      this.#stazioni.push(U);
      this.size++;
    }
    if (!V) {
      V = { nome: v, vicini: [] };
      this.#stazioni.push(V);
      this.size++;
    }
    let connesso = false;// controllo
    for (let i = 0; i < U.vicini.length; i++) {
      if (U.vicini[i] === v) connesso = true;
    }

    if (!connesso) {
      U.vicini.push(v);
      V.vicini.push(u); //Bidirezionale
    }

  }

  diretto(u, v) {
    //accedo al nodo che mi han dato
    for (let stazione of this.#stazioni) {
      console.log(stazione.nome)
      if (stazione.nome === u) {
        for (let vicino of stazione.vicini) {
          if (vicino === v)
            return true;
        }
        console.log("non è stato trovato il nodo di arrivo nei vicini.")
        return false
      }
    }
    console.log("non è stato trovato il nodo di partenza")
    return false
  }

  raggiungibile(u, v) {
    return this.percorso(u, v) !== null;
  }
  percorso(u, v, visitati = []) {
    //cb
    if (u === v)
      return [u];

    visitati.push(u);

    let vicini = [];
    for (let stazione of this.#stazioni) {
      if (stazione.nome === u) {
        vicini = stazione.vicini;
        break;
      }
    }

    for (let vicino of vicini) {
      let visited = false;
      for (let i = 0; i < visitati.length; i++) {
        if (visitati[i] === vicino) {
          visited = true;
          break;
        }
      }

      if (!giaVisitato) {
        let cammino = this.percorso(vicino, v, visitati);
        if (cammino !== null) {
          return [u, ...cammino];
        }
      }
    }
    return null;//Nada
  }
}

let g1 = new mapStation()
g1.binario("A", "B");
g1.binario("B", "C");
g1.binario("C", "D");

console.log(g1.percorso("A", "D")); // Output: ["A", "B", "C", "D"]
console.log(g1.raggiungibile("A", "D")); // Output: true
console.log(g1.percorso("A", "Z")); // Output: null

//inizio versione prof
class MapStation
{
  adj = {}
  size = 0
  constructor() { }
  #ensure(u)
  {
    if (this.adj[u] == undefined)
    {
      this.adj[u] = [u]// assegna alla chiave il valore ? lo stesso ip assegna il suo stesso ip?
      this.size++
      }
  }

  binario(u, v)
  {
    this.#ensure(u)
    this.#ensure(v)
    if (!this.adj[u].includes(v)) this.adj[u].push(v)
    if (!this.adj[v].includes(u)) this.adj[v].push(u)

  }
  diretto(u, v)
  {
    return this.adj[u].includes(v)
  }
  raggiungibile(u, v)
  {
    return this.percorso(u,v) != null
  }
  percorso(u, v)
  {
    if (this.adj[u] == undefined)
      return null// se il valore dei collegamenti del nodo è indefinito. cancella?
    let seen = {}

    let dfs = (x) => { // la funzione dfs verra chiamata ricorsivamente, entrera e controllera  ogni nodo di ogni lista di adiacenza,
      //confrontera ogni v con x , v equivale a dfs
      if (x == v) return [x]//se x === v? ho capito, lui mi da due nodi, io controllo che x === v ,
      seen[x] = true // seen per mettere in ogni caso il visitato
      for (let y of this.adj[x]) { //scorre la lista di adiacenza del nodo x
        if (!seen[y]) {// se non è visitato
          let p = dfs(y);//p = dfs di y quindi avvia ricerca sul nodo di y ,

          if (p != null) {//se risulta vuoto quindi se l'elemento x che è il primo elemento di dfs
            p.unshift(x)// p unshift x?
            return p;
          }
        }
      }
      return null;
    };
    return dfs(u)
  }
}


/// ulteriore versione
//
class MapStation{
    size=0;
    stazioni = new Map() // chiave "Termini" --> valore oggetto stazione {val: "Termini"}
    collegamenti = new Map() // chiave {val: "Termini"} --> valore Set( {val:"Firenze"} , {val:"Napoli"} )

    rendiStazione(s){
        if (!this.stazioni.has(s)){
            let nuovastazione = {val: s}
            this.stazioni.set(s, nuovastazione)
            this.collegamenti.set( nuovastazione, new Set() )
            this.size++
        }
        return this.stazioni.get(s)
    }

    binario(u,v){
        let nodoU = this.rendiStazione(u)
        let nodoV = this.rendiStazione(v)
        this.collegamenti.get( nodoU ).add( nodoV )
        this.collegamenti.get( nodoV ).add( nodoU )
    }

    diretto(u,v){
        let nodoU = this.stazioni.get(u)
        let nodoV = this.stazioni.get(v)
        return (nodoU && nodoV) ? this.collegamenti.get( nodoU ).has(nodoV) : false
    }

    trovaPercorso(nodocorrente, nodotarget, nodivisitati = new Set() ){
        if (nodocorrente === nodotarget) return [nodocorrente.val]
        nodivisitati.add( nodocorrente )
        for (let vicino of this.collegamenti.get(nodocorrente)){
            if (!nodivisitati.has(vicino)){
                let arrCammino = this.trovaPercorso(vicino,nodotarget,nodivisitati)
                if (arrCammino) return [nodocorrente.val, ...arrCammino]
            }
        }
        return null
    }

    percorso(u,v){
        let nodoU = this.stazioni.get(u)
        let nodoV = this.stazioni.get(v)
        return (nodoU && nodoV) ? this.trovaPercorso(nodoU, nodoV) : null
    }

    raggiungibile(u,v){
        return Boolean(this.percorso(u,v))
    }
}
