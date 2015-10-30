/* Esercizio 5

Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.

Esempio:

mult(2, 3) => 6
*/

// O(n)

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

console.log('mult(2, 3) : ' + mult(2, 3));
console.log('recmult(2, 3) : ' + recmult(2, 3));