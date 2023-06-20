// manipular elementos HTML con JS

const heading = document.querySelector('.heading')

// cambiar el contenido del textContent 
heading.textContent = 'Un Nuevo Heading'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
// para cambiar el valor en este caso de un input con id nombre
inputNombre.value = 'Un valor por default Shue'


const enlaces = document.querySelectorAll('.navegacion a')
// itero en cada uno de los enlaces y cambio el contenido del textContent
enlaces.forEach( enlace => enlace.textContent = `Nuevo Enlace`)
