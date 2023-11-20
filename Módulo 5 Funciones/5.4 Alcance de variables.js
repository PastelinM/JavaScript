/**
 * @alcance
 * Se refiere a las reglas que determinan dónde y como pueden ser accedidas las 
 * variables.
 */


/**
 * @alcanceGlobal
 * Estas variables son accesibles desde cualquier lugar del código.
 * @ejemplo
 */

let globalVariable = 'Soy global';

function miFuncion() {
    console.log(globalVariable); // Puedo acceder a globalVariable aquí
}

console.log(globalVariable); // También puedo acceder aquí

/**
 * @alcanceLocal
 * Estas variables solo son accesibles dentro de la función en la que fueron 
 * declaradas.
 * @ejemplo
 */

function miFuncion() {
    let localVariable = 'Soy local';
    console.log(localVariable); // Puedo acceder a localVariable aquí
}

miFuncion();
// console.log(localVariable); // Esto dará un error, localVariable no es accesible aquí
