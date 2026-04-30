import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const botaoTopo = document.getElementById("botao-conteiner1");
  const primeiraDobra = document.getElementById("primeira-dobra");
  botaoTopo.addEventListener("click", () => {
    primeiraDobra.innerHTML += `<div id="popup-header"  class ="popup-header"><div id= "botao-fechar"><p id= "fechar">x</p></div><div class="popup-dentro">
    <input type= "text" placeholder= "    *digite seu nome" id= "nome">
    <input type= "text" placeholder= "    *digite seu melhor email" id= "email">
    <input type= "number" placeholder= "    *digite seu DDD + Telefone" id= "telefone">
    <button id= "botao-formulario">QUERO GARANTIR MINHA VAGA!</button></div>
    </div>`;

    const popUpHead = document.getElementById("popup-header");
    popUpHead.style.display = "flex";
  });
});
