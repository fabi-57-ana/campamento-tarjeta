// Condicionales y operadores logicos.

// .== ........... Es igual
// .=== .......... Es estrictamente igual
// .!= ........... Es distinto
// .!== .......... Es estrictamente distinto
// .<.<=.>.>= .... Menor/Menor o igual/Mayor/Mayor o igual

// .&& ........... Operador AND (y)
// .|| ........... Operador OR (o)
// .! ............ Operador NOT (no)


// ----------------------------------------------------

// let edad = prompt("Ingrese su edad");

// if (edad >= 18) {
//     alert("Sos mayor de edad. Podes ingresar");
// } else {
//     alert("Sos menor de edad. No podes ingresar");
// }

// -----------------------------------------------------

// let hora = prompt("Ingrese la hora");

// if (hora >= 6 && hora < 12) {
//     alert("Buenos dias!");
// } else if (hora >= 12 && hora < 20){
//     alert("Buenas tardes!");
// } else {
//     alert("Buenas noches!");
// }

// ------------------------------------------------------

let usuario1 = "Pedro";
let usuario2 = "Juarez";

let nombreUsuario = prompt("Ingrese su nombre de usuario");

// if (nombreUsuario == "Pedro") {
//     alert("Bienvenido " + nombreUsuario);
// } else if (nombreUsuario == "Juarez") {
//     alert("Bienvenido " + nombreUsuario);
// } else {
//     alert("Nombre de usuario incorrecto");
// }



if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert("Bienvenido " + nombreUsuario);
} else {
    alert("Usuario incorrecto");
}