var dia = new Date()
var atual = dia.getDay()

// atual = 6

switch(atual){
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2: 
        console.log(`Terça`)
        break
    case 3: 
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6: 
        console.log(`Feliz Sábado!!`)
        break
    default:
        console.log(`ERRO`)
        break    
}