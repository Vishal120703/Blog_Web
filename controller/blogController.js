const Blog = require("../models/blogs/AllBlogs");


exports.getBlog = (req,res)=>{
    res.render("blog/createBlog")
}
exports.postBlog = async (req, res) => {
  res.send("file uploaded");
};

exports.getAllBlog = async(req,res)=>{
    try{
        const blog = await Blog.find();
        res.render("blog/showBlog",{blog});
    }
    catch{
        res.send("this is error");
    }
}
