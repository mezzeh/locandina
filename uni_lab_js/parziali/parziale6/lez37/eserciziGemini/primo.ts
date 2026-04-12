function sortByPrice<T extends Price>(arr: T[]): T[]// non essendo vincolato solo da oggetti con interfaccia Price posso restituire oggetti con piu attributi
//let cars = [{ price: 10000, brand: "Fiat" }, { price: 20000, brand: "Audi" }];
{
  return arr.sort((a, b) => a.price - b.price)
  //il ritorno sarè un array di tipo <t> e non solo di Price
}
interface Price {price:number}
let arrayP :Price[]= [{ price: 5 }, { price: 4 }];


console.log(sortByPrice(arrayP))
