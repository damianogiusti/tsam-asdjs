/* Esercizio 1

Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore

negativo.
*/

// sum con la every
function sum1(a) {
    var tot = 0;
    a.every(x => {
        if (x >= 0)
            tot += x;
        return x > 0;
    });

    return tot;
}

// sum con every e reduce
function sum2(a) {
    var tmparray = [];
    a.every(x => {
        if (x >= 0)
            tmparray.push(x)
        return x > 0;
    });

    return tmparray.reduce((acc, x) => acc + x, 0);
}

/**
* costruisce un array appoggiandosi alla funzione every,
* e come test per uscire dall'every utilizza una funzione 
* che gli passo
*/
function buildUntil(myarray, check) {
    var tmparray = [];
    myarray.every(x => {
        if (check(x)) {
            tmparray.push(x);
            return true;
        } else {
            return false;
        }
    });
    return tmparray;
}

// sum con funzione di appoggio
function sum3(a) {
    return buildUntil(a, x => x > 0).reduce((acc, x) => acc + x, 0);
}

// funzione sum fatta da cagnone
function sum_ingnorantissima(a) {
    var trovato = false;
    var array = a.map(
        function(x) {
            if (x < 0) 
                trovato = true;
            if (!trovato)
                return x;
            return 0;
        });
    
    return array.reduce(
        function (acc, x) {
            return acc + x;
        });
}

// Per Tiziano
function ex_1_F(a) {
    return sum3(a);
}

/********************************************************************* 

Esercizio 2

Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

// O(n)
function sumn(n) {
    return range(n).map(x => 2*x+1).reduce((acc, x) => acc + x);
}

function range(n) {
    a = [];
    for (var i=0; i<n; i++)
        a[i] = i;

    return a;
}

// Per Tiziano
function ex_2_F(x) {
    return sumn(x);
}

/******************************************************************* 

Esercizio 3

Dato un array di 10 elementi, calcolarne la media
*/

// O(n)

function avg(a) {
    return a.reduce((acc, x) => acc + x/a.length, 0);
}

// Per Tiziano
function ex_3_F(a) {
    return avg(a);
}

/***************************************************************************

 Esercizio 4

Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri

compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,

calcolare la somma nell’intervallo [b,a]

Esempio:

sumInterval(3, 5) => 12

sumInterval(5, 3) => 12
*/

// O(n)

function sumInterval(a, b) {

    function intervallo(a, b) {
        var array = [];
        for (var i=Math.min(a,b); i<=Math.max(a,b); i++) {
            array.push(i);
        }
        return array;
    }

    return intervallo(a, b).reduce((acc, x) => acc + x);
}

// Per Tiziano
function ex_4_F(a, b) {
    return sumInterval(a, b);
}

/***************************************************************************

 Esercizio 5

Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.

Esempio:

mult(2, 3) => 6
*/

// O(n)

function mult(a, b) {
    return replicate(a,b).reduce((acc, x) => acc + x);
}

// Per Tiziano
function ex_5_F(a, b) {
    return mult(a, b);
}

/***************************************************************************

 Esercizio 6

Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.

Esempio:

div(5, 3) => 1 resto 2
*/

function solo_operazioni_di_sottrazione_e_somma(a,b){
    return [a/b, a%b];
}

// Per Tiziano
function ex_6_F(a, b) {
    return solo_operazioni_di_sottrazione_e_somma(a, b);
}

// O(n)

function div1(a, b) {
    var quot = 0;
    var remainder = 0;

    while ((a-b) >= 0) {
        a -= b;
        quot++;
    }

    remainder = a;

    return [quot, remainder];
}

function solo_operazioni_di_sottrazione_e_somma(a,b){
    return [a/b, a%b];
}

// Per Tiziano
function ex_6_F(a, b) {
    return solo_operazioni_di_sottrazione_e_somma(a, b);
}

function div(a, b) {

    // div(5,3)
    // [3,3,3,3,3]
    //return (replicate(b, a).reduce((acc, x) => acc - x, a).filter((x) => x >= 0)).length;
    var temp = 0;
    return replicate(b, a);
}

// versione ricorsiva
function recdiv(a, b) {
    return recdivt(a, b, 0);
}

function recdivt(a, b, quot) {
    if ((a - b) < 0) 
        return [quot, a];

    return recdivt(a-b, b, quot+1);
}

// Per Tiziano
function ex_6_F(a, b) {
    return solo_operazioni_di_sottrazione_e_somma(a, b);
}
/***************************************************************************

 Esercizio 7

Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli

operatori somma, sottrazione e della funzione mult.

Esempio:

pow(2, 3) => 8

*/

// O(n^2)

function pow(a, b) {
    return replicate(a, b).reduce((acc, x) => mult(acc, x), 1);
}

// Per Tiziano
function ex_7_F(a, b) {
    return pow(a, b);
}
/***************************************************************************

 Esercizio 8

Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.

*/

// O(n^2)

var array = [3,5,6,1,2,7,8,9,0]; // 9 elements

function bidimensionaleR(myarray) {

    function magic(myarray, matrix) {
        matrix.unshift(myarray);
        return matrix;
    }  

    function bidimensionaleRInternal(myarray, n) {
        if (myarray.length == n) {
            var a = [myarray];
        } else {
            return magic(myarray.slice(0, n),
                         bidimensionaleRInternal(myarray.slice(n), n));
        }
    }

    return bidimensionaleRInternal(myarray, Math.sqrt(myarray.length));
}



// Per Tiziano
function ex_8_F(a) {
    return bidimensionaleR(a);
}

/***************************************************************************

 Esercizio 9

Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.

Esempio:

Input: A = {2, 5, 8}

Output A = {8, 5, 2}
*/

// O(n)

// var array = [2, 5, 8];

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
    return [a[a.length-1]].concat(recinvert(a.slice(0, a.length-1)));
}

// Per Tiziano
function ex_9_I(a) {
    return invert(a);
}
function ex_9_R(a) {
    return recinvert(a);
}

/***************************************************************************

 Esercizio 10   NON HA SENSO

Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi

contenenti a.

Esempio:

replicate(3, 4) => A= {3, 3, 3, 3}
*/

// O(n)
function replicate(a, n) {
    var array = [];
    for (var i=0; i < n; i++)
        array.push(a);
    return array;
}

// Per Tiziano
function ex_10_F(a, n) {
    return replicate(a,n);
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