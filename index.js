function agregar(valor) {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += valor;
  }
  
  function encender() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = ""
  }
  
  function borrar() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = ""
  }
  
  function borrarUltimo() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0, -1);
  }
  
  function calcular() {
    const input = document.getElementById("pantalla").value;
    const pantalla = document.getElementById("pantalla");
    try {
      // Crea una nueva función que devuelve el resultado de la expresión
      const result = Function('"use strict"; return (' + input + ')')();
      pantalla.value = result;
    } catch {
      pantalla.value = "Error";
    }
  }