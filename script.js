document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 1 || n > 50 || isNaN(n)) return "o que é isso? Não me ama mais?!";
    if (n <= 10) return "o Seu Namorado Vai Ficar Bravo se Ficar Sabendo Disso!";
    if (n <= 20) return "Isso é muito pouco!";
    if (n <= 30) return "você me ama mesmo? ! ";
    if (n <= 40) return "então deixa eu gozar na sua cara?";
    return "Que FoFo, Mas Claramente Seu Namorado Te Ama Mais!Eu te amo muito minha princesa";
  }

  let timeout 

  function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero =document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {
      caixaDeMensagem.style.display = 'none'
    }, 2000)
  }
