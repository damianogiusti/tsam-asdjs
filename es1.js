/* Esercizio 1

Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore

negativo.
*/

var array = [1, 2, 3, 4, 5, -1];

// O(n)
function sum(a) {
    var somma = 0;
    for (var i=0; a[i] > 0; i++) {
        somma += a[i];
    }
    return somma;
}


function recsum(a) {
    // se ho un solo elemento e non è negativo lo ritorno
    // e finisco la ricorsione
    if (a.length == 1)
        return ((a[0] < 0) ? 0 : a[0]);

    // se l'elemento è negativo finisco
    if (a[0] < 0)
        return 0;

    return a[0] + recsum(a.slice(1));
}

console.log('sum: ' + sum(array));
console.log('recsum: ' + recsum(array));