class EmptyHistoryError extends Error {
    constructor(message) {
        super(message);
    }
}
;
class undoableHistory {
    initialValue;
    operazioni;
    constructor(value) {
        this.initialValue = value;
        this.operazioni = [];
    }
    add(apply_fn, undo_fn, descriptio) {
        this.operazioni.push({
            apply: apply_fn,
            undo: undo_fn,
            description: descriptio
        });
    }
    current_value() {
        let val = this.initialValue;
        for (let el of this.operazioni) {
            val = el.apply(val);
        }
        return val;
    }
    undoLast() {
        if (this.operazioni.length == 0)
            throw new EmptyHistoryError("vuoto");
        let lastOp = this.operazioni[this.operazioni.length - 1];
        return lastOp.undo(this.current_value());
    }
}
function replay(initial_value, operations) {
    {
        let val = initial_value;
        for (let el of operations) {
            val = el.apply(val);
        }
        return val;
    }
}
export {};
//# sourceMappingURL=secondo.js.map