// FUNCIONES

// https://makeitrealcamp.gitbook.io/javascrit-book/funciones

// FUNCIONES DECLARADAS ---------------



// function saludar(nombre,apellido) {
//     console.log("Hola, " + nombre + " " + apellido + "!!");
//     console.log("Holaaaaa... que alegria verte");
// }
// saludar("Berta","Campana");
// saludar("Saru","Campana");
// saludar("Rufina","Correa");
// saludar("Pinguina","Correa");



// FUNCIONES ANONIMAS ---------------

// const Saludar = function(nombre) {
//     console.log("Hola, " + nombre + "!!");
// }
// Saludar("Pedro");



// FUNCIONES FLECHA ---------------

// const Saludar = (nombre) => {
//     console.log("Hola, " + nombre + "!!!");
// }
// Saludar("Cristina");

// un solo parametro y una sola sentencia se pueden ovbiar los () y las {}

// const Saludar1 = nombre => console.log("Hola, " + nombre + "!!!");
// Saludar1("Teresa");


// FUNCIONES FLECHA CON RETORNO IMPLICITO ---------------


const Suma = (a,b) => "El resultado de la suma es: " + (a + b);
console.log(Suma(35,42));

const Resta = (a,b) => "El resultado de la resta es: " + (a - b);
console.log(Resta(63,35));



// FUNCIONES DECLARADAS CON RETORNO ---------------

// function saludar(nombre) {
//     return "Hola " + nombre;
// }
// console.log(saludar("Rufina!!"));
// document.write(saludar("Rufina!!"));
// let saludoARufina = saludar("Rufina....!!!!");
// console.log(saludoARufina);

// function suma(a,b) {
//     return a + b;
// }
// console.log(suma(9,8));

function suma(a,b) {
    return "El resultado de la suma es: " + (a + b);
}
console.log(suma(9,8));

function resta(a,b) {
    return "El resultado de la resta es: " + (a - b);
}
console.log(resta(48,24));






