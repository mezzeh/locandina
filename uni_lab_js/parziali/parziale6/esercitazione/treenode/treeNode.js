"use strict";
class TreeNode {
    val;
    left;
    right;
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
    insertLeft(value) {
        this.left = new TreeNode(value);
    }
    insertRight(value) {
        this.right = new TreeNode(value);
    }
    isLeaf() {
        if (!this.left && !this.right)
            return true;
        else
            return false;
    }
    minmax() {
        return [this.minimo(this.val), this.massimo(this.val)];
    }
    minimo(min) {
        if (this.val < min)
            min = this.val;
        let dx = Infinity;
        let sx = Infinity;
        if (this.left)
            sx = this.left.minimo(min);
        if (this.right)
            dx = this.right.minimo(min);
        return Math.min(min, sx, dx);
    }
    massimo(max) {
        if (this.val > max)
            max = this.val;
        let dx = -Infinity;
        let sx = -Infinity;
        if (this.left)
            sx = this.left.massimo(max);
        if (this.right)
            dx = this.right.massimo(max);
        return Math.max(max, sx, dx);
    }
    count() {
        if (!this.left && !this.right)
            return 0;
        let cont = 0;
        if (this.left)
            cont += this.left.count() + 1;
        if (this.right)
            cont += this.right.count() + 1;
        return cont;
    }
}
let root = new TreeNode(5);
root.insertLeft(2);
root.insertRight(7);
console.log("is root a leaf?: ", root.isLeaf());
console.log("min e max della root: ", root.minmax());
console.log("quanti nodi ha il nostro albero? ", root.count());
