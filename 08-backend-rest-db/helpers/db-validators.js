const Role = require("../models/role");
const User = require("../models/user");

const isRolValid = async (role = "") => {
  const existRol = await Role.findOne({ role });
  if (!existRol) {
    throw new Error(`This role ${role} not isen't in the DB`);
  }
};

const existEmail = async (email = "") => {
  // verificar si el email existe
  const existeEmail = await User.findOne({ email });
  if (existeEmail) {
    throw new Error(`The email : ${email} is in use`);
  }
};

module.exports = {
  isRolValid,
  existEmail
};
