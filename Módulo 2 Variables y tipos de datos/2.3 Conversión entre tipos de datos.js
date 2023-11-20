/**
 * @conversionImplicita
 * La conversion implicita ocurre automaticamente cuando js convierte un tipo de 
 * dato en otro sin que tengas que hacer nada explicitamente. Esto generalmente 
 * sucede en operaciones matemáticas y comparaciones.
 * 
 */

/**
 * @ejemplo
 * @conversionImplicita
 * Cadena a número.
 * Nota: El resultado es una cadena "510" (concatenación), no una suma.
 */

var num1 = "5";
var num2 = 10;
var resultado = num1 + num2; 

/**
 * @ejemplo
 * @conversion 
 * Número a cadena.
 * Nota: Concatenación convierte número en cadena,
 */

 var num3 = 5;
var str = "El número es: " + num3; 

/**
 *@ejemplo
 *@conversion 
 * Nota: Se ejecuta porque "Hola" es verdadero en contecto booleano.
 */

var valor = "Hola";
if (valor) {
  console.log("El valor es verdadero.");  
}

/**
 * @conversionExplicita
 * La conversión explicita te permite controlar y forzar la conversión de un tipo 
 * de dato a otro. Esto se logra mediante funciones y operadores especificos.
 */

/**
 * @ejemplo
 * Cadena a número.
 * Nota:  Convierte la cadena en un número entero.
 */

 var strNumero = "42";
var numero = parseInt(strNumero);  
console.log(numero);  

/**
 * @ejemplo
 * Número a cadena
 * Convierte el número en una cadena de texto.
 */
 
var num = 123;
var strNum = num.toString();  
console.log(strNum);  

/**
 * @ejemplo
 * Entero a booleano
 * Convierte el número en booleano.
 */
 
var valor1 = 0;
var valor2 = "Texto";
var esVerdadero1 = Boolean(valor1); // Convierte valor1 en falso
var esVerdadero2 = Boolean(valor2); // Convierte valor2 en verdadero
console.log(esVerdadero1); // Resultado: false
console.log(esVerdadero2); // Resultado: true
