var h = new Date()
var hora = h.getHours()
var p = document.getElementById('hora')
var image = document.getElementById('img')
p.innerHTML = (`Agora são ${hora} horas`)

image.style.borderRadius = '100%'
image.style.width = '200px'
image.style.height = '200px'

if (hora >= 6 && hora <= 12) {
    image.src = 'images/foto-manha.jpg'
    p.innerHTML += '<p>Bom dia!</p>'
    document.body.style.backgroundColor = '#C5854B'
} else if (hora >= 13 && hora <= 17) {
    image.src = 'images/foto-tarde.jpg'
    p.innerHTML += '<p>Boa tarde!</p>'
    document.body.style.backgroundColor = '#F5E390'
} else if(hora >= 18 && hora <= 23){
    image.src = 'images/foto-noite.jpg'
    p.innerHTML += '<p>Boa noite!</p>'
    document.body.style.backgroundColor = '#1E353D'
} else if(hora <= 5 && hora >= 0){
    image.src = 'images/foto-madrugada.jpg'
    p.innerHTML += '<p>Boa madrugada!</p>'
    document.body.style.backgroundColor = '#131720'
}