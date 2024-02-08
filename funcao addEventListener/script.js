
let numero = document.querySelector("h1");
let botao = document.querySelector("button");
let contagem = 0;

/**
 * O método addEventListener() é uma função que precisa de, no mínimo, dois argumentos para funcionar. 
 * O primeiro argumento é uma string que define o tipo de evento que acionará nossa função. 
 * No nosso exemplo, usaremos a string click.

 * O segundo argumento deve ser uma função com o comportamento que queremos executar. 
 * No nosso exemplo, já declaramos nossa função na etapa anterior, portanto, 
 * basta escrever o seu nome sem os parênteses.
 */
function adicionarUm() {
    contagem = contagem + 1;
    numero.innerText = contagem;
}

botao.addEventListener("click", adicionarUm);

// função anônima dentro do parênteses do addEventListener.
botao.addEventListener("click", function () {
    contagem = contagem + 1;
    numero.innerText = contagem;
});

/**
 * Nesses casos, também há o uso de arrow functions para declarar a função anônima, 
 * substituindo o trecho function( ) por ( ) =>.
 */
botao.addEventListener("click", () => {
    contagem = contagem + 1;
    numero.innerText = contagem;
});