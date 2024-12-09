

  function calcularIMC() {
  
    const estatura = parseFloat(document.getElementById("estatura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = peso / (estatura * estatura);

    const resultado = document.createElement("p");
    resultado.textContent = `Tu índice de masa corporal es: ${imc.toFixed(2)}`;
    document.body.appendChild(resultado);
}