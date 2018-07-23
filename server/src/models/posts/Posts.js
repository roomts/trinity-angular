
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define(
      'Posts', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        text: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      }
    )
  
    return Posts
  }