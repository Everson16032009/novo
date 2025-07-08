let mostraHTML = document.getElementById("mostraHTML");

function cadastro() {
    let time = prompt("Digite o nome do time:");

    let nome1 = prompt("Insira nome do primeiro jogador:");
    let idade1 = Number(prompt("Qual é a idade do primeiro jogador?"));

    let nome2 = prompt("Insira o nome do segundo jogador:");
    let idade2 = Number(prompt("Qual é a idade do segundo jogador?"));

    let nome3 = prompt("Insira o nome do terceiro jogador:");
    let idade3 = Number(prompt("Qual é a idade do terceiro jogador?"));

    let media = (idade1 + idade2 + idade3) / 3;

    if (media > 15) {
        alert("Inscrição não válida! Média de idade maior que 15. Insira um novo time.");
        return;
    }

    let novoTime = document.createElement("div");
    novoTime.classList.add("time");

    novoTime.innerHTML = `
        <h3>Time: ${time}</h3>
        <p><strong>Média de idade:</strong> ${media.toFixed(1)}</p>
        <ul>
            <li>${nome1} - ${idade1} anos</li>
            <li>${nome2} - ${idade2} anos</li>
            <li>${nome3} - ${idade3} anos</li>
        </ul>
        <hr>
    `;

    mostraHTML.appendChild(novoTime);
}
