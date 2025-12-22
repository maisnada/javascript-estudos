let anoNascimento = 1987;
let habilitado = true;
let ppd = false;

const anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;

let msg = '';

if(idade >= 18 && (habilitado || ppd)){

    msg = 'Pode dirigir!';

}else{

    msg = 'Não pode dirigir!';   
}

console.log(`Status: ${msg}`);

switch(msg){

    case 'Pode dirigir!':
        
        console.log('Verifique a categoria!');

        break;

    default:

        console.log('Não atende os requisitos!');
} 