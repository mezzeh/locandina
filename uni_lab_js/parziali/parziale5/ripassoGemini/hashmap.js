/*3. Hash Map e Isolamento dello Stato nel DFS (Rif. MapStation)

Obiettivo: Abbandonare la ricerca lineare in Array a favore di accessi in tempo O(1) tramite Hash Map. Gestire lo stato della ricorsione senza inquinare l'ambiente globale.

Specifica: Progetta una classe NetworkTopology per mappare collegamenti tra indirizzi IP (router).

    Usa un normale oggetto letterale (Hash Map) per la lista di adiacenza, dove la chiave è l'IP (stringa) e il valore è l'array degli IP connessi.

    Implementa un metodo di connessione bidirezionale. Usa un metodo privato per garantire che un nodo esista prima di collegarlo (principio DRY).

    Implementa un metodo traceRoute(ipA, ipB). Usa una funzione interna per la ricerca DFS. Passa un oggetto seen per tracciare i nodi visitati, garantendo che i percorsi scartati in fase di backtracking non corrompano le ricerche successive. */
class NetworkTopology
{
//   hashMap = new Map()
//   collegamenti = new Map()
  hashMap = {};//l achiave sarà l'ip e ilvalore è un array di ip
  #ensure(u)
  {
    if (this.hashMap[u] == undefined)
    {
      this.hashMap[u] = []

      }
  }
  connetti(u, v)
  {
    this.#ensure(u); this.#ensure(v)
    if (!this.hashMap[u].includes(v))this.hashMap[u].push(v)
    if (!this.hashMap[v].includes(u)) this.hashMap[v].push(u)
  }

  traceRoute(ipA, ipB)
  {
    if (this.hashMap[ipA] == undefined)
      return null
    let seen = {};

    let dfs = (x) =>
    {
      if (x == ipB) // ci deve essere la stazione stessa in dfs // o identifico la stazione per chiave? identifico la stazione per chiave.
        return [x]
      seen[x] = true
      for (let y of this.hashMap[x])
      {
        if (!seen[y])
        {//se y non è stato visitato lo visitiamo
          let p = dfs(y);
          if (p != null)// se ha returnato qualcosa o se non erano tutti gia visitati // quindi se ha trovato qualcosa.
          {
                 p.unshift(x)//unshifto il nodo da cui è partito quindi xperche p conterra giaquello con cui ho raggiunto il nodo.
          return p
          }
        }

      }
      return null

    }
      return dfs(ipA)


  }
  percorso(ipA,ipB)
  {
    return this.traceRoute(ipA, ipB);
  }
}
let g4 = new NetworkTopology()
g4.connetti("A", "B");
g4.connetti("B", "C");
g4.connetti("C", "D");
console.log("percorso da a ad C?: ",g4.percorso("A","C"))
console.log(g4.hashMap["A"])
