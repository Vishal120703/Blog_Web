const express = require("express")
const router = express.Router()
const blogController = require("../controller/blogController");

router.get("/createBlog",blogController.getBlog)
router.post("/createBlog",blogController.postBlog)
router.get("/AllBlog",blogController.getAllBlog)

module.exports= router;