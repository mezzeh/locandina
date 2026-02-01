
let head = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 6,
            next:null
            }
        }
    }

let f = x => x ** 2
let nuovo = listMap(head,f)
console.log("Vecchio: ",head)
console.log("NUOVO: ",nuovo)


function listMap(head,f)
{
    //qua entra nella lista ed arriva fino alla fine+
    // 
    if(!head)
        return null; //se arriva alla fine 

    return {val : f(head.val), next: listMap(head.next,f)}  //col primo inizio a creare un oggetto: 
    //aopplico quindi la f a head val e inserisco in val il risultato, e con next chiamero la funzione che ricorsivamente avanzera dfino a difatto
    //arrivare all'ultimo in cui head mi restituira null
  
}