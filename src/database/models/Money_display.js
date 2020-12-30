module.exports = (sequelize, dataTypes) => {
  const alias = 'MoneyDisplay';
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
    tableName: 'moneys_display',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const MoneyDisplay = sequelize.define(alias, cols, config);  

  MoneyDisplay.associate = function(models) {
    MoneyDisplay.hasMany(models.Prod, {
      as: 'Prod',
      foreignKey: 'display_money_id'
    })
};

  return MoneyDisplay;
}