const express = require('express')
const router = express.Router()
const authController = require("../controller/authController")

router.get("/SignUp",authController.getUser);
router.post("/SignUp",authController.createUser);
router.get("/login",authController.getlogin)


module.exports = router
