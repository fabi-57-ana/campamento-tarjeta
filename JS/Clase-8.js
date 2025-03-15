// DOM -  MODELO DE OBJETOS DEL DOCUMENTO

// Permite acceder a un elemento via id
// const contenido = document.getElementById("contenido");


// console.log(contenido);

// Permite acceder a un elemento via clase
// const parrafos = document.getElementsByClassName("parrafo")

// console.log(parrafos);

// Permite acceder a un elemento via id
const contenido = document.querySelector("#contenido");

// console.log(contenido);

// Permite acceder a un elemento via clase
const parrafos = document.querySelectorAll(".parrafo");

// console.log(parrafos);
// parrafos.forEach(parrafo => console.log(parrafo));
// console.log(parrafos[0]);

// devuelve un string
// console.log(contenido.className);

// devuelve una lista 
// console.log(contenido.classList);
// contenido.classList.add("prueba2");
// contenido.classList.remove("contenido");
// console.log(contenido.classList);

// contenido.className = "prueba3 prueba4";

// console.log(contenido.innerHTML);
// console.log(contenido.innerText);

// parrafos[0].innerText = "Hola Mundo! <a href='#'>Esto es un enlace</a>";
// parrafos[0].innerHTML = "Hola Mundo! <a href='#'>Esto es un enlace</a>";

// contenido.remove();
// parrafos[2].remove();

const productos = ["Sillon", "Silla", "Mesa", "Ventana", "Puerta", "Cama"];

let lista = document.createElement("ul");
lista.classList.add("lista");
// lista.innerHTML  = "<li class='lista-item'>" + productos[0] + "</li>";
// lista.innerHTML += "<li class='lista-item'>" + productos[1] + "</li>";
// lista.innerHTML += `<li class='lista-item'>${productos[2]}</li>`;
// lista.innerHTML += `<p>Este es el item 4: ${productos[3]}</p>`;

for (producto of productos) {
    lista.innerHTML += `<li class="lista-item">${producto}</li>`;
}

contenido.append(lista);

console.log(lista);