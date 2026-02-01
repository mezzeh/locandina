/*
Esattamente, hai capito perfettamente.

Ecco la conferma passo-passo di quello che hai detto:

D è il tuo contenitore di partenza (i valori "grezzi", le x).

F è la "macchina" che trasforma questi valori.

Tu devi prendere ogni singolo elemento che sta dentro D, farlo passare dentro la funzione F, e raccogliere il risultato (che sarebbe f(x)).

L'insieme "immagine" che devi restituire non è altro che la raccolta di tutti questi risultati trasformati.

In sintesi:

Se in D c'è un numero, nell'immagine ci sarà quel numero elaborato dalla funzione.

Non devi filtrare (a meno che non venga chiesto esplicitamente), devi trasformare.*/
let f  = x =>  x *2


let A = [5,3,5,6,6]

function immagine(f,D)
{
    let img = [];

    for(el of D)
    {
        img.push(f(el))
    }
    return img
}

/* componi(f, g): Date due funzioni f e g, restituisce la funzione che calcola
f(g(x)) */

let g = x => x+1

function componi(f,g)
{
    return f(g(2))
}

/*poly(a,b,c): Dati tre numeri a, b e c, restituisce la funzione che calcola il
polinomio ax2 + bx + c*/
let a = 2, b = 5, c = 2;

// Chiama la funzione e memorizza il risultato
const solutions = poli(a, b, c);

if (solutions === null) {
    console.log(`Il polinomio ${a}x^2 + ${b}x + ${c} = 0 non ha soluzioni reali.`);
} else {
    console.log(`Il polinomio ${a}x^2 + ${b}x + ${c} = 0 ha le seguenti soluzioni:`);
    console.log(`x1 = ${solutions.x1}`);
    console.log(`x2 = ${solutions.x2}`);
}

function poli(a, b, c) {

    // 1. Calcolo del discriminante (D)
    // D = b^2 - 4ac
    let D = (b ** 2) - 4 * a * c;
// 2. Verifica se ci sono soluzioni reali // Se D è minore di 0, non ci sono soluzioni reali
    if (D < 0) {
        return null; // Restituisce null se non ci sono soluzioni reali
    }

    // Calcola il denominatore (2a) per entrambe le radici
    const denominator = 2 * a;

    // Calcola la radice quadrata del discriminante
    const sqrtD = Math.sqrt(D);

    // 3. Calcolo delle radici x1 e x2
    // Formula risolutiva: x = (-b ± sqrt(D)) / 2a

    let x1 = ((-b) + sqrtD) / denominator;
    let x2 = ((-b) - sqrtD) / denominator;

    // 4. Restituisce le soluzioni
    // Restituiamo un oggetto che contiene entrambe le radici
    return { x1: x1, x2: x2 };
}