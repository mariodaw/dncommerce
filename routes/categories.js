const express = require("express")
const CategoryController = require("../controllers/CategoryController")
const { authentication } = require("../middleware/authetication")
const router = express.Router()

router.post("/create", authentication, CategoryController.create)
module.exports = router