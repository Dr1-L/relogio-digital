// captura os elementos
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dataExt = document.getElementById('data-extenso');

// configura o padrão de exibição da data
const configsData = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const dataAtual = new Date();
// altera o padrão da data para o português-BR
const dataPorExtenso = dataAtual.toLocaleDateString('pt-BR', configsData);

dataExt.textContent = `Hoje é ${dataPorExtenso}`;

const relogio = setInterval(function time() {
    // instancia um novo objeto Date() para capturar o horário
    const horaAtual = new Date();
    let hrAtual = horaAtual.getHours();
    let minutoAtual = horaAtual.getMinutes();
    let segundoAtual = horaAtual.getSeconds();

    // utiliza template strings para que o padStart funcione, inserindo o 0
    hrAtual = `${hrAtual}`.padStart(2, "0");
    minutoAtual = `${minutoAtual}`.padStart(2, "0");
    segundoAtual = `${segundoAtual}`.padStart(2, "0");

    // atualiza a view com o horário
    horas.textContent = hrAtual;
    minutos.textContent = minutoAtual;
    segundos.textContent = segundoAtual;
});