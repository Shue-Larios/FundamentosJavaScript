// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value)
})




// aca escucho por el input de clase password
const inputPassword = document.querySelector('.password')

// funcionPassword a esta funcion no le pongo () xk esto la ejecuta de un solo 

inputPassword.addEventListener('input', funcionPassword)

// funcion para cambiar el tipo de text cuando stas escribiendo el password
function funcionPassword() {
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 100);
}