const { Order,User } = require("../models/index");
const OrderController = {
  async create(req, res) {
    try {
      const order = await Order.create(req.body);
      res.status(201).send({ message: "Publicación creada", order });
    } catch (error) {
        console.error(error);
            res.status(500).send({message:"Ha habido un error",error})
    }
  },
  async getAll(req,res){
    try {
        const order = await Order.findAll({
            // include:[User]
            include:{
                model:User,
                attributes:["date","userId"]
            }
        })
        res.status(200).send(order)
    } catch (error) {
        console.error(error);
        res.status(500).send({message:"Ha habido un error",error})
    }
  }
};
module.exports = OrderController;