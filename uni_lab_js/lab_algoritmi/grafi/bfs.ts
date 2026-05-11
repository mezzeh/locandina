interface Nodo {
  color: string;
  d: number;
  pi: Nodo | null;
  val: number;
}

type Grafo = [Nodo, Nodo[]][];

// Inizializzazione
let grafo: Grafo = [];

function insertNode(grafo: Grafo, nodoNuovo: Nodo, nodoSorgente?: Nodo) {
  let flag = false;

  // Se esiste un nodo sorgente, aggiunge nodoNuovo alla sua lista di adiacenza
  for (let [nodo, listaAdiacenza] of grafo) {
    if (nodo === nodoSorgente) {
      flag = true;
      listaAdiacenza.push(nodoNuovo);
    }
  }

  // Se il nodo sorgente non esiste o non è stato fornito,
  // aggiunge il nuovo nodo come vertice del grafo se non è già presente
  const esisteGia = grafo.some(([n]) => n === nodoNuovo);
  if (!esisteGia && (!nodoSorgente || !flag)) { // controlla il valore boolean si esiset gia e se o il nodo sorgente non esiste o la flag è ancora flsa
    grafo.push([nodoNuovo, []]);
  }
}

function stamp(grafo: Grafo) {
  console.log("--- Rappresentazione Grafo (Lista Adiacenza) ---");
  for (let [nodo, adiacenti] of grafo) {
    const vicini = adiacenti.map(n => n.val).join(", ");
    console.log(`Nodo(${nodo.val}) -> [${vicini}]`);
  }
}

// --- Test e Popolamento ---

// Creazione nodi
const n5: Nodo = { color: "white", d: Infinity, pi: null, val: 5 };
const n2: Nodo = { color: "white", d: Infinity, pi: null, val: 2 };
const n1: Nodo = { color: "white", d: Infinity, pi: null, val: 1 };
const n3: Nodo = { color: "white", d: Infinity, pi: null, val: 3 };
const n8: Nodo = { color: "white", d: Infinity, pi: null, val: 8 };

// Inserimento nodi come vertici
insertNode(grafo, n5);
insertNode(grafo, n2);
insertNode(grafo, n1);
insertNode(grafo, n3);
insertNode(grafo, n8);

// Creazione archi (collegamenti)
insertNode(grafo, n2, n5); // 5 -> 2
insertNode(grafo, n1, n5); // 5 -> 1
insertNode(grafo, n3, n2); // 2 -> 3
insertNode(grafo, n8, n1); // 1 -> 8
insertNode(grafo, n5, n8); // 8 -> 5 (ciclo)

// Output
stamp(grafo);

function bfs(G: Grafo, s: Nodo)
{
  s.color = "grigio"
  s.d = 0;
  s.pi = null;
  let q: Nodo[] = []
  q.push(s) // enqueue
  while (q.length > 0)
  {
    let u = q.shift();
    // entra nella lista s del nodo nel grafo.
    // devo arrivare al nodo s all'interno. il punto è che devo renderlo un oggetto {u: NOdi} // perche per ogni volta arrivarci ee
    // // la soluzione ottimale è usare un Map
  }
}
