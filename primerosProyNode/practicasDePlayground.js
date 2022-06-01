/* METODOS DE OBJECT LITERALS
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        return this.energia -= horas * 5, this.experiencia += horas * 2
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
*/

let tengoQueTrabajar = (dia) => {
  return dia == "sabado" || dia == "domingo"
    ? "No tenes que ir a trabajar"
    : "Si Pancho, tenes que ir a trabajar";
  //    if (dia == 'sabado' || dia == 'domingo') {
  //        return 'No tenes que ir a trabajar'
  //     } else {
  //         return 'Si Pancho, tenes que ir a trabajar'
  //     }
};
console.log(tengoQueTrabajar("domingo"));

let saludar = (nombre, apellido) => {
  return `Hola, ${nombre} ${apellido}!`;
};
//console.log(saludar("juan", "perez"));

function tengoClases(dia) {
  switch (dia) {
    case "lunes":
    case "miércoles":
    case "viernes": {
      console.log("tenés clases");
      break;
    }
    default:
      console.log("no tenés clases");
      break;
  }
}
// tengoClases("lunes");
// tengoClases("martes");
// tengoClases("miércoles");
// tengoClases("jueves");
// tengoClases("viernes");
// tengoClases("sábado");
// tengoClases("domingo");


console.log('trabajando con ternarios')

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = (bicicletaA.rodado > bicicletaB.rodado) ? 
    bicicletaA :
    bicicletaB

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );