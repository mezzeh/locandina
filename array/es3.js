
let a = [["Rossi", 697319], ["Marroni", -692145], ["Verdi", 699455], ["Bianchi", 681510], ["Violante", 3725], ["Neri", 697316], ["Verdi", 677320], ["Rosati", 334250.5]]
let f = (n) => n % 5 == 0 
filtraCorso(a,f)

function filtraCorso(a,f)
{
       for(let i = 0; i < a.length-1; i++)//ciclo d'ordinamento con algoritmo selection sort
            {
            let min = i
            for(let g = i +1; g < a.length; g++)   //qui comparo le stringhe tramite la f localCompare. 
                if (a[g][0].localeCompare(a[min][0]) < 0) //se la stringa nella posizione g è minore aggiorno il minore
                    min = g 
                else if (a[g][0].localeCompare(a[min][0]) == 0) // se la stringa risulta uguale
                    if(a[g][1] > a[min][1]) //confronto il numero matricole in modo decrescente
                            min = g;    
            //scambio le variabili seguendo l'alg selection sort
            temp = a[i];
            a[i] = a[min]
            a[min] = temp

        console.log("a[min]: ",a[min]) // debug caserecci
        }
    console.log("Gli elementi ordinati: ",a) //idem

    for (let i = a.length-1; i >=0; i--) //Filtraggio; lo faccio partire al contrario perche la funzione .slice mi dava problemi
    {
        console.log(a[i])
        if(!f(a[i][1])|| a[i][1] < 0|| String(a[i][1]).length !=6)
        {
            console.log("l'elemento ", a[i], " è stato eliminato perche non multiplo di 5 ,negativo o non di 6 cifre")
            a.splice(i,1)
        }     
    }
    console.log("GLi elementi filtrati: ",a)
    return a;
}