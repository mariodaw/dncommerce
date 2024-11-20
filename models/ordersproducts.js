'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordersProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ordersProducts.init({
    ProductId: DataTypes.INTEGER,
    Orderid: DataTypes.INTEGER,
    quantify: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ordersProducts',
  });
  return ordersProducts;
};