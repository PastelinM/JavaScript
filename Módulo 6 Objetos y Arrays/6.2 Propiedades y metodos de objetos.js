/**
 * Definición de un objeto con propiedades.
 */

const persona = {
    nombre: "Mauricio",
    edad: 28,
    ciudad: "Cordoba"
};

console.log(persona.nombre); // Mauricio"
console.log(persona['edad']); // 28


/**
 * Modificar propiedades
 * @ejemplo
*/

persona.edad = 31;
console.log(persona.edad); // 31

/**
 * Métodos
 * Son funciones que están definidas dentro de un objeto.
 */

const persona = {
    nombre: "Adrian",
    edad: 11,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

persona.saludar(); // "Hola, mi nombre es Adrian"

/**
 * Uso de this
*/

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    mostrarDetalles: function() {
        console.log(`Coche: ${this.marca} ${this.modelo}`);
    }
};

coche.mostrarDetalles(); // "Coche: Toyota Corolla"

/**
 * Usando constructor de objetos
*/

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log(`Hola, soy ${this.nombre}`);
    };
}

const persona1 = new Persona("Albina", 25);
persona1.saludar(); // "Hola, soy Albina"

/**
 * Métoodoos de objeto integrados
 */


const persona = {
    nombre: "Mauricio",
    edad: 28,
    ciudad: "Cordoba"
};

const keys = Object.keys(persona);
console.log(keys); // ["nombre", "edad", "ciudad"]

/**
 * Resumen
 * Propiedades: Son atributos que contienen información sobre el objeto.
 * Méttodos: Métodos: Son funciones que realizan acciones relacionadas con el objeto y pueden acceder a sus propiedades usando this.
 */

