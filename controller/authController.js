const User = require("../models/authSchema/signupSchema")
const bcrypt = require('bcrypt');

exports.getUser = (req,res)=>{
    res.render("auth/signUp.ejs")
}
exports.createUser = async(req,res)=>{
    const {name,email,password} = req.body;
    try{
        const hashing = await bcrypt.hash(password,10)
        const userData = User({name,email,password:hashing});
        await userData.save()
        res.redirect('/user/login');
    }
    catch{
        res.redirect("/user/Signup");
    } 
}
exports.getlogin = (req,res)=>{
    req.render("/user/login")
}

