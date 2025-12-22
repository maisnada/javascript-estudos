let pessoa = {
    nome: 'Marcelo',
    idade: 38,
    graduado: true,
    maiorIdade: function(){

        return this.idade >= 18 ? true : false;
    }
};

console.log(typeof pessoa);

console.log(pessoa);

console.log(pessoa.nome);

console.log(pessoa.maiorIdade());


let quadrado = {
    lados: 4,
    perimetro(lado){

        return this.lados * lado;
    }
}

console.log(quadrado.perimetro(2));


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let cadastro = {
    nome: 'Marcelo',
    sobrenome: 'Palmito',
    idade: 38,
    nomeCompleto(){

        return `${this.nome} ${this.sobrenome}`
    },
}

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    viuHomem(){

        console.log('latir')
    }
}

