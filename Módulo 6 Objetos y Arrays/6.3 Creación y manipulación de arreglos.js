/**
 * @array
 * Los arrays te permiten almacenar una colección ordenada de elementos bajo  un único nombre.
 */

/**
 * Crear un arreglo de cadena de texto
 */
let frutas = ["Manzana", "Uva", "Pera", "Sandia"];
console.log(frutas.length);

/**
 * Accerder a elementos del arreglo por indice
 */

let primero = frutas[0];
let ultimo = frutas[frutas.length - 1];
console.log(0); //Salida Manzana
console.log(primero);
console.log(ultimo);

/**
 * Añadir un elemento al final de un arreglo
 */

let nuevaLongitud = frutas.push("Naranja");
console.log(frutas);

/**
 * Eliminar el primer elemento de un arreglo del inicio
 */
let eliminar = frutas.shift();
console.log(frutas);

 /*
 * Obtener la longitud de un arreglo
 */ 
const longitud = frutas.length;
console.log("Longitud: ",longitud)


/*
* Recorrer un arreglo usando un bucle for
*/ 

for(const fruta of frutas){
  console.log(fruta);
}

/*
*Recorrer un arreglo usando un bucle forEach
*/ 
 
frutas.forEach(function (elemento, indice, array) {
  console.log(indice, elemento);
});

/**
 * Encontrar el indice de un elemento en el arreglo
 */

let indice = frutas.indexOf("Pera");
console.log("Indice de Pera ",indice);


/** 
 * @ejercicio
* Tenemos un arreglo de citas y queremos seleccionar sólo el nombre que tenga mayor disponibilidad
 */

let citas = [
  { key: 0, nombre: "J", disponibilidad: "5" },
  { key: 1, nombre: "IL", disponibilidad: "1" },
  { key: 2, nombre: "C", disponibilidad: "0" },
  { key: 3, nombre: "L", disponibilidad: "2" },
  { key: 4, nombre: "M", disponibilidad: "5" },
  { key: 5, nombre: "L", disponibilidad: "4" },
  { key: 6, nombre: "M", disponibilidad: "10" },
  { key: 7, nombre: "A", disponibilidad: "6" },
  { key: 8, nombre: "MT", disponibilidad: "4" },
  { key: 9, nombre: "B", disponibilidad: "1" },
  { key: 10, nombre: "A", disponibilidad: "1" },
  { key: 11, nombre: "B", disponibilidad: "2" },
  { key: 12, nombre: "H", disponibilidad: "4" },
  { key: 13, nombre: "V", disponibilidad: "1" },
  { key: 14, nombre: "Y", disponibilidad: "1" },
  { key: 15, nombre: "S", disponibilidad: "3" },
  { key: 16, nombre: "E", disponibilidad: "1" },
  { key: 17, nombre: "AM", disponibilidad: "1" },
  { key: 18, nombre: "AD", disponibilidad: "3" },
  { key: 19, nombre: "S", disponibilidad: "0" },
  { key: 20, nombre: "AN", disponibilidad: "2" },
  { key: 21, nombre: "K", disponibilidad: "4" },
  { key: 22, nombre: "N", disponibilidad: "2" },
];

/**
* @ejercicio Propuesto
*/

let ejercicio = citas.filter((cita)=>cita.disponibilidad >= 5);
console.log(ejercicio);


/**
* Buscar el nombre de S
*/
let nombres = citas.filter((mujer) => mujer.nombre == "S");
console.log(nombres);