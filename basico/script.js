let nome = 'Marcelo';

let sobreNome = 'Palmito';

console.log(`${nome} ${sobreNome}`);

function teste() {

    return 10;
}

console.log(teste());

function isTruthy(valor) {

    if (valor !== 0 && valor !== '' && !isNaN(valor))

        return true;

    return false;
}

console.log(isTruthy(20));

function perimetro(ladoA, ladoB) {

    return (ladoA ** 2) + (ladoB ** 2)
}

console.log(perimetro(2, 2));

function nomeCompleto(nome, sobreNome) {

    return `Nome completo: ${nome} ${sobreNome}`;
}

console.log(nomeCompleto('Marcelo', 'Palmito Moreno'));

function isPar(valor) {

    return valor % 2 == 0 ? true : false;
}

console.log(isPar(3));

document.addEventListener('scroll', function () {
    console.log('Evento!');
});

let pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Palmito',
    idade: 35,
    nomeCompleto() {

        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(window);

