console.log(document.forms);

console.log(document.forms[0]);

let contato = document.querySelector('#contato');

console.log(contato.elements);

console.log(contato.elements.nome);

console.log(contato.elements.nome.value);

contato.addEventListener('keyup', (event) =>{

    console.log(event.target.value);
}); 