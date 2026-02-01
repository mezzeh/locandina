
let n = 123

arrayCifreRec(n)
/* function arrayCifreRec(n) 
{
    if(n.length == 0)
        return;

    console.log(n[0])
    arrayCifreRec(n.slice(1));
} */
/* 
function arrayCifreRec(n)
{
  //devo inserire ogni nuemro in un array.
    if(n < 10)
        return [n];

    let resto = n%10;
    let quoziente = (n-resto) / 10;
    //noi mettiamo il resto ogni volta ma prima arriviamo a 0
    let cifra = arrayCifreRec(quoziente);
     // stampa il resto della prossima chiamata 
    
    cifra.push(resto)
    return cifra
    
} */

function arrayCifreRec(n)
{
    //caso base 
    if(n < 10)
    {
        return [n];//quindi di fatto quando arriva a scandire l'ultimo elemento ritorna n sotto forma di array
    }
    //passo induttivo.
    let resto = n %10; //qua ottengo la cifra che mi serve pushare
    let quoziente = (n-resto)/10; //ottengo qua il prossimo
    //io so che nell'ultima chiamata ottengo l'ultima cifra. sotto forma di array quindi per pushare il resto io devo prima ricevere l'array
    cifre = arrayCifreRec(quoziente)//Mi portera fino ad un punto dove praticamente mi restera solamente l'array con quella cifra
    cifre.push(resto)//qua eseguo un push del resto ottenuto NB questo è il passo induttivo mentre il caso base era un return; quando è 0 caso base in tutti gli altri faccio push
    //Ma come continuo ad ottenere le nuove cifre per pushare?
    //se mettessi return cifre. alla prossima ricorsionoe che mi sono chiamato potreo fare il push del resto
    //io mi stavo confondendo riguardi il return come se stessi aggiungengo un valore facendo il return, ma devo semplicemente mettere return cifre, forse funziona anche 
    //senza
    return cifre;


}

console.log(cifre)


export{}