const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea Hacer ?",
    choices: [
      {
        value: 1,
        name: `${"1.".green} Buscar Ciudad`,
      },
      {
        value: 2,
        name: `${"2.".green} Historial`,
      },
     
     
      {
        value: 0,
        name: `${"0.".green} Salir`,
      },
    ],
  },
];


const inquireMenu = async () => {
  console.clear();
  console.log("==========================".green);
  console.log("  Seleccione una opcion".green);
  console.log("==========================".green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"enter".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      tye: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }

        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquireMenu,
  pausa,
  leerInput,
  
};
