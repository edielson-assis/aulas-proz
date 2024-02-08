let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0;

document.addEventListener("keyup", (e) => {
    keyText.innerText = e.key;
    codeText.innerText = e.code;
});

document.addEventListener("keydown", (e) => {
    if (e.code == "ArrowRight" && distanciaDaEsquerda <= 1270) {
        distanciaDaEsquerda += 10;
        quadrado.style.left = distanciaDaEsquerda + "px";
    } else if (e.code == "ArrowLeft" && distanciaDaEsquerda >= 0) {
        distanciaDaEsquerda -= 10;
        quadrado.style.left = distanciaDaEsquerda + "px";
    }
});