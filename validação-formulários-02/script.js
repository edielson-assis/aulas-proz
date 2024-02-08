// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if (valor.length < 3) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    valoresCorretos.usernameInput = true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    valoresCorretos.emailInput = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
  }
})

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value

  if (valor == "") {
    senhaHelper.innerText = "O campo não pode ser vázio";
    estilizarInputIncorreto(senhaInput, senhaHelper);
  } else {
    estilizarInputCorreto(senhaInput, senhaHelper);
    valoresCorretos.senhaInput = true
  }
})

let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value

  if (valor != senhaInput.value && valor != "") {
    confirmaSenhaHelper.innerText = "As senhas não são iguais";
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
  } else if (valor == "") {
    confirmaSenhaHelper.innerText = "O campo não pode ser vázio";
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
  } else {
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
    valoresCorretos.confirmaSenhaInput = true
  }
})

let valoresCorretos = {
  usernameInput: false,
  emailInput: false,
  senhaInput: false,
  confirmaSenhaInput: false
}

let btnSubmit = document.querySelector('button[type="submit"]');

btnSubmit.addEventListener("click", (e) => {
  if (!(valoresCorretos.usernameInput
    || valoresCorretos.emailInput
    || valoresCorretos.senhaInput
    || valoresCorretos.confirmaSenhaInput)) {
    e.preventDefault()
    alert("Todos os campos devem ser preenchidos")
  } else {
    alert("Dados envidados com sucesso!")
  }
})