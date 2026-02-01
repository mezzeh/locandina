
let arr = [
    { titolo: "Setup", id: "T1", priorita: 3, dipendenze: [] },
    { titolo: "Design", id: "T3", priorita: 5, dipendenze: ["T1"] },
    { titolo: "Code", id: "T2", priorita: 4, dipendenze: ["T1", "T3"] },
    { titolo: "Test", id: "T4", priorita: 2, dipendenze: ["T3"] },
    { titolo: "Deploy", id: "T5", priorita: 1, dipendenze: ["T3", "T4", "T2"] }

]
 arr.sort(comparatoreTask("dipendenze"))
console.log("array finale",arr) 

function comparatoreTask(criterio,ordinamento)
{
    if(ordinamento === undefined)
        ordinamento = true;
    if(criterio === undefined)
        criterio = "id"

    return function(a, b) {
        let ris = 0;
      
    if(criterio === "dipendenze")
    {
          if(a[criterio].length > b[criterio].length)
            ris = 1
        else if (a[criterio].length < b[criterio].length)
                ris = -1
            else
                ris = 0
    }
    else
    {
        // il problema è che sort 
        if (a[criterio] > b[criterio])
            ris =  1;
        else if (a[criterio] < b[criterio])
            ris  =-1;
        else
            ris =0;
       
    }
        /* if (!ordinamento)
            return ris *= -1*/
        return ris 
    }
     
}



// --- INIZIO SUITE DI TEST ---

// --- INIZIO SUITE DI TEST AGGIORNATA (Con dettagli per Test 6 e 7) ---

// Funzione helper per stampare i risultati
function stampaRisultato(nomeTest, passato, atteso, ricevuto) {
    if (passato) {
        console.log(`✅ ${nomeTest}: SUPERATO`);
    } else {
        console.error(`❌ ${nomeTest}: FALLITO`);
        console.error(`   Atteso (ideale): ${JSON.stringify(atteso)}`);
        console.error(`   Ricevuto:        ${JSON.stringify(ricevuto)}`);
    }
}

// Dataset basato sui TUOI dati corretti
function getTasks() {
    return [
        { titolo: "Setup", id: "T1", priorita: 3, dipendenze: [] },
        { titolo: "Design", id: "T3", priorita: 5, dipendenze: ["T1"] },
        { titolo: "Code", id: "T2", priorita: 4, dipendenze: ["T1", "T3"] },
        { titolo: "Test", id: "T4", priorita: 2, dipendenze: ["T3"] },
        { titolo: "Deploy", id: "T5", priorita: 1, dipendenze: ["T3", "T4", "T2"] }
    ];
}

try {
    console.log("--- Esecuzione Test Case ---");

    // Test 1: Default (ID Ascendente)
    const t1Res = getTasks().sort(comparatoreTask()).map(t => t.id);
    const t1Exp = ["T1", "T2", "T3", "T4", "T5"]; // Ordine alfabetico ID
    stampaRisultato("Test 1 (Default: ID Ascendente)", JSON.stringify(t1Res) === JSON.stringify(t1Exp), t1Exp, t1Res);

    // Test 2: ID Ascendente
    const t2Res = getTasks().sort(comparatoreTask("id", true)).map(t => t.id);
    const t2Exp = ["T1", "T2", "T3", "T4", "T5"];
    stampaRisultato("Test 2 (ID, Ascendente: true)", JSON.stringify(t2Res) === JSON.stringify(t2Exp), t2Exp, t2Res);

    // Test 3: ID Discendente
    const t3Res = getTasks().sort(comparatoreTask("id", false)).map(t => t.id);
    const t3Exp = ["T5", "T4", "T3", "T2", "T1"];
    stampaRisultato("Test 3 (ID, Ascendente: false)", JSON.stringify(t3Res) === JSON.stringify(t3Exp), t3Exp, t3Res);

    // Test 4: Priorità Ascendente
    // T5(1) -> T4(2) -> T1(3) -> T2(4) -> T3(5)
    const t4Res = getTasks().sort(comparatoreTask("priorita", true)).map(t => t.id);
    const t4Exp = ["T5", "T4", "T1", "T2", "T3"];
    stampaRisultato("Test 4 (Priorità, Ascendente: true)", JSON.stringify(t4Res) === JSON.stringify(t4Exp), t4Exp, t4Res);

    // Test 5: Priorità Discendente
    // T3(5) -> T2(4) -> T1(3) -> T4(2) -> T5(1)
    const t5Res = getTasks().sort(comparatoreTask("priorita", false)).map(t => t.id);
    const t5Exp = ["T3", "T2", "T1", "T4", "T5"];
    stampaRisultato("Test 5 (Priorità, Ascendente: false)", JSON.stringify(t5Res) === JSON.stringify(t5Exp), t5Exp, t5Res);

    // Test 6: Dipendenze Ascendente (0 -> 1 -> 2 -> 3)
    // T1(0), T3(1), T4(1), T2(2), T5(3)
    const t6Res = getTasks().sort(comparatoreTask("dipendenze", true)).map(t => t.id);
    const t6ExpPrimary = ["T1", "T3", "T4", "T2", "T5"];
    const t6ExpAlt = ["T1", "T4", "T3", "T2", "T5"]; // Accettabile se l'ordinamento non è stabile

    const t6Passato = JSON.stringify(t6Res) === JSON.stringify(t6ExpPrimary) ||
        JSON.stringify(t6Res) === JSON.stringify(t6ExpAlt);

    stampaRisultato("Test 6 (Dipendenze, Ascendente)", t6Passato, t6ExpPrimary, t6Res);

    // Test 7: Dipendenze Discendente (3 -> 2 -> 1 -> 0)
    // T5(3), T2(2), T3(1), T4(1), T1(0)
    const t7Res = getTasks().sort(comparatoreTask("dipendenze", false)).map(t => t.id);
    const t7ExpPrimary = ["T5", "T2", "T3", "T4", "T1"];
    const t7ExpAlt = ["T5", "T2", "T4", "T3", "T1"]; // Accettabile

    const t7Passato = JSON.stringify(t7Res) === JSON.stringify(t7ExpPrimary) ||
        JSON.stringify(t7Res) === JSON.stringify(t7ExpAlt);

    stampaRisultato("Test 7 (Dipendenze, Discendente)", t7Passato, t7ExpPrimary, t7Res);

} catch (error) {
    console.error("⚠️ Errore critico durante l'esecuzione dei test:", error.message);
}