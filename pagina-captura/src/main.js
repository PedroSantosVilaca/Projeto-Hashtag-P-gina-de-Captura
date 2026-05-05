import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const botaoTopo = document.getElementById("botao-conteiner1");
  const primeiraDobra = document.getElementById("primeira-dobra");
  botaoTopo.addEventListener("click", () => {
    const botaoFechar = document.getElementById("botao-fechar");
    const popUpHead = document.getElementById("popup-header-off");

    popUpHead.classList.add("popup-header");

    botaoFechar.addEventListener("click", () => {
      popUpHead.classList.remove("popup-header");
    });
  });

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const botaoFormulario = document.getElementById("botao-formulario");

  botaoFormulario.addEventListener("click", () => {
    console.log(nome.value, email.value, telefone.value);
    nome.value = "";
    telefone.value = "";
    email.value = "";
  });

  const botaobaixo = document.getElementById("botao-conteiner2");

  botaobaixo.addEventListener("click", () => {
    const botaoFechar = document.getElementById("botao-fechar");
    const popUpHead = document.getElementById("popup-header-off");

    popUpHead.classList.add("popup-header");

    botaoFechar.addEventListener("click", () => {
      popUpHead.classList.remove("popup-header");
    });
  });
});
