document.addEventListener("DOMContentLoaded", () => {
    // Seleção dos elementos de acessibilidade no DOM
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualFonte = 100;

    // 1. Função Alto Contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            document.body.classList.toggle("alto-contraste");
            const estaAtivo = document.body.classList.contains("alto-contraste");
            btnContraste.setAttribute("aria-pressed", estaAtivo);
        });
    }

    // 2. Função Aumentar Texto (Limite: 150%)
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualFonte < 150) {
                tamanhoAtualFonte += 10;
                document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }

    // 3. Função Diminuir Texto (Limite: 90%)
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualFonte > 90) {
                tamanhoAtualFonte -= 10;
                document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }

    // 4. Função Simulador de Visão (substitui o onclick inline)
    const botoesSimulador = document.querySelectorAll(".sim-controls button");
    const preview = document.getElementById("preview");

    if (preview && botoesSimulador.length > 0) {
        botoesSimulador.forEach((botao) => {
            botao.addEventListener("click", () => {
                const tipoFiltro = botao.getAttribute("data-filter");
                preview.className = `filter-${tipoFiltro}`;
            });
        });
    }
});