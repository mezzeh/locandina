/*Questo esercizio va svolto in TypeScript. Una direzione è un valore fra Nord, Sud, Est, Ovest. Uno spostamento è un oggetto con
proprietà: d, che rappresenta la direzione; l, che rappresenta la lunghezza dello spostamento.
Una posizione è rappresentata come una tupla di due numeri.

Si definisca una enum Dir.
Si definisca una interfaccia Step.
Si definisca un tipo Point per rappresentare una posizione.
Si scriva una funzione walk(o, p) che, dati una posizione iniziale o e un percorso p, restituisca la posizione finale raggiunta
seguendo tutti gli spostamenti.
Si assuma che p sia rappresentato da un array di spostamenti.
Si definisca un tipo funzione Trasformatore per rappresentare una funzione che riceve una posizione e restituisce o una nuova
posizione, o una stringa, o un numero.
Si scriva una funzione applica(o, p, f?) che:
○
calcola la posizione finale di walk(o,p);
○
se f è fornita, restituisce f(posizioneFinale);
○
altrimenti restituisce direttamente la posizione finale.
Si annotino tutti i tipi nel modo più preciso possibile. */
var Dir;
(function (Dir) {
    Dir[Dir["nord"] = 0] = "nord";
    Dir[Dir["sud"] = 1] = "sud";
    Dir[Dir["est"] = 2] = "est";
    Dir[Dir["ovest"] = 3] = "ovest";
})(Dir || (Dir = {}));
;
;
function walk(p, o) {
    for (let el of o) {
        if (el.l < 0)
            throw new TypeError("lunghezza non puo essere negativa"); //cosi facendo eseguo solo +i e non devo preoccuparmi dei valori negativi.
        switch (el.d) {
            case 0:
                p[1] += el.l;
                break; // nord
            case 1:
                p[1] -= el.l;
                break; //sud
            case 2:
                p[0] += el.l;
                break; //est
            case 3:
                p[0] -= el.l;
                break; // ovest
        }
        console.log(`x: ${p[0]} y:${p[1]}`);
    }
    return p;
}
function trasformatore(p) {
    //return p;
    return `x: ${p[0]} y:${p[1]}`;
    return p[0];
}
function applica(p, o, f) {
    let fin = walk(p, o);
    if (f)
        return f(fin);
    else
        return fin;
}
/*Si scriva una funzione applica(o, p, f?) che:
○
calcola la posizione finale di walk(o,p);
○
se f è fornita, restituisce f(posizioneFinale);
○
altrimenti restituisce direttamente la posizione finale. */
let arr = [{ d: 0, l: 2 }, { d: 0, l: 1 }, { d: 2, l: 2 }, { d: 2, l: 2 }]; // nord 2 nord 1 , destra 2 destra 2s
console.log("punto,di partenza: 0,0");
let p = walk([0, 0], arr);
console.log(" <- punto di arrivo");
console.log("posizione finale applicata con funzione:", applica([0, 0], arr));
export {};
//# sourceMappingURL=robot.js.map