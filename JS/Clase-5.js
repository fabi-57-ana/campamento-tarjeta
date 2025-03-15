// OBJETOS

// const usuario1 = {
//     nombre: "Rufina",
//     edad: 7,
//     raza: "Buldoog",
//     hobbies: {
//         hobby1: "Jugar con la pelotita",
//         hobby2: "Jugar con Pinguina",
//     }
// }

// const usuario2 = {
//     nombre: "Berta",
//     edad: 4,
//     raza: "salchicha"
// }

// const producto1 = {
//     titulo: "Sillon",
//     color: "Rojo",
//     precio: "$50000"
// }

// usuario1.raza = "Buldoog frances";
// usuario1["raza"] = "Buldoog frances frenchis";

// console.log(usuario1.nombre);
// console.log(usuario1.edad);
// console.log(usuario1.raza);
// console.log(usuario1.hobbies);
// console.log(usuario1.hobbies.hobby2);

// console.log(usuario2);
// console.log(usuario2.nombre);
// console.log(usuario2["nombre"]);

// console.log(producto1);


//***************************************************** */
//***************************************************** */
// CONSTRUCTOR

// function Producto(titulo,color,precio) {
//     this.titulo = titulo;
//     this.color = color;
//     this.precio = precio;
//     this.informacion = `Producto: ${titulo}, color: ${color},
//     precio: $ ${precio}`
// }

// const producto1 = new Producto("Sillon","Rojo",50000);
// const producto2 = new Producto("Cama","Blanca",150000);
// const producto3 = new Producto("Mesa","Marron",70000);
// console.log(producto1);
// console.log(producto2);
// console.log(producto3);
// document.write(producto1.informacion + "<br>");
// document.write(producto2.informacion + "<br>");
// document.write(producto3.informacion + "<br>");

//***************************************************** */
//***************************************************** */
// CLASES

// class Producto {
//     constructor(titulo,color,precio) {
//         this.titulo = titulo;
//         this.color = color;
//         this.precio = precio;
//         this.informacion = `Producto: <b>${titulo},</b> <br> color: <b>${color}</b>, <br>
//         precio: <b>$ ${precio}</b>`;
//     }
// }

// const producto1 = new Producto("Sillon","Rojo",50000);

// console.log(producto1);
// document.write(producto1.informacion);

//***************************************************** */
//***************************************************** */
// METODOS

class Persona {
    constructor(nombre,edad,nacionalidad){
//         PROPIEDADES
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.info = `Nombre: ${nombre}, <br> Edad: ${edad}, <br>
        Nacionalidad: ${nacionalidad}`
//         METODOS
        this.saludar = function() {console.log("Hola, soy " + this.nombre)}
        this.cumpleanios = function() {this.edad = this.edad + 1};
        // this.cumpleanios = function() {this.edad++};
    }
}

const persona1 = new Persona("Pedro",34,"Argentina");
const persona2 = new Persona("Matias",37,"Argentina");
const persona3 = new Persona("Juan",39,"Argentina");

persona1.saludar();
persona2.saludar();
persona3.saludar();

console.log(persona1);

console.log(persona1.edad);
persona1.cumpleanios();
console.log(persona1.edad);

document.write(persona1.info);

console.log("nombre" in persona1);

document.write("<br>");

// OPERADOR IN

if ("hobbies" in persona1) {
    console.log(persona1.hobbies);
} else {
    console.log("No hay hobbies");
}

// OPERADOR FOR...IN

for (const propiedad in persona1) {
    console.log(propiedad);
}

// PROPIEDADES Y METODOS CON VARIABLES Y FUNCIONES EXTERNAS

const IVA = 1.21;

function info() {
    console.log("Vendo, " + this.titulo, this.color,+ this.precio, + this.iva);
}


const producto1 = {
    titulo: "Sillon",
    color: "Rojo",
    precio: 50000,
    iva: IVA,
    info,
}

producto1.info();
console.log(producto1);
document.write("Vendo " + producto1.titulo + " ");
document.write(producto1.color + " ");
document.write(" $" + producto1.precio + " como nuevo");
//***************************************************** */
//***************************************************** */