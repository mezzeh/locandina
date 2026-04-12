function createDiscount(discount = 10) {
    return (p) => // questo è di fatto il valore del parametro
     ({
        ...p,
        price: p.price - (p.price * discount) / 100
    });
}
let prodotti = [
    { name: "uova", price: 10, category: "Alimentari" },
    { name: "matita", price: 40, category: "Cancelleria" },
    { name: "latte", price: 9, category: "Alimentari" }
];
const halfPrice = createDiscount(50);
console.log(halfPrice(prodotti[0]));
//onsole.log(createDiscount(0.7)(prodotti[1]))
var ordine;
(function (ordine) {
    ordine[ordine["crescente"] = 0] = "crescente";
    ordine[ordine["decrescente"] = 1] = "decrescente";
})(ordine || (ordine = {}));
class Film {
    constructor() {
        this.price = 10;
        this.title = "Blabla";
    }
}
function sortByPrice(A, U) {
    if (U == ordine.crescente)
        return A.sort((a, b) => a.price - b.price);
    else
        return A.sort((a, b) => b.price - a.price);
}
let prodotti2 = [new Film(), prodotti[0]];
console.log(sortByPrice(prodotti2, ordine.crescente));
console.log(sortByPrice(prodotti2, ordine.decrescente));
console.log(sortByPrice(prodotti, ordine.crescente));
export {};
//# sourceMappingURL=es1.js.map