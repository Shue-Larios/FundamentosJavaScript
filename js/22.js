// Selectores del DOM


// document hace referencia a todo el html que tenemos en la pagina

// querySelector trae solo un elemento
// querySelectorAll trae todos los elementos

// si quiero seleccionar una clase le pongo .clase
// si quiero seleccionar un id #id
// si quiero seleccionar elemento html solo le paso la etiqueta h2
const heading = document.querySelector('.heading')

// console.log(heading)
// console.log(heading.textContent)
// console.log(heading.tagName)
// console.log(heading.classList)
// console.log(heading.id)

const enlaces = document.querySelectorAll('.navegacion a')