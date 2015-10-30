/* Esercizio 9

Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.

Esempio:

Input: A = {2, 5, 8}

Output A= {8, 5, 2}
*/

// O(n)

var array = [2, 5, 8];

function invert(a) {
    var result = [];
    for (var i=0; i<a.length; i++) {
        result.push(a[a.length - i - 1]);
    }

    return result;
}

// versione ricorsiva
function recinvert(a) {
    if (a.length == 1)
        return a[0];
    return [a[a.length-1], recinvert(a.slice(0, a.length-1))];
}


console.log('invert(a) of ' + array + ' : ' + invert(array));
console.log('recinvert(a) of ' + array + ' : ' + recinvert(array));