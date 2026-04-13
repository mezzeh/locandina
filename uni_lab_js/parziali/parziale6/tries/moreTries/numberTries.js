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
            //controllo ìx evitare di contare una paroola uguale 2 fvolte
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
        let removed = this._delete(this.root, key, 0);
        if (removed)
            this.n--;
        return removed;
    }
    _delete(node, key, depth) {
        if (key.length === depth) //fase finale
         {
            if (node.value == undefined)
                return false; //parola non esisteva
            node.value = undefined;
            // this.n -- a quanto pare qua non va bene
            return true; // cancellazione okay
        } // fase finale
        //fawse iniziale1
        if (key[depth] === undefined) // type guard 
            return false; // questo  non DEVE RISULTARE ERRORE
        let c = key[depth]; // sennò questo dava errore
        let child = node.children.get(c);
        if (child === undefined)
            return false;
        let deleted = this._delete(child, key, depth + 1);
        if (deleted) {
            if (child.value === undefined && child.children.size == 0)
                node.children.delete(c);
        }
        return deleted;
    }
}
let testTrie = new Trie();
testTrie.insert("co", 2);
testTrie.insert("coso", 4);
testTrie.insert("trans", 5);
testTrie.insert("transformer", 11);
console.log("--- TEST 1: Eliminare un prefisso ---");
testTrie.Delete("trans");
console.log("Lookup 'trans' (dovrebbe essere undefined):", testTrie.lookup("trans"));
// Fallirà: restituirà 5. La parola non viene rimossa.
console.log("\n--- TEST 2: Conteggio (n) errato ---");
let testTrie2 = new Trie();
testTrie2.insert("ciao", 4);
testTrie2.Delete("ciao");
console.log("Size (dovrebbe essere 0):", testTrie2.size);
// Fallirà: restituirà un numero negativo o errato.
console.log("\n--- TEST 3: Eliminazione distruttiva di parole collaterali ---");
let testTrie3 = new Trie();
testTrie3.insert("co", 2);
testTrie3.insert("coso", 4);
testTrie3.Delete("coso");
console.log("Lookup 'co' (dovrebbe restituire 2):", testTrie3.lookup("co"));
export {};
// Fallirà: restituirà undefined. "coso" elimina anche "co".
//# sourceMappingURL=numberTries.js.map