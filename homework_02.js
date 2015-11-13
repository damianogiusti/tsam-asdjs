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
    var sum = 0;

    for (var i=0; i<n; i++) {
        sum += 1 + 2*i;
    }
    return sum;
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
    var sum = 0;
    for (var i=0; i<a.length; i++)
        sum += a[i];
    return sum/a.length;
}

// versione ricorsiva
function recavgT(a) {
    if (a.length == 0)
        return 0;
    return a[0] + recavgT(a.slice(1));
}

function recavg(a) {
    var lung = a.length;
    return recavgT(a) / lung;
}

// Per Tiziano
function ex_3_I(a) {
    return avg(a);
}
function ex_3_R(a) {
    return recavg(a);
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
    var sum = 0;

    if (a > b) {
        var temp = b;
        b = a;
        a = temp;
    }

    while (a<=b) {
        sum += a++;
    }
    return sum;
}

// versione ricorsiva
function sumIntervalRec(a, b) {
    if (a > b) {
        return sumIntervalRec(b, a);
    }

    if (a == b)
        return a;
    
    return a + sumIntervalRec(a+1, b);
}

// Per Tiziano
function ex_4_I(a, b) {
    return sumInterval(a, b);
}
function ex_4_R(a, b) {
    return sumIntervalRec(a, b);
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
    var value = 0;
    for (var i=0; i<b; i++)
        value += a;

    return value;
}

// versione ricorsiva
function recmult(a, b) {
    if (b == 1) 
        return a;
    
    return a + recmult(a, b-1);
}

// Per Tiziano
function ex_5_I(a, b) {
    return mult(a, b);
}
function ex_5_R(a, b) {
    return recmult(a, b);
}

/***************************************************************************

 Esercizio 6

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

    return [quot, remainder];
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
function ex_6_I(a, b) {
    return div(a, b);
}
function ex_6_R(a, b) {
    return recdiv(a, b);
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
    var value = 1;

    for (var i=0; i<b; i++) {
        value = mult(value, a);
    }

    return value;
}

// versione ricorsiva
function recpow(a, b) {

    if (b == 0)
        return 1;

    return mult(a, recpow(a, b-1));
}

// Per Tiziano
function ex_7_I(a, b) {
    return pow(a, b);
}
function ex_7_R(a, b) {
    return recpow(a, b);
}

/***************************************************************************

 Esercizio 8

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
function recmatrix1(a){
	if(a.length == 1) 
		return a[0];
	return [a[0]].concat(recmatrix1(a.slice(1)));
}

function recmatrix(a, length) {
	a[0] = [recmatrix1(a.slice(0,length))];
	if(a.length <= length) 
	   return a[0];
	return [a[0]].concat(recmatrix(a.slice(length), length));
}

// Per Tiziano
function ex_8_I(a) {
    return matrix(a);
}
function ex_8_R(a) {
	var length = Math.sqrt(a.length);
    return recmatrix(a, length);
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

 Esercizio 10

Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi

contenenti a.

Esempio:

replicate(3, 4) => A= {3, 3, 3, 3}
*/

// O(n)
function replicate(a, n) {
    var array = [];

    for (var i=0; i<n; i++) {
        array.push(a);
    }

    return array;
}

// versione ricorsiva
function recreplicate(a, n) {
    if (n == 1)
        return a;
    
    return [a].concat(recreplicate(a, n-1));
}

// Per Tiziano
function ex_10_I(a, n) {
    return replicate(a,n);
}
function ex_10_R(a, n) {
    return recreplicate(a, n);
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
    var even = [];
    var odd = [];
    for (var i=0; i<a.length; i++) {
        if (a[i] % 2 == 0) {
            /*var temp = a[i];
            a.splice(i, 1);
            //a.push(temp);
            array.push(a[i]);*/
            even.push(a[i]);
        }
        else {
            odd.push(a[i]);
        }
    }

    return odd.concat(even);
}

// versione ricorsiva
function recsort(a) {
    var even = [];
    var odd = [];
    return recsortt(a, even, odd);
}

function recsortt(a, even, odd) {
    if (a.length == 0) {
        return odd.concat(even);
    }

    if ((a[0] % 2) == 0) 
        even.push(a[0]);
    else
        odd.push(a[0]);

    return recsortt(a.slice(1), even, odd);
}

// Per Tiziano
function ex_11_I(a) {
    return sort(a);
}
function ex_11_R(a) {
    return recsort(a);
}