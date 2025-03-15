/******* Storage y JSON ********/ 

// localStorage
// sessionStorage

// localStorage.setItem("iva", 21);
// localStorage.setItem("nombre", "Berta");

// let usuario = "Pedro";
// localStorage.setItem("usuario", usuario);

// let usuarioEnLocalStorage = localStorage.getItem("usuario");
// console.log(usuarioEnLocalStorage);

// let usuarioIngresado = prompt("Ingrese su nombre");
// localStorage.setItem("usuario-ingresado" ,usuarioIngresado);
// let usuarioIngresadoEnLocalStorage = localStorage.getItem("usuario-ingresado");
// console.log(usuarioIngresadoEnLocalStorage);

// ------------------------------------------
/**** OBJETOS ****/
// const usuario = {
//     nombre: "Berta",
//     edad: 4
// }

// localStorage.setItem("usuario", usuario)

// Opcion 1
// const usuarioJSON = JSON.stringify(usuario);
// localStorage.setItem("usuario", usuarioJSON);

// Opcion 2
// localStorage.setItem("usuario", JSON.stringify(usuario));


// Opcion 1
// const usuarioEnLocalStorage = localStorage.getItem("usuario");
// const usuarioObjeto = JSON.parse(usuarioEnLocalStorage);

// Opcion 2
// const usuarioEnLS = JSON.parse(localStorage.getItem("usuario"))


// console.log(usuarioEnLocalStorage);

// console.log(usuarioObjeto);

// console.log(usuarioEnLS);

/*** ARRAY DE OBJETOS ****/
// const productos = [
//     {nombre: "Silla", precio: 1500},
//     {nombre: "Sillon", precio: 3500},
//     {nombre: "Mesa", precio: 2000},
// ];

// localStorage.setItem("productos", productos);
// localStorage.setItem("productos", JSON.stringify(productos));

// // const productosEnLS = localStorage.getItem("productos");
// console.log(productosEnLS);

// const productosEnLS = JSON.parse(localStorage.getItem("productos"));
// console.log(productosEnLS);

/*** EJEMPLO DE DARK MODE ***/
const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})