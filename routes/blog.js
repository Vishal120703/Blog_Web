const express = require("express")
const router = express.Router()

router.get("/createBlog",(req,res)=>{
    res.render("blog/createBlog.ejs")
})

module.exports= router;