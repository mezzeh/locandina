
enum Mode { Off, Static, Fan, Grill }
class InvalidOvenOperationError extends Error
{
  public operation : string
  constructor(message:string,op:string)
  {
    super(message);
    this.operation = op;
  }
  }
class SmartOven{ //pongo le proprieta tutte private in modo tale da dover istituire dei metodi controllati per ognuno di loro
  #serial: string //oppure privete
  #temperature: number;
  #mode: Mode
  #door_open: boolean
  constructor(serial: string, )
  {
    this.#serial = serial;
    this.#temperature = 0;
    this.#mode = Mode.Off;
    this.#door_open = false
  }
   get serial() { return this.#serial }
  get temperature() { return this.#temperature }
  get mode() { return this.#mode }
  get door_open() { return this.#door_open }

  temperatura(t: number) {
    if (this.mode == Mode.Off && t != 0) // perche t diverso d 0 ?? caso iniziale?viene mandato, no + nel caso venga spento
      throw new InvalidOvenOperationError("test", "set temp");
      this.#temperature = t;
  }
  setMode(NewMode: Mode) {


    if (NewMode == Mode.Grill && this.door_open == true)
      throw new InvalidOvenOperationError("test", "set mode");
    //non si vede proprio il console log
    console.log("sto dando ",NewMode, this.#mode)
    this.#mode = NewMode
    console.log("dato ", this.#mode)
    if (NewMode == Mode.Off) this.temperatura(0); // lo mette dopo perche gli da errore , non assegnaal this. la temperatura? errore di compilazione=

  }
  openDoor() {
    if (this.temperature >= 150)
      throw new InvalidOvenOperationError("tst", "open_door");

    this.#door_open = true;
  }
  closeDoor() { this.#door_open = false; }


  toString()
  {
    return JSON.stringify({serial:this.serial,temperatura:this.temperature,mode:this.mode,door_open:this.door_open})
  }

}
  function activeOvens(ovens:SmartOven[]):string[]
  {
    let ov = ovens.filter((X) => X.mode != Mode.Off)
    return ov.map((X) => X.toString())
  }


try {
  const a = new SmartOven("A1")
  const b = new SmartOven("B2")
  console.log(b.toString())
  a.setMode(Mode.Static)
  console.log("modalita dopo il camnio a static:", a.mode)
  a.temperatura(160);
  console.log("temperatura dopo il cambio a static e cambio temperature:", a.temperature)
  //a.openDoor()  // sto eserguendo il get, "evt a" // dovrebbe dare errore
  b.setMode(Mode.Off)
  console.log(activeOvens([a, b]))
}
catch (e) {
  if (e instanceof Error) {
    if (e instanceof InvalidOvenOperationError)
      console.log("errore: instance", e.operation)
    console.log("errore", e.message)
  }
}
