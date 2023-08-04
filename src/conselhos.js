const clicarBotao = document.querySelector(".botao");
const identificar = document.querySelector(".numConselho");
const conselhos = document.querySelector('.descricao');

async function conselhosAleatorios(){
    const url = "https://api.adviceslip.com/advice";
    const resultado = await fetch(url);
    const json = await resultado.json()

    const trocarId = `advice #${json.slip.id}`;
    const trocarTexto = `"${json.slip.advice}"`

    identificar.innerHTML = trocarId;
    conselhos.innerHTML = trocarTexto;
}

clicarBotao.addEventListener("click", conselhosAleatorios);

conselhosAleatorios()