
//const assert = require('assert'); .cjs
import assert from 'node:assert';// .js
// ==========================================
// INSERISCI QUI IL TUO CODICE (Classe e Generatore)
// ==========================================

class Elemento
{
  constructor(val)
  {
    this.val = val;
    this.next = undefined;
  }
}
function* calcola(testa, f)
{
  let prod = 1;
  while (testa)
  {

    yield prod = f(testa.val) * prod;

    testa = testa.next;
  }
  return prod
}
// let lista = new elemento(1)

// lista.next = new elemento(2)
// let prox = lista.next;
// prox.next = new elemento(3)
// let f = (x) => x;
// let gen = calcola(lista,f)
// for (let el of gen)
// {
//   console.log(el)
// }


// ==========================================
// TEST CASE
// ==========================================

function runTests() {
  console.log("Avvio esecuzione test...\n");

  // Esempio Base
  try {
    let a = new Elemento(1);
    let b = new Elemento(2);
    let c = new Elemento(3);
    a.next = b;
    b.next = c;

    let g = calcola(a, (x) => x);

    assert.strictEqual(g.next().value, 1);
    assert.strictEqual(g.next().value, 2);
    assert.strictEqual(g.next().value, 6);
    console.log("✅ Esempio Base: SUPERATO");
  } catch (e) {
    console.error("❌ Esempio Base: FALLITO ->", e.message);
  }

  // Test case 2: Lista con un solo elemento
  try {
    let a = new Elemento(4);
    let g = calcola(a, function (x) { return x + 1; });

    assert.strictEqual(g.next().value, 5);
    assert.strictEqual(g.next().done, true);
    console.log("✅ Test case 2: SUPERATO");
  } catch (e) {
    console.error("❌ Test case 2: FALLITO ->", e.message);
  }

  // Test case 5: Funzione costante f: (x) => 1
  try {
    let a = new Elemento(9);
    let b = new Elemento(8);
    let c = new Elemento(7);
    a.next = b;
    b.next = c;

    let g = calcola(a, function (x) { return 1; });

    assert.strictEqual(g.next().value, 1);
    assert.strictEqual(g.next().value, 1);
    assert.strictEqual(g.next().value, 1);
    assert.strictEqual(g.next().done, true);
    console.log("✅ Test case 5: SUPERATO");
  } catch (e) {
    console.error("❌ Test case 5: FALLITO ->", e.message);
  }

  // Test case 6: Valori negativi
  try {
    let a = new Elemento(-2);
    let b = new Elemento(3);
    let c = new Elemento(-1);
    a.next = b;
    b.next = c;

    let g = calcola(a, function (x) { return x; });

    assert.strictEqual(g.next().value, -2);
    assert.strictEqual(g.next().value, -6);
    assert.strictEqual(g.next().value, 6);
    assert.strictEqual(g.next().done, true);
    console.log("✅ Test case 6: SUPERATO");
  } catch (e) {
    console.error("❌ Test case 6: FALLITO ->", e.message);
  }
}

runTests();
