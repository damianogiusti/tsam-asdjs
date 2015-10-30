/* Esercizio 10

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
    
    return [a, recreplicate(a, n-1)];
}

console.log('replicate(3, 4) : ' + replicate(3, 4));
console.log('recreplicate(3, 4) : ' + recreplicate(3, 4));