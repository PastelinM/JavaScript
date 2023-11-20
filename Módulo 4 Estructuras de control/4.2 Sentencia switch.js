/**
 * @switch
 * Permite seleccionar entre múltiples casos según el valor de una expresión.
 * @ejemplo
 */

const diaSemana = "Sabado";
switch (diaSemana){
    case "Lunes":
        console.log("Comienza la semana.");
        break;
    case "Martes":
        console.log("Días laborales.");
        break;
        case "Miercoles":
            console.log("Días laborales.");
            break;
        case "Jueves":
        console.log("Días laborales.");
        break;
        case "Viernes":
            console.log("Días laborales.");
            break;
        default:
                console.log("Fin de semana");
}
