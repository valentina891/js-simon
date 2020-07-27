// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert,
// parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati

// 1. alert con n. casuali:

var random5 = [];
for (var i = 0; i < 5; i++) {
    random5.push(generaRandom(1,50));
}

console.log(alert(random5));














// ***funzioni***

function generaRandom(min,max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}
