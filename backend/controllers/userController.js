const ErrorHandler = require("../utils/ErrorHandler.js");
const UserModel = require("../model/user.model.js");
const transporter = require("../utils/sendmail.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config({
  path: "../config/env",
});
async function CreateUSer(req, res) {
    const { name, email, password } = req.body;
    console.log(req.body)
    const CheckUserPresent = await UserModel.findOne({
      email: email,
    });
  
    if (CheckUserPresent) {
      const error = new ErrorHandler("User is already present in database", 400);
  
      return res.status(404).send({
        message: error.message,
        status: error.statusCode,
        success: false,
      });
    }
  
    const newUser = new UserModel({
      name,
      email,
      password,
    });
  
    const data = {
      name,
      email,
      password,
    };
    await newUser.save();
    return res.send("User Created Successfully");
  }