require("dotenv").config()
    

const mongoose = require('mongoose')
const connectDatabase = ()=>{

    mongoose
    .connect("mongodb+srv://aravshreyass70:1234567890@e-com-follow-along.tpwnl.mongodb.net/?retryWrites=true&w=majority&appName=E-COM-Follow-along")
    .then((data=>{
        console.log(`DB connected successfully:${data.connection.host}`);
    }))
    .catch((err)=>console.log("DB connection failed..",err.message))
};

module.exports = connectDatabase