class INode
{

  constructor([a,b])
  {
    this.a = a
    this.b = b
    this.left = null
    this.right = null

  }
  add(n)
  {

    //inserise tramite l'algoritmo di un albero binario di ricerca l'intervallo dove è meglio che stia.
    //logica per il quale va ad inserirssi.

    //possiamo fare la ricorsione .
    if (p([n[0],n[1]],[this.a,this.b])) {// se il nodo è minore della rooot va a sinistra
      if (this.left)// perche è minore
        {this.left.add(n)}// se esiste gia il sinistro deleghiamo
      else
        {this.left =  new INode(n)} //se è vuoto lo inseriamo.
    }
    else {
      if (this.right)
        {this.right.add(n)}
      else
        {this.right =new INode(n)}
    }
    return

  }
  findValue(x) {

    if (!this)
      return false
    if (x <= this.b && x >= this.a)
      return this

    //controlli molto rustici
    if(this.left)
    {if (x < this.a)
      {
      console.log("x < this.a ",x,this.a)
          return this.left.findValue(x) // potrebbero non funzionare.
      }
      else{
        console.log("a sinsitra vuoto")
      }
    }
    else if(this.b)
    {

      console.log("x < this.right,",x,this.right)
        return this.right.findValue(x) //idem questa
    }
    //entrambi vuoti
    return null

  }

  static #maxheight(n){
    if(!n) return 0;

    return 1+ Math.max(INode.#maxheight(n.left), INode.#maxheight(n.right));
  }
get maxd() {
    return INode.#maxheight(this);
}
//non mi riconosceva i metodi ho usato le static(forse avrei dovuto usarle di piu )
  static #minheight(n){
    if(!n) return 0;

    return 1+ Math.max(INode.#minheight(n.left), INode.#minheight(n.right));
}

get mind() {
    return INode.#minheight(this);
}


}

//predicato
let p = ([x, y], [a, b]) => x < a || (x == a && y < b) // ritorna true se [x,y] < [a,b]

class YetAnotherAlbero {
  constructor() {
    this.root = null
    this.size = 0
  }

  addInterval(nodo) {
    if (!this.root)
      this.root = new INode(nodo)
    else {
      this.root.add(nodo)

    }
    this.size +=1
    return

  }
  findValue(x)
  {
    return this.root.findValue(x)
  }
}

// codice del professore
//
class INode{
  left = null
  right = null

  constructor([a, b])
  {
    this.a = a
    this.b = b
  }
  add(n)
  {
        if (n.a < this.a || (n.a == this.a && n.b < this.b))
        {
          if (!this.left) this.left = n
          else
            this.left.add(n)
        } else
        {
          if (!this.right) this.right = n
          else this.right.add(n)
        }
  }
  findValue(x) {
    if (x >= this.a && x <= this.b) return this
    if (x < this.a)
      return this.left ? this.left.findValue(x) : null

    let found = this.right ? this.right.findValue(x) : null
    if (!found)
    {
      found  = this.left ? this.left.findValue(x):null
      }
  return found
  }

  get maxd()
  {
    let l = this.left ? this.left.maxd :0
    let r = this.right ? this.right.maxd : 0
    return 1 + Math.max(l,r)
  }
  get mind()
  {
    if (!this.left && !this.right) return 1
    let l = this.left ? this.left.mind : Infinity //cosa diamine vuol dire infinity??
    let r = this.right ? this.right.mind : Infinity;
    return 1 + Math.min(l,r)
  }
}
class YetAnotherAlbero
{
  root = null
  size = 0;
  addInterval(arr)
  {
    let n = new INode(arr)
    if (!this.root)
      this.root = n
      else this.root.add(n)
  }
  this.size++
}
