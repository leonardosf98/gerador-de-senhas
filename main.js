let inputSlider = document.querySelector(".input__range");
let valorSlider = document.querySelector(".valor__slider");
let inputSenha = document.querySelector(".input__senha");
let boxNumeros = document.querySelector(".box__numeros");
let boxMaiuscula = document.querySelector(".box__maiuscula");
let boxMinuscula = document.querySelector(".box__minuscula");
let boxSimbolos = document.querySelector(".box__simbolos");
let botaoGerarSenha = document.querySelector(".botao__gerar");
let botaoCopiarSenha = document.querySelector(".botao__copiar");

inputSlider.oninput = atualizaValor;
inputSenha.oninput = geraSenha;
botaoGerarSenha.onclick = geraSenha;

function atualizaValor() {
  let valorAtual = inputSlider.value;
  valorSlider.textContent = valorAtual;
}

function geraSenha() {
  let listaNumeros = "1234567890";
  let listaSimbolos = "!@#$%^&*()_+-={[}]|:;'<>,.?/";
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
    console.log(lista, elemento);
  }

  inputSenha.value = resultado;
}
