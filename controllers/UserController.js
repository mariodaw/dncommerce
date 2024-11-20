const { User,Order } = require("../models/index")//importar modelo
const bcrypt = require("bcryptjs");
const UserController = {
    async create(req, res) {
        try {
          // console.log(req.body)
          req.body.password = await bcrypt.hash(req.body.password, 10);
          const user = await User.create(req.body);
          res.status(201).send({ message: "Usuario creado", user });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async getAll(req, res) {
        try {
          const users = await User.findAll({
            // include:[Order]
            include: {
              model: Order,
              attributes: ["date", "UserId"],
            },
          });
          res.status(200).send(users);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async delete(req, res) {
        try {
          //eliminar las publicaciones del usuario
          await Order.destroy({
            where: {
              UserId: req.params.id,
            },
          });
          //eliminar el usuario
          await User.destroy({
            where: {
              id: req.params.id,
            },
          });
          res.send({ message: `User with id ${req.params.id} deleted` });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
};
module.exports = UserController;