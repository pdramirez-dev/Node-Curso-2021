const {response,request} = require('express');
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
  const body = req.body;
  const user = new User(body);
  await user.save();
  res.json({
     msg: "post user ",
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