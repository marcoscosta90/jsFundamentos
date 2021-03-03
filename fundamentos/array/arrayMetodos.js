const pilotos = ['Vettel', 'Alonso', "Raikonen", 'Massa' ]
pilotos.pop() //massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstapen') // adiciona no final
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no começo
console.log(pilotos)

//splice pode adicionar e remover elemtnos

//adicionar 
pilotos.splice(2, 0 , 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)