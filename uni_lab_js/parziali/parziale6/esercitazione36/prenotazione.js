class Passeggero {
    #nome;
    #categoria;
    constructor(nome, categoria) {
        if (!(nome != "" && (categoria == "adulto" || categoria == "minore")))
            throw new TypeError("parametri non corretti");
        this.#nome = nome;
        this.#categoria = categoria;
    }
    get nome() { return this.#nome; }
    get categoria() { return this.#categoria; }
}
class Prenotazione {
    #codice;
    #posti;
    #stato = "aperta";
    #passeggeri = [];
    constructor(codice, posti) {
        if (!(codice != "" && posti > 0))
            throw new TypeError("parametri non validi");
        this.#codice = codice;
        this.#posti = posti;
    }
    aggiungi(p) {
        if (this.postiLiberi() <= 0)
            throw new TypeError("posti pieni impossibile aggiungere");
        if (this.#passeggeri.filter((x) => x.nome == p.nome).length > 0) //find non poteva funzioare(Credo)
            throw new TypeError("passeggero duplicato");
        if (this.#stato == "chiusa")
            throw new TypeError("prenotazione chiusa");
        this.#passeggeri.push(p);
    }
    chiudi() {
        this.#stato = "chiusa";
    }
    elenco() {
        return this.#passeggeri; // [...this.#passeggeri]
    }
    conteggioMinori() {
        let arr = [];
        for (let el of this.#passeggeri) {
            if (el.categoria == "minore")
                arr.push(el);
        }
        return arr;
    }
    postiLiberi() {
        return this.#posti - this.#passeggeri.length;
    }
}
class PrenotazionePremium extends Prenotazione {
    #extra;
    constructor(codice, posti, extra) {
        super(codice, posti);
        if (extra == "")
            throw new TypeError("paremtri invalidi");
        this.#extra = extra;
    }
    get extra() { return this.#extra; }
    elencoPremium() {
        // ma quando chiamo elenco premium devo creare un elenco dei passeggeri. , perche comunque sono due istaze diverse no? , e se chiamassi alla varianile premium 
        //mi mostra solo i passeggeri premium
        let base = super.elenco();
        let out = [];
        for (let el of base) {
            out.push({
                nome: el.nome,
                extra: this.#extra
            });
        }
        return out;
    }
    static chiudiPiene(xs) {
        let arr = [];
        for (let el of xs) {
            if (el instanceof Prenotazione) {
                if (el.postiLiberi() <= 0) {
                    el.chiudi();
                    arr.push(el);
                }
            }
        }
        return arr;
    }
}
function assert(condition, msg) {
    console.log(condition ? `✓ ${msg}` : `✗ FALLITO: ${msg}`);
}
function assertThrows(fn, msg) {
    try {
        fn();
        console.log(`✗ FALLITO (nessuna eccezione): ${msg}`);
    }
    catch {
        console.log(`✓ ${msg}`);
    }
}
// ── Passeggero ──────────────────────────────────────────────
assertThrows(() => new Passeggero("", "adulto"), "nome vuoto → TypeError");
assertThrows(() => new Passeggero("Luca", "bambino"), "categoria non valida → TypeError");
const p1 = new Passeggero("Mario", "adulto");
const p2 = new Passeggero("Anna", "minore");
assert(p1.nome === "Mario" && p1.categoria === "adulto", "getter nome e categoria");
// ── Prenotazione ─────────────────────────────────────────────
assertThrows(() => new Prenotazione("", 3), "codice vuoto → TypeError");
assertThrows(() => new Prenotazione("PNR01", 0), "posti = 0 → TypeError");
const pr = new Prenotazione("PNR01", 3);
pr.aggiungi(p1);
assert(pr.elenco().length === 1, "aggiungi() inserisce passeggero");
assertThrows(() => pr.aggiungi(p1), "passeggero duplicato → TypeError");
pr.aggiungi(p2);
assert(pr.conteggioMinori().length === 1, "conteggioMinori() solo minori");
// Riempi i posti rimanenti
const p3 = new Passeggero("Carlo", "adulto");
pr.aggiungi(p3);
assertThrows(() => pr.aggiungi(new Passeggero("Extra", "adulto")), "posti pieni → TypeError");
const prChiusa = new Prenotazione("PNR02", 5);
prChiusa.chiudi();
assertThrows(() => prChiusa.aggiungi(p1), "prenotazione chiusa → TypeError");
// ── postiLiberi() ─ nota bug ──────────────────────────────────
// postiLiberi() = this.#posti - this.#passeggeri.length - 1
// Con 3 posti e 0 passeggeri restituisce 2, non 3.
// Rimuovi il "-1" se vuoi il comportamento atteso.
const prTest = new Prenotazione("BUG", 3);
assert(prTest.postiLiberi() === 3, "postiLiberi() attuale (con -1 hardcoded)");
// ── PrenotazionePremium ──────────────────────────────────────
assertThrows(() => new PrenotazionePremium("P01", 5, ""), "extra vuoto → TypeError");
const pp = new PrenotazionePremium("P01", 5, "lounge");
pp.aggiungi(p1);
const ep = pp.elencoPremium();
assert(ep.length === 1 && ep[0]?.extra === "lounge", "elencoPremium() con extra corretto");
// chiudiPiene() con array misto
const prPiena = new Prenotazione("PIENA", 1); // 1 posto → postiLiberi() = 0 subito
const risultato = PrenotazionePremium.chiudiPiene([prPiena, "stringa", 42, null]);
assert(risultato.length === 1, "chiudiPiene() chiude solo le piene");
assert(risultato.includes(prPiena), "chiudiPiene() ignora non-Prenotazione");
export {};
//# sourceMappingURL=prenotazione.js.map