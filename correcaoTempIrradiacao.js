function calcularPotenciaCorrigida(potPico, tempPmax, temperatura, noct) {
    const tempCelula = temperatura + 1000 * ((noct - 20) / 800 * 0.9);
    const potCorrigida = potPico * (1 - tempPmax * (tempCelula - 25));
    return potCorrigida;
  }
  
  const potenciaPainel = 270;
  const hsp = 6.0;
  const horasSolDia = 6;
  const radiacaoSolar = 1000;
  const temperatura = 26;
  const noct = 45;
  const fatorCorrecaoTemp = 0.0041;
  const tempPmax = 0.0041;
  const potPico = 325;
  
  const potCorrigida = calcularPotenciaCorrigida(potPico, tempPmax, temperatura, noct);
  console.log(potCorrigida);
  