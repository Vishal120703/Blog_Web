const express = require('express')
const router = express.Router()

router.get("/SignUp",(req,res)=>{
    res.render("auth/signUp.ejs")
})
router.get("/login",(req,res)=>{
    res.render("auth/login.ejs")
})


module.exports = router
