// TODO: Crear modelo de datos de Reserva
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('reservadb', 'silvanaf', '246344', {
    host: "localhost",
    dialect: "mysql"
})

const reservasModel = sequelize.define('reservas', {
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

    (async () => {
        try {
          await sequelize.authenticate();
          console.log('CONEXIÓN A LA BASE DE DATOS EXITOSA');
        } catch (error) {
          console.error('ERROR AL CONECTAR LA BASE DE DATOS:', error);
        }
      })();

module.exports = {
    sequelize,
    reservasModel
};