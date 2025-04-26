const User = require("../models/authSchema/signupSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUser = (req,res)=>{
    // res.render("/user/signUp")
    res.render("auth/signup");
}
exports.createUser = async(req,res)=>{
    const {name,email,password} = req.body;
    try{
        const hashing = await bcrypt.hash(password,10)
        const userData = User({name,email,password:hashing});
        await userData.save()
        res.redirect("/user/login");
    }
    catch{
        res.redirect("/user/signup");
    } 
}
exports.getlogin = (req,res)=>{
    res.render("auth/login.ejs")
}
exports.postlogin = async(req,res)=>{
    
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            console.log("User not found");
            return res.redirect("/user/login");
        }
        const isMatch = await bcrypt.compare(password, user.password); // plain password vs hashed
        if (isMatch) {
            const payLoad = user.email;
            const token = jwt.sign(payLoad,"vishal@120703");
            res.cookie("token",token,{ maxAge: 60 * 1000 });
            res.redirect("/user/login");
        } else {
            console.log("Incorrect password");
            res.redirect("/user/login");
        }
    } catch (error) {
        console.error(error);
        res.redirect("/user/login");
    }
    
}

