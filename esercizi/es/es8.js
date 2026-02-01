
let head = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 6,
            next: {
                val: 12,
                next: {
                    val: 140,
                    next: {
                        val: 18,
                        next: {
                            val: 20,
                            next: {
                                val: 23,
                                next: {
                                    val: 25,
                                    next: {
                                        val: 29,
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

if(listIsSorted(head))
    console.log("L'array è ordinato")
else
    console.log("l'array non è ordinato")
function listIsSorted(head)
{
    if(!head)
        return null

    if(!head.next)
        return head.val;
    
    //confronto l'attuale con il prossimo.
    //se l'attuale è maggiore non è ordinato.
    
    if(head.val > listIsSorted(head.next))
        return false;
    return head.val

}
