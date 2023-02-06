const {response,request} = require('express');


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

const postUser = (req,res)=>{
  const {nombre,edad} = req.body;
  res.json({
     msg: "post user ",
     nombre,
     edad
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