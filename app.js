const express = require('express');
const router = require("./src/routes/api");
const app = express();




//security middleware import: =========================>
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const bodyParser = require('body-parser');


//security middleware implement: =========================>

app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(rateLimit());
app.use(mongoSanitize());
app.use(xss());

app.use(bodyParser.json());


//mongodb database connection 

//let URI = "atlas connection link goes here";
//let OPTION = {user : '' , pass : ''};

let URI = "mongodb://localhost:27017/school";
let OPTION = {user: "", pass: ""};
mongoose.connect(URI, OPTION , (err) =>{
    console.log("connection success mongodb with mongoose");
    console.log(err);
});



app.use("/api/v1", router);



//undefine route:
app.use('*',(req,res)=>{
    res.status(404).send("404! file is not found")
})


module.exports = app;
