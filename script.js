const modulosDoCurso = ['finaças', 'marketing', 'soft-skills', 'vendas']

let listaDePessoasEstudantes =[
    {
        nome : 'Júnior',
        idade: 35,
        cpf: 96780541087, 
        modulo: modulosDoCurso[0]
    },
]

const pessoaEstudante = {
    nome : 'Fayra',
    idade: 20,
    cpf: 91349341037, 
    modulo: modulosDoCurso[1]
}

const novaPessoaEstudante = {
    ...pessoaEstudante,
    nome : 'Flávia',
    idade: 30,
    cpf: 89349341037, 
    modulo: modulosDoCurso[2]
}


listaDePessoasEstudantes.push(pessoaEstudante)
listaDePessoasEstudantes.push(novaPessoaEstudante)

const menoresDeVinte = listaDePessoasEstudantes.filter((pessoa)=> pessoa.idade <= 20)

const somarIdade = listaDePessoasEstudantes.map((pessoa)=> pessoa.idade +1)

console.log(listaDePessoasEstudantes)
console.log(menoresDeVinte)
console.log(somarIdade)