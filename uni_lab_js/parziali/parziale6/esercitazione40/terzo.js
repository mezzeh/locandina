function groupByItems(item) {
    let diz = {};
    for (let el of item) {
        if (diz[el.key] == undefined)
            diz[el.key] = [];
        diz[el.key].push(el);
    }
    return diz;
}
function groupUniqueByName(item) {
    let diz = {};
    for (let el of item) {
        if (diz[el.key] == undefined) {
            diz[el.key] = [];
            diz[el.key].push(el);
        }
        else // meglio separare er evitare due push
         if (!diz[el.key].find((X) => el.name == X.name)) {
            console.log(el.key, diz[el.key]);
            diz[el.key].push(el);
        }
    }
    return diz;
}
function countGroups(groups) {
    let cont = 0;
    let set = new Set();
    for (let el in groups) {
        console.log("out", el);
        set.add(el);
    }
    return set.size;
    // o c'è un modo, no perche dìcomunque deve contare le chiavi distinte.
}
const items = [
    { key: "rome", name: "Anna", surname: "Rossi" },
    { key: "rome", name: "Luca", surname: "Verdi" },
    { key: "rome", name: "Anna", surname: "Verdi" },
    { key: "milan", name: "Anna", surname: "Bianchi" }
];
const g = groupByItems(items);
console.log(g["rome"].length);
const u = groupUniqueByName(items);
console.log(u["rome"].length); // 2
console.log(countGroups(u));
export {};
//# sourceMappingURL=terzo.js.map