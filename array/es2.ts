interface coordinate //creo una struttura, utile per avere una struttura comune tra droni e punti x non ridichiararli 
{
    x : number
    y : number
    z : number
}
let a = [{ x: 0, y: 0, z: 15 }, { x: 10.25, y: 0, z: 0 }, { x: 0, y: 10, z: 0 }]
let p: coordinate = { x: 0, y: 0, z: 0 };

let arrayD:coordinate [] = [a[0],a[1],a[2]] // un array di oggeti
let epsilon = 0.5;

dronePiuVicino(arrayD,p,epsilon)


function dronePiuVicino(a:coordinate[],p:coordinate,epsilon:number)
{
    let res: number[] = [];
    let droneChamp:coordinate = a[0]
    let num = calcolaDistanza(a[0], p);
    let distChamp = num;
    //calcola la distanza tra i droni e il punto
    for(let i = 0; i < a.length;i++)
    {
        res[i] = calcolaDistanza(a[i], p);
        console.log(res[i])
    }
    for(let i = 0; i <a.length; i++) // un for che analizza i valori dei risultati per controllare che non siano uguali, ed in caso prende il 
    //minimo; 
    {
        console.log("Res[i]-epsilon : ", res[i] - epsilon, " è minore di distchamp?:", distChamp)
        //io devo controllare la distanza, 
        if ((res[i]) < (distChamp -epsilon))// l'attuale distanza, batte la minima distanza significatamente? quindi ponendo . epsilon?
        //potrei anche aggiungere la epsilon all'attuale distanza per provare a "rallentare il risultato" ma preferisco cosi.
        {
                console.log("si!")
                distChamp = res[i]
                droneChamp = a[i]
        }
                 // prendo il valore minimo tra i due che risultano sotto la soglia di tolleranza dell'epsilo   
    }
       
    console.log("Il drone champ è ",droneChamp,"con distanza ",distChamp)
    return droneChamp;
}
function calcolaDistanza(A: coordinate, B: coordinate)
{
    return Number((Math.sqrt((A.x - B.x) ** 2 + (A.y - B.y) ** 2 + (A.z - B.z) ** 2)))
}
export{}