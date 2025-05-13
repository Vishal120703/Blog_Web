const path = require("path")
const multer = require("multer")
const fs = require('fs')

const uploadDir = path.join(__dirname, '..', 'upload/new');

// Check if folder exists; if not, create it
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: ((req,res,cb)=>{
        cb(null,uploadDir)
    }),
    filename:((req,file,cb)=>{
        const header = Date.now();
        cb(null, header + path.extname(file.originalname));
    })
    
})
const upload = multer({storage:storage})

module.exports = upload;