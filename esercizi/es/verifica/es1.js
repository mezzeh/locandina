
function isRepDigit(num, B) {
    if (num < B) {
        return true;
    } 

    let resto = num % B;
    let prox = Math.floor(num / B);

    while (prox > 0)
         {
        let resto2 = prox % B;

        if (resto2 !== resto) {
            return false;
        }

        prox = Math.floor(prox / B);
    }

    return true;
}

function prodottoRepdigit(A, B) {
    if (B < 1) 
        return;
    

    let prod = 1;

    for (let i = 0; i < A.length; i++) {
        let num = A[i];

        if (isRepDigit(num, B)) 
            prod *= num;
        
    }

    return prod;
}

console.log(prodottoRepdigit([26, 40, 15, 13], 3));