class linearClassifier // = s = w1·x1 + ... + wn·xn + bias
 {
    bias;
    weights;
    constructor(bias, weights) {
        this.bias = bias;
        this.weights = [...weights]; // perche lo spread?
    }
    /*La classe deve supportare due metodi che prendono in input un array numerico x:
    ● score(x): restituisce il valore di s
    ● predict(x): restituisce 1 se s>0, 0 altrimenti. */
    score(x) {
        if (x.length != this.weights.length)
            throw new TypeError("dimensione dei pesi differente");
        let s = this.bias;
        for (let i = 0; i < x.length; i++) {
            s += this.weights[i] * x[i];
        }
        ;
        return s;
    }
    predic(x) {
        return this.score(x) >= 0 ? 1 : 0; // se ritorna uno è buono, se ritorna 0 boh // diciamo che equivale alla decisione. si o no
    }
}
class Perceptron extends linearClassifier {
    learnRate;
    constructor(bias, weights, learnRate) {
        super(bias, weights);
        if (learnRate)
            this.learnRate = 5;
    }
}
var Outcome;
(function (Outcome) {
    Outcome[Outcome["silence"] = 0] = "silence";
    Outcome[Outcome["fire"] = 1] = "fire"; // 1
})(Outcome || (Outcome = {}));
const DataSetAnd = [
    [[0, 0], 0], // boh essendo che lo stai dichiarando a mano dovresti saperlo trimone.
    [[0, 1], 0],
    [[1, 0], 0],
    [[1, 1], 1]
];
let test = new linearClassifier(-2, [1, 1]);
DataSetAnd.forEach(([X, C]) => console.log(`risultato campione:${X}: ${test.predic(X)} atteso: ${C}`));
export {};
//# sourceMappingURL=primo.js.map