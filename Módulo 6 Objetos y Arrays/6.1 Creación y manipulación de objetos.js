/**
 * @objeto
 * Es una estructura de datos que puede contener propiedades y métodos. Las 
 * propiedades sin variables que almacen valores, y los métodos son funciones que 
 * realizan acciones.
 * @ejemplo
 */

 const persona = {
  
    firstname: "Mauricio",
    surname: "Pastelin",
    edad: "27",
        saludar: function(){
            console.log(`Hola mi nombre es ${this.firstname} y tengo ${this.edad}`);
        }
    }


    /**
     * Acceso a la propiedad y llamada a métodos del objeto.
     * @ejemplo
     */
    console.log(persona.firstname); 
    console.log(persona.edad);
    persona.saludar();