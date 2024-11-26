const { Product,Order, Token, Sequelize } = require("../models/index")//importar modelo
const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');
const  {jwt_secret}  = require('../config/config.json')['development']
const { Op} = Sequelize;

const ProductController = {
    async create(req, res) {
        try {
          // console.log(req.body)
          const product = await Product.create(req.body);
          res.status(201).send({ message: "Producto creado", product });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      
      async getAll(req, res) {
        try {
          const product = await Product.findAll({
            // include:[Order]
            
          });
          res.status(200).send(product);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async delete(req, res) {
        try {
          //eliminar el usuario
          await Product.destroy({
            where: {
              id: req.params.id,
            },
          });
          res.send({ message: `Product with id ${req.params.id} deleted` });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async update(req, res) {
        try {
          await Products.update(req.body, {
            where: {
              id: req.params.id,
            },
          });
          res.send({ message: "Products successfully updated" });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async getById(req, res) {
        try {
          const product = await Product.findByPk(req.params.id,{
            include:[Order]
          });
          res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"Ha habido un error",error})
          console.error(error);
          res.status(500).send({ message: "Ha habido un error", error });
        }
      },
      async getByDescription(req,res){
        try {
          const product = await User.findAll({
            where:{
              firstName:{
                [Op.like]:`%${req.params.firstName}%`
              }
            }
          })
          res.send(product)
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Ha habido un error", error });
        }
      }
    }

module.exports = ProductController;