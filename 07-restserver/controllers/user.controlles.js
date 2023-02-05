const {response} = require('express');


const getUsers = (req,res=response)=>{
  res.json({
    name: "Pablo E",
    email: 'pablo@gmail.com'
  })
}

const postUser = (req,res)=>{
  res.json({
     'msg': "API POST"
  })
}

const putUser = (req,res)=>{
  res.json({
    'msg': "API PUT"
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