/**
 * @function
 * Una funcion es un bloque de codigo, auto contenido que se se puede definir una 
 * vez y ejecutar en cualquier momento, opcionalmente una funcion puede aceptar 
 * parametros y devolver un valor.
 * 
 */

/**
 * @funcionDeclarativa 
 * (Puede invocarse en cualquier parte de nuestro código, incluiso antes de que la función sea declarada).
 * @ejemplo
 */

function saludar(nombre){
  console.log( "Hola, "+ nombre +"!");
}
saludar("mauriciop"); 
 
function obtenerParametros(nombre = "Default", edad = 0, color = "Default") {
  console.log(
    `Dime tu nombre ${nombre} tiene ${edad} su color favorito es ${color}`
  );
}
obtenerParametros("Mauricio", 27, "Rojo");
obtenerParametros();

/**
 * @funcionAnonima
 * (Son aquellas en las que declaras una función y la asignas a una variable.)
 * @ejemplo
 */
 
const funcionAnonima = function () {
  console.log(
    "Esto es una funcion expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion js no dira 'funcion.html:28  Uncaught ReferenceError: Cannot access 'funsionAnonima' before initialization'"
  );
};

funcionAnonima();

const suma = function(a, b){
  console.log( a + b);
}

suma(10,20);


/**
 * @funcionFlecha 
 * (Son especialmente útiles para funciones simples y funciones de una sola expresión).
 * @ejemplo
 */

const multiplicar = (a, b) => a * b;

/**
 * @funcionesCallBack 
 * (Se utilizan ampliamente para ejecutar código en respuesta a eventos o después 
 * de que se complete un operacion asincróna).
 * @ejemplo
*/


function sumaCallBack(a, b, callback){
  const resultado = a + b;
  callback (resultado);
}

/**
 * Funcion de callback para mostrar el resultado.
 * @ejemplo
 */

function mostrarResultado(resultado){
  console.log("El resultado es: ", resultado);
}

/** 
 * llamar a la funcion de suma con el callback
 * @ejemplo
 */

sumaCallBack(5,3, mostrarResultado);


/**
 *
*Tenemos una matriz de solicitudes de empleo y queremos seleccionar sólo el
*primer solicitante que cumpla todos los criterios.
 *@ejemplo
 */

let candidatos = [
  { nombre: "aaron", añosDeExperiencia: 18, edad: 66 },
  { nombre: "beth", añosDeExperiencia: 0, edad: 18 },
  { nombre: "cara", añosDeExperiencia: 4, edad: 22 },
  { nombre: "daniel", añosDeExperiencia: 3, edad: 16 },
  { nombre: "ella", añosDeExperiencia: 5, edad: 25 },
  { nombre: "fin", añosDeExperiencia: 0, edad: 16 },
  { nombre: "george", añosDeExperiencia: 6, edad: 28 },
];

let criterios = {
  experienciaMinima: 3,
  edadMinima: 18,
  edadMaxima: 65,
};

let buscarMatrix = candidatos.filter(function (c) {
  return (
    c.añosDeExperiencia >= this.experienciaMinima &&
    c.edad <= this.edadMaxima &&
    c.edad >= this.edadMinima
  );
}, criterios);

console.log(buscarMatrix);
