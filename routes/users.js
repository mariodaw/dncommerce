const express = require("express")
const UserController = require("../controllers/UserController")

const router = express.Router()
router.post("/create",UserController .create)
router.post("/create",UserController.getAll)
module.exports = router