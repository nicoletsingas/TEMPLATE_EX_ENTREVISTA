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

listaDePessoasEstudantes.push(pessoaEstudante);

//console.log(listaDePessoasEstudantes);

let copia = pessoaEstudante;

console.log(copia);

copia = {
    nome: 'Nicole',
    idade: 24,
    cpf: 46842614848,
    modulo: modulosDoCurso[3],
}

//console.log(copia);
//console.log(pessoaEstudante);

listaDePessoasEstudantes.push(copia);
//console.log(listaDePessoasEstudantes);

const novoArray = listaDePessoasEstudantes.filter((pessoa) => pessoa.idade > 20);

console.log(novoArray);

const novaIdade = listaDePessoasEstudantes.map((estudante) => estudante.idade + 1);

console.log(novaIdade);