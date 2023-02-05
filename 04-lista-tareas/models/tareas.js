const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }
  constructor() {
    this._listado = {};
  }

  cargarTareas(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      const indx = `${index + 1}`.green;
      const { desc, completadoEn } = tarea;
      console.log(
        `${indx}.${desc}::${
          completadoEn ? "Completada".green : "Pendiente".red
        }`
      );
    });
  }
  listarPendientesCompletadas(completadas = true) {
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      if (completadas) {
        if (completadoEn) {
          contador += 1;
          console.log(
            `${(contador + ".").green}${desc}::${completadoEn.green}`
          );
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(`${(contador + ".").green}${desc}::${"Pendiente".red}`);
        }
      }
    });
  }
  eliminarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });
    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}
module.exports = Tareas;
