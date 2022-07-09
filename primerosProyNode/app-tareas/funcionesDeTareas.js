const fs = require("fs");

let listaDeTareas = {
  archivo: "./tareas.json",
  readJSON: function () {
    return JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
  },
  writeJSON: (tareas) => {  //se puede usar () => pero NO EL THIS!!!!
    fs.writeFileSync("./tareas.json", JSON.stringify(tareas)); //aca tenia el this.archivo.
  },  
  saveTask(tarea) {
    let arrayTareas = this.readJSON();
    arrayTareas.push(tarea); //sumo al array UNA tarea
    this.writeJSON(arrayTareas);
  },
  filterByState(estado) {
    let tareas = this.readJSON();
    let tareasFiltradas = tareas.filter((tarea) => {
      return tarea.estado === estado;
    });
    return tareasFiltradas;
  },
  filterByTitle(titulo) {
    let titulos = this.readJSON();
    let titulosFiltrados = titulos.filter((tarea) =>  tarea.titulo === titulo);
    return titulosFiltrados;
  },
};

function manageOrders() {
  let order = process.argv[2];
  let tareas = listaDeTareas.readJSON();

  switch (order) {
    case "listar":
      console.log(`Listado de tareas\n----------------------`);
      tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`);
      });
      break;
    case undefined:
      console.log(
        `Atención - Tienes que pasar una acción\nLas acciones disponibles son: listar 
---------------------------------`
      );
      break;
    case "filtrar":
      let estado = process.argv[3];
      estado == "pendiente" || estado == "terminada" 
        ? console.log(listaDeTareas.filterByState(estado))
        : console.log('Probemos filtrando por titulo')
      estado != "pendiente" && estado != "terminada"
        ? console.log(listaDeTareas.filterByTitle(estado))
        : null
      break;
    case "crear":
      console.log("creando tarea");
      let titulo = process.argv[3];
      if (titulo) {
        let tarea = {
          titulo: titulo,
          estado: "pendiente",
        };
        listaDeTareas.saveTask(tarea);
        console.log("tarea creada");
      } else {
        console.log("no se pudo crear tarea");
      }

      break;
    default:
      console.log("No entiendo qué quieres hacer");
  }
}

module.exports = manageOrders;
