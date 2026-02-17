
let T1 = {
    val: 10,
    figli: [
            {
                val: 5,
                figli: [
                    { val: 1, figli: [] },
                    { val: 4, figli: [] }
                ]
            },
            {
                val: 20,
                figli: [
                  {
                    val: 15, figli: []},
                  {val:3, figli:[]}
                ]
            }
          ]
};
let T2 = {
    val: 100,
    figli: [
        {
            val: 50,
            figli: [
                { val: 30, figli: [] },
                { val: 70, figli: [] }
            ]
        },
        {
            val: 80,
            figli: []
        }
    ]
};
// visita(T1)
// let T3 = (clona(T1))
// console.log("T3")
// visita(T3)
function clona(T)
{
  let clonet = []
  for (figlio of T.figli)
  {
clonet.push(clona(figlio))
  }
  return {val: T.val, figli: clonet}
}

function scambia(T1)
{

}


function visita(T, depth = 0) {
  // Creiamo un prefisso basato sulla profondità
  const indent = "  ".repeat(depth);
  console.log(`${indent}└── ${T.val}`); //grazie gemini
  //console.log("Valore:", T.val, "| Livello:", depth);

  for (let figlio of T.figli) {
    visita(figlio, depth + 1);
  }
}

/*Si scriva una funzione JavaScript innesta(T1,v1,T2,v2) con il seguente
funzionamento:
● T1 e T2 sono alberi k-ari, realizzati come visto a lezione; è garantito che i
valori dei nodi di T1 e di T2 siano tutti distinti
● v1 e v2 sono due valori; è garantito che v1 compaia in T1, e che v2 compaia
in T2; è garantito anche che v1 e v2 non saranno i valori dei nodi radice di T1
e T2
● la funzione deve scambiare il sottoalbero di T1 radicato nel nodo con valore
v1, con il sottoalbero di T2 radicato nel nodo con valore v2 */
//trovare i corrispettivi valori in entrambi gli alberi

function trova(t, v)
{
  if (t.val === v)
    return  t
  for (let figlio of t.figli) {
    let ris = trova(figlio, v);
    if (ris) return ris; // Se ris è un oggetto (quindi non false/null/undefined), ritorna
  }
  return null;
}
//let ris = trova(T1, 5)
visita(T1)
console.log(cambia(T1, 5, T2))

function cambia(t1,v,t2)
{
//non appena incontro il valore dell'albero cambio quell'albero con il reale, e ritorno l'albero?
  if (t1.val == v) {
    return t2
  }
  // ritorno un oggett non appena lo trovo
  for (let i = 0; i <= t1.figli.length - 1; i++)
  {
    console.log("figlio prima",t1.figli[i])
    t1.figli[i] = scambia(t1.figli[i], v, t2)
    console.log("figlio dopo",t1.figli[i])
  }
  return t1 // se non lo trova
}
//innesta(T1,5,T2,50)
function innesta(t1, v1, t2, v2)
{
    //prima fase trova: entrambi i valori e memorizzali.
  let TC1 = cambia(t1 ,v1,t2)
  let TC2 = cambia(t2, v2, t1)
  console.log(TC1)
 // visita(TC1)
  // visita(TC2)
  // ho delle opzioni: o faccio una funzione trova e cambia,

}
