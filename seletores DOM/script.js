const titulo = document.getElementById("titulo");
console.log(titulo);

const texto = document.getElementsByClassName("texto-simples");
console.log(texto);
// Para selecionar o conteudo dentro do array, basta passar entre [] o indice do conteudo, por exemplo: [1]
const segundoTitulo = document.querySelector("div h2");
console.log(segundoTitulo);
// Para selecionar o conteudo dentro do array, basta passar entre [] o indice do conteudo, por exemplo: [1]
const textosPorClasse = document.querySelectorAll(".texto-simples");
console.log(textosPorClasse);