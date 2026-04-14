"use strict";
class linearFunction // = s = w1·x1 + ... + wn·xn + bias
 {
    bias;
    weights;
    constructor(bias, weights) {
        this.bias = bias;
        this.weights = weights;
    }
    /*La classe deve supportare due metodi che prendono in input un array numerico x:
    ● score(x): restituisce il valore di s
    ● predict(x): restituisce 1 se s>0, 0 altrimenti. */
    score(x) {
        if (x.length != this.weights.length)
            throw new TypeError("dimensione dei pesi differente");
        return x.reduce((acc, curr, i) => acc = curr * this.weights[i], 0) + this.bias;
    }
    predic(x) {
        if (x.length != this.weights.length)
            throw new TypeError("dimensione dei pesi differente");
        let ris = x.reduce((acc, curr, i) => acc += curr * this.weights[i], 0) + this.bias;
        return ris > 0 ? 1 : 0;
    }
}
// Blocco di test per la classe linearFunction
const testCases = [
    { id: 2, weights: [2, -1, 3], bias: 1, x: [1, 2, 1], expectedScore: 4, expectedPredict: 1 },
    { id: 3, weights: [2, -1, 3], bias: -10, x: [1, 2, 1], expectedScore: -7, expectedPredict: 0 },
    { id: 4, weights: [1, -1], bias: 0, x: [1, 1], expectedScore: 0, expectedPredict: 0 },
    { id: 5, weights: [0, 0, 0], bias: 5, x: [10, 20, 30], expectedScore: 5, expectedPredict: 1 },
    { id: 6, weights: [1.5, 2.5], bias: 0.5, x: [2, 2], expectedScore: 8.5, expectedPredict: 1 }
];
console.log("--- Esecuzione Test Logici ---");
testCases.forEach(tc => {
    const lf = new linearFunction(tc.bias, tc.weights);
    const score = lf.score(tc.x);
    const predict = lf.predic(tc.x);
    const scorePass = score === tc.expectedScore;
    const predictPass = predict === tc.expectedPredict;
    if (scorePass && predictPass) {
        console.log(`Test ${tc.id}: PASSATO`);
    }
    else {
        console.log(`Test ${tc.id}: FALLITO`);
        if (!scorePass)
            console.log(`  -> Errore Score: atteso ${tc.expectedScore}, ottenuto ${score}`);
        if (!predictPass)
            console.log(`  -> Errore Predict: atteso ${tc.expectedPredict}, ottenuto ${predict}`);
    }
});
console.log("--- Esecuzione Test Eccezioni ---");
try {
    const lfError = new linearFunction(0, [1, 2]);
    lfError.score([1]); // Input di dimensione errata
    console.log("Test 1: FALLITO (Il codice non ha bloccato l'array di dimensione errata)");
}
catch (e) {
    if (e instanceof TypeError) {
        console.log("Test 1: PASSATO (TypeError intercettato correttamente)");
    }
    else {
        console.log(`Test 1: FALLITO (Eccezione imprevista: ${getErrorMessage(e)})`);
    }
    function getErrorMessage(error) {
        if (error instanceof Error)
            return error.message;
        return String(error);
    }
}
