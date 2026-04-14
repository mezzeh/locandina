class linearClassifier // = s = w1·x1 + ... + wn·xn + bias
{
  protected bias: number;
  protected weights: number[]
  constructor(bias: number, weights: number[]) {
    this.bias = bias;
    // R: Lo spread operator clona l'array. Evita che modifiche all'array esterno
    // alterino i pesi interni della classe (passaggio per riferimento vs valore).
    this.weights = [...weights]
  }

  score(x: number[]): number
  {
    if (x.length != this.weights.length)
      throw new TypeError("dimensione dei pesi differente")

    let s = this.bias;
    for (let i = 0; i < x.length; i++) {
       s += this.weights[i]! * x[i]!;
    };
    return s;
  }

  predic(x: number[]): number {
    return this.score(x) >= 0 ? 1 : 0
  }
}

class Perceptron extends linearClassifier {
  learnRate: number
  constructor(bias: number, weights: number[], learnRate: number=1 ) {
    super(bias, weights);
    this.learnRate = learnRate
  }

  accuracy(dataset: Dataset<number>): number {
      let correct = 0

      for (const [sample, label] of dataset) {
          if (this.predic(sample) === label) {
              correct++
          }
      }
      return correct / dataset.length
  }

  train(dataset:Dataset<number>, epochs:number = 5)
  {
    // R: Non è "una in meno". Il ciclo parte da 0 e arriva a epochs - 1.
    // Se epochs è 5, esegue esattamente 5 iterazioni (0, 1, 2, 3, 4).
    for (let j = 0; j < epochs; j++)
      {
            for (let [X, C] of dataset)
            {
              let ris = this.predic(X);
              let error = C - ris;
              if (error !== 0)
              {
                for (let i = 0; i < this.weights.length; i++)
                  this.weights[i]! += this.learnRate * error * X[i]!

                this.bias += this.learnRate * error
              }
            }
      }
  }
}

function evaluateClassifier(
    clf: linearClassifier,
    dataset: Dataset<number>
): number {
    let correct = 0

    for (const [sample, label] of dataset) {
        const pred = clf.predic(sample)
        console.log(
            `sample=${JSON.stringify(sample)} | pred=${Outcome[pred]} | expected=${Outcome[label]}`
        )
        if (pred === label) {
            correct++
        }
    }

    const acc = correct / dataset.length
    console.log(`Accuracy = ${correct}/${dataset.length} = ${acc}`)
    return acc
}

enum Outcome
{
  Silence, // 0
  Fire     // 1
}

type DataPoint<T> = [sample: T[], label: Outcome]
type Dataset<T> = DataPoint<T>[]

// === DATASETS ===

const datasetAND: Dataset<number> = [
  [[0, 0], Outcome.Silence],
  [[0, 1], Outcome.Silence],
  [[1, 0], Outcome.Silence],
  [[1, 1], Outcome.Fire]
];

const datasetOR: Dataset<number> = [
    [[0, 0], Outcome.Silence],
    [[0, 1], Outcome.Fire],
    [[1, 0], Outcome.Fire],
    [[1, 1], Outcome.Fire]
]

const datasetNAND: Dataset<number> = [
    [[0, 0], Outcome.Fire],
    [[0, 1], Outcome.Fire],
    [[1, 0], Outcome.Fire],
    [[1, 1], Outcome.Silence]
]

const datasetNOR: Dataset<number> = [
    [[0, 0], Outcome.Fire],
    [[0, 1], Outcome.Silence],
    [[1, 0], Outcome.Silence],
    [[1, 1], Outcome.Silence]
]

const datasetXOR: Dataset<number> = [
    [[0, 0], Outcome.Silence],
    [[0, 1], Outcome.Fire],
    [[1, 0], Outcome.Fire],
    [[1, 1], Outcome.Silence]
]

// === AUTOMAZIONE TEST ===

interface TestConfig {
    name: string;
    dataset: Dataset<number>;
    initialBias: number;
    initialWeights: number[];
    epochs?: number;
}

const testsToRun: TestConfig[] = [
    { name: "AND", dataset: datasetAND, initialBias: 1, initialWeights: [1, 1] },
    { name: "OR", dataset: datasetOR, initialBias: 0, initialWeights: [0, 0] },
    { name: "NAND", dataset: datasetNAND, initialBias: 0, initialWeights: [0, 0] },
    { name: "NOR", dataset: datasetNOR, initialBias: 0, initialWeights: [0, 0] },
    // XOR richiederà più epoche, ma fallirà comunque essendo non-lineare
    { name: "XOR (Non lineare)", dataset: datasetXOR, initialBias: 0, initialWeights: [0, 0], epochs: 10 }
];
function testPerceptron(config: TestConfig) {
    console.log(`\n=== Perceptron su dataset ${config.name}, partendo da pesi [${config.initialWeights}], bias=${config.initialBias} ===`);
    const p = new Perceptron(config.initialBias, config.initialWeights);

    console.log(`Accuracy iniziale ${config.name}:`, p.accuracy(config.dataset));

    p.train(config.dataset, config.epochs);

    // Lettura forzata per aggirare il modificatore 'protected' di TypeScript
    const finalWeights = (p as any).weights;
    const finalBias = (p as any).bias;

    console.log(`Accuracy finale ${config.name}:`, p.accuracy(config.dataset));
    console.log(`Pesi finali: [${finalWeights}], Bias finale: ${finalBias}`);

    console.log(`\nPredizioni finali su dataset ${config.name}:`);
    evaluateClassifier(p, config.dataset);
    console.log("--------------------------------------------------");
}
testsToRun.forEach(config => testPerceptron(config));
