
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value: number): void {
        this.left = new TreeNode(value);
    }

    insertRight(value: number): void {
        this.right = new TreeNode(value);
    }

    isLeaf(): boolean {
        return this.left === null && this.right === null;
    }

    minmax(): [number, number] {
        let min = this.value;
        let max = this.value;

        if (this.left !== null) {
            let [lmin, lmax] = this.left.minmax();
            min = Math.min(min, lmin);
            max = Math.max(max, lmax);
        }

        if (this.right !== null) {
            let [rmin, rmax] = this.right.minmax();
            min = Math.min(min, rmin);
            max = Math.max(max, rmax);
        }

        return [min, max];
    }

    count(): number {
        let total = 1;

        if (this.left !== null)
            total += this.left.count();

        if (this.right !== null)
            total += this.right.count();

        return total;
    }
}