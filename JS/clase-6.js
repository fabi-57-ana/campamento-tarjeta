// ARRAYS

/********** Declarando nuestros primeros arrays ******************/

// const productos = ["Sillon", "Silla", "Mesa", "Ropero"];
// const numeros = [1, 2, 3, 4, 5];
// const booleanos = [true, false, true];
// const mezcla = ["Sillon", 1, 2, true];
// const usuario = [{nombre: "Pedro", edad: 31}, {nombre: "Berta", edad: 27}];
// const usuario = [
//     {
//         nombre: "Pedro",
//         edad: 31
//     },
//     {
//         nombre: "Berta",
//         edad: 27
//     }
// ];

//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------

// const productos = ["Sillon", "Silla", "Mesa", "Ropero"];

/****************** Accediendo a nuestro Array ********************/

// console.log(productos);
// console.log(productos[0]);
// console.log(productos[1]);
// console.log(productos[2]);
// console.log(productos[3]);
// document.write(productos);
// document.write("<br>");
// document.write(productos[0]);
// document.write("<br>");
// document.write(productos[1]);
// document.write("<br>");
// document.write(productos[2]);
// document.write("<br>");
// document.write(productos[3]);

/***************** Recorriendo nuestro Array **********************/

// for (let i = 0; i < 4; i++) {
//     console.log(productos);                  // devuelve el array
//     console.log(productos[0]);               // devuelve "Sillon"
//     console.log(productos[i]);               // recorre todo el array
//     document.write(productos + "<br>");
//     document.write(productos[0] + "<br>");
//     document.write("<br>");
//     document.write(productos[i] + "<br>");
// }

/************************* Metodos *******************************/

/* length: largo del array, cantidad elementos */
// console.log(productos.length);
// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }

/* push: Agregar un elemento al final del array */
// productos.push("Cama");
// console.log(productos);

/* unshift: Agregar un elemento al comienzo del array */
// productos.unshift("Puerta");
// console.log(productos);

/* shift: Eliminar un elemento al comienzo del array */
// productos.shift();
// console.log(productos);

/* pop: Eliminar un elemento al final del array */
// productos.pop();
// console.log(productos);

/* splice: Eliminar uno o varios elementos en nuestro array */
// productos.splice(1, 2);
// console.log(productos);

/* join: Generar un string con los elementos del array */
// console.log(productos.join(" / "));
// console.log(productos.join(" , "));
// console.log(productos.join(" | "));

/* concat: Unir dos Arrays en uno */
// const productos2 = ["Puerta", "Ventana", "Cama"];
// const productosFinal = productos.concat(productos2);
// console.log(productosFinal);

/* slice: Generar una copia de una parte de nuestro array */
// const productosComedor = productos.slice(1, 3);
// console.log(productosComedor);

/* indexOf: Saber el numero de indice de nuestro elemento */
// console.log(productos.indexOf("Mesa"));

/* includes: Saber si un elemento existe en nuestro array */
// console.log(productos.includes("Cama"));

// if (productos.includes("Cama")) {
//     console.log(productos.indexOf("Cama"));
// } else {
//     console.log("Cama no se encuentra en el array");
// }

/* reverse: Invertir el orden de nuestro array */
// productos.reverse();
// console.log(productos);