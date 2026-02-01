let head = {
    val: 5,
    next: {
        val: 3,
        next: {
            val: 6,
            next: {
                val: 1,
                next: {
                    val: 9,
                    next: {
                        val: 2,
                        next: {
                            val: 7,
                            next: {
                                val: 4,
                                next: {
                                    val: 8,
                                    next: {
                                        val: 10,
                                        next: null
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} 


let value = 4;

arr = listaToArray(head);
console.log("La lista di : ", head);

console.log("La lista in array : ",arr)

function listaToArray(head)
{
    if(!head)//se è vuoto ritorna null;
        return null;

    if(!head.next)
        return [head.val];

    let attuale = [head.val]     //concateno l'attuale con il prossimo ( ) // rrientra  // ritorna l'head val
    let nuovo = listaToArray(head.next);  //entra nel ciclo :  //riprende il prossimo  //acquisice l'ultimo 
    return attuale.concat(nuovo) //faccio un retrun perche il metodo concat non modifica la variabile
    // per funzionare dovrebbe assegnare il valore ad un altra variabile.

}

