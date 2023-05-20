// Unir 2 objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
const cliente = {
    nombre: 'Juan',
    premium : true
}

// const nuevoObjeto = Object.assign(producto, cliente) // No
const nuevoObjeto2 = { 
    // la variable producto toma una copia del objeto producto ponerlo asi xk evitamos sobreescribir campos llamados iguales
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)