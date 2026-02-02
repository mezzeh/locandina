// ==========================================
// 1. AREA DI SUPPORTO (NON MODIFICARE)
// ==========================================

/**
 * Stampa il risultato del test in console con formattazione visiva.
 * @param {string} nomeTest - Descrizione breve del test (es. "Test 1: Input Vuoto")
 * @param {boolean} passato - La condizione logica (true se il test è passato)
 * @param {any} atteso - Il valore che ti aspettavi
 * @param {any} ricevuto - Il valore che la funzione ha restituito
 */
function stampaRisultato(nomeTest, passato, atteso, ricevuto) {
    if (passato) {
        console.log(`✅ ${nomeTest}: SUPERATO`);
    } else {
        console.error(`❌ ${nomeTest}: FALLITO`);
        console.error(`   🔸 Atteso:   ${JSON.stringify(atteso)}`);
        console.error(`   🔸 Ricevuto: ${JSON.stringify(ricevuto)}`);
    }
}

// ==========================================
// 2. INCOLLA QUI LA TUA FUNZIONE 👇
// ==========================================

// 📝 Esempio: function miaFunzione(a, b) { ... return ... }

function nomeTuaFunzione(parametro) {
    // ... logica ...
    return parametro; // ⚠️ Importante: la funzione DEVE restituire un valore (return)
}


// ==========================================
// 3. SUITE DI TEST
// ==========================================

try {
    console.log("\n--- 🚀 Avvio Test Suite ---\n");

    // -------------------------------------------------------------
    // ✂️ INIZIO BLOCCO DA COPIARE PER CREARE UN NUOVO TEST
    // -------------------------------------------------------------

    // 📝 1. Prepara i dati di input
    const inputTest1 = "valore di prova";

    // 📝 2. Chiama la tua funzione e salva il risultato
    const risultato1 = nomeTuaFunzione(inputTest1);

    // 📝 3. Definisci cosa ti aspetti di ottenere (Output ideale)
    const atteso1 = "valore di prova";

    // 📝 4. Verifica:
    // Se il risultato è un oggetto o un array, usa JSON.stringify per confrontarli.
    // Se è un numero o una stringa semplice, puoi usare === senza JSON.stringify.
    const testPassato1 = JSON.stringify(risultato1) === JSON.stringify(atteso1);

    // 📝 5. Stampa
    stampaRisultato("Test 1: Nome Descrittivo del Test", testPassato1, atteso1, risultato1);

    // -------------------------------------------------------------
    // ✂️ FINE BLOCCO DA COPIARE
    // -------------------------------------------------------------


    // 👇 INCOLLA QUI SOTTO I PROSSIMI TEST (Test 2, Test 3, ecc...)

    /* const risultato2 = ...
    const atteso2 = ...
    stampaRisultato("Test 2: ...", ...); 
    */


} catch (error) {
    console.error("\n⚠️ ERRORE CRITICO NELLO SCRIPT DI TEST:");
    console.error(error);
}


//PROMPT PER GEMINI: 
/*Creami dei test case che verificano la mia funzione che ti alleghero in esterno: e compila tutti i miei test case senza modificarne la struttura
aggiugine quanti ne ritieni necessari, ti posso alleghare la consegna e anche la funzione , anche se la mia funzione non è corretta non 
toccarla lasciala intatta. */