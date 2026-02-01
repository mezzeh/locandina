let l1 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 6,
            next: null
        }
    }
}

let l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 6,
            next: null
        }
    }
}

console.log(listIsEqual(l1,l2));

/* function listIsEqual(l1,l2)
{
    while(l1 ||l2)
    {
        if(l1.val !== l2.val)
            return false;
        l1= l1.next;
        l2 = l2.next;
    }
    return true; 
}
 */

function listIsEqual(l1,l2)
{
    if(!l1 || !l2)
        return false;

    if(l1 || !l2)
        return true;
    //se ritorno anche il true potrebbe essere sovrastato dall'attuale,
    //lui mi torna il prossimo.
    
    return l1 === l2 && listIsEqual(l1.next,l2.next);

}
