
//SERVER
const express = require("express");
const server = express();
const PORT = 3001;
const router =require ('./src/routes/index')

 
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

//Middleware para parsear el cuerpo de la solicitud a JSON
server.use(express.json());

//Middleware para agregar el string "/rickandmorty" antes de las rutas
server.use('/rickandmorty', router);


//SERVER
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

