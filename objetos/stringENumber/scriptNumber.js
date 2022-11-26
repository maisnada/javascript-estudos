console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5 + 5));

console.log(Number.isInteger(56.2));

console.log(parseFloat('99.50'));
console.log(Number.parseFloat('66 Reais'));

console.log(Number.parseInt('99.50', 10));

let preco = 2.999

console.log(preco.toFixed());
console.log(preco.toFixed(2));

let valorFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

console.log(valorFormatado);

//arredonda para cima/baixo
console.log(Math.ceil(4.8), Math.floor(4.8));

//arredonda confome dizima
console.log(Math.round(4.3), Math.round(4.8));

console.log(Math.max(5, 10, 20), Math.min(5, 10, 20));

console.log(Math.random());

//entre 0 e 100
console.log(Math.floor(Math.random() * 100));

//entre 0 e 500
console.log(Math.floor(Math.random() * 500));