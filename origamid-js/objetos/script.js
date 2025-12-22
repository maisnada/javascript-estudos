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