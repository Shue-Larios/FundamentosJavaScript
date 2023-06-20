// Eventos del DOM - Clicks

const heading = document.querySelector('.heading')
// addEventListener es un detector de eventos en este caso el click
heading.addEventListener('click', () =>  {
    // aca le cambiamos el valor al textContent
    heading.textContent = 'Nuevo Heading al dar click'
})


// siempre que utilice querySelectorAll tengo que iterar con forEach
const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace')
    })
})
 