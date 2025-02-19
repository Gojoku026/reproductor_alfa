const song = {
    _id: '1',
    author: 'Imagine Dragons',
    tittle: 'Take Me To The Beach',
    duracion:'2:47',
    audio: {
        id:'',
        url: '',
        filename:'',
    },
    image: {
        id:'',
        url: '',
        filename:'',
    }
}

function CrearComponenteCancion (song){
    const li = document.createElement('li')
    li.setAttribute('class', 'song')

    li.innerHTML = `
        <img src="assets/fontisto_apple-music.svg">
        
        <div>
            <h3>${song.tittle}</h3>
            <p>${song.author}</p>
        </div>

    `

    return li
}

document.getElementById('container').appendChild(CrearComponenteCancion(song))
console.log(CrearComponenteCancion(song))