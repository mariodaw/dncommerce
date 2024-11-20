const express = require("express")
const UserController = require("../models/UserController")

const router = express.Router()
router.post("/create",UserController .create)
router.post("/create",UserController.getAll)
module.exports = router