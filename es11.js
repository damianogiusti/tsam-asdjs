/* Esercizio 11

Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.

Esempio

Input: A = {2, 5, 1, 8}

Output: A = {5, 1, 2, 8}
*/

var array = [2, 5, 1, 8];

// =

function sort(a) {
    var result = [];
    for (var i=0; i<a.length; i++)
        if (a[i] % 2 == 0) {
            var temp = a[i];
            a.splice(i, 1);
            a.push(temp);
        }

    return a;
}

// versione ricorsiva
function recsort(a) {
    if (a.length == 1) {
        return a[0];
    }
    
    return (a[0]%2 != 0) ? [ a[0], recsort(a.slice(1)) ] : [recsort(a.slice(1)), a[0]];
}

console.log('sort(a) of ' + array + ' : ' + sort(array));
array = [2, 5, 1, 8]; 
console.log('recsort(a) of ' + array + ' : ' + recsort(array));