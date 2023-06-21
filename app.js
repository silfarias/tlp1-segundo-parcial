// Imports
const cors = require('cors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(helmet());
app.use(cors())
app.use(morgan('tiny'));
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
//app.listen(45635, () => console.log('Server on port xxxx'));

// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404).send('Error 404: Page not found');
});
  
// Iniciar el servidor
const port = 45635;
app.listen(port, () => console.log(`Server on port ${port}`));