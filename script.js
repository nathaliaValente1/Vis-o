document.addEventListener("DOMContentLoaded", () => {
    // Captura dos botões da barra de acessibilidade do HTML
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    // Controle do tamanho da fonte em porcentagem (base: 100%)
    let tamanhoAtualFonte = 100;

    // 1. Alternância de Alto Contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            // Alterna a classe no <body> alinhada com o CSS
            document.body.classList.toggle("alto-contraste");

            // Atualiza o estado acessível do botão para leitores de tela
            const estaAtivo = document.body.classList.contains("alto-contraste");
            btnContraste.setAttribute("aria-pressed", estaAtivo);
        });
    }

    // 2. Aumentar Tamanho do Texto (Limite: 150%)
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualFonte < 150) {
                tamanhoAtualFonte += 10;
                document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }

    // 3. Diminuir Tamanho do Texto (Limite: 90%)
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualFonte > 90) {
                tamanhoAtualFonte -= 10;
                document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }
});
