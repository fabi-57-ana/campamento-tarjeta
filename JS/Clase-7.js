/************************************************************************/
/***************** FUNCIONES DE ORDEN SUPERIOR ************************ */
/********************************************************************** */

/**** ABSTRACCION ****/
// Sumar numeros entre 1 y 10, hace todos los ciclos, imprime el total
// let total = 0;

// for (let i = 1; i <= 10; i++) {
//     total = total +i;
// }

// console.log(total);

// otra forma de hacerlo, imprime cada vez que hace el ciclo
// for (let i = 1; i <= 10; i++) {
//     total += i;
//     console.log(total)
// }


// funcion para contar cualquier rango de numeros, no solo contar del 
// 1 al 10, sino por ej contar los numeros entre 3 y 7

// function sumarRango(min, max) {
//     for (let i = min; i <= max; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(sumarRango(3, 7));

//------
// let sumaEntreTresYSiete = sumarRango(3, 7);
// console.log(sumaEntreTresYSiete);

/**** RETORNO DE FUNCIONES *****/

// retorna true o false ------

// const mayorQueDiez = (num) => {
//     return num > 10;
// }

// console.log(mayorQueDiez(11));

// formato flecha -----

// const mayorQueDiez = num => num > 10;

// console.log(mayorQueDiez(9));

// funcion que nos permita comparar cualquier numero
// la funcion principal va a retornar una funcion flecha ----

// function mayorQue(x) {
//     return (num) => num > x;
// }
// const mayorQueDiez = mayorQue(10);
// const mayorQueVeinte = mayorQue(20);

// console.log(mayorQueDiez(9));
// console.log(mayorQueVeinte(28));


/********************************************************************** */
/********************** METODOS DE BUSQUEDA *************************** */
/************************Y TRANSFORMACION ***************************** */
/********************************************************************** */

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["Perro", "Gato", "Cisne", "Tortuga"];
const productos = [
    {nombre: "Mesa", precio: 3500},
    {nombre: "Silla de plastico", precio: 2000},
    {nombre: "Silla de madera", precio: 2500},
    {nombre: "Ventana", precio: 4500},
    {nombre: "Puerta", precio: 3000}
];

// forEach() => Recorrer el Array y ejecutar lo que le digamos con
// cada elemento -------------------------------------------------

// numeros.forEach((numero) => {
//     console.log(numero);
// })

// animales.forEach((animal) => {
//     console.log(animal);
// })

// productos.forEach((producto) => {
//     console.log(producto);
// })

// productos.forEach((producto) => {
//     console.log(producto.nombre);
// })

// productos.forEach((producto) => {
//     console.log(producto.precio);
// })

// https://carpistudio.github.io/monotienda/
// https://carpistudio.github.io/monotienda-reac/

// find() => Recorrer el Array y retornar el primer elemento  que cumpla 
// con una condicion ---------------------------------------------------

// const perro = animales.find((animal) => {
//     return animal === "Perro";
// });

// flecha - el return esta implicito
// const perro = animales.find((animal) => animal === "Perro");

// console.log(perro);

//--------
// let productoElegido = prompt("Ingrese el producto que quiere comprar");

// console.log(productos.find((producto) => producto.nombre === productoElegido));

// filter() => Recorrer el Array y retornar uno nuevo con todos los 
// elementos que cumplan con una condicion ------------------------

// const gato = animales.filter((animal) => animal === "Gato");
// console.log(gato);

// ------
// const sillas = productos.filter((producto) => producto.nombre.includes("Silla"));
// console.log(sillas);

// some() => Recorrer el Array y responder true o false segun si encuentra
// o no un elemento q cumpla con una condicion ---------------------------

// const cisne = animales.some((animal) => animal === "Cisne");
// console.log(cisne);

// const caballo = animales.some((animal) => animal === "Caballo");
// console.log(caballo);

// map() => Recorrer el Array y retornar uno nuevo con los elementos 
// transformados del Array original --------------------------------

// const nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);

// const precios = productos.map((producto) => producto.precio);
// console.log(precios);

// const preciosActualizados = productos.map((producto) => {
//     return {
//         nombre: producto.nombre,
//         precio: producto.precio * 1.5
//     }
// });
// console.log(productos);
// console.log(preciosActualizados);

// reduce() => Recorrer el Array y retornarnos un unico valor tras hacer
// una operacion sobre los elementos -----------------------------------

// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(total);
// ------

// const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log(totalCarrito);

// sort() Reordenar el Array segun el criterio que le indiquemos, de menor
// a mayor o viceversa ---------------------------------------------------

// numeros.sort((a, b) => a + b);
// console.log(numeros);

// numeros.sort((a, b) => a - b);
// console.log(numeros);

/********************************************************************** */
/****************************** MACH ************************************/
/********************************************************************** */

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

// min() => Retornar el numero minimo de un listado
// console.log(Math.min(50, 12, 37, 17, 25, 6));

// min() => Retornar el numero maximo de un listado
// console.log(Math.max(50, 12, 37, 17, 25, 6));

// ceil() => Retornar el numero que le indiquemos redondeado hacia arriba
// (devuelve un numero entero)
// console.log(Math.ceil(numeroDecimal1));
// console.log(Math.ceil(numeroDecimal2));


// floor() => Retornar el numero que le indiquemos redondeado hacia abajo
// (devuelve un numero entero)
// console.log(Math.floor(1,25));
// console.log(Math.floor(1.75));


// round() => Retornar el numero que le indiquemos redondeado hacia abajo
// o hacia arriba, segun sea el mas cercano (devuelve un numero entero)
// console.log(Math.round(numeroDecimal1));
// console.log(Math.round(numeroDecimal2));

// random() => Retornar un numero aleatorio entre 0 y 1 inclusive
// console.log(Math.random());
// console.log(Math.random(Math.random()));

// console.log(Math.random(Math.random())*50);
// console.log(Math.random(Math.random())*50+20);

// https//carpistudio.github.io/rock-paper-scissors/

// console.log(Math.floor(Math.random()*3+1));

// js random number between 1 and 10 (pagina con ejemplos, codigo js)

function generarNumero(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numeroRandom = generarNumero(100, 200);
console.log(numeroRandom);