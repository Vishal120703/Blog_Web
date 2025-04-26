const express = require('express')
const router = express.Router()
const authController = require("../controller/authController")
const {verifyTokens} = require("../middleware/verifyToken")

router.get("/SignUp",authController.getUser);
router.post("/SignUp",authController.createUser);
router.get("/login",authController.getlogin)
router.post("/login",authController.postlogin)
router.get("/",verifyTokens)

module.exports = router
