// Objetivo 1 - Quando user clicar no botão trailer, abrir o modal com Vídeo;
//     Step 1 - Pegar o elemento que representa o button com JS;
//     Step 2 - Identificar quando user clicar no button;
//     Step 3 - Pegar o elemento do modal no JS;
//     Step 4 - Abrir modal na Tela.

// Objetivo 2 - Quando user clicar no "x" fechar o modal.
//     Step 1 - Pegar o elemento fechar modal com JS;
//     Step 2 - Identificar quando user clicar no "x";
//     Step 3 - Fechar modal na Tela.

const video = document.getElementById("video");
const linkDoVideo = video.src;

// Podemos usar o toggle para refatorar no lugar do add e do remove
// function alteranrModal() {
//     modal.classList.toggle("aberto")
// };


// Objetivo 1

// Step 1 - Pegar o elemento que representa o button com JS;
const botaoTrailer =  document.querySelector(".botao-trailer");

//     Step 2 - Identificar quando user clicar no button;
botaoTrailer.addEventListener("click", () => {
    //     Step 4 - Abrir modal na Tela.
    modal.classList.add("aberto")
    //     Recolocar o link do video no botao "veja o trailer"
    video.setAttribute("src", linkDoVideo);      
});

//     Step 3 - Pegar o elemento do modal no JS;
const modal = document.querySelector(".modal");
console.log("mostrar o objeto da modal", modal);


// Objetivo 2
// Step 1 - Pegar o elemento fechar modal com JS;
const botaoFecharModal = document.querySelector(".fechar-modal");

// Step 2 - Identificar quando user clicar no "x";
botaoFecharModal.addEventListener("click", () => {
    // Step 3 - Fechar modal na Tela.
    modal.classList.remove("aberto");
    // Step extra - Remover link do trailer vídeo para parar a execução.
    video.setAttribute("src", "");
});







