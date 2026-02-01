
function contaParole(a:string[])
    {
    
    let oggetto: { [key: string]: number } = {};
    // definisco un oggetto DINAMICO che equivale ad un dizionario, a cui è possibile aggiungere deglle chiavi:valore in esecuzione
    let n = a.length 
    
    for(let i = 0;i <= n-1; i ++) 
    {
        if(oggetto[a[i]] !== undefined) //se definito aggiungi
            oggetto[a[i]]++
        else
            oggetto[a[i]] = 1 
    }

    return(oggetto);
    //return object
}
let a: string[] = [];
let obj = contaParole(a);
console.log(obj);
export{}