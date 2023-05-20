// Funciones - Function Declaration

// numero y numero2 se le conoce como parametros
// el = 0 en los numeros se conoce como parametro por default
// function sumar(numero = 0, numero2 = 0) {
//     console.log(numero + numero2)
// }
// asi le pongo los valores a la funcion de arriba
// sumar()
// estos valores que le mando a la funcion son argumentos
 //sumar(10, 20)
// sumar(2, 3)
// sumar(100)

function sumar(numero = 0, numero2 = 0) {
   return { 
       resultado: numero + numero2, 
       mensaje: 'Hola Mundo'
    }
}

const {resultado, mensaje} = sumar(20, 30)

console.log(resultado)
console.log(mensaje)
