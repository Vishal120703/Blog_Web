const express = require('express')
const app = express()
const port = 3000
const {main} = require("./config/db")
const authRouter = require("./routes/auth")
const blogRouter = require("./routes/blog")
const adminRouter = require("./routes/admin")
const cookieParser = require('cookie-parser');
const path = require("path")
main();
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("my name is vishal")
})

app.use("/User",authRouter)
app.use("/Blog",blogRouter)
app.use("/Admin",adminRouter)

app.listen(3000,()=>{
    console.log(`the server is running on port : ${port}`);
})