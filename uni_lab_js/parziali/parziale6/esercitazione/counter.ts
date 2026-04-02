class Counter
{
    static default_value = 0; 
    value:number;
     constructor(x:number|undefined)
    {
        
        if(typeof x ===  "undefined" )
         x = Counter.default_value 
            
        this.value = x
         
    } 
   /*    constructor(x:number = Counter.default_value) // versione con valore di default, 
    {
        
      
            
        this.value = x
         
    }  */
}


let cont = new Counter(undefined)
console.log(cont)
