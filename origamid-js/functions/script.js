function somar(a,b){

  return a + b;
}

console.log(somar.length);
console.log(somar.name);

function darOi(nome, idade){

  console.log('Oi!' + nome + idade);
}

darOi.call(null, 'marcelo', 38);

/*
const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018
*/


const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10


const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(carro);
Object.seal(carro);
Object.preventExtensions(carro);

Object.isFrozen(carro); // true
Object.isSealed(carro); // true
Object.isExtensible(carro); // false
