/**
 * (Inventario) Si scriva un programma per gestire un inventario, formato da un
 insieme di coppie prodotto-quantità. Tali coppie vengono lette da tastiera, fino a
 quando l’utente inserisce “stop” come nome del prodotto. Stampare la lista dei
 prodotti inventariati, con le rispettive quantità, su una sola riga.
 */
const prompt = require('prompt-sync')();
let inventario = { libri: 2, capre: 4, scimmie: 5 };
// for (let key in inventario)
//   console.log(key)

// let key = ""
// while (key != "stop")
// {
//   key = prompt("Inserisci il nome del prodotto: ")
//   console.log(key,":",inventario[key])
//   }
//
/*
(Media dei voti) Si scriva un programma che, dato un insieme di studenti con i
rispettivi voti di 3 esami, calcoli e visualizzi la media aritmetica dei voti di ciascuno.
L’utente fornirà il nome di ogni studente, seguito dai suoi 3 voti. L’acquisizione
termina quando l’utente inserisce “stop” come nome di uno studente.
*/
let registro = { Luca: [28, 30, 27], Marta: [30, 29, 30], Marco: [18, 22, 25] }
for (let key in registro)
  console.log(key)

console.log(registro["Luca"], typeof (registro["Luca"]))

let key = ""
while (key != "stop")
{
  key = prompt("inserisci il nome dello studente: ")
  console.log(key,":",media(registro[key]))
}


function media(arr)
{

  return arr.reduce((acc, curr) => acc + curr, 0)/arr.length

}
