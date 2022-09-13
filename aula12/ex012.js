var agora = new Date()
var atual = agora.getHours()

// var atual = 6

console.log(`Agora são exatamente ${atual} horas.`)

if(atual >= 6 && atual <= 12){
    console.log(`Bom dia!`)
} else if(atual >= 13 && atual <= 17){
    console.log(`Boa tarde!`)
} else if(atual >= 18 || atual <= 5){
    console.log(`Boa noite!`)
}