const {response,request} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const getUsers = (req=request,res=response)=>{
  const {q,nombre,apikey,limit,page=1} = req.query;
  res.json({
    q,
    nombre,
    apikey,
    limit,
    page
  })
}

const postUser = async (req,res)=>{
  const {name,email,password,role} = req.body;
  const user = new User({name,email,password,role});
  // verificar si el email existe
  // Encriptar password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password,salt);

  user.password = 
  // Save Data en BD
  await user.save();
  res.json({
     user
  })
}

const putUser = (req,res)=>{
  const {id} =  req.params;
  res.json({
    'msg': "put method",
    id
 })
}

const deleteUser = (req,res)=>{
  res.json({
    'msg': "API DELETE"
 })
}


module.exports ={
  getUsers,
  postUser,
  putUser,
  deleteUser
}