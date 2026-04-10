/*
Si implementi una classe Counter,
avente un campo pubblico value di tipo numerico.
La classe Counter definisce inoltre un campo statico default_value,
inizialmente settato a 0.
Infine, la classe Counter deve inoltre fornire i seguenti metodi:
- Un costruttore che riceva il valore iniziale o undefined;
se undefined, il contatore prende il valore di default_value.
- Un metodo increment(x) che incrementa value di x.
- Un metodo decrement(x) che decrementa value di x.
Nei metodi increment e decrement,
se il parametro passato è negativo o uguale a 0,
viene lanciata un’eccezione RangeError,
con opportuno messaggio di errore.
 */
class Counter {
    static default_value = 0;
    value;
    constructor(initialValue) {
        if (initialValue === undefined)
            this.value = Counter.default_value;
        else
            this.value = initialValue;
    }
    increment(x) {
        if (x <= 0)
            throw new RangeError("increment: x must be greater than 0");
        this.value += x;
    }
    decrement(x) {
        if (x <= 0)
            throw new RangeError("decrement: x must be greater than 0");
        this.value -= x;
    }
}
/*
Si definisca una classe Logger che offra due metodi statici
- log(level,message) per visualizzare un messaggio del tipo
“[level] message”, dove level può essere uno tra
“INFO”, “WARNING” e “ERROR”, e message è una stringa;
- history() per visualizzare nuovamente tutti i messaggi
precedentemente visualizzati.
Se il level passato è sconosciuto, il metodo log lancia
un’eccezione UnknownLevel, definita opportunamente.
SUGGERIMENTO: Usare una enumerazione per elencare i possibili level
*/
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
class UnknownLevel extends Error {
}
class Logger {
    static messages = [];
    static log(level, message) {
        if (!Object.values(LogLevel).includes(level))
            throw new UnknownLevel("Unknown level " + level);
        let formatted = `[${level}] ${message}`;
        console.log(formatted);
        Logger.messages.push(formatted);
    }
    static history() {
        for (const msg of Logger.messages) {
            console.log(msg);
        }
    }
}
/*
Implementare una classe TreeNode per rappresentare
un nodo di albero binario con campi value (numero),
left (altro nodo o null) e right (altro nodo o null).
Il costruttore di TreeNode prende il numero da assegnare a value
e inizializza left e right a null.
La classe TreeNode deve inoltre fornire i seguenti metodi:
- insertLeft(value) e insertRight(value)
per inserire un nuovo nodo con valore value a sinistra o destra
del nodo corrente, rispettivamente;
- isLeaf(), che restituisce true se il nodo corrente è una foglia,
e false altrimenti;
- minmax(), che restituisce una tupla contenente i valori minimo
e massimo contenuti nell’albero radicato nel TreeNode corrente;
- count(), che restituisce il numero di nodi presenti
nell’albero radicato nel TreeNode corrente.
*/
class TreeNode {
    value;
    left;
    right;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insertLeft(value) {
        this.left = new TreeNode(value);
    }
    insertRight(value) {
        this.right = new TreeNode(value);
    }
    isLeaf() {
        return this.left === null && this.right === null;
    }
    minmax() {
        let min = this.value;
        let max = this.value;
        if (this.left !== null) {
            let [lmin, lmax] = this.left.minmax();
            min = Math.min(min, lmin);
            max = Math.max(max, lmax);
        }
        if (this.right !== null) {
            let [rmin, rmax] = this.right.minmax();
            min = Math.min(min, rmin);
            max = Math.max(max, rmax);
        }
        return [min, max];
    }
    count() {
        let total = 1;
        if (this.left !== null)
            total += this.left.count();
        if (this.right !== null)
            total += this.right.count();
        return total;
    }
}
/*
Definire due enum per rappresentare i Semi e i Valori
delle carte da gioco.
Definire poi una classe Mano per rappresentare una mano,
ovvero un insieme contenente 5 carte da gioco,
ciascuna rappresentata come una coppia [seme,valore],
passate direttamente al costruttore tramite 5 parametri separati.
La classe Mano deve inoltre fornire i seguenti metodi:
- poker(), che restituisce true se la mano corrisponde ad un poker,
e false altrimenti;
- scala(), che restituisce true se la mano corrisponde ad una scala,
e false altrimenti;
- scalaReale(), che restituisce true se la mano corrisponde
ad una scala reale, e false altrimenti;
- colore(), che restituisce true se la mano corrisponde ad una colore,
e false altrimenti;
*/
var Seme;
(function (Seme) {
    Seme[Seme["Cuori"] = 0] = "Cuori";
    Seme[Seme["Quadri"] = 1] = "Quadri";
    Seme[Seme["Fiori"] = 2] = "Fiori";
    Seme[Seme["Picche"] = 3] = "Picche";
})(Seme || (Seme = {}));
var Valore;
(function (Valore) {
    Valore[Valore["Due"] = 2] = "Due";
    Valore[Valore["Tre"] = 3] = "Tre";
    Valore[Valore["Quattro"] = 4] = "Quattro";
    Valore[Valore["Cinque"] = 5] = "Cinque";
    Valore[Valore["Sei"] = 6] = "Sei";
    Valore[Valore["Sette"] = 7] = "Sette";
    Valore[Valore["Otto"] = 8] = "Otto";
    Valore[Valore["Nove"] = 9] = "Nove";
    Valore[Valore["Dieci"] = 10] = "Dieci";
    Valore[Valore["Jack"] = 11] = "Jack";
    Valore[Valore["Donna"] = 12] = "Donna";
    Valore[Valore["Re"] = 13] = "Re";
    Valore[Valore["Asso"] = 14] = "Asso";
})(Valore || (Valore = {}));
class Mano {
    carte;
    constructor(c1, c2, c3, c4, c5) {
        this.carte = [c1, c2, c3, c4, c5];
        this.ordina();
    }
    ordina() {
        this.carte.sort((a, b) => a[1] - b[1]);
    }
    poker() {
        let quanti = {};
        for (let [, valore] of this.carte) {
            if (!quanti[valore])
                quanti[valore] = 0;
            quanti[valore] += 1;
        }
        for (let valore in quanti) {
            if (quanti[valore] == 4)
                return true;
        }
        return false;
    }
    colore() {
        let seme = this.carte[0][0];
        return this.carte.every(c => c[0] === seme);
    }
    scala() {
        this.ordina();
        for (let i = 0; i < 4; i++) {
            let questo = this.carte[i][1];
            let prossimo = this.carte[i + 1][1];
            if (questo != prossimo - 1)
                return false;
        }
        // controllo la scala bassa
        if (this.carte[4][1] === Valore.Asso &&
            this.carte[0][1] === Valore.Due &&
            this.carte[1][1] === Valore.Tre &&
            this.carte[2][1] === Valore.Quattro &&
            this.carte[3][1] === Valore.Cinque) {
            return true;
        }
        return true;
    }
    scalaReale() {
        this.ordina();
        let reale = this.carte[0][1] === Valore.Dieci &&
            this.carte[1][1] === Valore.Jack &&
            this.carte[2][1] === Valore.Donna &&
            this.carte[3][1] === Valore.Re &&
            this.carte[4][1] === Valore.Asso;
        return reale && this.colore();
    }
}
export {};
//# sourceMappingURL=file.js.map