/**
 * @funcionAnonima
 * Una función anónima es simplemente una función sin un nombre asociado. Puedes 
 * definirla y utilizarla directamente, o asignarla a una variable para usarla 
 * más tarde.
 * @ejemplo
 */

let suma = function(a, b) {
    return a + b;
};

let resultado = suma(3, 4); // Llamando a la función anónima asignada a la variable 'suma'
console.log(resultado); // Salida: 7


/**
 * @funcionFlecha
 * Las funciones flecha son una forma más concisa de escribir funciones en 
 * JavaScript, introducidas en ES6. Tienen una sintaxis más corta y algunas 
 * características diferentes en comparación con las funciones regulares. 
 */


let resta = (a, b) => {
    return a - b;
};

let resultadoResta = resta(7, 3); // Llamando a la función flecha
console.log(resultadoResta); // Salida: 4
