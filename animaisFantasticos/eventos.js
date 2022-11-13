
const img = document.querySelector('img');

function cbClicou(event) {

    let currentTarget = event.currentTarget;
    let target = event.target;
    let type = event.type;
    let path = event.path

    console.log(currentTarget, target, type, path);
}

img.addEventListener('click', cbClicou);

const linkExterno = document.querySelector('a[href^="https"]');

linkExterno.addEventListener('click', (event) => {

    event.preventDefault();

    console.log(linkExterno.href);

})

const titulo = document.querySelector('h1');

function cbTitulo(event) {

    console.log(this);

    console.log(this.getAttribute('class'));
}

titulo.addEventListener('click', cbTitulo);

function handleKeyboard(event) {

    let body = document.querySelector('body');

    console.log(event.key);

    if (event.key === 'd') {

        body.classList.add('dark');
    } else {

        body.classList.remove('dark');
    }


}

window.addEventListener('keydown', handleKeyboard);