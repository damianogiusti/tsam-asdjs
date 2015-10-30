/* Esercizio 2

Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

// O(n)
function sumn(n) {
    var sum = 0;
    for (var i=1; i<=n; (( (i+1) % 2 != 0 ) ? i++ : i+=2) ) {
        sum += i;
    }
    return sum;
}

// versione per scemi
function ssumn(n) {
    var sum = 0;
    for (var i=1; i<=n; i++) {
        if (i%2 != 0) {
            sum += i;
        }
    }
    return sum;
}

// versione ricorsiva
function recsumn(n) {
    // se il numero è negativo o 0
    // termino la ricorsione
    if (n <= 0)
        return 0;

    // se il numero è pari passo al primo dispari
    if (n % 2 == 0)
        return recsumn(n-1);
    
    return n + recsumn(n-2);
}

console.log('sumn: ' + sumn(6));
console.log('recsumn: ' + recsumn(6));