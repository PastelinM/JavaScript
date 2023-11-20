/**
 * @estructuraBucle
 * Permite repetir un bloque de código mientras se cumple una condición.
 */

/**
 * @while
 * Ejecuta un bloque de código mientras una condición sea verdadera.
 */

contador = 0;
while (contador < 7) {
    console.log("Contador: ", contador);
    contador ++;
}

let numero = 7;
 do{
    console.log("Numero: ", numero);
    numero --;
 }while (numero > 0);


/**
 * @for
 * Utilizado para recorrer  propiedades  de un objeto
 */

const frutas = ["Manzana", "Banana","naranja","uva"];
for (const fruta in frutas) {
    console.log("Fruta: ", fruta);
}