const Blog = require("../models/blogs/AllBlogs");
exports.getBlog = (req,res)=>{
    res.render("blog/createBlog")
}
exports.postBlog = (req,res)=>{
    console.log(req.body);
    res.redirect("/");
}