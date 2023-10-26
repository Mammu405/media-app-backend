//1 import json-server
const jsonserver=require('json-server')

//2 create a server application using jsonserver
const mediaAppServer=jsonserver.create()

//3 set up path for db.json file
const router=jsonserver.router('db.json')

//4 return a middleware used by jsonserver
const middleware=jsonserver.defaults()

//5 setup a port number
const port=process.env.PORT || 4000

//6 use in server
mediaAppServer.use(middleware)
mediaAppServer.use(router)

//7 to run the port
mediaAppServer.listen(port,()=>{
    console.log('json server listen on port '+port);
})
