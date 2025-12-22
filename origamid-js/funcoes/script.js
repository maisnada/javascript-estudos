 
 function isMaiorDeIdade(idade){

    let ano = new Date().getFullYear();

    return idade >= 18 ? true : false;
 }

 if(isMaiorDeIdade(18)){

    console.log('É maior de idade!');

}else{

    console.log('Menor de idade!');
}

addEventListener('click', function(){ console.log('Clicou!');});

addEventListener('click', () => { console.log('Clicou 2');});

function isVagaPreferencial(anoNascimento){

    let anoAtual = new Date().getFullYear();

    if(typeof anoNascimento === 'number' && !isNaN(anoNascimento)){

        if((anoAtual - anoNascimento) >= 60){
    
            return true;
        }

        return false;
    }

    throw new TypeError('Tipo inválido! Esperado tipo number!');
}

try{

    //let ano = prompt('Informe ano de nascimento:');
    let ano = 1965;

    if(isVagaPreferencial(parseInt(ano))){

        console.log('Pode solicitar credencial');

    }else{

        console.log('Não pode solicitar credencial');
    }    

}catch(error){

    console.log(error.message);
}

var x = 'a';

function teste(){

    console.log(x);
}

teste();


// Crie uma função para verificar se um valor é Truthy

function isTruthy(value){

    if(value){

        return true;
    }

    return false;
}

console.log(isTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){

    return lado * 4;
}

console.log(`Perimetro do quadrado de lado igual a 4 é ${perimetroQuadrado(4)}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function fullName(firstName, lastName){

    return `${firstName} ${lastName}`;
}

console.log(`Your full name é ${fullName('Marcelo','Palmito')}`)

// Crie uma função que verifica se um número é par

function isEvenNumber(value){

    return value % 2 == 0 ? true : false;
}

console.log(isEvenNumber(7));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function getTypeVariable(variable){

    return typeof variable;
}

console.log(`Type is ${getTypeVariable(false)}`)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){

    console.log('Rosa Linda');
});