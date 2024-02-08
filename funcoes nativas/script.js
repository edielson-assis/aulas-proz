let linkProz = document.getElementById("link-proz")
let btnSubmit = document.querySelector("button[type=submit]")

/**
 * A função preventDefault() pode ser traduzida como "impedir o padrão". 
 * Ela serve para desativar o comportamento padrão de algum elemento HTML.
 */
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Não foi possível enviar os dados do formulário")
});

linkProz.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Não foi possível acessar o link");
});