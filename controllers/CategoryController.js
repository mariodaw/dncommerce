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
      },
      
      async getAll(req, res) {
        try {
          const category = await Category.findAll({
            // include:[Order]
            
          });
          res.status(200).send(category);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async delete(req, res) {
        try {
          //eliminar el usuario
          await Category.destroy({
            where: {
              id: req.params.id,
            },
          });
          res.send({ message: `Category with id ${req.params.id} deleted` });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async update(req, res) {
        try {
          await Category.update(req.body, {
            where: {
              id: req.params.id,
            },
          });
          res.send({ message: "Category successfully updated" });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async getById(req, res) {
        try {
          const categories = await Category.findByPk(req.params.id,{
            include:[Order]
          });
          res.send(categories);
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"Ha habido un error",error})
          console.error(error);
          res.status(500).send({ message: "Ha habido un error", error });
        }
      },
      async getByName(req,res){
        try {
          const categories = await Category.findAll({
            where:{
              Name:{
                [Op.like]:`%${req.params.Name}%`
              }
            }
          })
          res.send(categories)
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Ha habido un error", error });
        }
      }
    }
    module.exports = CategoryController;