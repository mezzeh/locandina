"use strict";
// Inizializzazione
let grafo = [];
function insertNode(grafo, nodoNuovo, nodoSorgente) {
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
function stamp(grafo) {
    console.log("--- Rappresentazione Grafo (Lista Adiacenza) ---");
    for (let [nodo, adiacenti] of grafo) {
        const vicini = adiacenti.map(n => n.val).join(", ");
        console.log(`Nodo(${nodo.val}) -> [${vicini}]`);
    }
}
// --- Test e Popolamento ---
// Creazione nodi
const n5 = { color: "white", d: 0, pi: null, val: 5 };
const n2 = { color: "white", d: 0, pi: null, val: 2 };
const n1 = { color: "white", d: 0, pi: null, val: 1 };
const n3 = { color: "white", d: 0, pi: null, val: 3 };
const n8 = { color: "white", d: 0, pi: null, val: 8 };
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
