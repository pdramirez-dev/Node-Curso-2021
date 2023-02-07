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

const postUser = async (request,response)=>{
  const {name,email,password,role} = request.body;
  const user = new User({name,email,password,role});
  // verificar si el email existe
  const existeEmail = await User.findOne({email});
  if(existeEmail){
    return response.status(400).json({
      msg:'This email already exits'
    })
  }
  // Encriptar password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password,salt);
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