/*
let img = document.querySelector('img');

img.addEventListener('click', (event) => {

  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);

  console.log('click');
});

*/

/*
let animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){

  console.log(event.currentTarget);
  console.log(event.target);
}

animaisLista.addEventListener('click', callbackLista);

let linkExterno = document.querySelector('a[href^="http"]');

function cbLinkExterno(event){

  event.preventDefault();

  console.log('click');

  console.log(this);

  console.log(this.getAttribute('href'));

  console.log(event.currentTarget);
}

linkExterno.addEventListener('click', cbLinkExterno);

window.addEventListener('scroll', (event) => console.log(event));

*/

window.addEventListener('keydown', (event)=>{

  if(event.key === 'f'){

    document.body.classList.toggle('fullscreen');
  }
});


let img = document.querySelectorAll('img');

img.forEach((img)=>{

  img.addEventListener('click', (event) => {

  console.log(event.currentTarget);
  
  });

});



// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

let linksInternos = document.querySelectorAll('a[href^="#"]');

function cblink(event){  

    event.preventDefault();

    linksInternos.forEach((l) => l.classList.remove('ativo'));

    this.classList.add('ativo');  
}

/*
Em funções “normais” (function)
O valor de this depende de como a função é chamada.

Em arrow functions (=>)
O valor de this depende de onde a função foi definida.

Arrow function não tem this.
Ela empresta o this de fora.
*/
linksInternos.forEach((link) => {

  link.addEventListener('click', cblink);

  /*  link.addEventListener('click', (event) => {

    event.preventDefault();

    linksInternos.forEach((l) => l.classList.remove('ativo'));

    event.target.classList.add('ativo');
  });  */

});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function cbElemento(event){

  console.log(event.target);

  event.target.remove();
}

document.body.addEventListener('click', cbElemento);

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function cbTecla(event){

  if(event.key === 't'){

    document.documentElement.classList.toggle('textoMaior');
  }
}

window.addEventListener('keydown', cbTecla);