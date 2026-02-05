//stampare la tabella di verita dell'or

/*
0 : 0 = 0
1 : 0 = 1
0: 1 =  1
1 : 1 = 0
//un for che alterna 1 0 1 0
// un for che alterna 001100110011
//
// // che algoritmo c'è dietro il fatto che sia 00 11 0011 0011 0011
*/

function or(x, y) {
  return x || y;
}
for (let i = 0; i <= 1; i++) {
  for (let j = 0; j <= 1; j++) {
    let risultato = or(i, j);
    console.log("X: " + i + " Y: " + j + " -> " + risultato);
  }
}
// posso stampare due valori uguali per volta?
// codice di gemini che calcola matematicamente:
//
//
//

function or(a, b) {
  // Nell'OR basta che uno dei due sia 1 per avere 1
  return a === 1 || b === 1 ? 1 : 0;
  // condizione  ? valore in caso vero: valore in caso falso
}

console.log("X | Y | OR");
console.log("---------");

// Facciamo un ciclo da 0 a 3 (4 combinazioni totali)
for (let i = 0; i < 4; i++) {
  // Algoritmo per 0, 1, 0, 1 (il bit meno significativo)
  let y = i % 2; //ottieni il resto essendo diviso 2 : 0 o 1 :

  /*
  i (decimale), x(i / 2),y (i % 2)
                0,0 (00),0 (resto 0),0 0
                1,0 (00),1 (resto 1),0 1
                2,1 (10),0 (resto 0),1 0
                3,1 (10),1 (resto 1),1 1 */

  // 3 % 2 = 1 , resto 1

  // Algoritmo per 0, 0, 1, 1 (il bit più significativo)
  // Math.floor arrotonda per difetto la divisione
  let x = Math.floor(i / 2);

  let risultato = or(x, y);

  console.log(`${x} | ${y} |  ${risultato}`);
}
