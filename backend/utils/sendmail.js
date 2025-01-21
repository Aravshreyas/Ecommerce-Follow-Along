const nodemailer = require('nodemailer')
require('dotenv').config();

const transporter = nodemailer.createTransport({
    secure:true,
    host:'smtp.gmail.com',
    port:465,
    auth:{
        user: "advaysaim18@gmail.com",
        pass: "rhgj iidk bgtv bdnc",

    }
})
function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    });
    console.log("mail sent")
}
// sendMail("arav.shreyas.s70@kalvium.community","This is my subject","this email is using nodemailer working")
module.exports = transporter