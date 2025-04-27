const express = require("express")
const router = express.Router()
const blogController = require("../controller/blogController");

router.get("/createBlog",blogController.getBlog)
router.post("/createBlog",blogController.postBlog);

module.exports= router;