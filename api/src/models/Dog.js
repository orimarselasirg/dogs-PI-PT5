const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id : {
      type : DataTypes.INTEGER,
      // defaultValue : DataTypes.UUIDV4,
      autoIncrement : true,
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height : {
      type : DataTypes.STRING,
      allowNull: false
    },
    weight : {
      type : DataTypes.STRING,
      allowNull: false
    },
    life_span : {
      type : DataTypes.STRING,
      allowNull: true
    },
    image : {
      type : DataTypes.BLOB,
      allowNull: true
    },
    temperament : {
      type : DataTypes.STRING,
      allowNull: true
    }
  },{
    initialAutoIncrement : 1000,
  });
};
