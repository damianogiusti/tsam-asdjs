/* Esercizio 1

Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore

negativo.
*/

Array.prototype.sum3 = function () {

    /**
    * costruisce un array basato su myarray,
    * e come elementi inserisce quelli di myarray finchè
    * la funzione check è verificata
    */
    function buildUntil(a, check) {
        var tmparray = [];
        a.every(x => {
            if (check(x)) {
                tmparray.push(x);
                return true;
            } else {
                return false;
            }
        });
        return tmparray;
    }

    return buildUntil(this, x => x > 0).reduce((acc, x) => acc + x, 0);
}

// Per Tiziano
function ex_1_P(a) {
    return a.sum3();
}

/***************************************************************************

 Esercizio 8

Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.

*/

var array = [3,5,6,1,2,7,8,9,0]; // 9 elements

Array.prototype.bidimensionaleR = function () {

    function magic(myarray, matrix) {
        matrix.unshift(myarray);
        return matrix;
    }  

    function bidimensionaleRInternal(myarray, n) {
        if (myarray.length == n) {
            return [myarray];
        } else {
            return magic(myarray.slice(0, n),
                         bidimensionaleRInternal(myarray.slice(n), n));
        }
    }

    return bidimensionaleRInternal(this, Math.sqrt(this.length));
}

// Per Tiziano
function ex_8_F(a) {
    return a.bidimensionaleR();
}

/***************************************************************************

 Esercizio 9

Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.

Esempio:

Input: A = {2, 5, 8}

Output A = {8, 5, 2}
*/

function invert(a) {
    var result = [];
    
    a.forEach(x => {
        result.unshift(x);
    });

    return result;
}
// Per Tiziano
function ex_9_F(a) {
    return invert(a);
}


/***************************************************************************
 
 Esercizio 11

Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.

Esempio

Input: A = {2, 5, 1, 8}

Output: A = {5, 1, 2, 8}
*/

function sort(a) {
    return a.filter(x => x%2!=0).concat(a.filter(x => x%2==0));
}

// Per Tiziano
function ex_11_F(a) {
    return sort(a);
}