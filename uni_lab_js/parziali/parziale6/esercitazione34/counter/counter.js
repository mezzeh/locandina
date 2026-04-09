class Counter {
    static default_value = 0;
    value;
    constructor(x) {
        if (typeof x === "undefined")
            x = Counter.default_value;
        this.value = x;
    }
    /*    constructor(x:number = Counter.default_value) // versione con valore di default,
     {
         
       
             
         this.value = x
          
     }  */
    increment(x) {
        if (x <= 0)
            throw new RangeError("x must be positive");
        this.value += x;
    }
    decrement(x) {
        if (x <= 0)
            throw new RangeError("x must be positive");
        this.value -= x;
    }
}
let cont = new Counter(undefined);
cont.increment(-2);
console.log(cont);
export {};
//# sourceMappingURL=counter.js.map