const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const Message = require('./src/models/registers')
// const port = process.env.PORT || 3001;
//express app
// const app = express();
// const express=require("express"); 
const app=express();  
const path=require("path");
// require("./db/conn");
const Register=require("./src/models/registers");
const port=process.env.PORT || 3000; 
console.log(path.join(__dirname,"public")); 
const static_path=path.join(__dirname,"public");  
app.use(express.json()); 
app.use(express.static('public'));
app.use(express.urlencoded({extended:true})); 




const dbURI="mongodb+srv://db:asn@7829@test.xtmowdy.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI,{ useNewUrlParser:true , useUnifiedTopology:true})
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      dbURI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

app.get("/",(req,res)=> { 
    res.send("Hellloooo");
}); 
 app.get("/index",(req,res) => {
    res.render("index");
 }); 
 app.post('/',function(req,res){
    const msg = new Message(req.body);
    msg.save()
    .then((result) =>{
        res.redirect('/success.html')
        
    })
    .catch((err) =>{
        console.log(err);
        res.redirect('/error.html')
    });
})
app.listen(port,()=> { 
    console.log(`server is running at port no ${port}`); 

})