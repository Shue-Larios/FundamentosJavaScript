// selecciono el formulario por su id
const formulario = document.querySelector('#formulario')


formulario.addEventListener('submit', e => {
    // prevenir el evento default
    e.preventDefault()

    // creo variable con el valor del campo seleccionado por su clase
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

// aca seleccionamos r su clase 
    const alertaPrevia = document.querySelector('.alerta')
    // si existe esa clase la removemos
    if (alertaPrevia) {
        alertaPrevia.remove()
    }

    // createElement para generar codigo html
    const alerta = document.createElement('DIV')
    // classList sirve para agregar clases quitarlas o revisar si existe
    // add agrega una clase
    // remove quita una clase
    alerta.classList.add('alerta')

    if (nombre === '' || password === '') {
        // aca agrego contenido al textContent para que se vea en el html
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Todo bien..'
        alerta.classList.add('exito')
    }
    // appendChild es como agregar como hijo al formulario
    formulario.appendChild(alerta)
})