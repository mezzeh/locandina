/*Questo esercizio va svolto in TypeScript. Una traccia musicale è rappresentata da un oggetto con 4
proprietà: titolo, artista (stringhe) durata (numerico), preferita (un booleano opzionale).
●
●
●
●
●
Si definisca una interfaccia Traccia.
Si scriva una funzione durataTotale(lista) che restituisca la somma delle durate di tutte le tracce in
lista.
Si scriva una funzione soloPreferite(lista) che restituisca un nuovo array contenente solo le tracce
per cui preferita vale true.
Si scriva una funzione descrivi(t) che restituisca:
○ "titolo - artista" se preferita non è presente oppure vale false;
○ "titolo - artista ★" se preferita vale true.
Si scriva una funzione aggiungiGenere(t, genere) che restituisca un nuovo oggetto con tutte le
proprietà di t più la proprietà genere: string.
Si annotino tutti i tipi nel modo più preciso possibile. */
let traccia = { titolo: "gig in the sky", artista: ["pinkFLoyd,pinkopallo"], durata: 3, preferita: true };
let lista = [{ titolo: "gig in the sky", artista: ["pinkFLoyd,pinkopallo"], durata: 3, preferita: true }, { titolo: "giga in the sky", artista: ["pinkFLoyd"], durata: 4, preferita: true }, { titolo: "sky", artista: ["pinkopallo"], durata: 5, preferita: false }];
function durataTotale(lista) {
    let somma = 0;
    lista.forEach((x) => somma += x.durata);
    return somma;
}
function soloPreferite(lista) {
    let arr = [];
    arr = lista.filter((x) => x.preferita);
    return arr;
}
console.log(durataTotale(lista));
console.log(soloPreferite(lista));
function descrivi(t) {
    if (t.preferita)
        return `${t.titolo}- ${t.artista} ★ `;
    //if (t.preferita == undefined || t.preferita == false)
    return `${t.titolo}- ${t.artista} `;
}
console.log(descrivi(traccia));
export {};
//# sourceMappingURL=secondo.js.map