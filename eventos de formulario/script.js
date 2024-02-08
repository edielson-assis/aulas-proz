let inputEmail = document.getElementById("email");
let inputIdade = document.getElementById("idade");
let formulario = document.querySelector("form");

// Adiciona estilização ao clicar na caixa de input
inputEmail.addEventListener("focus", () => {
    inputEmail.style.backgroundColor = "lightgreen"
});
// Remove a estilização ao clicar fora da caixa de input
inputEmail.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = ""
});
// Exibe uma mensagem toda vez que ocorre uma mudança
inputIdade.addEventListener("change", () => {
    alert("Certeza que quer alterar seus dados?")
});

formulario.addEventListener("submit", () => {
    alert("Dados enviados com sucesso!")
});