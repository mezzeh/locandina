var Mode;
(function (Mode) {
    Mode[Mode["Off"] = 0] = "Off";
    Mode[Mode["Static"] = 1] = "Static";
    Mode[Mode["Fan"] = 2] = "Fan";
    Mode[Mode["Grill"] = 3] = "Grill";
})(Mode || (Mode = {}));
class InvalidOvenOperationError extends Error {
    operation;
    constructor(message, op) {
        super(message);
        this.operation = op;
    }
}
class SmartOven {
    #serial; //oppure privete
    #temperature;
    #mode;
    #door_open;
    constructor(serial) {
        this.#serial = serial;
        this.#temperature = 0;
        this.#mode = Mode.Off;
        this.#door_open = false;
    }
    get serial() { return this.#serial; }
    get temperature() { return this.#temperature; }
    get mode() { return this.#mode; }
    get door_open() { return this.#door_open; }
    temperatura(t) {
        if (this.mode == Mode.Off && t != 0) // perche t diverso d 0 ?? caso iniziale?viene mandato, no + nel caso venga spento
            throw new InvalidOvenOperationError("test", "set temp");
        this.#temperature = t;
    }
    setMode(NewMode) {
        if (NewMode == Mode.Grill && this.door_open == true)
            throw new InvalidOvenOperationError("test", "set mode");
        //non si vede proprio il console log
        console.log("sto dando ", NewMode, this.#mode);
        this.#mode = NewMode;
        console.log("dato ", this.#mode);
        if (NewMode == Mode.Off)
            this.temperatura(0); // lo mette dopo perche gli da errore , non assegnaal this. la temperatura? errore di compilazione=
    }
    openDoor() {
        if (this.temperature >= 150)
            throw new InvalidOvenOperationError("tst", "open_door");
        this.#door_open = true;
    }
    closeDoor() { this.#door_open = false; }
    toString() {
        return JSON.stringify({ serial: this.serial, temperatura: this.temperature, mode: this.mode, door_open: this.door_open });
    }
}
function activeOvens(ovens) {
    let ov = ovens.filter((X) => X.mode != Mode.Off);
    return ov.map((X) => X.toString());
}
try {
    const a = new SmartOven("A1");
    const b = new SmartOven("B2");
    console.log(b.toString());
    a.setMode(Mode.Static);
    console.log("modalita dopo il camnio a static:", a.mode);
    a.temperatura(160);
    console.log("temperatura dopo il cambio a static e cambio temperature:", a.temperature);
    //a.openDoor()  // sto eserguendo il get, "evt a" // dovrebbe dare errore
    b.setMode(Mode.Off);
    console.log(activeOvens([a, b]));
}
catch (e) {
    if (e instanceof Error) {
        if (e instanceof InvalidOvenOperationError)
            console.log("errore: instance", e.operation);
        console.log("errore", e.message);
    }
}
export {};
//# sourceMappingURL=primo.js.map