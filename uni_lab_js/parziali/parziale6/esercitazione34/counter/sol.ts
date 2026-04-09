class Counter {
    static default_value: number = 0;
    value: number;

    constructor(initialValue: number | undefined) {
        if (initialValue === undefined)
            this.value = Counter.default_value;
        else
            this.value = initialValue;
    }

    increment(x: number): void {
        if (x <= 0)
            throw new RangeError("increment: x must be greater than 0");
        this.value += x;
    }

    decrement(x: number): void {
        if (x <= 0)
            throw new RangeError("decrement: x must be greater than 0");
        this.value -= x;
    }
}