const axios = require("axios");
class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];
  constructor() {
    // Leer DB si existe;
  }
  async ciudad(lugar = "") {
    try {
      console.log(lugar);
      const resp = await axios.get("");
      return [];
    } catch (error) {
        return [];
    }
  }
}
module.exports = Busquedas;
