import assert from 'node:assert'

class Movimento
{
  #importo;
  #tipo;
  #causale;
  constructor(tipo, importo, causale)
  {
    if (tipo == 'V' || tipo == 'P') this. #tipo = tipo; else throw new TypeError("tipo del movimento non valido")
    if (importo >= 0) this.#importo = importo; else throw new TypeError("valore del movimento non valido")
    if (typeof causale == "string") this.#causale = causale; else throw new TypeError("causale is not a string")
  }
  get tipo() { return this.#tipo; }
  get importo() { return this.#importo }
  get causale() { return this.#causale }

  }
class Caveau
{
  #owner;
  #saldo = 0;
  #movimenti = new Set()
  constructor(owner, saldoIniziale)
  {
    if (owner !== "" && typeof(owner) == "string" )
    { this.#owner = owner; console.log(owner)}
    else
      throw  new TypeError(" owner stringa vuota")
    if (saldoIniziale >= 0 && typeof(saldoIniziale) === "number" )
      this.#saldo = saldoIniziale;
      else throw new TypeError("saldo non puo essere < 0")
  }
  get saldo()
  {
    return this.#saldo
  }
  versa(n, causal)
  {
    if (n > 0)
      this.#saldo += n;
    else throw new TypeError ("n must be postitive")

    if (typeof (causal) === "string") {
      let el = new Movimento('V', n, causal)
      this.#movimenti.add(el)
    }
      else {throw new TypeError("causale must be a stringa");
      }
  }
  preleva(n, causal)
  {
 console.log(typeof(causal))
    if (n > 0) {

      if ((this.#saldo - n) <= 0)
        throw new FondiInsufficienti("non hai abbastanza soldi", n)
       this.#saldo -= n
      console.log("check")
      if (typeof (causal) == "string" && causal != "") {
        console.log(causal)
        this.#movimenti.add(new Movimento('P', n, causal))
      }
      else {
        console.log(causal)
        throw new TypeError("causale must be a string")
      }
    }
    else
     throw TypeError("n must be positive")
    }
  estratto(k = 10)
  {
    let arr = []
    let cont = 0;
    for (let el of this.#movimenti)
    {
      if (cont < k)
        arr.push(el)
      else
        return arr;
      cont++;
      console.log(arr)
    }
    return arr

    // let a = Array.from(this.#movimenti)
    // console.log(a)
    // for (let i = 0; i <= k; i++) {

    //   arr.push(this.#movimenti[k])
    //   console.log(this.#movimenti[k])
    // }
    // return arr
  }

}
class FondiInsufficienti extends Error
{
  constructor(txt)
  {
    super(txt)
  }
}

// ============================================================================
// INSERISCI QUI LA TUA IMPLEMENTAZIONE DI Caveau E FondiInsufficienti
// ============================================================================



// ============================================================================
// SUITE DI TEST
// ============================================================================

console.log("Avvio dei test...\n");

try {
    // Test 1: Caveau valido
    let c1 = new Caveau("Pippo", 5);
    assert.ok(c1 instanceof Caveau);
    assert.strictEqual(c1.saldo, 5);
    console.log("Test 1 (Caveau valido): SUPERATO");

    // Test 2: Caveau non valido
    assert.throws(() => { new Caveau("", 0); }, TypeError, "Errore mancante: owner stringa vuota");
    assert.throws(() => { new Caveau("X", -1); }, TypeError, "Errore mancante: saldo negativo");
    assert.throws(() => { new Caveau(27, 5); }, TypeError, "Errore mancante: tipo sbagliato su owner");
    assert.throws(() => { new Caveau("X", "0"); }, TypeError, "Errore mancante: tipo sbagliato su saldo");
    console.log("Test 2 (Caveau non valido): SUPERATO");

    // Test 3: preleva lancia FondiInsufficienti
    let c3 = new Caveau("Linus", 5);
    assert.throws(
        () => { c3.preleva(6, "pc"); },
        (e) => {
            assert.ok(e instanceof Error);
            assert.ok(e instanceof FondiInsufficienti);
            return true;
        },
        "Errore mancante: FondiInsufficienti non lanciato"
    );
    console.log("Test 3 (preleva lancia FondiInsufficienti): SUPERATO");

    // Test 4: metodo versa, comportamento atteso
    let c4 = new Caveau("X", 0);
    c4.versa(10, "corretto");
    let estr4 = c4.estratto(1);
    assert.strictEqual(estr4[0].tipo, "V");
    assert.strictEqual(c4.saldo, 10);
    console.log("Test 4 (metodo versa): SUPERATO");

    // Test 5: versa, lancia TypeError per parametri non validi
    let c5 = new Caveau("X", 0);
    assert.throws(() => { c5.versa(0, "x"); }, TypeError, "Errore mancante: versa con n = 0");
    assert.throws(() => { c5.versa(-20, "x"); }, TypeError, "Errore mancante: versa con n < 0");
    assert.throws(() => { c5.versa(1, 123); }, TypeError, "Errore mancante: versa con causale non stringa");
    console.log("Test 5 (versa lancia TypeError): SUPERATO");

    // Test 6: metodo preleva, comportamento atteso
    let c6 = new Caveau("X", 20);
    c6.preleva(10, "corretto");
    let estr6 = c6.estratto(1);
    assert.strictEqual(estr6[0].tipo, "P");
    assert.strictEqual(c6.saldo, 10);
    console.log("Test 6 (metodo preleva): SUPERATO");

    // Test 7: preleva, lancia TypeError per parametri non validi
    let c7 = new Caveau("X", 0);
    assert.throws(() => { c7.preleva(0, "x"); }, TypeError, "Errore mancante: preleva con n = 0");
    assert.throws(() => { c7.preleva(-20, "x"); }, TypeError, "Errore mancante: preleva con n < 0");
    assert.throws(() => { c7.preleva(1, 123); }, TypeError, "Errore mancante: preleva con causale non stringa");
    console.log("Test 7 (preleva lancia TypeError): SUPERATO");

    // Test 8: estratto restituisce i movimenti dal più recente al meno recente
    let c8 = new Caveau("Y", 0);
    c8.versa(20, "V1");
    c8.preleva(20, "P1");
    c8.versa(20, "V2");
    c8.preleva(20, "P2");
    let exDef = c8.estratto(); // Test default k=10
    assert.strictEqual(exDef.length, 4);
    assert.strictEqual(exDef[0].causale, "P2");
    assert.strictEqual(exDef[3].causale, "V1");
    console.log("Test 8 (estratto ordinamento): SUPERATO");

    // Test 9: estratto restituisce SOLO k movimenti
    let k = 20;
    let c9 = new Caveau("Y", 0);
    for (let i = 0; i < 200; i++) {
        c9.versa(i + 1, "v" + (i + 1));
    }
    let exBig = c9.estratto(k);
    assert.strictEqual(exBig.length, k);
    assert.strictEqual(exBig[exBig.length - 1].causale, ("v" + (200 - k + 1)));
    console.log("Test 9 (estratto limite k): SUPERATO");

    // Test 12: transazioni comportamento atteso
    // Nota: in un ambiente di test unico, la variabile statica manterrà i record di tutti i test precedenti.
    // Calcoliamo prima la dimensione attuale per avere un controllo relativo accurato.
    let transazioni_precedenti = Caveau.transazioni ? Caveau.transazioni().size : 0;

    let a = new Caveau("A", 0);
    let b = new Caveau("B", 0);
    a.versa(1, "a1");
    b.versa(2, "b1");
    b.preleva(1, "b2");

    let t = Caveau.transazioni();
    assert.ok(t instanceof Set);
    assert.strictEqual(t.size, transazioni_precedenti + 3);
    console.log("Test 12 (transazioni statiche): SUPERATO");

    console.log("\nTutti i test implementati sono stati superati con successo.");

} catch (error) {
    console.error("\n[ERRORE TEST] L'esecuzione si è interrotta al primo fallimento:");
    console.error(error);
}
