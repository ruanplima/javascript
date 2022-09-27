function contar() {
    let $num = document.getElementById('number')
    let $end = document.getElementById('end')
    let $jump = document.getElementById('jump')
    let $text = document.getElementById('cont')

    if ($num.value.length === 0 || $end.value.length === 0 || $jump.value.length === 0) {
        alert('[ERRO] Preencha corretamente os campos!')
        cont.innerHTML = '[ERRO]'
        cont.style.color = 'red'
    } else {
        cont.innerHTML = '<p>Contando: </p>'
        cont.style.color = 'black'

        let i = Number($num.value)
        let f = Number($end.value)
        let p = Number($jump.value)

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                $text.innerHTML += `${c} \u{1F449}`
            } 
            $text.innerHTML += `\u{1F3C1}`
        } else{
            for (let c = i; c >= f; c -= p){
                $text.innerHTML += `${c} \u{1F449}`
            }
            $text.innerHTML += `\u{1F3C1}`
        }
    }
}