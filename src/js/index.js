// Objetivo 1 - Quando user clicar no botão trailer, abrir o modal com Vídeo;
//     Step 1 - Pegar o elemento que representa o button com JS;
//     Step 2 - Identificar quando user clicar no button;
//     Step 3 - Pegar o elemento do modal no JS;
//     Step 4 - Abrir modal na Tela.

// Objetivo 2 - Quando user clicar no "x" fechar o modal.
//     Step 1 - Pegar o elemento fechar modal com JS;
//     Step 2 - Identificar quando user clicar no "x";
//     Step 3 - Fechar modal na Tela.

console.log('mostrar o document', document);

console.log(document.querySelector(".botao-trailer"));

// Step 1 - Pegar o elemento que representa o button com JS;
const botaoTrailer =  document.querySelector(".botao-trailer");

//     Step 2 - Identificar quando user clicar no button;
botaoTrailer.addEventListener("click", () => {
    console.log('clicou no botao veja o trailer')
});

//     Step 3 - Pegar o elemento do modal no JS;
const modal = document.querySelector(".modal");
console.log("mostrar o objeto da modal", modal);

//     Step 4 - Abrir modal na Tela.


