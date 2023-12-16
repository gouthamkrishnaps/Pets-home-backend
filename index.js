//import json server library 
const jsonServer = require('json-server')

//create json server
const petsHomeServer = jsonServer.create()

//creating path
const router = jsonServer.router('database.json')

//middleware to convert json to js
const middleware = jsonServer.defaults()

//use middleware and router in server
petsHomeServer.use(middleware)
petsHomeServer.use(router)

//setup port for running server
const port = 5000 || process.env.port

//to listen server for resolving request from client
petsHomeServer.listen(port,()=>{
    console.log(`Pets-Home server started running at ${port} and waiting for request`);
})