let elementoClicado = document.getElementById("elemento-clicado");
let botaoTempo = document.getElementById("botao-tempo");
let tempo = document.getElementById("tempo");

/**
 * A propriedade timeStamp retorna um número que representa o tempo transcorrido desde a renderização 
 * da página até o momento em que o evento aconteceu. Essa informação pode ser útil para provas on-line, 
 * onde cada questão tem um tempo máximo permitido para escolher a resposta.
 */
botaoTempo.addEventListener("click", function (evento) {
    console.log(evento.timeStamp);
    tempo.innerText = evento.timeStamp;
});

/**
 * A propriedade target nos permite acessar informações e propriedades do elemento que ativou o evento 
 * ou de qualquer um de seus elementos filhos, que não necessariamente foram capturados do DOM.
 * 
 * Neste exemplo, usaremos o próprio DOM como elemento pai, 
 * mas poderíamos definir o mesmo comportamento, por exemplo, para uma lista ordenada de itens.
 */
document.addEventListener("click", function (e) {
    console.log(e.target)
    elementoClicado.innerText = e.target.id
});