const express=require('express')
const app=express()
const http=require('http')
const expressServer=http.createServer(app)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
const PORT=process.env.PORT || 3000
expressServer.listen(PORT,()=>{
    console.log('server run port '+ PORT)
})