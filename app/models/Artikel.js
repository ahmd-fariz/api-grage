const Sequelize = require("../configs/database");

module.exports = (sequelize, Sequelize) => {
  const Artikel = sequelize.define("artikel", {
    judul_artikel: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    admin_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    deskripsi_artikel: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    tgl_posting: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    foto_artikel: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    url_foto_artikel: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
  Artikel.associate = (models) => {
    Artikel.belongsTo(models.administrators, {
      foreignKey: "admin_id",
      as: "administrators",
    });
  };

  return Artikel;
};
