// Ternarios
const autenticado = true

autenticado
    // la parte del if
    ? console.log('usuario autenticado')
    // la parte del else
    : console.log('No autenticado, dirigir hacia login')

// Doble ternario
const saldo = 600
const pagar = 800
const tarjeta = false

saldo > pagar
    ? console.log('Puedes pagar con saldo')
    : tarjeta
        ? console.log('Puedes pagar con tarjeta')
        : console.log('No no puedes pagar')