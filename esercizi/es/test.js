let heada = {
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
let value = 4

function listPrint(head) {
    if (!head)
        return;
    console.log(head.val)
    listPrint(head.next)

}
function listPush(head, value) {
    if (!head)
        return { val: value, next: null }

    if (head.next)
        listPush(head.next, value)
    else
        listInsert(head, value)
    return head;
}
function listInsert(x, val) {
    //devo collegare x.next ad un nuovo nodo con val
    if (!x)
        return;
    let nuovo = { val: value, next: x.next }//sostanzialmente devi creare un nuovo nodo con struttura analoga
    //e collegare comunque l'x next per non interrompere la successione
    x.next = nuovo;//cosi facenod colleghi il nodo x (originario) al nuovo e il nuovo sarà collegato al x storico
}

/*  console.log("PRIMA: ")
listPrint(heada)
console.log("DOPO: ")
listPush(heada,value) ;
console.log(heada)
listPrint(heada)

 */
//listPrint(heada) // se metto list print insieme al console log mi da undefined curioso.provo un foreach


//in ogni caso c'è un problema aggiuntivo del list print

//listPop(head) Rimuove il nodo in coda e restituisce una coppia
//[testa aggiornata, valore rimosso]
/* listPrint(heada)
listPop(heada)
function listPop(head)
{
    if(!head)
        return [null,undefined] // cosi pero mi restituisce l'attuale
    if(!head.next)
        return [null,head.val]
    let [newNext,removedVal] = listPop(head.next);
    head.next = newNext
    return [head,removedVal]
}
listPrint(heada) */
//listLength(head): restituisce il numero di nodi nella lista
//lo faccio scorrere e conto N restituice l'n
/* console.log("la lunghezza di : ",listLength(heada))
function listLength(head)
{
    if(!head)
        return 1;

    return listLength(head.next) + 1;
}
 */

/* function listCopy(head)
{
    if(!head)
        return null
    
    return {val: head.val, next : listCopy(head.next)}
}
listPrint(heada)
x = listCopy(heada);
console.log("prima")
listPrint(x)  */
/**
 * listConcat(a, b): collega la lista b in fondo ad a, modificando i riferimenti
di a e non creando nessun nuovo nodo
 */
/* et b = {val: "Ok",next : null}
listConcat(heada,b); */
function listConcat(a,b)
{
    if(!a)
        return ;
    if(!a.next)
    {
        a.next = b;
        return ;
    }
       
        //concatena
    listConcat(a.next,b);

    //potrei far ritornare il nuovo nodo
}
/* 
listToArray(head): restituisce un array contenente tutti i valori della lista,
    nell’ordine in cui compaiono */
let arr =  listToArray(heada)
function listToArray(head)
{
    //caso base 
    if(!head)
        return null;
    if(!head.next)
        return [head.val];

    //ottengo head l'ultimo nodo, e voglio pushare nel mio array questo
    let num = [head.val]
    num.push(listToArray(head.next));
    
    return num;
    
}
let arra = listToArray(heada)
function listToArray(head) {
    //caso base 
    if (!head)
        return [];
    if (!head.next)
        return [head.val];

    //ottengo head l'ultimo nodo, e voglio pushare nel mio array questo
    let array = [head.val]
    let nuovo = listToArray(head.next)

    return array.concat(nuovo)

}
console.log(arra)


function listToArray(head) {
    if (!head) return [];

    let arr = listToArray(head.next);
    arr.unshift(head.val); //Inserisce all'inizio
    return arr;
}