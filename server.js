const {readdirSync}=require('fs');
const path =require('path');
const express =require('express');
const helmet = require('helmet');
const cors =require('cors');
const mongoose =require('mongoose');
const morgan = require('morgan');
const bodyParser= require('body-parser');
require("dotenv").config();

const app =express();



app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());
app.use(bodyParser.json());


readdirSync('./routers').map(r => app.use("/api/v1" , require(`./routers/${r}`)));


const port =process.env.PORT|| 8000;

mongoose
.connect(process.env.DATABASE)
.then(()=>{
    app.listen(port,()=>{
        console.log(`connention successfully ${port}`);
    })
})
.catch((err)=>{
    console.log(err);
})