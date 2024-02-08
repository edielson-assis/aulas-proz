
let button = document.querySelector("button");
let span = document.querySelector("span");
let section = document.querySelector("section");

/**
 * Nesse exemplo, mostraremos o uso dos quatro principais eventos do mouse, 
 * usando o botão como elemento ativador e os elementos span ou section como elementos afetados. 
 * Primeiro, vamos trabalhar com o evento mouseover, 
 * que é disparado sempre que o cursor do mouse passa por cima de um elemento. 
 *
 * Agora, vamos criar a função mostrarSpan, 
 * que altera a propriedade opacity da propriedade style do elemento span.
 */
function mostrarSpan() {
    span.style.opacity = "100"
}

button.addEventListener("mouseover", mostrarSpan);

// função para alterar a opacidade do span de volta para zero quando o mouse não estiver sobre o botão
function ocultarSpan() {
    span.style.opacity = "0"
}

button.addEventListener("mouseout", ocultarSpan);

/**
 * O evento click é a junção de dois eventos do mouse: mousedown, 
 * que é disparado quando clicamos o botão esquerdo do mouse, e mouseup, 
 * que é disparado quando soltamos esse mesmo botão.
 *
 * Assim, click é o ato de apertar e soltar o botão esquerdo do mouse sobre algum elemento.
 */
function fazerUmClick() {
    section.innerText = "Fez um click simples!"
}

button.addEventListener("click", fazerUmClick);

// Função duplo click, ou dblclick
function fazerDoisClicks() {
    section.innerText = "Fez um duplo click!"
}

button.addEventListener("dblclick", fazerDoisClicks);