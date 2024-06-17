// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

function suma(a, b) {
  return a + b;
}
suma(2, 2);

function saludar(nombre) {
  return `¡Hola, ${nombre}`;
}
saludar("Carlos");

function multiplicar(a, b) {
  return a * b;
}
multiplicar(2, 5);

function calcularDescuento(precio, descuento) {
  const finalDescuento = (precio * descuento) / 100;
  return precio - finalDescuento;
}
calcularDescuento(10, 20);

function celsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
celsiusAFahrenheit(22);

function calcularEdad(a, b) {
  return a - b;
}
calcularEdad(2024, 2005);

function cuadrado(numero) {
  return numero * numero;
}
// const resultado = cuadrado;
// cuadrado(3);
// alert(cuadrado(3));

function concatenarCadenas(...cadenas) {
  return cadenas.join(" ");
}

console.log(concatenarCadenas("Hola", "mundo,", "chao", "!")); // Salida: "Hola mundo !"

//Generador de Saludos Personalizados Crea una función crearSaludo que acepte un saludo inicial como argumento y devuelva (return) una función que acepte un nombre como argumento y devuelva una cadena que combine el saludo inicial con el nombre.

function crearSaludo(saludo) {
  return function (nombre) {
    return `${saludo}, ${nombre}!`;
  };
}
<<<<<<< HEAD
console.log(crearSaludo('Hola, que tal'));

//Generadora de Números Pares Crea una función generadora que produzca números pares de 2 en 2.

function* numerosPares() {
  for (let i = 2; i >= 2; i += 2) {
    yield i;
  }
}
const generador = numerosPares();
console.log(generador.next());
=======
const saludoPersonalizado = crearSaludo("Hola");

console.log(saludoPersonalizado("Manuel"));
>>>>>>> 4029ca8eed08b2032c908c78a81757e0f7039677
