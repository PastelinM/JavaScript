/**
 * @manejoErrores
 * Es esencial para asegurarte de que tu codigo se comporte de manera robusta y predecible ante situciones inesperadas.
 */


try {
    // Código que podría generar un error
} catch (error) {
    //manejo del error
    console.error("Ocurrio un error: ", error);
}


/**
 * @excepcionesPersonalizadas
 */

function miFuncion (valor){
    if (valor < 0) {
        throw new Error("El valor no puede ser negativo");
    }
    return valor;
}

try {
    miFuncion(-5);
} catch (error) {
    console.log(error.message);
}

/**
 * @ErroresAsincronas
 * Proporciona una forma más legible de manejar promesas.
 */

async function obtenerDatosDeUsuario(id) {
    try {
      const respuesta = await fetch(`https://api.example.com/users/${id}`);
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      throw new Error(`Error al obtener los datos del usuario: ${error.message}`);
    }
  }
  
  async function mostrarDatosDeUsuario(id) {
    try {
      const datos = await obtenerDatosDeUsuario(id);
      console.log("Datos del usuario:", datos);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  mostrarDatosDeUsuario(123); // Cambia el ID según lo necesario
  mostrarDatosDeUsuario(999); // Cambia el ID según lo necesario
  

