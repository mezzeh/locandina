/*Si definisca un tipo Messaggio.
Si scriva una funzione formatta(m) che:
○ restituisce la stringa stessa se m è una stringa;
○ restituisce "CODICE n" se m è un numero n;
○ restituisce "NESSUN MESSAGGIO" se m è null oppure undefined. */
type Messaggio = string | number | null | undefined;

function formatta(mess: Messaggio):string
{
  if (typeof mess == "string")
    return mess;
  else if (typeof mess == "number")
    return `CODICE ${mess}`
  return "NESSUN MESSAGGIO";
}
function formattaTutti(m: Messaggio[]): string[]
{
  let arr: string[] = m.map((x) => formatta(x))
  return arr;
}
function leggiValore(x: unknown):Messaggio
  {
  if (
    typeof x === "string" ||
    typeof x === "number" ||
    x === null ||
    x === undefined
  ) {
    return x;
  }
//potrei fare un check manuale ma non mi va
//voglio capire se si puo fare

}
let m1: Messaggio = "ciao"

let m2: Messaggio =2

let m3: Messaggio = undefined
let arr: Messaggio[] = [m1, m2, m3]



console.log(leggiValore(m1))
// console.log(formatta(m1))

// console.log(formattaTutti(arr))
