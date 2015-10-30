/* Esercizio 3

Dato un array di 10 elementi, calcolarne la media
*/

// O(n)

var array = [10,7,63,5,0,0,1,4,5,1]; // avg : 9,6

function avg(a) {
    var sum = 0;
    for (var i=0; i<10; i++)
        sum += a[i];
    return sum/10;
}

// versione ricorsiva
function recavg(a) {
    if (a.length == 0)
        return 0;
    return (a[0] * 1/10) + recavg(a.slice(1));
}

console.log('avg of ' + array + ': ' + avg(array));
console.log('recavg of ' + array + ': ' + recavg(array));