let carros = ["gol", "fox"];

console.log(carros, carros.length);

let lista = document.querySelectorAll("li");

console.log(lista);

let listaArray = Array.from(lista);

console.log(listaArray);

let obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

console.log(Array.from(obj));

console.log(Array.isArray(lista), Array.isArray(listaArray));

//cria array add o item
console.log(Array.of(10));

//cria array com 10 posições
console.log(Array(10), new Array(10));

let idades = [10, 5, 35, 34, 60];

let idadesOrdenado = idades.sort();

//em números ordena apenas pelo caracter
console.log(idadesOrdenado);

//add elemento no início do array
idades.unshift(25);
console.log(idades);

//add elemento no final
idades.push(70);
console.log(idades);

//remove elemento no início do array e retorna
console.log(idades.shift());

//remove elemento no final
console.log(idades.pop());

/*
[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. 
Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
O retorno é o elemento removido
*/

const carros2 = ["Ford", "Fiat", "VW", "Honda"];

//add item a partir da segunda posição sem deletar
//carros2.splice(2, 0, 'Fusca')

console.log(carros2);

//add item na posição 2 e remove 1
console.log(carros2.splice(2, 1, "Fusca.."));

console.log(carros2);

//preenche posições com valor definido
console.log(carros2.fill("Carros"));

let transporte1 = ["Carro", "Trem", "Van", "Trem"];

let transporte2 = ["Navio", "Barco"];

//concat array
console.log(transporte1.concat(transporte2));

//check array contem item
console.log(transporte1.includes("Carro"), transporte1.includes("Moto"));

//procura e retorna posição do primeiro/ultimo item
console.log(transporte1.indexOf("Trem"), transporte1.lastIndexOf("Trem"));

//retorna string contac os item
console.log(transporte1.join(">"));

/*retornar itens considerando inicio e fim - começa pelo item 1 e vai até o 3
sem parametros é utilizado para clonar array*/
console.log(transporte1.slice(1, 3));

/////

const fabricantes = ["Ford", "Fiat", "VW"];

fabricantes.forEach((fabricante) => {
  console.log(fabricante);
});

const localidade = fabricantes.map((fabricante) => `${fabricante} - BR`);

console.log(localidade);

const gastos = [10, 20, 30];

let total = gastos.reduce((ac, valor) => {
  return ac + valor;
});

console.log(total);

let total2 = gastos.reduce((ac, valor) => {
  return valor;
}, 100);

console.log(total2);

let criaObjeto = gastos.reduce((ac, valor, index) => {
  ac[index] = valor;

  return ac;
}, []);

console.log(criaObjeto);

//se pelo menos um return da iteração for truthy, retorna true
console.log(gastos.some((gasto) => gasto === 10));

//se um dos itens retornar falsy, retorna false
console.log(gastos.every((gasto) => gasto >= 20));

/*
[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. 
Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
*/
const frutas = ["Banana", "Pêra", "Uva", "Maçã"];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
}); // 2

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find((x) => x > 45); // 88

//retorna array dos itens que retornarem como truthy
console.log(numeros.filter((numero) => numero > 40));
