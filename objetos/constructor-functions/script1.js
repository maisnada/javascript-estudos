/* const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativo() {
        this.element().classList.add('ativo');
    }
}

Dom.ativo();
Dom.seletor = 'ul';
Dom.ativo(); */


function Dom(seletor) {

    this.seletor = seletor;

    this.element = function () {
        return document.querySelector(this.seletor);
    }

    this.ativo = function (classe) {
        this.element().classList.add(classe);
    }
}

let item = new Dom('li');

//item.ativo('ativo-i');

let lista = new Dom('ul');

//lista.ativo('ativo-l');

////////////////

function ManipiladorDom(element) {

    this.element = element;

    this.elements = function () {

        return document.querySelectorAll(this.element);
    }

    this.addClass = function (classe) {

        this.elements().forEach((e) => e.classList.add(classe));
    }

    this.removeClass = function (classe) {

        this.elements().forEach((e) => e.classList.remove(classe));
    }
}

let manipuladorDom = new ManipiladorDom('li');

console.log(manipuladorDom.elements());

manipuladorDom.addClass('selected');

manipuladorDom.removeClass('disable');