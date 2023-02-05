require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("==========================".green);
    console.log("  Seleccione una opcion".green);
    console.log("==========================".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar  tareas`);
    console.log(`${"3.".green} Listar Tareas Completadas`);
    console.log(`${"4.".green} Listar Tareas Pendientes`);
    console.log(`${"5.".green} Completar Tareas`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir \n`);

    const readline = require('readline').createInterface({
      input:  process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion:", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};
const pausa = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"Enter".green} para continuar `, () => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
