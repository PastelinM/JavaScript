/**
 * @precedenciaOperadores
 *La precedencia de operadores determina el orden en el cual los operadores
 * son evaluados uno respecto del otro.
 *Los operadores con mayor precedencia se convierten en los operandos de los
 operadores con menor precedencia.
 * 
 * @ejemplo
 * */

cosole.log(3 + 4 * 5); // 3 + 20
console.log(4 * 3 ** 2); // 4 * 9
 
let a;
let b;
console.log((a = b = 5)); // 5