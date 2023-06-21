// TODO: Crear modelo de datos de Reserva
const { Sequelize, DataTypes } = require('../database');

const reservas = sequelize.define('reservas', {
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

// Crear tabla si no existe
reservas.sync();

module.exports = reservas;