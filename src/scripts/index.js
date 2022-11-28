const header = document.querySelector(".navbar");
var emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

//Envio desabilitado para não deixar minha senha aqui hahaha

function SendEmail() {
  //verificaçoes
  var email = document.getElementById("contEmail");
  var nome = document.getElementById("contNome");
  var assunto = document.getElementById("contAssunto");
  var detalhes = document.getElementById("contDetalhes");
  if (!email.value.match(emailRegex)) {
    window.alert("Email Invalido");
    email.focus();
    return;
  }

  if (nome.value.length < 1) {
    window.alert("Preencha o campo nome");
    nome.focus();
    return;
  }

  if (assunto.value.length < 1) {
    window.alert("Preencha o campo assunto");
    assunto.focus();
    return;
  }

  if (detalhes.value.length < 20) {
    window.alert("Preencha o campo detalhes com pelo menos 20 caracteres");
    detalhes.focus();
    return;
  }

  Email.send({
    Host: "smtp.gmail.com",
    Username: "jeancar1323@gmail.com",
    Password: "nenhuma",
    To: "jean.sampaio@fataec.sp.gov.br",
    From: email.value,
    Subject: assunto.value,
    Body: nome.value + " Diz:\n " + detalhes.value,
  }).then((message) => console.log(message));
  alert("Enviado");
  document.getElementById("contato").reset();
}

function setarBarra(barra) {}
var isPlay = true;
function carregar() {
  document.getElementById("musica").play();
}

function PlayOrPauseMusic(obj) {
  if (isPlay) {
    obj.text = "Tocar Musica";
    document.getElementById("musica").pause();
  } else {
    obj.text = "Parar Musica";
    document.getElementById("musica").play();
  }
  isPlay = !isPlay;
}
