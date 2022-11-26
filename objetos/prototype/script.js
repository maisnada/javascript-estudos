function Pessoa(nome, idade) {

    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function () {

    console.log('...');
}

let aluno = new Pessoa('Marcelo', 35);

console.log(Pessoa.prototype)

console.log(aluno);

aluno.andar();

let nome = String('Rosa');

console.log(nome);

const animais = ['Cachorro', 'Gato'];

console.log(animais);

console.log(animais.constructor.name);
console.log(aluno.constructor.name);

console.log(nome.constructor.name);
