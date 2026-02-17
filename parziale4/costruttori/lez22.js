// let obj = {
//   f1: (x) => x + 1,
//   f2: function ciao() { console.log("ciao") },
//     f3() {console.log(Math.PI)}
// }

// obj.f1(3)
// obj.f2()
// obj.f3()

// console.log(typeof (console
// ))
let pa = [1, 2, 3].__proto__
// console.log(pa)

// console.log(Object.getPrototypeOf(pa))


// let n1 = [45]
// let n2 = [45]



/*sercizio 2: Costruttori e this

Realizza una funzione costruttore per creare oggetti di tipo User.

    La funzione deve accettare username e password.

    Aggiungi un metodo chiamato checkPassword direttamente all'interno del costruttore.

Il metodo deve confrontare una stringa passata come argomento con la proprietà password dell'oggetto usando this.

Istanzia un nuovo utente usando l'operatore new. */

// let mezze = new user("mezze", "ciao1");
// console.log(mezze.checkpassword("ciao"))
function user(u, p)
{

  this.username = u;
  this.password = p;

  this.checkpassword = function (pass)
  {
    if (p == pass)
      return true;
      else return false
  }

}



/*n JavaScript, ogni funzione ha una proprietà prototype che funge da modello per gli oggetti creati.

    Crea una funzione costruttore Device(model).

    Invece di definire i metodi nel costruttore, aggiungi un metodo reboot a Device.prototype.

Il metodo deve stampare "Rebooting [model]...".

Crea due istanze di Device e verifica che entrambe possano accedere a reboot().

Controlla se il metodo reboot è una proprietà "propria" dell'istanza usando Object.keys() o un ciclo for...in */

device.prototype.reboot = function (){console.log("Rebooting...")

}
function device(model)
{
  this.model = model
}

let samsung =  new device("samsung")
samsung.reboot()

/*Esercizio 4: Refactoring con class

Trasforma la logica del grafo vista nelle slide in una struttura moderna basata su classi.

    Crea una classe Node con proprietà val.

Crea una classe Graph.

Il constructor di Graph deve inizializzare un array nodes e un array edges.

Aggiungi un metodo addNode(node) che spinge un oggetto Node nell'array nodes.

Aggiungi un metodo link(nodeA, nodeB) che crea un arco tra due nodi esistenti, assicurandoti di salvare i riferimenti ai nodi e non copie dei loro valori. */
class Graph {
  constructor() {
    this.nodi = [];
    this.archi = [];
  }

  addNode(n) {
    this.nodi.push(n);
  }

  link(nodeA, nodeB) {
    // Usiamo la struttura suggerita dal lab: {da: n1, a: n2}
    let arch = { da: nodeA, a: nodeB };
    this.archi.push(arch);
  }
}

class Node { // Convenzione: le classi iniziano con la maiuscola [cite: 712]
  constructor(val) {
    this.val = val; // [cite: 438]
  }
}

let n1 = new Node(2);
let n2 = new Node(3);
let n3 = new Node(4);

let g = new Graph();
g.addNode(n1);
g.addNode(n2);
g.addNode(n3);
g.link(n1, n2);

// Per vedere bene i dati senza le etichette delle classi:
console.log(JSON.stringify(g, null, 2));
//console.log(g)
