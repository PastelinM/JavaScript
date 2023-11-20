/**
 * @variables
 */

/**
 * @variablesGlobales
 * Son declaradas fuera de cualquier función o bloque de código.
 */


/**
 * @ejemplo
 */

const nombre = "Juan";
function saludar (){
console.log(`Hola Mundo ${nombre}`);
};

saludar();


/**
 * @variablesLocales
 *Son declaradas dentro de una funcion o un bloque de código especifico.
 *Las variables locales son útiles para encapsular datos y evitar colisiones de nombres en programas más grandes.
 */

/**
 * @ejemplo
 */

function sumar (a, b){
    var resultado = a + b;
    return resultado;
}

console.log(sumar(10, 11)); 