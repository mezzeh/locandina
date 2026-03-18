class FondiInsufficienti extends Error {
constructor(m) {
super(m);
}
}
class Caveau {
static #tutteTransazioni = [];
#owner;
#saldo;
#movimenti;
constructor(owner, saldoIniziale = 0) {
if (typeof owner !== "string" || owner.length === 0) throw new TypeError("owner");
if (typeof saldoIniziale !== "number" || Number.isNaN(saldoIniziale) ||
saldoIniziale < 0) {
throw new TypeError("saldoIniziale");
}
this.#owner = owner;
this.#saldo = saldoIniziale;
this.#movimenti = [];
}
get saldo() {
return this.#saldo;
}
versa(n, causale) {
if (typeof n !== "number" || Number.isNaN(n) || n <= 0) throw new TypeError("n");
if (typeof causale !== "string") throw new TypeError("causale");
}
this.#saldo += n;
this.#registra("V", n, causale);
preleva(n, causale) {
if (typeof n !== "number" || Number.isNaN(n) || n <= 0) throw new TypeError("n");
if (typeof causale !== "string") throw new TypeError("causale");
if (n > this.#saldo) throw new FondiInsufficienti("fondi");
}
this.#saldo -= n;
this.#registra("P", n, causale);
estratto(k = 10) {
var out = [];
if (k <= 0) {return out;}
