
let quantita = 1;
//let el = 'c';
//let arr = ['a','b','c']
/* 
console.log(M)
inserisciMulti(M, el, quantita)
console.log(M) */

/* console.log(M)
rimuoviMulti(M, el, quantita)
console.log(M) */

/*  console.log(M)
unioneMulti(M,B)
console.log(M) 
 */

/* console.log(M)
console.log(B)
intersezioneMulti(M, B)
 */
/* 
console.log(M)
console.log(B)
differenzaMulti(M,B) */

//cardinalitaMulti(M)

//arrayToMultiinsieme(arr)

//multiinsiemeToArray(M)

function inserisciMulti(M, elemento, quantita){
    M[elemento] = quantita

}
function rimuoviMulti(A, elemento){
        delete A[elemento]
        return A 
}
function unioneMulti(A, B){
    for(el in B )
        if(A[el] ==1 )
            A[el] +=1;
            else
            A[el] = B[el] ;

    
}
function intersezioneMulti(A, B){
    // un for che va , se trovo un el comune lo inserisco in un array 
    let common = {}
    for(el in B)
    {
        if(A[el] )
            common[el] =1;
    }
    console.log(common)
}
function differenzaMulti(A, B){
//LA DIFF DI A - B è TUTTI GLI EL DI B 
    for(el in B )
    {
        if(A[el])
            delete A[el]
    }
    console.log("A-B: ",A)
}
function cardinalitaMulti(M){
   let cont = 0;
    for(el in M)
        cont ++
    return cont;
}
function arrayToMultiinsieme(B){
    let A = {};
    for (el of B)
    {
        A[el] = 1
        
    }
    return A;
}
function multiinsiemeToArray(M){
   let arr = []
    for (el in M)
        arr.push(el)
    return arr;     
}
let M = { 'a': 1, 'b': 1, 'c': 1};

/* 
P(M)
function P(M)
{

    /*
    creo un array per l'elemento iniziale 
    
    
   //M = {a,b,c} // trovo che devo stabilire ogni volta da che elemento partire.
   //'a' poi devo stabilire quali devo confrontare, 
   //il secondo for si occupa di quali elementi , voglio che prenda anche il primo elemento ., ms e fossi al secondo elemento voglio iniziare comunque da i 
   // perche il prossimo invertito. non mi serve, è un duplicato.
   //qua io voglio che scorra gli elementi . 
    let len = cardinalitaMulti(M)
    let sub = M
    for(el in M)
    {
        console.log("In")
        let nuovo =[]
        //voglio ottenere la somma di ogni el. 
        for(let  i = 0; i <= len; i++)//ottieni la liiunghezza
        {
            // caso 0 : voglio 
            //Caso 1 : voglio la somma di obj[0] e obj[1]
            //o avvio un for con contatore: 
            // o passo un sub array slicato di quelle pos: 
            
        }
        sub = rimuoviMulti(M,el)
        console.log(nuovo)
    }
}
//1) il primo for passa il primo elemento da accomunare con gli altri
//2) il secondo for dovrebbe prendere la lunghezza dell'associazione
//3) oppure iol terzo for indica la lunghezza dell'associazione: quindi in base alla lunghezza l'ultimo for inserisce l'associazione
//3) il terzo for ripete l'associazione della variabile alla prossima variabile quanto è la len
//l'algoritmo è incompleto perche non so come creare un array da 3 elementi 
//o faccio una sovrapposizione degli elementi: individuo quello appena creato e lo aggrego, ma mi sembrano tutti non buoni */






/*Partizione Verifica se un array di insiemi è una partizione valida di A:
Sottoinsiemi non vuoti
Disgiunti a coppie
Unione uguale ad A

a.
b.
c.*/

//sottoinsiemi non vuoto:: controllo che non sia == {}
// che ogni elemento non abbia altri elementi in comune

// che la somma di essi == A

//let array = [['ab'],['a','b']]
//let A = ['ab', 'a', 'b'];

/* partizione(array,A)
function presente(subarr, el)
{
    for(let i = 0; i <= subarr.length; i++)
        if(subarr[i] == el)
            return false;
    return true;
} */
/* function partizione(arr,A)
{
    //primo controllo 
    for( el of arr)
        if(el == '')
            console.log("ATTENZIONE SOTTOINSIEMI VUOTI.")
    //secondo controllo: 
    let sub = []
    //itero su ogni elemento dell'array
    for (el of arr)
        for (i of el)
            {
                console.log(i)
                if(!presente(sub,i))
                    console.log("L'elemento : ",i," è gia presente in un altro sottoinsiem: PARTIZIONE NON CORRETTA")
                else
                    sub.push(i)
            }
    
    //terzo controllo : 
    //ora abbiamo sub se la lunghezza totale è uguale allora la partizione a questo punto è corretta; 


    //avendo gia stipulato l'insieme di tutti i sottoinsiemi in un insieme totale se la lunfhezza risulta uguale sono uguali
       
    console.log(sub,A)
    if(sub.length == A.length)  
            console.log("La lunghezza è uguale")


        
} */

/*Prodotto Cartesiano Calcola A x B = insieme di tutte le coppie (a, b) con a E A e b € B.
Esempio:
*/
/* let A = ['x', 'y'];
let B =  [1, 2] // = { (x,1), (x,2), (y,1), (y, 2) }
let prod = []
for (el of A )
{
    for (elm of B)
    {
        console.log(`coppia =  (${el}, ${elm})`)
        let coppia = []
        coppia.push(el);coppia.push(elm)
        prod.push(coppia)
    }
    
}
console.log(prod) */

/*Top k Elementi Restituisci i k elementi più frequenti ordinati per molteplicità.
Esempio: Top 3 di { a : 5, b:2, c:8, d:1, e:6} - ['c', 'e', 'a']*/

/* let ogg = { a: 5, b: 2, c: 8, d: 1, e: 6 } 

let mappa =  new Map();

for( el in ogg)
    mappa.set(el,ogg[el])

let array = [...mappa]
console.log(array)

array.sort((a,b) => {return a[1]- b[1]})

console.log(array)
    */
/* 
Sottoinsieme Multi Verifica se A B: per ogni elemento, molteplicità_A ≤ molteplicità_B.
    Esempio: { a: 2, b: 1 } @{ a: 5, b: 3, c: 2 } - true
Normalizzazione */

//

let A = { a: 2, b: 1 } ; 
let B = { a: 5, b: 3, c: 2 };
let flag = true;
for(el in A )
{

    console.log(B[el])
    if( A[el]> B[el])
        flag = false
}

if(flag)
    console.log("l'insieme A appartiene all'insieme B ") 

let B = { a: 5, b: 3, c: 2 };

for (el in B)
    B[el] = B[el]/10

console.log(B)