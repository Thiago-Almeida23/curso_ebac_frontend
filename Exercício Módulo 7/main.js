function validarFormulario() {
    var campoA = parseInt(document.getElementById('campoA').value, 10);
    var campoB = parseInt(document.getElementById('campoB').value, 10);
    var mensagemElemento = document.getElementById('mensagem');
  
    if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
      exibirMensagem('Formulário válido! Número B é maior que o número A.', 'green');
    } else {
      exibirMensagem('Formulário inválido! Certifique-se de que o número B é maior que o número A.', 'red');
    }
  }
  
  function exibirMensagem(mensagem, cor) {
    var mensagemElemento = document.getElementById('mensagem');
    mensagemElemento.textContent = mensagem;
    mensagemElemento.style.color = cor;
  }