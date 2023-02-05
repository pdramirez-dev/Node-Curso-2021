require("colors");
const {
  inquireMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/storeFile");

const Tareas = require("./models/tareas");
console.clear();
const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();
  //await pausa();
  if (tareasDB) {
    // establecer tareas
    tareas.cargarTareas(tareasDB);
  }
  do {
    opt = await inquireMenu();
    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas();
        break;

      case "4":
        tareas.listarPendientesCompletadas(false);
        break;

      case "5":
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("Estas Seguro ?");
          if (ok) {
            tareas.eliminarTarea(id);
            console.log("Tarea Borrada");
          }
        }

        break;
      default:
        break;
    }
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
