/*Esercizio 1 (Easy - Hex/Bin): Scrivi una funzione toBinary(n) che accetta un intero 
e restituisce la sua rappresentazione binaria (stringa) senza usare toString(2). Gestisci il caso di numeri negativi (complemento a 2 su 32 bit).*/

let n = 154
toBinary(n)

function toBinary(n)
{
    let numeroBin = "";
    n = Math.abs(n)
    while (n > 0)
        {
        
            let resto = n%2;
            n = Math.floor(n / 2 )
            numeroBin += resto
        }
    console.log(numeroBin)
    numeroBin = numeroBin.split('').reverse().join('');
    console.log(numeroBin)
}