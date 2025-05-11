const Blog = require("../models/blogs/AllBlogs");
const multer = require('multer');

exports.getBlog = (req,res)=>{
    res.render("blog/createBlog")
}
exports.postBlog = async (req, res) => {
  try {
    const { title, content, user, author, createdAt } = req.body;
    const image = req.file ? req.file.filename : null;

    const newBlog = new Blog({
      title,
      content,
      image,
      user,
      author,
      createdAt: createdAt || new Date()
    });

    await newBlog.save();
    res.redirect("/blog/createBlog");
  } catch (error) {
    console.error("Error posting blog:", error);
    res.status(500).send("Internal Server Error");
  }
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
