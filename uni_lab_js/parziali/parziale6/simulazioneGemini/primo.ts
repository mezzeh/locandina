/*Si vuole modellare in TypeScript una macchina del caffè intelligente. Implementare una classe SmartCoffeeMachine con:

    serial (un numero di serie, stringa, non modificabile).

water_level (numero intero che rappresenta i millilitri).

status (una modalità di funzionamento).

pod_inserted (stato del vano cialda, booleano, inserita/non inserita). */
enum MachineStatus { Off, Standby, Brewing, Maintenance }
class InvalidCoffeeOperationError extends Error
{
  operation:string
  constructor(message: string, operator: string)
  {
    super(message);
    this.operation = operator
  }
  }
class SmartCoffeMachine
{
  private serial:string
  private water_level: number;
  private status: MachineStatus;
  private pod_inserted: boolean
  constructor(serial:string)
  {
    this.serial = serial;
    this.water_level = 0;
    this.status = MachineStatus.Off;
    this.pod_inserted = false;
  }
  getStato(): MachineStatus{ return this.status }
  getWater(): number{ return this.water_level }
  getPod():boolean{return this.pod_inserted}

  read()
  {
    return JSON.stringify({serial:this.serial, water_level:this.water_level, status:this.status, pod_inserted:this.pod_inserted})
  }
  setWater(l: number)
  {
    if (this.status == MachineStatus.Off)
      throw new InvalidCoffeeOperationError("error","setWater")
  }
  setStatus(newStatus:MachineStatus)
  {
    if (newStatus == MachineStatus.Brewing &&( !this.pod_inserted || this.water_level < 30))
      throw new InvalidCoffeeOperationError("podnot inserted or this water level too low","setStatus")

    this.status = newStatus
    if (this.status == MachineStatus.Off) // se la macchina è spenta (Off), l'acqua deve essere svuotata (pari a 0)
      this.setWater(0)
  }
  insertPod() {
    if (this.status == MachineStatus.Off)
      throw new InvalidCoffeeOperationError("error", "insertPod")
    this.pod_inserted = true;
  }
  removePod() {
    if (this.status == MachineStatus.Brewing)
    {
      throw new InvalidCoffeeOperationError("podnot inserted or this water level too low","setStatus")

    }
    this.pod_inserted = false;
  }
}
function readyMachines(machines:SmartCoffeMachine[])
{
return machines.filter((x)=>x.getStato() == MachineStatus.Standby && x.getWater() >= 30 && x.getPod() )
}
// Source - https://stackoverflow.com/a/39884185
// Posted by artem, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-15, License - CC BY-SA 4.0
function test(nomeTest: string, condizione: boolean) {
  if (condizione) {
    console.log(`PASS: ${nomeTest}`);
  } else {
    console.error(`FAIL: ${nomeTest}`);
  }
}

function testEccezione(nomeTest: string, funzione: () => void) {
  try {
    funzione();
    console.error(`FAIL: ${nomeTest} (Attesa eccezione, ma non è stata sollevata)`);
  } catch (e) {
    if (e instanceof InvalidCoffeeOperationError) {
      console.log(`PASS: ${nomeTest}`);
    } else {
      console.error(`FAIL: ${nomeTest} (Sollevata eccezione errata)`);
    }
  }
}

console.log("--- ESECUZIONE TEST ---");

// Test 1: Inizializzazione
let m1 = new SmartCoffeMachine("SN-1");
test("Inizializzazione corretta", m1.getStato() === MachineStatus.Off && m1.getWater() === 0 && m1.getPod() === false);

// Test 2: setWater in stato Off
let m2 = new SmartCoffeMachine("SN-2");
testEccezione("setWater fallisce se la macchina è Off", () => {
  m2.setWater(50);
});

// Test 3: setWater aggiorna il valore
let m3 = new SmartCoffeMachine("SN-3");
m3.setStatus(MachineStatus.Standby);
m3.setWater(50);
test("setWater aggiorna il livello in Standby", m3.getWater() === 50);

// Test 4: insertPod in stato Off
let m4 = new SmartCoffeMachine("SN-4");
testEccezione("insertPod fallisce se la macchina è Off", () => {
  m4.insertPod();
});

// Test 5: insertPod in Standby
let m5 = new SmartCoffeMachine("SN-5");
m5.setStatus(MachineStatus.Standby);
m5.insertPod();
test("insertPod inserisce la cialda se in Standby", m5.getPod() === true);

// Test 6: setStatus Brewing senza cialda
let m6 = new SmartCoffeMachine("SN-6");
m6.setStatus(MachineStatus.Standby);
(m6 as any).water_level = 50;
testEccezione("setStatus Brewing fallisce se manca la cialda", () => {
  m6.setStatus(MachineStatus.Brewing);
});

// Test 7: setStatus Maintenance
let m7 = new SmartCoffeMachine("SN-7");
m7.insertPod();
try {
  m7.setStatus(MachineStatus.Maintenance);
  console.log("PASS: setStatus Maintenance non solleva eccezioni con acqua < 30");
} catch (e) {
  console.error("FAIL: setStatus Maintenance non solleva eccezioni con acqua < 30");
}

// Test 8: setStatus Off svuota acqua
let m8 = new SmartCoffeMachine("SN-8");
m8.setStatus(MachineStatus.Standby);
(m8 as any).water_level = 50;
m8.setStatus(MachineStatus.Off);
test("setStatus Off azzera il livello dell'acqua", m8.getWater() === 0);

// Test 9: readyMachines
let rm1 = new SmartCoffeMachine("A1");
rm1.setStatus(MachineStatus.Standby);
rm1.insertPod();
(rm1 as any).water_level = 50;
let rm2 = new SmartCoffeMachine("A2");
let arr = readyMachines([rm1, rm2]);
test("readyMachines filtra correttamente", arr.length === 1 && JSON.parse(arr[0]!.read()).serial === "A1");
//test
