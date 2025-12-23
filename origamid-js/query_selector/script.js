const animais = document.getElementById('animais');

console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection);

let primeiraLi = document.querySelector('li');

console.log(primeiraLi);

const linkInterno = document.querySelector('[href^="#"]');

console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');

animaisImg.forEach((img)=> console.log(img));

// Retorne no console todas as imagens do site

let imagens = document.querySelectorAll('img');

imagens.forEach((img) => console.log(img.src));

// Retorne no console apenas as imagens que começaram com a palavra imagem

let imagens2 = document.querySelectorAll('img[src^="img/imagem"]');

imagens2.forEach((img) => console.log(img.src));

// Selecione todos os links internos (onde o href começa com #)

// Selecione o primeiro h2 dentro de .animais-descricao

let h2 = document.querySelector('.animais-descricao h2');

// Selecione o último p do site

let ultipoP = document.querySelector('p:last-child');

// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

let ps = document.querySelectorAll('p');

ps.forEach((p) => {

    console.log(p);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;

imgs.forEach(()=> {
  console.log(i++);

});

imgs.forEach(() => i++);

