console.log("ciso")

let t = {
    val: 50,
    sx: {
        val: 25,
        sx: {
            val: 12,
            sx: { val: 6, sx: null, dx: null },
            dx: { val: 18, sx: null, dx: null }
        },
        dx: {
            val: 37,
            sx: { val: 31, sx: null, dx: null },
            dx: { val: 43, sx: null, dx: null }
        }
    },
    dx: {
        val: 75,
        sx: {
            val: 62,
            sx: { val: 56, sx: null, dx: null },
            dx: { val: 68, sx: null, dx: null }
        },
        dx: {
            val: 87,
            sx: { val: 81, sx: null, dx: null },
            dx: { val: 93, sx: null, dx: null }
        }
    }
};
/*
 tree =  {
            val: 62,
            sx: { val: 56, sx: null, dx: null },
            dx: { val: 68, sx: null, dx: null }
        }
*/
function abrStampaCrescente(t)// ora decrescente
{
    // come itero su un albero binario? devo prendere ricorsivamente in ordine crescente gli elementi
    if(!t)
        return 
    //il ragionamento è sx val dx
    //devo fare un push per tutti?
    abrStampaCrescente(t.sx)
    console.log(t.val)
    abrStampaCrescente(t.dx)   
}
//console.log(abrStampaDecrescente(t)) 
function abrStampaDecrescente(t)// ora decrescente
{
    // come itero su un albero binario? devo prendere ricorsivamente in ordine crescente gli elementi
    if (t === null)
        return
    //il ragionamento è sx val dx
    //devo fare un push per tutti?
    abrStampaDecrescente(t.dx)
    console.log(t.val)
    abrStampaDecrescente(t.sx)
}

console.log(abrArray(t))
function abrArray(t)// ora decrescente
{
    // come itero su un albero binario? devo prendere ricorsivamente in ordine crescente gli elementi
    if (t === null)
        return []
    let sx = abrArray(t.sx)
    let dx = abrArray(t.dx)
    
    return sx.concat(t.val,dx)
}
   