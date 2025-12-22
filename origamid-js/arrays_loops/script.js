let frutas = ['Melancia', 'Jaca', 'Morango'];

console.log(frutas);

console.log(frutas.pop());

frutas.push('Kiwi');

console.log(frutas);

for(let x = 0; x < frutas.length; x++){

    console.log(`Frutas[${x}] = ${frutas[x]}`);
}

console.log('\n');

let y = 0;

while(y < frutas.length){
    
    console.log(`Frutas[${y}] = ${frutas[y]}`);

    y++;
}

console.log('\n');

frutas.forEach(function(item, index){

    console.log(index, item);
});

console.log('\n');

frutas.forEach((item, index) => {
    
    console.log(index, item);
});
console.log('\n');


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let anosCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

anosCopa.forEach((ano) => console.log(`O brasil ganhou a copa de ${ano}`));

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas2 = ['Banana', 'Maca', 'Pera', 'Uva', 'Melancia'];

for(let i=0; i < frutas2.length; i++){

    console.log(frutas2[i]);

    if(frutas2[i] === 'Pera'){

        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let ultimaFruta = frutas2[frutas2.length - 1];

console.log(ultimaFruta);
