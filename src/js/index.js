const botaoComprar = document.querySelector("#comprar");

botaoComprar.addEventListener("click", () => {
    window.scroll({top: document.body.scrollHeight, behavior: "smooth"})
});

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});