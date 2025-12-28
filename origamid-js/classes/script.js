class Button{

    constructor(text, bg){

        this.text = text;
        this.bg = bg;
    }
    element(){

        let buttonElement = document.createElement('button');

        buttonElement.style.background = this.bg;

        buttonElement.innerText = this.text;

        return buttonElement;
    }
    static create(background) {
        const elementButton = document.createElement('button');
        elementButton.style.background = background;
        elementButton.innerText = 'Clique';
        return elementButton;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
    static blueButton(text) {
        return new Button(text, 'blue', 'white');
  }
}


let blueButton = new Button('Salvar', 'blue');

console.log(blueButton);

console.log(blueButton.element());

let redButton = Button.create('red');

console.log(redButton);

let contato = document.querySelector('#contato');

console.log(contato.elements);

blueButton.appendTo('#contato');

/////////////////////////////

const button = {
  get element() {
    return this._element;
  },
  set element(tipo) {
    this._element = document.createElement(tipo);
  }
}

button.element = 'button'; // set
button.element; // get (<button></button>);

console.log(button.element);


//////////////////

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = 'Banana';
frutas.nova = 'Morango';
frutas.lista; // ['Banana', Morango];

console.log(frutas.lista);

////////////////////////////


class Button2 {
  constructor(text) {
    this.text = text;
  }
  get element() {
    const elementType = this._elementType || 'button';
    const buttonElement = document.createElement(elementType);
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton2 = new Button2('Comprar');
blueButton.element; // retorna o elemento

console.log(blueButton2.element);

////////////////

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  acelerar() {
    super.acelerar();
    console.log('Muito');
  }
}

const honda = new Moto(2);
honda.acelerar();


/////////////////

class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
}

const honda = new Moto(4, 'Gasolina', true);

