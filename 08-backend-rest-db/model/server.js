const { json } = require('express');
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server{
   constructor(){
    this.app = express();
    this.port = process.env.PORT;
    // conect DB
    this.conectDB();
    //Middlewares
    this.middlewares();
    // Rutas de mi aplicacion 
    this.routes();

   }

   async conectDB(){
      await dbConnection();
   }

   middlewares(){
      //cors
      this.app.use(cors());
      //Lectura y parseo del body a json
      this.app.use(express.json());
      // directorio publico 
      this.app.use(express.static('public'));

   }

   routes(){
      this.app.use('/api/users', require('../routes/user'));
   }
          
   start (){
      this.app.listen(this.port,()=>{
         console.log("Servidor Corriendo en Puerto ", process.env.PORT);
     });
   }
   

}


module.exports = Server;