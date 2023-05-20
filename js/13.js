// Funciones - Function Expression
// una diferencia con la funcion declaration es que esta no se puede llamar antes de crearla
// en este tipo de funciones es la que se puede usar arrowfunction en la otra no

const sumar = function (numero = 0, numero2 = 0) {
    return numero + numero2
}

const resultado = sumar(30)
console.log(resultado)

// funcion con arrow function
// const sumar = (numero, numero2) => {
//     return {
//         resultado: numero + numero2,
//     }
// }
// const {resultado} = sumar(30, 5)
// console.log(resultado)