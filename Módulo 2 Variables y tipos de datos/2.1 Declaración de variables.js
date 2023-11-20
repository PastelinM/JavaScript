/**
 * @var
 * Tienen un alcance de función, lo que significa que están disponibles en la 
 * función en la que se declaran.
 * 
 * @ejemplo
 */

function ejemplo() {
    var x = 10;
    if (true) {
      var y = 20;
      console.log(x); // x es accesible aquí
    }
    console.log(y); // y es accesible aquí (¡incluso fuera del bloque if!)
  }
  

/**
 * @let
 * Esto significa que son visibles solo dentro del bloque en la que se declaran.
 * @ejemplo
 */

function ejemplo() {
    let x = 10;
    if (true) {
      let y = 20;
      console.log(x); // x es accesible aquí
    }
    console.log(y); // y NO es accesible aquí (fuera del bloque if)
  }

  
/**
 * @const
 * Deben asignarse un valor al declararlas y no pueden reasignarse.
 * Nota: Esto generará un error, ya que no se puede reasignar una variable.constante.
 * @ejemplo
 */

const pi = 3.14159;
pi = 3;  //Error