/*• Conversione Celsius-Fahrenheit: Creare un programma che riceva in input una temperatura in Celsius e calcoli la corrispondente in Fahrenheit usando la formula F=C×1.8+32 */

const prompt = require("prompt-sync")();

// //let C = Number(prompt("inserisci il numero: "));

// console.log(`la temperatura è : ${C * 1.8 + 32}`);

let seconds = 5600; //prompt("inserisci i secondi vhe vuoi trasformare: ");
let time = {
  ore: Math.floor(seconds / 3600),
  minuti: Math.floor((seconds % 3600) / 60),
  secondi: (seconds % 3600) % 60, // calcolo che ottenendo i miinuti rimanenti togliendo le ore, posso ottenere i secondi rimanenti togliendo i minuti
};

console.log(`In ${seconds} secondi ci sono: `, time);
