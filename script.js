document.addEventListener("DOMContentLoaded", () => {
    // Injeta os botões de acessibilidade no topo do body caso não existam no HTML
    if (!document.getElementById("barra-acessibilidade")) {
        const barra = document.createElement("div");
        barra.id = "barra-acessibilidade";
        barra.setAttribute("role", "region");
        barra.setAttribute("aria-label", "Ferramentas de acessibilidade");

        barra.innerHTML = `
            <button id="btn-contraste" aria-pressed="false">Alto Contraste</button>
            <button id="btn-aumentar-texto" aria-label="Aumentar tamanho do texto">A+</button>
            <button id="btn-diminuir-texto" aria-label="Diminuir tamanho do texto">A-</button>
        `;

        document.body.insertBefore(barra, document.body.firstChild);
    }

    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualFonte = 100;

    // Alterna a classe 'alto-contraste' no <body>
    btnContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");
        const ativo = document.body.classList.contains("alto-contraste");
        btnContraste.setAttribute("aria-pressed", ativo);
    });

    // Aumenta o tamanho da fonte (limite de 150%)
    btnAumentar.addEventListener("click", () => {
        if (tamanhoAtualFonte < 150) {
            tamanhoAtualFonte += 10;
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });

    // Diminui o tamanho da fonte (limite de 90%)
    btnDiminuir.addEventListener("click", () => {
        if (tamanhoAtualFonte > 90) {
            tamanhoAtualFonte -= 10;
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });
});