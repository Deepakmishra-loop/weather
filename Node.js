const express= require("express");
const fs=require("fs");
const path=require("path");



const app=express();

const port=process.env.PORT || 3000
const staticpath=path.join(__dirname);

app.use(express.static(staticpath));
app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));

})

app.listen(port,(req,res)=>{
    console.log("server listenning..........");
    console.log(`http://localhost:${port}`)
})