const { User,Order, Token, Sequelize } = require("../models/index")//importar modelo
const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');
const  {jwt_secret}  = require('../config/config.json')['development']
const { Op} = Sequelize;


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
      login(req,res){
        User.findOne({
            where:{
                email:req.body.email
            }
        }).then(user=>{
          if(!user){
              return res.status(400).send({message:"Usuario o contraseña incorrectos"})
          }
          const isMatch = bcrypt.compareSync(req.body.password, user.password);
          if(!isMatch){
              return res.status(400).send({message:"Usuario o contraseña incorrectos"})
          }
          let token = jwt.sign({ id: user.id }, jwt_secret);
     Token.create({ token, UserId: user.id });
          res.send({ message: 'Bienvenid@' + user.name, user, token });
      })

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
      async update(req, res) {
        try {
          await User.update(req.body, {
            where: {
              id: req.params.id,
            },
          });
          res.send({ message: "User successfully updated" });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Desconectado con éxito' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
        }
    },
    async getById(req, res) {
      try {
        const user = await User.findByPk(req.params.id,{
          include:[Order]
        });
        res.send(user);
      } catch (error) {
          console.error(error);
          res.status(500).send({message:"Ha habido un error",error})
        console.error(error);
        res.status(500).send({ message: "Ha habido un error", error });
      }
    },
    async getByFirstName(req,res){
      try {
        const users = await User.findAll({
          where:{
            firstName:{
              [Op.like]:`%${req.params.firstName}%`
            }
          }
        })
        res.send(users)
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Ha habido un error", error });
      }
    }
};

module.exports = UserController;