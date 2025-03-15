// for, while, do...while y switch


// ------- WHILE -------------------------------------------------------
// let i = 0;                                     EVALUA EL INICIALIZADOR - i = 0

// while (i < 20) {                               EVALUA LA CONDICION - es loque ponemos entre parentesis, x < 10, es verdadera en este caso es verdadera, si es falsa, termina el ciclo. si es verdadera ejecuta el codigo que esta adentro.              
//     console.log("Hola, Saru!!");               ES VERDADERA EJECUTA EL CONSOLE.LOG - lo vemos por consola
//     document.write("Estoy haciendo             DOCUMENT.WRITE - lo vemos en el navegador
//     un ciclo while 20 veces" + "<br>");
//     alert("Ahora i vale " + i);               
//     i++;                                       LUEGO EVALUA EL INCREMENTADOR, LO EJECUTA, i = i + 1 o i++
// }


// EJEMPLOS DE CICLO WHILE

// let i = 0;

// while (i < 5) {
//     alert("Ahora i vale " + i);
//     console.log("Ciclo numero " + i);
//     document.write("Ciclo numero ", + i + "<br>");
//     i++;
// }

// let x = 0;

// while (x < 3) {
//     alert("Ciclo while X vale " + x);
//     console.log("Ciclo while X vale " + x);
//     document.write("Ciclo while X vale ", + x + "<br>");
//     x++;
// }

// ------- DO WHILE ------------------------------------------------------

// let z = 0;

// do {
//     alert("Ciclo do...while Z vale " + z);
//     console.log("Ciclo do...while Z vale " + z);
//     document.write("Ciclo do...while Z vale ", + x + "<br>");
//     z++;
// } while (z < 3);


// ------- FOR ----------------------------------------------------------

// for (let x = 0; x < 5; x++) {
//     alert("Ahora X vale " + x);
//     console.log("Ahora X vale " + x);
//     document.write("Ahora X vale " + x + "<br>");
// }


// ------- FOR ANIDADO --------------------------------------------------

// for (let x = 0; x < 5; x++) {
//     console.log("Ciclo numero " + x);

//     for (let y = 0; y < 3; y++) {
//         console.log("Ciclo secundario " + y);
//     }
// }

// ------- SWITCH -------------------------------------------------------

// Especie de reemplazo o alternativa al if 

// let c = 0;

// switch (c) {
//     case 0:
//         console.log("C en switch vale 0");
//         break;
//     case 1:
//         console.log("C en switch vale 1");
//         break;
//     case 2:
//         console.log("C en switch vale 2");
//         break;
//     default:
//         console.log("C en switch no vale 0, 1 ni 2");
//         break;
// }

// if (c == 0) {
//     console.log("C en if vale 0")
// } else if (c == 1){
//     console.log("C en if vale 1");
// } else if (c == 2){
//     console.log("C en if vale 2");
// } else {
//     console.log("C en if no vale 0, 1 ni 2");
// }
// ---------
// let diaDeLaSemana = prompt("Ingrese dia de la semana con numeros");

// switch (diaDeLaSemana) {
//     case "1":
//         console.log("Lunes");
//         break;
//     case "2":
//         console.log("Martes");
//         break;
//     case "3":
//         console.log("Miercoles");
//         break;
//     case "4":
//         console.log("Jueves");
//         break;
//     case "5":
//         console.log("Viernes");
//         break;
//     case "6":
//         console.log("Sabado");
//         break;
//     case "7":
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Ese dia no existe");
//         break;
// }
// ------
// let diaDeLaSemana = Number(prompt("Ingrese dia de la semana con numeros"));

// switch (diaDeLaSemana) {
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Ese dia no existe");
//         break;
// }
// ------
let diaDeLaSemana = Number(prompt("Ingrese dia de la semana con numeros"));

switch (diaDeLaSemana) {
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break;
    default:
        console.log("Ese dia no existe");
        break;
}