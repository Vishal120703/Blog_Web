const Blog = require("../models/blogs/AllBlogs");
exports.getBlog = (req,res)=>{
    res.render("blog/createBlog")
}
exports.postBlog = async(req,res)=>{
    const {title,content,image,user,author,createdAt} = req.body;
    const newBlog = Blog({title,content,image,user,author,createdAt});
    await newBlog.save();
    res.redirect("/blog/createBlog");
}
exports.getAllBlog = async(req,res)=>{
    try{
        const blog = await Blog.find();
        res.render("blog/showBlog",{blog});
    }
    catch{
        res.send("this is error");
    }
}
