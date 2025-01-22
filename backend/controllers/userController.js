const ErrorHandler = require("../utils/ErrorHandler.js");
const UserModel = require("../models/userModel.js");
const transporter = require("../utils/sendmail.js");
const cloudinary = require('../utils/cloudinary.js');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config({
  path: "../config/env",
});



const generateToken = (data) => {
  // jwt
  const token = jwt.sign(
    { name: data.name, email: data.email },
    process.env.SECRET_KEY
  );
  return token;
};



const verifyUser = (token) => {
  const verify = jwt.verify(token, process.env.SECRET_KEY);
  if (verify) {
    return verify;
  } else {
    return false;
  }
};

async function verifyUserController(req, res) {
  const { token } = req.params;
  try {
    if (verifyUser(token)) {
      return res
        .status(200)
        .cookie("token", token)
        .json({ token, success: true });
    }
    return res.status(403).send({ message: "token expired" });
  } catch (er) {
    return res.status(403).send({ message: er.message });
  }
}


// async function CreateUSer(req, res) {
//   const { name, email, password } = req.body;
//   console.log(req.body)
//   const CheckUserPresent = await UserModel.findOne({
//     email: email,
//   });

//   if (CheckUserPresent) {
//     const error = new ErrorHandler("User is already present in database", 400);

//     return res.status(404).send({
//       message: error.message,
//       status: error.statusCode,
//       success: false,
//     });
//   }

//   const newUser = new UserModel({
//     name,
//     email,
//     password,
//   });

//   const data = {
//     name,
//     email,
//     password,
//   };

 
  
// //   await transporter.sendMail({
// //     to: "shangeshsixisvv@gmail.com",
// //     from: "simrank04u@gmail.com",
// //     subject: "Verification email for the e-commerce site",
// //     text: "Text",
// //     html: `<h1>Hello world http://localhost:5173/activation/${token}</h1>`,
// //   });

//   await newUser.save();
//   return res.send("User Created Successfully");
// }


const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const checkUserPresentinDB = await UserModel.findOne({ email: email });
    if (checkUserPresentinDB) {
      return res.status(403).send({ message: "User already present" });
    }

    if (req.file) {
      // Upload the avatar to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'avatars',  // Specify folder in Cloudinary
        transformation: [{ width: 200, height: 200, crop: 'fill' }],  // Optional transformation
      });

      avatar = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }


    bcrypt.hash(password, 10, async function (err, hashedPassword) {
      try {
        if (err) {
          return res.status(403).send({ message: err.message });
        }
        await UserModel.create({
          name,
          email,
          password: hashedPassword,
          avatar,
        });

        const data = {
          name,
          email,
          password,
        };

        const token = await generateToken(data);

        console.log(token)

        return res.status(201).send({ message: "User created successfully.." });
      } catch (er) {
        return res.status(500).send({ message: er.message });
      }
    });




    //
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
};
// const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const checkUserPresentinDB = await UserModel.findOne({ email: email });

//     bcrypt.compare(
//       password,
//       checkUserPresentinDB.password,
//       function (err, result) {
//         // result == true
//         if (err) {
//           return res.status(403).send({ message: err.message, success: false });
//         }
//         let data = {
//           id: checkUserPresentinDB._id,
//           email,
//           password: checkUserPresentinDB.password,
//         };
//         const token = generateToken(data);

//         return res
//           .status(200)
//           .cookie("token", token)
//           .send({ message: "User logged in successfully..", success: true });
//       }
//     );

//     // return saying signup first
//   } catch (er) {
//     return res.status(403).send({ message: er.message, success: false });
//   }
// };
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUserPresentinDB = await UserModel.findOne({ email: email });

    if (!checkUserPresentinDB) {
      return res.status(404).send({ message: "User not found", success: false });
    }

    bcrypt.compare(password, checkUserPresentinDB.password, function (err, result) {
      if (err) {
        return res.status(500).send({ message: "Error during password verification", success: false });
      }
      if (!result) {
        return res.status(401).send({ message: "Invalid email or password", success: false });
      }

      const token = generateToken({ id: checkUserPresentinDB._id, email: checkUserPresentinDB.email });
      return res
        .status(200)
        .cookie("token", token, { httpOnly: true })
        .send({ message: "User logged in successfully.", success: true });
    });
  } catch (er) {
    return res.status(500).send({ message: er.message, success: false });
  }
};

module.exports = {
  // CreateUSer,
  login,
  verifyUserController,
  signup,
  verifyUser
};