let div = document.querySelector('div');

console.log(Object.prototype.toString.call(div));

console.log(div.dataset);

console.log(div.dataset.cor);

////

div = document.querySelector('[data-cor]');

div = document.querySelector('[data-cor="azul"]');

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data
