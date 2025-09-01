//Declarar las funciones de la calculadora por separado (suma, resta, producto, división)
//reto 5 , quitar funcion suma de este archivo.


function resta(a, b) {
    return a - b;
}
function producto(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}
// no me deja escribir module.exports = { suma, resta, producto, division };
// pero si me deja escribir MediaSourceHandle.exports = { suma, resta, producto, division };

MediaSourceHandle.exports = {
    suma,
    resta,
    producto,
    division
};


