/* console.log(arr.push(0),arr) // aggiunge un nuovo elemento all'array IN CODA e restituisce la lunghezza 
////
console.log(arr.pop() ,arr)//elimina l'ultimo elemento dell'array e lo restituisce 
////
console.log(arr.shift(),arr) // elimina il primo elemento dell'array e restituisce  lo stesso elemento
////
console.log(arr.unshift(10),arr) // inserisce un elemento in testa all'array e restuisce la nuova lunghezza?
 */

let A = ["a",'b','c']

let e = 2
let f = x => x*2
/* 
console.log("every: ",A.every(p)) //Restituisce true se tutti gli elementi di A soddisfano il predicato p, false altrimenti
console.log("some: ",A.some(p)) //Restituisce true se almeno uno degli elementi di A soddisfa il predicato p, false altrimenti
console.log("find: ",A.find(p)) //Restituisce un elemento e di A tale che p(e) è true, o undefined se nessun e soddisfa p
console.log("findindex:",A.findIndex(p)) //Restituisce l’indice di un elemento e di A tale che p(e) è true, o - 1 se nessun e soddisfa p
 console.log("includes:",A.includes(e)) //Restituisce true se A contiene un elemento uguale a e, false altrimenti
//console.log("foreach: ",A.forEach(f),A) //Invoca f(e) per ogni elemento e dell’array A
 console.log("map: ",A.map(f),A) //Restituisce un nuovo array A’ =[f(e1
console.log("filter: ",A.filter(p)) //Restituisce un nuovo array A’ contenente i soli elementi e di A che soddisfano p, in ordine 

const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
        return total / array.length;
    } else {
        return total;
    }
});
let sum = A.reduce((totale,amount) => totale + amount);
console.log( "sum", sum)

let sumRig = A.reduceRight((totale ,amount) =>  totale + amount);
console.log("sum inverse: ",sumRig) */

//console.log(math('*',...a))
function math (op, ...numeri)
{
    let ris ;
    switch(op){
        case "+":
            ris =  numeri.reduce((totale,val) => totale +val);
            return ris
        case "-":
            ris = numeri.reduce((totale, val) => totale - val);
            return ris
        case "/":
            ris = numeri.reduce((totale, val) => totale / val);
            return ris
        case "*":
            ris = numeri.reduce((totale, val) => totale * val);
            return ris
    }

}

let arr = [1,2,3,4]
let p = x => x % 2 == 0;

function fap(arr,p)
{
    while(arr.some(p))
    {
    console.log(arr)
    //let i = arr.find(p) +1
    console.log("dove sono i predicati?:", arr.findIndex(p))
    arr.splice(arr.findIndex(p), 1)
    console.log("abbiamo eliminato il predicato: ", arr)
    }
    
    return arr

}

let somma = (...num) => num.reduce((totale, current) => totale + current)
//console.log(somma(...arr))

/* isSorted([-21, -2, 0, 4, 6, 210]) -> true
isSorted([2, 6, 8, 8, 9, 21]) -> false
isSorted([2, 6, 8, 9, 10, -42]) -> false
 */

//let a = [-21, -2, 5,4 , 6, 210]
//console.log(isSorted(a))
function isSorted(a)
{
    let newa = a.reduce((total,valCorr,index)=> {
       // console.log(a[index-1],valCorr)
        
       if(total === false)
        return false// se è false return fasle e basta

       if(index == 0)// il primo elemento non può essere confrontato
        return true;

       let valprec = a[index-1];
        if(valCorr < valprec)// dovrei restituire true, se è ordinato.e fare un controllo ogni volta, se ricevo false 
            return false   

        return true;           
    })

   return newa
}

let a = [1, 1, 2, 3, 3, 3, 2, 2, 4]
//console.log(deframmenta(a))
/*
deframmenta([1,1,2,3,3,3,2,2,4]) → [1,1,3,3,3,2,2]
deframmenta([0,0,0,0,0,1,0,1,1]) → [0,0,0,0,0,1,1]*/
function deframmenta(a)
{
     let scont =  a.reduce((newArr,current,index,arr)=>{
        
       //inserire condizione
       
       if(current == arr[index-1] )
            newArr.push(current)

        else if(current == arr[index+1])
            newArr.push(current)
       
        return newArr
    },[])
    return scont
}
/* 
var f = fabbrica(1)
var g = fabbrica(2)
var h = fabbrica(true)
f() → 1
g() → 2
h() → true */

function fabbrica(x)
{
    return function ()
    {
        return x 
    }
}
var t = fabbrica(1)
var g = fabbrica(2)
// var h = fabbrica(true)
// console.log(t() ,g(),h())
let bop = (x = a,y) => x+y

/* a = 'd'
let b = 'esisto'
r = partapply(bop,a)
console.log(r(b)) */
function partapply(bop,a)
{
  
    return function (b)
    {
        return bop(a,b)
    }


 }

 let array = [1,2,3,4,5,6]
 console.log(reverse(...array,0))
 function reverse(arr,i)
 {  


    //con i cicli gli indici e con i metodi array
    /*    len = arr.length;
    for(let i = len-1; i>=0; i--)
    { 
    console.log(arr[i])
    //nuovo.push(arr[i]) metodo migliore oppure
        nuovo[len-1-i]  = arr[i]// i = 6 , array.lenght - 6

       }  */
    //metodi ricorsivi

    //caso base

    /* if(arr[i] == undefined )
        return []
    //che porcodio di infarto
    let ora = [arr[i]];
     let nuovo = reverse(arr, i + 1) // entra nel primo
     
    nuovo = nuovo.concat(ora)      */

     // non mi legge le proprieta del push, perche la funzione non ha restituito un valore decente?

    //tramite spread

    if(a.length = 0)
        return []

    let [head, ... tail] = a

    return [...reverse(tail),head]
    
 }


























































































