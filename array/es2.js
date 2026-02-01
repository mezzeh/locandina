"use strict";
Object.defineProperty(exports, "__esModule", { value: true }); //Problemi sul desktop
var a = [{ x: 0, y: 0, z: 15 }, { x: 10.25, y: 0, z: 0 }, { x: 0, y: 10, z: 0 }];
var p = { x: 0, y: 0, z: 0 };
var epsilon = 0.5;

dronePiuVicino(a, p, epsilon);
function dronePiuVicino(a, p, epsilon) {
    var res = [];
    //variabili per memorizzare i vincitori
    var droneChamp = a[0]; //terra conto del drone
    var distChamp = calcolaDistanza(a[0], p); // terra conto della distanza

    for (var i = 0; i < a.length; i++)
        res[i] = calcolaDistanza(a[i], p);//calcolo la distanza di ogni drone su p e memorizzo corrispondentemente nell'array res

    for (var i = 0; i < a.length; i++) 
    {
        console.log("Res[i]-epsilon : ", res[i] , " è SIGNIFICATIVAMENTE minore di distchamp?:", distChamp); 

        if (res[i] < (distChamp - epsilon))
         // l'attuale distanza, batte la minima distanza significatamente? quindi ponendo - epsilon?
        // in caso non lo battesse sono uguali
        {
            console.log("si!: nuovo champ.");
            distChamp = res[i];
            droneChamp = a[i]; 
            
        }
    }
    console.log("Il drone champ è ", droneChamp, "con distanza ", distChamp);
    return droneChamp;
}
function calcolaDistanza(A, B) 
{
    return Number((Math.sqrt(Math.pow((A.x - B.x), 2) + Math.pow((A.y - B.y), 2) + Math.pow((A.z - B.z), 2))));
}
