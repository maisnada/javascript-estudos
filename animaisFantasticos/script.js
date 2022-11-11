let animais = document.getElementById('animais');

//lista se atualiza mesmo após seleção e retornam HTMLCollection (Array-like)
const gridSection = document.getElementsByClassName('grid-section');

const ul = document.getElementsByTagName('ul');

console.log(animais);

console.log(gridSection);

console.log(ul);

//lista estática e retorna Element
const primeiraUl = document.querySelector('ul');

const primeiraLi = primeiraUl.querySelector('li');

//seleção via atributo
const primeiroLink = document.querySelector('[href^="#"]');

console.log(primeiraUl);

console.log(primeiraLi);

console.log(primeiroLink.href);


//returna NodeList<Element>
const titulos = document.querySelectorAll('.titulo');

const fotosAnimais = document.querySelectorAll('.animais-lista img');

console.log(titulos[0].textContent);

console.log(fotosAnimais);

//Array-like não possui este método
fotosAnimais.forEach((i, index) => (

    console.log(`Imagem ${index} - ${i.src}`)
));

//transformar Array-like em ar ray
let array = Array.from(gridSection);


let filtroImagens = document.querySelectorAll('img[src^="img/imagem"]');

filtroImagens.forEach((i) => {

    console.log(i)
});

let subTitulo = document.querySelector('.animais-descricao h2');

console.log(subTitulo.textContent);

let paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);