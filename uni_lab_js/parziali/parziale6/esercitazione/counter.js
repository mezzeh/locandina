class Counter {
    static default_value = 0;
    value;
    /*    constructor(x:number|undefined)
      {
          
          if(typeof x ===  "undefined" )
           x = Counter.default_value
              
          this.value = x
           
      }  */
    constructor(x = Counter.default_value) {
        this.value = x;
    }
}
let cont = new Counter(undefined);
console.log(cont);
export {};
//# sourceMappingURL=counter.js.map