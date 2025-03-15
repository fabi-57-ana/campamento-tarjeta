// EVENTOS

// https://www.javatpoint.com/javascript-events

/**** EVENTOS ****/

/*** EVENTOS DEL MAUSE ****/

// Formas de agregar eventos click

// 1- Mostrar mensaje en una alerta -- Haciendo referencia a la funcion
const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", mostrarAlerta);

function mostrarAlerta(){
    alert("Aprendiendo eventos");
}

// 2- Mostrar mensaje en una alerta
// Forma no tan recomendada
// const alerta = document.querySelector("#alerta");

// alerta.onclick = () => {
//     alert("Aprendiendo eventos");
// }

// 3- Mostrar mensaje en una alerta
// Forma menos recomendada de todas
// Directamente en el html
/* <button id="alerta" class="btn" onclick="alert('Aprendiendo eventos')">Alerta</button>  */

// Mostrar mensaje en la consola -- Escribir una funcion anonima
const consola = document.querySelector("#consola");
consola.addEventListener("click", () => {
    console.log("Aprendiendo eventos");
})

// const consola = document.querySelector("#consola");
// consola.addEventListener("mouseover", () => {
//     console.log("Aprendiendo eventos");
// })

// const consola = document.querySelector("#consola");
// consola.addEventListener("mouseout", () => {
//     console.log("Aprendiendo eventos");
// })

// const consola = document.querySelector("#consola");
// consola.addEventListener("mousemove", () => {
//     console.log("Aprendiendo eventos");
// })

// const consola = document.querySelector("#consola");
// consola.addEventListener("mousemove", (event) => {
//     console.log(event);
// })

// Agregar clase a un elemento -- Switch Color Mode
const colorModeButton = document.querySelector("#color-mode");
const body = document.body;

colorModeButton.addEventListener("click", cambiarModoColor);

function cambiarModoColor() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Cambiar a Light Mode";
    } else {
        colorModeButton.innerText = "Cambiar a Dark Mode";
    };
};

/**** EVENTOS DE FORMULARIOS ****/

// Mostrar input en alerta
const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(alertaInput.value);
    alertaForm.reset();
})

// Mostrar un texto abajo de un input
const abajoInput = document.querySelector("#abajo-input");
const abajo = document.querySelector("#abajo");

abajoInput.addEventListener("input", () => {
    abajo.innerText = abajoInput.value;
})

// const abajoInput = document.querySelector("#abajo-input");
// const abajo = document.querySelector("#abajo");

// abajoInput.addEventListener("change", () => {
//     abajo.innerText = abajoInput.value;
// })

// const abajoInput = document.querySelector("#abajo-input");
// const abajo = document.querySelector("#abajo");

// abajoInput.addEventListener("keydown", () => {
//     abajo.innerText = abajoInput.value;
// })

// const abajoInput = document.querySelector("#abajo-input");
// const abajo = document.querySelector("#abajo");

// abajoInput.addEventListener("keyup", () => {
//     abajo.innerText = abajoInput.value;
// })

// Agregar items a una lista 
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar");

agregarForm.addEventListener("submit", agregarItems)

function agregarItems(e) {
    e.preventDefault();
    
    if (agregarInput.value != "") {
        let item = document.createElement("li");
        item.innerText = agregarInput.value;
        agregar.append(item);
    } else {
        alert("Input vacio!");
    }

    agregarInput.focus();
    agregarForm.reset();
}