/* Esercizio 7

*/

// O(n^2)

function pow(a, b) {
    var value = 1;

    for (var i=0; i<b; i++) {
        value = mult(value, a);
    }

    return value;
}

// versione ricorsiva
function recpow(a, b) {

    if (b == 0)
        return 1;

    return mult(a, recpow(a, b-1));
}

console.log('pow(2, 3) : ' + pow(2,3));
console.log('recpow(2, 3) : ' + recpow(2,3));


// --- dipendenze

function mult(a, b) {
    var value = 0;
    for (var i=0; i<b; i++)
        value += a;

    return value;
}

// versione ricorsiva
function recmult(a, b) {
    if (a > b) 
        return a;
    
    return a + recmult(a, b-1);
}