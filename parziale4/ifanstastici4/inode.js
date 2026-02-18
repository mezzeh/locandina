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
    if (f([n[0],n[1]],[this.a,this.b])) {// se il nodo è minore della rooot va a sinistra
      if (this.left)// perche è minore
        this.left.add(n)// se esiste gia il sinistro deleghiamo
      else
        this.left = n //se è vuoto lo inseriamo.
    }
    else {
      if (this.right)
        this.right.add(n)
      else
        this.right = n
    }
    return

  }
  findValue(x) {

    if (!this)
      return false
    if (x <= this.b && x >= this.a)
      return this
    if (x < this.left.a)
      return this.left.right.findValue(x)
    else
      return this.right.findValue(x)
  }
  get maxd() { }
  get mind() {}

}
let f = ([x, y], [a, b]) => x < a || (x == a && y < b) // ritorna true se [x,y] < [a,b]
class YetAnotherAlbero {
  constructor() {
    this.root = null
  }

  addInterval(nodo) {
    if (!this.root)
      this.root = new INode(nodo)
    else {
      this.root.add(nodo)

    }
    return

  }
  findValue(x)
  {
    return this.root.findValue(x)
  }
}var arc = new YetAnotherAlbero();
arc.addInterval([10, 20]);
// assert.equal(arc.size, 1);
arc.addInterval([0, 3]);
// assert.equal(arc.size, 2);
arc.addInterval([30, 40]);
// assert.equal(arc.size, 3);
console.log(arc.root.findValue(15) === arc.root);
var n = arc.root.findValue(2);
console.log(n !== null);
console.log(n.findValue(2) === n)
console.log(arc.root.findValue(100), null);

// assert.ok(n.a<= 2)
// assert.ok(n.b>= 2)
// assert.deepEqual(n, arc.root.left)

//continuare a capire i test case, finire le funzioni size min zide max
