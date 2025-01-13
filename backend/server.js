const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


mongoose
.connect('mongodb://127.0.0.1:27017/EcommerceStore-follow-along')
.then(()=>console.log('MongoDB Connected'))
.catch(err => console.log('Error connecting to MongoDB',err))


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})