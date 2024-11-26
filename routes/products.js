const express = require("express")
const ProductController = require("../controllers/ProductController")
const { authentication, isAdmin } = require("../middleware/authetication")
const router = express.Router()

router.post("/create",ProductController.create)
router.get("/getAll",ProductController.getAll)
router.delete("/delete/:id",ProductController.delete)
router.put("/update/:id", authentication ,ProductController.update)
router.get("/id/:id",ProductController.getById)
router.get("/description/:description",ProductController.getByDescription)
module.exports = router