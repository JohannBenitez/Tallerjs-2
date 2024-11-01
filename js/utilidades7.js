function init() {
    document.addEventListener("keydown", mostrarCodigoAscii);
  }
  
  function mostrarCodigoAscii(event) {
    const caracter = event.key;
    const codigo = event.keyCode;
  
    actualizarDisplay(caracter, codigo);
  }
  
  function actualizarDisplay(caracter, codigo) {
    document.getElementById("character").textContent = `[${caracter}]`;
    document.getElementById("code").textContent = `[${codigo}]`;
  }
  
  init();