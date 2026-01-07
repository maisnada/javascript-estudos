/*
window.history.pushState(null, null, "sobre.html");

window.addEventListener("popstate", () => console.log("voltar"));
*/

async function fetchPage(url) {
  const pageReponse = await fetch(url);
  const pageText = await pageReponse.text();

  replaceContent(pageText);
}

function replaceContent(text) {
  let newHtml = document.createElement("div");

  newHtml.innerHTML = text;

  let oldContent = document.querySelector(".content");

  let newContent = newHtml.querySelector(".content");

  oldContent.innerHTML = newContent.innerHTML;

  document.title = newHtml.querySelector("title").innerText;
}

let links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();

  //console.log(event.target.href);

  fetchPage(event.target.href);

  window.history.pushState(null, null, event.target.href);
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

links.forEach((link) => link.addEventListener("click", handleClick));
