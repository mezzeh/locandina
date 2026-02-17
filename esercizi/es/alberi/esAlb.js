let albero = {
    val: 5,
    sx: {
        val: 3,
        sx: { val: 1, sx: null, dx: null },
        dx: { val: 4, sx: null, dx: null }
    },
    dx: {
        val: 8,
        sx: { val: 7, sx: null, dx: null },
        dx: { val: 9,
            sx: { val : 4 , sx : null , dx: null
                            }, dx: null }
    }
};
let tree = {
    val: 5,
    sx: {
        val: 3,
        sx: { val: 1, sx: null, dx: null },
        dx: { val: 4, sx: null, dx: null }
    },
    dx: {
        val: 8,
        sx: { val: 7, sx: null, dx: null },
        dx: {
            val: 9,
            sx: {
                val: 4, sx: null, dx: null
            }, dx: null
        }
    }
};

let n = 4
/* console.log(`L'elemento massimo dell'albero è ${findMax(albero)}`)
console.log(`La somma dei valori dell'albero è ${somma(albero)}`)
if(findEl(albero,n))
    console.log(`elemento ${n} trovato!`)
else
    console.log(`elemento ${n } non trovato !`)
console.log(`l'elemento ${n} è stato trovato ${countEl(albero,n)} volte`)
 */
//console.log("albero prima ",albero, "albero dopo : ",nuovo)
/* console.log(isEqual(albero,clona(albero)))
 *

*/



let Tree = {

        val: 3,
        sx: { val: 1, sx: null, dx: null },
        dx: { val: 4, sx: null, dx: null }
        }
let  TTtree =  {

        val: 4,
        sx: { val: 1, sx: null, dx: null },
        dx: { val: 4, sx: null, dx: null }

    }
       //
//console.log(isEqual(Tree, TTtree))
/* function isEqual (albero,tree)
{
    if(!albero && !tree)
        return true;

    //io parto all'inizio vedo che sono uguali! continuo // devo pensare ad avanzare dalla fine o pensare di star ritornando=
    // il problema è che se arrivo all'ultiomo poi devo confrontare con null

    return albero.val == tree.val ? isEqual(albero.sx ,tree.sx) && isEqual(albero.dx,tree.dx): false
}
 */
//OPPURE
function isEqual(albero, tree) {
    if (!albero && !tree)
        return true;
    //io parto all'inizio vedo che sono uguali! continuo // devo pensare ad avanzare dalla fine o pensare di star ritornando=
    // il problema è che se arrivo all'ultiomo poi devo confrontare con null
    //cASO BASE 2ù
    //se sono diversi i valori
    if(!albero || !tree || albero.val != tree.val)
        return false

    return isEqual(albero.sx,tree.sx) && isEqual(albero.dx,tree.dx)
}
function findMax (albero)
{
    if(!albero)
        return null;
    return Math.max(albero.val , findMax(albero.sx),findMax(albero.dx))
}
function somma (albero)
{
    if(!albero)
        return 0



    return (albero.val + somma(albero.sx)+ somma(albero.dx))
}
function findEl(albero,n)
{
    if(!albero)
        return null

    if(albero.val == n)
        return true;

    return findEl(albero.sx,n) || findEl(albero.dx,n)
}
function countEl(albero,n)
{
    if(!albero)
        return 0

    if(albero.val == n)
        return 1;

    return countEl(albero.sx,n) + countEl(albero.dx,n)
}
function clona(albero)
{
    if(!albero)
        return null

    return {val : albero.val,sx :clona(albero.sx),dx :clona(albero.dx)}
}
function switchTree(albero )
{
    let tree = albero
    // struttura
    /*    6
        5   7
      4  3  5  6
      */
   let tempsx = tree.sx

   tree.sx = tree.dx;
   tree.dx = tempsx;
   return tree;
   //mhhhhh
}
function deleteTree(albero,n)
{
    if(!albero)
        return null;

    if(albero.val == n)
    {
        albero.sx = null;
        albero.dx = null;
        return ;
    }

    return {val: albero.val, sx: deleteTree(albero.sx,n), dx : deleteTree(albero.dx,n) }

}
let f = x => x*2
function funzione(albero,f)
{
    if(!albero)
        return null;

    return {val: f(albero.val),sx :funzione(albero.sx,f), dx: funzione(albero.dx,f)}
}
console.log(albero)
console.log(funzione(albero,f))
