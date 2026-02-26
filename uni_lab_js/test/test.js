
function *genera()
    {
        let buf = ["ab","bc","cd","de","ef"]
        // come faccio ad iterare 
        for(let el of buf) yield el
             {
                console.log(el)
             }yield
       /*  while(true)
        {
            valore = this.#buf.reduce((acc,curr) =>{acc +curr})
            this.#buf.shift()
            this.#buf.push(valore)
            console.log(this.#buf)
            yield valore */
    }
x = genera()
    
console.log(x.next())

console.log(x.next())

console.log(x.next())

console.log(x.next())

console.log(x.next())

console.log(x.next())