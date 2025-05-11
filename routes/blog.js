const express = require("express")
const router = express.Router()
const blogController = require("../controller/blogController");
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });



router.get("/createBlog",blogController.getBlog)
router.post("/createBlog",upload.single('image'),blogController.postBlog);
router.get("/AllBlog",blogController.getAllBlog)

module.exports= router;