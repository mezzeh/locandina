// listLength(head): restituisce il numero di nodi nella lista

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
let val = 4
// listPrint(heada);
function listPrint(head)
{ 
    if(!head)
        return ;
    console.log(head.val)
     listPrint(head.next)
    
}
 
//listFind(head, value) Restituisce il primo nodo che contiene value, oppure null se non trovato
/* console.log("il valore ",val,"è stato trovato nel nodo: ",listFind(heada,val))
function listFind(head,value)
{
    if(!head)
        return null;
    if(value == head.val)
        return head;
    return listFind(head.next,value)
}
 */
//listInsert(x, value) Inserisce un nuovo nodo con valore value dopo il nodo x

function listInsert(x,val)
{
    //devo collegare x.next ad un nuovo nodo con val
    if(!x)
        return;
    let nuovo = {value :val, next: x.next}//sostanzialmente devi creare un nuovo nodo con struttura analoga
    //e collegare comunque l'x next per non interrompere la successione
    x.next = nuovo;//cosi facenod colleghi il nodo x (originario) al nuovo e il nuovo sarà collegato al x storico
} 


/* listShift(head) Rimuove il nodo in testa e restituisce una coppia
[testa aggiornata, valore rimosso] */
//listShift(heada);
/* function listShift(head)
{

   return [head.next,head.val]
}
console.log(heada)
console.log(listShift(heada)) */
/* let tmp = heada;
while(tmp.next != null){
    console.log(tmp.val);
    tmp = tmp.next;
}
nuovo = listShift(heada)
console.log("prima");
console.log(listShift(heada));
console.log("DOPO");

let tmp1 = heada;
while (tmp1.next != null) {
    console.log(tmp1.val);
    tmp1 = tmp1.next;
} */

//listUnshift(head) Inserisce un nuovo nodo in testa e restituisce la testa aggiornata
/* listUnshift(heada)
function listUnshift(head)
{
    return {val : 4, next : head}
 


} */

//listPush(head, value) Aggiunge un nodo in coda e restituisce la testa aggiornata

listPrint(heada);
console.log("prima")


function listPush(head,val)
{
    if(!head)
        return {value: val, next:null}
    
    if(head.next)
        listPush(head.next,val)
    else
        listInsert(head,val)
    return head;
}


console.log(listPush(heada,val))
listPrint(heada)
