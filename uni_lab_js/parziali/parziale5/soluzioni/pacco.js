class ModificaNonConsentita extends Error {constructor(m) { super(m);}}
class StatoNonValido extends Error {constructor(m) { super(m);}}
class CatenaDelFreddoRotta extends Error {constructor(m) { super(m);}}
class Pacco {
static STATI = new Set(["CREATO", "IN_TRANSITO", "CONSEGNATO", "BLOCCATO"]);
#id;
#peso;
#stato;
#eventi;
constructor(id, peso) {
this.#id = id;
this.#peso = peso;
this.#stato = "CREATO";
this.#eventi = [];
}
get id() { return this.#id; }
get stato() { return this.#stato; }
get eventi() { return this.#eventi; }
get peso() { return this.#peso; }
set peso(v) {
if (this.#stato !== "CREATO") {
var e = new ModificaNonConsentita("peso");
e.id = this.#id;
e.stato = this.#stato;
throw e;
}
this.#peso = v;
}
}
avanza(stato) {
if (!Pacco.STATI.has(stato)) throw new StatoNonValido("stato");
this.#stato = stato;
this.#eventi.push([new Date(), stato]);
}
class PaccoRefrigerato extends Pacco {
#tmin;
#tmax;
#tatt;
  constructor(id, peso, temperatura_minima, temperatura_massima, temperatura_attuale) {
    super(id, peso);
    if (!(temperatura_minima < temperatura_massima)) throw new RangeError("range");
    this.#tmin = temperatura_minima;
    this.#tmax = temperatura_massima;
    // set iniziale, con controllo catena del freddo
    this.temperatura_attuale = temperatura_attuale;
  }
get temperatura_minima() { return this.#tmin; }
get temperatura_massima() { return this.#tmax; }
get temperatura_attuale() { return this.#tatt; }
set temperatura_attuale(v) {
this.#tatt = v;
}
}
if (v < this.#tmin || v > this.#tmax) {
// aggiorna stato e registra evento
super.avanza("BLOCCATO");
throw new CatenaDelFreddoRotta("freddo");
}
class PaccoFreezer extends PaccoRefrigerato {
constructor(id, peso, temperatura_minima, temperatura_attuale) {
super(id, peso, temperatura_minima, 0, temperatura_attuale);
}
}
function aggiorna(pacchi_refrigerati, temperatura) {
var rotti = [];
for (var i = 0; i < pacchi_refrigerati.length; i++) {
var p = pacchi_refrigerati[i];
if (!(p instanceof PaccoRefrigerato)) continue;
try {
p.temperatura_attuale = temperatura;
} catch (e) {
if (e instanceof CatenaDelFreddoRotta) rotti.push(p);
}
}
}
return rotti;
//function* freddiRotti(pacchi) {
function* bloccati(pacchi) {
for (var i = 0; i < pacchi.length; i++) {
var p = pacchi[i];
if (!(p instanceof Pacco)) continue;
if (!(p instanceof PaccoRefrigerato) && p.stato === "BLOCCATO") {
yield p;
}
}
}
