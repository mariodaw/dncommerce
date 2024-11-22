const express = require("express")
const UserController = require("../controllers/UserController")
const { authentication } = require("../middleware/authetication")


const router = express.Router()
router.post("/create",UserController.create)
router.get("/getAll", authentication , UserController.getAll)
router.delete("/delete/:id",UserController.delete)
router.put("/update/:id", authentication ,UserController.update)
router.post('/login',UserController.login)
router.delete('/logout',authentication,UserController.logout)

module.exports = router