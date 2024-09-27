/**
 * Array
 * Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación.
 */


/**
 * Método map() 
 * Toma como argumentos una función anónima y  retorna  un nuevo array.
 * @Ejemplo
 */

const array = [2, 4, 6, 8];

const doble = array.map((elemento) => {
  return elemento * 2;
});

console.log(doble); // [4, 8, 12, 16];


/**
 * Método forEach()
 * Esta función permite recorrer o un array y aplicar  en cada uno de sus elementos
 * una acción en particular a través de una función.
 * @Ejemplo
 */

const animales = ["perro", "gato", "elefante"];

animales.forEach(function (animal) {
  console.log(animal);
});


//'perro''gato''elefante'

/**
 * Método filter()
 * Crea un nuevo array con todos los elementos que pasan una pruena definida en una función.
 * @Ejemplo
 */

const array = [1, 2, 3, 4, 5];
const evenNumbers = array.filter(item => item % 2 === 0);
console.log(evenNumbers); // [2, 4]


/**
 * Método reduce()
 * Aplica una función contra un acumulador y cada elemento del array, para reducirllo a un único valor.
 * @Ejemplo
 */

const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15



