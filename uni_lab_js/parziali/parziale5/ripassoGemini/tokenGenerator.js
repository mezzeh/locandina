/**Obiettivo: Implementare l'iterazione lazy infinita e mantenere l'occupazione di memoria costante, indipendentemente da quanti valori vengono generati.
Specifica: Progetta una classe TokenGenerator. Prende in input una lunghezza massima della finestra K e un array iniziale di seed numerici.

    Implementa un metodo generatore (*genera()) che produce valori all'infinito usando un ciclo while(true).

    A ogni iterazione (tramite yield), il nuovo valore è la somma crittografica (simulata tramite una semplice addizione o XOR) degli elementi attualmente nella finestra di grandezza K.

    Applica il pattern sliding window: inserisci il nuovo valore calcolato ed elimina il più vecchio, mantenendo l'array di lavoro sempre e solo di dimensione K */

//non ho ben capito cosa caaazzo devo fare

//classe 
class TokenGenerator
{   
    #k
    #buf
    constructor(k,a)
    {
        //prendo in input la grandezza della finestra ed un array, e l'array stesso
        this.#k = k
        this.#buf = a.slice(0,k)
    }
    *genera()
    {
        // come faccio ad iterare 
        for(let el of this.#buf) yield el
        while(true)
        {
            valore = this.#buf.reduce((acc,curr) =>{acc +curr})
            this.#buf.shift()
            this.#buf.push(valore)
            console.log(this.#buf)
            yield valore
        }
    }
}
let a = ["ab","bc","cd","de","ef"]
let token = new TokenGenerator(3,a)
console.log(token.genera().next())

console.log(token.genera().next())

console.log(token.genera().next())

console.log(token.genera().next())

console.log(token.genera().next())