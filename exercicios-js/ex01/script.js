function carregar() {
    var msg = document.getElementById('text')
    var img = document.getElementById('imagem')
    var p = document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas'
    if (hora >= 6 && hora <= 12){
        img.src = 'imagens/imgmanha.jpg'
        p.innerHTML = 'Bom dia!' 
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18){
        img.src = 'imagens/imgtarde.jpg'
        p.innerHTML = 'Boa tarde!'
        document.body.style.background = '#b9846f'
    } else if(hora < 6 || hora > 18){
        img.src = 'imagens/imgnoite.jpg'
        p.innerHTML = 'Boa noite!'
        document.body.style.background = '#515154'
    }
}