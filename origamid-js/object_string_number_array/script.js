//string

let nome = 'marcelo';

console.log(nome.length);

console.log(nome[0]);

console.log(nome.charAt(1));

let sobrenmome = 'palmito';

console.log(nome.concat(' ', sobrenmome));

let frutas = 'Melancia, Laranja, Jaca';

console.log(frutas.includes('Laranja'));

console.log(nome.slice(0,3));

console.log(nome.slice(0,-1));

let listaItens = 'Camisas Bones Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens);

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

let listaItens2 = 'Camisas Bones Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' ');

arrayItens.forEach(i => console.log(i));

console.log(arrayItens.join('*'));

//number 

console.log(Number.isNaN('dd'));
console.log(Number.isNaN(5));

console.log(Number.isInteger(10));

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

console.log(10.48.toFixed());
console.log(10.856.toFixed(2));

const preco2 = 59.49;
let valor = preco2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

console.log(valor);

console.log(Math.max(1,5,8,4));

console.log(Math.min(1,5,8,4));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

//array

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11

let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array

const carros2 = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

const carrosArray = Array.from(carros2);

console.log(Array.isArray(carrosArray));

const carros3 = ['Ford', 'Fiat', 'VW'];
carros3.unshift('Honda', 'Kia'); // 5
carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros3.push('Ferrari'); // 6
carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];