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
    static default_value: number = 0;
    value: number;

    constructor(initialValue: number | undefined) {
        if (initialValue === undefined)
            this.value = Counter.default_value;
        else
            this.value = initialValue;
    }

    increment(x: number): void {
        if (x <= 0)
            throw new RangeError("increment: x must be greater than 0");
        this.value += x;
    }

    decrement(x: number): void {
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
enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR"
}

class UnknownLevel extends Error {}

class Logger {
    static messages: string[] = [];

    static log(level: LogLevel, message: string): void {
        if (!Object.values(LogLevel).includes(level))
            throw new UnknownLevel("Unknown level " + level);

        let formatted = `[${level}] ${message}`;
        console.log(formatted);
        Logger.messages.push(formatted);
    }

    static history(): void {
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
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value: number): void {
        this.left = new TreeNode(value);
    }

    insertRight(value: number): void {
        this.right = new TreeNode(value);
    }

    isLeaf(): boolean {
        return this.left === null && this.right === null;
    }

    minmax(): [number, number] {
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

    count(): number {
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
enum Seme {
    Cuori,
    Quadri,
    Fiori,
    Picche
}

enum Valore {
    Due = 2,
    Tre,
    Quattro,
    Cinque,
    Sei,
    Sette,
    Otto,
    Nove,
    Dieci,
    Jack,
    Donna,
    Re,
    Asso
}

class Mano {
    carte: [Seme, Valore][];

    constructor(
        c1: [Seme, Valore],
        c2: [Seme, Valore],
        c3: [Seme, Valore],
        c4: [Seme, Valore],
        c5: [Seme, Valore]
    ) {
        this.carte = [c1, c2, c3, c4, c5];
        this.ordina();
    }

    ordina(): void {
        this.carte.sort((a: [Seme, Valore], b: [Seme, Valore]) => a[1] - b[1])
    }

    poker(): boolean {
        let quanti: { [k: number]: number } = {};

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

    colore(): boolean {
        let seme: Seme = this.carte[0][0];
        return this.carte.every(c => c[0] === seme);
    }

    scala(): boolean {
        this.ordina();

        for (let i = 0; i < 4; i++) {
            let questo: Valore = this.carte[i][1];
            let prossimo: Valore = this.carte[i + 1][1];

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

    scalaReale(): boolean {
        this.ordina();

        let reale: boolean =
            this.carte[0][1] === Valore.Dieci &&
            this.carte[1][1] === Valore.Jack &&
            this.carte[2][1] === Valore.Donna &&
            this.carte[3][1] === Valore.Re &&
            this.carte[4][1] === Valore.Asso;

        return reale && this.colore();
    }
}