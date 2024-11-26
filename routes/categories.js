const express = require("express")
const CategoryController = require("../controllers/CategoryController")
const { authentication } = require("../middleware/authetication")
const router = express.Router()

router.post("/create", authentication, CategoryController.create)
router.get("/getAll", CategoryController.getAll)
router.delete("/delete/:id",CategoryController.delete)
router.put("/update/:id", authentication ,CategoryController.update)
module.exports = router