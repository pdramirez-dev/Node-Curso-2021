const { leerInput, inquireMenu, pausa } = require("./helpers/inquirer");
const Busqueda = require("./models/busqueda");

require("colors");
const main = async () => {
  let opt;
  const busqueda = new Busqueda();

  do {
    opt = await inquireMenu();
    switch (opt) {
      case 1:
        const lugar = await leerInput("Ciudad:");
        console.log(lugar);

        console.log("\nInformacion de la ciduad".blue);
        console.log("Ciudad:");
        console.log("Lat:");
        console.log("Long:");
        console.log("Temperatura:");
        console.log("Minima:");
        console.log("Maxima:");
        break;
      case 2:
        break;
      case 0:
        break;

      default:
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
