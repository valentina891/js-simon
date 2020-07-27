// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok)
// dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati

// 1. alert con n. casuali:

var random5 = [];
// for (var i = 0; i < 5; i++) {
//     random5.push(generaRandom(1,50));
// }
//
// console.log(alert(random5));
i = 0;

while (random5.length < 5) {
    var numero = generaRandom(1,50);
    if (trovaElemento(random5,numero) == false) {
        random5.push(numero);
    }
}
console.log(alert(random5));

// 2. 5 prompt con i numeri che si ricordano:

setTimeout(indovina,3000);

// 3. risultato dell'utente: quanti ne ha ricordati e quali:

var risultato = [];

if (alert(random5) == generaRandom(1,50)) {
    // console.log(random5);
}






// ***funzioni***

function generaRandom(min,max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

function trovaElemento(array,elemento) {
    var i = 0;
    while (i < array.length) {
        if (elemento == array[i]) {
            return true;
        }
    i++;
    }
    return false;
}

function indovina() {
  for (var i = 0; i < 5; i++) {
    prompt('Quali numeri sono apparsi poco fa?');
  }
}
