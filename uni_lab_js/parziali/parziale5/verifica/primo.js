// ==========================================
// CLASSI UTENTE (NON MODIFICATE)
// ==========================================
class Pacco {
  #id
  #stato
  #peso
  #eventi = []
  #statiAmmessi = ["CREATO", "IN_TRANSITO", "CONSEGNATO",  "BLOCCATO"]
  constructor(id, peso)
  {
    this.#id = id;
    this.#peso = peso;
    this.#stato = "CREATO"
  }
   avanza(stato)
  {
    if (this.#statiAmmessi.find((element) => element == stato))
    {
      this.#stato = stato
      let d = new Date()
      this.#eventi.push([d,stato])
      }
    else
      throw new StatoNonValido("stato non valido",this.#id,this.#stato)

  }d
  get id() { return this.#id }
  get stato() { return this.#stato }
  get peso() { return this.#peso }
  get eventi() { return this.#eventi }
  set peso(p)
  {
    if (this.#stato != "CREATO")
      throw new ModificaNonConsentita("modifica non consentita",this.#id,this.#stato)
    else
      this.#peso = p
  }
}

class ModificaNonConsentita extends Error {
  constructor(txt, id, stato) {
    super(txt);
    this.id = id;
    this.stato = stato;
  }
}

class StatoNonValido extends Error {
  constructor(txt, id, stato) {
    super(txt);
    this.id = id;
    this.stato = stato;
  }
}

class CatenaDelFreddoRotta extends Error {
  constructor(txt, ta, tmin, tmax) {
    super(txt);
    this.ta = ta
    this.tmin = tmin;
    this.tmax = tmax;
  }
}

class PaccoRefrigerato extends Pacco {
  #temperatura_minima
  #temperatura_massima
  #temperatura_attuale
  constructor(id,peso,tmin, tmax, ta)
  {
    super(id, peso);
       this.#temperatura_minima = tmin;
    this.#temperatura_massima = tmax;
    if (tmin < tmax)
      this.temperatura_attuale = ta
    else {
      this.avanza("BLOCCATO");
      throw new RangeError("la temperatura attuale non è nell'intervallo corretto",ta,tmin,tmax)
      }
  }
 set  temperatura_attuale(ta)
  {
   if (ta >= this.#temperatura_minima && ta <= this.#temperatura_massima)
     this.#temperatura_attuale = ta
   else {
     this.avanza("BLOCCATO");
     throw new CatenaDelFreddoRotta("la temperatura attuale non è nell'intervallo corretto", ta, this.#temperatura_minima, this.#temperatura_massima)
   }
 }
  get temperatura_massima() { return this.#temperatura_massima }
  get temperatura_minima() { return this.#temperatura_minima }
  get temperatura_attuale() {return this.#temperatura_attuale}
}

class PaccoFreezer extends PaccoRefrigerato {
  constructor(id,peso,tmin,ta)
  {
    super(id,peso,tmin,0,ta);
  }
}

function aggiorna(pacchi_refrigerati, temperatura)
{
  let broken = []
  for (let el of pacchi_refrigerati)
  {
    try{
    el.temperatura_attuale = temperatura;
    }
    catch (e)
    {
      console.log(e)
      broken.unshift(el)
    }
  }
  return broken
}
function* bloccati(pacchi)
{
  for (let el of pacchi)
  {
    if (!(el instanceof PaccoRefrigerato))
    {
      if (el.stato == "BLOCCATO")
      {
          yield el
        }
      }
  }
}
// ==========================================
// 1. AREA DI SUPPORTO
// ==========================================
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
// 3. SUITE DI TEST
// ==========================================
try {
    console.log("\n--- 🚀 Avvio Test Suite ---\n");

    // Test 1: Classe Pacco e inizializzazione
    let p1 = new Pacco("IT001", 2.5);
    let pass1 = (p1 instanceof Pacco) && (p1.stato === "CREATO");
    stampaRisultato("Test 1: Classe Pacco e inizializzazione", pass1, "Stato: CREATO", `Stato: ${p1.stato}`);

    // Test 2: Modifica peso consentita
    let p2 = new Pacco("A", 2.5);
    p2.peso = 3.0;
    let pass2 = (p2.peso === 3.0);
    stampaRisultato("Test 2: Modifica peso consentita", pass2, 3.0, p2.peso);

    // Test 3: ModificaNonConsentita lanciata correttamente e con stato
    let p3 = new Pacco("X", 1);
    p3.avanza("IN_TRANSITO");
    let pass3 = false;
    let err3 = null;
    try { p3.peso = 2; }
    catch(e) {
        err3 = e;
        if (e instanceof ModificaNonConsentita && (e.id === "X" || e.identificatore === "X") && e.stato === "IN_TRANSITO") pass3 = true;
    }
    stampaRisultato("Test 3: ModificaNonConsentita", pass3, "Eccezione ModificaNonConsentita(id: X, stato: IN_TRANSITO)", err3 ? err3.constructor.name : "Nessun Errore");

    // Test 4: StatoNonValido lanciata correttamente
    let p4 = new Pacco("Y", 1);
    let pass4 = false;
    let err4 = null;
    try { p4.avanza("SPARITO"); }
    catch(e) {
        err4 = e;
        if (e instanceof StatoNonValido) pass4 = true;
    }
    stampaRisultato("Test 4: StatoNonValido", pass4, "Eccezione StatoNonValido", err4 ? err4.constructor.name : "Nessun Errore");

    // Test 5: Pacco Refrigerato valido
    let pass5 = false;
    let err5 = null;
    let pr5;
    try {
        // La test suite originale passa: id, peso, tmin, tmax, ta
        pr5 = new PaccoRefrigerato("R", 1, -10, 5, 0);
        pass5 = (pr5 instanceof PaccoRefrigerato) && (pr5.stato === "CREATO");
    } catch(e) { err5 = e; }
    stampaRisultato("Test 5: Pacco Refrigerato valido", pass5, "Istanza Creata (Stato: CREATO)", err5 ? err5.message : "Creazione fallita");

    // Test 6: RangeError su PaccoRefrigerato non valido
    let pass6 = false;
    let err6 = null;
    try { new PaccoRefrigerato("R", 1, 0, 0, 0); }
    catch(e) {
        err6 = e;
        if (e.constructor.name === "RangeError") pass6 = true;
    }
    stampaRisultato("Test 6: RangeError su intervallo non valido", pass6, "Eccezione RangeError", err6 ? err6.constructor.name : "Nessun Errore");

    // Test 7: CatenaDelFreddo lanciata, stato BLOCCATO ed evento registrato
    let pass7 = false;
    let err7 = null;
    let pr7;
    try {
        pr7 = new PaccoRefrigerato("R", 1, -10, 5, 0);
        pr7.temperatura_attuale = 100;
    } catch(e) {
        err7 = e;
        if (e instanceof CatenaDelFreddoRotta && pr7 && pr7.stato === "BLOCCATO" && pr7.eventi.length > 0) {
            pass7 = true;
        }
    }
    stampaRisultato("Test 7: CatenaDelFreddoRotta e stato BLOCCATO", pass7, "Eccezione CatenaDelFreddoRotta e Stato BLOCCATO", err7 ? err7.constructor.name + " - Stato: " + (pr7 ? pr7.stato : "N/A") : "Nessun Errore");

    // Test 8: PaccoFreezer valido
    let pass8 = false;
    let err8 = null;
    try {
        // La test suite passa: id, peso, tmin, ta
        let f = new PaccoFreezer("F", 1, -20, -10);
        pass8 = (f instanceof PaccoFreezer);
    } catch(e) { err8 = e; }
    stampaRisultato("Test 8: PaccoFreezer valido", pass8, "Istanza PaccoFreezer creata", err8 ? err8.message : "Creazione fallita");

    // Test 9: Funzione aggiorna (Richiede l'implementazione della funzione)
    let pass9 = false;
    let res9 = null;
    try {
        let pacchi = [new PaccoRefrigerato("R1", 1, -10, 5, 0)];
        if (typeof aggiorna === "function") {
            res9 = aggiorna(pacchi, 10);
            pass9 = Array.isArray(res9) && res9.length === 1 && res9[0].id === "R1" && res9[0].stato === "BLOCCATO";
        } else {
            res9 = "Funzione mancante";
        }
    } catch(e) { res9 = e.message; }
    stampaRisultato("Test 9: Funzione aggiorna()", pass9, "Array con 1 pacco BLOCCATO", res9);

    // Test 10: Generatore bloccati() (Richiede l'implementazione)
    let pass10 = false;
    let res10 = null;
    try {
        let pBloccato = new Pacco("B1", 1);
        pBloccato.avanza("BLOCCATO");
        let pacchi = [pBloccato];
        if (typeof bloccati === "function") {
            let gen = bloccati(pacchi);
            let val = gen.next().value;
            pass10 = (val && val.id === "B1");
            res10 = val ? val.id : "Nessun valore";
        } else {
            res10 = "Generatore mancante";
        }
    } catch(e) { res10 = e.message; }
    stampaRisultato("Test 10: Generatore bloccati()", pass10, "Yield Pacco B1", res10);

} catch (error) {
    console.error("\n⚠️ ERRORE CRITICO NELLO SCRIPT DI TEST:");
    console.error(error);
}
