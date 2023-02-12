const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.MONGODB_CONN);
    console.log("Base de Datos Online");
  } catch (err) {
    console.log("Base de Datos no iniciada correctamente ");
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = {
  dbConnection,
};
