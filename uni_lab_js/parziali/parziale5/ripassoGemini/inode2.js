/*. Alberi Binari (BST), Intervalli e Controllo dei Null (Rif. INode)

Obiettivo: Gestire correttamente i rami mancanti, evitare controlli inutili e far risalire i valori di ritorno lungo tutta la catena ricorsiva.
Specifica: Progetta una classe PortScannerTree. Ogni nodo gestisce un intervallo di porte di rete [min, max].

    Implementa la logica di inserimento BST.

    Implementa un metodo isPortVulnerable(portaTarget). Deve restituire il nodo esatto se la porta target è compresa nell'intervallo [min, max] del nodo.

    Se non lo è, deve verificare l'esistenza del nodo figlio corretto (sinistro o destro, in base a un tuo predicato logico) prima di scendere in ricorsione. Assicurati che ogni ramo della condizione termini con un return esplicito per non disperdere il risultato (niente undefined). */

class PortScannerTree
{
  left = null;
  right = null;
  constructor([min, max])
  {
    this.min = min;
    this.max = max;
  }
  add(n)
  {

    if (n.min < this.min || (n.min == this.min && n.max < this.max))// se è minore.
    {
      if (!this.left)
        this.left = new PortScannerTree(n);
      else
        this.left.add(n)
    }
    else
    {
      if(!this.right)
        this.right = new PortScannerTree(n);
      else
        this.right.add(n)
    }
  }
  isPortVulnereable(portaTarget)
  {
    //come funzione // caso base//
    if (this.min < portaTarget && portaTarget < this.max) return this

    if (portaTarget < this.min)
      if(this.left)
        return this.left.isPortVulnereable(portaTarget)
      else
        return null // se è minore del minimo. ma non c'è un minimo piu basso dell'attuale ritorna che non esiste.
    //questa volta pero devo ritornare e basta se ce o meno
    let found = this.right ? this.right.isPortVulnereable(portaTarget) : null

    if (!found)
      found = this.left?this.left.isPortVulnereable(portaTarget): null
    return found


  }
}
let porte = new PortScannerTree([10,20])
porte.add([5, 100])
porte.add([15, 25])
porte.add([2,8])
/*x = 15: Deve restituire [10, 20] (lo trova nella root).

x = 6: Deve restituire [5, 100] (lo trova a sinistra).

x = 22: */
console.log(porte.isPortVulnereable(15))

console.log(porte.isPortVulnereable(6))

console.log(porte.isPortVulnereable(22))

console.log(porte.isPortVulnereable(50))
