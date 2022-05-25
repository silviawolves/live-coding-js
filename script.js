'use strict'

const numeriInseriti = []
const numeriDispari = []

do {
    const numeroUtente = prompt("Inserisci un numero")
    numeriInseriti.push(numeroUtente)

    if (numeroUtente % 2 !== 0) {
        numeriDispari.push(numeroUtente)
    }

} while (numeriInseriti.length < 6)

console.log("array con tutti i numeri: " + numeriInseriti.join(', '))
console.log("array con numeri dispari: " + numeriDispari.join(', '))

/*
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/