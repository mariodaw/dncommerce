const express = require("express")
const UserController = require("../controllers/UserController")

const router = express.Router()
router.post("/create",UserController.create)
router.get("/getAll",UserController.getAll)
router.delete("/delete/:id",UserController.delete)
router.put("/update/:id",UserController.update)
module.exports = router