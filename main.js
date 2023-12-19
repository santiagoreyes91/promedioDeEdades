let edad1 = prompt("ingrese la edad del estudiante 1");
let edad2 = prompt("ingrese la edad del estudiante 2");
let edad3 = prompt("ingrese la edad del estudiante 3");
let edad4 = prompt("ingrese la edad del estudiante 4");

function calcularPromedio() {
    let suma = edad1 + edad2 + edad3 + edad4;
    let promedio = suma / 4;
}

alert("El promedio es " + promedio);

