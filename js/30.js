// Fetch API  - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async () => {
    // await bloquea el codigo hasta que tiene una respuesta y asi pasa la siguiente linea
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    // para iterar en cada uno
    resultado.forEach(comentario => {
        console.log(comentario);
    });
}
consultarAPI();
