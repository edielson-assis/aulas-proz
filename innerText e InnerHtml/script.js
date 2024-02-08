const titulo = document.querySelector("#titulo");
titulo.innerText = "Proz";

const link = document.querySelector("a");
link.innerText = "Nosso site";

const listaOrdenada = document.querySelector("#lista-ordenada");
listaOrdenada.innerHTML = `
    <li><a href="#">Quem somos</a></li>
    <li><a href="#">Cursos</a></li>
    <li><a href="#">Unidades</a></li>
`;

const h2 = document.querySelector("h2");
h2.innerText = "Serviços";

const listaNaoOrdenada = document.querySelector("ul");
listaNaoOrdenada.innerHTML = `
    <li>Curso técnico</li>
    <li>Curso de capacitação</li>
    <li>Preparaçao para certificação</li>
`;