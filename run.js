let myLib = require("./index");
//llamar a todas las funciones de la libreria e imprimir sus resultados.
myLib.suma(5, 3);
myLib.resta(5, 3);
myLib.producto(5, 3);
myLib.division(5, 0);
myLib.division(5, 2);
//imprimir sus resultados
console.log("Suma: " + myLib.suma(5, 3));
console.log("Resta: " + myLib.resta(5, 3));
console.log("Producto: " + myLib.producto(5, 3));
console.log("División: " + myLib.division(5, 0));
console.log("División: " + myLib.division(5, 2));
