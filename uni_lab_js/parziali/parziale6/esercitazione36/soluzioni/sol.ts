/*/*
Questo esercizio va svolto in TypeScript.
Una traccia musicale è rappresentata da un oggetto con le proprietà:
titolo: string
artista: string
durata: number
preferita?: boolean
Si definisca una interfaccia Traccia.
Si scriva una funzione durataTotale(lista) che restituisca la somma delle durate di tutte le tracce in lista.
Si scriva una funzione soloPreferite(lista) che restituisca un nuovo array contenente solo le tracce per cui preferita vale true.
Si scriva una funzione descrivi(t) che restituisca:
"titolo - artista" se preferita non è presente oppure vale false;
"titolo - artista ★" se preferita vale true.
Si scriva una funzione aggiungiGenere(t, genere) che restituisca un nuovo oggetto con tutte le proprietà di t più la proprietà genere: string.
Si annotino tutti i tipi nel modo più preciso possibile.

interface Traccia {
  titolo: string;
  artista: string;
  durata: number;
  preferita?: boolean;
}

interface TracciaConGenere extends Traccia {
  genere: string;
}

function durataTotale(lista: Traccia[]): number {
  let somma: number = 0;

  for (const t of lista) {
    somma += t.durata;
  }

  return somma;
}

function soloPreferite(lista: Traccia[]): Traccia[] {
  const risultato: Traccia[] = [];

  for (const t of lista) {
    if (t.preferita === true) {
      risultato.push(t);
    }
  }

  return risultato;
}

function descrivi(t: Traccia): string {
  if (t.preferita === true) {
    return t.titolo + " - " + t.artista + " ★";
  }

  return t.titolo + " - " + t.artista;
}

function aggiungiGenere(t: Traccia, genere: string): TracciaConGenere {
  return {
    ...t,
    genere: genere
  };
}






/*
Questo esercizio va svolto in TypeScript. Un messaggio prodotto da un distributore automatico può essere: una stringa, un numero, null, o undefined.
Si definisca un tipo Messaggio.
Si scriva una funzione formatta(m) che:
restituisce la stringa stessa se m è una stringa;
restituisce "CODICE n" se m è un numero n;
restituisce "NESSUN MESSAGGIO" se m è null oppure undefined.
Si scriva una funzione formattaTutti(ms) che, dato un array di messaggi, restituisca un array di stringhe.
Si scriva una funzione leggiValore(x) che riceve un valore di tipo unknown e:
se x è un valore ammesso per Messaggio, lo restituisce;
altrimenti lancia una TypeError.
Non usare any.

type Messaggio = string | number | null | undefined;

function formatta(m: Messaggio): string {
  if (typeof m === "string") {
    return m;
  }

  if (typeof m === "number") {
    return "CODICE " + m;
  }

  return "NESSUN MESSAGGIO";
}

function formattaTutti(ms: Messaggio[]): string[] {
  const risultato: string[] = [];

  for (const m of ms) {
    risultato.push(formatta(m));
  }

  return risultato;
}

function leggiValore(x: unknown): Messaggio {
  if (
    typeof x === "string" ||
    typeof x === "number" ||
    x === null ||
    x === undefined
  ) {
    return x;
  }

  throw new TypeError("Valore non ammesso");
}



/*
Questo esercizio va svolto in TypeScript. Una direzione è un valore fra Nord, Sud, Est, Ovest. Uno spostamento è un oggetto con proprietà: d, che rappresenta la direzione; l, che rappresenta la lunghezza dello spostamento.
Una posizione è rappresentata come una tupla di due numeri.
Si definisca una enum Dir.
Si definisca una interfaccia Step.
Si definisca un tipo Point per rappresentare una posizione.
Si scriva una funzione walk(o, p) che, dati una posizione iniziale o e un percorso p, restituisca la posizione finale raggiunta seguendo tutti gli spostamenti.
Si assuma che p sia rappresentato da un array di spostamenti.
Si definisca un tipo funzione Trasformatore per rappresentare una funzione che riceve una posizione e restituisce o una nuova posizione, o una stringa, o un numero.
Si scriva una funzione applica(o, p, f?) che:
calcola la posizione finale di walk(o,p);
se f è fornita, restituisce f(posizioneFinale);
altrimenti restituisce direttamente la posizione finale.
Si annotino tutti i tipi nel modo più preciso possibile.

enum Dir {
  Nord,
  Sud,
  Est,
  Ovest
}

interface Step {
  d: Dir;
  l: number;
}

type Point = [number, number];

type Trasformatore = (p: Point) => Point | string | number;

function walk(o: Point, p: Step[]): Point {
  let x: number = o[0];
  let y: number = o[1];

  for (const s of p) {
    switch (s.d) {
      case Dir.Nord:
        y += s.l;
        break;
      case Dir.Sud:
        y -= s.l;
        break;
      case Dir.Est:
        x += s.l;
        break;
      case Dir.Ovest:
        x -= s.l;
        break;
    }
  }

  return [x, y];
}

function applica(
  o: Point,
  p: Step[],
  f?: Trasformatore
): Point | string | number {
  const finale: Point = walk(o, p);

  if (f !== undefined) {
    return f(finale);
  }

  return finale;
}
 */
