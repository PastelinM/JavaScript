/**
 *  @estructuraCondicional
 * Permiten tomar desiciones basadas en condiciones. Se utilizan para ejecutar 
 * diferentes bloques de código según si se cumple un condición o no.
 */

/**
 * @if
 * Ejecuta un bloque de código si se cumple una condición.
 * @ejemplo
 */

const calificacion = 85;

if( calificacion >90){
    console.log("Aprobaste con A");

} else if (calificacion>= 80){
    console.log("Aprobaste con B");

}else if (calificacion >= 70){
    console.log("Aprobaste con C");

}else{
    console.log("Reprobaste");

}