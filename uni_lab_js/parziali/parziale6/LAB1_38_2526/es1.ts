interface Product
{
  name: string;
  price: number;
  category:string
  }
type funcWrapper = (p:Product) => Product // una funzione che prende in input un prodotto e ritorna un rpottoddo
function createDiscount(discount: number = 10):funcWrapper //nb è il valore di ritorno della funzione non del parametro, il valore del parametro si imposta dietro
{
  return (p:Product)=> // questo è di fatto il valore del parametro
  ({
      ...p,
       price : p.price-  (p.price * discount) / 100
    })
}
let prodotti: Product[] = [
    { name: "uova", price: 11, category: "Alimentari" },
    { name: "matita", price: 40, category: "Cancelleria" },
    { name: "latte", price: 9, category: "Alimentari" }
]

const halfPrice: funcWrapper = createDiscount(50)
console.log(halfPrice(prodotti[0]))
//onsole.log(createDiscount(0.7)(prodotti[1]))
enum ordine
{
  crescente,
  decrescente
}
interface Priceable {
    price: number
}
class Film implements Priceable {
    price: number = 10;
    title: string = "Blabla";
}
function sortByPrice<T extends Priceable>(A: T[],U:ordine)
{
  if(U == ordine.crescente)
    return A.sort((a, b) => a.price - b.price)
  else
    return A.sort((a,b)=> b.price-a.price)
}

let prodotti2: Priceable[] = [new Film(), prodotti[0]]
console.log(sortByPrice(prodotti2, ordine.crescente))
console.log(sortByPrice(prodotti2, ordine.decrescente))
console.log(sortByPrice(prodotti, ordine.crescente))
// in questo caso con multipli tipi si puo notare che i generics accettano tipi diversi a patto che abbiano l'attributo generics
