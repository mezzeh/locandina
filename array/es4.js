// azineda di analisi

// var prodotto=
//{nome: "Prodotto 1", qualita: [3, 4, 5], prezzo: [2, 3, 3, 1, 2, 6, 1],
// design: [7, 8, 15], spedizione:[6,7,8,8]}

//prodottomigliore(a,p)
//un array di A
//p una caratteristicha che si vuole andare a cercare per valutare il prodotto


//trovare la chiave aritmetica della caratteristiche PIU ALTA; in caso di parita pescare l'alfabeticamente
//piu piccolo

let a = [{ nome: "Prodotto1", qualita: [3, 4, 5], prezzo: [2, 3, 3, 1, 2, 6, 1], design: [7, 8, 15], spedizione: [6, 7, 8, 8] },
{ nome: "Prodotto2", qualita: [7, 7, 8, 4], design: [2, 3, 1, 5], imballaggio: [10, 14] },
{ nome: "Prodotto3", prezzo: [9], imballaggio: [4, 5, 5, 4, 7, 4], comoditaUso: [5, 6, 6, 5, 5] }]

 // cambia la situazione perche qua ho un array, di oggetti.
// il ciclo non parte perche al primo giro nonc'è la ljunghezza. , se non c'è la lunghezza giro a vuoto?
prodottoMigliore(a,"qualita")
function prodottoMigliore(a,p)
{
    let massimo ; 
    let mediaMax = 0;
    let flag = false // la flag si alza se almeno uno
    //un ciclo che dura tutta la lunghezza di a(3)
    //un altro che dura tutta la lunghezza di a[i][p]
    for(let i = 0; i < a.length;i++)
    {
        let somma = 0; 
        if(a[i][p] === undefined)
            console.log("p '", p, "'  indefinito nell'obj", i)   
        else{
            flag =true;
            for (let j = 0; j < a[i][p].length; j++)
                somma += a[i][p][j];

            if ((somma / a[i][p].length) > mediaMax)//qua confronto la media dell'i attuale , con la media massima gia registrata in precedenza
                {
                    mediaMax = somma / a[i][p].length
                    console.log("L'array ", i, " ha la mediaMax massima di p: ", p, " media:  ", mediaMax)
                    massimo = i
                }
        }
        
    }
    // il return deve essere a[massimo][p]
    if(flag)
       // console.log("L'array che ha la mediaMax massima dei p: ", p, " è l'array: ", massimo, "con media : ", mediaMax," r: ",a[massimo]["nome"])
        return a[massimo]["nome"]
    else
       // console.log("nessun elemento avveva la qualita p: undefined")
          return undefined
}