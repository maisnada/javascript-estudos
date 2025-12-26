 /*
 let carro = {
    marca: 'marca',
    preco: 0
 }
*/

function Carro(marca, preco){

    this.marca = marca;
    this.preco = preco;
}

let honda = new Carro('Honda', 100);

let fiat = new Carro('Fiat', 150);

console.log(honda, fiat);

function Dom(seletor) {
    this.seletor = seletor;
    this.element = function(){
        
        return document.querySelector(this.seletor);
    },
    this.ativar = function(){

        let el = this.element();

        el.classList.add('ativo');
    }
}

let li = new Dom('li');
li.ativar();

let ul = new Dom('ul');
ul.ativar();

console.log(Carro.prototype);
console.log(honda.prototype);

console.log(honda);

Carro.prototype.andar = function(){

    return this.marca + ' andou';
}

console.log(Carro.prototype);
