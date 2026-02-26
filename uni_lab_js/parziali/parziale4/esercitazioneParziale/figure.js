/*ate una classe Figura con metodi area() e perimetro() vuoti.
-Create le classi:
-Triangolo (espresso con i suoi 3 lati),
-Rettangolo (espresso con base e altezza)
-Quadrato (espresso con il lato)
-Cerchio (espresso con il raggio)
ciascuna che implementi i metodi area() e perimetro() mediante override.
-
Create una classe Piramide, partendo da una Figura di base e un’altezza h, con
metodo volume() che ne restituisca il volume. La classe Piramide ha anche un
metodo statico ordina(), che ordina una sequenza di piramidi per volume crescente *
*/
class Figura
{
//Ho difficolta a concepire l'oggetto in mosdo astratto
  area()
  {

  }
  perimetro()
  {console.log("calcolo perimetro: ..")}
}

class Triangolo extends Figura
{
  constructor(a,b,c)
  {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }
  area()
  {
    //semiperimetro
    super.area()
    let p = (this.a + this.b + this.c) / 2
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    return area
  }
}
class Rettangolo extends Figura
{
  constructor(b,h)
  {
    super();
    this.h = h;
    this.b = b;

  }

}
class Quadrato extends Figura
{
  constructor(l)
  {
    this.l = l;
  }
}
class Cerchio extends Figura
{
  constructor(r)
  {
    super();
    this.r = r
  }
  area()
  {
    super.area()
    return Math.PI * this.r ** 2

  }
  perimetro()
  {
    super.perimetro()
    return 2* r
  }
}

class Piramide
{
  constructor(f,h)
  {

    this.figura = f
    // posso farlo?o devo fare una nuova figura? posso accedere ai suoi metodi?
    this.h = h
  }
  volume()
  {
     return Math.floor((this.figura.area() * this.h)/3)
     }
  static ordina(Fs)
  {

    Fs.sort((a, b) => a.volume() - b.volume())
    console.log(Fs)
    return Fs
    //ovviamente devono gia essere tutte delle piramidi

  }

  }
let triangolo = new Triangolo(15,20,25)// di un traingolo con lati 15,20,25 e altezza 5
// console.log(triangolo.area(), "cm^2")

let cerchio = new Cerchio(12)
// console.log(cerchio.area())

let figure = []
let piramide = new Piramide(triangolo, 5)
let conoPira = new Piramide(cerchio, 9)

// console.log("area triangolo",triangolo.area())
console.log("volume piramide", piramide.volume(),conoPira.volume())
// let arr = []
// arr.push(conoPira)

// arr.push(piramide)

// console.log("array prima di essere sortato: ",arr)
// arr.sort((a, b) => a.volume() - b.volume())// se funziona
// console.log("array dopo il sorting",arr)
console.log([conoPira,piramide])
 Piramide.ordina([conoPira,piramide])



//console.log(piramide.volume(),conoPira.volume())
