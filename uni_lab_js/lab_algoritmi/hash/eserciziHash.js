/*Si dia il codice di un algoritmo che con un’unica scansione di S conti il numero r di chiavidistinte contenute in S. Usare un dizionario D inizialmente vuoto (non interessal’implementazione di D).:::
scrivo in pseudocodice, ma correggimi comunque basandoti su come scrive la mia prof:
*/
function scansiona(S,D)
{
  let cont = 0
  for (el of S) // costo = n o m?
  {
    if (!D.search(el)) // costo 1 nel caso medio.
      cont ++
    D.insert(el) // costo 1 nel caso medio.
  }
  return cont;
}// complessita n + 2?

/*Facendo l’assunzione che D sia implementato come un array ordinato, si analizzi la
complessità in funzione di n e del numero r di chiavi distinte. */
function scansionaInOrdinato(S, D)
{
  // se ordinato cerco con binary search
  let cont = 0
  for (let el of S)
    if (D.binarySearch(el) != null)
    {
      cont ++
      }
  return cont;
}

function scansioneInHash(S, D)
{

}


/*Dato un array non ordinato di interi positivi, progettare un algoritmo, di complessità lineare
al caso medio, per verificare se esistono due elementi nell'array aventi somma k. */
for 0 to n do
{

  let num  = k-a[i]
  if (D.search(num))
  {
    return true
    }
  else
    D.insert(num)
}
  return false
