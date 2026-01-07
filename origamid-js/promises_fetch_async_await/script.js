let promesa = new Promise((resolve, reject) => {
  let result = true;

  if (!result) {
    setTimeout(() => resolve("OK"), 2000);
  } else {
    reject("Erro");
  }
});

console.log(promesa);

/* promesa
  .then((result) => {
    console.log(1, result);

    return result; 
  })
  .then((result) => console.log(2, result)); */

/*
.then retorna Promise. Para resolver basta realziar o return (j� implicito)
promesa.then((result) => result + "K").then((result) => console.log(2, result));
*/

/* promesa
  .then((result) => {
    console.log(1, result);

    return result;
  })
  .then((result) => console.log(2, result))
  .catch((rejeitada) => console.log("rejeitada")); */

/*catch pode ser adcionado como 2� parametro do then*/
promesa
  .then(
    (result) => {
      console.log(1, result);

      return result;
    },
    (rejeitada) => console.log("rejeitada")
  )
  .finally(() => console.log("executa com resolve ou reject"));

let login = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Login OK"), 1000);
});

let dados = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Dados OK"), 2000);
});

//Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada.
let tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then((respostas) => console.log(respostas));

//Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada
let carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then((resposta) => {
  console.log(resposta); // Login Efetuado
});

let doc = fetch("./doc.txt");

console.log(doc);
/* 
doc.then((response) => {
  console.log(response);

  response.text().then((body) => console.log(body));
});
 */
doc
  .then((response) => response.text())
  .then((body) => {
    console.log(body);

    let conteudo = document.querySelector(".conteudo");

    conteudo.innerText = body;
  });

let dog = fetch("https://dog.ceo/api/breeds/image/random");

dog.then((response) => response.text()).then((body) => console.log(body));

let dog2 = fetch("https://dog.ceo/api/breeds/image/random");

dog2
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    let img = document.querySelector(".cachorro");
    img.setAttribute("src", json.message);
  });

let imagem = fetch("./teste.png");

imagem
  .then((response) => response.blob())
  .then((body) => {
    console.log(body);

    let blobUrl = URL.createObjectURL(body);

    console.log(blobUrl);

    let blobImg = document.querySelector(".blob");
    blobImg.setAttribute("src", blobUrl);
  });

/*
setInterval(() => {
  let dog2 = fetch("https://dog.ceo/api/breeds/image/random");

  dog2 
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      let img = document.querySelector(".cachorro");
      img.setAttribute("src", json.message);
    });
}, 3000);*/

/////

let payload = {
  name: "Apple MacBook Pro 16",
  data: {
    year: 2019,
    price: 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
  },
};

const url = "https://api.restful-api.dev/objects";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(payload),
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

/////

//JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.

const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

const enderecoOBJ = {
  cidade: "Rio de Janeiro",
  rua: "Ali Perto",
  pais: "Brasil",
  numero: 50,
};
const enderecoJSON = JSON.stringify(enderecoOBJ);

async function listaPcs() {
  try {
    let response = await fetch("https://api.restful-api.dev/objects");

    let json = await response.json();

    console.log(json);
  } catch (erro) {
    console.log(erro);
  }
}

listaPcs();
