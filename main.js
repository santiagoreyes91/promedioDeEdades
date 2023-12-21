function calcularPromedio() {
  let suma = 0;
  let cuenta = 0;

  while (true) {
    let userInput = prompt("Ingresa la edad de cada estudiante o 'final' para terminar:");

    // Corroborar final de ingreso de numeros
    if (userInput.toLowerCase() === 'final') {
      break;
    }

    // Convertir el ingreso a numero
    let number = parseFloat(userInput);

    // Corroborar que el ingreso sea un numero valido
    if (!isNaN(number)) {
      suma += number;
      cuenta++;
    } else {
      alert("Ingresa un numero valido.");
    }
  }

  // Corroborar que hay numeros para calcular el promedio
  if (cuenta === 0) {
    return null;
  }

  // Calcular promedio
  let promedio = suma / cuenta;
  return promedio;
}

let resultado = calcularPromedio();


// Mostrar resultado
if (resultado !== null) {
  alert(`El promedio de edades es: ${resultado}`);
} else {
  alert("Por favor ingresa al menos un numero valido.");
}
