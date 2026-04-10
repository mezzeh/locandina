function formatta(mess) {
    if (typeof mess == "string")
        return mess;
    else if (typeof mess == "number")
        return `CODICE ${mess}`;
    return "NESSUN MESSAGGIO";
}
function formattaTutti(m) {
    let arr = m.map((x) => formatta(x));
    return arr;
}
function leggiValore(x) {
    if (typeof x === "string" ||
        typeof x === "number" ||
        x === null ||
        x === undefined) {
        return x;
    }
    //potrei fare un check manuale ma non mi va
    //voglio capire se si puo fare
}
let m1 = "ciao";
let m2 = 2;
let m3 = undefined;
let arr = [m1, m2, m3];
console.log(leggiValore(m1));
export {};
// console.log(formatta(m1))
// console.log(formattaTutti(arr))
//# sourceMappingURL=terzo.js.map