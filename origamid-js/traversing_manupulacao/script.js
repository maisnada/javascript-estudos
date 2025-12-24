
let listaAnimais = document.querySelector('.animais-descricao');

/*console.log(listaAnimais.innerHTML);
console.log(listaAnimais.innerText);*/

let h1 = document.querySelector('h1');

h1.innerHTML = 'Opa';

/*
menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags
*/

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

console.log(lista.parentElement.parentElement);
console.log(lista.previousElementSibling);
console.log(lista.nextElementSibling);

console.log(lista.children);

console.log(lista.firstChild); // primeiro node child
console.log(lista.childNodes); // todos os node child


const titulo = contato.querySelector('.titulo');

//contato.insertBefore(lista, titulo); // insere a lista antes de titulo
//*contato.appendChild(lista); // move lista para o final de contato
//contato.removeChild(titulo); // remove titulo de contato
//contato.replaceChild(lista, titulo); // substitui titulo por lista*/


const animais = document.querySelector('.animais');

let novoh1 = document.createElement('h1');

novoh1.innerText = 'Novo titulo';

novoh1.classList.add('titulo');

animais.appendChild(novoh1);
