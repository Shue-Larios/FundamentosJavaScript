// Fetch API es el nuevo ajax

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    fetch(url)
    // .then es para poder ejecutar los promises
    // respuesta => respuesta.json()  aca le digo que quiero q me regrese la respuesta como json
        .then( respuesta => respuesta.json())
        // aca como ya tengo un resultado itero para mostrarlouno x uno
        .then( resultado => {
            resultado.forEach( comentario => {
                console.log(comentario)
            })
        })
}
// llamo la funciona
consultarAPI(); 
