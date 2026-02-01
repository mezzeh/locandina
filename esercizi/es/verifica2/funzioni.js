/*
 * ======================================================================================
 * SEZIONE 1: ARRAY AVANZATI, RICORSIONE E PROGRAMMAZIONE FUNZIONALE
 * Fonte: LAB1_17_2526.pdf
 * ======================================================================================
 */

[cite_start]// --- UTILS DI BASE (Array come Liste) [cite: 43-57] ---

// Restituisce la testa (primo elemento)
const head = ([h, ...t]) => h;

// Restituisce il resto (coda)
const tail = ([h, ...t]) => t;

[cite_start]// Calcolo lunghezza ricorsivo [cite: 103, 137]
const len = ([h, ...t]) => (h === undefined ? 0 : 1 + len(t));

[cite_start]// Calcolo somma ricorsivo [cite: 105, 137]
const sumRec = ([h, ...t]) => (h === undefined ? 0 : h + sumRec(t));

[cite_start]// Calcolo massimo ricorsivo [cite: 106, 137]
const maxRec = ([h, ...t]) => {
    if (h === undefined) return -Infinity; // Base case per array vuoto
    if (t.length === 0) return h;
    const maxTail = maxRec(t);
    return h > maxTail ? h : maxTail;
};

// --- ESERCIZI SPECIFICI DEL LAB ---

/**
 * 1. Funzione Math (Operazioni con numero variabile di argomenti)
 * Applica un operatore sequenzialmente agli operandi.
 [cite_start]* [cite: 289-293]
 */
function math(op, ...nums) {
    if (nums.length === 0) return 0;
    // Usa reduce per applicare l'operazione sequenzialmente
    return nums.reduce((acc, curr) => {
        switch (op) {
            case "+": return acc + curr;
            case "-": return acc - curr;
            case "*": return acc * curr;
            case "/": return acc / curr;
            default: return acc;
        }
    });
}
// Esempio: math("+", 4, 2, 7) -> 13

/**
 * 2. Filter In-Place (fip)
 * Modifica l'array originale rimuovendo elementi che non soddisfano p.
 [cite_start]* [cite: 294-298]
 */
function fip(arr, p) {
    // Iteriamo al contrario per rimuovere elementi senza sballare gli indici
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!p(arr[i])) {
            arr.splice(i, 1); // Rimuove 1 elemento all'indice i
        }
    }
    return arr; // Ritorna lo stesso array modificato
}

/**
 * 3. Somma (con numero variabile di argomenti)
 [cite_start]* [cite: 299-304]
 */
function somma(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}

/**
 * 4. isSorted
 * Verifica se l'array è strettamente crescente (senza cicli espliciti).
 [cite_start]* [cite: 305-312]
 */
function isSorted(arr) {
    if (arr.length < 2) return true;
    // Controllo: ogni elemento deve essere minore del successivo (tranne l'ultimo che non ha successivo)
    // Usiamo 'every' controllando l'indice
    return arr.every((val, i) => i === arr.length - 1 || val < arr[i + 1]);
}

/**
 * 5. Deframmenta
 * Elimina occorrenze consecutive duplicate.
 [cite_start]* [cite: 313-317]
 */
function deframmenta(arr) {
    // Filtra tenendo l'elemento solo se è diverso dal precedente
    return arr.filter((val, i) => i === 0 || val !== arr[i - 1]);
}

/**
 * 6. Fabbrica di funzioni (Closure)
 * Restituisce una funzione che ritorna sempre k.
 [cite_start]* [cite: 318-327]
 */
function fabbrica(k) {
    return () => k;
}

/**
 * 7. Applicazione Parziale
 * Fissa il primo argomento 'a' di una funzione binaria 'bop'.
 [cite_start]* [cite: 328-334]
 */
function partapply(bop, a) {
    return (b) => bop(a, b);
}

/**
 * 8. Reverse
 * Inverte un array senza modificarlo (versione con destrutturazione/ricorsiva).
 [cite_start]* [cite: 335-346]
 */
function reverse(arr) {
    if (arr.length === 0) return [];
    const [head, ...tail] = arr;
    return [...reverse(tail), head];
}

/**
 * 9. Funprop
 * Restituisce un array di interi k in [a, b] dove f(k) soddisfa p.
 [cite_start]* [cite: 347-352]
 */
[cite_start]function funprop(f, p = () => true) { // p default sempre true [cite: 349]
    return function (a, b) {
        let result = [];
        for (let k = a; k <= b; k++) {
            if (p(f(k))) {
                result.push(k);
            }
        }
        return result;
    };
}

/*
 * ======================================================================================
 * SEZIONE 2: ALBERI BINARI DI RICERCA (ABR/BST)
 * Fonte: LAB1_18_2526.pdf
 * Struttura nodo: { val: v, sx: s, dx: d } o null
 * ======================================================================================
 */

// Helper per creare un nodo
const nodo = (val, sx = null, dx = null) => ({ val, sx, dx });

/**
 * Inserimento in un ABR
 [cite_start]* [cite: 412]
 */
function abrInserisci(t, v) {
    if (t === null) return nodo(v);
    if (v < t.val) {
        t.sx = abrInserisci(t.sx, v);
    } else if (v > t.val) {
        t.dx = abrInserisci(t.dx, v);
    }
    // Se v == t.val, non facciamo nulla (no duplicati nei set classici) o inseriamo a dx/sx
    return t;
}

/**
 * Visita Simmetrica (Stampa Crescente)
 [cite_start]* [cite: 408]
 */
function abrStampaCrescente(t) {
    if (t) {
        abrStampaCrescente(t.sx);
        console.log(t.val);
        abrStampaCrescente(t.dx);
    }
}

/**
 * Conversione ABR -> Array Ordinato
 [cite_start]* [cite: 409]
 */
function abrArray(t) {
    if (!t) return [];
    return [...abrArray(t.sx), t.val, ...abrArray(t.dx)];
}

/**
 * Ricerca di un valore
 [cite_start]* [cite: 411]
 */
function abrCerca(t, v) {
    if (!t) return null;
    if (t.val === v) return t;
    return v < t.val ? abrCerca(t.sx, v) : abrCerca(t.dx, v);
}

/**
 * Verifica se è un ABR valido
 * Deve rispettare min < val < max per ogni nodo.
 [cite_start]* [cite: 413]
 */
function abrVerifica(t, min = -Infinity, max = Infinity) {
    if (!t) return true;
    if (t.val <= min || t.val >= max) return false;
    return abrVerifica(t.sx, min, t.val) && abrVerifica(t.dx, t.val, max);
}

/**
 * Conteggio nodi con valore <= v (Esercizio Extra)
 [cite_start]* [cite: 540]
 */
function abrContaMinoriUguali(t, v) {
    if (!t) return 0;
    if (t.val <= v) {
        // Conta questo nodo (1), tutto il sx (sicuramente < v) e cerca a dx
        // Nota: se ho abrArray, potrei fare abrArray(t).filter(x => x <= v).length, ma è meno efficiente
        return 1 + abrContaNodi(t.sx) + abrContaMinoriUguali(t.dx, v);
    } else {
        // t.val > v, quindi tutto il dx è > v. Cerco solo a sx.
        return abrContaMinoriUguali(t.sx, v);
    }
}
// Helper per contare tutti i nodi
const abrContaNodi = (t) => (t ? 1 + abrContaNodi(t.sx) + abrContaNodi(t.dx) : 0);


/**
 * ABR da Array ordinato (Bilanciato) (Esercizio Extra)
 [cite_start]* [cite: 541]
 */
function abrDaArray(arr) {
    if (arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);
    const root = nodo(arr[mid]);
    root.sx = abrDaArray(arr.slice(0, mid));
    root.dx = abrDaArray(arr.slice(mid + 1));
    return root;
}

/*
 * ======================================================================================
 * SEZIONE 3: GRAFI (Liste di Adiacenza e Matrici)
 * Fonte: LAB1_18_2526.pdf
 * ======================================================================================
 */

// Esempio Lista Adiacenza: { 0: [1, 2], 1: [], 2: [1] }
// Esempio Matrice Adiacenza: [[0,1,1], [0,0,0], [0,1,0]]

/**
 * Verifica esistenza arco bidirezionale (i->j E j->i)
 * Supporta sia Liste (Oggetto) che Matrici (Array di Array)
 [cite_start]* [cite: 534]
 */
function bidirezionale(g, i, j) {
    // Caso Matrice
    if (Array.isArray(g)) {
        return g[i][j] === 1 && g[j][i] === 1;
    }
    // Caso Lista di Adiacenza
    else {
        return g[i].includes(j) && g[j].includes(i);
    }
}

/**
 * Grado di un nodo (Entranti + Uscenti)
 [cite_start]* [cite: 535]
 */
function grado(g, n) {
    let outDegree = 0;
    let inDegree = 0;

    // Caso Matrice
    if (Array.isArray(g)) {
        // Grado uscente: somma riga n
        outDegree = g[n].reduce((a, b) => a + b, 0);
        // Grado entrante: somma colonna n
        for (let row of g) {
            if (row[n] === 1) inDegree++;
        }
    }
    // Caso Lista di Adiacenza
    else {
        // Grado uscente: lunghezza lista adiacenza di n
        outDegree = g[n] ? g[n].length : 0;
        // Grado entrante: conta quante liste contengono n
        for (let k in g) {
            if (g[k].includes(n)) inDegree++;
        }
    }
    return outDegree + inDegree;
}

/**
 * Trasponi Grafo (Inverte direzione archi)
 * Restituisce un nuovo grafo nella stessa rappresentazione.
 [cite_start]* [cite: 536]
 */
function trasponi(g) {
    // Caso Matrice
    if (Array.isArray(g)) {
        const size = g.length;
        // Crea matrice vuota size x size
        let newG = Array.from({ length: size }, () => Array(size).fill(0));
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                newG[j][i] = g[i][j]; // Scambia riga/colonna
            }
        }
        return newG;
    }
    // Caso Lista di Adiacenza
    else {
        let newG = {};
        // Inizializza chiavi
        for (let k in g) newG[k] = [];

        for (let u in g) { // Per ogni nodo u
            for (let v of g[u]) { // Per ogni arco u -> v
                // Aggiungi arco v -> u nel nuovo grafo
                if (!newG[v]) newG[v] = []; // sicurezza
                newG[v].push(Number(u)); // trasforma 'u' in numero se necessario
            }
        }
        return newG;
    }
}

/**
 * Nodi Sorgente (Grado entrante 0) (Esercizio Extra)
 [cite_start]* [cite: 547]
 */
function nodiSorgente(g) {
    const sorgenti = [];
    // Logica per Lista di Adiacenza (più comune in esame JS)
    if (!Array.isArray(g)) {
        const nodi = Object.keys(g).map(Number);
        for (let n of nodi) {
            let inDegree = 0;
            for (let k in g) {
                if (g[k].includes(n)) {
                    inDegree++;
                    break;
                }
            }
            if (inDegree === 0) sorgenti.push(n);
        }
    }
    return sorgenti;
}

/* ====================================================
   ESEMPI DI UTILIZZO RAPIDO
   ====================================================
   
   var arr = [1, 2, 3, 4, 1, 2];
   var bst = abrDaArray([1, 2, 3, 4, 5]);
   var grafoLista = { 0: [1], 1: [0, 2], 2: [] };

   console.log(math("+", 1, 2, 3)); // 6
   console.log(deframmenta(arr));   // [1, 2, 3, 4, 1, 2]
   console.log(abrArray(bst));      // [1, 2, 3, 4, 5]
   console.log(grado(grafoLista, 1)); // out: 2, in: 1 -> tot: 3
*/