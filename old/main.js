let inputSlider = document.querySelector(".input__range");
let valorSlider = document.querySelector(".valor__slider");
let inputSenha = document.querySelector(".input__senha");
let boxNumeros = document.querySelector(".box__numeros");
let boxMaiuscula = document.querySelector(".box__maiuscula");
let boxMinuscula = document.querySelector(".box__minuscula");
let boxSimbolos = document.querySelector(".box__simbolos");
let botaoGerarSenha = document.querySelector(".botao__gerar");
let botaoCopiarSenha = document.querySelector(".botao__copiar");
let listaBoxes = [boxMaiuscula, boxMinuscula, boxNumeros, boxSimbolos];

inputSlider.onload = atualizaValor();
inputSlider.oninput = function () {
  atualizaValor();
  geraSenha();
};

botaoCopiarSenha.onclick = copiar;
botaoGerarSenha.onclick = geraSenha;

for (let i = 0; i < listaBoxes.length; i++) {
  listaBoxes[i].addEventListener("change", verificaDesmarcacao);
  listaBoxes[i].addEventListener("change", geraSenha);
}

function copiar() {
  inputSenha.select();
  inputSenha.setSelectionRange(0, inputSenha.value.length);
  navigator.clipboard.writeText(inputSenha.value);
}

function verificaDesmarcacao(event) {
  if (!boxMaiuscula.checked) {
    verificaMarcados(event.target);
  }
}

function verificaMarcados(event) {
  let listaBoxes = [boxMaiuscula, boxMinuscula, boxNumeros, boxSimbolos];
  let totalMarcados = 1;

  for (let i = 0; i < listaBoxes.length; i++) {
    if (listaBoxes[i].checked === true) {
      totalMarcados++;
    }
  }
  if (totalMarcados === 1) {
    event.checked = true;
  }
}

function atualizaValor() {
  const valorAtual = inputSlider.value;
  valorSlider.textContent = valorAtual;
}

function geraSenha() {
  let listaNumeros = "1234567890";
  let listaSimbolos = "!@*%$#&^";
  let listaMaiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let listaMinuscula = "abcdefghijklmnopqrstuvwxyz";
  let listaParaGerar = [];

  if (boxMaiuscula.checked === true) {
    listaParaGerar.push(listaMaiuscula);
  }
  if (boxMinuscula.checked === true) {
    listaParaGerar.push(listaMinuscula);
  }
  if (boxNumeros.checked === true) {
    listaParaGerar.push(listaNumeros);
  }
  if (boxSimbolos.checked === true) {
    listaParaGerar.push(listaSimbolos);
  }

  let senhaGerada = [];
  let resultado;
  for (let i = 0; i < inputSlider.value; i++) {
    const limiteLista = listaParaGerar.length;
    let lista = Math.floor(Math.random() * limiteLista);
    const limiteElemento = listaParaGerar[lista].length - 1;
    let elemento = Math.floor(Math.random() * limiteElemento);
    senhaGerada.push(listaParaGerar[lista][elemento]);
    resultado = senhaGerada.join("");
  }
  inputSenha.value = resultado;
}

inputSenha.innerHTML = geraSenha();
