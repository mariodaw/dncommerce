const express = require("express")
const OrderController = require("../controllers/OrderController")
const { authentication,isAdmin } = require("../middleware/authetication")
const router = express.Router()

router.post("/create",OrderController.create)
router.get("/getAll", authentication, isAdmin, OrderController.getAll)
// usar estos permisos con el resto del crud
module.exports = router