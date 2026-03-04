import * as uni from './primo.js';

let libricino = new uni.GradeBook(180)
let fdi = new uni.grade("fdi", 9, "21 marzo 2007", 20, false)
libricino.registra(fdi)
// console.log(libricino instanceof uni.GradeBook)

// console.log(libricino.toString())// metodo prediletto epr far funzionare il codice!!
// console.log(libricino.obj)

let m1 = "1234s56";
  // console.log(matricolaValida("01234"))
  // console.log(matricolaValida("A01234"))
  // console.log(matricolaValida("012345"))
function matricolaValida(matricola) {

  let nums = /[0-9]/g;
  let abc = /[a-z]/g;

  if (!abc.test(matricola) && matricola.match(nums).length == 6)
     return true
     else return false
}

console.log(emailStudenteUnipiValida("g.roossi10@studenti.unipi.it"))
// console.log(emailStudenteUnipiValida("b.bianchi1@studenti.unipi.it"))
// console.log(emailStudenteUnipiValida("j.marino13@studenti.unipi.it"))
// console.log(emailStudenteUnipiValida("test"))
// console.log(emailStudenteUnipiValida("k.costa@unipi.it"))
// console.log(emailStudenteUnipiValida("c.ferrari0@studenti.unipi.it"))
// console.log(emailStudenteUnipiValida("d.esposito@studenti.unifi.it"))
function emailStudenteUnipiValida(email)
{
    //deve avere almeno un match
  let matchMail = /@studenti.unipi.it/g;
  let first = /./;
  let low = /[a-z]/;
  let generalLow = /\.[a-z]+@/;
  let numberBefore = /\.[a-z]+([1-9]\d*)?@/; // per usare un carattere speciale metacarattere regex devi usare \ bak slash prima
  // per usare il punto \. ; comunque va avanti dal punto e guarda i caratteri numerici, il + significa che sono piu caratteri
  // (le parentesi tonde rendono un controllo opzionale, se controllando i caratteri incontra un numero va avanti e vede che il numero è
  // accettato dal controllo opzionale, per cui il primo numero deve essere tra 1 e 9, \d sta a dire che ci sarà un altra qualsiasi cifra, l'operatore
  // * sta a dire che potrebbe non esserci , ma potrebbe essercene sia una che di piu, a fine tonde ci va il ? per definire l'opzionlalita, la @ è l'elemento che
  // si dovra incontrare o che se si incontra diverso dal num potra essere solo @ , comunque, se dai caratteri incontra una chiocciola andara comunque ben. )
  console.log(numberBefore.test(email));
  console.log("test x veiricare il cognome minuscolo", generalLow.test(email))
  if (email.match(matchMail)&& low.test(email.match(first)[0]) && low.test(email))
    return true;

}
