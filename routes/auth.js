const express = require('express')
const router = express.Router()

router.get("/SignUp",(req,res)=>{
    res.render("auth/signUp.ejs")
})


module.exports = router
