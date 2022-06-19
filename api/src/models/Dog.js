const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id : {
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      // autoIncrement : true,
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height : {
      type : DataTypes.JSON,
      allowNull: false
    },
    weight : {
      type : DataTypes.JSON,
      allowNull: false
    },
    life_span : {
      type : DataTypes.STRING,
      allowNull: true
    },
    image : {
      type : DataTypes.JSON,
      allowNull: true
    },
  },
  {
    timestamps : false,
  });
};
