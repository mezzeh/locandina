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
    constructor(bias, weights, learnRate = 1) {
        super(bias, weights);
        this.learnRate = learnRate;
    }
    accuracy(dataset) {
        let correct = 0;
        for (const [sample, label] of dataset) {
            if (this.predic(sample) === label) {
                correct++;
            }
        }
        return correct / dataset.length;
    }
    train(dataset, epochs = 5) {
        for (let j = 0; j < epochs; j++) // perche una in meno?
         {
            for (let [X, C] of dataset) {
                let ris = this.predic(X);
                let error = C - ris;
                if (error !== 0) {
                    for (let i = 0; i < this.weights.length; i++) //nb i < this.weights length i <= this.weights lenght -
                        this.weights[i] += this.learnRate * error * X[i]; // nbbbnb nota mooolto bene quesot è l'array dei samplesss
                    this.bias += this.learnRate * error;
                }
                // console.log(this.accuracy(dataset), this.bias)
            }
        }
    }
}
function evaluateClassifier(clf, dataset) {
    let correct = 0;
    for (const [sample, label] of dataset) {
        const pred = clf.predic(sample);
        console.log(`sample=${JSON.stringify(sample)} | pred=${Outcome[pred]} | expected=${Outcome[label]}`);
        if (pred === label) {
            correct++;
        }
    }
    const acc = correct / dataset.length;
    console.log(`Accuracy = ${correct}/${dataset.length} = ${acc}`);
    return acc;
}
var Outcome;
(function (Outcome) {
    Outcome[Outcome["Silence"] = 0] = "Silence";
    Outcome[Outcome["Fire"] = 1] = "Fire"; // 1
})(Outcome || (Outcome = {}));
const datasetAND = [
    [[0, 0], 0], // boh essendo che lo stai dichiarando a mano dovresti saperlo trimone.
    [[0, 1], 0],
    [[1, 0], 0],
    [[1, 1], 1]
];
const datasetOR = [
    [[0, 0], Outcome.Silence],
    [[0, 1], Outcome.Fire],
    [[1, 0], Outcome.Fire],
    [[1, 1], Outcome.Fire]
];
let clf = new linearClassifier(-1.5, [1, 1]);
// DataSetAnd.forEach(([X, C]) => console.log(`risultato campione:${X}: ${clf.predic(X)} atteso: ${C}`))
console.log("=== Esercizio 2: valutazione di [1,1], bias=1 su datasetAND ===");
const wrongAND = new linearClassifier(1, [1, 1]);
evaluateClassifier(wrongAND, datasetAND);
// Un classificatore corretto per AND
console.log("\n=== Classificatore corretto per AND ===");
const correctAND = new linearClassifier(-1.5, [1, 1]);
evaluateClassifier(correctAND, datasetAND);
console.log("\n=== Perceptron su datasetAND, partendo da [1,1], bias=1 ===");
const pAND = new Perceptron(1, [1, 1]);
console.log("Accuracy iniziale AND:", pAND.accuracy(datasetAND));
pAND.train(datasetAND);
console.log("Accuracy finale AND:", pAND.accuracy(datasetAND));
console.log("\nPredizioni finali su datasetAND:");
evaluateClassifier(pAND, datasetAND);
console.log("\n=== Perceptron su datasetOR, partendo da [0,0], bias=0 ===");
const pOR = new Perceptron(0, [0, 0]);
console.log("Accuracy iniziale OR:", pOR.accuracy(datasetOR));
pOR.train(datasetOR);
console.log("Accuracy finale OR:", pOR.accuracy(datasetOR));
console.log("\nPredizioni finali su datasetOR:");
evaluateClassifier(pOR, datasetOR);
export {};
//# sourceMappingURL=primo.js.map