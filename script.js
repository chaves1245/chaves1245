// CARREGAR USUÁRIOS SALVOS
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

// FUNÇÃO PARA ESCONDER TELAS
function esconderTudo() {
  document.getElementById("home").style.display = "none";
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("login").style.display = "none";
}

// MENU
function mostrarHome() {
  esconderTudo();
  document.getElementById("home").style.display = "block";
}

function mostrarCadastro() {
  esconderTudo();
  document.getElementById("cadastro").style.display = "block";
}

function mostrarLogin() {
  esconderTudo();
  document.getElementById("login").style.display = "block";
}

// CADASTRAR USUÁRIO
function cadastrar() {
  let user = document.getElementById("cadUser").value;
  let senha = document.getElementById("cadSenha").value;

  if (user === "" || senha === "") {
    document.getElementById("msgCadastro").innerText = "Preencha tudo";
    return;
  }

  usuarios[user] = senha;

  // SALVAR NO CELULAR
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  document.getElementById("msgCadastro").innerText = "Cadastro salvo 💾";
}

// LOGIN
function logar() {
  let user = document.getElementById("loginUser").value;
  let senha = document.getElementById("loginSenha").value;

  if (usuarios[user] === senha) {
    document.getElementById("msgLogin").innerText = "Login autorizado 🔓";
  } else {
    document.getElementById("msgLogin").innerText = "Usuário ou senha incorretos ❌";
  }
}
