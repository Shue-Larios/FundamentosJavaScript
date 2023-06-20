// Scope

const precio = 300

function unaFuncion() {
    const precio = 600
    // este log toma el que esta dentro de la funcion sino hay toma el global
    console.log(precio)
}

if(true) {
    // este log toma el global (fuera de la funcion)
    console.log(precio)
}


unaFuncion()