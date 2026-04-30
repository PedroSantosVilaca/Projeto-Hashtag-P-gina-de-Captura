import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const botaoTopo = document.getElementById("botao-conteiner1");
  const primeiraDobra = document.getElementById("primeira-dobra");
  botaoTopo.addEventListener("click", () => {
    primeiraDobra.innerHTML = `<div id="popup-header"  class ="popup-header"><div class="popup-dentro">
    <h1 class="texto-popup">Fale conosco!</h1></div></div>`;

    const popUpHead = document.getElementById("popup-header");
    popUpHead.style.display = "flex";
  });
});
