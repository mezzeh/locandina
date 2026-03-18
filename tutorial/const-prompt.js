//installlalo tramite npm install prompt-sync
// 1. Importa il modulo e inizializzalo

const prompt = require("prompt-sync")();

// 2. Utilizzalo per chiedere un input
const nome = prompt("Come ti chiami? ");

console.log("Ciao " + nome + "!");

// Esempio con numeri (ricorda: l'input è sempre una stringa, serve il cast)
const anni = prompt("Quanti anni hai? ");
const anniNumerico = parseInt(anni);

console.log("L'anno prossimo ne avrai " + (anniNumerico + 1));



// Source - https://stackoverflow.com/a/65852551
// Posted by Aluan Haddad, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-18, License - CC BY-SA 4.0

import promptSync from 'prompt-sync';

//const prompt = promptSync();

const result = prompt(message);

//versioneE6
