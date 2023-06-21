
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

const Reserva = require('../models/Reserva');

const reservaController = {};

// Obtener todas las reservas
reservaController.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener las reservas' });
  }
};

// Obtener una reserva por ID
reservaController.obtenerReserva = async (req, res) => {
  const { id } = req.params;
  try {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) {
      return res.status(404).json({ mensaje: 'No se encontró la reserva' });
    }
    res.json(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener la reserva' });
  }
};

// Crear una reserva
reservaController.crearReserva = async (req, res) => {
  const { nombre_persona, codigo, fecha_reserva } = req.body;
  try {
    const reserva = await Reserva.create({ nombre_persona, codigo, fecha_reserva });
    res.json(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al crear la reserva' });
  }
};

// Actualizar una reserva
reservaController.actualizarReserva = async (req, res) => {
  const { id } = req.params;
  const { nombre_persona, codigo, fecha_reserva } = req.body;
  try {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) {
      return res.status(404).json({ mensaje: 'No se encontró la reserva' });
    }
    reserva.nombre_persona = nombre_persona;
    reserva.codigo = codigo;
    reserva.fecha_reserva = fecha_reserva;
    await reserva.save();
    res.json(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al actualizar la reserva' });
  }
};

// Eliminar una reserva de forma lógica
reservaController.eliminarReserva = async (req, res) => {
  const { id } = req.params;
  try {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) {
      return res.status(404).json({ mensaje: 'No se encontró la reserva' });
    }
    await reserva.destroy();
    res.json({ mensaje: 'Reserva eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al eliminar la reserva' });
  }
};

module.exports = reservaController;