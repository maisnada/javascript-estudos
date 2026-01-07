//destructuring

let carro = {
  marca: "ford",
  ano: 2010,
};

let { marca, ano } = carro;

console.log(marca, ano);

let frutas = ["uva", "morango"];

let [fruta1, fruta2] = frutas;

console.log(fruta1, fruta2);

function handleKeyboard(event) {
  console.log(event.key);
}
// Com Destructuring
function handleKeyboard({ key }) {
  console.log(key);
}

document.addEventListener("keyup", handleKeyboard);

/////////////////

function perimetro(lado, totalLados) {
  //se totalLados for undefined o valor default e 4
  totalLados = totalLados || 4;

  return lado * totalLados;
}

function perimetro2(lado, totalLados = 4) {
  return lado * totalLados;
}

console.log(perimetro(10));

console.log(perimetro(10, 2));

console.log(perimetro2(10));

console.log(perimetro2(10, 2));

//Rest
function ganhadores(premio, ...ganhadores) {
  console.log(premio);

  ganhadores.forEach((ganhador) => console.log(ganhador));
}

ganhadores("Carro", "Rosa", "Bruno", "Bob");

//Spread

let lanches = ["hamburger", "hotdog"];

let legumes = ["pimentao", "cebola"];

let comidas = [...lanches, "pizza", ...legumes];

console.log(comidas);

let links = document.querySelectorAll("a");

console.log(links);

console.log([...links]);
