const { sequelize, DataTypes, Model } = require('../database');

const Reserva = sequelize.define('reservas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_persona: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_reserva: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

Reserva.sync();

module.exports = Reserva;
