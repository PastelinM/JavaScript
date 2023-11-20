/**
 * @break
 * Se utiliza para salir inmediatamente de un bucle cuando se alcanza una cierta condición.
 * Se utiliza principalmente para finalizar prematuramente un bucle cuando se ha
 * cumplido una condición especifica.
 * @ejemplo
 */

for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break; // Sale del bucle cuando i es igual a 3
    }
    console.log(i);
  }
  // Resultado: 0 1 2

  
  /**
   * @continue
   * La declaración continue se utiliza para saltar la iteración actual
   * de un bucle y continuar con la siguiente iteración.
   * Nota: Resultado: 0 1 3 4
   * @ejemplo
   */

  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue; // Salta la iteración cuando i es igual a 2
    }
    console.log(i);
  }