let valores = [8, 1, 9, 4, 6, 2, 3]

/*for(v = 0; v < valores.length; v++){
    valores.sort()
    console.log(valores[v])
}*/

for(let pos in valores){
    valores.sort()
    console.log(valores[pos]) 
}

let pof = valores.indexOf(9)
console.log(pof)
