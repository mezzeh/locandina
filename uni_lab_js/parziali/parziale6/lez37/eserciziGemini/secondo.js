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
export {};
//onsole.log(createDiscount(0.7)(prodotti[1]))
//# sourceMappingURL=secondo.js.map