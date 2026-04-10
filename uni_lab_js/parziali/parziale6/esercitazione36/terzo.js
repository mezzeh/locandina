function formatta(mess) {
    if (typeof mess.m == "string")
        return mess.m;
    else if (typeof mess.m == "number")
        return `CODICE ${mess.m}`;
    return "NESSUN MESSAGGIO";
}
function formattaTutti(m) {
    let arr = m.map((x) => formatta(x));
    return arr;
}
function leggiValore(m) {
    console.log(m, typeof m);
    if (typeof m == "string")
        return m;
    else if (typeof m == "number")
        return `CODICE ${m}`;
    throw new TypeError();
    //potrei fare un check manuale ma non mi va
    //voglio capire se si puo fare
}
let m1 = { m: "ciao" };
let m2 = { m: 2 };
let m3 = { m: undefined };
let arr = [m1, m2, m3];
console.log(leggiValore(m1.m));
export {};
// console.log(formatta(m1))
// console.log(formattaTutti(arr))
//# sourceMappingURL=terzo.js.map