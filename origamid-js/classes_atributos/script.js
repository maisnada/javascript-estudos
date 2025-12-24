let menu = document.querySelector('.menu');

console.log(menu.classList);

menu.classList.add('ativo', 'teste');

menu.classList.remove('teste');

menu.classList.toggle('ativo');

menu.classList.toggle('ativo');

if(menu.classList.contains('ativo')){

  menu.classList.add('estaAtivo');
}

let animais = document.querySelector('.animais');

console.log(animais.attributes);


let img = document.querySelector('img');

console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

img.setAttribute('alt', 'Raposa');

if(img.hasAttribute('alt')){

  console.log('possui alt');
}