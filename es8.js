/* Esercizio 8

Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.

*/

// O(n^2)

var array = [3,5,6,1,2,7,8,9,0]; // 9 elements

function matrix(a) {
    var value = Math.sqrt(a.length);
    var matrix = [];
    var index = 0;

    for (var i=0; i<value; i++) {
        matrix[i] = [];
        for (var j=0; j<value; j++) {
            matrix[i][j] = a[index++];
        }
    }
    return matrix; 
}

// versione ricorsiva
function recmatrix(a) {
    return recmatrixt(a, Math.sqrt(a.length));
}

function recmatrixt(a, length) {
    if (a.length == length) {
        return a;
    }

    return [a, recmatrixt(a.slice(length), length)];
}

//console.log(matrix(array));
console.log(recmatrix(array));