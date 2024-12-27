module.exports = (sequelize, Sequelize) => {
  const Administrators = sequelize.define("administrators", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    role: {
      // affiliate = admin gmt
      // merchant = admin izinaja
      type: Sequelize.ENUM("affiliate", "merchant"),
    },
  });

  Administrators.associate = (models) => {
    Administrators.hasMany(models.artikel, {
      foreignKey: "admin_id",
      as: "Artikel",
    });
  };

  return Administrators;
};
