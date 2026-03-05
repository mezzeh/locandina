import fs from "fs"
class Device
{
  #nome; #osVersion;
  #isJailBroken = false;
  constructor(n,os)
  {
    this.#nome = String(n);
    this.#osVersion = Number(os)
  }
  get obj()
  {
    return { nome: this.#nome, osVersion: this.#osVersion, isJailBroken: this.#isJailBroken }
  }
  exploit()
  {
    this.#isJailBroken = true;
  }
  toJSON(){ // <-- invocato da JSON.stringify
    return this.obj// molto importante perche quando chiamerai stringify se non è presente sto metodo in caso le variabili siano private
    //non saranno visibilinel registro.toString() stringify credo faccia una chiamata ricorsiva sulla classe o comunque cerca questo
      }
}

class PatchNotFoundError extends Error
{
  constructor(txt,version)
  {
    super(txt);
    this.wrongVersion = version
  }
}
class DuplicateDeviceError extends Error
{
  constructor(txt)
  {
    super(txt);
  }
}
class AppleDevice extends Device
{
  constructor(n,os)
  {
    super(n, os);
    if (os > 16.5)
      throw new PatchNotFoundError("La versione non va bene: ",os)
  }
}

/*Livello 3: Classi gestore, Moduli e I/O (Target 5a Prova)
Questo ricalca l'architettura della classe GradeBook.
    Gestore: Crea una classe DeviceManager con un campo privato devices (array vuoto).
    Inserimento: Implementa un metodo register(dev). Se un dispositivo con lo stesso nome è già presente nell'array, lancia DuplicateDeviceError. Altrimenti, aggiungilo.
    Export: Implementa un metodo exportJSON(path). Usa il modulo di sistema fs per convertire l'array devices in stringa JSON e scriverlo nel file specificato da path.
Import: Implementa un metodo statico fromJSON(path). Questo metodo deve usare fs per leggere il file JSON, parsarlo, istanziare un nuovo oggetto DeviceManager vuoto e riempirlo con i dati letti, per poi restituire l'oggetto.
Moduli: Sposta tutto in un modulo. Crea un file devices.js ed esporta le classi e le eccezioni in modo che possano essere importate in un file principale. */
class DeviceManager
{
  #devices = []
  constructor()
  {

  }
  register(...devices)
  {
    for (let device of devices)
    {
      if (this.#devices.some(d => d.obj.nome === device.obj.nome))
        throw new DuplicateDeviceError("il dispositivo è gia nel registro.")
      else
        this.#devices.push(device)
    }
  }
  toString()
  {
    //usiamo stringify per trasformare l0oggeto in stringa
    return JSON.stringify({devices:this.#devices})
  }
  exportJSON(path)
  {
    let s = this.toString()// per trasferirlo nel file deve essere una stringa non un oggetto,volendo gli poresti passare solo la stringa, ma dovresti
    //Farla te manualmente, percio deleghiamo a to string
    fs.writeFileSync(path,s)
  }
  static fromJSON(path)
  {
    //legge il contenuto lo parsa.
    let data = fs.readFileSync(path)
    let newobj = JSON.parse(data);
    let newReg = new DeviceManager()
    let arr = newobj.devices;
    newReg.register(...arr.map(x=> new Device(x.nome,x.osVersion,x.isJailBroken)))
    return newReg;
  }
}
try {
  let samsung = new Device("samsung", 26)
  let newIphone = new AppleDevice("iphone x", 16)
  let registro = new DeviceManager()

  registro.register(newIphone, samsung)
  console.log(registro.toString())
  registro.exportJSON('path.txt')
  let fromFile = DeviceManager.fromJSON('path.txt')
  console.log("from file:", fromFile.toString())
  registro.register(fromFile)
  console.log(registro.toString())

}
catch (error)
{
  //aggiungere i controlli in caso sia duplicato e inc aso la versione non vada bene
  console.log(error.message + error.wrongVersion)
}
