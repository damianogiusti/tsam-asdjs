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
Array.prototype.ex_1 = function() {
    return this.sum3();
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
Array.prototype.ex_8 = function() {
    return this.bidimensionaleR();
}

/***************************************************************************

 Esercizio 9

Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.

Esempio:

Input: A = {2, 5, 8}

Output A = {8, 5, 2}
*/

Array.prototype.invert = function() {
    var result = [];
    
    this.forEach(x => {
        result.unshift(x);
    });

    return result;
}
// Per Tiziano
Array.prototype.ex_9 = function() {
    return this.invert();
}


/***************************************************************************
 
 Esercizio 11

Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.

Esempio

Input: A = {2, 5, 1, 8}

Output: A = {5, 1, 2, 8}
*/

Array.prototype.sort = function () {
    return this.filter(x => x%2!=0).concat(this.filter(x => x%2==0));
}

// Per Tiziano
Array.prototype.ex_11 = function() {
    return this.sort();
}