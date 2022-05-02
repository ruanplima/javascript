function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - fano.value
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        } else{
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com a idade calculada: ${idade}`
    }

}