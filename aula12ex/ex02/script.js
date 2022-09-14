function verificar(){
    var data = new Date()
    var atual = data.getFullYear()
    var p = document.getElementById('res')
    var ano = document.getElementById('txtano')
    var idade = Number(ano.value)
    var $idade = atual - idade
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    img.style.width = '300px'
    img.style.height = '300px'
    img.style.borderRadius = '100%'
    img.style.marginTop = '10px'

    var $radsex = document.getElementsByName('radsex')
    var $genero = ''
    if($radsex[0].checked){
        $genero = 'Homem'
        if($idade >= 1 && $idade <= 10){
            img.setAttribute('src' , 'images/bebe-homem.jpg')
        } else if($idade > 10 && $idade < 27){
            img.setAttribute('src' , 'images/jovem-homem.jpg')
        } else if ($idade >= 27 && $idade < 50){
            img.setAttribute('src' , 'images/adulto-homem.jpg')
        } else{
            img.setAttribute('src' , 'images/idoso-homem.jpg')
        }
    } else{ 
        $genero = 'Mulher'
        if($idade >= 1 && $idade <= 10){
            img.setAttribute('src' , 'images/bebe-mulher.jpg')
        } else if($idade > 10 && $idade < 27){
            img.setAttribute('src' , 'images/jovem-mulher.jpg')
        } else if ($idade >= 27 && $idade < 50){
            img.setAttribute('src' , 'images/adulto-mulher.jpg')
        } else{
            img.setAttribute('src' , 'images/idoso-mulher.jpg')
        }
    }

    if(idade <= 0 || idade > atual){
        p.innerHTML = '<p>[ERRO] Verifique os dados corretamente</p>'
        p.style.color = 'red'
    } else{
        p.innerHTML = `<p>Detectamos ${$genero} com ${$idade} anos</p>`
        p.style.color = 'black'
        p.appendChild(img)
    }
}