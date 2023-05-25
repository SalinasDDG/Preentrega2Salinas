//saludo de presentacion y explicacion del proceso
let saludo = alert("¡Hola! Este es el fichero o calculadora de sueldos de nuestra empresa.\n Hubo una semana de vacaciones en la que le pedimos a todo el personal que viniera, pero la asistencia era opcional.\n Necesitamos saber que días vino cada empleado para saber cuanto les corresponderia de bono y de sueldo final.")

//funcion de validar un numero
function validarNumero(numero, mensaje){
    while(isNaN(numero)){
        alert("Ingresaste un valor no numerico, intentalo nuevamente.")
        numero = prompt(mensaje)
    }
    while (numero > 5 ){
        alert("La cantidad de dias trabajados no es valida, intentalo nuevamente.")
        numero = prompt(mensaje)
    }
    return numero;

}


class trabajador{
    constructor(id, nombre, areaTrabajo, sueldoMes){
        this.id = id,
        this.nombre = nombre,
        this.areaTrabajo = areaTrabajo,
        this.sueldoMes = sueldoMes
    }
}

const trabajador1 = new trabajador ("A", "Yamila", "Recursos humanos", 10000);
const trabajador2 = new trabajador ("B", "Max", "Recursos humanos", 10000);
const trabajador3 = new trabajador ("C", "Christian", "Produccion", 15000);
const trabajador4 = new trabajador ("D", "Martin", "Produccion", 15000);
const trabajador5 = new trabajador ("E", "Anabelle", "Administracion", 12000);
const trabajador6 = new trabajador ("F", "David", "Administracion", 12000);

const TRABAJADORES = [trabajador1, trabajador2, trabajador3, trabajador4, trabajador5, trabajador6];



//seleccionar el atrabajador a calcular el bono
function seleccionTrabajador(){
let presentacion = "Que empleado quisiera evaluar, elija el ID que corresponda: \n";
TRABAJADORES.forEach(e => {
    presentacion +=`  ${e.id} - ${e.nombre}, del area de ${e.areaTrabajo} \n `
    })

let eleccionUsuario = prompt (presentacion).toUpperCase()

while ((eleccionUsuario != "A")&&(eleccionUsuario != "B")&&(eleccionUsuario != "C")&&(eleccionUsuario != "D")&&(eleccionUsuario != "E")&&(eleccionUsuario != "F")){
    alert("No entendimos tu respuesta.\n")
    eleccionUsuario = prompt(presentacion).toUpperCase()
}

function trabajadorElegido(id, nombre, areaTrabajo){
    //alert(`Elegiste - ${id} - ${nombre}, del area de ${areaTrabajo}.`)
}
switch (eleccionUsuario){
    case "A":
    trabajadorElegido("A", "Yamila", "Recursos humanos")
    break;
    case "B":
    trabajadorElegido("B", "Max", "Recursos humanos")
    break;
    case "C":
    trabajadorElegido("C", "Christian", "Produccion")    
    break;
    case "D":
    trabajadorElegido("D", "Martin", "Produccion")
    break;
    case "E":
    trabajadorElegido("E", "Anabelle", "Administracion")
    break;
    case "F":
    trabajadorElegido("F", "David", "Administracion")
    break;
    default:
    alert ("La eleccion no corresponde con un empleado activo.")
    break;
}
return TRABAJADORES.find(elem => elem.id === eleccionUsuario)
};


const trabajadorElegido = seleccionTrabajador()

//cuantas veces vino a trabajar en la semana 
let diasTrabajados = prompt("¿Cuántos dias de la semana se presentó a trabajar?");
diasTrabajados = validarNumero(diasTrabajados,"¿Cuántos dias de la semana se presentó a trabajar?")



//monto del bono que le corresponde
function  calculoBono(numero){ 
    monto = numero * 2000;
    return monto;
} 

let montoBono = calculoBono(diasTrabajados)

//calculo sueldo final
function calculoSueldo(numero){
    monto = numero + trabajadorElegido.sueldoMes;
    return monto;
} 

let sueldoFianl = calculoSueldo(montoBono)


alert(`El sueldo base de ${trabajadorElegido.nombre} es de $${trabajadorElegido.sueldoMes}.\n
Por venir a trabajar ${diasTrabajados} dias le corresponden $${montoBono} de Bono.\n
Su sueldo final para este mes es de $${sueldoFianl}`)



