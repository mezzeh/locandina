function sortByPrice(arr) {
    return arr.sort((a, b) => a.price - b.price);
    //il ritorno sarè un array di tipo <t> e non solo di Price
}
let arrayP = [{ price: 5 }, { price: 4 }];
console.log(sortByPrice(arrayP));
export {};
//# sourceMappingURL=primo.js.map