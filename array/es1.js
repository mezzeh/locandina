"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contaParole(a) {
    var oggetto = {};
    
    for (var i = 0; i <= a.length - 1; i++) {
        if (oggetto[a[i]] !== undefined) //se definito aggiungi
            oggetto[a[i]]++;
        else
            oggetto[a[i]] = 1;
    }
    return (oggetto);
}
let a = ["array", "funzioni", "if", "object", "if", "ArRaY", "IF"]
let o = contaParole(a)
console.log(o)