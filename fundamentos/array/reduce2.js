const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce((acc, atual) =>  {
    console.log(acc,atual )
    return acc + atual 
}, 10)

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (acumulador, bolsista) => acumulador && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (acumulador, bolsista) => acumulador || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
