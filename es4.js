/* Esercizio 4

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
        sumIntervalRec(b, a);
    }

    if (a == b)
        return a;
    
    return a + sumIntervalRec(a+1, b);
}


console.log('sumInterval(3, 5) : ' + sumInterval(3, 5));
console.log('sumIntervalRec(3, 5) : ' + sumIntervalRec(3, 5));