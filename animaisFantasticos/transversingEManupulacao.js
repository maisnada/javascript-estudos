const lista = document.querySelector('.animais-descricao');

console.log(lista);

//todos texto + tags do elemento
console.log(lista.innerHTML);

//todo texto apenas
console.log(lista.innerText);

//todo html do elemento
console.log(lista.outerHTML);


//TRASVERSING - navegacao no DOM

const listaAnimmais = document.querySelector('.animais-lista');

console.log(listaAnimmais);

//retorna pai do elemento
console.log(listaAnimmais.parentElement)

//retorna pai do pai do elemento...
console.log(listaAnimmais.parentElement.parentElement)

//proximo elemento no mesmo nivel
console.log(listaAnimmais.nextElementSibling)

//elemento anterior no mesmo nivel ou superior
console.log(listaAnimmais.previousElementSibling)

// HTMLCollection com os filhos
console.log(listaAnimmais.children);

const somenteLis = listaAnimmais.querySelectorAll('li');

console.log(somenteLis);

const ultimoLi = listaAnimmais.querySelector('li:last-child');

console.log(ultimoLi);

//retorna uma NodeList com Element, texto, comentario, quebra de linha, tudo...
console.log(listaAnimmais.childNodes);

//retorna Node acima (text - espaco em brenco)
console.log(listaAnimmais.previousSibling);

const contato = document.querySelector('.contato');

const titulo = contato.querySelector('.titulo');

const animais = document.querySelector('.animais');

//contato.insertBefore(animais, titulo);

//add elemento no final do elem selecionado
//listaAnimmais.appendChild(titulo);

//remove
//contato.removeChild(titulo)

//para criar novo elemento
const mapa = document.querySelector('.mapa');

contato.replaceChild(mapa, titulo);

const novoTitulo = document.createElement('h1');

novoTitulo.innerText = 'Título criado ;D';

novoTitulo.classList.add('titulo');

mapa.appendChild(novoTitulo);


const h1 = document.querySelector('h1');

const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');

faq.appendChild(cloneH1);