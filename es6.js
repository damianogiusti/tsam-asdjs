/* Esercizio 6

Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.

Esempio:

div(5, 3) => 1 resto 2
*/

// O(n)

function div(a, b) {
    var quot = 0;
    var remainder = 0;

    while ((a-b) >= 0) {
        a -= b;
        quot++;
    }

    remainder = a;

    return quot + ' resto ' + remainder;
}

// versione ricorsiva
function recdiv(a, b) {
    return recdivt(a, b, 0);
}

function recdivt(a, b, quot) {
    if ((a - b) < 0) 
        return quot + ' resto ' + a;

    return recdivt(a-b, b, quot+1);
}

console.log('div(5, 3) : ' + div(5, 3));
console.log('recdiv(5, 3) : ' + recdiv(5, 3));