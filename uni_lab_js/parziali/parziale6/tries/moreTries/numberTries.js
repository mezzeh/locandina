class Node {
    children = new Map();
    value; // percheno terminal?
}
//ora che un nodo puo avere un valore generico, devo darlo anche alla root che non è nient'altro che un nodo
class Trie {
    root;
    n;
    constructor() {
        this.root = new Node();
        this.n = 0; // per il peso?
    }
    insert(key, value) {
        let current = this.root;
        // iterate through all the characters of word
        for (let c of key) { // scannerizziamo la parola carattere per carattere
            if (!current.children.has(c)) // se il suo slot è libero
                current.children.set(c, new Node()); // ci creiamo un nuovo nodo.
            current = current.children.get(c); // L'operatore "!" asserisce che "node.children.get(c)" (di tipo TrieNode | undefined) non è undefined, permettendone l'assegnazione a "node" (di tipo TrieNode)
        } // e passiamo al successivo c, i, a, o,
        if (current.value == undefined) { //qua SE è lundefined da come parola.perche poterbbe
            //ma è per forza una nuova parola okay, ma se ho una parola composta prima e poi una semplice,non viene riconosciuta la nuova parola
            // transformer, trans, essendo che in s,N io quando accedo il valore non è undefined. ed invece si è undefined. okay ho capito incremento, il valore c'è solo nella cella di memoria successiva all'ultima .
            this.n++;
        }
        current.value = value;
    }
    lookup(key) {
        let curr = this.root;
        // non ho la mera idea di come funzioni!
        for (let c of key) {
            if (!curr.children.has(c))
                return undefined;
            curr = curr.children.get(c);
        } // mi ritrovo a fine parola.
        return curr.value;
    }
    *prefixSearch(prefix) {
        // return un generatore:
        //arriviamo a l prefisso e chiamiamo un generatore.
        let curr = this.root;
        for (let c of prefix) {
            if (!curr.children.has(c))
                return;
            curr = curr.children.get(c);
        }
        yield* this.collectAll(curr, prefix);
    }
    *collectAll(node, prefix) {
        //terminazione:
        if (node.value !== undefined) //fine possibile parola.
            yield [prefix, node.value]; //value = TTTT testa di caz
        for (let [char, child] of node.children) {
            yield* this.collectAll(child, prefix + char);
        }
    }
    get size() { return this.n; }
    Delete(key) {
        return this._delete(this.root, key);
    }
    _delete(node, key) {
        //devi fare un controllo:
        if (key.length == 0) { //condizione in cui è terminata gli resituiamo [], pero, dobbiamo guardare se node ha dei children in quel caso non possiamo //trans transformere, non possiamo togliere trans
            if (node.children.size == 0)
                return true; // possiamo eliminare
            else
                return false;
        }
        let nextchar = key.slice(0, 1);
        console.log(nextchar);
        if (!node.children.has(nextchar))
            return false; // non esiste la stringa.
        let next = node.children.get(nextchar);
        if (this._delete(next, key.slice(1))) // se ricevo true posso cancellare
         {
            // se ricevo true da delete posso cancellare , io cancello quel carattere , e se dopo il controllo ci sono altri figli pero devo restituire false.
            node.children.delete(nextchar);
            this.n--;
            if (node.children.size > 0)
                return false;
            return true;
        }
        else
            return false;
    }
    keys(node, parola) {
        //semplicemente appena arriva ad un valore definito fa un console.log oppure restituisce un array
        let arr = [];
        if (node.value !== undefined)
            arr.push(parola);
        for (let [char, nodo] of node.children) {
            arr.push(...this.keys(nodo, parola + char)); // trucchetto per non usare concat NB concat restituisce un nuovo array
        }
        return arr;
    }
    *genKeys(node, parola) {
        if (node.value !== undefined)
            yield parola;
        for (let [char, nodo] of node.children) {
            yield* this.genKeys(nodo, parola + char);
        }
    }
    reduce(f, initialValue) {
        return this._reduce(this.root, f, initialValue);
    }
    _reduce(node, f, acc) {
        if (node.value !== undefined)
            acc = f(acc, node.value);
        for (let [, child] of node.children)
            acc = this._reduce(child, f, acc);
        return acc;
    }
    //qua non so se ce bisogno di ricorsione, la ricorsione mi serve quando?
    has(key) {
        let curr = this.root;
        for (let el of key) {
            if (!curr.children.has(el))
                return false;
            curr = curr.children.get(el);
        }
        if (curr.value !== undefined)
            return true; // significa che era effettivamente una sotto parola.
        return false;
    }
    longestPrefix(prefix) {
        let curr = this.root;
        for (let el of prefix) {
            if (!curr.children.has(el))
                return undefined;
            curr = curr.children.get(el);
        } //due funzioni una per arrivare al prefisso l'altra per trovare la piu grande.
        let ris = this._longestPrefix(curr, prefix);
        return ris === "" ? undefined : ris; // il controllo lo faccio qua
    }
    _longestPrefix(node, prefix) {
        let max = ""; // non possiamo assegnarlo  a prefix. perche potrebbe non essere una parola // per preservare il dato
        if (node.value !== undefined)
            max = prefix; // ricordiamoci che in questo momento prefix è la nostra parola.
        // ora vediamo come possiamo iterare.
        for (let [char, nodo] of node.children) {
            let ris = this._longestPrefix(nodo, prefix + char); // se non ci sono parole è undefined
            if (ris.length > max.length)
                max = ris;
        }
        return max;
    }
}
let parole = ["cosa", "coso", "ciao", "altro"];
let trie = new Trie(); // perche per forza number? T non funziona..
for (let s of parole) {
    trie.insert(s, s.length);
}
//console.log(trie.keys(trie.root,""))
for (let s of trie.genKeys(trie.root, "")) {
    console.log("\t-", s);
}
console.log(trie.longestPrefix(""));
export {};
// console.log("Lista parole con prefisso 'c'")
// for (let s of trie.prefixSearch("")) {
//     console.log("\t-",s)
// }
// console.log("ris ", trie.Delete("ciao"))
// console.log("Lista parole con prefisso 'c'")
// console.log(trie.lookup("ciao"))
// console.log("Lista parole con prefisso 'c'")
// for (let s of trie.prefixSearch("")) {
//     console.log("\t-",s)
// }
//# sourceMappingURL=numberTries.js.map