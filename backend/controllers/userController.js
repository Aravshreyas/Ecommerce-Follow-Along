const User = require('../models/user.js');

exports.createUser = async (req,res) =>{
    try{
        const {name,email,password}= req.body;
        const newUser = new User({name,email,password});
        await newUser.save();
        res.status(201).json(newUser);
    } catch(err){
        res.status(400).json({message:'Error Creating User',err});
    }
}
