const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Cafe }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userid' });
      this.belongsTo(Cafe, { foreignKey: 'cafeid' });
    }
  }
  Comments.init({
    title: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    imgComment: DataTypes.TEXT,
    cafeid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};
