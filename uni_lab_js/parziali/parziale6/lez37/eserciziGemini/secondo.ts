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
    { name: "uova", price: 10, category: "Alimentari" },
    { name: "matita", price: 40, category: "Cancelleria" },
    { name: "latte", price: 9, category: "Alimentari" }
]

const halfPrice: funcWrapper = createDiscount(50)

//onsole.log(createDiscount(0.7)(prodotti[1]))
