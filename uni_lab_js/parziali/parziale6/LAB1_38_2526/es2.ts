/*
ESERCIZIO 2: Ordina prezzi 
Scrivere in TypeScript una funzione generica chiamata sortByPrice che accetti i seguenti parametri:
un array di oggetti, ognuno dei quali possiede una proprietà numerica price;
un secondo parametro di tipo enumerazione, che indica l’ordine di ordinamento: crescente o decrescente.

La funzione deve ordinare l’array in base al valore della proprietà price in base al parametro di ordinamento specificato.
*/

enum SortOrder {
    ASCENDING,
    DESCENDING
}

interface Priceable {
    price: number
}

class Film implements Priceable {
    price: number = 10;
    title: string = "Blabla";
}

function sortByPrice<T extends Priceable>(items: T[], order: SortOrder): T[] {
    if (order == SortOrder.ASCENDING)
        return items.sort((a: T, b: T) => a.price - b.price)
    return items.sort((a: T, b: T) => b.price - a.price)
    //return items.sort((a: T, b: T) => order === SortOrder.ASCENDING ? a.price - b.price : b.price - a.price)
}

interface Product {
    name: string,
    price: number,
    category: string
}
let prodotti: Product[] = [
    { name: "uova", price: 1, category: "Alimentari" },
    { name: "matita", price: 0.5, category: "Cancelleria" },
    { name: "latte", price: 0.9, category: "Alimentari" }
]
let prodotti2: Priceable[] = [new Film(), prodotti[0]]
console.log(sortByPrice(prodotti2, SortOrder.DESCENDING))
console.log(sortByPrice(prodotti2, SortOrder.ASCENDING))
console.log(sortByPrice(prodotti, SortOrder.ASCENDING))