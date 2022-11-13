const listaAnimais = document.querySelector('.animais-lista');

//retorna tamanho do elemento na tela visível height + padding
console.log(listaAnimais.clientHeight);

//height + padding + border
console.log(listaAnimais.offsetHeight);

//tamanho total considerando o scroll
console.log(listaAnimais.scrollHeight);

//mesmas opções com width
console.log(listaAnimais.clientWidth);


const animais = document.querySelector('.animais');

//ditância entre o topo do elemento com topo da página
console.log(animais.offsetTop);

//ditância entre canto esquerdo do elemento e canto esq. da página
console.log(animais.offsetLeft);

document.addEventListener('scroll', () => console.log(animais.offsetTop));

//retorna um objeto com valores de ditâncias e dados adicionais como bottom
const rect = animais.getBoundingClientRect();

console.log(rect)

//width da janela
console.log(window.innerWidth);

//soma dev tools tbm
console.log(window.outerWidth);

//height da janela
console.log(window.innerHeight);

//soma barra de endereços
console.log(window.outerHeight);

//ditância total scroll horizontal
console.log(window.pageYOffset);

console.log(window.pageXOffset);

//mesma função que media-query do css
const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {

    console.log('Tela menor que 600px');
} else {

    console.log('Tela maior que 600px');
}


const primeiraImagem = document.querySelector('img');

console.log(`Distância entre o elemento ${primeiraImagem.src} e topo da página é ${primeiraImagem.offsetTop}`)


//soma após carrega todas as imagens
window.onload = () => {

    const listaDeImagens = document.querySelectorAll('img');

    let arr = Array.from(listaDeImagens);

    let sumWidthImagem = arr.reduce((ac, imagem) => ac + imagem.width, 0);

    console.log(`A soma das larguras das imgs é ${sumWidthImagem}`);
}


const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach((link) => {

    if (link.offsetHeight >= 46 && link.offsetWidth >= 46) {

        console.log(`Link ${link.textContent} segue especificação 46 x 46 px`);

    } else {

        console.log(`Link ${link.textContent} não segue ${link.offsetWidth} x ${link.offsetHeight}`);
    }
})

if (window.innerWidth < 720) {

    const menu = document.querySelector('.menu');

    menu.classList.add('menu-mobile');
}




