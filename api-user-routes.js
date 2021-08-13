const express = require("express")
const router = express.Router()

const registrationController = require("./app/controller/registrationController")

router.route("/signup").post(registrationController.signup)
router.route("/login").post(registrationController.login)
module.exports = router 