class TreeNode
{
    val:number;
    left:null|TreeNode;
    right:null|TreeNode;
    constructor(value:number)
    {
        this.val = value;
        this.left = null;
        this.right = null;
    }   
    insertLeft(value:number)
    {
        this.left = new TreeNode(value)
    }
    
    insertRight(value:number)
    {
        this.right = new TreeNode(value)
    }
    isLeaf():boolean
    {
        if(!this.left&&!this.right) return true; 
        else return false;
    }
    minmax():[number,number]
    {
           return [this.minimo(this.val),this.massimo(this.val)] 
    }
    minimo(min:number):number
    {
        if(this.val < min)
            min = this.val;
        let dx :number = Infinity;
        let sx:number = Infinity
        if(this.left)
            sx= this.left.minimo(min);
        if(this.right)
            dx = this.right.minimo(min)

        return Math.min(min,sx,dx)

    }
    massimo(max:number):number
    {
        if(this.val >max)
            max = this.val;
        let dx :number = -Infinity;
        let sx:number = -Infinity
        if(this.left)
            sx= this.left.massimo(max);
        if(this.right)
            dx = this.right.massimo(max)
        
        return Math.max(max,sx,dx)

    }
    count():number 
    {
        if(!this.left && !this.right)
            return 0; 
        let cont:number  = 0;
        if(this.left)
            cont += this.left.count() +1
        if(this.right)
            cont += this.right.count()+1
 
        return cont;

    }
}
let root : TreeNode = new TreeNode(5);
root.insertLeft(2);
root.insertRight(7)
console.log("is root a leaf?: ",root.isLeaf())
console.log("min e max della root: ", root.minmax())
console.log("quanti nodi ha il nostro albero? " , root.count())