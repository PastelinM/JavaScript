/**
 * @cadenaTexto
 * Cadena de texto son secuencias de caracteres, como letras, números, simbolos y espacios.
 */

/**
 * @comillaDobles
 */

let nombre = "Mauricio"; 

/**
 * @comillasSimples
 */
let apellido = 'Pastelin'; 

/**
 * @templateString
 */
let lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`; 


 /**
  * @ejercicio
  */
 const frase = "Hola Mundo, ¿Cómo estás?";

 console.log(frase.length); // Longitud de cadena
 console.log(frase.toUpperCase());  //Convertir a mayúsculas
 console.log(frase.toLocaleLowerCase()); // Convertir minúsculas
 console.log(frase.indexOf("Cómo")); //Índice de la primera aparición de "como": 7
 console.log(frase.substring(6, 11));  //Subcadena desde el índice 6 al 19: cómo
 console.log(frase.replace("estás" , "estamos")); // Reemplazar "estás" por "estamos"


/**
 * @number
 * Number se refiere a los valores númericos, es decir, los números utilizados 
 * para representar cantidades y realizar operaciones matemáticas.
*/


let abc = 15;
let cba = new Number(1);
let def = 17.19;
let fed = "5.90";

console.log(abc, cba);
console.log(def.toFixed(1)); //toFixed asigna formato
console.log(parseInt(def)); // parseInt solo obtiene la parte enterea
console.log(parseFloat(def)); //parseFloat obtiene la parte de fraccion
console.log(typeof def, typeof abc); //Obtiene el tipo de dato
console.log(abc + parseInt(fed));
console.log(abc + parseFloat(fed));


/**
 * @booleans
 *  Los valores booleanos representan dos estados posibles: verdadero (true) o falso (false).
 */
let verdadero = true;
let falso = false;

let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);


/**
 * @templeteString
 * Son una forma conveniente de crear cadenas dinamicas y legibles en js.
 */

const parrafo = `
Esto es un ejemplo
de como las template string
pueden abarcar múltiples líneas
`;

console.log(parrafo);


/**
 * @concatenarCadenaTexto
 */
let nombre2 = "Juan";
let apellido2 = "Mendoza";
let saludo = "Hola mi nombre es " + nombre2 + " " + apellido2;
console.log(saludo);

/**
 * @interpolaciónVariables
 * Se refiere a la inserción de  los valores o expresiones dentro de una cadena
 * de texto o un contexto especifico para crear una cadena completa que  conviene
 * tanto texto estático como valores dinámicos.
 * Nota: Interpolar == Poner algo entre otras cosas
 */


let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo2);

let ul = `<ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Invierno</li>
        </ul>`;

console.log(ul);



/**
 * @undefinedNullNan
 * Indica que no se ha inicializado una variable y que el valor esta ausente.
 */

let indefinida;
console.log(indefinida);

/**
 * @null
 * Es un valor especial que indica la ausencia de un valor o objeto
 */

 let nulo = null;
console.log(null);

/**
 * @nan 
 * Not a Number 
 * Es un valor que se obtiene cuando intentas realizar operaciones mantematicas invalidas, como dividir por cero o realizar operaciones con tipos incompatibles
 */

 let noEsUnNumero = "Hola" * 3.1416;
console.log(noEsUnNumero);