// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// LO QUE MODIFICA EL ARRAY ORIGINAL NO HAY QUE UTILIZARLO MENOS SI USAMOS REACT

// Añadir elementos al array
// no utilizar ni push ni unshift especialmente si estoy utilizando React
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL') // Añade al inicio del array

// const nuevoArreglo = [...tecnologias, 'GraphQL'] // de esta forma si puedo agregar uno al final ESTA FORMA SI USARLA
// const nuevoArreglo = ['GraphQL', ...tecnologias] // de esta forma si puedo agregar uno al inicio ESTA FORMA SI USARLA

// Eliminar elementos del array
// no deben utilizarse con React
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 1) // Elimina de una posición en especifica


// filter retorna un nuevo arreglo
// const nuevoArray = tecnologias.filter( function(tech) {
// retorna todo lo que sea igual a 'React'
//     return tech === 'React'
// })

// Reemplazar del array
// no utilizar por que modifican en array original 
// reemplaza en la posicion indicada
// tecnologias[0] = 'GraphQL'


// map tambien trae un nuevo array
const nuevoArray = tecnologias.map(function (tech) {
    // si tech es igual a html retorna lo indicado esto para reemplazar un campo
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        // el resto lo agrega tal cual lo recibe 
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)