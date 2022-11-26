let nome = 'Rosa'

console.log(nome.length);

console.log(nome[0]);

console.log(nome.charAt(1));


const frutas = 'Melancia, Laranja e Uva';

console.log(frutas.includes('Banana'))

console.log(frutas.includes('Laranja'))


let setor = 'Tecnologia da Informação';

console.log(setor.slice(0, 3))

console.log(setor.slice(-3))

console.log(setor.indexOf('Info'))

console.log(setor.slice(setor.indexOf('Inf'), setor.lenght))


let gerencia = 'Secretaria Executiva';

console.log(gerencia.substring(0, 10));


//retorna primeira/última ocorrência
console.log(gerencia.indexOf('ta'), gerencia.lastIndexOf('a'));

let precos = ['R$ 10', 'R$ 120', 'R$ 15600']


precos.forEach((preco) => {

    console.log(preco.padStart(10, '.'))
})

precos.forEach((preco) => {

    console.log(preco.padEnd(10, '.'))
})


console.log('Z'.repeat(5))

console.log(gerencia.replace('Executiva', 'Acadêmica'))


let listaItens = 'Camisa Calça Bone'

let listaArray = listaItens.split(' ');

console.log(listaArray);

console.log(listaArray.join(' > '), listaArray.join(''))


//////

let transacoes = [
    {
        descricao: 'Placa vídeo',
        valor: 'R$ 120'
    },
    {
        descricao: 'Memória',
        valor: 'R$ 100'
    },
    {
        descricao: 'Placa mãe',
        valor: 'R$ 600'
    }
]

let total = 0

transacoes.forEach((transacao) => {

    let arr = transacao.valor.split(' ');

    total += parseInt(arr[1])
})

console.log(`Valor total: R$ ${total}`)


let transporte = 'Carro;Avião;Barco'

let transporteArray = transporte.split(';')

console.log(transporteArray);


let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Sobre</span></li>
            </ul>`

console.log(html.replaceAll('span', 'a'));

console.log(html.split('span').join('a'));


