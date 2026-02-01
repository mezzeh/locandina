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
let i = 0;

let pos = listNth(head,1);
console.log("Il val nell'indice 5 è : ", pos)
function listNth(head,n)
{
    if(!head)
        return null; 
    if(n == 0)
        return head.val
    // caso base:: 
     ; // se gia ha passato i casi allora posso gia aumentare, se non li passa è al prossimo. 
    //la variabile ha uno scoop globale, se lo voglio locale lo devo per forza inserire. 
    return listNth(head.next, n -1)

}


