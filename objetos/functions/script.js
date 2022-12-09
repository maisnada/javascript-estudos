/*Toda função é criada com o construtor Function e por isso
herda propriedades e métodos
prototype Function*/

const teste = new Function("lado", "return 2");

function somar(n1, n2) {
  return n1 + n2;
}

//retorna número de argumentos e nome da função
console.log(somar.length, somar.name);

console.log(somar);

/*
function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos 
uma nova referência ao this da mesma.
*/
const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018
