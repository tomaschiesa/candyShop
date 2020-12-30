module.exports = (sequelize, dataTypes) => {
  const alias = 'MoneyPublish';
  const cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
      unique: true
    }
  };
  let config = {
    tableName: 'moneys_publish',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const MoneyPublish = sequelize.define(alias, cols, config);  

  MoneyPublish.associate = function(models) {
    MoneyPublish.hasMany(models.Prod, {
        as: 'Prod',
        foreignKey: 'publish_money_id'
    })
};

  return MoneyPublish;
}