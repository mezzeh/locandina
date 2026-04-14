class linearClassifier // = s = w1·x1 + ... + wn·xn + bias
{
  protected bias: number;
  protected weights: number[]
  constructor(bias: number, weights: number[]) {
    this.bias = bias;
    this.weights = [...weights] // perche lo spread?
  }
  /*La classe deve supportare due metodi che prendono in input un array numerico x:
  ● score(x): restituisce il valore di s
  ● predict(x): restituisce 1 se s>0, 0 altrimenti. */
  score(x: number[]): number// [0,1,0,1,0,1,0,1]
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

    return this.score(x) >= 0 ? 1 : 0 // se ritorna uno è buono, se ritorna 0 boh // diciamo che equivale alla decisione. si o no
  }
}
class Perceptron extends linearClassifier
{
  learnRate :number|undefined
  constructor(bias:number,weights:number[],learnRate?: number)
  {
    super(bias,weights);
    if(learnRate) this.learnRate = 5
  }
  // accuracy(dataset: Dataset<T>)
  // {
  //   //restituisce la frazione di esempi del dataset che sono classificati correttamente
  //   //itero su ogni data set.
  //   for (let [X, C] of dataset)
  //   {
  //     console.log(X, C)
  //     if(this.predic(X) == )
  //     }

  }
enum Outcome
{
  silence, //0
  fire // 1
}
type DataPoint<T> = [sample: T[], label: Outcome]// molto piu semplice. meno generico
//piu preciso
type Dataset<T> = DataPoint<T>[] // semplicemente un array di data point
const DataSetAnd: Dataset<number> = [
  [[0, 0], 0], // boh essendo che lo stai dichiarando a mano dovresti saperlo trimone.
  [[0, 1], 0],
  [[1, 0], 0],
  [[1, 1], 1]
];

let test: linearClassifier = new linearClassifier(-2, [1,1]) //W O W

DataSetAnd.forEach(([X, C]) => console.log(`risultato campione:${X}: ${test.predic(X)} atteso: ${C}`))
