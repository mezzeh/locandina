function unioneParziale(A, n) {
    if (n <= 0) {
        return [];
    }

    let cont = {};

    for (let i = 0; i < A.length; i++) {
        const insieme = A[i];

        for (let j = 0; j < insieme.length; j++) {
            let el = insieme[j];

            if (cont[el] === undefined) {
                cont[el] = 1;//se  non esiste
            } else {
                cont[el]++;//incremento
            }
        }
    }

    let ris = [];

    for (let el in cont) {//ciclo di controllo
        if (cont[el] === n) {// push
            ris.push(valore);
        }
    }

    return ris;
}