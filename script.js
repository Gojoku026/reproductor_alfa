// Pedimos la informacion al servidor con axios
// El protocolo HTTP
axios.get('https://api.institutoalfa.org/api/songs')

// Cuando la informacion esta lista se activa el .then
// La funcion recibe uan respuesta, que puedo manejar
.then(function (respuesta) {
    
    // Mostrar por consola
    console.log(respuesta);

    // Guarda en cacnciones lo que venga de la respuesta
    const canciones = respuesta.data.songs

    // .map mapeo, recorre o descompone las canciones
    canciones.map(function (cancion) {
        // Lo que este aqui adentro se va a repetir en toda la lista
        console.log(cancion.title)
        document.getElementById('container').appendChild(CrearComponenteCancion(cancion))
    })
  })

//Creo un componente cancion y la regreso 
function CrearComponenteCancion (song){
    const li = document.createElement('li')
    li.setAttribute('class', 'song')

    li.innerHTML = `
        <img src="assets/fontisto_apple-music.svg">
        
        <div>
            <h3>${song.title}</h3>
            <p>${song.author}</p>
        </div>

    `

    return li
}




console.log(CrearComponenteCancion(song))