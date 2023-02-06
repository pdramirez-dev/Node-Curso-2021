const {Schema,model} = require('mongoose');


const UserShecma = Schema({
   name:{
    type:String,
    require:[true,'The name is reuire']
   },
   email:{
    type:String,
    require:[true,'The emailis required'],
    unique: true
   },
   password:{
    type:String,
    required:[true,'The password is required']
   },
   img:{
    type:String,
   },
   role:{
    type:String,
    required:true,
    enum:['ADMIN_ROLE','USER_ROLE']
   },
   state:{
    type:Boolean,
    default:true
   },
   google:{
    type:Boolean,
    default:false
   }
})

module.exports = model('User',UserShecma)