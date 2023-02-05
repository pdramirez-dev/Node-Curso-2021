const { json } = require('express');
const express = require('express');
const cors = require('cors');
class Server{
   constructor(){
    this.app = express();
    this.port = process.env.PORT;
    //Middlewares
    this.middlewares();
    // Rutas de mi aplicacion 
    this.routes();

   }

   middlewares(){
      //cors
      this.app.use(cors())
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