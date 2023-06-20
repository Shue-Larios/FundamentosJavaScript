// Eventos del DOM - Submit

// seleccionamos el formulario por el id

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    // previene la accion por default que es enviar
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    
    if(nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log('Todo bien, enviando...')
    }
}) 