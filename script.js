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
    const div = document.createElement('div')
    div.setAttribute('class', 'song')

    div.innerHTML = `
        <img src="assets/fontisto_apple-music.svg">
        
        <div>
            <h3>${song.title}</h3>
            <p>${song.author}</p>
        </div>

    `

    div.addEventListener('click', function(){
        console.log(song.title)
        document.getElementById('audio')
            .setAttribute('src', song.audio.url)
    
        document.getElementById('imagen')
        .setAttribute('src', song.image.url)

        document.getElementById('title').innerHTML = song.title

        document.getElementById('author').innerHTML = song.author
    })


    return div
}

const audio = document.getElementById('audio')

    document.getElementById('stop').addEventListener('click', function() {

        if(audio.paused){
            audio.play()
        }
        else{
            audio.pause()
        }
    })