let arr = [15, 3, 4, 8, 20, 30];
let operazioniSiftDown = 0;

function heapSort(A) {
    console.log("--- Fase 1: Build Heap ---");
    buildHeap(A);
    console.log("Heap costruito:", A);
    console.log("Operazioni Sift-Down (Build Heap):", operazioniSiftDown);

    console.log("\n--- Fase 2: Estrazione ---");
    let ultimo = A.length - 1;
    let operazioniEstrazione = 0;
    operazioniSiftDown = 0; // Reset contatore per la seconda fase

    while (ultimo > 0) {
        // 1. Scambio radice (massimo) con l'ultimo elemento
        let temp = A[0];
        A[0] = A[ultimo];
        A[ultimo] = temp;

        ultimo--; // 2. L'elemento massimo è ordinato, si riduce la dimensione dell'heap

        // 3. Ripristino proprietà heap sulla nuova radice
        let opPrima = operazioniSiftDown;
        aggiustaHeap(A, 0, ultimo);
        let opFatte = operazioniSiftDown - opPrima;
        operazioniEstrazione += opFatte;
        
        console.log(`Estratto ${A[ultimo+1]}. Sift-Down ha richiesto ${opFatte} scambi.`);
    }
    
    console.log("\n--- Risultati ---");
    console.log("Array ordinato:", A);
    console.log("Operazioni Sift-Down (Estrazione):", operazioniEstrazione);
}

function buildHeap(A) {
    let ultimo = A.length - 1;
    let ultimoGenitore = Math.floor((ultimo - 1) / 2);
    for (let i = ultimoGenitore; i >= 0; i--) {
        aggiustaHeap(A, i, ultimo);
    }
}

function aggiustaHeap(A, i, ultimo) {
    let flag = true;
    let mag;

    while ((2 * i + 1 <= ultimo) && flag) {
        let figliosx = 2 * i + 1;
        let figliodx = 2 * i + 2;

        if (figliosx <= ultimo && A[figliosx] > A[i]) mag = figliosx;
        else mag = i;

        if (figliodx <= ultimo && A[figliodx] > A[mag]) mag = figliodx;

        if (i !== mag) {
            let temp = A[i];
            A[i] = A[mag];
            A[mag] = temp;
            i = mag;
            operazioniSiftDown++; // Traccia il lavoro effettivo
        } else {
            flag = false;
        }
    }
}

heapSort(arr);