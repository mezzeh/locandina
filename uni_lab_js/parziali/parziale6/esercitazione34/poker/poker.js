"use strict";
/**Esercizio 4: Poker
Definire due enum per rappresentare i Semi e i Valori delle carte da gioco.
Definire poi una classe Mano per rappresentare una mano, ovvero un insieme contenente 5 carte
da gioco, ciascuna rappresentata come una coppia [seme,valore], passate direttamente al
costruttore tramite 5 parametri separati. La classe Mano deve inoltre fornire i seguenti metodi:
● poker(), che restituisce true se la mano corrisponde ad un poker, e false altrimenti;
● scala(), che restituisce true se la mano corrisponde ad una scala, e false altrimenti;
● scalaReale(), che restituisce true se la mano corrisponde ad una scala reale, e false
altrimenti;
● colore(), che restituisce true se la mano corrisponde ad una colore, e false altrimenti; */
// credo di aver capito, devo pensare a come usare bene enum, ricordiamoci, esterno accessibile dall'esterno, ripassiamo l'esercizio prec con enum
/** static log(level: LogLevel, message: string): void {
        if (!Object.values(LogLevel).includes(level))
            throw new UnknownLevel("Unknown level " + level);
 */
var Semi;
(function (Semi) {
    Semi[Semi["cuori"] = 0] = "cuori";
    Semi[Semi["picche"] = 1] = "picche";
    Semi[Semi["denari"] = 2] = "denari";
    Semi[Semi["fiori"] = 3] = "fiori";
})(Semi || (Semi = {}));
var Valori;
(function (Valori) {
    Valori[Valori["asso"] = 1] = "asso";
    Valori[Valori["due"] = 2] = "due";
    Valori[Valori["tre"] = 3] = "tre";
    Valori[Valori["quattro"] = 4] = "quattro";
    Valori[Valori["cinque"] = 5] = "cinque";
    Valori[Valori["sei"] = 6] = "sei";
    Valori[Valori["sette"] = 7] = "sette";
    Valori[Valori["otto"] = 8] = "otto";
    Valori[Valori["nove"] = 9] = "nove";
    Valori[Valori["dieci"] = 10] = "dieci";
    Valori[Valori["jack"] = 11] = "jack";
    Valori[Valori["donna"] = 12] = "donna";
    Valori[Valori["re"] = 13] = "re";
})(Valori || (Valori = {}));
class Mano {
    //devo ricevere 5 carte; // o le ricevo
    //creo una tupla che deve essere rispettata. 
    carte;
    constructor(prima, seconda, terza, quarta, quinta) {
        this.carte = [prima, seconda, terza, quarta, quinta];
        this.ordina();
    }
    ordina() {
        this.carte.sort((a, b) => a[1] - b[1]);
        this.toString();
    }
    toString() {
        this.carte.forEach((x, i) => console.log(`${i}) ${Valori[x[1]]} di ${Semi[x[0]]}`));
    }
    poker() {
        // controllo che prima ci siano almeno 4 carte dello stesso seme
        // non puoi mappare un oggetto cosi. : let diz: object = {} // devi dichiarare comme compariranno le variabili all'interno.
        let quanti = {}; //le chiavi saranno numberi e i valori pure.
        //qui le chiavi si risulteranno numeri ma verrano traslate in automatico
        for (let [, valore] of this.carte) { // qui potresti comunque usare for el of this.carte ma per accedere dovresti specificare el[0] || el [1]
            if (!quanti[valore]) // se non esiste nel diz, lo pooni a 0
                quanti[valore] = 0;
            quanti[valore] += 1; // se esiste lo incrementi!
        }
        for (let el in quanti) {
            console.log(el, quanti[el]);
            if (quanti[el] == 4)
                return true;
        }
        return false;
    }
    colore() {
        // che tutte le carte abbiano lo stesso colore, dato un array posso verificare che tutti i valori siano???
        // come faccio a controllare che siano
        let seme = this.carte[0][0];
        return this.carte.every((c) => c[0] === seme);
    }
}
let poker = new Mano([Semi.fiori, Valori.jack], [Semi.cuori, Valori.jack], [Semi.cuori, Valori.jack], [Semi.cuori, Valori.jack], [Semi.cuori, Valori.dieci]);
let colore = new Mano([Semi.cuori, Valori.jack], [Semi.cuori, Valori.donna], [Semi.cuori, Valori.re], [Semi.cuori, Valori.asso], [Semi.cuori, Valori.dieci]);
console.log(poker.poker(), colore.colore());
//*10, J, Q, K, A
// la prof, chiede: poker, = 4 carte uguali e una diversa, scala tutti i colori uguali  ,scala reale, che inizia con jack e finisce con asso,,colore, sia per 
// una mano è rappresentata da: quindi se sono in ordine devo evitare di ordinarle.
/* console.log(Object.values(Semi).includes("cuori"))
 */ 
