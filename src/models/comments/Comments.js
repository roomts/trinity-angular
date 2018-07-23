module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    'Comments', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }
  )
  Comments.associate = (models) => {
    Comments.belongsTo(models.Posts)
  }
  return Comments

}
