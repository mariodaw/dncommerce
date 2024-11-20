const express = require("express")
const app = express()
const PORT = 3000
app.use(express.json())//parsea body si no ponemos esto req.body es undefined
app.use("/users",require("./users.js"))
app.use("/posts",require("./routes/orders.js"))
app.listen(PORT,()=> console.log("Servidor a nivel de Españita en "+PORT))
