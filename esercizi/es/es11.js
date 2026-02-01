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

//listSplice(l1,start,deletecount)
console.log(listSplice(head,1,4))
function listSplice(head,n,deletecount)
{
    //entro e arrivo allo start
    if(!head)
        null;
    if(deletecount == 0)
        return head.next // ritornandogli questo. so quale

    if(n == 0)
        return listSplice(head, n, deletecount - 1)

    let nuovo = listSplice(head,n-1,deletecount);
    console.log(nuovo)
    return  nuovo;
}
