/* JavaScript como todo lenguaje de programación se basa en la utilización de palabras reservadas */
// Creación de Variables
/* var nom = 'Diego'; // No se recomienda usarla
const nombre = "Fernando";
let apellido = "Cuéllar";

alert (nombre);
*/

/* let numero = 3;
let numero1 = 2;
let suma = numero + numero1;
print (suma); */

/* Operadores aritméticos en JavaScript
    + adición
    - resta
    * multiplicación
    / División
    % Residuo
    */
/* let dia = parseInt(prompt("Escribe un número entre 1 y 7: "));
switch (dia) {
    case 1:
        console.log ("domingo")
        break;
    case 2:
        console.log ("lunes")
        break;    
    case 3:
        console.log ("martes")
        break;    
    case 4:
        console.log ("miércoles")
        break;
    case 5:
        console.log ("jueves")
        break;    
    case 6:
        console.log ("viernes")
        break;    
    case 7:
        console.log ("Sábado")
        break;
    default: console.log ("Error de número")
        break;
} */

let fecha = Date.now();
let fecha1 = new Date(fecha);
let numdia = fecha1.getDay();
let dia = "";
switch (numdia) {
    case 0:
        dia = "domingo"
        break;
    case 1:
        dia = "lunes"
        break;    
    case 2:
        dia = "martes"
        break;    
    case 3:
        dia = "miércoles"
        break;
    case 4:
        dia = "jueves"
        break;    
    case 5:
        dia = "viernes"
        break;    
    case 6:
        dia = "Sábado"
        break;
    default: console.log ("Error de número")
        break;
}


console.log (dia);