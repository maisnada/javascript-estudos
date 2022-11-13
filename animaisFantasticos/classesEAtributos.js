/*
const menu = document.querySelector('.menu');

console.log(menu);

menu.classList.add('ativo', 'destaque');

menu.classList.remove('destaque');

menu.classList.toggle('destaque');

if (menu.classList.contains('ativo')) {

    menu.classList.add('subtitulo')
}


const animais = document.querySelector('.animais');

console.log(animais.attributes['id']);

const img = document.querySelector('img');

console.log(img);

console.log(img.getAttribute('src'));

img.setAttribute('alt', 'Descricao img');

console.log(img);

console.log(img.hasAttribute('alt'))

img.removeAttribute('alt')
*/

const menu = document.querySelectorAll('.menu ul li');

console.log(menu);

menu.forEach(item => item.classList.add('ativo'))

menu.forEach((item, index) => {

    if (index !== 0)

        item.classList.remove('ativo')
});

const imagens = document.querySelectorAll('img');

imagens.forEach(imagem => {

    if (!imagem.hasAttribute('alt'))

        console.log(imagem)
})

const linkExterno = document.querySelector('.menu a[href^="https"]');

console.log(linkExterno)

linkExterno.setAttribute('href', 'https://www.univali.br')

linkExterno.textContent = ';D';

