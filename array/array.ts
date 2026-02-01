function ordinaPersone (p: object)//la funzione deve ordinare 
//l'array stesso.
{

}
let p = [{ nome: "Marta", eta: 22 }, 
    { nome: "Marta", eta: 23 },
     { nome: "Paola", eta: 18 }, 
     { nome: "Davide", eta: 19 }]
console.log(p)

ordinaPersone(p)
console.log(p)
// p.sort((a, b) => a.nome.localeCompare(b.nome));
//ogni oggetto = {(nome : francesco, eta: 19)}, 
//ordine alfabetico crescente , in caso di nomi uguali in eta
//l'ordinamento deve avvenire tramite il metodo localeCompare()

//console.log("marta".localeCompare("Paola")) return -1
//compara il primo con il secondo e returna -1 se il 
//primo elemento viene PRIMA, e 1 se il primo elemento 
//viene DOPO ; 0 SE SONO UGUALI




