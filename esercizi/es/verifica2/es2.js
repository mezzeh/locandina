/**
 * Si scriva una funzione ricorsiva visitaFunzioni(tree, v) che, ricevuti un albero binario i cui nodi contengono funzioni e un valore 
, applichi in sequenza le funzioni memorizzate nei nodi dell'albero secondo la visita in-order al valore 
, restituendo il risultato finale.

Le funzioni nei nodi utilizzano il valore 
 quando il parametro ricevuto non è definito.



Esempi:

albero:     (x => x + 2)
           /              \
    (x => x * 3)      (x => x - 1)
visitaFunzioni(albero, 5) → 16
- Applica 
 a 5 = 15

- Applica 
 a 15 = 17

- Applica 
 a 17 = 16



visitaFunzioni(albero, 10) → 31
visitaFunzioni(null, 5) → 5
 */

let t = {

}
let v = 2

/*// Test 1: Albero completo
assert.deepStrictEqual(
  visitaFunzioni({
    val: x => x + 2,
    sx: {val: x => x * 3, sx: null, dx: null},
    dx: {val: x => x - 1, sx: null, dx: null}
  }, 5),
  16
)*/
console.log(visitaFunzioni({
    val: x => x + 2,
    sx: { val: x => x * 3, sx: null, dx: null },
    dx: { val: x => x - 1, sx: null, dx: null }
}, 5))
function visitaFunzioni(t,v = 0)
{
    // valutare, io passo ogni volta un valore e devo calcolarlo
    if(t === null) 
       return v;
    v = visitaFunzioni(t.sx, v);
    v = t.val(v);
    v = visitaFunzioni(t.dx, v);
    return v;
}