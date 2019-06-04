



module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
      
      
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Burger;
};








