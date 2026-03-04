import * as uni from './primo.js';

let libricino = new uni.GradeBook(180)
console.log(libricino)
let fdi = new uni.grade("fdi", 9, "21 marzo 2007", 20, false)
libricino.registra(fdi)
// console.log(libricino instanceof uni.GradeBook)

// console.log(libricino.toString())// metodo prediletto epr far funzionare il codice!!
// console.log(libricino.obj)
let rex = /[abc]/
let e = /[0-9]/
console.log(rex.test("ciao"))
console.log(e.test("ciao"))
