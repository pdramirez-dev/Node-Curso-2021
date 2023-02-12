const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");

const getUsers = (req = request, res = response) => {
  const { q, nombre, apikey, limit, page = 1 } = req.query;
  res.json({
    q,
    nombre,
    apikey,
    limit,
    page,
  });
};

const postUser = async (request, response) => {
  const { name, email, password, role } = request.body;
  const user = new User({ name, email, password, role });

  // Encriptar password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  // Save Data en BD
  await user.save();
  response.json({
    user,
  });
};

const putUser = async (request, response) => {
  const { id } = request.params;
  const {_id, password,google,email, ...resto } = request.body;
  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, resto);
  // Todo validar contra base de datos
  response.json({
    msg: "put method",
    user,
  });
};

const deleteUser = (req, res) => {
  res.json({
    msg: "API DELETE",
  });
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
