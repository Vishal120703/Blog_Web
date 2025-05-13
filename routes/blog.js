const express = require("express")
const router = express.Router()
const blogController = require("../controller/blogController");
const upload = require("../middleware/multerConfig");

router.get("/createBlog",blogController.getBlog)
router.post("/createBlog",upload.single('image'),blogController.postBlog)
router.get("/AllBlog",blogController.getAllBlog)

module.exports= router;