const express=require('express')
const app=express()
const http=require('http')
const expressServer=http.createServer(app)
const {Server}=require('socket.io')
let io=new Server(expressServer);

io.on('connection',(socket)=>{
    console.log('New User Connected')
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
const PORT=process.env.PORT || 3000
expressServer.listen(PORT,()=>{
    console.log('server run port '+ PORT)
})