// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const router = require('express').Router();
const reservaController = require('../controllers/reservaController');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', reservaController.obtenerReservasVista);

// Formulario para crear una reserva
router.get('/crear', reservaController.mostrarFormularioCrearReserva);

// Formulario para actualizar una reserva
router.get('/editar/:id', reservaController.mostrarFormularioActualizarReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas', reservaController.obtenerReservas);

// Crear una reserva
router.post('/api/reservas', reservaController.crearReserva);

// Actualizar una reserva
router.put('/api/reservas/:id', reservaController.actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/reservas/:id', reservaController.eliminarReserva);

module.exports = router;
