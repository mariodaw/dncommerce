const { Category,Order, Token, Sequelize } = require("../models/index")//importar modelo

const { Op} = Sequelize;

const CategoryController = {
    async create(req, res) {
        try {
          // console.log(req.body)
          const category = await Category.create(req.body);
          res.status(201).send({ message: "Categoria creado", category });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      }
    }
    module.exports = CategoryController;