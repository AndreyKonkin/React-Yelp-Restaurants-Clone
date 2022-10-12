const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cafe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comments }) {
      // define association here
      this.hasMany(Comments, { foreignKey: 'cafeid' });
    }
  }
  Cafe.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT,
    grade: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cafe',
  });
  return Cafe;
};
