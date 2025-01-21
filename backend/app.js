const express = require('express')
const userRouter=require('./routes/userRoutes.js');
const productRouter = require('./routes/productRoutes.js')
const cors = require('cors');




if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path : "backend/config/.env",
    });
}


const app = express();
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("Welcome to the backend")
})

app.use("/user",userRouter)
app.use('/product',productRouter)

module.exports = app;