/*
ESERCIZIO 2: Ordina prezzi
Scrivere in TypeScript una funzione generica chiamata sortByPrice che accetti i seguenti parametri:
un array di oggetti, ognuno dei quali possiede una proprietà numerica price;
un secondo parametro di tipo enumerazione, che indica l’ordine di ordinamento: crescente o decrescente.

La funzione deve ordinare l’array in base al valore della proprietà price in base al parametro di ordinamento specificato.
*/
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["ASCENDING"] = 0] = "ASCENDING";
    SortOrder[SortOrder["DESCENDING"] = 1] = "DESCENDING";
})(SortOrder || (SortOrder = {}));
class Film {
    constructor() {
        this.price = 10;
        this.title = "Blabla";
    }
}
function sortByPrice(items, order) {
    if (order == SortOrder.ASCENDING)
        return items.sort((a, b) => a.price - b.price);
    return items.sort((a, b) => b.price - a.price);
    //return items.sort((a: T, b: T) => order === SortOrder.ASCENDING ? a.price - b.price : b.price - a.price)
}
let prodotti = [
    { name: "uova", price: 1, category: "Alimentari" },
    { name: "matita", price: 0.5, category: "Cancelleria" },
    { name: "latte", price: 0.9, category: "Alimentari" }
];
let prodotti2 = [new Film(), prodotti[0]];
console.log(sortByPrice(prodotti2, SortOrder.DESCENDING));
console.log(sortByPrice(prodotti2, SortOrder.ASCENDING));
console.log(sortByPrice(prodotti, SortOrder.ASCENDING));
export {};
//# sourceMappingURL=es2.js.map