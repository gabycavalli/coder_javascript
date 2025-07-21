// Valores de cambio fijos
const USD_RATE = 1300; // 1 dólar = 1300 pesos
const EUR_RATE = 1100; // 1 euro = 1100 pesos
const BRL_RATE = 230; // 1 real = 230 pesos

// Solicitar al usuario una cantidad de pesos
let pesos = prompt('Ingrese la cantidad de pesos que desea convertir:');

// Convertir a número
pesos = parseFloat(pesos);

// Validar entrada
if (isNaN(pesos) || pesos <= 0) {
  console.log('Por favor, ingrese un valor válido y mayor a 0.');
} else {
  // Calcular equivalencias
  const dolares = pesos / USD_RATE;
  const euros = pesos / EUR_RATE;
  const reales = pesos / BRL_RATE;

  // Mostrar resultados
  console.log(`Convertiste ${pesos} pesos argentinos:`);
  console.log(`Dólares: $${dolares} USD`);
  console.log(`Euros: €${euros}`);
  console.log(`Reales: R$${reales}`);
}
