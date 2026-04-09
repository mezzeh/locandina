/**Esercizio 4: Poker
Definire due enum per rappresentare i Semi e i Valori delle carte da gioco.
Definire poi una classe Mano per rappresentare una mano, ovvero un insieme contenente 5 carte
da gioco, ciascuna rappresentata come una coppia [seme,Valori], passate direttamente al
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
enum Semi
{
    cuori ,picche,denari,fiori
}
enum Valori
{
    asso = 1,due,tre,quattro,cinque,sei,sette,otto,nove,dieci,jack,donna,re
}
class Mano
{
    //devo ricevere 5 carte; // o le ricevo
    //creo una tupla che deve essere rispettata. 
    carte:[Semi,Valori][]
    constructor(prima:[Semi,Valori],seconda:[Semi,Valori],terza:[Semi,Valori],quarta:[Semi,Valori],quinta:[Semi,Valori])
    {
        this.carte = [prima,seconda,terza,quarta,quinta];
        this.ordina()
    }
    ordina()
    {
       this.carte.sort((a,b)=>a[1]-b[1])
       this.toString()
    }
    toString()
    {   
        this.carte.forEach((x,i)=> console.log(`${i}) ${Valori[x[1]]} di ${Semi[x[0]]}`))     
    }
    poker():boolean
    {
        // controllo che prima ci siano almeno 4 carte dello stesso seme
        // non puoi mappare un oggetto cosi. : let diz: object = {} // devi dichiarare comme compariranno le variabili all'interno.
         let quanti: { [k: number]: number } = {}; //le chiavi saranno numberi e i Valori pure.
        //qui le chiavi si risulteranno numeri ma verrano traslate in automatico
        for (let [, Valori] of this.carte) { // qui potresti comunque usare for el of this.carte ma per accedere dovresti specificare el[0] || el [1]
            if (!quanti[Valori]) // se non esiste nel diz, lo pooni a 0
                quanti[Valori] = 0;
            quanti[Valori] += 1; // se esiste lo incrementi!
        }
        for(let el in quanti)
        {
            console.log(el,quanti[el])
            if(quanti[el] == 4 )
                return true;
           
        }
        return false;
    }
    colore()
    {
        // che tutte le carte abbiano lo stesso colore, dato un array posso verificare che tutti i Valori siano???
        // come faccio a controllare che siano
        let seme = this.carte[0][0]
        return this.carte.every((c) => c[0] === seme )
    }

      scala(): boolean {
        this.ordina();

        for (let i = 0; i < 4; i++) {
            let questo: Valori = this.carte[i][1];
            let prossimo: Valori = this.carte[i + 1][1];

            if (questo != prossimo - 1)
                return false;
        }

        // controllo la scala bassa
        if (this.carte[4][1] === Valori.asso && 
            this.carte[0][1] === Valori.due &&
            this.carte[1][1] === Valori.Tre && 
            this.carte[2][1] === Valori.Quattro &&
            this.carte[3][1] === Valori.Cinque) {
            return true;
        }

        return true;
    }

    scalaReale(): boolean {
        this.ordina();

        let reale: boolean =
            this.carte[0][1] === Valori.Dieci &&
            this.carte[1][1] === Valori.Jack &&
            this.carte[2][1] === Valori.Donna &&
            this.carte[3][1] === Valori.Re &&
            this.carte[4][1] === Valori.Asso;

        return reale && this.colore();
    }
}
let poker:Mano = new Mano([Semi.fiori,Valori.jack],[Semi.cuori,Valori.jack],[Semi.cuori,Valori.jack],[Semi.cuori,Valori.jack],[Semi.cuori,Valori.dieci]);

let colore:Mano = new Mano([Semi.cuori,Valori.jack],[Semi.cuori,Valori.donna],[Semi.cuori,Valori.re],[Semi.cuori,Valori.asso],[Semi.cuori,Valori.dieci]);
console.log(poker.poker(),colore.colore())

//*10, J, Q, K, A

// la prof, chiede: poker, = 4 carte uguali e una diversa, scala tutti i colori uguali  ,scala reale, che inizia con jack e finisce con asso,,colore, sia per 
// una mano è rappresentata da: quindi se sono in ordine devo evitare di ordinarle.
/* console.log(Object.values(Semi).includes("cuori")) 
 */