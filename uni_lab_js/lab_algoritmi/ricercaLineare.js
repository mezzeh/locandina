let n = 10;
let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

const prompt = require("prompt-sync")();
console.log(`Array casuale non ordinato: ${arr}`);
let num = prompt("Inserisci un numero: ");

let [ris, cont] = linearSearch(arr, num);
console.log(ris, cont);
if (ris)
  console.log(
    `Il numero ${num} è stato trovato con un numero operazioni : ${cont}`,
  );
else
  console.log(
    `Il numero ${num} non è stato trovato con un numero op : ${cont}`,
  );
//ricerca lineare
function linearSearch(array, i) {
  let cont = 0;
  for (let el of array) {
    cont += 1;
    if (el == i) return [1, cont];
  }
  return [0, cont];
}

//analizziamo la complessita della ricerca lineare
// caso ottimo : entronell'array faccio un confronto e lo trovo , caso ottimo 1
// caso pessimo: il numero non è presente quindi scorre tutto n = n o è all'ultimo elemento o non esiste
// caso medio boh
