// --- 1. LA TUA FUNZIONE (Adattata per ritornare il valore) ---

/**
 * unioneSenzaOutlier(A, B, epsilon)
 * Calcola la media (floor) di A e B e restituisce gli elementi
 * la cui distanza dalla media è STRETTAMENTE MINORE di epsilon.
 */
function unioneSenzaOutlier(A, B, epsilon) {
    // 1. Unione degli array
    let C = A.concat(B);

    // Gestione array vuoti per evitare divisione per zero
    if (C.length === 0) return [];

    // 2. Calcolo media
    let somma = 0;
    for (let el of C) {
        somma += el;
    }

    // NOTA: Hai usato Math.floor nel tuo codice originale.
    // Questo tronca la media (es. 4.9 diventa 4). I test sono calcolati su questa logica.
    let media = Math.floor(somma / C.length);

    // 3. Filtraggio
    let D = [];
    for (let el of C) {
        // La condizione è STRETTAMENTE MINORE (<), come nel tuo codice
        if (Math.abs(el - media) < epsilon) {
            D.push(el);
        }
    }

    return D; // RESTITUISCE il risultato invece di stamparlo solo
}


// --- 2. SUITE DI TEST (Struttura presa da testcase.js) ---

// Funzione helper per stampare i risultati
function stampaRisultato(nomeTest, passato, atteso, ricevuto) {
    if (passato) {
        console.log(`✅ ${nomeTest}: SUPERATO`);
    } else {
        console.error(`❌ ${nomeTest}: FALLITO`);
        console.error(`   Atteso:   ${JSON.stringify(atteso)}`);
        console.error(`   Ricevuto: ${JSON.stringify(ricevuto)}`);
    }
}

try {
    console.log("--- Esecuzione Test Case per unioneSenzaOutlier ---");

    // Test 1: Il caso del tuo esempio
    // A=[3,4,5], B=[6,5,4], unione=[3,4,5,6,5,4] -> Somma=27, N=6 -> Media=4.5 -> Floor=4
    // Distanze da 4: |3-4|=1, |4-4|=0, |5-4|=1, |6-4|=2
    // Epsilon=1 -> Accetta solo distanze < 1 (quindi solo 0) -> Elementi uguali a 4
    const res1 = unioneSenzaOutlier([3, 4, 5], [6, 5, 4], 1);
    const exp1 = [4, 4];
    stampaRisultato("Test 1 (Esempio base, Epsilon stretto)", JSON.stringify(res1) === JSON.stringify(exp1), exp1, res1);

    // Test 2: Stessi dati, Epsilon più largo
    // Media=4. Epsilon=2. Accetta distanze 0 e 1.
    // Accetta: 3 (dist 1), 4 (dist 0), 5 (dist 1). Scarta 6 (dist 2).
    const res2 = unioneSenzaOutlier([3, 4, 5], [6, 5, 4], 2);
    const exp2 = [3, 4, 5, 5, 4];
    stampaRisultato("Test 2 (Epsilon più largo)", JSON.stringify(res2) === JSON.stringify(exp2), exp2, res2);

    // Test 3: Nessun outlier (Epsilon enorme)
    const res3 = unioneSenzaOutlier([1, 2], [3], 100);
    const exp3 = [1, 2, 3];
    stampaRisultato("Test 3 (Tutti inclusi)", JSON.stringify(res3) === JSON.stringify(exp3), exp3, res3);

    // Test 4: Tutti outlier (Epsilon piccolissimo)
    // Media di [10, 20] è 15. Distanze sono 5. Epsilon=1. Nessuno passa.
    const res4 = unioneSenzaOutlier([10], [20], 1);
    const exp4 = [];
    stampaRisultato("Test 4 (Tutti esclusi)", JSON.stringify(res4) === JSON.stringify(exp4), exp4, res4);

    // Test 5: Input vuoti
    const res5 = unioneSenzaOutlier([], [], 5);
    const exp5 = [];
    stampaRisultato("Test 5 (Input vuoti)", JSON.stringify(res5) === JSON.stringify(exp5), exp5, res5);

} catch (error) {
    console.error("⚠️ Errore critico durante l'esecuzione dei test:", error.message);
}